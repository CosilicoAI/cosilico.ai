import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as styles from "./nav.css";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "/playground", label: "Playground" },
  { href: "/validation", label: "Validation" },
  { href: "/plugin", label: "Plugin" },
  { href: "/architecture", label: "Architecture" },
  { href: "https://docs.cosilico.ai", label: "Docs", external: true },
  { href: "https://github.com/CosilicoAI", label: "GitHub", external: true },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navContainer}>
        <a href="/" className={styles.navLogo}>
          <img
            src="/cosilico-logo-dark.svg"
            alt="Cosilico logo"
            className={styles.navLogoIcon}
          />
          cosilico
        </a>

        <button
          className={styles.navMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                isActive(link.href) ? styles.navLinkActive : ""
              } ${link.external ? styles.navLinkExternal : ""}`}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
