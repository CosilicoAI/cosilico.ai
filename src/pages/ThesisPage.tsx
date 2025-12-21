import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/Thesis.css";
import { sources, competitors, pricingComps, Source } from "../data/thesis";

type Section = "problem" | "gap" | "simulation" | "encoding" | "markets" | "competition" | "model" | "traction" | "team" | "risks" | "ask";

interface Node {
  id: string;
  label: string;
  type: "product" | "customer" | "market" | "capability";
  x: number;
  y: number;
  description: string;
  metrics?: string;
  sourceId?: number;
}

interface Edge {
  from: string;
  to: string;
}


const nodes: Node[] = [
  // Products (center column)
  { id: "rules", label: "Rules API", type: "product", x: 50, y: 25,
    description: "Calculate taxes and benefits for any household. Every formula traced to statute.",
    metrics: "$0.001-0.01/call" },
  { id: "data", label: "Data API", type: "product", x: 50, y: 50,
    description: "Predict 200+ household attributes from partial information.",
    metrics: "$0.10-1.00/record" },
  { id: "simulate", label: "Simulation API", type: "product", x: 50, y: 75,
    description: "Run policy reforms across 100M+ synthetic households.",
    metrics: "$50K-500K/project" },

  // Customers (right column)
  { id: "fintech", label: "Fintech Apps", type: "customer", x: 80, y: 20,
    description: "Tax estimates, benefits eligibility, financial planning features.",
    metrics: "$5K-50K/mo" },
  { id: "banks", label: "Banks & Lenders", type: "customer", x: 80, y: 35,
    description: "Income prediction, risk modeling, portfolio analysis.",
    metrics: "$100K-1M/year" },
  { id: "hr", label: "HR Platforms", type: "customer", x: 80, y: 50,
    description: "Payroll tax, benefits eligibility, compensation modeling.",
    metrics: "$100K+/year" },
  { id: "gov", label: "Government", type: "customer", x: 80, y: 65,
    description: "Policy costing, legislative scoring, reform analysis.",
    metrics: "$50K-500K/project" },
  { id: "ai", label: "AI Labs", type: "customer", x: 80, y: 80,
    description: "Reliable tools for AI agents. No more tax hallucinations.",
    metrics: "Strategic" },

  // Markets (left column)
  { id: "tax-market", label: "Tax Software", type: "market", x: 20, y: 25,
    description: "Cloud-based solutions: 61% of revenue. 11.4% CAGR through 2032.",
    metrics: "$90B → $215B", sourceId: 3 },
  { id: "benefits-market", label: "Benefits Admin", type: "market", x: 20, y: 45,
    description: "Cloud deployment: 67.6% of revenue. SMBs growing 13.6%/year.",
    metrics: "$2.5B → $4B", sourceId: 4 },
  { id: "ai-market", label: "AI Infrastructure", type: "market", x: 20, y: 65,
    description: "AI agents market: $47B by 2030. Function calling now standard.",
    metrics: "$46B → $356B", sourceId: 5 },
  { id: "data-market", label: "Data Enrichment", type: "market", x: 20, y: 85,
    description: "Clearbit acquired by HubSpot. ZoomInfo public at $10B+.",
    metrics: "$2.4B → $4.6B", sourceId: 6 },
];

const edges: Edge[] = [
  { from: "tax-market", to: "rules" },
  { from: "benefits-market", to: "rules" },
  { from: "ai-market", to: "rules" },
  { from: "data-market", to: "data" },
  { from: "benefits-market", to: "simulate" },
  { from: "rules", to: "fintech" },
  { from: "rules", to: "hr" },
  { from: "rules", to: "ai" },
  { from: "data", to: "banks" },
  { from: "data", to: "fintech" },
  { from: "simulate", to: "gov" },
  { from: "simulate", to: "banks" },
];

const sections: Section[] = ["problem", "gap", "simulation", "encoding", "markets", "competition", "model", "traction", "team", "risks", "ask"];

