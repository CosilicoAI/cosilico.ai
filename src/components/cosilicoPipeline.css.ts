import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Cosilico Pipeline Demo
 * Technical futurism - tracing law to calculation
 */

// Keyframes
const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const resultPop = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.95)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

// Container - Full dark theme with room for nav
export const pipelinePage = style({
  minHeight: '100vh',
  background: vars.color.bg,
  padding: `120px ${vars.space.lg} ${vars.space['4xl']}`,
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      padding: `100px ${vars.space.md} ${vars.space['3xl']}`,
    },
  },
});

export const pipelineContainer = style({
  maxWidth: '1100px',
  margin: '0 auto',
});

// Header
export const pipelineHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['3xl'],
});

export const pipelineTitle = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 600,
  color: vars.color.text,
  letterSpacing: '-0.03em',
  margin: `0 0 ${vars.space.md}`,
  lineHeight: 1.1,
});

globalStyle(`${pipelineTitle} span`, {
  color: vars.color.accent,
});

export const pipelineSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  margin: 0,
  fontStyle: 'italic',
});

// Tab Navigation - Glass pill style
export const pipelineTabs = style({
  display: 'flex',
  gap: vars.space.xs,
  justifyContent: 'center',
  marginBottom: vars.space.xl,
  padding: vars.space.xs,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius['2xl'],
  width: 'fit-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      width: '100%',
      borderRadius: vars.radius.lg,
    },
  },
});

export const pipelineTab = style({
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  background: 'transparent',
  border: 'none',
  borderRadius: vars.radius.xl,
  color: vars.color.textMuted,
  cursor: 'pointer',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  whiteSpace: 'nowrap',
  ':hover': {
    color: vars.color.text,
    background: vars.color.surface,
  },
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
      justifyContent: 'center',
      borderRadius: vars.radius.md,
    },
  },
});

export const pipelineTabActive = style({
  color: vars.color.bg,
  background: vars.color.accent,
  boxShadow: `0 0 20px ${vars.color.accentGlow}`,
});

export const tabNumber = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: vars.color.border,
  fontSize: '0.75rem',
  fontWeight: 600,
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
});

globalStyle(`${pipelineTab}.${pipelineTabActive} ${tabNumber}`, {
  background: vars.color.bg,
  color: vars.color.accent,
});

// Content Panel - Elevated card
export const pipelineContent = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  boxShadow: `
    0 0 0 1px rgba(255, 255, 255, 0.02),
    0 20px 50px -10px rgba(0, 0, 0, 0.4)`,
  animation: `${fadeIn} ${vars.duration.slow} ${vars.ease.out}`,
  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.lg,
    },
  },
});

// Panel Header
export const panelHeader = style({
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

globalStyle(`${panelHeader} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: `0 0 ${vars.space.md}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

globalStyle(`${panelHeader} h3 code`, {
  fontFamily: vars.font.mono,
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.accent,
  background: vars.color.accentGlow,
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: '1px solid rgba(0, 212, 255, 0.2)',
});

// Meta info badges
export const metaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.lg,
  color: vars.color.textMuted,
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: vars.space.sm,
    },
  },
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${metaItem} strong`, {
  color: vars.color.textSecondary,
  fontWeight: 500,
});

globalStyle(`${metaItem} code`, {
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.accent,
  background: vars.color.bgElevated,
  padding: `2px ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.border}`,
});

// Action Buttons
export const actionRow = style({
  display: 'flex',
  gap: vars.space.md,
  marginBottom: vars.space.xl,
  flexWrap: 'wrap',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const actionLink = style({
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.textSecondary,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    color: vars.color.text,
    borderColor: vars.color.accentDim,
    background: vars.color.surface,
  },
});

// Code Preview Block
export const codeBlock = style({
  background: vars.color.void,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const codeBlockHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.bgElevated,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const codeBlockTitle = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const codeBlockDots = style({
  display: 'flex',
  gap: vars.space.sm,
});

globalStyle(`${codeBlockDots} span`, {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: vars.color.border,
});

globalStyle(`${codeBlock} pre`, {
  margin: 0,
  padding: vars.space.lg,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  lineHeight: 1.7,
  color: vars.color.textSecondary,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

// Syntax highlighting
globalStyle(`${codeBlock} .comment`, {
  color: vars.color.textMuted,
});

globalStyle(`${codeBlock} .keyword`, {
  color: vars.color.accent,
});

globalStyle(`${codeBlock} .string`, {
  color: vars.color.amber,
});

globalStyle(`${codeBlock} .number`, {
  color: vars.color.success,
});

// Info Box
export const infoBox = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  marginTop: vars.space.xl,
});

globalStyle(`${infoBox} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: `0 0 ${vars.space.md}`,
});

