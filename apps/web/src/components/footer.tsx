import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Stack", href: "/stack" },
      { label: "Pricing", href: "/pricing" },
      { label: "Playground", href: "/playground" },
      { label: "Documentation", href: "https://docs.cosilico.ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Thesis", href: "/thesis" },
      { label: "Architecture", href: "/architecture" },
      { label: "Brand", href: "/brand" },
    ],
  },
  {
    title: "Open source",
    links: [
      { label: "Rules Foundation", href: "https://rules.foundation" },
      { label: "GitHub", href: "https://github.com/CosilicoAI" },
      { label: "Validation", href: "/validation" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={24} />
              <span className="font-mono text-xs tracking-widest text-muted">
                COSILICO
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Society, in silico.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-secondary text-sm no-underline"
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
            className="link-secondary text-xs no-underline"
          >
            hello@cosilico.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
