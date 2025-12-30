import React from "react";
import * as styles from "../styles/pricing.css";
import PageLayout from "../components/PageLayout";

export default function PricingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className={styles.pricingHero}>
        <h1>Pricing</h1>
        <p className={styles.pricingSubtitle}>
          Open source infrastructure. Pay for insights.
        </p>
      </section>

      {/* Philosophy */}
      <section className={styles.pricingPhilosophy}>
        <div className={styles.philosophyContent}>
          <h2>Everything is open source</h2>
          <p>
            The rules engine, the datasets, the generator—all free to download and run yourself.
            We're too close to superabundance to hold knowledge back.
          </p>
          <p>
            <strong>What you pay for:</strong> The insights we compute from that infrastructure.
            Predictions, simulations, and forecasts that require fresh data, calibrated models,
            and serious compute.
          </p>
        </div>
      </section>

      {/* API Pricing */}
      <section className={styles.pricingApis}>
        <h2>API pricing</h2>
        <p className={styles.sectionSubtitle}>Simple per-call pricing. No tiers, no complexity.</p>

        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Rules API</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.02</span>
                <span className={styles.priceUnit}>per call</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Calculate taxes and benefits for a complete household.
              Every formula traced to statute.
            </p>
            <code>POST /calculate</code>
            <ul className={styles.pricingFeatures}>
              <li>Federal + state income taxes</li>
              <li>100+ benefit programs</li>
              <li>Marginal rates & phase-outs</li>
              <li>Full audit trail to law</li>
            </ul>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Predictions API</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.05</span>
                <span className={styles.priceUnit}>per call</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Complete a partial household profile using locally-calibrated models.
            </p>
            <code>POST /predict</code>
            <ul className={styles.pricingFeatures}>
              <li>Impute missing attributes</li>
              <li>County-level calibration</li>
              <li>Real-time economic signals</li>
              <li>Probability distributions</li>
            </ul>
          </div>

          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.pricingCardHeader}>
              <h3>Full profile</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.06</span>
                <span className={styles.priceUnit}>per call</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Partial household in → complete financial profile + tax/benefit calculations out.
            </p>
            <code>POST /profile</code>
            <ul className={styles.pricingFeatures}>
              <li>Predictions + Rules combined</li>
              <li>Full financial picture</li>
              <li>Tax liability & effective rates</li>
              <li>Benefit eligibility & amounts</li>
            </ul>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Simulations API</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$1</span>
                <span className={styles.priceUnit}>per 1M household-reforms</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Run policy reforms at population scale. Distributional impacts in seconds.
            </p>
            <code>POST /simulate</code>
            <ul className={styles.pricingFeatures}>
              <li>Population-wide analysis</li>
              <li>Custom reform definitions</li>
              <li>Distributional breakdowns</li>
              <li>Budget scoring</li>
            </ul>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Law archive API</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.01</span>
                <span className={styles.priceUnit}>per query</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Structured US statute text with historical versions. All 54 titles of the US Code.
            </p>
            <code>GET /v1/sections/26/32</code>
            <ul className={styles.pricingFeatures}>
              <li>Full US Code (USLM XML → JSON)</li>
              <li>Historical versions (as_of dates)</li>
              <li>Full-text search</li>
              <li>State codes (CA, NY, TX+)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Pricing */}
      <section className={styles.pricingData}>
        <h2>Data downloads</h2>
        <p className={styles.sectionSubtitle}>
          All datasets available. Pay for bandwidth, not access.
        </p>

        <div className={styles.dataPricingBox}>
          <div className={styles.dataPrice}>
            <span className={styles.priceValue}>$0.10</span>
            <span className={styles.priceUnit}>per GB</span>
          </div>
          <div className={styles.dataDetails}>
            <p>
              Download calibrated microdata, synthetic populations, and economic forecasts.
              Updated monthly with CPS, daily with economic signals.
            </p>
            <ul>
              <li>National, state, and county-level datasets</li>
              <li>Real-time economic calibration</li>
              <li>Full variable documentation</li>
              <li>No quality tiers—everyone gets the same data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.pricingUseCases}>
        <h2>Who pays for what</h2>
        <div className={styles.useCaseTable}>
          <div className={`${styles.useCaseRow} ${styles.header}`}>
            <span>Customer</span>
            <span>Products</span>
            <span>Use case</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Benefit apps</span>
            <span>Full profile</span>
            <span>Partial user info → eligibility check</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Tax software</span>
            <span>Rules + Predictions</span>
            <span>Liability estimates from partial data</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>AI assistants</span>
            <span>Full profile</span>
            <span>"What benefits can I get?"</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Fintech</span>
            <span>Predictions</span>
            <span>Customer profile completion</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Marketers</span>
            <span>Full profile</span>
            <span>Segment by tax burden + benefits → WTP</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Researchers</span>
            <span>Simulations + Data</span>
            <span>Reform modeling at scale</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Government</span>
            <span>Simulations + Enterprise</span>
            <span>Bill scoring, outreach targeting</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Journalists</span>
            <span>Playground + Rules</span>
            <span>Fact-checking, embedded calculators</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Legal tech</span>
            <span>Law archive</span>
            <span>Contract analysis, compliance tools</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>AI companies</span>
            <span>Law archive + rules</span>
            <span>RAG for legal assistants</span>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className={styles.pricingEnterprise}>
        <div className={styles.enterpriseBox}>
          <h2>Enterprise</h2>
          <p>
            Custom contracts for SLAs, support, and dedicated infrastructure.
            Same unit pricing—just with guarantees.
          </p>
          <a href="mailto:hello@cosilico.ai" className={styles.btnPrimary}>
            Talk to us
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.pricingCta}>
        <h2>Start building</h2>
        <p>Pay-as-you-go. No minimums, no commitments.</p>
        <div className={styles.ctaButtons}>
          <a href="https://docs.cosilico.ai" className={styles.btnPrimary}>
            Get API key
          </a>
          <a href="/playground" className={styles.btnSecondary}>
            Try the playground
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
