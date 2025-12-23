import React from "react";
import { Cite } from "./Citation";

export function ProblemSection() {
  return (
    <div className="thesis-content">
      <h2>1. The Problem</h2>
      <p className="problem-lead">
        Society is hard to optimize because nobody has a shared model to reason against.
      </p>
      <div className="problem-examples">
        <div className="problem-example">
          <h4>Congress</h4>
          <p>Debates policy with napkin math. No one knows who wins or loses until years later.</p>
        </div>
        <div className="problem-example">
          <h4>Banks</h4>
          <p>Model portfolio risk without knowing how policy changes will affect borrowers.</p>
        </div>
        <div className="problem-example">
          <h4>AI Agents</h4>
          <p>Hallucinate tax and benefit calculations that require statutory precision.</p>
        </div>
      </div>
      <div className="stat-callout">
        <span className="stat-number">67%</span>
        <span className="stat-context">
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
