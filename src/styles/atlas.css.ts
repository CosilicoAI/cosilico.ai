import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Atlas Page Styles
 *
 * Design direction: Document/archive aesthetic with cyan accent.
 * Focus on structured data and API-first design.
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

export const atlas = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

globalStyle(`${atlas} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${atlas} h1, ${atlas} h2, ${atlas} h3, ${atlas} h4`, {
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
  opacity: 0.8,
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
    ${vars.color.text} 30%,
    ${vars.color.accent} 70%,
    ${vars.color.accentBright} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: `0 0 80px rgba(0, 212, 255, 0.3)`,
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
// DESCRIPTION SECTION
// ============================================

export const descriptionSection = style({
  background: `linear-gradient(180deg, transparent 0%, ${vars.color.accentGlow} 50%, transparent 100%)`,
});

export const descriptionContent = style({
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

export const descriptionText = style({});

export const descriptionTitle = style({
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const descriptionParagraph = style({
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
  marginBottom: vars.space.lg,
});

export const descriptionList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const descriptionItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: '1rem',
  color: vars.color.textSecondary,
});

export const checkIcon = style({
  width: '20px',
  height: '20px',
  color: vars.color.accent,
  flexShrink: 0,
});

export const descriptionVisual = style({
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  position: 'relative',
  overflow: 'hidden',
});

export const visualGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
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
    borderColor: 'rgba(0, 212, 255, 0.4)',
    background: vars.color.accentGlow,
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

export const featureBadge = style({
  display: 'inline-block',
  padding: `2px ${vars.space.sm}`,
  background: 'rgba(255, 170, 0, 0.1)',
  border: '1px solid rgba(255, 170, 0, 0.3)',
  borderRadius: vars.radius.sm,
  fontSize: '0.7rem',
  fontFamily: vars.font.mono,
  color: vars.color.amber,
  marginTop: vars.space.sm,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

// ============================================
// CODE EXAMPLES
// ============================================

export const codeSection = style({
  background: `linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)`,
});

export const codeContent = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space['2xl'],
  alignItems: 'start',
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const codeText = style({});

export const codeTitle = style({
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const codeDescription = style({
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
  marginBottom: vars.space.lg,
});

export const codeExampleBox = style({
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const codeHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: 'rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
});

export const codeFilename = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const codeFilenameIcon = style({
  width: '14px',
  height: '14px',
  color: vars.color.accent,
});

export const codeLang = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  padding: `2px ${vars.space.sm}`,
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: vars.radius.sm,
});

export const codeBody = style({
  padding: vars.space.lg,
  overflowX: 'auto',
});

export const codePre = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  lineHeight: 1.6,
  color: vars.color.textSecondary,
  whiteSpace: 'pre',
  margin: 0,
});

// Syntax highlighting
globalStyle(`${codePre} .keyword`, {
  color: vars.color.accent,
});

globalStyle(`${codePre} .string`, {
  color: vars.color.success,
});

globalStyle(`${codePre} .number`, {
  color: vars.color.amber,
});

globalStyle(`${codePre} .comment`, {
  color: vars.color.textMuted,
  fontStyle: 'italic',
});

globalStyle(`${codePre} .function`, {
  color: '#c678dd',
});

globalStyle(`${codePre} .variable`, {
  color: vars.color.text,
});

// ============================================
// ARCHITECTURE SECTION
// ============================================

export const architectureSection = style({});

export const architectureContainer = style({
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  position: 'relative',
  overflow: 'hidden',
});

export const architectureGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${vars.color.accent}, transparent)`,
});

export const pipelineStages = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.lg,
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1,
});

export const pipelineStage = style({
  flex: '1 1 150px',
  textAlign: 'center',
  padding: vars.space.lg,
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.lg,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    background: vars.color.accentGlow,
  },
});

export const stageIcon = style({
  width: '48px',
  height: '48px',
  margin: '0 auto',
  marginBottom: vars.space.md,
  color: vars.color.accent,
});

export const stageTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.xs,
  color: vars.color.text,
  fontFamily: vars.font.display,
});

export const stageDescription = style({
  fontSize: '0.85rem',
  color: vars.color.textSecondary,
});

export const pipelineArrow = style({
  color: vars.color.accent,
  opacity: 0.5,
  flexShrink: 0,
  '@media': {
    '(max-width: 768px)': {
      transform: 'rotate(90deg)',
    },
  },
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
  background: `linear-gradient(135deg, ${vars.color.accentGlow} 0%, rgba(0, 212, 255, 0.02) 100%)`,
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
  background: 'rgba(0, 255, 136, 0.05)',
  border: '1px solid rgba(0, 255, 136, 0.2)',
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
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.3)',
  borderRadius: vars.radius.md,
  color: vars.color.success,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 255, 136, 0.2)',
    borderColor: vars.color.success,
  },
});

// Animation delays
export const delay1 = style({ animationDelay: '0.1s' });
export const delay2 = style({ animationDelay: '0.15s' });
export const delay3 = style({ animationDelay: '0.2s' });
export const delay4 = style({ animationDelay: '0.25s' });
export const delay5 = style({ animationDelay: '0.3s' });
export const delay6 = style({ animationDelay: '0.35s' });
