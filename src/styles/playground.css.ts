import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico API Playground Styles
 * Developer console meets financial dashboard
 */

// ============================================
// ANIMATIONS
// ============================================

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.4 },
});

// ============================================
// BASE LAYOUT
// ============================================
// Note: Grid background and page wrapper are provided by PageLayout component

// ============================================
// MODE TOGGLE CONTAINER
// ============================================

export const modeToggleContainer = style({
  gridColumn: '1 / -1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.md} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 900px)': {
      flexDirection: 'column',
      gap: vars.space.md,
      padding: vars.space.md,
    },
  },
});

export const playgroundBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.accent,
  background: vars.color.accentGlow,
  padding: '6px 14px',
  borderRadius: '100px',
  letterSpacing: '0.02em',
});

export const badgeDot = style({
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const badgeDotDemo = style({
  background: vars.color.amber,
});

globalStyle(`.${playgroundBadge}:has(.${badgeDotDemo})`, {
  color: vars.color.amber,
  background: vars.color.amberGlow,
});

// ============================================
// MODE TOGGLE
// ============================================

export const modeToggle = style({
  display: 'flex',
  gap: '4px',
  background: vars.color.surface,
  padding: '4px',
  borderRadius: vars.radius.md,
});

export const modeButton = style({
  padding: '8px 16px',
  background: 'transparent',
  border: 'none',
  borderRadius: '6px',
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  whiteSpace: 'nowrap',
  ':hover': {
    color: vars.color.text,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '2px',
  },
});

export const modeButtonActive = style({
  background: vars.color.bgCard,
  color: vars.color.accent,
});

// ============================================
// MAIN CONTAINER
// ============================================

export const playgroundContainer = style({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: '340px 1fr',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
  gap: vars.space.xl,
  padding: `${vars.space.xl} ${vars.space.lg}`,
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
      padding: vars.space.md,
    },
  },
});

// ============================================
// INPUT PANEL
// ============================================

export const inputPanel = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  height: 'fit-content',
  '@media': {
    '(max-width: 900px)': {
      padding: vars.space.md,
    },
  },
});

export const panelHeader = style({
  marginBottom: vars.space.sm,
});

globalStyle(`${panelHeader} h2`, {
  fontSize: '1.1rem',
  fontWeight: 600,
  margin: '0 0 6px 0',
  letterSpacing: '-0.02em',
});

