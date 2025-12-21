import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css';

/**
 * Cosilico Design Tokens
 *
 * These are the source of truth for all design values.
 * TypeScript ensures you can't use a token that doesn't exist.
 *
 * Variable names match existing CSS for seamless migration.
 */

// Define the contract (variable names) - matches existing CSS vars
export const vars = createGlobalThemeContract({
  font: {
    display: 'font-display',
    body: 'font-body',
    mono: 'font-mono',
  },
  color: {
    void: 'color-void',
    bg: 'color-bg',
    bgElevated: 'color-bg-elevated',
    bgCard: 'color-bg-card',
    surface: 'color-surface',
    border: 'color-border',
    borderSubtle: 'color-border-subtle',
    borderGlow: 'color-border-glow',
    text: 'color-text',
    textSecondary: 'color-text-secondary',
    textMuted: 'color-text-muted',
    textFaint: 'color-text-faint',
    accent: 'color-accent',
    accentBright: 'color-accent-bright',
    accentDim: 'color-accent-dim',
    accentGlow: 'color-accent-glow',
    accentIntense: 'color-accent-intense',
    amber: 'color-amber',
    amberGlow: 'color-amber-glow',
    success: 'color-success',
    successGlow: 'color-success-glow',
    warning: 'color-warning',
    error: 'color-error',
  },
  space: {
    xs: 'space-xs',
    sm: 'space-sm',
    md: 'space-md',
    lg: 'space-lg',
    xl: 'space-xl',
    '2xl': 'space-2xl',
    '3xl': 'space-3xl',
    '4xl': 'space-4xl',
  },
  radius: {
    sm: 'radius-sm',
    md: 'radius-md',
    lg: 'radius-lg',
    xl: 'radius-xl',
    '2xl': 'radius-2xl',
  },
  ease: {
    out: 'ease-out',
    spring: 'ease-spring',
  },
  duration: {
    fast: 'duration-fast',
    normal: 'duration-normal',
    slow: 'duration-slow',
  },
});

// Implement the theme (actual values)
createGlobalTheme(':root', vars, {
  font: {
    display: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Crimson Pro', Georgia, serif",
    mono: "'JetBrains Mono', 'SF Mono', monospace",
  },
  color: {
    void: '#050508',
    bg: '#08080c',
    bgElevated: '#0e0e14',
    bgCard: '#12121a',
    surface: '#1a1a24',
    border: '#252532',
    borderSubtle: '#1c1c28',
    borderGlow: '#3a3a52',
    text: '#f0f0f5',
    textSecondary: '#b8b8c8',
    textMuted: '#707088',
    textFaint: '#505068',
    accent: '#00d4ff',
    accentBright: '#40e8ff',
    accentDim: '#0099bb',
    accentGlow: 'rgba(0, 212, 255, 0.15)',
    accentIntense: 'rgba(0, 212, 255, 0.4)',
    amber: '#ffaa00',
    amberGlow: 'rgba(255, 170, 0, 0.15)',
    success: '#00ff88',
    successGlow: 'rgba(0, 255, 136, 0.15)',
    warning: '#ffaa00',
    error: '#ff4466',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
  },
  ease: {
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
});

// Type-safe access to tokens
export type Theme = typeof vars;
