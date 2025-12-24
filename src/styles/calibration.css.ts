import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

// Grid background is now provided by PageLayout component

// Scanlines overlay
export const scanlines = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
  background: 'repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
});

// Main page container
export const calibrationPage = style({
  background: '#0a0a0f',
  color: '#e8e8f0',
  fontFamily: vars.font.body,
  minHeight: '100vh',
  position: 'relative',
  paddingTop: '73px',
});

globalStyle(`${calibrationPage} section`, {
  position: 'relative',
  zIndex: 2,
  padding: '60px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

// Loading and Error States
export const loadingState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  fontSize: '1.2rem',
  color: '#888898',
});

export const errorState = loadingState;

// Section Headers
export const sectionHeader = style({
  marginBottom: '32px',
});

export const sectionLabel = style({
  display: 'inline-block',
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#00e5ff',
  background: 'rgba(0, 229, 255, 0.15)',
  padding: '4px 10px',
  borderRadius: '3px',
  marginBottom: '12px',
});

globalStyle(`${sectionHeader} h2`, {
  fontFamily: vars.font.display,
  fontSize: '1.8rem',
  fontWeight: 600,
  margin: '0 0 8px',
});

globalStyle(`${sectionHeader} p`, {
  color: '#888898',
  margin: 0,
});

// Hero Section
export const calibHero = style({
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '100px !important',
});

export const heroTerminal = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '32px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
});

export const terminalBar = style({
  background: '#1e1e2a',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  borderBottom: '1px solid #1a1a28',
});

export const terminalDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

export const terminalDotRed = style([terminalDot, { background: '#ff5f56' }]);
export const terminalDotYellow = style([terminalDot, { background: '#ffbd2e' }]);
export const terminalDotGreen = style([terminalDot, { background: '#27c93f' }]);

export const terminalTitle = style({
  marginLeft: 'auto',
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  color: '#5a5a6a',
});

export const terminalContent = style({
  padding: '16px 20px',
});

export const typeLine = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  display: 'flex',
  gap: '8px',
});

export const prompt = style({ color: '#00ff9f' });
export const command = style({ color: '#00e5ff' });
export const flag = style({ color: '#ffb800' });
export const arg = style({ color: '#e8e8f0' });

globalStyle(`${calibHero} h1`, {
  marginBottom: '16px',
});

export const heroPrefix = style({
  display: 'block',
  fontSize: '0.85rem',
  color: '#5a5a6a',
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  marginBottom: '8px',
});

export const heroMain = style({
  display: 'block',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontFamily: vars.font.display,
  fontWeight: 600,
  background: 'linear-gradient(135deg, #e8e8f0, #00e5ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const calibSubtitle = style({
  color: '#888898',
  marginBottom: '24px',
});

export const surveyStats = style({
  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const stat = style({
  textAlign: 'center',
});

export const statValue = style({
  display: 'block',
  fontFamily: vars.font.mono,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#00e5ff',
});

export const statLabel = style({
  fontSize: '0.75rem',
  color: '#5a5a6a',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

// Summary Cards
export const summaryGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
});

const summaryCardBase = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  padding: '24px',
  position: 'relative',
  selectors: {
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
    },
  },
});

export const summaryCard = styleVariants({
  errorLow: [summaryCardBase, {
    selectors: {
      '&::before': {
        background: '#00ff9f',
      },
    },
  }],
  errorMedium: [summaryCardBase, {
    selectors: {
      '&::before': {
        background: '#ffb800',
      },
    },
  }],
  errorHigh: [summaryCardBase, {
    selectors: {
      '&::before': {
        background: '#ff4060',
      },
    },
  }],
  status: [summaryCardBase, {
    selectors: {
      '&::before': {
        background: '#00e5ff',
      },
    },
  }],
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '16px',
});

export const cardIcon = style({
  fontSize: '1.4rem',
});

export const cardLabel = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
});

export const cardComparison = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
});

export const comparisonValue = style({
  textAlign: 'center',
});

export const comparisonValueTarget = style([comparisonValue]);

export const valueLabel = style({
  display: 'block',
  fontSize: '0.65rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#5a5a6a',
  marginBottom: '4px',
});

export const valueNumber = style({
  fontFamily: vars.font.mono,
  fontSize: '1.3rem',
  fontWeight: 600,
});

export const valueNumberTarget = style([valueNumber, {
  color: '#00e5ff',
}]);

