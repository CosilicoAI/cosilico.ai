import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Design System Page Styles
 *
 * A comprehensive design system reference page.
 */

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

// ============================================
// BASE STYLES
// ============================================

export const design = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
});

globalStyle(`${design} section`, {
  padding: `${vars.space['3xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${design} h1, ${design} h2, ${design} h3`, {
  fontFamily: vars.font.display,
  fontWeight: '600',
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
});

// ============================================
// HERO
// ============================================

export const hero = style({
  textAlign: 'center',
  paddingTop: '80px !important',
  paddingBottom: `${vars.space['2xl']} !important`,
});

export const heroTitle = style({
  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
  fontWeight: 600,
  marginBottom: vars.space.md,
  background: `linear-gradient(135deg, ${vars.color.text} 0%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const heroSubtitle = style({
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  maxWidth: '600px',
  margin: '0 auto',
});

// ============================================
// SECTIONS
// ============================================

export const sectionTitle = style({
  fontSize: '1.75rem',
  marginBottom: vars.space.xl,
  color: vars.color.text,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

export const sectionBadge = style({
  fontSize: '0.75rem',
  fontFamily: vars.font.mono,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.accentGlow,
  color: vars.color.accent,
  borderRadius: vars.radius.md,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

// ============================================
// COLOR PALETTE
// ============================================

export const colorGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: vars.space.md,
});

export const colorSwatch = style({
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.borderSubtle}`,
  cursor: 'pointer',
  transition: `transform ${vars.duration.fast} ${vars.ease.out}, box-shadow ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.3)`,
  },
});

export const colorSwatchColor = style({
  height: '80px',
  width: '100%',
});

export const colorSwatchInfo = style({
  padding: vars.space.md,
});

export const colorSwatchName = style({
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
  color: vars.color.text,
  marginBottom: vars.space.xs,
});

export const colorSwatchValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
});

// ============================================
// TYPOGRAPHY
// ============================================

export const typeRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space.xl,
  padding: `${vars.space.lg} 0`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  ':last-child': {
    borderBottom: 'none',
  },
});

export const typeLabel = style({
  width: '120px',
  flexShrink: 0,
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const typeSample = style({
  flex: 1,
});

// ============================================
// SPACING
// ============================================

export const spacingGrid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const spacingRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.lg,
});

export const spacingLabel = style({
  width: '80px',
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
  color: vars.color.textMuted,
});

export const spacingBar = style({
  height: '24px',
  background: vars.color.accent,
  borderRadius: vars.radius.sm,
  opacity: 0.6,
  transition: `opacity ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    opacity: 1,
  },
});

export const spacingValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textFaint,
  marginLeft: vars.space.md,
});

// ============================================
// ICONS
// ============================================

export const iconControls = style({
  display: 'flex',
  gap: vars.space.md,
  marginBottom: vars.space.xl,
  flexWrap: 'wrap',
});

export const iconStyleToggle = style({
  display: 'flex',
  background: vars.color.surface,
  borderRadius: vars.radius.lg,
  padding: vars.space.xs,
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const iconStyleButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: 'none',
  background: 'transparent',
  color: vars.color.textMuted,
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  selectors: {
    '&[data-active="true"]': {
      background: vars.color.accentGlow,
      color: vars.color.accent,
    },
  },
  ':hover': {
    color: vars.color.text,
  },
});

export const iconSearch = style({
  flex: 1,
  minWidth: '200px',
  maxWidth: '400px',
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: vars.color.surface,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.lg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: '0.875rem',
  outline: 'none',
  transition: `border-color ${vars.duration.fast} ${vars.ease.out}`,
  '::placeholder': {
    color: vars.color.textFaint,
  },
  ':focus': {
    borderColor: vars.color.accent,
  },
});

export const iconGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: vars.space.md,
});

export const iconCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  color: vars.color.textSecondary,
  ':hover': {
    background: vars.color.surface,
    borderColor: vars.color.border,
    color: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

export const iconCardName = style({
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  color: vars.color.textMuted,
  textAlign: 'center',
  wordBreak: 'break-word',
});

// ============================================
// RADIUS
// ============================================

export const radiusGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: vars.space.lg,
});

export const radiusCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const radiusPreview = style({
  width: '80px',
  height: '80px',
  background: vars.color.accent,
  opacity: 0.3,
});

export const radiusLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
  color: vars.color.textMuted,
});

// ============================================
// TOAST
// ============================================

export const toast = style({
  position: 'fixed',
  bottom: vars.space.xl,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: vars.color.success,
  color: vars.color.void,
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
  borderRadius: vars.radius.lg,
  animation: `${fadeInUp} 0.3s ${vars.ease.out}`,
  zIndex: 1000,
});
