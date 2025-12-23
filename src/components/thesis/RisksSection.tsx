import React from "react";
import { Cite } from "./Citation";

export function RisksSection() {
  return (
    <div className="thesis-content">
      <h2>10. Risks & Mitigations</h2>

      <div className="risks-grid">
        <div className="risk-card">
          <h4>Law changes constantly</h4>
          <p className="risk-q">Won't maintenance be overwhelming?</p>
          <p>Bi-temporal parameters track both effective dates and when we learned about changes. AI-assisted encoding accelerates updates. Ongoing maintenance is a moat, not a burden—it's what keeps competitors out.</p>
        </div>

        <div className="risk-card">
          <h4>LLMs might improve</h4>
          <p className="risk-q">Won't AI eventually get this right?</p>
          <p>Deterministic tools will always be faster, auditable, and legally citable. LLMs will call tools—ours. The SARA benchmark<Cite id={1} /> shows 67% accuracy isn't a training data problem; it's a fundamental architecture mismatch.</p>
        </div>

        <div className="risk-card">
          <h4>Single founder risk</h4>
          <p className="risk-q">Why no co-founder yet?</p>
          <p>Actively hiring co-founders. Seed capital will enable founding engineer hires. PolicyEngine has 50+ open source contributors—the community is the extended team.</p>
        </div>

        <div className="risk-card">
          <h4>Enterprise sales are expensive</h4>
          <p className="risk-q">How do you compete with big sales teams?</p>
          <p>Developer-first, land and expand. Free tier lets developers prototype. Usage-based pricing scales with customers. Enterprise sales only for $100K+ deals.</p>
        </div>

        <div className="risk-card">
          <h4>Open source commoditization</h4>
          <p className="risk-q">What stops someone from just using the free version?</p>
          <p>Cloud hosting, SLAs, enterprise features, and premium data create value. MongoDB<Cite id={14} />, Elastic<Cite id={15} />, GitLab<Cite id={16} /> all prove this model at billion-dollar scale.</p>
        </div>

        <div className="risk-card">
          <h4>TurboTax competition</h4>
          <p className="risk-q">What about Intuit?</p>
          <p>TurboTax doesn't have a public API. They're consumer-facing, not infrastructure. Intuit's business model is selling to end users, not enabling competitors. We're Stripe to their payment processor.</p>
        </div>
      </div>
    </div>
  );
}
