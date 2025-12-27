import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
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
  width: '600px',
  height: '400px',
  background: `radial-gradient(ellipse, rgba(0, 255, 136, 0.08) 0%, transparent 70%)`,
  filter: 'blur(60px)',
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
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.3)',
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: vars.color.success,
  marginBottom: vars.space.lg,
  letterSpacing: '0.05em',
});

export const heroTitle = style({
  fontSize: 'clamp(3rem, 10vw, 5rem)',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  fontFamily: vars.font.mono,
  color: vars.color.success,
});

export const heroSubtitle = style({
  fontSize: '1.35rem',
  color: vars.color.textSecondary,
  maxWidth: '650px',
  margin: '0 auto',
  fontFamily: vars.font.body,
  fontWeight: 400,
});

// ============================================
// CODE BLOCKS
// ============================================

export const codeSection = style({
  paddingTop: `${vars.space['2xl']} !important`,
  paddingBottom: `${vars.space['2xl']} !important`,
});

export const codeBlock = style({
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  marginBottom: vars.space['2xl'],
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationFillMode: 'backwards',
});

export const codeHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.md} ${vars.space.xl}`,
  background: 'rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
});

export const codeFilename = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const codeFilenameIcon = style({
  width: '16px',
  height: '16px',
  color: vars.color.success,
});

export const codeCitation = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.textMuted,
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: vars.radius.sm,
});

export const codeContent = style({
  padding: vars.space.xl,
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

// Syntax highlighting via globalStyle
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

globalStyle(`${codePre} .field`, {
  color: '#e06c75',
});

globalStyle(`${codePre} .type`, {
  color: '#c678dd',
});

globalStyle(`${codePre} .variable`, {
  color: vars.color.text,
});

// ============================================
// FEATURES GRID
// ============================================

export const featuresSection = style({
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

export const featuresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.xl,
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const featureCard = style({
  padding: vars.space.xl,
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: vars.radius.lg,
  animation: `${fadeInUp} 0.6s ${vars.ease.out} forwards`,
  animationFillMode: 'backwards',
});

export const featureIcon = style({
  width: '48px',
  height: '48px',
  borderRadius: vars.radius.md,
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vars.space.md,
});

export const featureIconSvg = style({
  width: '24px',
  height: '24px',
  color: vars.color.success,
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

export const delay1 = style({ animationDelay: '0.1s' });
export const delay2 = style({ animationDelay: '0.15s' });
export const delay3 = style({ animationDelay: '0.2s' });
export const delay4 = style({ animationDelay: '0.25s' });
export const delay5 = style({ animationDelay: '0.3s' });
export const delay6 = style({ animationDelay: '0.35s' });

// ============================================
// STRUCTURE TABLE
// ============================================

export const structureSection = style({
  paddingTop: `${vars.space['3xl']} !important`,
});

export const structureTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
});

globalStyle(`${structureTable} th`, {
  textAlign: 'left',
  padding: vars.space.lg,
  background: 'rgba(0, 0, 0, 0.3)',
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '0.9rem',
  color: vars.color.textSecondary,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
});

globalStyle(`${structureTable} td`, {
  padding: vars.space.lg,
  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
  verticalAlign: 'top',
});

globalStyle(`${structureTable} tr:last-child td`, {
  borderBottom: 'none',
});

globalStyle(`${structureTable} code`, {
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.success,
  background: 'rgba(0, 255, 136, 0.1)',
  padding: `2px ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
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
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.3)',
  borderRadius: vars.radius.md,
  color: vars.color.success,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 500,
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    background: 'rgba(0, 255, 136, 0.2)',
    borderColor: vars.color.success,
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
