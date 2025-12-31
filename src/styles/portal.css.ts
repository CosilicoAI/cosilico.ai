import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico API Portal Styles
 * Dashboard, API key management, usage charts
 */

// ============================================
// PAGE LAYOUT
// ============================================

export const portalPage = style({
  minHeight: '100vh',
  paddingTop: '120px',
  paddingBottom: vars.space['4xl'],
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
});

// ============================================
// HEADER
// ============================================

export const header = style({
  marginBottom: vars.space['3xl'],
});

export const headerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.space.lg,
  marginBottom: vars.space.lg,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const headerTitle = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 700,
  margin: 0,
  background: `linear-gradient(135deg, ${vars.color.text} 0%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const headerSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  margin: 0,
});

// ============================================
// STATS GRID
// ============================================

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.lg,
  marginBottom: vars.space['3xl'],
});

export const statCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-2px)',
  },
});

export const statCardPrimary = style({
  background: `linear-gradient(135deg, ${vars.color.bgCard} 0%, rgba(0, 212, 255, 0.08) 100%)`,
  borderColor: vars.color.accentDim,
});

export const statLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const statValue = style({
  fontFamily: vars.font.display,
  fontSize: '2.5rem',
  fontWeight: 700,
  color: vars.color.text,
  lineHeight: 1,
  marginBottom: vars.space.xs,
});

export const statValueAccent = style({
  color: vars.color.accent,
});

export const statSubtext = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

// ============================================
// SECTIONS
// ============================================

export const section = style({
  marginBottom: vars.space['3xl'],
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.xl,
  flexWrap: 'wrap',
  gap: vars.space.md,
});

export const sectionTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: 0,
});

// ============================================
// API KEYS TABLE
// ============================================

export const keysTable = style({
  width: '100%',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
});

export const keysTableHeader = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 120px',
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.bgElevated,
  borderBottom: `1px solid ${vars.color.border}`,
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const keyRow = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 120px',
  padding: `${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border}`,
  alignItems: 'center',
  transition: `background ${vars.duration.fast}`,
  ':last-child': {
    borderBottom: 'none',
  },
  ':hover': {
    background: vars.color.bgElevated,
  },
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.sm,
    },
  },
});

export const keyCell = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const keyName = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.text,
  marginBottom: vars.space.xs,
});

export const keyValue = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.textSecondary,
});

export const keyPrefix = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
});

export const keyDate = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.textMuted,
  '@media': {
    '(max-width: 768px)': {
      '::before': {
        content: '"Created: "',
        color: vars.color.textFaint,
      },
    },
  },
});

export const keyStatus = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const statusActive = style({
  color: vars.color.success,
});

export const statusInactive = style({
  color: vars.color.error,
});

export const statusDot = style({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: 'currentColor',
});

export const copyButton = style({
  padding: vars.space.xs,
  background: 'transparent',
  border: 'none',
  color: vars.color.textMuted,
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    color: vars.color.accent,
    background: vars.color.accentGlow,
  },
});

export const emptyState = style({
  padding: vars.space['3xl'],
  textAlign: 'center',
  color: vars.color.textMuted,
  fontFamily: vars.font.body,
  fontSize: '1rem',
});

// ============================================
// USAGE CHART
// ============================================

export const chartContainer = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  minHeight: '300px',
});

export const chartPlaceholder = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '260px',
  color: vars.color.textMuted,
  fontFamily: vars.font.body,
  gap: vars.space.md,
});

export const chartBars = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: vars.space.sm,
  height: '200px',
  paddingTop: vars.space.lg,
});

export const chartBar = style({
  width: '40px',
  background: `linear-gradient(to top, ${vars.color.accentDim}, ${vars.color.accent})`,
  borderRadius: `${vars.radius.sm} ${vars.radius.sm} 0 0`,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  opacity: 0.7,
  ':hover': {
    opacity: 1,
    transform: 'scaleY(1.02)',
    transformOrigin: 'bottom',
  },
});

export const chartLabels = style({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: vars.space.md,
});

export const chartLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
});

// ============================================
// BUTTONS
// ============================================

export const btnPrimary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  background: vars.color.accent,
  color: vars.color.bg,
  border: 'none',
  boxShadow: `0 0 0 1px ${vars.color.accent}, 0 4px 20px -4px ${vars.color.accentIntense}`,
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 0 0 1px ${vars.color.accentBright}, 0 8px 30px -4px ${vars.color.accentIntense}`,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    transform: 'none',
  },
});

