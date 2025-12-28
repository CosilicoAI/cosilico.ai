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
