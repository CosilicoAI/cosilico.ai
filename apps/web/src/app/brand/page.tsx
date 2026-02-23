import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand — Cosilico",
  description: "Cosilico brand guidelines, design system, and assets.",
};

const colors = [
  { name: "Void", value: "#030306" },
  { name: "Background", value: "#07070b" },
  { name: "Card", value: "#11111a" },
  { name: "Surface", value: "#191924" },
  { name: "Cyan", value: "#00d4ff" },
  { name: "Cyan bright", value: "#40e8ff" },
  { name: "Amber", value: "#ffaa00" },
  { name: "Green", value: "#00ff88" },
  { name: "Coral", value: "#ff4466" },
  { name: "Text", value: "#ededf2" },
  { name: "Text secondary", value: "#b4b4c6" },
  { name: "Text muted", value: "#6c6c84" },
];

const typefaces = [
  {
    label: "Display — Instrument Serif",
    family: "var(--f-display)",
    sample: (
      <>
        Society, <span className="italic">in silico.</span>
      </>
    ),
    sampleClass: "text-4xl",
  },
  {
    label: "Body — DM Sans",
    family: "var(--f-body)",
    sample: "We simulate the economy. Household by household. Tax by tax.",
    sampleClass: "text-base",
  },
  {
    label: "Mono — JetBrains Mono",
    family: "var(--f-mono)",
    sample: "cosilico.calculate(household)",
    sampleClass: "text-sm",
  },
];

export default function BrandPage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow mb-4">Brand</p>
        <h1 className="heading-page mb-12">
          Brand <span className="italic text-secondary">guidelines.</span>
        </h1>

        {/* Color palette */}
        <div className="mb-16">
          <h2 className="heading-md mb-6">Colors</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colors.map((c) => (
              <div key={c.name}>
                <div
                  className="mb-2 h-16 rounded-lg border"
                  style={{
                    background: c.value,
                    borderColor: "var(--color-border-subtle)",
                  }}
                />
                <p className="font-mono text-xs text-muted">{c.name}</p>
                <p className="font-mono text-xs text-muted">{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <h2 className="heading-md mb-6">Typography</h2>
          <div className="space-y-6">
            {typefaces.map((t) => (
              <div key={t.label}>
                <p className="font-mono mb-1 text-xs text-muted">
                  {t.label}
                </p>
                <p
                  className={t.sampleClass}
                  style={{ fontFamily: t.family }}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Writing */}
        <div>
          <h2 className="heading-md mb-6">Writing style</h2>
          <ul className="list-inside space-y-2 text-sm text-secondary">
            <li>Sentence case for all headings (not Title Case)</li>
            <li>Active voice, direct statements</li>
            <li>Quantitative where possible — numbers over adjectives</li>
            <li>Neutral tone — describe, don&apos;t advocate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
