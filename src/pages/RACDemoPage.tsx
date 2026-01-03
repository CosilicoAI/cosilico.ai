import { useState, useMemo } from "react";
import PageLayout from "../components/PageLayout";

// Calculation logic
function calculate(income: number, deduction: number, rate: number, elasticity: number) {
  const taxableIncome = Math.max(0, income - deduction);
  const baselineTax = taxableIncome * rate;
  const baselineMTR = rate;

  const reformRate = rate + 0.03;
  const reformTax = taxableIncome * reformRate;
  const reformMTR = reformRate;

  const netOfTaxChange = (1 - reformMTR) / (1 - baselineMTR) - 1;
  const adjustedIncome = income * (1 + elasticity * netOfTaxChange);
  const adjustedTaxableIncome = Math.max(0, adjustedIncome - deduction);
  const adjustedTax = adjustedTaxableIncome * reformRate;

  const loElasticity = elasticity * 0.5;
  const hiElasticity = elasticity * 1.5;
  const loAdjustedIncome = income * (1 + loElasticity * netOfTaxChange);
  const hiAdjustedIncome = income * (1 + hiElasticity * netOfTaxChange);

  return {
    taxableIncome,
    baselineTax,
    reformTax,
    staticCost: reformTax - baselineTax,
    adjustedIncome,
    adjustedTax,
    behaviouralCost: adjustedTax - baselineTax,
    revenueOverestimate: (reformTax - baselineTax) - (adjustedTax - baselineTax),
    incomeUncertainty: [loAdjustedIncome, hiAdjustedIncome] as [number, number],
    elasticity,
    netOfTaxChange,
  };
}

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Styled components using cosilico design tokens
const styles = {
  section: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "48px 24px",
  },
  label: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase" as const,
    color: "var(--color-text-muted)",
    marginBottom: 12,
  },
  card: {
    background: "var(--color-bg-card)",
    border: "1px solid var(--color-border)",
    borderRadius: 12,
    padding: "20px 24px",
  },
  cardHighlight: {
    background: "rgba(0, 212, 255, 0.08)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
  },
  cardAmber: {
    background: "rgba(255, 170, 0, 0.08)",
    border: "1px solid rgba(255, 170, 0, 0.3)",
  },
  cardError: {
    background: "rgba(255, 68, 102, 0.08)",
    border: "1px solid rgba(255, 68, 102, 0.3)",
  },
  codeBlock: {
    background: "var(--color-surface)",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  codeHeader: {
    fontSize: 11,
    fontFamily: "var(--font-mono)",
    color: "var(--color-text-muted)",
    background: "var(--color-bg-elevated)",
    padding: "8px 16px",
    borderBottom: "1px solid var(--color-border)",
  },
  codeContent: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    lineHeight: 1.7,
    padding: 16,
    margin: 0,
    color: "var(--color-text-secondary)",
    overflow: "auto",
  },
  toggle: {
    display: "flex",
    gap: 8,
    marginBottom: 32,
  },
  toggleBtn: (active: boolean) => ({
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    background: active ? "var(--color-accent)" : "var(--color-surface)",
    color: active ? "var(--color-bg)" : "var(--color-text-secondary)",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms",
  }),
};

function ResultCard({ label, value, sublabel, variant }: {
  label: string;
  value: string;
  sublabel?: string;
  variant?: "default" | "highlight" | "amber" | "error";
}) {
  const variantStyles = {
    default: styles.card,
    highlight: { ...styles.card, ...styles.cardHighlight },
    amber: { ...styles.card, ...styles.cardAmber },
    error: { ...styles.card, ...styles.cardError },
  };
  const textColor = variant === "highlight" ? "var(--color-accent)"
    : variant === "amber" ? "var(--color-amber)"
    : variant === "error" ? "var(--color-error)"
    : "var(--color-text)";

  return (
    <div style={variantStyles[variant || "default"]}>
      <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 600, color: textColor, fontVariantNumeric: "tabular-nums" }}>
        {value}
      </div>
      {sublabel && (
        <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 4 }}>{sublabel}</div>
      )}
    </div>
  );
}

