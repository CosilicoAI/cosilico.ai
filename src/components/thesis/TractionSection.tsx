import React from "react";
import * as styles from "../../styles/thesis.css";
import { USFlagIcon, UKFlagIcon, CanadaFlagIcon } from "../icons";

export function TractionSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>8. Traction</h2>
      <p>We've already built the proof of concept at PolicyEngine.</p>

      <div className={styles.tractionGrid}>
        <div className={styles.tractionStat}>
          <span className={styles.tractionValue}>1M+</span>
          <span className={styles.tractionLabel}>simulations run</span>
        </div>
        <div className={styles.tractionStat}>
          <span className={styles.tractionValue}>50+</span>
          <span className={styles.tractionLabel}>state tax systems</span>
        </div>
        <div className={styles.tractionStat}>
          <span className={styles.tractionValue}>100+</span>
          <span className={styles.tractionLabel}>benefit programs</span>
        </div>
        <div className={styles.tractionStat}>
          <span className={styles.tractionValue}>50+</span>
          <span className={styles.tractionLabel}>OSS contributors</span>
        </div>
      </div>

      <div className={styles.tractionUsers}>
        <h3>Used by</h3>
        <div className={styles.userGrid}>
          <div className={styles.userCard}>
            <h4>UK Government</h4>
            <p>Policy costing for budget proposals</p>
          </div>
          <div className={styles.userCard}>
            <h4>US Congress</h4>
            <p>Distributional analysis for tax reforms</p>
          </div>
          <div className={styles.userCard}>
            <h4>Think tanks</h4>
            <p>Research on UBI, child allowances, tax reform</p>
          </div>
        </div>
      </div>

      <div className={styles.lighthouseSection}>
        <h3>Government as lighthouse customers</h3>
        <p>Government adoption creates downstream enterprise value:</p>
        <div className={styles.lighthouseGrid}>
          <div className={styles.lighthouseCard}>
            <h4>Credibility signal</h4>
            <p>"If HM Treasury trusts this for budget scoring, it's accurate enough for our risk models."</p>
          </div>
          <div className={styles.lighthouseCard}>
            <h4>Regulatory alignment</h4>
            <p>Banks want to model what government models. Same methodology = predictable regulatory outcomes.</p>
          </div>
          <div className={styles.lighthouseCard}>
            <h4>Policy anticipation</h4>
            <p>Run the same scenarios government runs. Know how proposed legislation affects your portfolio before it passes.</p>
          </div>
          <div className={styles.lighthouseCard}>
            <h4>Compliance defence</h4>
            <p>"We used the same methodology as [agency]" is a strong regulatory position.</p>
          </div>
        </div>
      </div>

      <div className={styles.tractionCoverage}>
        <h3>Geographic coverage</h3>
        <div className={styles.coverageGrid}>
          <div className={`${styles.coverageItem} ${styles.coverageLive}`}>
            <span className={styles.coverageFlag}><USFlagIcon size={20} /></span>
            <span className={`${styles.coverageStatus} ${styles.coverageStatusLive}`}>Live</span>
            <span className={styles.coverageDetail}>Federal + 50 states</span>
          </div>
          <div className={`${styles.coverageItem} ${styles.coverageLive}`}>
            <span className={styles.coverageFlag}><UKFlagIcon size={20} /></span>
            <span className={`${styles.coverageStatus} ${styles.coverageStatusLive}`}>Live</span>
            <span className={styles.coverageDetail}>UK tax & benefits</span>
          </div>
          <div className={`${styles.coverageItem} ${styles.coverageProgress}`}>
            <span className={styles.coverageFlag}><CanadaFlagIcon size={20} /></span>
            <span className={`${styles.coverageStatus} ${styles.coverageStatusProgress}`}>In progress</span>
            <span className={styles.coverageDetail}>Canada (50% complete)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
