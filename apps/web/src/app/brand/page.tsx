import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { brandColors, brandPrinciples } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Brand — Cosilico",
  description: "Visual and verbal system for Cosilico.",
};

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
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Brand"
          as="h1"
          title={<>Editorial systems, not generic SaaS chrome.</>}
          description="The design language should feel like a field manual for economic infrastructure: precise, atmospheric, and a little severe."
        />

        <div className="split-grid mt-8">
          <div className="panel p-6">
            <p className="section-kicker">Palette</p>
            <h2 className="panel-title">Mineral, fog, signal</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {brandColors.map((color) => (
                <div key={color.name}>
                  <div
                    className="brand-swatch"
                    style={{ background: color.value }}
                  />
                  <p className="mt-2 font-mono text-xs text-muted">
                    {color.name}
                  </p>
                  <p className="font-mono text-xs text-muted">{color.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="section-kicker">Principles</p>
            <h2 className="panel-title">Rules for the visual system</h2>
            <div className="rail-list">
              {brandPrinciples.map((item) => (
                <div key={item} className="rail-item">
                  <p className="rail-copy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel p-6">
          <p className="section-kicker">Typography</p>
          <h2 className="panel-title">Display, body, code</h2>
          <div className="space-y-6 mt-6">
            {typefaces.map((typeface) => (
              <div key={typeface.label}>
                <p className="font-mono mb-2 text-xs text-muted">
                  {typeface.label}
                </p>
                <p
                  className={typeface.sampleClass}
                  style={{ fontFamily: typeface.family }}
                >
                  {typeface.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