globalStyle(`${infoBox} ul`, {
  margin: 0,
  paddingLeft: vars.space.lg,
  color: vars.color.textSecondary,
  fontFamily: vars.font.body,
  fontSize: '1rem',
  lineHeight: 1.8,
});

globalStyle(`${infoBox} li`, {
  marginBottom: vars.space.sm,
});

globalStyle(`${infoBox} strong`, {
  color: vars.color.accent,
  fontWeight: 500,
});

// Parameters Panel
export const paramsSources = style({
  background: vars.color.successGlow,
  border: '1px solid rgba(0, 255, 136, 0.2)',
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  marginBottom: vars.space.xl,
});

globalStyle(`${paramsSources} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 600,
  color: vars.color.success,
  margin: `0 0 ${vars.space.md}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${paramsSources} ul`, {
  margin: 0,
  paddingLeft: vars.space.lg,
  color: vars.color.textSecondary,
  fontFamily: vars.font.body,
});

// Parameter Tables
export const paramsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const paramTable = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

globalStyle(`${paramTable} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: 0,
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.surface,
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${paramTable} table`, {
  width: '100%',
  borderCollapse: 'collapse',
});

globalStyle(`${paramTable} th, ${paramTable} td`, {
  padding: `${vars.space.sm} ${vars.space.md}`,
  textAlign: 'left',
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

globalStyle(`${paramTable} th`, {
  color: vars.color.textMuted,
  fontWeight: 500,
  background: vars.color.bgCard,
});

globalStyle(`${paramTable} td`, {
  color: vars.color.textSecondary,
});

globalStyle(`${paramTable} tr:last-child td`, {
  borderBottom: 'none',
});

globalStyle(`${paramTable} tr:hover td`, {
  background: vars.color.surface,
});

// Calculate Panel
export const calcPanel = style({});

globalStyle(`${calcPanel} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: `0 0 ${vars.space.xl}`,
});

export const calcGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.lg,
  marginBottom: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const inputField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

globalStyle(`${inputField} label`, {
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.textSecondary,
});

globalStyle(`${inputField} input, ${inputField} select`, {
  fontFamily: vars.font.mono,
  fontSize: '1rem',
  padding: vars.space.md,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.text,
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
});

globalStyle(`${inputField} input:focus, ${inputField} select:focus`, {
  outline: 'none',
  borderColor: vars.color.accent,
  boxShadow: `0 0 0 3px ${vars.color.accentGlow}`,
});

// Error states
export const inputFieldError = style({});

globalStyle(`${inputField}.${inputFieldError} input, ${inputField}.${inputFieldError} select`, {
  borderColor: vars.color.error,
  background: 'rgba(255, 68, 102, 0.05)',
});

globalStyle(`${inputField}.${inputFieldError} input:focus, ${inputField}.${inputFieldError} select:focus`, {
  borderColor: vars.color.error,
  boxShadow: '0 0 0 3px rgba(255, 68, 102, 0.15)',
});

export const errorMsg = style({
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 500,
  color: vars.color.error,
  marginTop: vars.space.xs,
});

