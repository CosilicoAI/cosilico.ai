import React from "react";
import { Cite } from "./Citation";
import * as styles from "../../styles/thesis.css";

export function ProblemSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>1. The Problem</h2>
      <p className={styles.problemLead}>
        Society is hard to optimize because nobody has a shared model to reason against.
      </p>
      <div className={styles.problemExamples}>
        <div className={styles.problemExample}>
          <h4 className={styles.problemExampleTitle}>Congress</h4>
          <p className={styles.problemExampleText}>Debates policy with napkin math. No one knows who wins or loses until years later.</p>
        </div>
        <div className={styles.problemExample}>
          <h4 className={styles.problemExampleTitle}>Banks</h4>
          <p className={styles.problemExampleText}>Model portfolio risk without knowing how policy changes will affect borrowers.</p>
        </div>
        <div className={styles.problemExample}>
          <h4 className={styles.problemExampleTitle}>AI Agents</h4>
          <p className={styles.problemExampleText}>Hallucinate tax and benefit calculations that require statutory precision.</p>
        </div>
      </div>
      <div className={styles.statCallout}>
        <span className={styles.statNumber}>67%</span>
        <span className={styles.statContext}>
          GPT-4 accuracy on tax true/false questions<Cite id={1} />
        </span>
      </div>
      <p>
        Even the most capable AI models fail at policy calculations. The SARA benchmark<Cite id={1} /> evaluated GPT-4 on
        US income tax scenarios and found only <strong>67% accuracy</strong> on true/false tax questions—and only <strong>78% of calculations</strong> within 10% of correct liability.
      </p>
      <blockquote>
        "Today's LLMs cannot 'do taxes' on their own because tax
        calculations require 100% correctness. Today's models hallucinate."
        <cite>— Column Tax, 2024<Cite id={2} /></cite>
      </blockquote>
      <p>
        This isn't a training data problem. Tax law changes annually.
        State rules vary across 50 jurisdictions. Benefit eligibility depends
        on dozens of interacting variables. <strong>What we need is infrastructure—a simulation of society that anyone can query.</strong>
      </p>
    </div>
  );
}
