import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Pricing Page Styles
 * Converted from Pricing.css to vanilla-extract
 */

// ============================================
// GRID BACKGROUND
// ============================================

// Grid background is now provided by PageLayout component

// ============================================
// BASE STYLES
// ============================================

export const pricing = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
});

globalStyle(`${pricing} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle(`${pricing} h1, ${pricing} h2, ${pricing} h3`, {
  fontFamily: vars.font.display,
  fontWeight: '600',
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
});

export const sectionSubtitle = style({
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space['2xl'],
  textAlign: 'center',
});

// ============================================
// HERO
// ============================================

export const pricingHero = style({
  textAlign: 'center',
  paddingTop: '140px !important',
  paddingBottom: `${vars.space['2xl']} !important`,
});

globalStyle(`${pricingHero} h1`, {
  fontSize: 'clamp(3rem, 8vw, 5rem)',
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

export const pricingSubtitle = style({
  fontSize: '1.5rem',
  color: vars.color.textSecondary,
  maxWidth: '600px',
  margin: '0 auto',
});

// ============================================
// PHILOSOPHY
// ============================================

export const pricingPhilosophy = style({
  background: vars.color.bgElevated,
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const philosophyContent = style({
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
});

globalStyle(`${philosophyContent} h2`, {
  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
  marginBottom: vars.space.xl,
});

globalStyle(`${philosophyContent} p`, {
  fontSize: '1.2rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.lg,
  lineHeight: 1.8,
});

globalStyle(`${philosophyContent} strong`, {
  color: vars.color.text,
});

// ============================================
// API PRICING CARDS
// ============================================

export const pricingApis = style({
  textAlign: 'center',
});

globalStyle(`${pricingApis} h2`, {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.md,
});

export const pricingGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: vars.space.lg,
  marginTop: vars.space.xl,
});

export const pricingCard = style({
  padding: vars.space.xl,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  textAlign: 'left',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
  ':hover': {
    transform: 'translateY(-4px)',
    borderColor: vars.color.borderGlow,
  },
});

export const featured = style({
  borderColor: vars.color.accentDim,
  background: `linear-gradient(
    135deg,
    ${vars.color.bgCard} 0%,
    rgba(0, 212, 170, 0.05) 100%
  )`,
  '::before': {
    content: "'Most Popular'",
    position: 'absolute',
    top: vars.space.md,
    right: vars.space.md,
    fontFamily: vars.font.mono,
    fontSize: '0.7rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: vars.color.accent,
    background: vars.color.accentGlow,
    padding: `${vars.space.xs} ${vars.space.sm}`,
    borderRadius: vars.radius.sm,
  },
});

export const pricingCardHeader = style({
  marginBottom: vars.space.lg,
});

globalStyle(`${pricingCard} h3`, {
  fontSize: '1.25rem',
  marginBottom: vars.space.sm,
  color: vars.color.text,
});

export const price = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space.xs,
});

export const priceValue = style({
  fontFamily: vars.font.display,
  fontSize: '2.5rem',
  fontWeight: '700',
  color: vars.color.accent,
});

export const priceUnit = style({
  fontFamily: vars.font.body,
  fontSize: '0.95rem',
  color: vars.color.textMuted,
});

export const pricingDescription = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
  lineHeight: 1.6,
});

globalStyle(`${pricingCard} code`, {
  display: 'block',
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  color: vars.color.accent,
  border: `1px solid ${vars.color.border}`,
  marginBottom: vars.space.lg,
});

export const pricingFeatures = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle(`${pricingFeatures} li`, {
  padding: `${vars.space.xs} 0`,
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${pricingFeatures} li::before`, {
  content: '""',
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
  flexShrink: 0,
});

// ============================================
// DATA PRICING
// ============================================

export const pricingData = style({
  textAlign: 'center',
});

globalStyle(`${pricingData} h2`, {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.md,
});

export const dataPricingBox = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: vars.space['2xl'],
  alignItems: 'center',
  padding: vars.space['2xl'],
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  textAlign: 'left',
  maxWidth: '900px',
  margin: `${vars.space.xl} auto 0`,
});

export const dataPrice = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.xl,
});

globalStyle(`${dataPrice} .${priceValue}`, {
  fontSize: '3.5rem',
});

globalStyle(`${dataPrice} .${priceUnit}`, {
  fontSize: '1.1rem',
});

export const dataDetails = style({});

globalStyle(`${dataDetails} p`, {
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.md,
  lineHeight: 1.7,
});

globalStyle(`${dataDetails} ul`, {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.sm,
});

