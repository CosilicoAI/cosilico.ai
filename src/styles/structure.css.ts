import { style, globalStyle, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Structure Page - PE/Cosilico Relationship
 *
 * Vanilla Extract conversion of Structure.css
 */

/* ============================================
   GRID BACKGROUND
   ============================================ */

export const gridBg = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)',
  '::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 50%)',
  },
});

/* ============================================
   BASE STYLES
   ============================================ */

export const structure = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  minHeight: '100vh',
  lineHeight: 1.7,
  position: 'relative',
  zIndex: 1,
  paddingTop: '73px',
});

globalStyle(`${structure} section`, {
  padding: `${vars.space['3xl']} ${vars.space.lg}`,
  maxWidth: '1000px',
  margin: '0 auto',
});

globalStyle(`${structure} h1, ${structure} h2, ${structure} h3, ${structure} h4`, {
  fontFamily: vars.font.display,
  fontWeight: 600,
  letterSpacing: '-0.03em',
  lineHeight: 1.2,
});

/* ============================================
   NAVIGATION
   ============================================ */

export const structureTopNav = style({
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

export const structureLogo = style({
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

export const structureLogoIcon = style({
  width: '26px',
  height: '26px',
});

/* ============================================
   HERO
   ============================================ */

export const structureHero = style({
  textAlign: 'center',
  paddingTop: '140px !important',
  paddingBottom: `${vars.space.xl} !important`,
});

globalStyle(`${structureHero} h1`, {
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  marginBottom: vars.space.lg,
  background: `linear-gradient(
    135deg,
    ${vars.color.text} 0%,
    ${vars.color.text} 40%,
    ${vars.color.accent} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const structureSubtitle = style({
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  maxWidth: '600px',
  margin: '0 auto',
});

/* ============================================
   AUDIENCE SELECTOR
   ============================================ */

export const audienceSelector = style({
  textAlign: 'center',
  paddingTop: '0 !important',
  paddingBottom: `${vars.space.xl} !important`,
});

globalStyle(`${audienceSelector} p`, {
  fontSize: '1.1rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.md,
});

export const audienceButtons = style({
  display: 'flex',
  gap: vars.space.sm,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const audienceButtonBase = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  fontWeight: 500,
  background: vars.color.bgCard,
  color: vars.color.textMuted,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    background: vars.color.bgElevated,
    borderColor: vars.color.borderGlow,
    color: vars.color.text,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '2px',
  },
});

export const audienceButton = styleVariants({
  default: [audienceButtonBase],
  active: [audienceButtonBase, {
    background: vars.color.accent,
    color: vars.color.bg,
    borderColor: vars.color.accent,
  }],
});

/* ============================================
   STRUCTURE DIAGRAM
   ============================================ */

export const structureDiagram = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  gap: vars.space.lg,
  alignItems: 'stretch',
  paddingTop: `${vars.space.xl} !important`,
  paddingBottom: `${vars.space.xl} !important`,
});

const orgCardBase = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
});

export const orgCard = styleVariants({
  cosilico: [orgCardBase, {
    borderColor: vars.color.accentDim,
  }],
  pe: [orgCardBase, {
    borderColor: 'rgba(49, 151, 149, 0.3)',
  }],
});

export const orgHeader = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  borderBottom: `1px solid ${vars.color.border}`,
  textAlign: 'center',
});

export const orgLogo = style({
  width: '40px',
  height: '40px',
  marginBottom: vars.space.sm,
});

globalStyle(`${orgHeader} h2`, {
  fontSize: '1.5rem',
  marginBottom: vars.space.xs,
});

export const orgType = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const orgBody = style({
  padding: vars.space.lg,
});

globalStyle(`${orgBody} h3`, {
  fontSize: '1rem',
  color: vars.color.accent,
  marginBottom: vars.space.md,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

globalStyle(`${orgBody} ul`, {
  listStyle: 'none',
  padding: 0,
  margin: `0 0 ${vars.space.lg} 0`,
});

globalStyle(`${orgBody} li`, {
  padding: `${vars.space.xs} 0`,
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${orgBody} li::before`, {
  content: '',
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
  flexShrink: 0,
});

export const orgModel = style({
  padding: vars.space.md,
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
});

globalStyle(`${orgModel} strong`, {
  color: vars.color.text,
});

/* Relationship arrow */
export const orgRelationship = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.xl} 0`,
});

export const relationshipArrow = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const arrowLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  textAlign: 'center',
  maxWidth: '100px',
});

export const arrowLine = style({
  width: '60px',
  height: '2px',
  background: vars.color.border,
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    width: '8px',
    height: '8px',
    border: `2px solid ${vars.color.border}`,
    borderLeft: 'none',
    borderBottom: 'none',
    left: '-4px',
    transform: 'translateY(-50%) rotate(-135deg)',
  },
  '::after': {
    content: '',
    position: 'absolute',
    top: '50%',
    width: '8px',
    height: '8px',
    border: `2px solid ${vars.color.border}`,
    borderLeft: 'none',
    borderBottom: 'none',
    right: '-4px',
    transform: 'translateY(-50%) rotate(45deg)',
  },
});

/* ============================================
   AUDIENCE CONTENT
   ============================================ */

export const audienceContent = style({
  paddingTop: `${vars.space.xl} !important`,
});

export const contentPanel = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
});

globalStyle(`${contentPanel} h2`, {
  fontSize: '1.75rem',
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const contentSection = style({
  marginBottom: vars.space['2xl'],
  ':last-child': {
    marginBottom: 0,
  },
});

globalStyle(`${contentSection} h3`, {
  fontSize: '1.25rem',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

globalStyle(`${contentSection} p`, {
  fontSize: '1.05rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
  lineHeight: 1.8,
});

globalStyle(`${contentSection} ul`, {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle(`${contentSection} li`, {
  padding: `${vars.space.sm} 0`,
  fontSize: '1rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});

globalStyle(`${contentSection} li::before`, {
  content: '',
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
  flexShrink: 0,
  marginTop: '0.6em',
});

/* Benefit grid */
export const benefitGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.md,
});

export const benefitCard = style({
  padding: vars.space.lg,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

globalStyle(`${benefitCard} h4`, {
  fontSize: '1rem',
  marginBottom: vars.space.sm,
  color: vars.color.accent,
});

globalStyle(`${benefitCard} p`, {
  fontSize: '0.95rem',
  margin: 0,
  color: vars.color.textMuted,
});

/* Example flow */
export const exampleFlow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  padding: vars.space.lg,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

export const flowStep = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
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
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  fontWeight: 600,
  flexShrink: 0,
});

export const stepText = style({
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
});

/* Decision table */
export const decisionTable = style({
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

const decisionRowBase = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border}`,
  alignItems: 'center',
  gap: vars.space.md,
  ':last-child': {
    borderBottom: 'none',
  },
});

export const decisionRow = styleVariants({
  default: [decisionRowBase],
  header: [decisionRowBase, {
    background: vars.color.bgElevated,
    fontFamily: vars.font.display,
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: vars.color.textMuted,
  }],
});

globalStyle(`${decisionRow.default} span:first-child`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
});

const orgTagBase = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  fontWeight: 600,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
});

