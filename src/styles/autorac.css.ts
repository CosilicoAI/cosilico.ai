import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 0.4 },
  '50%': { opacity: 1 },
});

const flowRight = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

// ============================================
// BASE STYLES
// ============================================

export const page = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
});

globalStyle(`${page} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1100px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${page} h1, ${page} h2, ${page} h3`, {
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
  paddingTop: '100px !important',
  paddingBottom: `${vars.space['2xl']} !important`,
  position: 'relative',
});

export const heroGlow = style({
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '700px',
  height: '500px',
  background: `radial-gradient(ellipse, rgba(0, 212, 255, 0.1) 0%, transparent 70%)`,
  filter: 'blur(80px)',
  pointerEvents: 'none',
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
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: vars.color.accent,
  marginBottom: vars.space.lg,
  letterSpacing: '0.05em',
});

export const heroTitle = style({
  fontSize: 'clamp(3rem, 10vw, 5rem)',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  fontFamily: vars.font.display,
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, #00ff88 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const heroSubtitle = style({
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: vars.font.body,
  fontWeight: 400,
});

// ============================================
// LOOP DIAGRAM
// ============================================

export const loopSection = style({
  paddingTop: `${vars.space['2xl']} !important`,
  paddingBottom: `${vars.space['2xl']} !important`,
});

export const loopDiagram = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.md,
  flexWrap: 'wrap',
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationDelay: '0.2s',
  animationFillMode: 'backwards',
});

export const loopNode = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: vars.space.xl,
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.xl,
  minWidth: '140px',
  position: 'relative',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    borderColor: 'rgba(0, 212, 255, 0.3)',
    background: 'rgba(0, 212, 255, 0.05)',
  },
});

export const loopNodeActive = style({
  borderColor: 'rgba(0, 212, 255, 0.5)',
  boxShadow: '0 0 30px rgba(0, 212, 255, 0.15)',
});

export const loopNodeIcon = style({
  width: '48px',
  height: '48px',
  borderRadius: vars.radius.md,
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const loopNodeIconSvg = style({
  width: '24px',
  height: '24px',
  color: vars.color.accent,
});

export const loopNodeLabel = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '1rem',
  color: vars.color.text,
});

export const loopNodeDesc = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  textAlign: 'center',
});

export const loopArrow = style({
  width: '40px',
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
  position: 'relative',
  overflow: 'hidden',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, white, transparent)`,
    animation: `${flowRight} 1.5s infinite`,
  },
  '@media': {
    '(max-width: 768px)': {
      width: '2px',
      height: '30px',
      background: `linear-gradient(180deg, transparent, ${vars.color.accent}, transparent)`,
    },
  },
});

export const loopArrowReturn = style({
  position: 'absolute',
  bottom: '-60px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  maxWidth: '700px',
  height: '2px',
  background: `linear-gradient(90deg, ${vars.color.accent}, transparent 20%, transparent 80%, ${vars.color.accent})`,
  '::before': {
    content: '"←"',
    position: 'absolute',
    left: '-20px',
    top: '-8px',
    color: vars.color.accent,
    fontFamily: vars.font.mono,
    fontSize: '1.2rem',
  },
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

// ============================================
// COMPONENTS GRID
// ============================================

export const componentsSection = style({
  paddingTop: `${vars.space['4xl']} !important`,
});

export const sectionHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['3xl'],
});

export const sectionTitle = style({
  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

export const sectionSubtitle = style({
  fontSize: '1.15rem',
  color: vars.color.textSecondary,
  maxWidth: '600px',
  margin: '0 auto',
});

export const componentsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const componentCard = style({
  padding: vars.space.xl,
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.xl,
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationFillMode: 'backwards',
});

export const componentHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  marginBottom: vars.space.lg,
});

export const componentIcon = style({
  width: '48px',
  height: '48px',
  borderRadius: vars.radius.md,
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const componentIconSvg = style({
  width: '24px',
  height: '24px',
  color: vars.color.accent,
});

export const componentTitle = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '1.25rem',
  color: vars.color.text,
});

export const componentFile = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.textMuted,
});

export const componentDesc = style({
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  marginBottom: vars.space.lg,
});

export const componentFeatures = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const componentFeature = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  '::before': {
    content: '"→"',
    color: vars.color.accent,
    fontFamily: vars.font.mono,
  },
});

// ============================================
// CALIBRATION SECTION
// ============================================

export const calibrationSection = style({
  paddingTop: `${vars.space['3xl']} !important`,
});

export const calibrationCard = style({
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationDelay: '0.3s',
  animationFillMode: 'backwards',
});

export const calibrationHeader = style({
  padding: `${vars.space.lg} ${vars.space.xl}`,
  background: 'rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.textMuted,
});

export const calibrationContent = style({
  padding: vars.space.xl,
});

export const calibrationTable = style({
  width: '100%',
  borderCollapse: 'collapse',
});

globalStyle(`${calibrationTable} th`, {
  textAlign: 'left',
  padding: vars.space.md,
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '0.85rem',
  color: vars.color.textMuted,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
});

globalStyle(`${calibrationTable} td`, {
  padding: vars.space.md,
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
});

globalStyle(`${calibrationTable} tr:last-child td`, {
  borderBottom: 'none',
});

export const metricPositive = style({
  color: vars.color.success,
});

export const metricNegative = style({
  color: vars.color.error,
});

export const metricNeutral = style({
  color: vars.color.textSecondary,
});

// ============================================
// CTA
// ============================================

export const ctaSection = style({
  textAlign: 'center',
  paddingTop: `${vars.space['3xl']} !important`,
  paddingBottom: `${vars.space['4xl']} !important`,
});

export const ctaContent = style({
  maxWidth: '600px',
  margin: '0 auto',
});

export const ctaTitle = style({
  fontSize: '2rem',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

export const ctaText = style({
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
});

export const ctaLinks = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const ctaLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: vars.radius.md,
  color: vars.color.accent,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 500,
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 212, 255, 0.2)',
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

export const ctaLinkSecondary = style({
  background: 'transparent',
  borderColor: 'rgba(255, 255, 255, 0.15)',
  color: vars.color.textSecondary,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    color: vars.color.text,
  },
});

export const ctaLinkIcon = style({
  width: '18px',
  height: '18px',
});

export const delay1 = style({ animationDelay: '0.1s' });
export const delay2 = style({ animationDelay: '0.15s' });
export const delay3 = style({ animationDelay: '0.2s' });
export const delay4 = style({ animationDelay: '0.25s' });
