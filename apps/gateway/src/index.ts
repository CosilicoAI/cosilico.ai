import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
  MODAL_BASE_URL: string;
};

type DeductionResult = {
  success: boolean;
  error?: string;
  user_id?: string;
  credits_remaining?: number;
  credits_used?: number;
  credits_needed?: number;
  credits_available?: number;
};

const app = new Hono<{ Bindings: Bindings }>();

// ── Route map ──

const MODAL_BASE = "https://cosilicoai--cosilico-v1";
const MODAL_STRIPE = "https://cosilicoai--cosilico-stripe";
const MODAL_BILLING = "https://cosilicoai--cosilico-billing";

const ROUTES: Record<string, string> = {
  "/health": `${MODAL_BASE}-health.modal.run`,
  "/calculate": `${MODAL_BASE}-calculate.modal.run`,
  "/rules": `${MODAL_BASE}-rules.modal.run`,
  "/microsim": `${MODAL_BASE}-microsim.modal.run`,
  "/impute": `${MODAL_BASE}-impute.modal.run`,
  "/taxes": `${MODAL_BASE}-calculate.modal.run`,
  "/create-checkout-session": `${MODAL_STRIPE}-create-checkout-session.modal.run`,
  "/stripe-webhook": `${MODAL_STRIPE}-stripe-webhook.modal.run`,
  "/stripe-webhook-verified": `${MODAL_STRIPE}-stripe-webhook-verified.modal.run`,
  "/packages": `${MODAL_STRIPE}-packages.modal.run`,
};

const NO_CREDIT_ENDPOINTS = new Set([
  "/create-checkout-session",
  "/stripe-webhook",
  "/stripe-webhook-verified",
  "/packages",
]);

// ── Helpers ──

function extractApiKey(headers: Headers): string | null {
  const auth = headers.get("Authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  return headers.get("X-API-Key");
}

async function hashApiKey(apiKey: string): Promise<string> {
  const data = new TextEncoder().encode(apiKey);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function callSupabase(
  env: Bindings,
  fn: string,
  params: Record<string, unknown>
): Promise<unknown> {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase ${res.status}: ${text}`);
  }
  return res.json();
}

function triggerAutoReload(userId: string): void {
  fetch(`${MODAL_BILLING}-auto-reload.modal.run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId }),
  }).catch(() => {});
}

/** Forward a request to a Modal upstream and return the JSON response. */
async function proxyToUpstream(
  targetUrl: string,
  method: string,
  body: string | undefined,
  extraHeaders: Record<string, string> = {}
): Promise<{ data: Record<string, unknown>; status: number }> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...extraHeaders,
  };
  const res = await fetch(targetUrl, {
    method,
    headers,
    body: method !== "GET" ? body : undefined,
  });
  const data = (await res.json()) as Record<string, unknown>;
  return { data, status: res.status };
}

// ── Middleware ──

app.use("*", cors());

// ── Public routes ──

app.get("/", (c) =>
  c.json({
    service: "Cosilico API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      calculate: "/calculate — Tax/benefit calculations ($0.02/household)",
      rules: "/rules — Statute queries ($0.001 base)",
      microsim: "/microsim — Population simulation ($0.50/1K records)",
      impute: "/impute — Record imputation ($0.10/1K records)",
      packages: "/packages",
    },
    data: {
      arch: "https://arch.cosilico.ai — Statute archive (free, R2)",
      microplex:
        "https://microplex.cosilico.ai — Synthetic microdata (free, R2)",
    },
    authentication:
      "Use Authorization: Bearer <api_key> or X-API-Key header",
    docs: "https://docs.cosilico.ai",
  })
);

app.get("/health", async (c) => {
  try {
    const { data, status } = await proxyToUpstream(ROUTES["/health"], "GET", undefined);
    return c.json(data, status as 200);
  } catch (e) {
    return c.json({ error: "Upstream error", message: String(e) }, 502);
  }
});

// ── Stripe/payment routes (no auth, no credits) ──

