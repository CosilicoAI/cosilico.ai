import React from "react";
import { Tab } from "../data/types";

interface HomePageProps {
  setActiveTab: (tab: Tab) => void;
}

export default function HomePage({ setActiveTab }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Calculate &bull; Predict &bull; Simulate</p>
          <h1 className="hero-title">
            Simulate <span className="gradient-text">Society</span>
          </h1>
          <p className="hero-subtitle">
            Calculate taxes and benefits. Predict household attributes.
            Model policy impacts. One open-source API.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/CosilicoAI/cosilico-engine"
              className="btn btn-primary"
            >
              View Engine &rarr;
            </a>
            <button
              onClick={() => setActiveTab("architecture")}
              className="btn btn-secondary"
            >
              See Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-card problem-bad">
              <h3>How AI handles law today</h3>
              <ul>
                <li>Hallucinates tax brackets</li>
                <li>Guesses at eligibility rules</li>
                <li>No audit trail</li>
                <li>Can't cite sources</li>
                <li>"Based on my training data..."</li>
              </ul>
            </div>
            <div className="problem-card problem-good">
              <h3>With Cosilico APIs</h3>
              <ul>
                <li>Precise calculations</li>
                <li>Every rule traceable to statute</li>
                <li>Full audit trail</li>
                <li>Legal citations included</li>
                <li>Structured, verifiable outputs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="engine">
        <div className="container">
          <h2 className="section-title">Three Capabilities, One API</h2>
          <p className="section-subtitle">
            Deterministic calculations, statistical predictions, and
            population-scale modeling
          </p>
          <div className="engine-grid">
            <div className="engine-component">
              <div className="engine-icon">
                {/* Calculator/abacus-inspired icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="14" cy="24" r="3" fill="currentColor"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                  <circle cx="34" cy="24" r="3" fill="currentColor"/>
                  <circle cx="14" cy="34" r="3" fill="currentColor"/>
                  <circle cx="24" cy="34" r="3" fill="currentColor"/>
                  <rect x="12" y="9" width="8" height="4" rx="1" fill="currentColor"/>
                  <rect x="28" y="9" width="8" height="4" rx="1" fill="currentColor"/>
                </svg>
              </div>
              <h3>Calculate</h3>
              <p>
                Deterministic tax and benefit calculations from statute.
                Every formula maps to law with citations.
              </p>
              <ul className="engine-features">
                <li>Federal + 50 state taxes</li>
                <li>SNAP, Medicaid, TANF, SSI</li>
                <li>Bi-temporal parameters</li>
                <li>Full audit trail</li>
              </ul>
              <a
                href="https://github.com/CosilicoAI/cosilico-engine"
                className="engine-link"
              >
                View on GitHub &rarr;
              </a>
            </div>
            <div className="engine-component">
              <div className="engine-icon">
                {/* Neural network / prediction icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <circle cx="36" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="14" x2="19" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="16" y1="34" x2="19" y2="27" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="29" y1="22" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="29" y1="26" x2="32" y2="30" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="24" cy="24" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Predict</h3>
              <p>
                Statistical predictions for attributes you don't observe. ML
                models trained on enhanced microdata.
              </p>
              <ul className="engine-features">
                <li>Childcare, healthcare costs</li>
                <li>Consumption patterns</li>
                <li>Uncertainty quantification</li>
                <li>Privacy-preserving</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">
                {/* Population/network simulation icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="8" r="4" fill="currentColor"/>
                  <circle cx="10" cy="20" r="3" fill="currentColor" opacity="0.7"/>
                  <circle cx="38" cy="20" r="3" fill="currentColor" opacity="0.7"/>
                  <circle cx="6" cy="34" r="2.5" fill="currentColor" opacity="0.5"/>
                  <circle cx="16" cy="38" r="2.5" fill="currentColor" opacity="0.5"/>
                  <circle cx="32" cy="38" r="2.5" fill="currentColor" opacity="0.5"/>
                  <circle cx="42" cy="34" r="2.5" fill="currentColor" opacity="0.5"/>
                  <circle cx="24" cy="32" r="3" fill="currentColor" opacity="0.6"/>
                  <line x1="24" y1="12" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="24" y1="12" x2="36" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="10" y1="23" x2="7" y2="31" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="10" y1="23" x2="15" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="38" y1="23" x2="41" y2="31" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="38" y1="23" x2="33" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="24" y1="12" x2="24" y2="29" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                </svg>
              </div>
              <h3>Simulate</h3>
              <p>
                Population-scale microsimulation. Model policy impacts
                across millions of households.
              </p>
              <ul className="engine-features">
                <li>Census-scale (100M+ households)</li>
                <li>Distributional analysis</li>
                <li>Revenue/cost estimates</li>
                <li>Reform comparisons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For AI Section */}
      <section id="for-ai" className="for-ai-section">
        <div className="container">
          <h2 className="section-title">Built for AI Systems</h2>
          <p className="section-subtitle">
            We're not building flashy web apps — AIs will generate those in
            seconds. We're building the infrastructure those AIs need.
          </p>
          <div className="ai-features">
            <div className="ai-feature">
              <h4>Tool Use Ready</h4>
              <p>
                Designed for function calling. Give Claude, GPT, or your
                custom agents reliable tax and benefit tools.
              </p>
            </div>
            <div className="ai-feature">
              <h4>Filesystem First</h4>
              <p>
                Rules and parameters live in local files. AI agents read,
                edit, and commit changes via git.
              </p>
            </div>
            <div className="ai-feature">
              <h4>Audit Trails</h4>
              <p>
                Every calculation includes the legal citations and parameter
                values used. Explainable by design.
              </p>
            </div>
            <div className="ai-feature">
              <h4>No Hallucinations</h4>
              <p>
                When AI calls our APIs, it gets the actual law — not a guess
                based on training data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="code-section">
        <div className="container">
          <h2 className="section-title">Simple Integration</h2>
          <div className="code-example">
            <pre>
              <code>{`from cosilico import predict

# One API for calculations and predictions
result = predict(
    person={"age": 35, "income": 45000, "state": "CA"},
    variables=[
        "eitc",              # Calculated from statute
        "childcare_expense", # Predicted from microdata
        "snap_eligible",     # Calculated from rules
    ]
)

# {
#   "eitc": {"value": 3200, "type": "calculated", "citation": "26 USC § 32"},
#   "childcare_expense": {"value": 8500, "type": "predicted", "confidence": 0.82},
#   "snap_eligible": {"value": true, "type": "calculated", "citation": "7 USC § 2014"}
# }`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Use Cases</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h4>AI Agents</h4>
              <p>
                Give AI reliable tools for taxes, benefits, eligibility.
                Structured outputs, not hallucinations.
              </p>
            </div>
            <div className="use-case">
              <h4>Microsimulation</h4>
              <p>
                Model policy impacts across millions of households.
                Census-scale analysis.
              </p>
            </div>
            <div className="use-case">
              <h4>Data Enrichment</h4>
              <p>
                Impute income, demographics, consumption to customer data.
                ML-enhanced attributes.
              </p>
            </div>
            <div className="use-case">
              <h4>Benefit Administration</h4>
              <p>
                Precise enough for production eligibility systems. Every
                calculation traceable.
              </p>
            </div>
            <div className="use-case">
              <h4>Financial Planning</h4>
              <p>
                Accurate tax calculations for personal finance apps.
                Multi-year projections.
              </p>
            </div>
            <div className="use-case">
              <h4>Policy Research</h4>
              <p>
                Model reforms with distributional analysis. Used by
                governments worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <h2 className="section-title">The Vision</h2>
          <div className="vision-content">
            <p className="vision-text">
              <strong>Cooperation in silico.</strong> We're building toward
              calibrated AI agents that truly represent society — not
              helpful assistants, but synthetic populations whose collective
              behavior matches real human distributions.
            </p>
            <p className="vision-text">
              The rules engine and microdata are the foundation. The APIs
              are the interface. The future is simulating societal
              trajectories to guide us toward outcomes that align with our
              collective values.
            </p>
            <p className="vision-text">
              100% open source. Because understanding society requires
              transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Building</h2>
          <p>
            Open source. Apache 2.0. No API keys required to get started.
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/CosilicoAI/cosilico-engine"
              className="btn btn-primary"
            >
              View Engine on GitHub
            </a>
            <a
              href="https://github.com/CosilicoAI"
              className="btn btn-secondary"
            >
              CosilicoAI Organization
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
