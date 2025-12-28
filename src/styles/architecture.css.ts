import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Architecture Page - "Terminal Futurism meets Legal Blueprint"
 *
 * Typography: Uses global design tokens (Geist + Crimson Pro + JetBrains Mono)
 * Grid: Blueprint-style background with precise alignments
 * Motion: Typewriter effects, terminal cursor blinks, smooth reveals
 */

/* ============================================
   CUSTOM COLOR PALETTE (Architecture-specific)
   ============================================ */

const archColors = {
  bg: '#0a0a0f',
  bgElevated: '#12121a',
  bgCard: '#161620',
  surface: '#1e1e2a',
  border: '#2a2a3a',
  borderDim: '#1a1a28',
  borderBright: '#3a3a50',
  text: '#e8e8f0',
  textDim: '#888898',
  textMuted: '#5a5a6a',
  accent: '#00e5ff',
  accentDim: '#0099aa',
  accentGlow: 'rgba(0, 229, 255, 0.15)',
  green: '#00ff9f',
  greenGlow: 'rgba(0, 255, 159, 0.15)',
  amber: '#ffb800',
  amberGlow: 'rgba(255, 184, 0, 0.15)',
  purple: '#a855f7',
  purpleDim: '#7c3aed',
  purpleGlow: 'rgba(168, 85, 247, 0.15)',
  red: '#ff4060',
};

/* ============================================
   ANIMATIONS
   ============================================ */

const floatIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

/* ============================================
   PAGE FOUNDATION
   ============================================ */

export const architecturePage = style({
  background: archColors.bg,
  color: archColors.text,
  fontFamily: vars.font.body,
  lineHeight: 1.6,
  minHeight: '100vh',
  position: 'relative',
  overflowX: 'hidden',
  paddingTop: '73px',
});

// Grid background is now provided by PageLayout component

// Generic section style for consistent layout
export const archSection = style({
  position: 'relative',
  zIndex: 1,
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

/* ============================================
   HERO SECTION
   ============================================ */

export const archHero = style({
  minHeight: 'calc(100vh - 80px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '120px !important',
});

export const heroTerminal = style({
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  marginBottom: '48px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  animation: `${floatIn} 0.8s ease-out both`,
  animationDelay: '0.2s',
});

export const terminalBar = style({
  background: archColors.surface,
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  borderBottom: `1px solid ${archColors.borderDim}`,
});

export const terminalDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

export const terminalDotRed = style({
  background: '#ff5f56',
});

export const terminalDotYellow = style({
  background: '#ffbd2e',
});

export const terminalDotGreen = style({
  background: '#27c93f',
});

export const terminalTitle = style({
  marginLeft: 'auto',
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  color: archColors.textMuted,
});

export const terminalContent = style({
  padding: '20px 24px',
});

export const typeLine = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  display: 'flex',
  gap: vars.space.sm,
});

export const prompt = style({
  color: archColors.green,
});

export const command = style({
  color: archColors.accent,
});

export const flag = style({
  color: archColors.amber,
});

export const arg = style({
  color: archColors.text,
});

globalStyle(`${archHero} h1`, {
  fontFamily: vars.font.display,
  fontWeight: 600,
  letterSpacing: '-0.02em',
  marginBottom: '24px',
  animation: `${floatIn} 0.8s ease-out both`,
  animationDelay: '0.4s',
});

export const heroPrefix = style({
  display: 'block',
  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
  color: archColors.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  marginBottom: vars.space.sm,
});

export const heroMain = style({
  display: 'block',
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  background: `linear-gradient(135deg, ${archColors.text} 0%, ${archColors.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const archSubtitle = style({
  fontSize: '1.1rem',
  color: archColors.textDim,
  maxWidth: '600px',
  animation: `${floatIn} 0.8s ease-out both`,
  animationDelay: '0.6s',
});

export const heroBadges = style({
  display: 'flex',
  gap: '12px',
  marginTop: vars.space.xl,
  flexWrap: 'wrap',
  justifyContent: 'center',
  animation: `${floatIn} 0.8s ease-out both`,
  animationDelay: '0.8s',
});

export const badge = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '6px 14px',
  background: archColors.accentGlow,
  border: `1px solid ${archColors.accentDim}`,
  borderRadius: vars.radius.sm,
  color: archColors.accent,
});

/* ============================================
   SECTION HEADERS
   ============================================ */

export const sectionHeader = style({
  marginBottom: '40px',
});

export const sectionLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: archColors.accent,
  display: 'block',
  marginBottom: '12px',
});

globalStyle(`${sectionHeader} h2`, {
  fontFamily: vars.font.body,
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  marginBottom: '12px',
});

globalStyle(`${sectionHeader} p`, {
  color: archColors.textDim,
  fontSize: '1rem',
});

/* ============================================
   PRINCIPLES SECTION
   ============================================ */

export const principleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
});

export const principleCard = style({
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.xl,
  display: 'flex',
  gap: '20px',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: `linear-gradient(90deg, ${archColors.accent}, transparent)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  ':hover': {
    borderColor: archColors.borderBright,
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 229, 255, 0.08)',
  },
  selectors: {
    '&:hover::before': {
      opacity: 1,
    },
  },
});

export const cardNumber = style({
  fontFamily: vars.font.display,
  fontSize: '2rem',
  fontWeight: 600,
  color: archColors.borderBright,
  lineHeight: 1,
});

export const cardContent = style({});

