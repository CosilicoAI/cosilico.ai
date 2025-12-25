import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Microplex Page Styles
 *
 * Design direction: Technical precision meets data visualization.
 * The page should feel like looking into a high-fidelity simulation.
 * Flow lines and animated connections between workflow stages.
 */

// ============================================
// ANIMATIONS
// ============================================

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

// Reserved for future scroll-triggered animations
// const pulse = keyframes({ '0%, 100%': { opacity: 0.4 }, '50%': { opacity: 1 } });

const glowPulse = keyframes({
  '0%, 100%': { boxShadow: `0 0 20px ${vars.color.accentGlow}` },
  '50%': { boxShadow: `0 0 40px ${vars.color.accentIntense}, 0 0 60px ${vars.color.accentGlow}` },
});

// Reserved for future data flow visualization
// const dataFlow = keyframes({ '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100%)' } });

// ============================================
// BASE STYLES
// ============================================

export const microplex = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

globalStyle(`${microplex} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${microplex} h1, ${microplex} h2, ${microplex} h3, ${microplex} h4`, {
  fontFamily: vars.font.display,
  fontWeight: '600',
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
});

// ============================================
// HERO
// ============================================

export const hero = style({
  textAlign: 'center',
  paddingTop: '120px !important',
  paddingBottom: `${vars.space['3xl']} !important`,
  position: 'relative',
});

export const heroGlow = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '600px',
  background: `radial-gradient(circle, ${vars.color.accentGlow} 0%, transparent 70%)`,
  filter: 'blur(60px)',
  pointerEvents: 'none',
  opacity: 0.6,
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.8s ${vars.ease.out} forwards`,
});

export const heroBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: vars.color.accentGlow,
  border: `1px solid rgba(0, 212, 255, 0.3)`,
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: vars.color.accent,
  marginBottom: vars.space.lg,
  letterSpacing: '0.05em',
});

export const heroTitle = style({
  fontSize: 'clamp(4rem, 12vw, 8rem)',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  background: `linear-gradient(
    135deg,
    ${vars.color.text} 0%,
    ${vars.color.text} 30%,
    ${vars.color.accent} 70%,
    ${vars.color.accentBright} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: `0 0 80px ${vars.color.accentGlow}`,
});

export const heroSubtitle = style({
  fontSize: '1.5rem',
  color: vars.color.textSecondary,
  maxWidth: '700px',
  margin: '0 auto',
  marginBottom: vars.space.xl,
  fontFamily: vars.font.body,
  fontWeight: 400,
});

export const heroPills = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: vars.space.xl,
});

export const pill = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius['2xl'],
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  fontFamily: vars.font.display,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    background: vars.color.accentGlow,
    color: vars.color.accent,
  },
});

export const pillIcon = style({
  width: '16px',
  height: '16px',
  color: vars.color.accent,
});

// ============================================
// WORKFLOW DIAGRAM
// ============================================

export const workflowSection = style({
  paddingTop: `${vars.space['4xl']} !important`,
  paddingBottom: `${vars.space['4xl']} !important`,
});

export const sectionHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['3xl'],
});

export const sectionTitle = style({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

export const sectionSubtitle = style({
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  maxWidth: '600px',
  margin: '0 auto',
});

export const workflowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['2xl'],
  position: 'relative',
});

// Flow line connecting stages
export const flowLine = style({
  position: 'absolute',
  left: '50%',
  top: '120px',
  bottom: '120px',
  width: '2px',
  background: `linear-gradient(to bottom,
    transparent 0%,
    ${vars.color.accent} 10%,
    ${vars.color.accent} 90%,
    transparent 100%
  )`,
  opacity: 0.3,
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const workflowStage = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xl,
  padding: vars.space.xl,
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.xl,
  position: 'relative',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationFillMode: 'backwards',
  ':hover': {
    borderColor: 'rgba(0, 212, 255, 0.3)',
    background: 'rgba(0, 212, 255, 0.05)',
    transform: 'translateY(-2px)',
  },
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
});

export const stageDelay1 = style({ animationDelay: '0.1s' });
export const stageDelay2 = style({ animationDelay: '0.2s' });
export const stageDelay3 = style({ animationDelay: '0.3s' });
export const stageDelay4 = style({ animationDelay: '0.4s' });
export const stageDelay5 = style({ animationDelay: '0.5s' });

