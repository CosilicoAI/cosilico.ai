# Market Research Master Task List

This is a working backlog to support fundraising and strategy. Use checkboxes to track progress and add links/evidence as you go. Keep everything source-linked where possible.

## 0. Program Management
- [ ] Define owners per workstream (Customers, Revenue, Data, Product, Legal, GTM)
- [ ] Set weekly milestones and a shared dashboard (metrics + links)
- [ ] Maintain decision log (assumptions, tradeoffs, approvals)

## 1. Customers and Users (Discovery + Validation)
- [ ] Catalog all current/past users of PolicyEngine (org, contact, usage, status)
- [ ] Verify external users mentioned: MyFriendBen, Benefit Navigator, Impactica/Navvy, Mirza, The Tax Project, Prenatal-to-3 Policy Impact Center (Pn3 PIC)
- [ ] Identify other users of rules-only (accountants, tax pros, consultancies, government policy teams)
- [ ] Identify users of “rules-as-data” for AI retrieval/grounding (LLM assistants)
- [ ] Identify users of enhanced microdata (market research, retail, mobility, public health)
- [ ] Interview plan: 10+ target users per segment; capture problem, workflow, budget, procurement, success criteria
- [ ] Create reference pipeline: permission to publish quotes, logo usage, and case studies

## 2. Revenue Projections (Per Segment and Per Customer)
- [ ] Define pricing axes: hosted instance, SLA tier, usage (runs/MAUs/compute), seats, services
- [ ] Build scenarios: conservative/base/aggressive for each customer and segment
- [ ] Fill `docs/research/revenue_projections.csv` with low/base/high per customer (assumptions + source links)
- [ ] Validate with existing customers; get willingness-to-pay ranges
- [ ] Unit economics: infra cost per run, support load per instance, gross margin targets

## 3. Segments (Sizing + Prioritization)
- [ ] Government policy teams: fiscal notes, scoring, distributional analysis (US federal/state; UK HMT/HMRC)
- [ ] Program operators: eligibility/adjudication/audit (Medicaid, SNAP, HMRC benefits)
- [ ] Accounting firms: tax prep, withholding, advisory; payroll platforms
- [ ] Consultancies: rapid policy scoring + decks; research teams
- [ ] Fintech/benefits apps: embedded calculators, eligibility flows
- [ ] AI/LLM: policy reasoning; rules-as-data APIs
- [ ] Research institutes/think-tanks: reproducible analysis
- [ ] Market research/retail: demand estimation with enriched microdata
- [ ] Prioritize by demand signals, time-to-value, strategic leverage, adjacency

## 4. Competitive Landscape
- [ ] OSS: OpenFisca, PSL/Tax-Calculator, OpenM++, LIAM2, JAS-MINE; capture license, pricing, adoption, strengths/weaknesses
- [ ] Proprietary: EUROMOD, TAXSIM (model/service scope), SPSD/M; procurement patterns
- [ ] Substitute products: in-house Excel/R/Python models; consulting deliverables
- [ ] Moat articulation: transparency, versioned rules, provenance, auditability, developer experience

## 5. Product & Data (Roadmap Evidence)
- [ ] Rules coverage metrics: jurisdictions, parameters, change-latency SLOs (define and publish)
- [ ] Data pipeline: integrate consumption data; list credible sources and legal access paths
- [ ] Dynamics (behavioral/GE): roadmap with validation plan and benchmarks
- [ ] Developer experience: docs, quickstarts, SDK ergonomics, sample notebooks
- [ ] Audit & provenance UX: diffs, citations, evidence capture in YAML

## 6. Pricing & Packaging
- [ ] Hosted enterprise tiers (SLA, instances, support hours, compliance)
- [ ] API pricing: MAUs + compute; free tier policy; overage pricing
- [ ] Seats for advisory tooling; consulting day rates and accelerators
- [ ] Discount framework for nonprofits/academia/government

## 7. Org Structure & OSS Model
- [ ] Compare models: single C‑Corp/PBC vs. Foundation + wholly-owned subsidiary (Mozilla-style)
- [ ] Governance and trademark rules; CLA/DCO policy; contributor governance
- [ ] Funding models: support subscriptions (Red Hat), enterprise add-ons (GitLab/Confluent analogs), services
- [ ] Draft recommendation memo with pros/cons and legal to-dos

## 8. International Expansion
- [ ] Shortlist countries (US/UK/CA baseline; EU exemplars; AU/NZ)
- [ ] For each: rules source, data source, calibration plan, partner leads
- [ ] Create “country kits” with links, effort estimates, and pilot user list

## 9. Partnerships
- [ ] Universities, agencies, foundations—pipeline and sponsorship options
- [ ] Data partnerships for microdata and consumption augmentation
- [ ] Cloud marketplace listings; compliance roadmap

## 10. Deck & Data Room
- [ ] Deck refresh: problem, solution, product, market size, traction, model, roadmap, competition, team, ask
- [ ] Metrics appendix: usage, coverage, uptime, release cadence
- [ ] Case studies & reference letters
- [ ] Financial model + hiring plan
- [ ] Legal: OSS licenses, IP ownership, CLAs, privacy policy

---

Use this list as the single source of truth. Pull concise action items into weekly sprints. Add sources and evidence as you go.