// Citation component with hover card
function Cite({ id }: { id: number }) {
  const [showCard, setShowCard] = useState(false);
  const source = sources.find(s => s.id === id);
  if (!source) return null;

  return (
    <span className="cite-wrapper">
      <sup
        className="cite"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        onClick={() => window.open(source.url, "_blank")}
      >
        [{id}]
      </sup>
      {showCard && (
        <div className="cite-card">
          <div className="cite-title">{source.title}</div>
          {source.author && <div className="cite-author">{source.author}, {source.year}</div>}
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="cite-link">
            View source →
          </a>
        </div>
      )}
    </span>
  );
}

function CheckIcon() {
  return <span className="check-icon">✓</span>;
}

function XIcon() {
  return <span className="x-icon">—</span>;
}

function PartialIcon() {
  return <span className="partial-icon">◐</span>;
}

function CapabilityCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckIcon />;
  if (value === "partial") return <PartialIcon />;
  return <XIcon />;
}

export default function ThesisPage() {
  const [activeSection, setActiveSection] = useState<Section>("problem");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);

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

  const handleNodeClick = useCallback((node: Node) => {
    setSelectedNode(prev => prev?.id === node.id ? null : node);
    if (selectedNode?.id === node.id) {
      setHighlightedEdges([]);
    } else {
      const connected = edges
        .filter(e => e.from === node.id || e.to === node.id)
        .map(e => `${e.from}-${e.to}`);
      setHighlightedEdges(connected);
    }
  }, [selectedNode]);

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
        <div className="thesis-content">
          <h2>1. The Problem</h2>
          <p className="problem-lead">
            Society is hard to optimize because nobody has a shared model to reason against.
          </p>
          <div className="problem-examples">
            <div className="problem-example">
              <h4>Congress</h4>
              <p>Debates policy with napkin math. No one knows who wins or loses until years later.</p>
            </div>
            <div className="problem-example">
              <h4>Banks</h4>
              <p>Model portfolio risk without knowing how policy changes will affect borrowers.</p>
            </div>
            <div className="problem-example">
              <h4>AI Agents</h4>
              <p>Hallucinate tax and benefit calculations that require statutory precision.</p>
            </div>
          </div>
          <div className="stat-callout">
            <span className="stat-number">67%</span>
            <span className="stat-context">
              GPT-4 accuracy on tax true/false questions<Cite id={1} />
            </span>
          </div>
          <p>
            Even the most capable AI models fail at policy calculations. The SARA benchmark<Cite id={1} /> evaluated GPT-4 on
            US income tax scenarios and found only <strong>67% accuracy</strong> on true/false tax questions—and only <strong>78% of calculations</strong> within 10% of correct liability.
          </p>
          <blockquote>
            "Today's LLMs cannot 'do taxes' on their own because tax
            calculations require 100% correctness. Today's models hallucinate."
            <cite>— Column Tax, 2024<Cite id={2} /></cite>
          </blockquote>
          <p>
            This isn't a training data problem. Tax law changes annually.
            State rules vary across 50 jurisdictions. Benefit eligibility depends
            on dozens of interacting variables. <strong>What we need is infrastructure—a simulation of society that anyone can query.</strong>
          </p>
        </div>
      </section>

      {/* Gap */}
      <section className="thesis-section" ref={setRef("gap")}>
        <div className="thesis-content">
          <h2>2. The Gap</h2>
          <p>
            Building a simulation of society requires three layers: <strong>rules</strong> (how taxes and benefits work), <strong>data</strong> (who the households are), and <strong>scenarios</strong> (what-if analysis at scale). Today, these pieces exist in fragments.
          </p>

          <div className="gap-grid">
            <div className="gap-card gap-need">
              <h3>What's Needed</h3>
              <ul>
                <li>Income tax calculation (federal + 50 states)</li>
                <li>Benefits eligibility (SNAP, Medicaid, EITC, etc.)</li>
                <li>Attribute prediction (income, expenses, demographics)</li>
                <li>Population simulation (policy reform modeling)</li>
                <li>Audit trails with legal citations</li>
              </ul>
            </div>
            <div className="gap-card gap-exists">
              <h3>What Exists</h3>
              <ul>
                <li><strong>Sales tax:</strong> Avalara ($8.4B acquisition)<Cite id={7} /></li>
                <li><strong>Payroll tax:</strong> Symmetry (64M employees/year)<Cite id={11} /></li>
                <li><strong>Benefits:</strong> Benefit Kitchen (7 states only)<Cite id={12} /></li>
                <li><strong>Tax filing:</strong> Column Tax (filing, not calculation)<Cite id={10} /></li>
              </ul>
            </div>
          </div>

          <p className="gap-conclusion">
            <strong>The gap:</strong> No one combines income tax calculation +
            benefits eligibility + prediction + simulation in a single API.
            That's what we're building.
          </p>
        </div>
      </section>

      {/* Platform */}
      <section className="thesis-section" ref={setRef("simulation")}>
        <div className="thesis-content">
          <h2>3. The Simulation</h2>
          <p>
            We're building the shared substrate—a simulation that anyone can query (and more importantly, any AI). Decisions grounded in the same reality. Three APIs. One model of society.
          </p>
        </div>

        <div className="graph-container">
          <svg className="graph-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <text x="20" y="8" className="column-label">Markets</text>
            <text x="50" y="8" className="column-label">Products</text>
            <text x="80" y="8" className="column-label">Customers</text>

            {edges.map((edge) => {
              const from = nodes.find((n) => n.id === edge.from);
              const to = nodes.find((n) => n.id === edge.to);
              if (!from || !to) return null;
              const edgeId = `${edge.from}-${edge.to}`;
              return (
                <line
                  key={edgeId}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={`graph-edge ${highlightedEdges.includes(edgeId) ? "highlighted" : ""}`}
                />
              );
            })}

            {nodes.map((node) => (
              <g
                key={node.id}
                className={`graph-node ${node.type} ${selectedNode?.id === node.id ? "selected" : ""}`}
                onClick={() => handleNodeClick(node)}
                style={{ cursor: "pointer" }}
              >
                <circle cx={node.x} cy={node.y} r="4" />
                <text x={node.x} y={node.y + 7} className="node-label">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          {selectedNode && (
            <div className="node-detail">
              <h3>{selectedNode.label}</h3>
              <p>{selectedNode.description}</p>
              {selectedNode.metrics && (
                <div className="node-metric">{selectedNode.metrics}</div>
              )}
              {selectedNode.sourceId && <Cite id={selectedNode.sourceId} />}
            </div>
          )}
        </div>

        <div className="thesis-content">
          <div className="platform-details">
            <div className="platform-card">
              <h3>Rules API</h3>
              <p>Deterministic tax and benefit calculations from statute.</p>
              <ul>
                <li>Federal + 50 state income taxes</li>
                <li>SNAP, Medicaid, TANF, SSI, EITC, CTC</li>
                <li>Every formula traceable to legal citation</li>
                <li>Bi-temporal parameters (effective date + knowledge date)</li>
              </ul>
              <code>cosilico.calculate(household, variables)</code>
            </div>
            <div className="platform-card">
              <h3>Data API</h3>
              <p>Statistical predictions for attributes you don't observe.</p>
              <ul>
                <li>Predict income, expenses, demographics</li>
                <li>ML models trained on Census + IRS microdata</li>
                <li>Uncertainty quantification included</li>
                <li>Privacy-preserving (no individual data exposed)</li>
              </ul>
              <code>cosilico.predict(partial_household)</code>
            </div>
            <div className="platform-card">
              <h3>Simulation API</h3>
              <p>Population-scale policy modeling.</p>
              <ul>
                <li>100M+ synthetic households</li>
                <li>Distributional impact analysis</li>
                <li>Revenue and cost estimates</li>
                <li>Reform comparisons and counterfactuals</li>
              </ul>
              <code>cosilico.simulate(reform, population)</code>
            </div>
          </div>
        </div>
      </section>

      {/* AI Encoding */}
      <section className="thesis-section" ref={setRef("encoding")}>
        <div className="thesis-content">
          <h2>4. AI-Assisted Encoding</h2>
          <p>
            The traditional approach to encoding policy is manual translation: read the statute, write the code.
            This doesn't scale. Instead, we use <strong>existing implementations as verification oracles</strong> to
            train AI agents that learn to encode rules directly from legislation.
          </p>

          <div className="encoding-insight">
            <h3>The Insight</h3>
            <p>
              PolicyEngine + TAXSIM aren't just calculators—they're <strong>training data factories</strong>.
              We can generate unlimited (statute, scenario, expected_output) tuples and use them to train
              AI systems that write rules code.
            </p>
          </div>

          <div className="encoding-loop">
            <h3>Test-Driven Development at Scale</h3>
            <p>This isn't one-shot code generation. It's an iterative agentic loop:</p>
            <div className="loop-steps">
              <div className="loop-step">
                <span className="step-num">1</span>
                <span className="step-text">Read statute section</span>
              </div>
              <div className="loop-step">
                <span className="step-num">2</span>
                <span className="step-text">Generate candidate rule</span>
              </div>
              <div className="loop-step">
                <span className="step-num">3</span>
                <span className="step-text">Run against test cases from oracle</span>
              </div>
              <div className="loop-step">
                <span className="step-num">4</span>
                <span className="step-text">Examine failures, revise</span>
              </div>
              <div className="loop-step">
                <span className="step-num">5</span>
                <span className="step-text">Repeat until passing</span>
              </div>
            </div>
          </div>

          <div className="encoding-oracles">
            <h3>The Oracle Stack</h3>
            <div className="oracle-grid">
              <div className="oracle-card">
                <h4>PolicyEngine-US</h4>
                <p>Federal + 50 states, benefits programs</p>
              </div>
              <div className="oracle-card">
                <h4>PolicyEngine-UK</h4>
                <p>International validation, different tax system</p>
              </div>
              <div className="oracle-card">
                <h4>TAXSIM (NBER)</h4>
                <p>Academic gold standard, independent implementation</p>
              </div>
              <div className="oracle-card">
                <h4>IRS Examples</h4>
                <p>Official published scenarios</p>
              </div>
            </div>
            <p className="oracle-note">
              Disagreements between oracles surface edge cases and modeling choices—valuable signal, not noise.
            </p>
          </div>

          <div className="encoding-moat">
            <h3>Why This Changes the Moat</h3>
            <div className="moat-comparison">
              <div className="moat-old">
                <h4>Old Moat</h4>
                <ul>
                  <li>Lines of code in rules engine</li>
                  <li>Number of programs encoded</li>
                  <li>Coverage of existing law</li>
                </ul>
              </div>
              <div className="moat-new">
                <h4>New Moat</h4>
                <ul>
                  <li>Training infrastructure + verification harness</li>
                  <li>Ability to encode any new program rapidly</li>
                  <li>Speed of encoding new legislation</li>
                </ul>
              </div>
            </div>
            <p className="moat-conclusion">
              The <strong>training data factory</strong> becomes the asset, not the trained output.
              When new legislation passes, we encode it in days, not months.
            </p>
          </div>

          <div className="encoding-scale">
            <h3>Scaling Path</h3>
            <p>Once the system learns to encode US federal tax from statute + test cases, the same approach works for:</p>
            <div className="scale-grid">
              <div className="scale-item">State tax codes <span className="scale-mult">50x</span></div>
              <div className="scale-item">Benefits programs <span className="scale-mult">100+</span></div>
              <div className="scale-item">UK, Canada, EU <span className="scale-mult">Intl</span></div>
              <div className="scale-item">New legislation <span className="scale-mult">Realtime</span></div>
            </div>
          </div>

          <div className="encoding-technical">
            <a href="https://github.com/CosilicoAI/cosilico-engine/blob/master/docs/AI_ENCODING.md" target="_blank" rel="noopener noreferrer" className="technical-link">
              Technical Deep Dive: Reward Functions, Oracle Stack, Agent Architecture →
            </a>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="thesis-section" ref={setRef("markets")}>
        <div className="thesis-content">
          <h2>5. The Markets</h2>
          <p>We sit at the infrastructure layer beneath multiple large markets.</p>
          <div className="market-cards">
            {nodes.filter((n) => n.type === "market").map((market) => (
              <div key={market.id} className="market-card">
                <h3>{market.label}</h3>
                <div className="market-size">
                  {market.metrics}
                  {market.sourceId && <Cite id={market.sourceId} />}
                </div>
                <p>{market.description}</p>
              </div>
            ))}
          </div>

          <div className="market-additional">
            <h3>Additional Markets</h3>
            <div className="market-cards">
              <div className="market-card">
                <h3>Financial Planning</h3>
                <div className="market-size">$3.6B → $14B<Cite id={20} /></div>
                <p>16.3% CAGR. Retirement, estate planning, wealth management all need tax/benefit calculations.</p>
              </div>
              <div className="market-card">
                <h3>Corporate Tax Software</h3>
                <div className="market-size">$12.9B → $24.1B<Cite id={18} /></div>
                <p>Large enterprises: 52.87% of market. API-based ERP integrations accelerating.</p>
              </div>
              <div className="market-card">
                <h3>Global Tax Tech</h3>
                <div className="market-size">$18.5B → $36.7B<Cite id={19} /></div>
                <p>Cross-border payments: $31.6T → $50T by 2032. 45% of jurisdictions expect tax complexity to increase.</p>
              </div>
              <div className="market-card">
                <h3>Policy Research</h3>
                <div className="market-size">$2B+</div>
                <p>Think tanks, government agencies, academics. Legislative scoring, distributional analysis, reform modeling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="thesis-section" ref={setRef("competition")}>
        <div className="thesis-content">
          <h2>6. Competitive Landscape</h2>
          <p>No one combines income tax + benefits + prediction + simulation.</p>

          <div className="competitive-table-container">
            <table className="competitive-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  {competitors.map(c => <th key={c.name}>{c.name}</th>)}
                  <th className="highlight-col">Cosilico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Income tax calculation</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.incomeTax} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
                <tr>
                  <td>Payroll tax (FICA, etc.)</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.payrollTax} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
                <tr>
                  <td>Benefits eligibility</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.benefits} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
                <tr>
                  <td>Attribute prediction</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.prediction} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
                <tr>
                  <td>Microsimulation</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.simulation} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
                <tr>
                  <td>Open source</td>
                  {competitors.map(c => <td key={c.name}><CapabilityCell value={c.openSource} /></td>)}
                  <td className="highlight-col"><CheckIcon /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="competitor-notes">
            {competitors.map(c => (
              <div key={c.name} className="competitor-note">
                <h4>{c.name}{c.sourceId && <Cite id={c.sourceId} />}</h4>
                <p>{c.notes}</p>
              </div>
            ))}
          </div>

          <div className="pricing-comparison">
            <h3>Competitive Pricing Analysis</h3>
            <p>Our pricing is informed by extensive market research across each product category.</p>

            {pricingComps.map(pc => (
              <div key={pc.category} className="pricing-comp-category">
                <h4>{pc.category}</h4>
                <div className="pricing-comp-table">
                  <div className="pricing-comp-row pricing-comp-header">
                    <span>Competitor</span>
                    <span>Pricing</span>
                    <span>Notes</span>
                  </div>
                  {pc.competitors.map(comp => (
                    <div key={comp.name} className="pricing-comp-row">
                      <span>{comp.name}{comp.sourceId && <Cite id={comp.sourceId} />}</span>
                      <span className="pricing-value">{comp.pricing}</span>
                      <span className="pricing-notes">{comp.notes}</span>
                    </div>
                  ))}
                  <div className="pricing-comp-row pricing-comp-cosilico">
                    <span><strong>Cosilico</strong></span>
                    <span className="pricing-value cosilico-price">{pc.cosilicoPricing}</span>
                    <span className="pricing-notes cosilico-advantage">{pc.cosilicoAdvantage}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="pricing-philosophy">
              <h4>Open Source + Paid Insights</h4>
              <p>
                Everything is open source—the rules engine, datasets, even the AI generator.
                You're not paying for code; you're paying for <strong>computed insights</strong>:
                predictions from calibrated models, simulations at population scale, and freshness
                from real-time economic signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model */}
      <section className="thesis-section" ref={setRef("model")}>
        <div className="thesis-content">
          <h2>7. Business Model</h2>
          <p>Open source core. Commercial APIs. Proven at scale.</p>

          <div className="model-stack">
            <div className="stack-layer stack-free">
              <div>
                <h3>Open Source</h3>
                <p>Run it yourself. Apache 2.0 licensed. Full access to rules engine.</p>
              </div>
              <span className="price">Free</span>
            </div>
            <div className="stack-layer stack-api">
              <div>
                <h3>API Usage</h3>
                <p>Hosted, managed, &lt;100ms latency. Pay per call.</p>
              </div>
              <span className="price">$0.001-0.01/call</span>
            </div>
            <div className="stack-layer stack-data">
              <div>
                <h3>Data Enrichment</h3>
                <p>Predict household attributes at scale. Batch or real-time.</p>
              </div>
              <span className="price">$0.10-1.00/record</span>
            </div>
            <div className="stack-layer stack-enterprise">
              <div>
                <h3>Enterprise</h3>
                <p>99.9% SLA, dedicated support, custom jurisdictions.</p>
              </div>
              <span className="price">$100K-1M+/year</span>
            </div>
          </div>

          <div className="model-precedent">
            <h3>Open Source Commercial Model: Proven at Scale</h3>
            <div className="precedent-grid">
              <div className="precedent">
                <span className="precedent-name">MongoDB<Cite id={14} /></span>
                <span className="precedent-revenue">$1.7B ARR</span>
              </div>
              <div className="precedent">
                <span className="precedent-name">Elastic<Cite id={15} /></span>
                <span className="precedent-revenue">$1.3B ARR</span>
              </div>
              <div className="precedent">
                <span className="precedent-name">GitLab<Cite id={16} /></span>
                <span className="precedent-revenue">$580M ARR</span>
              </div>
            </div>
          </div>

          <div className="comparables">
            <h3>Comparable Outcomes</h3>
            <div className="comparable-grid">
              <div className="comparable">
                <span className="comparable-name">Avalara<Cite id={7} /></span>
                <span className="comparable-value">$8.4B</span>
                <span className="comparable-type">Acquisition (2022)</span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Plaid<Cite id={8} /></span>
                <span className="comparable-value">$6.1B</span>
                <span className="comparable-type">$390M ARR, 16x multiple<Cite id={13} /></span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Gusto<Cite id={9} /></span>
                <span className="comparable-value">$9.3B</span>
                <span className="comparable-type">Valuation (2025)</span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Rippling<Cite id={17} /></span>
                <span className="comparable-value">$13.5B</span>
                <span className="comparable-type">Valuation (2024)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="thesis-section" ref={setRef("traction")}>
        <div className="thesis-content">
          <h2>8. Traction</h2>
          <p>We've already built the proof of concept at PolicyEngine.</p>

          <div className="traction-grid">
            <div className="traction-stat">
              <span className="traction-value">1M+</span>
              <span className="traction-label">simulations run</span>
            </div>
            <div className="traction-stat">
              <span className="traction-value">50+</span>
              <span className="traction-label">state tax systems</span>
            </div>
            <div className="traction-stat">
              <span className="traction-value">100+</span>
              <span className="traction-label">benefit programs</span>
            </div>
            <div className="traction-stat">
              <span className="traction-value">50+</span>
              <span className="traction-label">OSS contributors</span>
            </div>
          </div>

          <div className="traction-users">
            <h3>Used By</h3>
            <div className="user-grid">
              <div className="user-card">
                <h4>UK Government</h4>
                <p>Policy costing for budget proposals</p>
              </div>
              <div className="user-card">
                <h4>US Congress</h4>
                <p>Distributional analysis for tax reforms</p>
              </div>
              <div className="user-card">
                <h4>Think Tanks</h4>
                <p>Research on UBI, child allowances, tax reform</p>
              </div>
            </div>
          </div>

          <div className="lighthouse-section">
            <h3>Government as Lighthouse Customers</h3>
            <p>Government adoption creates downstream enterprise value:</p>
            <div className="lighthouse-grid">
              <div className="lighthouse-card">
                <h4>Credibility Signal</h4>
                <p>"If HM Treasury trusts this for budget scoring, it's accurate enough for our risk models."</p>
              </div>
              <div className="lighthouse-card">
                <h4>Regulatory Alignment</h4>
                <p>Banks want to model what government models. Same methodology = predictable regulatory outcomes.</p>
              </div>
              <div className="lighthouse-card">
                <h4>Policy Anticipation</h4>
                <p>Run the same scenarios government runs. Know how proposed legislation affects your portfolio before it passes.</p>
              </div>
              <div className="lighthouse-card">
                <h4>Compliance Defense</h4>
                <p>"We used the same methodology as [agency]" is a strong regulatory position.</p>
              </div>
            </div>
          </div>

          <div className="traction-coverage">
            <h3>Geographic Coverage</h3>
            <div className="coverage-grid">
              <div className="coverage-item coverage-live">
                <span className="coverage-flag">🇺🇸</span>
                <span className="coverage-status">Live</span>
                <span className="coverage-detail">Federal + 50 states</span>
              </div>
              <div className="coverage-item coverage-live">
                <span className="coverage-flag">🇬🇧</span>
                <span className="coverage-status">Live</span>
                <span className="coverage-detail">UK tax & benefits</span>
              </div>
              <div className="coverage-item coverage-progress">
                <span className="coverage-flag">🇨🇦</span>
                <span className="coverage-status">In Progress</span>
                <span className="coverage-detail">Canada (50% complete)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="thesis-section" ref={setRef("team")}>
        <div className="thesis-content">
          <h2>9. Team</h2>

          <div className="team-grid">
            <div className="team-member">
              <h3>Max Ghenis</h3>
              <p className="team-role">Founder & CEO</p>
              <ul>
                <li>Founded PolicyEngine — models used by UK Government, US Congress</li>
                <li>Former Google data scientist</li>
                <li>MIT economics, UC Berkeley statistics</li>
                <li>Led team that encoded US federal + 50 states + UK + Canada</li>
              </ul>
              <div className="team-links">
                <a href="https://linkedin.com/in/maxghenis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/maxghenis" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="team-member team-hiring">
              <h3>Hiring</h3>
              <p className="team-role">Co-founders</p>
              <ul>
                <li>Potential co-founders from PolicyEngine team (proven policy encoding expertise)</li>
                <li>Seeking: Systems engineer, ML engineer</li>
                <li>First priority post-funding</li>
              </ul>
              <p className="team-note">50+ open source contributors available for contract work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="thesis-section" ref={setRef("risks")}>
        <div className="thesis-content">
          <h2>10. Risks & Mitigations</h2>

          <div className="risks-grid">
            <div className="risk-card">
              <h4>Law changes constantly</h4>
              <p className="risk-q">Won't maintenance be overwhelming?</p>
              <p>Bi-temporal parameters track both effective dates and when we learned about changes. AI-assisted encoding accelerates updates. Ongoing maintenance is a moat, not a burden—it's what keeps competitors out.</p>
            </div>

            <div className="risk-card">
              <h4>LLMs might improve</h4>
              <p className="risk-q">Won't AI eventually get this right?</p>
              <p>Deterministic tools will always be faster, auditable, and legally citable. LLMs will call tools—ours. The SARA benchmark<Cite id={1} /> shows 67% accuracy isn't a training data problem; it's a fundamental architecture mismatch.</p>
            </div>

            <div className="risk-card">
              <h4>Single founder risk</h4>
              <p className="risk-q">Why no co-founder yet?</p>
              <p>Actively hiring co-founders. Seed capital will enable founding engineer hires. PolicyEngine has 50+ open source contributors—the community is the extended team.</p>
            </div>

            <div className="risk-card">
              <h4>Enterprise sales are expensive</h4>
              <p className="risk-q">How do you compete with big sales teams?</p>
              <p>Developer-first, land and expand. Free tier lets developers prototype. Usage-based pricing scales with customers. Enterprise sales only for $100K+ deals.</p>
            </div>

            <div className="risk-card">
              <h4>Open source commoditization</h4>
              <p className="risk-q">What stops someone from just using the free version?</p>
              <p>Cloud hosting, SLAs, enterprise features, and premium data create value. MongoDB<Cite id={14} />, Elastic<Cite id={15} />, GitLab<Cite id={16} /> all prove this model at billion-dollar scale.</p>
            </div>

            <div className="risk-card">
              <h4>TurboTax competition</h4>
              <p className="risk-q">What about Intuit?</p>
              <p>TurboTax doesn't have a public API. They're consumer-facing, not infrastructure. Intuit's business model is selling to end users, not enabling competitors. We're Stripe to their payment processor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ask */}
      <section className="thesis-section" ref={setRef("ask")}>
        <div className="thesis-content">
          <h2>11. The Ask</h2>

          <div className="ask-container">
            <div className="ask-amount">
              <span className="ask-label">Seed Round</span>
              <span className="ask-value">$3-5M</span>
            </div>

            <div className="ask-details">
              <div className="ask-use">
                <h3>Use of Funds</h3>
                <div className="fund-bars">
                  <div className="fund-bar">
                    <div className="fund-fill" style={{ width: "50%" }}></div>
                    <span className="fund-label">50% Engineering</span>
                  </div>
                  <div className="fund-bar">
                    <div className="fund-fill" style={{ width: "25%" }}></div>
                    <span className="fund-label">25% Data/ML</span>
                  </div>
                  <div className="fund-bar">
                    <div className="fund-fill" style={{ width: "15%" }}></div>
                    <span className="fund-label">15% Go-to-Market</span>
                  </div>
                  <div className="fund-bar">
                    <div className="fund-fill" style={{ width: "10%" }}></div>
                    <span className="fund-label">10% Operations</span>
                  </div>
                </div>
              </div>

              <div className="ask-milestones">
                <h3>Milestones to Series A</h3>
                <ul>
                  <li>10+ paying customers</li>
                  <li>$1M+ ARR</li>
                  <li>1-2 enterprise deals ($500K+)</li>
                  <li>Multi-country coverage (US, UK, Canada)</li>
                  <li>Proven accuracy at scale</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ask-projections">
            <h3>Revenue Path</h3>
            <table className="projections-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>ARR</th>
                  <th>Customers</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Y1</td>
                  <td>$500K</td>
                  <td>5-10</td>
                  <td>Product-market fit, first enterprise deal</td>
                </tr>
                <tr>
                  <td>Y2</td>
                  <td>$3M</td>
                  <td>50+</td>
                  <td>Self-serve launch, 2-3 enterprise deals</td>
                </tr>
                <tr>
                  <td>Y3</td>
                  <td>$10M</td>
                  <td>200+</td>
                  <td>Enterprise sales team, intl expansion</td>
                </tr>
                <tr>
                  <td>Y4</td>
                  <td>$30M</td>
                  <td>500+</td>
                  <td>Platform status, AI lab partnerships</td>
                </tr>
                <tr>
                  <td>Y5</td>
                  <td>$75M</td>
                  <td>1000+</td>
                  <td>Category leader</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="thesis-section thesis-references">
        <div className="thesis-content">
          <h2>References</h2>
          <ol className="reference-list">
            {sources.map(source => (
              <li key={source.id} id={`ref-${source.id}`}>
                {source.author && <span>{source.author}. </span>}
                <em>{source.title}</em>
                {source.year && <span> ({source.year})</span>}.{" "}
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.url.replace(/^https?:\/\//, "").split("/")[0]}
                </a>
              </li>
            ))}
          </ol>
        </div>
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
