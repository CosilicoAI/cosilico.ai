import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { apiProducts, systemLayers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing — Cosilico",
  description: "Open-source stack. Managed runtime.",
};

export default function PricingPage() {
  return (
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Pricing"
          as="h1"
          title={<>Everything is open source. Pricing is for the managed runtime.</>}
          description="Cosilico should not charge for code access. It charges for hosted compute, fresh data operations, API ergonomics, access control, and operational convenience."
        />

        <div className="split-grid mt-8">
          <div className="panel p-6">
            <p className="section-kicker">Stack</p>
            <h2 className="panel-title">What ships as code</h2>
            <div className="ledger-list">
              {systemLayers.stack.map((item) => (
                <div key={item.title} className="ledger-item">
                  <p className="item-title">{item.title}</p>
                  <p className="item-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="section-kicker">Managed runtime</p>
            <h2 className="panel-title">What Cosilico runs for you</h2>
            <div className="ledger-list">
              {systemLayers.runtime.map((item) => (
                <div key={item.title} className="ledger-item">
                  <p className="item-title">{item.title}</p>
                  <p className="item-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="endpoint-grid mt-8">
          {apiProducts.map((product) => (
            <article key={product.endpoint} className="endpoint-card">
              <p className="story-index">{product.endpoint}</p>
              <h2 className="endpoint-title">{product.endpoint}</h2>
              <div className="endpoint-meta">
                <span className="endpoint-price">{product.price}</span>
                <span>{product.unit}</span>
              </div>
              <p className="endpoint-copy">{product.body}</p>
            </article>
          ))}
        </div>

        <div className="panel quote-panel mt-8">
          <p className="section-kicker">Pricing principle</p>
          <p className="quote-copy">
            Pay for speed, scale, freshness, and reliability. Not for source
            access.
          </p>
        </div>
      </div>
    </section>
  );
}
