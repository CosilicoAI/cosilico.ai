import React from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/fusiongan.css";

// Icons
const GeneratorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M6 12h12" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DiscriminatorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const FusionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="12" cy="18" r="3" />
    <path d="M7.5 8.5L10.5 15M16.5 8.5L13.5 15" />
  </svg>
);

const WeightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 3v18M3 12h18" />
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="18" r="4" />
  </svg>
);

const CoverageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const CorrelationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M3 3v18h18" />
    <path d="M7 16l4-6 4 4 5-8" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const PaperIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.linkIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

export default function FusionGanPage() {
  return (
    <PageLayout>
      <div className={styles.fusiongan}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>RESEARCH PREVIEW</span>
            <h1 className={styles.heroTitle}>FusionGAN</h1>
            <p className={styles.heroSubtitle}>
              Multi-source adversarial synthesis for survey data fusion.
              Learn joint distributions from CPS, PUF, and other surveys
              with different variable coverage.
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <section className={styles.architectureSection}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <p className={styles.sectionSubtitle}>
            One generator produces complete records. Multiple discriminators
            evaluate projections to each survey's observed variables.
          </p>

          <div className={styles.architectureDiagram}>
            <div className={styles.archNoise}>
              z ~ N(0, I)<br />
              <small style={{ opacity: 0.7, fontSize: '0.8rem' }}>Latent Noise</small>
            </div>
            <span className={styles.archArrow}>→</span>
            <div className={styles.archGenerator}>
              Generator<br />
              <small style={{ opacity: 0.7, fontSize: '0.8rem' }}>G(z)</small>
            </div>
            <span className={styles.archArrow}>→</span>
            <div className={styles.archSynthetic}>
              Synthetic<br />
              <small style={{ opacity: 0.7, fontSize: '0.8rem' }}>Complete Record</small>
            </div>
            <span className={styles.archArrow}>→</span>
            <div className={styles.archProjection}>
              <div className={styles.archDiscCps}>
                D<sub>CPS</sub><br />
                <small style={{ opacity: 0.7, fontSize: '0.75rem' }}>age, wages, UI</small>
              </div>
              <div className={styles.archDiscPuf}>
                D<sub>PUF</sub><br />
                <small style={{ opacity: 0.7, fontSize: '0.75rem' }}>wages, cap_gains</small>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <GeneratorIcon />
              <h3 className={styles.featureTitle}>Shared generator</h3>
              <p className={styles.featureDescription}>
                Single MLP generator learns the full joint distribution across all variables,
                producing complete synthetic records from latent noise.
              </p>
            </div>

            <div className={styles.featureCard}>
              <DiscriminatorIcon />
              <h3 className={styles.featureTitle}>Multi-Discriminator</h3>
              <p className={styles.featureDescription}>
                Each data source (CPS, PUF) has its own discriminator that evaluates
                projected records against real samples from that source.
              </p>
            </div>

            <div className={styles.featureCard}>
              <FusionIcon />
              <h3 className={styles.featureTitle}>No matching required</h3>
              <p className={styles.featureDescription}>
                Unlike statistical matching, no shared identifiers needed. The GAN learns
                correlations implicitly through adversarial training.
              </p>
            </div>

            <div className={styles.featureCard}>
              <WeightIcon />
              <h3 className={styles.featureTitle}>Weighted training</h3>
              <p className={styles.featureDescription}>
                Cluster or density-based weighting focuses discriminator attention on
                rare population types for better coverage.
              </p>
            </div>

            <div className={styles.featureCard}>
              <CorrelationIcon />
              <h3 className={styles.featureTitle}>Cross-source correlations</h3>
              <p className={styles.featureDescription}>
                Learn relationships between variables never observed together (e.g.,
                age from CPS vs capital gains from PUF).
              </p>
            </div>

            <div className={styles.featureCard}>
              <CoverageIcon />
              <h3 className={styles.featureTitle}>Coverage metrics</h3>
              <p className={styles.featureDescription}>
                Evaluate using holdout k-NN coverage, discriminator accuracy, and MMD
                to ensure synthetic data matches real distributions.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className={styles.demoSection}>
          <h2 className={styles.sectionTitle}>Interactive demo</h2>
          <p className={styles.sectionSubtitle}>
            Adjust parameters and watch FusionGAN synthesize data in real-time.
          </p>

          <div className={styles.demoContainer}>
            <iframe
              src="/stack/fusiongan/demo.html"
              className={styles.demoIframe}
              title="FusionGAN Interactive Demo"
            />
          </div>
        </section>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <a
            href="https://github.com/CosilicoAI/fusiongan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <GitHubIcon />
            GitHub Repository
          </a>
          <a
            href="https://cosilicoai.github.io/fusiongan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <PaperIcon />
            Technical Paper
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
