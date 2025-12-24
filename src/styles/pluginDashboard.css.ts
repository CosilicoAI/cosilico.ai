import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Plugin Dashboard Styles - Vanilla Extract
 *
 * Type-safe styles using Cosilico design tokens.
 * All values come from theme.css.ts (single source of truth).
 */

// ============================================
// KEYFRAMES
// ============================================

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

// ============================================
// STATS SECTION (moved from hero)
// ============================================

export const heroStats = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space['2xl'],
  flexWrap: 'wrap',
  marginBottom: vars.space['2xl'],
  paddingBottom: vars.space['2xl'],
  borderBottom: `1px solid ${vars.color.border}`,
});

export const heroStat = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const heroStatValue = style({
  fontFamily: vars.font.mono,
  fontSize: '32px',
  fontWeight: 600,
  color: vars.color.accent,
});

export const heroStatLabel = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: vars.color.textMuted,
  marginTop: vars.space.xs,
});

// ============================================
// MAIN CONTENT
// ============================================

export const mainContent = style({
  position: 'relative',
  zIndex: 1,
  maxWidth: '1100px',
  margin: '0 auto',
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
});

// ============================================
// STATUS ROW
// ============================================

export const statusRow = style({
  display: 'flex',
  gap: vars.space.lg,
  marginBottom: vars.space['2xl'],
});

export const statusCard = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: `all ${vars.duration.normal}`,
  ':hover': {
    borderColor: vars.color.borderGlow,
  },
});

export const statusCardPassed = style({});
export const statusCardFailed = style({});

export const statusIcon = style({
  width: '56px',
  height: '56px',
  borderRadius: vars.radius.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: 700,
});

export const statusIconPassed = style({
  background: vars.color.successGlow,
  color: vars.color.success,
});

export const statusIconFailed = style({
  background: 'rgba(255, 68, 102, 0.15)',
  color: vars.color.error,
});

export const statusInfo = style({
  display: 'flex',
  flexDirection: 'column',
});

export const statusCount = style({
  fontFamily: vars.font.mono,
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: 1,
});

export const statusLabel = style({
  fontSize: '14px',
  color: vars.color.textSecondary,
  marginTop: vars.space.xs,
});

// ============================================
// VARIABLES TABLE
// ============================================

export const variablesSection = style({
  marginBottom: vars.space['2xl'],
});

export const sectionTitle = style({
  fontSize: '20px',
  fontWeight: 600,
  margin: `0 0 ${vars.space.lg} 0`,
  color: vars.color.text,
});

export const variablesTable = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
});

export const tableHeader = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1.5fr 0.5fr 1fr 0.8fr',
  gap: vars.space.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.bgElevated,
  borderBottom: `1px solid ${vars.color.border}`,
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: vars.color.textMuted,
});

export const tableRow = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1.5fr 0.5fr 1fr 0.8fr',
  gap: vars.space.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  alignItems: 'center',
  cursor: 'pointer',
  transition: `all ${vars.duration.fast}`,
  ':hover': {
    background: vars.color.accentGlow,
  },
  ':last-child': {
    borderBottom: 'none',
  },
});

export const tableRowSelected = style({
  background: 'rgba(0, 212, 255, 0.1)',
});

export const tableRowPassed = style({
  borderLeft: `3px solid ${vars.color.success}`,
});

export const tableRowFailed = style({
  borderLeft: `3px solid ${vars.color.error}`,
});

export const varName = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const varNameCode = style({
  fontFamily: vars.font.mono,
  fontSize: '13px',
  fontWeight: 500,
  color: vars.color.text,
});

export const errorBadge = style({
  fontSize: '10px',
  padding: `2px ${vars.space.sm}`,
  background: 'rgba(255, 68, 102, 0.15)',
  color: vars.color.error,
  borderRadius: vars.radius.sm,
  fontWeight: 600,
  textTransform: 'uppercase',
});

export const varStatute = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: vars.color.textSecondary,
  fontStyle: 'italic',
});

export const varTests = style({
  fontFamily: vars.font.mono,
  fontSize: '14px',
  color: vars.color.textMuted,
  textAlign: 'center',
});

export const varRate = style({
  fontFamily: vars.font.mono,
  fontSize: '14px',
  fontWeight: 600,
});

export const varRatePassed = style({
  color: vars.color.success,
});

