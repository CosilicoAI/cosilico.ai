import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/autorac.css";

// Icons
const EncodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 18v-6" />
    <path d="M9 15l3 3 3-3" />
  </svg>
);

const PredictIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ValidateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const LearnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const PipelineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const HarnessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const MetricsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.ctaLinkIcon}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaLinkIcon}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function AutoRacPage() {
  return (
    <PageLayout>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>AI ENCODING</div>
            <h1 className={styles.heroTitle}>AutoRAC</h1>
            <p className={styles.heroSubtitle}>
              AI-assisted statute encoding with continuous feedback.
              Predict, encode, validate, learn. Scientific experimentation
              for automated legal rule extraction.
            </p>
          </div>
        </section>

        {/* The Loop */}
        <section className={styles.loopSection}>
          <div className={styles.loopDiagram}>
            <div className={`${styles.loopNode} ${styles.loopNodeActive}`}>
              <div className={styles.loopNodeIcon}><EncodeIcon /></div>
              <span className={styles.loopNodeLabel}>Encode</span>
              <span className={styles.loopNodeDesc}>Statute → RAC</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><PredictIcon /></div>
              <span className={styles.loopNodeLabel}>Predict</span>
              <span className={styles.loopNodeDesc}>Self-assess scores</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><ValidateIcon /></div>
              <span className={styles.loopNodeLabel}>Validate</span>
              <span className={styles.loopNodeDesc}>CI + Oracles</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><LearnIcon /></div>
              <span className={styles.loopNodeLabel}>Learn</span>
              <span className={styles.loopNodeDesc}>Calibrate & improve</span>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className={styles.componentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Infrastructure</h2>
            <p className={styles.sectionSubtitle}>
              The harness that orchestrates encoding experiments and tracks calibration
            </p>
          </div>

          <div className={styles.componentsGrid}>
            <div className={`${styles.componentCard} ${styles.delay1}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><DatabaseIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Experiment DB</div>
                  <div className={styles.componentFile}>experiment_db.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                SQLite database logging every encoding attempt with predicted and
                actual scores for calibration analysis.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Predicted vs actual score tracking</div>
                <div className={styles.componentFeature}>Agent suggestion logging</div>
                <div className={styles.componentFeature}>Iteration history chain</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay2}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><PipelineIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Validator Pipeline</div>
                  <div className={styles.componentFile}>validator_pipeline.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Parallel execution of all validators: CI checks, reviewer agents,
                and external oracles.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Parse & lint (CI)</div>
                <div className={styles.componentFeature}>RAC/Formula/Parameter reviewers</div>
                <div className={styles.componentFeature}>PolicyEngine & TAXSIM oracles</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay3}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><HarnessIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Encoder Harness</div>
                  <div className={styles.componentFile}>encoder_harness.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Wraps the encoding agent with prediction requests and logging.
                Iterates until all validators pass.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Pre-encoding score prediction</div>
                <div className={styles.componentFeature}>Framework improvement suggestions</div>
                <div className={styles.componentFeature}>Automatic retry with feedback</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay4}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><MetricsIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Calibration Metrics</div>
                  <div className={styles.componentFile}>metrics.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Measures how well agents predict their own performance.
                Tracks bias, MSE, and correlation over time.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Mean squared error per metric</div>
                <div className={styles.componentFeature}>Systematic bias detection</div>
                <div className={styles.componentFeature}>Trend analysis snapshots</div>
              </div>
            </div>
          </div>
        </section>

        {/* Calibration Example */}
        <section className={styles.calibrationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Calibration Report</h2>
            <p className={styles.sectionSubtitle}>
              Sample output showing agent prediction accuracy
            </p>
          </div>

          <div className={styles.calibrationCard}>
            <div className={styles.calibrationHeader}>
              $ python -m autorac.metrics --db experiments.db
            </div>
            <div className={styles.calibrationContent}>
              <table className={styles.calibrationTable}>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>N</th>
                    <th>Predicted</th>
                    <th>Actual</th>
                    <th>Bias</th>
                    <th>MSE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rac_reviewer</td>
                    <td className={styles.metricNeutral}>47</td>
                    <td className={styles.metricNeutral}>7.82</td>
                    <td className={styles.metricNeutral}>7.45</td>
                    <td className={styles.metricNegative}>+0.37</td>
                    <td className={styles.metricNeutral}>0.4821</td>
                  </tr>
                  <tr>
                    <td>formula_reviewer</td>
                    <td className={styles.metricNeutral}>47</td>
                    <td className={styles.metricNeutral}>7.15</td>
                    <td className={styles.metricNeutral}>7.32</td>
                    <td className={styles.metricPositive}>-0.17</td>
                    <td className={styles.metricNeutral}>0.3156</td>
                  </tr>
                  <tr>
                    <td>parameter_reviewer</td>
                    <td className={styles.metricNeutral}>47</td>
                    <td className={styles.metricNeutral}>8.21</td>
                    <td className={styles.metricNeutral}>7.89</td>
                    <td className={styles.metricNegative}>+0.32</td>
                    <td className={styles.metricNeutral}>0.2847</td>
                  </tr>
                  <tr>
                    <td>policyengine_match</td>
                    <td className={styles.metricNeutral}>32</td>
                    <td className={styles.metricNeutral}>0.91</td>
                    <td className={styles.metricNeutral}>0.94</td>
                    <td className={styles.metricPositive}>-0.03</td>
                    <td className={styles.metricNeutral}>0.0089</td>
                  </tr>
                  <tr>
                    <td>taxsim_match</td>
                    <td className={styles.metricNeutral}>28</td>
                    <td className={styles.metricNeutral}>0.87</td>
                    <td className={styles.metricNeutral}>0.89</td>
                    <td className={styles.metricPositive}>-0.02</td>
                    <td className={styles.metricNeutral}>0.0124</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Scientific Encoding</h2>
            <p className={styles.ctaText}>
              Build calibrated AI agents that know what they don't know.
              Every encoding attempt contributes to improving the system.
            </p>
            <div className={styles.ctaLinks}>
              <a
                href="https://github.com/CosilicoAI/autorac"
                className={styles.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                View on GitHub
              </a>
              <Link
                to="/stack"
                className={`${styles.ctaLink} ${styles.ctaLinkSecondary}`}
              >
                <BackIcon />
                Back to Stack
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
