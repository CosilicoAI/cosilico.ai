import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Thesis Page - Redesigned
 *
 * Design: Editorial sophistication with data visualization elegance
 * Layout: Wide content areas with floating navigation
 * Motion: Smooth scroll-linked animations, hover states
 */

// ============================================
// GRID BACKGROUND
// ============================================

export const gridBg = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `
    linear-gradient(${vars.color.border} 1px, transparent 1px),
    linear-gradient(90deg, ${vars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
  opacity: 0.3,
  pointerEvents: 'none',
  zIndex: 0,
});

// ============================================
// BASE STYLES
// ============================================

export const thesis = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  minHeight: '100vh',
  lineHeight: 1.7,
  paddingTop: '73px',
});

// ============================================
// NAVIGATION
// ============================================

export const thesisTopNav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${vars.space.lg}`,
  background: 'rgba(8, 8, 12, 0.85)',
  backdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${vars.color.border}`,
  zIndex: 100,
});

export const thesisLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.font.display,
  fontSize: '1.125rem',
  fontWeight: 600,
  color: vars.color.text,
  textDecoration: 'none',
  letterSpacing: '-0.02em',
  transition: `opacity ${vars.duration.fast}`,
  ':hover': {
    opacity: 0.7,
  },
});

export const thesisLogoIcon = style({
  width: '26px',
  height: '26px',
});

export const thesisNav = style({
  position: 'fixed',
  top: '80px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '4px',
  padding: '6px',
  background: 'rgba(14, 14, 20, 0.9)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius['2xl'],
  zIndex: 50,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  '@media': {
    '(max-width: 768px)': {
      top: 'auto',
      bottom: vars.space.md,
      flexWrap: 'wrap',
      maxWidth: '95%',
      justifyContent: 'center',
      padding: '4px',
    },
  },
});

export const navButton = style({
  padding: '10px 16px',
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 500,
  background: 'transparent',
  color: vars.color.textMuted,
  border: 'none',
  borderRadius: vars.radius.xl,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  whiteSpace: 'nowrap',
  ':hover': {
    color: vars.color.text,
    background: vars.color.bgCard,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '2px',
  },
  '@media': {
    '(max-width: 768px)': {
      padding: '8px 12px',
      fontSize: '0.75rem',
    },
  },
});

export const navButtonActive = style({
  background: vars.color.accent,
  color: vars.color.bg,
});

// ============================================
// HERO
// ============================================

export const thesisHero = style({
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: `140px ${vars.space.lg} ${vars.space['4xl']}`,
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: `radial-gradient(ellipse at center, ${vars.color.accentGlow} 0%, transparent 70%)`,
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: 0.5,
  },
});

export const thesisLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  color: vars.color.accent,
  marginBottom: vars.space.md,
  position: 'relative',
  zIndex: 1,
});

export const heroTitle = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
  fontWeight: 700,
  marginBottom: vars.space.lg,
  letterSpacing: '-0.03em',
  position: 'relative',
  zIndex: 1,
  background: `linear-gradient(135deg, ${vars.color.text} 0%, ${vars.color.text} 50%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const thesisSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  maxWidth: '550px',
  lineHeight: 1.7,
  position: 'relative',
  zIndex: 1,
});

export const thesisMeta = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  marginTop: vars.space.xl,
  lineHeight: 1.7,
  position: 'relative',
  zIndex: 1,
});

// ============================================
// SECTIONS
// ============================================

export const thesisSection = style({
  minHeight: '100vh',
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      minHeight: 'auto',
      padding: `${vars.space['3xl']} ${vars.space.md}`,
    },
  },
});

export const thesisContent = style({
  maxWidth: '720px',
  width: '100%',
});

// Global styles for content elements
globalStyle(`${thesisContent} h2`, {
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
  fontWeight: 700,
  marginBottom: vars.space.xl,
  letterSpacing: '-0.02em',
  color: vars.color.text,
});

globalStyle(`${thesisContent} p`, {
  fontFamily: vars.font.body,
  fontSize: '1.2rem',
  lineHeight: 1.9,
  color: vars.color.textSecondary,
  marginBottom: vars.space.lg,
});

