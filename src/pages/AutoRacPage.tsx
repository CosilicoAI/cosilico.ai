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
              Automated statute encoding with continuous feedback.
              AI agents encode, validate, and learn through full session tracking.
              Journey-based experimentation for autonomous legal rule extraction.
            </p>
          </div>
        </section>

        {/* The Loop */}
        <section className={styles.loopSection}>
          <div className={styles.loopDiagram}>
            <div className={`${styles.loopNode} ${styles.loopNodeActive}`}>
              <div className={styles.loopNodeIcon}><SessionIcon /></div>
              <span className={styles.loopNodeLabel}>Session</span>
              <span className={styles.loopNodeDesc}>Track journey</span>
            </div>

            <div className={styles.loopArrow} />

            <div className={styles.loopNode}>
              <div className={styles.loopNodeIcon}><EncodeIcon /></div>
              <span className={styles.loopNodeLabel}>Encode</span>
              <span className={styles.loopNodeDesc}>Statute → RAC</span>
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
              <span className={styles.loopNodeDesc}>Analyze sessions</span>
            </div>
          </div>
        </section>

        {/* Encode Workflow Detail */}
        <section className={styles.workflowSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>/encode Workflow</h2>
            <p className={styles.sectionSubtitle}>
              Detailed steps when encoding a statute
            </p>
          </div>

          <div className={styles.workflowContainer}>
            {/* Step 1: Command */}
            <div className={styles.workflowStep}>
              <div className={styles.workflowStepNumber}>1</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>/encode "26 USC 1"</div>
                <div className={styles.workflowStepDesc}>User invokes encode command with citation</div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Step 2: Fetch */}
            <div className={styles.workflowStep}>
              <div className={styles.workflowStepNumber}>2</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>Fetch Statute</div>
                <div className={styles.workflowStepDesc}>
                  <code>autorac statute "26 USC 1"</code>
                  <br />Extract from arch USC XML
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Step 3: Structure Discovery & Chunking */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>3</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>Discover Structure & Chunk</div>
                <div className={styles.workflowStepDesc}>
                  Parse subsections, auto-chunk by complexity, build leaf-first queue
                </div>
                <div className={styles.workflowChunking}>
                  <div className={styles.workflowChunkRule}>
                    <span className={styles.workflowChunkType}>Simple leaf</span>
                    <span className={styles.workflowChunkArrow}>→</span>
                    <span className={styles.workflowChunkAction}>1 session</span>
                  </div>
                  <div className={styles.workflowChunkRule}>
                    <span className={styles.workflowChunkType}>Leaf cluster</span>
                    <span className={styles.workflowChunkArrow}>→</span>
                    <span className={styles.workflowChunkAction}>siblings together</span>
                  </div>
                  <div className={styles.workflowChunkRule}>
                    <span className={styles.workflowChunkType}>Complex section</span>
                    <span className={styles.workflowChunkArrow}>→</span>
                    <span className={styles.workflowChunkAction}>split into N sessions</span>
                  </div>
                  <div className={styles.workflowChunkRule}>
                    <span className={styles.workflowChunkType}>Container</span>
                    <span className={styles.workflowChunkArrow}>→</span>
                    <span className={styles.workflowChunkAction}>auto after children</span>
                  </div>
                </div>
                <div className={styles.workflowTree}>
                  <div>Session 1: 26/1/h/1/*.rac (TCJA brackets)</div>
                  <div>Session 2: 26/1/h/2-6.rac (adjustments)</div>
                  <div>Session 3: 26/1/h.rac (container)</div>
                  <div>...</div>
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Step 4: Encode Loop */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>4</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>Encode Each Subsection</div>
                <div className={styles.workflowStepDesc}>For each item in queue:</div>

                <div className={styles.workflowInnerLoop}>
                  <div className={styles.workflowInnerStep}>
                    <span className={styles.workflowInnerLabel}>4a</span>
                    <span>RAC Encoder agent writes .rac file</span>
                  </div>
                  <div className={styles.workflowInnerConnector}>↓</div>
                  <div className={styles.workflowInnerStep}>
                    <span className={styles.workflowInnerLabel}>4b</span>
                    <span>Run CI validation (rac pytest suite)</span>
                  </div>
                  <div className={styles.workflowInnerConnector}>↓</div>
                  <div className={styles.workflowInnerBranch}>
                    <div className={styles.workflowBranchFail}>
                      <span className={styles.workflowBranchLabel}>✗ Fail</span>
                      <span>Fix errors, retry (max 3)</span>
                      <div className={styles.workflowRetryArrow}>↺</div>
                    </div>
                    <div className={styles.workflowBranchPass}>
                      <span className={styles.workflowBranchLabel}>✓ Pass</span>
                      <span>Log to experiment DB, next item</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Step 5: Validators */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>5</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>Reviewer Agents</div>
                <div className={styles.workflowValidators}>
                  <div className={styles.workflowValidator}>RAC Reviewer</div>
                  <div className={styles.workflowValidator}>Formula Reviewer</div>
                  <div className={styles.workflowValidator}>Parameter Reviewer</div>
                  <div className={styles.workflowValidator}>Integration Reviewer</div>
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

            <div className={styles.workflowConnector} />

            {/* Step 6: Oracles */}
            <div className={`${styles.workflowStep} ${styles.workflowStepLarge}`}>
              <div className={styles.workflowStepNumber}>6</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>External Oracles</div>
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
                <div className={styles.workflowStepDesc}>Compare against reference implementations</div>
                <div className={styles.workflowBeadsFlow}>
                  <span className={styles.workflowBeadsLabel}>Discrepancy?</span>
                  <span className={styles.workflowBeadsArrow}>→</span>
                  <span className={styles.workflowBeadsBadge}>bd create</span>
                  <span className={styles.workflowBeadsArrow}>→</span>
                  <span className={styles.workflowBeadsText}>or file upstream bug</span>
                </div>
              </div>
            </div>

            <div className={styles.workflowConnector} />

            {/* Step 7: Log */}
            <div className={styles.workflowStep}>
              <div className={styles.workflowStepNumber}>7</div>
              <div className={styles.workflowStepContent}>
                <div className={styles.workflowStepTitle}>Log & Learn</div>
                <div className={styles.workflowStepDesc}>
                  Record predictions vs actuals for calibration
                  <div className={styles.workflowMetrics}>
                    <span>Iterations: predicted vs actual</span>
                    <span>Scores: RAC, Formula, Param, Integration</span>
                    <span>Suggestions for framework improvement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Feedback Loop */}
            <div className={styles.workflowLearningLoop}>
              <div className={styles.workflowLearningArrow}>
                <span className={styles.workflowLearningIcon}>↻</span>
                <span className={styles.workflowLearningText}>
                  Calibration data improves encoder prompts, pattern library, and validation rules
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className={styles.componentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Infrastructure</h2>
            <p className={styles.sectionSubtitle}>
              Session logging and journey tracking for encoding experiments
            </p>
          </div>

          <div className={styles.componentsGrid}>
            <div className={`${styles.componentCard} ${styles.delay1}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><JourneyIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Session Logging</div>
                  <div className={styles.componentFile}>session_logging.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Full Claude Code session transcript tracking. Captures every tool call,
                validation result, and decision path for post-hoc analysis.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Full session transcripts</div>
                <div className={styles.componentFeature}>Automatic event capture via hooks</div>
                <div className={styles.componentFeature}>Journey-based tracking</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay2}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><TerminalIcon /></div>
                <div>
                  <div className={styles.componentTitle}>CLI Commands</div>
                  <div className={styles.componentFile}>cli.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Rich command-line interface for managing sessions, viewing history,
                and analyzing encoding patterns.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>session-start, session-end</div>
                <div className={styles.componentFeature}>sessions, session-show, session-stats</div>
                <div className={styles.componentFeature}>log-event for custom events</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay3}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><PipelineIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Validator Pipeline</div>
                  <div className={styles.componentFile}>validator_pipeline.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                Two-tier validation: automated CI checks from rac,
                plus LLM reviewers and external oracles.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>CI: rac pytest validation suite</div>
                <div className={styles.componentFeature}>LLM: RAC/Formula/Param/Integration reviewers</div>
                <div className={styles.componentFeature}>Oracles: PolicyEngine & TAXSIM</div>
              </div>
            </div>

            <div className={`${styles.componentCard} ${styles.delay4}`}>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}><DatabaseIcon /></div>
                <div>
                  <div className={styles.componentTitle}>Experiment DB</div>
                  <div className={styles.componentFile}>experiment_db.py</div>
                </div>
              </div>
              <p className={styles.componentDesc}>
                SQLite database storing sessions, events, and outcomes for
                pattern analysis and learning.
              </p>
              <div className={styles.componentFeatures}>
                <div className={styles.componentFeature}>Session and event storage</div>
                <div className={styles.componentFeature}>Outcome tracking</div>
                <div className={styles.componentFeature}>Pattern analysis queries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Stats Example */}
        <section className={styles.calibrationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Session Analytics</h2>
            <p className={styles.sectionSubtitle}>
              Sample output from session-stats command
            </p>
          </div>

          <div className={styles.calibrationCard}>
            <div className={styles.calibrationHeader}>
              $ autorac session-stats --last 30d
            </div>
            <div className={styles.calibrationContent}>
              <table className={styles.calibrationTable}>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Sessions</th>
                    <th>Events</th>
                    <th>Success</th>
                    <th>Avg Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EITC encoding</td>
                    <td className={styles.metricNeutral}>12</td>
                    <td className={styles.metricNeutral}>847</td>
                    <td className={styles.metricPositive}>92%</td>
                    <td className={styles.metricNeutral}>24m</td>
                  </tr>
                  <tr>
                    <td>CTC encoding</td>
                    <td className={styles.metricNeutral}>8</td>
                    <td className={styles.metricNeutral}>623</td>
                    <td className={styles.metricPositive}>88%</td>
                    <td className={styles.metricNeutral}>31m</td>
                  </tr>
                  <tr>
                    <td>SNAP encoding</td>
                    <td className={styles.metricNeutral}>15</td>
                    <td className={styles.metricNeutral}>1,204</td>
                    <td className={styles.metricNeutral}>75%</td>
                    <td className={styles.metricNeutral}>42m</td>
                  </tr>
                  <tr>
                    <td>Validation runs</td>
                    <td className={styles.metricNeutral}>35</td>
                    <td className={styles.metricNeutral}>2,674</td>
                    <td className={styles.metricPositive}>94%</td>
                    <td className={styles.metricNeutral}>8m</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CLI Reference */}
        <section className={styles.calibrationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>CLI Reference</h2>
            <p className={styles.sectionSubtitle}>
              Session management commands
            </p>
          </div>

          <div className={styles.calibrationCard}>
            <div className={styles.calibrationHeader}>
              Session Lifecycle
            </div>
            <div className={styles.calibrationContent}>
              <table className={styles.calibrationTable}>
                <thead>
                  <tr>
                    <th>Command</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>session-start</td>
                    <td className={styles.metricNeutral}>Begin a new encoding session with goal and metadata</td>
                  </tr>
                  <tr>
                    <td>session-end</td>
                    <td className={styles.metricNeutral}>Complete session with outcome (success/failure/partial)</td>
                  </tr>
                  <tr>
                    <td>log-event</td>
                    <td className={styles.metricNeutral}>Record custom events during a session</td>
                  </tr>
                  <tr>
                    <td>sessions</td>
                    <td className={styles.metricNeutral}>List all sessions with filters and sorting</td>
                  </tr>
                  <tr>
                    <td>session-show</td>
                    <td className={styles.metricNeutral}>View full session transcript and events</td>
                  </tr>
                  <tr>
                    <td>session-stats</td>
                    <td className={styles.metricNeutral}>Aggregate statistics across sessions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Journey-Based Learning</h2>
            <p className={styles.ctaText}>
              Track complete encoding journeys from start to finish.
              Every session contributes to understanding what works and why.
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
