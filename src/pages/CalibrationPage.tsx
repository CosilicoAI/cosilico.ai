import React, { useState, useEffect } from "react";
import * as styles from "../styles/calibration.css";
import PageLayout from "../components/PageLayout";

interface CalibrationTarget {
  name: string;
  group: "national" | "state" | "county";
  category: string;
  target_value: number;
  estimated_value: number;
  relative_error: number;
  absolute_error: number;
}

interface CalibrationResults {
  metadata: {
    date: string;
    data_year: number;
    tax_year: number;
    n_records: number;
    n_targets: number;
    initial_loss: number;
    final_loss: number;
    optimizer: string;
    epochs: number;
  };
  summary: {
    total_population_original: number;
    total_population_calibrated: number;
    total_agi_calibrated: number;
    mean_weight: number;
    std_weight: number;
    min_weight: number;
    max_weight: number;
  };
  targets: CalibrationTarget[];
}

interface SourceSummary {
  source: string;
  display_name: string;
  count: number;
  variables: number;
  year_min: number;
  year_max: number;
  years: number[];
  is_projection: boolean;
}

interface YearSummary {
  year: number;
  count: number;
  sources: string[];
}

interface JurisdictionSummary {
  jurisdiction: string;
  count: number;
  sources: string[];
}

interface TargetsSummary {
  total_targets: number;
  total_strata: number;
  sources: SourceSummary[];
  years: YearSummary[];
  jurisdictions: JurisdictionSummary[];
}

interface Metric {
  name: string;
  category: string;
  cps_value: number;
  soi_value: number;
  pct_error: number;
  unit: string;
  statute_ref: string;
}

interface CoverageGap {
  variable: string;
  component: string;
  statute_ref: string;
  impact: string;
  notes: string;
  soi_amount?: number;
}

interface RawSurveyStats {
  n_persons: number;
  n_tax_units: number;
  n_households: number;
  total_person_weight: number;
  total_tax_unit_weight: number;
}

interface BaselineData {
  cps_year: number;
  soi_year: number;
  metrics: Metric[];
  coverage_gaps: CoverageGap[];
  summary: {
    n_metrics: number;
    mean_abs_error: number;
    max_abs_error: number;
    worst_metric: string;
  };
  raw_survey_stats: RawSurveyStats;
}

const METRIC_LABELS: Record<string, string> = {
  total_returns: "Total returns",
  total_agi: "Total AGI",
  returns_single: "Single Filers",
  returns_married_joint: "Married Filing Jointly",
  returns_married_separate: "Married Filing Separately",
  returns_head_of_household: "Head of Household",
  returns_qualifying_widow: "Qualifying Widow(er)",
};

