import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Shared Navigation Styles - Vanilla Extract
 * Consistent navigation across all Cosilico pages
 */

export const nav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'rgba(8, 8, 12, 0.85)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const navContainer = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `${vars.space.md} ${vars.space.lg}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.lg,
});

export const navLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  textDecoration: 'none',
  color: vars.color.text,
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '18px',
  letterSpacing: '-0.02em',
  transition: `color ${vars.duration.fast}`,
  ':hover': {
    color: vars.color.accent,
  },
});

export const navLogoIcon = style({
  width: '28px',
  height: '28px',
});

export const navLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const navLink = style({
  fontFamily: vars.font.display,
  fontSize: '14px',
  fontWeight: 500,
  color: vars.color.textSecondary,
  textDecoration: 'none',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    color: vars.color.text,
    background: vars.color.accentGlow,
  },
});

export const navLinkActive = style({
  color: vars.color.accent,
  background: vars.color.accentGlow,
});

export const navLinkExternal = style({
  color: vars.color.textMuted,
  ':hover': {
    color: vars.color.textSecondary,
  },
});

// Mobile menu button
export const navMenuButton = style({
  display: 'none',
  padding: vars.space.sm,
  background: 'transparent',
  border: 'none',
  color: vars.color.text,
  cursor: 'pointer',
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

// Hide links on mobile by default
globalStyle(`@media (max-width: 768px) .${navLinks}`, {
  display: 'none',
});

// Mobile menu open state
export const navLinksOpen = style({
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: vars.color.bg,
      borderBottom: `1px solid ${vars.color.border}`,
      padding: vars.space.md,
      gap: vars.space.xs,
    },
  },
});
