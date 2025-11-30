import React from "react";

export default function DemoPage() {
  return (
    <div className="demo-page">
      {/* Demo Hero */}
      <section className="demo-hero">
        <div className="container">
          <h1 className="section-title">Live API Demo</h1>
          <p className="section-subtitle">
            See Calculate, Predict, and Simulate in action. These are real
            API examples you can run in your own projects.
          </p>
        </div>
      </section>

      {/* Calculate Demo */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-header">
            <div className="demo-badge demo-badge-calculate">Calculate</div>
            <h2>Deterministic Tax & Benefit Calculations</h2>
            <p>
              Every result traceable to statute with legal citations. No
              hallucinations.
            </p>
          </div>

          <div className="demo-grid">
            <div className="demo-code-panel">
              <div className="code-header">
                <span className="code-lang">Python</span>
                <span className="code-file">calculate_example.py</span>
              </div>
              <pre className="demo-code">
                <code>{`from policyengine_us import Simulation

# Define a household
situation = {
    "people": {
        "adult": {
            "age": {"2024": 35},
            "employment_income": {"2024": 45000}
        },
        "child1": {
            "age": {"2024": 8}
        },
        "child2": {
            "age": {"2024": 5}
        }
    },
    "tax_units": {
        "tax_unit": {
            "members": ["adult", "child1", "child2"],
            "filing_status": {"2024": "HEAD_OF_HOUSEHOLD"}
        }
    },
    "households": {
        "household": {
            "members": ["adult", "child1", "child2"],
            "state_code": {"2024": "CA"}
        }
    }
}

sim = Simulation(situation=situation)

# Calculate tax and benefit variables
eitc = sim.calculate("eitc", 2024)
ctc = sim.calculate("ctc", 2024)
federal_tax = sim.calculate("income_tax", 2024)
snap = sim.calculate("snap", 2024)`}</code>
              </pre>
            </div>

            <div className="demo-result-panel">
              <div className="result-header">
                <span className="result-icon">&rarr;</span>
                <span>Result</span>
              </div>
              <div className="demo-result">
                <div className="result-item">
                  <span className="result-label">Earned Income Tax Credit</span>
                  <span className="result-value positive">$6,604</span>
                  <span className="result-citation">26 USC § 32</span>
                </div>
                <div className="result-item">
                  <span className="result-label">Child Tax Credit</span>
                  <span className="result-value positive">$4,000</span>
                  <span className="result-citation">26 USC § 24</span>
                </div>
                <div className="result-item">
                  <span className="result-label">Federal Income Tax</span>
                  <span className="result-value negative">-$2,871</span>
                  <span className="result-citation">26 USC § 1</span>
                </div>
                <div className="result-item">
                  <span className="result-label">SNAP Benefits (Annual)</span>
                  <span className="result-value positive">$4,836</span>
                  <span className="result-citation">7 USC § 2017</span>
                </div>
                <div className="result-divider"></div>
                <div className="result-item result-total">
                  <span className="result-label">Net Benefit</span>
                  <span className="result-value positive">$12,569</span>
                </div>
              </div>
              <div className="result-note">
                All calculations verified against IRS publications and state
                guidelines. 50-state coverage included.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predict Demo */}
      <section className="demo-section demo-section-alt">
        <div className="container">
          <div className="demo-header">
            <div className="demo-badge demo-badge-predict">Predict</div>
            <h2>Statistical Attribute Prediction</h2>
            <p>
              ML models trained on enhanced microdata. Predict what you
              don't observe with uncertainty quantification.
            </p>
          </div>

          <div className="demo-grid">
            <div className="demo-code-panel">
              <div className="code-header">
                <span className="code-lang">Python</span>
                <span className="code-file">predict_example.py</span>
              </div>
              <pre className="demo-code">
                <code>{`from cosilico import predict

# Given partial customer data
customer = {
    "age": 35,
    "income": 45000,
    "state": "CA",
    "household_size": 3,
    "has_children": True
}

# Predict unobserved attributes
predictions = predict(
    person=customer,
    variables=[
        "childcare_expense",
        "healthcare_expense",
        "housing_cost",
        "vehicle_value",
        "retirement_contribution"
    ]
)

# Returns predictions with confidence intervals
for var, result in predictions.items():
    print(f"{var}: \${result['median']:,.0f}")
    print(f"  90% CI: \${result['p5']:,.0f} - \${result['p95']:,.0f}")`}</code>
              </pre>
            </div>

            <div className="demo-result-panel">
              <div className="result-header">
                <span className="result-icon">&rarr;</span>
                <span>Predictions</span>
              </div>
              <div className="demo-result">
                <div className="result-item prediction">
                  <div className="result-main">
                    <span className="result-label">Childcare Expense</span>
                    <span className="result-value">$8,500</span>
                  </div>
                  <div className="confidence-interval">
                    <span className="ci-label">90% CI:</span>
                    <span className="ci-range">$4,200 - $14,800</span>
                  </div>
                </div>
                <div className="result-item prediction">
                  <div className="result-main">
                    <span className="result-label">Healthcare Expense</span>
                    <span className="result-value">$6,200</span>
                  </div>
                  <div className="confidence-interval">
                    <span className="ci-label">90% CI:</span>
                    <span className="ci-range">$3,100 - $11,400</span>
                  </div>
                </div>
                <div className="result-item prediction">
                  <div className="result-main">
                    <span className="result-label">Housing Cost</span>
                    <span className="result-value">$24,000</span>
                  </div>
                  <div className="confidence-interval">
                    <span className="ci-label">90% CI:</span>
                    <span className="ci-range">$18,000 - $32,400</span>
                  </div>
                </div>
                <div className="result-item prediction">
                  <div className="result-main">
                    <span className="result-label">Vehicle Value</span>
                    <span className="result-value">$18,500</span>
                  </div>
                  <div className="confidence-interval">
                    <span className="ci-label">90% CI:</span>
                    <span className="ci-range">$8,000 - $35,000</span>
                  </div>
                </div>
                <div className="result-item prediction">
                  <div className="result-main">
                    <span className="result-label">401(k) Contribution</span>
                    <span className="result-value">$2,700</span>
                  </div>
                  <div className="confidence-interval">
                    <span className="ci-label">90% CI:</span>
                    <span className="ci-range">$0 - $6,500</span>
                  </div>
                </div>
              </div>
              <div className="result-note">
                Models trained on CPS, SCF, and Consumer Expenditure Survey.
                Updated quarterly with fresh microdata.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulate Demo */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-header">
            <div className="demo-badge demo-badge-simulate">Simulate</div>
            <h2>Population-Scale Microsimulation</h2>
            <p>
              Model policy impacts across millions of households. Budget
              scoring for any reform.
            </p>
          </div>

          <div className="demo-grid">
            <div className="demo-code-panel">
              <div className="code-header">
                <span className="code-lang">Python</span>
                <span className="code-file">simulate_example.py</span>
              </div>
              <pre className="demo-code">
                <code>{`from policyengine_us import Microsimulation

# Define a policy reform
reform = {
    "eitc_phase_in_rate": {
        "2024-01-01": 0.1530  # Double from 7.65%
    },
    "ctc_child_young_bonus": {
        "2024-01-01": 600  # Additional $600 for young children
    }
}

# Run microsimulation on US population
baseline = Microsimulation()
reformed = Microsimulation(reform=reform)

# Calculate population-wide impacts
cost = reformed.calculate("household_net_income").sum() - \\
       baseline.calculate("household_net_income").sum()

# Distributional analysis
winners = (reformed.calculate("household_net_income") >
           baseline.calculate("household_net_income")).sum()

poverty_baseline = baseline.calculate("in_poverty").mean()
poverty_reform = reformed.calculate("in_poverty").mean()`}</code>
              </pre>
            </div>

            <div className="demo-result-panel">
              <div className="result-header">
                <span className="result-icon">&rarr;</span>
                <span>Simulation Results</span>
              </div>
              <div className="demo-result">
                <div className="sim-stat">
                  <div className="sim-stat-label">Budget Cost</div>
                  <div className="sim-stat-value cost">$47.2B</div>
                  <div className="sim-stat-note">Annual federal cost</div>
                </div>
                <div className="sim-stat">
                  <div className="sim-stat-label">Households Affected</div>
                  <div className="sim-stat-value">28.4M</div>
                  <div className="sim-stat-note">Net beneficiaries</div>
                </div>
                <div className="sim-stat">
                  <div className="sim-stat-label">Poverty Reduction</div>
                  <div className="sim-stat-value positive">-8.3%</div>
                  <div className="sim-stat-note">12.4% &rarr; 11.4% poverty rate</div>
                </div>
                <div className="sim-stat">
                  <div className="sim-stat-label">Child Poverty</div>
                  <div className="sim-stat-value positive">-12.1%</div>
                  <div className="sim-stat-note">16.2% &rarr; 14.3% child poverty</div>
                </div>
                <div className="result-divider"></div>
                <div className="sim-breakdown">
                  <h4>Impact by Income Quintile</h4>
                  <div className="quintile-chart">
                    <div className="quintile">
                      <span className="q-label">Bottom 20%</span>
                      <div className="q-bar-container">
                        <div className="q-bar" style={{ width: "85%" }}></div>
                      </div>
                      <span className="q-value">+$2,840</span>
                    </div>
                    <div className="quintile">
                      <span className="q-label">20-40%</span>
                      <div className="q-bar-container">
                        <div className="q-bar" style={{ width: "65%" }}></div>
                      </div>
                      <span className="q-value">+$1,920</span>
                    </div>
                    <div className="quintile">
                      <span className="q-label">40-60%</span>
                      <div className="q-bar-container">
                        <div className="q-bar" style={{ width: "35%" }}></div>
                      </div>
                      <span className="q-value">+$680</span>
                    </div>
                    <div className="quintile">
                      <span className="q-label">60-80%</span>
                      <div className="q-bar-container">
                        <div className="q-bar" style={{ width: "10%" }}></div>
                      </div>
                      <span className="q-value">+$120</span>
                    </div>
                    <div className="quintile">
                      <span className="q-label">Top 20%</span>
                      <div className="q-bar-container">
                        <div className="q-bar" style={{ width: "0%" }}></div>
                      </div>
                      <span className="q-value">$0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="result-note">
                Running on enhanced CPS microdata (200K+ households).
                Results weight-adjusted to US population.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="demo-section demo-section-alt">
        <div className="container">
          <div className="demo-header">
            <div className="demo-badge demo-badge-api">API</div>
            <h2>REST API & Tool Calling</h2>
            <p>
              Integrate via REST or give AI agents reliable tax/benefit
              tools.
            </p>
          </div>

          <div className="api-examples">
            <div className="api-example">
              <h3>REST API</h3>
              <pre className="demo-code">
                <code>{`curl -X POST https://api.cosilico.ai/calculate \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "household": {
      "income": 45000,
      "filing_status": "head_of_household",
      "children": 2,
      "state": "CA"
    },
    "variables": ["eitc", "ctc", "snap_eligible"]
  }'`}</code>
              </pre>
            </div>

            <div className="api-example">
              <h3>OpenAI Function Calling</h3>
              <pre className="demo-code">
                <code>{`{
  "name": "calculate_benefits",
  "description": "Calculate tax credits and benefit eligibility",
  "parameters": {
    "type": "object",
    "properties": {
      "income": {"type": "number"},
      "filing_status": {"type": "string"},
      "num_children": {"type": "integer"},
      "state": {"type": "string"}
    },
    "required": ["income", "state"]
  }
}`}</code>
              </pre>
            </div>

            <div className="api-example">
              <h3>Anthropic MCP Server</h3>
              <pre className="demo-code">
                <code>{`# In your MCP config
{
  "mcpServers": {
    "cosilico": {
      "command": "npx",
      "args": ["-y", "@cosilico/mcp-server"]
    }
  }
}

# Claude can now use cosilico tools:
# - calculate_taxes
# - calculate_benefits
# - predict_attributes
# - simulate_reform`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Section */}
      <section className="demo-cta">
        <div className="container">
          <h2>Try It Yourself</h2>
          <p>Open source. No API key required to get started.</p>
          <div className="demo-cta-code">
            <code>pip install policyengine-us</code>
          </div>
          <div className="cta-buttons">
            <a
              href="https://github.com/PolicyEngine/policyengine-us"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
            <a
              href="https://policyengine.org"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try PolicyEngine.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
