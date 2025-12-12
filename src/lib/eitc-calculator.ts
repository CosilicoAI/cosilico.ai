/**
 * EITC Calculator (TY 2025) - Auto-generated from Cosilico DSL
 *
 * This code runs entirely in the browser with full citation
 * chain - every value traces back to authoritative law.
 *
 * Sources:
 *   - 26 USC 32
 *   - 26 USC 32(b)(1)
 *   - Rev. Proc. 2024-40
 */

// Parameters from statute and guidance
export const PARAMS: Record<string, Record<number, number>> = {
  credit_pct: { 0: 7.65, 1: 34, 2: 40, 3: 45 }, // 26 USC 32(b)(1)
  phaseout_pct: { 0: 7.65, 1: 15.98, 2: 21.06, 3: 21.06 }, // 26 USC 32(b)(1)
  earned_income_amount: { 0: 8260, 1: 12730, 2: 17880, 3: 17880 }, // Rev. Proc. 2024-40
  phaseout_single: { 0: 10620, 1: 23350, 2: 23350, 3: 23350 }, // Rev. Proc. 2024-40
  phaseout_joint: { 0: 17730, 1: 30470, 2: 30470, 3: 30470 }, // Rev. Proc. 2024-40
  max_credit: { 0: 649, 1: 4328, 2: 7152, 3: 8046 }, // Rev. Proc. 2024-40
};

export interface CalculatorInputs {
  earned_income?: number;
  agi?: number;
  n_children?: number;
  is_joint?: boolean;
}

export interface Citation {
  param?: string;
  variable?: string;
  source: string;
}

export interface CalculatorResult {
  eitc: number;
  citations: Citation[];
}

/**
 * Calculate EITC with full citation chain.
 *
 * Every calculation traces back to authoritative law:
 * - Percentages from 26 USC 32(b)(1) (statutory)
 * - Dollar amounts from Rev. Proc. 2024-40 (inflation-adjusted)
 */
export function calculate({
  earned_income = 0,
  agi = 0,
  n_children = 0,
  is_joint = false,
}: CalculatorInputs = {}): CalculatorResult {
  // 26 USC 32
  const n = Math.min(n_children, 3);
  const creditPct = PARAMS.credit_pct[n] / 100;
  const phaseoutPct = PARAMS.phaseout_pct[n] / 100;
  const earnedAmount = PARAMS.earned_income_amount[n];
  const phaseoutStart = is_joint
    ? PARAMS.phaseout_joint[n]
    : PARAMS.phaseout_single[n];

  // 32(a)(1): Credit base = credit_pct * min(earned_income, earned_income_amount)
  const creditBase = creditPct * Math.min(earned_income, earnedAmount);

  // 32(a)(2): Phaseout = phaseout_pct * max(0, max(agi, earned_income) - phaseout_start)
  const incomeForPhaseout = Math.max(agi, earned_income);
  const excess = Math.max(0, incomeForPhaseout - phaseoutStart);
  const phaseout = phaseoutPct * excess;

  const eitc = Math.max(0, Math.round(creditBase - phaseout));

  return {
    eitc,
    citations: [
      { param: "credit_pct", source: "26 USC 32(b)(1)" },
      { param: "phaseout_pct", source: "26 USC 32(b)(1)" },
      { param: "earned_income_amount", source: "Rev. Proc. 2024-40" },
      { param: "phaseout_single", source: "Rev. Proc. 2024-40" },
      { param: "phaseout_joint", source: "Rev. Proc. 2024-40" },
      { variable: "eitc", source: "26 USC 32" },
    ],
  };
}

export default calculate;
