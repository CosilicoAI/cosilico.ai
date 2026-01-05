import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const scanline = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(100%)' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 0.6 },
  '50%': { opacity: 1 },
});

// ============================================
// PAGE LAYOUT
// ============================================

export const page = style({
  background: '#030306',
  color: '#e8e8f0',
  fontFamily: "'IBM Plex Mono', 'JetBrains Mono', monospace",
  fontSize: '13px',
  lineHeight: 1.6,
  paddingTop: '73px',
  minHeight: '100vh',
  position: 'relative',
});

export const gridOverlay = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 180, 216, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 180, 216, 0.02) 1px, transparent 1px)
  `,
  backgroundSize: '20px 20px',
});

export const scanlineOverlay = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.1), transparent)',
    animation: `${scanline} 8s linear infinite`,
  },
});

export const container = style({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '32px 24px',
  position: 'relative',
  zIndex: 2,
});

// ============================================
// HEADER
// ============================================

export const header = style({
  borderBottom: '1px solid #1a1a24',
  paddingBottom: '24px',
  marginBottom: '32px',
});

export const headerTop = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '8px',
});

export const labBadge = style({
  background: 'rgba(0, 180, 216, 0.1)',
  border: '1px solid rgba(0, 180, 216, 0.3)',
  color: '#00b4d8',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  padding: '4px 10px',
  textTransform: 'uppercase',
});

export const headerTitle = style({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '28px',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: '#f0f0f5',
  margin: 0,
});

export const headerMeta = style({
  color: '#606078',
  fontSize: '12px',
  display: 'flex',
  gap: '24px',
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const metaLabel = style({
  color: '#505068',
});

export const metaValue = style({
  color: '#00b4d8',
  fontWeight: 500,
});

// ============================================
// TABS
// ============================================

export const tabs = style({
  display: 'flex',
  gap: '2px',
  marginBottom: '24px',
  background: '#0a0a10',
  padding: '4px',
  borderRadius: '4px',
  width: 'fit-content',
});

export const tab = style({
  padding: '8px 16px',
  background: 'transparent',
  border: 'none',
  color: '#707088',
  fontSize: '12px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 150ms ease',
  fontFamily: 'inherit',
  ':hover': {
    color: '#b8b8c8',
  },
});

export const tabActive = style({
  background: '#1a1a24',
  color: '#00b4d8',
});

// ============================================
// EXPERIMENT TABLE
// ============================================

export const tableSection = style({
  marginBottom: '48px',
});

export const sectionTitle = style({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '14px',
  fontWeight: 600,
  color: '#b8b8c8',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const sectionCount = style({
  background: '#1a1a24',
  color: '#707088',
  fontSize: '11px',
  padding: '2px 8px',
  borderRadius: '10px',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  background: '#08080c',
  border: '1px solid #1a1a24',
});

globalStyle(`${table} th`, {
  textAlign: 'left',
  padding: '12px 16px',
  background: '#0c0c12',
  borderBottom: '1px solid #1a1a24',
  color: '#707088',
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

globalStyle(`${table} td`, {
  padding: '14px 16px',
  borderBottom: '1px solid #12121a',
  verticalAlign: 'top',
});

globalStyle(`${table} tr:hover td`, {
  background: '#0a0a10',
});

export const citationCell = style({
  fontWeight: 600,
  color: '#f0f0f5',
});

export const timestampCell = style({
  color: '#606078',
  fontSize: '12px',
  whiteSpace: 'nowrap',
});

export const scoreCell = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
});

export const scoreGood = style({
  color: '#00ff88',
});

export const scoreWarn = style({
  color: '#ffaa00',
});

export const scoreBad = style({
  color: '#ff4466',
});

export const iterationBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: 600,
});

export const iterationSuccess = style({
  background: 'rgba(0, 255, 136, 0.1)',
  color: '#00ff88',
  border: '1px solid rgba(0, 255, 136, 0.2)',
});

export const iterationFailed = style({
  background: 'rgba(255, 68, 102, 0.1)',
  color: '#ff4466',
  border: '1px solid rgba(255, 68, 102, 0.2)',
});

export const errorTag = style({
  display: 'inline-block',
  background: 'rgba(255, 68, 102, 0.15)',
  color: '#ff6680',
  fontSize: '10px',
  padding: '2px 6px',
  borderRadius: '3px',
  marginTop: '4px',
});

export const durationCell = style({
  color: '#707088',
  fontSize: '12px',
});

// ============================================
// PLUGIN VIEWER
// ============================================

export const pluginSection = style({
  marginBottom: '48px',
});

export const pluginGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: '16px',
});

export const pluginCard = style({
  background: '#0a0a10',
  border: '1px solid #1a1a24',
  padding: '20px',
  transition: 'all 200ms ease',
  ':hover': {
    borderColor: '#252532',
    background: '#0c0c12',
  },
});

export const pluginCardHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '12px',
});

export const pluginType = style({
  fontSize: '9px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '3px 8px',
  borderRadius: '2px',
});

export const pluginTypeAgent = style({
  background: 'rgba(0, 180, 216, 0.15)',
  color: '#00b4d8',
});

export const pluginTypeSkill = style({
  background: 'rgba(255, 170, 0, 0.15)',
  color: '#ffaa00',
});

export const pluginTypeCommand = style({
  background: 'rgba(0, 255, 136, 0.15)',
  color: '#00ff88',
});

export const pluginTypeHook = style({
  background: 'rgba(180, 100, 255, 0.15)',
  color: '#b464ff',
});

export const pluginName = style({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '15px',
  fontWeight: 600,
  color: '#f0f0f5',
  marginBottom: '8px',
});

export const pluginDesc = style({
  fontSize: '12px',
  color: '#808098',
  lineHeight: 1.5,
  marginBottom: '12px',
});

export const pluginMeta = style({
  display: 'flex',
  gap: '16px',
  fontSize: '11px',
  color: '#505068',
});

export const expandButton = style({
  background: 'transparent',
  border: '1px solid #252532',
  color: '#707088',
  fontSize: '11px',
  padding: '4px 10px',
  cursor: 'pointer',
  transition: 'all 150ms ease',
  fontFamily: 'inherit',
  ':hover': {
    borderColor: '#00b4d8',
    color: '#00b4d8',
  },
});

export const pluginContent = style({
  marginTop: '16px',
  padding: '16px',
  background: '#050508',
  border: '1px solid #1a1a24',
  maxHeight: '400px',
  overflow: 'auto',
  fontSize: '11px',
  lineHeight: 1.7,
  color: '#b8b8c8',
  whiteSpace: 'pre-wrap',
  fontFamily: vars.font.mono,
});

// ============================================
// ISSUE ALERT
// ============================================

export const alertSection = style({
  marginBottom: '32px',
});

export const alertCard = style({
  background: 'rgba(255, 68, 102, 0.05)',
  border: '1px solid rgba(255, 68, 102, 0.2)',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
});

export const alertGlow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: 'linear-gradient(90deg, transparent, #ff4466, transparent)',
  animation: `${pulse} 2s ease infinite`,
});

export const alertHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
});

export const alertIcon = style({
  width: '20px',
  height: '20px',
  color: '#ff4466',
});

export const alertTitle = style({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '14px',
  fontWeight: 600,
  color: '#ff6680',
  margin: 0,
});

export const alertBody = style({
  color: '#b8b8c8',
  fontSize: '13px',
  lineHeight: 1.6,
});

export const alertList = style({
  margin: '12px 0 0 0',
  padding: '0 0 0 20px',
});

globalStyle(`${alertList} li`, {
  marginBottom: '6px',
  color: '#909098',
});

globalStyle(`${alertList} li code`, {
  background: '#1a1a24',
  padding: '1px 6px',
  fontSize: '11px',
  color: '#ff6680',
});

// ============================================
// SCORES VISUALIZATION
// ============================================

export const scoresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2px',
});

export const scoreBar = style({
  height: '4px',
  background: '#1a1a24',
  position: 'relative',
  overflow: 'hidden',
});

export const scoreBarFill = style({
  height: '100%',
  transition: 'width 300ms ease',
});

export const scoreBarGood = style({
  background: '#00ff88',
});

export const scoreBarWarn = style({
  background: '#ffaa00',
});

export const scoreBarBad = style({
  background: '#ff4466',
});

// ============================================
// DATA NOTE
// ============================================

export const dataNote = style({
  background: '#0a0a10',
  border: '1px solid #1a1a24',
  borderLeft: '3px solid #ffaa00',
  padding: '16px 20px',
  marginBottom: '32px',
  fontSize: '12px',
  color: '#909098',
  lineHeight: 1.6,
});

export const dataNoteBold = style({
  color: '#ffaa00',
  fontWeight: 600,
});