globalStyle(`${thesisContent} strong`, {
  color: vars.color.text,
  fontWeight: 500,
});

globalStyle(`${thesisContent} blockquote`, {
  margin: `${vars.space['2xl']} 0`,
  padding: `${vars.space.xl} ${vars.space.xl}`,
  background: vars.color.bgElevated,
  borderLeft: `3px solid ${vars.color.accent}`,
  borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  fontFamily: vars.font.body,
  fontStyle: 'italic',
  fontSize: '1.15rem',
  color: vars.color.text,
  lineHeight: 1.8,
});

globalStyle(`${thesisContent} blockquote cite`, {
  display: 'block',
  marginTop: vars.space.md,
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontStyle: 'normal',
  color: vars.color.textMuted,
});

// ============================================
// PROBLEM SECTION
// ============================================

export const problemLead = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 500,
  color: vars.color.text,
  marginBottom: vars.space.xl,
  lineHeight: 1.5,
});

export const problemExamples = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.md,
  marginBottom: vars.space['2xl'],
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const problemExample = style({
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-2px)',
  },
});

export const problemExampleTitle = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.accent,
  marginBottom: vars.space.sm,
});

export const problemExampleText = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  margin: 0,
});

export const statCallout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space['3xl'],
  margin: `${vars.space['2xl']} 0`,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse at center, ${vars.color.accentGlow} 0%, transparent 70%)`,
    opacity: 0.5,
  },
});

export const statNumber = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(4rem, 10vw, 6rem)',
  fontWeight: 700,
  color: vars.color.accent,
  lineHeight: 1,
  marginBottom: vars.space.md,
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '4rem',
    },
  },
});

export const statContext = style({
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  fontWeight: 500,
  color: vars.color.text,
  position: 'relative',
  zIndex: 1,
});

// ============================================
// GRAPH / VISUALIZATION
// ============================================

export const graphContainer = style({
  width: '100%',
  maxWidth: '1000px',
  margin: `${vars.space['2xl']} auto`,
  position: 'relative',
});

export const graphSvg = style({
  width: '100%',
  height: '500px',
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  '@media': {
    '(max-width: 768px)': {
      height: '400px',
    },
  },
});

export const columnLabel = style({
  fontFamily: vars.font.display,
  fontSize: '3px',
  fontWeight: 600,
  fill: vars.color.textMuted,
  textAnchor: 'middle',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const graphEdge = style({
  stroke: vars.color.border,
  strokeWidth: 0.3,
  transition: `all ${vars.duration.normal}`,
});

export const graphEdgeHighlighted = style({
  stroke: vars.color.accent,
  strokeWidth: 0.6,
  filter: `drop-shadow(0 0 4px ${vars.color.accent})`,
});

export const graphNodeCircle = style({
  fill: vars.color.bgCard,
  stroke: vars.color.border,
  strokeWidth: 0.4,
  transition: `all ${vars.duration.fast}`,
  cursor: 'pointer',
});

export const graphNodeProduct = style({
  fill: vars.color.accent,
  stroke: vars.color.accent,
});

export const graphNodeCustomer = style({
  fill: vars.color.success,
  stroke: vars.color.success,
});

export const graphNodeMarket = style({
  fill: vars.color.amber,
  stroke: vars.color.amber,
});

export const nodeLabel = style({
  fontFamily: vars.font.display,
  fontSize: '2.5px',
  fill: vars.color.text,
  textAnchor: 'middle',
  pointerEvents: 'none',
});

const detailAppear = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-50%) translateY(10px) scale(0.95)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0) scale(1)',
  },
});

export const nodeDetail = style({
  position: 'absolute',
  bottom: vars.space.lg,
  left: '50%',
  transform: 'translateX(-50%)',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: `${vars.space.lg} ${vars.space.xl}`,
  maxWidth: '420px',
  textAlign: 'center',
  animation: `${detailAppear} 0.25s ${vars.ease.spring}`,
  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
});

globalStyle(`${nodeDetail} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${nodeDetail} p`, {
  fontSize: '1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
  lineHeight: 1.6,
});

export const nodeMetric = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: vars.color.accent,
  marginBottom: vars.space.sm,
});

// ============================================
// MARKET CARDS
// ============================================

export const marketCards = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: vars.space.md,
  marginTop: vars.space['2xl'],
});

export const marketCard = style({
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

globalStyle(`${marketCard} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const marketSize = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: vars.color.accent,
  marginBottom: vars.space.sm,
});

