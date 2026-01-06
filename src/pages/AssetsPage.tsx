import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/assets.css";
import { CheckIcon, XIcon, DownloadIcon } from "../components/icons";

const brandColors = [
  { name: "Accent", value: "#00d4ff", bg: "#00d4ff" },
  { name: "Success", value: "#00ff88", bg: "#00ff88" },
  { name: "Error", value: "#ff4466", bg: "#ff4466" },
  { name: "Amber", value: "#ffaa00", bg: "#ffaa00" },
  { name: "Background", value: "#08080c", bg: "#08080c" },
  { name: "Surface", value: "#12121a", bg: "#12121a" },
];

export default function AssetsPage() {
  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageLayout>
      <div className={styles.assetsPage}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.breadcrumb}>
            <Link to="/brand" className={styles.breadcrumbLink}>Brand</Link>
            {" / "}Assets
          </div>
          <h1 className={styles.heroTitle}>Assets</h1>
          <p className={styles.heroSubtitle}>
            Logo files, brand marks, and downloadable resources.
          </p>
        </section>

        <div className={styles.content}>
          {/* Logo Downloads */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Logo</h2>
            <p className={styles.sectionSubtitle}>
              The Cosilico mark: two overlapping hexagonal crystals representing society and simulation.
            </p>

            <div className={styles.logoGrid}>
              <div className={styles.logoCardDark}>
                <img
                  src="/cosilico-logo-dark.svg"
                  alt="Cosilico logo on dark background"
                  className={styles.logoPreview}
                />
                <span className={styles.logoLabel}>Dark background</span>
                <button
                  className={styles.downloadButton}
                  onClick={() => handleDownload("cosilico-logo-dark.svg")}
                >
                  <DownloadIcon size={14} />
                  SVG
                </button>
              </div>

              <div className={styles.logoCardLight}>
                <img
                  src="/cosilico-logo-light.svg"
                  alt="Cosilico logo on light background"
                  className={styles.logoPreview}
                  style={{ filter: "brightness(0.3)" }}
                />
                <span className={styles.logoLabel} style={{ color: "#666" }}>Light background</span>
                <button
                  className={styles.downloadButton}
                  onClick={() => handleDownload("cosilico-logo-light.svg")}
                  style={{ color: "#333", borderColor: "#ddd" }}
                >
                  <DownloadIcon size={14} />
                  SVG
                </button>
              </div>
            </div>

            {/* Clear Space */}
            <div className={styles.usageSection}>
              <h3 className={styles.sectionTitle} style={{ fontSize: "1.1rem" }}>Clear space</h3>
              <div className={styles.clearSpaceDemo}>
                <div className={styles.clearSpaceBox}>
                  <span className={styles.clearSpaceTop}>1x</span>
                  <span className={styles.clearSpaceSide}>1x</span>
                  <img
                    src="/cosilico-logo-dark.svg"
                    alt="Logo with clear space"
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
              </div>
              <p className={styles.clearSpaceNote}>
                Maintain clear space equal to the height of one crystal around the logo.
              </p>
            </div>

            {/* Usage Guidelines */}
            <div className={styles.usageSection}>
              <h3 className={styles.sectionTitle} style={{ fontSize: "1.1rem" }}>Usage guidelines</h3>
              <div className={styles.usageGrid}>
                <div className={styles.usageCardDo}>
                  <div className={styles.usageTitleDo}>
                    <CheckIcon size={16} /> Do
                  </div>
                  <ul className={styles.usageList}>
                    <li>• Use on dark backgrounds (#08080c to #1a1a24)</li>
                    <li>• Maintain aspect ratio when scaling</li>
                    <li>• Use SVG format for best quality</li>
                    <li>• Keep minimum size of 24px height</li>
                  </ul>
                </div>
                <div className={styles.usageCardDont}>
                  <div className={styles.usageTitleDont}>
                    <XIcon size={16} /> Don't
                  </div>
                  <ul className={styles.usageList}>
                    <li>• Stretch or distort the logo</li>
                    <li>• Change the logo colors</li>
                    <li>• Add effects like shadows or gradients</li>
                    <li>• Place on busy or low-contrast backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Colors */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Brand colors</h2>
            <p className={styles.sectionSubtitle}>
              Primary palette for Cosilico brand materials.
            </p>

            <div className={styles.colorGrid}>
              {brandColors.map((color) => (
                <div key={color.name} className={styles.colorCard}>
                  <div
                    className={styles.colorSwatch}
                    style={{ background: color.bg }}
                  />
                  <div className={styles.colorInfo}>
                    <div className={styles.colorName}>{color.name}</div>
                    <div className={styles.colorValue}>{color.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wordmark */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Wordmark</h2>
            <p className={styles.sectionSubtitle}>
              The Cosilico name uses Geist font at 600 weight.
            </p>

            <div style={{
              background: "var(--color-surface)",
              padding: "48px",
              borderRadius: "12px",
              border: "1px solid var(--color-border)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}>
              <img
                src="/cosilico-logo-dark.svg"
                alt="Logo"
                style={{ width: "48px", height: "48px" }}
              />
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 600,
                color: "var(--color-text)",
              }}>
                cosilico
              </span>
            </div>
            <p style={{
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              textAlign: "center",
              marginTop: "16px",
            }}>
              Logo + wordmark lockup. Lowercase "cosilico" in Geist 600.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
