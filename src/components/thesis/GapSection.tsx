import React from "react";
import { Cite } from "./Citation";
import * as styles from "../../styles/thesis.css";

export function GapSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>2. The gap</h2>
      <p>
        Building a simulation of society requires three layers: <strong>rules</strong> (how taxes and benefits work), <strong>data</strong> (who the households are), and <strong>scenarios</strong> (what-if analysis at scale). Today, these pieces exist in fragments.
      </p>

      <div className={styles.gapGrid}>
        <div className={`${styles.gapCard} ${styles.gapNeed}`}>
          <h3>What's needed</h3>
          <ul>
            <li>Income tax calculation (federal + 50 states)</li>
            <li>Benefits eligibility (SNAP, Medicaid, EITC, etc.)</li>
            <li>Attribute prediction (income, expenses, demographics)</li>
            <li>Population simulation (policy reform modeling)</li>
            <li>Audit trails with legal citations</li>
          </ul>
        </div>
        <div className={`${styles.gapCard} ${styles.gapExists}`}>
          <h3>What exists</h3>
          <ul>
            <li><strong>Sales tax:</strong> Avalara ($8.4B acquisition)<Cite id={7} /></li>
            <li><strong>Payroll tax:</strong> Symmetry (64M employees/year)<Cite id={11} /></li>
            <li><strong>Benefits:</strong> Benefit Kitchen (7 states only)<Cite id={12} /></li>
            <li><strong>Tax filing:</strong> Column Tax (filing, not calculation)<Cite id={10} /></li>
          </ul>
        </div>
      </div>

      <p className={styles.gapConclusion}>
        <strong>The gap:</strong> No one combines income tax calculation +
        benefits eligibility + prediction + simulation in a single API.
        That's what we're building.
      </p>
    </div>
  );
}
