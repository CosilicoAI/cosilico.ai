import React from "react";
import PageLayout from "../components/PageLayout";
import { styles } from "../styles/experiment.css";
import { XIcon, CheckIcon, WarningIcon } from "../components/icons";

// Current agent configuration - pulled from cosilico-encoder
const SYSTEM_PROMPT = `Encode tax law into .rac code that matches the oracle.

Write code, pass it to execute_dsl() to test, validate_oracle() to compare with PolicyEngine.`;

const USER_MESSAGE_TEMPLATE = `Target: {oracle_summary}

Write .rac code for '{variable_name}', then call execute_dsl() and validate_oracle().

Spec: read_file("docs/RAC_SPEC.md", "engine")`;

const TOOLS_MINIMAL = [
  {
    name: "read_file",
    description: 'Read a file. Use \'engine\' repo for DSL spec at \'docs/RAC_SPEC.md\'',
  },
  {
    name: "query_statute",
    description: "Get statute text. E.g., query_statute(26, '32(a)(1)') for EITC",
  },
  {
    name: "execute_dsl",
    description: "Parse and run .rac code. Pass your code as a string.",
  },
  {
    name: "validate_oracle",
    description: "Compare your code output against PolicyEngine. Returns accuracy.",
  },
  {
    name: "submit_encoding",
    description: "Submit final code when accuracy >= 95%",
  },
];

const AVAILABLE_RESOURCES = [
  {
    name: "RAC_SPEC.md",
    path: "cosilico-engine/docs/RAC_SPEC.md",
    description: "Full .rac format specification with examples",
    size: "~15KB",
  },
  {
    name: "atlas.db",
    path: "cosilico-atlas/atlas.db",
    description: "SQLite database with USC statute text",
    access: "via query_statute() tool",
  },
  {
    name: "PolicyEngine-US",
    path: "external API",
    description: "Oracle for validation",
    access: "via validate_oracle() tool",
  },
];

