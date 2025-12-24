import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Homepage Styles - Vanilla Extract
 *
 * Design: Technical futurism meets editorial sophistication
 * Hero: Kinetic typography with simulation grid background
 * Cards: Floating glass morphism with glow effects
 * Motion: Staggered reveals, hover interactions
 */

// ============================================
// KEYFRAMES
// ============================================

const pulseOrb = keyframes({
  '0%, 100%': {
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 0.4,
  },
  '50%': {
    transform: 'translate(-50%, -50%) scale(1.15)',
    opacity: 0.6,
  },
});

const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const resultAppear = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px) scale(0.98)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

// ============================================
// GRID BACKGROUND
// ============================================

export const gridBg = style({
  position: 'fixed',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  background: `
    linear-gradient(90deg, ${vars.color.border} 1px, transparent 1px),
    linear-gradient(${vars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
  opacity: 0.3,
});

// ============================================
// BASE STYLES
// ============================================

export const home = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${home} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
});

globalStyle(`${home} h1, ${home} h2, ${home} h3, ${home} h4`, {
  fontFamily: vars.font.display,
  fontWeight: 600,
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
});

// ============================================
// HERO SECTION
// ============================================

export const hero = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '100px',
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    width: '800px',
    height: '800px',
    background: `radial-gradient(
      ellipse at center,
      ${vars.color.accentGlow} 0%,
      transparent 70%
    )`,
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: `${pulseOrb} 8s ease-in-out infinite`,
    pointerEvents: 'none',
  },

  '@media': {
    '(max-width: 768px)': {
      minHeight: '90vh',
      paddingTop: '80px',

      '::before': {
        width: '400px',
        height: '400px',
      },
    },
  },
});

export const heroContent = style({
  maxWidth: '900px',
  position: 'relative',
  zIndex: 1,
});

export const tagline = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  color: vars.color.accent,
  marginBottom: vars.space.xl,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  animation: `${fadeInUp} 0.8s ${vars.ease.out} both`,

  '::before': {
    content: '""',
    width: '24px',
    height: '1px',
    background: vars.color.accent,
  },

  '::after': {
    content: '""',
    width: '24px',
    height: '1px',
    background: vars.color.accent,
  },
});

export const heroH1 = style({
  fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
  fontWeight: 700,
  marginBottom: vars.space.xl,
  lineHeight: 1,
  animation: `${fadeInUp} 0.8s ${vars.ease.out} 0.1s both`,
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

globalStyle(`${heroH1} br`, {
  display: 'block',
});

export const subtitle = style({
  fontFamily: vars.font.body,
  fontSize: '1.35rem',
  fontWeight: 400,
  color: vars.color.textSecondary,
  marginBottom: vars.space['2xl'],
  lineHeight: 1.8,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: `${fadeInUp} 0.8s ${vars.ease.out} 0.2s both`,
});

globalStyle(`${subtitle} br`, {
  display: 'none',

  '@media': {
    '(min-width: 640px)': {
      display: 'block',
    },
  },
});

export const heroCta = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
  animation: `${fadeInUp} 0.8s ${vars.ease.out} 0.3s both`,

  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
    },
  },
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
  position: 'relative',
  overflow: 'hidden',
  background: vars.color.accent,
  color: vars.color.bg,
  border: 'none',
  boxShadow: `
    0 0 0 1px ${vars.color.accent},
    0 4px 20px -4px ${vars.color.accentIntense}
  `,

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 50%
    )`,
    opacity: 0,
    transition: `opacity ${vars.duration.fast}`,
  },

  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 0 0 1px ${vars.color.accentBright},
      0 8px 30px -4px ${vars.color.accentIntense},
      0 0 60px -10px ${vars.color.accent}
    `,
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '2px',
  },

  '@media': {
    '(max-width: 480px)': {
      padding: `${vars.space.md} ${vars.space.lg}`,
      fontSize: '0.9rem',
      width: '100%',
    },
  },
});

globalStyle(`${btnPrimary}:hover::before`, {
  opacity: 1,
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
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,

  ':hover': {
    background: vars.color.bgElevated,
    borderColor: vars.color.borderGlow,
    transform: 'translateY(-2px)',
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.accent}`,
    outlineOffset: '2px',
  },

  '@media': {
    '(max-width: 480px)': {
      padding: `${vars.space.md} ${vars.space.lg}`,
      fontSize: '0.9rem',
      width: '100%',
    },
  },
});

