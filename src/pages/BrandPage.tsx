import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/brand.css";
import { ChartIcon, NotepadIcon, PackageIcon } from "../components/icons";

const brandCards = [
  {
    to: "/brand/design",
    icon: ChartIcon,
    title: "Design system",
    description: "Colors, typography, spacing, and icons. The visual foundation of Cosilico.",
    meta: "Colors, fonts, 37 icons",
  },
  {
    to: "/brand/writing",
    icon: NotepadIcon,
    title: "Writing guide",
    description: "Voice, tone, and content guidelines. How we communicate.",
    meta: "Sentence case, terminology",
  },
  {
    to: "/brand/assets",
    icon: PackageIcon,
    title: "Assets",
    description: "Logo files, brand marks, and downloadable resources.",
    meta: "SVG, PNG downloads",
  },
];

export default function BrandPage() {
  return (
    <PageLayout>
      <div className={styles.brandPage}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <img
            src="/cosilico-logo-dark.svg"
            alt="Cosilico"
            className={styles.heroLogo}
          />
          <h1 className={styles.heroTitle}>Brand</h1>
          <p className={styles.heroSubtitle}>
            Guidelines for how Cosilico looks, sounds, and feels.
            Everything you need to represent the brand consistently.
          </p>
        </section>

        <section className={styles.cardsSection}>
          <div className={styles.cardsGrid}>
            {brandCards.map((card) => (
              <Link key={card.to} to={card.to} className={styles.card}>
                <div className={styles.cardGlow} />
                <div className={styles.cardIcon}>
                  <card.icon size={24} />
                </div>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
                <span className={styles.cardMeta}>{card.meta}</span>
                <span className={styles.cardArrow}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
