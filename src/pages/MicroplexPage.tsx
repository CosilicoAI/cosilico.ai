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
              Microdata synthesis and reweighting using normalizing flows.
              Create rich, calibrated populations from multiple data sources.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                Normalizing Flows
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                Sparse Reweighting
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                Multi-Source Fusion
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>◆</span>
                Any Geography
              </span>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className={styles.workflowSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Pipeline</h2>
            <p className={styles.sectionSubtitle}>
              From multiple data sources to calibrated local microdata
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
                <h3 className={styles.stageTitle}>Data Sources</h3>
                <p className={styles.stageDescription}>
                  Ingest from CPS (income, tax), ACS (geography, housing),
                  SIPP (dynamics), and administrative data for validation targets.
                </p>
                <code className={styles.stageCode}>sources = [cps, acs, sipp, irs_soi]</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay2}`}>
              <div className={styles.stageIcon}>
                <FlowIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 02</div>
                <h3 className={styles.stageTitle}>Conditional MAF</h3>
                <p className={styles.stageDescription}>
                  Learn P(targets | context) using Masked Autoregressive Flows.
                  Handles zero-inflation, joint correlations, and hierarchical structure.
                </p>
                <code className={styles.stageCode}>synth.fit(data, epochs=100)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay3}`}>
              <div className={styles.stageIcon}>
                <SynthesizeIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 03</div>
                <h3 className={styles.stageTitle}>Synthesize Billions</h3>
                <p className={styles.stageDescription}>
                  Generate billions of diverse synthetic households.
                  More records = more degrees of freedom for reweighting.
                </p>
                <code className={styles.stageCode}>population = synth.generate(n=1_000_000_000)</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay4}`}>
              <div className={styles.stageIcon}>
                <ReweightIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>STAGE 04</div>
                <h3 className={styles.stageTitle}>Sparse Reweighting</h3>
                <p className={styles.stageDescription}>
                  L0/L1 optimization to find minimal record subset matching any targets.
                  County-level, tract-level, or even block-level calibration.
                </p>
                <code className={styles.stageCode}>weights = reweight(population, targets, penalty="l0")</code>
              </div>
            </div>

            <ArrowDown />

            <div className={`${styles.workflowStage} ${styles.stageDelay5}`}>
              <div className={styles.stageIcon}>
                <OutputIcon />
              </div>
              <div className={styles.stageContent}>
                <div className={styles.stageNumber}>OUTPUT</div>
                <h3 className={styles.stageTitle}>Calibrated Microdata</h3>
                <p className={styles.stageDescription}>
                  Rich population with all variables from all sources,
                  matching official statistics at any geographic granularity.
                </p>
                <code className={styles.stageCode}>calibrated_population.to_parquet("output.parquet")</code>
              </div>
            </div>
          </div>
        </section>

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
              <ConditionalIcon />
              <h3 className={styles.featureTitle}>Conditional Synthesis</h3>
              <p className={styles.featureDescription}>
                Generate target variables conditioned on demographics using
                normalizing flows. Learn P(income, wealth | age, education, region).
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ZeroIcon />
              <h3 className={styles.featureTitle}>Zero-Inflated Variables</h3>
              <p className={styles.featureDescription}>
                Built-in handling for variables with many zeros (capital gains,
                benefits, medical expenses). Two-stage: P(positive) then P(value|positive).
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SparseIcon />
              <h3 className={styles.featureTitle}>Sparse Reweighting</h3>
              <p className={styles.featureDescription}>
                L0/L1 optimization to find minimal record subsets matching any
                target margins. County-level calibration from national surveys.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <FusionIcon />
              <h3 className={styles.featureTitle}>Multi-Source Fusion</h3>
              <p className={styles.featureDescription}>
                Combine CPS (income), ACS (geography), SIPP (dynamics), and
                admin data (validation) into one rich synthetic population.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ScaleIcon />
              <h3 className={styles.featureTitle}>Scalable Generation</h3>
              <p className={styles.featureDescription}>
                Synthesize billions of households. More synthetic diversity =
                more flexibility for sparse reweighting to any geography.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <LikelihoodIcon />
              <h3 className={styles.featureTitle}>Exact Likelihood</h3>
              <p className={styles.featureDescription}>
                Normalizing flows provide tractable log-likelihood for stable
                training. No mode collapse or training instability.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why microplex?</h2>
            <p className={styles.sectionSubtitle}>
              Comparison to alternative synthesis methods
            </p>
          </div>

          <div className={styles.comparisonWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className={styles.microplexCell}>microplex</th>
                  <th>CT-GAN</th>
                  <th>TVAE</th>
                  <th>synthpop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Conditional generation</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
                <tr>
                  <td>Zero-inflation handling</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                </tr>
                <tr>
                  <td>Sparse reweighting</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                </tr>
                <tr>
                  <td>Multi-source fusion</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                </tr>
                <tr>
                  <td>Exact likelihood</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td><span className={styles.crossMark}>✗</span></td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Stable training</td>
                  <td className={styles.microplexCell}><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.partialMark}>~</span></td>
                  <td><span className={styles.checkMark}>✓</span></td>
                  <td><span className={styles.checkMark}>✓</span></td>
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