export const panelHint = style({
  fontSize: '0.8rem',
  color: vars.color.textMuted,
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

globalStyle(`${inputGroup} label`, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const labelText = style({
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const labelValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.95rem',
  color: vars.color.accent,
  fontWeight: 500,
});

// Range Slider
globalStyle(`${inputGroup} input[type="range"]`, {
  WebkitAppearance: 'none',
  width: '100%',
  height: '6px',
  background: vars.color.surface,
  borderRadius: '3px',
  outline: 'none',
  cursor: 'pointer',
});

globalStyle(`${inputGroup} input[type="range"]::-webkit-slider-thumb`, {
  WebkitAppearance: 'none',
  width: '18px',
  height: '18px',
  background: vars.color.accent,
  borderRadius: '50%',
  cursor: 'grab',
  transition: `transform ${vars.duration.fast} ${vars.ease.out}, box-shadow ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${inputGroup} input[type="range"]::-webkit-slider-thumb:hover`, {
  transform: 'scale(1.15)',
  boxShadow: `0 0 0 6px ${vars.color.accentGlow}`,
});

globalStyle(`${inputGroup} input[type="range"]::-webkit-slider-thumb:active`, {
  cursor: 'grabbing',
});

export const rangeLabels = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.7rem',
  color: vars.color.textFaint,
  fontFamily: vars.font.mono,
});

// Select
globalStyle(`${inputGroup} select`, {
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: '12px 14px',
  fontSize: '0.95rem',
  color: vars.color.text,
  cursor: 'pointer',
  outline: 'none',
  transition: `border-color ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${inputGroup} select:focus`, {
  borderColor: vars.color.accentIntense,
});

// Button Group
export const buttonGroup = style({
  display: 'flex',
  gap: '6px',
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
    },
  },
});

globalStyle(`${buttonGroup} button`, {
  flex: 1,
  padding: '10px 8px',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${buttonGroup} button:hover`, {
  background: vars.color.bg,
  color: vars.color.text,
});

globalStyle(`${buttonGroup} button.active`, {
  background: vars.color.accentGlow,
  borderColor: vars.color.accent,
  color: vars.color.accent,
});

globalStyle(`${buttonGroup} button:focus-visible`, {
  outline: `2px solid ${vars.color.accent}`,
  outlineOffset: '2px',
});

// API Hint
export const apiHint = style({
  marginTop: 'auto',
  padding: '14px',
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8rem',
  '@media': {
    '(max-width: 900px)': {
      marginTop: '20px',
    },
  },
});

globalStyle(`${apiHint} code`, {
  fontFamily: vars.font.mono,
  color: vars.color.accent,
});

globalStyle(`${apiHint} span`, {
  color: vars.color.textFaint,
});

// ============================================
// RESULTS PANEL
// ============================================

export const resultsPanel = style({
  padding: '24px 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  '@media': {
    '(max-width: 900px)': {
      padding: '20px',
    },
  },
});

// Tabs
export const resultsTabs = style({
  display: 'flex',
  gap: '4px',
  background: vars.color.bgCard,
  padding: '4px',
  borderRadius: '10px',
  width: 'fit-content',
});

globalStyle(`${resultsTabs} button`, {
  padding: '10px 20px',
  background: 'transparent',
  border: 'none',
  borderRadius: vars.radius.md,
  fontSize: '0.9rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${resultsTabs} button:hover`, {
  color: vars.color.text,
});

globalStyle(`${resultsTabs} button.active`, {
  background: vars.color.surface,
  color: vars.color.text,
});

globalStyle(`${resultsTabs} button:focus-visible`, {
  outline: `2px solid ${vars.color.accent}`,
  outlineOffset: '2px',
});

// Results Content
export const resultsContent = style({
  flex: 1,
  transition: `opacity ${vars.duration.fast} ${vars.ease.out}`,
});

export const resultsContentCalculating = style({
  opacity: 0.6,
});

// ============================================
// SUMMARY VIEW
// ============================================

export const summaryView = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
});

// Net Income Hero
export const netIncomeHero = style({
  textAlign: 'center',
  padding: '36px 24px',
  background: `linear-gradient(135deg, ${vars.color.bgCard} 0%, ${vars.color.accentGlow} 100%)`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
});

export const netLabel = style({
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: vars.space.sm,
});

export const netValue = style({
  display: 'block',
  fontFamily: vars.font.mono,
  fontSize: '3.5rem',
  fontWeight: 700,
  color: vars.color.text,
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  marginBottom: vars.space.sm,
  '@media': {
    '(max-width: 900px)': {
      fontSize: '2.5rem',
    },
  },
});

export const netSubtext = style({
  fontSize: '0.9rem',
  color: vars.color.textFaint,
});

// Breakdown Visual
export const breakdownVisual = style({
  padding: '20px',
  background: vars.color.bgCard,
  borderRadius: vars.radius.lg,
});

export const breakdownBar = style({
  height: '32px',
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  display: 'flex',
  background: vars.color.surface,
});

export const barSegment = style({
  height: '100%',
  transition: `width ${vars.duration.normal} ${vars.ease.out}`,
});

export const barSegmentTaxes = style({
  background: vars.color.error,
});

export const barSegmentTakeHome = style({
  background: vars.color.accent,
});

export const barSegmentBenefits = style({
  background: vars.color.success,
});

export const breakdownLegend = style({
  display: 'flex',
  gap: vars.space.lg,
  marginTop: '14px',
  flexWrap: 'wrap',
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
      gap: vars.space.sm,
    },
  },
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

export const legendDot = style({
  width: '10px',
  height: '10px',
  borderRadius: '3px',
});

export const legendItemTaxes = style({});
globalStyle(`${legendItemTaxes} .${legendDot}`, {
  background: vars.color.error,
});

export const legendItemTakeHome = style({});
globalStyle(`${legendItemTakeHome} .${legendDot}`, {
  background: vars.color.accent,
});

