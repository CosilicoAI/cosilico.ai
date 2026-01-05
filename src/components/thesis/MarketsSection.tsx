import React from "react";
import { Cite } from "./Citation";
import { nodes } from "./graphData";
import * as styles from "../../styles/thesis.css";

export function MarketsSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>5. The markets</h2>
      <p>We sit at the infrastructure layer beneath multiple large markets.</p>
      <div className={styles.marketCards}>
        {nodes.filter((n) => n.type === "market").map((market) => (
          <div key={market.id} className={styles.marketCard}>
            <h3>{market.label}</h3>
            <div className={styles.marketSize}>
              {market.metrics}
              {market.sourceId && <Cite id={market.sourceId} />}
            </div>
            <p>{market.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.marketAdditional}>
        <h3>Additional markets</h3>
        <div className={styles.marketCards}>
          <div className={styles.marketCard}>
            <h3>Financial planning</h3>
            <div className={styles.marketSize}>$3.6B → $14B<Cite id={20} /></div>
            <p>16.3% CAGR. Retirement, estate planning, wealth management all need tax/benefit calculations.</p>
          </div>
          <div className={styles.marketCard}>
            <h3>Corporate tax software</h3>
            <div className={styles.marketSize}>$12.9B → $24.1B<Cite id={18} /></div>
            <p>Large enterprises: 52.87% of market. API-based ERP integrations accelerating.</p>
          </div>
          <div className={styles.marketCard}>
            <h3>Global tax tech</h3>
            <div className={styles.marketSize}>$18.5B → $36.7B<Cite id={19} /></div>
            <p>Cross-border payments: $31.6T → $50T by 2032. 45% of jurisdictions expect tax complexity to increase.</p>
          </div>
          <div className={styles.marketCard}>
            <h3>Policy research</h3>
            <div className={styles.marketSize}>$2B+</div>
            <p>Think tanks, government agencies, academics. Legislative scoring, distributional analysis, reform modeling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
