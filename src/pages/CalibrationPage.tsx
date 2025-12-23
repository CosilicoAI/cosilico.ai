import React, { useState, useEffect } from "react";
import "../styles/Calibration.css";

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
  total_returns: "Total Returns",
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

function getErrorClass(pctError: number): string {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "error-low";
  if (absError < 0.15) return "error-medium";
  return "error-high";
}

function getErrorLabel(pctError: number): string {
  const absError = Math.abs(pctError);
  if (absError < 0.05) return "CALIBRATED";
  if (absError < 0.15) return "MODERATE GAP";
  return "SIGNIFICANT GAP";
}

function getImpactClass(impact: string): string {
  switch (impact) {
    case "high": return "impact-high";
    case "medium": return "impact-medium";
    case "low": return "impact-low";
    default: return "";
  }
}

export default function CalibrationPage() {
  const [data, setData] = useState<BaselineData | null>(null);
  const [targetsSummary, setTargetsSummary] = useState<TargetsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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
    ])
      .then(([baselineJson, targetsJson]) => {
        setData(baselineJson);
        setTargetsSummary(targetsJson);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="calibration-page">
        <div className="blueprint-grid" />
        <div className="loading-state">Loading baseline comparison...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="calibration-page">
        <div className="blueprint-grid" />
        <div className="error-state">Error: {error || "No data available"}</div>
      </div>
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
    <div className="calibration-page">
      <div className="blueprint-grid" />
      <div className="scanlines" />

      {/* Hero Section */}
      <section className="calib-hero">
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">cosilico-microdata</span>
          </div>
          <div className="terminal-content">
            <div className="type-line">
              <span className="prompt">$</span>
              <span className="command">cosilico</span>
              <span className="flag">calibrate</span>
              <span className="arg">--baseline</span>
              <span className="arg">--compare soi</span>
            </div>
          </div>
        </div>

        <h1>
          <span className="hero-prefix">BASELINE</span>
          <span className="hero-main">Calibration Dashboard</span>
        </h1>
        <p className="calib-subtitle">
          Comparing CPS ASEC {data.cps_year} against IRS SOI {data.soi_year}.<br />
          Real survey data. Documented gaps.
        </p>

        <div className="survey-stats">
          <div className="stat">
            <span className="stat-value">{data.raw_survey_stats.n_persons.toLocaleString()}</span>
            <span className="stat-label">Sample Persons</span>
          </div>
          <div className="stat">
            <span className="stat-value">{data.raw_survey_stats.n_tax_units.toLocaleString()}</span>
            <span className="stat-label">Tax Units</span>
          </div>
          <div className="stat">
            <span className="stat-value">{formatNumber(data.raw_survey_stats.total_person_weight, "count")}</span>
            <span className="stat-label">Population</span>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="calib-summary">
        <div className="section-header">
          <span className="section-label">OVERVIEW</span>
          <h2>Baseline Gap Summary</h2>
        </div>

        <div className="summary-grid">
          <div className={`summary-card ${getErrorClass(returnsError)}`}>
            <div className="card-header">
              <span className="card-icon">📊</span>
              <span className="card-label">Total Returns</span>
            </div>
            <div className="card-comparison">
              <div className="comparison-value">
                <span className="value-label">CPS</span>
                <span className="value-number">{formatNumber(totalReturnsGap?.cps_value || 0, "count")}</span>
              </div>
              <div className="comparison-arrow">→</div>
              <div className="comparison-value target">
                <span className="value-label">SOI</span>
                <span className="value-number">{formatNumber(totalReturnsGap?.soi_value || 0, "count")}</span>
              </div>
            </div>
            <div className="card-error">
              <div className="error-bar-container">
                <div className="error-bar" style={{ width: `${Math.min(Math.abs(returnsError) * 200, 100)}%` }} />
              </div>
              <span className="error-value">{(returnsError * 100).toFixed(1)}%</span>
            </div>
            <div className="card-badge">{getErrorLabel(returnsError)}</div>
          </div>

          <div className={`summary-card ${getErrorClass(agiError)}`}>
            <div className="card-header">
              <span className="card-icon">💰</span>
              <span className="card-label">Total AGI</span>
            </div>
            <div className="card-comparison">
              <div className="comparison-value">
                <span className="value-label">CPS</span>
                <span className="value-number">{formatNumber(totalAgiGap?.cps_value || 0, "dollars")}</span>
              </div>
              <div className="comparison-arrow">→</div>
              <div className="comparison-value target">
                <span className="value-label">SOI</span>
                <span className="value-number">{formatNumber(totalAgiGap?.soi_value || 0, "dollars")}</span>
              </div>
            </div>
            <div className="card-error">
              <div className="error-bar-container">
                <div className="error-bar" style={{ width: `${Math.min(Math.abs(agiError) * 200, 100)}%` }} />
              </div>
              <span className="error-value">{(agiError * 100).toFixed(1)}%</span>
            </div>
            <div className="card-badge">{getErrorLabel(agiError)}</div>
          </div>

          <div className="summary-card status-card">
            <div className="card-header">
              <span className="card-icon">⚠️</span>
              <span className="card-label">Coverage Status</span>
            </div>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-count">{highImpactGaps}</span>
                <span className="status-label">High Impact Gaps</span>
              </div>
              <div className="status-item">
                <span className="status-count">{data.coverage_gaps.length}</span>
                <span className="status-label">Total Gaps</span>
              </div>
            </div>
            <div className="card-badge status">UNCALIBRATED</div>
          </div>
        </div>
      </section>

      {/* Metrics Table */}
      <section className="calib-metrics">
        <div className="section-header">
          <span className="section-label">DETAILED</span>
          <h2>Metric Comparison</h2>
        </div>

        <div className="category-tabs">
          <button className={selectedCategory === "all" ? "active" : ""} onClick={() => setSelectedCategory("all")}>
            All Metrics
          </button>
          <button className={selectedCategory === "aggregate" ? "active" : ""} onClick={() => setSelectedCategory("aggregate")}>
            Aggregates
          </button>
          <button className={selectedCategory === "by_filing_status" ? "active" : ""} onClick={() => setSelectedCategory("by_filing_status")}>
            Filing Status
          </button>
        </div>

        <div className="metrics-table">
          <div className="table-header">
            <div className="col-metric">Metric</div>
            <div className="col-cps">CPS Value</div>
            <div className="col-soi">SOI Target</div>
            <div className="col-gap">Gap</div>
            <div className="col-statute">Statute</div>
          </div>

          {filteredMetrics.map((metric) => (
            <div key={metric.name} className={`table-row ${getErrorClass(metric.pct_error)}`}>
              <div className="col-metric">
                <span className="metric-name">{METRIC_LABELS[metric.name] || metric.name}</span>
                <span className="metric-category">{metric.category}</span>
              </div>
              <div className="col-cps">{formatNumber(metric.cps_value, metric.unit)}</div>
              <div className="col-soi">{formatNumber(metric.soi_value, metric.unit)}</div>
              <div className="col-gap">
                <div className="gap-visual">
                  <div className="gap-bar-bg">
                    <div
                      className="gap-bar-fill"
                      style={{ width: `${Math.min(Math.abs(metric.pct_error) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="gap-value">{(metric.pct_error * 100).toFixed(1)}%</span>
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
      <section className="calib-gaps">
        <div className="section-header">
          <span className="section-label">DOCUMENTATION</span>
          <h2>Known Coverage Gaps</h2>
          <p>Components missing from CPS that SOI captures via tax returns.</p>
        </div>

        <div className="gaps-grid">
          {data.coverage_gaps.map((gap, i) => (
            <div key={i} className={`gap-card ${getImpactClass(gap.impact)}`}>
              <div className="gap-header">
                <span className={`impact-badge ${gap.impact}`}>{gap.impact.toUpperCase()}</span>
                <span className="gap-variable">{gap.variable}</span>
              </div>
              <h4 className="gap-component">{gap.component.replace(/_/g, " ")}</h4>
              <p className="gap-notes">{gap.notes}</p>
              <div className="gap-statute">
                <code>{gap.statute_ref}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="calib-methodology">
        <div className="section-header">
          <span className="section-label">APPROACH</span>
          <h2>Calibration Pipeline</h2>
          <p>Connecting microdata to administrative targets through reweighting</p>
        </div>

        <div className="pipeline-flow">
          <div className="pipeline-stage">
            <div className="stage-header">
              <div className="stage-icon">📊</div>
              <h4>Microdata</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">CPS ASEC / FRS</p>
              <p className="stage-count">~200k records</p>
              <p className="stage-desc">Survey data with original weights</p>
            </div>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-stage">
            <div className="stage-header">
              <div className="stage-icon">🎯</div>
              <h4>Targets DB</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">SQLite</p>
              <p className="stage-count">~1000 targets</p>
              <p className="stage-desc">Administrative totals by stratum</p>
            </div>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-stage">
            <div className="stage-header">
              <div className="stage-icon">⚖️</div>
              <h4>Calibrated Weights</h4>
            </div>
            <div className="stage-details">
              <p className="stage-source">Parquet</p>
              <p className="stage-count">weights.parquet</p>
              <p className="stage-desc">Reweighted to match targets</p>
            </div>
          </div>
        </div>

        <div className="pipeline-methods">
          <h4>Calibration Methods</h4>
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-name">Entropy Minimization</div>
              <div className="method-desc">Minimize KL divergence from original weights</div>
              <div className="method-use">Default method, smooth adjustments</div>
            </div>
            <div className="method-card">
              <div className="method-name">Raking</div>
              <div className="method-desc">Iterative proportional fitting</div>
              <div className="method-use">Many margin constraints</div>
            </div>
            <div className="method-card">
              <div className="method-name">Linear Regression</div>
              <div className="method-desc">Linear regression adjustment</div>
              <div className="method-use">Few constraints, fast</div>
            </div>
          </div>
        </div>

        <div className="pipeline-steps">
          <div className="pipeline-step current">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Load Microdata</h4>
              <p>Import survey data with original weights and select variables.</p>
              <span className="step-status active">CURRENT</span>
            </div>
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Query Targets</h4>
              <p>Retrieve administrative totals from targets database.</p>
              <span className="step-status">NEXT</span>
            </div>
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Build Constraints</h4>
              <p>Map targets to microdata aggregations.</p>
              <span className="step-status">PENDING</span>
            </div>
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Calibrate</h4>
              <p>Adjust weights to satisfy constraints.</p>
              <span className="step-status">PENDING</span>
            </div>
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Validate & Export</h4>
              <p>Check calibration quality and export weights.</p>
              <span className="step-status">PENDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="calib-sources">
        <div className="section-header">
          <span className="section-label">DATA SOURCES</span>
          <h2>Administrative Targets</h2>
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

        <div className="sources-overview">
          <h4>Available Data Sources</h4>
          <div className="sources-list">
            <div className="source-detail us-source">
              <div className="source-detail-header">
                <span className="source-flag">🇺🇸</span>
                <h5>IRS Statistics of Income (SOI)</h5>
                <span className="source-jurisdiction">United States</span>
              </div>
              <div className="source-detail-content">
                <p className="source-description">
                  State-level individual income tax data from Forms 1040.
                  National and state totals with AGI bracket stratification.
                </p>
                <div className="source-features">
                  <div className="feature">
                    <span className="feature-label">Historic Table 2:</span>
                    <span className="feature-value">1996-2022, all 50 states + DC</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Variables:</span>
                    <span className="feature-value">Returns, AGI, wages, dividends, tax liability</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">AGI Brackets:</span>
                    <span className="feature-value">18 brackets from &lt;$1 to $10M+</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Credits:</span>
                    <span className="feature-value">EITC, CTC, ACTC by state</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="source-detail us-source">
              <div className="source-detail-header">
                <span className="source-flag">🇺🇸</span>
                <h5>Census Bureau CPS ASEC</h5>
                <span className="source-jurisdiction">United States</span>
              </div>
              <div className="source-detail-content">
                <p className="source-description">
                  Current Population Survey Annual Social and Economic Supplement.
                  Monthly microdata with comprehensive income and benefit variables.
                </p>
                <div className="source-features">
                  <div className="feature">
                    <span className="feature-label">Coverage:</span>
                    <span className="feature-value">~200k individuals, monthly updates</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Variables:</span>
                    <span className="feature-value">Income, benefits, employment, demographics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="source-detail uk-source">
              <div className="source-detail-header">
                <span className="source-flag">🇬🇧</span>
                <h5>OBR Economic Forecasts</h5>
                <span className="source-jurisdiction">United Kingdom</span>
              </div>
              <div className="source-detail-content">
                <p className="source-description">
                  Office for Budget Responsibility fiscal projections.
                  National-level economic and tax/benefit aggregates.
                </p>
                <div className="source-features">
                  <div className="feature">
                    <span className="feature-label">Type:</span>
                    <span className="feature-value">Projections, updated quarterly</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="source-detail uk-source">
              <div className="source-detail-header">
                <span className="source-flag">🇬🇧</span>
                <h5>ONS Family Resources Survey</h5>
                <span className="source-jurisdiction">United Kingdom</span>
              </div>
              <div className="source-detail-content">
                <p className="source-description">
                  Office for National Statistics household survey.
                  Income, benefits, housing, and household composition.
                </p>
                <div className="source-features">
                  <div className="feature">
                    <span className="feature-label">Coverage:</span>
                    <span className="feature-value">Annual, comprehensive household data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {targetsSummary && (
          <>
            <div className="sources-grid">
              {targetsSummary.sources.map((source) => (
                <div
                  key={source.source}
                  className={`source-card ${source.is_projection ? "projection" : "historical"}`}
                >
                  <div className="source-header">
                    <span className={`source-badge ${source.is_projection ? "projection" : "historical"}`}>
                      {source.is_projection ? "PROJECTION" : "HISTORICAL"}
                    </span>
                    <span className="source-name">{source.display_name}</span>
                  </div>
                  <div className="source-stats">
                    <div className="source-stat">
                      <span className="stat-value">{source.count}</span>
                      <span className="stat-label">Targets</span>
                    </div>
                    <div className="source-stat">
                      <span className="stat-value">{source.variables}</span>
                      <span className="stat-label">Variables</span>
                    </div>
                    <div className="source-stat">
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

            <div className="jurisdiction-summary">
              <h4>Coverage by Jurisdiction</h4>
              <div className="jurisdiction-bars">
                {targetsSummary.jurisdictions.map((j) => (
                  <div key={j.jurisdiction} className="jurisdiction-bar">
                    <span className="jurisdiction-name">
                      {j.jurisdiction.toUpperCase().replace("-", " ")}
                    </span>
                    <div className="bar-container">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${(j.count / targetsSummary.total_targets) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="jurisdiction-count">{j.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="calib-cta">
        <div className="cta-content">
          <h2>Explore the Source</h2>
          <p>Calibration framework is open source.</p>
          <div className="cta-buttons">
            <a href="https://github.com/CosilicoAI/cosilico-data-sources" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Data Sources
            </a>
            <a href="https://github.com/CosilicoAI/cosilico-microdata" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Microdata
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