export const comparisonArrow = style({
  color: '#888898',
});

export const cardError = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
});

export const errorBarContainer = style({
  flex: 1,
  height: '8px',
  background: '#1e1e2a',
  borderRadius: '4px',
  overflow: 'hidden',
});

const errorBarBase = style({
  height: '100%',
  borderRadius: '4px',
});

export const errorBar = styleVariants({
  low: [errorBarBase, { background: '#00ff9f' }],
  medium: [errorBarBase, { background: '#ffb800' }],
  high: [errorBarBase, { background: '#ff4060' }],
});

export const errorValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  fontWeight: 600,
  minWidth: '55px',
  textAlign: 'right',
});

export const errorValueLow = style([errorValue, { color: '#00ff9f' }]);
export const errorValueMedium = style([errorValue, { color: '#ffb800' }]);
export const errorValueHigh = style([errorValue, { color: '#ff4060' }]);

const cardBadgeBase = style({
  display: 'inline-block',
  fontFamily: vars.font.display,
  fontSize: '0.6rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '4px 10px',
  borderRadius: '3px',
});

export const cardBadge = styleVariants({
  low: [cardBadgeBase, {
    background: 'rgba(0, 255, 159, 0.2)',
    color: '#00ff9f',
  }],
  medium: [cardBadgeBase, {
    background: 'rgba(255, 184, 0, 0.2)',
    color: '#ffb800',
  }],
  high: [cardBadgeBase, {
    background: 'rgba(255, 64, 96, 0.2)',
    color: '#ff4060',
  }],
  status: [cardBadgeBase, {
    background: 'rgba(0, 229, 255, 0.15)',
    color: '#00e5ff',
  }],
});

export const statusIndicators = style({
  display: 'flex',
  gap: '24px',
  marginBottom: '16px',
});

export const statusItem = style({
  textAlign: 'center',
});

export const statusCount = style({
  display: 'block',
  fontFamily: vars.font.mono,
  fontSize: '2rem',
  fontWeight: 700,
  color: '#ff4060',
});

export const statusLabel = style({
  fontSize: '0.7rem',
  color: '#888898',
});

// Category Tabs
export const categoryTabs = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '20px',
  flexWrap: 'wrap',
});

export const categoryTabButton = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  padding: '10px 20px',
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  color: '#888898',
  borderRadius: '6px',
  cursor: 'pointer',
  ':hover': {
    borderColor: '#3a3a50',
    color: '#e8e8f0',
  },
});

export const categoryTabActive = style([categoryTabButton, {
  background: '#00e5ff',
  borderColor: '#00e5ff',
  color: '#0a0a0f',
  fontWeight: 600,
}]);

// Metrics Table
export const metricsTable = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  overflow: 'hidden',
});

export const tableHeader = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1.5fr 1.5fr',
  gap: '16px',
  padding: '16px 20px',
  background: '#1e1e2a',
  borderBottom: '1px solid #2a2a3a',
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#5a5a6a',
});

const tableRowBase = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1.5fr 1.5fr',
  gap: '16px',
  padding: '16px 20px',
  borderBottom: '1px solid #1a1a28',
  alignItems: 'center',
  ':hover': {
    background: '#12121a',
  },
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const tableRow = styleVariants({
  low: [tableRowBase],
  medium: [tableRowBase],
  high: [tableRowBase],
});

export const metricName = style({
  display: 'block',
  fontFamily: vars.font.display,
  fontWeight: 500,
});

export const metricCategory = style({
  display: 'block',
  fontSize: '0.65rem',
  color: '#5a5a6a',
  textTransform: 'uppercase',
});

export const colCps = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
});

export const colSoi = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: '#00e5ff',
});

export const gapVisual = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const gapBarBg = style({
  flex: 1,
  height: '6px',
  background: '#1e1e2a',
  borderRadius: '3px',
  overflow: 'hidden',
});

const gapBarFillBase = style({
  height: '100%',
  borderRadius: '3px',
});

export const gapBarFill = styleVariants({
  low: [gapBarFillBase, { background: '#00ff9f' }],
  medium: [gapBarFillBase, { background: '#ffb800' }],
  high: [gapBarFillBase, { background: '#ff4060' }],
});

export const gapValue = style({
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  fontWeight: 600,
  minWidth: '50px',
});

export const gapValueLow = style([gapValue, { color: '#00ff9f' }]);
export const gapValueMedium = style([gapValue, { color: '#ffb800' }]);
export const gapValueHigh = style([gapValue, { color: '#ff4060' }]);

