import Link from "next/link";
import { CosmosCanvas } from "@/components/home/cosmos-canvas";
import { ApiConsole } from "@/components/home/api-console";
import { StatsTicker } from "@/components/home/stats-ticker";

const PROOFS: Array<{
  num: string;
  metric: string;
  label: string;
  href: string;
}> = [
  { num: "01", metric: "4 / 4", label: "validation cases matched", href: "/validation" },
  { num: "02", metric: "$0.01", label: "comparison precision", href: "/validation" },
  { num: "03", metric: "109k", label: "statutory cross-references mapped", href: "/architecture" },
  { num: "04", metric: "100%", label: "open source stack · Apache-2.0", href: "/stack" },
];

const WEDGE: Array<{ tag: string; one: string; two: string }> = [
  { tag: "policy", one: "Distributional analysis", two: "without the spreadsheets" },
  { tag: "finance", one: "Policy → cash flow", two: "straight into risk models" },
  { tag: "ai", one: "Deterministic economic backend", two: "for agents and applications" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-v2">
        <div className="page-wrap hero-v2-wrap">
          <div className="hero-v2-copy">
            <span className="hero-v2-flag">
              <span className="hero-v2-flag-dot" aria-hidden />
              api.cosilico.ai
            </span>

            <h1 className="hero-v2-title">
              Society,
              <br />
              <em className="text-highlight">in silico.</em>
            </h1>

            <p className="hero-v2-sub">
              Household-level tax and benefit APIs. Deterministic answers, open
              source underneath.
            </p>

            <div className="hero-v2-actions">
              <Link href="/pricing" className="btn-primary">
                View offering
                <span aria-hidden>→</span>
              </Link>
              <a
                href="https://docs.cosilico.ai"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Docs
              </a>
            </div>
          </div>

          <div className="hero-v2-canvas">
            <CosmosCanvas />
          </div>
        </div>
      </section>

      <StatsTicker />

      <section className="section-block v2-section">
        <div className="page-wrap">
          <header className="v2-heading">
            <span className="v2-heading-num">01</span>
            <h2 className="v2-heading-title">
              One request, <em className="text-highlight">end to end.</em>
            </h2>
            <Link href="/playground" className="v2-heading-link">
              Playground →
            </Link>
          </header>

          <ApiConsole />
        </div>
      </section>

      <section className="section-block v2-section">
        <div className="page-wrap">
          <header className="v2-heading">
            <span className="v2-heading-num">02</span>
            <h2 className="v2-heading-title">
              Trust by <em className="text-highlight">artifact.</em>
            </h2>
            <Link href="/validation" className="v2-heading-link">
              Inspect report →
            </Link>
          </header>

          <ol className="proofs">
            {PROOFS.map((p) => (
              <li key={p.num} className="proof">
                <span className="proof-num">{p.num}</span>
                <span className="proof-metric">{p.metric}</span>
                <span className="proof-label">{p.label}</span>
                <Link
                  href={p.href}
                  className="proof-arrow"
                  aria-label={`${p.label} — more`}
                >
                  ↗
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-block v2-section">
        <div className="page-wrap">
          <header className="v2-heading">
            <span className="v2-heading-num">03</span>
            <h2 className="v2-heading-title">
              Built for <em className="text-highlight">operators.</em>
            </h2>
          </header>

          <ul className="wedge-v2">
            {WEDGE.map((w) => (
              <li key={w.tag} className="wedge-v2-row">
                <span className="wedge-v2-tag">{w.tag}</span>
                <span className="wedge-v2-line">
                  <span className="wedge-v2-one">{w.one}</span>
                  <span className="wedge-v2-two">{w.two}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block section-last closing-v2-section">
        <div className="page-wrap">
          <div className="closing-v2">
            <div className="closing-v2-mark" aria-hidden>
              <svg viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="cm-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-cyan)" />
                    <stop offset="60%" stopColor="var(--color-amber)" />
                    <stop offset="100%" stopColor="var(--color-coral)" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="55" fill="none" stroke="url(#cm-grad)" strokeWidth="0.6" />
                <circle cx="60" cy="60" r="42" fill="none" stroke="url(#cm-grad)" strokeWidth="0.5" opacity="0.7" />
                <polygon
                  points="60,22 82,34 82,58 60,70 38,58 38,34"
                  fill="rgba(124,226,207,0.06)"
                  stroke="var(--color-cyan)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="72,44 94,56 94,80 72,92 50,80 50,56"
                  fill="none"
                  stroke="var(--color-cyan-bright)"
                  strokeWidth="0.7"
                />
              </svg>
            </div>
            <p className="closing-v2-line">
              The ambition is large. The trust is{" "}
              <em className="text-highlight">earned, artifact by artifact.</em>
            </p>
            <div className="hero-v2-actions">
              <Link href="/pricing" className="btn-primary">
                View offering <span aria-hidden>→</span>
              </Link>
              <Link href="/playground" className="btn-ghost">
                Compose a request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
