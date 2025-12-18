import React, { useState } from "react";
import "../styles/Structure.css";

type Audience = "investors" | "philanthropic" | "partners";

export default function StructurePage() {
  const [activeAudience, setActiveAudience] = useState<Audience>("investors");

  return (
    <div className="structure">
      {/* Top nav with logo */}
      <nav className="structure-top-nav">
        <a href="/" className="structure-logo">
          <img src="/cosilico-logo-dark.svg" alt="" className="structure-logo-icon" />
          cosilico
        </a>
      </nav>

      {/* Hero */}
      <section className="structure-hero">
        <h1>Cosilico + PolicyEngine</h1>
        <p className="structure-subtitle">
          Two organizations, one mission: make society simulatable.
        </p>
      </section>

      {/* Audience selector */}
      <section className="audience-selector">
        <p>I am a:</p>
        <div className="audience-buttons">
          <button
            className={activeAudience === "investors" ? "active" : ""}
            onClick={() => setActiveAudience("investors")}
          >
            Investor
          </button>
          <button
            className={activeAudience === "philanthropic" ? "active" : ""}
            onClick={() => setActiveAudience("philanthropic")}
          >
            Philanthropic Funder
          </button>
          <button
            className={activeAudience === "partners" ? "active" : ""}
            onClick={() => setActiveAudience("partners")}
          >
            Partner / Customer
          </button>
        </div>
      </section>

      {/* Structure diagram */}
      <section className="structure-diagram">
        <div className="org-card org-cosilico">
          <div className="org-header">
            <img src="/cosilico-logo-dark.svg" alt="" className="org-logo" />
            <h2>Cosilico</h2>
            <span className="org-type">For-Profit (C-Corp)</span>
          </div>
          <div className="org-body">
            <h3>Platform & Infrastructure</h3>
            <ul>
              <li>AI statute-to-code generator</li>
              <li>Microsimulation engine</li>
              <li>Prediction APIs</li>
              <li>Dataset calibration & freshness</li>
              <li>Commercial API hosting</li>
            </ul>
            <div className="org-model">
              <strong>Revenue:</strong> API usage, data subscriptions, enterprise contracts
            </div>
          </div>
        </div>

        <div className="org-relationship">
          <div className="relationship-arrow">
            <span className="arrow-label top">Subcontracts</span>
            <div className="arrow-line"></div>
            <span className="arrow-label bottom">Research tools built on platform</span>
          </div>
        </div>

        <div className="org-card org-pe">
          <div className="org-header">
            <img src="https://policyengine.org/static/media/policyengine-logo.svg" alt="" className="org-logo" />
            <h2>PolicyEngine</h2>
            <span className="org-type">501(c)(3) Nonprofit</span>
          </div>
          <div className="org-body">
            <h3>Research & Applications</h3>
            <ul>
              <li>Custom policy interactives</li>
              <li>Research partnerships</li>
              <li>Grant-funded analysis projects</li>
              <li>Policy education & training</li>
              <li>Public-facing tools</li>
            </ul>
            <div className="org-model">
              <strong>Revenue:</strong> Grants, research contracts, consulting
            </div>
          </div>
        </div>
      </section>

      {/* Audience-specific content */}
      <section className="audience-content">
        {activeAudience === "investors" && (
          <div className="content-panel">
            <h2>For Investors</h2>

            <div className="content-section">
              <h3>Why the structure matters</h3>
              <p>
                Cosilico is a pure <strong>platform company</strong>. We don't do services work,
                custom consulting, or grant-funded projects. Those go to PolicyEngine.
              </p>
              <p>
                This keeps Cosilico's revenue profile clean: <strong>100% product revenue</strong> from
                API calls, data subscriptions, and enterprise contracts. No services revenue to
                dilute metrics.
              </p>
            </div>

            <div className="content-section">
              <h3>The relationship</h3>
              <ul>
                <li>PolicyEngine is a <strong>customer</strong> of Cosilico (uses our APIs at-cost)</li>
                <li>PolicyEngine may <strong>subcontract to Cosilico</strong> when grants require platform work</li>
                <li>PolicyEngine serves as a <strong>lighthouse customer</strong> demonstrating platform capabilities</li>
                <li>The same founding team runs both (for now)</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>Why this is good for you</h3>
              <div className="benefit-grid">
                <div className="benefit-card">
                  <h4>Clean metrics</h4>
                  <p>No services revenue, no grant dependency. Pure SaaS/usage economics.</p>
                </div>
                <div className="benefit-card">
                  <h4>Built-in credibility</h4>
                  <p>PolicyEngine's government users (UK Treasury, US Congress) validate the platform.</p>
                </div>
                <div className="benefit-card">
                  <h4>Grant pipeline</h4>
                  <p>Foundation grants to PE can flow to Cosilico as subcontracts. Additional revenue channel.</p>
                </div>
                <div className="benefit-card">
                  <h4>Mission alignment</h4>
                  <p>PE's nonprofit mission attracts talent and partners who care about impact.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeAudience === "philanthropic" && (
          <div className="content-panel">
            <h2>For Philanthropic Funders</h2>

            <div className="content-section">
              <h3>Where your grant goes</h3>
              <p>
                Grants go to <strong>PolicyEngine</strong>, the 501(c)(3) nonprofit.
                PolicyEngine uses those funds for research, analysis, and public tools.
              </p>
              <p>
                When the work requires platform infrastructure, PolicyEngine may
                <strong> subcontract to Cosilico</strong> at fair-market rates. This is similar to
                how a grantee might pay AWS for hosting or a contractor for development.
              </p>
            </div>

            <div className="content-section">
              <h3>Why this is better than before</h3>
              <ul>
                <li><strong>Focus:</strong> PE focuses on research and impact, not infrastructure maintenance</li>
                <li><strong>Sustainability:</strong> The platform layer becomes self-sustaining through commercial revenue</li>
                <li><strong>Leverage:</strong> Your grant dollar funds research; platform costs are shared across commercial customers</li>
                <li><strong>No perpetual dependency:</strong> You're not funding infrastructure forever</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>What you fund at PolicyEngine</h3>
              <div className="benefit-grid">
                <div className="benefit-card">
                  <h4>Custom interactives</h4>
                  <p>Interactive tools for specific policy questions: benefit take-up maps, reform calculators, etc.</p>
                </div>
                <div className="benefit-card">
                  <h4>Research partnerships</h4>
                  <p>Collaborations with academics, think tanks, and government on policy analysis.</p>
                </div>
                <div className="benefit-card">
                  <h4>Public education</h4>
                  <p>Accessible tools and content that help people understand policy impacts.</p>
                </div>
                <div className="benefit-card">
                  <h4>Rapid response</h4>
                  <p>Quick analysis and interactives when new legislation is proposed.</p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h3>Example: Benefit take-up analysis</h3>
              <div className="example-flow">
                <div className="flow-step">
                  <span className="step-num">1</span>
                  <span className="step-text">Foundation grants $X to PE for benefit take-up research</span>
                </div>
                <div className="flow-step">
                  <span className="step-num">2</span>
                  <span className="step-text">PE defines research questions, designs interactives</span>
                </div>
                <div className="flow-step">
                  <span className="step-num">3</span>
                  <span className="step-text">PE uses Cosilico APIs for simulations (may subcontract)</span>
                </div>
                <div className="flow-step">
                  <span className="step-num">4</span>
                  <span className="step-text">PE delivers interactive map + research findings</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeAudience === "partners" && (
          <div className="content-panel">
            <h2>For Partners & Customers</h2>

            <div className="content-section">
              <h3>Which organization should I work with?</h3>
              <div className="decision-table">
                <div className="decision-row header">
                  <span>You want...</span>
                  <span>Work with...</span>
                </div>
                <div className="decision-row">
                  <span>API access for tax/benefit calculations</span>
                  <span className="org-tag cosilico">Cosilico</span>
                </div>
                <div className="decision-row">
                  <span>Predictions to complete partial customer data</span>
                  <span className="org-tag cosilico">Cosilico</span>
                </div>
                <div className="decision-row">
                  <span>Population-scale simulations</span>
                  <span className="org-tag cosilico">Cosilico</span>
                </div>
                <div className="decision-row">
                  <span>Dataset downloads</span>
                  <span className="org-tag cosilico">Cosilico</span>
                </div>
                <div className="decision-row">
                  <span>Custom interactive for a specific policy question</span>
                  <span className="org-tag pe">PolicyEngine</span>
                </div>
                <div className="decision-row">
                  <span>Research partnership on policy analysis</span>
                  <span className="org-tag pe">PolicyEngine</span>
                </div>
                <div className="decision-row">
                  <span>Grant-funded project</span>
                  <span className="org-tag pe">PolicyEngine</span>
                </div>
                <div className="decision-row">
                  <span>Academic collaboration</span>
                  <span className="org-tag pe">PolicyEngine</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h3>Pricing</h3>
              <p>
                <strong>Cosilico</strong> charges for API usage and data.
                See <a href="/pricing">pricing details</a>.
              </p>
              <p>
                <strong>PolicyEngine</strong> works on grants and contracts.
                Reach out for custom project scoping.
              </p>
            </div>

            <div className="content-section">
              <h3>The same expertise, different delivery</h3>
              <p>
                Both organizations are founded by the same team that built PolicyEngine's
                models used by the UK Government and US Congress. Whether you need
                infrastructure (Cosilico) or custom research (PolicyEngine), you're
                getting the same underlying expertise.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="structure-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">
          <div className="faq-item">
            <h4>Is PolicyEngine going away?</h4>
            <p>
              No. PolicyEngine continues as a nonprofit research organization.
              It's becoming more focused on research and custom tools,
              while infrastructure moves to Cosilico.
            </p>
          </div>

          <div className="faq-item">
            <h4>Who owns what?</h4>
            <p>
              Cosilico owns the platform IP (the AI generator, simulation engine, APIs).
              PolicyEngine owns its research outputs and custom tools.
              Both share founders and mission alignment.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is everything still open source?</h4>
            <p>
              Yes. Both organizations are committed to open source.
              The rules engine, datasets, and even the AI generator are open source.
              Cosilico monetizes hosting, freshness, and computed insights—not the code itself.
            </p>
          </div>

          <div className="faq-item">
            <h4>What about existing PolicyEngine users?</h4>
            <p>
              The public policyengine.org calculator will continue.
              API users will transition to Cosilico's APIs (same underlying models,
              commercial terms). Research partners continue with PE.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="structure-cta">
        <h2>Questions?</h2>
        <p>Reach out to discuss your specific situation.</p>
        <div className="cta-buttons">
          <a href="mailto:max@cosilico.ai" className="btn-primary">
            Contact Max
          </a>
          <a href="/" className="btn-secondary">
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}
