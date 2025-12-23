import React from "react";

export function AskSection() {
  return (
    <div className="thesis-content">
      <h2>11. The Ask</h2>

      <div className="ask-container">
        <div className="ask-amount">
          <span className="ask-label">Seed Round</span>
          <span className="ask-value">$3-5M</span>
        </div>

        <div className="ask-details">
          <div className="ask-use">
            <h3>Use of Funds</h3>
            <div className="fund-bars">
              <div className="fund-bar">
                <div className="fund-fill" style={{ width: "50%" }}></div>
                <span className="fund-label">50% Engineering</span>
              </div>
              <div className="fund-bar">
                <div className="fund-fill" style={{ width: "25%" }}></div>
                <span className="fund-label">25% Data/ML</span>
              </div>
              <div className="fund-bar">
                <div className="fund-fill" style={{ width: "15%" }}></div>
                <span className="fund-label">15% Go-to-Market</span>
              </div>
              <div className="fund-bar">
                <div className="fund-fill" style={{ width: "10%" }}></div>
                <span className="fund-label">10% Operations</span>
              </div>
            </div>
          </div>

          <div className="ask-milestones">
            <h3>Milestones to Series A</h3>
            <ul>
              <li>10+ paying customers</li>
              <li>$1M+ ARR</li>
              <li>1-2 enterprise deals ($500K+)</li>
              <li>Multi-country coverage (US, UK, Canada)</li>
              <li>Proven accuracy at scale</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ask-projections">
        <h3>Revenue Path</h3>
        <table className="projections-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>ARR</th>
              <th>Customers</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Y1</td>
              <td>$500K</td>
              <td>5-10</td>
              <td>Product-market fit, first enterprise deal</td>
            </tr>
            <tr>
              <td>Y2</td>
              <td>$3M</td>
              <td>50+</td>
              <td>Self-serve launch, 2-3 enterprise deals</td>
            </tr>
            <tr>
              <td>Y3</td>
              <td>$10M</td>
              <td>200+</td>
              <td>Enterprise sales team, intl expansion</td>
            </tr>
            <tr>
              <td>Y4</td>
              <td>$30M</td>
              <td>500+</td>
              <td>Platform status, AI lab partnerships</td>
            </tr>
            <tr>
              <td>Y5</td>
              <td>$75M</td>
              <td>1000+</td>
              <td>Category leader</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
