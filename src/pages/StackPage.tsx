import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/stack.css";

// Component icons
const MicroplexIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const EngineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ValidatorsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const CompileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.ctaLinkIcon}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const DocsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaLinkIcon}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

const RacIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h8M8 17h4" />
  </svg>
);

const StatMatchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <circle cx="5" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M8 11L17 6M8 12L17 12M8 13L17 18" strokeDasharray="2 2" />
  </svg>
);

const ArchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const AutoRacIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M16 16l2 2" />
  </svg>
);

const FusionGanIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="12" cy="18" r="4" />
    <path d="M7.5 8.5L10.5 14.5M16.5 8.5L13.5 14.5" />
    <path d="M12 14v-2" strokeDasharray="2 1" />
  </svg>
);

const MicrosynthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeDasharray="2 1" />
  </svg>
);

export default function StackPage() {
  return (
    <PageLayout>
      <div className={styles.stack}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>INFRASTRUCTURE</div>
            <h1 className={styles.heroTitle}>The Cosilico stack</h1>
            <p className={styles.heroSubtitle}>
              Open-source tools for building tax and benefit microsimulation systems.
              From encoded law to calibrated populations.
            </p>
          </div>
        </section>

        {/* Components Grid */}
        <section className={styles.componentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Components</h2>
            <p className={styles.sectionSubtitle}>
              Modular tools that work together or standalone
            </p>
          </div>

          <div className={styles.componentsGrid}>
            {/* arch - Cosilico data layer */}
            <Link to="/stack/arch" className={`${styles.componentCard} ${styles.cardDelay1}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>IN DEV</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <ArchIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>arch</h3>
                  <div className={styles.componentTagline}>Data foundation</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Raw microdata archive and calibration targets database.
                CPS, ACS, SCF, PUF sources plus admin aggregates for
                geographic and demographic calibration.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>Microdata</span>
                <span className={styles.featureTag}>Calibration Targets</span>
                <span className={styles.featureTag}>Provenance</span>
                <span className={styles.featureTag}>Multi-Source</span>
              </div>
            </Link>

            {/* microplex - LIVE */}
            <Link to="/stack/microplex" className={`${styles.componentCard} ${styles.cardDelay2}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusLive}`}>LIVE</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <MicroplexIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>microplex</h3>
                  <div className={styles.componentTagline}>pip install microplex</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Microdata synthesis and reweighting using normalizing flows.
                Generate billions of synthetic households, then sparse-reweight
                to match any geographic targets.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>Normalizing Flows</span>
                <span className={styles.featureTag}>Zero-Inflation</span>
                <span className={styles.featureTag}>L0 Reweighting</span>
                <span className={styles.featureTag}>Multi-Source</span>
              </div>
            </Link>

            {/* py-statmatch - LIVE */}
            <Link to="/stack/py-statmatch" className={`${styles.componentCard} ${styles.cardDelay4}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusLive}`}>LIVE</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <StatMatchIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>py-statmatch</h3>
                  <div className={styles.componentTagline}>pip install py-statmatch</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Python implementation of R's StatMatch package. Statistical
                matching and data fusion using hot deck imputation methods.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>NND Hot Deck</span>
                <span className={styles.featureTag}>Gower Distance</span>
                <span className={styles.featureTag}>Frechet Bounds</span>
                <span className={styles.featureTag}>R Parity</span>
              </div>
            </Link>

            {/* fusiongan - RESEARCH */}
            <Link to="/stack/fusiongan" className={`${styles.componentCard} ${styles.cardDelay5}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>RESEARCH</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <FusionGanIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>fusiongan</h3>
                  <div className={styles.componentTagline}>pip install fusiongan</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Multi-source adversarial synthesis for survey data fusion.
                Learn joint distributions from CPS, PUF, and other surveys
                with different variable coverage.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>GAN Synthesis</span>
                <span className={styles.featureTag}>Multi-Discriminator</span>
                <span className={styles.featureTag}>No Matching Keys</span>
                <span className={styles.featureTag}>Coverage Metrics</span>
              </div>
            </Link>

            {/* microsynth - IN DEV */}
            <Link to="/stack/microsynth" className={`${styles.componentCard} ${styles.cardDelay6}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>IN DEV</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <MicrosynthIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>microsynth</h3>
                  <div className={styles.componentTagline}>Synthesis experiments</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Multi-source synthesis experiment tracking. ZI-QDNN models for
                CPS+SIPP+PSID fusion. Coverage metrics, holdout validation,
                and per-record analysis.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>ZI-QDNN</span>
                <span className={styles.featureTag}>Coverage Tracking</span>
                <span className={styles.featureTag}>Multi-Survey</span>
                <span className={styles.featureTag}>Experiment DB</span>
              </div>
            </Link>

          </div>
        </section>

        {/* Architecture */}
        <section className={styles.architectureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How it fits together</h2>
            <p className={styles.sectionSubtitle}>
              From source law to policy analysis
            </p>
          </div>

          <div className={styles.pipelineContainer}>
            {/* Source Materials */}
            <div className={styles.sourceRow}>
              <div className={styles.sourceCard}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className={styles.sourceLabel}>Tax Code</div>
                <div className={styles.sourceExamples}>IRC, state codes</div>
              </div>
              <div className={styles.sourceCard}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className={styles.sourceLabel}>Benefit Law</div>
                <div className={styles.sourceExamples}>SNAP, TANF, SSI</div>
              </div>
              <div className={styles.sourceCard}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className={styles.sourceLabel}>Microdata</div>
                <div className={styles.sourceExamples}>CPS, ACS, SCF</div>
              </div>
              <div className={styles.sourceCard}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className={styles.sourceLabel}>Targets</div>
                <div className={styles.sourceExamples}>Census, admin data</div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.connectorDown}>
              <div className={styles.connectorArrow} />
            </div>

            {/* RAC + arch row */}
            <div className={styles.pipelineRow}>
              <div className={styles.processingNode}>
                <div className={styles.nodeHeader}>
                  <div className={styles.nodeIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.nodeIconSvg}>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className={styles.nodeName}>atlas</div>
                </div>
                <div className={styles.nodeFeatures}>
                  <div className={styles.nodeFeature}>Archive raw documents</div>
                  <div className={styles.nodeFeature}>Track provenance</div>
                  <div className={styles.nodeFeature}>Detect changes</div>
                </div>
              </div>

              <div className={styles.connectorHorizontal} />

              <div className={styles.processingNode}>
                <div className={styles.nodeHeader}>
                  <div className={styles.nodeIcon}>
                    <EngineIcon />
                  </div>
                  <div className={styles.nodeName}>rac</div>
                </div>
                <div className={styles.nodeFeatures}>
                  <div className={styles.nodeFeature}>Parse statute DSL</div>
                  <div className={styles.nodeFeature}>Resolve citations</div>
                  <div className={styles.nodeFeature}>Execute vectorized</div>
                </div>
              </div>

              <div className={styles.connectorHorizontal} />

              <div className={styles.processingNode}>
                <div className={styles.nodeHeader}>
                  <div className={styles.nodeIcon}>
                    <AutoRacIcon />
                  </div>
                  <div className={styles.nodeName}>autorac</div>
                </div>
                <div className={styles.nodeFeatures}>
                  <div className={styles.nodeFeature}>AI encoding</div>
                  <div className={styles.nodeFeature}>Calibration tracking</div>
                  <div className={styles.nodeFeature}>Feedback loop</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.connectorDown}>
              <div className={styles.connectorArrow} />
            </div>

            {/* Microplex (wide) */}
            <div className={`${styles.processingNode} ${styles.processingNodeWide}`}>
              <div className={styles.nodeHeader}>
                <div className={styles.nodeIcon}>
                  <MicroplexIcon />
                </div>
                <div className={styles.nodeName}>microplex</div>
              </div>
              <div className={styles.innerFlow}>
                <div className={styles.innerStep}>Learn P(target | context)</div>
                <span className={styles.innerArrow}>→</span>
                <div className={styles.innerStep}>Synthesize billions</div>
                <span className={styles.innerArrow}>→</span>
                <div className={styles.innerStep}>Sparse reweight to local</div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.connectorDown}>
              <div className={styles.connectorArrow} />
            </div>

            {/* Compile + Validators row */}
            <div className={styles.parallelRow}>
              <div className={styles.processingNode}>
                <div className={styles.nodeHeader}>
                  <div className={styles.nodeIcon}>
                    <CompileIcon />
                  </div>
                  <div className={styles.nodeName}>cosilico-compile</div>
                </div>
                <div className={styles.nodeFeatures}>
                  <div className={styles.nodeFeature}>DSL → Python</div>
                  <div className={styles.nodeFeature}>DSL → JavaScript</div>
                  <div className={styles.nodeFeature}>DSL → WASM / SQL</div>
                </div>
              </div>

              <div className={styles.processingNode}>
                <div className={styles.nodeHeader}>
                  <div className={styles.nodeIcon}>
                    <ValidatorsIcon />
                  </div>
                  <div className={styles.nodeName}>rac-validators</div>
                </div>
                <div className={styles.nodeFeatures}>
                  <div className={styles.nodeFeature}>PolicyEngine oracle</div>
                  <div className={styles.nodeFeature}>TAXSIM oracle</div>
                  <div className={styles.nodeFeature}>IRS tool comparison</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.connectorDown}>
              <div className={styles.connectorArrow} />
            </div>

            {/* Output */}
            <div className={styles.outputNode}>
              <div className={styles.outputTitle}>Policy Analysis</div>
              <div className={styles.outputFeatures}>
                <span className={styles.outputFeatureTag}>Distributional impacts</span>
                <span className={styles.outputFeatureTag}>Revenue estimates</span>
                <span className={styles.outputFeatureTag}>Geographic breakdowns</span>
                <span className={styles.outputFeatureTag}>What-if scenarios</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Open infrastructure</h2>
            <p className={styles.ctaText}>
              Core infrastructure (Atlas, RAC, AutoRAC) is maintained by the Rules Foundation.
              Data layer tools including Arch are open source under MIT.
            </p>
            <div className={styles.ctaLinks}>
              <a
                href="https://rules.foundation"
                className={styles.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DocsIcon />
                Rules Foundation
              </a>
              <a
                href="https://github.com/RulesFoundation"
                className={`${styles.ctaLink} ${styles.ctaLinkSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                RulesFoundation GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
