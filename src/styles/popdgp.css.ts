import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const popdgp = style({
  background: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.7,
  paddingTop: '73px',
  minHeight: '100vh',
});

globalStyle(`${popdgp} section`, {
  padding: `${vars.space['4xl']} ${vars.space.lg}`,
  maxWidth: '1200px',
  margin: '0 auto',
});

// Hero
export const hero = style({
  textAlign: 'center',
  paddingTop: '120px !important',
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
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.8s ${vars.ease.out} forwards`,
});

export const heroBadge = style({
  display: 'inline-flex',
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: vars.color.accentGlow,
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: vars.radius['2xl'],
  fontSize: '0.875rem',
  fontFamily: vars.font.mono,
  color: vars.color.accent,
  marginBottom: vars.space.lg,
  letterSpacing: '0.05em',
});

export const heroTitle = style({
  fontSize: 'clamp(4rem, 12vw, 8rem)',
  fontFamily: vars.font.display,
  fontWeight: 600,
  marginBottom: vars.space.lg,
  background: `linear-gradient(135deg, ${vars.color.text} 0%, ${vars.color.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const heroSubtitle = style({
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  maxWidth: '700px',
  margin: '0 auto',
  marginBottom: vars.space.xl,
});

export const heroPills = style({
  display: 'flex',
  gap: vars.space.sm,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const pill = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: vars.radius['2xl'],
  fontSize: '0.85rem',
  fontFamily: vars.font.mono,
  color: vars.color.textSecondary,
});

// Section styling
export const sectionTitle = style({
  fontSize: '2rem',
  fontFamily: vars.font.display,
  fontWeight: 600,
  marginBottom: vars.space.xl,
  textAlign: 'center',
});

export const sectionSubtitle = style({
  textAlign: 'center',
  color: vars.color.textSecondary,
  marginBottom: vars.space.xl,
});

// Why Section
export const whySection = style({});

export const problemGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.space.lg,
});

export const problemCard = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

export const problemIcon = style({
  fontSize: '1.5rem',
  marginBottom: vars.space.sm,
});

globalStyle(`${problemCard} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  marginBottom: vars.space.sm,
});

globalStyle(`${problemCard} p`, {
  color: vars.color.textSecondary,
  fontSize: '0.9rem',
});

// Architecture Diagram
export const architectureSection = style({});

export const architectureDiagram = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  overflow: 'hidden',
});

export const diagramTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.25rem',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: vars.space.xl,
  color: vars.color.accent,
});

export const diagramSection = style({
  marginBottom: vars.space.lg,
});

export const sectionLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  marginBottom: vars.space.md,
  textAlign: 'center',
});

export const dataSourcesRow = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
  flexWrap: 'wrap',
});

export const dataSource = style({
  textAlign: 'center',
});

export const dataSourceIcon = style({
  width: '48px',
  height: '48px',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  fontWeight: 600,
  margin: '0 auto',
  marginBottom: vars.space.xs,
});

export const dataSourceLabel = style({
  fontSize: '0.7rem',
  color: vars.color.textMuted,
});

export const flowArrow = style({
  textAlign: 'center',
  color: vars.color.accent,
  fontSize: '1.5rem',
  margin: `${vars.space.md} 0`,
});

export const unifiedSchema = style({
  textAlign: 'center',
  padding: vars.space.sm,
  background: vars.color.accentGlow,
  border: `1px solid ${vars.color.accent}`,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  maxWidth: '300px',
  margin: '0 auto',
});

// Graph visualization
export const graphVisualization = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: vars.space.xl,
  padding: vars.space.lg,
});

export const timeStep = style({
  textAlign: 'center',
});

export const timeLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
});

export const graphNode = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 600,
  margin: '0 auto',
  marginBottom: vars.space.sm,
});

export const householdNode = style({
  background: vars.color.accent,
  color: vars.color.bg,
});

export const householdNodeNew = style({
  background: vars.color.success,
  color: vars.color.bg,
  marginTop: vars.space.md,
});

export const graphEdges = style({
  display: 'flex',
  gap: vars.space.xs,
  justifyContent: 'center',
});

export const personNode = style({
  width: '28px',
  height: '28px',
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.mono,
  fontSize: '0.6rem',
});

export const personMoved = style({
  borderColor: vars.color.success,
});

export const eventLabel = style({
  fontSize: '0.65rem',
  color: vars.color.amber,
  marginTop: vars.space.xs,
  marginBottom: vars.space.xs,
});

export const timeArrow = style({
  color: vars.color.textMuted,
  fontSize: '1.5rem',
  alignSelf: 'center',
});

// Core Model
export const coreModelSection = style({
  background: `linear-gradient(180deg, ${vars.color.bgCard} 0%, ${vars.color.bgElevated} 100%)`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  border: `1px solid ${vars.color.accent}`,
});

export const modelComponents = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.md,
});

export const modelComponent = style({
  padding: vars.space.md,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.md,
  textAlign: 'center',
});

export const componentIcon = style({
  width: '40px',
  height: '40px',
  margin: '0 auto',
  marginBottom: vars.space.sm,
  color: vars.color.accent,
});

globalStyle(`${componentIcon} svg`, {
  width: '100%',
  height: '100%',
});

export const componentTitle = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: vars.space.xs,
});

export const componentDesc = style({
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  lineHeight: 1.4,
});

// Events Grid
export const eventsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: vars.space.sm,
});

export const eventCard = style({
  padding: vars.space.sm,
  background: vars.color.surface,
  borderRadius: vars.radius.sm,
  textAlign: 'center',
});

export const eventName = style({
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  fontWeight: 600,
  color: vars.color.amber,
  marginBottom: vars.space.xs,
});

export const eventDesc = style({
  fontSize: '0.65rem',
  color: vars.color.textMuted,
});

// Constraints
export const constraintsRow = style({
  display: 'flex',
  gap: vars.space.lg,
  justifyContent: 'center',
});

export const constraintBox = style({
  flex: 1,
  maxWidth: '300px',
  padding: vars.space.md,
  borderRadius: vars.radius.md,
});

export const hardConstraint = style({
  background: 'rgba(255, 68, 102, 0.1)',
  border: `1px solid ${vars.color.error}`,
});

export const softConstraint = style({
  background: 'rgba(0, 255, 136, 0.1)',
  border: `1px solid ${vars.color.success}`,
});

export const constraintLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
  textAlign: 'center',
});

globalStyle(`${constraintBox} ul`, {
  listStyle: 'none',
  fontSize: '0.75rem',
  fontFamily: vars.font.mono,
  color: vars.color.textSecondary,
});

globalStyle(`${constraintBox} li`, {
  marginBottom: vars.space.xs,
});

// Output Tables
export const outputTables = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
});

export const outputTable = style({
  padding: vars.space.md,
  background: vars.color.surface,
  borderRadius: vars.radius.md,
  textAlign: 'center',
});

export const tableName = style({
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
  fontWeight: 600,
  color: vars.color.accent,
  marginBottom: vars.space.xs,
});

export const tableFields = style({
  fontSize: '0.7rem',
  color: vars.color.textMuted,
  fontFamily: vars.font.mono,
});

// Components Section
export const componentsSection = style({});

export const componentDeepDive = style({
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  marginBottom: vars.space.lg,
  overflow: 'hidden',
});

export const componentHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle(`${componentHeader} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
});

export const componentTag = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.accentGlow,
  borderRadius: vars.radius.sm,
  fontSize: '0.7rem',
  fontFamily: vars.font.mono,
  color: vars.color.accent,
});

