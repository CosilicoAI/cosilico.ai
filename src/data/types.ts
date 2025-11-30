export type Tab = "home" | "architecture" | "demo" | "plan" | "deck";

export interface Layer {
  id: string;
  name: string;
  description: string;
  color: string;
  components: Component[];
}

export interface Component {
  id: string;
  name: string;
  description: string;
  storage?: "files" | "db" | "both";
  inputs?: string[];
  outputs?: string[];
  details?: string[];
}

export interface Flow {
  id: string;
  name: string;
  description: string;
  steps: FlowStep[];
}

export interface FlowStep {
  component: string;
  action: string;
  data?: string;
}
