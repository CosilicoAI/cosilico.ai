import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import {
  architectureStages,
  validationProofs,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Architecture — Cosilico",
  description: "How the Cosilico system fits together.",
};

const operatingPrinciples = [
  "Deterministic answers should beat fluent guesses.",
  "Provenance matters at the rule level, not only in docs prose.",
  "Population simulation requires calibrated households, not only formulas.",
  "Managed hosting should simplify operations, not turn the stack into a black box.",
];

export default function ArchitecturePage() {
  return (
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Architecture"
          as="h1"
          title={<>From source law to queryable answers.</>}
          description="The system is intentionally layered. Open rule libraries supply the substrate. Cosilico validates, calibrates, serves, and operates the runtime."
        />

        <div className="panel quote-panel mt-8">
          <p className="section-kicker">Pipeline</p>
          <p className="quote-copy">
            Encode the law. Validate the behavior. Calibrate the households.
            Serve the query.
          </p>
        </div>

        <div className="process-grid mt-8">
          {architectureStages.map((stage) => (
            <article key={stage.step} className="process-card">
              <span className="process-step" style={{ color: stage.accent }}>
                {stage.step}
              </span>
              <h2 className="process-title">{stage.title}</h2>
              <p className="process-copy">{stage.body}</p>
            </article>
          ))}
        </div>

        <div className="split-grid mt-8">
          <div className="panel p-6">
            <p className="section-kicker">Operating principles</p>
            <h2 className="panel-title">What the system optimizes for</h2>
            <div className="rail-list">
              {operatingPrinciples.map((item) => (
                <div key={item} className="rail-item">
                  <p className="rail-copy">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="section-kicker">Visible proof</p>
            <h2 className="panel-title">What is already publicly legible</h2>
            <div className="ledger-list">
              {validationProofs.slice(0, 3).map((proof) => (
                <div key={proof.label} className="ledger-item">
                  <p className="item-title">
                    {proof.metric} {proof.label}
                  </p>
                  <p className="item-body">{proof.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
