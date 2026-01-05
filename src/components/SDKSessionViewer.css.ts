import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

// ============================================
// KEYFRAMES
// ============================================

const pulse = keyframes({
  '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
  '50%': { opacity: '0.6', transform: 'scale(1.1)' },
});

// ============================================
// CONTAINER & OVERLAY
// ============================================

export const container = style({
  background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
  borderRadius: vars.radius['2xl'],
  border: `1px solid ${vars.color.accentGlow}`,
  overflow: 'hidden',
  position: 'relative',
});

export const scanlines = style({
  position: 'absolute',
  inset: 0,
  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.01) 2px, rgba(0, 212, 255, 0.01) 4px)',
  pointerEvents: 'none',
  zIndex: 10,
});

// ============================================
// HEADER
// ============================================

export const header = style({
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0%, transparent 50%, rgba(0, 255, 136, 0.05) 100%)',
});

export const missionId = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  marginBottom: vars.space.md,
});

export const missionBadge = style({
  background: `linear-gradient(135deg, ${vars.color.accent} 0%, #0088cc 100%)`,
  color: '#000',
  padding: '6px 14px',
  borderRadius: '20px',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '1px',
  textTransform: 'uppercase',
});

export const missionCode = style({
  fontFamily: vars.font.mono,
  fontSize: '20px',
  color: vars.color.success,
  textShadow: `0 0 20px ${vars.color.successGlow}`,
});

export const missionTime = style({
  marginLeft: 'auto',
  color: vars.color.textMuted,
  fontSize: '13px',
  fontFamily: vars.font.mono,
});

export const closeButton = style({
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.2)',
  color: vars.color.textMuted,
  padding: '6px 12px',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  marginLeft: vars.space.md,
  fontFamily: 'inherit',
  transition: `all ${vars.duration.fast} ${vars.ease.out}`,
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
});

// ============================================
// TELEMETRY
// ============================================

export const telemetry = style({
  display: 'flex',
  gap: vars.space.xl,
  flexWrap: 'wrap',
});

export const telemetryItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const telemetryLabel = style({
  fontSize: '10px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

export const telemetryValue = style({
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: vars.font.mono,
});

// ============================================
// TRAJECTORY (PHASE TIMELINE)
// ============================================

export const trajectory = style({
  padding: vars.space.xl,
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  position: 'relative',
});

export const trajectoryLabel = style({
  fontSize: '10px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '20px',
});

export const trajectoryLine = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const trajectoryConnector = style({
  flex: 1,
  height: '2px',
  background: `linear-gradient(90deg, ${vars.color.accentGlow}, ${vars.color.successGlow})`,
  position: 'relative',
});

export const trajectoryArrow = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: vars.color.textFaint,
  fontSize: '12px',
});

export const phaseNode = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
  cursor: 'pointer',
  transition: `transform ${vars.duration.fast} ${vars.ease.out}`,
  zIndex: 2,
  ':hover': {
    transform: 'scale(1.05)',
  },
});

export const phaseNodeExpanded = style({
  transform: 'scale(1.1)',
});

export const phaseIcon = style({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  border: '2px solid',
  transition: `all ${vars.duration.normal} ${vars.ease.out}`,
  position: 'relative',
});

