import React, { useState } from "react";
import * as styles from "../styles/architecture.css";
import { StatuteTree } from "../components/architecture/StatuteTree";
import { IndexingDemo } from "../components/architecture/IndexingDemo";
import { STATUTE_TREE, CODE_SAMPLES } from "../components/architecture/StatuteData";
import PageLayout from "../components/PageLayout";

const VALIDATORS = [
  {
    id: "syntax",
    icon: "✓",
    title: "Syntax valid",
    short: "DSL parses without errors",
    boxTitle: "DSL parser validation",
    boxDesc: "Generated code must be valid Cosilico DSL. The parser checks module declarations, variable definitions, formula syntax, type annotations, and entity/period specifications.",
    metrics: [
      { value: "100%", label: "parse rate required" },
      { value: "<1s", label: "validation time" },
    ],
  },
  {
    id: "refs",
    icon: "🔗",
    title: "References resolve",
    short: "All statute paths exist",
    boxTitle: "Reference graph validation",
    boxDesc: "Every reference in the code must resolve to an existing variable or parameter. The engine builds a dependency graph and verifies all statute paths exist in the codebase.",
    metrics: [
      { value: "0", label: "dangling refs allowed" },
      { value: "DAG", label: "no circular deps" },
    ],
  },
  {
    id: "tests",
    icon: "🧪",
    title: "TDD tests",
    short: "Our tests—authoritative, statute-derived",
    boxTitle: "Test-driven development",
    boxDesc: "Hand-crafted tests constructed from statute text and IRS examples. These are OUR authoritative tests—not borrowed from external tools. Used during development to verify the encoding matches our understanding of the law. Lives in cosilico-us alongside the encoded formulas.",
    metrics: [
      { value: "TDD", label: "test-first approach" },
      { value: "statute", label: "derived from law" },
    ],
  },
  {
    id: "consensus",
    icon: "📊",
    title: "External validation",
    short: "Comparison with TAXSIM, PolicyEngine, others",
    boxTitle: "External tool validation report",
    boxDesc: "Compare results against external tools (TAXSIM, PolicyEngine, TaxAct). External tools may have bugs—we report consistency AND document disagreements with statute citations. When we're confident and they disagree, we file upstream issues.",
    metrics: [
      { value: "4+", label: "external systems" },
      { value: "audit", label: "disagreement reports" },
      { value: "cite", label: "statute references" },
    ],
    highlight: true,
  },
];

