import React from "react";
import { Cite } from "./Citation";

export function ModelSection() {
  return (
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
  );
}
