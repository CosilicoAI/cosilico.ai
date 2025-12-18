import React from "react";
import "../styles/Pricing.css";

export default function PricingPage() {
  return (
    <div className="pricing">
      {/* Hero */}
      <section className="pricing-hero">
        <h1>Pricing</h1>
        <p className="pricing-subtitle">
          Open source infrastructure. Pay for insights.
        </p>
      </section>

      {/* Philosophy */}
      <section className="pricing-philosophy">
        <div className="philosophy-content">
          <h2>Everything is open source</h2>
          <p>
            The rules engine, the datasets, the generator—all free to download and run yourself.
            We're too close to superabundance to hold knowledge back.
          </p>
          <p>
            <strong>What you pay for:</strong> The insights we compute from that infrastructure.
            Predictions, simulations, and forecasts that require fresh data, calibrated models,
            and serious compute.
          </p>
        </div>
      </section>

      {/* API Pricing */}
      <section className="pricing-apis">
        <h2>API Pricing</h2>
        <p className="section-subtitle">Simple per-call pricing. No tiers, no complexity.</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Rules API</h3>
              <div className="price">
                <span className="price-value">$0.02</span>
                <span className="price-unit">per call</span>
              </div>
            </div>
            <p className="pricing-description">
              Calculate taxes and benefits for a complete household.
              Every formula traced to statute.
            </p>
            <code>POST /calculate</code>
            <ul className="pricing-features">
              <li>Federal + state income taxes</li>
              <li>100+ benefit programs</li>
              <li>Marginal rates & phase-outs</li>
              <li>Full audit trail to law</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Predictions API</h3>
              <div className="price">
                <span className="price-value">$0.05</span>
                <span className="price-unit">per call</span>
              </div>
            </div>
            <p className="pricing-description">
              Complete a partial household profile using locally-calibrated models.
            </p>
            <code>POST /predict</code>
            <ul className="pricing-features">
              <li>Impute missing attributes</li>
              <li>County-level calibration</li>
              <li>Real-time economic signals</li>
              <li>Probability distributions</li>
            </ul>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-card-header">
              <h3>Full Profile</h3>
              <div className="price">
                <span className="price-value">$0.06</span>
                <span className="price-unit">per call</span>
              </div>
            </div>
            <p className="pricing-description">
              Partial household in → complete financial profile + tax/benefit calculations out.
            </p>
            <code>POST /profile</code>
            <ul className="pricing-features">
              <li>Predictions + Rules combined</li>
              <li>Full financial picture</li>
              <li>Tax liability & effective rates</li>
              <li>Benefit eligibility & amounts</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Simulations API</h3>
              <div className="price">
                <span className="price-value">$1</span>
                <span className="price-unit">per 1M household-reforms</span>
              </div>
            </div>
            <p className="pricing-description">
              Run policy reforms at population scale. Distributional impacts in seconds.
            </p>
            <code>POST /simulate</code>
            <ul className="pricing-features">
              <li>Population-wide analysis</li>
              <li>Custom reform definitions</li>
              <li>Distributional breakdowns</li>
              <li>Budget scoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Pricing */}
      <section className="pricing-data">
        <h2>Data Downloads</h2>
        <p className="section-subtitle">
          All datasets available. Pay for bandwidth, not access.
        </p>

        <div className="data-pricing-box">
          <div className="data-price">
            <span className="price-value">$0.10</span>
            <span className="price-unit">per GB</span>
          </div>
          <div className="data-details">
            <p>
              Download calibrated microdata, synthetic populations, and economic forecasts.
              Updated monthly with CPS, daily with economic signals.
            </p>
            <ul>
              <li>National, state, and county-level datasets</li>
              <li>Real-time economic calibration</li>
              <li>Full variable documentation</li>
              <li>No quality tiers—everyone gets the same data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pricing-use-cases">
        <h2>Who pays for what</h2>
        <div className="use-case-table">
          <div className="use-case-row header">
            <span>Customer</span>
            <span>Products</span>
            <span>Use case</span>
          </div>
          <div className="use-case-row">
            <span>Benefit apps</span>
            <span>Full Profile</span>
            <span>Partial user info → eligibility check</span>
          </div>
          <div className="use-case-row">
            <span>Tax software</span>
            <span>Rules + Predictions</span>
            <span>Liability estimates from partial data</span>
          </div>
          <div className="use-case-row">
            <span>AI assistants</span>
            <span>Full Profile</span>
            <span>"What benefits can I get?"</span>
          </div>
          <div className="use-case-row">
            <span>Fintech</span>
            <span>Predictions</span>
            <span>Customer profile completion</span>
          </div>
          <div className="use-case-row">
            <span>Marketers</span>
            <span>Full Profile</span>
            <span>Segment by tax burden + benefits → WTP</span>
          </div>
          <div className="use-case-row">
            <span>Researchers</span>
            <span>Simulations + Data</span>
            <span>Reform modeling at scale</span>
          </div>
          <div className="use-case-row">
            <span>Government</span>
            <span>Simulations + Enterprise</span>
            <span>Bill scoring, outreach targeting</span>
          </div>
          <div className="use-case-row">
            <span>Journalists</span>
            <span>Playground + Rules</span>
            <span>Fact-checking, embedded calculators</span>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="pricing-enterprise">
        <div className="enterprise-box">
          <h2>Enterprise</h2>
          <p>
            Custom contracts for SLAs, support, and dedicated infrastructure.
            Same unit pricing—just with guarantees.
          </p>
          <a href="mailto:hello@cosilico.ai" className="btn-primary">
            Talk to us
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <h2>Start building</h2>
        <p>Pay-as-you-go. No minimums, no commitments.</p>
        <div className="cta-buttons">
          <a href="https://docs.cosilico.ai" className="btn-primary">
            Get API Key
          </a>
          <a href="/playground" className="btn-secondary">
            Try the Playground
          </a>
        </div>
      </section>
    </div>
  );
}
