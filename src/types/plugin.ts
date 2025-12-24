/**
 * TypeScript types for plugin performance dashboard
 */

export interface PluginArm {
  version: string;
  successes: number;
  failures: number;
  totalMatchRate: number;
  nValidations: number;
  createdAt: string;
  variablesTested: string[];
  regressionsFrom: Record<string, string[]>;
}

export interface EncodingSession {
  variable: string;
  statuteRef: string;
  pluginVersion: string;
  timestamp: string;
  matchRate: number | null;
  passed: boolean | null;
  status: string | null;
  diagnosisLayer: string | null;
  improvementDecisionId: string | null;
}

export interface ImprovementDecision {
  id: string;
  question: string;
  context: string;
  createdAt: string;
  decidedAt: string | null;
  chosenOption: string | null;
  actualOutcomes: Record<string, number>;
  scoredAt: string | null;
}

export interface CalibrationSummary {
  nDecisions: number;
  coverage: number | null;
  expectedCoverage: number;
  calibrationError: number | null;
  meanAbsoluteError: number | null;
}

export interface PluginStats {
  status: string;
  totalValidations: number;
  totalSuccesses: number;
  overallSuccessRate: number;
  uniqueVariablesTested: number;
  pluginVersions: number;
  bestVersion: {
    version: string;
    successRate: number;
    nValidations: number;
  };
}

export interface PluginDashboardData {
  isSampleData: boolean;
  timestamp: string;
  pluginArms: Record<string, PluginArm>;
  sessions: EncodingSession[];
  stats: PluginStats;
  calibration: CalibrationSummary;
  improvements: ImprovementDecision[];
}

export interface VariableStatus {
  variable: string;
  statuteRef: string;
  latestMatchRate: number;
  latestStatus: string;
  pluginVersion: string;
  timestamp: string;
  triggeredUpdate: boolean;
  diagnosisLayer: string | null;
}
