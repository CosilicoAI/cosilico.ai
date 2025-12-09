import React, { useState } from "react";
import "../styles/Architecture.css";
import { StatuteTree } from "../components/architecture/StatuteTree";
import { IndexingDemo } from "../components/architecture/IndexingDemo";
import { STATUTE_TREE, CODE_SAMPLES } from "../components/architecture/StatuteData";

const VALIDATORS = [
  {
    id: "syntax",
    icon: "✓",
    title: "Syntax Valid",
    short: "DSL parses without errors",
    boxTitle: "DSL Parser Validation",
    boxDesc: "Generated code must be valid Cosilico DSL. The parser checks module declarations, variable definitions, formula syntax, type annotations, and entity/period specifications.",
    metrics: [
      { value: "100%", label: "parse rate required" },
      { value: "<1s", label: "validation time" },
    ],
  },
  {
    id: "refs",
    icon: "🔗",
    title: "References Resolve",
    short: "All statute paths exist",
    boxTitle: "Reference Graph Validation",
    boxDesc: "Every reference in the code must resolve to an existing variable or parameter. The engine builds a dependency graph and verifies all statute paths exist in the codebase.",
    metrics: [
      { value: "0", label: "dangling refs allowed" },
      { value: "DAG", label: "no circular deps" },
    ],
  },
  {
    id: "tests",
    icon: "🧪",
    title: "Unit Tests",
    short: "Edge cases and known scenarios pass",
    boxTitle: "Test Suite Validation",
    boxDesc: "Hand-written test cases covering edge cases, boundary conditions, and known IRS examples from publications. Each variable must pass its associated test scenarios.",
    metrics: [
      { value: "100+", label: "test cases per variable" },
      { value: "IRS", label: "official examples" },
    ],
  },
  {
    id: "pe",
    icon: "🎯",
    title: "PolicyEngine Match",
    short: "Results align with PE microsimulation",
    boxTitle: "PolicyEngine as Ground Truth",
    boxDesc: "The ultimate validation: compile DSL to Python and run against PolicyEngine's battle-tested microsimulation. Results must match across thousands of synthetic households.",
    metrics: [
      { value: "50k+", label: "test households" },
      { value: "99.9%", label: "match threshold" },
      { value: "$0.01", label: "max deviation" },
    ],
    highlight: true,
  },
];