function formatNumber(value: number, unit: string): string {
  if (unit === "dollars") {
    if (value >= 1_000_000_000_000) {
      return `$${(value / 1_000_000_000_000).toFixed(1)}T`;
    }
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(1)}B`;
    }
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  return value.toLocaleString();
}

function getErrorClass(pctError: number): "errorLow" | "errorMedium" | "errorHigh" {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "errorLow";
  if (absError < 0.15) return "errorMedium";
  return "errorHigh";
}

function getErrorLabel(pctError: number): string {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "CALIBRATED";
  if (absError < 0.15) return "MODERATE GAP";
  return "SIGNIFICANT GAP";
}

function getImpactClass(impact: string): "high" | "medium" | "low" {
  switch (impact) {
    case "high": return "high";
    case "medium": return "medium";
    case "low": return "low";
    default: return "low";
  }
}

function getErrorBarClass(pctError: number): "low" | "medium" | "high" {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "low";
  if (absError < 0.15) return "medium";
  return "high";
}

function getCardBadgeClass(pctError: number): "low" | "medium" | "high" {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "low";
  if (absError < 0.15) return "medium";
  return "high";
}

function getTableRowClass(pctError: number): "low" | "medium" | "high" {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "low";
  if (absError < 0.15) return "medium";
  return "high";
}

export default function CalibrationPage() {
  const [data, setData] = useState<BaselineData | null>(null);
  const [targetsSummary, setTargetsSummary] = useState<TargetsSummary | null>(null);
  const [calibrationResults, setCalibrationResults] = useState<CalibrationResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/data/baseline_comparison.json").then((res) => {
        if (!res.ok) throw new Error("Failed to load baseline data");
        return res.json();
      }),
      fetch("/data/targets_summary.json").then((res) => {
        if (!res.ok) throw new Error("Failed to load targets summary");
        return res.json();
      }),
      fetch("/data/calibration-results.json").then((res) => {
        if (!res.ok) return null; // Optional, don't fail if not present
        return res.json();
      }).catch(() => null),
    ])
      .then(([baselineJson, targetsJson, calibrationJson]) => {
        setData(baselineJson);
        setTargetsSummary(targetsJson);
        setCalibrationResults(calibrationJson);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <div className={styles.loadingState}>Loading baseline comparison...</div>
      </PageLayout>
    );
  }

  if (error || !data) {
    return (
      <PageLayout>
        <div className={styles.errorState}>Error: {error || "No data available"}</div>
      </PageLayout>
    );
  }

  const filteredMetrics = data.metrics.filter(
    (m) => selectedCategory === "all" || m.category === selectedCategory
  );

  const totalReturnsGap = data.metrics.find((m) => m.name === "total_returns");
  const totalAgiGap = data.metrics.find((m) => m.name === "total_agi");

  const returnsError = totalReturnsGap?.pct_error ?? 0;
  const agiError = totalAgiGap?.pct_error ?? 0;
  const highImpactGaps = data.coverage_gaps.filter((g) => g.impact === "high").length;

  return (
    <PageLayout>
      <div className={styles.scanlines} />

      {/* Hero Section */}
      <section className={styles.calibHero}>
        <div className={styles.heroTerminal}>
          <div className={styles.terminalBar}>
            <span className={styles.terminalDotRed} />
            <span className={styles.terminalDotYellow} />
            <span className={styles.terminalDotGreen} />
            <span className={styles.terminalTitle}>cosilico-microdata</span>
          </div>
          <div className={styles.terminalContent}>
            <div className={styles.typeLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cosilico</span>
              <span className={styles.flag}>calibrate</span>
              <span className={styles.arg}>--baseline</span>
              <span className={styles.arg}>--compare soi</span>
            </div>
          </div>
        </div>

        <h1>
          <span className={styles.heroPrefix}>BASELINE</span>
          <span className={styles.heroMain}>Calibration dashboard</span>
        </h1>
        <p className={styles.calibSubtitle}>
          Comparing CPS ASEC {data.cps_year} against IRS SOI {data.soi_year}.<br />
          Real survey data. Documented gaps.
        </p>

        <div className={styles.surveyStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{data.raw_survey_stats.n_persons.toLocaleString()}</span>
            <span className={styles.statLabel}>Sample persons</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{data.raw_survey_stats.n_tax_units.toLocaleString()}</span>
            <span className={styles.statLabel}>Tax units</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{formatNumber(data.raw_survey_stats.total_person_weight, "count")}</span>
            <span className={styles.statLabel}>Population</span>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>OVERVIEW</span>
          <h2>Baseline gap summary</h2>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard[getErrorClass(returnsError)]}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📊</span>
              <span className={styles.cardLabel}>Total returns</span>
            </div>
            <div className={styles.cardComparison}>
              <div className={styles.comparisonValue}>
                <span className={styles.valueLabel}>CPS</span>
                <span className={styles.valueNumber}>{formatNumber(totalReturnsGap?.cps_value || 0, "count")}</span>
              </div>
              <div className={styles.comparisonArrow}>→</div>
              <div className={styles.comparisonValueTarget}>
                <span className={styles.valueLabel}>SOI</span>
                <span className={styles.valueNumberTarget}>{formatNumber(totalReturnsGap?.soi_value || 0, "count")}</span>
              </div>
            </div>
            <div className={styles.cardError}>
              <div className={styles.errorBarContainer}>
                <div className={styles.errorBar[getErrorBarClass(returnsError)]} style={{ width: `${Math.min(Math.abs(returnsError) * 200, 100)}%` }} />
              </div>
              <span className={styles.errorValue}>{(returnsError * 100).toFixed(1)}%</span>
            </div>
            <div className={styles.cardBadge[getCardBadgeClass(returnsError)]}>{getErrorLabel(returnsError)}</div>
          </div>

          <div className={styles.summaryCard[getErrorClass(agiError)]}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>💰</span>
              <span className={styles.cardLabel}>Total AGI</span>
            </div>
            <div className={styles.cardComparison}>
              <div className={styles.comparisonValue}>
                <span className={styles.valueLabel}>CPS</span>
                <span className={styles.valueNumber}>{formatNumber(totalAgiGap?.cps_value || 0, "dollars")}</span>
              </div>
              <div className={styles.comparisonArrow}>→</div>
              <div className={styles.comparisonValueTarget}>
                <span className={styles.valueLabel}>SOI</span>
                <span className={styles.valueNumberTarget}>{formatNumber(totalAgiGap?.soi_value || 0, "dollars")}</span>
              </div>
            </div>
            <div className={styles.cardError}>
              <div className={styles.errorBarContainer}>
                <div className={styles.errorBar[getErrorBarClass(agiError)]} style={{ width: `${Math.min(Math.abs(agiError) * 200, 100)}%` }} />
              </div>
              <span className={styles.errorValue}>{(agiError * 100).toFixed(1)}%</span>
            </div>
            <div className={styles.cardBadge[getCardBadgeClass(agiError)]}>{getErrorLabel(agiError)}</div>
          </div>

          <div className={styles.summaryCard.status}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>⚠️</span>
              <span className={styles.cardLabel}>Coverage status</span>
            </div>
            <div className={styles.statusIndicators}>
              <div className={styles.statusItem}>
                <span className={styles.statusCount}>{highImpactGaps}</span>
                <span className={styles.statusLabel}>High impact gaps</span>
              </div>
              <div className={styles.statusItem}>
                <span className={styles.statusCount}>{data.coverage_gaps.length}</span>
                <span className={styles.statusLabel}>Total gaps</span>
              </div>
            </div>
            <div className={styles.cardBadge.status}>UNCALIBRATED</div>
          </div>
        </div>
      </section>

      {/* Calibration Results - Post-reweighting target matching */}
      {calibrationResults && (
        <section className={styles.calibResults}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>RESULTS</span>
            <h2>Post-calibration target matching</h2>
            <p>Gradient descent reweighting results from {calibrationResults.metadata.data_year} CPS to {calibrationResults.metadata.tax_year} IRS targets</p>
          </div>

          <div className={styles.resultsOverview}>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>🎯</div>
              <div className={styles.resultValue}>
                {(calibrationResults.metadata.initial_loss * 100).toFixed(1)}% → {(calibrationResults.metadata.final_loss * 100).toFixed(1)}%
              </div>
              <div className={styles.resultLabel}>
                Loss (MSRE) · {((1 - calibrationResults.metadata.final_loss / calibrationResults.metadata.initial_loss) * 100).toFixed(0)}% reduction
              </div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>📊</div>
              <div className={styles.resultValue}>{formatNumber(calibrationResults.summary.total_population_calibrated, "count")}</div>
              <div className={styles.resultLabel}>Calibrated population</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>💰</div>
              <div className={styles.resultValue}>${formatNumber(calibrationResults.summary.total_agi_calibrated, "dollars")}</div>
              <div className={styles.resultLabel}>Total Calibrated AGI</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>✓</div>
              <div className={styles.resultValue}>
                {calibrationResults.targets.filter(t => Math.abs(t.relative_error) < 0.02).length}/{calibrationResults.targets.length}
              </div>
              <div className={styles.resultLabel}>Targets &lt;2% Error</div>
            </div>
          </div>

          <div className={styles.targetStatusBar}>
            <h4>Target error distribution</h4>
            <div className={styles.statusBarContainer}>
              <div
                className={styles.statusBarGood}
                style={{ width: `${(calibrationResults.targets.filter(t => Math.abs(t.relative_error) < 0.02).length / calibrationResults.targets.length) * 100}%` }}
                title={`${calibrationResults.targets.filter(t => Math.abs(t.relative_error) < 0.02).length} targets <2% error`}
              />
              <div
                className={styles.statusBarMedium}
                style={{ width: `${(calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.02 && Math.abs(t.relative_error) < 0.1).length / calibrationResults.targets.length) * 100}%` }}
                title={`${calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.02 && Math.abs(t.relative_error) < 0.1).length} targets 2-10% error`}
              />
              <div
                className={styles.statusBarBad}
                style={{ width: `${(calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.1).length / calibrationResults.targets.length) * 100}%` }}
                title={`${calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.1).length} targets >10% error`}
              />
            </div>
            <div className={styles.statusBarLegend}>
              <span><span className={styles.legendDotGood}></span> &lt;2% ({calibrationResults.targets.filter(t => Math.abs(t.relative_error) < 0.02).length})</span>
              <span><span className={styles.legendDotMedium}></span> 2-10% ({calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.02 && Math.abs(t.relative_error) < 0.1).length})</span>
              <span><span className={styles.legendDotBad}></span> &gt;10% ({calibrationResults.targets.filter(t => Math.abs(t.relative_error) >= 0.1).length})</span>
            </div>
          </div>

          <div className={styles.targetTable}>
            <h4>All calibration targets</h4>
            <div className={styles.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Target</th>
                    <th>Level</th>
                    <th>IRS Target</th>
                    <th>Calibrated</th>
                    <th>Error</th>
                  </tr>
                </thead>
                <tbody>
                  {calibrationResults.targets
                    .sort((a, b) => Math.abs(b.relative_error) - Math.abs(a.relative_error))
                    .map((target, i) => (
                      <tr key={i} className={getTableRowClass(target.relative_error)}>
                        <td><code>{target.name}</code></td>
                        <td>
                          <span className={target.group === "national" ? styles.levelBadge.national : styles.levelBadge.state}>
                            {target.group}
                          </span>
                        </td>
                        <td>{formatNumber(target.target_value, target.category === "agi" ? "dollars" : "count")}</td>
                        <td>{formatNumber(target.estimated_value, target.category === "agi" ? "dollars" : "count")}</td>
                        <td className={Math.abs(target.relative_error) < 0.02 ? styles.errorGood : Math.abs(target.relative_error) < 0.1 ? styles.errorMedium : styles.errorBad}>
                          {target.relative_error >= 0 ? "+" : ""}{(target.relative_error * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Validation Status - PolicyEngine Comparison */}
      <section className={styles.calibValidation}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>BENCHMARKING</span>
          <h2>Validation vs PolicyEngine</h2>
          <p>Comparing our calibration target coverage against PolicyEngine-US-Data's comprehensive approach</p>
        </div>

        <div className={styles.validationOverview}>
          <div className={styles.validationHeadline}>
            <div className={styles.headlineStat}>
              <span className={styles.statNumberOur}>205</span>
              <span className={styles.statDesc}>Our targets</span>
            </div>
            <div className={styles.headlineVs}>vs</div>
            <div className={styles.headlineStat}>
              <span className={styles.statNumberPe}>2,813</span>
              <span className={styles.statDesc}>PolicyEngine Targets</span>
            </div>
          </div>
          <div className={styles.validationProgressWrapper}>
            <div className={styles.validationProgressBar}>
              <div className={styles.progressFill} style={{ width: "7.3%" }}>
                <span className={styles.progressLabel}>7.3% Coverage</span>
              </div>
            </div>
            <div className={styles.validationGapStat}>Gap: 2,608 targets</div>
          </div>
        </div>

        <div className={styles.categoryCoverageGrid}>
          <div className={styles.coverageCategory}>
            <div className={styles.coverageHeader}>
              <div className={styles.coverageIcon}>💰</div>
              <h4>IRS SOI Tax</h4>
            </div>
            <div className={styles.coverageStats}>
              <div className={styles.coverageNumbers}>
                <span className={styles.ourCount}>80</span>
                <span className={styles.divider}>/</span>
                <span className={styles.peCount}>500</span>
              </div>
              <div className={styles.coverageBar}>
                <div className={styles.barFill} style={{ width: "16%" }}></div>
              </div>
              <div className={styles.coveragePct}>16% covered</div>
            </div>
            <button
              className={`coverage-expand ${expandedCategory === 'tax' ? 'active' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === 'tax' ? null : 'tax')}
            >
              {expandedCategory === 'tax' ? '▼' : '▶'} See what's missing
            </button>
            {expandedCategory === 'tax' && (
              <div className={styles.coverageGaps}>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Income by source</span>
                  <span className={styles.gapDesc}>Interest, dividends, capital gains, partnership income</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>EITC by child count</span>
                  <span className={styles.gapDesc}>Stratified EITC targets (0, 1, 2, 3+ children)</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Deductions detail</span>
                  <span className={styles.gapDesc}>Medical, SALT, QBI deduction targets</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>State coverage</span>
                  <span className={styles.gapDesc}>All 50 states + DC (we have 5 states)</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.coverageCategory}>
            <div className={styles.coverageHeader}>
              <div className={styles.coverageIcon}>👥</div>
              <h4>Demographics</h4>
            </div>
            <div className={styles.coverageStats}>
              <div className={styles.coverageNumbers}>
                <span className={styles.ourCount}>50</span>
                <span className={styles.divider}>/</span>
                <span className={styles.peCount}>900</span>
              </div>
              <div className={styles.coverageBar}>
                <div className={styles.barFill} style={{ width: "5.6%" }}></div>
              </div>
              <div className={styles.coveragePct}>5.6% covered</div>
            </div>
            <button
              className={`coverage-expand ${expandedCategory === 'demographics' ? 'active' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === 'demographics' ? null : 'demographics')}
            >
              {expandedCategory === 'demographics' ? '▼' : '▶'} See what's missing
            </button>
            {expandedCategory === 'demographics' && (
              <div className={styles.coverageGaps}>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Age granularity</span>
                  <span className={styles.gapDesc}>18 age brackets (we have 5 broad groups)</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Congressional districts</span>
                  <span className={styles.gapDesc}>436 district-level targets (we have state only)</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Race/ethnicity</span>
                  <span className={styles.gapDesc}>Demographic distributions by race</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.coverageCategory}>
            <div className={styles.coverageHeader}>
              <div className={styles.coverageIcon}>🏥</div>
              <h4>Benefit programs</h4>
            </div>
            <div className={styles.coverageStats}>
              <div className={styles.coverageNumbers}>
                <span className={styles.ourCount}>75</span>
                <span className={styles.divider}>/</span>
                <span className={styles.peCount}>800</span>
              </div>
              <div className={styles.coverageBar}>
                <div className={styles.barFill} style={{ width: "9.4%" }}></div>
              </div>
              <div className={styles.coveragePct}>9.4% covered</div>
            </div>
            <button
              className={`coverage-expand ${expandedCategory === 'benefits' ? 'active' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === 'benefits' ? null : 'benefits')}
            >
              {expandedCategory === 'benefits' ? '▼' : '▶'} See what's missing
            </button>
            {expandedCategory === 'benefits' && (
              <div className={styles.coverageGaps}>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Medicaid enrollment</span>
                  <span className={styles.gapDesc}>State + congressional district enrollment counts</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>SSI participation</span>
                  <span className={styles.gapDesc}>Supplemental Security Income targets</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>SNAP state coverage</span>
                  <span className={styles.gapDesc}>All states (we have 10 states)</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>TANF programs</span>
                  <span className={styles.gapDesc}>Temporary Assistance for Needy Families</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.coverageCategory}>
            <div className={styles.coverageHeader}>
              <div className={styles.coverageIcon}>🏥</div>
              <h4>Healthcare</h4>
            </div>
            <div className={styles.coverageStats}>
              <div className={styles.coverageNumbers}>
                <span className={styles.ourCount}>0</span>
                <span className={styles.divider}>/</span>
                <span className={styles.peCount}>300</span>
              </div>
              <div className={styles.coverageBar}>
                <div className={styles.barFill} style={{ width: "0%" }}></div>
              </div>
              <div className={styles.coveragePct}>0% covered</div>
            </div>
            <button
              className={`coverage-expand ${expandedCategory === 'healthcare' ? 'active' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === 'healthcare' ? null : 'healthcare')}
            >
              {expandedCategory === 'healthcare' ? '▼' : '▶'} See what's missing
            </button>
            {expandedCategory === 'healthcare' && (
              <div className={styles.coverageGaps}>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Insurance enrollment</span>
                  <span className={styles.gapDesc}>Public/private insurance coverage patterns</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>ACA marketplace</span>
                  <span className={styles.gapDesc}>Exchange enrollment and subsidy data</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Healthcare spending</span>
                  <span className={styles.gapDesc}>Medical expenditure patterns</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.coverageCategory}>
            <div className={styles.coverageHeader}>
              <div className={styles.coverageIcon}>📊</div>
              <h4>Tax expenditures</h4>
            </div>
            <div className={styles.coverageStats}>
              <div className={styles.coverageNumbers}>
                <span className={styles.ourCount}>0</span>
                <span className={styles.divider}>/</span>
                <span className={styles.peCount}>300</span>
              </div>
              <div className={styles.coverageBar}>
                <div className={styles.barFill} style={{ width: "0%" }}></div>
              </div>
              <div className={styles.coveragePct}>0% covered</div>
            </div>
            <button
              className={`coverage-expand ${expandedCategory === 'tax_expenditures' ? 'active' : ''}`}
              onClick={() => setExpandedCategory(expandedCategory === 'tax_expenditures' ? null : 'tax_expenditures')}
            >
              {expandedCategory === 'tax_expenditures' ? '▼' : '▶'} See what's missing
            </button>
            {expandedCategory === 'tax_expenditures' && (
              <div className={styles.coverageGaps}>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Treasury estimates</span>
                  <span className={styles.gapDesc}>Annual tax expenditure totals</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>JCT estimates</span>
                  <span className={styles.gapDesc}>Joint Committee on Taxation provision costs</span>
                </div>
                <div className={styles.gapItem}>
                  <span className={styles.gapName}>Cross-validation</span>
                  <span className={styles.gapDesc}>Independent verification of credit/deduction totals</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.comparisonTable}>
          <h4>Detailed comparison</h4>
          <div className={styles.tableWrapper}>
            <table className={styles.peComparisonTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>PE Targets</th>
                  <th>Our targets</th>
                  <th>Gap</th>
                  <th>Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IRS SOI Tax</strong></td>
                  <td>500</td>
                  <td>80</td>
                  <td className={styles.gapNegative}>-420</td>
                  <td><span className={styles.coverageBadge.low}>16%</span></td>
                </tr>
                <tr>
                  <td><strong>Demographics</strong></td>
                  <td>900</td>
                  <td>50</td>
                  <td className={styles.gapNegative}>-850</td>
                  <td><span className={styles.coverageBadge.veryLow}>5.6%</span></td>
                </tr>
                <tr>
                  <td><strong>Benefit programs</strong></td>
                  <td>800</td>
                  <td>75</td>
                  <td className={styles.gapNegative}>-725</td>
                  <td><span className={styles.coverageBadge.low}>9.4%</span></td>
                </tr>
                <tr>
                  <td><strong>Healthcare</strong></td>
                  <td>300</td>
                  <td>0</td>
                  <td className={styles.gapNegative}>-300</td>
                  <td><span className={styles.coverageBadge.none}>0%</span></td>
                </tr>
                <tr>
                  <td><strong>Tax expenditures</strong></td>
                  <td>300</td>
                  <td>0</td>
                  <td className={styles.gapNegative}>-300</td>
                  <td><span className={styles.coverageBadge.none}>0%</span></td>
                </tr>
                <tr className={styles.totalRow}>
                  <td><strong>TOTAL</strong></td>
                  <td><strong>2,813</strong></td>
                  <td><strong>205</strong></td>
                  <td className={styles.gapNegative}><strong>-2,608</strong></td>
                  <td><span className={styles.coverageBadge.veryLow}><strong>7.3%</strong></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Metrics Table */}
      <section>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>DETAILED</span>
          <h2>Metric comparison</h2>
        </div>

        <div className={styles.categoryTabs}>
          <button className={selectedCategory === "all" ? styles.categoryTabActive : styles.categoryTabButton} onClick={() => setSelectedCategory("all")}>
            All Metrics
          </button>
          <button className={selectedCategory === "aggregate" ? styles.categoryTabActive : styles.categoryTabButton} onClick={() => setSelectedCategory("aggregate")}>
            Aggregates
          </button>
          <button className={selectedCategory === "by_filing_status" ? styles.categoryTabActive : styles.categoryTabButton} onClick={() => setSelectedCategory("by_filing_status")}>
            Filing Status
          </button>
        </div>

        <div className={styles.metricsTable}>
          <div className={styles.tableHeader}>
            <div className="col-metric">Metric</div>
            <div className={styles.colCps}>CPS Value</div>
            <div className={styles.colSoi}>SOI Target</div>
            <div className="col-gap">Gap</div>
            <div className="col-statute">Statute</div>
          </div>

          {filteredMetrics.map((metric) => (
            <div key={metric.name} className={styles.tableRow[getTableRowClass(metric.pct_error)]}>
              <div className="col-metric">
                <span className={styles.metricName}>{METRIC_LABELS[metric.name] || metric.name}</span>
                <span className={styles.metricCategory}>{metric.category}</span>
              </div>
              <div className={styles.colCps}>{formatNumber(metric.cps_value, metric.unit)}</div>
              <div className={styles.colSoi}>{formatNumber(metric.soi_value, metric.unit)}</div>
              <div className="col-gap">
                <div className={styles.gapVisual}>
                  <div className={styles.gapBarBg}>
                    <div
                      className={styles.gapBarFill[getErrorBarClass(metric.pct_error)]}
                      style={{ width: `${Math.min(Math.abs(metric.pct_error) * 100, 100)}%` }}
                    />
                  </div>
                  <span className={styles.gapValue}>{(metric.pct_error * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div className="col-statute">
                <code>{metric.statute_ref}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Gaps */}
      <section>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>DOCUMENTATION</span>
          <h2>Known coverage gaps</h2>
          <p>Components missing from CPS that SOI captures via tax returns.</p>
        </div>

        <div className={styles.gapsGrid}>
          {data.coverage_gaps.map((gap, i) => (
            <div key={i} className={styles.gapCard[getImpactClass(gap.impact)]}>
              <div className={styles.gapHeader}>
                <span className={styles.impactBadge[gap.impact as "high" | "medium" | "low"]}>{gap.impact.toUpperCase()}</span>
                <span className={styles.gapVariable}>{gap.variable}</span>
              </div>
              <h4 className={styles.gapComponent}>{gap.component.replace(/_/g, " ")}</h4>
              <p className={styles.gapNotes}>{gap.notes}</p>
              <div className={styles.gapStatute}>
                <code>{gap.statute_ref}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>APPROACH</span>
          <h2>Calibration pipeline</h2>
          <p>Connecting microdata to administrative targets through reweighting</p>
        </div>

        <div className={styles.pipelineFlow}>
          <div className={styles.pipelineStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageIcon}>📊</div>
              <h4>Microdata</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">CPS ASEC / FRS</p>
              <p className="stage-count">~200k records</p>
              <p className="stage-desc">Survey data with original weights</p>
            </div>
          </div>

          <div className={styles.pipelineArrow}>→</div>

          <div className={styles.pipelineStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageIcon}>🎯</div>
              <h4>Targets DB</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">SQLite</p>
              <p className="stage-count">~1000 targets</p>
              <p className="stage-desc">Administrative totals by stratum</p>
            </div>
          </div>

          <div className={styles.pipelineArrow}>→</div>

          <div className={styles.pipelineStage}>
            <div className={styles.stageHeader}>
              <div className={styles.stageIcon}>⚖️</div>
              <h4>Calibrated weights</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">Parquet</p>
              <p className="stage-count">weights.parquet</p>
              <p className="stage-desc">Reweighted to match targets</p>
            </div>
          </div>
        </div>

        <div className={styles.pipelineMethods}>
          <h4>Calibration methods</h4>
          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className="method-name">Entropy minimisation</div>
              <div className="method-desc">Minimize KL divergence from original weights</div>
              <div className="method-use">Default method, smooth adjustments</div>
            </div>
            <div className={styles.methodCard}>
              <div className="method-name">Raking</div>
              <div className="method-desc">Iterative proportional fitting</div>
              <div className="method-use">Many margin constraints</div>
            </div>
            <div className={styles.methodCard}>
              <div className="method-name">Linear regression</div>
              <div className="method-desc">Linear regression adjustment</div>
              <div className="method-use">Few constraints, fast</div>
            </div>
          </div>
        </div>

        <div className={styles.pipelineSteps}>
          <div className={styles.pipelineStepCurrent}>
            <div className={styles.stepNumber}>1</div>
            <div className="step-content">
              <h4>Load microdata</h4>
              <p>Import survey data with original weights and select variables.</p>
              <span className={styles.stepStatusActive}>CURRENT</span>
            </div>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineStep}>
            <div className={styles.stepNumber}>2</div>
            <div className="step-content">
              <h4>Query targets</h4>
              <p>Retrieve administrative totals from targets database.</p>
              <span className={styles.stepStatus}>NEXT</span>
            </div>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineStep}>
            <div className={styles.stepNumber}>3</div>
            <div className="step-content">
              <h4>Build constraints</h4>
              <p>Map targets to microdata aggregations.</p>
              <span className={styles.stepStatus}>PENDING</span>
            </div>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineStep}>
            <div className={styles.stepNumber}>4</div>
            <div className="step-content">
              <h4>Calibrate</h4>
              <p>Adjust weights to satisfy constraints.</p>
              <span className={styles.stepStatus}>PENDING</span>
            </div>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineStep}>
            <div className={styles.stepNumber}>5</div>
            <div className="step-content">
              <h4>Validate & Export</h4>
              <p>Check calibration quality and export weights.</p>
              <span className={styles.stepStatus}>PENDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>DATA SOURCES</span>
          <h2>Administrative targets</h2>
          <p>
            {targetsSummary ? (
              <>
                {targetsSummary.total_targets.toLocaleString()} calibration targets across{" "}
                {targetsSummary.total_strata} strata from {targetsSummary.sources.length} sources.
              </>
            ) : (
              "Comprehensive administrative data for calibration and validation"
            )}
          </p>
        </div>

        <div className={styles.sourcesOverview}>
          <h4>Available data sources</h4>
          <div className={styles.sourcesList}>
            <div className={styles.sourceDetail.us}>
              <div className={styles.sourceDetailHeader}>
                <span className={styles.sourceFlag}>🇺🇸</span>
                <h5>IRS Statistics of Income (SOI)</h5>
                <span className={styles.sourceJurisdiction}>United States</span>
              </div>
              <div className={styles.sourceDetailContent}>
                <p className={styles.sourceDescription}>
                  State-level individual income tax data from Forms 1040.
                  National and state totals with AGI bracket stratification.
                </p>
                <div className={styles.sourceFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Historic Table 2:</span>
                    <span className={styles.featureValue}>1996-2022, all 50 states + DC</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Variables:</span>
                    <span className={styles.featureValue}>Returns, AGI, wages, dividends, tax liability</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>AGI Brackets:</span>
                    <span className={styles.featureValue}>18 brackets from &lt;$1 to $10M+</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Credits:</span>
                    <span className={styles.featureValue}>EITC, CTC, ACTC by state</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sourceDetail.us}>
              <div className={styles.sourceDetailHeader}>
                <span className={styles.sourceFlag}>🇺🇸</span>
                <h5>Census Bureau CPS ASEC</h5>
                <span className={styles.sourceJurisdiction}>United States</span>
              </div>
              <div className={styles.sourceDetailContent}>
                <p className={styles.sourceDescription}>
                  Current Population Survey Annual Social and Economic Supplement.
                  Monthly microdata with comprehensive income and benefit variables.
                </p>
                <div className={styles.sourceFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Coverage:</span>
                    <span className={styles.featureValue}>~200k individuals, monthly updates</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Variables:</span>
                    <span className={styles.featureValue}>Income, benefits, employment, demographics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sourceDetail.uk}>
              <div className={styles.sourceDetailHeader}>
                <span className={styles.sourceFlag}>🇬🇧</span>
                <h5>OBR economic forecasts</h5>
                <span className={styles.sourceJurisdiction}>United Kingdom</span>
              </div>
              <div className={styles.sourceDetailContent}>
                <p className={styles.sourceDescription}>
                  Office for Budget Responsibility fiscal projections.
                  National-level economic and tax/benefit aggregates.
                </p>
                <div className={styles.sourceFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Type:</span>
                    <span className={styles.featureValue}>Projections, updated quarterly</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sourceDetail.uk}>
              <div className={styles.sourceDetailHeader}>
                <span className={styles.sourceFlag}>🇬🇧</span>
                <h5>ONS family resources survey</h5>
                <span className={styles.sourceJurisdiction}>United Kingdom</span>
              </div>
              <div className={styles.sourceDetailContent}>
                <p className={styles.sourceDescription}>
                  Office for National Statistics household survey.
                  Income, benefits, housing, and household composition.
                </p>
                <div className={styles.sourceFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureLabel}>Coverage:</span>
                    <span className={styles.featureValue}>Annual, comprehensive household data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {targetsSummary && (
          <>
            <div className={styles.sourcesGrid}>
              {targetsSummary.sources.map((source) => (
                <div
                  key={source.source}
                  className={source.is_projection ? styles.sourceCard.projection : styles.sourceCard.historical}
                >
                  <div className={styles.sourceHeader}>
                    <span className={source.is_projection ? styles.sourceBadge.projection : styles.sourceBadge.historical}>
                      {source.is_projection ? "PROJECTION" : "HISTORICAL"}
                    </span>
                    <span className={styles.sourceName}>{source.display_name}</span>
                  </div>
                  <div className={styles.sourceStats}>
                    <div className={styles.sourceStat}>
                      <span className="stat-value">{source.count}</span>
                      <span className="stat-label">Targets</span>
                    </div>
                    <div className={styles.sourceStat}>
                      <span className="stat-value">{source.variables}</span>
                      <span className="stat-label">Variables</span>
                    </div>
                    <div className={styles.sourceStat}>
                      <span className="stat-value">
                        {source.year_min === source.year_max
                          ? source.year_min
                          : `${source.year_min}-${source.year_max}`}
                      </span>
                      <span className="stat-label">Years</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.jurisdictionSummary}>
              <h4>Coverage by Jurisdiction</h4>
              <div className={styles.jurisdictionBars}>
                {targetsSummary.jurisdictions.map((j) => (
                  <div key={j.jurisdiction} className={styles.jurisdictionBar}>
                    <span className={styles.jurisdictionName}>
                      {j.jurisdiction.toUpperCase().replace("-", " ")}
                    </span>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: `${(j.count / targetsSummary.total_targets) * 100}%`,
                        }}
                      />
                    </div>
                    <span className={styles.jurisdictionCount}>{j.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section className={styles.calibCta}>
        <div className="cta-content">
          <h2>Explore the Source</h2>
          <p>Calibration framework is open source.</p>
          <div className={styles.ctaButtons}>
            <a href="https://github.com/CosilicoAI/cosilico-data-sources" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
              Data Sources
            </a>
            <a href="https://github.com/CosilicoAI/cosilico-microdata" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
              Microdata
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