globalStyle(`${marketCard} p`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  margin: 0,
});

export const marketAdditional = style({
  marginTop: vars.space['3xl'],
});

globalStyle(`${marketAdditional} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.lg,
});

// ============================================
// GAP SECTION
// ============================================

export const gapGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
  margin: `${vars.space['2xl']} 0`,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const gapCard = style({
  padding: vars.space.lg,
  borderRadius: vars.radius.lg,
});

globalStyle(`${gapCard} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

globalStyle(`${gapCard} ul`, {
  listStyle: 'none',
  padding: 0,
});

globalStyle(`${gapCard} li`, {
  fontSize: '1rem',
  lineHeight: 1.7,
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
  paddingLeft: vars.space.lg,
  position: 'relative',
});

globalStyle(`${gapCard} li::before`, {
  content: '',
  position: 'absolute',
  left: 0,
  top: '0.7em',
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
});

export const gapNeed = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
});

export const gapExists = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
});

export const gapConclusion = style({
  padding: vars.space.lg,
  background: vars.color.accentGlow,
  borderLeft: `3px solid ${vars.color.accent}`,
  borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  marginTop: vars.space.lg,
  fontSize: '1.1rem',
});

// ============================================
// PLATFORM CARDS
// ============================================

export const platformDetails = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.space.lg,
  marginTop: vars.space['2xl'],
});

export const platformCard = style({
  padding: vars.space.xl,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

globalStyle(`${platformCard} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.35rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${platformCard} > p`, {
  fontSize: '1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
});

globalStyle(`${platformCard} ul`, {
  listStyle: 'none',
  padding: 0,
  marginBottom: vars.space.md,
});

globalStyle(`${platformCard} li`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
  paddingLeft: vars.space.lg,
  position: 'relative',
});

globalStyle(`${platformCard} li::before`, {
  content: '→',
  position: 'absolute',
  left: 0,
  color: vars.color.accent,
  fontFamily: vars.font.mono,
});

globalStyle(`${platformCard} code`, {
  display: 'block',
  padding: vars.space.md,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.accent,
});

// ============================================
// COMPETITIVE TABLE
// ============================================

export const competitiveTableContainer = style({
  overflowX: 'auto',
  margin: `${vars.space.xl} 0`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
});

export const competitiveTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  '@media': {
    '(max-width: 480px)': {
      fontSize: '0.8rem',
    },
  },
});

globalStyle(`${competitiveTable} th, ${competitiveTable} td`, {
  padding: `${vars.space.md} ${vars.space.lg}`,
  textAlign: 'center',
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${competitiveTable} th`, {
  background: vars.color.bgElevated,
  color: vars.color.text,
  fontWeight: 600,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

globalStyle(`${competitiveTable} th:first-child, ${competitiveTable} td:first-child`, {
  textAlign: 'left',
});

export const highlightCol = style({
  background: vars.color.accentGlow,
});

export const checkIcon = style({
  color: vars.color.success,
  fontWeight: 'bold',
  fontSize: '1.1rem',
});

export const xIcon = style({
  color: vars.color.textFaint,
});

export const partialIcon = style({
  color: vars.color.amber,
});

export const competitorNotes = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.md,
  marginTop: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const competitorNote = style({
  padding: vars.space.md,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.md,
});

globalStyle(`${competitorNote} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${competitorNote} p`, {
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  margin: 0,
});

// ============================================
// BUSINESS MODEL
// ============================================

export const modelStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  margin: `${vars.space['2xl']} 0`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const stackLayer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  background: vars.color.bgCard,
  borderLeft: '4px solid transparent',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    background: vars.color.surface,
  },
});

globalStyle(`${stackLayer} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  marginBottom: '4px',
  color: vars.color.text,
});