// ============================================
// DEMO SECTION
// ============================================

export const demo = style({
  background: vars.color.bgElevated,
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
  position: 'relative',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '200px',
    background: `radial-gradient(
      ellipse at center top,
      ${vars.color.accentGlow} 0%,
      transparent 70%
    )`,
    pointerEvents: 'none',
  },
});

export const demoContainer = style({
  maxWidth: '750px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

export const demoInputGroup = style({
  display: 'flex',
  gap: vars.space.sm,
  marginBottom: vars.space.xl,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xs,
  transition: `border-color ${vars.duration.fast}, box-shadow ${vars.duration.fast}`,

  ':focus-within': {
    borderColor: vars.color.accentDim,
    boxShadow: `0 0 0 3px ${vars.color.accentGlow}`,
  },

  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      padding: vars.space.sm,
      gap: vars.space.sm,
    },
  },
});

export const demoInput = style({
  flex: 1,
  padding: `${vars.space.md} ${vars.space.lg}`,
  fontFamily: vars.font.body,
  fontSize: '1.1rem',
  background: 'transparent',
  border: 'none',
  color: vars.color.text,
  outline: 'none',

  '::placeholder': {
    color: vars.color.textFaint,
  },

  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.md,
      textAlign: 'center',
    },
  },
});

export const demoButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  fontWeight: 500,
  background: vars.color.accent,
  color: vars.color.bg,
  border: 'none',
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast}`,
  whiteSpace: 'nowrap',

  ':hover': {
    background: vars.color.accentBright,
  },

  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

export const demoResult = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.lg,
  padding: vars.space.xl,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  animation: `${resultAppear} 0.4s ${vars.ease.spring}`,

  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.md,
    },
  },
});

export const resultStat = style({
  textAlign: 'center',
  padding: vars.space.md,

  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.sm,
    },
  },
});

export const statValue = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: '2.5rem',
  fontWeight: 700,
  color: vars.color.accent,
  marginBottom: vars.space.xs,
  lineHeight: 1,

  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});

export const statLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const resultMeta = style({
  gridColumn: '1 / -1',
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.xl,
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.color.border}`,

  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
      gap: vars.space.md,
    },
  },
});

globalStyle(`${resultMeta} a`, {
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  color: vars.color.textMuted,
  textDecoration: 'none',
  transition: `color ${vars.duration.fast}`,
});

globalStyle(`${resultMeta} a:hover`, {
  color: vars.color.accent,
});

export const demoNote = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  color: '#f59e0b',
  fontStyle: 'italic',
});

// ============================================
// PRODUCTS SECTION
// ============================================

export const products = style({
  textAlign: 'center',
});

export const productsH2 = style({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space['3xl'],
  color: vars.color.text,
});

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: vars.space.lg,

  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const productCard = style({
  padding: `${vars.space['2xl']} ${vars.space.xl}`,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  textAlign: 'left',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    inset: '-1px',
    background: `linear-gradient(
      135deg,
      ${vars.color.accent} 0%,
      transparent 50%,
      transparent 100%
    )`,
    borderRadius: 'inherit',
    opacity: 0,
    transition: `opacity ${vars.duration.normal}`,
    zIndex: -1,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: vars.color.bgCard,
    borderRadius: `calc(${vars.radius.xl} - 1px)`,
    zIndex: -1,
  },

  ':hover': {
    transform: 'translateY(-4px)',
    borderColor: 'transparent',
  },

  '@media': {
    '(max-width: 768px)': {
      padding: `${vars.space.xl} ${vars.space.lg}`,
    },
  },
});

