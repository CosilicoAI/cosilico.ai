const apis = [
  {
    name: "Rules",
    description:
      "Calculate taxes and benefits for any household. Every formula traced to statute.",
    code: "cosilico.calculate(household)",
    accent: "var(--color-cyan)",
  },
  {
    name: "Data",
    description:
      "Synthetic populations calibrated to reality. Predict attributes you don't observe.",
    code: "cosilico.predict(partial_household)",
    accent: "var(--color-green)",
  },
  {
    name: "Scenarios",
    description:
      "Run policy reforms at population scale. Distributional impacts in seconds.",
    code: "cosilico.simulate(reform, population)",
    accent: "var(--color-amber)",
  },
  {
    name: "Full profile",
    description:
      "Partial household in, complete financial profile out. Predictions plus calculations combined.",
    code: "cosilico.profile(partial_household)",
    accent: "var(--color-cyan-bright)",
  },
  {
    name: "Law archive",
    description:
      "Structured US statute text with historical versions. All 54 titles of the US Code.",
    code: 'cosilico.statute("26/32")',
    accent: "var(--color-coral)",
  },
];

export function APIs() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <p className="eyebrow mb-4">Platform</p>
          <h2 className="heading-section mb-6">
            Five APIs.{" "}
            <span className="italic text-secondary">One simulation.</span>
          </h2>
        </div>

        {/* API cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apis.map((api) => (
            <div
              key={api.name}
              className="card card-hover group relative overflow-hidden p-6 transition-all duration-300"
              style={{ "--card-accent": api.accent } as React.CSSProperties}
            >
              {/* Accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${api.accent}, transparent)`,
                }}
              />

              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ background: api.accent }}
                />
                <h3 className="font-mono text-sm tracking-wide">
                  {api.name}
                </h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-secondary">
                {api.description}
              </p>

              <code
                className="block rounded-lg px-3 py-2 font-mono text-xs text-muted"
                style={{
                  background: "var(--color-elevated)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                {api.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
