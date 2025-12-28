import React, { useState, useEffect, useRef } from "react";
import * as styles from "../styles/thesis.css";
import PageLayout from "../components/PageLayout";
import { Section } from "../components/thesis/types";
import { ProblemSection } from "../components/thesis/ProblemSection";
import { GapSection } from "../components/thesis/GapSection";
import { SimulationSection } from "../components/thesis/SimulationSection";
import { EncodingSection } from "../components/thesis/EncodingSection";
import { MarketsSection } from "../components/thesis/MarketsSection";
import { CompetitionSection } from "../components/thesis/CompetitionSection";
import { ModelSection } from "../components/thesis/ModelSection";
import { TractionSection } from "../components/thesis/TractionSection";
import { TeamSection } from "../components/thesis/TeamSection";
import { RisksSection } from "../components/thesis/RisksSection";
import { AskSection } from "../components/thesis/AskSection";
import { ReferencesSection } from "../components/thesis/ReferencesSection";

const sections: Section[] = ["problem", "gap", "simulation", "encoding", "markets", "competition", "model", "traction", "team", "risks", "ask"];

export default function ThesisPage() {
  const [activeSection, setActiveSection] = useState<Section>("problem");

  const sectionRefs = useRef<Record<Section, HTMLElement | null>>(
    Object.fromEntries(sections.map(s => [s, null])) as Record<Section, HTMLElement | null>
  );

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = sectionRefs.current[section];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section: Section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  const setRef = (section: Section) => (el: HTMLElement | null) => {
    sectionRefs.current[section] = el;
  };

  return (
    <PageLayout>
      <div className={styles.thesis}>
        {/* Top nav with logo */}
        <nav className={styles.thesisTopNav}>
          <a href="/" className={styles.thesisLogo}>
            <img src="/cosilico-logo-dark.svg" alt="Cosilico logo" className={styles.thesisLogoIcon} />
            cosilico
          </a>
        </nav>

      {/* Progress nav */}
      <nav className={styles.thesisNav}>
        {sections.map(s => (
          <button
            key={s}
            className={activeSection === s ? `${styles.navButton} ${styles.navButtonActive}` : styles.navButton}
            onClick={() => scrollTo(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </nav>

      {/* Hero */}
      <section className={styles.thesisHero}>
        <p className={styles.thesisLabel}>Research Prospectus</p>
        <h1 className={styles.heroTitle}>Society, in silico</h1>
        <p className={styles.thesisSubtitle}>
          We're building the simulation of the economy that everyone can query.
        </p>
        <p className={styles.thesisMeta}>
          Every claim in this document is corroborated with a primary source.
          <br />Hover over citations to see details. Click to open.
        </p>
      </section>

      {/* Problem */}
      <section className={styles.thesisSection} ref={setRef("problem")}>
        <ProblemSection />
      </section>

      {/* Gap */}
      <section className={styles.thesisSection} ref={setRef("gap")}>
        <GapSection />
      </section>

      {/* Platform */}
      <section className={styles.thesisSection} ref={setRef("simulation")}>
        <SimulationSection />
      </section>

      {/* AI Encoding */}
      <section className={styles.thesisSection} ref={setRef("encoding")}>
        <EncodingSection />
      </section>

      {/* Markets */}
      <section className={styles.thesisSection} ref={setRef("markets")}>
        <MarketsSection />
      </section>

      {/* Competition */}
      <section className={styles.thesisSection} ref={setRef("competition")}>
        <CompetitionSection />
      </section>

      {/* Model */}
      <section className={styles.thesisSection} ref={setRef("model")}>
        <ModelSection />
      </section>

      {/* Traction */}
      <section className={styles.thesisSection} ref={setRef("traction")}>
        <TractionSection />
      </section>

      {/* Team */}
      <section className={styles.thesisSection} ref={setRef("team")}>
        <TeamSection />
      </section>

      {/* Risks */}
      <section className={styles.thesisSection} ref={setRef("risks")}>
        <RisksSection />
      </section>

      {/* Ask */}
      <section className={styles.thesisSection} ref={setRef("ask")}>
        <AskSection />
      </section>

      {/* References */}
      <section className={`${styles.thesisSection} ${styles.thesisReferences}`}>
        <ReferencesSection />
      </section>

      {/* CTA */}
      <section className={styles.thesisCta}>
        <h2>Interested?</h2>
        <p>We're raising a seed round to turn this into production infrastructure.</p>
        <div className={styles.ctaButtons}>
          <a href="mailto:max@cosilico.ai" className={styles.btnPrimary}>
            Get in touch
          </a>
          <a href="/" className={styles.btnSecondary}>
            ← Back to home
          </a>
        </div>
      </section>
      </div>
    </PageLayout>
  );
}