globalStyle(`${productCard}:hover::before`, {
  opacity: 1,
});

export const productIcon = style({
  width: '56px',
  height: '56px',
  marginBottom: vars.space.lg,
  color: vars.color.accent,
  background: vars.color.accentGlow,
  borderRadius: vars.radius.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.space.md,
});

globalStyle(`${productIcon} svg`, {
  width: '100%',
  height: '100%',
});

export const productCardH3 = style({
  fontSize: '1.5rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const productCardP = style({
  fontFamily: vars.font.body,
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.lg,
  lineHeight: 1.7,
});

export const productCardCode = style({
  display: 'block',
  padding: `${vars.space.md} ${vars.space.lg}`,
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  color: vars.color.accent,
  border: `1px solid ${vars.color.border}`,
});

// ============================================
// USE CASES SECTION
// ============================================

export const useCases = style({
  textAlign: 'center',
});

export const useCasesH2 = style({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space['3xl'],
});

export const useCaseGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.space.md,
  textAlign: 'left',
});

export const useCase = style({
  padding: vars.space.lg,
  background: `linear-gradient(
    135deg,
    ${vars.color.bgElevated} 0%,
    ${vars.color.bgCard} 100%
  )`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.fast}`,
  position: 'relative',

  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3px',
    background: vars.color.accent,
    borderRadius: `${vars.radius.sm} 0 0 ${vars.radius.sm}`,
    opacity: 0,
    transition: `opacity ${vars.duration.fast}`,
  },

  ':hover': {
    borderColor: vars.color.borderGlow,
    transform: 'translateX(4px)',
  },
});

globalStyle(`${useCase}:hover::before`, {
  opacity: 1,
});

export const useCaseH4 = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: vars.space.sm,
  color: vars.color.accent,
});

export const useCaseP = style({
  fontFamily: vars.font.body,
  fontSize: '1.1rem',
  fontStyle: 'italic',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  margin: 0,
});

// ============================================
// OPEN SOURCE SECTION
// ============================================

export const openSource = style({
  background: vars.color.bgElevated,
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const osContent = style({
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
});

export const openSourceH2 = style({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.lg,
  lineHeight: 1.2,
});

export const osContentP = style({
  fontFamily: vars.font.body,
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space['2xl'],
  lineHeight: 1.8,
});

export const osStats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.xl,
  padding: vars.space['2xl'],
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,

  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.lg,
      padding: vars.space.xl,
    },
  },
});

export const osStat = style({
  textAlign: 'center',
});

export const osValue = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 700,
  background: `linear-gradient(
    135deg,
    ${vars.color.accent} 0%,
    ${vars.color.accentBright} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1,
  marginBottom: vars.space.sm,
});

export const osLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

// ============================================
// VISION SECTION
// ============================================

export const vision = style({
  textAlign: 'center',
  maxWidth: '800px',
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
});

export const visionH2 = style({
  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
  marginBottom: vars.space.xl,
});

export const visionText = style({
  fontFamily: vars.font.body,
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.lg,
  lineHeight: 1.9,
});

globalStyle(`${visionText} strong`, {
  color: vars.color.text,
  fontWeight: 500,
});

// ============================================
// CTA SECTION
// ============================================

export const cta = style({
  textAlign: 'center',
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  position: 'relative',

  '::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '300px',
    background: `radial-gradient(
      ellipse at center bottom,
      ${vars.color.accentGlow} 0%,
      transparent 70%
    )`,
    pointerEvents: 'none',
  },
});

export const ctaH2 = style({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.xl,
  position: 'relative',
  zIndex: 1,
});

export const ctaButtons = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1,
});
