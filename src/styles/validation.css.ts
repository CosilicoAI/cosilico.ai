import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Validation Dashboard Styles - Cosilico Dark Theme
 * Uses vanilla-extract CSS-in-JS with theme tokens
 */

// ============================================
// GRID BACKGROUND
// ============================================

export const gridBg = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  pointerEvents: 'none',
  background: `
    linear-gradient(${vars.color.border} 1px, transparent 1px),
    linear-gradient(90deg, ${vars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: '32px 32px',
  opacity: 0.3,
  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
});

// ============================================
// PAGE CONTAINER
// ============================================

export const validationPage = style({
  position: 'relative',
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  minHeight: '100vh',
  zIndex: 1,
});

// ============================================
// HEADER
// ============================================

export const validationHeader = style({
  background: `linear-gradient(135deg, ${vars.color.bgCard} 0%, ${vars.color.surface} 100%)`,
  borderBottom: `1px solid ${vars.color.border}`,
  color: vars.color.text,
  padding: vars.space['2xl'],
  marginBottom: vars.space['2xl'],
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
  },
});

export const headerContent = style({
  maxWidth: '1200px',
  margin: '0 auto',
});

export const headerTitle = style({
  fontSize: '48px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.md} 0`,
  letterSpacing: '-0.02em',
  background: `linear-gradient(135deg, ${vars.color.text}, ${vars.color.accent})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const subtitle = style({
  fontSize: '20px',
  color: vars.color.textSecondary,
  margin: `0 0 ${vars.space.lg} 0`,
  fontWeight: 400,
});

export const headerMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.lg,
  fontSize: '14px',
  color: vars.color.textMuted,
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const metaItemCode = style({
  background: vars.color.surface,
  padding: '2px 8px',
  borderRadius: vars.radius.sm,
  fontFamily: vars.font.mono,
  fontSize: '13px',
  color: vars.color.accent,
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const sampleBadge = style({
  background: vars.color.amber,
  color: vars.color.bg,
  padding: '4px 12px',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

// ============================================
// OVERALL STATS
// ============================================

export const overallStats = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['2xl']}`,
  padding: `0 ${vars.space.lg}`,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.lg,
});

export const statCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  textAlign: 'center',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    borderColor: vars.color.accent,
    boxShadow: `0 4px 12px ${vars.color.accentGlow}`,
    transform: 'translateY(-2px)',
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: vars.color.borderGlow,
    opacity: 0,
    transition: `opacity ${vars.duration.normal}`,
  },
  selectors: {
    '&:hover::before': {
      opacity: 1,
    },
  },
});

export const statCardHighlight = style({
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, ${vars.color.accentDim} 100%)`,
  color: vars.color.bg,
  border: 'none',
  boxShadow: `0 8px 24px ${vars.color.accentGlow}`,
});

export const statValue = style({
  fontSize: '36px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  marginBottom: vars.space.sm,
  display: 'block',
});

export const statLabel = style({
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  opacity: 0.8,
});

// ============================================
// SPEED SECTION
// ============================================

export const speedSection = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['2xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const sectionTitle = style({
  fontSize: '28px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.lg} 0`,
  color: vars.color.text,
});

export const speedGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.space.lg,
});

export const speedCard = style({
  background: vars.color.bgCard,
  border: `2px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

export const speedHeader = style({
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: vars.color.accent,
  marginBottom: vars.space.md,
});

export const speedMetric = style({
  marginBottom: vars.space.md,
});

export const speedValue = style({
  fontSize: '32px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  color: vars.color.text,
  display: 'block',
});

export const speedLabel = style({
  fontSize: '14px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const speedDetail = style({
  fontSize: '13px',
  color: vars.color.textFaint,
});

// ============================================
// VALIDATORS
// ============================================

export const validatorsSection = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['2xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const validatorsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.md,
});

export const validatorCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
});

export const validatorCardAvailable = style({
  borderColor: vars.color.success,
  background: `linear-gradient(to bottom, ${vars.color.bgCard}, ${vars.color.surface})`,
  boxShadow: `0 0 12px ${vars.color.successGlow}`,
});

export const validatorCardUnavailable = style({
  opacity: 0.5,
});

export const validatorName = style({
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '4px',
  textTransform: 'capitalize',
  color: vars.color.text,
});

export const validatorVersion = style({
  fontSize: '13px',
  color: vars.color.textMuted,
  marginBottom: vars.space.md,
  fontFamily: vars.font.mono,
});

export const validatorStatus = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '13px',
  color: vars.color.textSecondary,
});

export const statusIcon = style({
  fontSize: '18px',
  color: vars.color.success,
});

// ============================================
// SECTIONS GRID
// ============================================

export const sectionsList = style({
  maxWidth: '1200px',
  margin: `0 auto ${vars.space['2xl']}`,
  padding: `0 ${vars.space.lg}`,
});

export const sectionsGrid = style({
  display: 'grid',
  gap: vars.space.lg,
});

export const sectionCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    boxShadow: `0 4px 16px ${vars.color.accentGlow}`,
  },
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: vars.space.md,
  flexWrap: 'wrap',
  gap: vars.space.md,
});

export const sectionTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

export const sectionTitleText = style({
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: vars.font.display,
  margin: 0,
  color: vars.color.text,
});

export const sectionCode = style({
  background: vars.color.surface,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
  fontSize: '13px',
  color: vars.color.accent,
  fontFamily: vars.font.mono,
  fontWeight: 600,
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const sectionVariable = style({
  background: vars.color.surface,
  padding: '6px 12px',
  borderRadius: vars.radius.sm,
  fontSize: '14px',
  color: vars.color.textMuted,
  fontFamily: vars.font.mono,
  border: `1px solid ${vars.color.borderSubtle}`,
});

// ============================================
// SECTION STATS
// ============================================

export const sectionStats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: vars.space.md,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const sectionStat = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const sectionStatLabel = style({
  fontSize: '12px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: vars.color.textMuted,
});

export const sectionStatValue = style({
  fontSize: '20px',
  fontWeight: 700,
  fontFamily: vars.font.display,
  color: vars.color.text,
});

// ============================================
// VALIDATOR BREAKDOWN
// ============================================

export const validatorBreakdown = style({
  display: 'flex',
  gap: vars.space.lg,
  marginBottom: vars.space.md,
  flexWrap: 'wrap',
});

export const breakdownItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  padding: '8px 16px',
  background: vars.color.surface,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.borderSubtle}`,
});

