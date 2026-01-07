import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/microplex.css";
import { DiamondIcon, CheckIcon, XIcon, PartialIcon } from "../components/icons";

// Icons for workflow stages
const DataSourcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ModelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
    <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
  </svg>
);

const SynthesizeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const GeoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ReweightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
    <polyline points="7.5,19.79 7.5,14.6 3,12" />
    <polyline points="21,12 16.5,14.6 16.5,19.79" />
    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const OutputIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const ArrowDown = () => (
  <div className={styles.stageArrow}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  </div>
);

// Feature icons
const QuantileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const ZeroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const SparseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" />
  </svg>
);

const FusionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M6.5 7.5L9.5 10M17.5 7.5L14.5 10M6.5 16.5L9.5 14M17.5 16.5L14.5 14" />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const CoverageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

// ============================================
// MULTI-SURVEY FUSION EXPLAINER
// ============================================

const MultiSurveyFusionExplainer: React.FC = () => {
  return (
    <section className={styles.flowsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Multi-survey fusion</h2>
        <p className={styles.sectionSubtitle}>
          Stack CPS, SIPP, and PSID with different coverage, learn joint distribution via ZI-QDNN
        </p>
      </div>

      <div className={styles.flowsContainer}>
        {/* Data source comparison */}
        <div className={styles.flowsExplanation}>
          <div className={styles.flowsExplanationCard}>
            <div className={styles.flowsExplanationNumber}>CPS</div>
            <h4 className={styles.flowsExplanationTitle}>Current Population Survey</h4>
            <p className={styles.flowsExplanationText}>
              Household structure, demographics, geography, base income.
              Cross-sectional annual snapshot. Top-coded wages, underreported investment income.
            </p>
            <code className={styles.flowsMath}>144k persons, state-level geo</code>
          </div>

          <div className={styles.flowsExplanationCard}>
            <div className={styles.flowsExplanationNumber}>SIPP</div>
            <h4 className={styles.flowsExplanationTitle}>Survey of Income and Program Participation</h4>
            <p className={styles.flowsExplanationText}>
              Panel structure with lags for transition modeling. Monthly income,
              education, race, marital status. income(t) → income(t+1) dynamics.
            </p>
            <code className={styles.flowsMath}>477k person-waves, 4 waves</code>
          </div>

          <div className={styles.flowsExplanationCard}>
            <div className={styles.flowsExplanationNumber}>PSID</div>
            <h4 className={styles.flowsExplanationTitle}>Panel Study of Income Dynamics</h4>
            <p className={styles.flowsExplanationText}>
              Long-running panel since 1968. Wealth, food stamps, taxable income.
              Smaller sample but rich longitudinal history.
            </p>
            <code className={styles.flowsMath}>9k persons, multi-decade panel</code>
          </div>
        </div>

        {/* Variable coverage visualization */}
        <div className={styles.flowsVisualization}>
          <div className={styles.flowsVisualizationGlow} />

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", position: "relative", zIndex: 1, width: "100%" }}>

            <div style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "#707088", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Variable coverage by source
            </div>

            <div style={{ width: "100%", maxWidth: "700px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* All three have these */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#a0a0b0", textAlign: "right" }}>Age, sex</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>CPS</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>SIPP</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #ffaa00, #cc8800)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>PSID</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#a0a0b0", textAlign: "right" }}>Annual income</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>wage_income</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>total*12</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #ffaa00, #cc8800)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>wage_income</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }} />

              {/* SIPP only */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#00ff88", textAlign: "right" }}>Income lag (t-1)</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>total_income_lag1</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#00ff88", textAlign: "right" }}>Education, race</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>SIPP</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }} />

              {/* CPS/PSID only */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#00d4ff", textAlign: "right" }}>State FIPS</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>CPS</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #ffaa00, #cc8800)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>PSID</div>
                </div>
              </div>

              {/* PSID only */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "140px", fontSize: "0.75rem", color: "#ffaa00", textAlign: "right" }}>Food stamps, wealth</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#505060" }}>—</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #ffaa00, #cc8800)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>PSID</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", color: "#505068", textAlign: "center", maxWidth: "520px" }}>
              Stack 630k records with partial observations. ZI-QDNN learns conditional distributions, survey dummies capture survey-specific patterns.
            </div>

          </div>
        </div>

        {/* Key insight */}
        <div className={styles.flowsKeyInsight}>
          <div className={styles.flowsKeyInsightGlow} />
          <h4 className={styles.flowsKeyInsightTitle}>Learn from all, generate complete records</h4>
          <p className={styles.flowsKeyInsightText}>
            Each survey contributes what it measures best: CPS provides geography and household structure,
            SIPP provides <strong>transition dynamics</strong> (income(t) → income(t+1)) via panel lags,
            PSID provides wealth and program participation.
            The ZI-QDNN learns the joint distribution across all sources, generating synthetic records with all variables filled.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// RAC INPUTS SECTION
// ============================================

const RacInputsSection: React.FC = () => {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Inputs for RAC</h2>
        <p className={styles.sectionSubtitle}>
          microplex synthesizes the input vector; RAC computes taxes and benefits
        </p>
      </div>

      <div className={styles.comparisonWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Variables (microplex synthesizes)</th>
              <th>RAC computes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demographics</td>
              <td>age, sex, race, marital status, education</td>
              <td>Filing status eligibility</td>
            </tr>
            <tr>
              <td>Household</td>
              <td>persons[], relationships, ages[]</td>
              <td>Tax units, SPM units, dependents</td>
            </tr>
            <tr>
              <td>Geography</td>
              <td>state → census block (by population) → CD, SLDU, SLDL</td>
              <td>State tax rules, benefit eligibility</td>
            </tr>
            <tr>
              <td>Income</td>
              <td>wage income, self-employment, investment income</td>
              <td>AGI, taxable income, payroll tax</td>
            </tr>
            <tr>
              <td>Transitions</td>
              <td>income(t-1) → income(t) from SIPP panel</td>
              <td>Eligibility changes over time</td>
            </tr>
            <tr>
              <td>Programs</td>
              <td>food stamps, Social Security from PSID</td>
              <td>Benefit amounts, phase-outs</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "16px", color: "#707088", fontSize: "0.85rem" }}>
          RAC then computes: federal tax, state tax, EITC, CTC, SNAP, Medicaid, SSI, SPM poverty status, and more
        </div>
      </div>
    </section>
  );
};

export default function MicroplexPage() {
  return (
    <PageLayout>
      <div className={styles.microplex}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>COSILICO DATA</div>
            <h1 className={styles.heroTitle}>microplex</h1>
            <p className={styles.heroSubtitle}>
              Multi-survey synthesis using ZI-QDNN (Zero-Inflated Quantile DNN).
              Stack CPS + SIPP + PSID, synthesize complete populations, calibrate to Census.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}><DiamondIcon size={10} variant="filled" /></span>
                CPS + SIPP + PSID
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}><DiamondIcon size={10} variant="filled" /></span>
                ZI-QDNN Synthesis
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}><DiamondIcon size={10} variant="filled" /></span>
                Census Block Assignment
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}><DiamondIcon size={10} variant="filled" /></span>
                L0 Calibration
              </span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link to="/stack/microsynth" style={{ color: "#00d4ff", fontSize: "0.9rem", textDecoration: "none", borderBottom: "1px solid rgba(0,212,255,0.3)" }}>
                View synthesis experiments →
              </Link>
            </div>
          </div>
        </section>

        {/* Multi-Survey Fusion Explainer */}
        <MultiSurveyFusionExplainer />

        {/* Workflow */}
        <section className={styles.workflowSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The pipeline</h2>
            <p className={styles.sectionSubtitle}>
              From partial survey observations to calibrated synthetic populations
            </p>
          </div>

          <div className={styles.workflowContainer}>
            <div className={styles.flowLine} />

            <div className={`${styles.workflowStage} ${styles.stageDelay1}`}>
              <div className={styles.stageIcon}>
                <DataSourcesIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 01</div>
                <h3 className={styles.stageTitle}>Stack surveys</h3>
                <p className={styles.stageDescription}>
                  CPS (144k): household structure, geography, base income.
                  SIPP (477k): panel lags for transitions, education, race.
                  PSID (9k): food stamps, wealth, long-run dynamics.
                  Add survey dummies to encode source-specific patterns.
                </p>
                <code className={styles.stageCode}>stacked = concat([cps, sipp, psid], survey_dummies=True)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay2}`}>
              <div className={styles.stageIcon}>
                <ModelIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 02</div>
                <h3 className={styles.stageTitle}>Train ZI-QDNN</h3>
                <p className={styles.stageDescription}>
                  Zero-Inflated Quantile DNN with two heads: P(income=0) classification head
                  for the point mass at zero, quantile regression head (τ=0.05 to 0.95) for
                  the positive income distribution. No log transforms needed.
                </p>
                <code className={styles.stageCode}>model = ZIQDNN(predictors, target="annual_income")</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay3}`}>
              <div className={styles.stageIcon}>
                <SynthesizeIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 03</div>
                <h3 className={styles.stageTitle}>Synthesize</h3>
                <p className={styles.stageDescription}>
                  Generate synthetic records by sampling from the learned conditional distribution.
                  Use training predictors to generate income values. Zero/positive sampled from
                  learned P(zero), positive values interpolated from quantile predictions.
                </p>
                <code className={styles.stageCode}>synthetic = model.sample(X_train) # 445k records</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay4}`}>
              <div className={styles.stageIcon}>
                <GeoIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 04</div>
                <h3 className={styles.stageTitle}>Assign census blocks</h3>
                <p className={styles.stageDescription}>
                  Assign each synthetic record to a census block randomly, weighted by population.
                  5.77M blocks nationwide. From block, derive CD, SLDU, SLDL, county, tract.
                  Geographic distribution matches Census before calibration.
                </p>
                <code className={styles.stageCode}>block = sample(blocks, weights=population, state=state_fips)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay5}`}>
              <div className={styles.stageIcon}>
                <ReweightIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 05</div>
                <h3 className={styles.stageTitle}>Calibrate</h3>
                <p className={styles.stageDescription}>
                  Sparse L0 reweighting to administrative targets: Census demographics by state/age,
                  IRS SOI income totals, CBO program aggregates. Most weights stay near 1,
                  implausible record types get zero weight.
                </p>
                <code className={styles.stageCode}>calibrate(synthetic, targets, l0_lambda=5e-6)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay5}`}>
              <div className={styles.stageIcon}>
                <OutputIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>OUTPUT</div>
                <h3 className={styles.stageTitle}>RAC input vectors</h3>
                <p className={styles.stageDescription}>
                  Complete synthetic population with demographics, income, geography, transitions.
                  Ready for RAC to compute federal/state taxes, EITC, CTC, SNAP, Medicaid, SSI, poverty.
                </p>
                <code className={styles.stageCode}>rac.compute(synthetic) → taxes, benefits, poverty</code>
              </div>
            </div>
          </div>
        </section>

        {/* RAC Inputs */}
        <RacInputsSection />

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Purpose-built for economic microsimulation
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <FusionIcon />
              <h3 className={styles.featureTitle}>Multi-survey fusion</h3>
              <p className={styles.featureDescription}>
                Stack CPS + SIPP + PSID with different coverage.
                Survey dummies let the model learn source-specific patterns
                while sharing structure across all three.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <QuantileIcon />
              <h3 className={styles.featureTitle}>Quantile regression</h3>
              <p className={styles.featureDescription}>
                Learn the full conditional distribution, not just the mean.
                19 quantiles (τ=0.05 to 0.95) capture income distribution shape
                including heavy tails and skewness.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ZeroIcon />
              <h3 className={styles.featureTitle}>Zero-inflated</h3>
              <p className={styles.featureDescription}>
                Income has a point mass at zero (22% of records).
                Separate classification head predicts P(income=0),
                quantile head handles positive values only.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SparseIcon />
              <h3 className={styles.featureTitle}>L0 calibration</h3>
              <p className={styles.featureDescription}>
                Hard Concrete gates for sparse weight adjustment.
                Match thousands of targets while keeping most weights near 1.
                Implausible combinations get zero weight automatically.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ScaleIcon />
              <h3 className={styles.featureTitle}>Block-level geography</h3>
              <p className={styles.featureDescription}>
                5.77M Census blocks with population-weighted assignment.
                Derive CD, SLDU, SLDL, county, tract post-hoc.
                State-level calibration to Census targets.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <CoverageIcon />
              <h3 className={styles.featureTitle}>Coverage validation</h3>
              <p className={styles.featureDescription}>
                NN distance from holdout to synthetic measures coverage.
                Median coverage ~0.000001 means synthetic data
                covers the real distribution extremely well.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why microplex?</h2>
            <p className={styles.sectionSubtitle}>
              Comparison to alternative approaches
            </p>
          </div>

          <div className={styles.comparisonWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className={styles.microplexCell}>microplex</th>
                  <th>PE Enhanced CPS</th>
                  <th>Tax-Calculator</th>
                  <th>synthpop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-survey fusion</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.partialMark}><PartialIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                </tr>
                <tr>
                  <td>Learns joint distribution</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.partialMark}><PartialIcon size={16} /></span></td>
                </tr>
                <tr>
                  <td>Panel dynamics (t-1 → t)</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                </tr>
                <tr>
                  <td>Sparse L0 calibration</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.partialMark}><PartialIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                </tr>
                <tr>
                  <td>Scalable synthesis</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                </tr>
                <tr>
                  <td>Block-level geography</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}><CheckIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                  <td><span className={styles.crossMark}><XIcon size={16} /></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Install */}
        <section className={styles.installSection}>
          <div className={styles.installBox}>
            <div className={styles.installBoxGlow} />
            <h2 className={styles.installTitle}>Get started</h2>
            <code className={styles.installCode}>pip install microplex</code>
            <div className={styles.installLinks}>
              <a
                href="https://pypi.org/project/microplex/"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.installLinkIcon}>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  <path d="M12 6a6 6 0 100 12 6 6 0 000-12z"/>
                </svg>
                PyPI
              </a>
              <a
                href="https://github.com/CosilicoAI/microplex"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.installLinkIcon}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://cosilicoai.github.io/microplex"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.installLinkIcon}>
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                </svg>
                Docs
              </a>
              <Link
                to="/stack/microsynth"
                className={styles.installLink}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.installLinkIcon}>
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                Experiments
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
