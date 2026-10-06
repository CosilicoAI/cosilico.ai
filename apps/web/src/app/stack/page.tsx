import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";
import { stackComponents, systemLayers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Stack — Cosilico",
  description: "The stack and managed runtime behind Cosilico.",
};

export default function StackPage() {
  return (
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Stack"
          as="h1"
          title={<>The stack and the runtime.</>}
          description="Cosilico only makes sense if the stack and the managed runtime are legible as separate responsibilities inside one open-source system."
        />

        <div className="stack-arch-link mt-8">
          <div>
            <p className="section-kicker">Architecture map</p>
            <h2>Arch now has a concrete place in the stack.</h2>
            <p>
              Source-backed target inputs live in Arch. The Microplex-US adapter
              turns them into canonical calibration targets while preserving
              PolicyEngine parity as a separate benchmark surface.
            </p>
          </div>
          <Link href="/stack/arch" className="btn-primary">
            Open /stack/arch
          </Link>
        </div>

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

        <div className="stack-grid mt-8">
          {stackComponents.map((component) => (
            <article key={component.name} className="stack-card">
              <p className="story-index" style={{ color: component.accent }}>
                {component.status}
              </p>
              <h2 className="stack-title">{component.name}</h2>
              <p className="stack-note">{component.note}</p>
              <p className="stack-copy">{component.description}</p>
              <div className="tag-row">
                {component.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
