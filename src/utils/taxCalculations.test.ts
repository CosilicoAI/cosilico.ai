import { calculateTaxesAndBenefits, HouseholdInput } from './taxCalculations';

describe('calculateTaxesAndBenefits', () => {
  describe('federal income tax', () => {
    it('calculates zero tax for income below standard deduction', () => {
      const input: HouseholdInput = {
        income: 10000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.federal_income_tax).toBe(0);
    });

    it('calculates tax for single filer at median income', () => {
      const input: HouseholdInput = {
        income: 65000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      // $65k - $14,600 deduction = $50,400 taxable
      // 10% on first $11,600 = $1,160
      // 12% on next $35,550 ($11,600 to $47,150) = $4,266
      // 22% on remaining $3,250 ($47,150 to $50,400) = $715
      // Total ~ $6,141
      expect(result.federal_income_tax).toBeGreaterThan(6000);
      expect(result.federal_income_tax).toBeLessThan(7000);
    });

    it('uses higher standard deduction for married filers', () => {
      const single: HouseholdInput = {
        income: 50000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const married: HouseholdInput = {
        ...single,
        filingStatus: 'married',
      };

      const singleResult = calculateTaxesAndBenefits(single);
      const marriedResult = calculateTaxesAndBenefits(married);

      // Married filers have higher standard deduction, so less tax
      expect(marriedResult.federal_income_tax).toBeLessThan(singleResult.federal_income_tax);
    });
  });

  describe('state income tax', () => {
    it('calculates zero state tax for Texas', () => {
      const input: HouseholdInput = {
        income: 100000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.state_income_tax).toBe(0);
    });

    it('calculates California state tax', () => {
      const input: HouseholdInput = {
        income: 100000,
        state: 'CA',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      // CA rate is 9.3% on taxable income
      expect(result.state_income_tax).toBeGreaterThan(0);
    });
  });

  describe('FICA', () => {
    it('calculates FICA at 7.65% for income below wage base', () => {
      const input: HouseholdInput = {
        income: 100000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.fica).toBe(Math.round(100000 * 0.0765));
    });

    it('calculates reduced rate above Social Security wage base', () => {
      const input: HouseholdInput = {
        income: 200000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      // First $168,600 at 7.65%, remaining at 1.45% (Medicare only)
      const expected = Math.round(168600 * 0.0765 + (200000 - 168600) * 0.0145);
      expect(result.fica).toBe(expected);
    });
  });

  describe('EITC', () => {
    it('provides EITC for low-income family with children', () => {
      const input: HouseholdInput = {
        income: 25000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 2,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.eitc).toBeGreaterThan(0);
    });

    it('provides no EITC for high-income family', () => {
      const input: HouseholdInput = {
        income: 100000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 2,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.eitc).toBe(0);
    });

    it('provides childless EITC for qualifying adults', () => {
      const input: HouseholdInput = {
        income: 15000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 30,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.eitc).toBeGreaterThan(0);
    });
  });

  describe('Child Tax Credit', () => {
    it('provides CTC for families with children', () => {
      const input: HouseholdInput = {
        income: 50000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 2,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.ctc).toBe(4000); // $2000 per child
    });

    it('provides no CTC for very low income', () => {
      const input: HouseholdInput = {
        income: 2000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 2,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.ctc).toBe(0);
    });
  });

  describe('SNAP', () => {
    it('provides SNAP for very low-income families', () => {
      const input: HouseholdInput = {
        income: 10000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 2,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.snap).toBeGreaterThan(0);
    });

    it('provides no SNAP for higher income', () => {
      const input: HouseholdInput = {
        income: 75000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.snap).toBe(0);
    });
  });

  describe('net income calculations', () => {
    it('calculates correct net income', () => {
      const input: HouseholdInput = {
        income: 50000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.net_income).toBe(
        input.income - result.total_tax + result.total_benefits
      );
    });

    it('calculates effective tax rate', () => {
      const input: HouseholdInput = {
        income: 100000,
        state: 'TX',
        filingStatus: 'single',
        numDependents: 0,
        age: 35,
      };
      const result = calculateTaxesAndBenefits(input);
      expect(result.effective_rate).toBeCloseTo(result.total_tax / input.income, 4);
    });
  });
});