export const legendItemBenefits = style({});
globalStyle(`${legendItemBenefits} .${legendDot}`, {
  background: vars.color.success,
});

// Detail Cards
export const detailGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const detailCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: '20px',
});

export const detailCardTaxes = style({});
globalStyle(`${detailCardTaxes} h3`, {
  color: vars.color.error,
});
globalStyle(`${detailCardTaxes} .detail-total`, {
  color: vars.color.error,
});

export const detailCardBenefits = style({});
globalStyle(`${detailCardBenefits} h3`, {
  color: vars.color.success,
});
globalStyle(`${detailCardBenefits} .detail-total`, {
  color: vars.color.success,
});

globalStyle(`${detailCard} h3`, {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 12px 0',
});

export const detailTotal = style({
  fontFamily: vars.font.mono,
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: vars.space.md,
});

export const detailBreakdown = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.color.border}`,
});

export const detailRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
});

globalStyle(`${detailRow} span:first-child`, {
  color: vars.color.textMuted,
});

globalStyle(`${detailRow} span:last-child`, {
  fontFamily: vars.font.mono,
  color: vars.color.text,
});

export const detailRates = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: vars.space.md,
  paddingTop: '12px',
  borderTop: `1px solid ${vars.color.border}`,
  fontSize: '0.8rem',
  color: vars.color.textFaint,
});

export const detailNote = style({
  fontSize: '0.85rem',
  color: vars.color.textFaint,
  fontStyle: 'italic',
  marginTop: '12px',
});

// ============================================
// API VIEW
// ============================================

export const apiView = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const codeBlock = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const codeHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  background: vars.color.surface,
  borderBottom: `1px solid ${vars.color.border}`,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
});

export const method = style({
  background: vars.color.accentGlow,
  color: vars.color.accent,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
  fontWeight: 600,
});

export const methodGet = style({
  background: vars.color.accentGlow,
  color: vars.color.accent,
});

export const endpoint = style({
  color: vars.color.textMuted,
});

export const status = style({
  background: vars.color.successGlow,
  color: vars.color.success,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
  fontWeight: 600,
});

export const time = style({
  color: vars.color.textFaint,
  marginLeft: 'auto',
});

globalStyle(`${codeBlock} pre`, {
  margin: 0,
  padding: vars.space.md,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  lineHeight: 1.6,
  color: vars.color.textMuted,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

// ============================================
// CITATIONS VIEW
// ============================================

export const citationsView = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const citationsIntro = style({
  fontSize: '0.95rem',
  color: vars.color.textMuted,
  margin: 0,
});

export const citationList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const citationItem = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: '10px',
  padding: vars.space.md,
  transition: `border-color ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accentIntense,
  },
});

export const citationHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.sm,
});

export const citationLabel = style({
  fontWeight: 500,
  color: vars.color.text,
});

export const citationValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.accent,
});

export const citationLink = style({
  display: 'block',
  fontSize: '0.85rem',
  color: vars.color.textMuted,
  textDecoration: 'none',
  transition: `color ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    color: vars.color.accent,
  },
});

// ============================================
// LAW ARCHIVE VIEW
// ============================================

export const lawArchivePanel = style({});

export const lawSearchInput = style({
  width: '100%',
  padding: '12px 14px',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: '0.95rem',
  color: vars.color.text,
  outline: 'none',
  transition: `border-color ${vars.duration.fast} ${vars.ease.out}`,
  fontFamily: vars.font.display,
  '::placeholder': {
    color: vars.color.textFaint,
  },
  ':focus': {
    borderColor: vars.color.accentIntense,
  },
});

export const statuteList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  flex: 1,
  overflowY: 'auto',
  maxHeight: '400px',
});

export const statuteItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  padding: '12px 14px',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  textAlign: 'left',
  width: '100%',
  ':hover': {
    borderColor: vars.color.accentIntense,
    background: vars.color.bg,
  },
});

export const statuteItemActive = style({
  borderColor: vars.color.accent,
  background: vars.color.accentGlow,
});

export const statuteCitation = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.accent,
  fontWeight: 500,
});

export const statuteTitle = style({
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

globalStyle(`${statuteItemActive} .${statuteTitle}`, {
  color: vars.color.text,
});

export const noResults = style({
  textAlign: 'center',
  padding: '20px',
  color: vars.color.textFaint,
  fontSize: '0.9rem',
});

// Statute View
export const lawResults = style({});

export const statuteView = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const statuteHeading = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  margin: 0,
  color: vars.color.text,
  letterSpacing: '-0.02em',
});

export const statuteMeta = style({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
});

export const metaItem = style({
  fontSize: '0.85rem',
  color: vars.color.textFaint,
  fontFamily: vars.font.mono,
});

export const statuteToc = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: '10px',
  padding: vars.space.md,
});

globalStyle(`${statuteToc} h4`, {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 12px 0',
});

globalStyle(`${statuteToc} ul`, {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

globalStyle(`${statuteToc} li`, {
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  padding: '6px 10px',
  background: vars.color.surface,
  borderRadius: '6px',
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${statuteToc} li:hover`, {
  background: vars.color.bg,
  color: vars.color.accent,
});

export const statuteText = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: '10px',
  padding: '20px',
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  lineHeight: 1.8,
  color: vars.color.textMuted,
  whiteSpace: 'pre-wrap',
  margin: 0,
  overflowX: 'auto',
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  color: vars.color.textFaint,
  fontSize: '0.95rem',
});

