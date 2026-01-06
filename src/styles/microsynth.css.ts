import { style, keyframes, globalStyle } from "@vanilla-extract/css";

// Keyframes
const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const pulseGlow = keyframes({
  "0%, 100%": { opacity: 0.4 },
  "50%": { opacity: 0.8 },
});

const scanline = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});

// Page container
export const page = style({
  minHeight: "100vh",
  background: "#08080c",
  color: "#e8e8e8",
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  position: "relative",
});

// Grid background
export const gridBg = style({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
  maskImage: "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
  "::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 50%)",
  },
});

// Hero section
export const hero = style({
  position: "relative",
  padding: "120px 48px 80px",
  textAlign: "center",
  zIndex: 1,
});

export const heroGlow = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "800px",
  height: "400px",
  background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.12) 0%, transparent 70%)",
  pointerEvents: "none",
});

export const breadcrumb = style({
  display: "inline-block",
  color: "#00d4ff",
  textDecoration: "none",
  fontSize: "12px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "24px",
  opacity: 0.7,
  transition: "opacity 0.2s",
  ":hover": {
    opacity: 1,
  },
});

export const heroBadge = style({
  display: "inline-block",
  padding: "6px 16px",
  background: "rgba(0, 212, 255, 0.1)",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  borderRadius: "2px",
  color: "#00d4ff",
  fontSize: "11px",
  letterSpacing: "0.15em",
  fontWeight: 500,
  marginBottom: "24px",
});

export const heroTitle = style({
  fontFamily: "'Geist', 'Inter', sans-serif",
  fontSize: "clamp(36px, 6vw, 64px)",
  fontWeight: 600,
  color: "#ffffff",
  margin: "0 0 16px",
  letterSpacing: "-0.02em",
});

export const heroSubtitle = style({
  fontSize: "15px",
  color: "#888",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.7,
});

export const heroContent = style({
  position: "relative",
  zIndex: 1,
});

// Stats section
export const statsSection = style({
  padding: "0 48px 60px",
  position: "relative",
  zIndex: 1,
});

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: "rgba(0, 212, 255, 0.2)",
  maxWidth: "900px",
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const statCard = style({
  background: "#0a0a0f",
  padding: "32px 24px",
  textAlign: "center",
});

export const statValue = style({
  fontSize: "32px",
  fontWeight: 600,
  color: "#00d4ff",
  fontFamily: "'Geist', sans-serif",
  marginBottom: "8px",
});

export const statLabel = style({
  fontSize: "11px",
  color: "#666",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});

// Section styles
export const sectionTitle = style({
  fontFamily: "'Geist', sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  color: "#00d4ff",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  marginBottom: "32px",
  paddingBottom: "12px",
  borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
});

// Experiments section
export const experimentsSection = style({
  padding: "60px 48px",
  position: "relative",
  zIndex: 1,
  maxWidth: "1400px",
  margin: "0 auto",
});

export const experimentsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const experimentCard = style({
  background: "#0c0c12",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "24px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  position: "relative",
  overflow: "hidden",
  ":hover": {
    background: "#0e0e16",
    borderColor: "rgba(0, 212, 255, 0.2)",
  },
  "::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "3px",
    background: "transparent",
    transition: "background 0.2s",
  },
});

export const experimentCardSelected = style({
  borderColor: "rgba(0, 212, 255, 0.4)",
  background: "#0e0e16",
  "::before": {
    background: "#00d4ff",
  },
});

export const experimentHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "12px",
});

export const experimentName = style({
  fontFamily: "'Geist', sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  color: "#fff",
  margin: 0,
});

export const experimentModel = style({
  fontSize: "11px",
  padding: "4px 10px",
  background: "rgba(0, 255, 136, 0.1)",
  color: "#00ff88",
  borderRadius: "2px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const experimentDesc = style({
  fontSize: "13px",
  color: "#666",
  margin: "0 0 16px",
  lineHeight: 1.6,
});

export const experimentMeta = style({
  display: "flex",
  gap: "24px",
  fontSize: "12px",
  color: "#555",
});

export const experimentDate = style({});
export const experimentCoverage = style({
  color: "#00d4ff",
});
export const experimentTime = style({});

// Details section
export const detailsSection = style({
  padding: "60px 48px",
  position: "relative",
  zIndex: 1,
  maxWidth: "1400px",
  margin: "0 auto",
  animation: `${fadeIn} 0.4s ease`,
});

export const detailsCard = style({
  background: "#0a0a0f",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "32px",
  marginBottom: "24px",
  position: "relative",
});

export const detailsCardTitle = style({
  fontSize: "12px",
  fontWeight: 500,
  color: "#888",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "24px",
  margin: 0,
});

// Datasets
export const datasetsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  marginTop: "24px",
  "@media": {
    "(max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const datasetCard = style({
  background: "#0c0c12",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "20px",
});

