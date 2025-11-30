import React from "react";
import { Layer, Flow, Component } from "../data/types";
import { layers, flows } from "../data/architecture";

interface ArchitecturePageProps {
  selectedComponent: Component | null;
  setSelectedComponent: (component: Component | null) => void;
  selectedLayer: Layer | null;
  setSelectedLayer: (layer: Layer | null) => void;
  activeFlow: Flow | null;
  setActiveFlow: (flow: Flow | null) => void;
  flowStep: number;
  setFlowStep: (step: number) => void;
}

export default function ArchitecturePage({
  selectedComponent,
  setSelectedComponent,
  selectedLayer,
  setSelectedLayer,
  activeFlow,
  setActiveFlow,
  flowStep,
  setFlowStep,
}: ArchitecturePageProps) {
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
    return activeFlow.steps
      .slice(0, flowStep + 1)
      .some((s) => s.component === componentId);
  };

  const isComponentActive = (componentId: string) => {
    if (!activeFlow) return false;
    return activeFlow.steps[flowStep]?.component === componentId;
  };

  const getStorageBadge = (storage?: string) => {
    if (!storage) return null;
    const badges: Record<string, { label: string; class: string }> = {
      files: { label: "📁 Files", class: "storage-files" },
      db: { label: "🗄️ DB", class: "storage-db" },
      both: { label: "📁+🗄️", class: "storage-both" },
    };
    return badges[storage];
  };

  return (
    <div className="arch-page">
      {/* Architecture Header */}
      <section className="arch-hero">
        <div className="container">
          <h1 className="section-title">System Architecture</h1>
          <p className="section-subtitle">
            Interactive exploration of how rules, data, and simulation fit
            together. Click components for details, or select a data flow to
            trace.
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
                    style={
                      { "--layer-color": layer.color } as React.CSSProperties
                    }
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
                            className={`arch-component ${selectedComponent?.id === component.id ? "selected" : ""} ${isComponentHighlighted(component.id) ? "highlighted" : ""} ${isComponentActive(component.id) ? "active" : ""}`}
                            onClick={() => handleComponentClick(component, layer)}
                          >
                            <div className="component-header">
                              <h3>{component.name}</h3>
                              {badge && (
                                <span className={`storage-badge ${badge.class}`}>
                                  {badge.label}
                                </span>
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
                      className={`flow-button ${activeFlow?.id === flow.id ? "active" : ""}`}
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
                        className={`flow-step ${idx <= flowStep ? "completed" : ""} ${idx === flowStep ? "current" : ""}`}
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
                    <button onClick={resetFlow} disabled={flowStep === 0}>
                      Reset
                    </button>
                    <button
                      onClick={advanceFlow}
                      disabled={flowStep >= activeFlow.steps.length - 1}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Component Detail */}
              {selectedComponent && selectedLayer && (
                <div className="component-detail">
                  <div
                    className="detail-header"
                    style={{ borderColor: selectedLayer.color }}
                  >
                    <span className="detail-layer">{selectedLayer.name}</span>
                    <h3>{selectedComponent.name}</h3>
                    {selectedComponent.storage && (
                      <span
                        className={`storage-badge ${getStorageBadge(selectedComponent.storage)?.class}`}
                      >
                        {getStorageBadge(selectedComponent.storage)?.label}
                      </span>
                    )}
                  </div>
                  <p className="detail-description">
                    {selectedComponent.description}
                  </p>

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
                  <p>
                    Click on a component to see details, or select a data
                    flow to trace how information moves through the system.
                  </p>
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
            Rules and parameters live in git — the source of truth for
            policy logic. User data and runtime results live in the
            database.
          </p>
          <div className="storage-grid">
            <div className="storage-card files-card">
              <h3>📁 Git Repositories</h3>
              <p>Source of truth for policy logic</p>
              <ul>
                <li>
                  <strong>Legal text</strong> — statutes as structured markdown
                </li>
                <li>
                  <strong>Rules DSL</strong> — .cosilico files with formulas
                </li>
                <li>
                  <strong>Parameters</strong> — YAML with citations (tax
                  brackets, thresholds)
                </li>
                <li>
                  <strong>Test cases</strong> — IRS examples, edge cases
                </li>
              </ul>
              <div className="storage-why">
                <strong>Why git?</strong> AI agents can clone, grep, edit,
                and PR. Every change is tracked with full history.
                Legislation becomes PRs modifying statute.
              </div>
            </div>
            <div className="storage-card db-card">
              <h3>🗄️ Cloud Database</h3>
              <p>User data and runtime state</p>
              <ul>
                <li>
                  <strong>Households</strong> — user-entered scenarios ("my
                  family")
                </li>
                <li>
                  <strong>Saved reforms</strong> — custom policy proposals
                </li>
                <li>
                  <strong>Computation cache</strong> — results for fast
                  retrieval
                </li>
                <li>
                  <strong>Microsim outputs</strong> — distributional
                  analysis results
                </li>
                <li>
                  <strong>Audit logs</strong> — who calculated what, when
                </li>
              </ul>
              <div className="storage-why">
                <strong>Why DB?</strong> User-specific data that changes
                frequently, needs real-time access, and requires
                transactional guarantees.
              </div>
            </div>
          </div>
          <div className="sync-explanation">
            <h4>Two Workflows</h4>
            <div className="workflow-grid">
              <div className="workflow-item">
                <h5>Editing Rules (Git)</h5>
                <pre>
                  <code>{`# Clone the rules repo
git clone github.com/cosilico/us-rules

# AI edits parameters
# rules/parameters/irs/eitc.yaml

# Review and merge
git diff && git commit && git push`}</code>
                </pre>
              </div>
              <div className="workflow-item">
                <h5>Editing User Data (CLI Sync)</h5>
                <pre>
                  <code>{`# Pull your saved scenarios
cosilico pull --scenarios

# AI helps refine your household
# ~/cosilico/scenarios/my-family.yaml

# Push back to cloud
cosilico push`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
