import React from 'react';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="/" aria-label="Cosilico home" style={{ textDecoration: 'none' }}>
            <Logo size={40} />
          </a>
          <div className="nav-links">
            <a href="#what-we-build">Platform</a>
            <a href="#for-ai" className="desktop-only">For AI</a>
            <a href="https://github.com/CosilicoAI/cosilico-engine" className="desktop-only">Engine</a>
            <a href="https://github.com/CosilicoAI" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Rules • Data • Simulation</p>
          <h1 className="hero-title">
            Simulate <span className="gradient-text">Society</span>
          </h1>
          <p className="hero-subtitle">
            Open source infrastructure for modeling how policy affects people.
            From a single household to entire populations.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/CosilicoAI/cosilico-engine" className="btn btn-primary">View Engine →</a>
            <a href="#what-we-build" className="btn btn-secondary">Learn More</a>
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
          <h2 className="section-title">What We Build</h2>
          <p className="section-subtitle">
            Three layers powering the next generation of policy-aware applications
          </p>
          <div className="engine-grid">
            <div className="engine-component">
              <div className="engine-icon">⚙️</div>
              <h3>Rules Engine</h3>
              <p>Tax and benefit calculations with first-class legal citations. Every formula maps to statute.</p>
              <ul className="engine-features">
                <li>Multi-target: Python, JS, SQL</li>
                <li>Bi-temporal parameters</li>
                <li>Jurisdiction modularity</li>
                <li>Apache 2.0 licensed</li>
              </ul>
              <a href="https://github.com/CosilicoAI/cosilico-engine" className="engine-link">View on GitHub →</a>
            </div>
            <div className="engine-component">
              <div className="engine-icon">📊</div>
              <h3>Microdata</h3>
              <p>ML-enhanced datasets representing populations. Impute what you don't observe.</p>
              <ul className="engine-features">
                <li>Synthetic populations</li>
                <li>Local calibration</li>
                <li>Privacy-preserving</li>
                <li>Customer data enrichment</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">🔌</div>
              <h3>APIs</h3>
              <p>The interface layer AI systems call. Stripe-quality developer experience.</p>
              <ul className="engine-features">
                <li>REST + Python client</li>
                <li>Structured responses</li>
                <li>Legal provenance</li>
                <li>Sub-100ms latency</li>
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
            We're not building flashy web apps — AIs will generate those in seconds.
            We're building the infrastructure those AIs need.
          </p>
          <div className="ai-features">
            <div className="ai-feature">
              <h4>Tool Use Ready</h4>
              <p>Designed for function calling. Give Claude, GPT, or your custom agents reliable tax and benefit tools.</p>
            </div>
            <div className="ai-feature">
              <h4>Structured Outputs</h4>
              <p>JSON responses with typed schemas. No parsing HTML or hoping the LLM extracted correctly.</p>
            </div>
            <div className="ai-feature">
              <h4>Audit Trails</h4>
              <p>Every calculation includes the legal citations and parameter values used. Explainable by design.</p>
            </div>
            <div className="ai-feature">
              <h4>No Hallucinations</h4>
              <p>When AI calls our APIs, it gets the actual law — not a guess based on training data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="code-section">
        <div className="container">
          <h2 className="section-title">Simple Integration</h2>
          <div className="code-example">
            <pre><code>{`# Give your AI agent tax calculation tools
from cosilico import calculate

result = calculate(
    variables=["income_tax", "eitc", "snap_benefits"],
    inputs={
        "employment_income": 45000,
        "filing_status": "single",
        "state": "CA",
    },
    year=2025
)

# Returns structured data with legal citations
# {
#   "income_tax": 4235.00,
#   "income_tax_citation": "26 USC § 1",
#   "eitc": 632.00,
#   "eitc_citation": "26 USC § 32",
#   ...
# }`}</code></pre>
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
              <p>Give AI reliable tools for taxes, benefits, eligibility. Structured outputs, not hallucinations.</p>
            </div>
            <div className="use-case">
              <h4>Microsimulation</h4>
              <p>Model policy impacts across millions of households. Census-scale analysis.</p>
            </div>
            <div className="use-case">
              <h4>Data Enrichment</h4>
              <p>Impute income, demographics, consumption to customer data. ML-enhanced attributes.</p>
            </div>
            <div className="use-case">
              <h4>Benefit Administration</h4>
              <p>Precise enough for production eligibility systems. Every calculation traceable.</p>
            </div>
            <div className="use-case">
              <h4>Financial Planning</h4>
              <p>Accurate tax calculations for personal finance apps. Multi-year projections.</p>
            </div>
            <div className="use-case">
              <h4>Policy Research</h4>
              <p>Model reforms with distributional analysis. Used by governments worldwide.</p>
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
              <strong>Cooperation in silico.</strong> We're building toward calibrated AI agents that
              truly represent society — not helpful assistants, but synthetic populations whose
              collective behavior matches real human distributions.
            </p>
            <p className="vision-text">
              The rules engine and microdata are the foundation. The APIs are the interface.
              The future is simulating societal trajectories to guide us toward outcomes
              that align with our collective values.
            </p>
            <p className="vision-text">
              100% open source. Because understanding society requires transparency.
            </p>
          </div>
          <div className="recursive-visual">
            <div className="simple-marquee-wrapper">
              <div className="simple-marquee">
                <div className="marquee-inner">
                  <span className="marquee-text"><span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili</span>
                  <span className="marquee-text"><span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Building</h2>
          <p>Open source. Apache 2.0. No API keys required to get started.</p>
          <div className="cta-buttons">
            <a href="https://github.com/CosilicoAI/cosilico-engine" className="btn btn-primary">
              View Engine on GitHub
            </a>
            <a href="https://github.com/CosilicoAI" className="btn btn-secondary">
              CosilicoAI Organization
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <Logo size={40} />
              <p className="footer-tagline">Simulating society together</p>
            </div>
            <div className="footer-sections">
              <div className="footer-section">
                <h5>Platform</h5>
                <a href="https://github.com/CosilicoAI/cosilico-engine">Rules Engine</a>
                <a href="#what-we-build">Microdata</a>
                <a href="#what-we-build">APIs</a>
              </div>
              <div className="footer-section">
                <h5>Resources</h5>
                <a href="https://github.com/CosilicoAI/cosilico-engine">Documentation</a>
                <a href="https://github.com/CosilicoAI">GitHub</a>
              </div>
              <div className="footer-section">
                <h5>Built With</h5>
                <a href="https://policyengine.org" target="_blank" rel="noopener noreferrer">PolicyEngine</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Cosilico Inc. Open source under Apache 2.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