export const btnSecondary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  background: 'transparent',
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    background: vars.color.bgElevated,
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-2px)',
  },
});

export const btnDanger = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: '0.85rem',
  fontWeight: 500,
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  background: 'transparent',
  color: vars.color.error,
  border: `1px solid ${vars.color.error}`,
  opacity: 0.7,
  ':hover': {
    opacity: 1,
    background: 'rgba(255, 68, 102, 0.1)',
  },
});

export const btnSmall = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: '0.85rem',
});

// ============================================
// AUTH / LOGIN
// ============================================

export const authContainer = style({
  maxWidth: '420px',
  margin: '0 auto',
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
});

export const authCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
});

export const authTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.75rem',
  fontWeight: 600,
  color: vars.color.text,
  textAlign: 'center',
  marginBottom: vars.space.lg,
});

export const authSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '1rem',
  color: vars.color.textSecondary,
  textAlign: 'center',
  marginBottom: vars.space.xl,
});

export const authForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const inputLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textSecondary,
});

export const input = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  padding: `${vars.space.md}`,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.text,
  transition: `all ${vars.duration.fast}`,
  outline: 'none',
  ':focus': {
    borderColor: vars.color.accent,
    boxShadow: `0 0 0 3px ${vars.color.accentGlow}`,
  },
  '::placeholder': {
    color: vars.color.textFaint,
  },
});

export const authDivider = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  margin: `${vars.space.lg} 0`,
  color: vars.color.textMuted,
  fontSize: '0.85rem',
  '::before': {
    content: '""',
    flex: 1,
    height: '1px',
    background: vars.color.border,
  },
  '::after': {
    content: '""',
    flex: 1,
    height: '1px',
    background: vars.color.border,
  },
});

export const authFooter = style({
  textAlign: 'center',
  marginTop: vars.space.xl,
  fontFamily: vars.font.body,
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
});

export const authLink = style({
  color: vars.color.accent,
  textDecoration: 'none',
  fontWeight: 500,
  ':hover': {
    textDecoration: 'underline',
  },
});

export const errorMessage = style({
  background: 'rgba(255, 68, 102, 0.1)',
  border: `1px solid ${vars.color.error}`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
  color: vars.color.error,
  fontSize: '0.9rem',
  marginBottom: vars.space.md,
});

// ============================================
// MODAL
// ============================================

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideUp = keyframes({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

export const modalOverlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: vars.space.lg,
  animation: `${fadeIn} ${vars.duration.fast} ${vars.ease.out}`,
});

export const modalContent = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  maxWidth: '480px',
  width: '100%',
  animation: `${slideUp} ${vars.duration.normal} ${vars.ease.out}`,
});

export const modalTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: vars.space.md,
});

export const modalDescription = style({
  fontFamily: vars.font.body,
  fontSize: '1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
  lineHeight: 1.6,
});

export const modalActions = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'flex-end',
});

export const newKeyDisplay = style({
  background: vars.color.bg,
  border: `1px solid ${vars.color.accent}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  marginBottom: vars.space.lg,
});

export const newKeyLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const newKeyValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.accent,
  wordBreak: 'break-all',
  lineHeight: 1.5,
});

export const warningText = style({
  fontFamily: vars.font.body,
  fontSize: '0.9rem',
  color: vars.color.warning,
  background: vars.color.amberGlow,
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  marginBottom: vars.space.lg,
});

// ============================================
// LOADING STATE
// ============================================

const pulse = keyframes({
  '0%, 100%': { opacity: 0.4 },
  '50%': { opacity: 0.8 },
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loading = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
  gap: vars.space.lg,
});

export const loadingSpinner = style({
  width: '48px',
  height: '48px',
  border: `3px solid ${vars.color.border}`,
  borderTopColor: vars.color.accent,
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});

export const skeleton = style({
  background: vars.color.bgElevated,
  borderRadius: vars.radius.md,
  animation: `${pulse} 1.5s ease-in-out infinite`,
});

// ============================================
// CREDIT PACKAGES
// ============================================

export const packagesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: vars.space.lg,
});

export const packageCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  textAlign: 'center',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-4px)',
  },
});

export const packageName = style({
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: vars.space.md,
});

export const packagePrice = style({
  fontFamily: vars.font.display,
  fontSize: '2.5rem',
  fontWeight: 700,
  color: vars.color.accent,
  marginBottom: vars.space.xs,
});

export const packageCredits = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.lg,
});