for (const ep of NO_CREDIT_ENDPOINTS) {
  app.all(ep, async (c) => {
    const target = new URL(ROUTES[ep]);
    target.search = new URL(c.req.url).search;

    const extraHeaders: Record<string, string> = {};
    const contentType = c.req.header("Content-Type");
    if (contentType) extraHeaders["Content-Type"] = contentType;
    const sig = c.req.header("Stripe-Signature");
    if (sig) extraHeaders["Stripe-Signature"] = sig;

    try {
      const body = c.req.method !== "GET" ? await c.req.text() : undefined;
      const { data, status } = await proxyToUpstream(
        target.toString(),
        c.req.method,
        body,
        extraHeaders
      );
      return c.json(data, status as 200);
    } catch (e) {
      return c.json({ error: "Upstream error", message: String(e) }, 502);
    }
  });
}

// ── Authenticated routes ──

app.all("*", async (c) => {
  const apiKey = extractApiKey(c.req.raw.headers);
  if (!apiKey) {
    return c.json(
      {
        error: "Unauthorized",
        message:
          "API key required. Use Authorization: Bearer <key> or X-API-Key header.",
        docs: "https://docs.cosilico.ai/authentication",
      },
      401
    );
  }

  const keyHash = await hashApiKey(apiKey);
  const requestId = crypto.randomUUID();
  const url = new URL(c.req.url);
  const path = url.pathname;

  // Validate key
  let validation: { valid: boolean; credits: number };
  try {
    validation = (await callSupabase(c.env, "validate_api_key", {
      p_api_key_hash: keyHash,
    })) as { valid: boolean; credits: number };
  } catch (e) {
    console.error("Validation error:", e);
    return c.json(
      { error: "Internal error", message: "Failed to validate API key" },
      500
    );
  }

  if (!validation.valid) {
    return c.json(
      { error: "Unauthorized", message: "Invalid API key", code: "invalid_api_key" },
      401
    );
  }

  // Find route
  const routeKey = Object.keys(ROUTES).find((r) => path.startsWith(r));
  if (!routeKey) {
    return c.json(
      { error: "Not found", available: Object.keys(ROUTES) },
      404
    );
  }

  // Deduct credits
  let deduction: DeductionResult;
  try {
    deduction = (await callSupabase(c.env, "deduct_credits", {
      p_api_key_hash: keyHash,
      p_endpoint: routeKey,
      p_request_id: requestId,
      p_metadata: {
        method: c.req.method,
        path,
        query: Object.fromEntries(url.searchParams),
      },
    })) as DeductionResult;
  } catch (e) {
    console.error("Deduction error:", e);
    return c.json(
      { error: "Internal error", message: "Failed to process credits" },
      500
    );
  }

  if (!deduction.success) {
    if (deduction.error === "insufficient_credits") {
      if (deduction.user_id) triggerAutoReload(deduction.user_id);
      return c.json(
        {
          error: "Payment Required",
          message: "Insufficient credits",
          code: "insufficient_credits",
          credits_needed: deduction.credits_needed,
          credits_available: deduction.credits_available,
          purchase_url: "https://cosilico.ai/pricing",
        },
        402
      );
    }
    return c.json(
      { error: "Unauthorized", message: deduction.error },
      401
    );
  }

  if (deduction.user_id) triggerAutoReload(deduction.user_id);

  // Proxy to Modal
  const target = new URL(ROUTES[routeKey]);
  target.search = url.search;

  try {
    const body = c.req.method !== "GET" ? await c.req.text() : undefined;
    const { data, status } = await proxyToUpstream(
      target.toString(),
      c.req.method,
      body,
      { "X-Request-ID": requestId }
    );
    c.header("X-Request-ID", requestId);
    c.header("X-Credits-Used", String(deduction.credits_used ?? 0));
    c.header("X-RateLimit-Remaining", String(deduction.credits_remaining ?? 0));
    return c.json(data, status as 200);
  } catch (e) {
    return c.json(
      { error: "Upstream error", message: String(e), request_id: requestId },
      502
    );
  }
});

export default app;
