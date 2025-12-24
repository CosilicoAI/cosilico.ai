# Database/API Architecture Decision

Applying the farness framework to choose Cosilico's infrastructure stack.

## Critical Insight: DSL Compiles to JavaScript

The Cosilico DSL is designed for multi-target compilation:

```
.cosilico files → Parser → IR → Optimizer → Code Generator → Target
                                                              ├── Python (NumPy)
                                                              ├── JavaScript (TypedArrays)
                                                              ├── WASM (native)
                                                              ├── SQL (CTEs)
                                                              └── Spark (PySpark)
```

The DSL is:
- **Pure** - No side effects, no I/O
- **Terminating** - No unbounded recursion
- **Sandboxed** - No filesystem/network access
- **Explicit dependencies** - All captured at compile time

**This means the Rules API can run on Cloudflare Workers with compiled JavaScript—no Python on the hot path.**

---

## KPIs

| KPI | Description | Weight |
|-----|-------------|--------|
| **TCO** | Total cost at 1M API calls/month | 20% |
| **P99 Latency** | 99th percentile response time | 20% |
| **Availability** | Expected uptime | 15% |
| **Time to Ship** | Days to production | 15% |
| **Migration Risk** | Effort to switch vendors | 10% |
| **Scalability** | Headroom before re-architecture | 10% |
| **API Coherence** | Single auth, unified metering, consistent errors | 10% |

---

## Product → Compute Profile Mapping

| API | Compute Needs | Can Run on Edge (JS)? |
|-----|--------------|----------------------|
| **Rules** | CPU-bound calculation | ✅ Yes (compiled JS) |
| **Law Archive** | Read-heavy, cacheable | ✅ Yes (D1 + Workers) |
| **Predictions** | ML inference (GPU) | ❌ No (need Python) |
| **Simulations** | Batch compute (100M+ records) | ❌ No (need Python/Spark) |
| **Data Downloads** | Blob storage | ✅ Yes (R2) |

**Key insight**: 80% of API traffic (Rules + Law Archive) can run entirely on edge. Only ML inference and batch simulations need Python backends.

---

## Options Analysis

### Option A: Cloudflare-centric (Workers + D1 + R2)

**Description:** Rules API runs as compiled JS on Workers. D1 for structured data. R2 for blobs. Modal/Fly.io for GPU compute only.

**Forecasts:**

| KPI | Point Estimate | 80% CI | Reasoning |
|-----|---------------|--------|-----------|
| TCO ($/mo at 1M calls) | $100 | ($50, $200) | Workers $5/mo + usage. D1 free tier. Modal only for predictions (pay-per-use). |
| P99 Latency (ms) | 15 | (8, 30) | Edge execution for Rules + Law Archive. No cold starts. |
| Availability (%) | 99.95 | (99.9, 99.99) | Cloudflare is extremely reliable. D1 is newer but improving. |
| Time to Ship (days) | 21 | (14, 35) | Already using Workers for Law Archive. JS generator is Phase 3 in roadmap. |
| Migration Risk (person-weeks) | 5 | (3, 10) | Workers API is proprietary. D1 is SQLite-compatible. |
| Scalability (req/s) | 100,000 | (50,000, 500,000) | Workers designed for massive scale. D1 is the bottleneck. |
| API Coherence | 8/10 | (6, 9) | Single domain, but auth is DIY (no built-in solution). |

**Pros:**
- 15ms P99 latency (edge execution)
- No Python runtime on hot path
- Already using for Law Archive
- R2 has zero egress fees
- Scales to 100k+ req/s

**Cons:**
- Auth is DIY (Workers KV + JWT)
- D1 still maturing (GA late 2023)
- Need separate compute tier for predictions
- Metering/billing must be built

---

### Option B: Supabase-centric (PostgreSQL + Edge Functions)

**Description:** Supabase for auth/users/metering. Edge Functions proxy to compute backends. Rules API runs on Modal (Python) or separate Workers.

**Forecasts:**