globalStyle(`${metricsTable} code`, {
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  color: '#888898',
  background: '#1e1e2a',
  padding: '4px 8px',
  borderRadius: '4px',
});

// Coverage Gaps
export const gapsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '16px',
});

const gapCardBase = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  padding: '20px',
  position: 'relative',
  selectors: {
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      borderRadius: '10px 0 0 10px',
    },
  },
});

export const gapCard = styleVariants({
  high: [gapCardBase, {
    selectors: {
      '&::before': {
        background: '#ff4060',
      },
    },
  }],
  medium: [gapCardBase, {
    selectors: {
      '&::before': {
        background: '#ffb800',
      },
    },
  }],
  low: [gapCardBase, {
    selectors: {
      '&::before': {
        background: '#00ff9f',
      },
    },
  }],
});

export const gapHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
});

const impactBadgeBase = style({
  fontFamily: vars.font.display,
  fontSize: '0.55rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '3px 8px',
  borderRadius: '3px',
});

export const impactBadge = styleVariants({
  high: [impactBadgeBase, {
    background: 'rgba(255, 64, 96, 0.2)',
    color: '#ff4060',
  }],
  medium: [impactBadgeBase, {
    background: 'rgba(255, 184, 0, 0.2)',
    color: '#ffb800',
  }],
  low: [impactBadgeBase, {
    background: 'rgba(0, 255, 159, 0.2)',
    color: '#00ff9f',
  }],
});

export const gapVariable = style({
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  color: '#5a5a6a',
});

export const gapComponent = style({
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'capitalize',
  margin: '0 0 12px',
});

export const gapNotes = style({
  fontSize: '0.85rem',
  color: '#888898',
  lineHeight: 1.5,
  margin: '0 0 12px',
});

export const gapStatute = style({
  fontFamily: vars.font.mono,
  fontSize: '0.7rem',
  color: '#5a5a6a',
  background: '#1e1e2a',
  padding: '4px 8px',
  borderRadius: '4px',
});

// Pipeline
export const pipelineSteps = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 0,
});

export const pipelineStep = style({
  display: 'flex',
  gap: '16px',
  padding: '20px',
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  flex: 1,
  minWidth: '180px',
  maxWidth: '260px',
});

export const pipelineStepCurrent = style([pipelineStep, {
  borderColor: '#00e5ff',
  boxShadow: '0 0 30px rgba(0, 229, 255, 0.15)',
}]);

export const stepNumber = style({
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#1e1e2a',
  borderRadius: '50%',
  fontFamily: vars.font.mono,
  fontWeight: 700,
  color: '#888898',
  flexShrink: 0,
});

export const stepNumberActive = style([stepNumber, {
  background: '#00e5ff',
  color: '#0a0a0f',
}]);

globalStyle(`${pipelineStep} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  margin: '0 0 6px',
});

globalStyle(`${pipelineStep} p`, {
  fontSize: '0.75rem',
  color: '#888898',
  margin: '0 0 10px',
});

export const stepStatus = style({
  display: 'inline-block',
  fontFamily: vars.font.display,
  fontSize: '0.55rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '3px 8px',
  borderRadius: '3px',
  background: '#1e1e2a',
  color: '#5a5a6a',
});

export const stepStatusActive = style([stepStatus, {
  background: 'rgba(0, 229, 255, 0.15)',
  color: '#00e5ff',
}]);

export const pipelineConnector = style({
  width: '40px',
  height: '2px',
  background: '#2a2a3a',
  alignSelf: 'center',
  margin: '0 -12px',
});

// Pipeline flow (new structure)
export const pipelineFlow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  flexWrap: 'wrap',
  marginBottom: '48px',
});

export const pipelineStage = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  padding: '24px',
  minWidth: '200px',
  flex: 1,
  maxWidth: '300px',
});

export const stageHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
});

export const stageIcon = style({
  fontSize: '1.5rem',
});

globalStyle(`${stageHeader} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  margin: 0,
});

globalStyle(`${pipelineStage} .stage-source`, {
  fontFamily: vars.font.mono,
  fontSize: '0.8rem',
  color: '#00e5ff',
  marginBottom: '4px',
});

globalStyle(`${pipelineStage} .stage-count`, {
  fontSize: '0.85rem',
  color: '#888898',
  marginBottom: '4px',
});

