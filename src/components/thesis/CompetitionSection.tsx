import React from "react";
import { Cite } from "./Citation";
import { CapabilityCell } from "./Icons";
import { competitors, pricingComps } from "../../data/thesis";
import * as styles from "../../styles/thesis.css";

export function CompetitionSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>6. Competitive landscape</h2>
      <p>No one combines income tax + benefits + prediction + simulation.</p>

      <div className={styles.competitiveTableContainer}>
        <table className={styles.competitiveTable}>
          <thead>
            <tr>
              <th>Capability</th>
              {competitors.map(c => <th key={c.name}>{c.name}</th>)}
              <th className={styles.highlightCol}>Cosilico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income tax calculation</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.incomeTax} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Payroll tax (FICA, etc.)</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.payrollTax} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Benefits eligibility</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.benefits} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Attribute prediction</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.prediction} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Microsimulation</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.simulation} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Open source</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.openSource} /></td>)}
              <td className={styles.highlightCol}><CapabilityCell value={true} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.competitorNotes}>
        {competitors.map(c => (
          <div key={c.name} className={styles.competitorNote}>
            <h4>{c.name}{c.sourceId && <Cite id={c.sourceId} />}</h4>
            <p>{c.notes}</p>
          </div>
        ))}
      </div>

      <div className={styles.marketAdditional}>
        <h3>Adjacent: economic impact analysis</h3>
        <p>
          A $50-100M+ market dominated by input-output (I-O) multiplier models—IMPLAN<Cite id={28} />,
          REMI, RIMS II<Cite id={30} />, and Lightcast<Cite id={29} /> ($105M ARR).
          These tools estimate ripple effects of economic shocks (e.g., "a $50M film production
          in LA County creates N jobs") but rely on <strong>aggregate historical tax rates</strong>,
          not actual tax rules. They can't compute household-level fiscal impacts, distributional
          effects, or policy counterfactuals. No incumbent offers an MCP server or agent-friendly
          API—enterprise subscriptions and sales calls are still the norm. Cosilico is the
          microsimulation layer that makes their analyses precise.
        </p>
        <p>
          <strong>PE is betting on this market.</strong> Charlesbank ($19B AUM) acquired IMPLAN at
          a 12-15x revenue multiple in 2024<Cite id={28} />—well above typical vertical SaaS
          (8-10x)—citing growing government incentive programs (CHIPS Act, IRA) driving demand for
          impact quantification. KKR backed the EMSI + Burning Glass merger into Lightcast at $350M+<Cite id={29} />.
          Boathouse Capital funded IMPLAN's SaaS transformation in 2019 and fully exited at Charlesbank's
          entry. The thesis across deals: AI-driven automation will expand the buyer base far beyond
          today's ~1,000 sophisticated customers.
        </p>

        <h4>Two AI strategies</h4>
        <p>
          Incumbents like IMPLAN are building <strong>AI inside their walled garden</strong>—natural
          language querying over proprietary data, LLM-assisted narrative generation for Excel and
          PowerPoint exports, all running on AWS Bedrock with opt-in controls. This makes their
          existing UI easier for their ~1,000 expert economist customers. But their core models
          stay deterministic, their data stays locked, and their API stays gated behind enterprise
          subscriptions and sales calls. No MCP server, no function-calling-friendly endpoints,
          no composability with external tools.
        </p>
        <p>
          Cosilico takes the opposite approach: <strong>be the infrastructure AI agents call</strong>.
          Self-serve API at $0.02/call, structured JSON responses designed for programmatic consumption,
          open source core any framework can embed. Agents don't need natural language querying—they
          need reliable structured endpoints with clear schemas. The LLM is the UI; Cosilico is
          the backend. This opens economic analysis from ~1,000 expert users to every developer,
          policy analyst, and journalist who can describe what they want in plain language. An AI
          agent can call Cosilico for precise fiscal impacts, an I-O model for multiplier effects,
          and Census for demographics—all in one workflow. Walled gardens prevent this;
          open APIs enable it.
        </p>

        <h4>The validation gap</h4>
        <p>
          I-O models have <strong>never been systematically backtested</strong>. IMPLAN's own
          documentation states its results "cannot be used to predict or forecast future employment,
          labor income, or output." The academic literature is damning: ex-post studies of
          stadium and mega-event impacts routinely find actual effects are one-tenth of
          I-O predictions<Cite id={31} />. Researchers have shown that I-O multipliers
          systematically overestimate by ignoring substitution effects, macroeconomic
          feedbacks, and price adjustments<Cite id={32} />. The fiscal impact estimates are
          even weaker—built on average effective tax rates rather than actual statutory
          rules, with no validation against realized state or local revenue.
        </p>
        <p>
          This creates an opportunity for a <strong>category-defining proof point</strong>.
          Take historical economic events—a factory opening, a film production, a corporate
          relocation—and compare aggregate multiplier-based fiscal predictions against
          Cosilico's household-level microsimulation, then validate both against actual
          IRS and state revenue data. If bottom-up simulation from statutes predicts fiscal
          outcomes more accurately than top-down multipliers, the entire economic impact
          industry has to reckon with a new standard.
        </p>
      </div>

      <div className={styles.pricingComparison}>
        <h3>Competitive pricing analysis</h3>
        <p>Our pricing is informed by extensive market research across each product category.</p>

        {pricingComps.map(pc => (
          <div key={pc.category} className={styles.pricingCompCategory}>
            <h4>{pc.category}</h4>
            <div className={styles.pricingCompTable}>
              <div className={`${styles.pricingCompRow} ${styles.pricingCompHeader}`}>
                <span>Competitor</span>
                <span>Pricing</span>
                <span>Notes</span>
              </div>
              {pc.competitors.map(comp => (
                <div key={comp.name} className={styles.pricingCompRow}>
                  <span>{comp.name}{comp.sourceId && <Cite id={comp.sourceId} />}</span>
                  <span className={styles.pricingValue}>{comp.pricing}</span>
                  <span className={styles.pricingNotes}>{comp.notes}</span>
                </div>
              ))}
              <div className={`${styles.pricingCompRow} ${styles.pricingCompCosilico}`}>
                <span><strong>Cosilico</strong></span>
                <span className={`${styles.pricingValue} ${styles.cosilicoPrice}`}>{pc.cosilicoPricing}</span>
                <span className={`${styles.pricingNotes} ${styles.cosilicoAdvantage}`}>{pc.cosilicoAdvantage}</span>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.pricingPhilosophy}>
          <h4>Open source + paid insights</h4>
          <p>
            Everything is open source—the rules engine, datasets, even the AI generator.
            You're not paying for code; you're paying for <strong>computed insights</strong>:
            predictions from calibrated models, simulations at population scale, and freshness
            from real-time economic signals.
          </p>
        </div>
      </div>
    </div>
  );
}