export const componentContent = style({
  padding: vars.space.lg,
});

globalStyle(`${componentContent} p`, {
  marginBottom: vars.space.md,
  color: vars.color.textSecondary,
});

export const codeBlock = style({
  background: vars.color.bg,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
  overflow: 'auto',
});

globalStyle(`${codeBlock} pre`, {
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: vars.color.textSecondary,
  margin: 0,
  whiteSpace: 'pre-wrap',
});

// Stream Diagram
export const streamDiagram = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  alignItems: 'center',
});

export const stream = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const streamLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  color: vars.color.textMuted,
  width: '120px',
});

export const streamNodes = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontFamily: vars.font.mono,
  fontSize: '0.85rem',
});

globalStyle(`${streamNodes} span:nth-child(odd)`, {
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.surface,
  borderRadius: vars.radius.sm,
});

export const crossAttention = style({
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  color: vars.color.accent,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: vars.color.accentGlow,
  borderRadius: vars.radius.sm,
});

// Distribution Visualization
export const distributionViz = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.xl,
});

export const distExample = style({
  textAlign: 'center',
});

export const distLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  marginBottom: vars.space.xs,
});

export const distShape = style({
  width: '80px',
  height: '40px',
  margin: '0 auto',
  marginBottom: vars.space.xs,
});

