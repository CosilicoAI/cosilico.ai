import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Experiment Page - AlphaLaw Encoding Transparency
 *
 * Shows current agent configuration, tools, and results
 */

const colors = {
  bg: '#0a0a0f',
  bgCard: '#12121a',
  surface: '#1a1a24',
  border: '#252532',
  borderDim: '#1c1c28',
  text: '#e8e8f0',
  textDim: '#888898',
  textMuted: '#5a5a6a',
  accent: '#00d4ff',
  accentGlow: 'rgba(0, 212, 255, 0.15)',
  green: '#00ff88',
  greenGlow: 'rgba(0, 255, 136, 0.15)',
  amber: '#ffaa00',
  amberGlow: 'rgba(255, 170, 0, 0.15)',
  red: '#ff4466',
  redGlow: 'rgba(255, 68, 102, 0.15)',
};

export const experimentPage = style({
  background: colors.bg,
  color: colors.text,
  fontFamily: vars.font.body,
  lineHeight: 1.6,
  minHeight: '100vh',
  paddingTop: '73px',
});

export const experimentContainer = style({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: vars.space['2xl'],
});

export const experimentHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['3xl'],
});

globalStyle(`${experimentHeader} h1`, {
  fontFamily: vars.font.display,
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 600,
  marginBottom: vars.space.md,
  background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const subtitle = style({
  color: colors.textDim,
  fontSize: '1.1rem',
});

export const section = style({
  marginBottom: vars.space['3xl'],
});

globalStyle(`${section} > h2`, {
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${colors.border}`,
});

export const configCard = style({
  background: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.xl,
  marginBottom: vars.space.lg,
});

globalStyle(`${configCard} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  color: colors.accent,
});

export const configNote = style({
  color: colors.textMuted,
  fontSize: '0.85rem',
  marginBottom: vars.space.md,
});

export const codeBlock = style({
  background: colors.bg,
  border: `1px solid ${colors.borderDim}`,
  borderRadius: vars.radius.sm,
  padding: vars.space.md,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
  color: colors.textDim,
});

export const codeBlockEmpty = style([codeBlock, {
  color: colors.textMuted,
  fontStyle: 'italic',
}]);

export const configStats = style({
  marginTop: vars.space.md,
  display: 'flex',
  gap: vars.space.md,
});

export const stat = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: colors.textMuted,
  background: colors.surface,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
});

export const observation = style({
  marginTop: vars.space.md,
  padding: vars.space.md,
  background: colors.accentGlow,
  borderLeft: `3px solid ${colors.accent}`,
  fontSize: '0.9rem',
});

export const observationWarning = style([observation, {
  background: colors.amberGlow,
  borderLeftColor: colors.amber,
}]);

export const observationLabel = style({
  fontWeight: 600,
  marginRight: vars.space.sm,
});

export const toolsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const toolItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.md,
});

export const toolName = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  background: colors.surface,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  whiteSpace: 'nowrap',
});

export const toolDesc = style({
  color: colors.textDim,
  fontSize: '0.85rem',
});

export const resourcesTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.85rem',
});

globalStyle(`${resourcesTable} th`, {
  padding: vars.space.md,
  textAlign: 'left',
  borderBottom: `1px solid ${colors.border}`,
  color: colors.textMuted,
  fontFamily: vars.font.display,
  fontWeight: 500,
  fontSize: '0.8rem',
});

globalStyle(`${resourcesTable} td`, {
  padding: vars.space.md,
  borderBottom: `1px solid ${colors.borderDim}`,
});

export const pathCell = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: colors.textMuted,
});

// Results section
export const resultCard = style({
  background: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: vars.radius.md,
  padding: vars.space.xl,
  marginBottom: vars.space.lg,
});

export const resultCardFailure = style([resultCard, {
  borderColor: colors.red,
}]);

export const resultCardSuccess = style([resultCard, {
  borderColor: colors.green,
}]);

export const resultHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md,
});

export const resultStatus = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const resultAccuracy = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: colors.red,
});

export const resultDetails = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: vars.space.md,
  marginBottom: vars.space.lg,
});

export const detailItem = style({
  display: 'flex',
  flexDirection: 'column',
});

export const detailLabel = style({
  fontSize: '0.75rem',
  color: colors.textMuted,
});

export const detailValue = style({
  fontSize: '1.1rem',
  fontWeight: 500,
});

globalStyle(`${resultCard} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
});

export const analysisList = style({
  margin: 0,
  paddingLeft: vars.space.lg,
});

globalStyle(`${analysisList} li`, {
  marginBottom: vars.space.sm,
  color: colors.textDim,
});

export const toolCallsSection = style({
  marginTop: vars.space.lg,
});

export const toolCallsList = style({
  margin: 0,
  paddingLeft: vars.space.lg,
});

globalStyle(`${toolCallsList} li`, {
  marginBottom: vars.space.md,
});

export const toolCallNote = style({
  display: 'block',
  fontSize: '0.8rem',
  color: colors.textMuted,
  marginTop: vars.space.xs,
});

// Improvements section
export const sectionNote = style({
  color: colors.textMuted,
  marginBottom: vars.space.md,
});

globalStyle(`${sectionNote} a`, {
  color: colors.accent,
});

export const improvementList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const improvement = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  padding: vars.space.md,
  background: colors.surface,
  borderRadius: vars.radius.sm,
});

export const improvementType = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  textTransform: 'uppercase',
  fontWeight: 600,
});

export const improvementTypePrompt = style([improvementType, {
  background: colors.accentGlow,
  color: colors.accent,
}]);

export const improvementTypeTool = style([improvementType, {
  background: colors.greenGlow,
  color: colors.green,
}]);

export const improvementTitle = style({
  flex: 1,
});

export const improvementImpact = style({
  fontSize: '0.8rem',
  color: colors.textMuted,
});

// Links section
export const linksList = style({
  listStyle: 'none',
  padding: 0,
});

globalStyle(`${linksList} li`, {
  marginBottom: vars.space.sm,
});

globalStyle(`${linksList} a`, {
  color: colors.accent,
  textDecoration: 'none',
});

globalStyle(`${linksList} a:hover`, {
  textDecoration: 'underline',
});

export const styles = {
  experimentPage,
  experimentContainer,
  experimentHeader,
  subtitle,
  section,
  configCard,
  configNote,
  codeBlock,
  codeBlockEmpty,
  configStats,
  stat,
  observation,
  observationWarning,
  observationLabel,
  toolsList,
  toolItem,
  toolName,
  toolDesc,
  resourcesTable,
  pathCell,
  resultCard,
  resultCardFailure,
  resultCardSuccess,
  resultHeader,
  resultStatus,
  resultAccuracy,
  resultDetails,
  detailItem,
  detailLabel,
  detailValue,
  analysisList,
  toolCallsSection,
  toolCallsList,
  toolCallNote,
  sectionNote,
  improvementList,
  improvement,
  improvementType,
  improvementTypePrompt,
  improvementTypeTool,
  improvementTitle,
  improvementImpact,
  linksList,
};
