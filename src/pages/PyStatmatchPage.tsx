import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/pystatmatch.css";

// Method icons
const NNDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.methodIcon}>
    <circle cx="5" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M8 11L17 6M8 12L17 12M8 13L17 18" strokeDasharray="2 2" />
  </svg>
);

const RandomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.methodIcon}>
    <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.methodIcon}>
    <rect x="4" y="14" width="4" height="6" rx="1" />
    <rect x="10" y="9" width="4" height="11" rx="1" />
    <rect x="16" y="4" width="4" height="16" rx="1" />
  </svg>
);

const MixedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.methodIcon}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeDasharray="2 2" />
  </svg>
);

// Feature icons
const DistanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M7 7l10 10" strokeDasharray="3 3" />
  </svg>
);

const WeightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 3v18M3 12l9-9 9 9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FrechetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 12h16M12 4v16" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const DiagnosticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
    <circle cx="20" cy="9" r="2" />
  </svg>
);

const ValidationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const SurveyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.comparisonCheck}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PyStatmatchPage() {
  return (
    <PageLayout>
      <div className={styles.pystatmatch}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>OPEN SOURCE</div>
            <h1 className={styles.heroTitle}>py-statmatch</h1>
            <p className={styles.heroSubtitle}>
              Python implementation of R's StatMatch package for statistical
              matching and data fusion. Hot deck imputation made easy.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                NND Hot Deck
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                Gower Distance
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                Frechet Bounds
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                R Parity
              </span>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className={styles.methodsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Matching methods</h2>
            <p className={styles.sectionSubtitle}>
              Multiple hot deck algorithms for different use cases
            </p>
          </div>

          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodCardGlow} />
              <NNDIcon />
              <h3 className={styles.methodTitle}>NND hot deck</h3>
              <p className={styles.methodDescription}>
                Nearest Neighbor Distance matching. Find the closest donor
                for each recipient based on matching variables. Supports
                constrained matching to limit donor reuse.
              </p>
              <code className={styles.methodCode}>
                nnd_hotdeck(data_rec, data_don, match_vars)
              </code>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodCardGlow} />
              <RandomIcon />
              <h3 className={styles.methodTitle}>Random hot deck</h3>
              <p className={styles.methodDescription}>
                Probabilistic matching within strata. Randomly select donors
                within matching cells for added variability. Useful for
                preserving uncertainty in imputation.
              </p>
              <code className={styles.methodCode}>
                rand_hotdeck(data_rec, data_don, match_vars)
              </code>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodCardGlow} />
              <RankIcon />
              <h3 className={styles.methodTitle}>Rank NND hot deck</h3>
              <p className={styles.methodDescription}>
                Rank-based nearest neighbor matching. Convert continuous
                variables to ranks before matching, reducing sensitivity
                to outliers and scale differences.
              </p>
              <code className={styles.methodCode}>
                rank_nnd_hotdeck(data_rec, data_don, match_vars)
              </code>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodCardGlow} />
              <MixedIcon />
              <h3 className={styles.methodTitle}>Mixed MTC</h3>
              <p className={styles.methodDescription}>
                Mixed constrained matching for handling both continuous
                and categorical variables simultaneously. Optimal for
                complex multi-source data fusion scenarios.
              </p>
              <code className={styles.methodCode}>
                mixed_mtc(data_rec, data_don, match_vars)
              </code>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Full toolkit</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need for statistical matching workflows
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <DistanceIcon />
              <h3 className={styles.featureTitle}>Distance functions</h3>
              <p className={styles.featureDescription}>
                Gower, Mahalanobis, Euclidean, and Manhattan distances.
                Automatic handling of mixed variable types.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <WeightIcon />
              <h3 className={styles.featureTitle}>Survey weights</h3>
              <p className={styles.featureDescription}>
                Full support for weighted matching. Calibrate weights post-match
                and calculate design effects.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <FrechetIcon />
              <h3 className={styles.featureTitle}>Frechet bounds</h3>
              <p className={styles.featureDescription}>
                Compute theoretical bounds on joint distributions. Quantify
                uncertainty from conditional independence assumption.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <DiagnosticsIcon />
              <h3 className={styles.featureTitle}>Match diagnostics</h3>
              <p className={styles.featureDescription}>
                Balance checks, standardized mean differences, variance ratios,
                and KS tests for match quality assessment.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ValidationIcon />
              <h3 className={styles.featureTitle}>R validation</h3>
              <p className={styles.featureDescription}>
                Tested against the original R StatMatch package. Numerical
                parity verified with rpy2 integration tests.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SurveyIcon />
              <h3 className={styles.featureTitle}>Data fusion</h3>
              <p className={styles.featureDescription}>
                Create fused datasets from matched records. Combine variables
                from multiple surveys into unified microdata.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonContent}>
            <div className={styles.comparisonText}>
              <h2 className={styles.comparisonTitle}>R StatMatch in Python</h2>
              <p className={styles.comparisonDescription}>
                The same algorithms you know from R, now native to the Python
                data science ecosystem. No rpy2 bridge needed.
              </p>
              <ul className={styles.comparisonList}>
                <li className={styles.comparisonItem}>
                  <CheckIcon />
                  Drop-in replacement for StatMatch workflows
                </li>
                <li className={styles.comparisonItem}>
                  <CheckIcon />
                  Pandas DataFrames in, Pandas DataFrames out
                </li>
                <li className={styles.comparisonItem}>
                  <CheckIcon />
                  NumPy-vectorized distance computations
                </li>
                <li className={styles.comparisonItem}>
                  <CheckIcon />
                  Type hints and modern Python patterns
                </li>
                <li className={styles.comparisonItem}>
                  <CheckIcon />
                  Comprehensive documentation and examples
                </li>
              </ul>
            </div>

            <div className={styles.comparisonCode}>
              <pre className={styles.codeBlock}>