globalStyle(`${dataDetails} li`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${dataDetails} li::before`, {
  content: '""',
  width: '6px',
  height: '6px',
  background: vars.color.accent,
  borderRadius: '50%',
  flexShrink: 0,
});

// ============================================
// FREE TIER
// ============================================

export const pricingFree = style({
  textAlign: 'center',
});

globalStyle(`${pricingFree} h2`, {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.xl,
});

export const freeBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space['3xl'],
  padding: vars.space['2xl'],
  background: `linear-gradient(
    135deg,
    ${vars.color.bgCard} 0%,
    rgba(0, 212, 170, 0.05) 100%
  )`,
  border: `1px solid ${vars.color.accentDim}`,
  borderRadius: vars.radius.xl,
  maxWidth: '800px',
  margin: '0 auto',
});

export const freeAmount = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const freeValue = style({
  fontFamily: vars.font.display,
  fontSize: '4rem',
  fontWeight: '700',
  background: `linear-gradient(
    135deg,
    ${vars.color.accent} 0%,
    ${vars.color.accentBright} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1,
});

export const freeLabel = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: '500',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const freeDetails = style({
  textAlign: 'left',
});

globalStyle(`${freeDetails} p`, {
  fontSize: '1.1rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
});

export const freeNote = style({
  fontSize: '0.95rem',
  color: vars.color.textMuted,
});

// ============================================
// USE CASES TABLE
// ============================================

export const pricingUseCases = style({
  textAlign: 'center',
});

globalStyle(`${pricingUseCases} h2`, {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space['2xl'],
});

export const useCaseTable = style({
  maxWidth: '900px',
  margin: '0 auto',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
});

export const useCaseRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr 1.8fr',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border}`,
  textAlign: 'left',
  transition: `background ${vars.duration.fast}`,
  ':last-child': {
    borderBottom: 'none',
  },
});

export const useCaseRowNotHeader = style({
  ':hover': {
    background: vars.color.bgElevated,
  },
});

export const header = style({
  background: vars.color.bgElevated,
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: vars.color.textMuted,
});

globalStyle(`${useCaseRow} span`, {
  fontSize: '0.95rem',
  color: vars.color.textSecondary,
});

globalStyle(`${useCaseRow} span:first-child`, {
  fontWeight: '500',
  color: vars.color.text,
});

globalStyle(`${useCaseRow} span:nth-child(2)`, {
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  color: vars.color.accent,
});

// ============================================
// ENTERPRISE
// ============================================

export const pricingEnterprise = style({
  paddingTop: `${vars.space['2xl']} !important`,
  paddingBottom: `${vars.space['2xl']} !important`,
});

export const enterpriseBox = style({
  textAlign: 'center',
  padding: vars.space['3xl'],
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  maxWidth: '700px',
  margin: '0 auto',
});

globalStyle(`${enterpriseBox} h2`, {
  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
  marginBottom: vars.space.lg,
});

globalStyle(`${enterpriseBox} p`, {
  fontSize: '1.15rem',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
  lineHeight: 1.7,
});

// ============================================
// CTA
// ============================================

export const pricingCta = style({
  textAlign: 'center',
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

globalStyle(`${pricingCta} h2`, {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: vars.space.md,
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${pricingCta} > p`, {
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
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

// ============================================
// BUTTONS
// ============================================

export const btnPrimary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: '500',
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
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 0 0 1px ${vars.color.accentBright},
      0 8px 30px -4px ${vars.color.accentIntense},
      0 0 60px -10px ${vars.color.accent}
    `,
  },
});

export const btnSecondary = style({
  fontFamily: vars.font.display,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: '0.95rem',
  fontWeight: '500',
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
});

// ============================================
// RESPONSIVE
// ============================================

globalStyle(`@media (max-width: 768px)`, {
  // Note: These need to be applied with separate globalStyle calls
});

// Mobile styles for sections
globalStyle(`@media (max-width: 768px) {
  ${pricing} section {
    padding: ${vars.space['3xl']} ${vars.space.md};
  }

  ${pricingHero} {
    padding-top: 120px !important;
  }

  ${pricingGrid} {
    grid-template-columns: 1fr;
  }

  ${dataPricingBox} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${dataDetails} {
    text-align: center;
  }

  ${dataDetails} ul {
    grid-template-columns: 1fr;
  }

  ${freeBox} {
    flex-direction: column;
    gap: ${vars.space.xl};
    text-align: center;
  }

  ${freeDetails} {
    text-align: center;
  }

  ${useCaseTable} {
    font-size: 0.85rem;
  }

  ${useCaseRow} {
    grid-template-columns: 1fr;
    gap: ${vars.space.xs};
    padding: ${vars.space.md};
  }

  ${useCaseRow}.${header} {
    display: none;
  }

  ${useCaseRow} span:first-child {
    font-size: 1rem;
    margin-bottom: ${vars.space.xs};
  }
}`, {});

globalStyle(`@media (max-width: 480px) {
  ${btnPrimary},
  ${btnSecondary} {
    width: 100%;
  }

  ${ctaButtons} {
    flex-direction: column;
  }
}`, {});
