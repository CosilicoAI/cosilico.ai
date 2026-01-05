import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico FusionGAN Page Styles
 *
 * Design direction: Neural network aesthetics with data flow visualization.
 * The page should feel like watching a GAN learn in real-time.
 */

// ============================================
// ANIMATIONS
// ============================================

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const pulseGlow = keyframes({
  '0%, 100%': { boxShadow: `0 0 20px rgba(123, 44, 191, 0.3)` },
  '50%': { boxShadow: `0 0 40px rgba(123, 44, 191, 0.5), 0 0 60px rgba(0, 212, 255, 0.3)` },
});

// ============================================
// BASE STYLES
// ============================================

export const fusiongan = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

globalStyle(`${fusiongan} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${fusiongan} h1, ${fusiongan} h2, ${fusiongan} h3, ${fusiongan} h4`, {
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
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  height: '500px',
  background: `radial-gradient(ellipse, rgba(123, 44, 191, 0.3) 0%, rgba(0, 212, 255, 0.1) 40%, transparent 70%)`,
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
  background: 'rgba(123, 44, 191, 0.2)',
  border: `1px solid rgba(123, 44, 191, 0.4)`,
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: '#b794f6',
  marginBottom: vars.space.lg,
});

export const heroTitle = style({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: '700',
  marginBottom: vars.space.md,
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, #b794f6 50%, ${vars.color.accent} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const heroSubtitle = style({
  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
  color: vars.color.textMuted,
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: 1.6,
});

// ============================================
// ARCHITECTURE SECTION
// ============================================

export const architectureSection = style({
  paddingTop: `${vars.space['2xl']} !important`,
});

export const sectionTitle = style({
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
  textAlign: 'center',
  marginBottom: vars.space.md,
  color: vars.color.text,
});

export const sectionSubtitle = style({
  fontSize: '1.1rem',
  color: vars.color.textMuted,
  textAlign: 'center',
  maxWidth: '600px',
  margin: `0 auto ${vars.space['2xl']}`,
});

export const architectureDiagram = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.md,
  flexWrap: 'wrap',
  padding: vars.space.xl,
  background: 'rgba(255, 255, 255, 0.02)',
  borderRadius: vars.radius.xl,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  marginBottom: vars.space['2xl'],
});

export const archBox = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderRadius: vars.radius.lg,
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '0.95rem',
  fontFamily: vars.font.display,
  minWidth: '120px',
});

export const archNoise = style([archBox, {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
}]);

export const archGenerator = style([archBox, {
  background: 'rgba(123, 44, 191, 0.3)',
  border: '1px solid rgba(123, 44, 191, 0.5)',
  animation: `${pulseGlow} 3s ease-in-out infinite`,
}]);

export const archSynthetic = style([archBox, {
  background: 'rgba(231, 76, 60, 0.3)',
  border: '1px solid rgba(231, 76, 60, 0.5)',
}]);

export const archDiscCps = style([archBox, {
  background: 'rgba(46, 204, 113, 0.3)',
  border: '1px solid rgba(46, 204, 113, 0.5)',
}]);

export const archDiscPuf = style([archBox, {
  background: 'rgba(52, 152, 219, 0.3)',
  border: '1px solid rgba(52, 152, 219, 0.5)',
}]);

export const archArrow = style({
  fontSize: '1.5rem',
  color: vars.color.textMuted,
  '@media': {
    '(max-width: 768px)': {
      transform: 'rotate(90deg)',
    },
  },
});

export const archProjection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

// ============================================
// FEATURES GRID
// ============================================

export const featuresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: vars.space.lg,
  marginTop: vars.space['2xl'],
});

export const featureCard = style({
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: vars.radius.lg,
  padding: vars.space.xl,
  border: '1px solid rgba(255, 255, 255, 0.08)',
  transition: 'all 0.3s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
    transform: 'translateY(-4px)',
  },
});

export const featureIcon = style({
  width: '48px',
  height: '48px',
  color: vars.color.accent,
  marginBottom: vars.space.md,
});

export const featureTitle = style({
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const featureDescription = style({
  fontSize: '0.95rem',
  color: vars.color.textMuted,
  lineHeight: 1.6,
});

// ============================================
// INTERACTIVE DEMO
// ============================================

export const demoSection = style({
  paddingTop: `${vars.space['3xl']} !important`,
});

export const demoContainer = style({
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: vars.radius.xl,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
});

export const demoIframe = style({
  width: '100%',
  height: '800px',
  border: 'none',
  '@media': {
    '(max-width: 768px)': {
      height: '600px',
    },
  },
});

// ============================================
// LINKS SECTION
// ============================================

export const linksSection = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.lg,
  flexWrap: 'wrap',
  marginTop: vars.space['3xl'],
});

export const linkButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: vars.radius.lg,
  color: vars.color.text,
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
  transition: 'all 0.2s ease',
  ':hover': {
    background: 'rgba(0, 212, 255, 0.1)',
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

export const linkIcon = style({
  width: '20px',
  height: '20px',
});
