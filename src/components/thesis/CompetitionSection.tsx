import React from "react";
import { Cite } from "./Citation";
import { CapabilityCell } from "./Icons";
import { competitors, pricingComps } from "../../data/thesis";

export function CompetitionSection() {
  return (
    <div className="thesis-content">
      <h2>6. Competitive Landscape</h2>
      <p>No one combines income tax + benefits + prediction + simulation.</p>

      <div className="competitive-table-container">
        <table className="competitive-table">
          <thead>
            <tr>
              <th>Capability</th>
              {competitors.map(c => <th key={c.name}>{c.name}</th>)}
              <th className="highlight-col">Cosilico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income tax calculation</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.incomeTax} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Payroll tax (FICA, etc.)</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.payrollTax} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Benefits eligibility</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.benefits} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Attribute prediction</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.prediction} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Microsimulation</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.simulation} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
            <tr>
              <td>Open source</td>
              {competitors.map(c => <td key={c.name}><CapabilityCell value={c.openSource} /></td>)}
              <td className="highlight-col"><CapabilityCell value={true} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="competitor-notes">
        {competitors.map(c => (
          <div key={c.name} className="competitor-note">
            <h4>{c.name}{c.sourceId && <Cite id={c.sourceId} />}</h4>
            <p>{c.notes}</p>
          </div>
        ))}
      </div>

      <div className="pricing-comparison">
        <h3>Competitive Pricing Analysis</h3>
        <p>Our pricing is informed by extensive market research across each product category.</p>

        {pricingComps.map(pc => (
          <div key={pc.category} className="pricing-comp-category">
            <h4>{pc.category}</h4>
            <div className="pricing-comp-table">
              <div className="pricing-comp-row pricing-comp-header">
                <span>Competitor</span>
                <span>Pricing</span>
                <span>Notes</span>
              </div>
              {pc.competitors.map(comp => (
                <div key={comp.name} className="pricing-comp-row">
                  <span>{comp.name}{comp.sourceId && <Cite id={comp.sourceId} />}</span>
                  <span className="pricing-value">{comp.pricing}</span>
                  <span className="pricing-notes">{comp.notes}</span>
                </div>
              ))}
              <div className="pricing-comp-row pricing-comp-cosilico">
                <span><strong>Cosilico</strong></span>
                <span className="pricing-value cosilico-price">{pc.cosilicoPricing}</span>
                <span className="pricing-notes cosilico-advantage">{pc.cosilicoAdvantage}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="pricing-philosophy">
          <h4>Open Source + Paid Insights</h4>
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
