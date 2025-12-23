import React from "react";
import { Cite } from "./Citation";
import { nodes } from "./graphData";

export function MarketsSection() {
  return (
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
  );
}