<span className={styles.codeComment}># Match income from CPS to ACS demographics</span>
{"\n"}
<span className={styles.codeKeyword}>from</span> statmatch <span className={styles.codeKeyword}>import</span> nnd_hotdeck, create_fused
{"\n\n"}
<span className={styles.codeComment}># Find nearest neighbor donors</span>
{"\n"}
result = nnd_hotdeck(
{"\n"}    data_rec=acs,
{"\n"}    data_don=cps,
{"\n"}    match_vars=[<span className={styles.codeString}>"age"</span>, <span className={styles.codeString}>"education"</span>, <span className={styles.codeString}>"region"</span>],
{"\n"}    dist_fun=<span className={styles.codeString}>"gower"</span>,
{"\n"})
{"\n\n"}
<span className={styles.codeComment}># Create fused dataset</span>
{"\n"}
fused = create_fused(
{"\n"}    data_rec=acs,
{"\n"}    data_don=cps,
{"\n"}    mtc_ids=result[<span className={styles.codeString}>"mtc.ids"</span>],
{"\n"}    z_vars=[<span className={styles.codeString}>"income"</span>, <span className={styles.codeString}>"benefits"</span>],
{"\n"})
              </pre>
            </div>
          </div>
        </section>

        {/* Integration Note */}
        <section className={styles.integrationSection}>
          <div className={styles.integrationCard}>
            <h3 className={styles.integrationTitle}>Part of the Cosilico stack</h3>
            <p className={styles.integrationDescription}>
              py-statmatch is available as an optional backend in microplex.
              Use traditional statistical matching alongside neural synthesis
              methods for comprehensive data fusion workflows.
            </p>
            <Link to="/stack/microplex" className={styles.integrationLink}>
              <span>Learn about microplex</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Install */}
        <section className={styles.installSection}>
          <div className={styles.installBox}>
            <div className={styles.installBoxGlow} />
            <h2 className={styles.installTitle}>Get started</h2>
            <code className={styles.installCode}>pip install py-statmatch</code>
            <div className={styles.installLinks}>
              <a
                href="https://pypi.org/project/py-statmatch/"
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
                href="https://github.com/CosilicoAI/py-statmatch"
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
                href="https://cosilicoai.github.io/py-statmatch"
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
