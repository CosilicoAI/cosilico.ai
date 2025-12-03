import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/Thesis.css";

type Section = "problem" | "platform" | "markets" | "model" | "traction";

interface Source {
  id: number;
  author?: string;
  title: string;
  year: number;
  url: string;
  accessed?: string;
}

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

// All sources in one place
const sources: Source[] = [
  {
    id: 1,
    author: "Chen et al.",
    title: "SARA: A Simple AI-Resilient Assessor for Tax Calculation",
    year: 2023,
    url: "https://arxiv.org/abs/2309.09992",
  },
  {
    id: 2,
    title: "Will AI Agents Help File Your Taxes?",
    author: "Column Tax",
    year: 2024,
    url: "https://www.column.tax/blog/will-ai-agents-help-file-your-taxes",
  },
  {
    id: 3,
    title: "Tax Software Market Report",
    author: "Mordor Intelligence",
    year: 2024,
    url: "https://www.mordorintelligence.com/industry-reports/tax-software-market",
  },
  {
    id: 4,
    title: "Employee Benefits Administration Software Market",
    author: "Verified Market Research",
    year: 2024,
    url: "https://www.verifiedmarketresearch.com/product/employee-benefits-administration-software-market/",
  },
  {
    id: 5,
    title: "AI Infrastructure Market",
    author: "Fortune Business Insights",
    year: 2024,
    url: "https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456",
  },
  {
    id: 6,
    title: "Data Enrichment Solutions Market",
    author: "Grand View Research",
    year: 2024,
    url: "https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report",
  },
  {
    id: 7,
    title: "Vista to Acquire Avalara for $8.4B",
    author: "TechCrunch",
    year: 2022,
    url: "https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/",
  },
  {
    id: 8,
    title: "Plaid Raises $575M at $6.1B Valuation",
    author: "TechCrunch",
    year: 2025,
    url: "https://techcrunch.com/2025/04/03/fintech-plaid-raises-575m-at-6-1b-valuation-says-it-will-not-go-public-in-2025/",
  },
  {
    id: 9,
    title: "Gusto $200M+ Tender Offer at $9.3B Valuation",
    author: "Fortune",
    year: 2025,
    url: "https://fortune.com/2025/06/09/gusto-200-million-plus-tender-offer/",
  },
];

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
    description: "Cloud-based tax solutions growing rapidly.",
    metrics: "$90B → $215B", sourceId: 3 },
  { id: "benefits-market", label: "Benefits Admin", type: "market", x: 20, y: 45,
    description: "HR platforms expanding benefits capabilities.",
    metrics: "$2.5B → $4B", sourceId: 4 },
  { id: "ai-market", label: "AI Infrastructure", type: "market", x: 20, y: 65,
    description: "Every AI assistant needs reliable domain tools.",
    metrics: "$46B → $356B", sourceId: 5 },
  { id: "data-market", label: "Data Enrichment", type: "market", x: 20, y: 85,
    description: "Household attribute prediction at scale.",
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

// Citation component
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

export default function ThesisPage() {
  const [activeSection, setActiveSection] = useState<Section>("problem");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);

  const problemRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLElement>(null);
  const marketsRef = useRef<HTMLElement>(null);
  const modelRef = useRef<HTMLElement>(null);
  const tractionRef = useRef<HTMLElement>(null);

  const refs: Record<Section, React.RefObject<HTMLElement | null>> = {
    problem: problemRef,
    platform: platformRef,
    markets: marketsRef,
    model: modelRef,
    traction: tractionRef,
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ["problem", "platform", "markets", "model", "traction"];
      for (const section of sections) {
        const el = refs[section].current;
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
  }, [refs]);

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
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="thesis">
      {/* Progress nav */}
      <nav className="thesis-nav">
        {(["problem", "platform", "markets", "model", "traction"] as Section[]).map(s => (
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
        <h1>The Thesis</h1>
        <p className="thesis-subtitle">
          AI can't calculate taxes. We're building the infrastructure it needs.
        </p>
      </section>

      {/* Problem */}
      <section className="thesis-section" ref={problemRef}>
        <div className="thesis-content">
          <h2>The Problem</h2>
          <div className="stat-callout">
            <span className="stat-number">67%</span>
            <span className="stat-context">
              GPT-4 accuracy on tax true/false questions<Cite id={1} />
            </span>
          </div>
          <p>
            Large language models hallucinate when asked to perform calculations
            governed by statute. The SARA benchmark<Cite id={1} /> found GPT-4 answered only
            67% of tax true/false questions correctly (186/276), and only 78% of
            scenario calculations were within 10% of the correct liability.
          </p>
          <p>
            Tax law changes annually. State rules vary across 50 jurisdictions.
            Benefit eligibility depends on dozens of interacting variables.
            No amount of pretraining will produce reliable results.
          </p>
          <blockquote>
            "Today's LLMs cannot 'do taxes' on their own because tax
            calculations require 100% correctness. Today's models hallucinate."
            <cite>— Column Tax, 2024<Cite id={2} /></cite>
          </blockquote>
          <p>
            Yet every fintech app, government agency, and AI assistant needs
            these calculations. The gap is infrastructure—and that's what we're building.
          </p>
        </div>
      </section>

      {/* Platform */}
      <section className="thesis-section" ref={platformRef}>
        <div className="thesis-content">
          <h2>The Platform</h2>
          <p>
            Three APIs. One simulation. Click any node to explore connections.
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
              {selectedNode.sourceId && (
                <span className="node-source-cite">
                  <Cite id={selectedNode.sourceId} />
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Markets */}
      <section className="thesis-section" ref={marketsRef}>
        <div className="thesis-content">
          <h2>The Markets</h2>
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
        </div>
      </section>

      {/* Model */}
      <section className="thesis-section" ref={modelRef}>
        <div className="thesis-content">
          <h2>The Model</h2>
          <p>Open source core. Commercial APIs.</p>

          <div className="model-stack">
            <div className="stack-layer stack-free">
              <div>
                <h3>Open Source</h3>
                <p>Run it yourself. Apache 2.0 licensed.</p>
              </div>
              <span className="price">Free</span>
            </div>
            <div className="stack-layer stack-api">
              <div>
                <h3>API Usage</h3>
                <p>Hosted, managed, fast. Pay per call.</p>
              </div>
              <span className="price">$0.001-0.01/call</span>
            </div>
            <div className="stack-layer stack-data">
              <div>
                <h3>Data Enrichment</h3>
                <p>Predict household attributes at scale.</p>
              </div>
              <span className="price">$0.10-1.00/record</span>
            </div>
            <div className="stack-layer stack-enterprise">
              <div>
                <h3>Enterprise</h3>
                <p>SLA, support, custom jurisdictions.</p>
              </div>
              <span className="price">$100K-1M+/year</span>
            </div>
          </div>

          <div className="comparables">
            <h3>Comparable Outcomes</h3>
            <div className="comparable-grid">
              <div className="comparable">
                <span className="comparable-name">Avalara<Cite id={7} /></span>
                <span className="comparable-value">$8.4B</span>
                <span className="comparable-type">Acquisition</span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Plaid<Cite id={8} /></span>
                <span className="comparable-value">$6.1B</span>
                <span className="comparable-type">Valuation</span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Gusto<Cite id={9} /></span>
                <span className="comparable-value">$9.3B</span>
                <span className="comparable-type">Valuation</span>
              </div>
              <div className="comparable">
                <span className="comparable-name">Stripe</span>
                <span className="comparable-value">$50B+</span>
                <span className="comparable-type">Valuation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="thesis-section" ref={tractionRef}>
        <div className="thesis-content">
          <h2>The Traction</h2>
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

          <div className="traction-logos">
            <p>Used by:</p>
            <div className="logo-row">
              <span>UK Treasury</span>
              <span>US Congress</span>
              <span>PolicyEngine</span>
            </div>
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
