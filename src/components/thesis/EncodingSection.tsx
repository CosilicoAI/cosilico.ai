import React from "react";

export function EncodingSection() {
  return (
    <div className="thesis-content">
      <h2>4. AI-Assisted Encoding</h2>
      <p>
        The traditional approach to encoding policy is manual translation: read the statute, write the code.
        This doesn't scale. Instead, we use <strong>existing implementations as verification oracles</strong> to
        train AI agents that learn to encode rules directly from legislation.
      </p>

      <div className="encoding-insight">
        <h3>The Insight</h3>
        <p>
          PolicyEngine + TAXSIM aren't just calculators—they're <strong>training data factories</strong>.
          We can generate unlimited (statute, scenario, expected_output) tuples and use them to train
          AI systems that write rules code.
        </p>
      </div>

      <div className="encoding-loop">
        <h3>Test-Driven Development at Scale</h3>
        <p>This isn't one-shot code generation. It's an iterative agentic loop:</p>
        <div className="loop-steps">
          <div className="loop-step">
            <span className="step-num">1</span>
            <span className="step-text">Read statute section</span>
          </div>
          <div className="loop-step">
            <span className="step-num">2</span>
            <span className="step-text">Generate candidate rule</span>
          </div>
          <div className="loop-step">
            <span className="step-num">3</span>
            <span className="step-text">Run against test cases from oracle</span>
          </div>
          <div className="loop-step">
            <span className="step-num">4</span>
            <span className="step-text">Examine failures, revise</span>
          </div>
          <div className="loop-step">
            <span className="step-num">5</span>
            <span className="step-text">Repeat until passing</span>
          </div>
        </div>
      </div>

      <div className="encoding-oracles">
        <h3>The Oracle Stack</h3>
        <div className="oracle-grid">
          <div className="oracle-card">
            <h4>PolicyEngine-US</h4>
            <p>Federal + 50 states, benefits programs</p>
          </div>
          <div className="oracle-card">
            <h4>PolicyEngine-UK</h4>
            <p>International validation, different tax system</p>
          </div>
          <div className="oracle-card">
            <h4>TAXSIM (NBER)</h4>
            <p>Academic gold standard, independent implementation</p>
          </div>
          <div className="oracle-card">
            <h4>IRS Examples</h4>
            <p>Official published scenarios</p>
          </div>
        </div>
        <p className="oracle-note">
          Disagreements between oracles surface edge cases and modeling choices—valuable signal, not noise.
        </p>
      </div>

      <div className="encoding-moat">
        <h3>Why This Changes the Moat</h3>
        <div className="moat-comparison">
          <div className="moat-old">
            <h4>Old Moat</h4>
            <ul>
              <li>Lines of code in rules engine</li>
              <li>Number of programs encoded</li>
              <li>Coverage of existing law</li>
            </ul>
          </div>
          <div className="moat-new">
            <h4>New Moat</h4>
            <ul>
              <li>Training infrastructure + verification harness</li>
              <li>Ability to encode any new program rapidly</li>
              <li>Speed of encoding new legislation</li>
            </ul>
          </div>
        </div>
        <p className="moat-conclusion">
          The <strong>training data factory</strong> becomes the asset, not the trained output.
          When new legislation passes, we encode it in days, not months.
        </p>
      </div>

      <div className="encoding-scale">
        <h3>Scaling Path</h3>
        <p>Once the system learns to encode US federal tax from statute + test cases, the same approach works for:</p>
        <div className="scale-grid">
          <div className="scale-item">State tax codes <span className="scale-mult">50x</span></div>
          <div className="scale-item">Benefits programs <span className="scale-mult">100+</span></div>
          <div className="scale-item">UK, Canada, EU <span className="scale-mult">Intl</span></div>
          <div className="scale-item">New legislation <span className="scale-mult">Realtime</span></div>
        </div>
      </div>

      <div className="encoding-technical">
        <a href="https://github.com/CosilicoAI/cosilico-engine/blob/master/docs/AI_ENCODING.md" target="_blank" rel="noopener noreferrer" className="technical-link">
          Technical Deep Dive: Reward Functions, Oracle Stack, Agent Architecture →
        </a>
      </div>
    </div>
  );
}
