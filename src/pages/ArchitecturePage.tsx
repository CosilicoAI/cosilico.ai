import React, { useState } from "react";
import "../styles/Architecture.css";
import { StatuteTree } from "../components/architecture/StatuteTree";
import { IndexingDemo } from "../components/architecture/IndexingDemo";
import { STATUTE_TREE, CODE_SAMPLES } from "../components/architecture/StatuteData";

export default function ArchitecturePage() {
  const [selected, setSelected] = useState<string | null>("32/a/1");
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(["32", "32/a", "32/a/2", "32/c", "32/c/3", "32/b", "32/b/2", "32/j"])
  );

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
                {selected ? (
                  <>
                    <span className="code-path">statute/26/{selected}/</span>
                    <span className={`code-type ${selectedCode?.type}`}>
                      .{selectedCode?.type}
                    </span>
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

          <div className="rl-feedback-loop">
            <svg viewBox="0 0 400 80" className="feedback-svg">
              <path d="M350 10 L350 50 L50 50 L50 10"
                    stroke="currentColor" strokeWidth="2" fill="none"
                    strokeDasharray="5,5" />
              <polygon points="50,10 45,20 55,20" fill="currentColor" />
            </svg>
            <div className="feedback-labels">
              <span className="feedback-label reward">REWARD SIGNAL</span>
            </div>
          </div>

          <div className="rl-validators">
            <div className="validator-card">
              <span className="validator-icon">✓</span>
              <h5>Syntax Valid</h5>
              <p>DSL parses without errors</p>
            </div>
            <div className="validator-card">
              <span className="validator-icon">🔗</span>
              <h5>References Resolve</h5>
              <p>All statute paths exist</p>
            </div>
            <div className="validator-card">
              <span className="validator-icon">🧪</span>
              <h5>Unit Tests</h5>
              <p>Edge cases and known scenarios pass</p>
            </div>
            <div className="validator-card highlight">
              <span className="validator-icon">🎯</span>
              <h5>PolicyEngine Match</h5>
              <p>Results align with PE microsimulation</p>
            </div>
          </div>

          <div className="pe-integration">
            <div className="pe-box">
              <div className="pe-header">
                <span className="pe-logo">PE</span>
                <span className="pe-title">PolicyEngine as Ground Truth</span>
              </div>
              <p>
                PolicyEngine's battle-tested microsimulation provides the reward signal.
                Generated DSL code is compiled and run against thousands of household scenarios—
                outputs must match PE's calculations within tolerance.
              </p>
              <div className="pe-metrics">
                <div className="pe-metric">
                  <span className="metric-value">50k+</span>
                  <span className="metric-label">test households</span>
                </div>
                <div className="pe-metric">
                  <span className="metric-value">99.9%</span>
                  <span className="metric-label">match threshold</span>
                </div>
                <div className="pe-metric">
                  <span className="metric-value">$0.01</span>
                  <span className="metric-label">max deviation</span>
                </div>
              </div>
            </div>
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

      {/* Multi-Repo Architecture */}
      <section className="arch-repos">
        <div className="section-header">
          <span className="section-label">ECOSYSTEM</span>
          <h2>Multi-Jurisdiction Architecture</h2>
          <p>One engine. Many jurisdictions. Same structure everywhere.</p>
        </div>

        <div className="repo-diagram">
          <div className="repo-core">
            <div className="repo-box engine">
              <div className="repo-icon">⚙️</div>
              <h4>cosilico-engine</h4>
              <p>Core simulation engine</p>
              <ul>
                <li>DSL parser & executor</li>
                <li>Indexing system</li>
                <li>RL training loop</li>
                <li>Multi-target compilation</li>
              </ul>
            </div>
          </div>

          <div className="repo-arrows">
            <svg viewBox="0 0 100 60" className="arrow-svg">
              <path d="M50 0 L50 30 M50 30 L10 60 M50 30 L50 60 M50 30 L90 60"
                    stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="10" cy="60" r="3" fill="currentColor" />
              <circle cx="50" cy="60" r="3" fill="currentColor" />
              <circle cx="90" cy="60" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="repo-jurisdictions">
            <div className="repo-box jurisdiction us">
              <div className="repo-flag">🇺🇸</div>
              <h4>cosilico-us</h4>
              <code>statute/26/...</code>
              <span className="repo-desc">Federal Tax Code</span>
            </div>
            <div className="repo-box jurisdiction ca">
              <div className="repo-flag">🐻</div>
              <h4>cosilico-us-ca</h4>
              <code>statute/rtc/...</code>
              <span className="repo-desc">California R&T Code</span>
            </div>
            <div className="repo-box jurisdiction uk">
              <div className="repo-flag">🇬🇧</div>
              <h4>cosilico-uk</h4>
              <code>statute/FA2024/...</code>
              <span className="repo-desc">UK Finance Acts</span>
            </div>
          </div>
        </div>

        <div className="repo-structure">
          <div className="structure-block">
            <div className="structure-header">Each jurisdiction repo:</div>
            <div className="structure-tree">
              <div className="tree-line">
                <span className="folder">statute/</span>
                <span className="comment"># Primary law</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">26/32/</span>
                <span className="comment"># §32 EITC</span>
              </div>
              <div className="tree-line">
                <span className="folder">regs/</span>
                <span className="comment"># Regulations (26 CFR)</span>
              </div>
              <div className="tree-line">
                <span className="folder">guidance/</span>
                <span className="comment"># IRS notices, Rev. Procs</span>
              </div>
            </div>
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