globalStyle(`${pipelineStage} .stage-desc`, {
  fontSize: '0.75rem',
  color: '#5a5a6a',
  margin: 0,
});

export const pipelineArrow = style({
  fontSize: '1.5rem',
  color: '#2a2a3a',
});

export const pipelineMethods = style({
  marginTop: '48px',
});

globalStyle(`${pipelineMethods} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  color: '#888898',
  marginBottom: '16px',
});

export const methodsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '16px',
});

export const methodCard = style({
  background: '#12121a',
  border: '1px solid #2a2a3a',
  borderRadius: '8px',
  padding: '16px',
});

globalStyle(`${methodCard} .method-name`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#e8e8f0',
  marginBottom: '8px',
});

globalStyle(`${methodCard} .method-desc`, {
  fontSize: '0.8rem',
  color: '#888898',
  marginBottom: '8px',
});

globalStyle(`${methodCard} .method-use`, {
  fontSize: '0.75rem',
  color: '#5a5a6a',
  fontStyle: 'italic',
});

// CTA
export const calibCta = style({
  textAlign: 'center',
  padding: '80px 24px !important',
});

globalStyle(`${calibCta} h2`, {
  fontFamily: vars.font.display,
  fontSize: '1.8rem',
  fontWeight: 600,
  marginBottom: '12px',
});

globalStyle(`${calibCta} p`, {
  color: '#888898',
  marginBottom: '24px',
});

export const ctaButtons = style({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const btnBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '14px 28px',
  borderRadius: '8px',
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  textDecoration: 'none',
});

export const btnPrimary = style([btnBase, {
  background: '#00e5ff',
  color: '#0a0a0f',
  ':hover': {
    background: '#00c4d9',
  },
}]);

export const btnSecondary = style([btnBase, {
  background: '#1e1e2a',
  color: '#e8e8f0',
  border: '1px solid #2a2a3a',
  ':hover': {
    background: '#12121a',
    borderColor: '#3a3a50',
  },
}]);

// Data Sources Section
export const sourcesOverview = style({
  marginBottom: '48px',
});

globalStyle(`${sourcesOverview} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#888898',
  marginBottom: '24px',
});

export const sourcesList = style({
  display: 'grid',
  gap: '20px',
});

const sourceDetailBase = style({
  background: '#12121a',
  border: '1px solid #2a2a3a',
  borderRadius: '12px',
  padding: '24px',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#3a3a50',
    transform: 'translateY(-2px)',
  },
});

export const sourceDetail = styleVariants({
  us: [sourceDetailBase, {
    borderLeft: '4px solid #00e5ff',
  }],
  uk: [sourceDetailBase, {
    borderLeft: '4px solid #00ff9f',
  }],
});

export const sourceDetailHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
  flexWrap: 'wrap',
});

export const sourceFlag = style({
  fontSize: '1.5rem',
});

globalStyle(`${sourceDetailHeader} h5`, {
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#e8e8f0',
  margin: 0,
  flex: 1,
  minWidth: '200px',
});

export const sourceJurisdiction = style({
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#888898',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  background: '#1e1e2a',
  padding: '4px 10px',
  borderRadius: '4px',
});

export const sourceDetailContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const sourceDescription = style({
  fontSize: '0.9rem',
  color: '#888898',
  lineHeight: 1.6,
  margin: 0,
});

export const sourceFeatures = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const feature = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
  fontSize: '0.85rem',
});

export const featureLabel = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
  color: '#00e5ff',
  minWidth: '140px',
});

export const featureValue = style({
  color: '#e8e8f0',
});

export const sourcesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '16px',
  margin: '32px 0',
});

const sourceCardBase = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '12px',
  padding: '20px',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#3a3a50',
    transform: 'translateY(-2px)',
  },
});

export const sourceCard = styleVariants({
  projection: [sourceCardBase, {
    borderLeft: '3px solid #00e5ff',
  }],
  historical: [sourceCardBase, {
    borderLeft: '3px solid #00ff9f',
  }],
});

export const sourceHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '16px',
});

const sourceBadgeBase = style({
  fontFamily: vars.font.display,
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  padding: '4px 8px',
  borderRadius: '4px',
  width: 'fit-content',
});

export const sourceBadge = styleVariants({
  projection: [sourceBadgeBase, {
    background: 'rgba(0, 229, 255, 0.15)',
    color: '#00e5ff',
  }],
  historical: [sourceBadgeBase, {
    background: 'rgba(0, 255, 159, 0.2)',
    color: '#00ff9f',
  }],
});