globalStyle(`${stackLayer} p`, {
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  margin: 0,
});

export const stackPrice = style({
  fontFamily: vars.font.mono,
  fontSize: '0.95rem',
  fontWeight: 600,
  color: vars.color.accent,
});

export const stackFree = style({ borderLeftColor: vars.color.success });
export const stackApi = style({ borderLeftColor: vars.color.accent });
export const stackData = style({ borderLeftColor: vars.color.amber });
export const stackEnterprise = style({ borderLeftColor: '#ec4899' });

export const modelPrecedent = style({
  margin: `${vars.space['2xl']} 0`,
  padding: vars.space.xl,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.lg,
});

globalStyle(`${modelPrecedent} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  marginBottom: vars.space.lg,
  color: vars.color.text,
});

export const precedentGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.lg,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const precedent = style({
  textAlign: 'center',
});

export const precedentName = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const precedentRevenue = style({
  fontFamily: vars.font.display,
  fontSize: '1.75rem',
  fontWeight: 700,
  color: vars.color.accent,
});

export const comparables = style({
  marginTop: vars.space['2xl'],
});

globalStyle(`${comparables} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.lg,
});

export const comparableGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const comparable = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  textAlign: 'center',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

export const comparableName = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const comparableValue = style({
  fontFamily: vars.font.display,
  fontSize: '1.75rem',
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: '4px',
});

export const comparableType = style({
  fontSize: '0.8rem',
  color: vars.color.textMuted,
});

// ============================================
// TRACTION
// ============================================

export const tractionGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space.lg,
  margin: `${vars.space['2xl']} 0`,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const tractionStat = style({
  textAlign: 'center',
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

export const tractionValue = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 700,
  color: vars.color.accent,
  marginBottom: vars.space.sm,
});

export const tractionLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const tractionUsers = style({
  marginTop: vars.space['2xl'],
});

globalStyle(`${tractionUsers} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.lg,
});

export const userGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const userCard = style({
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

globalStyle(`${userCard} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${userCard} p`, {
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  margin: 0,
  lineHeight: 1.5,
});

export const lighthouseSection = style({
  marginTop: vars.space['2xl'],
  padding: vars.space.xl,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
});

globalStyle(`${lighthouseSection} h3`, {
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.sm}`,
  color: vars.color.text,
});

globalStyle(`${lighthouseSection} > p`, {
  margin: `0 0 ${vars.space.lg}`,
  color: vars.color.textSecondary,
});

export const lighthouseGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: vars.space.md,
});

export const lighthouseCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

globalStyle(`${lighthouseCard} h4`, {
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.sm}`,
  fontSize: '0.95rem',
  color: vars.color.accent,
});

globalStyle(`${lighthouseCard} p`, {
  margin: 0,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  lineHeight: 1.5,
});

export const tractionCoverage = style({
  marginTop: vars.space['2xl'],
});

globalStyle(`${tractionCoverage} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.lg,
});

export const coverageGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const coverageItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.lg,
  borderRadius: vars.radius.lg,
  textAlign: 'center',
});

export const coverageLive = style({
  background: vars.color.successGlow,
  border: '1px solid rgba(0, 255, 136, 0.3)',
});

export const coverageProgress = style({
  background: vars.color.amberGlow,
  border: '1px solid rgba(255, 170, 0, 0.3)',
});

export const coverageFlag = style({
  fontSize: '2rem',
  marginBottom: vars.space.sm,
});

export const coverageStatus = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: '4px',
});

export const coverageStatusLive = style({
  color: vars.color.success,
});

export const coverageStatusProgress = style({
  color: vars.color.amber,
});

