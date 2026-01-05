import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Stack Page Styles
 *
 * Design: Technical grid showing interconnected components.
 * Each component card links to its dedicated page.
 */

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

// ============================================
// BASE STYLES
// ============================================

export const stack = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
});

globalStyle(`${stack} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${stack} h1, ${stack} h2, ${stack} h3`, {
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
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  height: '500px',
  background: `radial-gradient(ellipse, ${vars.color.accentGlow} 0%, transparent 70%)`,
  filter: 'blur(80px)',
  pointerEvents: 'none',
  opacity: 0.5,
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
  fontSize: 'clamp(3rem, 10vw, 6rem)',
  fontWeight: 600,
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

export const heroSubtitle = style({
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: vars.font.body,
  fontWeight: 400,
});

// ============================================
// COMPONENTS GRID
// ============================================

export const componentsSection = style({
  paddingTop: `${vars.space['3xl']} !important`,
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
  position: 'relative',
  padding: vars.space['2xl'],
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.xl,
  textDecoration: 'none',
  display: 'block',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  overflow: 'hidden',
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationFillMode: 'backwards',
  ':hover': {
    borderColor: 'rgba(0, 212, 255, 0.4)',
    background: 'rgba(0, 212, 255, 0.05)',
    transform: 'translateY(-4px)',
  },
});

export const cardDelay1 = style({ animationDelay: '0.1s' });
export const cardDelay2 = style({ animationDelay: '0.2s' });
export const cardDelay3 = style({ animationDelay: '0.3s' });
export const cardDelay4 = style({ animationDelay: '0.4s' });
export const cardDelay5 = style({ animationDelay: '0.5s' });
export const cardDelay6 = style({ animationDelay: '0.6s' });
export const cardDelay7 = style({ animationDelay: '0.7s' });
export const cardDelay8 = style({ animationDelay: '0.8s' });
export const cardDelay9 = style({ animationDelay: '0.9s' });

export const componentCardGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
  opacity: 0,
  transition: `opacity ${vars.duration.normal} ${vars.ease.out}`,
  selectors: {
    [`${componentCard}:hover &`]: {
      opacity: 1,
    },
  },
});

export const componentHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.lg,
  marginBottom: vars.space.lg,
});