export const orgTag = styleVariants({
  cosilico: [orgTagBase, {
    background: 'rgba(0, 212, 170, 0.1)',
    color: vars.color.accent,
  }],
  pe: [orgTagBase, {
    background: 'rgba(49, 151, 149, 0.1)',
    color: '#319795',
  }],
});

/* ============================================
   FAQ
   ============================================ */

export const structureFaq = style({
  paddingTop: `${vars.space['2xl']} !important`,
});

globalStyle(`${structureFaq} h2`, {
  fontSize: '1.75rem',
  marginBottom: vars.space.xl,
  textAlign: 'center',
});

export const faqGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
});

export const faqItem = style({
  padding: vars.space.lg,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

globalStyle(`${faqItem} h4`, {
  fontSize: '1.1rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

globalStyle(`${faqItem} p`, {
  fontSize: '0.95rem',
  color: vars.color.textMuted,
  margin: 0,
  lineHeight: 1.7,
});

/* ============================================
   CTA
   ============================================ */

export const structureCta = style({
  textAlign: 'center',
  padding: `${vars.space['4xl']} ${vars.space.lg} !important`,
});

globalStyle(`${structureCta} h2`, {
  fontSize: '2rem',
  marginBottom: vars.space.md,
});

globalStyle(`${structureCta} > p`, {
  fontSize: '1.15rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
});

export const ctaButtons = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

/* ============================================
   BUTTONS
   ============================================ */

const btnBase = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: vars.radius.lg,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
});

export const btnPrimary = style([btnBase, {
  background: vars.color.accent,
  color: vars.color.bg,
  border: 'none',
  boxShadow: `
    0 0 0 1px ${vars.color.accent},
    0 4px 20px -4px ${vars.color.accentIntense}
  `,
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 0 0 1px ${vars.color.accentBright},
      0 8px 30px -4px ${vars.color.accentIntense}
    `,
  },
}]);

export const btnSecondary = style([btnBase, {
  background: 'transparent',
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    background: vars.color.bgElevated,
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-2px)',
  },
}]);

/* ============================================
   RESPONSIVE
   ============================================ */

globalStyle(`${structureDiagram}`, {
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

globalStyle(`${orgRelationship}`, {
  '@media': {
    '(max-width: 900px)': {
      padding: `${vars.space.md} 0`,
    },
  },
});

globalStyle(`${relationshipArrow}`, {
  '@media': {
    '(max-width: 900px)': {
      flexDirection: 'row',
    },
  },
});

globalStyle(`${arrowLine}`, {
  '@media': {
    '(max-width: 900px)': {
      width: '2px',
      height: '40px',
    },
  },
});

globalStyle(`${arrowLine}::before, ${arrowLine}::after`, {
  '@media': {
    '(max-width: 900px)': {
      left: '50%',
    },
  },
});

globalStyle(`${arrowLine}::before`, {
  '@media': {
    '(max-width: 900px)': {
      top: '-4px',
      transform: 'translateX(-50%) rotate(-45deg)',
    },
  },
});

globalStyle(`${arrowLine}::after`, {
  '@media': {
    '(max-width: 900px)': {
      top: 'auto',
      bottom: '-4px',
      transform: 'translateX(-50%) rotate(135deg)',
    },
  },
});

globalStyle(`${structure} section`, {
  '@media': {
    '(max-width: 768px)': {
      padding: `${vars.space['2xl']} ${vars.space.md}`,
    },
  },
});

globalStyle(`${structureHero}`, {
  '@media': {
    '(max-width: 768px)': {
      paddingTop: '120px !important',
    },
  },
});

globalStyle(`${benefitGrid}, ${faqGrid}`, {
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

globalStyle(`${decisionRow.default}`, {
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.sm,
    },
  },
});

globalStyle(`${decisionRow.header}`, {
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

globalStyle(`${contentPanel}`, {
  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.lg,
    },
  },
});

globalStyle(`${audienceButtons}`, {
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
    },
  },
});

globalStyle(`${audienceButtons} button`, {
  '@media': {
    '(max-width: 480px)': {
      width: '100%',
    },
  },
});

globalStyle(`${ctaButtons}`, {
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
    },
  },
});

globalStyle(`${btnPrimary}, ${btnSecondary}`, {
  '@media': {
    '(max-width: 480px)': {
      width: '100%',
    },
  },
});