export const breakdownName = style({
  fontSize: '13px',
  fontWeight: 500,
  color: vars.color.textMuted,
});

export const breakdownRate = style({
  fontSize: '14px',
  fontWeight: 700,
  color: vars.color.accent,
  fontFamily: vars.font.mono,
});

// ============================================
// MISMATCHES
// ============================================

export const mismatches = style({
  marginTop: vars.space.md,
});

export const mismatchesSummary = style({
  fontSize: '14px',
  fontWeight: 600,
  color: vars.color.textMuted,
  cursor: 'pointer',
  padding: '8px 12px',
  background: vars.color.surface,
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.borderSubtle}`,
  display: 'inline-block',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    background: vars.color.bgCard,
    color: vars.color.accent,
    borderColor: vars.color.accent,
  },
});

export const mismatchList = style({
  listStyle: 'none',
  padding: 0,
  margin: `${vars.space.md} 0 0 0`,
});

export const mismatchItem = style({
  padding: vars.space.md,
  background: vars.color.surface,
  borderLeft: `3px solid ${vars.color.amber}`,
  borderRadius: vars.radius.sm,
  marginBottom: vars.space.md,
  border: `1px solid ${vars.color.borderSubtle}`,
  borderLeftColor: vars.color.amber,
  borderLeftWidth: '3px',
});

export const mismatchHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.sm,
  gap: vars.space.md,
  flexWrap: 'wrap',
});

export const mismatchHeaderStrong = style({
  color: vars.color.text,
  fontSize: '14px',
  fontWeight: 600,
});

export const mismatchCount = style({
  fontSize: '13px',
  fontWeight: 600,
  color: vars.color.amber,
  background: vars.color.amberGlow,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.amber}`,
});

export const mismatchExplanation = style({
  fontSize: '14px',
  color: vars.color.textSecondary,
  margin: `0 0 ${vars.space.sm} 0`,
  lineHeight: 1.5,
});

export const mismatchCitation = style({
  fontSize: '13px',
  color: vars.color.textMuted,
  fontStyle: 'normal',
  fontFamily: vars.font.mono,
  display: 'block',
  marginBottom: vars.space.sm,
});

export const mismatchIssue = style({
  fontSize: '13px',
  color: vars.color.accent,
  fontWeight: 600,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  transition: `color ${vars.duration.fast}`,
  ':hover': {
    textDecoration: 'underline',
    color: vars.color.accentBright,
  },
});

// ============================================
// LOADING & ERROR
// ============================================

export const loading = style({
  maxWidth: '1200px',
  margin: `${vars.space['4xl']} auto`,
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
  textAlign: 'center',
  fontSize: '18px',
  color: vars.color.textMuted,
});

export const error = style({
  maxWidth: '1200px',
  margin: `${vars.space['4xl']} auto`,
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
  textAlign: 'center',
  fontSize: '18px',
  color: vars.color.error,
});

// ============================================
// RESPONSIVE
// ============================================

export const responsiveHeaderTitle = style({
  '@media': {
    '(max-width: 768px)': {
      fontSize: '32px',
    },
  },
});

export const responsiveHeaderMeta = style({
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: vars.space.md,
    },
  },
});

export const responsiveOverallStats = style({
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const responsiveSectionHeader = style({
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const responsiveSectionStats = style({
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const responsiveValidatorBreakdown = style({
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: vars.space.sm,
    },
  },
});