export const componentIcon = style({
  width: '64px',
  height: '64px',
  borderRadius: vars.radius.lg,
  background: vars.color.accentGlow,
  border: `1px solid rgba(0, 212, 255, 0.3)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const componentIconSvg = style({
  width: '32px',
  height: '32px',
  color: vars.color.accent,
});

export const componentMeta = style({
  flex: 1,
});

export const componentName = style({
  fontSize: '1.75rem',
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: vars.space.xs,
  fontFamily: vars.font.display,
});

export const componentTagline = style({
  fontSize: '1rem',
  color: vars.color.accent,
  fontFamily: vars.font.mono,
});

export const componentDescription = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  marginBottom: vars.space.lg,
});

export const componentFeatures = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
});

export const featureTag = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.md,
  fontSize: '0.85rem',
  color: vars.color.textSecondary,
  fontFamily: vars.font.mono,
});

export const statusBadge = style({
  position: 'absolute',
  top: vars.space.lg,
  right: vars.space.lg,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  fontSize: '0.75rem',
  fontFamily: vars.font.mono,
  letterSpacing: '0.05em',
});

export const statusLive = style({
  background: 'rgba(0, 255, 136, 0.15)',
  border: '1px solid rgba(0, 255, 136, 0.3)',
  color: vars.color.success,
});

export const statusDev = style({
  background: 'rgba(255, 170, 0, 0.15)',
  border: '1px solid rgba(255, 170, 0, 0.3)',
  color: vars.color.amber,
});

export const statusPlanned = style({
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: vars.color.textMuted,
});

// Coming soon card variant
export const componentCardComingSoon = style({
  opacity: 0.6,
  cursor: 'default',
  ':hover': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.02)',
    transform: 'none',
  },
});

// ============================================
// ARCHITECTURE DIAGRAM (Visual Pipeline)
// ============================================

export const architectureSection = style({
  paddingTop: `${vars.space['4xl']} !important`,
  paddingBottom: `${vars.space['4xl']} !important`,
});

export const pipelineContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['2xl'],
  position: 'relative',
});

// Pipeline row
export const pipelineRow = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space.lg,
  flexWrap: 'wrap',
  position: 'relative',
});

// Source materials row (top)
export const sourceRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const sourceCard = style({
  padding: vars.space.lg,
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.lg,
  textAlign: 'center',
});

export const sourceIcon = style({
  width: '32px',
  height: '32px',
  margin: '0 auto',
  marginBottom: vars.space.sm,
  color: vars.color.textMuted,
});

export const sourceLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: vars.space.xs,
});

export const sourceExamples = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
});

// Connector arrows
export const connectorDown = style({
  display: 'flex',
  justifyContent: 'center',
  padding: `${vars.space.md} 0`,
});

export const connectorArrow = style({
  width: '2px',
  height: '40px',
  background: `linear-gradient(180deg, rgba(0, 212, 255, 0.5), rgba(0, 212, 255, 0.1))`,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: `8px solid rgba(0, 212, 255, 0.5)`,
  },
});

export const connectorHorizontal = style({
  width: '60px',
  height: '2px',
  background: `linear-gradient(90deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.5), rgba(0, 212, 255, 0.1))`,
  '@media': {
    '(max-width: 900px)': {
      display: 'none',
    },
  },
});

// Processing nodes (main components)
export const processingNode = style({
  padding: vars.space.xl,
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  borderRadius: vars.radius.xl,
  minWidth: '280px',
  maxWidth: '400px',
  position: 'relative',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    borderColor: 'rgba(0, 212, 255, 0.4)',
    background: 'rgba(0, 212, 255, 0.05)',
  },
});

export const processingNodeWide = style({
  minWidth: '100%',
  maxWidth: '100%',
});

export const nodeHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  marginBottom: vars.space.md,
});

export const nodeIcon = style({
  width: '40px',
  height: '40px',
  borderRadius: vars.radius.md,
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const nodeIconSvg = style({
  width: '20px',
  height: '20px',
  color: vars.color.accent,
});

export const nodeName = style({
  fontFamily: vars.font.mono,
  fontSize: '1.1rem',
  fontWeight: 600,
  color: vars.color.accent,
});

export const nodeFeatures = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
  paddingLeft: vars.space.sm,
  borderLeft: `2px solid rgba(0, 212, 255, 0.2)`,
});

export const nodeFeature = style({
  fontSize: '0.85rem',
  color: vars.color.textSecondary,
  paddingLeft: vars.space.sm,
});

// Parallel processing row
export const parallelRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

// Output node
export const outputNode = style({
  padding: vars.space.xl,
  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 212, 255, 0.1))',
  border: '1px solid rgba(0, 255, 136, 0.3)',
  borderRadius: vars.radius.xl,
  textAlign: 'center',
  maxWidth: '500px',
  margin: '0 auto',
});

export const outputTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  fontWeight: 600,
  color: vars.color.success,
  marginBottom: vars.space.md,
});

export const outputFeatures = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: vars.space.sm,
});

export const outputFeatureTag = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.2)',
  borderRadius: vars.radius.md,
  fontSize: '0.85rem',
  color: vars.color.success,
  fontFamily: vars.font.mono,
});

// Inner flow for microplex
export const innerFlow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.md,
  marginTop: vars.space.lg,
  flexWrap: 'wrap',
});

export const innerStep = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: vars.radius.md,
  fontSize: '0.8rem',
  color: vars.color.textSecondary,
  fontFamily: vars.font.mono,
});

export const innerArrow = style({
  color: vars.color.accent,
  fontSize: '1.2rem',
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
