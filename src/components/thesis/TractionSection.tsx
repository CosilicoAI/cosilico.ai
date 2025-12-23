import React from "react";

export function TractionSection() {
  return (
    <div className="thesis-content">
      <h2>8. Traction</h2>
      <p>We've already built the proof of concept at PolicyEngine.</p>

      <div className="traction-grid">
        <div className="traction-stat">
          <span className="traction-value">1M+</span>
          <span className="traction-label">simulations run</span>
        </div>
        <div className="traction-stat">
          <span className="traction-value">50+</span>
          <span className="traction-label">state tax systems</span>
        </div>
        <div className="traction-stat">
          <span className="traction-value">100+</span>
          <span className="traction-label">benefit programs</span>
        </div>
        <div className="traction-stat">
          <span className="traction-value">50+</span>
          <span className="traction-label">OSS contributors</span>
        </div>
      </div>

      <div className="traction-users">
        <h3>Used By</h3>
        <div className="user-grid">
          <div className="user-card">
            <h4>UK Government</h4>
            <p>Policy costing for budget proposals</p>
          </div>
          <div className="user-card">
            <h4>US Congress</h4>
            <p>Distributional analysis for tax reforms</p>
          </div>
          <div className="user-card">
            <h4>Think Tanks</h4>
            <p>Research on UBI, child allowances, tax reform</p>
          </div>
        </div>
      </div>

      <div className="lighthouse-section">
        <h3>Government as Lighthouse Customers</h3>
        <p>Government adoption creates downstream enterprise value:</p>
        <div className="lighthouse-grid">
          <div className="lighthouse-card">
            <h4>Credibility Signal</h4>
            <p>"If HM Treasury trusts this for budget scoring, it's accurate enough for our risk models."</p>
          </div>
          <div className="lighthouse-card">
            <h4>Regulatory Alignment</h4>
            <p>Banks want to model what government models. Same methodology = predictable regulatory outcomes.</p>
          </div>
          <div className="lighthouse-card">
            <h4>Policy Anticipation</h4>
            <p>Run the same scenarios government runs. Know how proposed legislation affects your portfolio before it passes.</p>
          </div>
          <div className="lighthouse-card">
            <h4>Compliance Defense</h4>
            <p>"We used the same methodology as [agency]" is a strong regulatory position.</p>
          </div>
        </div>
      </div>

      <div className="traction-coverage">
        <h3>Geographic Coverage</h3>
        <div className="coverage-grid">
          <div className="coverage-item coverage-live">
            <span className="coverage-flag">🇺🇸</span>
            <span className="coverage-status">Live</span>
            <span className="coverage-detail">Federal + 50 states</span>
          </div>
          <div className="coverage-item coverage-live">
            <span className="coverage-flag">🇬🇧</span>
            <span className="coverage-status">Live</span>
            <span className="coverage-detail">UK tax & benefits</span>
          </div>
          <div className="coverage-item coverage-progress">
            <span className="coverage-flag">🇨🇦</span>
            <span className="coverage-status">In Progress</span>
            <span className="coverage-detail">Canada (50% complete)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
