import type { Metadata } from "next";
import Link from "next/link";
import { ThesisSectionNav } from "@/components/thesis/section-nav";
import { ProblemSection } from "@/components/thesis/problem-section";
import { GapSection } from "@/components/thesis/gap-section";
import { SimulationSection } from "@/components/thesis/simulation-section";
import { EncodingSection } from "@/components/thesis/encoding-section";
import { MarketsSection } from "@/components/thesis/markets-section";
import { CompetitionSection } from "@/components/thesis/competition-section";
import { ModelSection } from "@/components/thesis/model-section";
import { TractionSection } from "@/components/thesis/traction-section";
import { TeamSection } from "@/components/thesis/team-section";
import { RisksSection } from "@/components/thesis/risks-section";
import { AskSection } from "@/components/thesis/ask-section";
import { ReferencesSection } from "@/components/thesis/references-section";

export const metadata: Metadata = {
  title: "Thesis — Cosilico",
  description:
    "Society, in silico. A research prospectus on the infrastructure layer for economic reasoning.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThesisPage() {
  return (
    <>
      <section className="thesis-hero-v2">
        <div className="page-wrap thesis-hero-v2-wrap">
          <p className="thesis-hero-eyebrow">
            <span className="thesis-hero-eyebrow-dot" aria-hidden />
            Research prospectus
          </p>
          <h1 className="thesis-hero-title">
            Society,
            <br />
            <em className="text-highlight">in silico.</em>
          </h1>
          <p className="thesis-hero-sub">
            Computational models of society already drive financial
            decisions — insurance pricing, credit scoring, government
            incentives, economic impact projections. But they&apos;re closed,
            aggregate, and unvalidated. We&apos;re building the open
            alternative: a simulation of the economy from the individual up
            that anyone can query.
          </p>
          <p className="thesis-hero-meta">
            Every claim corroborated with a primary source. Hover a citation
            for a preview · click to open.
          </p>
        </div>
      </section>

      <div className="thesis-layout">
        <aside className="thesis-layout-nav">
          <ThesisSectionNav />
        </aside>

        <article className="thesis-layout-body page-wrap">
          <ProblemSection />
          <GapSection />
          <SimulationSection />
          <EncodingSection />
          <MarketsSection />
          <CompetitionSection />
          <ModelSection />
          <TractionSection />
          <TeamSection />
          <RisksSection />
          <AskSection />
          <ReferencesSection />
        </article>
      </div>

      <section className="section-block section-last closing-v2-section">
        <div className="page-wrap">
          <div className="closing-v2">
            <p className="closing-v2-line">
              Interested? <em className="text-highlight">Let&apos;s talk.</em>
            </p>
            <p
              className="thesis-prose"
              style={{ marginTop: "1rem", maxWidth: "32rem" }}
            >
              We&apos;re raising a seed round to turn this into production
              infrastructure.
            </p>
            <div className="hero-v2-actions">
              <a
                href="mailto:max@cosilico.ai"
                className="btn-primary"
              >
                Get in touch <span aria-hidden>→</span>
              </a>
              <Link href="/" className="btn-ghost">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
