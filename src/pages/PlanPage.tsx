import React from "react";

export default function PlanPage() {
  return (
    <div className="plan-page">
      {/* Plan Hero */}
      <section className="plan-hero">
        <div className="container">
          <h1 className="section-title">Business Plan</h1>
          <p className="section-subtitle">
            Market research, revenue projections, and comparable analysis
          </p>
        </div>
      </section>

      {/* Market Size */}
      <section className="plan-section">
        <div className="container">
          <h2 className="plan-section-title">Market Opportunity</h2>
          <div className="market-grid">
            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">📊</span>
                <h3>Tax Software</h3>
              </div>
              <div className="market-size">$90B → $215B</div>
              <p className="market-growth">11.4% CAGR through 2032</p>
              <p className="market-detail">
                Cloud-based solutions now 61% of revenue. Intuit alone:
                $16.3B revenue, TurboTax: $4.4B. API infrastructure layer is
                the white space.
              </p>
              <a
                href="https://www.mordorintelligence.com/industry-reports/tax-software-market"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Mordor Intelligence
              </a>
            </div>

            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">🏢</span>
                <h3>Benefits Administration</h3>
              </div>
              <div className="market-size">$2.5B → $4B</div>
              <p className="market-growth">10.6% CAGR through 2033</p>
              <p className="market-detail">
                Cloud deployment: 67.6% of revenue. SMBs growing 13.6%/year
                thanks to Gusto, Rippling, Justworks. Eligibility
                calculations are core to every platform.
              </p>
              <a
                href="https://www.verifiedmarketresearch.com/product/employee-benefits-administration-software-market/"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Verified Market Research
              </a>
            </div>

            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">🤖</span>
                <h3>AI Infrastructure</h3>
              </div>
              <div className="market-size">$46B → $356B</div>
              <p className="market-growth">29.1% CAGR through 2032</p>
              <p className="market-detail">
                AI agents market alone: $47B by 2030. Function calling and
                tool use now standard. Every AI assistant needs reliable
                domain tools.
              </p>
              <a
                href="https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Fortune Business Insights
              </a>
            </div>

            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">🏛️</span>
                <h3>Corporate Tax Software</h3>
              </div>
              <div className="market-size">$12.9B → $24.1B</div>
              <p className="market-growth">8.9% CAGR through 2030</p>
              <p className="market-detail">
                Large enterprises: 52.87% of market. API-based ERP
                integrations accelerating. Corporate tax projection for M&A,
                restructuring, expansion.
              </p>
              <a
                href="https://www.verifiedmarketresearch.com/product/corporate-tax-software-market/"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Verified Market Research
              </a>
            </div>

            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">🌍</span>
                <h3>Global Tax Tech</h3>
              </div>
              <div className="market-size">$18.5B → $36.7B</div>
              <p className="market-growth">12.1% CAGR through 2030</p>
              <p className="market-detail">
                B2B cross-border payments: $31.6T → $50T by 2032. 45% of
                jurisdictions expect tax complexity to increase (TMF Group
                2024).
              </p>
              <a
                href="https://www.marketsandmarkets.com/Market-Reports/tax-tech-market-28373824.html"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: MarketsandMarkets
              </a>
            </div>

            <div className="market-card">
              <div className="market-header">
                <span className="market-icon">🗃️</span>
                <h3>Data Enrichment</h3>
              </div>
              <div className="market-size">$2.4B → $4.6B</div>
              <p className="market-growth">10.1% CAGR through 2030</p>
              <p className="market-detail">
                Clearbit ($31.5M ARR) acquired by HubSpot. ZoomInfo public
                at $10B+. Household attribute prediction is our data
                enrichment play.
              </p>
              <a
                href="https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report"
                className="market-source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: Grand View Research
              </a>
            </div>
          </div>

          {/* International Expansion */}
          <div className="expansion-highlight">
            <h3>Proven Track Record</h3>
            <div className="expansion-grid">
              <div className="expansion-item">
                <span className="expansion-flag">🇺🇸</span>
                <div className="expansion-status status-live">Live</div>
                <p>US federal + 50 states</p>
              </div>
              <div className="expansion-item">
                <span className="expansion-flag">🇬🇧</span>
                <div className="expansion-status status-live">Live</div>
                <p>UK tax & benefits</p>
              </div>
              <div className="expansion-item">
                <span className="expansion-flag">🇨🇦</span>
                <div className="expansion-status status-progress">In Progress</div>
                <p>Canada (50% built)</p>
              </div>
              <div className="expansion-item">
                <span className="expansion-flag">🌐</span>
                <div className="expansion-status status-planned">AI-Accelerated</div>
                <p>AI-assisted rule encoding for rapid expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparable Companies */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Comparable Companies</h2>
          <p className="plan-section-subtitle">
            API infrastructure companies command premium valuations.
            Policy/tax APIs have proven billion-dollar outcomes.
          </p>
          <div className="comparables-grid">
            <div className="comparable-card">
              <div className="comparable-logo">💳</div>
              <h3>
                <a
                  href="https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avalara
                </a>
              </h3>
              <div className="comparable-metric">
                <span className="metric-value">$8.4B</span>
                <span className="metric-label">Acquisition (2022)</span>
              </div>
              <p>
                Sales tax API. $800M+ ARR at acquisition. 30,000+ customers,
                50B+ transactions/year.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> Proves tax calculation APIs
                can be massive businesses. They do sales tax; we do income
                tax + benefits + prediction.
              </p>
            </div>

            <div className="comparable-card">
              <div className="comparable-logo">🔗</div>
              <h3>
                <a
                  href="https://techcrunch.com/2025/04/03/fintech-plaid-raises-575m-at-6-1b-valuation-says-it-will-not-go-public-in-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plaid
                </a>
              </h3>
              <div className="comparable-metric">
                <span className="metric-value">$6.1B</span>
                <span className="metric-label">Valuation (2025)</span>
              </div>
              <p>
                Financial data API.{" "}
                <a
                  href="https://sacra.com/c/plaid/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  $390M ARR
                </a>
                , growing 27% YoY. 80% gross margins. ~16x ARR multiple.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> API infrastructure for
                fintech. We're API infrastructure for policy calculations.
                Similar GTM and customer base.
              </p>
            </div>

            <div className="comparable-card">
              <div className="comparable-logo">💰</div>
              <h3>
                <a
                  href="https://fortune.com/2025/06/09/gusto-200-million-plus-tender-offer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gusto
                </a>
              </h3>
              <div className="comparable-metric">
                <span className="metric-value">$9.3B</span>
                <span className="metric-label">Valuation (2025)</span>
              </div>
              <p>
                Payroll + benefits platform.{" "}
                <a
                  href="https://sacra.com/c/gusto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  300,000+ businesses
                </a>
                . 401(k) grew 50% YoY, financial services 140% YoY.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> They need eligibility
                calculations for benefits. We can power the calculations
                layer for Gusto and competitors.
              </p>
            </div>

            <div className="comparable-card">
              <div className="comparable-logo">⚡</div>
              <h3>
                <a
                  href="https://siliconangle.com/2024/04/22/hr-software-maker-rippling-closes-200m-round-13-5b-valuation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rippling
                </a>
              </h3>
              <div className="comparable-metric">
                <span className="metric-value">$13.5B</span>
                <span className="metric-label">Valuation (2024)</span>
              </div>
              <p>
                Unified HR platform. 80 countries for EOR. Combines IT,
                spend, HR. Cloud-native, API-first.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> Global HR requires tax
                calculations across jurisdictions. Multi-country support is
                our roadmap advantage.
              </p>
            </div>

            <div className="comparable-card">
              <div className="comparable-logo">📧</div>
              <h3>Twilio</h3>
              <div className="comparable-metric">
                <span className="metric-value">$10B+</span>
                <span className="metric-label">Peak Market Cap</span>
              </div>
              <p>
                Communications API. Defined the API-first category. Started
                with startups, scaled to enterprise.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> Same playbook—sell to
                developers first, grow with customers, land enterprise
                later.
              </p>
            </div>

            <div className="comparable-card">
              <div className="comparable-logo">💵</div>
              <h3>Stripe</h3>
              <div className="comparable-metric">
                <span className="metric-value">$50B+</span>
                <span className="metric-label">Valuation</span>
              </div>
              <p>
                Payments API. ~$1T+ in transaction volume. Developer-first
                GTM. Infrastructure layer.
              </p>
              <p className="comparable-relevance">
                <strong>Why relevant:</strong> The template for
                developer-first infrastructure. We're "Stripe for policy
                calculations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="plan-section">
        <div className="container">
          <h2 className="plan-section-title">Competitive Landscape</h2>
          <p className="plan-section-subtitle">
            No one combines income tax calculation + benefits eligibility +
            prediction in a single API
          </p>
          <div className="competitive-table-container">
            <table className="competitive-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Column Tax</th>
                  <th>Symmetry</th>
                  <th>Benefit Kitchen</th>
                  <th className="highlight-col">Cosilico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Income tax calculation</td>
                  <td className="partial">For filing</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Income tax filing</td>
                  <td className="yes">Yes</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                </tr>
                <tr>
                  <td>Payroll tax (FICA, etc.)</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Benefits eligibility</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="partial">
                    <a
                      href="https://benefitkitchen.com/currently-serving"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      7 states
                    </a>
                  </td>
                  <td className="yes">50 states</td>
                </tr>
                <tr>
                  <td>Attribute prediction</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Microsimulation</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Open source</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="no">-</td>
                  <td className="yes">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="competitive-notes">
            <div className="competitive-note">
              <h4>
                <a
                  href="https://www.crunchbase.com/organization/column-tax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Column Tax
                </a>{" "}
                ($26.8M raised)
              </h4>
              <p>
                Embedded tax <em>filing</em> API. Chime, NerdWallet
                customers.{" "}
                <a
                  href="https://www.column.tax/blog/will-ai-agents-help-file-your-taxes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Their blog
                </a>
                : "Today's LLMs cannot 'do taxes' on their own because tax
                calculations require 100% correctness. Today's models
                hallucinate." — validates our thesis.
              </p>
            </div>
            <div className="competitive-note">
              <h4>
                <a
                  href="https://www.symmetry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Symmetry Software
                </a>{" "}
                (est. 1984)
              </h4>
              <p>
                Payroll tax engine.{" "}
                <a
                  href="https://www.symmetry.com/about-symmetry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  64M+ employees/year
                </a>
                . Wave, Netchex customers. Payroll taxes only—not income tax
                or benefits.
              </p>
            </div>
            <div className="competitive-note">
              <h4>
                <a
                  href="https://benefitkitchen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Benefit Kitchen
                </a>
              </h4>
              <p>
                Benefits eligibility screening.{" "}
                <a
                  href="https://benefitkitchen.com/currently-serving"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  18 programs in 7 states
                </a>
                . No tax calculations. Healthcare and nonprofit focus.
              </p>
            </div>
            <div className="competitive-note">
              <h4>Rippling, Gusto, ADP</h4>
              <p>
                Build payroll tax in-house. Potential customers for benefits
                eligibility + income tax projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Revenue Model</h2>
          <div className="revenue-grid">
            <div className="revenue-stream">
              <div className="revenue-header">
                <h3>API Usage</h3>
                <span className="revenue-tier">SMB + Startups</span>
              </div>
              <div className="revenue-pricing">$0.001 - $0.01 per call</div>
              <ul>
                <li>Self-serve signup, credit card billing</li>
                <li>Free tier for development</li>
                <li>Usage-based scaling</li>
                <li>Monthly plans with included volume</li>
              </ul>
              <div className="revenue-example">
                <strong>Example:</strong> Fintech startup with 1M API
                calls/month = $5,000-10,000/month
              </div>
            </div>

            <div className="revenue-stream revenue-highlight">
              <div className="revenue-header">
                <h3>Enterprise Data Enrichment</h3>
                <span className="revenue-tier">Large B2B</span>
              </div>
              <div className="revenue-pricing">$0.10 - $1.00 per record</div>
              <ul>
                <li>Predict 200+ attributes per customer</li>
                <li>Batch processing or real-time</li>
                <li>Annual update subscription</li>
                <li>Custom model training available</li>
              </ul>
              <div className="revenue-example">
                <strong>Example:</strong> Grocery chain with 10M customers @
                $0.50/record = <strong>$5M</strong> + $500K/year updates
              </div>
            </div>

            <div className="revenue-stream">
              <div className="revenue-header">
                <h3>Enterprise Platform</h3>
                <span className="revenue-tier">Large Companies</span>
              </div>
              <div className="revenue-pricing">$100K - $1M+ annually</div>
              <ul>
                <li>Unlimited API access</li>
                <li>99.9% uptime SLA</li>
                <li>&lt;100ms latency guarantee</li>
                <li>Custom jurisdiction modules</li>
                <li>Dedicated support + onboarding</li>
              </ul>
              <div className="revenue-example">
                <strong>Example:</strong> Tax prep company = $500K/year for
                full platform access
              </div>
            </div>

            <div className="revenue-stream">
              <div className="revenue-header">
                <h3>Microsimulation Compute</h3>
                <span className="revenue-tier">Government + Research</span>
              </div>
              <div className="revenue-pricing">$50K - $500K per engagement</div>
              <ul>
                <li>Population-scale policy modeling</li>
                <li>100M+ household simulations</li>
                <li>Custom reform analysis</li>
                <li>Audit-ready documentation</li>
              </ul>
              <div className="revenue-example">
                <strong>Example:</strong> State legislature fiscal analysis
                = $200K project
              </div>
            </div>

            <div className="revenue-stream">
              <div className="revenue-header">
                <h3>Policy Development Services</h3>
                <span className="revenue-tier">Foundations + Nonprofits</span>
              </div>
              <div className="revenue-pricing">$25K - $250K per policy module</div>
              <ul>
                <li>Encode new tax/benefit programs</li>
                <li>AI-assisted rule extraction from legislation</li>
                <li>Open source contribution (improves core platform)</li>
                <li>Grant-fundable by foundations</li>
              </ul>
              <div className="revenue-example">
                <strong>Anchor customer:</strong> PolicyEngine (nonprofit)
                receives grants for policy modeling → outsources encoding to
                Cosilico at market rates. Proven pipeline: multiple grants
                already secured for model expansion.
              </div>
              <div className="revenue-validation">
                <strong>Precedent:</strong> Mozilla Corp/Foundation,
                Canonical/Ubuntu, Red Hat/Fedora all use this
                nonprofit↔commercial structure.{" "}
                <a
                  href="https://salsa.digital/expertise/rules-as-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salsa Digital
                </a>{" "}
                and{" "}
                <a
                  href="https://openfisca.org/en/association/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenFisca Association
                </a>{" "}
                members charge for Rules-as-Code implementation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Revenue Projections</h2>
          <p className="plan-section-subtitle">
            Conservative path to $75M ARR; aggressive path to unicorn status
          </p>
          <div className="projections-container">
            <div className="projection-table">
              <h3>Conservative Path</h3>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>ARR</th>
                    <th>Customers</th>
                    <th>Key Milestones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Y1</td>
                    <td>$500K</td>
                    <td>5-10</td>
                    <td>Product-market fit, first enterprise deal</td>
                  </tr>
                  <tr>
                    <td>Y2</td>
                    <td>$3M</td>
                    <td>50+</td>
                    <td>Self-serve launch, 2-3 enterprise deals</td>
                  </tr>
                  <tr>
                    <td>Y3</td>
                    <td>$10M</td>
                    <td>200+</td>
                    <td>Enterprise sales team, intl expansion</td>
                  </tr>
                  <tr>
                    <td>Y4</td>
                    <td>$30M</td>
                    <td>500+</td>
                    <td>Platform status, AI lab partnerships</td>
                  </tr>
                  <tr>
                    <td>Y5</td>
                    <td>$75M</td>
                    <td>1000+</td>
                    <td>Category leader</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="projection-table projection-highlight">
              <h3>Aggressive Path (Unicorn)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>ARR</th>
                    <th>Valuation</th>
                    <th>Key Milestones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Y1</td>
                    <td>$1M</td>
                    <td>$10M (Seed)</td>
                    <td>10 design partners, prove accuracy</td>
                  </tr>
                  <tr>
                    <td>Y2</td>
                    <td>$5M</td>
                    <td>$50M (A)</td>
                    <td>100 customers, first $1M+ deal</td>
                  </tr>
                  <tr>
                    <td>Y3</td>
                    <td>$20M</td>
                    <td>$200M (B)</td>
                    <td>Enterprise traction, 10+ countries</td>
                  </tr>
                  <tr>
                    <td>Y4</td>
                    <td>$60M</td>
                    <td>$500M</td>
                    <td>AI lab integrations</td>
                  </tr>
                  <tr className="highlight-row">
                    <td>Y5</td>
                    <td>$150M</td>
                    <td><strong>$1B+</strong></td>
                    <td>Standard infrastructure for policy AI</td>
                  </tr>
                </tbody>
              </table>
              <p className="projection-note">
                $150M ARR × 7-10x multiple = $1B+ valuation
              </p>
            </div>
          </div>

          <div className="projection-assumptions">
            <h3>Key Assumptions</h3>
            <div className="assumptions-grid">
              <div className="assumption">
                <strong>API Pricing</strong>
                <p>
                  Comparable to Plaid ($0.02-0.30/call) and Avalara (similar
                  per-transaction pricing)
                </p>
              </div>
              <div className="assumption">
                <strong>Enterprise Deal Size</strong>
                <p>
                  Based on Avalara ARPU ($27K/customer avg) and Gusto
                  enterprise pricing
                </p>
              </div>
              <div className="assumption">
                <strong>Data Enrichment</strong>
                <p>
                  Clearbit charges $12K+/year; ZoomInfo $15K+. Our
                  per-record model scales better for large enterprises.
                </p>
              </div>
              <div className="assumption">
                <strong>Growth Rate</strong>
                <p>
                  Plaid grew 27% YoY at scale. Twilio grew 40-60% in early
                  years. We assume 3-5x annual growth years 1-3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="plan-section">
        <div className="container">
          <h2 className="plan-section-title">The Ask</h2>
          <div className="ask-container">
            <div className="ask-amount">
              <span className="ask-label">Seed Round</span>
              <span className="ask-value">$3-5M</span>
            </div>
            <div className="ask-details">
              <div className="ask-use">
                <h3>Use of Funds</h3>
                <div className="fund-allocation">
                  <div className="fund-item">
                    <div className="fund-bar" style={{ width: "50%" }}></div>
                    <span className="fund-label">50% Engineering</span>
                    <span className="fund-desc">
                      Core platform, API, infrastructure
                    </span>
                  </div>
                  <div className="fund-item">
                    <div className="fund-bar" style={{ width: "25%" }}></div>
                    <span className="fund-label">25% Data/ML</span>
                    <span className="fund-desc">
                      Prediction models, microdata enhancement
                    </span>
                  </div>
                  <div className="fund-item">
                    <div className="fund-bar" style={{ width: "15%" }}></div>
                    <span className="fund-label">15% Go-to-Market</span>
                    <span className="fund-desc">
                      First sales hire, design partner acquisition
                    </span>
                  </div>
                  <div className="fund-item">
                    <div className="fund-bar" style={{ width: "10%" }}></div>
                    <span className="fund-label">10% Operations</span>
                    <span className="fund-desc">Legal, finance, ops</span>
                  </div>
                </div>
              </div>
              <div className="ask-milestones">
                <h3>Milestones to Series A</h3>
                <ul>
                  <li>10+ paying customers</li>
                  <li>$1M+ ARR</li>
                  <li>1-2 enterprise deals ($500K+)</li>
                  <li>Proven accuracy at scale</li>
                  <li>Multi-country coverage (US, UK, Canada)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Investors */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Target Investors</h2>
          <p className="plan-section-subtitle">
            VCs with proven thesis alignment: open source, fintech
            infrastructure, and AI tools
          </p>
          <div className="investors-grid">
            <div className="investor-card investor-tier-1">
              <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
              <div className="investor-header">
                <h3>OSS Capital</h3>
                <span className="investor-focus">Open Source</span>
              </div>
              <p className="investor-thesis">
                <a
                  href="https://oss.capital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  First and only VC exclusively dedicated to COSS
                </a>{" "}
                (commercial open source). Backed by founders of GitLab,
                Elastic, Red Hat—collectively $300B+ in value created.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> Our open-source-first model is exactly
                their thesis. Strong pattern match with successful COSS
                companies.
              </div>
            </div>

            <div className="investor-card investor-tier-1">
              <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
              <div className="investor-header">
                <h3>Ribbit Capital</h3>
                <span className="investor-focus">Fintech</span>
              </div>
              <p className="investor-thesis">
                $12B AUM, pure fintech focus. Early backers of Robinhood,
                Coinbase, Affirm, Brex, Nubank. 35 unicorns, 15 IPOs.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> We're infrastructure for the fintech
                companies they already back. Portfolio synergies are clear.
              </div>
            </div>

            <div className="investor-card investor-tier-1">
              <div className="investor-tier-badge">Tier 1: Thesis Alignment</div>
              <div className="investor-header">
                <h3>QED Investors</h3>
                <span className="investor-focus">Fintech Infrastructure</span>
              </div>
              <p className="investor-thesis">
                Founded by Capital One founder. Early in Credit Karma,
                Nubank, Klarna, SoFi. Deep fintech infrastructure expertise.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> Strong thesis on "picks and shovels"
                for fintech. We're infrastructure for tax/benefits
                calculations.
              </div>
            </div>

            <div className="investor-card investor-tier-2">
              <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
              <div className="investor-header">
                <h3>a16z Infrastructure</h3>
                <span className="investor-focus">AI Infrastructure</span>
              </div>
              <p className="investor-thesis">
                $1.25B fund led by Martin Casado. Portfolio: Fivetran
                ($5.6B), dbt ($4.2B), ElevenLabs. Strong open source AI
                grants program.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> We're AI infrastructure for policy
                calculations. Open source ethos aligns with their grants
                program.
              </div>
            </div>

            <div className="investor-card investor-tier-2">
              <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
              <div className="investor-header">
                <h3>General Catalyst</h3>
                <span className="investor-focus">AI + Fintech</span>
              </div>
              <p className="investor-thesis">
                $30B AUM. Raised $8B in 2024. Focus on "applied AI" across
                fintech, healthcare, government. Launched Percepta for AI
                transformation.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> Our AI tools thesis aligns with their
                "applied AI" focus. Government angle matches Percepta's
                scope.
              </div>
            </div>

            <div className="investor-card investor-tier-2">
              <div className="investor-tier-badge">Tier 2: AI + Infrastructure</div>
              <div className="investor-header">
                <h3>Index Ventures</h3>
                <span className="investor-focus">Fintech + Open Source</span>
              </div>
              <p className="investor-thesis">
                $2.3B raised in 2024. Domain experts: Mark for fintech, Mike
                for open source. Portfolio: Revolut (40M users), Robinhood,
                Figma.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> We span both their fintech and open
                source verticals. Shardul Shah's infrastructure expertise
                relevant.
              </div>
            </div>

            <div className="investor-card investor-tier-3">
              <div className="investor-tier-badge">Tier 3: Seed Specialists</div>
              <div className="investor-header">
                <h3>First Round Capital</h3>
                <span className="investor-focus">Seed + Enterprise</span>
              </div>
              <p className="investor-thesis">
                Seed stage specialists. 545 companies, avg $3.8M seed
                rounds. Strong in enterprise, AI, fintech. Portfolio:
                Notion, Roblox, Square.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> Seed stage is perfect. Enterprise +
                fintech + AI clusters match our positioning.
              </div>
            </div>

            <div className="investor-card investor-tier-3">
              <div className="investor-tier-badge">Tier 3: Mission-Aligned</div>
              <div className="investor-header">
                <h3>Obvious Ventures</h3>
                <span className="investor-focus">World Positive</span>
              </div>
              <p className="investor-thesis">
                $1B+ AUM. "World Positive Capitalism" thesis. Founded by Ev
                Williams (Twitter, Medium). Climate + fintech focus. Beyond
                Meat, Diamond Foundry.
              </p>
              <div className="investor-fit">
                <strong>Fit:</strong> Policy simulation enables better
                governance. "Fintech for financial access" thesis aligns
                with benefits eligibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Team</h2>
          <div className="team-grid">
            <div className="team-member team-member-highlight">
              <div className="team-role">Founder & CEO</div>
              <h3 className="team-name">Max Ghenis</h3>
              <ul className="team-bio">
                <li>
                  Founded{" "}
                  <a
                    href="https://policyengine.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PolicyEngine
                  </a>{" "}
                  — models used by UK Treasury, US Congress
                </li>
                <li>Former Google data scientist</li>
                <li>MIT economics, UC Berkeley statistics</li>
                <li>
                  Led team that encoded US federal + 50 states + UK + Canada
                </li>
              </ul>
              <div className="team-links">
                <a
                  href="https://linkedin.com/in/maxghenis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/maxghenis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="team-member team-member-open">
              <div className="team-role">Co-founders</div>
              <h3 className="team-name">Hiring</h3>
              <ul className="team-bio">
                <li>
                  Potential co-founders from PolicyEngine team (proven
                  policy encoding expertise)
                </li>
                <li>Seeking: Systems engineer, ML engineer</li>
                <li>First priority post-funding</li>
              </ul>
              <div className="team-note">
                50+ open source contributors available for contract work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anticipated Objections */}
      <section className="plan-section">
        <div className="container">
          <h2 className="plan-section-title">
            Anticipated Objections & Responses
          </h2>
          <p className="plan-section-subtitle">
            Proactive answers to common VC concerns
          </p>
          <div className="objections-grid">
            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "Why can't AI just get better at tax calculations?"
              </div>
              <div className="objection-answer">
                <strong>The data proves it can't.</strong>{" "}
                <a
                  href="https://arxiv.org/abs/2309.09992"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Johns Hopkins research (SARA)
                </a>{" "}
                shows GPT-4 achieves only 67% accuracy on tax true/false
                questions (186/276) and only 76 of 98 scenarios within 10%
                of correct tax liability. Even if LLMs improve,
                deterministic tools will always be faster, auditable, and
                legally citable. LLMs will call tools—ours.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "TurboTax is a giant. Why won't they crush you?"
              </div>
              <div className="objection-answer">
                <strong>TurboTax doesn't have a public API.</strong> They're
                consumer-facing, not infrastructure. Intuit's business model
                is selling to end users, not enabling competitors. We're
                Stripe to their payment processor—they're complementary, not
                competitive.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "Is the open source model viable for enterprise revenue?"
              </div>
              <div className="objection-answer">
                <strong>Proven at scale.</strong>{" "}
                <a
                  href="https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-fourth-quarter-and-full-year-fiscal-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB ($1.7B)
                </a>
                ,{" "}
                <a
                  href="https://ir.elastic.co/news/news-details/2024/Elastic-Reports-Fourth-Quarter-and-Fiscal-2024-Financial-Results/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elastic ($1.3B)
                </a>
                ,{" "}
                <a
                  href="https://ir.gitlab.com/news/news-details/2024/GitLab-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitLab ($580M)
                </a>{" "}
                annual revenue, all built on open core.{" "}
                <a
                  href="https://oss.capital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSS Capital's
                </a>{" "}
                network has driven $300B+ in value. Open source builds trust
                with developers who become internal champions at
                enterprises.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "This seems technically complex. Can you execute?"
              </div>
              <div className="objection-answer">
                <strong>We've already done it.</strong> The founding team
                built PolicyEngine: 1M+ simulations, used by UK Treasury and
                US Congress, covering US federal + 50 states + UK + Canada.
                We know how to encode policy rules fast. Now we're
                rebuilding on modern infrastructure for commercial scale.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "What's your go-to-market? Enterprise sales are expensive."
              </div>
              <div className="objection-answer">
                <strong>Developer-first, land and expand.</strong> Free tier
                lets developers prototype. Usage-based pricing scales with
                customers. Self-serve signup captures SMBs. Enterprise sales
                only for $100K+ deals—not starting with expensive sales
                motions.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "Single founder risk?"
              </div>
              <div className="objection-answer">
                <strong>Actively hiring co-founders.</strong> Seed capital
                will enable founding engineer hires. PolicyEngine has 50+
                open source contributors—the community is the extended team.
                First priority post-funding: systems engineer + ML engineer.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "Is $3-5M enough runway?"
              </div>
              <div className="objection-answer">
                <strong>24 months to Series A milestones.</strong> Lean team
                of 5-7 people. No expensive infrastructure—cloud costs scale
                with usage. Clear path: 10 customers, $1M ARR, 1-2
                enterprise deals, multi-country coverage. Conservative burn
                rate.
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-question">
                <span className="objection-icon">?</span>
                "How do you handle law changes?"
              </div>
              <div className="objection-answer">
                <strong>Built into the system.</strong> Bi-temporal
                parameters track both effective dates and when we learned
                about changes. Git-versioned rules mean every change is
                auditable. AI-assisted encoding accelerates updates. This
                ongoing maintenance is a moat, not a burden.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="plan-section plan-section-alt">
        <div className="container">
          <h2 className="plan-section-title">Why Now?</h2>
          <div className="why-now-grid">
            <div className="why-now-card">
              <div className="why-now-icon">1</div>
              <h3>AI Tool Use is Standard</h3>
              <p>
                Function calling shipped in GPT-4 (2023), Claude 3 (2024).
                MCP protocol from Anthropic now adopted by Microsoft. Every
                AI assistant needs reliable tools—not hallucinations.
              </p>
            </div>
            <div className="why-now-card">
              <div className="why-now-icon">2</div>
              <h3>AI Financial Regulation Coming</h3>
              <p>
                SEC, CFPB, state regulators are all examining AI in
                financial services. Audit trails and explainability will be
                required. Our citation-based approach is regulation-ready.
              </p>
            </div>
            <div className="why-now-card">
              <div className="why-now-icon">3</div>
              <h3>Fintech Consolidation</h3>
              <p>
                Avalara acquired for $8.4B (2022). Clearbit by HubSpot.
                Credit Karma by Intuit ($8.1B). Acquirers are paying premium
                for tax and financial data infrastructure.
              </p>
            </div>
            <div className="why-now-card">
              <div className="why-now-icon">4</div>
              <h3>Open Source AI Stack Maturing</h3>
              <p>
                a16z, OSS Capital, Index all increasing open source
                investments. The Llama/Mistral ecosystem proves open models
                can win. Open infrastructure is the new standard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
