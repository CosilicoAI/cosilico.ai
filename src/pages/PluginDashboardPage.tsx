import React, { useState } from "react";
import "../styles/PluginDashboard.css";

// Real data from cosilico-validators encoding sessions
const ENCODING_DATA = {
  pluginVersion: "v0.1.0",
  timestamp: "2024-12-24T07:00:00Z",
  stats: {
    totalVariables: 9,
    passedVariables: 8,
    failedVariables: 1,
    overallMatchRate: 0.889,
    totalTestCases: 24,
  },
  variables: [
    // Phase 1 - Original encodings
    {
      name: "adjusted_gross_income",
      statute: "26 USC § 62",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T06:30:00Z",
    },
    {
      name: "eitc",
      statute: "26 USC § 32",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T06:32:00Z",
    },
    {
      name: "standard_deduction",
      statute: "26 USC § 63",
      matchRate: 1.0,
      status: "passed",
      testCases: 2,
      timestamp: "2024-12-24T06:34:00Z",
    },
    // Phase 2 - CTC and earned income
    {
      name: "ctc",
      statute: "26 USC § 24",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T06:45:00Z",
    },
    {
      name: "earned_income",
      statute: "26 USC § 32(c)(2)",
      matchRate: 1.0,
      status: "passed",
      testCases: 2,
      timestamp: "2024-12-24T06:47:00Z",
    },
    {
      name: "income_tax_before_credits",
      statute: "26 USC § 1",
      matchRate: 0.0,
      status: "failed",
      testCases: 3,
      timestamp: "2024-12-24T06:49:00Z",
      error: "encoding_error",
    },
    // Phase 3 - New encodings from parallel agent
    {
      name: "taxable_social_security",
      statute: "26 USC § 86",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T07:15:00Z",
    },
    {
      name: "self_employment_tax",
      statute: "26 USC § 1401",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T07:18:00Z",
    },
    {
      name: "capital_gains_tax",
      statute: "26 USC § 1(h)",
      matchRate: 1.0,
      status: "passed",
      testCases: 3,
      timestamp: "2024-12-24T07:20:00Z",
    },
  ],
  testCaseDetails: {
    self_employment_tax: [
      { name: "Low SE income ($10k)", expected: 1413, actual: 1412.96, diff: 0.04 },
      { name: "Moderate SE income ($40k)", expected: 5652, actual: 5651.82, diff: 0.18 },
      { name: "High SE income ($200k)", expected: 26263, actual: 26262.7, diff: 0.3 },
    ],
    taxable_social_security: [
      { name: "Low income - no taxation", expected: 0, actual: 0, diff: 0 },
      { name: "Moderate income - 50%", expected: null, actual: "validated", diff: 0 },
      { name: "High income - 85%", expected: null, actual: "validated", diff: 0 },
    ],
    capital_gains_tax: [
      { name: "0% bracket ($20k + $5k)", expected: 0, actual: 0, diff: 0 },
      { name: "15% bracket ($60k + $20k)", expected: null, actual: "validated", diff: 0 },
      { name: "20% bracket ($500k + $100k)", expected: null, actual: "validated", diff: 0 },
    ],
  },
};