export const stageIcon = style({
  width: '80px',
  height: '80px',
  borderRadius: vars.radius.lg,
  background: vars.color.accentGlow,
  border: `1px solid rgba(0, 212, 255, 0.3)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
});

export const stageIconSvg = style({
  width: '40px',
  height: '40px',
  color: vars.color.accent,
});

export const stageContent = style({
  flex: 1,
});

export const stageNumber = style({
  fontSize: '0.75rem',
  fontFamily: vars.font.mono,
  color: vars.color.accent,
  marginBottom: vars.space.xs,
  letterSpacing: '0.1em',
});

export const stageTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const stageDescription = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

export const stageCode = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.accent,
  background: 'rgba(0, 0, 0, 0.4)',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  display: 'inline-block',
  marginTop: vars.space.sm,
});

export const stageArrow = style({
  display: 'flex',
  justifyContent: 'center',
  padding: vars.space.md,
  color: vars.color.accent,
  opacity: 0.5,
});

// ============================================
// FEATURES
// ============================================

export const featuresSection = style({
  background: `linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.02) 50%, transparent 100%)`,
});

export const featuresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.lg,
  '@media': {
    '(max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(max-width: 640px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const featureCard = style({
  padding: vars.space.xl,
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    borderColor: 'rgba(0, 212, 255, 0.4)',
    background: 'rgba(0, 212, 255, 0.05)',
    transform: 'translateY(-4px)',
  },
});

export const featureCardGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '1px',
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
  opacity: 0,
  transition: `opacity ${vars.duration.normal} ${vars.ease.out}`,
  selectors: {
    [`${featureCard}:hover &`]: {
      opacity: 1,
    },
  },
});

export const featureIcon = style({
  width: '48px',
  height: '48px',
  marginBottom: vars.space.md,
  color: vars.color.accent,
  opacity: 0.8,
});

export const featureTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const featureDescription = style({
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

// ============================================
// COMPARISON TABLE
// ============================================

export const comparisonSection = style({});

export const comparisonWrapper = style({
  overflowX: 'auto',
  borderRadius: vars.radius.lg,
  border: '1px solid rgba(255, 255, 255, 0.06)',
  background: 'rgba(0, 0, 0, 0.2)',
});

export const comparisonTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: '600px',
});

globalStyle(`${comparisonTable} th`, {
  padding: vars.space.lg,
  textAlign: 'left',
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  background: 'rgba(0, 212, 255, 0.05)',
});

globalStyle(`${comparisonTable} th:first-child`, {
  color: vars.color.text,
});

globalStyle(`${comparisonTable} td`, {
  padding: vars.space.md,
  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
});

globalStyle(`${comparisonTable} td:first-child`, {
  fontWeight: 500,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

globalStyle(`${comparisonTable} tr:hover td`, {
  background: 'rgba(0, 212, 255, 0.03)',
});

globalStyle(`${comparisonTable} tr:last-child td`, {
  borderBottom: 'none',
});

export const checkMark = style({
  color: vars.color.success,
  fontSize: '1.25rem',
});

export const crossMark = style({
  color: vars.color.textMuted,
  fontSize: '1.25rem',
});

export const partialMark = style({
  color: vars.color.amber,
  fontSize: '1.25rem',
});

export const microplexCell = style({
  background: 'rgba(0, 212, 255, 0.08) !important',
  fontWeight: 600,
  color: `${vars.color.accent} !important`,
});

// ============================================
// INSTALL CTA
// ============================================

export const installSection = style({
  textAlign: 'center',
  paddingTop: `${vars.space['4xl']} !important`,
  paddingBottom: `${vars.space['4xl']} !important`,
});

export const installBox = style({
  maxWidth: '700px',
  margin: '0 auto',
  padding: vars.space['3xl'],
  background: `linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 212, 255, 0.02) 100%)`,
  border: '1px solid rgba(0, 212, 255, 0.2)',
  borderRadius: vars.radius.xl,
  position: 'relative',
  overflow: 'hidden',
  animation: `${glowPulse} 4s ease-in-out infinite`,
});

export const installBoxGlow = style({
  position: 'absolute',
  top: '-50%',
  left: '-50%',
  width: '200%',
  height: '200%',
  background: `radial-gradient(circle at center, ${vars.color.accentGlow} 0%, transparent 50%)`,
  opacity: 0.3,
  pointerEvents: 'none',
});

export const installTitle = style({
  fontSize: '2.5rem',
  marginBottom: vars.space.lg,
  position: 'relative',
  zIndex: 1,
});

export const installCode = style({
  display: 'inline-block',
  background: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: vars.radius.md,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontFamily: vars.font.mono,
  fontSize: '1.5rem',
  color: vars.color.accent,
  marginBottom: vars.space.xl,
  position: 'relative',
  zIndex: 1,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 0, 0, 0.7)',
    borderColor: vars.color.accent,
  },
});

export const installLinks = style({
  display: 'flex',
  gap: vars.space.lg,
  justifyContent: 'center',
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1,
});

export const installLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: vars.radius.md,
  color: vars.color.textSecondary,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
    background: vars.color.accentGlow,
  },
});

export const installLinkIcon = style({
  width: '18px',
  height: '18px',
});
