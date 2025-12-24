import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/home.css";

export default function HomePage() {
  const [query, setQuery] = useState("What happens if we expand EITC by 50%?");
  const [showResult, setShowResult] = useState(false);

  const handleQuery = () => {
    setShowResult(true);
  };

  return (
    <PageLayout>
      <div className={styles.home}>
        {/* Hero */}
        <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Society, in silico.</p>
          <h1 className={styles.heroH1}>
            We simulate<br />
            the economy.
          </h1>
          <p className={styles.subtitle}>
            Household by household. Tax by tax. Policy by policy.<br />
            Open source infrastructure. APIs for the rest.
          </p>
          <div className={styles.heroCta}>
            <a href="https://docs.cosilico.ai" className={styles.btnPrimary}>
              Read the Docs
            </a>
            <a href="https://github.com/PolicyEngine" className={styles.btnSecondary}>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Live Query Demo */}
      <section className={styles.demo}>
        <div className={styles.demoContainer}>
          <div className={styles.demoInputGroup}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResult(false);
              }}
              placeholder="Ask the simulation..."
              className={styles.demoInput}
            />
            <button onClick={handleQuery} className={styles.demoButton}>
              Query
            </button>
          </div>
          {showResult && (
            <div className={styles.demoResult}>
              <div className={styles.resultStat}>
                <span className={styles.statValue}>$147B</span>
                <span className={styles.statLabel}>10-year cost</span>
              </div>
              <div className={styles.resultStat}>
                <span className={styles.statValue}>43M</span>
                <span className={styles.statLabel}>households affected</span>
              </div>
              <div className={styles.resultStat}>
                <span className={styles.statValue}>-2.1pp</span>
                <span className={styles.statLabel}>poverty reduction</span>
              </div>
              <div className={styles.resultMeta}>
                <span className={styles.demoNote}>Sample output — API coming soon</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Offer */}
      <section className={styles.products}>
        <h2 className={styles.productsH2}>Five APIs. One simulation.</h2>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3 className={styles.productCardH3}>Rules</h3>
            <p className={styles.productCardP}>
              Calculate taxes and benefits for any household.
              Every formula traced to statute.
            </p>
            <code className={styles.productCardCode}>cosilico.calculate(<br/>&nbsp;&nbsp;household<br/>)</code>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v9l6 3" />
              </svg>
            </div>
            <h3 className={styles.productCardH3}>Data</h3>
            <p className={styles.productCardP}>
              Synthetic populations calibrated to reality.
              Predict attributes you don't observe.
            </p>
            <code className={styles.productCardCode}>cosilico.predict(<br/>&nbsp;&nbsp;partial_household<br/>)</code>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className={styles.productCardH3}>Scenarios</h3>
            <p className={styles.productCardP}>
              Run policy reforms at population scale.
              Distributional impacts in seconds.
            </p>
            <code className={styles.productCardCode}>cosilico.simulate(<br/>&nbsp;&nbsp;reform,<br/>&nbsp;&nbsp;population<br/>)</code>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
                <path d="M3 12h2M19 12h2" />
              </svg>
            </div>
            <h3 className={styles.productCardH3}>Full Profile</h3>
            <p className={styles.productCardP}>
              Partial household in, complete financial profile out.
              Predictions plus calculations combined.
            </p>
            <code className={styles.productCardCode}>cosilico.profile(<br/>&nbsp;&nbsp;partial_household<br/>)</code>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                <path d="M8 7h8M8 11h8M8 15h5" />
              </svg>
            </div>
            <h3 className={styles.productCardH3}>Law Archive</h3>
            <p className={styles.productCardP}>
              Structured US statute text with historical versions.
              All 54 titles of the US Code.
            </p>
            <code className={styles.productCardCode}>cosilico.statute(<br/>&nbsp;&nbsp;"26/32"<br/>)</code>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className={styles.useCases}>
        <h2 className={styles.useCasesH2}>Who queries the simulation?</h2>
        <div className={styles.useCaseGrid}>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>Financial Services</h4>
            <p className={styles.useCaseP}>"How will rate changes affect default risk across our portfolio?"</p>
          </div>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>Government Agencies</h4>
            <p className={styles.useCaseP}>"What's the 10-year cost of this bill?"</p>
          </div>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>Asset Managers</h4>
            <p className={styles.useCaseP}>"Which sectors win under each candidate's tax plan?"</p>
          </div>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>AI Agents</h4>
            <p className={styles.useCaseP}>"Calculate this household's benefits eligibility."</p>
          </div>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>Retailers</h4>
            <p className={styles.useCaseP}>"How does SNAP expansion affect grocery spend by region?"</p>
          </div>
          <div className={styles.useCase}>
            <h4 className={styles.useCaseH4}>Researchers</h4>
            <p className={styles.useCaseP}>"Model the distributional impact of UBI."</p>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className={styles.openSource}>
        <div className={styles.osContent}>
          <h2 className={styles.openSourceH2}>Open infrastructure.<br />Commercial APIs.</h2>
          <p className={styles.osContentP}>
            The simulation engine is open source.
            Run it yourself, or use our hosted APIs for scale and support.
          </p>
          <div className={styles.osStats}>
            <div className={styles.osStat}>
              <span className={styles.osValue}>50+</span>
              <span className={styles.osLabel}>state tax systems</span>
            </div>
            <div className={styles.osStat}>
              <span className={styles.osValue}>100+</span>
              <span className={styles.osLabel}>benefit programs</span>
            </div>
            <div className={styles.osStat}>
              <span className={styles.osValue}>100M+</span>
              <span className={styles.osLabel}>synthetic households</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination */}
      <section className={styles.vision}>
        <h2 className={styles.visionH2}>The coordination problem</h2>
        <p className={styles.visionText}>
          Society is hard to optimize because nobody has a shared model to reason against.
          Congress debates with napkin math. Banks model risk without knowing policy changes.
          AI agents hallucinate eligibility rules.
        </p>
        <p className={styles.visionText}>
          <strong>Cosilico is the shared substrate.</strong> A simulation everyone can query,
          so decisions are grounded in the same reality.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaH2}>Query the simulation.</h2>
        <div className={styles.ctaButtons}>
          <a href="https://docs.cosilico.ai" className={styles.btnPrimary}>
            Get Started
          </a>
          <a href="mailto:hello@cosilico.ai" className={styles.btnSecondary}>
            Talk to Us
          </a>
        </div>
      </section>
    </div>
    </PageLayout>
  );
}
