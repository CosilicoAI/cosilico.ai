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
          Open source infrastructure. Pay for compute.
        </p>
      </section>

      {/* Philosophy */}
      <section className={styles.pricingPhilosophy}>
        <div className={styles.philosophyContent}>
          <h2>Everything is open source</h2>
          <p>
            The rules engine, the datasets, the synthetic microdata—all free to download
            from GitHub and R2. We're not gating knowledge.
          </p>
          <p>
            <strong>What you pay for:</strong> We run the infrastructure so you don't have to.
            API convenience, fresh data, and serious compute—without maintaining PolicyEngine
            or microplex yourself.
          </p>
          <p>
            <strong>$5 free credits</strong> to start. Enough to build and test your integration.
          </p>
        </div>
      </section>

      {/* API Pricing */}
      <section className={styles.pricingApis}>
        <h2>API Pricing</h2>
        <p className={styles.sectionSubtitle}>Simple per-call pricing. No tiers, no complexity.</p>

        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>/calculate</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.02</span>
                <span className={styles.priceUnit}>per household</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Deterministic tax and benefit calculations.
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
              <h3>/rules</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.001</span>
                <span className={styles.priceUnit}>base per query</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Structured US statute text with historical versions.
              Price scales with response size.
            </p>
            <code>GET /rules/26/32</code>
            <ul className={styles.pricingFeatures}>
              <li>Full US Code (USLM XML → JSON)</li>
              <li>Historical versions (as_of dates)</li>
              <li>Include children option</li>
              <li>State codes (CA, NY, TX+)</li>
            </ul>
          </div>

          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.pricingCardHeader}>
              <h3>/microsim</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.50</span>
                <span className={styles.priceUnit}>per 1K records</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Population-scale policy simulation. Distributional impacts in seconds.
            </p>
            <code>POST /microsim</code>
            <ul className={styles.pricingFeatures}>
              <li>Run on microplex populations</li>
              <li>Custom reform definitions</li>
              <li>Distributional breakdowns</li>
              <li>Budget scoring</li>
            </ul>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>/impute</h3>
              <div className={styles.price}>
                <span className={styles.priceValue}>$0.10</span>
                <span className={styles.priceUnit}>per 1K records</span>
              </div>
            </div>
            <p className={styles.pricingDescription}>
              Complete partial records using locally-calibrated models from microplex.
            </p>
            <code>POST /impute</code>
            <ul className={styles.pricingFeatures}>
              <li>Impute missing attributes</li>
              <li>County-level calibration</li>
              <li>Real-time economic signals</li>
              <li>Probability distributions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Free Data */}
      <section className={styles.pricingData}>
        <h2>Data: Free</h2>
        <p className={styles.sectionSubtitle}>
          All datasets free to download. No API needed.
        </p>

        <div className={styles.dataPricingBox}>
          <div className={styles.dataPrice}>
            <span className={styles.priceValue}>$0</span>
            <span className={styles.priceUnit}>via R2</span>
          </div>
          <div className={styles.dataDetails}>
            <p>
              We're open source and open access. Download directly from our public buckets.
              No authentication, no rate limits, no restrictions (except direct resale).
            </p>
            <ul>
              <li><strong>arch.cosilico.ai</strong> — Structured statute archive (US Code, CFR, state codes)</li>
              <li><strong>microplex.cosilico.ai</strong> — Synthetic microdata, updated daily with economic signals</li>
              <li>Full version history via R2 versioning</li>
              <li>Clone the repos, host it yourself, do whatever you want</li>
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
            <span>Endpoints</span>
            <span>Use case</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Benefit apps</span>
            <span>/calculate</span>
            <span>Eligibility checks from user input</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Tax software</span>
            <span>/calculate</span>
            <span>Liability estimates, what-if scenarios</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>AI assistants</span>
            <span>/calculate + /rules</span>
            <span>"What benefits can I get?" with citations</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Fintech</span>
            <span>/impute</span>
            <span>Customer profile completion for underwriting</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Quant funds</span>
            <span>microplex (free)</span>
            <span>Daily economic nowcasting data</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Researchers</span>
            <span>/microsim</span>
            <span>Reform modeling at population scale</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Government</span>
            <span>/microsim</span>
            <span>Bill scoring, outreach targeting</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>Legal tech</span>
            <span>/rules</span>
            <span>RAG for legal assistants, compliance tools</span>
          </div>
          <div className={`${styles.useCaseRow} ${styles.useCaseRowNotHeader}`}>
            <span>LLM companies</span>
            <span>/rules + arch (free)</span>
            <span>Training data, retrieval augmentation</span>
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
        <p>$5 free credits. No minimums, no commitments.</p>
        <div className={styles.ctaButtons}>
          <a href="/portal" className={styles.btnPrimary}>
            Get API Key
          </a>
          <a href="/playground" className={styles.btnSecondary}>
            Try the Playground
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
