import React, { useState, useEffect } from "react";

export function IndexingDemo() {
  const [year, setYear] = useState(2024);
  const [tier, setTier] = useState<"published" | "projected" | "calculated">("published");
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate different tier values
  const values: Record<number, Record<string, number>> = {
    2024: { published: 7840, projected: 7840, calculated: 7840 },
    2025: { published: 0, projected: 8050, calculated: 8050 },
    2030: { published: 0, projected: 9200, calculated: 9180 },
  };

  const tierDescriptions = {
    published: "Official IRS value from Rev. Proc.",
    projected: "Our calculation using CBO forecasts",
    calculated: "On-the-fly from base year × index ratio",
  };

  const yearValues = values[year] || values[2024];
  const displayValue = tier === "published" && yearValues.published === 0
    ? yearValues.projected
    : yearValues[tier];
  const effectiveTier = tier === "published" && yearValues.published === 0
    ? "projected"
    : tier;

  // Trigger animation on value change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [year, tier]);

  return (
    <div className="indexing-demo">
      <div className="demo-header">
        <span className="demo-title">PARAMETER RESOLVER</span>
        <span className="demo-status demo">● DEMO</span>
      </div>

      <div className="demo-body">
        <div className="query-builder">
          <div className="query-line">
            <span className="query-keyword">resolver</span>
            <span className="query-dot">.</span>
            <span className="query-method">get</span>
            <span className="query-paren">(</span>
          </div>
          <div className="query-line indent">
            <span className="query-string">"statute/26/32/b/2/A/earned_income_amount"</span>
            <span className="query-comma">,</span>
          </div>
          <div className="query-line indent">
            <span className="query-param">year</span>
            <span className="query-colon">:</span>
            <span className={`query-value ${isAnimating ? "flash" : ""}`}>{year}</span>
            <span className="query-comma">,</span>
          </div>
          <div className="query-line indent">
            <span className="query-param">n_children</span>
            <span className="query-colon">:</span>
            <span className="query-value">0</span>
          </div>
          <div className="query-line">
            <span className="query-paren">)</span>
          </div>
        </div>

        <div className="controls-row">
          <div className="control-group">
            <label>TAX_YEAR</label>
            <div className="button-group">
              {[2024, 2025, 2030].map((y) => (
                <button
                  key={y}
                  className={year === y ? "active" : ""}
                  onClick={() => setYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>TIER_HINT</label>
            <div className="button-group">
              {(["published", "projected", "calculated"] as const).map((t) => (
                <button
                  key={t}
                  className={tier === t ? "active" : ""}
                  onClick={() => setTier(t)}
                >
                  {t.slice(0, 4).toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="response-block">
          <div className="response-header">
            <span>RESPONSE</span>
            <span className="response-time">~2ms</span>
          </div>
          <div className="response-body">
            <div className="response-line">
              <span className="response-brace">{"{"}</span>
            </div>
            <div className="response-line indent">
              <span className="response-key">"value"</span>
              <span className="response-colon">:</span>
              <span className={`response-number ${isAnimating ? "flash" : ""}`}>
                {displayValue}
              </span>
              <span className="response-comma">,</span>
            </div>
            <div className="response-line indent">
              <span className="response-key">"tier"</span>
              <span className="response-colon">:</span>
              <span className={`response-string tier-${effectiveTier}`}>
                "{effectiveTier.toUpperCase()}"
              </span>
              <span className="response-comma">,</span>
            </div>
            <div className="response-line indent">
              <span className="response-key">"source"</span>
              <span className="response-colon">:</span>
              <span className="response-string">
                "{effectiveTier === "published" ? "Rev. Proc. 2023-34" : `Calculated via §32(j)`}"
              </span>
            </div>
            <div className="response-line">
              <span className="response-brace">{"}"}</span>
            </div>
          </div>
        </div>

        {tier === "published" && yearValues.published === 0 && (
          <div className="fallback-notice">
            <span className="notice-icon">⚠</span>
            <span>No published value for {year} — automatic fallback to PROJECTED</span>
          </div>
        )}

        <div className="tier-explanation">
          <p>{tierDescriptions[effectiveTier]}</p>
        </div>

        <div className="precedence-visual">
          <div className="precedence-label">PRECEDENCE</div>
          <div className="precedence-chain">
            <div className={`precedence-node ${effectiveTier === "published" ? "active" : ""}`}>
              <span className="node-num">1</span>
              <span className="node-name">PUB</span>
            </div>
            <div className="precedence-connector" />
            <div className={`precedence-node ${effectiveTier === "projected" ? "active" : ""}`}>
              <span className="node-num">2</span>
              <span className="node-name">PRJ</span>
            </div>
            <div className="precedence-connector" />
            <div className={`precedence-node ${effectiveTier === "calculated" ? "active" : ""}`}>
              <span className="node-num">3</span>
              <span className="node-name">CAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
