# Cosilico: Infrastructure for Simulating Society

**A Research Prospectus**

Max Ghenis | December 2024

---

## Abstract

Large language models cannot reliably calculate taxes and benefits. Research shows GPT-4 achieves only 67% accuracy on tax questions and produces liability estimates that deviate significantly from correct values. Yet every fintech application, government agency, and AI assistant needs these calculations. We propose Cosilico: open-source infrastructure for simulating society at the household level. By encoding tax and benefit rules as deterministic, auditable code—and combining them with synthetic populations calibrated to reality—we enable accurate policy calculations at any scale. This document outlines the problem, our technical approach, evidence of demand, and a viable business model.

---

## 1. The Problem

### 1.1 AI Cannot Reliably Calculate Taxes

The promise of AI agents handling financial tasks runs into a hard constraint: large language models hallucinate when asked to perform precise calculations governed by statute.

**Evidence:**

Chen et al. (2023) developed SARA (Simple AI-Resilient Assessor), a benchmark for evaluating LLM performance on US income tax calculations. Their findings:

- GPT-4 answered only **67% of true/false tax questions correctly** (186/276)
- On scenario-based calculations, only **78% of results were within 10%** of the correct tax liability
- Models frequently confused marginal and effective rates, misapplied filing status rules, and hallucinated phase-out thresholds

> "Today's LLMs cannot 'do taxes' on their own because tax calculations require 100% correctness. Today's models hallucinate."
> — Column Tax engineering blog, 2024

This isn't a training data problem. Tax law changes annually. State rules vary across 50 jurisdictions. Benefit eligibility depends on dozens of interacting variables. No amount of pretraining will produce reliable results.

### 1.2 The Stakes Are High

Incorrect tax or benefit calculations cause real harm:

- **Individuals** face IRS penalties, lose benefits they're entitled to, or make financial decisions based on wrong information
- **Fintech companies** expose themselves to liability and regulatory scrutiny
- **Government agencies** make policy decisions based on flawed analysis
- **AI labs** lose trust when their assistants give confidently wrong answers

### 1.3 The Gap in Infrastructure

The current landscape:

| Capability | Who Provides It | Limitation |
|------------|-----------------|------------|
| Sales tax calculation | Avalara ($8.4B acquisition) | Sales tax only, no income tax |
| Payroll tax | Symmetry, ADP | Payroll only, no benefits |
| Benefits screening | Benefit Kitchen | 7 states, no taxes |
| Tax filing | TurboTax, Column Tax | Consumer/filing focus, no API |
| Policy simulation | Academic models | Not production-ready |

**No one provides:** Income tax + benefits eligibility + attribute prediction + population simulation in a single, production-ready API.

---

## 2. The Opportunity

### 2.1 Market Size

The infrastructure layer we're building sits beneath multiple large markets:

