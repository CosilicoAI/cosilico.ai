import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack — Cosilico",
  description:
    "Open-source tools for building tax and benefit microsimulation systems.",
};

const components = [
  {
    name: "arch",
    status: "IN DEV",
    statusColor: "var(--color-amber)",
    description:
      "Raw microdata archive and calibration targets database. CPS, ACS, SCF, PUF sources plus admin aggregates.",
    tags: ["Microdata", "Calibration targets", "Provenance", "Multi-source"],
  },
  {
    name: "microplex",
    status: "LIVE",
    statusColor: "var(--color-green)",
    install: "pip install microplex",
    description:
      "Microdata synthesis and reweighting using normalizing flows. Generate billions of synthetic households.",
    tags: [
      "Normalizing flows",
      "Zero-inflation",
      "L0 reweighting",
      "Multi-source",
    ],
  },
  {
    name: "py-statmatch",
    status: "LIVE",
    statusColor: "var(--color-green)",
    install: "pip install py-statmatch",
    description:
      "Statistical matching and data fusion using hot deck imputation.",
    tags: ["NND hot deck", "Gower distance", "Frechet bounds", "R parity"],
  },
  {
    name: "fusiongan",
    status: "RESEARCH",
    statusColor: "var(--color-text-muted)",
    description:
      "Generative model for synthetic microdata using adversarial training.",
    tags: ["GAN", "Multi-source", "Privacy-preserving"],
  },
  {
    name: "popdgp",
    status: "RESEARCH",
    statusColor: "var(--color-text-muted)",
    description:
      "Population dynamic graphical models. Learn joint distributions from multiple partial surveys.",
    tags: ["QRF", "Zero-inflated", "Conditional factorization"],
  },
  {
    name: "statute-graph",
    status: "LIVE",
    statusColor: "var(--color-green)",
    description:
      "Graph analysis of tax code dependencies. Identifies optimal encoding sequence from cross-references.",
    tags: ["NetworkX", "Dependency graph", "Encoding planning"],
  },
];

export default function StackPage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">Infrastructure</p>
        <h1 className="heading-page mb-4">
          The Cosilico <span className="italic text-secondary">stack.</span>
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-secondary">
          Open-source tools for building tax and benefit microsimulation
          systems. From encoded law to calibrated populations.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.map((comp) => (
            <div
              key={comp.name}
              className="card card-hover group relative overflow-hidden p-6 transition-all duration-200"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-sm">{comp.name}</h3>
                <span
                  className="font-mono rounded-full px-2 py-0.5 text-[10px] tracking-wider uppercase"
                  style={{
                    color: comp.statusColor,
                    border: `1px solid ${comp.statusColor}33`,
                  }}
                >
                  {comp.status}
                </span>
              </div>

              {comp.install && (
                <code
                  className="mb-3 block rounded-md px-2.5 py-1.5 font-mono text-xs"
                  style={{
                    background: "var(--color-elevated)",
                    color: "var(--color-cyan-dim)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  {comp.install}
                </code>
              )}

              <p className="mb-4 text-sm leading-relaxed text-secondary">
                {comp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {comp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono rounded-md px-2 py-0.5 text-[10px] text-muted"
                    style={{ background: "var(--color-elevated)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