export const coverageDetail = style({
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

// ============================================
// TEAM
// ============================================

export const teamGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
  marginTop: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const teamMember = style({
  padding: vars.space.xl,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

globalStyle(`${teamMember} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.35rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const teamRole = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.accent,
  marginBottom: vars.space.md,
});

globalStyle(`${teamMember} ul`, {
  listStyle: 'none',
  padding: 0,
  marginBottom: vars.space.md,
});

globalStyle(`${teamMember} li`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
  paddingLeft: vars.space.lg,
  position: 'relative',
});

globalStyle(`${teamMember} li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  color: vars.color.accent,
});

export const teamLinks = style({
  display: 'flex',
  gap: vars.space.md,
});

globalStyle(`${teamLinks} a`, {
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  color: vars.color.textMuted,
  textDecoration: 'none',
  transition: `color ${vars.duration.fast}`,
});

globalStyle(`${teamLinks} a:hover`, {
  color: vars.color.accent,
});

export const teamHiring = style({
  borderStyle: 'dashed',
});

export const teamNote = style({
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  fontStyle: 'italic',
  margin: 0,
});

// ============================================
// RISKS
// ============================================

export const risksGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.md,
  marginTop: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const riskCard = style({
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

globalStyle(`${riskCard} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const riskQ = style({
  fontFamily: vars.font.body,
  fontSize: '0.95rem',
  color: vars.color.accent,
  fontStyle: 'italic',
  marginBottom: vars.space.sm,
});

globalStyle(`${riskCard} > p:last-child`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  margin: 0,
});

// ============================================
// ASK
// ============================================

export const askContainer = style({
  margin: `${vars.space['2xl']} 0`,
});

export const askAmount = style({
  textAlign: 'center',
  padding: vars.space['3xl'],
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  marginBottom: vars.space.xl,
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse at center, ${vars.color.accentGlow} 0%, transparent 70%)`,
    opacity: 0.5,
  },
});

export const askLabel = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  marginBottom: vars.space.md,
  position: 'relative',
  zIndex: 1,
});

export const askValue = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(3rem, 8vw, 4.5rem)',
  fontWeight: 700,
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, ${vars.color.accentBright} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 480px)': {
      fontSize: '2.5rem',
    },
  },
});

export const askDetails = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const askUse = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.lg,
});

export const askMilestones = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.lg,
});

globalStyle(`${askUse} h3, ${askMilestones} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  marginBottom: vars.space.lg,
  color: vars.color.text,
});

export const fundBars = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const fundBar = style({
  position: 'relative',
  height: '36px',
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

export const fundFill = style({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  background: vars.color.accent,
  opacity: 0.3,
});

export const fundLabel = style({
  position: 'absolute',
  left: vars.space.md,
  top: '50%',
  transform: 'translateY(-50%)',
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  color: vars.color.text,
  zIndex: 1,
});

globalStyle(`${askMilestones} ul`, {
  listStyle: 'none',
  padding: 0,
});

globalStyle(`${askMilestones} li`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
  paddingLeft: vars.space.lg,
  position: 'relative',
});

globalStyle(`${askMilestones} li::before`, {
  content: '→',
  position: 'absolute',
  left: 0,
  color: vars.color.accent,
  fontFamily: vars.font.mono,
});

export const askProjections = style({
  marginTop: vars.space['2xl'],
});

globalStyle(`${askProjections} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  marginBottom: vars.space.lg,
});

export const projectionsTable = style({
  width: '100%',
  borderCollapse: 'collapse',
});

