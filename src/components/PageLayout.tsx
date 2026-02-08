import React, { ReactNode } from "react";
import * as styles from "./pageLayout.css";

interface PageLayoutProps {
  children: ReactNode;
  /** Optional badge text above title */
  badge?: string;
  /** Page title */
  title?: string;
  /** Subtitle below title */
  subtitle?: string;
  /** Show the standard hero section */
  showHero?: boolean;
  /** Additional className for the page wrapper */
  className?: string;
}

/**
 * Shared page layout component for consistent structure across all pages.
 * Includes grid background and optional hero section.
 */
export default function PageLayout({
  children,
  badge,
  title,
  subtitle,
  showHero = false,
  className = "",
}: PageLayoutProps) {
  return (
    <div className={`${styles.page} ${className}`}>
      {/* Grid background - always present */}
      <div className={styles.gridBg} />

      {/* Optional hero section */}
      {showHero && (title || badge) && (
        <header className={styles.hero}>
          {badge && <div className={styles.heroBadge}>{badge}</div>}
          {title && <h1 className={styles.heroTitle}>{title}</h1>}
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        </header>
      )}

      {/* Page content */}
      <div className={styles.content}>{children}</div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>&copy; {new Date().getFullYear()} Cosilico, Inc.</span>
          <div className={styles.footerLinks}>
            <a href="https://rules.foundation" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Rules Foundation</a>
            <a href="https://docs.cosilico.ai" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Docs</a>
            <a href="https://github.com/CosilicoAI" className={styles.footerLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:hello@cosilico.ai" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Re-export styles for pages that need custom sections
export { styles as layoutStyles };
