import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico py-statmatch Page Styles
 *
 * Design direction: Clean statistical library aesthetic.
 * Mirrors microplex styling for consistency across the stack.
 */

// ============================================
// ANIMATIONS
// ============================================

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const glowPulse = keyframes({
  '0%, 100%': { boxShadow: `0 0 20px ${vars.color.accentGlow}` },
  '50%': { boxShadow: `0 0 40px ${vars.color.accentIntense}, 0 0 60px ${vars.color.accentGlow}` },
});

// ============================================
// BASE STYLES
// ============================================

export const pystatmatch = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

globalStyle(`${pystatmatch} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${pystatmatch} h1, ${pystatmatch} h2, ${pystatmatch} h3, ${pystatmatch} h4`, {
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
  background: `radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)`,
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
  background: 'rgba(0, 255, 136, 0.1)',
  border: `1px solid rgba(0, 255, 136, 0.3)`,
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: vars.color.success,
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
    ${vars.color.text} 30%,
    ${vars.color.success} 70%,
    #40ffaa 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: `0 0 80px rgba(0, 255, 136, 0.3)`,
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
    borderColor: vars.color.success,
    background: 'rgba(0, 255, 136, 0.1)',
    color: vars.color.success,
  },
});

export const pillIcon = style({
  width: '16px',
  height: '16px',
  color: vars.color.success,
});

// ============================================
// SECTION COMMON
// ============================================

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

// ============================================
// METHODS SECTION
// ============================================

export const methodsSection = style({
  background: `linear-gradient(180deg, transparent 0%, rgba(0, 255, 136, 0.02) 50%, transparent 100%)`,
});

export const methodsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const methodCard = style({
  padding: vars.space.xl,
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.xl,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    borderColor: 'rgba(0, 255, 136, 0.3)',
    background: 'rgba(0, 255, 136, 0.05)',
    transform: 'translateY(-4px)',
  },
});

export const methodCardGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '1px',
  background: `linear-gradient(90deg, transparent, ${vars.color.success}, transparent)`,
  opacity: 0,
  transition: `opacity ${vars.duration.normal} ${vars.ease.out}`,
  selectors: {
    [`${methodCard}:hover &`]: {
      opacity: 1,
    },
  },
});

export const methodIcon = style({
  width: '56px',
  height: '56px',
  marginBottom: vars.space.md,
  color: vars.color.success,
  opacity: 0.9,
});

export const methodTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const methodDescription = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  marginBottom: vars.space.md,
});

export const methodCode = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.success,
  background: 'rgba(0, 0, 0, 0.4)',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.sm,
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

// ============================================
// FEATURES SECTION
// ============================================

export const featuresSection = style({});

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
    borderColor: 'rgba(0, 255, 136, 0.4)',
    background: 'rgba(0, 255, 136, 0.05)',
    transform: 'translateY(-4px)',
  },
});

export const featureCardGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '1px',
  background: `linear-gradient(90deg, transparent, ${vars.color.success}, transparent)`,
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
  color: vars.color.success,
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
// COMPARISON WITH R
// ============================================

export const comparisonSection = style({
  background: `linear-gradient(180deg, rgba(0, 255, 136, 0.02) 0%, transparent 100%)`,
});

export const comparisonContent = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space['2xl'],
  alignItems: 'center',
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const comparisonText = style({});

export const comparisonTitle = style({
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const comparisonDescription = style({
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
  marginBottom: vars.space.lg,
});

export const comparisonList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const comparisonItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '1rem',
  color: vars.color.textSecondary,
});

export const comparisonCheck = style({
  width: '20px',
  height: '20px',
  color: vars.color.success,
  flexShrink: 0,
});

export const comparisonCode = style({
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.lg,
  padding: vars.space.xl,
  overflow: 'auto',
});

export const codeBlock = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  lineHeight: 1.6,
  color: vars.color.textSecondary,
  whiteSpace: 'pre',
  margin: 0,
});

export const codeComment = style({
  color: vars.color.textMuted,
});

export const codeKeyword = style({
  color: vars.color.success,
});

export const codeString = style({
  color: vars.color.amber,
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
  background: `linear-gradient(135deg, rgba(0, 255, 136, 0.08) 0%, rgba(0, 255, 136, 0.02) 100%)`,
  border: '1px solid rgba(0, 255, 136, 0.2)',
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
  background: `radial-gradient(circle at center, rgba(0, 255, 136, 0.15) 0%, transparent 50%)`,
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
  color: vars.color.success,
  marginBottom: vars.space.xl,
  position: 'relative',
  zIndex: 1,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 0, 0, 0.7)',
    borderColor: vars.color.success,
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
    borderColor: vars.color.success,
    color: vars.color.success,
    background: 'rgba(0, 255, 136, 0.1)',
  },
});

export const installLinkIcon = style({
  width: '18px',
  height: '18px',
});

// ============================================
// INTEGRATION NOTE
// ============================================

export const integrationSection = style({
  textAlign: 'center',
});

export const integrationCard = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: vars.space.xl,
  background: 'rgba(0, 212, 255, 0.05)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  borderRadius: vars.radius.lg,
  position: 'relative',
});

export const integrationTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const integrationDescription = style({
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
  marginBottom: vars.space.lg,
});

export const integrationLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: vars.color.accentGlow,
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: vars.radius.md,
  color: vars.color.accent,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 212, 255, 0.2)',
    borderColor: vars.color.accent,
  },
});