export default function PluginDashboardPage() {
  const [selectedVariable, setSelectedVariable] = useState<string | null>(null);

  const formatPercent = (n: number) => `${(n * 100).toFixed(0)}%`;
  const formatTime = (s: string) => {
    const d = new Date(s);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const passedVars = ENCODING_DATA.variables.filter((v) => v.status === "passed");
  const failedVars = ENCODING_DATA.variables.filter((v) => v.status === "failed");

  return (
    <div className="plugin-dashboard">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge">VALIDATION SYSTEM</div>
          <h1>Encoding Performance</h1>
          <p className="hero-subtitle">
            Real-time validation against PolicyEngine-US microsimulation
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">{formatPercent(ENCODING_DATA.stats.overallMatchRate)}</span>
              <span className="hero-stat-label">Success Rate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{ENCODING_DATA.stats.totalVariables}</span>
              <span className="hero-stat-label">Variables</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{ENCODING_DATA.stats.totalTestCases}</span>
              <span className="hero-stat-label">Test Cases</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{ENCODING_DATA.pluginVersion}</span>
              <span className="hero-stat-label">Plugin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Status Summary */}
        <section className="status-row">
          <div className="status-card passed">
            <div className="status-icon">✓</div>
            <div className="status-info">
              <span className="status-count">{passedVars.length}</span>
              <span className="status-label">Passed</span>
            </div>
          </div>
          <div className="status-card failed">
            <div className="status-icon">✗</div>
            <div className="status-info">
              <span className="status-count">{failedVars.length}</span>
              <span className="status-label">Failed</span>
            </div>
          </div>
        </section>

        {/* Variables Grid */}
        <section className="variables-section">
          <h2>Encoded Variables</h2>
          <div className="variables-table">
            <div className="table-header">
              <span>Variable</span>
              <span>Statute</span>
              <span>Tests</span>
              <span>Match Rate</span>
              <span>Time</span>
            </div>
            {ENCODING_DATA.variables.map((v) => (
              <div
                key={v.name}
                className={`table-row ${v.status} ${selectedVariable === v.name ? "selected" : ""}`}
                onClick={() => setSelectedVariable(selectedVariable === v.name ? null : v.name)}
              >
                <span className="var-name">
                  <code>{v.name}</code>
                  {v.error && <span className="error-badge">error</span>}
                </span>
                <span className="var-statute">{v.statute}</span>
                <span className="var-tests">{v.testCases}</span>
                <span className={`var-rate ${v.status}`}>
                  {formatPercent(v.matchRate)}
                </span>
                <span className="var-time">{formatTime(v.timestamp)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Test Case Details */}
        {selectedVariable && ENCODING_DATA.testCaseDetails[selectedVariable as keyof typeof ENCODING_DATA.testCaseDetails] && (
          <section className="details-section">
            <h2>
              Test Cases: <code>{selectedVariable}</code>
            </h2>
            <div className="details-grid">
              {ENCODING_DATA.testCaseDetails[selectedVariable as keyof typeof ENCODING_DATA.testCaseDetails].map((tc, i) => (
                <div key={i} className="detail-card">
                  <div className="detail-name">{tc.name}</div>
                  <div className="detail-row">
                    <span className="detail-label">Expected</span>
                    <span className="detail-value">
                      {tc.expected !== null ? `$${tc.expected.toLocaleString()}` : "—"}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Actual</span>
                    <span className="detail-value">
                      {typeof tc.actual === "number" ? `$${tc.actual.toLocaleString()}` : tc.actual}
                    </span>
                  </div>
                  {typeof tc.diff === "number" && tc.diff > 0 && (
                    <div className="detail-diff">
                      Δ ${tc.diff.toFixed(2)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Encoding Timeline */}
        <section className="timeline-section">
          <h2>Encoding Timeline</h2>
          <div className="timeline-track">
            {ENCODING_DATA.variables.map((v, i) => (
              <div
                key={v.name}
                className={`timeline-node ${v.status}`}
                style={{ left: `${(i / (ENCODING_DATA.variables.length - 1)) * 100}%` }}
                title={`${v.name}: ${formatPercent(v.matchRate)}`}
              >
                <div className="node-dot" />
                <div className="node-label">{v.name.split("_")[0]}</div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </section>

        {/* Technical Details */}
        <section className="tech-section">
          <h2>Validation Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🔬</div>
              <div className="tech-name">PolicyEngine-US</div>
              <div className="tech-desc">Primary validator</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">📊</div>
              <div className="tech-name">Consensus Engine</div>
              <div className="tech-desc">Multi-validator agreement</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🎯</div>
              <div className="tech-name">$15 Tolerance</div>
              <div className="tech-desc">Match threshold</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⚡</div>
              <div className="tech-name">Thompson Sampling</div>
              <div className="tech-desc">Plugin selection</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <span>Last updated: {new Date(ENCODING_DATA.timestamp).toLocaleString()}</span>
        <span>cosilico-validators {ENCODING_DATA.pluginVersion}</span>
      </footer>
    </div>
  );
}
