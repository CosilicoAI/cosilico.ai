import React, { useState, useEffect } from "react";
import { PluginDashboardData, EncodingSession, VariableStatus } from "../types/plugin";
import "../styles/PluginDashboard.css";

export default function PluginDashboardPage() {
  const [data, setData] = useState<PluginDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

  useEffect(() => {
    // Try to load real data, fall back to sample
    fetch("/plugin-data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        import("../data/sample-plugin-data.json")
          .then((module) => {
            setData(module.default as PluginDashboardData);
            setLoading(false);
          })
          .catch(() => {
            setError("Failed to load plugin data");
            setLoading(false);
          });
      });
  }, []);

  if (loading) {
    return (
      <div className="plugin-dashboard">
        <div className="loading">Loading plugin dashboard...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="plugin-dashboard">
        <div className="error">{error || "No data available"}</div>
      </div>
    );
  }

  const formatPercent = (n: number) => `${(n * 100).toFixed(1)}%`;
  const formatDate = (s: string) => new Date(s).toLocaleString();

  // Compute variable statuses
  const variableStatuses: VariableStatus[] = [];
  const seenVariables = new Set<string>();

  // Process sessions in reverse order to get latest status
  [...data.sessions].reverse().forEach((session) => {
    if (!seenVariables.has(session.variable)) {
      seenVariables.add(session.variable);
      variableStatuses.push({
        variable: session.variable,
        statuteRef: session.statuteRef,
        latestMatchRate: session.matchRate ?? 0,
        latestStatus: session.status ?? "unknown",
        pluginVersion: session.pluginVersion,
        timestamp: session.timestamp,
        triggeredUpdate: session.improvementDecisionId !== null,
        diagnosisLayer: session.diagnosisLayer,
      });
    }
  });

  // Sort by variable name
  variableStatuses.sort((a, b) => a.variable.localeCompare(b.variable));

  // Get version list
  const versions = Object.keys(data.pluginArms).sort().reverse();
  const currentVersion = selectedVersion || versions[0];
  const currentArm = data.pluginArms[currentVersion];

  // Filter sessions by version
  const versionSessions = data.sessions.filter(
    (s) => s.pluginVersion === currentVersion
  );

  // Get variables that triggered updates
  const triggeredUpdates = data.sessions.filter(
    (s) => s.improvementDecisionId !== null
  );

  return (
    <div className="plugin-dashboard">
      {/* Header */}
      <header className="plugin-header">
        <div className="header-content">
          <h1>Plugin Performance</h1>
          <p className="subtitle">
            Validation-driven encoding system performance
          </p>
          <div className="header-meta">
            <span className="meta-item">
              <strong>Current Version:</strong> <code>{currentVersion}</code>
            </span>
            <span className="meta-item">
              <strong>Updated:</strong> {formatDate(data.timestamp)}
            </span>
            {data.isSampleData && (
              <span className="meta-item sample-badge">Sample Data</span>
            )}
          </div>
        </div>
      </header>

      {/* Overall Stats */}
      <section className="stats-section">
        <div className="stat-card highlight">
          <div className="stat-value">{formatPercent(data.stats.overallSuccessRate)}</div>
          <div className="stat-label">Success Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.stats.totalValidations}</div>
          <div className="stat-label">Total Validations</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.stats.uniqueVariablesTested}</div>
          <div className="stat-label">Variables Tested</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.stats.pluginVersions}</div>
          <div className="stat-label">Plugin Versions</div>
        </div>
      </section>

      {/* Version Selector */}
      <section className="version-section">
        <h2>Plugin Versions</h2>
        <div className="version-tabs">
          {versions.map((v) => (
            <button
              key={v}
              className={`version-tab ${v === currentVersion ? "active" : ""}`}
              onClick={() => setSelectedVersion(v)}
            >
              {v}
              <span className="version-stats">
                {formatPercent(data.pluginArms[v].successes / Math.max(data.pluginArms[v].nValidations, 1))}
              </span>
            </button>
          ))}
        </div>

        {currentArm && (
          <div className="version-details">
            <div className="version-stats-grid">
              <div className="version-stat">
                <span className="stat-label">Validations</span>
                <span className="stat-value">{currentArm.nValidations}</span>
              </div>
              <div className="version-stat">
                <span className="stat-label">Successes</span>
                <span className="stat-value success">{currentArm.successes}</span>
              </div>
              <div className="version-stat">
                <span className="stat-label">Failures</span>
                <span className="stat-value failure">{currentArm.failures}</span>
              </div>
              <div className="version-stat">
                <span className="stat-label">Created</span>
                <span className="stat-value">{new Date(currentArm.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Variables Encoded */}
      <section className="variables-section">
        <h2>Variables by Status</h2>
        <div className="variables-grid">
          {variableStatuses.map((vs) => (
            <div
              key={vs.variable}
              className={`variable-card ${vs.latestStatus === "passed" ? "passed" : "failed"}`}
            >
              <div className="variable-header">
                <code className="variable-name">{vs.variable}</code>
                <span className={`status-badge ${vs.latestStatus}`}>
                  {vs.latestStatus === "passed" ? "✓" : "✗"}
                </span>
              </div>
              <div className="variable-ref">{vs.statuteRef}</div>
              <div className="variable-stats">
                <span className="match-rate">{formatPercent(vs.latestMatchRate)}</span>
                <span className="plugin-version">{vs.pluginVersion}</span>
              </div>
              {vs.triggeredUpdate && (
                <div className="triggered-update">
                  <span className="update-icon">↑</span>
                  Triggered plugin update
                </div>
              )}
              {vs.diagnosisLayer && (
                <div className="diagnosis-layer">
                  Layer: {vs.diagnosisLayer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Encoding Timeline */}
      <section className="timeline-section">
        <h2>Encoding Timeline</h2>
        <div className="timeline">
          {data.sessions.map((session, idx) => (
            <div
              key={`${session.variable}-${session.timestamp}-${idx}`}
              className={`timeline-item ${session.passed ? "success" : "failure"}`}
            >
              <div className="timeline-marker">
                {session.passed ? "✓" : "✗"}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <code className="timeline-variable">{session.variable}</code>
                  <span className="timeline-rate">{formatPercent(session.matchRate ?? 0)}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-ref">{session.statuteRef}</span>
                  <span className="timeline-time">{formatDate(session.timestamp)}</span>
                </div>
                {session.improvementDecisionId && (
                  <div className="timeline-decision">
                    Decision: <code>{session.improvementDecisionId}</code>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Improvement Decisions */}
      {data.improvements.length > 0 && (
        <section className="improvements-section">
          <h2>Improvement Decisions</h2>
          <div className="improvements-grid">
            {data.improvements.map((imp) => (
              <div key={imp.id} className="improvement-card">
                <div className="improvement-header">
                  <code className="improvement-id">{imp.id}</code>
                  <span className={`improvement-status ${imp.scoredAt ? "scored" : "pending"}`}>
                    {imp.scoredAt ? "Scored" : "Pending"}
                  </span>
                </div>
                <p className="improvement-question">{imp.question}</p>
                <p className="improvement-context">{imp.context}</p>
                {imp.chosenOption && (
                  <div className="improvement-choice">
                    Chosen: <strong>{imp.chosenOption}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Calibration */}
      <section className="calibration-section">
        <h2>Forecast Calibration</h2>
        <div className="calibration-stats">
          <div className="calibration-stat">
            <span className="stat-label">Decisions Scored</span>
            <span className="stat-value">{data.calibration.nDecisions}</span>
          </div>
          <div className="calibration-stat">
            <span className="stat-label">Coverage</span>
            <span className="stat-value">
              {data.calibration.coverage !== null
                ? formatPercent(data.calibration.coverage)
                : "—"}
            </span>
          </div>
          <div className="calibration-stat">
            <span className="stat-label">Expected</span>
            <span className="stat-value">{formatPercent(data.calibration.expectedCoverage)}</span>
          </div>
          <div className="calibration-stat">
            <span className="stat-label">Calibration Error</span>
            <span className={`stat-value ${data.calibration.calibrationError !== null && data.calibration.calibrationError < 0 ? "overconfident" : ""}`}>
              {data.calibration.calibrationError !== null
                ? `${data.calibration.calibrationError > 0 ? "+" : ""}${formatPercent(data.calibration.calibrationError)}`
                : "—"}
            </span>
          </div>
        </div>
        <p className="calibration-note">
          Calibration measures how well forecasted improvements match actual outcomes.
          Negative error indicates overconfidence.
        </p>
      </section>
    </div>
  );
}
