import React, { useState, useCallback } from "react";
import { Cite } from "./Citation";
import { Node } from "./types";
import { nodes, edges } from "./graphData";
import * as styles from "../../styles/thesis.css";

export function SimulationSection() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);

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

  return (
    <>
      <div className={styles.thesisContent}>
        <h2>3. The Simulation</h2>
        <p>
          We're building the shared substrate—a simulation that anyone can query (and more importantly, any AI). Decisions grounded in the same reality. Five APIs. One model of society.
        </p>
      </div>

      <div className={styles.graphContainer}>
        <svg className={styles.graphSvg} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <text x="20" y="8" className={styles.columnLabel}>Markets</text>
          <text x="50" y="8" className={styles.columnLabel}>Products</text>
          <text x="80" y="8" className={styles.columnLabel}>Customers</text>

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
                className={highlightedEdges.includes(edgeId) ? `${styles.graphEdge} ${styles.graphEdgeHighlighted}` : styles.graphEdge}
              />
            );
          })}

          {nodes.map((node) => (
            <g
              key={node.id}
              onClick={() => handleNodeClick(node)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                className={
                  selectedNode?.id === node.id
                    ? `${styles.graphNodeCircle} ${node.type === 'product' ? styles.graphNodeProduct : node.type === 'customer' ? styles.graphNodeCustomer : styles.graphNodeMarket}`
                    : `${styles.graphNodeCircle} ${node.type === 'product' ? styles.graphNodeProduct : node.type === 'customer' ? styles.graphNodeCustomer : styles.graphNodeMarket}`
                }
              />
              <text x={node.x} y={node.y + 7} className={styles.nodeLabel}>
                {node.label}
              </text>
            </g>
          ))}
        </svg>

        {selectedNode && (
          <div className={styles.nodeDetail}>
            <h3>{selectedNode.label}</h3>
            <p>{selectedNode.description}</p>
            {selectedNode.metrics && (
              <div className={styles.nodeMetric}>{selectedNode.metrics}</div>
            )}
            {selectedNode.sourceId && <Cite id={selectedNode.sourceId} />}
          </div>
        )}
      </div>

      <div className={styles.thesisContent}>
        <div className={styles.platformDetails}>
          <div className={styles.platformCard}>
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
          <div className={styles.platformCard}>
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
          <div className={styles.platformCard}>
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
    </>
  );
}
