import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/arch.css";

// Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.checkIcon}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Source icons
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const GuidanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const StateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.sourceIcon}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Feature icons
const ProvenanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChangeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CitationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// Pipeline stage icons
const FetchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const StorageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const MetadataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const ServeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.pipelineArrow}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.installLinkIcon}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function ArchPage() {
  return (
    <PageLayout>
      <div className={styles.arch}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>UNIVERSAL LEGAL ARCHIVE</div>
            <h1 className={styles.heroTitle}>Arch</h1>
            <p className={styles.heroSubtitle}>
              The world's law, normalized to one format. Statutes from the US, UK, Canada, EU, and NZ -
              plus regulations, guidance, and microdata - all converted to Akoma Ntoso and indexed for AI.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                Akoma Ntoso
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                50 US States
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                5 Countries
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                Full-Text Search
              </span>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionText}>
              <h2 className={styles.descriptionTitle}>
                Universal Interchange Format
              </h2>
              <p className={styles.descriptionParagraph}>
                Every jurisdiction has its own format: USLM for US Code, CLML for UK legislation,
                Formex for EU, proprietary HTML for each US state. Arch normalizes everything to
                <strong> Akoma Ntoso</strong> - the UN-backed OASIS standard for legislative documents.
              </p>
              <ul className={styles.descriptionList}>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  Parsers for US Code (USLM), UK Acts (CLML), Canada, NZ, and EU (Formex)
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  US federal regulations from eCFR (Title 26 IRS, Title 7 SNAP, Title 20 SSA)
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  State statute converters for NY, CA, FL, MI, TX, and 45 more states
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  IRS guidance, SSA POMS, and CMS manuals parsed from HTML/PDF
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  All documents indexed in PostgreSQL with full-text search
                </li>
              </ul>
            </div>
            <div className={styles.descriptionVisual}>
              <div className={styles.visualGlow} />
              <pre className={styles.codePre}>
{`# Akoma Ntoso Section Model
{
  "id": "act/us/usc/26/32",
  "heading": "Earned income",
  "jurisdiction": "us",
  "doc_type": "statute",
  "source_format": "uslm",
  "effective_date": "2024-01-01",
  "subsections": [
    { "id": "a", "heading": "Allowance of credit" },
    { "id": "b", "heading": "Percentages" },
    { "id": "c", "heading": "Definitions" }
  ],
  "cross_references": [
    "26 USC 2(a)", "26 USC 152"
  ]
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className={styles.architectureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Architecture</h2>
            <p className={styles.sectionSubtitle}>
              From government sources to API endpoints
            </p>
          </div>

          <div className={styles.architectureContainer}>
            <div className={styles.architectureGlow} />
            <div className={styles.pipelineStages}>
              <div className={styles.pipelineStage}>
                <FetchIcon />
                <h4 className={styles.stageTitle}>Fetchers</h4>
                <p className={styles.stageDescription}>
                  Automated scrapers for IRS, Census, state agencies
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <StorageIcon />
                <h4 className={styles.stageTitle}>R2 Storage</h4>
                <p className={styles.stageDescription}>
                  Raw files stored with versioning and checksums
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <MetadataIcon />
                <h4 className={styles.stageTitle}>PostgreSQL</h4>
                <p className={styles.stageDescription}>
                  Metadata, citations, relationships indexed
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <ServeIcon />
                <h4 className={styles.stageTitle}>API</h4>
                <p className={styles.stageDescription}>
                  REST endpoints for retrieval and search
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className={styles.sourcesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Data Sources</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive coverage of government source materials
            </p>
          </div>

          <div className={styles.sourcesGrid}>
            {/* US Federal Statutes */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <CodeIcon />
              <h3 className={styles.sourceTitle}>
                US Code
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                All 54 titles of the United States Code from USLM. Full text with
                hierarchical structure from title down to clause level.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>54 titles</span>
                <span className={styles.sourceMetaItem}>XML + PDF</span>
              </div>
            </div>

            {/* IRS */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <GuidanceIcon />
              <h3 className={styles.sourceTitle}>
                IRS Guidance
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                Revenue Procedures, Revenue Rulings, Treasury Decisions, Publications,
                and annual inflation adjustments from irs.gov.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>570+ docs</span>
                <span className={styles.sourceMetaItem}>PDF</span>
              </div>
            </div>

            {/* SNAP/TANF/LIHEAP */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <GuidanceIcon />
              <h3 className={styles.sourceTitle}>
                Federal Benefits
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                SNAP COLA tables (FNS), TANF caseload/expenditure data (ACF),
                LIHEAP SMI tables, and poverty guidelines (ASPE).
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>70+ files</span>
                <span className={styles.sourceMetaItem}>PDF + XLSX</span>
              </div>
            </div>

            {/* Canada */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <CodeIcon />
              <h3 className={styles.sourceTitle}>
                Canada Acts
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                All consolidated federal Acts from Justice Canada's Laws Website.
                Includes Income Tax Act, Employment Insurance, and more.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>956 acts</span>
                <span className={styles.sourceMetaItem}>XML</span>
              </div>
            </div>

            {/* UK */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <CodeIcon />
              <h3 className={styles.sourceTitle}>
                UK Legislation
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                UK Public General Acts from legislation.gov.uk. Full text in
                Crown Legislation Markup Language (CLML) format.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>3,237 acts</span>
                <span className={styles.sourceMetaItem}>XML</span>
              </div>
            </div>

            {/* State PDFs */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <StateIcon />
              <h3 className={styles.sourceTitle}>
                State Policy Docs
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                State tax forms, policy manuals, and benefit guidelines from 33+
                state revenue and human services departments.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>500+ PDFs</span>
                <span className={styles.sourceMetaItem}>33 states</span>
              </div>
            </div>

            {/* Census CPS */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <DatabaseIcon />
              <h3 className={styles.sourceTitle}>
                Census CPS
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                Current Population Survey microdata - the foundation for income
                distribution and benefit analysis at the household level.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>ASEC</span>
                <span className={styles.sourceMetaItem}>Monthly</span>
              </div>
            </div>

            {/* IRS SOI */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <ChartIcon />
              <h3 className={styles.sourceTitle}>
                IRS SOI
                <span className={styles.sourceBadge}>Live</span>
              </h3>
              <p className={styles.sourceDescription}>
                Statistics of Income data - aggregated tax return statistics by
                income, state, and filing status for calibration targets.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>Individual</span>
                <span className={styles.sourceMetaItem}>Corporate</span>
              </div>
            </div>

            {/* Census ACS */}
            <div className={styles.sourceCard}>
              <div className={styles.sourceCardGlow} />
              <DatabaseIcon />
              <h3 className={styles.sourceTitle}>
                Census ACS
                <span className={`${styles.sourceBadge} ${styles.sourceComingSoon}`}>Coming</span>
              </h3>
              <p className={styles.sourceDescription}>
                American Community Survey microdata for detailed geographic
                targeting at county and tract level.
              </p>
              <div className={styles.sourceMeta}>
                <span className={styles.sourceMetaItem}>1-Year</span>
                <span className={styles.sourceMetaItem}>5-Year</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <p className={styles.sectionSubtitle}>
              Built for auditability and reproducibility
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ProvenanceIcon />
              <h3 className={styles.featureTitle}>Provenance Tracking</h3>
              <p className={styles.featureDescription}>
                Every file tracked from source URL to storage. Full chain of
                custody with timestamps, checksums, and fetch metadata.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ChangeIcon />
              <h3 className={styles.featureTitle}>Change Detection</h3>
              <p className={styles.featureDescription}>
                Automated monitoring of source documents. Get alerts when
                statutes are amended or guidance is updated.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SearchIcon />
              <h3 className={styles.featureTitle}>Full-Text Search</h3>
              <p className={styles.featureDescription}>
                Search across all archived documents. Keyword, phrase, and
                semantic similarity queries supported.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <CitationIcon />
              <h3 className={styles.featureTitle}>Citation Parsing</h3>
              <p className={styles.featureDescription}>
                Automatic extraction and linking of legal citations. Map
                relationships between statutes and guidance.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <CloudIcon />
              <h3 className={styles.featureTitle}>R2 Storage</h3>
              <p className={styles.featureDescription}>
                Cloudflare R2 for durable, low-cost object storage. Files
                accessible globally with CDN distribution.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ApiIcon />
              <h3 className={styles.featureTitle}>REST API</h3>
              <p className={styles.featureDescription}>
                Clean REST endpoints for retrieval, search, and bulk export.
                Python client available for easy integration.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Note */}
        <section className={styles.integrationSection}>
          <div className={styles.integrationCard}>
            <h3 className={styles.integrationTitle}>Foundation for the Stack</h3>
            <p className={styles.integrationDescription}>
              Arch provides the raw materials that power the entire Cosilico stack. Atlas
              structures these documents for machine access, Engine encodes the rules, and
              Microplex uses the microdata for simulation.
            </p>
            <Link to="/stack" className={styles.integrationLink}>
              <span>View the full stack</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.installSection}>
          <div className={styles.installBox}>
            <div className={styles.installBoxGlow} />
            <h2 className={styles.installTitle}>In Development</h2>
            <p className={styles.installSubtext}>
              Arch is currently in active development. Core infrastructure is operational
              with fetchers running for primary sources.
            </p>
            <div className={styles.installLinks}>
              <a
                href="https://github.com/CosilicoAI/arch"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
              <Link to="/stack/atlas" className={`${styles.installLink} ${styles.installLinkSecondary}`}>
                View Atlas (API Layer)
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
