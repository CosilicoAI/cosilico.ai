import React, { useState, useEffect } from "react";
import { ValidationResults } from "../types/validation";
import "../styles/Validation.css";

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
      <div className="validation-page">
        <div className="loading">Loading validation results...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="validation-page">
        <div className="error">
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
    <div className="validation-page">
      {/* Header */}
      <header className="validation-header">
        <div className="header-content">
          <h1>Validation Dashboard</h1>
          <p className="subtitle">
            Cosilico accuracy vs. PolicyEngine and TAXSIM
          </p>
          <div className="header-meta">
            <span className="meta-item">
              <strong>Data:</strong> {data.dataSource}
            </span>
            <span className="meta-item">
              <strong>Commit:</strong> <code>{data.commit}</code>
            </span>
            <span className="meta-item">
              <strong>Updated:</strong> {new Date(data.timestamp).toLocaleDateString()}
            </span>
            {data.isSampleData && (
              <span className="meta-item sample-badge">Sample Data</span>
            )}
          </div>
        </div>
      </header>

      {/* Overall Stats */}
      <section className="overall-stats">
        <div className="stat-card">
          <div className="stat-value">{formatNumber(data.overall.totalHouseholds)}</div>
          <div className="stat-label">Total Households</div>
        </div>
        <div className="stat-card highlight">
          <div className="stat-value">{formatPercent(data.overall.matchRate)}</div>
          <div className="stat-label">Aggregate Match Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${data.overall.meanAbsoluteError.toFixed(2)}</div>
          <div className="stat-label">Mean Absolute Error</div>
        </div>
        {data.overall.speed && (
          <div className="stat-card">
            <div className="stat-value">{formatSpeed(data.overall.speed.speedup)}</div>
            <div className="stat-label">Speed vs PolicyEngine</div>
          </div>
        )}
      </section>

      {/* Performance Metrics */}
      {data.overall.speed && (
        <section className="speed-section">
          <h2>Performance</h2>
          <div className="speed-grid">
            <div className="speed-card">
              <div className="speed-header">Cosilico</div>
              <div className="speed-metric">
                <span className="speed-value">
                  {formatThroughput(data.overall.speed.cosilicoThroughput)}
                </span>
                <span className="speed-label">throughput</span>
              </div>
              <div className="speed-detail">
                {data.overall.speed.cosilicoTotalMs.toFixed(0)}ms total
              </div>
            </div>
            <div className="speed-card">
              <div className="speed-header">PolicyEngine</div>
              <div className="speed-metric">
                <span className="speed-value">
                  {formatThroughput(data.overall.speed.peThroughput)}
                </span>
                <span className="speed-label">throughput</span>
              </div>
              <div className="speed-detail">
                {data.overall.speed.peTotalMs.toFixed(0)}ms total
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Validators */}
      <section className="validators-section">
        <h2>Validators</h2>
        <div className="validators-grid">
          {data.validators.map((validator) => (
            <div
              key={validator.name}
              className={`validator-card ${validator.available ? "available" : "unavailable"}`}
            >
              <div className="validator-name">{validator.name}</div>
              <div className="validator-version">v{validator.version}</div>
              <div className="validator-status">
                {validator.available ? (
                  <>
                    <span className="status-icon">✓</span>
                    <span>{formatNumber(validator.householdsCovered)} households</span>
                  </>
                ) : (
                  <span className="status-icon">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Variable Results */}
      <section className="sections-list">
        <h2>Per-Variable Results</h2>
        <div className="sections-grid">
          {data.sections.map((section) => (
            <div key={section.variable} className="section-card">
              <div className="section-header">
                <div className="section-title">
                  <h3>{section.title}</h3>
                  <code className="section-code">{section.section}</code>
                </div>
                <div className="section-variable">
                  <code>{section.variable}</code>
                </div>
              </div>

              <div className="section-stats">
                <div className="section-stat">
                  <span className="section-stat-label">Match Rate</span>
                  <span className="section-stat-value">
                    {formatPercent(section.summary.matchRate)}
                  </span>
                </div>
                <div className="section-stat">
                  <span className="section-stat-label">Households</span>
                  <span className="section-stat-value">
                    {formatNumber(section.households)}
                  </span>
                </div>
                <div className="section-stat">
                  <span className="section-stat-label">MAE</span>
                  <span className="section-stat-value">
                    ${section.summary.meanAbsoluteError.toFixed(2)}
                  </span>
                </div>
                {section.speed && (
                  <div className="section-stat">
                    <span className="section-stat-label">Speedup</span>
                    <span className="section-stat-value">
                      {formatSpeed(section.speed.speedup)}
                    </span>
                  </div>
                )}
              </div>

              {section.validatorBreakdown && (
                <div className="validator-breakdown">
                  {section.validatorBreakdown.policyengine && (
                    <div className="breakdown-item">
                      <span className="breakdown-name">PolicyEngine</span>
                      <span className="breakdown-rate">
                        {formatPercent(section.validatorBreakdown.policyengine.rate)}
                      </span>
                    </div>
                  )}
                  {section.validatorBreakdown.taxsim && (
                    <div className="breakdown-item">
                      <span className="breakdown-name">TAXSIM</span>
                      <span className="breakdown-rate">
                        {formatPercent(section.validatorBreakdown.taxsim.rate)}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {section.mismatches && section.mismatches.length > 0 && (
                <details className="mismatches">
                  <summary>
                    {section.mismatches.length} mismatch type
                    {section.mismatches.length !== 1 ? "s" : ""}
                  </summary>
                  <ul className="mismatch-list">
                    {section.mismatches.map((mismatch, idx) => (
                      <li key={idx} className="mismatch-item">
                        <div className="mismatch-header">
                          <strong>{mismatch.description}</strong>
                          <span className="mismatch-count">
                            {formatNumber(mismatch.count)} cases
                          </span>
                        </div>
                        <p className="mismatch-explanation">
                          {mismatch.explanation}
                        </p>
                        <cite className="mismatch-citation">
                          {mismatch.citation}
                        </cite>
                        {mismatch.upstreamIssue && (
                          <a
                            href={mismatch.upstreamIssue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mismatch-issue"
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