export const phaseGlow = style({
  position: 'absolute',
  inset: '-4px',
  borderRadius: '50%',
  opacity: 0.5,
  filter: 'blur(8px)',
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const phaseName = style({
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
});

export const phaseDuration = style({
  fontSize: '10px',
  fontFamily: vars.font.mono,
  opacity: 0.7,
});

// ============================================
// PHASE DETAIL PANEL
// ============================================

export const phaseDetail = style({
  margin: `0 ${vars.space.xl} ${vars.space.xl}`,
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const phaseDetailHeader = style({
  padding: '20px 24px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.02)',
});

export const phaseDetailTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
});

export const phaseDetailIcon = style({
  fontSize: '24px',
});

export const phaseDetailName = style({
  fontSize: '16px',
  fontWeight: 600,
});

export const phaseDetailMeta = style({
  fontSize: '12px',
  color: vars.color.textMuted,
  marginTop: vars.space.xs,
});

export const phaseDetailStats = style({
  display: 'flex',
  gap: vars.space.lg,
  fontSize: '12px',
});

export const toolBadge = style({
  background: vars.color.accentGlow,
  color: vars.color.accent,
  padding: '4px 8px',
  borderRadius: vars.radius.sm,
  fontSize: '11px',
  fontFamily: vars.font.mono,
});

// ============================================
// EVENT TIMELINE
// ============================================

export const eventTimeline = style({
  padding: vars.space.lg,
});

export const eventCard = style({
  marginBottom: vars.space.md,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  transition: `border-color ${vars.duration.fast} ${vars.ease.out}`,
});

export const eventHeader = style({
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
});

export const eventType = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const eventTypeIcon = style({
  width: '24px',
  height: '24px',
  borderRadius: vars.radius.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
});

export const eventTypeName = style({
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
});

export const eventMeta = style({
  fontSize: '10px',
  color: vars.color.textMuted,
  marginTop: '2px',
});

export const eventChevron = style({
  fontSize: '12px',
});

export const eventContent = style({
  padding: vars.space.md,
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
});

// ============================================
// CHAIN OF THOUGHT (THINKING)
// ============================================

export const thinkingBubble = style({
  background: `linear-gradient(135deg, ${vars.color.amberGlow} 0%, rgba(255, 170, 0, 0.03) 100%)`,
  border: `1px solid rgba(255, 170, 0, 0.2)`,
  borderRadius: vars.radius.lg,
  padding: '16px 20px',
  marginBottom: vars.space.md,
  position: 'relative',
});

export const thinkingLabel = style({
  position: 'absolute',
  top: '-10px',
  left: '16px',
  background: vars.color.bgCard,
  padding: '2px 10px',
  fontSize: '10px',
  color: vars.color.amber,
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  borderRadius: vars.radius.sm,
});

export const thinkingText = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  lineHeight: 1.7,
  color: vars.color.textSecondary,
  whiteSpace: 'pre-wrap',
  maxHeight: '300px',
  overflow: 'auto',
  margin: 0,
});

// ============================================
// TOOL CALL DISPLAY
// ============================================

export const toolCall = style({
  background: 'rgba(0, 212, 255, 0.05)',
  border: `1px solid rgba(0, 212, 255, 0.2)`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

export const toolHeader = style({
  background: vars.color.accentGlow,
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderBottom: `1px solid rgba(0, 212, 255, 0.15)`,
});

export const toolName = style({
  fontFamily: vars.font.mono,
  fontSize: '13px',
  fontWeight: 600,
  color: vars.color.accent,
});

export const toolInput = style({
  padding: '12px 16px',
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: vars.color.textMuted,
  whiteSpace: 'pre-wrap',
  maxHeight: '200px',
  overflow: 'auto',
  margin: 0,
});

// ============================================
// OUTPUT DISPLAY
// ============================================

export const outputBlock = style({
  background: vars.color.successGlow,
  border: `1px solid rgba(0, 255, 136, 0.2)`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
});

export const outputText = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.success,
  whiteSpace: 'pre-wrap',
  maxHeight: '200px',
  overflow: 'auto',
  margin: 0,
});

// ============================================
// ERROR DISPLAY
// ============================================

export const errorBlock = style({
  background: 'rgba(255, 68, 102, 0.08)',
  border: `1px solid rgba(255, 68, 102, 0.3)`,
  borderRadius: vars.radius.md,
  padding: vars.space.md,
});

export const errorText = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.error,
  margin: 0,
});

// ============================================
// EMPTY STATE
// ============================================

export const emptyState = style({
  padding: '80px 40px',
  textAlign: 'center',
  color: vars.color.textMuted,
});

export const emptyIcon = style({
  fontSize: '48px',
  marginBottom: vars.space.md,
  opacity: 0.5,
});

// ============================================
// FOOTER
// ============================================

export const footer = style({
  padding: `20px ${vars.space.xl}`,
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  color: vars.color.textMuted,
  fontSize: '13px',
});
