export interface Source {
  id: number;
  author?: string;
  title: string;
  year: number;
  url: string;
}

export interface Competitor {
  name: string;
  focus: string;
  incomeTax: boolean | "partial";
  payrollTax: boolean;
  benefits: boolean | "partial";
  prediction: boolean;
  simulation: boolean;
  openSource: boolean;
  notes: string;
  sourceId?: number;
}

export interface PricingComp {
  category: string;
  competitors: {
    name: string;
    pricing: string;
    notes: string;
    sourceId?: number;
  }[];
  cosilicoPricing: string;
  cosilicoAdvantage: string;
}

export const sources: Source[] = [
  {
    id: 1,
    author: "Chen et al.",
    title: "SARA: A Simple AI-Resilient Assessor for Tax Calculation",
    year: 2023,
    url: "https://arxiv.org/abs/2309.09992",
  },
  {
    id: 2,
    author: "Column Tax",
    title: "Will AI Agents Help File Your Taxes?",
    year: 2024,
    url: "https://www.column.tax/blog/will-ai-agents-help-file-your-taxes",
  },
  {
    id: 3,
    author: "Mordor Intelligence",
    title: "Tax Software Market Report",
    year: 2024,
    url: "https://www.mordorintelligence.com/industry-reports/tax-software-market",
  },
  {
    id: 4,
    author: "Verified Market Research",
    title: "Employee Benefits Administration Software Market",
    year: 2024,
    url: "https://www.verifiedmarketresearch.com/product/employee-benefits-administration-software-market/",
  },
  {
    id: 5,
    author: "Fortune Business Insights",
    title: "AI Infrastructure Market",
    year: 2024,
    url: "https://www.fortunebusinessinsights.com/ai-infrastructure-market-110456",
  },
  {
    id: 6,
    author: "Grand View Research",
    title: "Data Enrichment Solutions Market",
    year: 2024,
    url: "https://www.grandviewresearch.com/industry-analysis/data-enrichment-solutions-market-report",
  },
  {
    id: 7,
    author: "TechCrunch",
    title: "Vista to Acquire Avalara for $8.4B",
    year: 2022,
    url: "https://techcrunch.com/2022/08/08/vista-equity-partners-to-acquire-automated-tax-compliance-company-avalara-for-8-4b/",
  },
  {
    id: 8,
    author: "TechCrunch",
    title: "Plaid Raises $575M at $6.1B Valuation",
    year: 2025,
    url: "https://techcrunch.com/2025/04/03/fintech-plaid-raises-575m-at-6-1b-valuation-says-it-will-not-go-public-in-2025/",
  },
  {
    id: 9,
    author: "Fortune",
    title: "Gusto $200M+ Tender Offer at $9.3B Valuation",
    year: 2025,
    url: "https://fortune.com/2025/06/09/gusto-200-million-plus-tender-offer/",
  },
  {
    id: 10,
    author: "Crunchbase",
    title: "Column Tax Company Profile",
    year: 2024,
    url: "https://www.crunchbase.com/organization/column-tax",
  },
  {
    id: 11,
    author: "Symmetry Software",
    title: "About Symmetry - 64M+ Employees Served",
    year: 2024,
    url: "https://www.symmetry.com/about-symmetry",
  },
  {
    id: 12,
    author: "Benefit Kitchen",
    title: "Currently Serving - 18 Programs in 7 States",
    year: 2024,
    url: "https://benefitkitchen.com/currently-serving",
  },
  {
    id: 13,
    author: "Sacra",
    title: "Plaid Revenue and Growth Analysis",
    year: 2024,
    url: "https://sacra.com/c/plaid/",
  },
  {
    id: 14,
    author: "MongoDB Investor Relations",
    title: "MongoDB Q4 FY2024 Financial Results",
    year: 2024,
    url: "https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-fourth-quarter-and-full-year-fiscal-2024",
  },
  {
    id: 15,
    author: "Elastic Investor Relations",
    title: "Elastic FY2024 Financial Results",
    year: 2024,
    url: "https://ir.elastic.co/news/news-details/2024/Elastic-Reports-Fourth-Quarter-and-Fiscal-2024-Financial-Results/",
  },
  {
    id: 16,
    author: "GitLab Investor Relations",
    title: "GitLab FY2024 Financial Results",
    year: 2024,
    url: "https://ir.gitlab.com/news/news-details/2024/GitLab-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/",
  },
  {
    id: 17,
    author: "SiliconAngle",
    title: "Rippling Closes $200M at $13.5B Valuation",
    year: 2024,
    url: "https://siliconangle.com/2024/04/22/hr-software-maker-rippling-closes-200m-round-13-5b-valuation/",
  },
  {
    id: 18,
    author: "Verified Market Research",
    title: "Corporate Tax Software Market",
    year: 2024,
    url: "https://www.verifiedmarketresearch.com/product/corporate-tax-software-market/",
  },
  {
    id: 19,
    author: "MarketsandMarkets",
    title: "Tax Tech Market Report",
    year: 2024,
    url: "https://www.marketsandmarkets.com/Market-Reports/tax-tech-market-28373824.html",
  },
  {
    id: 20,
    author: "Polaris Market Research",
    title: "Financial Planning Software Market Size",
    year: 2024,
    url: "https://www.polarismarketresearch.com/industry-analysis/financial-planning-software-market",
  },
  {
    id: 21,
    author: "TaxCloud",
    title: "TaxJar Pricing: How Much Does TaxJar Cost?",
    year: 2024,
    url: "https://taxcloud.com/blog/taxjar-pricing-how-much-does-taxjar-cost/",
  },
  {
    id: 22,
    author: "TaxCloud",
    title: "Avalara Pricing: How Much Does Avalara Cost in 2025?",
    year: 2024,
    url: "https://taxcloud.com/blog/avalara-pricing/",
  },
  {
    id: 23,
    author: "NBER",
    title: "TAXSIM",
    year: 2024,
    url: "https://www.nber.org/research/data/taxsim",
  },
  {
    id: 24,
    author: "Cognism",
    title: "Clearbit Pricing 2026: Full Cost Breakdown Explained",
    year: 2024,
    url: "https://www.cognism.com/blog/clearbit-pricing",
  },
  {
    id: 25,
    author: "FullEnrich",
    title: "FullContact Pricing and Plans: Is It Worth It?",
    year: 2024,
    url: "https://fullenrich.com/content/full-contact-pricing",
  },
  {
    id: 26,
    author: "Itexus",
    title: "Experian API: Integration, Use Cases & Costs",
    year: 2024,
    url: "https://itexus.com/experian-api-integration-use-cases-costs/",
  },
  {
    id: 27,
    author: "Snowflake",
    title: "Paid Listings Pricing Models",
    year: 2024,
    url: "https://other-docs.snowflake.com/en/collaboration/provider-listings-pricing-model",
  },
];