export const varRateFailed = style({
  color: vars.color.error,
});

export const varTime = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.textMuted,
});

// ============================================
// DETAILS SECTION
// ============================================

export const detailsSection = style({
  marginBottom: vars.space['2xl'],
  animation: `${slideIn} ${vars.duration.normal} ${vars.ease.out}`,
});

export const detailsTitle = style({
  fontSize: '18px',
  fontWeight: 600,
  margin: `0 0 20px 0`,
});

export const detailsTitleCode = style({
  fontFamily: vars.font.mono,
  color: vars.color.accent,
});

export const detailsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: vars.space.md,
});

export const detailCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: '20px',
});

export const detailName = style({
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: vars.space.md,
  color: vars.color.text,
});

export const detailRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.sm} 0`,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
  ':last-of-type': {
    borderBottom: 'none',
  },
});

export const detailLabel = style({
  fontSize: '12px',
  color: vars.color.textMuted,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const detailValue = style({
  fontFamily: vars.font.mono,
  fontSize: '14px',
  color: vars.color.accent,
});

export const detailDiff = style({
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: vars.color.accentGlow,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: vars.color.accent,
  textAlign: 'center',
});

// ============================================
// TIMELINE
// ============================================

export const timelineSection = style({
  marginBottom: vars.space['2xl'],
});

export const timelineTrack = style({
  position: 'relative',
  height: '80px',
  margin: '0 40px',
});

export const timelineLine = style({
  position: 'absolute',
  top: '20px',
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, ${vars.color.accent} 0%, ${vars.color.accentDim} 100%)`,
  borderRadius: '1px',
});

export const timelineNode = style({
  position: 'absolute',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const nodeDot = style({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: vars.color.bg,
  border: `3px solid ${vars.color.accent}`,
  position: 'relative',
  top: '12px',
  zIndex: 1,
  transition: `all ${vars.duration.normal}`,
});

export const nodeDotPassed = style({
  borderColor: vars.color.success,
  background: vars.color.success,
});

export const nodeDotFailed = style({
  borderColor: vars.color.error,
  background: vars.color.error,
});

export const nodeLabel = style({
  position: 'absolute',
  top: '40px',
  fontSize: '10px',
  fontFamily: vars.font.mono,
  color: vars.color.textMuted,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '80px',
  overflow: 'hidden',
});

// ============================================
// TECH SECTION
// ============================================

export const techSection = style({});

export const techGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space.md,
});

export const techCard = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  textAlign: 'center',
  transition: `all ${vars.duration.normal}`,
  ':hover': {
    borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
});

export const techIcon = style({
  fontSize: '32px',
  marginBottom: vars.space.md,
});

export const techName = style({
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: vars.space.xs,
});

export const techDesc = style({
  fontSize: '12px',
  color: vars.color.textMuted,
});

// ============================================
// FOOTER
// ============================================

export const footer = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: vars.space.lg,
  borderTop: `1px solid ${vars.color.border}`,
  fontSize: '12px',
  color: vars.color.textMuted,
  maxWidth: '1100px',
  margin: '0 auto',
});

// ============================================
// RESPONSIVE
// ============================================

// Note: Vanilla Extract doesn't have built-in media query support in style(),
// but we can use globalStyle for responsive overrides
globalStyle(`@media (max-width: 768px) .${heroStats}`, {
  gap: vars.space.lg,
});

globalStyle(`@media (max-width: 768px) .${heroStatValue}`, {
  fontSize: '24px',
});

globalStyle(`@media (max-width: 768px) .${statusRow}`, {
  flexDirection: 'column',
});

globalStyle(`@media (max-width: 768px) .${tableHeader}`, {
  gridTemplateColumns: '1.5fr 1fr 0.5fr 0.8fr',
});

globalStyle(`@media (max-width: 768px) .${tableRow}`, {
  gridTemplateColumns: '1.5fr 1fr 0.5fr 0.8fr',
});

globalStyle(`@media (max-width: 768px) .${varTime}`, {
  display: 'none',
});

globalStyle(`@media (max-width: 768px) .${timelineTrack}`, {
  margin: '0 20px',
});

globalStyle(`@media (max-width: 768px) .${footer}`, {
  flexDirection: 'column',
  gap: vars.space.sm,
  textAlign: 'center',
});
