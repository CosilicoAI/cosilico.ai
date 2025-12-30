import React from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/progress.css";

type VariableStatus = "complete" | "in_progress" | "not_started";

interface Variable {
  name: string;
  displayName: string;
  description: string;
  codeSection: string;
  matchRate: number | null;
  status: VariableStatus;
  completedDate?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: VariableStatus;
}

// Current progress data
const VARIABLES: Variable[] = [
  {
    name: "eitc",
    displayName: "Earned Income Tax Credit",
    description: "Federal EITC for working families with earned income",
    codeSection: "26 USC 32",
    matchRate: 85.2,
    status: "in_progress",
  },
  {
    name: "income_tax",
    displayName: "Income Tax",
    description: "Federal income tax liability calculation",
    codeSection: "26 USC 1",
    matchRate: 78.8,
    status: "in_progress",
  },
  {
    name: "standard_deduction",
    displayName: "Standard Deduction",
    description: "Standard deduction amount based on filing status",
    codeSection: "26 USC 63",
    matchRate: null,
    status: "not_started",
  },
  {
    name: "ctc",
    displayName: "Child Tax Credit",
    description: "Tax credit for qualifying children",
    codeSection: "26 USC 24",
    matchRate: null,
    status: "not_started",
  },
  {
    name: "amt",
    displayName: "Alternative Minimum Tax",
    description: "Alternative minimum tax calculation",
    codeSection: "26 USC 55-59",
    matchRate: null,
    status: "not_started",
  },
];

const TIMELINE: TimelineEvent[] = [
  {
    date: "2024-12-15",
    title: "EITC Encoding Started",
    description: "Began encoding 26 USC 32 with initial test cases",
    status: "in_progress",
  },
  {
    date: "2024-12-10",
    title: "Income Tax Encoding Started",
    description: "Core income tax brackets and rate schedules",
    status: "in_progress",
  },
  {
    date: "TBD",
    title: "Standard Deduction",
    description: "Next priority: Filing status-based deductions",
    status: "not_started",
  },
  {
    date: "TBD",
    title: "Child Tax Credit",
    description: "CTC and refundable portion (ACTC)",
    status: "not_started",
  },
  {
    date: "TBD",
    title: "AMT",
    description: "Alternative minimum tax for high-income filers",
    status: "not_started",
  },
];

// Calculate overall progress
function calculateOverallProgress(variables: Variable[]): number {
  const weights: Record<string, number> = {
    income_tax: 30,
    eitc: 20,
    standard_deduction: 15,
    ctc: 20,
    amt: 15,
  };

  let weightedProgress = 0;
  let totalWeight = 0;

  for (const v of variables) {
    const weight = weights[v.name] || 10;
    totalWeight += weight;
    if (v.status === "complete") {
      weightedProgress += weight;
    } else if (v.status === "in_progress" && v.matchRate !== null) {
      weightedProgress += (weight * v.matchRate) / 100;
    }
  }

  return totalWeight > 0 ? (weightedProgress / totalWeight) * 100 : 0;
}

function getStatusEmoji(status: VariableStatus): string {
  switch (status) {
    case "complete":
      return "\u2705"; // green checkmark
    case "in_progress":
      return "\u26A0\uFE0F"; // warning sign
    case "not_started":
      return "\u274C"; // red X
    default:
      return "";
  }
}

function getCardStyle(status: VariableStatus): string {
  switch (status) {
    case "complete":
      return styles.variableCardComplete;
    case "in_progress":
      return styles.variableCardInProgress;
    case "not_started":
      return styles.variableCardNotStarted;
    default:
      return styles.variableCard;
  }
}

function getProgressFillStyle(status: VariableStatus): string {
  switch (status) {
    case "complete":
      return styles.miniProgressFillComplete;
    case "in_progress":
      return styles.miniProgressFillInProgress;
    case "not_started":
      return styles.miniProgressFillNotStarted;
    default:
      return styles.miniProgressFill;
  }
}

