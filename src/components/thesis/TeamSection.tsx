import React from "react";
import * as styles from "../../styles/thesis.css";

export function TeamSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>9. Team</h2>

      <div className={styles.teamGrid}>
        <div className={styles.teamMember}>
          <h3>Max Ghenis</h3>
          <p className={styles.teamRole}>Founder & CEO</p>
          <ul>
            <li>Founded PolicyEngine — models used by UK Government, US Congress</li>
            <li>Former Google data scientist</li>
            <li>MIT economics, UC Berkeley statistics</li>
            <li>Led team that encoded US federal + 50 states + UK + Canada</li>
          </ul>
          <div className={styles.teamLinks}>
            <a href="https://linkedin.com/in/maxghenis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/maxghenis" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamHiring}`}>
          <h3>Hiring</h3>
          <p className={styles.teamRole}>Co-founders</p>
          <ul>
            <li>Potential co-founders from PolicyEngine team (proven policy encoding expertise)</li>
            <li>Seeking: Systems engineer, ML engineer</li>
            <li>First priority post-funding</li>
          </ul>
          <p className={styles.teamNote}>50+ open source contributors available for contract work</p>
        </div>
      </div>
    </div>
  );
}
