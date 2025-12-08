import { TreeNode } from "./StatuteTree";

// EITC statute structure for demo
export const STATUTE_TREE: TreeNode = {
  id: "32",
  label: "§32 - EITC",
  children: [
    {
      id: "32/a",
      label: "(a) Allowance",
      children: [
        { id: "32/a/1", label: "(1) Credit Amount", file: "earned_income_credit.cosilico" },
        { id: "32/a/1/test", label: "↳ Tests", file: "earned_income_credit_test.yaml", isTest: true },
        {
          id: "32/a/2",
          label: "(2) Components",
          children: [
            { id: "32/a/2/A", label: "(A) Phase-in", file: "initial_credit_amount.cosilico" },
            { id: "32/a/2/B", label: "(B) Phase-out", file: "credit_reduction_amount.cosilico" },
          ],
        },
      ],
    },
    {
      id: "32/c",
      label: "(c) Definitions",
      children: [
        {
          id: "32/c/1",
          label: "(1) Eligible Individual",
          children: [
            { id: "32/c/1/A", label: "(A) Income Test", file: "income_eligible.cosilico" },
          ],
        },
        {
          id: "32/c/3",
          label: "(3) Qualifying Child",
          children: [
            { id: "32/c/3/A", label: "(A) Age Test", file: "qualifying_child.cosilico" },
          ],
        },
      ],
    },
    {
      id: "32/b",
      label: "(b) Parameters",
      children: [
        { id: "32/b/1", label: "(1) Rates", file: "credit_percentage.yaml" },
        {
          id: "32/b/2",
          label: "(2) Amounts",
          children: [
            { id: "32/b/2/A", label: "(A) Thresholds", file: "amounts.yaml", indexed: true },
          ],
        },
      ],
    },
    {
      id: "32/j",
      label: "(j) Indexing",
      children: [
        { id: "32/j/1", label: "(1) CPI Adjustment", file: "indexing_rule.yaml", isIndexingRule: true },
        { id: "32/j/2", label: "(2) Rounding", file: "rounding_rules.yaml" },
      ],
    },
  ],
};

