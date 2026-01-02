import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/experimentLab.css";
import { getEncodingRuns, EncodingRun as SupabaseEncodingRun, DataSource, getAgentTranscripts, AgentTranscript } from "../lib/supabase";

// ============================================
// TYPES
// ============================================

interface Iteration {
  attempt: number;
  success: boolean;
  duration_ms: number;
  errors: { type: string; message: string }[];
}

interface ExperimentRun {
  id: string;
  timestamp: string;
  citation: string;
  iterations: Iteration[];
  scores: { rac: number; formula: number; parameter: number; integration: number };
  hasIssues?: boolean;
  note?: string;
  dataSource: DataSource;
}

// Data source display info - CRITICAL for showing warnings about fake/untrusted data
const DATA_SOURCE_INFO: Record<DataSource, { label: string; color: string; warning: boolean }> = {
  reviewer_agent: { label: 'Reviewer Agent', color: '#00ff88', warning: false },
  ci_only: { label: 'CI Only', color: '#ffaa00', warning: true },
  mock: { label: '⚠️ MOCK', color: '#ff4466', warning: true },
  manual_estimate: { label: '⚠️ Manual Estimate', color: '#ff6b35', warning: true },
  unknown: { label: '⚠️ Unknown', color: '#ff4466', warning: true },
};

// ============================================
// ⚠️ MOCK DATA - NOT REAL ⚠️
// This is placeholder data for UI development only.
// Real data should come from Supabase via the encoding_runs table.
// The experiments.db currently has 0 rows.
// ============================================

const MOCK_CALIBRATION_DATA: ExperimentRun[] = [
  {
    id: "3aedd4db",
    timestamp: "2025-12-31T10:36:22",
    citation: "26 USC 137",
    iterations: [
      { attempt: 1, success: false, duration_ms: 499500, errors: [] },
      { attempt: 2, success: true, duration_ms: 499500, errors: [] },
    ],
    scores: { rac: 7.5, formula: 8.5, parameter: 9.5, integration: 7.5 },
    dataSource: 'mock',
  },
  {
    id: "0900f584",
    timestamp: "2025-12-31T10:36:22",
    citation: "26 USC 23",
    iterations: [{ attempt: 1, success: true, duration_ms: 233000, errors: [] }],
    scores: { rac: 8.2, formula: 7.5, parameter: 9.5, integration: 8.2 },
    dataSource: 'mock',
  },
  {
    id: "cb77655b",
    timestamp: "2025-12-31T11:02:05",
    citation: "26 USC 25A",
    iterations: [{ attempt: 1, success: true, duration_ms: 141000, errors: [] }],
    scores: { rac: 8.5, formula: 8.5, parameter: 8.0, integration: 7.5 },
    dataSource: 'mock',
  },
  {
    id: "1d1fee67",
    timestamp: "2025-12-31T11:13:56",
    citation: "26 USC 25B",
    iterations: [{ attempt: 1, success: true, duration_ms: 461000, errors: [] }],
    scores: { rac: 8.5, formula: 8.5, parameter: 9.5, integration: 7.5 },
    dataSource: 'mock',
  },
  {
    id: "a59ef11b",
    timestamp: "2025-12-31T12:49:52",
    citation: "26 USC 21",
    iterations: [{ attempt: 1, success: true, duration_ms: 1053000, errors: [] }],
    scores: { rac: 7.5, formula: 7.5, parameter: 9.0, integration: 7.5 },
    dataSource: 'mock',
  },
  {
    id: "1ba951e2",
    timestamp: "2025-12-31T19:18:47",
    citation: "26 USC 31",
    iterations: [{ attempt: 1, success: true, duration_ms: 180000, errors: [] }],
    scores: { rac: 8.0, formula: 8.5, parameter: 8.0, integration: 8.5 },
    dataSource: 'mock',
  },
  {
    id: "cd62660b",
    timestamp: "2025-12-31T19:20:08",
    citation: "26 USC 1",
    iterations: [
      {
        attempt: 1,
        success: false,
        duration_ms: 900000,
        errors: [{ type: "test", message: "0/31 tests passed - syntax:python not supported" }],
      },
    ],
    scores: { rac: 7.5, formula: 7.5, parameter: 9.5, integration: 7.5 },
    hasIssues: true,
    dataSource: 'mock',
  },
  {
    id: "62f77e5d",
    timestamp: "2025-12-31T19:25:07",
    citation: "26 USC 1",
    iterations: [
      { attempt: 1, success: false, duration_ms: 600000, errors: [] },
      { attempt: 2, success: true, duration_ms: 600000, errors: [] },
    ],
    scores: { rac: 8.5, formula: 8.5, parameter: 9.0, integration: 7.5 },
    hasIssues: true,
    note: "IRS guidance values mixed into statute; wrong bracket parameter structure",
    dataSource: 'mock',
  },
];