export const competitors: Competitor[] = [
  {
    name: "Column Tax",
    focus: "Tax filing API",
    incomeTax: "partial",
    payrollTax: false,
    benefits: false,
    prediction: false,
    simulation: false,
    openSource: false,
    notes: "$26.8M raised. Chime, NerdWallet customers. Filing focus, not calculation.",
    sourceId: 10,
  },
  {
    name: "Symmetry",
    focus: "Payroll tax engine",
    incomeTax: false,
    payrollTax: true,
    benefits: false,
    prediction: false,
    simulation: false,
    openSource: false,
    notes: "Est. 1984. 64M+ employees/year. Wave, Netchex customers.",
    sourceId: 11,
  },
  {
    name: "Benefit Kitchen",
    focus: "Benefits screening",
    incomeTax: false,
    payrollTax: false,
    benefits: "partial",
    prediction: false,
    simulation: false,
    openSource: false,
    notes: "18 programs in 7 states. Healthcare and nonprofit focus.",
    sourceId: 12,
  },
  {
    name: "Avalara",
    focus: "Sales tax API",
    incomeTax: false,
    payrollTax: false,
    benefits: false,
    prediction: false,
    simulation: false,
    openSource: false,
    notes: "Acquired for $8.4B. Sales tax only—no income tax.",
    sourceId: 7,
  },
];

export const pricingComps: PricingComp[] = [
  {
    category: "Tax calculations",
    competitors: [
      { name: "TAXSIM (NBER)", pricing: "Free", notes: "Academic only, federal 1960-2023, states 1977-2018, no commercial API", sourceId: 23 },
      { name: "TaxJar", pricing: "~$0.10/calc", notes: "$99/mo for 200 orders, API calls count as 1/10 order, Pro plan required", sourceId: 21 },
      { name: "Avalara", pricing: "Not public", notes: "Requires sales call, reported 30%+ more expensive than competitors", sourceId: 22 },
    ],
    cosilicoPricing: "$0.003/call",
    cosilicoAdvantage: "30x cheaper than TaxJar. Commercial API unlike TAXSIM.",
  },
  {
    category: "Predictions / enrichment",
    competitors: [
      { name: "Experian", pricing: "$0.50-2/record", notes: "Identity/credit focus, not household economic attributes", sourceId: 26 },
      { name: "Clearbit", pricing: "$0.09-0.10/record", notes: "Now HubSpot-only, deprecated standalone API, enterprise = $80k+/yr", sourceId: 24 },
      { name: "FullContact", pricing: "$0.05-0.10/call", notes: "$99-499/mo plans, credit-based, marketing data focus", sourceId: 25 },
    ],
    cosilicoPricing: "$0.008/call",
    cosilicoAdvantage: "5-10x cheaper. Economic/tax attributes vs. marketing data.",
  },
  {
    category: "Microsimulation",
    competitors: [
      { name: "TAXSIM", pricing: "Free", notes: "Limited to tax calcs, no benefits, no distributional analysis", sourceId: 23 },
      { name: "Tax Policy Center", pricing: "N/A", notes: "Internal only, no external access" },
      { name: "JCT/CBO", pricing: "N/A", notes: "Government only, not commercially available" },
    ],
    cosilicoPricing: "$0.50/1M household-reforms",
    cosilicoAdvantage: "No commercial competitor. First API for population-scale policy simulation.",
  },
  {
    category: "Data downloads",
    competitors: [
      { name: "Census/IPUMS", pricing: "Free", notes: "Raw data, requires extensive processing" },
      { name: "Snowflake Marketplace", pricing: "$0.01-0.05/query", notes: "Varies by provider, usage-based", sourceId: 27 },
      { name: "Commercial providers", pricing: "$0.10+/record", notes: "Typically per-record, not per-GB" },
    ],
    cosilicoPricing: "$0.10/GB",
    cosilicoAdvantage: "Processed, calibrated data. Real-time economic signals included.",
  },
];