globalStyle(`${cardContent} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: archColors.text,
});

globalStyle(`${cardContent} p`, {
  fontSize: '0.9rem',
  color: archColors.textDim,
  lineHeight: 1.6,
});

globalStyle(`${cardContent} code`, {
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  background: archColors.accentGlow,
  padding: '2px 6px',
  borderRadius: '3px',
  color: archColors.accent,
});

/* ============================================
   EXPLORER SECTION
   ============================================ */

export const explorerContainer = style({
  display: 'grid',
  gridTemplateColumns: '340px 1fr',
  gap: 0,
  background: archColors.bgElevated,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  minHeight: '500px',
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const explorerTree = style({
  background: archColors.bgCard,
  borderRight: `1px solid ${archColors.border}`,
  display: 'flex',
  flexDirection: 'column',
});

export const treeHeader = style({
  padding: '16px 20px',
  borderBottom: `1px solid ${archColors.border}`,
  background: archColors.surface,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const treeIcon = style({
  fontSize: '1.2rem',
});

export const treeTitle = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
  fontSize: '0.9rem',
});

export const treeSubtitle = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  color: archColors.textMuted,
});

export const treeBody = style({
  flex: 1,
  overflow: 'auto',
  padding: '12px',
});

export const treeNode = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
});

export const treeItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 10px',
  borderRadius: vars.radius.sm,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  borderLeft: '2px solid transparent',
  margin: '1px 0',
  ':hover': {
    background: archColors.surface,
  },
});

export const treeItemSelected = style({
  background: archColors.accentGlow,
  borderLeftColor: archColors.accent,
});

export const treeToggle = style({
  fontSize: '0.6rem',
  color: archColors.textMuted,
  transition: 'transform 0.2s ease',
  width: '10px',
  flexShrink: 0,
});

export const treeToggleExpanded = style({
  transform: 'rotate(90deg)',
});

export const treeLabel = style({
  color: archColors.text,
  flex: 1,
});

export const treeFile = style({
  fontSize: '0.65rem',
  color: archColors.textMuted,
  marginLeft: 'auto',
});

export const treeBadge = style({
  fontSize: '0.55rem',
  padding: '2px 5px',
  borderRadius: '3px',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '0.05em',
  marginLeft: 'auto',
});

export const treeBadgeIndexed = style({
  background: archColors.amberGlow,
  color: archColors.amber,
});

export const treeBadgeIndexing = style({
  background: archColors.greenGlow,
  color: archColors.green,
});

export const treeBadgeTest = style({
  background: 'rgba(147, 51, 234, 0.15)',
  color: '#a855f7',
});

export const treeBadgeIntegration = style({
  background: 'rgba(236, 72, 153, 0.15)',
  color: '#ec4899',
});

export const treeChildren = style({
  marginLeft: '12px',
  borderLeft: `1px solid ${archColors.borderDim}`,
  paddingLeft: '4px',
});

export const explorerCode = style({
  display: 'flex',
  flexDirection: 'column',
  background: archColors.bg,
});

export const codeHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
  borderBottom: `1px solid ${archColors.border}`,
  background: archColors.surface,
});

export const codePathGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const codeIcon = style({
  fontSize: '1rem',
});

export const codePath = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  color: archColors.accent,
});

export const codeType = style({
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  padding: '2px 6px',
  borderRadius: '3px',
  textTransform: 'uppercase',
});

export const codeTypeCosilico = style({
  background: archColors.accentGlow,
  color: archColors.accent,
});

export const codeTypeYaml = style({
  background: archColors.amberGlow,
  color: archColors.amber,
});

export const codeActions = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const codeAction = style({
  background: 'transparent',
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.sm,
  padding: '6px',
  cursor: 'pointer',
  color: archColors.textMuted,
  transition: 'all 0.15s ease',
  ':hover': {
    borderColor: archColors.accent,
    color: archColors.accent,
  },
});

globalStyle(`${codeAction} svg`, {
  width: '14px',
  height: '14px',
  display: 'block',
});

export const codeContent = style({
  flex: 1,
  margin: 0,
  padding: '20px',
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  lineHeight: 1.7,
  color: archColors.textDim,
  overflow: 'auto',
  background: 'transparent',
});

globalStyle(`${codeContent} code`, {
  display: 'block',
  whiteSpace: 'pre-wrap',
});

export const codeFooter = style({
  padding: '10px 20px',
  borderTop: `1px solid ${archColors.border}`,
  background: archColors.surface,
});

export const codeRef = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  color: archColors.textMuted,
});

/* ============================================
   INDEXING DEMO
   ============================================ */

export const indexingDemo = style({
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

export const demoHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 20px',
  background: archColors.surface,
  borderBottom: `1px solid ${archColors.border}`,
});

export const demoTitle = style({
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  color: archColors.text,
});

export const demoStatus = style({
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const demoStatusOnline = style({
  color: archColors.green,
});

export const demoStatusDemo = style({
  color: '#f59e0b',
});

export const demoBody = style({
  padding: '24px',
});

export const queryBuilder = style({
  background: archColors.bg,
  border: `1px solid ${archColors.border}`,
  borderRadius: '6px',
  padding: '16px 20px',
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  marginBottom: '24px',
});

export const queryLine = style({
  lineHeight: 1.8,
});

export const queryLineIndent = style({
  paddingLeft: '24px',
});

export const queryKeyword = style({ color: archColors.accent });
export const queryDot = style({ color: archColors.textMuted });
export const queryMethod = style({ color: archColors.green });
export const queryParen = style({ color: archColors.textMuted });
export const queryString = style({ color: archColors.amber });
export const queryComma = style({ color: archColors.textMuted });
export const queryParam = style({ color: archColors.text });
export const queryColon = style({ color: archColors.textMuted });
export const queryValue = style({
  color: archColors.accent,
  transition: 'all 0.2s ease',
});
export const queryValueFlash = style({
  background: archColors.accentGlow,
  borderRadius: '2px',
});

export const controlsRow = style({
  display: 'flex',
  gap: vars.space.xl,
  marginBottom: '24px',
  flexWrap: 'wrap',
});

export const controlGroup = style({});

globalStyle(`${controlGroup} label`, {
  display: 'block',
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  color: archColors.textMuted,
  letterSpacing: '0.1em',
  marginBottom: vars.space.sm,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '4px',
});

globalStyle(`${buttonGroup} button`, {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  padding: '8px 14px',
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.sm,
  color: archColors.textDim,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
});

globalStyle(`${buttonGroup} button:hover`, {
  borderColor: archColors.accentDim,
  color: archColors.text,
});

globalStyle(`${buttonGroup} button.active`, {
  background: archColors.accentGlow,
  borderColor: archColors.accent,
  color: archColors.accent,
});

export const responseBlock = style({
  background: archColors.bg,
  border: `1px solid ${archColors.border}`,
  borderRadius: '6px',
  overflow: 'hidden',
  marginBottom: vars.space.md,
});

export const responseHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 16px',
  background: archColors.surface,
  borderBottom: `1px solid ${archColors.border}`,
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  color: archColors.textMuted,
  letterSpacing: '0.05em',
});

export const responseTime = style({
  color: archColors.green,
});

export const responseBody = style({
  padding: '16px 20px',
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
});

export const responseLine = style({
  lineHeight: 1.8,
});

export const responseLineIndent = style({
  paddingLeft: '16px',
});

export const responseBrace = style({ color: archColors.textMuted });
export const responseKey = style({ color: archColors.text });
export const responseColon = style({ color: archColors.textMuted, margin: '0 4px' });
export const responseComma = style({ color: archColors.textMuted });
export const responseNumber = style({
  color: archColors.accent,
  fontWeight: 500,
  transition: 'all 0.2s ease',
});
export const responseNumberFlash = style({
  background: archColors.accentGlow,
  padding: '0 4px',
  borderRadius: '2px',
});

export const responseString = style({
  transition: 'all 0.2s ease',
});

export const responseStringTierPublished = style({ color: archColors.green });
export const responseStringTierProjected = style({ color: archColors.amber });
export const responseStringTierCalculated = style({ color: archColors.accent });

export const fallbackNotice = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: '10px 14px',
  background: archColors.amberGlow,
  border: '1px solid rgba(255, 184, 0, 0.3)',
  borderRadius: vars.radius.sm,
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  color: archColors.amber,
  marginBottom: vars.space.md,
});

export const noticeIcon = style({
  fontSize: '1rem',
});

export const tierExplanation = style({
  fontSize: '0.85rem',
  color: archColors.textDim,
  marginBottom: '24px',
});

export const precedenceVisual = style({
  paddingTop: vars.space.md,
  borderTop: `1px solid ${archColors.border}`,
});

export const precedenceLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  color: archColors.textMuted,
  letterSpacing: '0.1em',
  marginBottom: '12px',
});

export const precedenceChain = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  flexWrap: 'wrap',
});

export const precedenceNode = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '12px 20px',
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: '6px',
  opacity: 0.4,
  transition: 'all 0.3s ease',
});

export const precedenceNodeActive = style({
  opacity: 1,
  borderColor: archColors.accent,
  boxShadow: `0 0 20px ${archColors.accentGlow}`,
});

export const nodeNum = style({
  fontFamily: vars.font.display,
  fontSize: '1.2rem',
  fontWeight: 600,
  color: archColors.accent,
});

export const nodeName = style({
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  color: archColors.text,
  letterSpacing: '0.05em',
});

export const precedenceConnector = style({
  width: '24px',
  height: '2px',
  background: archColors.border,
});

export const indexingExplanation = style({
  marginTop: vars.space.xl,
  padding: '24px',
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
});

globalStyle(`${indexingExplanation} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle(`${indexingExplanation} ol`, {
  listStyle: 'none',
  counterReset: 'item',
  padding: 0,
  margin: 0,
});

globalStyle(`${indexingExplanation} li`, {
  counterIncrement: 'item',
  padding: '12px 0',
  borderBottom: `1px solid ${archColors.borderDim}`,
  fontSize: '0.9rem',
  color: archColors.textDim,
  display: 'flex',
  gap: '12px',
});

globalStyle(`${indexingExplanation} li:last-child`, {
  borderBottom: 'none',
});

globalStyle(`${indexingExplanation} li::before`, {
  content: 'counter(item)',
  fontFamily: vars.font.display,
  fontWeight: 600,
  color: archColors.accent,
  minWidth: '20px',
});

globalStyle(`${indexingExplanation} strong`, {
  color: archColors.text,
  fontWeight: 600,
});

/* ============================================
   CODE CONTENT & FOOTER
   ============================================ */

globalStyle('.code-content', {
  flex: 1,
  margin: 0,
  padding: '20px',
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  lineHeight: 1.7,
  color: archColors.textDim,
  overflow: 'auto',
  background: 'transparent',
});

globalStyle('.code-content code', {
  display: 'block',
  whiteSpace: 'pre-wrap',
});

globalStyle('.code-footer', {
  padding: '10px 20px',
  borderTop: `1px solid ${archColors.border}`,
  background: archColors.surface,
});

globalStyle('.code-ref', {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  color: archColors.textMuted,
});

/* ============================================
   INDEXING SECTION
   ============================================ */

globalStyle('.arch-indexing', {
  position: 'relative',
  zIndex: 1,
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('.section-header', {
  marginBottom: '40px',
});

globalStyle('.section-label', {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: archColors.accent,
  display: 'block',
  marginBottom: '12px',
});

globalStyle('.indexing-explanation', {
  marginTop: vars.space.xl,
  padding: '24px',
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
});

globalStyle('.indexing-explanation h4', {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle('.indexing-explanation ol', {
  listStyle: 'none',
  counterReset: 'item',
  padding: 0,
  margin: 0,
});

globalStyle('.indexing-explanation li', {
  counterIncrement: 'item',
  padding: '12px 0',
  borderBottom: `1px solid ${archColors.borderDim}`,
  fontSize: '0.9rem',
  color: archColors.textDim,
  display: 'flex',
  gap: '12px',
});

globalStyle('.indexing-explanation li:last-child', {
  borderBottom: 'none',
});

globalStyle('.indexing-explanation li::before', {
  content: 'counter(item)',
  fontFamily: vars.font.display,
  fontWeight: 600,
  color: archColors.accent,
  minWidth: '20px',
});

globalStyle('.indexing-explanation strong', {
  color: archColors.text,
  fontWeight: 600,
});

/* ============================================
   OVERRIDE ARCHITECTURE SECTION
   ============================================ */

globalStyle('.override-architecture', {
  marginTop: '60px',
  padding: '40px 0',
  borderTop: `1px solid ${archColors.border}`,
});

globalStyle('.override-architecture h3', {
  fontFamily: vars.font.body,
  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle('.override-intro', {
  fontSize: '1rem',
  color: archColors.textDim,
  marginBottom: '32px',
  lineHeight: 1.6,
});

globalStyle('.override-flow', {
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '32px',
  marginBottom: '32px',
});

globalStyle('.override-stage', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

globalStyle('.stage-box', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.sm,
  padding: '20px',
});

globalStyle('.statute-stage', {
  borderLeftColor: archColors.purple,
  borderLeftWidth: '3px',
});

globalStyle('.irs-stage', {
  borderLeftColor: archColors.green,
  borderLeftWidth: '3px',
});

globalStyle('.resolution-stage', {
  borderLeftColor: archColors.accent,
  borderLeftWidth: '3px',
});

globalStyle('.stage-icon', {
  fontSize: '1.5rem',
  marginBottom: vars.space.sm,
  display: 'block',
});

globalStyle('.stage-box h5', {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
});

globalStyle('.stage-path', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  background: archColors.bg,
  padding: '4px 8px',
  borderRadius: '3px',
  display: 'inline-block',
  marginBottom: vars.space.sm,
  color: archColors.accent,
});

globalStyle('.stage-desc', {
  fontSize: '0.85rem',
  color: archColors.textDim,
  marginBottom: vars.space.md,
});

globalStyle('.stage-code', {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  background: archColors.bg,
  padding: '12px',
  borderRadius: vars.radius.sm,
  overflow: 'auto',
  lineHeight: 1.6,
  color: archColors.textDim,
  margin: 0,
});

globalStyle('.stage-arrow', {
  textAlign: 'center',
  fontSize: '1.2rem',
  color: archColors.accent,
  padding: '12px 0',
  fontWeight: 600,
});

globalStyle('.resolution-logic', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

globalStyle('.logic-step', {
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
  fontSize: '0.85rem',
  padding: '8px 0',
});

globalStyle('.step-num', {
  fontFamily: vars.font.display,
  fontWeight: 600,
  color: archColors.accent,
  minWidth: '24px',
});

globalStyle('.step-text', {
  color: archColors.textDim,
  flex: 1,
});

globalStyle('.step-text code', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  background: archColors.bg,
  padding: '2px 6px',
  borderRadius: '3px',
  color: archColors.accent,
});

globalStyle('.step-text strong', {
  color: archColors.green,
  fontWeight: 600,
});

globalStyle('.override-benefits', {
  marginTop: '40px',
});

globalStyle('.override-benefits h4', {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
});

globalStyle('.benefit-grid', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px',
});

globalStyle('.benefit-card', {
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

globalStyle('.benefit-icon', {
  fontSize: '1.5rem',
  display: 'block',
});

globalStyle('.benefit-card h5', {
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 600,
  margin: 0,
});

globalStyle('.benefit-card p', {
  fontSize: '0.85rem',
  color: archColors.textDim,
  lineHeight: 1.6,
  margin: 0,
});

globalStyle('.benefit-card code', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  background: archColors.accentGlow,
  padding: '2px 6px',
  borderRadius: '3px',
  color: archColors.accent,
});

/* ============================================
   RL TRAINING SECTION
   ============================================ */

globalStyle('.arch-rl', {
  position: 'relative',
  zIndex: 1,
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('.rl-diagram', {
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '40px',
  marginBottom: '40px',
});

globalStyle('.rl-flow', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  marginBottom: '40px',
  flexWrap: 'wrap',
});

globalStyle('.rl-node', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '24px',
  textAlign: 'center',
  minWidth: '180px',
});

globalStyle('.rl-node.input', {
  borderTopColor: archColors.purple,
  borderTopWidth: '3px',
});

globalStyle('.rl-node.agent', {
  borderTopColor: archColors.accent,
  borderTopWidth: '3px',
});

globalStyle('.rl-node.output', {
  borderTopColor: archColors.green,
  borderTopWidth: '3px',
});

globalStyle('.rl-icon', {
  fontSize: '2rem',
  marginBottom: vars.space.md,
});

globalStyle('.rl-node h4', {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
});

globalStyle('.rl-node p', {
  fontSize: '0.8rem',
  color: archColors.textDim,
  margin: 0,
});

globalStyle('.rl-arrow', {
  fontSize: '1.5rem',
  color: archColors.accent,
  fontWeight: 600,
});

globalStyle('.rl-validators', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
  marginBottom: '32px',
});

globalStyle('.validator-card', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.sm,
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
});

globalStyle('.validator-card:hover', {
  borderColor: archColors.accent,
  transform: 'translateY(-2px)',
});

globalStyle('.validator-card.selected', {
  borderColor: archColors.accent,
  background: archColors.accentGlow,
});

globalStyle('.validator-icon', {
  fontSize: '1.5rem',
  display: 'block',
  marginBottom: vars.space.sm,
});

globalStyle('.validator-card h5', {
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: vars.space.xs,
});

globalStyle('.validator-card p', {
  fontSize: '0.75rem',
  color: archColors.textDim,
  margin: 0,
});

globalStyle('.validator-detail-box', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '24px',
  marginBottom: '24px',
});

globalStyle('.validator-detail-box.consensus', {
  borderLeftColor: archColors.green,
  borderLeftWidth: '3px',
});

globalStyle('.validator-detail-header', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: vars.space.md,
});

globalStyle('.validator-detail-icon', {
  fontSize: '1.5rem',
});

globalStyle('.validator-detail-title', {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
});

globalStyle('.validator-detail-box p', {
  fontSize: '0.9rem',
  color: archColors.textDim,
  lineHeight: 1.6,
  marginBottom: vars.space.lg,
});

globalStyle('.validator-detail-metrics', {
  display: 'flex',
  gap: '24px',
  flexWrap: 'wrap',
});

globalStyle('.validator-metric', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

globalStyle('.metric-value', {
  fontFamily: vars.font.display,
  fontSize: '1.2rem',
  fontWeight: 600,
  color: archColors.accent,
});

globalStyle('.metric-label', {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  color: archColors.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

globalStyle('.rl-feedback-loop', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '20px 0',
  borderTop: `1px solid ${archColors.border}`,
  borderBottom: `1px solid ${archColors.border}`,
  marginBottom: '32px',
});

globalStyle('.feedback-loop-line', {
  flex: 1,
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${archColors.accent}, transparent)`,
});

globalStyle('.feedback-label', {
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  color: archColors.accent,
  letterSpacing: '0.1em',
  whiteSpace: 'nowrap',
});

globalStyle('.rl-explanation', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px',
});

globalStyle('.rl-step', {
  display: 'flex',
  gap: '16px',
});

globalStyle('.step-number', {
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: archColors.accent,
  minWidth: '40px',
});

globalStyle('.step-content', {
  flex: 1,
});

globalStyle('.step-content h4', {
  fontFamily: vars.font.display,
  fontSize: '0.95rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
});

globalStyle('.step-content p', {
  fontSize: '0.85rem',
  color: archColors.textDim,
  lineHeight: 1.6,
  margin: 0,
});

/* ============================================
   LAW ARCHIVE SECTION
   ============================================ */

globalStyle('.arch-atlas', {
  position: 'relative',
  zIndex: 1,
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('.atlas-diagram', {
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '40px',
  marginBottom: '40px',
});

globalStyle('.la-flow', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

globalStyle('.la-source', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

globalStyle('.la-box', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '24px',
});

globalStyle('.la-box.sources', {
  borderLeftColor: archColors.purple,
  borderLeftWidth: '3px',
});

globalStyle('.la-box.consumer', {
  textAlign: 'center',
  padding: '20px',
});

globalStyle('.api-consumer', {
  borderTopColor: archColors.accent,
  borderTopWidth: '3px',
});

globalStyle('.la-box h4', {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle('.source-list', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: vars.space.md,
});

globalStyle('.source-item', {
  fontSize: '0.85rem',
  color: archColors.textDim,
});

globalStyle('.source-crawler', {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  paddingTop: vars.space.md,
  borderTop: `1px solid ${archColors.border}`,
});

globalStyle('.crawler-badge', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  background: archColors.accentGlow,
  color: archColors.accent,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
});

globalStyle('.crawler-desc', {
  fontSize: '0.75rem',
  color: archColors.textMuted,
});

globalStyle('.la-arrow', {
  textAlign: 'center',
  fontSize: '1.5rem',
  color: archColors.accent,
  fontWeight: 600,
});

globalStyle('.archive-header', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: vars.space.md,
});

globalStyle('.archive-icon', {
  fontSize: '1.5rem',
});

globalStyle('.storage-split', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginBottom: vars.space.md,
});

globalStyle('.storage-component', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

globalStyle('.storage-icon', {
  fontSize: '1.5rem',
});

globalStyle('.storage-component h5', {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
});

globalStyle('.storage-component p', {
  fontSize: '0.8rem',
  color: archColors.textDim,
  margin: 0,
});

globalStyle('.archive-index', {
  fontSize: '0.85rem',
  color: archColors.textDim,
  padding: '12px',
  background: archColors.bg,
  borderRadius: vars.radius.sm,
});

globalStyle('.la-consumers', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

globalStyle('.consumer-row', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
});

globalStyle('.consumer-icon', {
  fontSize: '1.5rem',
  marginBottom: vars.space.sm,
});

globalStyle('.la-box.consumer h5', {
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '4px',
});

globalStyle('.la-box.consumer p', {
  fontSize: '0.75rem',
  color: archColors.textDim,
  margin: 0,
});

/* ============================================
   BITEMPORAL SECTION
   ============================================ */

globalStyle('.bitemporal-section', {
  marginTop: '60px',
  padding: '40px 0',
  borderTop: `1px solid ${archColors.border}`,
});

globalStyle('.bitemporal-section h3', {
  fontFamily: vars.font.body,
  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
  fontWeight: 600,
  marginBottom: vars.space.md,
});

globalStyle('.bitemporal-intro', {
  fontSize: '1rem',
  color: archColors.textDim,
  marginBottom: '32px',
  lineHeight: 1.6,
});

globalStyle('.bitemporal-example', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  marginBottom: '24px',
});

globalStyle('.vintage-card', {
  background: archColors.surface,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '20px',
});

globalStyle('.vintage-card.arpa', {
  borderLeftColor: archColors.green,
  borderLeftWidth: '3px',
});

globalStyle('.vintage-header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${archColors.border}`,
});

globalStyle('.vintage-badge', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 600,
  background: archColors.accentGlow,
  color: archColors.accent,
  padding: '4px 10px',
  borderRadius: vars.radius.sm,
});

globalStyle('.vintage-date', {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  color: archColors.textMuted,
});

globalStyle('.vintage-rules', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

globalStyle('.rule-row', {
  display: 'flex',
  gap: '12px',
  padding: '10px',
  background: archColors.bg,
  borderRadius: vars.radius.sm,
});

globalStyle('.rule-row.sunset', {
  borderLeft: `2px solid ${archColors.amber}`,
});

globalStyle('.rule-period', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 600,
  color: archColors.accent,
  minWidth: '80px',
});

globalStyle('.rule-formula', {
  fontSize: '0.8rem',
  color: archColors.textDim,
  flex: 1,
});

globalStyle('.sunset-tag', {
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  background: archColors.amberGlow,
  color: archColors.amber,
  padding: '2px 6px',
  borderRadius: '3px',
  marginLeft: '8px',
});

globalStyle('.bitemporal-query', {
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.md,
  padding: '20px',
  marginBottom: '32px',
});

globalStyle('.query-example', {
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  color: archColors.text,
  display: 'block',
  lineHeight: 1.8,
});

globalStyle('.query-result', {
  color: archColors.green,
  marginLeft: '20px',
});

/* ============================================
   CLI WORKFLOW
   ============================================ */

globalStyle('.cli-workflow', {
  marginTop: '40px',
});

globalStyle('.cli-workflow h3', {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
});

globalStyle('.cli-steps', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

globalStyle('.cli-step', {
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
  padding: '12px',
  background: archColors.bgCard,
  border: `1px solid ${archColors.border}`,
  borderRadius: vars.radius.sm,
});

globalStyle('.cli-step code', {
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  color: archColors.accent,
  flex: 1,
});

globalStyle('.cli-desc', {
  fontSize: '0.75rem',
  color: archColors.textMuted,
  minWidth: '200px',
});

/* Export all styles for use in components */

/* Law Archive Section */
globalStyle('.arch-atlas', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' });
globalStyle('.atlas-diagram', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '40px', marginBottom: '40px' });
globalStyle('.la-flow', { display: 'flex', flexDirection: 'column', gap: '32px' });
globalStyle('.la-source', { display: 'flex', flexDirection: 'column', gap: '16px' });
globalStyle('.la-box', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '24px' });
globalStyle('.la-box.sources', { borderLeftColor: archColors.purple, borderLeftWidth: '3px' });
globalStyle('.la-box.archive', {});
globalStyle('.storage-arch', {});
globalStyle('.la-box.consumer', { textAlign: 'center', padding: '20px' });
globalStyle('.api-consumer', { borderTopColor: archColors.accent, borderTopWidth: '3px' });
globalStyle('.la-box h4', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.source-list', { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: vars.space.md });
globalStyle('.source-item', { fontSize: '0.85rem', color: archColors.textDim });
globalStyle('.source-crawler', { display: 'flex', gap: '12px', alignItems: 'center', paddingTop: vars.space.md, borderTop: `1px solid ${archColors.border}` });
globalStyle('.crawler-badge', { fontFamily: vars.font.display, fontSize: '0.75rem', background: archColors.accentGlow, color: archColors.accent, padding: '4px 10px', borderRadius: vars.radius.sm });
globalStyle('.crawler-desc', { fontSize: '0.75rem', color: archColors.textMuted });
globalStyle('.la-arrow', { textAlign: 'center', fontSize: '1.5rem', color: archColors.accent, fontWeight: 600 });
globalStyle('.la-archive', {});
globalStyle('.archive-header', { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: vars.space.md });
globalStyle('.archive-icon', { fontSize: '1.5rem' });
globalStyle('.storage-split', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: vars.space.md });
globalStyle('.storage-component', { display: 'flex', flexDirection: 'column', gap: '8px' });
globalStyle('.storage-icon', { fontSize: '1.5rem' });
globalStyle('.storage-component h5', { fontFamily: vars.font.display, fontSize: '0.9rem', fontWeight: 600 });
globalStyle('.storage-component p', { fontSize: '0.8rem', color: archColors.textDim, margin: 0 });
globalStyle('.storage-path', { fontFamily: vars.font.display, fontSize: '0.7rem', background: archColors.bg, padding: '4px 8px', borderRadius: '3px', color: archColors.accent });
globalStyle('.archive-index', { fontSize: '0.85rem', color: archColors.textDim, padding: '12px', background: archColors.bg, borderRadius: vars.radius.sm });
globalStyle('.la-consumers', { display: 'flex', flexDirection: 'column', gap: '16px' });
globalStyle('.consumer-row', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' });
globalStyle('.consumer-icon', { fontSize: '1.5rem', marginBottom: vars.space.sm });
globalStyle('.la-box.consumer h5', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' });
globalStyle('.la-box.consumer p', { fontSize: '0.75rem', color: archColors.textDim, margin: 0 });

/* Bitemporal Section */
globalStyle('.bitemporal-section', { marginTop: '60px', padding: '40px 0', borderTop: `1px solid ${archColors.border}` });
globalStyle('.bitemporal-section h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.bitemporal-intro', { fontSize: '1rem', color: archColors.textDim, marginBottom: '32px', lineHeight: 1.6 });
globalStyle('.bitemporal-example', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' });
globalStyle('.vintage-card', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px' });
globalStyle('.vintage-card.arpa', { borderLeftColor: archColors.green, borderLeftWidth: '3px' });
globalStyle('.vintage-header', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: vars.space.md, paddingBottom: vars.space.md, borderBottom: `1px solid ${archColors.border}` });
globalStyle('.vintage-badge', { fontFamily: vars.font.display, fontSize: '0.75rem', fontWeight: 600, background: archColors.accentGlow, color: archColors.accent, padding: '4px 10px', borderRadius: vars.radius.sm });
globalStyle('.vintage-date', { fontFamily: vars.font.display, fontSize: '0.7rem', color: archColors.textMuted });
globalStyle('.vintage-rules', { display: 'flex', flexDirection: 'column', gap: '12px' });
globalStyle('.rule-row', { display: 'flex', gap: '12px', padding: '10px', background: archColors.bg, borderRadius: vars.radius.sm });
globalStyle('.rule-row.sunset', { borderLeft: `2px solid ${archColors.amber}` });
globalStyle('.rule-period', { fontFamily: vars.font.display, fontSize: '0.75rem', fontWeight: 600, color: archColors.accent, minWidth: '80px' });
globalStyle('.rule-formula', { fontSize: '0.8rem', color: archColors.textDim, flex: 1 });
globalStyle('.sunset-tag', { fontFamily: vars.font.display, fontSize: '0.65rem', background: archColors.amberGlow, color: archColors.amber, padding: '2px 6px', borderRadius: '3px', marginLeft: '8px' });
globalStyle('.bitemporal-query', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px', marginBottom: '32px' });
globalStyle('.query-example', { fontFamily: vars.font.display, fontSize: '0.8rem', color: archColors.text, display: 'block', lineHeight: 1.8 });
globalStyle('.query-result', { color: archColors.green, marginLeft: '20px' });

/* CLI Workflow */
globalStyle('.cli-workflow', { marginTop: '40px' });
globalStyle('.cli-workflow h3', { fontFamily: vars.font.display, fontSize: '1.1rem', fontWeight: 600, marginBottom: vars.space.lg });
globalStyle('.cli-steps', { display: 'flex', flexDirection: 'column', gap: '12px' });
globalStyle('.cli-step', { display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '12px', background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.sm });
globalStyle('.cli-step code', { fontFamily: vars.font.display, fontSize: '0.75rem', color: archColors.accent, flex: 1 });
globalStyle('.cli-desc', { fontSize: '0.75rem', color: archColors.textMuted, minWidth: '200px' });

/* Compilation Section */
globalStyle('.arch-compilation', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' });
globalStyle('.compilation-flow', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '40px', marginBottom: '40px' });
globalStyle('.flow-stage', { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' });
globalStyle('.flow-stage.source', {});
globalStyle('.stage-icon', { fontSize: '2rem', marginBottom: vars.space.md });
globalStyle('.flow-stage h4', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.code-sample', { fontFamily: vars.font.display, fontSize: '0.75rem', background: archColors.bg, padding: '16px', borderRadius: vars.radius.sm, overflow: 'auto', lineHeight: 1.6, color: archColors.textDim, margin: 0 });
globalStyle('.flow-arrow-down', { textAlign: 'center', fontSize: '1.2rem', color: archColors.accent, padding: '20px 0', fontWeight: 600 });
globalStyle('.flow-targets', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' });
globalStyle('.target-card', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, overflow: 'hidden' });
globalStyle('.target-card.python', { borderTopColor: '#3776ab', borderTopWidth: '3px' });
globalStyle('.target-card.javascript', { borderTopColor: '#f7df1e', borderTopWidth: '3px' });
globalStyle('.target-card.wasm', { borderTopColor: '#654ff0', borderTopWidth: '3px' });
globalStyle('.target-card.sql', { borderTopColor: '#00758f', borderTopWidth: '3px' });
globalStyle('.target-header', { padding: '16px', background: archColors.bgCard, borderBottom: `1px solid ${archColors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
globalStyle('.target-icon', { fontSize: '1.2rem' });
globalStyle('.target-header h5', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 });
globalStyle('.target-status', { fontFamily: vars.font.display, fontSize: '0.7rem', padding: '4px 8px', borderRadius: vars.radius.sm });
globalStyle('.target-code', { fontFamily: vars.font.display, fontSize: '0.7rem', background: archColors.bg, padding: '16px', overflow: 'auto', lineHeight: 1.6, color: archColors.textDim, margin: 0, minHeight: '180px' });
globalStyle('.target-use-case', { padding: '12px 16px', fontSize: '0.75rem', color: archColors.textMuted, background: archColors.bgCard, borderTop: `1px solid ${archColors.border}`, textAlign: 'center' });

/* Validation Strategy */
globalStyle('.validation-strategy', { marginTop: '60px', padding: '40px 0', borderTop: `1px solid ${archColors.border}` });
globalStyle('.validation-strategy h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.lg });
globalStyle('.validation-phases', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '32px' });
globalStyle('.phase-card', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '24px' });
globalStyle('.phase-card.phase-1', { borderLeftColor: archColors.purple, borderLeftWidth: '3px' });
globalStyle('.phase-card.phase-2', { borderLeftColor: archColors.accent, borderLeftWidth: '3px' });
globalStyle('.phase-header', { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: vars.space.md });
globalStyle('.phase-number', { fontFamily: vars.font.display, fontSize: '1.5rem', fontWeight: 600, color: archColors.accent, minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: archColors.accentGlow, borderRadius: '50%' });
globalStyle('.phase-header h4', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600, flex: 1, margin: 0 });
globalStyle('.phase-frequency', { fontFamily: vars.font.display, fontSize: '0.7rem', color: archColors.textMuted, marginLeft: 'auto' });
globalStyle('.phase-card p', { fontSize: '0.85rem', color: archColors.textDim, lineHeight: 1.6, marginBottom: vars.space.md });
globalStyle('.phase-code', { fontFamily: vars.font.display, fontSize: '0.75rem', background: archColors.bg, padding: '12px', borderRadius: vars.radius.sm, overflow: 'auto', lineHeight: 1.6, color: archColors.textDim, marginBottom: vars.space.md, margin: 0 });
globalStyle('.phase-checks', { display: 'flex', flexDirection: 'column', gap: '8px' });
globalStyle('.check', { fontSize: '0.8rem', color: archColors.green, fontFamily: vars.font.display });
globalStyle('.cross-compile-diagram', { background: archColors.bg, padding: '16px', borderRadius: vars.radius.sm, marginBottom: vars.space.md });
globalStyle('.cc-source', { textAlign: 'center', fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600, color: archColors.accent, marginBottom: '12px' });
globalStyle('.cc-arrows', { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' });
globalStyle('.cc-arrow', { fontSize: '0.8rem', color: archColors.textDim, paddingLeft: '20px' });
globalStyle('.cc-constraint', { textAlign: 'center', fontSize: '0.8rem', color: archColors.green, fontWeight: 600, paddingTop: '12px', borderTop: `1px solid ${archColors.border}` });
globalStyle('.validation-benefits', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '24px' });
globalStyle('.validation-benefits h4', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.validation-benefits ul', { margin: 0, paddingLeft: '24px' });
globalStyle('.validation-benefits li', { fontSize: '0.85rem', color: archColors.textDim, lineHeight: 1.8, marginBottom: '8px' });
globalStyle('.validation-benefits strong', { color: archColors.text, fontWeight: 600 });

/* Repository Section */
globalStyle('.arch-repos', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' });
globalStyle('.repo-diagram-full', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '40px', marginBottom: '40px' });
globalStyle('.repo-tier', { marginBottom: '32px' });
globalStyle('.repo-tier.orchestrator', {});
globalStyle('.repo-tier.countries', {});
globalStyle('.repo-tier.infrastructure', {});
globalStyle('.tier-label', { fontFamily: vars.font.display, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: archColors.accent, marginBottom: vars.space.md, textAlign: 'center' });
globalStyle('.repo-box', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px', marginBottom: '16px' });
globalStyle('.repo-box.main', { borderTopColor: archColors.accent, borderTopWidth: '3px' });
globalStyle('.repo-box.rules', { borderLeftColor: archColors.purple, borderLeftWidth: '3px' });
globalStyle('.repo-box.data', { borderLeftColor: archColors.green, borderLeftWidth: '3px' });
globalStyle('.repo-box.engine', { borderLeftColor: archColors.accent, borderLeftWidth: '3px' });
globalStyle('.repo-box.data-core', { borderLeftColor: archColors.green, borderLeftWidth: '3px' });
globalStyle('.repo-box.ai', { borderLeftColor: archColors.amber, borderLeftWidth: '3px' });
globalStyle('.repo-box.validators', { borderLeftColor: archColors.purple, borderLeftWidth: '3px' });
globalStyle('.repo-icon', { fontSize: '1.5rem', marginBottom: vars.space.sm, display: 'block' });
globalStyle('.repo-flag', { fontSize: '2rem', marginBottom: vars.space.sm, display: 'block' });
globalStyle('.repo-box h4', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600, marginBottom: '8px' });
globalStyle('.repo-box code', { fontFamily: vars.font.display, fontSize: '0.75rem', background: archColors.bg, padding: '4px 8px', borderRadius: '3px', display: 'block', marginBottom: '12px', color: archColors.accent });
globalStyle('.repo-type', { fontFamily: vars.font.display, fontSize: '0.7rem', color: archColors.textMuted, display: 'block', marginTop: '8px' });
globalStyle('.repo-box ul', { margin: 0, paddingLeft: '20px', listStyle: 'none' });
globalStyle('.repo-box li', { fontSize: '0.8rem', color: archColors.textDim, marginBottom: '4px', position: 'relative', paddingLeft: '12px' });
globalStyle('.repo-box li::before', { content: '"·"', position: 'absolute', left: 0, color: archColors.accent });
globalStyle('.repo-connector', { height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' });
globalStyle('.repo-connector.vertical', { fontSize: '1.5rem', color: archColors.accent });
globalStyle('.repo-connector.vertical::before', { content: '"↓"' });
globalStyle('.repo-pair', { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' });
globalStyle('.repo-row', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' });

/* Repository Structure */
globalStyle('.repo-structure', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '40px' });
globalStyle('.structure-block', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px' });
globalStyle('.structure-header', { fontFamily: vars.font.display, fontSize: '0.9rem', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.structure-tree', { fontFamily: vars.font.display, fontSize: '0.75rem' });
globalStyle('.tree-line', { display: 'flex', gap: '8px', padding: '4px 0', alignItems: 'baseline' });
globalStyle('.tree-line.indent', { paddingLeft: '20px' });
globalStyle('.tree-line.indent-2', { paddingLeft: '40px' });
globalStyle('.folder', { color: archColors.accent, fontWeight: 600 });
globalStyle('.file', { color: archColors.green });
globalStyle('.comment', { color: archColors.textMuted, fontSize: '0.7rem', marginLeft: 'auto' });

/* Microdata Section */
globalStyle('.arch-microdata', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' });
globalStyle('.microdata-architecture', { display: 'flex', flexDirection: 'column', gap: '60px' });
globalStyle('.microdata-entities', {});
globalStyle('.microdata-entities h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.entities-intro', { fontSize: '1rem', color: archColors.textDim, marginBottom: '32px', lineHeight: 1.6 });
globalStyle('.entity-hierarchy', { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '40px' });
globalStyle('.entity-level', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '16px 32px', textAlign: 'center', minWidth: '200px' });
globalStyle('.entity-level.nation', { borderTopColor: archColors.purple, borderTopWidth: '3px' });
globalStyle('.entity-level.state', { borderTopColor: archColors.accent, borderTopWidth: '3px' });
globalStyle('.entity-level.household', { borderTopColor: archColors.green, borderTopWidth: '3px' });
globalStyle('.entity-level.group', { borderTopColor: archColors.amber, borderTopWidth: '3px' });
globalStyle('.entity-level.person', { borderTopColor: archColors.accent, borderTopWidth: '3px' });
globalStyle('.entity-level.record', { borderTopColor: archColors.textMuted, borderTopWidth: '3px' });
globalStyle('.entity-label', { fontFamily: vars.font.display, fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '4px' });
globalStyle('.entity-note', { fontSize: '0.7rem', color: archColors.textMuted });
globalStyle('.entity-connector', { width: '2px', height: '24px', background: archColors.border });
globalStyle('.entity-split', { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', maxWidth: '500px' });

/* Microdata Flow */
globalStyle('.microdata-flow', {});
globalStyle('.microdata-flow h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.flow-intro', { fontSize: '1rem', color: archColors.textDim, marginBottom: '32px', lineHeight: 1.6 });
globalStyle('.data-flow-diagram', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' });
globalStyle('.flow-sources', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', width: '100%' });
globalStyle('.flow-source', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.sm, padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' });
globalStyle('.source-icon', { fontSize: '1.5rem' });
globalStyle('.flow-source span:nth-child(2)', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600 });
globalStyle('.source-vars', { fontSize: '0.7rem', color: archColors.textMuted });
globalStyle('.flow-arrow', { fontSize: '1.5rem', color: archColors.accent, fontWeight: 600 });
globalStyle('.flow-model', { background: archColors.surface, border: `1px solid ${archColors.accent}`, borderWidth: '2px', borderRadius: vars.radius.md, padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' });
globalStyle('.model-icon', { fontSize: '2rem' });
globalStyle('.model-name', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600 });
globalStyle('.model-detail', { fontSize: '0.75rem', color: archColors.textMuted });
globalStyle('.flow-output', { background: archColors.surface, border: `1px solid ${archColors.green}`, borderWidth: '2px', borderRadius: vars.radius.md, padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' });
globalStyle('.output-icon', { fontSize: '2rem' });
globalStyle('.output-name', { fontFamily: vars.font.display, fontSize: '1rem', fontWeight: 600 });
globalStyle('.output-detail', { fontSize: '0.75rem', color: archColors.textMuted });

/* Microdata Calibration */
globalStyle('.microdata-calibration', {});
globalStyle('.microdata-calibration h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.lg });
globalStyle('.calibration-targets', { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' });
globalStyle('.target-tier', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.sm, padding: '16px', display: 'grid', gridTemplateColumns: 'auto 1fr 2fr', gap: '16px', alignItems: 'center' });
globalStyle('.tier-priority', { fontFamily: vars.font.display, fontSize: '0.8rem', fontWeight: 600, background: archColors.accentGlow, color: archColors.accent, padding: '6px 12px', borderRadius: vars.radius.sm });
globalStyle('.tier-name', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600 });
globalStyle('.tier-sources', { fontSize: '0.75rem', color: archColors.textMuted });
globalStyle('.calibration-method', { display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, flexWrap: 'wrap', justifyContent: 'center' });
globalStyle('.method-step', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600, background: archColors.surface, padding: '10px 16px', borderRadius: vars.radius.sm, border: `1px solid ${archColors.border}` });
globalStyle('.method-arrow', { fontSize: '1.2rem', color: archColors.accent });

/* Microdata Temporal */
globalStyle('.microdata-temporal', {});
globalStyle('.microdata-temporal h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.lg });
globalStyle('.temporal-layers', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' });
globalStyle('.temporal-layer', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px' });
globalStyle('.temporal-layer.yearly', { borderLeftColor: archColors.accent, borderLeftWidth: '3px' });
globalStyle('.temporal-layer.intrayear', { borderLeftColor: archColors.green, borderLeftWidth: '3px' });
globalStyle('.layer-icon', { fontSize: '1.5rem', marginBottom: vars.space.sm, display: 'block' });
globalStyle('.layer-name', { fontFamily: vars.font.display, fontSize: '0.9rem', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.temporal-layer ul', { margin: 0, paddingLeft: '20px', listStyle: 'none' });
globalStyle('.temporal-layer li', { fontSize: '0.85rem', color: archColors.textDim, marginBottom: '8px', position: 'relative', paddingLeft: '12px' });
globalStyle('.temporal-layer li::before', { content: '"·"', position: 'absolute', left: 0, color: archColors.accent });

/* Microdata Variable Flow */
globalStyle('.microdata-variable-flow', {});
globalStyle('.microdata-variable-flow h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.variable-flow-diagram', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '32px', marginBottom: '24px' });
globalStyle('.flow-stage', { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' });
globalStyle('.stage-box.survey', { borderTopColor: archColors.purple, borderTopWidth: '3px' });
globalStyle('.stage-box.downloader', { borderTopColor: archColors.accent, borderTopWidth: '3px' });
globalStyle('.stage-box.microsim', { borderTopColor: archColors.green, borderTopWidth: '3px' });
globalStyle('.stage-box.statute', { borderTopColor: archColors.amber, borderTopWidth: '3px' });
globalStyle('.stage-name', { fontFamily: vars.font.display, fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' });
globalStyle('.stage-var', { fontFamily: vars.font.display, fontSize: '0.7rem', background: archColors.bg, padding: '4px 8px', borderRadius: '3px', color: archColors.accent });
globalStyle('.variable-flow-principle', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '20px' });
globalStyle('.principle-item', { display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' });
globalStyle('.principle-icon', { fontSize: '1.2rem', minWidth: '24px' });
globalStyle('.principle-text', { fontSize: '0.85rem', color: archColors.textDim });
globalStyle('.principle-text strong', { color: archColors.text, fontWeight: 600 });
globalStyle('.principle-reason', { fontSize: '0.85rem', color: archColors.textMuted, paddingTop: '12px', borderTop: `1px solid ${archColors.border}`, fontStyle: 'italic' });

/* Microdata Status */
globalStyle('.microdata-status', { marginTop: '40px' });
globalStyle('.microdata-status h3', { fontFamily: vars.font.body, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: vars.space.lg });
globalStyle('.status-grid', { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' });
globalStyle('.status-item', { background: archColors.surface, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' });
globalStyle('.status-item.done', { borderLeftColor: archColors.green, borderLeftWidth: '3px' });
globalStyle('.status-item.progress', { borderLeftColor: archColors.amber, borderLeftWidth: '3px' });
globalStyle('.status-item.pending', { borderLeftColor: archColors.textMuted, borderLeftWidth: '3px', opacity: 0.6 });
globalStyle('.status-icon', { fontSize: '1.5rem' });
globalStyle('.status-label', { fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600 });
globalStyle('.status-detail', { fontSize: '0.75rem', color: archColors.textDim });
globalStyle('.microdata-cta', { textAlign: 'center', padding: '24px' });
globalStyle('.btn-secondary', { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: vars.font.display, fontSize: '0.85rem', fontWeight: 600, padding: '12px 24px', background: 'transparent', border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, color: archColors.text, textDecoration: 'none', transition: 'all 0.2s ease' });
globalStyle('.btn-secondary:hover', { borderColor: archColors.accent, color: archColors.accent });
globalStyle('.btn-secondary svg', { width: '16px', height: '16px' });

/* Comparison Section */
globalStyle('.arch-comparison', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' });
globalStyle('.comparison-table', { background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md, overflow: 'hidden', marginBottom: '32px' });
globalStyle('.comparison-header', { display: 'grid', gridTemplateColumns: '200px repeat(5, 1fr)', gap: 0, background: archColors.surface, borderBottom: `1px solid ${archColors.border}`, padding: '16px 0' });
globalStyle('.comparison-row', { display: 'grid', gridTemplateColumns: '200px repeat(5, 1fr)', gap: 0, borderBottom: `1px solid ${archColors.borderDim}` });
globalStyle('.comparison-row:last-child', { borderBottom: 'none' });
globalStyle('.comparison-cell', { padding: '12px 16px', fontSize: '0.8rem', display: 'flex', alignItems: 'center' });
globalStyle('.comparison-cell.header-feature', { fontFamily: vars.font.display, fontSize: '0.75rem', fontWeight: 600, color: archColors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' });
globalStyle('.comparison-cell.header-system', { fontFamily: vars.font.display, fontSize: '0.75rem', fontWeight: 600, textAlign: 'center', justifyContent: 'center' });
globalStyle('.comparison-cell.feature', { fontFamily: vars.font.display, fontSize: '0.8rem', fontWeight: 600, color: archColors.text });
globalStyle('.comparison-cell.yes', { color: archColors.green, justifyContent: 'center', textAlign: 'center' });
globalStyle('.comparison-cell.no', { color: archColors.textMuted, justifyContent: 'center', textAlign: 'center' });
globalStyle('.comparison-cell.partial', { color: archColors.amber, justifyContent: 'center', textAlign: 'center' });
globalStyle('.comparison-notes', { display: 'flex', flexDirection: 'column', gap: '16px' });
globalStyle('.comparison-note', { fontSize: '0.85rem', color: archColors.textDim, lineHeight: 1.6, padding: '16px', background: archColors.bgCard, border: `1px solid ${archColors.border}`, borderRadius: vars.radius.md });
globalStyle('.comparison-note strong', { color: archColors.text, fontWeight: 600 });
globalStyle('.source-link', { color: archColors.accent, textDecoration: 'none', marginLeft: '8px' });
globalStyle('.source-link:hover', { textDecoration: 'underline' });

/* CTA Section */
globalStyle('.arch-cta', { position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' });
globalStyle('.cta-content', {});
globalStyle('.cta-content h2', { fontFamily: vars.font.body, fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, marginBottom: vars.space.md });
globalStyle('.cta-content p', { fontSize: '1.1rem', color: archColors.textDim, marginBottom: '32px' });
globalStyle('.cta-buttons', { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' });
globalStyle('.btn-primary', { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: vars.font.display, fontSize: '0.9rem', fontWeight: 600, padding: '14px 28px', background: archColors.accent, border: 'none', borderRadius: vars.radius.md, color: archColors.bg, textDecoration: 'none', transition: 'all 0.2s ease' });
globalStyle('.btn-primary:hover', { background: archColors.accentDim, transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(0, 229, 255, 0.3)' });
globalStyle('.btn-primary svg', { width: '20px', height: '20px' });

export const styles = {
  architecturePage,
  archHero,
  heroTerminal,
  terminalBar,
  terminalDot,
  terminalDotRed,
  terminalDotYellow,
  terminalDotGreen,
  terminalTitle,
  terminalContent,
  typeLine,
  prompt,
  command,
  flag,
  arg,
  heroPrefix,
  heroMain,
  archSubtitle,
  heroBadges,
  badge,
  sectionHeader,
  sectionLabel,
  principleGrid,
  principleCard,
  cardNumber,
  cardContent,
  explorerContainer,
  explorerTree,
  treeHeader,
  treeIcon,
  treeTitle,
  treeSubtitle,
  treeBody,
  treeNode,
  treeItem,
  treeItemSelected,
  treeToggle,
  treeToggleExpanded,
  treeLabel,
  treeFile,
  treeBadge,
  treeBadgeIndexed,
  treeBadgeIndexing,
  treeBadgeTest,
  treeBadgeIntegration,
  treeChildren,
  explorerCode,
  codeHeader,
  codePathGroup,
  codeIcon,
  codePath,
  codeType,
  codeTypeCosilico,
  codeTypeYaml,
  codeActions,
  codeAction,
  codeContent,
  codeFooter,
  codeRef,
  indexingDemo,
  demoHeader,
  demoTitle,
  demoStatus,
  demoStatusOnline,
  demoStatusDemo,
  demoBody,
  queryBuilder,
  queryLine,
  queryLineIndent,
  queryKeyword,
  queryDot,
  queryMethod,
  queryParen,
  queryString,
  queryComma,
  queryParam,
  queryColon,
  queryValue,
  queryValueFlash,
  controlsRow,
  controlGroup,
  buttonGroup,
  responseBlock,
  responseHeader,
  responseTime,
  responseBody,
  responseLine,
  responseLineIndent,
  responseBrace,
  responseKey,
  responseColon,
  responseComma,
  responseNumber,
  responseNumberFlash,
  responseString,
  responseStringTierPublished,
  responseStringTierProjected,
  responseStringTierCalculated,
  fallbackNotice,
  noticeIcon,
  tierExplanation,
  precedenceVisual,
  precedenceLabel,
  precedenceChain,
  precedenceNode,
  precedenceNodeActive,
  nodeNum,
  nodeName,
  precedenceConnector,
  indexingExplanation,
};