function getTimelineDotStyle(status: VariableStatus): string {
  switch (status) {
    case "complete":
      return styles.timelineDotComplete;
    case "in_progress":
      return styles.timelineDotInProgress;
    case "not_started":
      return styles.timelineDotPending;
    default:
      return styles.timelineDot;
  }
}

export default function ProgressPage() {
  const overallProgress = calculateOverallProgress(VARIABLES);
  const completedCount = VARIABLES.filter((v) => v.status === "complete").length;
  const inProgressCount = VARIABLES.filter((v) => v.status === "in_progress").length;
  const notStartedCount = VARIABLES.filter((v) => v.status === "not_started").length;

  return (
    <PageLayout
      badge="PROGRESS"
      title="Federal tax coverage"
      subtitle="Tracking Cosilico encoding progress toward full PolicyEngine parity"
      showHero={true}
    >
      {/* Overall Progress */}
      <section className={styles.overallSection}>
        <div className={styles.overallCard}>
          <div className={styles.overallHeader}>
            <h2 className={styles.overallTitle}>Overall progress</h2>
            <div className={styles.overallPercent}>{overallProgress.toFixed(1)}%</div>
          </div>

          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ "--progress-width": `${overallProgress}%` } as React.CSSProperties}
            />
          </div>

          <div className={styles.progressMeta}>
            <span>
              {VARIABLES.filter((v) => v.status === "complete" || v.status === "in_progress").length} of {VARIABLES.length} variables active
            </span>
            <span className={styles.targetLabel}>
              Target: Full PolicyEngine parity
            </span>
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span className={styles.legendDotComplete} />
              Complete ({">"}95% match)
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendDotInProgress} />
              In progress
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendDotNotStarted} />
              Not started
            </div>
          </div>

          {/* Stats Summary */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{completedCount}</div>
              <div className={styles.statLabel}>Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{inProgressCount}</div>
              <div className={styles.statLabel}>In progress</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{notStartedCount}</div>
              <div className={styles.statLabel}>Not started</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{VARIABLES.length}</div>
              <div className={styles.statLabel}>Total variables</div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Variable Cards */}
      <section className={styles.variablesSection}>
        <h2 className={styles.sectionTitle}>Per-variable status</h2>
        <div className={styles.variablesGrid}>
          {VARIABLES.map((variable) => (
            <div key={variable.name} className={getCardStyle(variable.status)}>
              <div className={styles.variableHeader}>
                <span className={styles.variableName}>{variable.name}</span>
                <span className={styles.variableStatus}>
                  {getStatusEmoji(variable.status)}
                </span>
              </div>

              <div className={styles.variableDescription}>
                {variable.displayName}
              </div>

              <div className={styles.variableMatchRate}>
                <div className={styles.matchLabel}>
                  <span>Match rate</span>
                  <span className={styles.matchPercent}>
                    {variable.matchRate !== null
                      ? `${variable.matchRate}%`
                      : "N/A"}
                  </span>
                </div>
                <div className={styles.miniProgressBar}>
                  <div
                    className={getProgressFillStyle(variable.status)}
                    style={{ width: `${variable.matchRate ?? 0}%` }}
                  />
                </div>
              </div>

              <div className={styles.variableFooter}>
                <span className={styles.codeSection}>{variable.codeSection}</span>
                {variable.completedDate && (
                  <span className={styles.completedDate}>
                    Completed {variable.completedDate}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Timeline</h2>
        <div className={styles.timeline}>
          {TIMELINE.map((event, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={getTimelineDotStyle(event.status)}>
                {event.status === "complete"
                  ? "\u2713"
                  : event.status === "in_progress"
                  ? "\u25B6"
                  : "\u2022"}
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>{event.date}</div>
                <div className={styles.timelineTitle}>{event.title}</div>
                <div className={styles.timelineDescription}>
                  {event.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
