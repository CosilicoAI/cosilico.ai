import React from "react";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/popdgp.css";
import { XIcon } from "../components/icons";

// Architecture diagram as SVG-like components
const ArchitectureDiagram = () => (
  <div className={styles.architectureDiagram}>
    <div className={styles.diagramTitle}>Dynamic Population Synthesizer</div>

    {/* Data Ingestion Layer */}
    <div className={styles.diagramSection}>
      <div className={styles.sectionLabel}>Training Data</div>
      <div className={styles.dataSourcesRow}>
        <div className={styles.dataSource}>
          <div className={styles.dataSourceIcon}>SIPP</div>
          <div className={styles.dataSourceLabel}>Monthly Panel</div>
        </div>
        <div className={styles.dataSource}>
          <div className={styles.dataSourceIcon}>PSID</div>
          <div className={styles.dataSourceLabel}>Biennial Panel</div>
        </div>
        <div className={styles.dataSource}>
          <div className={styles.dataSourceIcon}>SCF</div>
          <div className={styles.dataSourceLabel}>Wealth X-sect</div>
        </div>
        <div className={styles.dataSource}>
          <div className={styles.dataSourceIcon}>PUF</div>
          <div className={styles.dataSourceLabel}>Tax Returns</div>
        </div>
        <div className={styles.dataSource}>
          <div className={styles.dataSourceIcon}>SOI</div>
          <div className={styles.dataSourceLabel}>Admin Targets</div>
        </div>
      </div>
      <div className={styles.flowArrow}>▼</div>
      <div className={styles.unifiedSchema}>
        <span>Unified Schema + Observation Masks</span>
      </div>
    </div>

    {/* Graph Construction */}
    <div className={styles.diagramSection}>
      <div className={styles.sectionLabel}>Dynamic Graph</div>
      <div className={styles.graphVisualization}>
        <div className={styles.timeStep}>
          <div className={styles.timeLabel}>t</div>
          <div className={styles.graphNode + " " + styles.householdNode}>H1</div>
          <div className={styles.graphEdges}>
            <div className={styles.personNode}>P1</div>
            <div className={styles.personNode}>P2</div>
            <div className={styles.personNode}>P3</div>
          </div>
        </div>
        <div className={styles.timeArrow}>→</div>
        <div className={styles.timeStep}>
          <div className={styles.timeLabel}>t+1</div>
          <div className={styles.graphNode + " " + styles.householdNode}>H1</div>
          <div className={styles.graphEdges}>
            <div className={styles.personNode}>P1</div>
            <div className={styles.personNode}>P2</div>
          </div>
          <div className={styles.eventLabel}>P3 leaves</div>
          <div className={styles.graphNode + " " + styles.householdNodeNew}>H2</div>
          <div className={styles.graphEdges}>
            <div className={styles.personNode + " " + styles.personMoved}>P3</div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.flowArrow}>▼</div>

    {/* Core Model */}
    <div className={styles.coreModelSection}>
      <div className={styles.sectionLabel}>Core Model</div>
      <div className={styles.modelComponents}>
        <div className={styles.modelComponent}>
          <div className={styles.componentIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <circle cx="5" cy="6" r="2" />
              <circle cx="19" cy="6" r="2" />
              <circle cx="5" cy="18" r="2" />
              <circle cx="19" cy="18" r="2" />
              <path d="M6.5 7.5L9.5 10M17.5 7.5L14.5 10M6.5 16.5L9.5 14M17.5 16.5L14.5 14" />
            </svg>
          </div>
          <div className={styles.componentTitle}>Graph Attention</div>
          <div className={styles.componentDesc}>
            Encodes household-person structure. Message passing captures within-HH correlations.
          </div>
        </div>

        <div className={styles.modelComponent}>
          <div className={styles.componentIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12h4l3-9 4 18 3-9h4" />
            </svg>
          </div>
          <div className={styles.componentTitle}>Temporal Transformer</div>
          <div className={styles.componentDesc}>
            Dual streams for persons & households with cross-attention over time.
          </div>
        </div>

        <div className={styles.modelComponent}>
          <div className={styles.componentIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className={styles.componentTitle}>Flow Decoder</div>
          <div className={styles.componentDesc}>
            Outputs full distributions, not point estimates. Handles multimodality & zero-inflation.
          </div>
        </div>

        <div className={styles.modelComponent}>
          <div className={styles.componentIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className={styles.componentTitle}>Event Predictor</div>
          <div className={styles.componentDesc}>
            Competing risks for life events: marriage, divorce, birth, death, moves.
          </div>
        </div>
      </div>
    </div>

    <div className={styles.flowArrow}>▼</div>

    {/* Event Execution */}
    <div className={styles.diagramSection}>
      <div className={styles.sectionLabel}>Event Execution</div>
      <div className={styles.eventsGrid}>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>MARRY</div>
          <div className={styles.eventDesc}>Merge households, combine assets, learned matching</div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>DIVORCE</div>
          <div className={styles.eventDesc}>Split household, divide assets, assign custody</div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>BIRTH</div>
          <div className={styles.eventDesc}>Create person node, add to household</div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>DEATH</div>
          <div className={styles.eventDesc}>Remove node, transfer assets to heirs</div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>LEAVE_HH</div>
          <div className={styles.eventDesc}>Form new household or join existing</div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>MOVE</div>
          <div className={styles.eventDesc}>Geographic relocation, state change</div>
        </div>
      </div>
    </div>

    <div className={styles.flowArrow}>▼</div>

    {/* Constraints */}
    <div className={styles.diagramSection}>
      <div className={styles.sectionLabel}>Constraints</div>
      <div className={styles.constraintsRow}>
        <div className={styles.constraintBox + " " + styles.hardConstraint}>
          <div className={styles.constraintLabel}>Hard</div>
          <ul>
            <li>age[t+1] = age[t] + dt</li>
            <li>Dead stay dead</li>
            <li>Children in household</li>
            <li>Married have spouse</li>
          </ul>
        </div>
        <div className={styles.constraintBox + " " + styles.softConstraint}>
          <div className={styles.constraintLabel}>Calibration</div>
          <ul>
            <li>IRS SOI income by AGI</li>
            <li>Census demographics</li>
            <li>CBO program rates</li>
            <li>Vital statistics</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={styles.flowArrow}>▼</div>

    {/* Output */}
    <div className={styles.diagramSection}>
      <div className={styles.sectionLabel}>Output</div>
      <div className={styles.outputTables}>
        <div className={styles.outputTable}>
          <div className={styles.tableName}>households</div>
          <div className={styles.tableFields}>hh_id, year, state, income, ...</div>
        </div>
        <div className={styles.outputTable}>
          <div className={styles.tableName}>persons</div>
          <div className={styles.tableFields}>person_id, year, age, income, wealth, ...</div>
        </div>
        <div className={styles.outputTable}>
          <div className={styles.tableName}>hh_person</div>
          <div className={styles.tableFields}>hh_id, person_id, year, relationship</div>
        </div>
      </div>
    </div>
  </div>
);

export default function PopdgpPage() {
  return (
    <PageLayout>
      <div className={styles.popdgp}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>COSILICO SYNTHESIS</div>
            <h1 className={styles.heroTitle}>popdgp</h1>
            <p className={styles.heroSubtitle}>
              Dynamic population synthesizer with hierarchical structure,
              temporal trajectories, and household composition changes.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>Graph Attention Networks</span>
              <span className={styles.pill}>Temporal Transformers</span>
              <span className={styles.pill}>Normalizing Flows</span>
              <span className={styles.pill}>Event-Driven Dynamics</span>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className={styles.whySection}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><XIcon size={24} /></div>
              <h3>Static Hierarchies</h3>
              <p>Existing synthesizers treat household→person as fixed. But people marry, divorce, have children, and move.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><XIcon size={24} /></div>
              <h3>Independent Trajectories</h3>
              <p>Modeling each person separately ignores within-household correlations. Spouse incomes are correlated.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><XIcon size={24} /></div>
              <h3>Deterministic Outputs</h3>
              <p>Point estimates miss uncertainty. Two similar people can have very different wealth trajectories.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><XIcon size={24} /></div>
              <h3>Partial Observations</h3>
              <p>SIPP has different variables than PSID than SCF. Can't just concatenate.</p>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className={styles.architectureSection}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <ArchitectureDiagram />
        </section>

        {/* Components Deep Dive */}
        <section className={styles.componentsSection}>
          <h2 className={styles.sectionTitle}>Components</h2>

          <div className={styles.componentDeepDive}>
            <div className={styles.componentHeader}>
              <h3>1. Graph Attention Encoder</h3>
              <span className={styles.componentTag}>Structure</span>
            </div>
            <div className={styles.componentContent}>
              <p>
                Encodes the household-person bipartite graph at each time step.
                Message passing between person nodes and household nodes captures
                within-household correlations that are lost when modeling persons independently.
              </p>
              <div className={styles.codeBlock}>
                <pre>{`Person Node:  [age, sex, race, edu, emp_status, income, ...]
HH Node:      [agg_income, housing_type, state, n_members, ...]
Edge:         [relationship_type, years_in_hh]

for layer in gat_layers:
    h_person = GAT(h_person, adj_matrix, h_household)
    h_household = pool(h_person[members])`}</pre>
              </div>
            </div>
          </div>

          <div className={styles.componentDeepDive}>
            <div className={styles.componentHeader}>
              <h3>2. Temporal Transformer</h3>
              <span className={styles.componentTag}>Dynamics</span>
            </div>
            <div className={styles.componentContent}>
              <p>
                Dual-stream transformer with separate paths for persons and households,
                connected by cross-attention. Each person attends to their household's
                history; each household attends to its members' histories.
              </p>
              <div className={styles.streamDiagram}>
                <div className={styles.stream}>
                  <div className={styles.streamLabel}>Person Stream</div>
                  <div className={styles.streamNodes}>
                    <span>P₀</span><span>→</span><span>P₁</span><span>→</span><span>P₂</span><span>→</span><span>...</span>
                  </div>
                </div>
                <div className={styles.crossAttention}>↕ Cross-Attention ↕</div>
                <div className={styles.stream}>
                  <div className={styles.streamLabel}>Household Stream</div>
                  <div className={styles.streamNodes}>
                    <span>H₀</span><span>→</span><span>H₁</span><span>→</span><span>H₂</span><span>→</span><span>...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.componentDeepDive}>
            <div className={styles.componentHeader}>
              <h3>3. Flow Decoder</h3>
              <span className={styles.componentTag}>Uncertainty</span>
            </div>
            <div className={styles.componentContent}>
              <p>
                Normalizing flow outputs full conditional distributions, not point estimates.
                Handles multimodal distributions (employed vs unemployed income),
                heavy tails (billionaires), and zero-inflation (capital gains).
              </p>
              <div className={styles.distributionViz}>
                <div className={styles.distExample}>
                  <div className={styles.distLabel}>Income</div>
                  <div className={styles.distShape + " " + styles.bimodal}></div>
                  <div className={styles.distNote}>Bimodal: employed vs not</div>
                </div>
                <div className={styles.distExample}>
                  <div className={styles.distLabel}>Wealth</div>
                  <div className={styles.distShape + " " + styles.heavyTail}></div>
                  <div className={styles.distNote}>Heavy right tail</div>
                </div>
                <div className={styles.distExample}>
                  <div className={styles.distLabel}>Cap Gains</div>
                  <div className={styles.distShape + " " + styles.zeroInflated}></div>
                  <div className={styles.distNote}>Zero-inflated</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.componentDeepDive}>
            <div className={styles.componentHeader}>
              <h3>4. Event Predictor + Matching</h3>
              <span className={styles.componentTag}>Transitions</span>
            </div>
            <div className={styles.componentContent}>
              <p>
                Competing risks model predicts life events. Some events (marriage)
                require matching—learned bipartite matching captures assortative patterns.
              </p>
              <div className={styles.eventProbs}>
                <div className={styles.eventProb}><span>STAY</span><span className={styles.probBar} style={{width: '92%'}}></span><span>0.92</span></div>
                <div className={styles.eventProb}><span>LEAVE_HH</span><span className={styles.probBar} style={{width: '3%'}}></span><span>0.03</span></div>
                <div className={styles.eventProb}><span>MARRY</span><span className={styles.probBar} style={{width: '1%'}}></span><span>0.01</span></div>
                <div className={styles.eventProb}><span>HAVE_CHILD</span><span className={styles.probBar} style={{width: '2%'}}></span><span>0.02</span></div>
                <div className={styles.eventProb}><span>DIE</span><span className={styles.probBar} style={{width: '0.5%'}}></span><span>0.005</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation */}
        <section className={styles.evalSection}>
          <h2 className={styles.sectionTitle}>Evaluation</h2>
          <p className={styles.sectionSubtitle}>
            <a href="/stack/popdgp/eval" className={styles.evalLink}>
              View live trajectory coverage evaluation →
            </a>
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricName}>Coverage</div>
              <div className={styles.metricDesc}>Fraction of real trajectories with nearby synthetic</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricName}>Transition Fidelity</div>
              <div className={styles.metricDesc}>Event rates match observed (marriage, divorce, etc.)</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricName}>HH Correlation</div>
              <div className={styles.metricDesc}>Spouse income correlation, intergenerational patterns</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricName}>Calibration</div>
              <div className={styles.metricDesc}>Match admin targets (IRS SOI, Census, CBO)</div>
            </div>
          </div>
        </section>

        {/* Implementation Phases */}
        <section className={styles.phasesSection}>
          <h2 className={styles.sectionTitle}>Implementation Phases</h2>
          <div className={styles.timeline}>
            <div className={styles.phase + " " + styles.phaseComplete}>
              <div className={styles.phaseMarker}>1</div>
              <div className={styles.phaseContent}>
                <h3>Static Graph</h3>
                <p>Single time period, HH-person structure, flow decoder</p>
              </div>
            </div>
            <div className={styles.phase + " " + styles.phaseCurrent}>
              <div className={styles.phaseMarker}>2</div>
              <div className={styles.phaseContent}>
                <h3>Simple Dynamics</h3>
                <p>Multi-period trajectories, deterministic aging, no composition changes</p>
              </div>
            </div>
            <div className={styles.phase}>
              <div className={styles.phaseMarker}>3</div>
              <div className={styles.phaseContent}>
                <h3>Events</h3>
                <p>Birth, death, marriage, divorce, household formation</p>
              </div>
            </div>
            <div className={styles.phase}>
              <div className={styles.phaseMarker}>4</div>
              <div className={styles.phaseContent}>
                <h3>Full system</h3>
                <p>Multi-survey fusion, complete events, calibration, geographic mobility</p>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className={styles.linksSection}>
          <div className={styles.linkCard}>
            <h3>GitHub</h3>
            <a href="https://github.com/CosilicoAI/popdgp" target="_blank" rel="noopener noreferrer">
              github.com/CosilicoAI/popdgp
            </a>
          </div>
          <div className={styles.linkCard}>
            <h3>Eval Dashboard</h3>
            <a href="/stack/popdgp/eval">
              /stack/popdgp/eval
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
