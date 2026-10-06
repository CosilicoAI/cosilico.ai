import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";
import { validationProofs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Validation — Cosilico",
  description: "Published proof points and the current trust surface.",
};

const methodology = [
  "Direct extraction of formula logic from the encoding under test.",
  "Representative test cases chosen across filing statuses and bracket ranges.",
  "Manual expected-value calculations checked to cent-level tolerance.",
  "Public artifacts that say exactly what has been validated and what has not.",
];

const nextMilestones = [
  "Expand beyond the currently published 26 USC §1 rate-schedule artifact.",
  "Expose machine-readable validation outputs instead of narrative-only reports.",
  "Backfill public comparisons across more sections, years, and jurisdictions.",
];

export default function ValidationPage() {
  return (
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Validation"
          as="h1"
          title={<>Trust should be inspectable.</>}
          description="This page only states what the repo currently supports in public artifacts. It is not a placeholder dashboard pretending the proof already exists."
        />

        <div className="metric-grid mt-8">
          {validationProofs.map((proof) => (
            <article key={proof.label} className="metric-card">
              <p className="metric-value">{proof.metric}</p>
              <p className="metric-label">{proof.label}</p>
              <p className="note-copy">{proof.body}</p>
            </article>
          ))}
        </div>

        <div className="split-grid mt-8">
          <div className="panel p-6">
            <p className="section-kicker">Methodology</p>
            <h2 className="panel-title">What the current public proof covers</h2>
            <div className="rail-list">
              {methodology.map((item) => (
                <div key={item} className="rail-item">
                  <p className="rail-copy">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="section-kicker">Next milestone</p>
            <h2 className="panel-title">What still needs to become public</h2>
            <div className="rail-list">
              {nextMilestones.map((item) => (
                <div key={item} className="rail-item">
                  <p className="rail-copy">{item}</p>
                </div>
              ))}
            </div>
            <div className="action-row">
              <Link href="/architecture" className="btn-primary">
                See the system
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
