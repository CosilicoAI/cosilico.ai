import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const assetsPage = style({
  minHeight: "100vh",
  background: vars.color.bg,
  color: vars.color.text,
  paddingBottom: "80px",
});

export const hero = style({
  padding: "120px 24px 60px",
  textAlign: "center",
  position: "relative",
});

export const heroGlow = style({
  position: "absolute",
  top: "-30%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "600px",
  height: "600px",
  background: `radial-gradient(circle, ${vars.color.accent}10 0%, transparent 60%)`,
  pointerEvents: "none",
});

export const breadcrumb = style({
  fontSize: "0.85rem",
  color: vars.color.textMuted,
  marginBottom: "16px",
});

export const breadcrumbLink = style({
  color: vars.color.accent,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const heroTitle = style({
  fontSize: "2.5rem",
  fontWeight: 600,
  fontFamily: vars.font.display,
  marginBottom: "12px",
});

export const heroSubtitle = style({
  fontSize: "1.1rem",
  color: vars.color.textMuted,
  maxWidth: "500px",
  margin: "0 auto",
});

export const content = style({
  maxWidth: "900px",
  margin: "0 auto",
  padding: "0 24px",
});

export const section = style({
  marginBottom: "64px",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  fontFamily: vars.font.display,
  marginBottom: "8px",
});

export const sectionSubtitle = style({
  fontSize: "1rem",
  color: vars.color.textMuted,
  marginBottom: "24px",
});

export const logoGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "24px",
});

export const logoCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "12px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

export const logoCardDark = style([
  logoCard,
  {
    background: vars.color.bg,
  },
]);

export const logoCardLight = style([
  logoCard,
  {
    background: "#ffffff",
  },
]);

export const logoPreview = style({
  width: "80px",
  height: "80px",
});

export const logoLabel = style({
  fontSize: "0.85rem",
  color: vars.color.textMuted,
  textAlign: "center",
});

export const downloadButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  background: "transparent",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "6px",
  color: vars.color.text,
  fontSize: "0.85rem",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.15s ease",
  ":hover": {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
});

export const usageSection = style({
  marginTop: "48px",
});

export const usageGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  "@media": {
    "(max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const usageCard = style({
  padding: "24px",
  borderRadius: "8px",
});

export const usageCardDo = style([
  usageCard,
  {
    background: `${vars.color.success}08`,
    border: `1px solid ${vars.color.success}20`,
  },
]);

export const usageCardDont = style([
  usageCard,
  {
    background: `${vars.color.error}08`,
    border: `1px solid ${vars.color.error}20`,
  },
]);

export const usageTitle = style({
  fontSize: "0.9rem",
  fontWeight: 600,
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const usageTitleDo = style([
  usageTitle,
  {
    color: vars.color.success,
  },
]);

export const usageTitleDont = style([
  usageTitle,
  {
    color: vars.color.error,
  },
]);

export const usageList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: "0.9rem",
  color: vars.color.textMuted,
  lineHeight: 1.8,
});

export const colorSection = style({
  marginTop: "48px",
});

export const colorGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "16px",
});

export const colorCard = style({
  borderRadius: "8px",
  overflow: "hidden",
  border: `1px solid ${vars.color.border}`,
});

export const colorSwatch = style({
  height: "80px",
});

export const colorInfo = style({
  padding: "12px",
  background: vars.color.surface,
});

export const colorName = style({
  fontSize: "0.85rem",
  fontWeight: 500,
  marginBottom: "4px",
});

export const colorValue = style({
  fontSize: "0.75rem",
  fontFamily: vars.font.mono,
  color: vars.color.textMuted,
});

export const clearSpaceDemo = style({
  display: "flex",
  justifyContent: "center",
  padding: "48px",
  background: vars.color.surface,
  borderRadius: "12px",
  border: `1px solid ${vars.color.border}`,
  marginBottom: "16px",
});

export const clearSpaceBox = style({
  position: "relative",
  padding: "24px",
  border: `2px dashed ${vars.color.accent}40`,
  borderRadius: "8px",
});

export const clearSpaceLabel = style({
  position: "absolute",
  fontSize: "0.7rem",
  color: vars.color.accent,
  fontFamily: vars.font.mono,
});

export const clearSpaceTop = style([
  clearSpaceLabel,
  {
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
  },
]);

export const clearSpaceSide = style([
  clearSpaceLabel,
  {
    top: "50%",
    right: "-40px",
    transform: "translateY(-50%) rotate(90deg)",
  },
]);

export const clearSpaceNote = style({
  fontSize: "0.85rem",
  color: vars.color.textMuted,
  textAlign: "center",
});