export const CODE_SAMPLES: Record<string, { code: string; type: string; file: string }> = {
  "32/a/1": {
    type: "cosilico",
    file: "earned_income_credit.cosilico",
    code: `references {
  is_eligible: statute/26/32/c/1/A/i/is_eligible_individual
  initial_credit: statute/26/32/a/2/A/initial_credit_amount
  reduction: statute/26/32/a/2/B/credit_reduction_amount
}

variable earned_income_credit {
  entity TaxUnit
  period Year
  dtype Money

  formula {
    if not is_eligible then
      return 0
    return max(0, initial_credit - reduction)
  }
}`,
  },
  "32/a/2/A": {
    type: "cosilico",
    file: "initial_credit_amount.cosilico",
    code: `references {
  earned_income: statute/26/32/c/2/A/earned_income
  credit_percentage: statute/26/32/b/1/credit_percentage
  earned_income_amount: statute/26/32/b/2/A/earned_income_amount
  num_qualifying_children: statute/26/32/c/3/A/num_qualifying_children
}

variable initial_credit_amount {
  entity TaxUnit
  period Year
  dtype Money

  formula {
    let rate = credit_percentage[num_qualifying_children]
    let cap = earned_income_amount[num_qualifying_children]
    return rate * min(earned_income, cap)
  }
}`,
  },
  "32/a/2/B": {
    type: "cosilico",
    file: "credit_reduction_amount.cosilico",
    code: `references {
  earned_income: statute/26/32/c/2/A/earned_income
  adjusted_gross_income: statute/26/62/a/adjusted_gross_income
  phaseout_percentage: statute/26/32/b/1/phaseout_percentage
  phaseout_amount: statute/26/32/b/2/A/phaseout_amount
  num_qualifying_children: statute/26/32/c/3/A/num_qualifying_children
}

variable credit_reduction_amount {
  entity TaxUnit
  period Year
  dtype Money

  formula {
    let income = max(adjusted_gross_income, earned_income)
    let rate = phaseout_percentage[num_qualifying_children]
    let threshold = phaseout_amount[num_qualifying_children]
    return max(0, rate * (income - threshold))
  }
}`,
  },
  "32/c/3/A": {
    type: "cosilico",
    file: "qualifying_child.cosilico",
    code: `references {
  age: core/person/age
  is_dependent: statute/26/152/is_dependent
  max_age: statute/26/32/c/3/A/max_age
  max_age_student: statute/26/32/c/3/A/max_age_student
  is_student: statute/26/152/d/2/is_full_time_student
}

# Person-level: Is this person a qualifying child?
variable is_eitc_qualifying_child {
  entity Person
  period Year
  dtype Boolean

  formula {
    if not is_dependent then return false
    if age < max_age then return true
    if is_student and age < max_age_student then return true
    return false
  }
}

# TaxUnit-level: Count qualifying children across members
variable num_eitc_qualifying_children {
  entity TaxUnit
  period Year
  dtype Integer

  formula {
    return sum(members, is_eitc_qualifying_child)
  }
}`,
  },
  "32/b/1": {
    type: "yaml",
    file: "credit_percentage.yaml",
    code: `credit_percentage:
  description: Credit percentages by number of qualifying children
  values:
    by_num_qualifying_children:
      0: 0.0765   # 7.65%
      1: 0.34     # 34%
      2: 0.40     # 40%
      3: 0.45     # 45%

phaseout_percentage:
  values:
    by_num_qualifying_children:
      0: 0.0765
      1: 0.1598
      2: 0.2106
      3: 0.2106`,
  },
  "32/b/2/A": {
    type: "yaml",
    file: "amounts.yaml",
    code: `earned_income_amount:
  indexing_rule: statute/26/32/j/1/indexing_rule

  base:
    year: 2015
    by_num_qualifying_children:
      0: 6580
      1: 9880
      2: 13870
      3: 13870

  published:
    - effective_from: 2024-01-01
      source: Rev. Proc. 2023-34
      by_num_qualifying_children:
        0: 7840
        1: 12390
        2: 17400
        3: 17400`,
  },
  "32/j/1": {
    type: "yaml",
    file: "indexing_rule.yaml",
    code: `indexing_rule:
  description: EITC cost-of-living adjustment

  method:
    type: cost_of_living_adjustment
    reference_section: statute/26/1/f/3
    base_year: 2015

  rounding:
    rule: round_down_to_nearest
    amount: 10`,
  },
  "32/j/2": {
    type: "yaml",
    file: "rounding_rules.yaml",
    code: `rounding_rules:
  general:
    applies_to:
      - earned_income_amount
      - phaseout_amount
      - joint_return_adjustment
    rule: round_down_to_nearest
    amount: 10

  disqualified_income:
    applies_to:
      - disqualified_income_limit
    rule: round_down_to_nearest
    amount: 50`,
  },
  "32/a/1/test": {
    type: "yaml",
    file: "earned_income_credit_test.yaml",
    code: `# Tests live alongside formulas as sibling files
tests:
  - name: "Single filer, no children, low income"
    period: 2024
    inputs:
      tax_unit.earned_income: 8000
      tax_unit.adjusted_gross_income: 8000
      tax_unit.num_qualifying_children: 0
      tax_unit.filing_status: single
    outputs:
      tax_unit.earned_income_credit: 612

  - name: "Single filer, two children, phase-in"
    period: 2024
    inputs:
      tax_unit.earned_income: 15000
      tax_unit.adjusted_gross_income: 15000
      tax_unit.num_qualifying_children: 2
    outputs:
      tax_unit.earned_income_credit: 6000

  - name: "Joint filer, three children, phase-out"
    period: 2024
    inputs:
      tax_unit.earned_income: 45000
      tax_unit.adjusted_gross_income: 48000
      tax_unit.num_qualifying_children: 3
      tax_unit.filing_status: joint
    outputs:
      tax_unit.earned_income_credit: 4521`,
  },
  "32/c/1/A": {
    type: "cosilico",
    file: "income_eligible.cosilico",
    code: `references {
  # Access parent entity (TaxUnit) attributes from Person
  tax_unit.adjusted_gross_income: statute/26/62/a/adjusted_gross_income
  tax_unit.investment_income: statute/26/32/i/investment_income
  disqualified_income_limit: statute/26/32/i/2/disqualified_income_limit
  eitc_income_limit: statute/26/32/b/2/A/eitc_income_limit
  num_qualifying_children: statute/26/32/c/3/A/num_qualifying_children
}

# Person-level eligibility based on TaxUnit income
variable is_income_eligible {
  entity Person
  period Year
  dtype Boolean

  formula {
    # Access parent TaxUnit's income via tax_unit prefix
    if tax_unit.investment_income > disqualified_income_limit then
      return false

    let income_limit = eitc_income_limit[tax_unit.num_qualifying_children]
    return tax_unit.adjusted_gross_income <= income_limit
  }
}`,
  },
};