export const datasetName = style({
  fontSize: "18px",
  fontWeight: 600,
  color: "#00d4ff",
  marginBottom: "16px",
  fontFamily: "'Geist', sans-serif",
});

export const datasetStats = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
});

export const datasetStat = style({
  textAlign: "center",
});

export const datasetStatLabel = style({
  display: "block",
  fontSize: "10px",
  color: "#555",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "4px",
});

export const datasetStatValue = style({
  fontSize: "14px",
  color: "#fff",
  fontWeight: 500,
});

export const datasetWaves = style({
  marginTop: "12px",
  paddingTop: "12px",
  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
  fontSize: "11px",
  color: "#666",
});

// Variables table
export const variablesTable = style({
  marginTop: "24px",
});

export const variablesHeader = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 2fr",
  gap: "16px",
  padding: "12px 16px",
  background: "rgba(0, 212, 255, 0.05)",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#666",
  borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
});

export const variableRow = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 2fr",
  gap: "16px",
  padding: "12px 16px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
  fontSize: "13px",
  alignItems: "center",
  ":hover": {
    background: "rgba(255, 255, 255, 0.02)",
  },
});

export const variableName = style({
  color: "#fff",
  fontWeight: 500,
});

export const variableRole = style({
  color: "#666",
});

export const variableRoleTarget = style({
  color: "#00ff88",
  fontWeight: 500,
});

export const variableType = style({
  color: "#666",
});

export const variableSources = style({
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
});

export const sourceTag = style({
  padding: "2px 8px",
  background: "rgba(0, 212, 255, 0.1)",
  color: "#00d4ff",
  fontSize: "10px",
  borderRadius: "2px",
  textTransform: "uppercase",
});

// Config
export const configGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  marginTop: "24px",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const configSection = style({});

globalStyle(`${configSection} h4`, {
  fontSize: "11px",
  color: "#666",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "16px",
  margin: 0,
});

export const configItems = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "16px",
});

export const configItem = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 12px",
  background: "#0c0c12",
  fontSize: "12px",
});

export const configKey = style({
  color: "#666",
});

export const configValue = style({
  color: "#00d4ff",
  fontWeight: 500,
});

// Coverage
export const coverageOverall = style({
  textAlign: "center",
  padding: "40px",
  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 255, 136, 0.02) 100%)",
  border: "1px solid rgba(0, 212, 255, 0.1)",
  marginTop: "24px",
  marginBottom: "24px",
  position: "relative",
  overflow: "hidden",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
    animation: `${pulseGlow} 3s ease-in-out infinite`,
  },
});

export const coverageOverallValue = style({
  fontSize: "48px",
  fontWeight: 600,
  color: "#00ff88",
  fontFamily: "'Geist', sans-serif",
  marginBottom: "8px",
});

export const coverageOverallLabel = style({
  fontSize: "12px",
  color: "#666",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});

export const coverageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  "@media": {
    "(max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const coverageCard = style({
  background: "#0c0c12",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "24px",
  position: "relative",
});

export const coverageSurvey = style({
  fontSize: "14px",
  fontWeight: 600,
  color: "#00d4ff",
  marginBottom: "16px",
  fontFamily: "'Geist', sans-serif",
});

export const coverageMetrics = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
});

export const coverageMetric = style({
  padding: "8px",
  background: "rgba(0, 0, 0, 0.3)",
});

export const coverageMetricLabel = style({
  display: "block",
  fontSize: "9px",
  color: "#555",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "4px",
});

export const coverageMetricValue = style({
  fontSize: "13px",
  color: "#fff",
  fontWeight: 500,
});

// Coverage bar visualization
export const coverageBar = style({
  height: "4px",
  background: "rgba(255, 255, 255, 0.1)",
  marginTop: "16px",
  position: "relative",
  overflow: "hidden",
});

export const coverageBarFill = style({
  height: "100%",
  background: "linear-gradient(90deg, #00ff88, #00d4ff)",
  transition: "width 0.6s ease",
});

// Methodology
export const methodologySection = style({
  padding: "60px 48px 100px",
  position: "relative",
  zIndex: 1,
  maxWidth: "1400px",
  margin: "0 auto",
});

export const methodologyGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  "@media": {
    "(max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const methodologyCard = style({
  background: "#0a0a0f",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "32px",
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)",
  },
});

globalStyle(`${methodologyCard} h3`, {
  fontFamily: "'Geist', sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  color: "#fff",
  margin: "0 0 16px",
});

globalStyle(`${methodologyCard} p`, {
  fontSize: "13px",
  color: "#666",
  lineHeight: 1.7,
  margin: 0,
});

// Empty state
export const emptyState = style({
  textAlign: "center",
  padding: "80px 24px",
  color: "#555",
});

// Scanline effect
export const scanlineOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  zIndex: 100,
  background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)",
  opacity: 0.5,
});
