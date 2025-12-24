import React from "react";
import { Cite } from "./Citation";
import * as styles from "../../styles/thesis.css";

export function ModelSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>7. Business Model</h2>
      <p>Open source core. Commercial APIs. Proven at scale.</p>

      <div className={styles.modelStack}>
        <div className={`${styles.stackLayer} ${styles.stackFree}`}>
          <div>
            <h3>Open Source</h3>
            <p>Run it yourself. Apache 2.0 licensed. Full access to rules engine.</p>
          </div>
          <span className={styles.stackPrice}>Free</span>
        </div>
        <div className={`${styles.stackLayer} ${styles.stackApi}`}>
          <div>
            <h3>API Usage</h3>
            <p>Hosted, managed, &lt;100ms latency. Pay per call.</p>
          </div>
          <span className={styles.stackPrice}>$0.001-0.01/call</span>
        </div>
        <div className={`${styles.stackLayer} ${styles.stackData}`}>
          <div>
            <h3>Data Enrichment</h3>
            <p>Predict household attributes at scale. Batch or real-time.</p>
          </div>
          <span className={styles.stackPrice}>$0.10-1.00/record</span>
        </div>
        <div className={`${styles.stackLayer} ${styles.stackEnterprise}`}>
          <div>
            <h3>Enterprise</h3>
            <p>99.9% SLA, dedicated support, custom jurisdictions.</p>
          </div>
          <span className={styles.stackPrice}>$100K-1M+/year</span>
        </div>
      </div>

      <div className={styles.modelPrecedent}>
        <h3>Open Source Commercial Model: Proven at Scale</h3>
        <div className={styles.precedentGrid}>
          <div className={styles.precedent}>
            <span className={styles.precedentName}>MongoDB<Cite id={14} /></span>
            <span className={styles.precedentRevenue}>$1.7B ARR</span>
          </div>
          <div className={styles.precedent}>
            <span className={styles.precedentName}>Elastic<Cite id={15} /></span>
            <span className={styles.precedentRevenue}>$1.3B ARR</span>
          </div>
          <div className={styles.precedent}>
            <span className={styles.precedentName}>GitLab<Cite id={16} /></span>
            <span className={styles.precedentRevenue}>$580M ARR</span>
          </div>
        </div>
      </div>

      <div className={styles.comparables}>
        <h3>Comparable Outcomes</h3>
        <div className={styles.comparableGrid}>
          <div className={styles.comparable}>
            <span className={styles.comparableName}>Avalara<Cite id={7} /></span>
            <span className={styles.comparableValue}>$8.4B</span>
            <span className={styles.comparableType}>Acquisition (2022)</span>
          </div>
          <div className={styles.comparable}>
            <span className={styles.comparableName}>Plaid<Cite id={8} /></span>
            <span className={styles.comparableValue}>$6.1B</span>
            <span className={styles.comparableType}>$390M ARR, 16x multiple<Cite id={13} /></span>
          </div>
          <div className={styles.comparable}>
            <span className={styles.comparableName}>Gusto<Cite id={9} /></span>
            <span className={styles.comparableValue}>$9.3B</span>
            <span className={styles.comparableType}>Valuation (2025)</span>
          </div>
          <div className={styles.comparable}>
            <span className={styles.comparableName}>Rippling<Cite id={17} /></span>
            <span className={styles.comparableValue}>$13.5B</span>
            <span className={styles.comparableType}>Valuation (2024)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
