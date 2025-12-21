import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Typed Playground Styles
 *
 * This demonstrates the Vanilla Extract pattern:
 * - `vars.font.display` is type-checked at compile time
 * - Typos like `vars.font.dispaly` cause build errors
 * - All tokens come from theme.css.ts (single source of truth)
 */

// Example: Typed heading style
export const heading = style({
  fontFamily: vars.font.display,
  color: vars.color.text,
  fontSize: '2rem',
  fontWeight: 600,
  letterSpacing: '-0.02em',
});

// Example: Typed card style
export const card = style({
  backgroundColor: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
    boxShadow: `0 0 20px ${vars.color.accentGlow}`,
  },
});

// Example: Typed accent text
export const accentText = style({
  color: vars.color.accent,
  fontFamily: vars.font.mono,
  fontSize: '0.875rem',
});

// Example: Button with typed tokens
export const primaryButton = style({
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.void,
  backgroundColor: vars.color.accent,
  border: 'none',
  borderRadius: vars.radius.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    backgroundColor: vars.color.accentBright,
  },
});

// Global styles can also use typed tokens
globalStyle(`${card} h3`, {
  fontFamily: vars.font.display,
  color: vars.color.text,
  marginBottom: vars.space.sm,
});
