import React from "react";
import * as styles from "../../styles/thesis.css";

export function AskSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>11. The Ask</h2>

      <div className={styles.askContainer}>
        <div className={styles.askAmount}>
          <span className={styles.askLabel}>Seed Round</span>
          <span className={styles.askValue}>$3-5M</span>
        </div>

        <div className={styles.askDetails}>
          <div className={styles.askUse}>
            <h3>Use of Funds</h3>
            <div className={styles.fundBars}>
              <div className={styles.fundBar}>
                <div className={styles.fundFill} style={{ width: "50%" }}></div>
                <span className={styles.fundLabel}>50% Engineering</span>
              </div>
              <div className={styles.fundBar}>
                <div className={styles.fundFill} style={{ width: "25%" }}></div>
                <span className={styles.fundLabel}>25% Data/ML</span>
              </div>
              <div className={styles.fundBar}>
                <div className={styles.fundFill} style={{ width: "15%" }}></div>
                <span className={styles.fundLabel}>15% Go-to-Market</span>
              </div>
              <div className={styles.fundBar}>
                <div className={styles.fundFill} style={{ width: "10%" }}></div>
                <span className={styles.fundLabel}>10% Operations</span>
              </div>
            </div>
          </div>

          <div className={styles.askMilestones}>
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

      <div className={styles.askProjections}>
        <h3>Revenue Path</h3>
        <table className={styles.projectionsTable}>
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
  );
}
