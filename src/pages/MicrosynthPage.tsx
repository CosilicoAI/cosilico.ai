import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/microsynth.css";

// Types for experiment data
interface CoverageResult {
  survey: string;
  n: number;
  median: number;
  mean: number;
  p95: number;
  p99: number;
}

interface Dataset {
  survey: string;
  n_train: number;
  n_holdout: number;
  train_share: number;
  variables: string[];
  waves: string[] | null;
}

interface Variable {
  name: string;
  sources: string[];
  role: string;
  dtype: string;
}

interface Experiment {
  id: string;
  name: string;
  description: string;
  created_at: string;
  datasets: Dataset[];
  variables: Variable[];
  target: string;
  model: {
    type: string;
    architecture: Record<string, unknown>;
    training: Record<string, unknown>;
    quantiles: number[] | null;
  };
  training_time_seconds: number;
  coverage: {
    overall_median: number;
    overall_mean: number;
    by_survey: CoverageResult[];
  };
}

interface DashboardData {
  experiments: Experiment[];
  metadata: {
    total_experiments: number;
    model_types: string[];
    datasets: string[];
  };
}

// Sample data - in production fetch from /api/microsynth/experiments
const SAMPLE_DATA: DashboardData = {
  experiments: [
    {
      id: "exp_20260104_234612",
      name: "Multi-source ZI-QDNN v1",
      description: "CPS+SIPP+PSID fusion with zero-inflated quantile DNN. Predicts annual_income using demographics, survey dummies, and income lag.",
      created_at: "2026-01-04T23:46:12.668702",
      datasets: [
        { survey: "cps", n_train: 115464, n_holdout: 28801, train_share: 0.80, variables: ["age", "is_male", "wage_income", "state_fips"], waves: null },
        { survey: "sipp", n_train: 323059, n_holdout: 80887, train_share: 0.80, variables: ["age", "is_male", "total_income", "education", "race"], waves: ["1", "2", "3", "4"] },
        { survey: "psid", n_train: 7411, n_holdout: 1796, train_share: 0.80, variables: ["age", "is_male", "wage_income", "marital_status"], waves: null },
      ],
      variables: [
        { name: "age", sources: ["cps", "sipp", "psid"], role: "predictor", dtype: "continuous" },
        { name: "is_male", sources: ["cps", "sipp", "psid"], role: "predictor", dtype: "categorical" },
        { name: "annual_income_lag", sources: ["sipp"], role: "predictor", dtype: "continuous" },
        { name: "race", sources: ["sipp"], role: "predictor", dtype: "categorical" },
        { name: "hispanic", sources: ["sipp"], role: "predictor", dtype: "categorical" },
        { name: "education", sources: ["sipp"], role: "predictor", dtype: "categorical" },
        { name: "marital_status", sources: ["sipp", "psid"], role: "predictor", dtype: "categorical" },
        { name: "state_fips", sources: ["cps", "psid"], role: "predictor", dtype: "categorical" },
        { name: "survey_cps", sources: ["derived"], role: "predictor", dtype: "binary" },
        { name: "survey_sipp", sources: ["derived"], role: "predictor", dtype: "binary" },
        { name: "survey_psid", sources: ["derived"], role: "predictor", dtype: "binary" },
        { name: "annual_income", sources: ["cps", "sipp", "psid"], role: "target", dtype: "continuous" },
      ],
      target: "annual_income",
      model: {
        type: "zi-qdnn",
        architecture: { hidden_units: 256, n_layers: 2, n_quantiles: 19, zero_inflation: true },
        training: { epochs: 30, batch_size: 4096, learning_rate: 0.001, optimizer: "adam", grad_clip: 1.0 },
        quantiles: null,
      },
      training_time_seconds: 25.7,
      coverage: {
        overall_median: 0.0000008,
        overall_mean: 0.000104,
        by_survey: [
          { survey: "cps", n: 28801, median: 0.0, mean: 0.0000196, p95: 0.0000138, p99: 0.000114 },
          { survey: "sipp", n: 80887, median: 0.000001, mean: 0.0000615, p95: 0.0000224, p99: 0.00036 },
          { survey: "psid", n: 1796, median: 0.0000008, mean: 0.00338, p95: 0.0000152, p99: 0.0000982 },
        ],
      },
    },
  ],
  metadata: {
    total_experiments: 1,
    model_types: ["zi-qdnn"],
    datasets: ["cps", "sipp", "psid"],
  },
};

