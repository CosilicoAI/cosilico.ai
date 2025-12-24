/**
 * TypeScript types for validation results dashboard
 */

export interface ValidatorBreakdown {
  matches: number;
  total: number;
  rate: number;
}

export interface Mismatch {
  description: string;
  count: number;
  explanation: string;
  citation: string;
  upstreamIssue?: string;
}

export interface SpeedMetrics {
  cosilicoTimeMs: number;
  peTimeMs: number;
  nCases: number;
  cosilicoPerCaseUs: number;
  pePerCaseUs: number;
  speedup: number;
  cosilicoThroughput: number;
  peThroughput: number;
}

export interface SectionSummary {
  total: number;
  matches: number;
  matchRate: number;
  averageReward?: number;
  federalMatchRate?: number;
  meanAbsoluteError: number;
}

export interface ValidationSection {
  section: string;
  title: string;
  variable: string;
  households: number;
  testCases: any[];
  summary: SectionSummary;
  validatorBreakdown?: {
    policyengine?: ValidatorBreakdown;
    taxsim?: ValidatorBreakdown;
  };
  speed?: SpeedMetrics;
  mismatches?: Mismatch[];
}

export interface Validator {
  name: string;
  available: boolean;
  version: string;
  householdsCovered: number;
}

export interface OverallSpeed {
  cosilicoTotalMs: number;
  peTotalMs: number;
  totalCases: number;
  speedup: number;
  cosilicoThroughput: number;
  peThroughput: number;
}

export interface OverallStats {
  totalHouseholds: number;
  totalTests: number;
  totalMatches: number;
  matchRate: number;
  meanAbsoluteError: number;
  speed?: OverallSpeed;
}

export interface ValidationResults {
  isSampleData: boolean;
  timestamp: string;
  commit: string;
  dataSource: string;
  householdsTotal: number;
  sections: ValidationSection[];
  overall: OverallStats;
  validators: Validator[];
}