function Citation({ code, text, type }: { code: string; text: string; type: "statutory" | "empirical" }) {
  const isEmpirical = type === "empirical";
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 16px",
      background: isEmpirical ? "var(--color-amber-glow)" : "var(--color-success-glow)",
      borderRadius: 6,
      border: `1px solid ${isEmpirical ? "rgba(255, 170, 0, 0.3)" : "rgba(0, 255, 136, 0.3)"}`,
      fontSize: 13,
      marginBottom: 8,
    }}>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        padding: "2px 8px",
        background: isEmpirical ? "rgba(255, 170, 0, 0.2)" : "rgba(0, 255, 136, 0.2)",
        borderRadius: 4,
        color: isEmpirical ? "var(--color-amber)" : "var(--color-success)",
        whiteSpace: "nowrap",
      }}>
        {code}
      </span>
      <span style={{ color: "var(--color-text-secondary)" }}>{text}</span>
    </div>
  );
}

function CodeBlock({ filename, children, highlight }: { filename: string; children: string; highlight?: boolean }) {
  return (
    <div style={{
      ...styles.codeBlock,
      border: highlight ? "1px solid rgba(255, 170, 0, 0.3)" : "1px solid var(--color-border)",
    }}>
      <div style={styles.codeHeader}>{filename}</div>
      <pre style={styles.codeContent}>{children}</pre>
    </div>
  );
}

const RAC_ENTITIES = `entities:
  person:
    is_member_of: tax_unit
    roles: [head, spouse, dependent]
  tax_unit:
    is_member_of: household
  household:`;

const RAC_STATIC = `variable standard_deduction:
  entity: tax_unit
  formula: 3000
  enacted: 1944-01-01
  citation: IRC 1944 § 23

amends standard_deduction:
  formula: indexed(5000, inflation, base=1985)
  enacted: 1985-01-01
  citation: ERTA 1981 § 104

amends standard_deduction:
  formula: 14600 if filing_status == single else 29200
  enacted: 2018-01-01
  sunset: 2025-12-31
  citation: TCJA § 11021

variable tax_unit_income:
  entity: tax_unit
  formula: head.employment_income + (spouse.employment_income or 0)
  citation: 26 USC § 61

variable federal_income_tax:
  entity: tax_unit
  formula: max(0, tax_unit_income - standard_deduction) * marginal_rate
  citation: 26 USC § 1(c)`;

const RAC_BEHAVIOURAL = `# Amends tax calculation with labour supply response

amends tax_unit_income:
  formula: |
    (head.employment_income + (spouse.employment_income or 0))
    * (1 + intensive_elasticity * pct_change_net_of_tax)
  citation: Chetty et al. (2011) QJE
  rule_type: empirical

variable pct_change_net_of_tax:
  entity: tax_unit
  formula: (1 - marginal_rate[reform]) / (1 - marginal_rate[baseline]) - 1

parameter intensive_elasticity:
  value: 0.10
  uncertainty: [0.05, 0.15]
  citation: Chetty et al. (2011) QJE`;

const EXECUTION_CODE = `from rac import load_rules, law
from datetime import date

# Load all .rac files
rules = load_rules("rac-us/")

# Compile to a time-parameterised function
compute = law(rules)

# Static: law as of 2024, statutory only
static = compute(as_of=date(2024, 1, 1), include=["statute/*"])
baseline = static("federal_income_tax", microdata)

# Dynamic: include empirical amendments
dynamic = compute(as_of=date(2024, 1, 1), include=["statute/*", "empirical/*"])
with_response = dynamic("federal_income_tax", microdata)

# Post-sunset: law as of 2026
future = compute(as_of=date(2026, 1, 1))`;

const COMPILED_OUTPUT = `# rac compile --as-of 2024-01-01

def law(as_of: date):
    # Resolve amendments for this date
    if date(2018, 1, 1) <= as_of < date(2026, 1, 1):
        std_ded = 14600  # TCJA § 11021
    else:
        std_ded = 8000   # Pre/post TCJA

    def federal_income_tax(tax_units):
        income = tax_units.head.employment_income
        income += tax_units.spouse.employment_income or 0
        taxable = np.maximum(0, income - std_ded)
        return taxable * 0.22  # 26 USC § 1(c)

    return {"federal_income_tax": federal_income_tax}`;