function formatCoverage(n: number): string {
  if (n === 0) return "0";
  if (Math.abs(n) < 0.0001) return n.toExponential(1);
  if (Math.abs(n) < 1) return n.toFixed(6);
  return n.toLocaleString();
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toFixed(0)}s`;
}

export default function MicrosynthPage() {
  const [data] = useState<DashboardData>(SAMPLE_DATA);
  const [selectedExp, setSelectedExp] = useState<Experiment | null>(null);

  useEffect(() => {
    if (data.experiments.length > 0) {
      setSelectedExp(data.experiments[0]);
    }
  }, [data.experiments]);

  const totalRecords = data.experiments.reduce(
    (acc, e) => acc + e.datasets.reduce((a, d) => a + d.n_train + d.n_holdout, 0),
    0
  );

  return (
    <PageLayout>
      <div className={styles.page}>
        <div className={styles.gridBg} />
        <div className={styles.scanlineOverlay} />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <Link to="/stack" className={styles.breadcrumb}>
              ← Stack
            </Link>
            <div className={styles.heroBadge}>MICROSYNTH</div>
            <h1 className={styles.heroTitle}>Synthesis experiments</h1>
            <p className={styles.heroSubtitle}>
              Multi-source microdata synthesis tracking. Compare models, coverage metrics,
              and drill down to individual holdout records.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{data.metadata.total_experiments}</div>
              <div className={styles.statLabel}>Experiments</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{data.metadata.model_types.length}</div>
              <div className={styles.statLabel}>Model Types</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{data.metadata.datasets.length}</div>
              <div className={styles.statLabel}>Surveys</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{(totalRecords / 1000).toFixed(0)}K</div>
              <div className={styles.statLabel}>Records</div>
            </div>
          </div>
        </section>

        {/* Experiments List */}
        <section className={styles.experimentsSection}>
          <h2 className={styles.sectionTitle}>Experiments</h2>
          <div className={styles.experimentsList}>
            {data.experiments.map((exp) => (
              <div
                key={exp.id}
                className={`${styles.experimentCard} ${selectedExp?.id === exp.id ? styles.experimentCardSelected : ""}`}
                onClick={() => setSelectedExp(exp)}
              >
                <div className={styles.experimentHeader}>
                  <h3 className={styles.experimentName}>{exp.name}</h3>
                  <span className={styles.experimentModel}>{exp.model.type}</span>
                </div>
                <p className={styles.experimentDesc}>{exp.description}</p>
                <div className={styles.experimentMeta}>
                  <span className={styles.experimentDate}>
                    {new Date(exp.created_at).toLocaleDateString()}
                  </span>
                  <span className={styles.experimentCoverage}>
                    Coverage: {formatCoverage(exp.coverage.overall_median)}
                  </span>
                  <span className={styles.experimentTime}>
                    {formatDuration(exp.training_time_seconds)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Experiment Details */}
        {selectedExp && (
          <section className={styles.detailsSection}>
            <h2 className={styles.sectionTitle}>{selectedExp.name}</h2>

            {/* Coverage Results - Primary Focus */}
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsCardTitle}>Coverage results</h3>
              <div className={styles.coverageOverall}>
                <div className={styles.coverageOverallValue}>
                  {formatCoverage(selectedExp.coverage.overall_median)}
                </div>
                <div className={styles.coverageOverallLabel}>Overall Median Coverage (normalized NN distance)</div>
              </div>
              <div className={styles.coverageGrid}>
                {selectedExp.coverage.by_survey.map((cr) => (
                  <div key={cr.survey} className={styles.coverageCard}>
                    <div className={styles.coverageSurvey}>{cr.survey.toUpperCase()}</div>
                    <div className={styles.coverageMetrics}>
                      <div className={styles.coverageMetric}>
                        <span className={styles.coverageMetricLabel}>n holdout</span>
                        <span className={styles.coverageMetricValue}>{cr.n.toLocaleString()}</span>
                      </div>
                      <div className={styles.coverageMetric}>
                        <span className={styles.coverageMetricLabel}>median</span>
                        <span className={styles.coverageMetricValue}>{formatCoverage(cr.median)}</span>
                      </div>
                      <div className={styles.coverageMetric}>
                        <span className={styles.coverageMetricLabel}>p95</span>
                        <span className={styles.coverageMetricValue}>{formatCoverage(cr.p95)}</span>
                      </div>
                      <div className={styles.coverageMetric}>
                        <span className={styles.coverageMetricLabel}>p99</span>
                        <span className={styles.coverageMetricValue}>{formatCoverage(cr.p99)}</span>
                      </div>
                    </div>
                    <div className={styles.coverageBar}>
                      <div
                        className={styles.coverageBarFill}
                        style={{ width: `${Math.max(5, 100 - cr.median * 100000)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Datasets */}
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsCardTitle}>Dataset splits</h3>
              <div className={styles.datasetsGrid}>
                {selectedExp.datasets.map((ds) => (
                  <div key={ds.survey} className={styles.datasetCard}>
                    <div className={styles.datasetName}>{ds.survey.toUpperCase()}</div>
                    <div className={styles.datasetStats}>
                      <div className={styles.datasetStat}>
                        <span className={styles.datasetStatLabel}>Train</span>
                        <span className={styles.datasetStatValue}>{ds.n_train.toLocaleString()}</span>
                      </div>
                      <div className={styles.datasetStat}>
                        <span className={styles.datasetStatLabel}>Holdout</span>
                        <span className={styles.datasetStatValue}>{ds.n_holdout.toLocaleString()}</span>
                      </div>
                      <div className={styles.datasetStat}>
                        <span className={styles.datasetStatLabel}>Split</span>
                        <span className={styles.datasetStatValue}>{(ds.train_share * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                    {ds.waves && ds.waves.length > 0 && (
                      <div className={styles.datasetWaves}>Waves: {ds.waves.join(", ")}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Variables */}
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsCardTitle}>Variables ({selectedExp.variables.length})</h3>
              <div className={styles.variablesTable}>
                <div className={styles.variablesHeader}>
                  <span>Name</span>
                  <span>Role</span>
                  <span>Type</span>
                  <span>Sources</span>
                </div>
                {selectedExp.variables.map((v) => (
                  <div key={v.name} className={styles.variableRow}>
                    <span className={styles.variableName}>{v.name}</span>
                    <span className={`${styles.variableRole} ${v.role === "target" ? styles.variableRoleTarget : ""}`}>
                      {v.role}
                    </span>
                    <span className={styles.variableType}>{v.dtype}</span>
                    <span className={styles.variableSources}>
                      {v.sources.map((s) => (
                        <span key={s} className={styles.sourceTag}>{s}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Config */}
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsCardTitle}>Model: {selectedExp.model.type}</h3>
              <div className={styles.configGrid}>
                <div className={styles.configSection}>
                  <h4>Architecture</h4>
                  <div className={styles.configItems}>
                    {Object.entries(selectedExp.model.architecture).map(([k, v]) => (
                      <div key={k} className={styles.configItem}>
                        <span className={styles.configKey}>{k.replace(/_/g, " ")}</span>
                        <span className={styles.configValue}>{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.configSection}>
                  <h4>Training</h4>
                  <div className={styles.configItems}>
                    {Object.entries(selectedExp.model.training).map(([k, v]) => (
                      <div key={k} className={styles.configItem}>
                        <span className={styles.configKey}>{k.replace(/_/g, " ")}</span>
                        <span className={styles.configValue}>{String(v)}</span>
                      </div>
                    ))}
                    <div className={styles.configItem}>
                      <span className={styles.configKey}>duration</span>
                      <span className={styles.configValue}>{formatDuration(selectedExp.training_time_seconds)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Methodology */}
        <section className={styles.methodologySection}>
          <h2 className={styles.sectionTitle}>Methodology</h2>
          <div className={styles.methodologyGrid}>
            <div className={styles.methodologyCard}>
              <h3>ZI-QDNN</h3>
              <p>
                Zero-Inflated Quantile Deep Neural Network. Predicts P(income=0) with a
                classification head, and conditional quantiles (τ=0.05 to 0.95) with a regression head.
                Handles point mass at zero common in income data.
              </p>
            </div>
            <div className={styles.methodologyCard}>
              <h3>Coverage metric</h3>
              <p>
                For each holdout record, find the nearest neighbor in the synthetic data.
                Normalized by income standard deviation. Lower is better — indicates
                synthetic data covers the real distribution.
              </p>
            </div>
            <div className={styles.methodologyCard}>
              <h3>Multi-source fusion</h3>
              <p>
                Train on stacked data from CPS, SIPP, and PSID with survey dummies.
                Model learns survey-specific distributions while sharing structure.
                Missing variables filled with 0 and masked during loss computation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