globalStyle(`${projectionsTable} th, ${projectionsTable} td`, {
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.lg}`,
  textAlign: 'left',
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${projectionsTable} th`, {
  fontSize: '0.85rem',
  color: vars.color.textMuted,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

globalStyle(`${projectionsTable} td`, {
  fontSize: '0.95rem',
});

globalStyle(`${projectionsTable} td:nth-child(2)`, {
  fontWeight: 600,
  color: vars.color.accent,
});

// ============================================
// ENCODING SECTION
// ============================================

export const encodingInsight = style({
  background: vars.color.accentGlow,
  borderLeft: `3px solid ${vars.color.accent}`,
  borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  padding: vars.space.lg,
  margin: `${vars.space.xl} 0`,
});

globalStyle(`${encodingInsight} h3`, {
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.sm}`,
  fontSize: '1.1rem',
  color: vars.color.text,
});

globalStyle(`${encodingInsight} p`, {
  margin: 0,
  color: vars.color.textSecondary,
});

export const encodingLoop = style({
  margin: `${vars.space['2xl']} 0`,
});

globalStyle(`${encodingLoop} h3`, {
  fontFamily: vars.font.display,
  marginBottom: vars.space.md,
});

export const loopSteps = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  marginTop: vars.space.lg,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const loopStep = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

export const stepNum = style({
  width: '28px',
  height: '28px',
  background: vars.color.accent,
  color: vars.color.bg,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '0.875rem',
  flexShrink: 0,
});

export const stepText = style({
  fontFamily: vars.font.display,
  color: vars.color.text,
  fontSize: '0.95rem',
});

export const encodingOracles = style({
  margin: `${vars.space['2xl']} 0`,
});

export const oracleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.md,
  marginTop: vars.space.lg,
});

export const oracleCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

globalStyle(`${oracleCard} h4`, {
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.sm}`,
  color: vars.color.text,
  fontSize: '1rem',
});

globalStyle(`${oracleCard} p`, {
  margin: 0,
  color: vars.color.textSecondary,
  fontSize: '0.9rem',
});

export const oracleNote = style({
  marginTop: vars.space.md,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  fontStyle: 'italic',
});

export const encodingMoat = style({
  margin: `${vars.space['2xl']} 0`,
});

export const moatComparison = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space.lg,
  margin: `${vars.space.lg} 0`,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const moatOld = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  opacity: 0.7,
});