export default function RACDemoPage() {
  const [income, setIncome] = useState(85000);
  const [showBehavioural, setShowBehavioural] = useState(true);
  const [showImplementation, setShowImplementation] = useState(true);

  const DEDUCTION = 14600;
  const RATE = 0.22;
  const ELASTICITY = 0.1;

  const results = useMemo(() => calculate(income, DEDUCTION, RATE, ELASTICITY), [income]);

  return (
    <PageLayout>
      <div style={styles.section}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={styles.label}>Rules as code</div>
          <h1 style={{ fontSize: 32, fontWeight: 600, margin: "0 0 8px", color: "var(--color-text)" }}>
            law(as_of) → f(var, data) → value
          </h1>
          <p style={{ fontSize: 16, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>
            Declarative amendments compiled to time-parameterised compute functions
          </p>
        </div>

        {/* Scenario */}
        <div style={{ marginBottom: 32 }}>
          <div style={styles.label}>Scenario</div>
          <div style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            Single filer with{" "}
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--color-surface)",
              padding: "2px 8px",
              borderRadius: 4,
              fontWeight: 500,
              color: "var(--color-text)",
            }}>
              $
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value) || 0)}
                style={{
                  border: "none",
                  background: "transparent",
                  width: 70,
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--color-text)",
                  outline: "none",
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </span>
            {" "}income, 3pp rate increase (22% → 25%)
          </div>
        </div>

        {/* Toggle */}
        <div style={styles.toggle}>
          <button
            onClick={() => setShowBehavioural(false)}
            style={styles.toggleBtn(!showBehavioural)}
          >
            Static
          </button>
          <button
            onClick={() => setShowBehavioural(true)}
            style={styles.toggleBtn(showBehavioural)}
          >
            + empirical amendments
          </button>
        </div>

        {/* Results */}
        <div style={{
          display: "grid",
          gridTemplateColumns: showBehavioural ? "1fr 1fr 1fr" : "1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}>
          <ResultCard label="Baseline" value={`$${fmt(results.baselineTax)}`} sublabel="Current law" />
          {!showBehavioural ? (
            <ResultCard
              label="Reform"
              value={`$${fmt(results.reformTax)}`}
              sublabel={`+$${fmt(results.staticCost)}`}
              variant="highlight"
            />
          ) : (
            <>
              <ResultCard label="Static estimate" value={`$${fmt(results.reformTax)}`} sublabel={`+$${fmt(results.staticCost)}`} />
              <ResultCard
                label="With labour response"
                value={`$${fmt(results.adjustedTax)}`}
                sublabel={`+$${fmt(results.behaviouralCost)}`}
                variant="amber"
              />
            </>
          )}
        </div>

        {/* Insight */}
        {showBehavioural && (
          <div style={{ ...styles.card, ...styles.cardError, marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-error)", marginBottom: 4 }}>
              Revenue overestimate: ${fmt(results.revenueOverestimate)}
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              Static scoring ignores labour supply response. Earnings fall ${fmt(income - results.adjustedIncome)} ({fmt(Math.abs(results.netOfTaxChange * ELASTICITY) * 100, 1)}%).
            </div>
          </div>
        )}

        {/* Provenance */}
        <div style={{ marginBottom: 32 }}>
          <div style={styles.label}>Provenance</div>
          <Citation code="26 USC § 1(c)" text="22% rate for taxable income $47,150–$100,525" type="statutory" />
          <Citation code="26 USC § 63(b)" text="Taxable income = AGI minus standard deduction" type="statutory" />
          <Citation code="TCJA § 11021" text="Standard deduction of $14,600 (2024), sunsets 2026" type="statutory" />
          {showBehavioural && (
            <Citation code="Chetty 2011" text="Intensive margin elasticity 0.1 (95% CI: 0.05–0.15)" type="empirical" />
          )}
        </div>

        {/* Calculation trace */}
        <div style={{ marginBottom: 48 }}>
          <div style={styles.label}>Calculation</div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            background: "var(--color-surface)",
            padding: 20,
            borderRadius: 8,
            lineHeight: 1.8,
            color: "var(--color-text-secondary)",
          }}>
            <div><span style={{ color: "var(--color-text-muted)" }}>taxable_income</span> = max(0, {fmt(income)} − {fmt(DEDUCTION)}) = <span style={{ color: "var(--color-success)" }}>{fmt(results.taxableIncome)}</span></div>
            <div><span style={{ color: "var(--color-text-muted)" }}>baseline_tax</span> = {fmt(results.taxableIncome)} × 0.22 = <span style={{ color: "var(--color-success)" }}>{fmt(results.baselineTax)}</span></div>
            <div><span style={{ color: "var(--color-text-muted)" }}>reform_tax</span> = {fmt(results.taxableIncome)} × 0.25 = <span style={{ color: "var(--color-success)" }}>{fmt(results.reformTax)}</span></div>
            {showBehavioural && (
              <>
                <div style={{ borderTop: "1px solid var(--color-border)", margin: "12px 0", paddingTop: 12 }}>
                  <span style={{ color: "var(--color-amber)" }}>{"// Empirical amendment"}</span>
                </div>
                <div><span style={{ color: "var(--color-amber)" }}>Δ_net_of_tax</span> = (1 − 0.25) / (1 − 0.22) − 1 = <span style={{ color: "var(--color-amber)" }}>{fmt(results.netOfTaxChange * 100, 1)}%</span></div>
                <div><span style={{ color: "var(--color-amber)" }}>adjusted_income</span> = {fmt(income)} × (1 + 0.1 × {fmt(results.netOfTaxChange, 3)}) = <span style={{ color: "var(--color-amber)" }}>{fmt(results.adjustedIncome)}</span></div>
                <div><span style={{ color: "var(--color-amber)" }}>adjusted_tax</span> = ({fmt(results.adjustedIncome)} − {fmt(DEDUCTION)}) × 0.25 = <span style={{ color: "var(--color-amber)" }}>{fmt(results.adjustedTax)}</span></div>
              </>
            )}
          </div>
        </div>

        {/* Implementation */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 32 }}>
          <button
            onClick={() => setShowImplementation(!showImplementation)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              ...styles.label,
              marginBottom: showImplementation ? 24 : 0,
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}>{showImplementation ? "▼" : "▶"}</span>
            Implementation
          </button>

          {showImplementation && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 16, color: "var(--color-text)" }}>
                    .rac source
                  </div>
                  <CodeBlock filename="rac-us/entities.rac">{RAC_ENTITIES}</CodeBlock>
                  <CodeBlock filename="rac-us/statute/26/*.rac">{RAC_STATIC}</CodeBlock>
                  {showBehavioural && (
                    <CodeBlock filename="rac-us/empirical/labour/supply.rac" highlight>{RAC_BEHAVIOURAL}</CodeBlock>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 16, color: "var(--color-text)" }}>
                    Compilation
                  </div>
                  <CodeBlock filename="run.py">{EXECUTION_CODE}</CodeBlock>
                  <CodeBlock filename="generated/law_2024.py">{COMPILED_OUTPUT}</CodeBlock>
                </div>
              </div>

              <div style={{
                padding: 20,
                background: "var(--color-surface)",
                borderRadius: 8,
                border: "1px solid var(--color-border)",
              }}>
                <div style={{ fontSize: 12, color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
                  .rac amendments → parser → amendment graph → <span style={{ color: "var(--color-accent)" }}>law(as_of)</span> → f(variable, data) → value
                </div>
              </div>
            </>
          )}
        </div>

        {/* Design decisions */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 32, marginTop: 32 }}>
          <div style={styles.label}>Design decisions</div>

          <div style={{ display: "grid", gap: 16 }}>
            <DecisionCard
              title="Amendments as first-class"
              problem="OpenFisca-style systems use imperative year-keyed lookups: parameter[2024] = X. This doesn't match how law works."
              solution="Laws are declarative amendments that stack. Each .rac file can amend a variable with enacted/sunset dates. The compiler resolves to law(as_of)."
            />
            <DecisionCard
              title="No behavioural flag"
              problem="Why have behavioural=True when empirical rules are just .rac files?"
              solution="Empirical amendments (Chetty elasticities) are just more .rac files. Include them or don't: include=['statute/*', 'empirical/*']. No special flags."
            />
            <DecisionCard
              title="Entity relations with roles"
              problem="Need spouse's income, head of household's age, dependents' count. Not just parent/child entity hierarchy."
              solution="Roles are first-class: head.employment_income, spouse.employment_income or 0, count(dependents where age < 19)."
            />
            <DecisionCard
              title="Amendments feed into the DAG"
              problem="How does labour_supply_response connect to tax calculation? Floating variables are useless."
              solution="amends tax_unit_income replaces that variable in all downstream calculations. The DAG handles ordering—no iteration loops needed."
            />
            <DecisionCard
              title="130M households in seconds"
              problem="NumPy is too slow. 1 hour is unacceptable for interactive use."
              solution="Multi-target compilation: WASM, LLVM, GPU kernels. Same .rac source, native execution speed."
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function DecisionCard({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div style={{
      background: "var(--color-bg-card)",
      border: "1px solid var(--color-border)",
      borderRadius: 8,
      padding: 20,
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)", marginBottom: 12 }}>
        {title}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 8 }}>
        <span style={{ color: "var(--color-error)" }}>Problem:</span> {problem}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
        <span style={{ color: "var(--color-success)" }}>Solution:</span> {solution}
      </div>
    </div>
  );
}
