const cases = [
  {
    sector: "Financial services",
    query: "How will rate changes affect default risk across our portfolio?",
  },
  {
    sector: "Government agencies",
    query: "What's the 10-year cost of this bill?",
  },
  {
    sector: "Asset managers",
    query: "Which sectors win under each candidate's tax plan?",
  },
  {
    sector: "AI agents",
    query: "Calculate this household's benefits eligibility.",
  },
  {
    sector: "Retailers",
    query: "How does SNAP expansion affect grocery spend by region?",
  },
  {
    sector: "Researchers",
    query: "Model the distributional impact of UBI.",
  },
];

export function UseCases() {
  return (
    <section className="relative z-10 py-32">
      <div className="glow-line mx-auto max-w-6xl mb-32" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">Use cases</p>
          <h2 className="heading-section">
            Who queries{" "}
            <span className="italic text-secondary">the simulation?</span>
          </h2>
        </div>

        <div className="grid-divider grid gap-px md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.sector}
              className="p-8 transition-colors duration-200 hover:bg-[var(--color-surface)]"
            >
              <p className="eyebrow mb-3"  style={{ color: "var(--color-text-muted)" }}>
                {c.sector}
              </p>
              <p className="font-display text-base italic leading-relaxed text-secondary">
                &ldquo;{c.query}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
