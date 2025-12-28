import React from "react";
import PageLayout from "../components/PageLayout";
import "./ExperimentPage.css";

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
    name: "lawarchive.db",
    path: "cosilico-lawarchive/lawarchive.db",
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
      <div className="experiment-page">
        <header className="experiment-header">
          <h1>Experiment: AlphaLaw Encoding</h1>
          <p className="subtitle">
            Minimal prompting approach to statute encoding
          </p>
        </header>

        <section className="config-section">
          <h2>Current Agent Configuration</h2>

          <div className="config-card">
            <h3>System Prompt</h3>
            <p className="config-note">
              AlphaLaw style: minimal instruction, learn from reward signals
            </p>
            <pre className="code-block">{SYSTEM_PROMPT}</pre>
            <div className="config-stats">
              <span className="stat">{SYSTEM_PROMPT.split('\n').length} lines</span>
              <span className="stat">{SYSTEM_PROMPT.length} chars</span>
            </div>
          </div>

          <div className="config-card">
            <h3>User Message Template</h3>
            <p className="config-note">
              Sent at start of each encoding task
            </p>
            <pre className="code-block">{USER_MESSAGE_TEMPLATE}</pre>
            <div className="observation">
              <span className="label">Key observation:</span>
              The spec is a <strong>pointer</strong>, not injected.
              Agent must actively call read_file() to see it.
            </div>
          </div>

          <div className="config-card">
            <h3>Available Tools</h3>
            <p className="config-note">
              TOOLS_MINIMAL - focused set for encoding
            </p>
            <div className="tools-list">
              {TOOLS_MINIMAL.map((tool) => (
                <div key={tool.name} className="tool-item">
                  <code className="tool-name">{tool.name}()</code>
                  <span className="tool-desc">{tool.description}</span>
                </div>
              ))}
            </div>
            <div className="observation warning">
              <span className="label">Missing:</span>
              <code>init_rac()</code> tool not in TOOLS_MINIMAL -
              agent can't easily discover subsection structure
            </div>
          </div>

          <div className="config-card">
            <h3>Available Resources</h3>
            <p className="config-note">
              What the agent CAN access (if it chooses to)
            </p>
            <table className="resources-table">
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
                    <td className="path">{resource.path}</td>
                    <td>{resource.description}</td>
                    <td>{resource.access || "read_file()"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="results-section">
          <h2>Latest Run: 26 USC 63 (Standard Deduction)</h2>

          <div className="result-card failure">
            <div className="result-header">
              <span className="status">❌ Failed</span>
              <span className="accuracy">0% accuracy</span>
            </div>

            <div className="result-details">
              <div className="detail">
                <span className="label">Iterations:</span>
                <span className="value">10 (max)</span>
              </div>
              <div className="detail">
                <span className="label">Tokens:</span>
                <span className="value">26,004</span>
              </div>
              <div className="detail">
                <span className="label">Cost:</span>
                <span className="value">$0.031</span>
              </div>
              <div className="detail">
                <span className="label">Model:</span>
                <span className="value">Claude Haiku 4.5</span>
              </div>
            </div>

            <div className="result-output">
              <h4>Generated Code:</h4>
              <pre className="code-block empty"># Empty encoding</pre>
            </div>

            <div className="result-analysis">
              <h4>What Went Wrong:</h4>
              <ul>
                <li>Agent did NOT read the RAC_SPEC.md (only 2 tool calls)</li>
                <li>No <code>text:</code> field in output</li>
                <li>Targeted whole section, not subsection</li>
                <li>Minimal prompt insufficient for Haiku to infer format</li>
              </ul>
            </div>
          </div>

          <div className="tool-calls-section">
            <h4>Tool Calls Made:</h4>
            <ol className="tool-calls">
              <li>
                <code>read_file("docs/RAC_SPEC.md", "engine")</code>
                <span className="note">✓ Read the spec</span>
              </li>
              <li>
                <code>query_statute(26, "63")</code>
                <span className="note">⚠️ Whole section, not subsection</span>
              </li>
            </ol>
            <p className="observation">
              Only 2 tool calls in 10 iterations. Agent gave up quickly.
            </p>
          </div>
        </section>

        <section className="improvements-section">
          <h2>Proposed System Improvements</h2>
          <p className="section-note">
            From <a href="https://github.com/CosilicoAI/cosilico-encoder/pull/2">cosilico-encoder PR #2</a>
          </p>

          <div className="improvement-list">
            <div className="improvement">
              <span className="type prompt">prompt</span>
              <span className="title">Add .rac format requirements to system prompt</span>
              <span className="impact">Text fidelity 0% → 70%</span>
            </div>
            <div className="improvement">
              <span className="type tool">tool</span>
              <span className="title">Add init_rac() to TOOLS_MINIMAL</span>
              <span className="impact">Subsection targeting 0% → 80%</span>
            </div>
            <div className="improvement">
              <span className="type prompt">prompt</span>
              <span className="title">Add workflow steps (1-5) to prompt</span>
              <span className="impact">Tool efficiency improves</span>
            </div>
            <div className="improvement">
              <span className="type prompt">prompt</span>
              <span className="title">Add example .rac code</span>
              <span className="impact">Empty encodings reduce 100% → 10%</span>
            </div>
          </div>
        </section>

        <section className="links-section">
          <h2>Related PRs</h2>
          <ul>
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
    </PageLayout>
  );
};

export default ExperimentPage;
