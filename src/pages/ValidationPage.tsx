import React, { useState, useEffect } from "react";
import { ValidationResults } from "../types/validation";
import * as styles from "../styles/validation.css";

export default function ValidationPage() {
  const [data, setData] = useState<ValidationResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to load validation results
    fetch("/validation-results.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Validation results not found");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        // If real data not available, use sample data
        import("../data/sample-validation.json")
          .then((module) => {
            setData(module.default as ValidationResults);
            setLoading(false);
          })
          .catch(() => {
            setError("Failed to load validation data");
            setLoading(false);
          });
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.validationPage}>
        <div className={styles.gridBg} />
        <div className={styles.loading}>Loading validation results...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.validationPage}>
        <div className={styles.gridBg} />
        <div className={styles.error}>
          {error || "No validation data available"}
        </div>
      </div>
    );
  }

  const formatNumber = (n: number) => n.toLocaleString();
  const formatPercent = (n: number) => `${(n * 100).toFixed(2)}%`;
  const formatSpeed = (n: number) => `${n.toFixed(1)}x`;
  const formatThroughput = (n: number) => {
    if (n > 1_000_000) return `${(n / 1_000_000).toFixed(1)}M/s`;
    if (n > 1_000) return `${(n / 1_000).toFixed(0)}K/s`;
    return `${n.toFixed(0)}/s`;
  };

  return (
    <div className={styles.validationPage}>
      <div className={styles.gridBg} />
      {/* Header */}
      <header className={styles.validationHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Validation Dashboard</h1>
          <p className={styles.subtitle}>
            Cosilico accuracy vs. PolicyEngine and TAXSIM
          </p>
          <div className={styles.headerMeta}>
            <span className={styles.metaItem}>
              <strong>Data:</strong> {data.dataSource}
            </span>
            <span className={styles.metaItem}>
              <strong>Commit:</strong> <code className={styles.metaItemCode}>{data.commit}</code>
            </span>
            <span className={styles.metaItem}>
              <strong>Updated:</strong> {new Date(data.timestamp).toLocaleDateString()}
            </span>
            {data.isSampleData && (
              <span className={`${styles.metaItem} ${styles.sampleBadge}`}>Sample Data</span>
            )}
          </div>
        </div>
      </header>

      {/* Overall Stats */}
      <section className={styles.overallStats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{formatNumber(data.overall.totalHouseholds)}</div>
          <div className={styles.statLabel}>Total Households</div>
        </div>
        <div className={`${styles.statCard} ${styles.statCardHighlight}`}>
          <div className={styles.statValue}>{formatPercent(data.overall.matchRate)}</div>
          <div className={styles.statLabel}>Aggregate Match Rate</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>${data.overall.meanAbsoluteError.toFixed(2)}</div>
          <div className={styles.statLabel}>Mean Absolute Error</div>
        </div>
        {data.overall.speed && (
          <div className={styles.statCard}>
            <div className={styles.statValue}>{formatSpeed(data.overall.speed.speedup)}</div>
            <div className={styles.statLabel}>Speed vs PolicyEngine</div>
          </div>
        )}
      </section>

      {/* Performance Metrics */}
      {data.overall.speed && (
        <section className={styles.speedSection}>
          <h2 className={styles.sectionTitle}>Performance</h2>
          <div className={styles.speedGrid}>
            <div className={styles.speedCard}>
              <div className={styles.speedHeader}>Cosilico</div>
              <div className={styles.speedMetric}>
                <span className={styles.speedValue}>
                  {formatThroughput(data.overall.speed.cosilicoThroughput)}
                </span>
                <span className={styles.speedLabel}>throughput</span>
              </div>
              <div className={styles.speedDetail}>
                {data.overall.speed.cosilicoTotalMs.toFixed(0)}ms total
              </div>
            </div>
            <div className={styles.speedCard}>
              <div className={styles.speedHeader}>PolicyEngine</div>
              <div className={styles.speedMetric}>
                <span className={styles.speedValue}>
                  {formatThroughput(data.overall.speed.peThroughput)}
                </span>
                <span className={styles.speedLabel}>throughput</span>
              </div>
              <div className={styles.speedDetail}>
                {data.overall.speed.peTotalMs.toFixed(0)}ms total
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Validators */}
      <section className={styles.validatorsSection}>
        <h2 className={styles.sectionTitle}>Validators</h2>
        <div className={styles.validatorsGrid}>
          {data.validators.map((validator) => (
            <div
              key={validator.name}
              className={`${styles.validatorCard} ${
                validator.available ? styles.validatorCardAvailable : styles.validatorCardUnavailable
              }`}
            >
              <div className={styles.validatorName}>{validator.name}</div>
              <div className={styles.validatorVersion}>v{validator.version}</div>
              <div className={styles.validatorStatus}>
                {validator.available ? (
                  <>
                    <span className={styles.statusIcon}>✓</span>
                    <span>{formatNumber(validator.householdsCovered)} households</span>
                  </>
                ) : (
                  <span className={styles.statusIcon}>—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Variable Results */}
      <section className={styles.sectionsList}>
        <h2 className={styles.sectionTitle}>Per-Variable Results</h2>
        <div className={styles.sectionsGrid}>
          {data.sections.map((section) => (
            <div key={section.variable} className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionTitleContainer}>
                  <h3 className={styles.sectionTitleText}>{section.title}</h3>
                  <code className={styles.sectionCode}>{section.section}</code>
                </div>
                <div>
                  <code className={styles.sectionVariable}>{section.variable}</code>
                </div>
              </div>

              <div className={styles.sectionStats}>
                <div className={styles.sectionStat}>
                  <span className={styles.sectionStatLabel}>Match Rate</span>
                  <span className={styles.sectionStatValue}>
                    {formatPercent(section.summary.matchRate)}
                  </span>
                </div>
                <div className={styles.sectionStat}>
                  <span className={styles.sectionStatLabel}>Households</span>
                  <span className={styles.sectionStatValue}>
                    {formatNumber(section.households)}
                  </span>
                </div>
                <div className={styles.sectionStat}>
                  <span className={styles.sectionStatLabel}>MAE</span>
                  <span className={styles.sectionStatValue}>
                    ${section.summary.meanAbsoluteError.toFixed(2)}
                  </span>
                </div>
                {section.speed && (
                  <div className={styles.sectionStat}>
                    <span className={styles.sectionStatLabel}>Speedup</span>
                    <span className={styles.sectionStatValue}>
                      {formatSpeed(section.speed.speedup)}
                    </span>
                  </div>
                )}
              </div>

              {section.validatorBreakdown && (
                <div className={styles.validatorBreakdown}>
                  {section.validatorBreakdown.policyengine && (
                    <div className={styles.breakdownItem}>
                      <span className={styles.breakdownName}>PolicyEngine</span>
                      <span className={styles.breakdownRate}>
                        {formatPercent(section.validatorBreakdown.policyengine.rate)}
                      </span>
                    </div>
                  )}
                  {section.validatorBreakdown.taxsim && (
                    <div className={styles.breakdownItem}>
                      <span className={styles.breakdownName}>TAXSIM</span>
                      <span className={styles.breakdownRate}>
                        {formatPercent(section.validatorBreakdown.taxsim.rate)}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {section.mismatches && section.mismatches.length > 0 && (
                <details className={styles.mismatches}>
                  <summary className={styles.mismatchesSummary}>
                    {section.mismatches.length} mismatch type
                    {section.mismatches.length !== 1 ? "s" : ""}
                  </summary>
                  <ul className={styles.mismatchList}>
                    {section.mismatches.map((mismatch, idx) => (
                      <li key={idx} className={styles.mismatchItem}>
                        <div className={styles.mismatchHeader}>
                          <strong className={styles.mismatchHeaderStrong}>{mismatch.description}</strong>
                          <span className={styles.mismatchCount}>
                            {formatNumber(mismatch.count)} cases
                          </span>
                        </div>
                        <p className={styles.mismatchExplanation}>
                          {mismatch.explanation}
                        </p>
                        <cite className={styles.mismatchCitation}>
                          {mismatch.citation}
                        </cite>
                        {mismatch.upstreamIssue && (
                          <a
                            href={mismatch.upstreamIssue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mismatchIssue}
                          >
                            Upstream issue →
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
