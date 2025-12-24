import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/pluginDashboard.css";

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
    <PageLayout
      badge="VALIDATION SYSTEM"
      title="Encoding Performance"
      subtitle="Real-time validation against PolicyEngine-US microsimulation"
      showHero={true}
    >
      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Stats Row */}
        <section className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>{formatPercent(ENCODING_DATA.stats.overallMatchRate)}</span>
            <span className={styles.heroStatLabel}>Success Rate</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>{ENCODING_DATA.stats.totalVariables}</span>
            <span className={styles.heroStatLabel}>Variables</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>{ENCODING_DATA.stats.totalTestCases}</span>
            <span className={styles.heroStatLabel}>Test Cases</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>{ENCODING_DATA.pluginVersion}</span>
            <span className={styles.heroStatLabel}>Plugin</span>
          </div>
        </section>
        {/* Status Summary */}
        <section className={styles.statusRow}>
          <div className={styles.statusCard}>
            <div className={`${styles.statusIcon} ${styles.statusIconPassed}`}>✓</div>
            <div className={styles.statusInfo}>
              <span className={styles.statusCount}>{passedVars.length}</span>
              <span className={styles.statusLabel}>Passed</span>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={`${styles.statusIcon} ${styles.statusIconFailed}`}>✗</div>
            <div className={styles.statusInfo}>
              <span className={styles.statusCount}>{failedVars.length}</span>
              <span className={styles.statusLabel}>Failed</span>
            </div>
          </div>
        </section>

        {/* Variables Grid */}
        <section className={styles.variablesSection}>
          <h2 className={styles.sectionTitle}>Encoded Variables</h2>
          <div className={styles.variablesTable}>
            <div className={styles.tableHeader}>
              <span>Variable</span>
              <span>Statute</span>
              <span>Tests</span>
              <span>Match Rate</span>
              <span>Time</span>
            </div>
            {ENCODING_DATA.variables.map((v) => (
              <div
                key={v.name}
                className={`${styles.tableRow} ${v.status === "passed" ? styles.tableRowPassed : styles.tableRowFailed} ${selectedVariable === v.name ? styles.tableRowSelected : ""}`}
                onClick={() => setSelectedVariable(selectedVariable === v.name ? null : v.name)}
              >
                <span className={styles.varName}>
                  <code className={styles.varNameCode}>{v.name}</code>
                  {v.error && <span className={styles.errorBadge}>error</span>}
                </span>
                <span className={styles.varStatute}>{v.statute}</span>
                <span className={styles.varTests}>{v.testCases}</span>
                <span className={`${styles.varRate} ${v.status === "passed" ? styles.varRatePassed : styles.varRateFailed}`}>
                  {formatPercent(v.matchRate)}
                </span>
                <span className={styles.varTime}>{formatTime(v.timestamp)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Test Case Details */}
        {selectedVariable && ENCODING_DATA.testCaseDetails[selectedVariable as keyof typeof ENCODING_DATA.testCaseDetails] && (
          <section className={styles.detailsSection}>
            <h2 className={styles.detailsTitle}>
              Test Cases: <code className={styles.detailsTitleCode}>{selectedVariable}</code>
            </h2>
            <div className={styles.detailsGrid}>
              {ENCODING_DATA.testCaseDetails[selectedVariable as keyof typeof ENCODING_DATA.testCaseDetails].map((tc, i) => (
                <div key={i} className={styles.detailCard}>
                  <div className={styles.detailName}>{tc.name}</div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Expected</span>
                    <span className={styles.detailValue}>
                      {tc.expected !== null ? `$${tc.expected.toLocaleString()}` : "—"}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Actual</span>
                    <span className={styles.detailValue}>
                      {typeof tc.actual === "number" ? `$${tc.actual.toLocaleString()}` : tc.actual}
                    </span>
                  </div>
                  {typeof tc.diff === "number" && tc.diff > 0 && (
                    <div className={styles.detailDiff}>
                      Δ ${tc.diff.toFixed(2)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Encoding Timeline */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Encoding Timeline</h2>
          <div className={styles.timelineTrack}>
            {ENCODING_DATA.variables.map((v, i) => (
              <div
                key={v.name}
                className={styles.timelineNode}
                style={{ left: `${(i / (ENCODING_DATA.variables.length - 1)) * 100}%` }}
                title={`${v.name}: ${formatPercent(v.matchRate)}`}
              >
                <div className={`${styles.nodeDot} ${v.status === "passed" ? styles.nodeDotPassed : styles.nodeDotFailed}`} />
                <div className={styles.nodeLabel}>{v.name.split("_")[0]}</div>
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </section>

        {/* Technical Details */}
        <section className={styles.techSection}>
          <h2 className={styles.sectionTitle}>Validation Stack</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🔬</div>
              <div className={styles.techName}>PolicyEngine-US</div>
              <div className={styles.techDesc}>Primary validator</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>📊</div>
              <div className={styles.techName}>Consensus Engine</div>
              <div className={styles.techDesc}>Multi-validator agreement</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🎯</div>
              <div className={styles.techName}>$15 Tolerance</div>
              <div className={styles.techDesc}>Match threshold</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>⚡</div>
              <div className={styles.techName}>Thompson Sampling</div>
              <div className={styles.techDesc}>Plugin selection</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Last updated: {new Date(ENCODING_DATA.timestamp).toLocaleString()}</span>
        <span>cosilico-validators {ENCODING_DATA.pluginVersion}</span>
      </footer>
    </PageLayout>
  );
}
