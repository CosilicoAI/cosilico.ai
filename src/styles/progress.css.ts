import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Progress Dashboard Styles - Cosilico Dark Theme
 * Tracks encoding coverage of federal tax system
 */

// ============================================
// ANIMATIONS
// ============================================

const progressFill = keyframes({
  '0%': { width: '0%' },
  '100%': { width: 'var(--progress-width)' },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.6 },
});

// ============================================
// OVERALL PROGRESS SECTION
// ============================================

export const overallSection = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['3xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const overallCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, ${vars.color.accent}, ${vars.color.success}, ${vars.color.accent})`,
  },
});

export const overallHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.xl,
  flexWrap: 'wrap',
  gap: vars.space.md,
});

export const overallTitle = style({
  fontSize: '24px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  color: vars.color.text,
  margin: 0,
});

export const overallPercent = style({
  fontSize: '48px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, ${vars.color.success} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const progressBarContainer = style({
  background: vars.color.surface,
  borderRadius: vars.radius.lg,
  height: '32px',
  overflow: 'hidden',
  position: 'relative',
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const progressBarFill = style({
  height: '100%',
  background: `linear-gradient(90deg, ${vars.color.accent}, ${vars.color.success})`,
  borderRadius: vars.radius.lg,
  transition: `width ${vars.duration.slow} ${vars.ease.out}`,
  position: 'relative',
  animation: `${progressFill} 1.5s ${vars.ease.out} forwards`,
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    backgroundSize: '200% 100%',
    animation: `${shimmer} 2s linear infinite`,
  },
});

export const progressMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: vars.space.md,
  fontSize: '14px',
  color: vars.color.textMuted,
});

export const targetLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

// ============================================
// STATUS LEGEND
// ============================================

export const legend = style({
  display: 'flex',
  gap: vars.space.xl,
  marginTop: vars.space.xl,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.color.borderSubtle}`,
  flexWrap: 'wrap',
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '14px',
  color: vars.color.textSecondary,
});

export const legendDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

export const legendDotComplete = style([legendDot, {
  background: vars.color.success,
  boxShadow: `0 0 8px ${vars.color.successGlow}`,
}]);

export const legendDotInProgress = style([legendDot, {
  background: vars.color.amber,
  boxShadow: `0 0 8px ${vars.color.amberGlow}`,
  animation: `${pulse} 2s ease-in-out infinite`,
}]);

export const legendDotNotStarted = style([legendDot, {
  background: vars.color.textFaint,
  border: `2px solid ${vars.color.border}`,
}]);

// ============================================
// VARIABLES GRID
// ============================================

export const variablesSection = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['3xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const sectionTitle = style({
  fontSize: '28px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.lg} 0`,
  color: vars.color.text,
});

export const variablesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: vars.space.lg,
});

// ============================================
// VARIABLE CARD
// ============================================

export const variableCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 24px ${vars.color.accentGlow}`,
  },
});

export const variableCardComplete = style([variableCard, {
  borderColor: vars.color.success,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: vars.color.success,
  },
}]);

export const variableCardInProgress = style([variableCard, {
  borderColor: vars.color.amber,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: vars.color.amber,
  },
}]);

export const variableCardNotStarted = style([variableCard, {
  opacity: 0.7,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: vars.color.textFaint,
  },
}]);

export const variableHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: vars.space.md,
});

export const variableName = style({
  fontFamily: vars.font.mono,
  fontSize: '18px',
  fontWeight: 600,
  color: vars.color.accent,
});

export const variableStatus = style({
  fontSize: '20px',
});

export const variableDescription = style({
  fontSize: '14px',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
});

export const variableMatchRate = style({
  marginBottom: vars.space.md,
});

export const matchLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: vars.space.sm,
  fontSize: '13px',
  color: vars.color.textMuted,
});

export const matchPercent = style({
  fontWeight: 700,
  fontFamily: vars.font.mono,
  color: vars.color.text,
});

export const miniProgressBar = style({
  background: vars.color.surface,
  borderRadius: vars.radius.sm,
  height: '8px',
  overflow: 'hidden',
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const miniProgressFill = style({
  height: '100%',
  borderRadius: vars.radius.sm,
  transition: `width ${vars.duration.slow} ${vars.ease.out}`,
});

export const miniProgressFillComplete = style([miniProgressFill, {
  background: vars.color.success,
}]);

export const miniProgressFillInProgress = style([miniProgressFill, {
  background: vars.color.amber,
}]);

export const miniProgressFillNotStarted = style([miniProgressFill, {
  background: vars.color.textFaint,
}]);

export const variableFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.color.borderSubtle}`,
  fontSize: '13px',
  color: vars.color.textMuted,
});

export const completedDate = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  color: vars.color.success,
  fontWeight: 500,
});

export const codeSection = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.textMuted,
});

// ============================================
// TIMELINE SECTION
// ============================================

export const timelineSection = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['3xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const timeline = style({
  position: 'relative',
  paddingLeft: vars.space['2xl'],
  '::before': {
    content: '""',
    position: 'absolute',
    left: '11px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(to bottom, ${vars.color.accent}, ${vars.color.border})`,
  },
});

export const timelineItem = style({
  position: 'relative',
  paddingBottom: vars.space.xl,
  ':last-child': {
    paddingBottom: 0,
  },
});

export const timelineDot = style({
  position: 'absolute',
  left: `-${vars.space['2xl']}`,
  top: '4px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
});

export const timelineDotComplete = style([timelineDot, {
  background: vars.color.success,
  boxShadow: `0 0 12px ${vars.color.successGlow}`,
  color: vars.color.bg,
}]);

export const timelineDotInProgress = style([timelineDot, {
  background: vars.color.amber,
  boxShadow: `0 0 12px ${vars.color.amberGlow}`,
  color: vars.color.bg,
  animation: `${pulse} 2s ease-in-out infinite`,
}]);

export const timelineDotPending = style([timelineDot, {
  background: vars.color.surface,
  border: `2px solid ${vars.color.border}`,
  color: vars.color.textMuted,
}]);

export const timelineContent = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
});

export const timelineDate = style({
  fontSize: '12px',
  color: vars.color.textMuted,
  marginBottom: vars.space.xs,
  fontFamily: vars.font.mono,
});

export const timelineTitle = style({
  fontSize: '16px',
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: vars.space.xs,
});

export const timelineDescription = style({
  fontSize: '14px',
  color: vars.color.textSecondary,
});

// ============================================
// STATS SUMMARY
// ============================================

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: vars.space.lg,
  marginTop: vars.space.xl,
});

export const statCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  textAlign: 'center',
});

export const statValue = style({
  fontSize: '32px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  color: vars.color.text,
  marginBottom: vars.space.xs,
});

export const statLabel = style({
  fontSize: '13px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});
