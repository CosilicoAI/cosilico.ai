import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const writingPage = style({
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
  maxWidth: "720px",
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
  marginBottom: "16px",
  paddingBottom: "12px",
  borderBottom: `1px solid ${vars.color.border}`,
});

export const sectionIntro = style({
  fontSize: "1rem",
  color: vars.color.textMuted,
  marginBottom: "24px",
  lineHeight: 1.7,
});

export const rule = style({
  marginBottom: "32px",
});

export const ruleTitle = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const ruleDescription = style({
  fontSize: "0.95rem",
  color: vars.color.textMuted,
  marginBottom: "16px",
  lineHeight: 1.6,
});

export const examplesGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  "@media": {
    "(max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const exampleBox = style({
  padding: "16px",
  borderRadius: "8px",
  fontSize: "0.9rem",
});

export const exampleGood = style([
  exampleBox,
  {
    background: `${vars.color.success}10`,
    border: `1px solid ${vars.color.success}30`,
  },
]);

export const exampleBad = style([
  exampleBox,
  {
    background: `${vars.color.error}10`,
    border: `1px solid ${vars.color.error}30`,
  },
]);

export const exampleLabel = style({
  fontSize: "0.75rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const exampleLabelGood = style([
  exampleLabel,
  {
    color: vars.color.success,
  },
]);

export const exampleLabelBad = style([
  exampleLabel,
  {
    color: vars.color.error,
  },
]);

export const exampleText = style({
  fontFamily: vars.font.body,
  lineHeight: 1.5,
});

export const termList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const termItem = style({
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  gap: "16px",
  padding: "12px 16px",
  background: vars.color.surface,
  borderRadius: "8px",
  border: `1px solid ${vars.color.border}`,
  alignItems: "center",
  "@media": {
    "(max-width: 500px)": {
      gridTemplateColumns: "1fr",
      gap: "4px",
    },
  },
});

export const termName = style({
  fontFamily: vars.font.mono,
  fontWeight: 600,
  color: vars.color.accent,
});

export const termDesc = style({
  fontSize: "0.9rem",
  color: vars.color.textMuted,
});

export const tipBox = style({
  padding: "20px",
  background: `${vars.color.accent}08`,
  border: `1px solid ${vars.color.accent}20`,
  borderRadius: "8px",
  marginTop: "24px",
});

export const tipTitle = style({
  fontSize: "0.9rem",
  fontWeight: 600,
  color: vars.color.accent,
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const tipText = style({
  fontSize: "0.9rem",
  color: vars.color.textMuted,
  lineHeight: 1.6,
});

globalStyle(`${tipText} code`, {
  background: vars.color.surface,
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "0.85rem",
});
