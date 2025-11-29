import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import PitchDeck from './components/PitchDeck';

type Tab = 'home' | 'architecture' | 'demo' | 'plan' | 'deck';

// Architecture data
interface Layer {
  id: string;
  name: string;
  description: string;
  color: string;
  components: Component[];
}

interface Component {
  id: string;
  name: string;
  description: string;
  storage?: 'files' | 'db' | 'both';
  inputs?: string[];
  outputs?: string[];
  details?: string[];
}

interface Flow {
  id: string;
  name: string;
  description: string;
  steps: FlowStep[];
}

interface FlowStep {
  component: string;
  action: string;
  data?: string;
}

const layers: Layer[] = [
  {
    id: 'sources',
    name: 'Legal Text Sources',
    description: 'Raw legal documents from government sources',
    color: '#ef4444',
    components: [
      {
        id: 'usc',
        name: 'US Code',
        description: 'Federal statutes (Title 26 = Internal Revenue Code)',
        storage: 'files',
        outputs: ['Statute sections', 'Cross-references', 'Amendment history'],
        details: ['XML format (USLM schema)', 'Updated continuously', 'Public domain'],
      },
      {
        id: 'cfr',
        name: 'Regulations (CFR)',
        description: 'Federal regulations implementing statutes',
        storage: 'files',
        outputs: ['Regulatory text', 'Agency guidance', 'Effective dates'],
        details: ['eCFR provides daily updates', 'Links to authorizing statutes'],
      },
      {
        id: 'state',
        name: 'State Codes',
        description: '50 state tax and benefit codes',
        storage: 'files',
        outputs: ['State statutes', 'State regulations'],
        details: ['Varying formats', 'Different update frequencies'],
      },
      {
        id: 'guidance',
        name: 'Agency Guidance',
        description: 'Forms, manuals, rulings',
        storage: 'files',
        outputs: ['Tax forms', 'Program manuals', 'Revenue rulings'],
        details: ['IRS forms & instructions', 'SSA POMS', 'State handbooks'],
      },
    ],
  },
  {
    id: 'knowledge',
    name: 'Legal Knowledge Graph',
    description: 'Structured representation with semantic understanding',
    color: '#f59e0b',
    components: [
      {
        id: 'statute-db',
        name: 'Statute Database',
        description: 'Hierarchical storage of all legal text',
        storage: 'both',
        inputs: ['Raw legal text'],
        outputs: ['Structured sections', 'Citation graph'],
        details: [
          'Title → Chapter → Section hierarchy',
          'Cross-reference extraction',
          'Bi-temporal: enacted + effective date',
        ],
      },
      {
        id: 'semantic',
        name: 'Semantic Annotations',
        description: 'Computational meaning from legal text',
        storage: 'files',
        inputs: ['Statute sections'],
        outputs: ['Annotated sections'],
        details: [
          'Intent: threshold, rate, eligibility',
          'Entity refs: taxpayer, dependent',
          'Conditions and exceptions',
        ],
      },
    ],
  },
  {
    id: 'rules',
    name: 'Rules Engine',
    description: 'Executable policy rules with multi-target compilation',
    color: '#10b981',
    components: [
      {
        id: 'dsl',
        name: 'Cosilico DSL',
        description: 'Domain-specific language for policy rules',
        storage: 'files',
        inputs: ['Legal knowledge'],
        outputs: ['Rule definitions'],
        details: [
          'Safe for untrusted users',
          'Mandatory citations',
          'Entity + period types',
          'Git-versioned, AI-editable',
        ],
      },
      {
        id: 'compiler',
        name: 'Multi-Target Compiler',
        description: 'Compiles rules to execution targets',
        storage: 'files',
        inputs: ['Rule definitions'],
        outputs: ['Python', 'JavaScript', 'SQL', 'Spark'],
        details: [
          'Intermediate Representation',
          'Vectorization for microsim',
          'Scalar for households',
        ],
      },
      {
        id: 'parameters',
        name: 'Parameter System',
        description: 'Time-varying parameters with provenance',
        storage: 'files',
        inputs: ['Legal text', 'IRS publications'],
        outputs: ['Typed parameters'],
        details: [
          'Bi-temporal: effective + vintage',
          'YAML with citations',
          'Inflation adjustments',
        ],
      },
    ],
  },
  {
    id: 'filesystem',
    name: 'Filesystem Layer',
    description: 'Local files for AI agent workflows',
    color: '#06b6d4',
    components: [
      {
        id: 'sync',
        name: 'CLI Sync',
        description: 'Bidirectional sync: cloud ↔ local files',
        storage: 'both',
        inputs: ['Cloud DB'],
        outputs: ['Local YAML/markdown'],
        details: [
          'cosilico pull / push / status',
          'Conflict detection',
          'OAuth device flow',
        ],
      },
      {
        id: 'local-files',
        name: 'Local File Structure',
        description: 'AI-native data representation',
        storage: 'files',
        outputs: ['Structured directories'],
        details: [
          'statutes/ - law as markdown',
          'rules/ - DSL files (.cosilico)',
          'parameters/ - YAML with citations',
          'Git versioning for all changes',
        ],
      },
      {
        id: 'ai-editing',
        name: 'AI Agent Editing',
        description: 'Claude, Cursor, Copilot can edit directly',
        storage: 'files',
        inputs: ['Local files'],
        outputs: ['Modified files'],
        details: [
          'Read full context',
          'Surgical edits with diffs',
          'Review before commit',
          'PR workflow for changes',
        ],
      },
    ],
  },
  {
    id: 'data',
    name: 'Microdata Layer',
    description: 'Population data for microsimulation',
    color: '#6366f1',
    components: [
      {
        id: 'survey',
        name: 'Survey Data',
        description: 'Representative population samples',
        storage: 'files',
        outputs: ['Household records', 'Person records', 'Weights'],
        details: ['CPS, ACS, SCF, CE', 'State-level oversamples'],
      },
      {
        id: 'synthetic',
        name: 'Synthetic Populations',
        description: 'ML-generated representative populations',
        storage: 'files',
        inputs: ['Survey data', 'Admin totals'],
        outputs: ['Synthetic households'],
        details: ['Privacy-preserving', 'Local calibration'],
      },
      {
        id: 'imputation',
        name: 'Imputation Engine',
        description: 'ML-based variable imputation',
        storage: 'db',
        inputs: ['Partial data'],
        outputs: ['Complete records'],
        details: ['Customer data enrichment', 'Uncertainty quantification'],
      },
    ],
  },
  {
    id: 'simulation',
    name: 'Simulation Engine',
    description: 'Execute rules at any scale',
    color: '#8b5cf6',
    components: [
      {
        id: 'household',
        name: 'Household Calculator',
        description: 'Single-household calculations',
        storage: 'db',
        inputs: ['Household inputs', 'Compiled rules'],
        outputs: ['Tax/benefit results', 'Audit trail'],
        details: ['< 100ms latency', 'Full explanation trace'],
      },
      {
        id: 'microsim',
        name: 'Microsimulation',
        description: 'Census-scale population modeling',
        storage: 'db',
        inputs: ['Microdata', 'Compiled rules'],
        outputs: ['Distributional impacts', 'Revenue estimates'],
        details: ['100M+ households', 'Parallel execution'],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI Layer',
    description: 'Automated encoding and generation',
    color: '#ec4899',
    components: [
      {
        id: 'encoder',
        name: 'AI Encoder',
        description: 'Bill text → Cosilico rules',
        storage: 'files',
        inputs: ['Bill text', 'Affected statutes'],
        outputs: ['Draft rules', 'Test cases'],
        details: [
          'Generates local DSL files',
          'Human review via git diff',
          'Confidence scores',
        ],
      },
      {
        id: 'generator',
        name: 'Legislative Generator',
        description: 'Cosilico reform → Bill text',
        storage: 'files',
        inputs: ['Reform definition', 'Source statutes'],
        outputs: ['Draft legislation', 'Fiscal note'],
        details: [
          'Amendment language',
          'Section references',
          'Microsim-based fiscal impact',
        ],
      },
    ],
  },
  {
    id: 'api',
    name: 'API Layer',
    description: 'Interface for AI systems and applications',
    color: '#0066ff',
    components: [
      {
        id: 'rest',
        name: 'REST API',
        description: 'HTTP endpoints for all operations',
        storage: 'db',
        inputs: ['API requests'],
        outputs: ['JSON responses'],
        details: ['Calculate taxes/benefits', 'Run microsimulations', 'Query statutes'],
      },
      {
        id: 'tools',
        name: 'AI Tool Interface',
        description: 'Function calling for AI agents',
        storage: 'db',
        inputs: ['Tool calls'],
        outputs: ['Structured results'],
        details: ['OpenAI function format', 'Anthropic tool use', 'MCP server'],
      },
    ],
  },
];

const flows: Flow[] = [
  {
    id: 'bill-to-sim',
    name: 'Bill → Simulation',
    description: 'New legislation automatically becomes simulatable',
    steps: [
      { component: 'guidance', action: 'New bill introduced', data: 'H.R. 1234' },
      { component: 'statute-db', action: 'Identify affected sections', data: 'IRC § 32, § 24' },
      { component: 'encoder', action: 'AI generates draft rules', data: 'Local .cosilico files' },
      { component: 'local-files', action: 'Human reviews via git diff', data: 'PR workflow' },
      { component: 'compiler', action: 'Compile to targets', data: 'Python, JS' },
      { component: 'microsim', action: 'Run population impact', data: '$2.3B cost' },
    ],
  },
  {
    id: 'reform-to-bill',
    name: 'Reform → Legislation',
    description: 'Design policy, generate bill text',
    steps: [
      { component: 'dsl', action: 'Define reform in local files', data: 'Double EITC phase-in' },
      { component: 'sync', action: 'Push to cloud', data: 'cosilico push' },
      { component: 'microsim', action: 'Model impact', data: '5M families affected' },
      { component: 'generator', action: 'Generate amendment text', data: 'Strike "7.65" insert "15.3"' },
      { component: 'local-files', action: 'Output as local files', data: 'drafts/hr-1234.md' },
    ],
  },
  {
    id: 'ai-agent-edit',
    name: 'AI Agent Workflow',
    description: 'AI edits rules via filesystem',
    steps: [
      { component: 'sync', action: 'Pull latest', data: 'cosilico pull' },
      { component: 'ai-editing', action: 'Claude edits parameters', data: 'Update 2025 brackets' },
      { component: 'local-files', action: 'Review diff', data: 'git diff parameters/' },
      { component: 'sync', action: 'Push changes', data: 'cosilico push' },
      { component: 'rest', action: 'API uses new values', data: '/calculate?year=2025' },
    ],
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [activeFlow, setActiveFlow] = useState<Flow | null>(null);
  const [flowStep, setFlowStep] = useState(0);

  const handleComponentClick = (component: Component, layer: Layer) => {
    setSelectedComponent(component);
    setSelectedLayer(layer);
    setActiveFlow(null);
  };

  const handleFlowClick = (flow: Flow) => {
    setActiveFlow(flow);
    setFlowStep(0);
    setSelectedComponent(null);
    setSelectedLayer(null);
  };

  const advanceFlow = () => {
    if (activeFlow && flowStep < activeFlow.steps.length - 1) {
      setFlowStep(flowStep + 1);
    }
  };

  const resetFlow = () => {
    setFlowStep(0);
  };

  const isComponentHighlighted = (componentId: string) => {
    if (!activeFlow) return false;
    return activeFlow.steps.slice(0, flowStep + 1).some(s => s.component === componentId);
  };

  const isComponentActive = (componentId: string) => {
    if (!activeFlow) return false;
    return activeFlow.steps[flowStep]?.component === componentId;
  };

  const getStorageBadge = (storage?: string) => {
    if (!storage) return null;
    const badges: Record<string, { label: string; class: string }> = {
      files: { label: '📁 Files', class: 'storage-files' },
      db: { label: '🗄️ DB', class: 'storage-db' },
      both: { label: '📁+🗄️', class: 'storage-both' },
    };
    return badges[storage];
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="/" aria-label="Cosilico home" style={{ textDecoration: 'none' }}>
            <Logo size={40} />
          </a>
          <div className="nav-links">
            <button
              className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button
              className={`nav-tab ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              Architecture
            </button>
            <button
              className={`nav-tab ${activeTab === 'demo' ? 'active' : ''}`}
              onClick={() => setActiveTab('demo')}
            >
              Demo
            </button>
            <button
              className={`nav-tab ${activeTab === 'plan' ? 'active' : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              Plan
            </button>
            <button
              className={`nav-tab ${activeTab === 'deck' ? 'active' : ''}`}
              onClick={() => setActiveTab('deck')}
            >
              Deck
            </button>
            <a href="https://github.com/CosilicoAI/cosilico-engine" className="desktop-only">Engine</a>
            <a href="https://github.com/CosilicoAI" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="container">
              <p className="hero-eyebrow">Calculate • Predict • Simulate</p>
              <h1 className="hero-title">
                Simulate <span className="gradient-text">Society</span>
              </h1>
              <p className="hero-subtitle">
                Calculate taxes and benefits. Predict household attributes. Model policy impacts.
                One open-source API.
              </p>
              <div className="hero-buttons">
                <a href="https://github.com/CosilicoAI/cosilico-engine" className="btn btn-primary">View Engine →</a>
                <button onClick={() => setActiveTab('architecture')} className="btn btn-secondary">See Architecture</button>
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
                Deterministic calculations, statistical predictions, and population-scale modeling
              </p>
              <div className="engine-grid">
                <div className="engine-component">
                  <div className="engine-icon">⚙️</div>
                  <h3>Calculate</h3>
                  <p>Deterministic tax and benefit calculations from statute. Every formula maps to law with citations.</p>
                  <ul className="engine-features">
                    <li>Federal + 50 state taxes</li>
                    <li>SNAP, Medicaid, TANF, SSI</li>
                    <li>Bi-temporal parameters</li>
                    <li>Full audit trail</li>
                  </ul>
                  <a href="https://github.com/CosilicoAI/cosilico-engine" className="engine-link">View on GitHub →</a>
                </div>
                <div className="engine-component">
                  <div className="engine-icon">📊</div>
                  <h3>Predict</h3>
                  <p>Statistical predictions for attributes you don't observe. ML models trained on enhanced microdata.</p>
                  <ul className="engine-features">
                    <li>Childcare, healthcare costs</li>
                    <li>Consumption patterns</li>
                    <li>Uncertainty quantification</li>
                    <li>Privacy-preserving</li>
                  </ul>
                </div>
                <div className="engine-component">
                  <div className="engine-icon">🌐</div>
                  <h3>Simulate</h3>
                  <p>Population-scale microsimulation. Model policy impacts across millions of households.</p>
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
                We're not building flashy web apps — AIs will generate those in seconds.
                We're building the infrastructure those AIs need.
              </p>
              <div className="ai-features">
                <div className="ai-feature">
                  <h4>Tool Use Ready</h4>
                  <p>Designed for function calling. Give Claude, GPT, or your custom agents reliable tax and benefit tools.</p>
                </div>
                <div className="ai-feature">
                  <h4>Filesystem First</h4>
                  <p>Rules and parameters live in local files. AI agents read, edit, and commit changes via git.</p>
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
                <pre><code>{`from cosilico import predict

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
        </>
      )}

      {activeTab === 'architecture' && (
        <div className="arch-page">
          {/* Architecture Header */}
          <section className="arch-hero">
            <div className="container">
              <h1 className="section-title">System Architecture</h1>
              <p className="section-subtitle">
                Interactive exploration of how rules, data, and simulation fit together.
                Click components for details, or select a data flow to trace.
              </p>
            </div>
          </section>

          {/* Storage Legend */}
          <section className="storage-legend-section">
            <div className="container">
              <div className="storage-legend">
                <div className="legend-item">
                  <span className="legend-badge storage-files">📁 Files</span>
                  <span className="legend-desc">Git-versioned, AI-editable</span>
                </div>
                <div className="legend-item">
                  <span className="legend-badge storage-db">🗄️ DB</span>
                  <span className="legend-desc">Cloud database, API access</span>
                </div>
                <div className="legend-item">
                  <span className="legend-badge storage-both">📁+🗄️</span>
                  <span className="legend-desc">Synced between both</span>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Content */}
          <section className="arch-content-section">
            <div className="container">
              <div className="arch-layout">
                {/* Main layers */}
                <div className="arch-main">
                  <div className="layers">
                    {layers.map((layer) => (
                      <div
                        key={layer.id}
                        className="layer"
                        style={{ '--layer-color': layer.color } as React.CSSProperties}
                      >
                        <div className="layer-header">
                          <h2>{layer.name}</h2>
                          <p>{layer.description}</p>
                        </div>
                        <div className="layer-components">
                          {layer.components.map((component) => {
                            const badge = getStorageBadge(component.storage);
                            return (
                              <div
                                key={component.id}
                                className={`arch-component ${selectedComponent?.id === component.id ? 'selected' : ''} ${isComponentHighlighted(component.id) ? 'highlighted' : ''} ${isComponentActive(component.id) ? 'active' : ''}`}
                                onClick={() => handleComponentClick(component, layer)}
                              >
                                <div className="component-header">
                                  <h3>{component.name}</h3>
                                  {badge && (
                                    <span className={`storage-badge ${badge.class}`}>{badge.label}</span>
                                  )}
                                </div>
                                <p>{component.description}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="arch-sidebar">
                  {/* Flows */}
                  <div className="flows-section">
                    <h2>Data Flows</h2>
                    <p>Click to trace data through the system</p>
                    <div className="flows-list">
                      {flows.map((flow) => (
                        <button
                          key={flow.id}
                          className={`flow-button ${activeFlow?.id === flow.id ? 'active' : ''}`}
                          onClick={() => handleFlowClick(flow)}
                        >
                          <strong>{flow.name}</strong>
                          <span>{flow.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Flow Detail */}
                  {activeFlow && (
                    <div className="flow-detail">
                      <h3>{activeFlow.name}</h3>
                      <div className="flow-steps">
                        {activeFlow.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className={`flow-step ${idx <= flowStep ? 'completed' : ''} ${idx === flowStep ? 'current' : ''}`}
                          >
                            <div className="step-number">{idx + 1}</div>
                            <div className="step-content">
                              <strong>{step.action}</strong>
                              {step.data && <code>{step.data}</code>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flow-controls">
                        <button onClick={resetFlow} disabled={flowStep === 0}>Reset</button>
                        <button onClick={advanceFlow} disabled={flowStep >= activeFlow.steps.length - 1}>
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Component Detail */}
                  {selectedComponent && selectedLayer && (
                    <div className="component-detail">
                      <div className="detail-header" style={{ borderColor: selectedLayer.color }}>
                        <span className="detail-layer">{selectedLayer.name}</span>
                        <h3>{selectedComponent.name}</h3>
                        {selectedComponent.storage && (
                          <span className={`storage-badge ${getStorageBadge(selectedComponent.storage)?.class}`}>
                            {getStorageBadge(selectedComponent.storage)?.label}
                          </span>
                        )}
                      </div>
                      <p className="detail-description">{selectedComponent.description}</p>

                      {selectedComponent.inputs && (
                        <div className="detail-section">
                          <h4>Inputs</h4>
                          <ul>
                            {selectedComponent.inputs.map((input, idx) => (
                              <li key={idx}>{input}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedComponent.outputs && (
                        <div className="detail-section">
                          <h4>Outputs</h4>
                          <ul>
                            {selectedComponent.outputs.map((output, idx) => (
                              <li key={idx}>{output}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedComponent.details && (
                        <div className="detail-section">
                          <h4>Details</h4>
                          <ul>
                            {selectedComponent.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Placeholder */}
                  {!selectedComponent && !activeFlow && (
                    <div className="sidebar-placeholder">
                      <p>Click on a component to see details, or select a data flow to trace how information moves through the system.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* DB vs Files Explanation */}
          <section className="storage-explain-section">
            <div className="container">
              <h2 className="section-title">Files vs Database</h2>
              <p className="section-subtitle">
                Rules and parameters live in git — the source of truth for policy logic.
                User data and runtime results live in the database.
              </p>
              <div className="storage-grid">
                <div className="storage-card files-card">
                  <h3>📁 Git Repositories</h3>
                  <p>Source of truth for policy logic</p>
                  <ul>
                    <li><strong>Legal text</strong> — statutes as structured markdown</li>
                    <li><strong>Rules DSL</strong> — .cosilico files with formulas</li>
                    <li><strong>Parameters</strong> — YAML with citations (tax brackets, thresholds)</li>
                    <li><strong>Test cases</strong> — IRS examples, edge cases</li>
                  </ul>
                  <div className="storage-why">
                    <strong>Why git?</strong> AI agents can clone, grep, edit, and PR.
                    Every change is tracked with full history. Legislation becomes PRs modifying statute.
                  </div>
                </div>
                <div className="storage-card db-card">
                  <h3>🗄️ Cloud Database</h3>
                  <p>User data and runtime state</p>
                  <ul>
                    <li><strong>Households</strong> — user-entered scenarios ("my family")</li>
                    <li><strong>Saved reforms</strong> — custom policy proposals</li>
                    <li><strong>Computation cache</strong> — results for fast retrieval</li>
                    <li><strong>Microsim outputs</strong> — distributional analysis results</li>
                    <li><strong>Audit logs</strong> — who calculated what, when</li>
                  </ul>
                  <div className="storage-why">
                    <strong>Why DB?</strong> User-specific data that changes frequently,
                    needs real-time access, and requires transactional guarantees.
                  </div>
                </div>
              </div>
              <div className="sync-explanation">
                <h4>Two Workflows</h4>
                <div className="workflow-grid">
                  <div className="workflow-item">
                    <h5>Editing Rules (Git)</h5>
                    <pre><code>{`# Clone the rules repo
git clone github.com/cosilico/us-rules

# AI edits parameters
# rules/parameters/irs/eitc.yaml

# Review and merge
git diff && git commit && git push`}</code></pre>
                  </div>
                  <div className="workflow-item">
                    <h5>Editing User Data (CLI Sync)</h5>
                    <pre><code>{`# Pull your saved scenarios
cosilico pull --scenarios

# AI helps refine your household
# ~/cosilico/scenarios/my-family.yaml

# Push back to cloud
cosilico push`}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'demo' && (
        <div className="demo-page">
          {/* Demo Hero */}
          <section className="demo-hero">
            <div className="container">
              <h1 className="section-title">Live API Demo</h1>
              <p className="section-subtitle">
                See Calculate, Predict, and Simulate in action. These are real API examples
                you can run in your own projects.
              </p>
            </div>
          </section>

          {/* Calculate Demo */}
          <section className="demo-section">
            <div className="container">
              <div className="demo-header">
                <div className="demo-badge demo-badge-calculate">Calculate</div>
                <h2>Deterministic Tax & Benefit Calculations</h2>
                <p>Every result traceable to statute with legal citations. No hallucinations.</p>
              </div>

              <div className="demo-grid">
                <div className="demo-code-panel">
                  <div className="code-header">
                    <span className="code-lang">Python</span>
                    <span className="code-file">calculate_example.py</span>
                  </div>
                  <pre className="demo-code"><code>{`from policyengine_us import Simulation

# Define a household
situation = {
    "people": {
        "adult": {
            "age": {"2024": 35},
            "employment_income": {"2024": 45000}
        },
        "child1": {
            "age": {"2024": 8}
        },
        "child2": {
            "age": {"2024": 5}
        }
    },
    "tax_units": {
        "tax_unit": {
            "members": ["adult", "child1", "child2"],
            "filing_status": {"2024": "HEAD_OF_HOUSEHOLD"}
        }
    },
    "households": {
        "household": {
            "members": ["adult", "child1", "child2"],
            "state_code": {"2024": "CA"}
        }
    }
}

sim = Simulation(situation=situation)

# Calculate tax and benefit variables
eitc = sim.calculate("eitc", 2024)
ctc = sim.calculate("ctc", 2024)
federal_tax = sim.calculate("income_tax", 2024)
snap = sim.calculate("snap", 2024)`}</code></pre>
                </div>

                <div className="demo-result-panel">
                  <div className="result-header">
                    <span className="result-icon">→</span>
                    <span>Result</span>
                  </div>
                  <div className="demo-result">
                    <div className="result-item">
                      <span className="result-label">Earned Income Tax Credit</span>
                      <span className="result-value positive">$6,604</span>
                      <span className="result-citation">26 USC § 32</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Child Tax Credit</span>
                      <span className="result-value positive">$4,000</span>
                      <span className="result-citation">26 USC § 24</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Federal Income Tax</span>
                      <span className="result-value negative">-$2,871</span>
                      <span className="result-citation">26 USC § 1</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">SNAP Benefits (Annual)</span>
                      <span className="result-value positive">$4,836</span>
                      <span className="result-citation">7 USC § 2017</span>
                    </div>
                    <div className="result-divider"></div>
                    <div className="result-item result-total">
                      <span className="result-label">Net Benefit</span>
                      <span className="result-value positive">$12,569</span>
                    </div>
                  </div>
                  <div className="result-note">
                    All calculations verified against IRS publications and state guidelines.
                    50-state coverage included.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Predict Demo */}
          <section className="demo-section demo-section-alt">
            <div className="container">
              <div className="demo-header">
                <div className="demo-badge demo-badge-predict">Predict</div>
                <h2>Statistical Attribute Prediction</h2>
                <p>ML models trained on enhanced microdata. Predict what you don't observe with uncertainty quantification.</p>
              </div>

              <div className="demo-grid">
                <div className="demo-code-panel">
                  <div className="code-header">
                    <span className="code-lang">Python</span>
                    <span className="code-file">predict_example.py</span>
                  </div>
                  <pre className="demo-code"><code>{`from cosilico import predict

# Given partial customer data
customer = {
    "age": 35,
    "income": 45000,
    "state": "CA",
    "household_size": 3,
    "has_children": True
}

# Predict unobserved attributes
predictions = predict(
    person=customer,
    variables=[
        "childcare_expense",
        "healthcare_expense",
        "housing_cost",
        "vehicle_value",
        "retirement_contribution"
    ]
)

# Returns predictions with confidence intervals
for var, result in predictions.items():
    print(f"{var}: \${result['median']:,.0f}")
    print(f"  90% CI: \${result['p5']:,.0f} - \${result['p95']:,.0f}")`}</code></pre>
                </div>

                <div className="demo-result-panel">
                  <div className="result-header">
                    <span className="result-icon">→</span>
                    <span>Predictions</span>
                  </div>
                  <div className="demo-result">
                    <div className="result-item prediction">
                      <div className="result-main">
                        <span className="result-label">Childcare Expense</span>
                        <span className="result-value">$8,500</span>
                      </div>
                      <div className="confidence-interval">
                        <span className="ci-label">90% CI:</span>
                        <span className="ci-range">$4,200 - $14,800</span>
                      </div>
                    </div>
                    <div className="result-item prediction">
                      <div className="result-main">
                        <span className="result-label">Healthcare Expense</span>
                        <span className="result-value">$6,200</span>
                      </div>
                      <div className="confidence-interval">
                        <span className="ci-label">90% CI:</span>
                        <span className="ci-range">$3,100 - $11,400</span>
                      </div>
                    </div>
                    <div className="result-item prediction">
                      <div className="result-main">
                        <span className="result-label">Housing Cost</span>
                        <span className="result-value">$24,000</span>
                      </div>
                      <div className="confidence-interval">
                        <span className="ci-label">90% CI:</span>
                        <span className="ci-range">$18,000 - $32,400</span>
                      </div>
                    </div>
                    <div className="result-item prediction">
                      <div className="result-main">
                        <span className="result-label">Vehicle Value</span>
                        <span className="result-value">$18,500</span>
                      </div>
                      <div className="confidence-interval">
                        <span className="ci-label">90% CI:</span>
                        <span className="ci-range">$8,000 - $35,000</span>
                      </div>
                    </div>
                    <div className="result-item prediction">
                      <div className="result-main">
                        <span className="result-label">401(k) Contribution</span>
                        <span className="result-value">$2,700</span>
                      </div>
                      <div className="confidence-interval">
                        <span className="ci-label">90% CI:</span>
                        <span className="ci-range">$0 - $6,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="result-note">
                    Models trained on CPS, SCF, and Consumer Expenditure Survey.
                    Updated quarterly with fresh microdata.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Simulate Demo */}
          <section className="demo-section">
            <div className="container">
              <div className="demo-header">
                <div className="demo-badge demo-badge-simulate">Simulate</div>
                <h2>Population-Scale Microsimulation</h2>
                <p>Model policy impacts across millions of households. Budget scoring for any reform.</p>
              </div>

              <div className="demo-grid">
                <div className="demo-code-panel">
                  <div className="code-header">
                    <span className="code-lang">Python</span>
                    <span className="code-file">simulate_example.py</span>
                  </div>
                  <pre className="demo-code"><code>{`from policyengine_us import Microsimulation

# Define a policy reform
reform = {
    "eitc_phase_in_rate": {
        "2024-01-01": 0.1530  # Double from 7.65%
    },
    "ctc_child_young_bonus": {
        "2024-01-01": 600  # Additional $600 for young children
    }
}

# Run microsimulation on US population
baseline = Microsimulation()
reformed = Microsimulation(reform=reform)

# Calculate population-wide impacts
cost = reformed.calculate("household_net_income").sum() - \\
       baseline.calculate("household_net_income").sum()

# Distributional analysis
winners = (reformed.calculate("household_net_income") >
           baseline.calculate("household_net_income")).sum()

poverty_baseline = baseline.calculate("in_poverty").mean()
poverty_reform = reformed.calculate("in_poverty").mean()`}</code></pre>
                </div>

                <div className="demo-result-panel">
                  <div className="result-header">
                    <span className="result-icon">→</span>
                    <span>Simulation Results</span>
                  </div>
                  <div className="demo-result">
                    <div className="sim-stat">
                      <div className="sim-stat-label">Budget Cost</div>
                      <div className="sim-stat-value cost">$47.2B</div>
                      <div className="sim-stat-note">Annual federal cost</div>
                    </div>
                    <div className="sim-stat">
                      <div className="sim-stat-label">Households Affected</div>
                      <div className="sim-stat-value">28.4M</div>
                      <div className="sim-stat-note">Net beneficiaries</div>
                    </div>
                    <div className="sim-stat">
                      <div className="sim-stat-label">Poverty Reduction</div>
                      <div className="sim-stat-value positive">-8.3%</div>
                      <div className="sim-stat-note">12.4% → 11.4% poverty rate</div>
                    </div>
                    <div className="sim-stat">
                      <div className="sim-stat-label">Child Poverty</div>
                      <div className="sim-stat-value positive">-12.1%</div>
                      <div className="sim-stat-note">16.2% → 14.3% child poverty</div>
                    </div>
                    <div className="result-divider"></div>
                    <div className="sim-breakdown">
                      <h4>Impact by Income Quintile</h4>
                      <div className="quintile-chart">
                        <div className="quintile">
                          <span className="q-label">Bottom 20%</span>
                          <div className="q-bar-container">
                            <div className="q-bar" style={{ width: '85%' }}></div>
                          </div>
                          <span className="q-value">+$2,840</span>
                        </div>
                        <div className="quintile">
                          <span className="q-label">20-40%</span>
                          <div className="q-bar-container">
                            <div className="q-bar" style={{ width: '65%' }}></div>
                          </div>
                          <span className="q-value">+$1,920</span>
                        </div>
                        <div className="quintile">
                          <span className="q-label">40-60%</span>
                          <div className="q-bar-container">
                            <div className="q-bar" style={{ width: '35%' }}></div>
                          </div>
                          <span className="q-value">+$680</span>
                        </div>
                        <div className="quintile">
                          <span className="q-label">60-80%</span>
                          <div className="q-bar-container">
                            <div className="q-bar" style={{ width: '10%' }}></div>
                          </div>
                          <span className="q-value">+$120</span>
                        </div>
                        <div className="quintile">
                          <span className="q-label">Top 20%</span>
                          <div className="q-bar-container">
                            <div className="q-bar" style={{ width: '0%' }}></div>
                          </div>
                          <span className="q-value">$0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-note">
                    Running on enhanced CPS microdata (200K+ households).
                    Results weight-adjusted to US population.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Integration Section */}
          <section className="demo-section demo-section-alt">
            <div className="container">
              <div className="demo-header">
                <div className="demo-badge demo-badge-api">API</div>
                <h2>REST API & Tool Calling</h2>
                <p>Integrate via REST or give AI agents reliable tax/benefit tools.</p>
              </div>

              <div className="api-examples">
                <div className="api-example">
                  <h3>REST API</h3>
                  <pre className="demo-code"><code>{`curl -X POST https://api.cosilico.ai/calculate \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "household": {
      "income": 45000,
      "filing_status": "head_of_household",
      "children": 2,
      "state": "CA"
    },
    "variables": ["eitc", "ctc", "snap_eligible"]
  }'`}</code></pre>
                </div>

                <div className="api-example">
                  <h3>OpenAI Function Calling</h3>
                  <pre className="demo-code"><code>{`{
  "name": "calculate_benefits",
  "description": "Calculate tax credits and benefit eligibility",
  "parameters": {
    "type": "object",
    "properties": {
      "income": {"type": "number"},
      "filing_status": {"type": "string"},
      "num_children": {"type": "integer"},
      "state": {"type": "string"}
    },
    "required": ["income", "state"]
  }
}`}</code></pre>
                </div>

                <div className="api-example">
                  <h3>Anthropic MCP Server</h3>
                  <pre className="demo-code"><code>{`# In your MCP config
{
  "mcpServers": {
    "cosilico": {
      "command": "npx",
      "args": ["-y", "@cosilico/mcp-server"]
    }
  }
}

# Claude can now use cosilico tools:
# - calculate_taxes
# - calculate_benefits
# - predict_attributes
# - simulate_reform`}</code></pre>
                </div>
              </div>
            </div>
          </section>

          {/* Try It Section */}
          <section className="demo-cta">
            <div className="container">
              <h2>Try It Yourself</h2>
              <p>Open source. No API key required to get started.</p>
              <div className="demo-cta-code">
                <code>pip install policyengine-us</code>
              </div>
              <div className="cta-buttons">
                <a href="https://github.com/PolicyEngine/policyengine-us" className="btn btn-primary">
                  View on GitHub
                </a>
                <a href="https://policyengine.org" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Try PolicyEngine.org
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'plan' && (
        <div className="plan-page">
          {/* Plan Hero */}
          <section className="plan-hero">
            <div className="container">
              <h1 className="section-title">Business Plan</h1>
              <p className="section-subtitle">
                Market research, revenue projections, and comparable analysis
              </p>
            </div>
          </section>

          {/* Market Size */}
          <section className="plan-section">
            <div className="container">
              <h2 className="plan-section-title">Market Opportunity</h2>
              <div className="market-grid">
                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">📊</span>
                    <h3>Tax Software</h3>
                  </div>
                  <div className="market-size">$90B → $215B</div>
                  <p className="market-growth">11.4% CAGR through 2032</p>
                  <p className="market-detail">
                    Cloud-based solutions now 61% of revenue. Intuit alone: $16.3B revenue, TurboTax: $4.4B.
                    API infrastructure layer is the white space.
                  </p>
                  <a href="https://www.mordorintelligence.com/industry-reports/tax-software-market"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: Mordor Intelligence
                  </a>
                </div>

                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">🏢</span>
                    <h3>Benefits Administration</h3>
                  </div>
                  <div className="market-size">$2.5B → $4B</div>
                  <p className="market-growth">10.6% CAGR through 2033</p>
                  <p className="market-detail">
                    Cloud deployment: 67.6% of revenue. SMBs growing 13.6%/year thanks to Gusto, Rippling, Justworks.
                    Eligibility calculations are core to every platform.
                  </p>
                  <a href="https://www.verifiedmarketresearch.com/product/employee-benefits-administration-software-market/"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: Verified Market Research
                  </a>
                </div>

                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">🤖</span>
                    <h3>AI Infrastructure</h3>
                  </div>
                  <div className="market-size">$46B → $356B</div>
                  <p className="market-growth">29.1% CAGR through 2032</p>
                  <p className="market-detail">
                    AI agents market alone: $47B by 2030. Function calling and tool use now standard.
                    Every AI assistant needs reliable domain tools.
                  </p>
                  <a href="https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: Fortune Business Insights
                  </a>
                </div>

                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">🏛️</span>
                    <h3>Corporate Tax Software</h3>
                  </div>
                  <div className="market-size">$12.9B → $24.1B</div>
                  <p className="market-growth">8.9% CAGR through 2030</p>
                  <p className="market-detail">
                    Large enterprises: 52.87% of market. API-based ERP integrations accelerating.
                    Corporate tax projection for M&A, restructuring, expansion.
                  </p>
                  <a href="https://www.verifiedmarketresearch.com/product/corporate-tax-software-market/"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: Verified Market Research
                  </a>
                </div>

                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">🌍</span>
                    <h3>Global Tax Tech</h3>
                  </div>
                  <div className="market-size">$18.5B → $36.7B</div>
                  <p className="market-growth">12.1% CAGR through 2030</p>
                  <p className="market-detail">
                    B2B cross-border payments: $31.6T → $50T by 2032.
                    45% of jurisdictions expect tax complexity to increase (TMF Group 2024).
                  </p>
                  <a href="https://www.marketsandmarkets.com/Market-Reports/tax-tech-market-28373824.html"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: MarketsandMarkets
                  </a>
                </div>

                <div className="market-card">
                  <div className="market-header">
                    <span className="market-icon">🗃️</span>
                    <h3>Data Enrichment</h3>
                  </div>
                  <div className="market-size">$2.4B → $4.6B</div>
                  <p className="market-growth">10.1% CAGR through 2030</p>
                  <p className="market-detail">
                    Clearbit ($31.5M ARR) acquired by HubSpot. ZoomInfo public at $10B+.
                    Household attribute prediction is our data enrichment play.
                  </p>
                  <a href="https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report"
                     className="market-source" target="_blank" rel="noopener noreferrer">
                    Source: Grand View Research
                  </a>
                </div>
              </div>

              {/* International Expansion */}
              <div className="expansion-highlight">
                <h3>International Expansion Strategy</h3>
                <div className="expansion-grid">
                  <div className="expansion-item">
                    <span className="expansion-flag">🇺🇸</span>
                    <div className="expansion-status status-live">Live</div>
                    <p>US federal + 50 states</p>
                  </div>
                  <div className="expansion-item">
                    <span className="expansion-flag">🇬🇧</span>
                    <div className="expansion-status status-live">Live</div>
                    <p>UK tax & benefits</p>
                  </div>
                  <div className="expansion-item">
                    <span className="expansion-flag">🇨🇦</span>
                    <div className="expansion-status status-progress">In Progress</div>
                    <p>Canada (50% built)</p>
                  </div>
                  <div className="expansion-item">
                    <span className="expansion-flag">🌐</span>
                    <div className="expansion-status status-planned">AI-Accelerated</div>
                    <p>AI-assisted rule encoding for rapid expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparable Companies */}
          <section className="plan-section plan-section-alt">
            <div className="container">
              <h2 className="plan-section-title">Comparable Companies</h2>
              <p className="plan-section-subtitle">
                API infrastructure companies command premium valuations. Policy/tax APIs have proven billion-dollar outcomes.
              </p>
              <div className="comparables-grid">
                <div className="comparable-card">
                  <div className="comparable-logo">💳</div>
                  <h3>Avalara</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$8.4B</span>
                    <span className="metric-label">Acquisition (2022)</span>
                  </div>
                  <p>Sales tax API. $800M+ ARR at acquisition. 30,000+ customers, 50B+ transactions/year.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> Proves tax calculation APIs can be massive businesses.
                    They do sales tax; we do income tax + benefits + prediction.
                  </p>
                </div>

                <div className="comparable-card">
                  <div className="comparable-logo">🔗</div>
                  <h3>Plaid</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$6.1B</span>
                    <span className="metric-label">Valuation (2025)</span>
                  </div>
                  <p>Financial data API. $390M ARR, growing 27% YoY. 80% gross margins. ~16x ARR multiple.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> API infrastructure for fintech. We're API infrastructure
                    for policy calculations. Similar GTM and customer base.
                  </p>
                </div>

                <div className="comparable-card">
                  <div className="comparable-logo">💰</div>
                  <h3>Gusto</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$9.3B</span>
                    <span className="metric-label">Valuation (2025)</span>
                  </div>
                  <p>Payroll + benefits platform. 400,000+ businesses. 401(k) grew 50% YoY, financial services 140% YoY.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> They need eligibility calculations for benefits.
                    We can power the calculations layer for Gusto and competitors.
                  </p>
                </div>

                <div className="comparable-card">
                  <div className="comparable-logo">⚡</div>
                  <h3>Rippling</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$11.5B</span>
                    <span className="metric-label">Valuation (2024)</span>
                  </div>
                  <p>Unified HR platform. 80 countries for EOR. Combines IT, spend, HR. Cloud-native, API-first.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> Global HR requires tax calculations across jurisdictions.
                    Multi-country support is our roadmap advantage.
                  </p>
                </div>

                <div className="comparable-card">
                  <div className="comparable-logo">📧</div>
                  <h3>Twilio</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$10B+</span>
                    <span className="metric-label">Peak Market Cap</span>
                  </div>
                  <p>Communications API. Defined the API-first category. Started with startups, scaled to enterprise.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> Same playbook—sell to developers first,
                    grow with customers, land enterprise later.
                  </p>
                </div>

                <div className="comparable-card">
                  <div className="comparable-logo">💵</div>
                  <h3>Stripe</h3>
                  <div className="comparable-metric">
                    <span className="metric-value">$50B+</span>
                    <span className="metric-label">Valuation</span>
                  </div>
                  <p>Payments API. ~$1T+ in transaction volume. Developer-first GTM. Infrastructure layer.</p>
                  <p className="comparable-relevance">
                    <strong>Why relevant:</strong> The template for developer-first infrastructure.
                    We're "Stripe for policy calculations."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Landscape */}
          <section className="plan-section">
            <div className="container">
              <h2 className="plan-section-title">Competitive Landscape</h2>
              <p className="plan-section-subtitle">
                No one combines income tax calculation + benefits eligibility + prediction in a single API
              </p>
              <div className="competitive-table-container">
                <table className="competitive-table">
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>Column Tax</th>
                      <th>Symmetry</th>
                      <th>Benefit Kitchen</th>
                      <th className="highlight-col">Cosilico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Income tax calculation</td>
                      <td className="partial">For filing</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                    </tr>
                    <tr>
                      <td>Income tax filing</td>
                      <td className="yes">Yes</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                    </tr>
                    <tr>
                      <td>Payroll tax (FICA, etc.)</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                    </tr>
                    <tr>
                      <td>Benefits eligibility</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="partial">8 states</td>
                      <td className="yes">50 states</td>
                    </tr>
                    <tr>
                      <td>Attribute prediction</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                    </tr>
                    <tr>
                      <td>Microsimulation</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                    </tr>
                    <tr>
                      <td>Open source</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="no">-</td>
                      <td className="yes">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="competitive-notes">
                <div className="competitive-note">
                  <h4>Column Tax ($26.8M raised)</h4>
                  <p>Embedded tax <em>filing</em> API. Chime, NerdWallet customers. Their blog: "Today's LLMs cannot 'do taxes' on their own because tax calculations require 100% correctness. Today's models hallucinate." — validates our thesis.</p>
                </div>
                <div className="competitive-note">
                  <h4>Symmetry Software (est. 1984)</h4>
                  <p>Payroll tax engine. 64-100M employees/year. Wave, Netchex customers. Payroll taxes only—not income tax or benefits.</p>
                </div>
                <div className="competitive-note">
                  <h4>Benefit Kitchen</h4>
                  <p>Benefits eligibility screening. 18 programs, but only 8 states. No tax calculations. Healthcare and nonprofit focus.</p>
                </div>
                <div className="competitive-note">
                  <h4>Rippling, Gusto, ADP</h4>
                  <p>Build payroll tax in-house. Potential customers for benefits eligibility + income tax projections.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Revenue Model */}
          <section className="plan-section plan-section-alt">
            <div className="container">
              <h2 className="plan-section-title">Revenue Model</h2>
              <div className="revenue-grid">
                <div className="revenue-stream">
                  <div className="revenue-header">
                    <h3>API Usage</h3>
                    <span className="revenue-tier">SMB + Startups</span>
                  </div>
                  <div className="revenue-pricing">$0.001 - $0.01 per call</div>
                  <ul>
                    <li>Self-serve signup, credit card billing</li>
                    <li>Free tier for development</li>
                    <li>Usage-based scaling</li>
                    <li>Monthly plans with included volume</li>
                  </ul>
                  <div className="revenue-example">
                    <strong>Example:</strong> Fintech startup with 1M API calls/month = $5,000-10,000/month
                  </div>
                </div>

                <div className="revenue-stream revenue-highlight">
                  <div className="revenue-header">
                    <h3>Enterprise Data Enrichment</h3>
                    <span className="revenue-tier">Large B2B</span>
                  </div>
                  <div className="revenue-pricing">$0.10 - $1.00 per record</div>
                  <ul>
                    <li>Predict 200+ attributes per customer</li>
                    <li>Batch processing or real-time</li>
                    <li>Annual update subscription</li>
                    <li>Custom model training available</li>
                  </ul>
                  <div className="revenue-example">
                    <strong>Example:</strong> Grocery chain with 10M customers @ $0.50/record = <strong>$5M</strong> + $500K/year updates
                  </div>
                </div>

                <div className="revenue-stream">
                  <div className="revenue-header">
                    <h3>Enterprise Platform</h3>
                    <span className="revenue-tier">Large Companies</span>
                  </div>
                  <div className="revenue-pricing">$100K - $1M+ annually</div>
                  <ul>
                    <li>Unlimited API access</li>
                    <li>99.9% uptime SLA</li>
                    <li>&lt;100ms latency guarantee</li>
                    <li>Custom jurisdiction modules</li>
                    <li>Dedicated support + onboarding</li>
                  </ul>
                  <div className="revenue-example">
                    <strong>Example:</strong> Tax prep company = $500K/year for full platform access
                  </div>
                </div>

                <div className="revenue-stream">
                  <div className="revenue-header">
                    <h3>Microsimulation Compute</h3>
                    <span className="revenue-tier">Government + Research</span>
                  </div>
                  <div className="revenue-pricing">$50K - $500K per engagement</div>
                  <ul>
                    <li>Population-scale policy modeling</li>
                    <li>100M+ household simulations</li>
                    <li>Custom reform analysis</li>
                    <li>Audit-ready documentation</li>
                  </ul>
                  <div className="revenue-example">
                    <strong>Example:</strong> State legislature fiscal analysis = $200K project
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Revenue Projections */}
          <section className="plan-section plan-section-alt">
            <div className="container">
              <h2 className="plan-section-title">Revenue Projections</h2>
              <p className="plan-section-subtitle">
                Conservative path to $75M ARR; aggressive path to unicorn status
              </p>
              <div className="projections-container">
                <div className="projection-table">
                  <h3>Conservative Path</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>ARR</th>
                        <th>Customers</th>
                        <th>Key Milestones</th>
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

                <div className="projection-table projection-highlight">
                  <h3>Aggressive Path (Unicorn)</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>ARR</th>
                        <th>Valuation</th>
                        <th>Key Milestones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Y1</td>
                        <td>$1M</td>
                        <td>$10M (Seed)</td>
                        <td>10 design partners, prove accuracy</td>
                      </tr>
                      <tr>
                        <td>Y2</td>
                        <td>$5M</td>
                        <td>$50M (A)</td>
                        <td>100 customers, first $1M+ deal</td>
                      </tr>
                      <tr>
                        <td>Y3</td>
                        <td>$20M</td>
                        <td>$200M (B)</td>
                        <td>Enterprise traction, 10+ countries</td>
                      </tr>
                      <tr>
                        <td>Y4</td>
                        <td>$60M</td>
                        <td>$500M</td>
                        <td>AI lab integrations</td>
                      </tr>
                      <tr className="highlight-row">
                        <td>Y5</td>
                        <td>$150M</td>
                        <td><strong>$1B+</strong></td>
                        <td>Standard infrastructure for policy AI</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="projection-note">
                    $150M ARR × 7-10x multiple = $1B+ valuation
                  </p>
                </div>
              </div>

              <div className="projection-assumptions">
                <h3>Key Assumptions</h3>
                <div className="assumptions-grid">
                  <div className="assumption">
                    <strong>API Pricing</strong>
                    <p>Comparable to Plaid ($0.02-0.30/call) and Avalara (similar per-transaction pricing)</p>
                  </div>
                  <div className="assumption">
                    <strong>Enterprise Deal Size</strong>
                    <p>Based on Avalara ARPU ($27K/customer avg) and Gusto enterprise pricing</p>
                  </div>
                  <div className="assumption">
                    <strong>Data Enrichment</strong>
                    <p>Clearbit charges $12K+/year; ZoomInfo $15K+. Our per-record model scales better for large enterprises.</p>
                  </div>
                  <div className="assumption">
                    <strong>Growth Rate</strong>
                    <p>Plaid grew 27% YoY at scale. Twilio grew 40-60% in early years. We assume 3-5x annual growth years 1-3.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Ask */}
          <section className="plan-section">
            <div className="container">
              <h2 className="plan-section-title">The Ask</h2>
              <div className="ask-container">
                <div className="ask-amount">
                  <span className="ask-label">Seed Round</span>
                  <span className="ask-value">$3-5M</span>
                </div>
                <div className="ask-details">
                  <div className="ask-use">
                    <h3>Use of Funds</h3>
                    <div className="fund-allocation">
                      <div className="fund-item">
                        <div className="fund-bar" style={{ width: '50%' }}></div>
                        <span className="fund-label">50% Engineering</span>
                        <span className="fund-desc">Core platform, API, infrastructure</span>
                      </div>
                      <div className="fund-item">
                        <div className="fund-bar" style={{ width: '25%' }}></div>
                        <span className="fund-label">25% Data/ML</span>
                        <span className="fund-desc">Prediction models, microdata enhancement</span>
                      </div>
                      <div className="fund-item">
                        <div className="fund-bar" style={{ width: '15%' }}></div>
                        <span className="fund-label">15% Go-to-Market</span>
                        <span className="fund-desc">First sales hire, design partner acquisition</span>
                      </div>
                      <div className="fund-item">
                        <div className="fund-bar" style={{ width: '10%' }}></div>
                        <span className="fund-label">10% Operations</span>
                        <span className="fund-desc">Legal, finance, ops</span>
                      </div>
                    </div>
                  </div>
                  <div className="ask-milestones">
                    <h3>Milestones to Series A</h3>
                    <ul>
                      <li>10+ paying customers</li>
                      <li>$1M+ ARR</li>
                      <li>1-2 enterprise deals ($500K+)</li>
                      <li>Proven accuracy at scale</li>
                      <li>Multi-country coverage (US, UK, Canada)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Target Investors */}
          <section className="plan-section plan-section-alt">
            <div className="container">
              <h2 className="plan-section-title">Target Investors</h2>
              <p className="plan-section-subtitle">
                VCs with proven thesis alignment: open source, fintech infrastructure, and AI tools
              </p>
              <div className="investors-grid">
                <div className="investor-card investor-tier-1">
                  <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
                  <div className="investor-header">
                    <h3>OSS Capital</h3>
                    <span className="investor-focus">Open Source</span>
                  </div>
                  <p className="investor-thesis">First and only VC exclusively dedicated to COSS (commercial open source). Portfolio includes GitLab, Elastic, with $300B+ in combined value created.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> Our open-source-first model is exactly their thesis. Strong pattern match with successful COSS companies.
                  </div>
                </div>

                <div className="investor-card investor-tier-1">
                  <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
                  <div className="investor-header">
                    <h3>Ribbit Capital</h3>
                    <span className="investor-focus">Fintech</span>
                  </div>
                  <p className="investor-thesis">$12B AUM, pure fintech focus. Early backers of Robinhood, Coinbase, Affirm, Brex, Nubank. 35 unicorns, 15 IPOs.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> We're infrastructure for the fintech companies they already back. Portfolio synergies are clear.
                  </div>
                </div>

                <div className="investor-card investor-tier-1">
                  <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
                  <div className="investor-header">
                    <h3>QED Investors</h3>
                    <span className="investor-focus">Fintech Infrastructure</span>
                  </div>
                  <p className="investor-thesis">Founded by Capital One founder. Early in Credit Karma, Nubank, Klarna, SoFi. Deep fintech infrastructure expertise.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> Strong thesis on "picks and shovels" for fintech. We're infrastructure for tax/benefits calculations.
                  </div>
                </div>

                <div className="investor-card investor-tier-2">
                  <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
                  <div className="investor-header">
                    <h3>a16z Infrastructure</h3>
                    <span className="investor-focus">AI Infrastructure</span>
                  </div>
                  <p className="investor-thesis">$1.25B fund led by Martin Casado. Portfolio: Fivetran ($5.6B), dbt ($4.2B), ElevenLabs. Strong open source AI grants program.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> We're AI infrastructure for policy calculations. Open source ethos aligns with their grants program.
                  </div>
                </div>

                <div className="investor-card investor-tier-2">
                  <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
                  <div className="investor-header">
                    <h3>General Catalyst</h3>
                    <span className="investor-focus">AI + Fintech</span>
                  </div>
                  <p className="investor-thesis">$30B AUM. Raised $8B in 2024. Focus on "applied AI" across fintech, healthcare, government. Launched Percepta for AI transformation.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> Our AI tools thesis aligns with their "applied AI" focus. Government angle matches Percepta's scope.
                  </div>
                </div>

                <div className="investor-card investor-tier-2">
                  <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
                  <div className="investor-header">
                    <h3>Index Ventures</h3>
                    <span className="investor-focus">Fintech + Open Source</span>
                  </div>
                  <p className="investor-thesis">$2.3B raised in 2024. Domain experts: Mark for fintech, Mike for open source. Portfolio: Revolut (40M users), Robinhood, Figma.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> We span both their fintech and open source verticals. Shardul Shah's infrastructure expertise relevant.
                  </div>
                </div>

                <div className="investor-card investor-tier-3">
                  <div className="investor-tier-badge">Tier 3: Seed Specialists</div>
                  <div className="investor-header">
                    <h3>First Round Capital</h3>
                    <span className="investor-focus">Seed + Enterprise</span>
                  </div>
                  <p className="investor-thesis">Seed stage specialists. 545 companies, avg $3.8M seed rounds. Strong in enterprise, AI, fintech. Portfolio: Notion, Roblox, Square.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> Seed stage is perfect. Enterprise + fintech + AI clusters match our positioning.
                  </div>
                </div>

                <div className="investor-card investor-tier-3">
                  <div className="investor-tier-badge">Tier 3: Mission-Aligned</div>
                  <div className="investor-header">
                    <h3>Obvious Ventures</h3>
                    <span className="investor-focus">World Positive</span>
                  </div>
                  <p className="investor-thesis">$1B+ AUM. "World Positive Capitalism" thesis. Founded by Ev Williams (Twitter, Medium). Climate + fintech focus. Beyond Meat, Diamond Foundry.</p>
                  <div className="investor-fit">
                    <strong>Fit:</strong> Policy simulation enables better governance. "Fintech for financial access" thesis aligns with benefits eligibility.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Anticipated Objections */}
          <section className="plan-section">
            <div className="container">
              <h2 className="plan-section-title">Anticipated Objections & Responses</h2>
              <p className="plan-section-subtitle">
                Proactive answers to common VC concerns
              </p>
              <div className="objections-grid">
                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "Why can't AI just get better at tax calculations?"
                  </div>
                  <div className="objection-answer">
                    <strong>The data proves it can't.</strong> Stanford research shows GPT-4 achieves only 67% accuracy on tax true/false questions and only 76 of 98 scenarios within 10% of correct tax liability. Tax law requires deterministic precision, not probabilistic guesses. LLMs will always need to call verified calculation tools.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "TurboTax is a giant. Why won't they crush you?"
                  </div>
                  <div className="objection-answer">
                    <strong>TurboTax doesn't have a public API.</strong> They're consumer-facing, not infrastructure. Intuit's business model is selling to end users, not enabling competitors. We're Stripe to their payment processor—they're complementary, not competitive.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "Is the open source model viable for enterprise revenue?"
                  </div>
                  <div className="objection-answer">
                    <strong>Proven at scale.</strong> MongoDB ($1.7B ARR), Elastic ($1.2B ARR), GitLab ($600M ARR) all built on open core. OSS Capital's portfolio has created $300B+ in value. Open source builds trust with developers who become internal champions at enterprises.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "This seems technically complex. Can you execute?"
                  </div>
                  <div className="objection-answer">
                    <strong>We've already built it.</strong> PolicyEngine has 1M+ simulations, is used by UK government (HMT) and US Congress (JCT), covers US federal + 50 states + UK + Canada. This isn't a pitch for something we might build—it's commercializing proven technology.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "What's your go-to-market? Enterprise sales are expensive."
                  </div>
                  <div className="objection-answer">
                    <strong>Developer-first, land and expand.</strong> Free tier lets developers prototype. Usage-based pricing scales with customers. Self-serve signup captures SMBs. Enterprise sales only for $100K+ deals—not starting with expensive sales motions.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "Single founder risk?"
                  </div>
                  <div className="objection-answer">
                    <strong>Actively hiring co-founders.</strong> Seed capital will enable founding engineer hires. PolicyEngine has 50+ open source contributors—the community is the extended team. First priority post-funding: systems engineer + ML engineer.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "Is $3-5M enough runway?"
                  </div>
                  <div className="objection-answer">
                    <strong>24 months to Series A milestones.</strong> Lean team of 5-7 people. No expensive infrastructure—cloud costs scale with usage. Clear path: 10 customers, $1M ARR, 1-2 enterprise deals, multi-country coverage. Conservative burn rate.
                  </div>
                </div>

                <div className="objection-card">
                  <div className="objection-question">
                    <span className="objection-icon">?</span>
                    "How do you handle law changes?"
                  </div>
                  <div className="objection-answer">
                    <strong>Built into the system.</strong> Bi-temporal parameters track both effective dates and when we learned about changes. Git-versioned rules mean every change is auditable. AI-assisted encoding accelerates updates. This ongoing maintenance is a moat, not a burden.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Now */}
          <section className="plan-section plan-section-alt">
            <div className="container">
              <h2 className="plan-section-title">Why Now?</h2>
              <div className="why-now-grid">
                <div className="why-now-card">
                  <div className="why-now-icon">1</div>
                  <h3>AI Tool Use is Standard</h3>
                  <p>Function calling shipped in GPT-4 (2023), Claude 3 (2024). MCP protocol from Anthropic now adopted by Microsoft. Every AI assistant needs reliable tools—not hallucinations.</p>
                </div>
                <div className="why-now-card">
                  <div className="why-now-icon">2</div>
                  <h3>AI Financial Regulation Coming</h3>
                  <p>SEC, CFPB, state regulators are all examining AI in financial services. Audit trails and explainability will be required. Our citation-based approach is regulation-ready.</p>
                </div>
                <div className="why-now-card">
                  <div className="why-now-icon">3</div>
                  <h3>Fintech Consolidation</h3>
                  <p>Avalara acquired for $8.4B (2022). Clearbit by HubSpot. Credit Karma by Intuit ($8.1B). Acquirers are paying premium for tax and financial data infrastructure.</p>
                </div>
                <div className="why-now-card">
                  <div className="why-now-icon">4</div>
                  <h3>Open Source AI Stack Maturing</h3>
                  <p>a16z, OSS Capital, Index all increasing open source investments. The Llama/Mistral ecosystem proves open models can win. Open infrastructure is the new standard.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'deck' && (
        <div className="deck-container">
          <PitchDeck />
        </div>
      )}

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
                <button onClick={() => setActiveTab('architecture')} className="footer-link-btn">Architecture</button>
              </div>
              <div className="footer-section">
                <h5>Resources</h5>
                <a href="https://github.com/CosilicoAI/cosilico-engine/blob/main/docs/DESIGN.md">Design Doc</a>
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
