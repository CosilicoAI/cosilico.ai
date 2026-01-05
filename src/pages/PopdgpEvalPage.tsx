import React, { useState, useMemo, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/popdgp-eval.css";

// Types for the evaluation data
interface TrajectoryData {
  age: number[];
  income: number[];
  net_worth: number[];
}

interface HoldoutRecord {
  id: string;
  age: number;
  income: number;
  wealth: number;
  covered: boolean;
  distance: number;
  trajectory: TrajectoryData;
  nearest_synthetic: TrajectoryData;
}

interface CoverageStats {
  overall: number;
  total_records: number;
  covered_count: number;
  by_age: Record<string, { coverage: number; count: number }>;
  by_wealth: Record<string, { coverage: number; median: number }>;
}

interface EvalData {
  holdout_records: HoldoutRecord[];
  coverage_stats: CoverageStats;
}

function formatMoney(value: number): string {
  if (Math.abs(value) >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (Math.abs(value) >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value.toFixed(0)}`;
}

interface RecordCardProps {
  record: HoldoutRecord;
  selected: boolean;
  onClick: () => void;
}

function RecordCard({ record, selected, onClick }: RecordCardProps) {
  return (
    <div
      className={`${styles.recordCard} ${selected ? styles.recordCardSelected : ""}`}
      onClick={onClick}
    >
      <div className={styles.recordHeader}>
        <span className={styles.recordId}>{record.id}</span>
        <span
          className={`${styles.recordStatus} ${
            record.covered ? styles.recordStatusCovered : styles.recordStatusUncovered
          }`}
        >
          <span className={styles.statusDot} />
          {record.covered ? "Covered" : "Uncovered"}
        </span>
      </div>
      <div className={styles.recordStats}>
        <div className={styles.recordStat}>
          <div className={styles.recordStatLabel}>Age</div>
          <div className={styles.recordStatValue}>{record.age}</div>
        </div>
        <div className={styles.recordStat}>
          <div className={styles.recordStatLabel}>Income</div>
          <div className={styles.recordStatValue}>{formatMoney(record.income)}</div>
        </div>
        <div className={styles.recordStat}>
          <div className={styles.recordStatLabel}>Wealth</div>
          <div className={styles.recordStatValue}>{formatMoney(record.wealth)}</div>
        </div>
      </div>
    </div>
  );
}

interface TrajectoryChartProps {
  title: string;
  realData: number[];
  synthData: number[];
  formatY: (value: number) => string;
}

function TrajectoryChart({ title, realData, synthData, formatY }: TrajectoryChartProps) {
  const chartData = realData.map((value, i) => ({
    period: i,
    real: value,
    synthetic: synthData[i],
  }));

  return (
    <div className={styles.chartPanel}>
      <div className={styles.chartTitle}>{title}</div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="period"
              tick={{ fontSize: 10, fill: "#707088" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            />
            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: 10, fill: "#707088" }}
              tickLine={false}
              axisLine={false}
              width={50}
            />
            <Tooltip
              contentStyle={{
                background: "#14141c",
                border: "1px solid rgba(0,212,255,0.2)",
                borderRadius: "8px",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#8888a0" }}
              formatter={(value) => [formatY(value as number), ""]}
            />
            <Line
              type="monotone"
              dataKey="real"
              stroke="#00d4ff"
              strokeWidth={2}
              dot={false}
              name="Real"
            />
            <Line
              type="monotone"
              dataKey="synthetic"
              stroke="#00ff88"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              opacity={0.7}
              name="Synthetic"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function PopdgpEvalPage() {
  const [data, setData] = useState<EvalData | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "covered" | "uncovered">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/eval_data.json")
      .then((res) => res.json())
      .then((json: EvalData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
        setLoading(false);
      });
  }, []);

  const selectedRecord = useMemo(
    () => data?.holdout_records?.find((r) => r.id === selectedId),
    [data?.holdout_records, selectedId]
  );

  const filteredRecords = useMemo(() => {
    if (!data?.holdout_records) return [];
    if (filter === "all") return data.holdout_records;
    if (filter === "covered") return data.holdout_records.filter((r) => r.covered);
    if (filter === "uncovered") return data.holdout_records.filter((r) => !r.covered);
    return data.holdout_records;
  }, [data?.holdout_records, filter]);

  if (loading || !data) {
    return (
      <PageLayout>
        <div className={styles.evalPage}>
          <div className={styles.emptyState}>
            <div style={{ fontFamily: "var(--font-mono)" }}>Loading evaluation data...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  const stats = data.coverage_stats;

  return (
    <PageLayout>
      <div className={styles.evalPage}>
        <div className={styles.evalLayout}>
          {/* Page Header */}
          <header className={styles.pageHeader}>
            <div className={styles.logoSection}>
              <div className={styles.logoIcon}>pd</div>
              <div className={styles.logoText}>
                popdgp<span>/eval</span>
              </div>
            </div>
            <div className={styles.coverageBadge}>
              <span className={styles.coverageBadgeLabel}>Coverage</span>
              <span className={styles.coverageBadgeValue}>
                {(stats.overall * 100).toFixed(1)}%
              </span>
            </div>
          </header>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <div className={styles.sidebarTitle}>Holdout Records</div>
              <div className={styles.filterRow}>
                <button
                  className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("all")}
                >
                  All ({data.holdout_records.length})
                </button>
                <button
                  className={`${styles.filterBtn} ${filter === "covered" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("covered")}
                >
                  Covered
                </button>
                <button
                  className={`${styles.filterBtn} ${filter === "uncovered" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("uncovered")}
                >
                  Uncovered
                </button>
              </div>
            </div>
            <div className={styles.recordList}>
              {filteredRecords.map((record) => (
                <RecordCard
                  key={record.id}
                  record={record}
                  selected={record.id === selectedId}
                  onClick={() => setSelectedId(record.id)}
                />
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className={styles.main}>
            {/* Stats panel */}
            <div className={styles.statsPanel}>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Total Records</div>
                <div className={styles.statCardValue}>{stats.total_records}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Covered</div>
                <div className={`${styles.statCardValue} ${styles.statCardValueSuccess}`}>
                  {stats.covered_count}
                </div>
                <div className={styles.statCardSub}>
                  {((stats.covered_count / stats.total_records) * 100).toFixed(1)}% of total
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Young (15-30)</div>
                <div className={styles.statCardValue}>
                  {(stats.by_age["15-30"].coverage * 100).toFixed(0)}%
                </div>
                <div className={styles.statCardSub}>n={stats.by_age["15-30"].count}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Top Wealth (Q5)</div>
                <div className={styles.statCardValue}>
                  {(stats.by_wealth.Q5.coverage * 100).toFixed(0)}%
                </div>
                <div className={styles.statCardSub}>median {formatMoney(stats.by_wealth.Q5.median)}</div>
              </div>
            </div>

            {/* Trajectory viewer */}
            <div className={styles.trajectoryViewer}>
              {selectedRecord ? (
                <>
                  <div className={styles.trajectoryHeader}>
                    <div className={styles.trajectoryTitle}>
                      Trajectory Comparison: {selectedRecord.id}
                    </div>
                    <div className={styles.trajectoryLegend}>
                      <div className={styles.legendItem}>
                        <div className={`${styles.legendLine} ${styles.legendLineReal}`} />
                        Real (holdout)
                      </div>
                      <div className={styles.legendItem}>
                        <div className={`${styles.legendLine} ${styles.legendLineSynthetic}`} />
                        Nearest synthetic
                      </div>
                      <div className={styles.distanceBadge}>
                        Distance: <span>{selectedRecord.distance.toFixed(3)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.trajectoryCharts}>
                    <TrajectoryChart
                      title="Age"
                      realData={selectedRecord.trajectory.age}
                      synthData={selectedRecord.nearest_synthetic.age}
                      formatY={(v) => v.toFixed(1)}
                    />
                    <TrajectoryChart
                      title="Income"
                      realData={selectedRecord.trajectory.income}
                      synthData={selectedRecord.nearest_synthetic.income}
                      formatY={formatMoney}
                    />
                    <TrajectoryChart
                      title="Net Worth"
                      realData={selectedRecord.trajectory.net_worth}
                      synthData={selectedRecord.nearest_synthetic.net_worth}
                      formatY={formatMoney}
                    />
                  </div>
                </>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>&#9674;</div>
                  <div>Select a record to view trajectory comparison</div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}
