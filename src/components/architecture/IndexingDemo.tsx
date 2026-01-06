import React, { useState, useEffect } from "react";
import * as styles from "../../styles/architecture.css";
import { WarningIcon } from "../icons";

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
    <div className={styles.indexingDemo}>
      <div className={styles.demoHeader}>
        <span className={styles.demoTitle}>PARAMETER RESOLVER</span>
        <span className={`${styles.demoStatus} ${styles.demoStatusDemo}`}>● DEMO</span>
      </div>

      <div className={styles.demoBody}>
        <div className={styles.queryBuilder}>
          <div className={styles.queryLine}>
            <span className={styles.queryKeyword}>resolver</span>
            <span className={styles.queryDot}>.</span>
            <span className={styles.queryMethod}>get</span>
            <span className={styles.queryParen}>(</span>
          </div>
          <div className={`${styles.queryLine} ${styles.queryLineIndent}`}>
            <span className={styles.queryString}>"statute/26/32/b/2/A/earned_income_amount"</span>
            <span className={styles.queryComma}>,</span>
          </div>
          <div className={`${styles.queryLine} ${styles.queryLineIndent}`}>
            <span className={styles.queryParam}>year</span>
            <span className={styles.queryColon}>:</span>
            <span className={`${styles.queryValue} ${isAnimating ? styles.queryValueFlash : ""}`}>{year}</span>
            <span className={styles.queryComma}>,</span>
          </div>
          <div className={`${styles.queryLine} ${styles.queryLineIndent}`}>
            <span className={styles.queryParam}>n_children</span>
            <span className={styles.queryColon}>:</span>
            <span className={styles.queryValue}>0</span>
          </div>
          <div className={styles.queryLine}>
            <span className={styles.queryParen}>)</span>
          </div>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.controlGroup}>
            <label>TAX_YEAR</label>
            <div className={styles.buttonGroup}>
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

          <div className={styles.controlGroup}>
            <label>TIER_HINT</label>
            <div className={styles.buttonGroup}>
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

        <div className={styles.responseBlock}>
          <div className={styles.responseHeader}>
            <span>RESPONSE</span>
            <span className={styles.responseTime}>~2ms</span>
          </div>
          <div className={styles.responseBody}>
            <div className={styles.responseLine}>
              <span className={styles.responseBrace}>{"{"}</span>
            </div>
            <div className={`${styles.responseLine} ${styles.responseLineIndent}`}>
              <span className={styles.responseKey}>"value"</span>
              <span className={styles.responseColon}>:</span>
              <span className={`${styles.responseNumber} ${isAnimating ? styles.responseNumberFlash : ""}`}>
                {displayValue}
              </span>
              <span className={styles.responseComma}>,</span>
            </div>
            <div className={`${styles.responseLine} ${styles.responseLineIndent}`}>
              <span className={styles.responseKey}>"tier"</span>
              <span className={styles.responseColon}>:</span>
              <span className={`${styles.responseString} ${styles[`responseStringTier${effectiveTier.charAt(0).toUpperCase() + effectiveTier.slice(1)}` as keyof typeof styles]}`}>
                "{effectiveTier.toUpperCase()}"
              </span>
              <span className={styles.responseComma}>,</span>
            </div>
            <div className={`${styles.responseLine} ${styles.responseLineIndent}`}>
              <span className={styles.responseKey}>"source"</span>
              <span className={styles.responseColon}>:</span>
              <span className={styles.responseString}>
                "{effectiveTier === "published" ? "Rev. Proc. 2023-34" : `Calculated via §32(j)`}"
              </span>
            </div>
            <div className={styles.responseLine}>
              <span className={styles.responseBrace}>{"}"}</span>
            </div>
          </div>
        </div>

        {tier === "published" && yearValues.published === 0 && (
          <div className={styles.fallbackNotice}>
            <span className={styles.noticeIcon}><WarningIcon size={16} /></span>
            <span>No published value for {year} — automatic fallback to PROJECTED</span>
          </div>
        )}

        <div className={styles.tierExplanation}>
          <p>{tierDescriptions[effectiveTier]}</p>
        </div>

        <div className={styles.precedenceVisual}>
          <div className={styles.precedenceLabel}>PRECEDENCE</div>
          <div className={styles.precedenceChain}>
            <div className={`${styles.precedenceNode} ${effectiveTier === "published" ? styles.precedenceNodeActive : ""}`}>
              <span className={styles.nodeNum}>1</span>
              <span className={styles.nodeName}>PUB</span>
            </div>
            <div className={styles.precedenceConnector} />
            <div className={`${styles.precedenceNode} ${effectiveTier === "projected" ? styles.precedenceNodeActive : ""}`}>
              <span className={styles.nodeNum}>2</span>
              <span className={styles.nodeName}>PRJ</span>
            </div>
            <div className={styles.precedenceConnector} />
            <div className={`${styles.precedenceNode} ${effectiveTier === "calculated" ? styles.precedenceNodeActive : ""}`}>
              <span className={styles.nodeNum}>3</span>
              <span className={styles.nodeName}>CAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
