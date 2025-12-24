import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Shared Page Layout Styles - Vanilla Extract
 * Consistent page structure across all Cosilico pages
 */

// Grid background - required on every page
export const gridBg = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(circle at 50% 0%, ${vars.color.accentGlow} 0%, transparent 50%)`,
  },
});

// Main page wrapper
export const page = style({
  minHeight: '100vh',
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.display,
  position: 'relative',
  paddingTop: '73px', // Nav height + border
});

// Page content container
export const content = style({
  position: 'relative',
  zIndex: 1,
});

// Standard page hero section
export const hero = style({
  padding: `${vars.space['3xl']} ${vars.space.lg}`,
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
});

export const heroBadge = style({
  display: 'inline-block',
  padding: `6px ${vars.space.md}`,
  background: vars.color.accentGlow,
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: '100px',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '1.5px',
  color: vars.color.accent,
  textTransform: 'uppercase',
  marginBottom: vars.space.lg,
});

export const heroTitle = style({
  fontSize: 'clamp(32px, 5vw, 48px)',
  fontWeight: 700,
  margin: `0 0 ${vars.space.md} 0`,
  background: `linear-gradient(135deg, #fff 0%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1.1,
});

export const heroSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '20px',
  color: vars.color.textSecondary,
  margin: 0,
  fontWeight: 400,
  fontStyle: 'italic',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

// Standard section
export const section = style({
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
  maxWidth: '1100px',
  margin: '0 auto',
});

export const sectionTitle = style({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  color: vars.color.text,
});

// Standard footer
export const footer = style({
  borderTop: `1px solid ${vars.color.border}`,
  padding: `${vars.space.lg} ${vars.space.lg}`,
  marginTop: vars.space['2xl'],
});

export const footerContent = style({
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13px',
  color: vars.color.textMuted,
  '@media': {
    '(max-width: 600px)': {
      flexDirection: 'column',
      gap: vars.space.sm,
      textAlign: 'center',
    },
  },
});

export const footerLinks = style({
  display: 'flex',
  gap: vars.space.lg,
});

export const footerLink = style({
  color: vars.color.textMuted,
  textDecoration: 'none',
  transition: `color ${vars.duration.fast}`,
  ':hover': {
    color: vars.color.accent,
  },
});
