import { Node, Edge } from "./types";

export const nodes: Node[] = [
  // Products (center column)
  { id: "rules", label: "Rules API", type: "product", x: 50, y: 25,
    description: "Calculate taxes and benefits for any household. Every formula traced to statute.",
    metrics: "$0.001-0.01/call" },
  { id: "data", label: "Data API", type: "product", x: 50, y: 50,
    description: "Predict 200+ household attributes from partial information.",
    metrics: "$0.10-1.00/record" },
  { id: "simulate", label: "Simulation API", type: "product", x: 50, y: 75,
    description: "Run policy reforms across 100M+ synthetic households.",
    metrics: "$50K-500K/project" },

  // Customers (right column)
  { id: "fintech", label: "Fintech Apps", type: "customer", x: 80, y: 20,
    description: "Tax estimates, benefits eligibility, financial planning features.",
    metrics: "$5K-50K/mo" },
  { id: "banks", label: "Banks & Lenders", type: "customer", x: 80, y: 35,
    description: "Income prediction, risk modeling, portfolio analysis.",
    metrics: "$100K-1M/year" },
  { id: "hr", label: "HR Platforms", type: "customer", x: 80, y: 50,
    description: "Payroll tax, benefits eligibility, compensation modeling.",
    metrics: "$100K+/year" },
  { id: "gov", label: "Government", type: "customer", x: 80, y: 65,
    description: "Policy costing, legislative scoring, reform analysis.",
    metrics: "$50K-500K/project" },
  { id: "ai", label: "AI Labs", type: "customer", x: 80, y: 80,
    description: "Reliable tools for AI agents. No more tax hallucinations.",
    metrics: "Strategic" },

  // Markets (left column)
  { id: "tax-market", label: "Tax Software", type: "market", x: 20, y: 25,
    description: "Cloud-based solutions: 61% of revenue. 11.4% CAGR through 2032.",
    metrics: "$90B → $215B", sourceId: 3 },
  { id: "benefits-market", label: "Benefits Admin", type: "market", x: 20, y: 45,
    description: "Cloud deployment: 67.6% of revenue. SMBs growing 13.6%/year.",
    metrics: "$2.5B → $4B", sourceId: 4 },
  { id: "ai-market", label: "AI Infrastructure", type: "market", x: 20, y: 65,
    description: "AI agents market: $47B by 2030. Function calling now standard.",
    metrics: "$46B → $356B", sourceId: 5 },
  { id: "data-market", label: "Data Enrichment", type: "market", x: 20, y: 85,
    description: "Clearbit acquired by HubSpot. ZoomInfo public at $10B+.",
    metrics: "$2.4B → $4.6B", sourceId: 6 },
];

export const edges: Edge[] = [
  { from: "tax-market", to: "rules" },
  { from: "benefits-market", to: "rules" },
  { from: "ai-market", to: "rules" },
  { from: "data-market", to: "data" },
  { from: "benefits-market", to: "simulate" },
  { from: "rules", to: "fintech" },
  { from: "rules", to: "hr" },
  { from: "rules", to: "ai" },
  { from: "data", to: "banks" },
  { from: "data", to: "fintech" },
  { from: "simulate", to: "gov" },
  { from: "simulate", to: "banks" },
];
