import React, { useState } from "react";
import "../styles/Home.css";

export default function HomePage() {
  const [query, setQuery] = useState("What happens if we expand EITC by 50%?");
  const [showResult, setShowResult] = useState(false);

  const handleQuery = () => {
    setShowResult(true);
  };

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">Society, in silico.</p>
          <h1>
            We simulate<br />
            the economy.
          </h1>
          <p className="subtitle">
            Every household. Every rule. Every scenario.<br />
            Open source infrastructure. APIs for the rest.
          </p>
          <div className="hero-cta">
            <a href="https://docs.cosilico.ai" className="btn-primary">
              Read the Docs
            </a>
            <a href="https://github.com/PolicyEngine" className="btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Live Query Demo */}
      <section className="demo">
        <div className="demo-container">
          <div className="demo-input-group">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResult(false);
              }}
              placeholder="Ask the simulation..."
              className="demo-input"
            />
            <button onClick={handleQuery} className="demo-button">
              Query
            </button>
          </div>
          {showResult && (
            <div className="demo-result">
              <div className="result-stat">
                <span className="stat-value">$147B</span>
                <span className="stat-label">10-year cost</span>
              </div>
              <div className="result-stat">
                <span className="stat-value">43M</span>
                <span className="stat-label">households affected</span>
              </div>
              <div className="result-stat">
                <span className="stat-value">-2.1pp</span>
                <span className="stat-label">poverty reduction</span>
              </div>
              <div className="result-meta">
                <a href="https://docs.cosilico.ai/methodology">See methodology</a>
                <a href="https://docs.cosilico.ai/playground">Run your own</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Offer */}
      <section className="products">
        <h2>Three APIs. One simulation.</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>Rules</h3>
            <p>
              Calculate taxes and benefits for any household.
              Every formula traced to statute.
            </p>
            <code>cosilico.calculate(household)</code>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v9l6 3" />
              </svg>
            </div>
            <h3>Data</h3>
            <p>
              Synthetic populations calibrated to reality.
              Predict attributes you don't observe.
            </p>
            <code>cosilico.predict(partial_household)</code>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Scenarios</h3>
            <p>
              Run policy reforms at population scale.
              Distributional impacts in milliseconds.
            </p>
            <code>cosilico.simulate(reform, population)</code>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="use-cases">
        <h2>Who queries the simulation?</h2>
        <div className="use-case-grid">
          <div className="use-case">
            <h4>Financial Services</h4>
            <p>"How will rate changes affect default risk across our portfolio?"</p>
          </div>
          <div className="use-case">
            <h4>Government Agencies</h4>
            <p>"What's the 10-year cost of this bill?"</p>
          </div>
          <div className="use-case">
            <h4>Asset Managers</h4>
            <p>"Which sectors win under each candidate's tax plan?"</p>
          </div>
          <div className="use-case">
            <h4>AI Agents</h4>
            <p>"Calculate this household's benefits eligibility."</p>
          </div>
          <div className="use-case">
            <h4>Retailers</h4>
            <p>"How does SNAP expansion affect grocery spend by region?"</p>
          </div>
          <div className="use-case">
            <h4>Researchers</h4>
            <p>"Model the distributional impact of UBI."</p>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="open-source">
        <div className="os-content">
          <h2>Open infrastructure.<br />Commercial APIs.</h2>
          <p>
            The simulation engine is open source.
            We monetize hosted APIs, premium data, and enterprise features.
            Like Redis, Elastic, or Databricks — we build the standard, you use the cloud.
          </p>
          <div className="os-stats">
            <div className="os-stat">
              <span className="os-value">50+</span>
              <span className="os-label">state tax systems</span>
            </div>
            <div className="os-stat">
              <span className="os-value">100+</span>
              <span className="os-label">benefit programs</span>
            </div>
            <div className="os-stat">
              <span className="os-value">100M+</span>
              <span className="os-label">synthetic households</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination */}
      <section className="vision">
        <h2>The coordination problem</h2>
        <p className="vision-text">
          Society is hard to optimize because nobody has a shared model to reason against.
          Congress debates with napkin math. Banks model risk without knowing policy changes.
          AI agents hallucinate eligibility rules.
        </p>
        <p className="vision-text">
          <strong>Cosilico is the shared substrate.</strong> A simulation everyone can query,
          so decisions are grounded in the same reality.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Query the simulation.</h2>
        <div className="cta-buttons">
          <a href="https://docs.cosilico.ai" className="btn-primary">
            Get Started
          </a>
          <a href="mailto:hello@cosilico.ai" className="btn-secondary">
            Talk to Us
          </a>
        </div>
      </section>
    </div>
  );
}
