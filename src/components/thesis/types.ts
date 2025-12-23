export type Section = "problem" | "gap" | "simulation" | "encoding" | "markets" | "competition" | "model" | "traction" | "team" | "risks" | "ask";

export interface Node {
  id: string;
  label: string;
  type: "product" | "customer" | "market" | "capability";
  x: number;
  y: number;
  description: string;
  metrics?: string;
  sourceId?: number;
}

export interface Edge {
  from: string;
  to: string;
}
