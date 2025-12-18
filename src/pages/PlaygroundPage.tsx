import React, { useState, useEffect } from "react";
import "../styles/Playground.css";

type PlaygroundMode = "calculator" | "lawarchive";

interface HouseholdInput {
  income: number;
  state: string;
  filingStatus: "single" | "married" | "head_of_household";
  numDependents: number;
  age: number;
}

interface CalculationResult {
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

const STATES = [
  { code: "CA", name: "California" },
  { code: "TX", name: "Texas" },
  { code: "NY", name: "New York" },
  { code: "FL", name: "Florida" },
  { code: "WA", name: "Washington" },
  { code: "IL", name: "Illinois" },
  { code: "PA", name: "Pennsylvania" },
  { code: "OH", name: "Ohio" },
  { code: "GA", name: "Georgia" },
  { code: "NC", name: "North Carolina" },
];

// Mock calculation - in production this would call the actual API
function calculateTaxesAndBenefits(input: HouseholdInput): CalculationResult {
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
  const stateTax = taxableIncome * (stateRates[state] || 0.05);

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

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + "%";
}

// Mock Law Archive data
const SAMPLE_STATUTES = [
  { citation: "26 USC 32", title: "Earned income", section: "32", title_num: 26 },
  { citation: "26 USC 24", title: "Child tax credit", section: "24", title_num: 26 },
  { citation: "26 USC 1", title: "Tax imposed", section: "1", title_num: 26 },
  { citation: "26 USC 61", title: "Gross income defined", section: "61", title_num: 26 },
  { citation: "7 USC 2017", title: "Value of allotment", section: "2017", title_num: 7 },
];

const MOCK_STATUTE_TEXT: Record<string, { title: string; text: string; subsections: string[] }> = {
  "26/32": {
    title: "§ 32. Earned income",
    text: `(a) Allowance of credit

(1) In general
In the case of an eligible individual, there shall be allowed as a credit against the tax imposed by this subtitle for the taxable year an amount equal to the credit percentage of so much of the taxpayer's earned income for the taxable year as does not exceed the earned income amount.

(2) Limitation
The amount of the credit allowable to a taxpayer under paragraph (1) for any taxable year shall not exceed the excess (if any) of—
  (A) the credit percentage of the earned income amount, over
  (B) the phaseout percentage of so much of the adjusted gross income (or, if greater, the earned income) of the taxpayer for the taxable year as exceeds the phaseout amount.

(b) Percentages and amounts
For purposes of subsection (a)—

(1) Percentages
The credit percentage and the phaseout percentage shall be determined as follows:

  In the case of an eligible individual with:
  • 1 qualifying child: credit 34%, phaseout 15.98%
  • 2 qualifying children: credit 40%, phaseout 21.06%
  • 3 or more qualifying children: credit 45%, phaseout 21.06%
  • No qualifying children: credit 7.65%, phaseout 7.65%`,
    subsections: ["(a) Allowance of credit", "(b) Percentages and amounts", "(c) Definitions and special rules", "(d) Married individuals", "(i) Denial of credit for individuals having excessive investment income"],
  },
  "26/24": {
    title: "§ 24. Child tax credit",
    text: `(a) Allowance of credit
There shall be allowed as a credit against the tax imposed by this subtitle for the taxable year with respect to each qualifying child of the taxpayer for which the taxpayer is allowed a deduction under section 151 an amount equal to $1,000.

(b) Limitations
(1) Limitation based on adjusted gross income
The amount of the credit allowable under subsection (a) shall be reduced (but not below zero) by $50 for each $1,000 (or fraction thereof) by which the taxpayer's modified adjusted gross income exceeds the threshold amount.`,
    subsections: ["(a) Allowance of credit", "(b) Limitations", "(c) Qualifying child", "(d) Portion of credit refundable"],
  },
  "26/1": {
    title: "§ 1. Tax imposed",
    text: `(a) Married individuals filing joint returns and surviving spouses
There is hereby imposed on the taxable income of—
(1) every married individual (as defined in section 7703) who makes a single return jointly with his spouse under section 6013, and
(2) every surviving spouse (as defined in section 2(a)),
a tax determined in accordance with the following table...

(b) Heads of households
There is hereby imposed on the taxable income of every head of a household (as defined in section 2(b)) a tax determined in accordance with the following table...

(c) Unmarried individuals (other than surviving spouses and heads of households)
There is hereby imposed on the taxable income of every individual (other than a surviving spouse as defined in section 2(a) or the head of a household as defined in section 2(b)) who is not a married individual (as defined in section 7703) a tax determined in accordance with the following table...`,
    subsections: ["(a) Married individuals filing joint returns", "(b) Heads of households", "(c) Unmarried individuals", "(d) Married individuals filing separate returns", "(e) Estates and trusts"],
  },
};

export default function PlaygroundPage() {
  // Mode toggle
  const [mode, setMode] = useState<PlaygroundMode>("calculator");

  // Calculator state
  const [input, setInput] = useState<HouseholdInput>({
    income: 65000,
    state: "CA",
    filingStatus: "single",
    numDependents: 0,
    age: 35,
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<"summary" | "api" | "citations">("summary");
  const [isCalculating, setIsCalculating] = useState(false);

  // Law Archive state
  const [lawQuery, setLawQuery] = useState("");
  const [selectedStatute, setSelectedStatute] = useState<string | null>("26/32");
  const [lawActiveTab, setLawActiveTab] = useState<"text" | "api" | "versions">("text");
  const [searchResults, setSearchResults] = useState(SAMPLE_STATUTES);

  // Calculator effect
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setResult(calculateTaxesAndBenefits(input));
      setIsCalculating(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [input]);

  // Law Archive search effect
  useEffect(() => {
    if (lawQuery.trim() === "") {
      setSearchResults(SAMPLE_STATUTES);
    } else {
      const filtered = SAMPLE_STATUTES.filter(
        (s) =>
          s.citation.toLowerCase().includes(lawQuery.toLowerCase()) ||
          s.title.toLowerCase().includes(lawQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [lawQuery]);

  const currentStatute = selectedStatute ? MOCK_STATUTE_TEXT[selectedStatute] : null;

  const apiRequest = {
    endpoint: "POST /calculate",
    body: {
      household: {
        members: [
          {
            age: input.age,
            is_tax_unit_head: true,
            employment_income: input.income,
          },
          ...Array(input.numDependents).fill(null).map((_, i) => ({
            age: 10,
            is_tax_unit_dependent: true,
          })),
        ],
        state_code: input.state,
        filing_status: input.filingStatus,
      },
      year: 2024,
    },
  };

  const apiResponse = result ? {
    status: 200,
    data: {
      taxes: {
        federal_income_tax: { value: result.federal_income_tax, citation: "26 USC §1" },
        state_income_tax: { value: result.state_income_tax, citation: `${input.state} Rev. & Tax. Code` },
        fica: { value: result.fica, citation: "26 USC §3101" },
      },
      benefits: {
        eitc: { value: result.eitc, citation: "26 USC §32" },
        ctc: { value: result.ctc, citation: "26 USC §24" },
        snap: { value: result.snap, citation: "7 USC §2017" },
      },
      summary: {
        total_tax: result.total_tax,
        total_benefits: result.total_benefits,
        net_income: result.net_income,
        effective_tax_rate: result.effective_rate,
        marginal_tax_rate: result.marginal_rate,
      },
    },
  } : null;

  return (
    <div className="playground">
      {/* Header */}
      <header className="playground-header">
        <a href="/" className="playground-logo">
          <img src="/cosilico-logo-dark.svg" alt="" />
          <span>cosilico</span>
        </a>
        <div className="mode-toggle">
          <button
            className={mode === "calculator" ? "active" : ""}
            onClick={() => setMode("calculator")}
          >
            Rules Calculator
          </button>
          <button
            className={mode === "lawarchive" ? "active" : ""}
            onClick={() => setMode("lawarchive")}
          >
            Law Archive
          </button>
        </div>
        <div className="playground-badge">
          <span className="badge-dot demo"></span>
          Demo — Sample Data
        </div>
      </header>

      <div className="playground-container">
        {mode === "calculator" ? (
          <>
        {/* Input Panel */}
        <aside className="input-panel">
          <div className="panel-header">
            <h2>Household Profile</h2>
            <span className="panel-hint">Adjust inputs to see real-time calculations</span>
          </div>

          <div className="input-group">
            <label htmlFor="income">
              <span className="label-text">Annual Income</span>
              <span className="label-value">{formatCurrency(input.income)}</span>
            </label>
            <input
              type="range"
              id="income"
              min={0}
              max={500000}
              step={1000}
              value={input.income}
              onChange={(e) => setInput({ ...input, income: Number(e.target.value) })}
            />
            <div className="range-labels">
              <span>$0</span>
              <span>$500k</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="state">
              <span className="label-text">State</span>
            </label>
            <select
              id="state"
              value={input.state}
              onChange={(e) => setInput({ ...input, state: e.target.value })}
            >
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>
              <span className="label-text">Filing Status</span>
            </label>
            <div className="button-group">
              {[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
                { value: "head_of_household", label: "HoH" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  className={input.filingStatus === opt.value ? "active" : ""}
                  onClick={() => setInput({ ...input, filingStatus: opt.value as any })}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="dependents">
              <span className="label-text">Dependents</span>
              <span className="label-value">{input.numDependents}</span>
            </label>
            <input
              type="range"
              id="dependents"
              min={0}
              max={6}
              step={1}
              value={input.numDependents}
              onChange={(e) => setInput({ ...input, numDependents: Number(e.target.value) })}
            />
            <div className="range-labels">
              <span>0</span>
              <span>6</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="age">
              <span className="label-text">Age</span>
              <span className="label-value">{input.age}</span>
            </label>
            <input
              type="range"
              id="age"
              min={18}
              max={80}
              step={1}
              value={input.age}
              onChange={(e) => setInput({ ...input, age: Number(e.target.value) })}
            />
            <div className="range-labels">
              <span>18</span>
              <span>80</span>
            </div>
          </div>

          <div className="api-hint">
            <code>POST /calculate</code>
            <span>~50ms response time</span>
          </div>
        </aside>

        {/* Results Panel */}
        <main className="results-panel">
          <div className="results-tabs">
            <button
              className={activeTab === "summary" ? "active" : ""}
              onClick={() => setActiveTab("summary")}
            >
              Summary
            </button>
            <button
              className={activeTab === "api" ? "active" : ""}
              onClick={() => setActiveTab("api")}
            >
              API Response
            </button>
            <button
              className={activeTab === "citations" ? "active" : ""}
              onClick={() => setActiveTab("citations")}
            >
              Citations
            </button>
          </div>

          <div className={`results-content ${isCalculating ? "calculating" : ""}`}>
            {activeTab === "summary" && result && (
              <div className="summary-view">
                {/* Net Income Hero */}
                <div className="net-income-hero">
                  <span className="net-label">Net Income</span>
                  <span className="net-value">{formatCurrency(result.net_income)}</span>
                  <span className="net-subtext">
                    after taxes and benefits
                  </span>
                </div>

                {/* Visual Breakdown */}
                <div className="breakdown-visual">
                  <div className="breakdown-bar">
                    <div
                      className="bar-segment taxes"
                      style={{ width: `${(result.total_tax / input.income) * 100}%` }}
                      title={`Taxes: ${formatCurrency(result.total_tax)}`}
                    />
                    <div
                      className="bar-segment take-home"
                      style={{ width: `${((input.income - result.total_tax) / input.income) * 100}%` }}
                      title={`Take Home: ${formatCurrency(input.income - result.total_tax)}`}
                    />
                    {result.total_benefits > 0 && (
                      <div
                        className="bar-segment benefits"
                        style={{ width: `${(result.total_benefits / input.income) * 100}%` }}
                        title={`Benefits: ${formatCurrency(result.total_benefits)}`}
                      />
                    )}
                  </div>
                  <div className="breakdown-legend">
                    <span className="legend-item taxes">
                      <span className="legend-dot"></span>
                      Taxes ({formatPercent(result.total_tax / input.income)})
                    </span>
                    <span className="legend-item take-home">
                      <span className="legend-dot"></span>
                      Take Home
                    </span>
                    {result.total_benefits > 0 && (
                      <span className="legend-item benefits">
                        <span className="legend-dot"></span>
                        Benefits (+{formatPercent(result.total_benefits / input.income)})
                      </span>
                    )}
                  </div>
                </div>

                {/* Detail Cards */}
                <div className="detail-grid">
                  <div className="detail-card taxes">
                    <h3>Taxes</h3>
                    <div className="detail-total">{formatCurrency(result.total_tax)}</div>
                    <div className="detail-breakdown">
                      <div className="detail-row">
                        <span>Federal Income Tax</span>
                        <span>{formatCurrency(result.federal_income_tax)}</span>
                      </div>
                      <div className="detail-row">
                        <span>State Income Tax</span>
                        <span>{formatCurrency(result.state_income_tax)}</span>
                      </div>
                      <div className="detail-row">
                        <span>FICA (SS + Medicare)</span>
                        <span>{formatCurrency(result.fica)}</span>
                      </div>
                    </div>
                    <div className="detail-rates">
                      <span>Effective: {formatPercent(result.effective_rate)}</span>
                      <span>Marginal: {formatPercent(result.marginal_rate)}</span>
                    </div>
                  </div>

                  <div className="detail-card benefits">
                    <h3>Benefits</h3>
                    <div className="detail-total">{formatCurrency(result.total_benefits)}</div>
                    <div className="detail-breakdown">
                      <div className="detail-row">
                        <span>EITC</span>
                        <span>{formatCurrency(result.eitc)}</span>
                      </div>
                      <div className="detail-row">
                        <span>Child Tax Credit</span>
                        <span>{formatCurrency(result.ctc)}</span>
                      </div>
                      <div className="detail-row">
                        <span>SNAP</span>
                        <span>{formatCurrency(result.snap)}</span>
                      </div>
                    </div>
                    {result.total_benefits === 0 && (
                      <div className="detail-note">
                        No benefits at this income level
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div className="api-view">
                <div className="code-block request">
                  <div className="code-header">
                    <span className="method">POST</span>
                    <span className="endpoint">/calculate</span>
                  </div>
                  <pre>{JSON.stringify(apiRequest.body, null, 2)}</pre>
                </div>
                <div className="code-block response">
                  <div className="code-header">
                    <span className="status">200 OK</span>
                    <span className="time">47ms</span>
                  </div>
                  <pre>{JSON.stringify(apiResponse?.data, null, 2)}</pre>
                </div>
              </div>
            )}

            {activeTab === "citations" && result && (
              <div className="citations-view">
                <p className="citations-intro">
                  Every calculation traces back to statute. Click any citation to view the source law.
                </p>
                <div className="citation-list">
                  <div className="citation-item">
                    <div className="citation-header">
                      <span className="citation-label">Federal Income Tax</span>
                      <span className="citation-value">{formatCurrency(result.federal_income_tax)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/1" target="_blank" rel="noopener noreferrer" className="citation-link">
                      26 U.S.C. § 1 — Tax imposed
                    </a>
                  </div>
                  <div className="citation-item">
                    <div className="citation-header">
                      <span className="citation-label">FICA</span>
                      <span className="citation-value">{formatCurrency(result.fica)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/3101" target="_blank" rel="noopener noreferrer" className="citation-link">
                      26 U.S.C. § 3101 — Rate of tax
                    </a>
                  </div>
                  <div className="citation-item">
                    <div className="citation-header">
                      <span className="citation-label">EITC</span>
                      <span className="citation-value">{formatCurrency(result.eitc)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/32" target="_blank" rel="noopener noreferrer" className="citation-link">
                      26 U.S.C. § 32 — Earned income
                    </a>
                  </div>
                  <div className="citation-item">
                    <div className="citation-header">
                      <span className="citation-label">Child Tax Credit</span>
                      <span className="citation-value">{formatCurrency(result.ctc)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/24" target="_blank" rel="noopener noreferrer" className="citation-link">
                      26 U.S.C. § 24 — Child tax credit
                    </a>
                  </div>
                  <div className="citation-item">
                    <div className="citation-header">
                      <span className="citation-label">SNAP</span>
                      <span className="citation-value">{formatCurrency(result.snap)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/7/2017" target="_blank" rel="noopener noreferrer" className="citation-link">
                      7 U.S.C. § 2017 — Value of allotment
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
          </>
        ) : (
          <>
            {/* Law Archive - Search Panel */}
            <aside className="input-panel law-archive-panel">
              <div className="panel-header">
                <h2>Search Statutes</h2>
                <span className="panel-hint">Query the US Code by citation or keyword</span>
              </div>

              <div className="input-group">
                <label htmlFor="law-search">
                  <span className="label-text">Search</span>
                </label>
                <input
                  type="text"
                  id="law-search"
                  className="law-search-input"
                  placeholder="e.g., 26 USC 32 or &quot;earned income&quot;"
                  value={lawQuery}
                  onChange={(e) => setLawQuery(e.target.value)}
                />
              </div>

              <div className="statute-list">
                {searchResults.map((statute) => (
                  <button
                    key={`${statute.title_num}/${statute.section}`}
                    className={`statute-item ${selectedStatute === `${statute.title_num}/${statute.section}` ? "active" : ""}`}
                    onClick={() => setSelectedStatute(`${statute.title_num}/${statute.section}`)}
                  >
                    <span className="statute-citation">{statute.citation}</span>
                    <span className="statute-title">{statute.title}</span>
                  </button>
                ))}
                {searchResults.length === 0 && (
                  <div className="no-results">No matching statutes found</div>
                )}
              </div>

              <div className="api-hint">
                <code>GET /v1/sections/{"{title}"}/{"{section}"}</code>
                <span>~20ms response time</span>
              </div>
            </aside>

            {/* Law Archive - Results Panel */}
            <main className="results-panel law-results">
              <div className="results-tabs">
                <button
                  className={lawActiveTab === "text" ? "active" : ""}
                  onClick={() => setLawActiveTab("text")}
                >
                  Statute Text
                </button>
                <button
                  className={lawActiveTab === "api" ? "active" : ""}
                  onClick={() => setLawActiveTab("api")}
                >
                  API Response
                </button>
                <button
                  className={lawActiveTab === "versions" ? "active" : ""}
                  onClick={() => setLawActiveTab("versions")}
                >
                  Historical Versions
                </button>
              </div>

              <div className="results-content">
                {lawActiveTab === "text" && currentStatute && (
                  <div className="statute-view">
                    <h2 className="statute-heading">{currentStatute.title}</h2>
                    <div className="statute-meta">
                      <span className="meta-item">Title 26 — Internal Revenue Code</span>
                      <span className="meta-item">Current through 2024</span>
                    </div>
                    <div className="statute-toc">
                      <h4>Subsections</h4>
                      <ul>
                        {currentStatute.subsections.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                    <pre className="statute-text">{currentStatute.text}</pre>
                  </div>
                )}

                {lawActiveTab === "text" && !currentStatute && (
                  <div className="empty-state">
                    <p>Select a statute from the list to view its text.</p>
                  </div>
                )}

                {lawActiveTab === "api" && selectedStatute && (
                  <div className="api-view">
                    <div className="code-block request">
                      <div className="code-header">
                        <span className="method get">GET</span>
                        <span className="endpoint">/v1/sections/{selectedStatute}</span>
                      </div>
                      <pre>{JSON.stringify({ as_of: "2024-01-01" }, null, 2)}</pre>
                    </div>
                    <div className="code-block response">
                      <div className="code-header">
                        <span className="status">200 OK</span>
                        <span className="time">18ms</span>
                      </div>
                      <pre>{JSON.stringify({
                        title: selectedStatute?.split("/")[0],
                        section: selectedStatute?.split("/")[1],
                        heading: currentStatute?.title || "",
                        text: currentStatute?.text.slice(0, 200) + "...",
                        effective_date: "2024-01-01",
                        source: "uslm",
                        subsections: currentStatute?.subsections || [],
                      }, null, 2)}</pre>
                    </div>
                  </div>
                )}

                {lawActiveTab === "versions" && (
                  <div className="versions-view">
                    <p className="versions-intro">
                      Access any historical version of this statute using the <code>as_of</code> parameter.
                    </p>
                    <div className="version-list">
                      <div className="version-item current">
                        <span className="version-date">2024-01-01</span>
                        <span className="version-label">Current</span>
                        <span className="version-note">Tax Cuts and Jobs Act adjustments</span>
                      </div>
                      <div className="version-item">
                        <span className="version-date">2021-03-11</span>
                        <span className="version-label">American Rescue Plan</span>
                        <span className="version-note">Temporary EITC expansion</span>
                      </div>
                      <div className="version-item">
                        <span className="version-date">2017-12-22</span>
                        <span className="version-label">TCJA</span>
                        <span className="version-note">Major restructuring</span>
                      </div>
                      <div className="version-item">
                        <span className="version-date">2010-03-23</span>
                        <span className="version-label">ACA</span>
                        <span className="version-note">Healthcare-related amendments</span>
                      </div>
                    </div>
                    <div className="api-example">
                      <code>GET /v1/sections/26/32?as_of=2017-12-22</code>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </>
        )}
      </div>

      {/* Footer CTA */}
      <footer className="playground-footer">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Ready to integrate?</h3>
            <p>Get your API key and start building in minutes.</p>
          </div>
          <div className="footer-actions">
            <a href="https://docs.cosilico.ai" className="btn-primary">
              Get API Key
            </a>
            <a href="/pricing" className="btn-secondary">
              View Pricing
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
