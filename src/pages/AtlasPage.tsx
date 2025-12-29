import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/atlas.css";

// Icons
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.codeFilenameIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.checkIcon}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Feature icons
const StatuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    <path d="M8 7h8M8 11h8M8 15h4" />
  </svg>
);

const GuidanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const StateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Pipeline stage icons
const IngestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ParseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const IndexIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ServeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.stageIcon}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
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

const DocsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.installLinkIcon}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

export default function AtlasPage() {
  return (
    <PageLayout>
      <div className={styles.atlas}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>DOCUMENT API</div>
            <h1 className={styles.heroTitle}>Cosilico Atlas</h1>
            <p className={styles.heroSubtitle}>
              Structured policy document API. Statutes, regulations, and guidance
              in machine-readable formats.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                54 USC Titles
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                IRS Guidance
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                Full-Text Search
              </span>
              <span className={styles.pill}>
                <span className={styles.pillIcon}>&#9670;</span>
                REST API
              </span>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            <div className={styles.descriptionText}>
              <h2 className={styles.descriptionTitle}>
                The Law, Structured for Machines
              </h2>
              <p className={styles.descriptionParagraph}>
                Atlas provides programmatic access to U.S. legal documents. Pull any
                section of the Internal Revenue Code, look up IRS Revenue Procedures
                and Rulings, or search across the entire corpus.
              </p>
              <ul className={styles.descriptionList}>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  Hierarchical structure preserved (titles, chapters, sections, subsections)
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  Cross-references resolved and linked
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  Amendment history tracked
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  JSON and XML output formats
                </li>
                <li className={styles.descriptionItem}>
                  <CheckIcon />
                  Semantic search with embeddings
                </li>
              </ul>
            </div>
            <div className={styles.descriptionVisual}>
              <div className={styles.visualGlow} />
              <pre className={styles.codePre}>
{`{
  "citation": "26 USC 32",
  "title": "Earned income",
  "type": "section",
  "structure": {
    "title": 26,
    "chapter": 1,
    "subchapter": "A",
    "part": "IV",
    "subpart": "C",
    "section": 32
  },
  "text": "...",
  "subsections": [...],
  "amendments": [...],
  "cross_references": [...]
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Data Sources</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive coverage of federal tax and benefit law
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <StatuteIcon />
              <h3 className={styles.featureTitle}>Federal Statutes</h3>
              <p className={styles.featureDescription}>
                All 54 titles of the U.S. Code. Full text with hierarchical
                structure from title down to clause level.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <GuidanceIcon />
              <h3 className={styles.featureTitle}>IRS Guidance</h3>
              <p className={styles.featureDescription}>
                Revenue Procedures, Revenue Rulings, Treasury Decisions,
                and other official IRS publications.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <StateIcon />
              <h3 className={styles.featureTitle}>State Codes</h3>
              <p className={styles.featureDescription}>
                State tax codes and benefit statutes with the same structured
                format as federal sources.
              </p>
              <div className={styles.featureBadge}>Coming Soon</div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <HistoryIcon />
              <h3 className={styles.featureTitle}>Historical Versions</h3>
              <p className={styles.featureDescription}>
                Access any version of the law as it existed at a specific date.
                Track changes over time.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <SearchIcon />
              <h3 className={styles.featureTitle}>Full-Text Search</h3>
              <p className={styles.featureDescription}>
                Search across the entire corpus with keyword, phrase, and
                semantic similarity queries.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardGlow} />
              <ApiIcon />
              <h3 className={styles.featureTitle}>REST API</h3>
              <p className={styles.featureDescription}>
                Clean REST endpoints for retrieval, search, and bulk export.
                Rate-limited free tier available.
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className={styles.codeSection}>
          <div className={styles.codeContent}>
            <div className={styles.codeText}>
              <h2 className={styles.codeTitle}>Simple API Access</h2>
              <p className={styles.codeDescription}>
                Fetch any statute section by citation. Get structured JSON with
                full text, metadata, and cross-references.
              </p>
              <p className={styles.codeDescription}>
                The Python client handles authentication, caching, and pagination
                automatically.
              </p>
            </div>

            <div className={styles.codeExampleBox}>
              <div className={styles.codeHeader}>
                <span className={styles.codeFilename}>
                  <FileIcon />
                  example.py
                </span>
                <span className={styles.codeLang}>Python</span>
              </div>
              <div className={styles.codeBody}>
                <pre className={styles.codePre}>
<span className="keyword">from</span> atlas <span className="keyword">import</span> Atlas
{"\n\n"}
<span className="comment"># Initialize client</span>
{"\n"}
atlas = Atlas()
{"\n\n"}
<span className="comment"># Fetch EITC statute</span>
{"\n"}
eitc = atlas.get(<span className="string">"26 USC 32"</span>)
{"\n"}
<span className="keyword">print</span>(eitc.title)  <span className="comment"># "Earned income"</span>
{"\n\n"}
<span className="comment"># Search for provisions about "qualifying child"</span>
{"\n"}
results = atlas.search(
{"\n"}    query=<span className="string">"qualifying child definition"</span>,
{"\n"}    title=<span className="number">26</span>,
{"\n"}    limit=<span className="number">10</span>
{"\n"})
{"\n\n"}
<span className="comment"># Get historical version</span>
{"\n"}
eitc_2020 = atlas.get(
{"\n"}    <span className="string">"26 USC 32"</span>,
{"\n"}    as_of=<span className="string">"2020-01-01"</span>
{"\n"})
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className={styles.architectureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pipeline</h2>
            <p className={styles.sectionSubtitle}>
              From raw documents to structured API
            </p>
          </div>

          <div className={styles.architectureContainer}>
            <div className={styles.architectureGlow} />
            <div className={styles.pipelineStages}>
              <div className={styles.pipelineStage}>
                <IngestIcon />
                <h4 className={styles.stageTitle}>Ingest</h4>
                <p className={styles.stageDescription}>
                  Pull from official sources (USLM, GPO, IRS)
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <ParseIcon />
                <h4 className={styles.stageTitle}>Parse</h4>
                <p className={styles.stageDescription}>
                  Extract structure from XML/HTML
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <IndexIcon />
                <h4 className={styles.stageTitle}>Index</h4>
                <p className={styles.stageDescription}>
                  Build search index and embeddings
                </p>
              </div>

              <ArrowRight />

              <div className={styles.pipelineStage}>
                <ServeIcon />
                <h4 className={styles.stageTitle}>Serve</h4>
                <p className={styles.stageDescription}>
                  REST API with caching layer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Note */}
        <section className={styles.integrationSection}>
          <div className={styles.integrationCard}>
            <h3 className={styles.integrationTitle}>Part of the Cosilico Stack</h3>
            <p className={styles.integrationDescription}>
              Atlas provides the source documents that power Cosilico's rule encoding.
              The .rac format links directly to Atlas citations, ensuring traceability
              from calculation to statute.
            </p>
            <Link to="/stack/.rac" className={styles.integrationLink}>
              <span>Learn about .rac format</span>
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
            <h2 className={styles.installTitle}>Get Started</h2>
            <code className={styles.installCode}>pip install cosilico-atlas</code>
            <div className={styles.installLinks}>
              <a
                href="https://github.com/CosilicoAI/cosilico-atlas"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://cosilicoai.github.io/cosilico-atlas"
                className={styles.installLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DocsIcon />
                Docs
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