export const sourceName = style({
  fontFamily: vars.font.display,
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#e8e8f0',
});

export const sourceStats = style({
  display: 'flex',
  gap: '16px',
});

export const sourceStat = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

globalStyle(`${sourceStat} .stat-value`, {
  fontFamily: vars.font.display,
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#e8e8f0',
});

globalStyle(`${sourceStat} .stat-label`, {
  fontSize: '0.7rem',
  color: '#888898',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const jurisdictionSummary = style({
  background: '#12121a',
  border: '1px solid #2a2a3a',
  borderRadius: '12px',
  padding: '24px',
  marginTop: '32px',
});

globalStyle(`${jurisdictionSummary} h4`, {
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#888898',
  marginBottom: '16px',
});

export const jurisdictionBars = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const jurisdictionBar = style({
  display: 'grid',
  gridTemplateColumns: '100px 1fr 60px',
  alignItems: 'center',
  gap: '16px',
});

export const jurisdictionName = style({
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#e8e8f0',
});

export const barContainer = style({
  height: '8px',
  background: '#2a2a3a',
  borderRadius: '4px',
  overflow: 'hidden',
});

export const barFill = style({
  height: '100%',
  background: 'linear-gradient(90deg, #00e5ff, #00ff9f)',
  borderRadius: '4px',
  transition: 'width 0.5s ease',
});

export const jurisdictionCount = style({
  fontFamily: vars.font.display,
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#888898',
  textAlign: 'right',
});

// Validation Status - PE Comparison
export const calibValidation = style({
  background: '#12121a',
  borderTop: '1px solid #2a2a3a',
  borderBottom: '1px solid #2a2a3a',
});

export const validationOverview = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '12px',
  padding: '32px',
  marginBottom: '32px',
});

export const validationHeadline = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  marginBottom: '24px',
  flexWrap: 'wrap',
});

export const headlineStat = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const statNumber = style({
  fontFamily: vars.font.display,
  fontSize: '3rem',
  fontWeight: 700,
  lineHeight: 1,
});

export const statNumberOur = style([statNumber, {
  color: '#ffb800',
}]);

export const statNumberPe = style([statNumber, {
  color: '#00e5ff',
}]);

export const statDesc = style({
  fontSize: '0.85rem',
  color: '#888898',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const headlineVs = style({
  fontFamily: vars.font.display,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#5a5a6a',
});

export const validationProgressWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const validationProgressBar = style({
  height: '24px',
  background: '#1e1e2a',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
});

export const progressFill = style({
  height: '100%',
  background: 'linear-gradient(90deg, #ffb800, #ff4060)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  transition: 'width 0.8s ease',
});

export const progressLabel = style({
  fontFamily: vars.font.display,
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#0a0a0f',
  whiteSpace: 'nowrap',
});

export const validationGapStat = style({
  textAlign: 'center',
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: '#ff4060',
});

export const categoryCoverageGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  marginBottom: '32px',
});

export const coverageCategory = style({
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  padding: '20px',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: '#3a3a50',
    transform: 'translateY(-2px)',
  },
});

export const coverageHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
});

export const coverageIcon = style({
  fontSize: '1.5rem',
});