export default function ArchitecturePage() {
  const [selected, setSelected] = useState<string | null>("32/a/1");
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(["32", "32/a", "32/a/2", "32/c", "32/c/3", "32/b", "32/b/2", "32/j"])
  );
  const [selectedValidator, setSelectedValidator] = useState<string>("consensus");

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
    <PageLayout>
      {/* Hero */}
      <section className={styles.archHero}>
        <div className={styles.heroTerminal}>
          <div className={styles.terminalBar}>
            <span className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
            <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
            <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
            <span className={styles.terminalTitle}>cosilico-engine</span>
          </div>
          <div className={styles.terminalContent}>
            <div className={styles.typeLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cosilico</span>
              <span className={styles.flag}>--explain</span>
              <span className={styles.arg}>architecture</span>
            </div>
          </div>
        </div>

        <h1>
          <span className={styles.heroPrefix}>WHERE</span>
          <span className={styles.heroMain}>LAW = CODE</span>
        </h1>
        <p className={styles.archSubtitle}>
          Every formula traced to statute. Every path a legal citation.
          <br />
          Inflation-indexed. Three-tier resolved. Fully auditable.
        </p>

        <div className={styles.heroBadges}>
          <span className={styles.badge}>statute-organized</span>
          <span className={styles.badge}>multi-jurisdiction</span>
          <span className={styles.badge}>cpi-indexed</span>
        </div>
      </section>

      {/* Core Principles */}
      <section className={styles.archSection}>
        <div className={styles.principleGrid}>
          <div className={styles.principleCard}>
            <div className={styles.cardNumber}>01</div>
            <div className={styles.cardContent}>
              <h3>PATH = CITATION</h3>
              <p>
                <code>statute/26/32/a/1/</code> maps directly to
                "26 USC §32(a)(1)". The filesystem IS the citation system.
              </p>
            </div>
          </div>
          <div className={styles.principleCard}>
            <div className={styles.cardNumber}>02</div>
            <div className={styles.cardContent}>
              <h3>INDEXED BY DESIGN</h3>
              <p>
                Dollar amounts encode the indexing <em>rule</em>, not
                hardcoded current values. Works for any year: past, present, or projected.
              </p>
            </div>
          </div>
          <div className={styles.principleCard}>
            <div className={styles.cardNumber}>03</div>
            <div className={styles.cardContent}>
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
      <section className={styles.archSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>INTERACTIVE</span>
          <h2>Statute → code explorer</h2>
          <p>Navigate the tree to see how USC sections map to DSL files.</p>
        </div>

        <div className={styles.explorerContainer}>
          <div className={styles.explorerTree}>
            <div className={styles.treeHeader}>
              <span className={styles.treeIcon}>📜</span>
              <span className={styles.treeTitle}>26 USC</span>
              <span className={styles.treeSubtitle}>Internal Revenue Code</span>
            </div>
            <div className={styles.treeBody}>
              <StatuteTree
                node={STATUTE_TREE}
                selected={selected}
                onSelect={setSelected}
                expanded={expanded}
                onToggle={toggleExpanded}
              />
            </div>
          </div>

          <div className={styles.explorerCode}>
            <div className={styles.codeHeader}>
              <div className={styles.codePathGroup}>
                <span className={styles.codeIcon}>📄</span>
                {selected && selectedCode ? (
                  <>
                    <span className={styles.codePath}>statute/26/{selected}/{selectedCode.file}</span>
                  </>
                ) : (
                  <span className={styles.codePath}>Select a section...</span>
                )}
              </div>
              <div className={styles.codeActions}>
                <button className={styles.codeAction} title="Copy">
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
          <h2>Three-tier parameter resolution</h2>
          <p>
            See how the engine resolves inflation-indexed amounts using official values,
            forecasts, or real-time calculations.
          </p>
        </div>

        <IndexingDemo />

        <div className="indexing-explanation">
          <h4>How it works</h4>
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

        {/* Override Resolution Architecture */}
        <div className="override-architecture">
          <h3>Override resolution hierarchy</h3>
          <p className="override-intro">
            The engine implements a declarative override system where IRS guidance explicitly
            declares which statute parameters it overrides. This eliminates ambiguity and
            ensures authoritative values always take precedence.
          </p>

          <div className="override-flow">
            <div className="override-stage">
              <div className="stage-box statute-stage">
                <span className="stage-icon">📜</span>
                <h5>Statute files</h5>
                <code className="stage-path">statute/26/32/b/2/A/base_amounts.yaml</code>
                <p className="stage-desc">Raw statutory values from 26 USC §32</p>
                <pre className="stage-code">
{`earned_income_amount:
  implements: statute/26/32/b/2/A
  values:
    0: 6370  # Base year 2017
    1: 9540
    2: 13520`}
                </pre>
              </div>

              <div className="stage-arrow">↓ Overrides</div>

              <div className="stage-box irs-stage">
                <span className="stage-icon">📋</span>
                <h5>IRS guidance</h5>
                <code className="stage-path">irs/rev-proc-2023-34/eitc-2024.yaml</code>
                <p className="stage-desc">Inflation-adjusted values with override declarations</p>
                <pre className="stage-code">
{`earned_income_amount:
  implements: irs/rev-proc-2023-34#3.01
  overrides: statute/26/32/b/2/A/base_amounts#earned_income_amount
  values:
    0: 8260  # 2024 adjusted
    1: 12390
    2: 17030`}
                </pre>
              </div>

              <div className="stage-arrow">↓ resolves to</div>

              <div className="stage-box resolution-stage">
                <span className="stage-icon">⚙️</span>
                <h5>Engine resolution</h5>
                <p className="stage-desc">Formula references statute, engine returns IRS value</p>
                <div className="resolution-logic">
                  <div className="logic-step">
                    <span className="step-num">1.</span>
                    <span className="step-text">Formula: <code>param("statute/26/32/b/2/A/base_amounts#earned_income_amount")</code></span>
                  </div>
                  <div className="logic-step">
                    <span className="step-num">2.</span>
                    <span className="step-text">Resolver checks for IRS override for tax year 2024</span>
                  </div>
                  <div className="logic-step">
                    <span className="step-num">3.</span>
                    <span className="step-text">Returns <strong>8260</strong> from Rev. Proc. 2023-34</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="override-benefits">
            <h4>Why this design</h4>
            <div className="benefit-grid">
              <div className="benefit-card">
                <span className="benefit-icon">🎯</span>
                <h5>Explicit declarations</h5>
                <p>IRS files declare <code>overrides:</code> attribute — no implicit matching</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🔗</span>
                <h5>Authoritative chain</h5>
                <p>IRS guidance → regulation → statute — clear precedence</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">📍</span>
                <h5>Stable references</h5>
                <p>Formulas reference statute paths — overrides are transparent</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">✓</span>
                <h5>Audit trail</h5>
                <p>Every value traces to its source document and version</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RL Training Section */}
      <section className="arch-rl">
        <div className="section-header">
          <span className="section-label">AI-POWERED</span>
          <h2>Reinforcement learning encoding</h2>
          <p>AI agents learn to translate legal text into executable code through iterative refinement.</p>
        </div>

        <div className="rl-diagram">
          <div className="rl-flow">
            <div className="rl-node input">
              <div className="rl-icon">📜</div>
              <h4>Legal text</h4>
              <p>Statute sections, regulations, IRS guidance</p>
            </div>

            <div className="rl-arrow">→</div>

            <div className="rl-node agent">
              <div className="rl-icon">🤖</div>
              <h4>DSL agent</h4>
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
              <h4>Test & Validate</h4>
              <p>TDD tests verify statute compliance. External validation compares against other systems, documenting any disagreements.</p>
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
          <h2>Law archive: single source of truth</h2>
          <p>
            Raw statute text, IRS guidance PDFs, and encoded formulas—all versioned and served via API.
            Daily crawlers detect changes. Every document has a stable ID.
          </p>
        </div>

        <div className="lawarchive-diagram">
          <div className="la-flow">
            <div className="la-source">
              <div className="la-box sources">
                <h4>Official sources</h4>
                <div className="source-list">
                  <span className="source-item">📜 USLM XML (uscode.house.gov)</span>
                  <span className="source-item">📋 IRS Rev. Procs (irs.gov)</span>
                  <span className="source-item">🏛️ State codes + guidance</span>
                </div>
                <div className="source-crawler">
                  <span className="crawler-badge">🔄 Daily crawler</span>
                  <span className="crawler-desc">Detects changes via content hash</span>
                </div>
              </div>
              <div className="la-arrow">↓</div>
            </div>

            <div className="la-archive">
              <div className="la-box archive storage-arch">
                <div className="archive-header">
                  <span className="archive-icon">🗄️</span>
                  <h4>cosilico-lawarchive</h4>
                </div>
                <div className="storage-split">
                  <div className="storage-component">
                    <span className="storage-icon">☁️</span>
                    <h5>Cloudflare R2</h5>
                    <p>PDFs, HTML snapshots</p>
                    <code className="storage-path">us/guidance/irs/rp-23-34.pdf</code>
                  </div>
                  <div className="storage-component">
                    <span className="storage-icon">🐘</span>
                    <h5>Supabase Postgres</h5>
                    <p>Metadata, versions, refs</p>
                    <code className="storage-path">sources → versions → refs</code>
                  </div>
                </div>
                <div className="archive-index">
                  Path = ID: <code>us/guidance/irs/rp-23-34</code> (matches cosilico-us)
                </div>
              </div>
            </div>

            <div className="la-consumers">
              <div className="la-arrow">↓</div>
              <div className="consumer-row">
                <div className="la-box consumer api-consumer">
                  <span className="consumer-icon">🌐</span>
                  <h5>REST API</h5>
                  <p>GET /v1/us/guidance/irs/rp-23-34</p>
                </div>
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
              </div>
            </div>
          </div>
        </div>

        <div className="bitemporal-section">
          <h3>Bi-temporal model: vintage + application date</h3>
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
          <h3>API access patterns</h3>
          <div className="cli-steps">
            <div className="cli-step">
              <code>GET /v1/us/guidance/irs/rp-23-34</code>
              <span className="cli-desc">Latest version of document</span>
            </div>
            <div className="cli-step">
              <code>GET /v1/us/guidance/irs/rp-23-34?as_of=2024-06-15</code>
              <span className="cli-desc">Version that was current on that date</span>
            </div>
            <div className="cli-step">
              <code>GET /v1/us/guidance/irs/rp-23-34/versions</code>
              <span className="cli-desc">All versions with content hashes</span>
            </div>
            <div className="cli-step">
              <code>GET /v1/us/guidance/irs?applies_to_year=2024&variable=eitc</code>
              <span className="cli-desc">Find document for tax year + variable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Target Compilation */}
      <section className="arch-compilation">
        <div className="section-header">
          <span className="section-label">COMPILER</span>
          <h2>Multi-target code generation</h2>
          <p>Write rules once in DSL, compile to Python, JavaScript, WASM, and SQL.</p>
        </div>

        <div className="compilation-flow">
          <div className="flow-stage source">
            <div className="stage-icon">📝</div>
            <h4>DSL source</h4>
            <pre className="code-sample">
{`variable eitc(TaxUnit, Year, Money):
  earned_income = wages + self_employment
  phase_in = min(
    param("eitc.max_credit"),
    earned_income * param("eitc.phase_in_rate")
  )
  return phase_in`}
            </pre>
          </div>

          <div className="flow-arrow-down">↓ Parse → Analyze → Optimize</div>

          <div className="flow-targets">
            <div className="target-card python">
              <div className="target-header">
                <span className="target-icon">🐍</span>
                <h5>Python (NumPy)</h5>
                <span className="target-status">✓ Working</span>
              </div>
              <pre className="target-code">
{`def eitc(inputs, params):
    earned_income = (
        inputs['wages'] +
        inputs['self_employment']
    )
    phase_in = np.minimum(
        params['eitc.max_credit'],
        earned_income * params['eitc.phase_in_rate']
    )
    return phase_in`}
              </pre>
              <div className="target-use-case">Microsimulation</div>
            </div>

            <div className="target-card javascript">
              <div className="target-header">
                <span className="target-icon">⚡</span>
                <h5>JavaScript</h5>
                <span className="target-status">✓ Working</span>
              </div>
              <pre className="target-code">
{`function eitc(inputs, params) {
  const earned_income =
    inputs.wages +
    inputs.self_employment;
  const phase_in = Math.min(
    params['eitc.max_credit'],
    earned_income * params['eitc.phase_in_rate']
  );
  return phase_in;
}`}
              </pre>
              <div className="target-use-case">Browser / Cloudflare Edge</div>
            </div>

            <div className="target-card wasm">
              <div className="target-header">
                <span className="target-icon">⚙️</span>
                <h5>WebAssembly</h5>
                <span className="target-status">○ Planned</span>
              </div>
              <pre className="target-code">
{`(func $eitc (param $wages f64)
             (param $se f64)
             (result f64)
  (local $ei f64)
  (local.set $ei
    (f64.add (local.get $wages)
             (local.get $se)))
  ...)`}
              </pre>
              <div className="target-use-case">Native performance</div>
            </div>

            <div className="target-card sql">
              <div className="target-header">
                <span className="target-icon">🗄️</span>
                <h5>SQL</h5>
                <span className="target-status">○ Planned</span>
              </div>
              <pre className="target-code">
{`CREATE FUNCTION eitc(
  wages DECIMAL,
  self_employment DECIMAL
) RETURNS DECIMAL AS $$
  SELECT LEAST(
    eitc_max_credit,
    (wages + self_employment) * eitc_phase_in_rate
  )
$$ LANGUAGE SQL;`}
              </pre>
              <div className="target-use-case">Batch processing</div>
            </div>
          </div>
        </div>

        <div className="validation-strategy">
          <h3>Two-phase validation strategy</h3>
          <div className="validation-phases">
            <div className="phase-card phase-1">
              <div className="phase-header">
                <span className="phase-number">1</span>
                <h4>Reference validation</h4>
                <span className="phase-frequency">Once per variable</span>
              </div>
              <p>Validate against PolicyEngine (reference implementation) to ensure correctness.</p>
              <pre className="phase-code">
{`cosilico validate eitc \\
  --reference policyengine-us \\
  --cases 1000`}
              </pre>
              <div className="phase-checks">
                <span className="check">✓ Test 1000 random cases</span>
                <span className="check">✓ Compare outputs with PolicyEngine</span>
                <span className="check">✓ Flag any discrepancies</span>
              </div>
            </div>

            <div className="phase-card phase-2">
              <div className="phase-header">
                <span className="phase-number">2</span>
                <h4>Cross-compilation consistency</h4>
                <span className="phase-frequency">Continuous (CI)</span>
              </div>
              <p>Ensure ALL compilation targets produce identical results for the same inputs.</p>
              <div className="cross-compile-diagram">
                <div className="cc-source">DSL Source</div>
                <div className="cc-arrows">
                  <div className="cc-arrow">→ Python</div>
                  <div className="cc-arrow">→ JavaScript</div>
                  <div className="cc-arrow">→ WASM</div>
                  <div className="cc-arrow">→ SQL</div>
                </div>
                <div className="cc-constraint">Must all produce identical output</div>
              </div>
              <div className="phase-checks">
                <span className="check">✓ Same inputs → same outputs</span>
                <span className="check">✓ Floating point precision handled consistently</span>
                <span className="check">✓ Edge cases match exactly</span>
              </div>
            </div>
          </div>

          <div className="validation-benefits">
            <h4>Why this strategy works</h4>
            <ul>
              <li><strong>Bug fixes validated once</strong> — Fix a bug, validate against PolicyEngine, done.</li>
              <li><strong>New targets inherit correctness</strong> — Just prove they match existing targets.</li>
              <li><strong>CI is fast</strong> — Cross-compilation tests don't require PolicyEngine.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Multi-Repo Architecture */}
      <section className="arch-repos">
        <div className="section-header">
          <span className="section-label">ECOSYSTEM</span>
          <h2>Repository architecture</h2>
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
              <div className="repo-box validators">
                <div className="repo-icon">✓</div>
                <h4>cosilico-validators</h4>
                <span className="repo-type">Multi-system consensus</span>
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
                <span className="comment"># Primary law (raw statutory values)</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">26/32/</span>
                <span className="comment"># IRC §32 EITC</span>
              </div>
              <div className="tree-line indent-2">
                <span className="file">base_amounts.yaml</span>
                <span className="comment"># Statutory base values</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">7/2011/</span>
                <span className="comment"># 7 USC SNAP</span>
              </div>
              <div className="tree-line">
                <span className="folder">regs/</span>
                <span className="comment"># Regulations (CFR)</span>
              </div>
              <div className="tree-line">
                <span className="folder">irs/</span>
                <span className="comment"># IRS guidance (overrides statute)</span>
              </div>
              <div className="tree-line indent">
                <span className="folder">rev-proc-2023-34/</span>
                <span className="comment"># 2024 inflation adjustments</span>
              </div>
              <div className="tree-line indent-2">
                <span className="file">eitc-2024.yaml</span>
                <span className="comment"># Adjusted EITC values</span>
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

      {/* Microdata Architecture */}
      <section className="arch-microdata">
        <div className="section-header">
          <span className="section-label">MICRODATA</span>
          <h2>Hierarchical probabilistic microdata</h2>
          <p>
            Next-generation synthetic population with full uncertainty quantification.
            Integrates multiple data sources via normalizing flows, not sequential imputation.
          </p>
        </div>

        <div className="microdata-architecture">
          {/* Entity Hierarchy */}
          <div className="microdata-entities">
            <h3>Entity-agnostic design</h3>
            <p className="entities-intro">
              Universal entities (Person, Household) in core. Country-specific entities (TaxUnit, BenefitUnit) via configuration.
            </p>
            <div className="entity-hierarchy">
              <div className="entity-level nation">
                <span className="entity-label">Nation</span>
              </div>
              <div className="entity-connector" />
              <div className="entity-level state">
                <span className="entity-label">State / CD / County</span>
              </div>
              <div className="entity-connector" />
              <div className="entity-level household">
                <span className="entity-label">Household</span>
                <span className="entity-note">weight, geography</span>
              </div>
              <div className="entity-connector" />
              <div className="entity-split">
                <div className="entity-level group">
                  <span className="entity-label">Tax Unit</span>
                  <span className="entity-note">US-specific</span>
                </div>
                <div className="entity-level group">
                  <span className="entity-label">SPM Unit</span>
                  <span className="entity-note">poverty calc</span>
                </div>
              </div>
              <div className="entity-connector" />
              <div className="entity-level person">
                <span className="entity-label">Person</span>
                <span className="entity-note">universal</span>
              </div>
              <div className="entity-connector" />
              <div className="entity-level record">
                <span className="entity-label">Records</span>
                <span className="entity-note">W-2, 1099, K-1</span>
              </div>
            </div>
          </div>

          {/* Data Flow */}
          <div className="microdata-flow">
            <h3>Joint generative model</h3>
            <p className="flow-intro">
              Instead of sequential QRF imputation (where order affects results),
              we train a single normalizing flow on all sources simultaneously.
            </p>
            <div className="data-flow-diagram">
              <div className="flow-sources">
                <div className="flow-source">
                  <span className="source-icon">📊</span>
                  <span>CPS ASEC</span>
                  <span className="source-vars">demographics</span>
                </div>
                <div className="flow-source">
                  <span className="source-icon">💰</span>
                  <span>IRS PUF</span>
                  <span className="source-vars">tax variables</span>
                </div>
                <div className="flow-source">
                  <span className="source-icon">🏠</span>
                  <span>ACS</span>
                  <span className="source-vars">geography</span>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-model">
                <span className="model-icon">🌊</span>
                <span className="model-name">Hierarchical Normalizing Flow</span>
                <span className="model-detail">learns joint distribution</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-output">
                <span className="output-icon">👥</span>
                <span className="output-name">Synthetic Population</span>
                <span className="output-detail">full attribute set + uncertainty</span>
              </div>
            </div>
          </div>

          {/* Calibration */}
          <div className="microdata-calibration">
            <h3>Bayesian calibration</h3>
            <div className="calibration-targets">
              <div className="target-tier">
                <span className="tier-priority">P1</span>
                <span className="tier-name">Administrative</span>
                <span className="tier-sources">IRS SOI, SSA, CMS</span>
              </div>
              <div className="target-tier">
                <span className="tier-priority">P2</span>
                <span className="tier-name">Survey (1-year)</span>
                <span className="tier-sources">CPS ASEC, ACS 1-year</span>
              </div>
              <div className="target-tier">
                <span className="tier-priority">P3</span>
                <span className="tier-name">Model-based</span>
                <span className="tier-sources">SAIPE, MRP estimates</span>
              </div>
            </div>
            <div className="calibration-method">
              <span className="method-step">1. Entropy Balancing</span>
              <span className="method-arrow">→</span>
              <span className="method-step">2. L0 Regularization</span>
              <span className="method-arrow">→</span>
              <span className="method-step">3. SMC Updates</span>
            </div>
          </div>

          {/* Temporal */}
          <div className="microdata-temporal">
            <h3>Temporal dynamics</h3>
            <div className="temporal-layers">
              <div className="temporal-layer yearly">
                <span className="layer-icon">📅</span>
                <span className="layer-name">Yearly panel</span>
                <ul>
                  <li>AR(1) income growth</li>
                  <li>Employment transitions</li>
                  <li>Life events (birth, marriage)</li>
                </ul>
              </div>
              <div className="temporal-layer intrayear">
                <span className="layer-icon">📆</span>
                <span className="layer-name">Intrayear</span>
                <ul>
                  <li>Income volatility (SDE)</li>
                  <li>Benefit eligibility windows</li>
                  <li>Capital gains jumps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Variable Resolution Flow */}
          <div className="microdata-variable-flow">
            <h3>Variable resolution: survey → statute</h3>
            <p className="flow-intro">
              Primary inputs only. Derived values (like "num_qualifying_children") are computed
              in the rules engine based on statutory definitions—not extracted from survey data.
            </p>
            <div className="variable-flow-diagram">
              <div className="flow-stage">
                <div className="stage-box survey">
                  <span className="stage-icon">📊</span>
                  <span className="stage-name">CPS ASEC</span>
                  <code className="stage-var">A_AGE</code>
                </div>
                <div className="stage-arrow">→</div>
                <div className="stage-box downloader">
                  <span className="stage-icon">⬇️</span>
                  <span className="stage-name">download_cps.py</span>
                  <code className="stage-var">age</code>
                </div>
                <div className="stage-arrow">→</div>
                <div className="stage-box microsim">
                  <span className="stage-icon">⚙️</span>
                  <span className="stage-name">microsim.py</span>
                  <code className="stage-var">inputs["age"]</code>
                </div>
                <div className="stage-arrow">→</div>
                <div className="stage-box statute">
                  <span className="stage-icon">📜</span>
                  <span className="stage-name">cosilico-us</span>
                  <code className="stage-var">age &lt; 19</code>
                </div>
              </div>
            </div>
            <div className="variable-flow-principle">
              <div className="principle-item">
                <span className="principle-icon">✓</span>
                <span className="principle-text"><strong>Primary inputs</strong>: age, income, relationship codes, tax_unit_id</span>
              </div>
              <div className="principle-item">
                <span className="principle-icon">✗</span>
                <span className="principle-text"><strong>NOT extracted</strong>: num_qualifying_children, eitc_amount, tax_liability</span>
              </div>
              <div className="principle-reason">
                Definitions vary by program (EITC §32(c)(3) vs CTC §24). The rules engine is the source of truth.
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Validation Loop */}
        <div className="synthesis-validation">
          <h3>Validation-driven synthesis</h3>
          <p className="validation-intro">
            Like our rules engine, the synthesis system uses multi-source validation to drive iterative improvement.
            Metrics feed back to refine the generative model.
          </p>
          <div className="validation-loop-diagram">
            <div className="loop-node source">
              <span className="node-icon">📊</span>
              <h5>Data sources</h5>
              <span className="node-detail">CPS + PUF</span>
            </div>
            <div className="loop-arrow">→</div>
            <div className="loop-node model">
              <span className="node-icon">🌊</span>
              <h5>Normalizing flow</h5>
              <span className="node-detail">Learn P(tax_vars | demographics)</span>
            </div>
            <div className="loop-arrow">→</div>
            <div className="loop-node output">
              <span className="node-icon">👥</span>
              <h5>Synthetic data</h5>
              <span className="node-detail">CPS structure + PUF-like tax vars</span>
            </div>
            <div className="loop-arrow">→</div>
            <div className="loop-node validators">
              <span className="node-icon">✓</span>
              <h5>Validators</h5>
              <span className="node-detail">vs PE ECPS, IRS SOI, PUF</span>
            </div>
            <div className="loop-feedback">
              <div className="feedback-line" />
              <span className="feedback-label">⟳ Metrics improve model</span>
              <div className="feedback-line" />
            </div>
          </div>

          <div className="validation-metrics-grid">
            <div className="metric-category">
              <h5>Marginal fidelity</h5>
              <ul>
                <li>KL divergence per variable</li>
                <li>Zero-inflation accuracy</li>
                <li>Quantile coverage</li>
              </ul>
            </div>
            <div className="metric-category">
              <h5>Joint fidelity</h5>
              <ul>
                <li>Correlation matrix distance</li>
                <li>Conditional distributions</li>
                <li>Principal component overlap</li>
              </ul>
            </div>
            <div className="metric-category">
              <h5>Policy utility</h5>
              <ul>
                <li>Tax liability by bracket</li>
                <li>Credit takeup rates</li>
                <li>Reform impact similarity</li>
              </ul>
            </div>
            <div className="metric-category highlight">
              <h5>vs PE ECPS</h5>
              <ul>
                <li>Correlation preservation</li>
                <li>Calibration parity</li>
                <li>Joint distribution score</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Status */}
        <div className="microdata-status">
          <h3>Implementation status</h3>
          <div className="status-grid">
            <div className="status-item done">
              <span className="status-icon">✓</span>
              <span className="status-label">Core entities</span>
              <span className="status-detail">Person, Household, TaxUnit, Geography, Periods</span>
            </div>
            <div className="status-item done">
              <span className="status-icon">✓</span>
              <span className="status-label">CPS data loader</span>
              <span className="status-detail">Download, parse, cache CPS ASEC</span>
            </div>
            <div className="status-item done">
              <span className="status-icon">✓</span>
              <span className="status-label">Gradient calibration</span>
              <span className="status-detail">PyTorch optimizer, 76% loss reduction</span>
            </div>
            <div className="status-item done">
              <span className="status-icon">✓</span>
              <span className="status-label">Calibration dashboard</span>
              <span className="status-detail">Real-time metrics at /calibration</span>
            </div>
            <div className="status-item progress">
              <span className="status-icon">◐</span>
              <span className="status-label">Validation framework</span>
              <span className="status-detail">Comparing to PE ECPS and IRS SOI</span>
            </div>
            <div className="status-item progress">
              <span className="status-icon">◐</span>
              <span className="status-label">Normalizing flow</span>
              <span className="status-detail">Conditional MAF for tax variables</span>
            </div>
            <div className="status-item pending">
              <span className="status-icon">○</span>
              <span className="status-label">CPS/PUF fusion</span>
              <span className="status-detail">Joint model preserving correlations</span>
            </div>
            <div className="status-item pending">
              <span className="status-icon">○</span>
              <span className="status-label">Temporal dynamics</span>
              <span className="status-detail">Panel AR(1) + intrayear SDE</span>
            </div>
          </div>
        </div>

        <div className="microdata-cta">
          <a href="https://github.com/CosilicoAI/cosilico-microdata" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            cosilico-microdata
          </a>
        </div>
      </section>

      {/* Comparison */}
      <section className="arch-comparison">
        <div className="section-header">
          <span className="section-label">LANDSCAPE</span>
          <h2>How Cosilico compares</h2>
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
            <div className="comparison-cell yes">✓ RL + multi-system consensus</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
            <div className="comparison-cell no">✗ manual only</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell feature">Cross-system validation</div>
            <div className="comparison-cell yes">✓ consensus engine</div>
            <div className="comparison-cell partial">◐ vs TAXSIM</div>
            <div className="comparison-cell no">✗ none</div>
            <div className="comparison-cell no">✗ none</div>
            <div className="comparison-cell no">✗ TaxAct-aligned</div>
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
          <h2>Explore the source</h2>
          <p>The engine is open source. The simulation is open to all.</p>
          <div className="cta-buttons">
            <a href="https://github.com/PolicyEngine/cosilico-engine" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a href="https://docs.cosilico.ai/architecture" className="btn-secondary">
              Read documentation
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
