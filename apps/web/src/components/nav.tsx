"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { label: "Stack", href: "/stack" },
  { label: "Pricing", href: "/pricing" },
  { label: "Playground", href: "/playground" },
  { label: "Thesis", href: "/thesis" },
  { label: "Docs", href: "https://docs.cosilico.ai", external: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="nav-bar mt-4 flex items-center justify-between rounded-full border px-5 py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Logo />
            <span className="font-mono text-sm text-[var(--color-text)]" style={{ letterSpacing: "0.08em" }}>
              COSILICO
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="link-secondary rounded-lg px-3.5 py-1.5 text-sm no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://github.com/CosilicoAI"
              target="_blank"
              className="btn-outline ml-2 rounded-lg px-3.5 py-1.5 text-sm"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-muted md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="nav-mobile mt-2 flex flex-col gap-1 rounded-2xl border p-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onClick={() => setOpen(false)}
                className="link-secondary rounded-lg px-4 py-2.5 text-sm no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
