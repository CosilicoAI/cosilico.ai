import React, { useState, useEffect, useRef } from "react";
import "../styles/Thesis.css";
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
    <div className="thesis">
      {/* Top nav with logo */}
      <nav className="thesis-top-nav">
        <a href="/" className="thesis-logo">
          <img src="/cosilico-logo-dark.svg" alt="Cosilico logo" className="thesis-logo-icon" />
          cosilico
        </a>
      </nav>

      {/* Progress nav */}
      <nav className="thesis-nav">
        {sections.map(s => (
          <button
            key={s}
            className={activeSection === s ? "active" : ""}
            onClick={() => scrollTo(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </nav>

      {/* Hero */}
      <section className="thesis-hero">
        <p className="thesis-label">Research Prospectus</p>
        <h1>Society, in Silico</h1>
        <p className="thesis-subtitle">
          We're building the simulation of the economy that everyone can query.
        </p>
        <p className="thesis-meta">
          Every claim in this document is corroborated with a primary source.
          <br />Hover over citations to see details. Click to open.
        </p>
      </section>

      {/* Problem */}
      <section className="thesis-section" ref={setRef("problem")}>
        <ProblemSection />
      </section>

      {/* Gap */}
      <section className="thesis-section" ref={setRef("gap")}>
        <GapSection />
      </section>

      {/* Platform */}
      <section className="thesis-section" ref={setRef("simulation")}>
        <SimulationSection />
      </section>

      {/* AI Encoding */}
      <section className="thesis-section" ref={setRef("encoding")}>
        <EncodingSection />
      </section>

      {/* Markets */}
      <section className="thesis-section" ref={setRef("markets")}>
        <MarketsSection />
      </section>

      {/* Competition */}
      <section className="thesis-section" ref={setRef("competition")}>
        <CompetitionSection />
      </section>

      {/* Model */}
      <section className="thesis-section" ref={setRef("model")}>
        <ModelSection />
      </section>

      {/* Traction */}
      <section className="thesis-section" ref={setRef("traction")}>
        <TractionSection />
      </section>

      {/* Team */}
      <section className="thesis-section" ref={setRef("team")}>
        <TeamSection />
      </section>

      {/* Risks */}
      <section className="thesis-section" ref={setRef("risks")}>
        <RisksSection />
      </section>

      {/* Ask */}
      <section className="thesis-section" ref={setRef("ask")}>
        <AskSection />
      </section>

      {/* References */}
      <section className="thesis-section thesis-references">
        <ReferencesSection />
      </section>

      {/* CTA */}
      <section className="thesis-cta">
        <h2>Interested?</h2>
        <p>We're raising a seed round to turn this into production infrastructure.</p>
        <div className="cta-buttons">
          <a href="mailto:max@cosilico.ai" className="btn-primary">
            Get in Touch
          </a>
          <a href="/" className="btn-secondary">
            ← Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}