globalStyle(`${coverageHeader} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  margin: 0,
});

export const coverageStats = style({
  marginBottom: '16px',
});

export const coverageNumbers = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
  marginBottom: '12px',
  fontFamily: vars.font.mono,
});

export const ourCount = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#ffb800',
});

export const divider = style({
  fontSize: '1.2rem',
  color: '#5a5a6a',
});

export const peCount = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#00e5ff',
});

export const coverageBar = style({
  height: '8px',
  background: '#1e1e2a',
  borderRadius: '4px',
  overflow: 'hidden',
  marginBottom: '8px',
});

globalStyle(`${coverageBar} .bar-fill`, {
  height: '100%',
  background: 'linear-gradient(90deg, #ffb800, #00e5ff)',
  borderRadius: '4px',
  transition: 'width 0.5s ease',
});

export const coveragePct = style({
  fontSize: '0.75rem',
  color: '#888898',
  fontFamily: vars.font.display,
});

export const coverageExpand = style({
  width: '100%',
  background: '#1e1e2a',
  border: '1px solid #2a2a3a',
  color: '#888898',
  padding: '10px 16px',
  borderRadius: '6px',
  fontFamily: vars.font.display,
  fontSize: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textAlign: 'left',
  ':hover': {
    background: '#12121a',
    borderColor: '#3a3a50',
    color: '#e8e8f0',
  },
});

export const coverageExpandActive = style([coverageExpand, {
  background: 'rgba(0, 229, 255, 0.15)',
  borderColor: '#00e5ff',
  color: '#00e5ff',
}]);

export const coverageGaps = style({
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  paddingTop: '16px',
  borderTop: '1px solid #1a1a28',
});

export const gapItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const gapName = style({
  fontFamily: vars.font.display,
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#e8e8f0',
});

export const gapDesc = style({
  fontSize: '0.75rem',
  color: '#888898',
  lineHeight: 1.4,
});

export const comparisonTable = style({
  marginTop: '32px',
});

globalStyle(`${comparisonTable} h4`, {
  fontFamily: vars.font.display,
  fontSize: '1rem',
  fontWeight: 600,
  color: '#888898',
  marginBottom: '16px',
});

export const tableWrapper = style({
  overflowX: 'auto',
});

export const peComparisonTable = style({
  width: '100%',
  background: '#161620',
  border: '1px solid #2a2a3a',
  borderRadius: '10px',
  borderCollapse: 'collapse',
  overflow: 'hidden',
});

globalStyle(`${peComparisonTable} thead`, {
  background: '#1e1e2a',
});

globalStyle(`${peComparisonTable} th`, {
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#5a5a6a',
  textAlign: 'left',
  padding: '16px 20px',
  borderBottom: '1px solid #2a2a3a',
});

globalStyle(`${peComparisonTable} td`, {
  padding: '16px 20px',
  borderBottom: '1px solid #1a1a28',
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
});

globalStyle(`${peComparisonTable} tbody tr:hover`, {
  background: '#12121a',
});

globalStyle(`${peComparisonTable} tbody tr:last-child td`, {
  borderBottom: 'none',
});

export const totalRow = style({
  background: '#1e1e2a !important',
});

globalStyle(`${totalRow} td`, {
  fontWeight: '700 !important',
  borderTop: '2px solid #2a2a3a !important',
});

export const gapNegative = style({
  color: '#ff4060 !important',
});

const coverageBadgeBase = style({
  display: 'inline-block',
  fontFamily: vars.font.display,
  fontSize: '0.7rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  padding: '4px 10px',
  borderRadius: '4px',
});

export const coverageBadge = styleVariants({
  low: [coverageBadgeBase, {
    background: 'rgba(255, 184, 0, 0.2)',
    color: '#ffb800',
  }],
  veryLow: [coverageBadgeBase, {
    background: 'rgba(255, 64, 96, 0.2)',
    color: '#ff4060',
  }],
  none: [coverageBadgeBase, {
    background: '#2a2a3a',
    color: '#5a5a6a',
  }],
});

// Responsive
globalStyle(`@media (max-width: 768px)`, {});

globalStyle(`@media (max-width: 768px) .${tableHeader}`, {
  display: 'none',
});

globalStyle(`@media (max-width: 768px) .${tableRow.low}, @media (max-width: 768px) .${tableRow.medium}, @media (max-width: 768px) .${tableRow.high}`, {
  gridTemplateColumns: '1fr',
  gap: '8px',
  padding: '20px',
});

globalStyle(`@media (max-width: 768px) .${pipelineConnector}`, {
  display: 'none',
});

globalStyle(`@media (max-width: 768px) .${pipelineSteps}`, {
  flexDirection: 'column',
  gap: '16px',
});

globalStyle(`@media (max-width: 768px) .${pipelineStep}`, {
  maxWidth: '100%',
});

globalStyle(`@media (max-width: 768px) .${validationHeadline}`, {
  flexDirection: 'column',
  gap: '16px',
});

globalStyle(`@media (max-width: 768px) .${statNumber}`, {
  fontSize: '2rem',
});

globalStyle(`@media (max-width: 768px) .${categoryCoverageGrid}`, {
  gridTemplateColumns: '1fr',
});

globalStyle(`@media (max-width: 768px) .${peComparisonTable}`, {
  fontSize: '0.8rem',
});

globalStyle(`@media (max-width: 768px) ${peComparisonTable} th, @media (max-width: 768px) ${peComparisonTable} td`, {
  padding: '12px',
});