export const bimodal = style({
  background: `linear-gradient(90deg,
    transparent 0%,
    ${vars.color.accent} 20%,
    transparent 35%,
    transparent 55%,
    ${vars.color.accent} 70%,
    transparent 100%
  )`,
  borderRadius: '50%',
});

export const heavyTail = style({
  background: `linear-gradient(90deg,
    ${vars.color.accent} 0%,
    ${vars.color.accent} 30%,
    transparent 80%
  )`,
  clipPath: 'polygon(0 100%, 20% 20%, 100% 90%, 100% 100%)',
});

export const zeroInflated = style({
  background: `linear-gradient(90deg,
    ${vars.color.accent} 0%,
    ${vars.color.accent} 5%,
    transparent 5%,
    transparent 30%,
    ${vars.color.accent} 50%,
    transparent 100%
  )`,
});

export const distNote = style({
  fontSize: '0.65rem',
  color: vars.color.textMuted,
});

// Event Probs
export const eventProbs = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
  maxWidth: '400px',
});

export const eventProb = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
});

globalStyle(`${eventProb} span:first-child`, {
  width: '80px',
  textAlign: 'right',
  color: vars.color.textMuted,
});

globalStyle(`${eventProb} span:last-child`, {
  width: '40px',
  color: vars.color.textSecondary,
});

export const probBar = style({
  height: '8px',
  background: vars.color.accent,
  borderRadius: '4px',
  flex: 1,
});

// Eval Section
export const evalSection = style({});

export const evalLink = style({
  color: vars.color.accent,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const metricsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.md,
});

export const metricCard = style({
  padding: vars.space.md,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
});

export const metricName = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.xs,
});

export const metricDesc = style({
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

// Phases Section
export const phasesSection = style({});

export const timeline = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  maxWidth: '600px',
  margin: '0 auto',
});

export const phase = style({
  display: 'flex',
  gap: vars.space.md,
  padding: vars.space.md,
  background: vars.color.bgElevated,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  opacity: 0.6,
});

export const phaseComplete = style({
  opacity: 1,
  borderColor: vars.color.success,
});

export const phaseCurrent = style({
  opacity: 1,
  borderColor: vars.color.accent,
  background: vars.color.accentGlow,
});

export const phaseMarker = style({
  width: '32px',
  height: '32px',
  background: vars.color.surface,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.mono,
  fontWeight: 600,
  flexShrink: 0,
});

globalStyle(`${phaseComplete} ${phaseMarker}`, {
  background: vars.color.success,
  color: vars.color.bg,
});

globalStyle(`${phaseCurrent} ${phaseMarker}`, {
  background: vars.color.accent,
  color: vars.color.bg,
});

export const phaseContent = style({});

globalStyle(`${phaseContent} h3`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: vars.space.xs,
});

globalStyle(`${phaseContent} p`, {
  fontSize: '0.85rem',
  color: vars.color.textMuted,
});

// Links Section
export const linksSection = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.xl,
});

export const linkCard = style({
  textAlign: 'center',
});

globalStyle(`${linkCard} h3`, {
  fontFamily: vars.font.mono,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: vars.color.textMuted,
  marginBottom: vars.space.xs,
});

globalStyle(`${linkCard} a`, {
  color: vars.color.accent,
  textDecoration: 'none',
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
});

globalStyle(`${linkCard} a:hover`, {
  textDecoration: 'underline',
});

// Feature card (reusable)
export const featureCard = style({
  padding: vars.space.lg,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
});

export const featureIcon = style({
  width: '48px',
  height: '48px',
  marginBottom: vars.space.md,
  color: vars.color.accent,
});

export const featureTitle = style({
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: vars.space.sm,
});

export const featureDesc = style({
  color: vars.color.textSecondary,
  fontSize: '0.9rem',
});
