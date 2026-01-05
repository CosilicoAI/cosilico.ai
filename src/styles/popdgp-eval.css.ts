import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico popdgp Eval Page Styles
 *
 * Design direction: Data-driven evaluation dashboard.
 * Shows trajectory comparisons between real and synthetic data.
 */

// ============================================
// ANIMATIONS
// ============================================

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

// ============================================
// BASE STYLES
// ============================================

export const evalPage = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.5,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
});

export const evalLayout = style({
  display: 'grid',
  gridTemplateColumns: '380px 1fr',
  gridTemplateRows: 'auto 1fr',
  minHeight: 'calc(100vh - 73px)',
  position: 'relative',
  zIndex: 1,
});

// ============================================
// PAGE HEADER
// ============================================

export const pageHeader = style({
  gridColumn: '1 / -1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderBottom: `1px solid ${vars.color.border}`,
  background: 'rgba(8, 8, 12, 0.8)',
  backdropFilter: 'blur(12px)',
});

export const logoSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

export const logoIcon = style({
  width: '32px',
  height: '32px',
  background: `linear-gradient(135deg, ${vars.color.accent}, ${vars.color.success})`,
  borderRadius: vars.radius.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.mono,
  fontWeight: 600,
  fontSize: '14px',
  color: vars.color.bg,
});

export const logoText = style({
  fontFamily: vars.font.mono,
  fontSize: '15px',
  fontWeight: 500,
  letterSpacing: '-0.02em',
});

globalStyle(`${logoText} span`, {
  color: vars.color.textMuted,
});

export const coverageBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: vars.color.accentGlow,
  border: `1px solid rgba(0, 212, 255, 0.2)`,
  borderRadius: vars.radius.md,
});

export const coverageBadgeLabel = style({
  fontSize: '12px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
});

export const coverageBadgeValue = style({
  fontFamily: vars.font.mono,
  fontSize: '20px',
  fontWeight: 600,
  color: vars.color.accent,
});

// ============================================
// SIDEBAR
// ============================================

export const sidebar = style({
  borderRight: `1px solid ${vars.color.border}`,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  background: 'rgba(8, 8, 12, 0.6)',
});

export const sidebarHeader = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const sidebarTitle = style({
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  marginBottom: vars.space.md,
});

export const filterRow = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const filterBtn = style({
  flex: 1,
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.md,
  color: vars.color.textMuted,
  fontFamily: vars.font.mono,
  fontSize: '11px',
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: vars.color.surface,
    color: vars.color.text,
  },
});

export const filterBtnActive = style({
  background: vars.color.accentGlow,
  borderColor: vars.color.accent,
  color: vars.color.accent,
});

export const recordList = style({
  flex: 1,
  overflowY: 'auto',
  padding: vars.space.sm,
});

globalStyle(`${recordList}::-webkit-scrollbar`, {
  width: '6px',
});

globalStyle(`${recordList}::-webkit-scrollbar-track`, {
  background: 'transparent',
});

globalStyle(`${recordList}::-webkit-scrollbar-thumb`, {
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '3px',
});

// ============================================
// RECORD CARD
// ============================================

export const recordCard = style({
  padding: `${vars.space.md} ${vars.space.md}`,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.md,
  marginBottom: vars.space.xs,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  animation: `${fadeIn} 0.3s ${vars.ease.out} forwards`,
  ':hover': {
    background: vars.color.surface,
    borderColor: 'rgba(0, 212, 255, 0.2)',
    transform: 'translateX(2px)',
  },
});

export const recordCardSelected = style({
  background: vars.color.accentGlow,
  borderColor: vars.color.accent,
});

export const recordHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.space.sm,
});

export const recordId = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.textMuted,
});

export const recordStatus = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
});

export const recordStatusCovered = style({
  color: vars.color.success,
});

export const recordStatusUncovered = style({
  color: vars.color.error,
});

export const statusDot = style({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: 'currentColor',
});

export const recordStats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.sm,
});

export const recordStat = style({
  textAlign: 'center',
});

export const recordStatLabel = style({
  fontSize: '9px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: vars.color.textFaint,
  marginBottom: '2px',
});

export const recordStatValue = style({
  fontFamily: vars.font.mono,
  fontSize: '13px',
  color: vars.color.text,
});

// ============================================
// MAIN CONTENT
// ============================================

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: vars.space.lg,
  gap: vars.space.lg,
});

// ============================================
// STATS PANEL
// ============================================

export const statsPanel = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space.md,
});

export const statCard = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.lg,
  position: 'relative',
  overflow: 'hidden',
});

globalStyle(`${statCard}::before`, {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, ${vars.color.accent}, transparent)`,
  opacity: 0.5,
});

export const statCardLabel = style({
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const statCardValue = style({
  fontFamily: vars.font.mono,
  fontSize: '28px',
  fontWeight: 600,
  color: vars.color.text,
});

export const statCardValueSuccess = style({
  color: vars.color.success,
});

export const statCardSub = style({
  fontSize: '12px',
  color: vars.color.textFaint,
  marginTop: vars.space.xs,
});

// ============================================
// TRAJECTORY VIEWER
// ============================================

export const trajectoryViewer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const trajectoryHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const trajectoryTitle = style({
  fontSize: '14px',
  fontWeight: 500,
  fontFamily: vars.font.display,
});

export const trajectoryLegend = style({
  display: 'flex',
  gap: vars.space.lg,
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '12px',
  color: vars.color.textMuted,
});

export const legendLine = style({
  width: '20px',
  height: '2px',
  borderRadius: '1px',
});

export const legendLineReal = style({
  background: vars.color.accent,
});

export const legendLineSynthetic = style({
  background: vars.color.success,
  opacity: 0.7,
});

export const distanceBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.bgCard,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.textMuted,
});

globalStyle(`${distanceBadge} span`, {
  color: vars.color.amber,
});

export const trajectoryCharts = style({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1px',
  background: vars.color.borderSubtle,
  padding: '1px',
});

export const chartPanel = style({
  background: vars.color.bgElevated,
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
});

export const chartTitle = style({
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: vars.color.textMuted,
  marginBottom: vars.space.md,
  textAlign: 'center',
});

export const chartContainer = style({
  flex: 1,
  minHeight: '200px',
});

// ============================================
// EMPTY STATE
// ============================================

export const emptyState = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.textMuted,
  gap: vars.space.md,
});

export const emptyIcon = style({
  width: '48px',
  height: '48px',
  border: `2px dashed ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
});
