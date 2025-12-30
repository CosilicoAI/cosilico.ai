import React from "react";
import * as styles from "../../styles/thesis.css";

export function EncodingSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>4. AI-assisted encoding</h2>
      <p>
        The traditional approach to encoding policy is manual translation: read the statute, write the code.
        This doesn't scale. Instead, we use <strong>existing implementations as verification oracles</strong> to
        train AI agents that learn to encode rules directly from legislation.
      </p>

      <div className={styles.encodingInsight}>
        <h3>The insight</h3>
        <p>
          PolicyEngine + TAXSIM aren't just calculators—they're <strong>training data factories</strong>.
          We can generate unlimited (statute, scenario, expected_output) tuples and use them to train
          AI systems that write rules code.
        </p>
      </div>

      <div className={styles.encodingLoop}>
        <h3>Test-driven development at scale</h3>
        <p>This isn't one-shot code generation. It's an iterative agentic loop:</p>
        <div className={styles.loopSteps}>
          <div className={styles.loopStep}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepText}>Read statute section</span>
          </div>
          <div className={styles.loopStep}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepText}>Generate candidate rule</span>
          </div>
          <div className={styles.loopStep}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepText}>Run against test cases from oracle</span>
          </div>
          <div className={styles.loopStep}>
            <span className={styles.stepNum}>4</span>
            <span className={styles.stepText}>Examine failures, revise</span>
          </div>
          <div className={styles.loopStep}>
            <span className={styles.stepNum}>5</span>
            <span className={styles.stepText}>Repeat until passing</span>
          </div>
        </div>
      </div>

      <div className={styles.encodingOracles}>
        <h3>The oracle stack</h3>
        <div className={styles.oracleGrid}>
          <div className={styles.oracleCard}>
            <h4>PolicyEngine-US</h4>
            <p>Federal + 50 states, benefits programs</p>
          </div>
          <div className={styles.oracleCard}>
            <h4>PolicyEngine-UK</h4>
            <p>International validation, different tax system</p>
          </div>
          <div className={styles.oracleCard}>
            <h4>TAXSIM (NBER)</h4>
            <p>Academic gold standard, independent implementation</p>
          </div>
          <div className={styles.oracleCard}>
            <h4>IRS examples</h4>
            <p>Official published scenarios</p>
          </div>
        </div>
        <p className={styles.oracleNote}>
          Disagreements between oracles surface edge cases and modeling choices—valuable signal, not noise.
        </p>
      </div>

      <div className={styles.encodingMoat}>
        <h3>Why this changes the moat</h3>
        <div className={styles.moatComparison}>
          <div className={styles.moatOld}>
            <h4>Old moat</h4>
            <ul>
              <li>Lines of code in rules engine</li>
              <li>Number of programs encoded</li>
              <li>Coverage of existing law</li>
            </ul>
          </div>
          <div className={styles.moatNew}>
            <h4>New moat</h4>
            <ul>
              <li>Training infrastructure + verification harness</li>
              <li>Ability to encode any new program rapidly</li>
              <li>Speed of encoding new legislation</li>
            </ul>
          </div>
        </div>
        <p className={styles.moatConclusion}>
          The <strong>training data factory</strong> becomes the asset, not the trained output.
          When new legislation passes, we encode it in days, not months.
        </p>
      </div>

      <div className={styles.encodingScale}>
        <h3>Scaling path</h3>
        <p>Once the system learns to encode US federal tax from statute + test cases, the same approach works for:</p>
        <div className={styles.scaleGrid}>
          <div className={styles.scaleItem}>State tax codes <span className={styles.scaleMult}>50x</span></div>
          <div className={styles.scaleItem}>Benefits programs <span className={styles.scaleMult}>100+</span></div>
          <div className={styles.scaleItem}>UK, Canada, EU <span className={styles.scaleMult}>Intl</span></div>
          <div className={styles.scaleItem}>New legislation <span className={styles.scaleMult}>Realtime</span></div>
        </div>
      </div>

      <div className={styles.encodingTechnical}>
        <a href="https://github.com/CosilicoAI/cosilico-engine/blob/master/docs/AI_ENCODING.md" target="_blank" rel="noopener noreferrer" className={styles.technicalLink}>
          Technical deep dive: reward functions, oracle stack, agent architecture →
        </a>
      </div>
    </div>
  );
}