const PLUGIN_COMPONENTS = {
  agents: [
    {
      name: "RAC Encoder",
      file: "encoder.md",
      description: "Encodes tax/benefit rules into RAC format. Use when implementing statutes.",
      lines: 380,
    },
    {
      name: "RAC Reviewer",
      file: "rac-reviewer.md",
      description: "Reviews .rac encodings for quality, accuracy, and compliance.",
      lines: 120,
    },
    {
      name: "Formula Reviewer",
      file: "formula-reviewer.md",
      description: "Audits formula logic for statutory fidelity, completeness, and correctness.",
      lines: 95,
    },
    {
      name: "Parameter Reviewer",
      file: "parameter-reviewer.md",
      description: "Audits parameter values, effective dates, and sources.",
      lines: 88,
    },
    {
      name: "Integration Reviewer",
      file: "integration-reviewer.md",
      description: "Audits file connections, import resolution, and dependency graph.",
      lines: 72,
    },
    {
      name: "Parameter Researcher",
      file: "parameter-researcher.md",
      description: "Researches legislative history to find authoritative parameter values.",
      lines: 145,
    },
    {
      name: "Formula Writer",
      file: "formula-writer.md",
      description: "Translates statutory logic into RAC formula code.",
      lines: 110,
    },
    {
      name: "Statute Analyzer",
      file: "statute-analyzer.md",
      description: "Pre-flight analysis of statutes before encoding.",
      lines: 98,
    },
    {
      name: "Encoding Validator",
      file: "validator.md",
      description: "Validates statute encodings against PolicyEngine and TAXSIM.",
      lines: 156,
    },
    {
      name: "Test Adversary",
      file: "test-adversary.md",
      description: "Generates adversarial test cases to find edge case failures.",
      lines: 82,
    },
    {
      name: "Fixer",
      file: "fixer.md",
      description: "Makes surgical fixes to .rac files based on specific issues.",
      lines: 64,
    },
    {
      name: "Integrator",
      file: "integrator.md",
      description: "Connects .rac files into the dependency graph.",
      lines: 78,
    },
  ],
  skills: [
    {
      name: "policy-encoding",
      file: "policy-encoding/SKILL.md",
      description: "Encoding tax/benefit statutes into executable code.",
      lines: 450,
    },
    {
      name: "microplex",
      file: "microplex/SKILL.md",
      description: "Evaluating synthetic microdata quality and training synthesizers.",
      lines: 280,
    },
  ],
  commands: [
    {
      name: "/encode",
      file: "encode.md",
      description: "Encode a statute into RAC format with validation.",
      lines: 85,
    },
    {
      name: "/validate",
      file: "validate.md",
      description: "Validate encoded policy against multiple tax/benefit systems.",
      lines: 62,
    },
    {
      name: "/file-bug",
      file: "file-bug.md",
      description: "File an upstream bug report when validation reveals discrepancies.",
      lines: 45,
    },
  ],
  hooks: [
    {
      name: "SessionStart",
      file: "session-start.sh",
      description: "Initialize session tracking and logging.",
      lines: 28,
    },
    {
      name: "PostToolUse",
      file: "log-tool-use.sh",
      description: "Log every tool call for experiment tracking.",
      lines: 15,
    },
    {
      name: "SessionEnd",
      file: "session-end.sh",
      description: "Finalize session and compute metrics.",
      lines: 22,
    },
  ],
};

