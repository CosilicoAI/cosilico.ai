import React from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/microplex.css";

// Icons for workflow stages
const DataSourcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const FlowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIconSvg}>
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
    <circle cx="12" cy="12" r="4" />
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
const ConditionalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const ZeroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
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

const LikelihoodIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
);

// ============================================
// MULTI-SURVEY FUSION EXPLAINER
// ============================================

const MultiSurveyFusionExplainer: React.FC = () => {
  return (
    <section className={styles.flowsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Multi-Survey Fusion</h2>
        <p className={styles.sectionSubtitle}>
          Stack surveys with different coverage, learn joint distribution from partial observations
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
              Includes non-filers. Top-coded wages, underreported investment income.
            </p>
            <code className={styles.flowsMath}>150k persons, 54k households</code>
          </div>

          <div className={styles.flowsExplanationCard}>
            <div className={styles.flowsExplanationNumber}>PUF</div>
            <h4 className={styles.flowsExplanationTitle}>IRS Public Use File</h4>
            <p className={styles.flowsExplanationText}>
              Capital gains, partnership/S-corp income, detailed expenses.
              Uncapped income. No geography, missing non-filers.
            </p>
            <code className={styles.flowsMath}>208k tax units → 300k persons</code>
          </div>

          <div className={styles.flowsExplanationCard}>
            <div className={styles.flowsExplanationNumber}>+</div>
            <h4 className={styles.flowsExplanationTitle}>Administrative Targets</h4>
            <p className={styles.flowsExplanationText}>
              IRS SOI totals by AGI bracket, Census demographics by state/age,
              CBO program aggregates. 5,000+ calibration constraints.
            </p>
            <code className={styles.flowsMath}>L0 calibration removes implausible combos</code>
          </div>
        </div>

        {/* Variable coverage visualization */}
        <div className={styles.flowsVisualization}>
          <div className={styles.flowsVisualizationGlow} />

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", position: "relative", zIndex: 1, width: "100%" }}>

            <div style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "#707088", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Variable Coverage by Source
            </div>

            <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* Shared variables */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#a0a0b0", textAlign: "right" }}>Wages, SE income</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS (top-coded)</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF (uncapped)</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#a0a0b0", textAlign: "right" }}>Interest, dividends</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS (underreported)</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF (detailed)</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#a0a0b0", textAlign: "right" }}>Pension, Social Security</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px 0 0 3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "0 3px 3px 0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }} />

              {/* CPS only */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00d4ff", textAlign: "right" }}>Household structure</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS only</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00d4ff", textAlign: "right" }}>State, county, block</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS only</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00d4ff", textAlign: "right" }}>Medical, childcare expense</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00d4ff, #00a8cc)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>CPS only</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }} />

              {/* PUF only */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00ff88", textAlign: "right" }}>Capital gains (LT/ST)</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF only</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00ff88", textAlign: "right" }}>Partnership, S-corp income</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF only</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "160px", fontSize: "0.75rem", color: "#00ff88", textAlign: "right" }}>Charitable, mortgage int.</div>
                <div style={{ flex: 1, height: "20px", display: "flex", gap: "2px" }}>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#505060" }}>missing</div>
                  <div style={{ flex: 1, background: "linear-gradient(90deg, #00ff88, #00cc6a)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#000" }}>PUF only</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "0.75rem", color: "#505068", textAlign: "center", maxWidth: "520px" }}>
              Stack 450k records with partial observations. Masked MAF learns joint distribution, fills all gaps at synthesis.
            </div>

          </div>
        </div>

        {/* Key insight */}
        <div className={styles.flowsKeyInsight}>
          <div className={styles.flowsKeyInsightGlow} />
          <h4 className={styles.flowsKeyInsightTitle}>Learn from Both, Trust Neither Completely</h4>
          <p className={styles.flowsKeyInsightText}>
            For shared variables like wages, the flow learns from <strong>both sources</strong>: CPS provides
            low-income patterns (includes non-filers), PUF provides high-income tail (uncapped).
            L0 calibration to IRS SOI totals then removes implausible combinations and corrects marginal distributions.
            The result: complete input vectors for RAC to compute taxes and benefits.
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
              <th>RAC Computes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demographics</td>
              <td>age, sex, race, marital status, disability, citizenship</td>
              <td>Filing status eligibility</td>
            </tr>
            <tr>
              <td>Household</td>
              <td>persons[], relationships, ages[]</td>
              <td>Tax units, SPM units, dependents</td>
            </tr>
            <tr>
              <td>Geography</td>
              <td>state, county, block → CD, SLDU, SLDL</td>
              <td>State tax rules, benefit eligibility</td>
            </tr>
            <tr>
              <td>Wage Income</td>
              <td>employment income, self-employment income</td>
              <td>Payroll tax, earned income</td>
            </tr>
            <tr>
              <td>Investment</td>
              <td>interest, dividends (ordinary/qualified), capital gains (LT/ST)</td>
              <td>Investment income tax, NIIT</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>partnership income, S-corp income, rental income</td>
              <td>QBI deduction, SE tax</td>
            </tr>
            <tr>
              <td>Retirement</td>
              <td>Social Security, pension (taxable/nontaxable), IRA distributions</td>
              <td>SS taxation, retirement credits</td>
            </tr>
            <tr>
              <td>Expenses</td>
              <td>medical OOP, childcare, housing cost, property tax, charitable, mortgage interest</td>
              <td>Itemized deductions, CDCTC</td>
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
              Multi-survey fusion using normalizing flows with masked training.
              Synthesize complete input vectors from CPS + IRS PUF for RAC microsimulation.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                CPS + PUF Fusion
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                Masked MAF Training
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                5,000+ Calibration Targets
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                L0 Sparse Reweighting
              </span>
            </div>
          </div>
        </section>

        {/* Multi-Survey Fusion Explainer */}
        <MultiSurveyFusionExplainer />

        {/* Workflow */}
        <section className={styles.workflowSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Pipeline</h2>
            <p className={styles.sectionSubtitle}>
              From partial survey observations to complete RAC input vectors
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
                <h3 className={styles.stageTitle}>Stack Surveys</h3>
                <p className={styles.stageDescription}>
                  CPS (150k persons): household structure, geography, expenses, base income.
                  PUF (300k persons): capital gains, partnership income, detailed expenses.
                  Mark missing values as NaN.
                </p>
                <code className={styles.stageCode}>stacked = concat([cps, puf], mark_missing=True)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay2}`}>
              <div className={styles.stageIcon}>
                <FlowIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 02</div>
                <h3 className={styles.stageTitle}>Masked MAF Training</h3>
                <p className={styles.stageDescription}>
                  Train normalizing flow on 450k records with partial observations.
                  Loss computed only on observed values. Flow learns joint distribution
                  from both sources simultaneously.
                </p>
                <code className={styles.stageCode}>flow.fit(stacked, mask=observed, weights=survey_weights)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay3}`}>
              <div className={styles.stageIcon}>
                <SynthesizeIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 03</div>
                <h3 className={styles.stageTitle}>Synthesize Complete Records</h3>
                <p className={styles.stageDescription}>
                  Generate 1M+ households with ALL variables filled. No NaN gaps.
                  CPS variables + PUF variables + learned correlations.
                  Assign census blocks by state × population probability.
                </p>
                <code className={styles.stageCode}>synthetic = flow.sample(n=1_000_000)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay4}`}>
              <div className={styles.stageIcon}>
                <ReweightIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 04</div>
                <h3 className={styles.stageTitle}>L0 Calibration</h3>
                <p className={styles.stageDescription}>
                  Sparse reweighting to 5,000+ targets: IRS SOI income totals (including capital gains!),
                  Census demographics by state/age, CBO program aggregates.
                  Implausible combinations get zero weight.
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
                <h3 className={styles.stageTitle}>RAC Input Vectors</h3>
                <p className={styles.stageDescription}>
                  Complete population with all income sources, demographics, geography, expenses.
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
              <h3 className={styles.featureTitle}>Multi-Survey Fusion</h3>
              <p className={styles.featureDescription}>
                Stack CPS + PUF with different coverage patterns.
                CPS: household structure, geography, non-filers.
                PUF: capital gains, partnership income, high-income tail.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ConditionalIcon />
              <h3 className={styles.featureTitle}>Masked Training</h3>
              <p className={styles.featureDescription}>
                Learn joint distribution from partial observations.
                Flow computes loss only on observed values, learns
                correlations between variables across surveys.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ZeroIcon />
              <h3 className={styles.featureTitle}>Zero-Inflated Variables</h3>
              <p className={styles.featureDescription}>
                Capital gains, partnership income, charitable contributions
                have many zeros. Flow learns the joint zero/positive pattern
                without explicit mixture models.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SparseIcon />
              <h3 className={styles.featureTitle}>L0 Calibration</h3>
              <p className={styles.featureDescription}>
                Hard Concrete gates for sparse weight adjustment.
                Match 5,000+ targets while keeping most weights unchanged.
                Implausible record types get zero weight automatically.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ScaleIcon />
              <h3 className={styles.featureTitle}>Block-Level Geography</h3>
              <p className={styles.featureDescription}>
                5.77M Census blocks with population-weighted assignment.
                Derive CD, SLDU, SLDL, county, tract post-hoc.
                State-level calibration to Census targets.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <LikelihoodIcon />
              <h3 className={styles.featureTitle}>Exact Likelihood</h3>
              <p className={styles.featureDescription}>
                Normalizing flows provide tractable log-likelihood.
                Stable training, no mode collapse. Can score any
                record against the learned distribution.
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
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
                <tr>
                  <td>Learns joint distribution</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                </tr>
                <tr>
                  <td>Masked training</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
                <tr>
                  <td>Sparse L0 calibration</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
                <tr>
                  <td>Scalable synthesis</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.checkMark}>✓</span></td>
                </tr>
                <tr>
                  <td>Block-level geography</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Install */}
        <section className={styles.installSection}>
          <div className={styles.installBox}>
            <div className={styles.installBoxGlow} />
            <h2 className={styles.installTitle}>Get Started</h2>
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
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
