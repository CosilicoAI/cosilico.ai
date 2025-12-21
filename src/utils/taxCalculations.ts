export interface HouseholdInput {
  income: number;
  state: string;
  filingStatus: "single" | "married" | "head_of_household";
  numDependents: number;
  age: number;
}

export interface CalculationResult {
  federal_income_tax: number;
  state_income_tax: number;
  fica: number;
  total_tax: number;
  eitc: number;
  ctc: number;
  snap: number;
  total_benefits: number;
  net_income: number;
  effective_rate: number;
  marginal_rate: number;
}

/**
 * Mock tax and benefit calculations for demo purposes.
 * In production, this would call the actual Cosilico API.
 */
export function calculateTaxesAndBenefits(input: HouseholdInput): CalculationResult {
  const { income, state, filingStatus, numDependents, age } = input;

  // Simplified tax calculations for demo
  const standardDeduction = filingStatus === "married" ? 29200 : filingStatus === "head_of_household" ? 21900 : 14600;
  const taxableIncome = Math.max(0, income - standardDeduction);

  // Federal brackets (simplified 2024)
  let federalTax = 0;
  if (filingStatus === "married") {
    if (taxableIncome > 731200) federalTax = 186601.50 + 0.37 * (taxableIncome - 731200);
    else if (taxableIncome > 487450) federalTax = 103198.50 + 0.35 * (taxableIncome - 487450);
    else if (taxableIncome > 383900) federalTax = 66543 + 0.32 * (taxableIncome - 383900);
    else if (taxableIncome > 201050) federalTax = 41156.50 + 0.24 * (taxableIncome - 201050);
    else if (taxableIncome > 94300) federalTax = 15580.50 + 0.22 * (taxableIncome - 94300);
    else if (taxableIncome > 23200) federalTax = 2320 + 0.12 * (taxableIncome - 23200);
    else federalTax = taxableIncome * 0.10;
  } else {
    if (taxableIncome > 609350) federalTax = 183647.25 + 0.37 * (taxableIncome - 609350);
    else if (taxableIncome > 243725) federalTax = 55678.50 + 0.35 * (taxableIncome - 243725);
    else if (taxableIncome > 191950) federalTax = 39110.50 + 0.32 * (taxableIncome - 191950);
    else if (taxableIncome > 100525) federalTax = 17168.50 + 0.24 * (taxableIncome - 100525);
    else if (taxableIncome > 47150) federalTax = 5426.50 + 0.22 * (taxableIncome - 47150);
    else if (taxableIncome > 11600) federalTax = 1160 + 0.12 * (taxableIncome - 11600);
    else federalTax = taxableIncome * 0.10;
  }

  // State tax (simplified)
  const stateRates: Record<string, number> = {
    CA: 0.093, TX: 0, NY: 0.0685, FL: 0, WA: 0, IL: 0.0495,
    PA: 0.0307, OH: 0.04, GA: 0.055, NC: 0.0525,
  };
  const stateRate = state in stateRates ? stateRates[state] : 0.05;
  const stateTax = taxableIncome * stateRate;

  // FICA
  const fica = Math.min(income, 168600) * 0.0765 + Math.max(0, income - 168600) * 0.0145;

  // EITC (simplified)
  let eitc = 0;
  if (income < 60000 && numDependents > 0) {
    const maxEitc = numDependents >= 3 ? 7830 : numDependents === 2 ? 6960 : 4213;
    const phaseoutStart = filingStatus === "married" ? 28120 : 21560;
    if (income < phaseoutStart) {
      eitc = Math.min(maxEitc, income * 0.45);
    } else {
      eitc = Math.max(0, maxEitc - (income - phaseoutStart) * 0.21);
    }
  } else if (income < 18000 && age >= 25 && age <= 64 && numDependents === 0) {
    eitc = Math.min(632, income * 0.0765);
  }

  // CTC
  const ctc = numDependents * Math.min(2000, Math.max(0, income > 2500 ? 2000 : 0));

  // SNAP (simplified)
  let snap = 0;
  const povertyLine = 15060 + (numDependents * 5380);
  if (income < povertyLine * 1.3) {
    const maxSnap = 234 + (numDependents * 150);
    snap = Math.max(0, maxSnap - income * 0.03) * 12;
  }

  const totalTax = federalTax + stateTax + fica;
  const totalBenefits = eitc + ctc + snap;
  const netIncome = income - totalTax + totalBenefits;

  return {
    federal_income_tax: Math.round(federalTax),
    state_income_tax: Math.round(stateTax),
    fica: Math.round(fica),
    total_tax: Math.round(totalTax),
    eitc: Math.round(eitc),
    ctc: Math.round(ctc),
    snap: Math.round(snap),
    total_benefits: Math.round(totalBenefits),
    net_income: Math.round(netIncome),
    effective_rate: totalTax / income,
    marginal_rate: income > 100000 ? 0.32 : income > 50000 ? 0.22 : 0.12,
  };
}