export const moatNew = style({
  background: vars.color.accentGlow,
  border: `1px solid ${vars.color.accent}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
});

globalStyle(`${moatOld} h4, ${moatNew} h4`, {
  fontFamily: vars.font.display,
  margin: `0 0 ${vars.space.md}`,
  fontSize: '1rem',
  color: vars.color.text,
});

globalStyle(`${moatOld} ul, ${moatNew} ul`, {
  margin: 0,
  paddingLeft: vars.space.lg,
});

globalStyle(`${moatOld} li, ${moatNew} li`, {
  color: vars.color.textSecondary,
  fontSize: '0.95rem',
  marginBottom: vars.space.sm,
});

export const moatConclusion = style({
  fontSize: '1.05rem',
  color: vars.color.textSecondary,
});

export const encodingScale = style({
  margin: `${vars.space['2xl']} 0`,
});

export const scaleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: vars.space.md,
  marginTop: vars.space.lg,
});

export const scaleItem = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: vars.font.display,
  color: vars.color.text,
  fontSize: '0.95rem',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

export const scaleMult = style({
  background: vars.color.accent,
  color: vars.color.bg,
  padding: `4px ${vars.space.sm}`,
  borderRadius: vars.radius.lg,
  fontSize: '0.8rem',
  fontWeight: 600,
});

export const encodingTechnical = style({
  marginTop: vars.space.xl,
  textAlign: 'center',
});

export const technicalLink = style({
  display: 'inline-block',
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.display,
  color: vars.color.accent,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    borderColor: vars.color.accent,
    background: vars.color.accentGlow,
  },
});

// ============================================
// CITATIONS
// ============================================

export const citeWrapper = style({
  position: 'relative',
  display: 'inline',
});

export const cite = style({
  color: vars.color.accent,
  cursor: 'pointer',
  fontFamily: vars.font.mono,
  fontSize: '0.7em',
  marginLeft: '2px',
  transition: `color ${vars.duration.fast}`,
  ':hover': {
    color: vars.color.accentBright,
  },
});

const citeAppear = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-50%) translateY(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0)',
  },
});

export const citeCard = style({
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  minWidth: '280px',
  maxWidth: '350px',
  zIndex: 100,
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
  animation: `${citeAppear} 0.15s ${vars.ease.out}`,
});

export const citeTitle = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 500,
  color: vars.color.text,
  marginBottom: '4px',
  lineHeight: 1.4,
});

export const citeAuthor = style({
  fontSize: '0.8rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const citeLink = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  color: vars.color.accent,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

// ============================================
// REFERENCES
// ============================================

export const thesisReferences = style({
  minHeight: 'auto',
  padding: `${vars.space['3xl']} ${vars.space.lg}`,
  background: vars.color.bgElevated,
  borderTop: `1px solid ${vars.color.border}`,
});

export const referenceList = style({
  listStyle: 'none',
  padding: 0,
  counterReset: 'ref-counter',
});

globalStyle(`${referenceList} li`, {
  counterIncrement: 'ref-counter',
  position: 'relative',
  paddingLeft: vars.space['2xl'],
  marginBottom: vars.space.md,
  fontSize: '0.95rem',
  lineHeight: 1.6,
  color: vars.color.textSecondary,
});

globalStyle(`${referenceList} li::before`, {
  content: '"[" counter(ref-counter) "]"',
  position: 'absolute',
  left: 0,
  fontFamily: vars.font.mono,
  color: vars.color.accent,
  fontWeight: 500,
  fontSize: '0.85rem',
});

globalStyle(`${referenceList} li em`, {
  color: vars.color.text,
  fontStyle: 'normal',
});

globalStyle(`${referenceList} li a`, {
  color: vars.color.textMuted,
  textDecoration: 'none',
  wordBreak: 'break-all',
});

globalStyle(`${referenceList} li a:hover`, {
  color: vars.color.accent,
});

// ============================================
// CTA
// ============================================

export const thesisCta = style({
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  textAlign: 'center',
  background: vars.color.bgElevated,
  borderTop: `1px solid ${vars.color.border}`,
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '300px',
    background: `radial-gradient(ellipse at center top, ${vars.color.accentGlow} 0%, transparent 70%)`,
    pointerEvents: 'none',
  },
});

globalStyle(`${thesisCta} h2`, {
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.md,
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${thesisCta} p`, {
  fontFamily: vars.font.body,
  fontSize: '1.2rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
  position: 'relative',
  zIndex: 1,
});

export const ctaButtons = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

export const btnPrimary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  background: vars.color.accent,
  color: vars.color.bg,
  boxShadow: `0 4px 20px -4px ${vars.color.accentIntense}`,
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 30px -4px ${vars.color.accentIntense}`,
  },
});

export const btnSecondary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  background: 'transparent',
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
    background: vars.color.bgCard,
  },
});

// ============================================
// PRICING COMPARISON
// ============================================

export const pricingComparison = style({
  marginTop: vars.space['3xl'],
  paddingTop: vars.space['2xl'],
  borderTop: `1px solid ${vars.color.border}`,
});

globalStyle(`${pricingComparison} h3`, {
  fontSize: '1.75rem',
  marginBottom: vars.space.md,
});

globalStyle(`${pricingComparison} > p`, {
  color: vars.color.textSecondary,
  marginBottom: vars.space['2xl'],
});

export const pricingCompCategory = style({
  marginBottom: vars.space['2xl'],
});

globalStyle(`${pricingCompCategory} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  color: vars.color.accent,
  marginBottom: vars.space.md,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const pricingCompTable = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const pricingCompRow = style({
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr 2fr',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border}`,
  alignItems: 'center',
  gap: vars.space.md,
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.xs,
    },
  },
});

export const pricingCompHeader = style({
  background: vars.color.bgElevated,
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: vars.color.textMuted,
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

globalStyle(`${pricingCompRow} span:first-child`, {
  fontWeight: 500,
  color: vars.color.text,
});

export const pricingValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1rem',
      color: vars.color.accent,
    },
  },
});

export const pricingNotes = style({
  fontSize: '0.9rem',
  color: vars.color.textMuted,
  lineHeight: 1.5,
});

export const pricingCompCosilico = style({
  background: 'rgba(0, 212, 170, 0.05)',
  borderTop: `2px solid ${vars.color.accentDim}`,
});

export const cosilicoPrice = style({
  color: `${vars.color.accent} !important`,
  fontWeight: 600,
});

export const cosilicoAdvantage = style({
  color: `${vars.color.textSecondary} !important`,
  fontWeight: 500,
});

export const pricingPhilosophy = style({
  marginTop: vars.space['2xl'],
  padding: vars.space.xl,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

globalStyle(`${pricingPhilosophy} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle(`${pricingPhilosophy} p`, {
  color: vars.color.textSecondary,
  lineHeight: 1.8,
});
