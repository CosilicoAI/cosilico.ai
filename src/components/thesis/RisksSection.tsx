import React from "react";
import { Cite } from "./Citation";
import * as styles from "../../styles/thesis.css";

export function RisksSection() {
  return (
    <div className={styles.thesisContent}>
      <h2>10. Risks & mitigations</h2>

      <div className={styles.risksGrid}>
        <div className={styles.riskCard}>
          <h4>Law changes constantly</h4>
          <p className={styles.riskQ}>Won't maintenance be overwhelming?</p>
          <p>Bi-temporal parameters track both effective dates and when we learned about changes. AI-assisted encoding accelerates updates. Ongoing maintenance is a moat, not a burden—it's what keeps competitors out.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>LLMs might improve</h4>
          <p className={styles.riskQ}>Won't AI eventually get this right?</p>
          <p>Deterministic tools will always be faster, auditable, and legally citable. LLMs will call tools—ours. The SARA benchmark<Cite id={1} /> shows 67% accuracy isn't a training data problem; it's a fundamental architecture mismatch.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>Single founder risk</h4>
          <p className={styles.riskQ}>Why no co-founder yet?</p>
          <p>Actively hiring co-founders. Seed capital will enable founding engineer hires. PolicyEngine has 50+ open source contributors—the community is the extended team.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>Enterprise sales are expensive</h4>
          <p className={styles.riskQ}>How do you compete with big sales teams?</p>
          <p>Developer-first, land and expand. Free tier lets developers prototype. Usage-based pricing scales with customers. Enterprise sales only for $100K+ deals.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>Open source commoditization</h4>
          <p className={styles.riskQ}>What stops someone from just using the free version?</p>
          <p>Cloud hosting, SLAs, enterprise features, and premium data create value. MongoDB<Cite id={14} />, Elastic<Cite id={15} />, GitLab<Cite id={16} /> all prove this model at billion-dollar scale.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>TurboTax competition</h4>
          <p className={styles.riskQ}>What about Intuit?</p>
          <p>TurboTax doesn't have a public API. They're consumer-facing, not infrastructure. Intuit's business model is selling to end users, not enabling competitors. We're Stripe to their payment processor.</p>
        </div>

        <div className={styles.riskCard}>
          <h4>Incumbents could adopt microsimulation</h4>
          <p className={styles.riskQ}>What stops IMPLAN or REMI from adding household-level models?</p>
          <p>Top-down I-O and bottom-up microsimulation are fundamentally different methodologies. Governments use microsimulation for policy scoring precisely because aggregate multipliers can't capture distributional effects<Cite id={32} />. Incumbents would have to rebuild from scratch—and opening their proprietary data would cannibalize $10-50K/yr subscriptions. Our open-source approach turns this into a structural advantage.</p>
        </div>
      </div>
    </div>
  );
}
