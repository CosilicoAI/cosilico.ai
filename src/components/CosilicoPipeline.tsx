import React, { useState } from 'react';
import './CosilicoPipeline.css';
import { calculate as calculateEITCFromEngine, PARAMS, CalculatorResult } from '../lib/eitc-calculator';

interface SourceDocument {
  citation: string;
  path: string;
  effectiveDate: string;
  accessedDate: string;
  sourceUrl: string;
  rawUrl: string;
  format: string;
  contentPreview: string;
}

interface Encoding {
  variable: string;
  citation: string;
  sourcePath: string;
  repoUrl: string;
  formulaCode: string;
}


// Real data from lawarchive
const EITC_SOURCE: SourceDocument = {
  citation: '26 USC 32 - Earned income',
  path: 'us/statute/26/32/2025-01-01',
  effectiveDate: '2025-01-01',
  accessedDate: '2025-12-12',
  sourceUrl: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section32',
  rawUrl: 'https://lawarchive.cosilico.ai/us/statute/26/32/2025-01-01/original.xml',
  format: 'USLM XML',
  contentPreview: `32. Earned income

(a) Allowance of credit

(1) In general
In the case of an eligible individual, there shall be allowed as a credit
against the tax imposed by this subtitle for the taxable year an amount
equal to the credit percentage of so much of the taxpayer's earned income
for the taxable year as does not exceed the earned income amount.

(2) Limitation
The amount of the credit allowable to a taxpayer under paragraph (1) for
any taxable year shall not exceed the excess (if any) of -
  (A) the credit percentage of the earned income amount, over
  (B) the phaseout percentage of so much of the adjusted gross income
      (or, if greater, the earned income) of the taxpayer for the taxable
      year as exceeds the phaseout amount.

(b) Percentages and amounts

For purposes of subsection (a) -

(1) Percentages
The credit percentage and the phaseout percentage shall be determined
as follows:

  | Qualifying Children | Credit % | Phaseout % |
  |---------------------|----------|------------|
  | 1 child             | 34%      | 15.98%     |
  | 2 children          | 40%      | 21.06%     |
  | 3+ children         | 45%      | 21.06%     |
  | No children         | 7.65%    | 7.65%      |`,
};

const EITC_ENCODING: Encoding = {
  variable: 'eitc',
  citation: '26 USC 32',
  sourcePath: 'us/statute/26/32/2025-01-01',
  repoUrl: 'https://github.com/CosilicoAI/cosilico-us/blob/main/26/32/credit.cos',
  formulaCode: `# 26 USC 32 - Earned Income Tax Credit
# Source: lawarchive://us/statute/26/32/2025-01-01

source {
  lawarchive: us/statute/26/32/2025-01-01
  citation: "26 USC 32"
  accessed: 2025-12-12
}

parameters {
  # 32(b)(1): Fixed percentages from statute
  credit_percentage: statute/26/32/b/1/credit_pct
  phaseout_percentage: statute/26/32/b/1/phaseout_pct

  # 32(b)(2): Amounts indexed annually via IRS guidance
  earned_income_amount: guidance/irs/rp-24-40/eitc/earned_income_amount
  phaseout_amount: guidance/irs/rp-24-40/eitc/phaseout_amount
}

variable eitc {
  entity TaxUnit
  period Year
  dtype Money
  label "Earned Income Tax Credit"

  formula {
    # 32(c)(1): Check eligibility
    if not eitc_eligible:
      return 0

    # 32(i)(1): Investment income limit
    if investment_income > investment_income_limit:
      return 0

    # 32(a)(1): Credit base = credit_pct * min(earned, earned_amount)
    let credit_base = credit_percentage[n_children] *
                      min(earned_income, earned_income_amount[n_children])

    # 32(a)(2): Phaseout
    let income_for_phaseout = max(agi, earned_income)
    let phaseout_start = is_joint ? phaseout_amount_joint[n_children]
                                  : phaseout_amount_single[n_children]
    let excess = max(0, income_for_phaseout - phaseout_start)
    let phaseout = phaseout_percentage[n_children] * excess

    return max(0, credit_base - phaseout)
  }
}`,
};

// Parameters now come from compiled engine: ../lib/eitc-calculator.ts

type TabId = 'source' | 'encoding' | 'params' | 'calculate';

const TABS: { id: TabId; label: string }[] = [
  { id: 'source', label: 'Source' },
  { id: 'encoding', label: 'Encoding' },
  { id: 'params', label: 'Parameters' },
  { id: 'calculate', label: 'Calculate' },
];

interface ValidationErrors {
  earnedIncome?: string;
  agi?: string;
}

const CosilicoPipeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('source');
  const [earnedIncome, setEarnedIncome] = useState(25000);
  const [agi, setAgi] = useState(25000);
  const [numChildren, setNumChildren] = useState(2);
  const [filingStatus, setFilingStatus] = useState<'single' | 'joint'>('single');
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (earnedIncome < 0) {
      newErrors.earnedIncome = 'Must be non-negative';
    } else if (earnedIncome > 1_000_000) {
      newErrors.earnedIncome = 'Exceeds reasonable range';
    }

    if (agi < 0) {
      newErrors.agi = 'Must be non-negative';
    } else if (agi > 1_000_000) {
      newErrors.agi = 'Exceeds reasonable range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEITC = () => {
    if (!validate()) return;

    // Use the compiled Cosilico engine
    const engineResult = calculateEITCFromEngine({
      earned_income: earnedIncome,
      agi: agi,
      n_children: numChildren,
      is_joint: filingStatus === 'joint',
    });

    setResult(engineResult);
  };

  const getTabIndex = (id: TabId) => TABS.findIndex(t => t.id === id);

  return (
    <div className="pipeline-page">
      <div className="pipeline-container">
        <header className="pipeline-header">
          <h1 className="pipeline-title">
            From <span>law</span> to calculation
          </h1>
          <p className="pipeline-subtitle">
            Every value traced to its authoritative source
          </p>
        </header>

        {/* Flow Indicator */}
        <div className="flow-indicator">
          {TABS.map((tab, i) => (
            <React.Fragment key={tab.id}>
              <div
                className={`flow-step ${
                  activeTab === tab.id ? 'active' : getTabIndex(activeTab) > i ? 'completed' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
                style={{ cursor: 'pointer' }}
              >
                <span className="flow-step-icon">{i + 1}</span>
                {tab.label}
              </div>
              {i < TABS.length - 1 && <span className="flow-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Tab Navigation */}
        <nav className="pipeline-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              className={`pipeline-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-number">{i + 1}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="pipeline-content" key={activeTab}>
          {activeTab === 'source' && (
            <div className="source-panel">
              <div className="panel-header">
                <h3>{EITC_SOURCE.citation}</h3>
                <div className="meta-row">
                  <span className="meta-item">
                    <strong>Path:</strong> <code>lawarchive://{EITC_SOURCE.path}</code>
                  </span>
                  <span className="meta-item">
                    <strong>Effective:</strong> {EITC_SOURCE.effectiveDate}
                  </span>
                  <span className="meta-item">
                    <strong>Format:</strong> {EITC_SOURCE.format}
                  </span>
                </div>
              </div>

              <div className="action-row">
                <a href={EITC_SOURCE.sourceUrl} target="_blank" rel="noopener noreferrer" className="action-link">
                  View on uscode.house.gov
                </a>
                <a href={EITC_SOURCE.rawUrl} target="_blank" rel="noopener noreferrer" className="action-link">
                  Download Raw XML
                </a>
                <a href={`${EITC_SOURCE.rawUrl.replace('original.xml', 'canonical.json')}`} target="_blank" rel="noopener noreferrer" className="action-link">
                  View Canonical JSON
                </a>
              </div>

              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-block-title">Statute Text</span>
                  <div className="code-block-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <pre>{EITC_SOURCE.contentPreview}</pre>
              </div>
            </div>
          )}

          {activeTab === 'encoding' && (
            <div className="encoding-panel">
              <div className="panel-header">
                <h3>Variable: <code>{EITC_ENCODING.variable}</code></h3>
                <div className="meta-row">
                  <span className="meta-item">
                    <strong>Citation:</strong> {EITC_ENCODING.citation}
                  </span>
                  <span className="meta-item">
                    <strong>Source:</strong> <code>lawarchive://{EITC_ENCODING.sourcePath}</code>
                  </span>
                </div>
              </div>

              <div className="action-row">
                <a href={EITC_ENCODING.repoUrl} target="_blank" rel="noopener noreferrer" className="action-link">
                  View on GitHub
                </a>
              </div>

              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-block-title">credit.cos</span>
                  <div className="code-block-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <pre>{EITC_ENCODING.formulaCode}</pre>
              </div>

              <div className="info-box">
                <h4>How it works</h4>
                <ul>
                  <li><strong>source</strong> block links to lawarchive document for provenance</li>
                  <li><strong>parameters</strong> block references statute values and IRS guidance</li>
                  <li><strong>formula</strong> translates statutory language into executable code</li>
                  <li>Every calculation can be traced back to specific statute sections</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'params' && (
            <div className="params-panel">
              <div className="panel-header">
                <h3>Tax Year 2025</h3>
                <div className="engine-badge" style={{ marginTop: '12px' }}>
                  Parameters from <code>cosilico-compile</code>
                </div>
              </div>

              <div className="params-sources">
                <h4>Authoritative Sources</h4>
                <ul>
                  <li>Statute: 26 USC 32(b)(1) - fixed percentages</li>
                  <li>Guidance: Rev. Proc. 2024-40 - TY 2025 inflation adjustments</li>
                </ul>
              </div>

              <div className="params-grid">
                <div className="param-table">
                  <h4>Credit Percentages (32(b)(1))</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Children</th>
                        <th>Credit %</th>
                        <th>Phaseout %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 1, 2, 3].map(n => (
                        <tr key={n}>
                          <td>{n === 0 ? 'None' : n === 3 ? '3+' : n}</td>
                          <td>{PARAMS.credit_pct[n]}%</td>
                          <td>{PARAMS.phaseout_pct[n]}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="param-table">
                  <h4>Maximum Credits (Rev. Proc. 2024-40)</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Children</th>
                        <th>Max Credit</th>
                        <th>Earned Inc. Amt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 1, 2, 3].map(n => (
                        <tr key={n}>
                          <td>{n === 0 ? 'None' : n === 3 ? '3+' : n}</td>
                          <td>${PARAMS.max_credit[n].toLocaleString()}</td>
                          <td>${PARAMS.earned_income_amount[n].toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calculate' && (
            <div className="calc-panel">
              <h3>Calculate EITC</h3>

              <div className="calc-grid">
                <div className={`input-field ${errors.earnedIncome ? 'has-error' : ''}`}>
                  <label>Earned Income</label>
                  <input
                    type="number"
                    value={earnedIncome}
                    onChange={(e) => {
                      setEarnedIncome(Number(e.target.value));
                      setErrors(prev => ({ ...prev, earnedIncome: undefined }));
                      setResult(null);
                    }}
                  />
                  {errors.earnedIncome && <span className="error-msg">{errors.earnedIncome}</span>}
                </div>
                <div className={`input-field ${errors.agi ? 'has-error' : ''}`}>
                  <label>AGI</label>
                  <input
                    type="number"
                    value={agi}
                    onChange={(e) => {
                      setAgi(Number(e.target.value));
                      setErrors(prev => ({ ...prev, agi: undefined }));
                      setResult(null);
                    }}
                  />
                  {errors.agi && <span className="error-msg">{errors.agi}</span>}
                </div>
                <div className="input-field">
                  <label>Qualifying Children</label>
                  <select value={numChildren} onChange={(e) => {
                    setNumChildren(Number(e.target.value));
                    setResult(null);
                  }}>
                    {[0, 1, 2, 3].map(n => (
                      <option key={n} value={n}>{n === 3 ? '3+' : n}</option>
                    ))}
                  </select>
                </div>
                <div className="input-field">
                  <label>Filing Status</label>
                  <select value={filingStatus} onChange={(e) => {
                    setFilingStatus(e.target.value as 'single' | 'joint');
                    setResult(null);
                  }}>
                    <option value="single">Single / Head of Household</option>
                    <option value="joint">Married Filing Jointly</option>
                  </select>
                </div>
              </div>

              <button
                className="calc-button"
                onClick={calculateEITC}
                disabled={Object.keys(errors).some(k => errors[k as keyof ValidationErrors])}
              >
                Calculate EITC
              </button>

              {result !== null && (
                <div className="calc-result">
                  <div className="result-header">
                    <span className="result-label">EITC Amount</span>
                    <span className="result-amount">${result.eitc.toLocaleString()}</span>
                  </div>

                  <div className="engine-badge">
                    Calculated by <code>cosilico-compile</code>
                  </div>

                  <div className="citation-chain">
                    <h5>Citation Chain</h5>
                    <ol>
                      <li>
                        <strong>Source:</strong>{' '}
                        <a href={EITC_SOURCE.rawUrl} target="_blank" rel="noopener noreferrer">
                          lawarchive://us/statute/26/32/2025-01-01
                        </a>
                      </li>
                      <li>
                        <strong>Encoding:</strong>{' '}
                        <a href={EITC_ENCODING.repoUrl} target="_blank" rel="noopener noreferrer">
                          cosilico-us://26/32/credit.cos
                        </a>
                      </li>
                      <li>
                        <strong>Parameters:</strong>{' '}
                        {result.citations
                          .filter(c => c.param)
                          .map(c => c.source)
                          .filter((v, i, a) => a.indexOf(v) === i)
                          .join(', ')}
                      </li>
                      <li><strong>Result:</strong> ${result.eitc.toLocaleString()}</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CosilicoPipeline;
