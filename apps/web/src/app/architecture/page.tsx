import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture — Cosilico",
  description: "How Cosilico encodes law as code.",
};

const stages = [
  {
    name: "Syntax validation",
    desc: "DSL parses without errors. 100% parse rate required.",
    color: "var(--color-green)",
  },
  {
    name: "References validation",
    desc: "All statute paths exist. Zero dangling refs, no circular deps.",
    color: "var(--color-cyan)",
  },
  {
    name: "TDD tests",
    desc: "Hand-crafted tests from statute text. Test-first approach.",
    color: "var(--color-amber)",
  },
  {
    name: "External validation",
    desc: "Comparison with TAXSIM, PolicyEngine, and 4+ external systems.",
    color: "var(--color-coral)",
  },
];

export default function ArchitecturePage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow mb-4">Architecture</p>
        <h1 className="heading-page mb-8">
          Where law{" "}
          <span className="italic text-cyan">= code.</span>
        </h1>

        <div className="mb-16 grid gap-4 sm:grid-cols-2">
          {stages.map((v) => (
            <div key={v.name} className="card p-6">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ background: v.color }}
                />
                <h3 className="font-mono text-sm">{v.name}</h3>
              </div>
              <p className="text-sm text-secondary">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
