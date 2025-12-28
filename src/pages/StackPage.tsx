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

const AtlasIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.componentIconSvg}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M4.5 7h15M4.5 17h15" />
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
            <h1 className={styles.heroTitle}>The Cosilico Stack</h1>
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
            {/* microplex - LIVE */}
            <Link to="/stack/microplex" className={`${styles.componentCard} ${styles.cardDelay1}`}>
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

            {/* .rac - LIVE */}
            <Link to="/stack/.rac" className={`${styles.componentCard} ${styles.cardDelay2}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusLive}`}>SPEC</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <RacIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>.rac</h3>
                  <div className={styles.componentTagline}>Statute encoding format</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Self-contained statute encoding format. One file captures the law:
                text, parameters, formulas, and tests. Filepath mirrors legal citation.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>Legal Citations</span>
                <span className={styles.featureTag}>Time-Varying</span>
                <span className={styles.featureTag}>Inline Tests</span>
                <span className={styles.featureTag}>Self-Contained</span>
              </div>
            </Link>

            {/* py-statmatch - LIVE */}
            <Link to="/stack/py-statmatch" className={`${styles.componentCard} ${styles.cardDelay3}`}>
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

            {/* cosilico-engine - DEV */}
            <div className={`${styles.componentCard} ${styles.cardDelay4} ${styles.componentCardComingSoon}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>IN DEV</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <EngineIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>cosilico-engine</h3>
                  <div className={styles.componentTagline}>DSL runtime</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Domain-specific language for encoding tax and benefit law.
                Vectorized execution, legal citations, time-varying parameters,
                and multi-entity calculations.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>Statute DSL</span>
                <span className={styles.featureTag}>Vectorized</span>
                <span className={styles.featureTag}>Legal Citations</span>
                <span className={styles.featureTag}>Parameters</span>
              </div>
            </div>

            {/* cosilico-validators - DEV */}
            <div className={`${styles.componentCard} ${styles.cardDelay5} ${styles.componentCardComingSoon}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>IN DEV</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <ValidatorsIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>cosilico-validators</h3>
                  <div className={styles.componentTagline}>External validation</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Validate implementations against authoritative calculators.
                IRS tax tools, state benefit calculators, and official
                documentation cross-referenced automatically.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>IRS Tools</span>
                <span className={styles.featureTag}>State Calculators</span>
                <span className={styles.featureTag}>Auto-Validation</span>
                <span className={styles.featureTag}>CI Integration</span>
              </div>
            </div>

            {/* cosilico-atlas - DEV */}
            <div className={`${styles.componentCard} ${styles.cardDelay6} ${styles.componentCardComingSoon}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusDev}`}>IN DEV</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <AtlasIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>cosilico-atlas</h3>
                  <div className={styles.componentTagline}>Policy document API</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Structured API for statutes, regulations, and guidance. Maps
                connections between policy documents, tracks historical versions,
                and provides search across jurisdictions.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>US Code</span>
                <span className={styles.featureTag}>IRS Guidance</span>
                <span className={styles.featureTag}>Historical</span>
                <span className={styles.featureTag}>Full-Text Search</span>
              </div>
            </div>

            {/* cosilico-compile - PLANNED */}
            <div className={`${styles.componentCard} ${styles.cardDelay7} ${styles.componentCardComingSoon}`}>
              <div className={styles.componentCardGlow} />
              <span className={`${styles.statusBadge} ${styles.statusPlanned}`}>PLANNED</span>
              <div className={styles.componentHeader}>
                <div className={styles.componentIcon}>
                  <CompileIcon />
                </div>
                <div className={styles.componentMeta}>
                  <h3 className={styles.componentName}>cosilico-compile</h3>
                  <div className={styles.componentTagline}>Multi-target compiler</div>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Compile encoded statutes to multiple targets: Python for
                analysis, JavaScript for browsers, WASM for performance,
                SQL for data warehouses.
              </p>
              <div className={styles.componentFeatures}>
                <span className={styles.featureTag}>Python</span>
                <span className={styles.featureTag}>JavaScript</span>
                <span className={styles.featureTag}>WASM</span>
                <span className={styles.featureTag}>SQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className={styles.architectureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Fits Together</h2>
            <p className={styles.sectionSubtitle}>
              From source law to policy analysis
            </p>
          </div>

          <div className={styles.architectureWrapper}>
            <pre className={styles.architectureDiagram}>
{`┌─────────────────────────────────────────────────────────────────────────┐
│                           SOURCE MATERIALS                               │
├──────────────────┬──────────────────┬──────────────────┬────────────────┤
│   Tax Code       │   Benefit Law    │    Microdata     │   Targets      │
│   (IRC, state)   │   (SNAP, TANF)   │   (CPS, ACS)     │   (Census)     │
└────────┬─────────┴────────┬─────────┴────────┬─────────┴───────┬────────┘
         │                  │                  │                 │
         ▼                  ▼                  │                 │
┌─────────────────────────────────┐            │                 │
│       `}<span className="highlight">cosilico-engine</span>{`          │            │                 │
│                                 │            │                 │
│  • Parse statute DSL            │            │                 │
│  • Resolve legal citations      │            │                 │
│  • Execute vectorized calcs     │            │                 │
│  • Handle time-varying params   │            │                 │
└────────────────┬────────────────┘            │                 │
                 │                             │                 │
                 ▼                             ▼                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                            `}<span className="highlight">microplex</span>{`                                     │
│                                                                         │
│  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────────┐   │
│  │ Learn P(target  │   │ Synthesize      │   │ Sparse reweight     │   │
│  │   | context)    │ → │ billions of     │ → │ to local targets    │   │
│  │ with MAF flows  │   │ households      │   │ (county/tract)      │   │
│  └─────────────────┘   └─────────────────┘   └─────────────────────┘   │
└────────────────────────────────────────────────┬────────────────────────┘
                                                 │
                 ┌───────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐   ┌───────────────────────────────────┐
│     `}<span className="highlight">cosilico-compile</span>{`          │   │       `}<span className="highlight">cosilico-validators</span>{`        │
│                                 │   │                                   │
│  DSL → Python                   │   │  Compare outputs to:              │
│  DSL → JavaScript               │   │  • IRS tax calculators            │
│  DSL → WASM                     │   │  • State benefit tools            │
│  DSL → SQL                      │   │  • Published statistics           │
└────────────────┬────────────────┘   └───────────────────┬───────────────┘
                 │                                        │
                 └──────────────────┬─────────────────────┘
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │       POLICY ANALYSIS         │
                    │                               │
                    │  • Distributional impacts     │
                    │  • Revenue/cost estimates     │
                    │  • Geographic breakdowns      │
                    │  • What-if scenarios          │
                    └───────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Open Source</h2>
            <p className={styles.ctaText}>
              All Cosilico tools are open source under the MIT license.
              Contributions welcome.
            </p>
            <div className={styles.ctaLinks}>
              <a
                href="https://github.com/CosilicoAI"
                className={styles.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub Organization
              </a>
              <a
                href="https://cosilicoai.github.io/microplex"
                className={`${styles.ctaLink} ${styles.ctaLinkSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DocsIcon />
                microplex Docs
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
