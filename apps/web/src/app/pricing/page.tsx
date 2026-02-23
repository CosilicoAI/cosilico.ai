import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Cosilico",
  description: "Open source infrastructure. Pay for compute.",
};

const apis = [
  {
    endpoint: "/calculate",
    price: "$0.02",
    unit: "per household",
    description:
      "Federal + state income taxes, 100+ benefit programs, marginal rates, audit trail",
  },
  {
    endpoint: "/rules",
    price: "$0.001",
    unit: "base per query",
    description:
      "Full US Code, historical versions, state codes (CA, NY, TX+). Scales with response size",
  },
  {
    endpoint: "/microsim",
    price: "$0.50",
    unit: "per 1K records",
    description:
      "Population-scale simulation, custom reforms, distributional breakdowns, budget scoring",
  },
  {
    endpoint: "/impute",
    price: "$0.10",
    unit: "per 1K records",
    description:
      "Complete partial records, county-level calibration, real-time economic signals, probability distributions",
  },
];

const dataSources = [
  {
    host: "arch.cosilico.ai",
    label: "Structured statute archive",
  },
  {
    host: "microplex.cosilico.ai",
    label: "Synthetic microdata, daily updates",
  },
];

export default function PricingPage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow mb-4">Pricing</p>
        <h1 className="heading-page mb-4">
          Open source infrastructure.{" "}
          <span className="italic text-secondary">Pay for compute.</span>
        </h1>
        <p className="mb-16 text-lg text-secondary">
          Everything is open source. You pay for the infrastructure, API
          convenience, fresh data, and serious compute.{" "}
          <span className="text-cyan">$5 free credits to start.</span>
        </p>

        {/* API pricing table */}
        <div className="mb-16 space-y-3">
          {apis.map((api) => (
            <div
              key={api.endpoint}
              className="card card-hover flex flex-col gap-4 p-6 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <div className="mb-2">
                  <code className="font-mono text-sm text-cyan">
                    {api.endpoint}
                  </code>
                </div>
                <p className="text-sm text-muted">{api.description}</p>
              </div>
              <div className="shrink-0 text-right">
                <span className="font-display text-2xl">
                  {api.price}
                </span>
                <span className="ml-1.5 font-mono text-xs text-muted">
                  {api.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Free data */}
        <div className="card-elevated p-8">
          <h2 className="heading-md mb-4">
            Data: <span style={{ color: "var(--color-green)" }}>free</span>
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-secondary">
            All data is freely available via R2. Full version history. Clone
            and host yourself.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {dataSources.map((src) => (
              <div
                key={src.host}
                className="card rounded-lg px-4 py-3"
              >
                <code className="font-mono text-xs text-muted">
                  {src.host}
                </code>
                <p className="mt-1 text-sm text-secondary">{src.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