// Versions View
export const versionsView = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const versionsIntro = style({
  fontSize: '0.95rem',
  color: vars.color.textMuted,
  margin: 0,
});

globalStyle(`${versionsIntro} code`, {
  fontFamily: vars.font.mono,
  background: vars.color.surface,
  padding: '2px 8px',
  borderRadius: vars.radius.sm,
  color: vars.color.accent,
});

export const versionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const versionItem = style({
  display: 'grid',
  gridTemplateColumns: '100px 180px 1fr',
  gap: vars.space.md,
  padding: '14px 16px',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: '10px',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  cursor: 'pointer',
  ':hover': {
    borderColor: vars.color.accentIntense,
  },
  '@media': {
    '(max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.sm,
    },
  },
});

export const versionItemCurrent = style({
  borderColor: vars.color.accent,
  background: vars.color.accentGlow,
});

export const versionDate = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.text,
});

export const versionLabel = style({
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
});

globalStyle(`${versionItemCurrent} .${versionLabel}`, {
  color: vars.color.accent,
});

export const versionNote = style({
  fontSize: '0.85rem',
  color: vars.color.textFaint,
});

export const apiExample = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: '12px 16px',
  marginTop: vars.space.sm,
});

globalStyle(`${apiExample} code`, {
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.accent,
});

// ============================================
// FOOTER
// ============================================

export const playgroundFooter = style({
  borderTop: `1px solid ${vars.color.border}`,
  background: vars.color.bgCard,
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
});

export const footerContent = style({
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.space.lg,
  '@media': {
    '(max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
});

export const footerText = style({});

globalStyle(`${footerText} h3`, {
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: '0 0 6px 0',
  letterSpacing: '-0.02em',
});

globalStyle(`${footerText} p`, {
  fontSize: '0.95rem',
  color: vars.color.textMuted,
  margin: 0,
});

export const footerActions = style({
  display: 'flex',
  gap: '12px',
  '@media': {
    '(max-width: 900px)': {
      width: '100%',
      flexDirection: 'column',
    },
  },
});

export const btnPrimary = style({
  padding: '12px 24px',
  fontSize: '0.9rem',
  fontWeight: 500,
  borderRadius: vars.radius.md,
  textDecoration: 'none',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  background: vars.color.accent,
  color: vars.color.void,
  border: 'none',
  ':hover': {
    filter: 'brightness(1.1)',
    transform: 'translateY(-1px)',
  },
  '@media': {
    '(max-width: 900px)': {
      width: '100%',
      textAlign: 'center',
    },
  },
});

export const btnSecondary = style({
  padding: '12px 24px',
  fontSize: '0.9rem',
  fontWeight: 500,
  borderRadius: vars.radius.md,
  textDecoration: 'none',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  background: 'transparent',
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    background: vars.color.surface,
    borderColor: vars.color.textMuted,
  },
  '@media': {
    '(max-width: 900px)': {
      width: '100%',
      textAlign: 'center',
    },
  },
});