globalStyle(`${inputField} select`, {
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23707088' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: `right ${vars.space.md} center`,
  paddingRight: vars.space['2xl'],
});

export const calcButton = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  padding: `${vars.space.md} ${vars.space['2xl']}`,
  background: vars.color.accent,
  color: vars.color.bg,
  border: 'none',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  ':hover': {
    background: vars.color.accentBright,
    boxShadow: `0 0 30px ${vars.color.accentGlow}`,
    transform: 'translateY(-1px)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
  ':disabled': {
    background: vars.color.border,
    color: vars.color.textMuted,
    cursor: 'not-allowed',
    boxShadow: 'none',
    transform: 'none',
  },
});

// Result Display
export const calcResult = style({
  marginTop: vars.space.xl,
  padding: vars.space.xl,
  background: vars.color.successGlow,
  border: '1px solid rgba(0, 255, 136, 0.3)',
  borderRadius: vars.radius.xl,
  animation: `${resultPop} ${vars.duration.slow} ${vars.ease.spring}`,
});

export const resultHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space.md,
  marginBottom: vars.space.xl,
});

export const resultLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.success,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const resultAmount = style({
  fontFamily: vars.font.display,
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 700,
  color: vars.color.success,
  letterSpacing: '-0.03em',
  textShadow: '0 0 40px rgba(0, 255, 136, 0.3)',
});

export const engineBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 500,
  color: vars.color.accent,
  background: vars.color.accentGlow,
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: '1px solid rgba(0, 212, 255, 0.2)',
  marginBottom: vars.space.lg,
});

globalStyle(`${engineBadge} code`, {
  fontFamily: vars.font.mono,
  fontWeight: 600,
});

// Citation Chain
export const citationChain = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
});

globalStyle(`${citationChain} h5`, {
  fontFamily: vars.font.display,
  fontSize: '0.875rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: `0 0 ${vars.space.lg}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

globalStyle(`${citationChain} ol`, {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  counterReset: 'citation',
});

globalStyle(`${citationChain} li`, {
  counterIncrement: 'citation',
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.md,
  padding: `${vars.space.md} 0`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  fontFamily: vars.font.body,
  color: vars.color.textSecondary,
});

globalStyle(`${citationChain} li:last-child`, {
  borderBottom: 'none',
});

globalStyle(`${citationChain} li::before`, {
  content: 'counter(citation)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '24px',
  height: '24px',
  borderRadius: '50%',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 600,
  color: vars.color.textMuted,
});

globalStyle(`${citationChain} li strong`, {
  color: vars.color.text,
  fontWeight: 500,
});

globalStyle(`${citationChain} a`, {
  color: vars.color.accent,
  textDecoration: 'none',
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  transition: `color ${vars.duration.fast}`,
});

globalStyle(`${citationChain} a:hover`, {
  color: vars.color.accentBright,
  textDecoration: 'underline',
});

// Flow Indicator
export const flowIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.lg,
  marginBottom: vars.space.xl,
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflowX: 'auto',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
});

export const flowStep = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 500,
  color: vars.color.textMuted,
  whiteSpace: 'nowrap',
});

export const flowStepActive = style({
  color: vars.color.accent,
});

export const flowStepCompleted = style({
  color: vars.color.success,
});

export const flowStepIcon = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  transition: `all ${vars.duration.normal}`,
});

globalStyle(`${flowStep}.${flowStepActive} ${flowStepIcon}`, {
  background: vars.color.accentGlow,
  borderColor: vars.color.accent,
});

globalStyle(`${flowStep}.${flowStepCompleted} ${flowStepIcon}`, {
  background: vars.color.successGlow,
  borderColor: vars.color.success,
});

export const flowArrow = style({
  color: vars.color.border,
  fontSize: '1.2rem',
  '@media': {
    '(max-width: 768px)': {
      transform: 'rotate(90deg)',
      textAlign: 'center',
    },
  },
});
