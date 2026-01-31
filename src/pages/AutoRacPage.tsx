import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/autorac.css";
import { CheckIcon, XIcon } from "../components/icons";

// Icons
const EncodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 18v-6" />
    <path d="M9 15l3 3 3-3" />
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

const SessionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.loopNodeIconSvg}>
    <path d="M12 8v4l3 3" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const JourneyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
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

const ParallelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M4 4h4v4H4z" />
    <path d="M16 4h4v4h-4z" />
    <path d="M4 16h4v4H4z" />
    <path d="M16 16h4v4h-4z" />
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </svg>
);

const PluginIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M12 2v6" />
    <path d="M12 22v-4" />
    <circle cx="12" cy="12" r="4" />
    <path d="M4.93 4.93l4.24 4.24" />
    <path d="M14.83 14.83l4.24 4.24" />
    <path d="M2 12h6" />
    <path d="M16 12h6" />
    <path d="M4.93 19.07l4.24-4.24" />
    <path d="M14.83 9.17l4.24-4.24" />
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
              AI statute encoding infrastructure. 100% AI-created encodings.
              Two approaches: interactive Claude Code plugin for exploration,
              or Agent SDK for parallel batch encoding.
            </p>
          </div>
        </section>

        {/* Two Approaches */}
        <section className={styles.componentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Two encoding approaches</h2>
            <p className={styles.sectionSubtitle}>
              Choose the right tool for your encoding workflow
            </p>
          </div>

          <div className={styles.componentsGrid}>
            <div className={`${styles.componentCard} ${styles.delay1}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><PluginIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Interactive (Claude Code)</div>
                  <div className={styles.componentFile}>Recommended for exploration</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Uses Claude Code with Max subscription. No API billing.
                Run <code>/encode "26 USC 32"</code> and watch the agent work.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Claude Code plugin integration</div>
                <div className={styles.componentFeature}>Full session transcript tracking</div>
                <div className={styles.componentFeature}>Interactive debugging and iteration</div>
                <div className={styles.componentFeature}>No per-token costs</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay2}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><ParallelIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Programmatic (Agent SDK)</div>
                  <div className={styles.componentFile}>For batch/parallel encoding</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Uses Claude Agent SDK with API key. Pay per token,
                but enables massive parallelization—10x faster for batch jobs.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>encode_batch(requests, max_concurrent=10)</div>
                <div className={styles.componentFeature}>Parallel encoding agents</div>
                <div className={styles.componentFeature}>CI/CD pipeline integration</div>
                <div className={styles.componentFeature}>Scales to hundreds of statutes</div>
              </div>
            </div>
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
              <div className={styles.loopNodeIcon}><ValidateIcon /></div>
              <span className={styles.loopNodeLabel}>Validate</span>
              <span className={styles.loopNodeDesc}>3-tier pipeline</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><LearnIcon /></div>
              <span className={styles.loopNodeLabel}>Learn</span>
              <span className={styles.loopNodeDesc}>Calibrate predictions</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><SessionIcon /></div>
              <span className={styles.loopNodeLabel}>Improve</span>
              <span className={styles.loopNodeDesc}>Better prompts</span>
            </div>
          </div>
        </section>

        {/* 3-Tier Validation */}
        <section className={styles.workflowSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>3-tier validation pipeline</h2>
            <p className={styles.sectionSubtitle}>
              Validation runs in order—oracles generate comparison data for LLM reviewers
            </p>
          </div>

          <div className={styles.workflowContainer}>
            {/* Tier 1: CI */}
            <div className={styles.workflowStep}>
              <div className={styles.workflowStepNumber}>1</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>CI validation</div>
                <div className={styles.workflowStepDesc}>
                  <code>rac pytest</code> — instant, free
                  <br />Catches syntax errors, format issues, missing imports
                </div>
                <div className={styles.workflowInnerBranch} style={{ marginTop: '1rem' }}>
                  <div className={styles.workflowBranchFail}>
                    <span className={styles.workflowBranchLabel}><XIcon size={14} /> Fail</span>
                    <span>Fix errors, retry (max 3)</span>
                  </div>
                  <div className={styles.workflowBranchPass}>
                    <span className={styles.workflowBranchLabel}><CheckIcon size={14} /> Pass</span>
                    <span>Proceed to oracles</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Tier 2: Oracles */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>2</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>External oracles</div>
                <div className={styles.workflowOracles}>
                  <div className={styles.workflowOracle}>
                    <span className={styles.workflowOracleIcon}>PE</span>
                    <span>PolicyEngine</span>
                  </div>
                  <div className={styles.workflowOracle}>
                    <span className={styles.workflowOracleIcon}>TX</span>
                    <span>TAXSIM</span>
                  </div>
                </div>
                <div className={styles.workflowStepDesc}>
                  Fast (~10s), free — generates comparison data for LLM reviewers.
                  <br />Run test cases through external calculators to find discrepancies.
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Tier 3: LLM Reviewers */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>3</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>LLM reviewers</div>
                <div className={styles.workflowValidators}>
                  <div className={styles.workflowValidator}>RAC Reviewer</div>
                  <div className={styles.workflowValidator}>Formula Reviewer</div>
                  <div className={styles.workflowValidator}>Parameter Reviewer</div>
                  <div className={styles.workflowValidator}>Integration Reviewer</div>
                </div>
                <div className={styles.workflowStepDesc}>
                  Receive oracle comparison data to diagnose WHY discrepancies exist.
                  <br />No subjective scores—identify specific issues.
                </div>
                <div className={styles.workflowBeadsFlow}>
                  <span className={styles.workflowBeadsLabel}>Issues found?</span>
                  <span className={styles.workflowBeadsArrow}>→</span>
                  <span className={styles.workflowBeadsBadge}>bd create</span>
                  <span className={styles.workflowBeadsArrow}>→</span>
                  <span className={styles.workflowBeadsText}>Encoder picks up & fixes</span>
                  <span className={styles.workflowBeadsLoop}>↺</span>
                </div>
              </div>
            </div>

            {/* Learning Feedback Loop */}
            <div className={styles.workflowLearningLoop}>
              <div className={styles.workflowLearningArrow}>
                <span className={styles.workflowLearningIcon}>↻</span>
                <span className={styles.workflowLearningText}>
                  Calibration data improves encoder prompts and validation rules
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className={styles.componentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Architecture</h2>
            <p className={styles.sectionSubtitle}>
              Core components of the encoding infrastructure
            </p>
          </div>

          <div className={styles.componentsGrid}>
            <div className={`${styles.componentCard} ${styles.delay1}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><JourneyIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Encoder backends</div>
                  <div className={styles.componentFile}>backends.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Abstraction layer for encoding execution. Swap between Claude Code
                (subprocess) and Agent SDK (API) without changing the workflow.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>ClaudeCodeBackend (Max subscription)</div>
                <div className={styles.componentFeature}>AgentSDKBackend (API parallelization)</div>
                <div className={styles.componentFeature}>Unified EncoderRequest/Response interface</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay2}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><PipelineIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Validator pipeline</div>
                  <div className={styles.componentFile}>validator_pipeline.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Orchestrates the 3-tier validation flow. Runs CI first,
                then oracles, then LLM reviewers with oracle context.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Parallel oracle execution</div>
                <div className={styles.componentFeature}>Oracle results feed LLM context</div>
                <div className={styles.componentFeature}>Issue creation via beads</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay3}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><DatabaseIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Experiment DB</div>
                  <div className={styles.componentFile}>experiment_db.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                SQLite database storing encoding runs, validation results,
                and calibration data for learning.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>encoding_id, file, timestamp</div>
                <div className={styles.componentFeature}>iterations, errors, fixes</div>
                <div className={styles.componentFeature}>final_scores, session_transcript</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay4}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><TerminalIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Calibration metrics</div>
                  <div className={styles.componentFile}>metrics.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Track prediction accuracy over time. Compare predicted iterations
                to actual, measure encoder reliability.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>MSE, MAE, bias per metric</div>
                <div className={styles.componentFeature}>Trend analysis over time</div>
                <div className={styles.componentFeature}>Confidence calibration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className={styles.calibrationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Usage examples</h2>
            <p className={styles.sectionSubtitle}>
              Interactive and programmatic encoding patterns
            </p>
          </div>

          <div className={styles.calibrationCard}>
            <div className={styles.calibrationHeader}>
              Interactive (Claude Code Plugin)
            </div>
            <div className={styles.calibrationContent}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, whiteSpace: 'pre-wrap' }}>
{`# 1. Install cosilico-claude plugin
# 2. In Claude Code, run:
/encode "26 USC 32"

# Agent workflow:
# - Fetches statute from arch
# - Writes .rac file to rac-us/statute/26/32.rac
# - Runs CI validation
# - Compares against PolicyEngine + TAXSIM
# - Logs journey to experiment DB`}
              </pre>
            </div>
          </div>

          <div className={styles.calibrationCard} style={{ marginTop: '1.5rem' }}>
            <div className={styles.calibrationHeader}>
              Programmatic (Agent SDK)
            </div>
            <div className={styles.calibrationContent}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, whiteSpace: 'pre-wrap' }}>
{`from autorac import AgentSDKBackend, EncoderRequest
from pathlib import Path

backend = AgentSDKBackend()  # Requires ANTHROPIC_API_KEY

# Encode 50 statutes in parallel
requests = [
    EncoderRequest(
        citation=f"26 USC {section}",
        statute_text=texts[section],
        output_path=Path(f"rac-us/statute/26/{section}.rac"),
    )
    for section in sections
]

responses = await backend.encode_batch(requests, max_concurrent=10)`}
              </pre>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className={styles.calibrationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Installation</h2>
            <p className={styles.sectionSubtitle}>
              Get started with AutoRAC
            </p>
          </div>

          <div className={styles.calibrationCard}>
            <div className={styles.calibrationHeader}>
              pip install
            </div>
            <div className={styles.calibrationContent}>
              <table className={styles.calibrationTable}>
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Use case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>pip install autorac</code></td>
                    <td className={styles.metricNeutral}>CLI backend only (Claude Code integration)</td>
                  </tr>
                  <tr>
                    <td><code>pip install autorac[sdk]</code></td>
                    <td className={styles.metricNeutral}>With Agent SDK for parallel batch encoding</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Start encoding statutes</h2>
            <p className={styles.ctaText}>
              Use Claude Code for interactive exploration or the Agent SDK
              for batch encoding at scale.
            </p>
            <div className={styles.ctaLinks}>
              <Link
                to="/stack/autorac/lab"
                className={styles.ctaLink}
              >
                <SessionIcon />
                Experiment Lab
              </Link>
              <a
                href="https://github.com/CosilicoAI/autorac"
                className={`${styles.ctaLink} ${styles.ctaLinkSecondary}`}
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
