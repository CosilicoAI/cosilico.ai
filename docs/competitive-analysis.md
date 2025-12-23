# Competitive Analysis: Cosilico

**Date:** December 22, 2025
**Status:** Research Summary

## Executive Summary

Cosilico enters a fragmented market where tax compliance software ($20B in 2024, growing at 12.9% CAGR) and benefit eligibility systems (healthcare segment alone: $563M in North America) are large but underserved by modern, AI-first APIs. Existing players focus on narrow use cases (sales tax automation, employee benefits verification), while open-source alternatives (OpenFisca, PolicyEngine) lack commercial infrastructure and multi-target compilation capabilities.

Cosilico's differentiation centers on three pillars:
1. **Multi-target compilation** (Python, JavaScript, WASM, SQL) vs. single-runtime competitors
2. **Legal citations as first-class features** vs. "black box" calculators
3. **AI-first design** (predictions API, partial data completion) vs. traditional form-based inputs

The addressable market spans tax software companies, fintech platforms, AI assistants, government agencies, researchers, and legal tech firms—all of whom currently patch together incomplete solutions.

---

## Market Size and Segments

### Tax Compliance Software Market

**Total Addressable Market:**
- **Tax compliance software:** $19.9B (2024) → $75.9B (2035) at 12.92% CAGR
- **Broader tax software market:** $20.5B (2025) → $37.1B (2030) at 12.55% CAGR
- **Sales tax & VAT compliance:** $7.6B (2024) → $17.3B (2033) at 9.5% CAGR

**Key Drivers:**
- Increasing global tax regulations
- Digital tax filing mandates
- Multi-jurisdiction compliance needs (especially for e-commerce and SaaS)
- AI adoption reducing manual errors by 40-62%

**Primary Market:** North America dominates, with the US expected to lead in 2025.

