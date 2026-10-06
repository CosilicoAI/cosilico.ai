import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Architecture", href: "/architecture" },
      { label: "Microplex", href: "/microplex" },
      { label: "Validation", href: "/validation" },
      { label: "Pricing", href: "/pricing" },
      { label: "Playground", href: "/playground" },
    ],
  },
  {
    title: "Stack",
    links: [
      { label: "Axiom Foundation", href: "https://axiom-foundation.org" },
      { label: "Stack", href: "/stack" },
      { label: "Arch architecture", href: "/stack/arch" },
      { label: "Brand", href: "/brand" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Docs", href: "https://docs.cosilico.ai" },
      { label: "GitHub", href: "https://github.com/CosilicoAI" },
      { label: "hello@cosilico.ai", href: "mailto:hello@cosilico.ai" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="page-wrap py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <Logo size={24} />
              <span className="nav-wordmark text-xs">
                COSILICO
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A managed runtime for rule encodings, calibrated populations, and
              economic simulation.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Society, in silico.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="section-kicker mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: "var(--color-border-subtle)" }}
        >
          <p className="text-xs text-muted">Cosilico PBC</p>
          <a
            href="mailto:hello@cosilico.ai"
            className="footer-link text-xs no-underline"
          >
            hello@cosilico.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