export default function ArchitecturePage() {
  const [selected, setSelected] = useState<string | null>("32/a/1");
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(["32", "32/a", "32/a/2", "32/c", "32/c/3", "32/b", "32/b/2", "32/j"])
  );
  const [selectedValidator, setSelectedValidator] = useState<string>("pe");

  const toggleExpanded = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpanded(next);
  };

  const selectedCode = selected ? CODE_SAMPLES[selected] : null;

  return (
    <div className="architecture-page">
      {/* Blueprint Grid Background */}
      <div className="blueprint-grid" />

      {/* Hero */}
      <section className="arch-hero">
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">cosilico-engine</span>
          </div>
          <div className="terminal-content">
            <div className="type-line">
              <span className="prompt">$</span>
              <span className="command">cosilico</span>
              <span className="flag">--explain</span>
              <span className="arg">architecture</span>
            </div>
          </div>
        </div>

        <h1>
          <span className="hero-prefix">WHERE</span>
          <span className="hero-main">LAW = CODE</span>
        </h1>
        <p className="arch-subtitle">
          Every formula traced to statute. Every path a legal citation.
          <br />
          Inflation-indexed. Three-tier resolved. Fully auditable.
        </p>

        <div className="hero-badges">
          <span className="badge">statute-organized</span>
          <span className="badge">multi-jurisdiction</span>
          <span className="badge">cpi-indexed</span>
        </div>
      </section>

      {/* Core Principles */}
      <section className="arch-principles">
        <div className="principle-grid">
          <div className="principle-card">
            <div className="card-number">01</div>
            <div className="card-content">
              <h3>PATH = CITATION</h3>
              <p>
                <code>statute/26/32/a/1/</code> maps directly to
                "26 USC §32(a)(1)". The filesystem IS the citation system.
              </p>
            </div>
          </div>
          <div className="principle-card">
            <div className="card-number">02</div>
            <div className="card-content">
              <h3>INDEXED BY DESIGN</h3>
              <p>
                Dollar amounts encode the indexing <em>rule</em>, not
                hardcoded current values. Works for any year: past, present, or projected.
              </p>
            </div>
          </div>
          <div className="principle-card">
            <div className="card-number">03</div>
            <div className="card-content">
              <h3>LEGAL DIFF = CODE DIFF</h3>
              <p>
                When Congress amends §32(b)(2), the git diff shows exactly what changed.
                Full version history of law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="arch-explorer">
        <div className="section-header">
          <span className="section-label">INTERACTIVE</span>
          <h2>Statute → Code Explorer</h2>
          <p>Navigate the tree to see how USC sections map to DSL files.</p>
        </div>

        <div className="explorer-container">
          <div className="explorer-tree">
            <div className="tree-header">
              <span className="tree-icon">📜</span>
              <span className="tree-title">26 USC</span>
              <span className="tree-subtitle">Internal Revenue Code</span>
            </div>
            <div className="tree-body">
              <StatuteTree
                node={STATUTE_TREE}
                selected={selected}
                onSelect={setSelected}
                expanded={expanded}
                onToggle={toggleExpanded}
              />
            </div>
          </div>

          <div className="explorer-code">
            <div className="code-header">
              <div className="code-path-group">
                <span className="code-icon">📄</span>
                {selected && selectedCode ? (
                  <>
                    <span className="code-path">statute/26/{selected}/{selectedCode.file}</span>
                  </>
                ) : (
                  <span className="code-path">Select a section...</span>
                )}
              </div>
              <div className="code-actions">
                <button className="code-action" title="Copy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
            <pre className="code-content">
              <code>{selectedCode?.code || "// Select a statute section to view implementation"}</code>
            </pre>
            {selected && (
              <div className="code-footer">
                <span className="code-ref">
                  ref: 26 USC § {selected.replace(/\//g, "(")}{")"})
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Indexing Section */}
      <section className="arch-indexing">
        <div className="section-header">
          <span className="section-label">LIVE DEMO</span>
          <h2>Three-Tier Parameter Resolution</h2>
          <p>
            See how the engine resolves inflation-indexed amounts using official values,
            forecasts, or real-time calculations.
          </p>
        </div>

        <IndexingDemo />

        <div className="indexing-explanation">
          <h4>How It Works</h4>
          <ol>
            <li>
              <strong>PUBLISHED</strong> — Official IRS values from Revenue Procedures.
              Authoritative. Used when available.
            </li>
            <li>
              <strong>PROJECTED</strong> — Our calculation using CBO inflation forecasts
              and the indexing rule from §32(j).
            </li>
            <li>
              <strong>CALCULATED</strong> — On-the-fly computation from base year value
              × index ratio. Always available.
            </li>
          </ol>
        </div>
      </section>

      {/* RL Training Section */}
      <section className="arch-rl">
        <div className="section-header">
          <span className="section-label">AI-POWERED</span>
          <h2>Reinforcement Learning Encoding</h2>
          <p>AI agents learn to translate legal text into executable code through iterative refinement.</p>
        </div>

        <div className="rl-diagram">
          <div className="rl-flow">
            <div className="rl-node input">
              <div className="rl-icon">📜</div>
              <h4>Legal Text</h4>
              <p>Statute sections, regulations, IRS guidance</p>
            </div>

            <div className="rl-arrow">→</div>

            <div className="rl-node agent">
              <div className="rl-icon">🤖</div>
              <h4>DSL Agent</h4>
              <p>LLM with domain-specific prompting</p>
            </div>

            <div className="rl-arrow">→</div>

            <div className="rl-node output">
              <div className="rl-icon">⚡</div>
              <h4>Cosilico DSL</h4>
              <p>Executable statute-organized code</p>
            </div>
          </div>

          <div className="rl-validators">
            {VALIDATORS.map((v) => (
              <div
                key={v.id}
                className={`validator-card ${selectedValidator === v.id ? "selected" : ""}`}
                onClick={() => setSelectedValidator(v.id)}
              >
                <span className="validator-icon">{v.icon}</span>
                <h5>{v.title}</h5>
                <p>{v.short}</p>
              </div>
            ))}
          </div>

          {(() => {
            const v = VALIDATORS.find((x) => x.id === selectedValidator);
            if (!v) return null;
            return (
              <div className={`validator-detail-box ${v.id}`}>
                <div className="validator-detail-header">
                  <span className="validator-detail-icon">{v.icon}</span>
                  <span className="validator-detail-title">{v.boxTitle}</span>
                </div>
                <p>{v.boxDesc}</p>
                <div className="validator-detail-metrics">
                  {v.metrics.map((m, i) => (
                    <div key={i} className="validator-metric">
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="rl-feedback-loop">
            <div className="feedback-loop-line" />
            <span className="feedback-label reward">⟳ FEEDBACK LOOP</span>
            <div className="feedback-loop-line" />
          </div>
        </div>

        <div className="rl-explanation">
          <div className="rl-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Generate</h4>
              <p>Agent reads legal text and produces DSL code following statute-path conventions.</p>
            </div>
          </div>
          <div className="rl-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Validate</h4>
              <p>Multi-stage validators check syntax, references, test cases, and audit alignment.</p>
            </div>
          </div>
          <div className="rl-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Reward</h4>
              <p>Composite score drives prompt evolution—successful patterns propagate.</p>
            </div>
          </div>
          <div className="rl-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Iterate</h4>
              <p>System prompts evolve via tournament selection, improving encoding quality over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Law Archive Section */}
      <section className="arch-lawarchive">
        <div className="section-header">
          <span className="section-label">DATA LAYER</span>
          <h2>Law Archive: Single Source of Truth</h2>
          <p>
            Raw statute text, structured rules, and encoded formulas live together.
            The AI reads from and writes to the same archive.
          </p>
        </div>

        <div className="lawarchive-diagram">
          <div className="la-flow">
            <div className="la-source">
              <div className="la-box sources">
                <h4>Official Sources</h4>
                <div className="source-list">
                  <span className="source-item">📜 USLM XML (uscode.house.gov)</span>
                  <span className="source-item">📋 eCFR (regulations)</span>
                  <span className="source-item">🏛️ State codes</span>
                </div>
              </div>
              <div className="la-arrow">↓</div>
            </div>

            <div className="la-archive">
              <div className="la-box archive">
                <div className="archive-header">
                  <span className="archive-icon">🗄️</span>
                  <h4>cosilico-lawarchive</h4>
                </div>
                <div className="archive-layers">
                  <div className="archive-layer">
                    <span className="layer-label">Raw Text</span>
                    <code>"The credit under this section..."</code>
                  </div>
                  <div className="archive-layer">
                    <span className="layer-label">Structured Rules</span>
                    <code>{`{ "type": "phase_in", "rate": 0.34 }`}</code>
                  </div>
                  <div className="archive-layer">
                    <span className="layer-label">Encoded Formula</span>
                    <code>return max(0, earned_income * rate)</code>
                  </div>
                </div>
                <div className="archive-index">
                  Indexed by: <code>citation + vintage + application_date</code>
                </div>
              </div>
            </div>

            <div className="la-consumers">
              <div className="la-arrow">↓</div>
              <div className="consumer-row">
                <div className="la-box consumer">
                  <span className="consumer-icon">🤖</span>
                  <h5>AI Encoder</h5>
                  <p>Reads law, writes code</p>
                </div>
                <div className="la-box consumer">
                  <span className="consumer-icon">⚙️</span>
                  <h5>Engine</h5>
                  <p>Compiles formulas</p>
                </div>
                <div className="la-box consumer">
                  <span className="consumer-icon">💻</span>
                  <h5>CLI</h5>
                  <p>pull / push / sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bitemporal-section">
          <h3>Bi-Temporal Model: Vintage + Application Date</h3>
          <p className="bitemporal-intro">
            The law specifies <em>when rules apply</em>, not just <em>what the rules are</em>.
            A single vintage (e.g., TCJA) defines different formulas for different years.
          </p>

          <div className="bitemporal-example">
            <div className="vintage-card">
              <div className="vintage-header">
                <span className="vintage-badge">TCJA</span>
                <span className="vintage-date">Vintage: 2017-12-22</span>
              </div>
              <div className="vintage-rules">
                <div className="rule-row">
                  <span className="rule-period">2018-2025</span>
                  <span className="rule-formula">Refundable = min($1,400, 15% × (EI - $2,500))</span>
                </div>
                <div className="rule-row sunset">
                  <span className="rule-period">2026+</span>
                  <span className="rule-formula">Refundable = 15% × (EI - $3,000) <span className="sunset-tag">sunset</span></span>
                </div>
              </div>
            </div>

            <div className="vintage-card arpa">
              <div className="vintage-header">
                <span className="vintage-badge">ARPA</span>
                <span className="vintage-date">Vintage: 2021-03-11</span>
              </div>
              <div className="vintage-rules">
                <div className="rule-row">
                  <span className="rule-period">2021 only</span>
                  <span className="rule-formula">Refundable = 100% (fully refundable)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bitemporal-query">
            <code className="query-example">
              lawarchive.get_formula("ctc_refundable", vintage="2017-12-22", application_date="2030-01-01")
              <span className="query-result">→ ctc_refundable__tcja_sunset</span>
            </code>
          </div>
        </div>

        <div className="cli-workflow">
          <h3>Developer Workflow</h3>
          <div className="cli-steps">
            <div className="cli-step">
              <code>lawarchive pull "26 USC 32"</code>
              <span className="cli-desc">Download statute + encoding locally</span>
            </div>
            <div className="cli-step">
              <code>claude "update the phase-out logic"</code>
              <span className="cli-desc">AI or human edits the DSL</span>
            </div>
            <div className="cli-step">
              <code>lawarchive validate ./26/32/</code>
              <span className="cli-desc">Check syntax, types, tests</span>
            </div>
            <div className="cli-step">
              <code>lawarchive push ./26/32/</code>
              <span className="cli-desc">Upload with provenance tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Repo Architecture */}
      <section className="arch-repos">
        <div className="section-header">
          <span className="section-label">ECOSYSTEM</span>
          <h2>Repository Architecture</h2>
          <p>Simulate the economy: rules, data, dynamics, and AI.</p>
        </div>

        <div className="repo-diagram-full">
          {/* Top: User-facing package */}
          <div className="repo-tier orchestrator">
            <div className="tier-label">USER INTERFACE</div>
            <div className="repo-box main">
              <div className="repo-icon">📦</div>
              <h4>cosilico</h4>
              <code>pip install cosilico</code>
              <ul>
                <li>High-level simulation API</li>
                <li>Dynamics (behavioral responses)</li>
                <li>Scenario comparison</li>
                <li>Reform analysis</li>
              </ul>
            </div>
          </div>

          <div className="repo-connector vertical" />

          {/* Middle: Country packages */}
          <div className="repo-tier countries">
            <div className="tier-label">RULES + DATA</div>
            <div className="repo-pair">
              <div className="repo-box rules">
                <div className="repo-flag">🇺🇸</div>
                <h4>cosilico-us</h4>
                <code>statute/26/...</code>
                <span className="repo-type">Pure rules</span>
              </div>
              <div className="repo-box data">
                <div className="repo-icon">📊</div>
                <h4>cosilico-us-data</h4>
                <code>datasets/cps/...</code>
                <span className="repo-type">Microdata builder</span>
              </div>
            </div>
            <div className="repo-pair">
              <div className="repo-box rules">
                <div className="repo-flag">🇬🇧</div>
                <h4>cosilico-uk</h4>
                <code>statute/FA2024/...</code>
                <span className="repo-type">Pure rules</span>
              </div>
              <div className="repo-box data">
                <div className="repo-icon">📊</div>
                <h4>cosilico-uk-data</h4>
                <code>datasets/frs/...</code>
                <span className="repo-type">Microdata builder</span>
              </div>
            </div>
          </div>

          <div className="repo-connector vertical" />

          {/* Bottom: Core infrastructure */}
          <div className="repo-tier infrastructure">
            <div className="tier-label">INFRASTRUCTURE</div>
            <div className="repo-row">
              <div className="repo-box engine">
                <div className="repo-icon">⚙️</div>
                <h4>cosilico-engine</h4>
                <span className="repo-type">DSL parser + executor</span>
              </div>
              <div className="repo-box data-core">
                <div className="repo-icon">🔧</div>
                <h4>cosilico-data</h4>
                <span className="repo-type">Calibration + imputation</span>
              </div>
              <div className="repo-box ai">
                <div className="repo-icon">🤖</div>
                <h4>cosilico-ai</h4>
                <span className="repo-type">RL training system</span>
              </div>
            </div>
          </div>
        </div>

        <div className="repo-structure">
          <div className="structure-block">
            <div className="structure-header">Rules repo (cosilico-us):</div>
            <div className="structure-tree">
              <div className="tree-line">
                <span className="folder">statute/</span>
                <span className="comment"># Primary law</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">26/32/</span>
                <span className="comment"># IRC §32 EITC</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">7/2011/</span>
                <span className="comment"># 7 USC SNAP</span>
              </div>
              <div className="tree-line">
                <span className="folder">regs/</span>
                <span className="comment"># Regulations (CFR)</span>
              </div>
            </div>
          </div>
          <div className="structure-block">
            <div className="structure-header">Data repo (cosilico-us-data):</div>
            <div className="structure-tree">
              <div className="tree-line">
                <span className="folder">datasets/</span>
                <span className="comment"># Survey loaders</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">cps/</span>
                <span className="comment"># CPS ASEC</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">acs/</span>
                <span className="comment"># American Community Survey</span>
              </div>
              <div className="tree-line">
                <span className="folder">targets/</span>
                <span className="comment"># IRS SOI, SNAP totals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="arch-comparison">
        <div className="section-header">
          <span className="section-label">LANDSCAPE</span>
          <h2>How Cosilico Compares</h2>
          <p>Different approaches to encoding tax and benefit rules.</p>
        </div>

        <div className="comparison-table">
          <div className="comparison-header">
            <div className="comparison-cell header-feature">Feature</div>
            <div className="comparison-cell header-system">Cosilico</div>
            <div className="comparison-cell header-system">PolicyEngine</div>
            <div className="comparison-cell header-system">OpenFisca</div>
            <div className="comparison-cell header-system">Tax-Calculator</div>
            <div className="comparison-cell header-system">TAXSIM</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Citation-based paths</div>
            <div className="comparison-cell yes">✓ statute/26/32/a</div>
            <div className="comparison-cell no">✗ arbitrary names</div>
            <div className="comparison-cell no">✗ arbitrary names</div>
            <div className="comparison-cell no">✗ arbitrary names</div>
            <div className="comparison-cell no">✗ none</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Automatic indexing</div>
            <div className="comparison-cell yes">✓ three-tier resolution</div>
            <div className="comparison-cell partial">◐ parameter files</div>
            <div className="comparison-cell no">✗ manual</div>
            <div className="comparison-cell partial">◐ JSON parameters</div>
            <div className="comparison-cell no">✗ hard-coded</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">AI-assisted authoring</div>
            <div className="comparison-cell yes">✓ RL + validation</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Benefits + taxes</div>
            <div className="comparison-cell yes">✓ integrated</div>
            <div className="comparison-cell yes">✓ integrated</div>
            <div className="comparison-cell yes">✓ integrated</div>
            <div className="comparison-cell no">✗ taxes only</div>
            <div className="comparison-cell no">✗ taxes only</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Microsimulation</div>
            <div className="comparison-cell yes">✓ built-in</div>
            <div className="comparison-cell yes">✓ US + UK + Canada</div>
            <div className="comparison-cell yes">✓ multiple countries</div>
            <div className="comparison-cell yes">✓ US federal</div>
            <div className="comparison-cell yes">✓ US federal + states</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Open source</div>
            <div className="comparison-cell yes">✓ Apache 2.0</div>
            <div className="comparison-cell yes">✓ AGPL</div>
            <div className="comparison-cell yes">✓ AGPL</div>
            <div className="comparison-cell yes">✓ MIT</div>
            <div className="comparison-cell partial">◐ source available</div>
          </div>
        </div>

        <div className="comparison-notes">
          <div className="comparison-note">
            <strong>PolicyEngine:</strong> OpenFisca-based US, UK, and Canada microsimulation with enhanced parameters, calibrated microdata, and web interface. Cosilico uses PE as ground truth for RL validation.
            <a href="https://policyengine.org" target="_blank" rel="noopener noreferrer" className="source-link">policyengine.org</a>
          </div>
          <div className="comparison-note">
            <strong>OpenFisca:</strong> Python framework for tax-benefit systems used by France, New Zealand, and others. Foundation for PolicyEngine.
            <a href="https://openfisca.org" target="_blank" rel="noopener noreferrer" className="source-link">openfisca.org</a>
          </div>
          <div className="comparison-note">
            <strong>Tax-Calculator:</strong> PSL's open-source Python model of the US federal individual income and payroll tax system. JSON-based parameters.
            <a href="https://taxcalc.pslmodels.org" target="_blank" rel="noopener noreferrer" className="source-link">taxcalc.pslmodels.org</a>
          </div>
          <div className="comparison-note">
            <strong>TAXSIM:</strong> NBER's federal + state income tax calculator. Fortran-based, used widely in economics research since 1983.
            <a href="https://taxsim.nber.org" target="_blank" rel="noopener noreferrer" className="source-link">taxsim.nber.org</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="arch-cta">
        <div className="cta-content">
          <h2>Explore the Source</h2>
          <p>The engine is open source. The simulation is open to all.</p>
          <div className="cta-buttons">
            <a href="https://github.com/PolicyEngine/cosilico-engine" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a href="https://docs.cosilico.ai/architecture" className="btn-secondary">
              Read Documentation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