**Sources:**
- [Tax Compliance Software Market Development Status, 12.92% CAGR Analysis](https://www.openpr.com/news/4320947/tax-compliance-software-market-development-status-12-92-cagr)
- [Tax Tech Market Size, Trends | Industry Report 2030](https://www.marketsandmarkets.com/Market-Reports/tax-tech-market-28373824.html)
- [Tax Management Software Market to Surpass USD 50.84 Billion by 2032](https://www.globenewswire.com/news-release/2025/12/03/3199006/0/en/Tax-Management-Software-Market-to-Surpass-USD-50-84-Billion-by-2032-Owing-to-Rising-Multi-Jurisdiction-Compliance-Needs-SNS-Insider.html)

### Benefit Eligibility and Verification Market

**Healthcare Benefits Segment:**
- **Eligibility & benefits verification APIs:** $563M in North America (2024), representing 44% of global market
- **Employee benefits platform market:** Projected to double to $2B between 2024-2032
- **Broader benefits broker market:** $43B (2024)

**Government Benefits:**
- No unified market size data available; highly fragmented across federal, state, and local systems
- NYC Screening API and 18F/GSA Eligibility APIs Initiative represent early standardization efforts
- 79% of employers planning increased investment in benefits technology

**Applications:**
- Insurance eligibility verification
- Benefits coverage verification
- Claims management
- Patient access management
- Population health management
- Compliance monitoring (HIPAA, GDPR)

**Sources:**
- [Eligibility and Benefits Verification APIs Market Research Report 2033](https://growthmarketreports.com/report/eligibility-and-benefits-verification-apis-market)
- [How APIs are changing the game for benefit administrators](https://www.wtwco.com/en-us/insights/2023/01/how-apis-are-changing-the-game-for-benefit-administrators-employers-and-employees)
- [NYC Benefits Platform: Dataset and Screening API](https://www.nyc.gov/site/opportunity/portfolio/nyc-screening-api.page)

### Microsimulation and Policy Analysis Market

**Market Characteristics:**
- No commercial market size data available; dominated by government agencies and research institutions
- Key players: Urban Institute (ATTIS, DYNASIM3), Statistics Canada, CeMPA, GenIMPACT, NATSEM
- Software platforms: EUROMOD, UKMOD, SimPaths (open-source), JAS-mine, PolicyLinks (commercial)

**Barriers to Entry:**
- Requires significant resources to develop and maintain
- Typically built within policy institutions or research centers
- High technical and domain expertise requirements
- Limited commercial adoption beyond specialized consulting

**Sources:**
- [Centre for Microsimulation and Policy Analysis](https://www.microsimulation.ac.uk/)
- [Microsimulation - Urban Institute](https://www.urban.org/research/data-methods/data-analysis/quantitative-data-analysis/microsimulation)
- [Mastering Microsimulation for Policy Analysis](https://www.numberanalytics.com/blog/microsimulation-guide)

---

## Competitive Landscape

### Direct Competitors: Tax API Providers

#### **Avalara (Enterprise Focus)**

**Positioning:** Market leader for large enterprises with complex, multi-channel, international operations.

**Pricing:**
- No public pricing; volume-based, enterprise-focused
- Avalara License Guidance: $119+
- Sales Tax Registration: $403/location
- 1099 & W9: $0.45/TIN matching, $0.63+/1099 e-filing
- Davo (Avalara product): $54.99/month for daily POS sales tax collection + up to 3 state filings/month

**Strengths:**
- Extensive tax content database covering thousands of jurisdictions
- Managed services and robust exemption certificate management
- Broad connector ecosystem (though Shopify app shutting down April 2025)
- Strong brand recognition

**Weaknesses:**
- Opaque, unpredictable pricing requires sales meetings
- Recent shift away from SMBs toward enterprise only
- Older API infrastructure (not as developer-friendly as newer entrants)
- No support for income tax or benefit calculations

**Target Market:** Large enterprises, multi-channel retailers, international businesses.

**Sources:**
- [Avalara vs. Vertex: 2025 Comparison on Features & Support](https://taxcloud.com/blog/avalara-vs-vertex-comparison/)
- [Avalara vs TaxJar vs Vertex: Choosing the Right Tax Engine for SaaS and Ecommerce](https://www.glencoyne.com/guides/tax-engine-comparison)

---

#### **TaxJar (Startup/Scale-up Focus)**

**Positioning:** Modern, API-first sales tax automation for SaaS and e-commerce startups.

**Pricing:**
- **Transparent, tiered pricing** based on transaction volume
- Starter plan available
- Professional: $1,069/year
- Predictable costs appealing to Series A companies managing burn rate

**Strengths:**
- Developer-friendly modern API
- Transparent, predictable pricing
- Strong fit for startups hitting multi-state nexus
- Lower barrier to entry than Avalara/Vertex

**Weaknesses:**
- Limited to sales tax (no income tax or benefits)
- Less feature-rich than enterprise platforms
- May lack scale for complex global operations
- No predictive/AI capabilities

**Target Market:** Series A SaaS companies, e-commerce startups, developer teams valuing API simplicity.

**Sources:**
- [Avalara vs TaxJar vs Vertex: Choosing the Right Tax Engine](https://www.glencoyne.com/guides/tax-engine-comparison)
- [Best Sales Tax APIs for Ecommerce in 2026](https://taxcloud.com/blog/sales-tax-apis/)

---

#### **Vertex (Global Enterprise)**

**Positioning:** Highly scalable, feature-rich platform for global enterprises with complex tax requirements and dedicated tax departments.

**Pricing:**
- No public pricing; enterprise-focused
- Exemption certificate support: additional $1,200
- Pricing varies by features, support, training, customizations

**Strengths:**
- Extensive tax content database
- Robust automation for calculations, returns, exemption management
- Strong ERP integration
- Global compliance capabilities

**Weaknesses:**
- Not suitable for small/medium businesses
- Complex implementation
- Older REST v1 API sunsetting Dec 31, 2025 (requires migration)
- Opaque pricing

**Target Market:** Global enterprises, dedicated tax departments, complex ERP systems.

**Sources:**
- [Avalara vs. Vertex: Pros, Cons, and How They Stack Up](https://www.numeral.com/blog/avalara-vs-vertex)
- [Avalara vs TaxJar vs Vertex: Choosing the Right Tax Engine](https://www.glencoyne.com/guides/tax-engine-comparison)

---

### Emerging AI Tax Startups

#### **Kintsugi**

**Positioning:** AI-powered sales tax compliance automation.

**Traction:**
- Raised $18M (led by Vertex, valued at $150M post-money, up from $80M in Nov 2024)
- 2,400 customers
- $3M ARR (2024) → targeting $10M by end of 2025
- 0.1% churn rate

**Business Model:**
- Free sales tax liability calculations
- Paid filing services
- Auto-remit option for automatic filing

**Strengths:**
- Strong VC backing and rapid growth
- Low churn indicates product-market fit
- AI-driven automation reduces manual work

**Weaknesses:**
- Limited to sales tax compliance
- No income tax, benefit calculations, or policy simulation capabilities
- Focused on filing/compliance, not calculations or predictions

**Sources:**
- [AI sales tax startup Kintsugi has doubled its valuation in 6 months](https://techcrunch.com/2025/04/30/ai-sales-tax-startup-kintsugi-has-doubled-its-valuation-in-6-months/)

---

#### **April**

**Positioning:** AI-powered tax planning and filing platform with white-label solutions for embedded financial services.

**Offering:**
- Tax filing APIs
- Tax planning tools
- Tax estimation APIs
- Personalized tax-saving strategies

**Strengths:**
- White-label/embedded finance focus (API-first for platforms)
- User-friendly interface
- Automated calculations

**Weaknesses:**
- Limited public information on traction or funding
- Appears focused on individual tax filing vs. policy analysis or benefits

**Sources:**
- [april | Embedded tax solutions for modern financial platforms](https://www.getapril.com/)
- [10 AI-Powered Tax Tools Revolutionizing Tax And Compliance](https://cloudtweaks.com/2025/02/ai-powered-tax-tools-compliance/)

---

#### **Keeper Tax**

**Positioning:** AI-powered tax deduction finder for freelancers, gig workers, and independent contractors.

**Traction:**
- Raised $13M Series A (2023, led by Matrix Partners)

**Offering:**
- Automated deduction discovery
- Focus on self-employed/gig economy

**Weaknesses:**
- Consumer-focused (not B2B API)
- Limited to deduction optimization
- No benefit calculations or policy simulation

**Sources:**
- [10 AI-Powered Tax Tools Revolutionizing Tax And Compliance](https://cloudtweaks.com/2025/02/ai-powered-tax-tools-compliance/)

---

### Open-Source Alternatives

#### **OpenFisca**

**Positioning:** The most widely adopted free and open-source rules-as-code engine for tax/benefit systems.

**Adoption:**
- 10 countries modeling their socio-fiscal systems
- Government implementations: France (pioneer since 2011), New Zealand, Australia, Canada, Spain (Barcelona)
- Notable services: Mes Aides (France), 1jeune1solution.gouv.fr, mesdroitssociaux.gouv.fr
- 2019 EU recognition as most innovative open-source software
- 2023 Edge of Government Innovation Award (World Government Summit)

**Business Model:**
- 100% free software (GNU Affero General Public License)
- Users must provide source code access and link to OpenFisca
- No commercial revenue; relies on government/institutional adoption

**Strengths:**
- Proven government adoption across multiple countries
- Strong algorithmic transparency (code = regulation)
- OECD recommended for better policy outcomes
- Recognized as Digital Public Good by UN/UNICEF

**Weaknesses:**
- **No commercial infrastructure** (no SLA, support, or enterprise features)
- **Limited to Python runtime** (no multi-target compilation)
- **Technical barrier:** Primarily targets developer community; struggles to attract economists/policy experts
- **Governance challenges:** Lacks standards for interoperability, no centralized RaC Council
- **Community building:** Difficult to grow beyond technical users
- **No predictive/AI capabilities:** Pure rules engine, no data imputation or forecasting
- **Dependency on government champions:** Slow adoption without executive buy-in

**Sources:**
- [Write rules as code](https://openfisca.org/en/)
- [OpenFisca - Open Collective](https://opencollective.com/openfisca)
- [About](https://openfisca.org/en/about/)
- [OpenFisca: when a digital commons turns law into code](https://labo.societenumerique.gouv.fr/en/articles/openfisca-quand-un-commun-numerique-transforme-la-loi-en-code/)
- [Delivering a personalised citizen experience using Rules as Code as a shared utility](https://oecd-opsi.org/innovations/rac-as-shared-utility/)

---

#### **PolicyEngine**

**Positioning:** Nonprofit open-source tax/benefit microsimulation platform for the US and UK.

**Organizational Structure:**
- Nonprofit (PSL Foundation fiscally sponsored project)
- Mission: "Compute the impact of public policy for the world"
- 1-10 employees; Max Ghenis (CEO/Co-Founder), Nikhil Woodruff (CTO/Co-Founder)

**Funding:**
- NSF Pathways to Enable Open-Source Ecosystems grant
- Additional grant for expanding tax-benefit microsimulation
- No commercial revenue model

**Offering:**
- Free, open-source Python packages (PolicyEngine-US, PolicyEngine-UK)
- REST API for tax-benefit policy simulation and reform impact estimation
- Web apps for household calculations and policy analysis
- Microsimulation framework based on OpenFisca

**Adoption:**
- UK finance ministry exploring as potential supplement to existing models
- Used by researchers and policy advocates

**Strengths:**
- US and UK coverage (broader than most competitors)
- Microsimulation capabilities (population-level reform analysis)
- Free, open-source tools with accessible web interface
- Strong policy research focus

**Weaknesses:**
- **No commercial model:** Free tools, no enterprise features or SLAs
- **Limited to Python runtime** (same as OpenFisca)
- **No AI/predictive capabilities:** Requires complete household profiles
- **Nonprofit constraints:** Limited resources for scaling, marketing, enterprise features
- **No legal citations:** Calculations lack direct links to statute text
- **Single-purpose:** Policy analysis focus, not designed for embedded finance or AI assistants

**Sources:**
- [PolicyEngine](https://www.policyengine.org/)
- [PolicyEngine - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/policyengine)
- [Introducing PolicyEngine UK](https://www.ubicenter.org/introducing-policyengine)

---

## Cosilico Differentiation

### Core Technical Advantages

#### 1. **Multi-Target Compilation**

**What it means:**
Tax/benefit rules compile to Python, JavaScript, WASM, and SQL from a single source.

**Why it matters:**
- **Python:** Competitors (OpenFisca, PolicyEngine) stop here
- **JavaScript:** Enables browser-based calculations, Next.js/React apps, serverless functions
- **WASM:** High-performance edge computing, mobile apps, latency-sensitive applications
- **SQL:** Direct database queries for population-scale analysis without loading millions of records into memory

**Competitive edge:**
No competitor offers this. Developers choose Cosilico to deploy the same rules everywhere—backend, frontend, edge, and data warehouse—without maintaining multiple implementations.

---

#### 2. **Legal Citations as First-Class Features**

**What it means:**
Every calculation traces back to specific statute sections (e.g., 26 USC § 32 for EITC).

**Why it matters:**
- **Compliance/audit trails:** Fintech and government users need to justify calculations
- **Explainability for AI:** LLMs can cite law when explaining tax/benefit outcomes
- **Trust:** Users (and regulators) trust calculators that show their work

**Competitive edge:**
Avalara, TaxJar, Vertex are "black boxes." OpenFisca and PolicyEngine link code to policy but lack structured statute text. Cosilico's **Law Archive API** ($0.01/query) provides the full US Code (USLM XML → JSON) with historical versions and full-text search.

---

#### 3. **AI-First Design: Predictions API**

**What it means:**
Cosilico can complete partial household profiles using locally-calibrated models before running tax/benefit calculations.

**Why it matters:**
- **Real-world data is messy:** AI assistants, chatbots, and fintech apps rarely have complete user profiles
- **Competitive products fail here:** All existing tax APIs require full, structured inputs (income, deductions, dependents, etc.)
- **Imputation + calculation = new market:** The **Full Profile API** ($0.06/call) takes partial data in, returns complete financial picture + tax/benefit results

**Competitive edge:**
No competitor has this. Kintsugi, April, TaxJar, Avalara all assume clean, complete inputs. OpenFisca/PolicyEngine require full household specifications. Cosilico is the only API designed for conversational AI and incomplete data.

**Example use cases:**
- "I make $60k/year in California. What benefits can I get?" → Cosilico imputes household size, marital status, deductions, then calculates EITC, CalFresh, Medi-Cal eligibility
- Fintech app has user income but not detailed deductions → Predictions API fills gaps before tax estimation

---

### Business Model Differentiation

#### **Pricing: Open Source Infrastructure, Paid Insights**

**Philosophy:**
"We're too close to superabundance to hold knowledge back."

**What's free:**
- Rules engine (open source)
- Datasets (open source)
- Generator tools (open source)
- Users can download and run everything themselves

**What you pay for:**
- **Insights computed from that infrastructure:** Predictions, simulations, forecasts requiring fresh data, calibrated models, and serious compute

**API Pricing (Simple per-call, no tiers):**
- **Rules API:** $0.02/call (calculate taxes/benefits for complete household, 100+ programs, full audit trail)
- **Predictions API:** $0.05/call (impute missing attributes, county-level calibration, probability distributions)
- **Full Profile API:** $0.06/call (partial household → complete profile + tax/benefit calculations)
- **Simulations API:** $1 per 1M household-reforms (population-wide policy analysis, distributional impacts)
- **Law Archive API:** $0.01/query (structured US Code text, historical versions, full-text search)
- **Data Downloads:** $0.10/GB (calibrated microdata, synthetic populations, economic forecasts)

**Comparison to competitors:**
- **Avalara/Vertex:** Opaque enterprise pricing, sales meetings required
- **TaxJar:** Tiered subscriptions ($1,069+/year)
- **Kintsugi:** Free calculations, paid filing (filing focus, not API consumption)
- **OpenFisca/PolicyEngine:** 100% free (no commercial model)

**Cosilico's advantage:**
Transparent, predictable, pay-as-you-go pricing. No sales calls, no tiers, no surprises. Developer-friendly like TaxJar, but with broader coverage (income tax + benefits) and unique capabilities (AI predictions, multi-target compilation, legal citations).

---

### Customer Segments and Use Cases

Cosilico addresses multiple markets that competitors serve piecemeal:

| **Customer**           | **Products**                  | **Use Case**                                  | **Competitors Can't Do This**                          |
|------------------------|-------------------------------|-----------------------------------------------|-------------------------------------------------------|
| **Benefit apps**       | Full Profile                  | Partial user info → eligibility check         | Competitors require complete data; no imputation      |
| **Tax software**       | Rules + Predictions           | Liability estimates from partial data         | No AI-driven data completion                          |
| **AI assistants**      | Full Profile                  | "What benefits can I get?"                    | Conversational interface requires imputation          |
| **Fintech**            | Predictions                   | Customer profile completion                   | Most APIs don't offer predictive imputation           |
| **Marketers**          | Full Profile                  | Segment by tax burden + benefits → WTP        | No combined tax/benefit APIs with predictions         |
| **Researchers**        | Simulations + Data            | Reform modeling at scale                      | PolicyEngine free but no SLA; others lack this        |
| **Government**         | Simulations + Enterprise      | Bill scoring, outreach targeting              | OpenFisca lacks enterprise features; others too narrow|
| **Journalists**        | Playground + Rules            | Fact-checking, embedded calculators           | No one offers legal citations + easy embedding        |
| **Legal tech**         | Law Archive                   | Contract analysis, compliance tools           | No structured statute API exists commercially         |
| **AI companies**       | Law Archive + Rules           | RAG for legal assistants                      | No one combines executable rules + statute text       |

---

## Strategic Positioning

### Where Cosilico Wins

#### **1. AI-First Applications**
- **Chatbots, assistants, conversational UIs:** Existing tax APIs fail when users provide incomplete data. Cosilico's Predictions API is purpose-built for this.
- **Example:** "I just moved to California and make $70k. What do I owe in taxes?" → Cosilico imputes filing status, deductions, dependents, then calculates liability. Competitors would return an error.

#### **2. Developer Experience**
- **Multi-target compilation:** One rule, every runtime. Developers don't maintain separate Python, JS, and SQL implementations.
- **Transparent pricing:** No sales calls. No tiers. Pay-as-you-go.
- **Legal citations:** LLMs can explain *why* a calculation is what it is, citing statute text.

#### **3. Policy Analysis + Real-World Applications**
- **PolicyEngine/OpenFisca:** Great for researchers, but no commercial support, no AI capabilities, no multi-target compilation.
- **Cosilico:** Same microsimulation power (Simulations API) + enterprise SLA + embeddable in fintech/AI apps.

#### **4. Legal Tech and Compliance**
- **Law Archive API:** No competitor provides structured, versioned statute text. This opens a new market (legal tech, AI assistants) that tax APIs don't address.

---

### Where Cosilico Faces Challenges

#### **1. Sales Tax Compliance**
- **Avalara, TaxJar, Vertex, Kintsugi own this market.**
- Cosilico's focus is **income tax and benefits**, not sales/VAT compliance (nexus tracking, filing automation, exemption certificates).
- **Implication:** Cosilico is complementary, not competitive, for e-commerce/SaaS sales tax needs.

#### **2. Established Enterprise Relationships**
- Avalara/Vertex have decades-long relationships with Fortune 500 companies and ERP vendors (SAP, Oracle, NetSuite).
- **Implication:** Cosilico targets **emerging use cases** (AI assistants, fintech, benefit apps) rather than displacing entrenched enterprise tax departments.

#### **3. Rules-as-Code Adoption Barriers**
- OpenFisca/PolicyEngine face challenges attracting non-technical users (economists, policy staff).
- **Implication:** Cosilico must invest in developer experience (docs, SDKs, examples) and avoid requiring users to write code. The **Playground** (free calculator) and **Full Profile API** (partial data in, full results out) lower the barrier.

#### **4. Government Sales Cycles**
- Public sector adoption is slow, requires RFPs, budget cycles, champions within agencies.
- **Implication:** Prioritize **commercial customers** (fintech, AI companies, researchers with grants) over government contracts initially. Government partnerships should be strategic (credibility, datasets) rather than revenue-focused.

---

## Key Takeaways

1. **Market Opportunity:** Tax compliance software ($20B, 12.9% CAGR) and benefits verification ($563M+ in healthcare alone) are large, fragmented markets with no dominant API provider for income tax + benefits.

2. **Competitor Gaps:**
   - **Sales tax APIs (Avalara, TaxJar, Vertex):** Narrow focus, no income tax or benefits, no AI capabilities
   - **AI tax startups (Kintsugi, April):** Early stage, limited scope (sales tax compliance, individual filing)
   - **Open-source (OpenFisca, PolicyEngine):** No commercial model, single runtime, no AI predictions, limited enterprise features

3. **Cosilico's Unique Position:**
   - **Only API** combining income tax, benefits, predictions (AI imputation), simulations, and legal citations
   - **Only rules-as-code platform** with multi-target compilation (Python, JS, WASM, SQL)
   - **Only provider** of structured statute text (Law Archive API) for legal tech and AI assistants

4. **Target Customers:** Fintech platforms, AI assistants, benefit eligibility apps, tax software companies, researchers, government agencies, legal tech firms, journalists.

5. **Go-to-Market Strategy:**
   - **Developer-first:** Transparent pricing, excellent docs, free Playground, pay-as-you-go
   - **AI-first:** Position as the tax/benefit API for conversational AI and incomplete data
   - **Enterprise later:** Prove value with startups and scale-ups before pursuing Fortune 500

6. **Risks to Monitor:**
   - Avalara/Vertex could expand into income tax or acquire an AI tax startup
   - OpenFisca/PolicyEngine could launch commercial offerings
   - Large language model providers (OpenAI, Anthropic) could build tax/benefit calculation into models directly

---

## Sources

### Tax API Competitors:
- [Avalara vs. Vertex: 2025 Comparison on Features & Support](https://taxcloud.com/blog/avalara-vs-vertex-comparison/)
- [Avalara vs TaxJar vs Vertex: Choosing the Right Tax Engine for SaaS and Ecommerce](https://www.glencoyne.com/guides/tax-engine-comparison)
- [Best Sales Tax APIs for Ecommerce in 2026](https://taxcloud.com/blog/sales-tax-apis/)
- [Avalara Software Pricing & Plans 2025](https://www.vendr.com/buyer-guides/avalara)
- [Avalara vs. Vertex: Pros, Cons, and How They Stack Up](https://www.numeral.com/blog/avalara-vs-vertex)

### AI Tax Startups:
- [AI sales tax startup Kintsugi has doubled its valuation in 6 months](https://techcrunch.com/2025/04/30/ai-sales-tax-startup-kintsugi-has-doubled-its-valuation-in-6-months/)
- [april | Embedded tax solutions for modern financial platforms](https://www.getapril.com/)
- [10 AI-Powered Tax Tools Revolutionizing Tax And Compliance](https://cloudtweaks.com/2025/02/ai-powered-tax-tools-compliance/)

### Open-Source Alternatives:
- [Write rules as code](https://openfisca.org/en/)
- [OpenFisca - Open Collective](https://opencollective.com/openfisca)
- [About](https://openfisca.org/en/about/)
- [OpenFisca: when a digital commons turns law into code](https://labo.societenumerique.gouv.fr/en/articles/openfisca-quand-un-commun-numerique-transforme-la-loi-en-code/)
- [PolicyEngine](https://www.policyengine.org/)
- [PolicyEngine - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/policyengine)
- [Introducing PolicyEngine UK](https://www.ubicenter.org/introducing-policyengine)
- [Delivering a personalised citizen experience using Rules as Code as a shared utility](https://oecd-opsi.org/innovations/rac-as-shared-utility/)
- [Turning the rules of government into code using OpenFisca](https://www.digital.govt.nz/blog/turning-the-rules-of-government-into-code-using-openfisca)

### Market Size:
- [Tax Compliance Software Market Development Status, 12.92% CAGR Analysis](https://www.openpr.com/news/4320947/tax-compliance-software-market-development-status-12-92-cagr)
- [Tax Tech Market Size, Trends | Industry Report 2030](https://www.marketsandmarkets.com/Market-Reports/tax-tech-market-28373824.html)
- [Tax Management Software Market to Surpass USD 50.84 Billion by 2032](https://www.globenewswire.com/news-release/2025/12/03/3199006/0/en/Tax-Management-Software-Market-to-Surpass-USD-50-84-Billion-by-2032-Owing-to-Rising-Multi-Jurisdiction-Compliance-Needs-SNS-Insider.html)
- [Sales Tax and VAT Compliance Software Market Size to 2033](https://www.businessresearchinsights.com/market-reports/sales-tax-and-vat-compliance-software-market-120923)
- [Eligibility and Benefits Verification APIs Market Research Report 2033](https://growthmarketreports.com/report/eligibility-and-benefits-verification-apis-market)
- [NYC Benefits Platform: Dataset and Screening API](https://www.nyc.gov/site/opportunity/portfolio/nyc-screening-api.page)
- [Eligibility APIs Initiative](https://digitalgovernmenthub.org/library/eligibility-apis-initiative/)
- [How APIs are changing the game for benefit administrators, employers and employees](https://www.wtwco.com/en-us/insights/2023/01/how-apis-are-changing-the-game-for-benefit-administrators-employers-and-employees)

### Microsimulation:
- [Centre for Microsimulation and Policy Analysis](https://www.microsimulation.ac.uk/)
- [Microsimulation - Urban Institute](https://www.urban.org/research/data-methods/data-analysis/quantitative-data-analysis/microsimulation)
- [Mastering Microsimulation for Policy Analysis](https://www.numberanalytics.com/blog/microsimulation-guide)
- [SimPaths: An open-source microsimulation model for life course analysis](https://www.microsimulation.pub/articles/00318)
