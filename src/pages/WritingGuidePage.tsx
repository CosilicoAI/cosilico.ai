import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/writing.css";
import { CheckIcon, XIcon, LightningIcon } from "../components/icons";

export default function WritingGuidePage() {
  return (
    <PageLayout>
      <div className={styles.writingPage}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.breadcrumb}>
            <Link to="/brand" className={styles.breadcrumbLink}>Brand</Link>
            {" / "}Writing
          </div>
          <h1 className={styles.heroTitle}>Writing guide</h1>
          <p className={styles.heroSubtitle}>
            How Cosilico communicates. Voice, tone, and content guidelines.
          </p>
        </section>

        <div className={styles.content}>
          {/* Sentence Case */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Sentence case</h2>
            <p className={styles.sectionIntro}>
              Always use sentence case for headings, not title case. This follows the modern
              standard used by Apple, Google, Slack, Notion, Basecamp, and GOV.UK.
            </p>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>The rule</h3>
              <p className={styles.ruleDescription}>
                Capitalize only the first word of a heading and any proper nouns.
                Everything else stays lowercase.
              </p>

              <div className={styles.examplesGrid}>
                <div className={styles.exampleGood}>
                  <div className={styles.exampleLabelGood}>
                    <CheckIcon size={14} /> Correct
                  </div>
                  <div className={styles.exampleText}>
                    What Cosilico does<br />
                    How RAC encodes tax law<br />
                    Getting started with the API<br />
                    Why microsimulation matters
                  </div>
                </div>
                <div className={styles.exampleBad}>
                  <div className={styles.exampleLabelBad}>
                    <XIcon size={14} /> Incorrect
                  </div>
                  <div className={styles.exampleText}>
                    What Cosilico Does<br />
                    How RAC Encodes Tax Law<br />
                    Getting Started With The API<br />
                    Why Microsimulation Matters
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Proper nouns stay capitalized</h3>
              <p className={styles.ruleDescription}>
                Brand names, acronyms, and proper nouns keep their capitalization.
              </p>

              <div className={styles.examplesGrid}>
                <div className={styles.exampleGood}>
                  <div className={styles.exampleLabelGood}>
                    <CheckIcon size={14} /> Correct
                  </div>
                  <div className={styles.exampleText}>
                    How AI affects income distribution<br />
                    Validating against PolicyEngine<br />
                    US federal tax calculations<br />
                    Building with Claude Code
                  </div>
                </div>
                <div className={styles.exampleBad}>
                  <div className={styles.exampleLabelBad}>
                    <XIcon size={14} /> Incorrect
                  </div>
                  <div className={styles.exampleText}>
                    How ai affects income distribution<br />
                    Validating against policyengine<br />
                    Us federal tax calculations<br />
                    Building with claude code
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Where this applies</h3>
              <p className={styles.ruleDescription}>
                Use sentence case consistently across all content:
              </p>
              <ul style={{ color: "var(--color-muted)", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Page titles and headings</li>
                <li>Navigation labels</li>
                <li>Button text</li>
                <li>Form labels</li>
                <li>Documentation titles</li>
                <li>Blog post titles</li>
                <li>Error messages</li>
              </ul>
            </div>
          </section>

          {/* Voice & Tone */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Voice and tone</h2>
            <p className={styles.sectionIntro}>
              Cosilico's voice is technical but accessible. We explain complex concepts
              clearly without dumbing them down.
            </p>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Be direct</h3>
              <p className={styles.ruleDescription}>
                Get to the point. Avoid filler words and unnecessary qualifiers.
              </p>

              <div className={styles.examplesGrid}>
                <div className={styles.exampleGood}>
                  <div className={styles.exampleLabelGood}>
                    <CheckIcon size={14} /> Direct
                  </div>
                  <div className={styles.exampleText}>
                    RAC computes taxes 50x faster than Python.
                  </div>
                </div>
                <div className={styles.exampleBad}>
                  <div className={styles.exampleLabelBad}>
                    <XIcon size={14} /> Wordy
                  </div>
                  <div className={styles.exampleText}>
                    RAC is able to compute taxes in a way that is approximately 50 times faster than Python.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Be precise</h3>
              <p className={styles.ruleDescription}>
                Use specific numbers and concrete examples. Avoid vague claims.
              </p>

              <div className={styles.examplesGrid}>
                <div className={styles.exampleGood}>
                  <div className={styles.exampleLabelGood}>
                    <CheckIcon size={14} /> Precise
                  </div>
                  <div className={styles.exampleText}>
                    Validated against 50,000 tax returns with 99.2% accuracy.
                  </div>
                </div>
                <div className={styles.exampleBad}>
                  <div className={styles.exampleLabelBad}>
                    <XIcon size={14} /> Vague
                  </div>
                  <div className={styles.exampleText}>
                    Extensively validated with very high accuracy.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Be neutral</h3>
              <p className={styles.ruleDescription}>
                Present facts objectively. Avoid superlatives and marketing speak.
              </p>

              <div className={styles.examplesGrid}>
                <div className={styles.exampleGood}>
                  <div className={styles.exampleLabelGood}>
                    <CheckIcon size={14} /> Neutral
                  </div>
                  <div className={styles.exampleText}>
                    RAC encodes tax law as executable rules.
                  </div>
                </div>
                <div className={styles.exampleBad}>
                  <div className={styles.exampleLabelBad}>
                    <XIcon size={14} /> Hyperbolic
                  </div>
                  <div className={styles.exampleText}>
                    RAC revolutionizes tax computation with groundbreaking AI.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terminology */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Terminology</h2>
            <p className={styles.sectionIntro}>
              Use these terms consistently across all Cosilico content.
            </p>

            <div className={styles.termList}>
              <div className={styles.termItem}>
                <span className={styles.termName}>RAC</span>
                <span className={styles.termDesc}>Rules as Code. The DSL for encoding tax and benefit law.</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>AutoRAC</span>
                <span className={styles.termDesc}>AI-assisted statute encoding system.</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>microplex</span>
                <span className={styles.termDesc}>Multi-survey fusion for synthetic microdata. Lowercase.</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>Cosilico</span>
                <span className={styles.termDesc}>The company. Capital C, no "the" before it.</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>encoding</span>
                <span className={styles.termDesc}>Converting statute text to RAC code. Not "translation".</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>validation</span>
                <span className={styles.termDesc}>Testing against oracles (PolicyEngine, TAXSIM).</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.termName}>microsimulation</span>
                <span className={styles.termDesc}>One word, no hyphen.</span>
              </div>
            </div>

            <div className={styles.tipBox}>
              <div className={styles.tipTitle}>
                <LightningIcon size={16} /> Pro tip
              </div>
              <div className={styles.tipText}>
                When in doubt about capitalization, check how the term appears in official
                documentation or source code. <code>microplex</code> is lowercase because
                that's how it appears in the package name.
              </div>
            </div>
          </section>

          {/* Numbers & Formatting */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Numbers and formatting</h2>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Numbers</h3>
              <div className={styles.termList}>
                <div className={styles.termItem}>
                  <span className={styles.termName}>1-9</span>
                  <span className={styles.termDesc}>Spell out: "three variables", "five iterations"</span>
                </div>
                <div className={styles.termItem}>
                  <span className={styles.termName}>10+</span>
                  <span className={styles.termDesc}>Use numerals: "50 states", "100 test cases"</span>
                </div>
                <div className={styles.termItem}>
                  <span className={styles.termName}>Large numbers</span>
                  <span className={styles.termDesc}>Use commas: "1,000,000 households" or "1M households"</span>
                </div>
                <div className={styles.termItem}>
                  <span className={styles.termName}>Percentages</span>
                  <span className={styles.termDesc}>Use numerals with symbol: "99.2% accuracy"</span>
                </div>
                <div className={styles.termItem}>
                  <span className={styles.termName}>Money</span>
                  <span className={styles.termDesc}>Use $ with numerals: "$15 tolerance", "$1.2M revenue"</span>
                </div>
              </div>
            </div>

            <div className={styles.rule}>
              <h3 className={styles.ruleTitle}>Code references</h3>
              <p className={styles.ruleDescription}>
                Use <code style={{ background: "var(--color-surface)", padding: "2px 6px", borderRadius: "4px" }}>inline code</code> for
                variable names, function names, file paths, and terminal commands.
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
