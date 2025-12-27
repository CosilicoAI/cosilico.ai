import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/rac.css";

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.codeFilenameIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
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

// Feature icons
const CitationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    <path d="M8 7h8M8 11h8M8 15h4" />
  </svg>
);

const ParameterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const FormulaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const ImportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const VersionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function RacPage() {
  return (
    <PageLayout>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>FILE FORMAT</div>
            <h1 className={styles.heroTitle}>.rac</h1>
            <p className={styles.heroSubtitle}>
              Self-contained statute encoding format. One file captures the law:
              text, parameters, formulas, and tests.
            </p>
          </div>
        </section>

        {/* Main Example */}
        <section className={styles.codeSection}>
          <div className={`${styles.codeBlock} ${styles.delay1}`}>
            <div className={styles.codeHeader}>
              <span className={styles.codeFilename}>
                <FileIcon />
                statute/7/2017/a.rac
              </span>
              <span className={styles.codeCitation}>7 USC &sect; 2017(a)</span>
            </div>
            <div className={styles.codeContent}>
              <pre className={styles.codePre}>
{`# SNAP Allotment Formula

`}<span className="comment"># Statute text (for reference and LLM context)</span>{`
`}<span className="keyword">text:</span>{` |
  The value of the allotment shall be equal to the cost of the
  thrifty food plan reduced by 30 percent of the household's income.

`}<span className="comment"># Time-varying policy values</span>{`
`}<span className="keyword">parameter</span>{` `}<span className="variable">contribution_rate</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"Household contribution as share of net income"</span>{`
  `}<span className="field">source:</span>{` `}<span className="string">"USDA FNS"</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">2024-01-01</span>{`: `}<span className="number">0.30</span>{`
    `}<span className="number">1977-01-01</span>{`: `}<span className="number">0.30</span>{`

`}<span className="keyword">parameter</span>{` `}<span className="variable">max_allotment</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"Maximum monthly SNAP benefit by household size"</span>{`
  `}<span className="field">unit:</span>{` `}<span className="type">USD</span>{`
  `}<span className="field">index:</span>{` `}<span className="type">household_size</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">2024-10-01</span>{`: [`}<span className="number">292</span>{`, `}<span className="number">536</span>{`, `}<span className="number">768</span>{`, `}<span className="number">975</span>{`, `}<span className="number">1159</span>{`, `}<span className="number">1391</span>{`, `}<span className="number">1536</span>{`, `}<span className="number">1756</span>{`]

`}<span className="comment"># Computed variable with formula</span>{`
`}<span className="keyword">variable</span>{` `}<span className="variable">snap_allotment</span>{`:
  `}<span className="field">imports:</span>{` [`}<span className="string">7/2014/a#snap_eligible</span>{`, `}<span className="string">7/2014/e#snap_net_income</span>{`]
  `}<span className="field">entity:</span>{` `}<span className="type">Household</span>{`
  `}<span className="field">period:</span>{` `}<span className="type">Month</span>{`
  `}<span className="field">dtype:</span>{` `}<span className="type">Money</span>{`
  `}<span className="field">formula:</span>{` |
    `}<span className="keyword">if not</span>{` snap_eligible:
      `}<span className="keyword">return</span>{` `}<span className="number">0</span>{`
    benefit = max_allotment[household_size] - snap_net_income * contribution_rate
    `}<span className="keyword">return</span>{` max(`}<span className="number">0</span>{`, benefit)

  `}<span className="comment"># Inline tests</span>{`
  `}<span className="field">tests:</span>{`
    - `}<span className="field">name:</span>{` `}<span className="string">"Family of 4, $500 net income"</span>{`
      `}<span className="field">inputs:</span>{` {'{'}household_size: 4, snap_net_income: 500, snap_eligible: true{'}'}
      `}<span className="field">expect:</span>{` `}<span className="number">825</span>{`
`}
              </pre>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything in One File</h2>
            <p className={styles.sectionSubtitle}>
              No separate parameter files. No external test suites. Self-contained and auditable.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} ${styles.delay1}`}>
              <div className={styles.featureIcon}><CitationIcon /></div>
              <h3 className={styles.featureTitle}>Legal Citations</h3>
              <p className={styles.featureDescription}>
                Filepath mirrors statute citation. <code>26/24/d/1/B.rac</code> encodes
                26 USC &sect; 24(d)(1)(B).
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay2}`}>
              <div className={styles.featureIcon}><ParameterIcon /></div>
              <h3 className={styles.featureTitle}>Time-Varying Parameters</h3>
              <p className={styles.featureDescription}>
                Policy values change over time. Parameters track every historical value
                with effective dates.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay3}`}>
              <div className={styles.featureIcon}><FormulaIcon /></div>
              <h3 className={styles.featureTitle}>No Magic Numbers</h3>
              <p className={styles.featureDescription}>
                Only -1, 0, 1, 2, 3 allowed in formulas. All policy values must come
                from parameters.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay4}`}>
              <div className={styles.featureIcon}><ImportIcon /></div>
              <h3 className={styles.featureTitle}>Cross-References</h3>
              <p className={styles.featureDescription}>
                Import variables from other statutes using <code>path#variable</code> syntax.
                Dependencies are explicit.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay5}`}>
              <div className={styles.featureIcon}><TestIcon /></div>
              <h3 className={styles.featureTitle}>Inline Tests</h3>
              <p className={styles.featureDescription}>
                Test cases live next to the code. Verify against official calculators
                and real-world examples.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay6}`}>
              <div className={styles.featureIcon}><VersionIcon /></div>
              <h3 className={styles.featureTitle}>Temporal Formulas</h3>
              <p className={styles.featureDescription}>
                When laws change, track different formula versions with effective dates
                and sunset provisions.
              </p>
            </div>
          </div>
        </section>

        {/* Structure Table */}
        <section className={styles.structureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Declaration Types</h2>
            <p className={styles.sectionSubtitle}>
              Each file can contain multiple named declarations
            </p>
          </div>

          <table className={styles.structureTable}>
            <thead>
              <tr>
                <th>Declaration</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>text:</code></td>
                <td>Statute text for reference and LLM context</td>
                <td><code>text: |</code> followed by quoted legal text</td>
              </tr>
              <tr>
                <td><code>parameter name:</code></td>
                <td>Time-varying policy value (thresholds, rates, amounts)</td>
                <td><code>parameter max_benefit:</code></td>
              </tr>
              <tr>
                <td><code>variable name:</code></td>
                <td>Computed value with formula</td>
                <td><code>variable eitc_amount:</code></td>
              </tr>
              <tr>
                <td><code>input name:</code></td>
                <td>User-provided input (wages, age, etc.)</td>
                <td><code>input earned_income:</code></td>
              </tr>
              <tr>
                <td><code>enum name:</code></td>
                <td>Enumeration type (filing status, etc.)</td>
                <td><code>enum FilingStatus:</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Full Specification</h2>
            <p className={styles.ctaText}>
              See the complete .rac format specification with all attributes,
              scoping rules, and migration guide.
            </p>
            <div className={styles.ctaLinks}>
              <a
                href="https://github.com/CosilicoAI/cosilico-us/blob/main/RAC_SPEC.md"
                className={styles.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                RAC_SPEC.md
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