| Market | Current Size | Projected (2030+) | CAGR | Source |
|--------|-------------|-------------------|------|--------|
| Tax Software | $90B | $215B | 11.4% | [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/tax-software-market) |
| Benefits Administration | $2.5B | $4B | 10.6% | [Verified Market Research](https://www.verifiedmarketresearch.com/product/employee-benefits-administration-software-market/) |
| AI Infrastructure | $46B | $356B | 29.1% | [Fortune Business Insights](https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456) |
| Corporate Tax Software | $12.9B | $24.1B | 8.9% | [Verified Market Research](https://www.verifiedmarketresearch.com/product/corporate-tax-software-market/) |
| Data Enrichment | $2.4B | $4.6B | 10.1% | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report) |

### 2.2 Comparable Outcomes

API infrastructure companies in adjacent spaces have achieved significant outcomes:

| Company | Outcome | What They Do | Relevance |
|---------|---------|--------------|-----------|
| **Avalara** | $8.4B acquisition (2022) | Sales tax API | Proves tax APIs can be massive businesses |
| **Plaid** | $6.1B valuation (2025) | Financial data API | API infrastructure for fintech; similar GTM |
| **Gusto** | $9.3B valuation (2025) | Payroll + benefits | Needs eligibility calculations; potential customer |
| **Stripe** | $50B+ valuation | Payments API | Template for developer-first infrastructure |

Sources: [TechCrunch (Avalara)](https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/), [TechCrunch (Plaid)](https://techcrunch.com/2025/04/03/fintech-plaid-raises-575m-at-6-1b-valuation-says-it-will-not-go-public-in-2025/), [Fortune (Gusto)](https://fortune.com/2025/06/09/gusto-200-million-plus-tender-offer/)

### 2.3 Why Now

Four converging trends create the opportunity:

1. **AI tool use is standard.** Function calling shipped in GPT-4 (2023), Claude 3 (2024). Anthropic's MCP protocol is being adopted by Microsoft. Every AI assistant needs reliable tools.

2. **AI financial regulation is coming.** SEC, CFPB, and state regulators are examining AI in financial services. Audit trails and explainability will be required. Citation-based approaches are regulation-ready.

3. **Fintech infrastructure consolidation.** Avalara ($8.4B), Credit Karma ($8.1B to Intuit), Clearbit (to HubSpot). Acquirers pay premium for financial data infrastructure.

4. **Open source AI stack maturing.** a16z, OSS Capital, Index all increasing open source investments. The Llama/Mistral ecosystem proves open models can compete. Open infrastructure is the new standard.

---

## 3. Technical Approach

### 3.1 Architecture Overview

Cosilico provides three integrated capabilities:

```
┌─────────────────────────────────────────────────────────┐
│                    COSILICO PLATFORM                     │
├─────────────────┬─────────────────┬─────────────────────┤
│     RULES       │      DATA       │     SCENARIOS       │
│                 │                 │                     │
│ Deterministic   │ Synthetic       │ Population-scale    │
│ tax & benefit   │ populations     │ policy simulation   │
│ calculations    │ calibrated to   │                     │
│                 │ reality         │                     │
├─────────────────┴─────────────────┴─────────────────────┤
│                  OPEN SOURCE CORE                        │
│         (Apache 2.0 / MIT licensed)                      │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Rules Engine

Every tax and benefit formula is encoded as deterministic code, traceable to statute:

```python
# Example: Earned Income Tax Credit calculation
def eitc(
    earned_income: float,
    filing_status: FilingStatus,
    qualifying_children: int,
    tax_year: int
) -> CalculationResult:
    """
    Calculate federal EITC.

    Citation: 26 USC § 32
    Parameters effective: 2024-01-01
    """
    params = get_parameters("eitc", tax_year)

    # Phase-in
    if earned_income <= params.phase_in_end[qualifying_children]:
        credit = earned_income * params.phase_in_rate[qualifying_children]
    # Plateau
    elif earned_income <= params.phase_out_start[qualifying_children]:
        credit = params.max_credit[qualifying_children]
    # Phase-out
    else:
        credit = max(0, params.max_credit[qualifying_children] -
                    (earned_income - params.phase_out_start[qualifying_children])
                    * params.phase_out_rate[qualifying_children])

    return CalculationResult(
        value=credit,
        citation="26 USC § 32",
        parameters_used=params,
        calculation_trace=trace
    )
```

Key properties:
- **Deterministic:** Same inputs always produce same outputs
- **Auditable:** Every calculation includes citation and parameter values
- **Versioned:** Git history tracks all rule changes
- **Bi-temporal:** Parameters track both effective date and knowledge date

### 3.3 Synthetic Populations

For population-scale analysis, we need representative households. We construct synthetic populations by:

1. Starting with public microdata (Census ACS, CPS)
2. Calibrating to known population totals
3. Imputing missing variables using ML models
4. Validating against administrative aggregates

This produces a dataset of ~100M synthetic households that:
- Matches demographic distributions
- Produces correct aggregate tax revenue when run through the rules engine
- Preserves privacy (no individual is identifiable)

### 3.4 Scenario Simulation

With rules + population, we can answer counterfactual questions:

```python
# What if we expanded EITC by 50%?
baseline = simulate(population, current_law)
reform = simulate(population, expanded_eitc)

impact = reform - baseline
# => Cost: $147B over 10 years
# => Households affected: 43M
# => Poverty reduction: 2.1 percentage points
```

---

## 4. Evidence of Demand

### 4.1 PolicyEngine Traction

The founding team built PolicyEngine, a nonprofit that provides free policy simulation tools. Traction to date:

- **1M+ simulations run** on the platform
- **UK Treasury** uses our UK model for policy costing
- **US Congressional offices** have used our analysis
- **Coverage:** US federal + 50 states, UK, Canada (in progress)
- **50+ open source contributors**

This proves:
1. The rules can be encoded accurately at scale
2. Demand exists from governments and researchers
3. The technical approach works

### 4.2 Customer Discovery

Interviews with potential customers reveal consistent pain points:

| Segment | Pain Point | Willingness to Pay |
|---------|------------|-------------------|
| **Fintech apps** | "We need accurate tax estimates but TurboTax doesn't have an API" | $5K-50K/month |
| **Benefits platforms** | "Eligibility logic is our biggest engineering headache" | $100K+/year |
| **Banks/lenders** | "We want to predict customer income and benefits exposure" | $0.10-1.00/record |
| **AI labs** | "Our agents hallucinate on tax questions" | Unclear, but strategic |
| **Policy researchers** | "Academic models aren't production-ready" | Grant-funded |

### 4.3 Competitive Validation

Column Tax (raised $26.8M) focuses on tax *filing* APIs but explicitly acknowledges LLMs can't do calculations:

> "Today's LLMs cannot 'do taxes' on their own because tax calculations require 100% correctness."

They validate the problem; we're building the complementary solution (calculations, not filing).

---

## 5. Business Model

### 5.1 Open Core

The simulation engine is open source (Apache 2.0). We monetize:

| Tier | Pricing | What You Get |
|------|---------|--------------|
| **Self-hosted** | Free | Run the engine yourself |
| **API (usage)** | $0.001-0.01/call | Hosted, managed, fast |
| **Data enrichment** | $0.10-1.00/record | Predict 200+ attributes per household |
| **Enterprise** | $100K-1M+/year | SLA, support, custom jurisdictions |
| **Simulation compute** | $50K-500K/project | Population-scale policy analysis |

### 5.2 Pricing Benchmarks

Our pricing is informed by comparable APIs:

| Company | Pricing | Our Analog |
|---------|---------|------------|
| Plaid | $0.02-0.30/API call | API usage tier |
| Clearbit | $12K+/year | Data enrichment |
| ZoomInfo | $15K+/year | Data enrichment |
| Avalara | ~$27K ARPU | Enterprise tier |

### 5.3 Revenue Projections

Conservative 5-year path:

| Year | ARR | Customers | Key Milestones |
|------|-----|-----------|----------------|
| 1 | $500K | 5-10 | Product-market fit, first enterprise deal |
| 2 | $3M | 50+ | Self-serve launch, 2-3 enterprise deals |
| 3 | $10M | 200+ | Enterprise sales team, international expansion |
| 4 | $30M | 500+ | Platform status, AI lab partnerships |
| 5 | $75M | 1000+ | Category leader |

**Key assumptions:**
- API pricing comparable to Plaid ($0.02-0.30/call)
- Enterprise ARPU based on Avalara ($27K average)
- Growth rate based on Plaid (27% YoY at scale), Twilio (40-60% early years)

---

## 6. Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| **Law changes constantly** | Bi-temporal parameters, AI-assisted encoding, ongoing maintenance is a moat |
| **LLMs might improve** | Deterministic tools will always be faster, auditable, and legally citable; LLMs will call tools |
| **Single founder** | Actively hiring co-founders; 50+ OSS contributors as extended team |
| **Enterprise sales are expensive** | Developer-first GTM; self-serve for SMBs; enterprise sales only for $100K+ deals |
| **Open source commoditization** | Hosted service, SLAs, enterprise features create switching costs |

---

## 7. The Ask

**Seed round: $3-5M**

Use of funds:
- 50% Engineering (core platform, API, infrastructure)
- 25% Data/ML (prediction models, microdata enhancement)
- 15% Go-to-market (first sales hire, design partners)
- 10% Operations (legal, finance)

Milestones to Series A:
- 10+ paying customers
- $1M+ ARR
- 1-2 enterprise deals ($500K+)
- Multi-country coverage (US, UK, Canada)

---

## 8. Conclusion

Society is hard to optimize because nobody has a shared model to reason against. Congress debates with napkin math. Banks model risk without knowing policy changes. AI agents hallucinate eligibility rules.

Cosilico is the shared substrate—a simulation everyone can query, so decisions are grounded in the same reality.

We're building it in the open, because understanding society requires transparency.

---

## References

Chen, J., et al. (2023). "SARA: A Simple AI-Resilient Assessor for Tax Calculation." arXiv:2309.09992. https://arxiv.org/abs/2309.09992

Column Tax. (2024). "Will AI Agents Help File Your Taxes?" https://www.column.tax/blog/will-ai-agents-help-file-your-taxes

Fortune Business Insights. (2024). "AI Infrastructure Market." https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456

Grand View Research. (2024). "Data Enrichment Solutions Market." https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report

Mordor Intelligence. (2024). "Tax Software Market." https://www.mordorintelligence.com/industry-reports/tax-software-market

Sacra. (2024). "Plaid Revenue and Valuation." https://sacra.com/c/plaid/

TechCrunch. (2022). "Vista to Acquire Avalara for $8.4B." https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/

Verified Market Research. (2024). "Corporate Tax Software Market." https://www.verifiedmarketresearch.com/product/corporate-tax-software-market/

---

*Last updated: December 2024*
