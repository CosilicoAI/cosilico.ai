import React, { useState, useEffect } from "react";
import * as styles from "../styles/playground.css";
import { STATES } from "../data/states";
import { calculateTaxesAndBenefits, HouseholdInput, CalculationResult } from "../utils/taxCalculations";

type PlaygroundMode = "calculator" | "lawarchive";

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
    <div className={styles.playground}>
      <div className={styles.gridBg} />

      <div className={styles.playgroundContainer}>
        {/* Mode Toggle */}
        <div className={styles.modeToggleContainer}>
          <div className={styles.modeToggle}>
            <button
              className={`${styles.modeButton} ${mode === "calculator" ? styles.modeButtonActive : ""}`}
              onClick={() => setMode("calculator")}
            >
              Rules Calculator
            </button>
            <button
              className={`${styles.modeButton} ${mode === "lawarchive" ? styles.modeButtonActive : ""}`}
              onClick={() => setMode("lawarchive")}
            >
              Law Archive
            </button>
          </div>
          <div className={styles.playgroundBadge}>
            <span className={`${styles.badgeDot} ${styles.badgeDotDemo}`}></span>
            Demo — Sample Data
          </div>
        </div>

        {mode === "calculator" ? (
          <>
        {/* Input Panel */}
        <aside className={styles.inputPanel}>
          <div className={styles.panelHeader}>
            <h2>Household Profile</h2>
            <span className={styles.panelHint}>Adjust inputs to see real-time calculations</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="income">
              <span className={styles.labelText}>Annual Income</span>
              <span className={styles.labelValue}>{formatCurrency(input.income)}</span>
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
            <div className={styles.rangeLabels}>
              <span>$0</span>
              <span>$500k</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="state">
              <span className={styles.labelText}>State</span>
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

          <div className={styles.inputGroup}>
            <label>
              <span className={styles.labelText}>Filing Status</span>
            </label>
            <div className={styles.buttonGroup}>
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

          <div className={styles.inputGroup}>
            <label htmlFor="dependents">
              <span className={styles.labelText}>Dependents</span>
              <span className={styles.labelValue}>{input.numDependents}</span>
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
            <div className={styles.rangeLabels}>
              <span>0</span>
              <span>6</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="age">
              <span className={styles.labelText}>Age</span>
              <span className={styles.labelValue}>{input.age}</span>
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
            <div className={styles.rangeLabels}>
              <span>18</span>
              <span>80</span>
            </div>
          </div>

          <div className={styles.apiHint}>
            <code>POST /calculate</code>
            <span>~50ms response time</span>
          </div>
        </aside>

        {/* Results Panel */}
        <main className={styles.resultsPanel}>
          <div className={styles.resultsTabs}>
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

          <div className={`${styles.resultsContent} ${isCalculating ? styles.resultsContentCalculating : ""}`}>
            {activeTab === "summary" && result && (
              <div className={styles.summaryView}>
                {/* Net Income Hero */}
                <div className={styles.netIncomeHero}>
                  <span className={styles.netLabel}>Net Income</span>
                  <span className={styles.netValue}>{formatCurrency(result.net_income)}</span>
                  <span className={styles.netSubtext}>
                    after taxes and benefits
                  </span>
                </div>

                {/* Visual Breakdown */}
                <div className={styles.breakdownVisual}>
                  <div className={styles.breakdownBar}>
                    <div
                      className={`${styles.barSegment} ${styles.barSegmentTaxes}`}
                      style={{ width: `${(result.total_tax / input.income) * 100}%` }}
                      title={`Taxes: ${formatCurrency(result.total_tax)}`}
                    />
                    <div
                      className={`${styles.barSegment} ${styles.barSegmentTakeHome}`}
                      style={{ width: `${((input.income - result.total_tax) / input.income) * 100}%` }}
                      title={`Take Home: ${formatCurrency(input.income - result.total_tax)}`}
                    />
                    {result.total_benefits > 0 && (
                      <div
                        className={`${styles.barSegment} ${styles.barSegmentBenefits}`}
                        style={{ width: `${(result.total_benefits / input.income) * 100}%` }}
                        title={`Benefits: ${formatCurrency(result.total_benefits)}`}
                      />
                    )}
                  </div>
                  <div className={styles.breakdownLegend}>
                    <span className={`${styles.legendItem} ${styles.legendItemTaxes}`}>
                      <span className={styles.legendDot}></span>
                      Taxes ({formatPercent(result.total_tax / input.income)})
                    </span>
                    <span className={`${styles.legendItem} ${styles.legendItemTakeHome}`}>
                      <span className={styles.legendDot}></span>
                      Take Home
                    </span>
                    {result.total_benefits > 0 && (
                      <span className={`${styles.legendItem} ${styles.legendItemBenefits}`}>
                        <span className={styles.legendDot}></span>
                        Benefits (+{formatPercent(result.total_benefits / input.income)})
                      </span>
                    )}
                  </div>
                </div>

                {/* Detail Cards */}
                <div className={styles.detailGrid}>
                  <div className={`${styles.detailCard} ${styles.detailCardTaxes}`}>
                    <h3>Taxes</h3>
                    <div className={`${styles.detailTotal} detail-total`}>{formatCurrency(result.total_tax)}</div>
                    <div className={styles.detailBreakdown}>
                      <div className={styles.detailRow}>
                        <span>Federal Income Tax</span>
                        <span>{formatCurrency(result.federal_income_tax)}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span>State Income Tax</span>
                        <span>{formatCurrency(result.state_income_tax)}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span>FICA (SS + Medicare)</span>
                        <span>{formatCurrency(result.fica)}</span>
                      </div>
                    </div>
                    <div className={styles.detailRates}>
                      <span>Effective: {formatPercent(result.effective_rate)}</span>
                      <span>Marginal: {formatPercent(result.marginal_rate)}</span>
                    </div>
                  </div>

                  <div className={`${styles.detailCard} ${styles.detailCardBenefits}`}>
                    <h3>Benefits</h3>
                    <div className={`${styles.detailTotal} detail-total`}>{formatCurrency(result.total_benefits)}</div>
                    <div className={styles.detailBreakdown}>
                      <div className={styles.detailRow}>
                        <span>EITC</span>
                        <span>{formatCurrency(result.eitc)}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span>Child Tax Credit</span>
                        <span>{formatCurrency(result.ctc)}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span>SNAP</span>
                        <span>{formatCurrency(result.snap)}</span>
                      </div>
                    </div>
                    {result.total_benefits === 0 && (
                      <div className={styles.detailNote}>
                        No benefits at this income level
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div className={styles.apiView}>
                <div className={styles.codeBlock}>
                  <div className={styles.codeHeader}>
                    <span className={styles.method}>POST</span>
                    <span className={styles.endpoint}>/calculate</span>
                  </div>
                  <pre>{JSON.stringify(apiRequest.body, null, 2)}</pre>
                </div>
                <div className={styles.codeBlock}>
                  <div className={styles.codeHeader}>
                    <span className={styles.status}>200 OK</span>
                    <span className={styles.time}>47ms</span>
                  </div>
                  <pre>{JSON.stringify(apiResponse?.data, null, 2)}</pre>
                </div>
              </div>
            )}

            {activeTab === "citations" && result && (
              <div className={styles.citationsView}>
                <p className={styles.citationsIntro}>
                  Every calculation traces back to statute. Click any citation to view the source law.
                </p>
                <div className={styles.citationList}>
                  <div className={styles.citationItem}>
                    <div className={styles.citationHeader}>
                      <span className={styles.citationLabel}>Federal Income Tax</span>
                      <span className={styles.citationValue}>{formatCurrency(result.federal_income_tax)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/1" target="_blank" rel="noopener noreferrer" className={styles.citationLink}>
                      26 U.S.C. § 1 — Tax imposed
                    </a>
                  </div>
                  <div className={styles.citationItem}>
                    <div className={styles.citationHeader}>
                      <span className={styles.citationLabel}>FICA</span>
                      <span className={styles.citationValue}>{formatCurrency(result.fica)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/3101" target="_blank" rel="noopener noreferrer" className={styles.citationLink}>
                      26 U.S.C. § 3101 — Rate of tax
                    </a>
                  </div>
                  <div className={styles.citationItem}>
                    <div className={styles.citationHeader}>
                      <span className={styles.citationLabel}>EITC</span>
                      <span className={styles.citationValue}>{formatCurrency(result.eitc)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/32" target="_blank" rel="noopener noreferrer" className={styles.citationLink}>
                      26 U.S.C. § 32 — Earned income
                    </a>
                  </div>
                  <div className={styles.citationItem}>
                    <div className={styles.citationHeader}>
                      <span className={styles.citationLabel}>Child Tax Credit</span>
                      <span className={styles.citationValue}>{formatCurrency(result.ctc)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/26/24" target="_blank" rel="noopener noreferrer" className={styles.citationLink}>
                      26 U.S.C. § 24 — Child tax credit
                    </a>
                  </div>
                  <div className={styles.citationItem}>
                    <div className={styles.citationHeader}>
                      <span className={styles.citationLabel}>SNAP</span>
                      <span className={styles.citationValue}>{formatCurrency(result.snap)}</span>
                    </div>
                    <a href="https://www.law.cornell.edu/uscode/text/7/2017" target="_blank" rel="noopener noreferrer" className={styles.citationLink}>
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
            <aside className={`${styles.inputPanel} ${styles.lawArchivePanel}`}>
              <div className={styles.panelHeader}>
                <h2>Search Statutes</h2>
                <span className={styles.panelHint}>Query the US Code by citation or keyword</span>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="law-search">
                  <span className={styles.labelText}>Search</span>
                </label>
                <input
                  type="text"
                  id="law-search"
                  className={styles.lawSearchInput}
                  placeholder="e.g., 26 USC 32 or &quot;earned income&quot;"
                  value={lawQuery}
                  onChange={(e) => setLawQuery(e.target.value)}
                />
              </div>

              <div className={styles.statuteList}>
                {searchResults.map((statute) => (
                  <button
                    key={`${statute.title_num}/${statute.section}`}
                    className={`${styles.statuteItem} ${selectedStatute === `${statute.title_num}/${statute.section}` ? styles.statuteItemActive : ""}`}
                    onClick={() => setSelectedStatute(`${statute.title_num}/${statute.section}`)}
                  >
                    <span className={styles.statuteCitation}>{statute.citation}</span>
                    <span className={styles.statuteTitle}>{statute.title}</span>
                  </button>
                ))}
                {searchResults.length === 0 && (
                  <div className={styles.noResults}>No matching statutes found</div>
                )}
              </div>

              <div className={styles.apiHint}>
                <code>GET /v1/sections/{"{title}"}/{"{section}"}</code>
                <span>~20ms response time</span>
              </div>
            </aside>

            {/* Law Archive - Results Panel */}
            <main className={`${styles.resultsPanel} ${styles.lawResults}`}>
              <div className={styles.resultsTabs}>
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

              <div className={styles.resultsContent}>
                {lawActiveTab === "text" && currentStatute && (
                  <div className={styles.statuteView}>
                    <h2 className={styles.statuteHeading}>{currentStatute.title}</h2>
                    <div className={styles.statuteMeta}>
                      <span className={styles.metaItem}>Title 26 — Internal Revenue Code</span>
                      <span className={styles.metaItem}>Current through 2024</span>
                    </div>
                    <div className={styles.statuteToc}>
                      <h4>Subsections</h4>
                      <ul>
                        {currentStatute.subsections.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                    <pre className={styles.statuteText}>{currentStatute.text}</pre>
                  </div>
                )}

                {lawActiveTab === "text" && !currentStatute && (
                  <div className={styles.emptyState}>
                    <p>Select a statute from the list to view its text.</p>
                  </div>
                )}

                {lawActiveTab === "api" && selectedStatute && (
                  <div className={styles.apiView}>
                    <div className={styles.codeBlock}>
                      <div className={styles.codeHeader}>
                        <span className={`${styles.method} ${styles.methodGet}`}>GET</span>
                        <span className={styles.endpoint}>/v1/sections/{selectedStatute}</span>
                      </div>
                      <pre>{JSON.stringify({ as_of: "2024-01-01" }, null, 2)}</pre>
                    </div>
                    <div className={styles.codeBlock}>
                      <div className={styles.codeHeader}>
                        <span className={styles.status}>200 OK</span>
                        <span className={styles.time}>18ms</span>
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
                  <div className={styles.versionsView}>
                    <p className={styles.versionsIntro}>
                      Access any historical version of this statute using the <code>as_of</code> parameter.
                    </p>
                    <div className={styles.versionList}>
                      <div className={`${styles.versionItem} ${styles.versionItemCurrent}`}>
                        <span className={styles.versionDate}>2024-01-01</span>
                        <span className={styles.versionLabel}>Current</span>
                        <span className={styles.versionNote}>Tax Cuts and Jobs Act adjustments</span>
                      </div>
                      <div className={styles.versionItem}>
                        <span className={styles.versionDate}>2021-03-11</span>
                        <span className={styles.versionLabel}>American Rescue Plan</span>
                        <span className={styles.versionNote}>Temporary EITC expansion</span>
                      </div>
                      <div className={styles.versionItem}>
                        <span className={styles.versionDate}>2017-12-22</span>
                        <span className={styles.versionLabel}>TCJA</span>
                        <span className={styles.versionNote}>Major restructuring</span>
                      </div>
                      <div className={styles.versionItem}>
                        <span className={styles.versionDate}>2010-03-23</span>
                        <span className={styles.versionLabel}>ACA</span>
                        <span className={styles.versionNote}>Healthcare-related amendments</span>
                      </div>
                    </div>
                    <div className={styles.apiExample}>
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
      <footer className={styles.playgroundFooter}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h3>Ready to integrate?</h3>
            <p>Get your API key and start building in minutes.</p>
          </div>
          <div className={styles.footerActions}>
            <a href="https://docs.cosilico.ai" className={styles.btnPrimary}>
              Get API Key
            </a>
            <a href="/pricing" className={styles.btnSecondary}>
              View Pricing
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