const ExperimentPage: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.experimentPage}>
        <div className={styles.experimentContainer}>
        <header className={styles.experimentHeader}>
          <h1>Experiment: AlphaLaw encoding</h1>
          <p className={styles.subtitle}>
            Minimal prompting approach to statute encoding
          </p>
        </header>

        <section className={styles.section}>
          <h2>Current agent configuration</h2>

          <div className={styles.configCard}>
            <h3>System prompt</h3>
            <p className={styles.configNote}>
              AlphaLaw style: minimal instruction, learn from reward signals
            </p>
            <pre className={styles.codeBlock}>{SYSTEM_PROMPT}</pre>
            <div className={styles.configStats}>
              <span className={styles.stat}>{SYSTEM_PROMPT.split('\n').length} lines</span>
              <span className={styles.stat}>{SYSTEM_PROMPT.length} chars</span>
            </div>
          </div>

          <div className={styles.configCard}>
            <h3>User message template</h3>
            <p className={styles.configNote}>
              Sent at start of each encoding task
            </p>
            <pre className={styles.codeBlock}>{USER_MESSAGE_TEMPLATE}</pre>
            <div className={styles.observation}>
              <span className={styles.observationLabel}>Key observation:</span>
              The spec is a <strong>pointer</strong>, not injected.
              Agent must actively call read_file() to see it.
            </div>
          </div>

          <div className={styles.configCard}>
            <h3>Available tools</h3>
            <p className={styles.configNote}>
              TOOLS_MINIMAL - focused set for encoding
            </p>
            <div className={styles.toolsList}>
              {TOOLS_MINIMAL.map((tool) => (
                <div key={tool.name} className={styles.toolItem}>
                  <code className={styles.toolName}>{tool.name}()</code>
                  <span className={styles.toolDesc}>{tool.description}</span>
                </div>
              ))}
            </div>
            <div className={styles.observationWarning}>
              <span className={styles.observationLabel}>Missing:</span>
              <code>init_rac()</code> tool not in TOOLS_MINIMAL -
              agent can't easily discover subsection structure
            </div>
          </div>

          <div className={styles.configCard}>
            <h3>Available resources</h3>
            <p className={styles.configNote}>
              What the agent CAN access (if it chooses to)
            </p>
            <table className={styles.resourcesTable}>
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Path</th>
                  <th>Description</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                {AVAILABLE_RESOURCES.map((resource) => (
                  <tr key={resource.name}>
                    <td><code>{resource.name}</code></td>
                    <td className={styles.pathCell}>{resource.path}</td>
                    <td>{resource.description}</td>
                    <td>{resource.access || "read_file()"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Latest run: 26 USC 63 (standard deduction)</h2>

          <div className={styles.resultCardFailure}>
            <div className={styles.resultHeader}>
              <span className={styles.resultStatus}><XIcon size={16} /> Failed</span>
              <span className={styles.resultAccuracy}>0% accuracy</span>
            </div>

            <div className={styles.resultDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Iterations:</span>
                <span className={styles.detailValue}>10 (max)</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Tokens:</span>
                <span className={styles.detailValue}>26,004</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Cost:</span>
                <span className={styles.detailValue}>$0.031</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Model:</span>
                <span className={styles.detailValue}>Claude Haiku 4.5</span>
              </div>
            </div>

            <div>
              <h4>Generated code:</h4>
              <pre className={styles.codeBlockEmpty}># Empty encoding</pre>
            </div>

            <div>
              <h4>What went wrong:</h4>
              <ul className={styles.analysisList}>
                <li>Agent did NOT read the RAC_SPEC.md (only 2 tool calls)</li>
                <li>No <code>text:</code> field in output</li>
                <li>Targeted whole section, not subsection</li>
                <li>Minimal prompt insufficient for Haiku to infer format</li>
              </ul>
            </div>
          </div>

          <div className={styles.toolCallsSection}>
            <h4>Tool calls made:</h4>
            <ol className={styles.toolCallsList}>
              <li>
                <code>read_file("docs/RAC_SPEC.md", "engine")</code>
                <span className={styles.toolCallNote}><CheckIcon size={14} /> Read the spec</span>
              </li>
              <li>
                <code>query_statute(26, "63")</code>
                <span className={styles.toolCallNote}><WarningIcon size={14} /> Whole section, not subsection</span>
              </li>
            </ol>
            <p className={styles.observation}>
              Only 2 tool calls in 10 iterations. Agent gave up quickly.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Proposed system improvements</h2>
          <p className={styles.sectionNote}>
            From <a href="https://github.com/CosilicoAI/cosilico-encoder/pull/2">cosilico-encoder PR #2</a>
          </p>

          <div className={styles.improvementList}>
            <div className={styles.improvement}>
              <span className={styles.improvementTypePrompt}>prompt</span>
              <span className={styles.improvementTitle}>Add .rac format requirements to system prompt</span>
              <span className={styles.improvementImpact}>Text fidelity 0% → 70%</span>
            </div>
            <div className={styles.improvement}>
              <span className={styles.improvementTypeTool}>tool</span>
              <span className={styles.improvementTitle}>Add init_rac() to TOOLS_MINIMAL</span>
              <span className={styles.improvementImpact}>Subsection targeting 0% → 80%</span>
            </div>
            <div className={styles.improvement}>
              <span className={styles.improvementTypePrompt}>prompt</span>
              <span className={styles.improvementTitle}>Add workflow steps (1-5) to prompt</span>
              <span className={styles.improvementImpact}>Tool efficiency improves</span>
            </div>
            <div className={styles.improvement}>
              <span className={styles.improvementTypePrompt}>prompt</span>
              <span className={styles.improvementTitle}>Add example .rac code</span>
              <span className={styles.improvementImpact}>Empty encodings reduce 100% → 10%</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Related PRs</h2>
          <ul className={styles.linksList}>
            <li>
              <a href="https://github.com/CosilicoAI/cosilico-us/pull/4">
                cosilico-us PR #4
              </a> - Encoding attempt (empty)
            </li>
            <li>
              <a href="https://github.com/CosilicoAI/cosilico-encoder/pull/2">
                cosilico-encoder PR #2
              </a> - System improvements proposed
            </li>
          </ul>
        </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExperimentPage;