| KPI | Point Estimate | 80% CI | Reasoning |
|-----|---------------|--------|-----------|
| TCO ($/mo at 1M calls) | $150 | ($75, $300) | Supabase Pro $25/mo + compute costs for Rules API (can't run on Edge Functions as easily). |
| P99 Latency (ms) | 80 | (50, 150) | Edge Functions are Deno, not as optimized as Workers. If Rules runs on external compute, add network hop. |
| Availability (%) | 99.9 | (99.5, 99.95) | Postgres is solid. Edge Functions less battle-tested. |
| Time to Ship (days) | 14 | (7, 28) | Auth, DB, APIs integrated. Fastest to prototype. |
| Migration Risk (person-weeks) | 2 | (1, 4) | Standard PostgreSQL. Highly portable. |
| Scalability (req/s) | 10,000 | (5,000, 25,000) | PostgreSQL connection pooling is the limit. |
| API Coherence | 9/10 | (8, 10) | Built-in auth, RLS, unified SDK. Best DX. |

**Pros:**
- Best developer experience
- Auth + API keys built-in
- Row-level security for multi-tenancy
- PostgreSQL is durable and portable

**Cons:**
- Edge Functions can't run compiled JS rules efficiently
- Higher latency than pure Workers
- Lower scale ceiling
- Need to proxy Rules API elsewhere anyway

---

### Option C: Hybrid (Cloudflare Edge + Supabase Auth/Data)

**Description:** Best of both worlds. Cloudflare Workers for Rules + Law Archive (compiled JS). Supabase for auth, user data, metering. Modal for GPU compute.

**Forecasts:**

| KPI | Point Estimate | 80% CI | Reasoning |
|-----|---------------|--------|-----------|
| TCO ($/mo at 1M calls) | $125 | ($60, $250) | Workers for hot path (cheap at scale). Supabase Pro for auth/data. Modal pay-per-use. |
| P99 Latency (ms) | 20 | (10, 40) | Edge for Rules. Auth check via Supabase JWT verification (fast, cached). |
| Availability (%) | 99.9 | (99.8, 99.95) | Two vendors = two failure modes. But both are solid. |
| Time to Ship (days) | 28 | (18, 45) | Integration work between systems. Auth flow needs design. |
| Migration Risk (person-weeks) | 3 | (2, 6) | PostgreSQL portable. Workers less so. |
| Scalability (req/s) | 100,000 | (50,000, 500,000) | Workers for hot path scales excellently. Supabase only for auth checks. |
| API Coherence | 8/10 | (7, 9) | Single domain via Workers gateway. Supabase auth behind the scenes. |

**Pros:**
- 20ms latency (edge execution)
- 100k+ req/s scale
- Supabase auth (don't build your own)
- PostgreSQL for user data (durable)
- R2 for microdata exports

**Cons:**
- Two vendors to manage
- Integration complexity
- Auth token verification on every request (but fast)

---

### Option G: AWS (RDS + Lambda + S3)

**Description:** Full AWS stack. RDS PostgreSQL, Lambda for compute, S3 for storage, Cognito for auth.

**Forecasts:**

| KPI | Point Estimate | 80% CI | Reasoning |
|-----|---------------|--------|-----------|
| TCO ($/mo at 1M calls) | $400 | ($200, $800) | RDS minimum ~$30/mo. Lambda adds up. S3 egress fees. AWS is expensive at low scale. |
| P99 Latency (ms) | 80 | (40, 200) | Lambda cold starts. Can use provisioned concurrency ($$$). |
| Availability (%) | 99.99 | (99.95, 99.999) | AWS SLAs are excellent. This is what you pay for. |
| Time to Ship (days) | 60 | (40, 90) | IAM, VPC, security groups, CloudFormation... significant complexity. |
| Migration Risk (person-weeks) | 2 | (1, 4) | Standard services. CloudFormation/CDK is AWS-specific. |
| Scalability (req/s) | 1,000,000+ | (500k, ∞) | Unlimited scale if you pay. AWS scales infinitely. |
| API Coherence | 7/10 | (5, 8) | Cognito is clunky. API Gateway works but complex. |

**Pros:**
- Infinite scale
- Enterprise compliance (FedRAMP, SOC2, HIPAA)
- Battle-tested (S3 = 11 9s durability)
- Massive ecosystem

**Cons:**
- Expensive at low scale
- Slow to ship (complexity tax)
- Requires dedicated ops knowledge
- Bill shock risk

**When to choose AWS**: >1M req/day, enterprise customers requiring compliance, or when you can afford dedicated infrastructure team.

---

## Comparison Matrix

| Option | TCO | P99 Latency | Availability | Ship Time | Migration | Scale | Coherence | **Score** |
|--------|-----|-------------|--------------|-----------|-----------|-------|-----------|-----------|
| A: Cloudflare | $100 | 15ms | 99.95% | 21d | 5 wks | 100k | 8 | **7.8** |
| B: Supabase | $150 | 80ms | 99.9% | 14d | 2 wks | 10k | 9 | **6.9** |
| C: Hybrid | $125 | 20ms | 99.9% | 28d | 3 wks | 100k | 8 | **7.6** |
| G: AWS | $400 | 80ms | 99.99% | 60d | 2 wks | 1M+ | 7 | **5.8** |

---

## Recommendation

**Primary: Option A (Cloudflare-centric)** with **Supabase for auth** (simplified hybrid)

### Why Cloudflare Wins

The DSL compiling to JavaScript is the key insight. This means:

1. **Rules API runs on Workers** - 15ms P99, no cold starts, 100k+ req/s
2. **Law Archive stays on Workers/D1** - Already working, don't touch it
3. **No Python on hot path** - Massive cost and latency win

The only missing piece is auth. Solution: Use Supabase Auth (free tier generous) to issue JWTs, verify on Workers edge.

### Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLOUDFLARE EDGE                              │
│                     api.cosilico.ai/*                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Workers Gateway                                           │ │
│  │  - JWT verification (Supabase-issued)                     │ │
│  │  - Rate limiting (KV)                                     │ │
│  │  - Usage metering (async to D1)                           │ │
│  │  - Routing                                                 │ │
│  └────────────────────────────────────────────────────────────┘ │
│            │              │              │              │        │
│            ▼              ▼              ▼              ▼        │
│     ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│     │ /rules   │  │ /law     │  │ /data    │  │ /predict │     │
│     │          │  │          │  │          │  │          │     │
│     │ Compiled │  │ D1       │  │ R2       │  │ Proxy to │     │
│     │ JS       │  │ (SQLite) │  │ (blobs)  │  │ Modal    │     │
│     │ (edge)   │  │ (edge)   │  │ (edge)   │  │ (GPU)    │     │
│     └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
└─────────────────────────────────────────────────────────────────┘
                                                       │
┌─────────────────────────────────────────────────────────────────┐
│                     SUPABASE (Auth + User Data)                  │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ Auth        │  │ PostgreSQL  │  │ Dashboard   │             │
│  │ - API keys  │  │ - users     │  │ - usage     │             │
│  │ - OAuth     │  │ - orgs      │  │ - billing   │             │
│  │ - JWT issue │  │ - plans     │  │             │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                                                       │
┌─────────────────────────────────────────────────────────────────┐
│                     MODAL (GPU Compute)                          │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │ Predictions │  │ Simulations │                               │
│  │ ML inference│  │ Batch jobs  │                               │
│  │ Python      │  │ Python/Spark│                               │
│  └─────────────┘  └─────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Request arrives** at api.cosilico.ai
2. **Workers Gateway** verifies JWT (Supabase-issued, cached public key)
3. **Rate limiting** checked against KV (per-user limits)
4. **Route** to appropriate backend:
   - `/rules/*` → Execute compiled JS on Workers (edge)
   - `/law/*` → Query D1 (edge)
   - `/data/*` → Serve from R2 (edge)
   - `/predict/*` → Proxy to Modal (GPU)
   - `/simulate/*` → Queue job in Modal (batch)
5. **Usage logged** async to D1 (for billing)
6. **Response** returned with consistent error format

### Why This Beats Pure Supabase

| Aspect | Supabase-only | Cloudflare + Supabase |
|--------|--------------|----------------------|
| Rules API latency | 80ms (proxy to compute) | 15ms (edge JS) |
| Scale ceiling | 10k req/s | 100k+ req/s |
| Cold starts | Yes (Edge Functions) | No (Workers always warm) |
| Auth | Built-in ✓ | Supabase JWT ✓ |
| Compute cost | Pay for Python runtime | Only pay for GPU (predictions) |

### Migration Plan

| Phase | Scope | Timeline |
|-------|-------|----------|
| **1: Auth** | Set up Supabase, API key generation, JWT issuance | Week 1-2 |
| **2: Gateway** | Workers gateway with JWT verification, routing | Week 3-4 |
| **3: Rules** | Compile DSL to JS, deploy to Workers | Week 5-8 (depends on JS generator) |
| **4: Metering** | Usage tracking in D1, billing integration | Week 9-10 |
| **5: Predictions** | Modal integration for GPU inference | Week 11-12 |

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| JS generator not ready | Use Python backend initially (Supabase Edge Functions or Modal), swap to Workers when ready |
| Cloudflare lock-in | Workers code is mostly standard JS. D1 is SQLite-compatible. R2 is S3-compatible. |
| Supabase auth changes | JWT is a standard. Can swap to Auth0, Clerk, or DIY. |
| Scale beyond Workers | Unlikely. If hit, evaluate Fastly or full AWS migration. |

### When to Reconsider

- **Enterprise customers require AWS** → Add AWS deployment option
- **>1M req/day sustained** → Evaluate cost vs. self-hosted
- **Complex auth requirements** → Consider Auth0 or Clerk
- **D1 limitations hit** → Migrate structured data to Supabase PostgreSQL

---

## Summary

The DSL compiling to JavaScript unlocks Cloudflare-centric architecture:

- **Rules API**: Compiled JS on Workers (15ms P99, 100k+ req/s)
- **Law Archive**: Already on D1/Workers (keep it)
- **Auth**: Supabase (don't reinvent)
- **User data**: Supabase PostgreSQL (durable, portable)
- **Predictions**: Modal (GPU, pay-per-use)
- **Simulations**: Modal (batch, Python/Spark)

Cost-effective, performant, durable. Migrate to AWS only when enterprise compliance requires it.

---

## 2025 Review (December)

This section validates the original decision against current market landscape and platform updates.

### Platform Updates Since Original Decision

#### Cloudflare D1
- **Now GA** (was beta) with production SLAs
- 10GB per-database limit (unchanged) - designed for horizontal scale-out
- Read replicas now in public beta for lower latency
- GDPR jurisdiction support added (Nov 2025)
- Free tier limits enforced from Feb 2025

#### Cloudflare Workers
- Still best-in-class cold starts (~2ms vs Deno Deploy ~20ms, Vercel Edge ~30ms)
- 128MB memory limit unchanged - sufficient for compiled JS rules
- `@modal.web_endpoint` renamed to `@modal.fastapi_endpoint`

#### Supabase
- Auth pricing unchanged: 100K MAU for $25/mo (vs Clerk ~$250/mo)
- Still the best value for auth + PostgreSQL bundle

#### Modal
- Cold starts: 2-4 seconds (acceptable for GPU workloads)
- Python DX remains best-in-class
- Competitor RunPod has faster cold starts (<200ms) but more hands-on

### Alternatives Evaluated

#### Edge Compute Alternatives

| Platform | Cold Start | Trade-off |
|----------|-----------|-----------|
| **Cloudflare Workers** ✅ | ~2ms | Best for our use case |
| Deno Deploy | ~20ms | Faster git deploys, TypeScript-native |
| Fastly Compute | ~5ms | Better for Rust/WASM heavy workloads |
| Vercel Edge | ~30ms | Optimized for Next.js |

**Verdict**: Workers remains correct choice. 0ms cold starts critical for Rules API.

#### Auth Alternatives

| Provider | 100K MAU | Trade-off |
|----------|----------|-----------|
| **Supabase** ✅ | $25/mo | Best value, includes PostgreSQL |
| Clerk | ~$250/mo | Better DX, pre-built components |
| Firebase | ~$0 | Google lock-in, mobile-first |
| Auth0 | ~$500/mo | Enterprise features |

**Verdict**: Supabase remains correct. Clerk is 10x more expensive for marginal DX gains.

#### GPU Compute Alternatives

| Platform | Cold Start | Trade-off |
|----------|-----------|-----------|
| **Modal** ✅ | 2-4s | Best Python DX |
| RunPod | <200ms (48%) | Cheaper, more hands-on |
| Replicate | 60s+ | Easiest for pre-built models |
| Baseten | ~3s | Enterprise hybrid cloud |

**Verdict**: Modal correct for current stage. Consider RunPod if GPU costs become significant.

#### Database Alternatives

| Platform | Type | Trade-off |
|----------|------|-----------|
| **D1 + Supabase** ✅ | SQLite + PostgreSQL | Current choice |
| Neon | Serverless Postgres | Scale-to-zero, branching (acquired by Databricks May 2025) |
| Turso | Edge SQLite | Multi-tenant ($4.99/mo unlimited DBs) |
| PlanetScale | MySQL | Write-heavy, no foreign keys |

**Verdict**: Keep current split. D1 for edge (Law Archive), Supabase for user data. Neon is interesting but adds complexity.

#### Backend Alternatives (Not GPU)

| Platform | When to Consider |
|----------|-----------------|
| Fly.io | Need full Docker, global sockets, managed Postgres |
| Railway | Faster iteration for non-GPU Python |
| Render | Simple managed Postgres + cron jobs |

**Verdict**: Not needed. Modal + Cloudflare covers current requirements.

### New Recommendation: LLM Inference Arbitrage

For any LLM-based features, **do not self-host on Modal**. Use inference APIs:

| Provider | Strength | Llama 70B Price |
|----------|----------|-----------------|
| Groq | Ultra-low latency (241 tok/s) | Competitive |
| Together AI | Model variety, 11x cheaper than GPT-4 | ~$0.88/M tokens |
| Fireworks AI | Optimized for agents, structured output | ~$0.90/M tokens |

**Key insight**: "Do not marry a provider. They are commodities. Architect for inference arbitrage."

### Updated Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLOUDFLARE EDGE                              │
│                     api.cosilico.ai/*                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Workers Gateway                                           │ │
│  │  - JWT verification (Supabase-issued)                     │ │
│  │  - Rate limiting (KV)                                     │ │
│  │  - Usage metering (async to D1)                           │ │
│  │  - Routing                                                 │ │
│  └────────────────────────────────────────────────────────────┘ │
│            │              │              │              │        │
│            ▼              ▼              ▼              ▼        │
│     ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│     │ /rules   │  │ /law     │  │ /data    │  │ /predict │     │
│     │          │  │          │  │          │  │          │     │
│     │ Compiled │  │ D1       │  │ R2       │  │ Proxy to │     │
│     │ JS       │  │ (SQLite) │  │ (blobs)  │  │ Modal    │     │
│     │ (edge)   │  │ (edge)   │  │ (edge)   │  │ (GPU)    │     │
│     └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
└─────────────────────────────────────────────────────────────────┘
                                                       │
┌─────────────────────────────────────────────────────────────────┐
│                     SUPABASE (Auth + User Data)                  │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ Auth        │  │ PostgreSQL  │  │ Dashboard   │             │
│  │ - API keys  │  │ - users     │  │ - usage     │             │
│  │ - OAuth     │  │ - orgs      │  │ - billing   │             │
│  │ - JWT issue │  │ - plans     │  │             │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                                                       │
┌─────────────────────────────────────────────────────────────────┐
│                     MODAL (GPU Compute)                          │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │ Predictions │  │ Simulations │                               │
│  │ PolicyEngine│  │ Batch jobs  │                               │
│  │ Python      │  │ Python/Spark│                               │
│  └─────────────┘  └─────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
                                                       │
┌─────────────────────────────────────────────────────────────────┐
│                     LLM INFERENCE (API Layer)                    │
│                     (if/when needed)                             │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ Groq        │  │ Together AI │  │ Fireworks   │             │
│  │ (latency)   │  │ (variety)   │  │ (agents)    │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
│                                                                  │
│  Route dynamically based on latency/cost/availability            │
└─────────────────────────────────────────────────────────────────┘
```

### Cost Estimate (1M API calls/month)

| Service | Cost | Notes |
|---------|------|-------|
| Cloudflare Workers | $5-20 | Mostly free tier |
| Cloudflare D1 | $0-5 | Free tier generous |
| Cloudflare R2 | $0-10 | Zero egress |
| Supabase Pro | $25 | Auth + PostgreSQL |
| Modal | $20-100 | Pay-per-use GPU |
| **Total** | **$50-160/mo** | |

### Conclusion

**No changes to core architecture.** The original decision holds up well:

1. ✅ **Cloudflare Workers** - Still best for edge JS execution
2. ✅ **Cloudflare D1** - Now GA, production-ready
3. ✅ **Supabase Auth** - Still best value at scale
4. ✅ **Modal** - Still best Python DX for GPU compute

**One addition**: For LLM features, use inference APIs (Groq/Together/Fireworks) rather than self-hosting.

### Sources

- [Cloudflare D1 Limits](https://developers.cloudflare.com/d1/platform/limits/)
- [Serverless GPU Comparison (RunPod)](https://www.runpod.io/articles/guides/top-serverless-gpu-clouds)
- [Auth Pricing Comparison](https://www.getmonetizely.com/articles/clerk-vs-supabase-auth-how-to-choose-the-right-authentication-service-for-your-budget)
- [Serverless Database Comparison](https://markaicode.com/serverless-databases-2025-comparison/)
- [LLM Inference Arbitrage](https://blog.gopenai.com/the-token-arbitrage-groq-vs-deepinfra-vs-cerebras-vs-fireworks-vs-hyperbolic-2025-benchmark-ccd3c2720cc8)
- [Edge Platform Comparison](https://northflank.com/blog/best-cloudflare-workers-alternatives)
