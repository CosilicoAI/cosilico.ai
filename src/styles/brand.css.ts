import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const brandPage = style({
  minHeight: "100vh",
  background: vars.color.bg,
  color: vars.color.text,
  paddingBottom: "80px",
});

export const hero = style({
  padding: "120px 24px 80px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
});

export const heroGlow = style({
  position: "absolute",
  top: "-50%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "800px",
  height: "800px",
  background: `radial-gradient(circle, ${vars.color.accent}15 0%, transparent 60%)`,
  pointerEvents: "none",
});

export const heroLogo = style({
  width: "80px",
  height: "80px",
  marginBottom: "24px",
});

export const heroTitle = style({
  fontSize: "3rem",
  fontWeight: 600,
  fontFamily: vars.font.display,
  marginBottom: "16px",
  background: `linear-gradient(135deg, ${vars.color.text} 0%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const heroSubtitle = style({
  fontSize: "1.125rem",
  color: vars.color.textMuted,
  maxWidth: "500px",
  margin: "0 auto",
  lineHeight: 1.6,
});

export const cardsSection = style({
  padding: "0 24px",
  maxWidth: "900px",
  margin: "0 auto",
});

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
});

export const card = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "12px",
  padding: "32px",
  textDecoration: "none",
  color: vars.color.text,
  transition: "all 0.2s ease",
  position: "relative",
  overflow: "hidden",
  ":hover": {
    borderColor: vars.color.accent,
    transform: "translateY(-2px)",
  },
});

export const cardGlow = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "1px",
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}40, transparent)`,
  opacity: 0,
  transition: "opacity 0.2s ease",
  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
    },
  },
});

export const cardIcon = style({
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  background: `${vars.color.accent}15`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  color: vars.color.accent,
});

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  fontFamily: vars.font.display,
  marginBottom: "8px",
});

export const cardDescription = style({
  fontSize: "0.9rem",
  color: vars.color.textMuted,
  lineHeight: 1.6,
  marginBottom: "16px",
});

export const cardMeta = style({
  fontSize: "0.8rem",
  color: vars.color.textMuted,
  opacity: 0.7,
});

export const cardArrow = style({
  position: "absolute",
  bottom: "24px",
  right: "24px",
  color: vars.color.accent,
  opacity: 0,
  transform: "translateX(-4px)",
  transition: "all 0.2s ease",
  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
});
