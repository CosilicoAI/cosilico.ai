import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thesis — Cosilico",
  description: "Research prospectus: Society, in silico.",
};

const sections = [
  {
    title: "The problem",
    body: "Closed, aggregate, unvalidated models drive the financial decisions that affect every household. The Congressional Budget Office scores trillion-dollar bills with models no one outside can inspect. Financial institutions price risk using proprietary simulations they can\u2019t share. Researchers publish with data they can\u2019t replicate.",
    body2:
      "The result: society-wide miscoordination. Not because people disagree on values, but because they can\u2019t agree on facts.",
  },
  {
    title: "The gap",
    body: "There is no open alternative for economy-wide, household-level simulation of tax and benefit policy. Existing tools are either aggregate (CBO), closed-source (proprietary), or narrowly scoped (individual calculators). No system combines validated statute encoding, synthetic microdata, and population-scale simulation in an open, queryable platform.",
  },
  {
    title: "Our approach",
    body: "Cosilico builds the shared substrate: open-source statute encodings validated against multiple external systems, synthetic populations calibrated to reality, and APIs that make the whole simulation queryable. We encode law as code \u2014 every formula traced to its statutory source \u2014 and build commercial APIs on top of the open infrastructure.",
  },
  {
    title: "AI-assisted encoding",
    body: "We use AI to accelerate statute encoding, with a multi-stage validation pipeline: syntax validation, reference checking, test-driven development against statute text, and external validation against TAXSIM, PolicyEngine, and other systems. The AI proposes, the pipeline validates.",
  },
];

export default function ThesisPage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow mb-4">Research prospectus</p>
        <h1 className="heading-page mb-8">
          Society, <span className="italic text-cyan">in silico.</span>
        </h1>
        <p className="mb-16 text-lg leading-relaxed text-secondary">
          Every claim in this document is corroborated with a primary source.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mb-16">
            <h2 className="heading-sub mb-6">{section.title}</h2>
            <div className="space-y-4">
              <p className="leading-relaxed text-secondary">{section.body}</p>
              {section.body2 && (
                <p className="leading-relaxed text-secondary">
                  {section.body2}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="card-elevated mt-20 p-8 text-center">
          <p className="font-display mb-4 text-lg">
            Read the full prospectus
          </p>
          <a
            href="mailto:hello@cosilico.ai"
            className="link-cyan text-sm no-underline"
          >
            hello@cosilico.ai
          </a>
        </div>
      </div>
    </section>
  );
}