// ============================================
// HELPERS
// ============================================

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}m ${seconds}s`;
};

const formatTime = (ts: string) => {
  const date = new Date(ts);
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
};

const getScoreClass = (score: number) => {
  if (score >= 8.5) return styles.scoreGood;
  if (score >= 7.5) return styles.scoreWarn;
  return styles.scoreBad;
};

// ============================================
// COMPONENT
// ============================================

// Transform Supabase data to UI format
function transformToUIFormat(run: SupabaseEncodingRun): ExperimentRun {
  return {
    id: run.id,
    timestamp: run.timestamp,
    citation: run.citation,
    iterations: run.iterations || [],
    scores: run.scores || { rac: 0, formula: 0, parameter: 0, integration: 0 },
    hasIssues: run.has_issues ?? undefined,
    note: run.note ?? undefined,
    dataSource: run.data_source || 'unknown',
  };
}

export default function ExperimentLabPage() {
  const [activeTab, setActiveTab] = useState<"experiments" | "plugin" | "issues" | "transcripts">("experiments");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedTranscript, setExpandedTranscript] = useState<number | null>(null);

  // State for Supabase data
  const [liveData, setLiveData] = useState<ExperimentRun[]>([]);
  const [transcripts, setTranscripts] = useState<AgentTranscript[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);

  // Fetch data from Supabase on mount
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const [runs, agentTranscripts] = await Promise.all([
          getEncodingRuns(100, 0),
          getAgentTranscripts(100, 0)
        ]);

        if (runs.length > 0) {
          setLiveData(runs.map(transformToUIFormat));
          setUsingMockData(false);
        } else {
          // No data in Supabase yet, fall back to mock data
          setLiveData(MOCK_CALIBRATION_DATA);
          setUsingMockData(true);
        }

        setTranscripts(agentTranscripts);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load data from database');
        // Fall back to mock data on error
        setLiveData(MOCK_CALIBRATION_DATA);
        setUsingMockData(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const data = liveData.length > 0 ? liveData : MOCK_CALIBRATION_DATA;

  const totalRuns = data.length;
  const successRuns = data.filter(
    (d) => d.iterations[d.iterations.length - 1]?.success
  ).length;
  const avgScore = totalRuns > 0
    ? data.reduce(
        (acc, d) => acc + (d.scores.rac + d.scores.formula + d.scores.parameter + d.scores.integration) / 4,
        0
      ) / totalRuns
    : 0;

  // Count runs with untrusted data sources (not from reviewer_agent)
  const untrustedRuns = data.filter(d => d.dataSource !== 'reviewer_agent').length;
  const hasUntrustedData = untrustedRuns > 0;

  return (
    <PageLayout>
      <div className={styles.page}>
        <div className={styles.gridOverlay} />
        <div className={styles.scanlineOverlay} />

        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <span className={styles.labBadge}>Experiment Lab</span>
              <h1 className={styles.headerTitle}>AutoRAC Calibration</h1>
            </div>
            <div className={styles.headerMeta}>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Runs:</span>
                <span className={styles.metaValue}>{totalRuns}</span>
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Success:</span>
                <span className={styles.metaValue}>{((successRuns / totalRuns) * 100).toFixed(0)}%</span>
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Avg Score:</span>
                <span className={styles.metaValue}>{avgScore.toFixed(1)}/10</span>
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Plugin:</span>
                <span className={styles.metaValue}>cosilico@0.2.1</span>
              </span>
            </div>
          </header>

          {/* Data Status Banner */}
          {isLoading ? (
            <div style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #0088cc 100%)',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '8px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontWeight: 600,
              fontSize: '16px',
            }}>
              <span style={{ fontSize: '28px' }}>⏳</span>
              <div>Loading data from Supabase...</div>
            </div>
          ) : usingMockData ? (
            <div style={{
              background: 'linear-gradient(135deg, #ff4466 0%, #ff6b35 100%)',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '8px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontWeight: 600,
              fontSize: '16px',
              boxShadow: '0 4px 20px rgba(255, 68, 102, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span style={{ fontSize: '28px' }}>⚠️</span>
              <div>
                <div style={{ marginBottom: '4px' }}>MOCK DATA - NOT REAL</div>
                <div style={{ fontWeight: 400, fontSize: '14px', opacity: 0.9 }}>
                  {error
                    ? `Database error: ${error}. Showing placeholder data.`
                    : 'No encoding runs in database yet. Showing placeholder data for UI preview.'}
                </div>
              </div>
            </div>
          ) : hasUntrustedData ? (
            <div style={{
              background: 'linear-gradient(135deg, #ffaa00 0%, #ff8800 100%)',
              color: '#08080c',
              padding: '16px 24px',
              borderRadius: '8px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontWeight: 600,
              fontSize: '16px',
              boxShadow: '0 4px 20px rgba(255, 170, 0, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span style={{ fontSize: '28px' }}>⚠️</span>
              <div>
                <div style={{ marginBottom: '4px' }}>DATA SOURCE WARNING</div>
                <div style={{ fontWeight: 400, fontSize: '14px', opacity: 0.9 }}>
                  {untrustedRuns} of {totalRuns} runs have scores NOT from actual reviewer agents.
                  Check the "Source" column for details.
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              background: 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)',
              color: '#08080c',
              padding: '12px 20px',
              borderRadius: '8px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontWeight: 600,
              fontSize: '14px',
            }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <div>Live data from Supabase ({totalRuns} runs) - All scores verified by reviewer agents</div>
            </div>
          )}

          {/* Data Note */}
          <div className={styles.dataNote}>
            <span className={styles.dataNoteBold}>Data Architecture Note:</span> Plugin content is NOT
            currently stored with each experiment run. Recommend SCD2 table for{" "}
            <code>plugin_versions</code> with hash-based versioning to track which plugin state
            produced each result.
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "experiments" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("experiments")}
            >
              Experiment Runs
            </button>
            <button
              className={`${styles.tab} ${activeTab === "transcripts" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("transcripts")}
            >
              Agent Transcripts
              {transcripts.length > 0 && (
                <span style={{ marginLeft: '8px', background: '#00ff88', color: '#08080c', padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>
                  {transcripts.length}
                </span>
              )}
            </button>
            <button
              className={`${styles.tab} ${activeTab === "plugin" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("plugin")}
            >
              Plugin Content
            </button>
            <button
              className={`${styles.tab} ${activeTab === "issues" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("issues")}
            >
              Known Issues
            </button>
          </div>

          {/* Experiments Tab */}
          {activeTab === "experiments" && (
            <section className={styles.tableSection}>
              <h2 className={styles.sectionTitle}>
                Encoding Runs
                <span className={styles.sectionCount}>{totalRuns}</span>
              </h2>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Citation</th>
                    <th>Time</th>
                    <th>Source</th>
                    <th>Iterations</th>
                    <th>Duration</th>
                    <th>RAC</th>
                    <th>Formula</th>
                    <th>Param</th>
                    <th>Integ</th>
                    <th>Errors</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((run) => {
                    const lastIter = run.iterations[run.iterations.length - 1];
                    const totalDuration = run.iterations.reduce((acc: number, i) => acc + i.duration_ms, 0);
                    const hasErrors = run.iterations.some((i) => i.errors && i.errors.length > 0);
                    const sourceInfo = DATA_SOURCE_INFO[run.dataSource];

                    return (
                      <tr key={run.id}>
                        <td className={styles.citationCell}>
                          {run.citation}
                          {run.hasIssues && (
                            <span style={{ color: "#ff4466", marginLeft: "8px" }}>⚠</span>
                          )}
                        </td>
                        <td className={styles.timestampCell}>{formatTime(run.timestamp)}</td>
                        <td>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: sourceInfo.color,
                              background: `${sourceInfo.color}15`,
                              border: `1px solid ${sourceInfo.color}40`,
                            }}
                            title={sourceInfo.warning ? 'WARNING: Scores may not be from actual reviewer agents' : 'Verified by reviewer agents'}
                          >
                            {sourceInfo.label}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`${styles.iterationBadge} ${
                              lastIter.success ? styles.iterationSuccess : styles.iterationFailed
                            }`}
                          >
                            {run.iterations.length} {lastIter.success ? "✓" : "✗"}
                          </span>
                        </td>
                        <td className={styles.durationCell}>{formatDuration(totalDuration)}</td>
                        <td className={`${styles.scoreCell} ${getScoreClass(run.scores.rac)}`}>
                          {run.scores.rac.toFixed(1)}
                        </td>
                        <td className={`${styles.scoreCell} ${getScoreClass(run.scores.formula)}`}>
                          {run.scores.formula.toFixed(1)}
                        </td>
                        <td className={`${styles.scoreCell} ${getScoreClass(run.scores.parameter)}`}>
                          {run.scores.parameter.toFixed(1)}
                        </td>
                        <td className={`${styles.scoreCell} ${getScoreClass(run.scores.integration)}`}>
                          {run.scores.integration.toFixed(1)}
                        </td>
                        <td>
                          {hasErrors && (
                            <span className={styles.errorTag}>
                              {run.iterations.flatMap((i) => i.errors || []).map((e) => e.type).join(", ")}
                            </span>
                          )}
                          {run.note && (
                            <span className={styles.errorTag} style={{ background: "rgba(255, 170, 0, 0.15)", color: "#ffaa00" }}>
                              structural
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          )}

          {/* Transcripts Tab */}
          {activeTab === "transcripts" && (
            <section className={styles.tableSection}>
              <h2 className={styles.sectionTitle}>
                Agent Transcripts
                <span className={styles.sectionCount}>{transcripts.length}</span>
              </h2>

              {transcripts.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                  No agent transcripts yet. Run an encoding task to capture transcripts.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {transcripts.map((t) => {
                    const isExpanded = expandedTranscript === t.id;
                    const messages = Array.isArray(t.transcript) ? t.transcript : [];

                    // Extract thinking, text, and tool_use blocks from messages
                    const thinkingBlocks: string[] = [];
                    const textBlocks: string[] = [];
                    const toolCalls: { name: string; input: string; result?: string }[] = [];

                    // Build a map of tool results by tool_use_id
                    const toolResults: Record<string, string> = {};
                    messages.forEach((msg) => {
                      if (msg.type === 'user' && msg.message?.content) {
                        const content = msg.message.content;
                        // content can be string or array
                        if (Array.isArray(content)) {
                          content.forEach((block: { type: string; tool_use_id?: string; content?: string }) => {
                            if (block.type === 'tool_result' && block.tool_use_id) {
                              toolResults[block.tool_use_id] = typeof block.content === 'string'
                                ? block.content.slice(0, 2000)
                                : JSON.stringify(block.content).slice(0, 2000);
                            }
                          });
                        }
                      }
                    });

                    messages.forEach((msg) => {
                      if (msg.type === 'assistant' && msg.message?.content) {
                        const content = msg.message.content;
                        // content can be string or array
                        if (Array.isArray(content)) {
                          content.forEach((block: { type: string; thinking?: string; text?: string; name?: string; input?: Record<string, unknown>; id?: string }) => {
                            if (block.type === 'thinking' && block.thinking) {
                              thinkingBlocks.push(block.thinking);
                            }
                            if (block.type === 'text' && block.text) {
                              textBlocks.push(block.text);
                            }
                            if (block.type === 'tool_use' && block.name) {
                              toolCalls.push({
                                name: block.name,
                                input: JSON.stringify(block.input || {}, null, 2).slice(0, 500),
                                result: block.id ? toolResults[block.id] : undefined,
                              });
                            }
                          });
                        }
                      }
                    });

                    return (
                      <div
                        key={t.id}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Header */}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            cursor: 'pointer',
                            background: isExpanded ? 'rgba(0, 212, 255, 0.05)' : 'transparent',
                          }}
                          onClick={() => setExpandedTranscript(isExpanded ? null : t.id)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{
                              background: '#00d4ff20',
                              color: '#00d4ff',
                              padding: '4px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: 600,
                            }}>
                              {t.subagent_type}
                            </span>
                            <span style={{ fontWeight: 500 }}>{t.description || 'No description'}</span>
                            <span style={{ color: '#666', fontSize: '13px' }}>
                              {t.agent_id ? `agent-${t.agent_id}` : ''}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ color: '#888', fontSize: '13px' }}>
                              {new Date(t.created_at).toLocaleString()}
                            </span>
                            <span style={{ color: '#00ff88', fontSize: '13px' }}>
                              {t.message_count} messages
                            </span>
                            <span style={{ color: '#00d4ff' }}>
                              {isExpanded ? '▼' : '▶'}
                            </span>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            {/* Prompt */}
                            {t.prompt && (
                              <div style={{ padding: '16px', background: 'rgba(0, 0, 0, 0.2)' }}>
                                <div style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>PROMPT</div>
                                <pre style={{
                                  margin: 0,
                                  whiteSpace: 'pre-wrap',
                                  fontFamily: 'JetBrains Mono, monospace',
                                  fontSize: '13px',
                                  color: '#ccc',
                                }}>
                                  {t.prompt}
                                </pre>
                              </div>
                            )}

                            {/* Tool Calls */}
                            {toolCalls.length > 0 && (
                              <div style={{ padding: '16px' }}>
                                <div style={{ color: '#00d4ff', fontSize: '12px', marginBottom: '12px' }}>
                                  TOOL CALLS ({toolCalls.length})
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '400px', overflow: 'auto' }}>
                                  {toolCalls.map((tool, idx) => (
                                    <details
                                      key={idx}
                                      style={{
                                        background: 'rgba(0, 212, 255, 0.05)',
                                        border: '1px solid rgba(0, 212, 255, 0.2)',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                      }}
                                    >
                                      <summary style={{ cursor: 'pointer', color: '#00d4ff', fontWeight: 500, fontSize: '13px' }}>
                                        {tool.name}
                                      </summary>
                                      <div style={{ marginTop: '8px' }}>
                                        <div style={{ color: '#888', fontSize: '11px', marginBottom: '4px' }}>INPUT:</div>
                                        <pre style={{
                                          margin: 0,
                                          padding: '8px',
                                          background: 'rgba(0, 0, 0, 0.3)',
                                          borderRadius: '4px',
                                          fontSize: '11px',
                                          color: '#aaa',
                                          whiteSpace: 'pre-wrap',
                                          maxHeight: '150px',
                                          overflow: 'auto',
                                        }}>
                                          {tool.input}
                                        </pre>
                                        {tool.result && (
                                          <>
                                            <div style={{ color: '#888', fontSize: '11px', marginTop: '8px', marginBottom: '4px' }}>OUTPUT:</div>
                                            <pre style={{
                                              margin: 0,
                                              padding: '8px',
                                              background: 'rgba(0, 255, 136, 0.05)',
                                              borderRadius: '4px',
                                              fontSize: '11px',
                                              color: '#aaa',
                                              whiteSpace: 'pre-wrap',
                                              maxHeight: '150px',
                                              overflow: 'auto',
                                            }}>
                                              {tool.result}
                                            </pre>
                                          </>
                                        )}
                                      </div>
                                    </details>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Chain of Thought */}
                            {thinkingBlocks.length > 0 && (
                              <div style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ color: '#ffaa00', fontSize: '12px', marginBottom: '12px' }}>
                                  CHAIN OF THOUGHT ({thinkingBlocks.length} blocks)
                                </div>
                                {thinkingBlocks.map((thinking, idx) => (
                                  <div
                                    key={idx}
                                    style={{
                                      background: 'rgba(255, 170, 0, 0.05)',
                                      border: '1px solid rgba(255, 170, 0, 0.2)',
                                      borderRadius: '6px',
                                      padding: '12px',
                                      marginBottom: '12px',
                                    }}
                                  >
                                    <pre style={{
                                      margin: 0,
                                      whiteSpace: 'pre-wrap',
                                      fontFamily: 'JetBrains Mono, monospace',
                                      fontSize: '12px',
                                      color: '#ccc',
                                      maxHeight: '300px',
                                      overflow: 'auto',
                                    }}>
                                      {thinking}
                                    </pre>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Output */}
                            {textBlocks.length > 0 && (
                              <div style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ color: '#00ff88', fontSize: '12px', marginBottom: '12px' }}>
                                  OUTPUT ({textBlocks.length} blocks)
                                </div>
                                {textBlocks.map((text, idx) => (
                                  <div
                                    key={idx}
                                    style={{
                                      background: 'rgba(0, 255, 136, 0.05)',
                                      border: '1px solid rgba(0, 255, 136, 0.2)',
                                      borderRadius: '6px',
                                      padding: '12px',
                                      marginBottom: '12px',
                                    }}
                                  >
                                    <pre style={{
                                      margin: 0,
                                      whiteSpace: 'pre-wrap',
                                      fontFamily: 'JetBrains Mono, monospace',
                                      fontSize: '12px',
                                      color: '#ccc',
                                    }}>
                                      {text}
                                    </pre>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {/* Plugin Tab */}
          {activeTab === "plugin" && (
            <>
              {/* Agents */}
              <section className={styles.pluginSection}>
                <h2 className={styles.sectionTitle}>
                  Agents
                  <span className={styles.sectionCount}>{PLUGIN_COMPONENTS.agents.length}</span>
                </h2>
                <div className={styles.pluginGrid}>
                  {PLUGIN_COMPONENTS.agents.map((agent) => (
                    <div key={agent.name} className={styles.pluginCard}>
                      <div className={styles.pluginCardHeader}>
                        <span className={`${styles.pluginType} ${styles.pluginTypeAgent}`}>Agent</span>
                        <button
                          className={styles.expandButton}
                          onClick={() =>
                            setExpandedCard(expandedCard === agent.name ? null : agent.name)
                          }
                        >
                          {expandedCard === agent.name ? "Collapse" : "View"}
                        </button>
                      </div>
                      <div className={styles.pluginName}>{agent.name}</div>
                      <div className={styles.pluginDesc}>{agent.description}</div>
                      <div className={styles.pluginMeta}>
                        <span>{agent.file}</span>
                        <span>{agent.lines} lines</span>
                      </div>
                      {expandedCard === agent.name && (
                        <div className={styles.pluginContent}>
                          Content loaded from: ~/.claude/plugins/cache/cosilico/cosilico/0.1.0/agents/{agent.file}
                          {"\n\n"}
                          [Full agent prompt would be displayed here - currently showing placeholder.
                          The actual content includes detailed instructions for the agent's behavior,
                          workflow steps, validation rules, and example patterns.]
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className={styles.pluginSection}>
                <h2 className={styles.sectionTitle}>
                  Skills
                  <span className={styles.sectionCount}>{PLUGIN_COMPONENTS.skills.length}</span>
                </h2>
                <div className={styles.pluginGrid}>
                  {PLUGIN_COMPONENTS.skills.map((skill) => (
                    <div key={skill.name} className={styles.pluginCard}>
                      <div className={styles.pluginCardHeader}>
                        <span className={`${styles.pluginType} ${styles.pluginTypeSkill}`}>Skill</span>
                      </div>
                      <div className={styles.pluginName}>{skill.name}</div>
                      <div className={styles.pluginDesc}>{skill.description}</div>
                      <div className={styles.pluginMeta}>
                        <span>{skill.file}</span>
                        <span>{skill.lines} lines</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Commands */}
              <section className={styles.pluginSection}>
                <h2 className={styles.sectionTitle}>
                  Commands
                  <span className={styles.sectionCount}>{PLUGIN_COMPONENTS.commands.length}</span>
                </h2>
                <div className={styles.pluginGrid}>
                  {PLUGIN_COMPONENTS.commands.map((cmd) => (
                    <div key={cmd.name} className={styles.pluginCard}>
                      <div className={styles.pluginCardHeader}>
                        <span className={`${styles.pluginType} ${styles.pluginTypeCommand}`}>Command</span>
                      </div>
                      <div className={styles.pluginName}>{cmd.name}</div>
                      <div className={styles.pluginDesc}>{cmd.description}</div>
                      <div className={styles.pluginMeta}>
                        <span>{cmd.file}</span>
                        <span>{cmd.lines} lines</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hooks */}
              <section className={styles.pluginSection}>
                <h2 className={styles.sectionTitle}>
                  Hooks
                  <span className={styles.sectionCount}>{PLUGIN_COMPONENTS.hooks.length}</span>
                </h2>
                <div className={styles.pluginGrid}>
                  {PLUGIN_COMPONENTS.hooks.map((hook) => (
                    <div key={hook.name} className={styles.pluginCard}>
                      <div className={styles.pluginCardHeader}>
                        <span className={`${styles.pluginType} ${styles.pluginTypeHook}`}>Hook</span>
                      </div>
                      <div className={styles.pluginName}>{hook.name}</div>
                      <div className={styles.pluginDesc}>{hook.description}</div>
                      <div className={styles.pluginMeta}>
                        <span>{hook.file}</span>
                        <span>{hook.lines} lines</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Issues Tab */}
          {activeTab === "issues" && (
            <>
              <section className={styles.alertSection}>
                <div className={styles.alertCard}>
                  <div className={styles.alertGlow} />
                  <div className={styles.alertHeader}>
                    <svg className={styles.alertIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <h3 className={styles.alertTitle}>26 USC 1 Encoding Failed Quality Review</h3>
                  </div>
                  <div className={styles.alertBody}>
                    <p>
                      Despite passing tests and receiving scores of 8.5+, the §1 encoding has critical structural problems that the reviewers failed to catch:
                    </p>
                    <ul className={styles.alertList}>
                      <li>
                        <strong>IRS guidance mixed into statute:</strong> Lines 106-420 contain 2019-2024 indexed values from Rev. Proc. guidance documents. The statute only has 2018 TCJA base values.
                      </li>
                      <li>
                        <strong>Wrong bracket parameter structure:</strong> 31 separate parameters (<code>rate_bracket_1</code>, <code>threshold_single_1</code>, etc.) instead of a single <code>brackets</code> parameter with arrays.
                      </li>
                      <li>
                        <strong>Manual bracket math instead of <code>marginal_agg()</code>:</strong> 80 lines of manual computation vs one line using the built-in function.
                      </li>
                      <li>
                        <strong>Wrong file depth:</strong> Should be <code>26/1/j/2.rac</code> for TCJA rates, not <code>26/1.rac</code>.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.alertSection}>
                <div className={styles.alertCard} style={{ borderColor: "rgba(255, 170, 0, 0.3)", background: "rgba(255, 170, 0, 0.03)" }}>
                  <div className={styles.alertGlow} style={{ background: "linear-gradient(90deg, transparent, #ffaa00, transparent)" }} />
                  <div className={styles.alertHeader}>
                    <svg className={styles.alertIcon} viewBox="0 0 24 24" fill="none" stroke="#ffaa00" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <h3 className={styles.alertTitle} style={{ color: "#ffaa00" }}>Reviewer Agents Missing Critical Checks</h3>
                  </div>
                  <div className={styles.alertBody}>
                    <p>The reviewer agents need to be updated to catch these issues:</p>
                    <ul className={styles.alertList}>
                      <li><strong>Statute vs guidance separation:</strong> Check that parameter values only come from statute text, not IRS guidance</li>
                      <li><strong>Bracket parameter conventions:</strong> Enforce use of array-based bracket parameters</li>
                      <li><strong>Built-in function usage:</strong> Flag when manual implementations exist for built-in functions like <code>marginal_agg()</code></li>
                      <li><strong>File path depth rules:</strong> Verify filepath matches the granularity of content</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.pluginSection}>
                <h2 className={styles.sectionTitle}>Proposed Reviewer Updates</h2>
                <div className={styles.pluginGrid}>
                  <div className={styles.pluginCard}>
                    <div className={styles.pluginCardHeader}>
                      <span className={`${styles.pluginType} ${styles.pluginTypeAgent}`}>Update</span>
                    </div>
                    <div className={styles.pluginName}>formula-reviewer.md</div>
                    <div className={styles.pluginDesc}>
                      Add check: "If formula manually computes progressive brackets, flag as issue and recommend <code>marginal_agg()</code>"
                    </div>
                  </div>
                  <div className={styles.pluginCard}>
                    <div className={styles.pluginCardHeader}>
                      <span className={`${styles.pluginType} ${styles.pluginTypeAgent}`}>Update</span>
                    </div>
                    <div className={styles.pluginName}>parameter-reviewer.md</div>
                    <div className={styles.pluginDesc}>
                      Add check: "Parameter values must trace to statute text, NOT IRS guidance (Rev. Proc., Notice, etc.)"
                    </div>
                  </div>
                  <div className={styles.pluginCard}>
                    <div className={styles.pluginCardHeader}>
                      <span className={`${styles.pluginType} ${styles.pluginTypeAgent}`}>Update</span>
                    </div>
                    <div className={styles.pluginName}>rac-reviewer.md</div>
                    <div className={styles.pluginDesc}>
                      Add check: "Tax brackets must use array-based <code>brackets:</code> parameter, not individual threshold parameters"
                    </div>
                  </div>
                  <div className={styles.pluginCard}>
                    <div className={styles.pluginCardHeader}>
                      <span className={`${styles.pluginType} ${styles.pluginTypeAgent}`}>Update</span>
                    </div>
                    <div className={styles.pluginName}>integration-reviewer.md</div>
                    <div className={styles.pluginDesc}>
                      Add check: "File path depth must match content granularity - section-level content needs subsection files"
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
