import React, { useState, useMemo } from 'react';
import { SDKSession, SDKSessionEvent } from '../lib/supabase';

// ============================================
// TYPES
// ============================================

interface Phase {
  name: string;
  displayName: string;
  icon: string;
  startTime: Date;
  endTime: Date;
  events: SDKSessionEvent[];
  tokens: { input: number; output: number };
  cost: number;
  status: 'success' | 'error' | 'warning' | 'pending';
  toolsUsed: Record<string, number>;
}

interface ParsedEvent {
  event: SDKSessionEvent;
  thinking?: string;
  output?: string;
  toolName?: string;
  toolInput?: string;
  error?: string;
}

// ============================================
// STYLES (Mission Control Theme)
// ============================================

const styles = {
  container: {
    background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 212, 255, 0.15)',
    overflow: 'hidden',
    position: 'relative' as const,
  },

  // Scanline overlay for that retro-futuristic feel
  scanlines: {
    position: 'absolute' as const,
    inset: 0,
    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.01) 2px, rgba(0, 212, 255, 0.01) 4px)',
    pointerEvents: 'none' as const,
    zIndex: 10,
  },

  // Header with mission ID and key stats
  header: {
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0%, transparent 50%, rgba(0, 255, 136, 0.05) 100%)',
  },

  missionId: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },

  missionBadge: {
    background: 'linear-gradient(135deg, #00d4ff 0%, #0088cc 100%)',
    color: '#000',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },

  missionCode: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '20px',
    color: '#00ff88',
    textShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
  },

  missionTime: {
    marginLeft: 'auto',
    color: '#666',
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
  },

  // Telemetry stats bar
  telemetry: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap' as const,
  },

  telemetryItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },

  telemetryLabel: {
    fontSize: '10px',
    color: '#666',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },

  telemetryValue: {
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: "'JetBrains Mono', monospace",
  },

  // Phase trajectory (horizontal timeline)
  trajectory: {
    padding: '32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative' as const,
  },

  trajectoryLabel: {
    fontSize: '10px',
    color: '#666',
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
    marginBottom: '20px',
  },

  trajectoryLine: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
  },

  trajectoryConnector: {
    flex: 1,
    height: '2px',
    background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 136, 0.3))',
    position: 'relative' as const,
  },

  phaseNode: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    zIndex: 2,
  },

  phaseIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    border: '2px solid',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
  },

  phaseGlow: {
    position: 'absolute' as const,
    inset: '-4px',
    borderRadius: '50%',
    opacity: 0.5,
    filter: 'blur(8px)',
    animation: 'pulse 2s ease-in-out infinite',
  },

  phaseName: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const,
  },

  phaseDuration: {
    fontSize: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    opacity: 0.7,
  },

  // Phase detail panel
  phaseDetail: {
    margin: '0 32px 32px',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
  },

  phaseDetailHeader: {
    padding: '20px 24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.02)',
  },

  phaseDetailTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  phaseDetailStats: {
    display: 'flex',
    gap: '24px',
    fontSize: '12px',
  },

  // Event timeline within phase
  eventTimeline: {
    padding: '24px',
  },

  eventCard: {
    marginBottom: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'border-color 0.2s ease',
  },

  eventHeader: {
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },

  eventType: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  eventTypeIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },

  eventContent: {
    padding: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },

  // Chain of thought (thinking) display
  thinkingBubble: {
    background: 'linear-gradient(135deg, rgba(255, 170, 0, 0.08) 0%, rgba(255, 170, 0, 0.03) 100%)',
    border: '1px solid rgba(255, 170, 0, 0.2)',
    borderRadius: '12px',
    padding: '16px 20px',
    marginBottom: '12px',
    position: 'relative' as const,
  },

  thinkingLabel: {
    position: 'absolute' as const,
    top: '-10px',
    left: '16px',
    background: '#12121a',
    padding: '2px 10px',
    fontSize: '10px',
    color: '#ffaa00',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    borderRadius: '4px',
  },

  thinkingText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px',
    lineHeight: 1.7,
    color: '#ccc',
    whiteSpace: 'pre-wrap' as const,
    maxHeight: '300px',
    overflow: 'auto',
  },

  // Tool call display
  toolCall: {
    background: 'rgba(0, 212, 255, 0.05)',
    border: '1px solid rgba(0, 212, 255, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
  },

  toolHeader: {
    background: 'rgba(0, 212, 255, 0.1)',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
  },

  toolName: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '13px',
    fontWeight: 600,
    color: '#00d4ff',
  },

  toolInput: {
    padding: '12px 16px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    color: '#888',
    whiteSpace: 'pre-wrap' as const,
    maxHeight: '200px',
    overflow: 'auto',
  },

  // Output display
  outputBlock: {
    background: 'rgba(0, 255, 136, 0.05)',
    border: '1px solid rgba(0, 255, 136, 0.2)',
    borderRadius: '8px',
    padding: '16px',
  },

  outputText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px',
    color: '#00ff88',
    whiteSpace: 'pre-wrap' as const,
    maxHeight: '200px',
    overflow: 'auto',
  },

  // Error display
  errorBlock: {
    background: 'rgba(255, 68, 102, 0.08)',
    border: '1px solid rgba(255, 68, 102, 0.3)',
    borderRadius: '8px',
    padding: '16px',
  },

  errorText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px',
    color: '#ff4466',
  },

  // No data state
  emptyState: {
    padding: '80px 40px',
    textAlign: 'center' as const,
    color: '#666',
  },

  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
    opacity: 0.5,
  },
};

// ============================================
// PHASE DEFINITIONS
// ============================================

const PHASE_CONFIG: Record<string, { displayName: string; icon: string; color: string }> = {
  analysis: { displayName: 'Analysis', icon: '🔍', color: '#a78bfa' },
  encoding: { displayName: 'Encoding', icon: '⚡', color: '#00d4ff' },
  oracle: { displayName: 'Oracle', icon: '🎯', color: '#00ff88' },
  review: { displayName: 'Review', icon: '📋', color: '#ffaa00' },
  report: { displayName: 'Report', icon: '📊', color: '#ff6b35' },
  // Agent types
  'cosilico:Statute Analyzer': { displayName: 'Analyzer', icon: '🔍', color: '#a78bfa' },
  'cosilico:RAC Encoder': { displayName: 'Encoder', icon: '⚡', color: '#00d4ff' },
  'cosilico:Encoding Validator': { displayName: 'Validator', icon: '🎯', color: '#00ff88' },
  'cosilico:rac-reviewer': { displayName: 'RAC Review', icon: '📋', color: '#ffaa00' },
  'cosilico:Formula Reviewer': { displayName: 'Formula', icon: '🧮', color: '#ff6b35' },
  'cosilico:Parameter Reviewer': { displayName: 'Params', icon: '📐', color: '#00d4ff' },
  'cosilico:Integration Reviewer': { displayName: 'Integration', icon: '🔗', color: '#a78bfa' },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function parseEvents(events: SDKSessionEvent[]): { phases: Phase[]; totalTokens: { input: number; output: number }; totalCost: number } {
  const phases: Phase[] = [];
  let currentPhase: Phase | null = null;
  let totalInput = 0;
  let totalOutput = 0;
  let totalCost = 0;

  events.forEach((event) => {
    const metadata = event.metadata as Record<string, unknown> | null;
    const phaseName = (metadata?.phase as string) || (metadata?.agent_type as string) || null;

    // Detect phase changes
    if (phaseName && event.event_type === 'agent_start') {
      if (currentPhase) {
        currentPhase.endTime = new Date(event.timestamp);
        phases.push(currentPhase);
      }

      const config = PHASE_CONFIG[phaseName] || { displayName: phaseName.replace('cosilico:', ''), icon: '📦', color: '#888' };

      currentPhase = {
        name: phaseName,
        displayName: config.displayName,
        icon: config.icon,
        startTime: new Date(event.timestamp),
        endTime: new Date(event.timestamp),
        events: [],
        tokens: { input: 0, output: 0 },
        cost: 0,
        status: 'success',
        toolsUsed: {},
      };
    }

    // Add event to current phase
    if (currentPhase) {
      currentPhase.events.push(event);
      currentPhase.endTime = new Date(event.timestamp);

      // Track tools
      if (event.tool_name) {
        currentPhase.toolsUsed[event.tool_name] = (currentPhase.toolsUsed[event.tool_name] || 0) + 1;
      }

      // Track tokens from metadata
      if (metadata?.tokens) {
        const tokens = metadata.tokens as { input?: number; output?: number };
        currentPhase.tokens.input += tokens.input || 0;
        currentPhase.tokens.output += tokens.output || 0;
        totalInput += tokens.input || 0;
        totalOutput += tokens.output || 0;
      }

      // Check for errors
      if (metadata?.error || event.event_type.includes('error')) {
        currentPhase.status = 'error';
      }
    }
  });

  // Push final phase
  if (currentPhase) {
    phases.push(currentPhase);
  }

  return { phases, totalTokens: { input: totalInput, output: totalOutput }, totalCost };
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return `${mins}m ${secs}s`;
}

function extractThinking(content: string | null): string | null {
  if (!content) return null;

  // Look for thinking patterns in the content
  const thinkingMatch = content.match(/<thinking>([\s\S]*?)<\/thinking>/);
  if (thinkingMatch) return thinkingMatch[1].trim();

  // Look for chain of thought patterns
  const cotMatch = content.match(/(?:Thinking|Reasoning|Analysis):\s*([\s\S]*?)(?=\n\n|$)/i);
  if (cotMatch) return cotMatch[1].trim();

  return null;
}

// ============================================
// COMPONENT
// ============================================

interface SDKSessionViewerProps {
  session: SDKSession;
  events: SDKSessionEvent[];
  onClose?: () => void;
}

export default function SDKSessionViewer({ session, events, onClose }: SDKSessionViewerProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  // Parse events into phases
  const { phases, totalTokens, totalCost } = useMemo(() => parseEvents(events), [events]);

  // Calculate duration
  const duration = session.ended_at
    ? new Date(session.ended_at).getTime() - new Date(session.started_at).getTime()
    : null;

  // Find longest phase
  const longestPhase = phases.length > 0
    ? phases.reduce((max, p) => {
        const d = p.endTime.getTime() - p.startTime.getTime();
        return d > (max.endTime.getTime() - max.startTime.getTime()) ? p : max;
      })
    : null;

  const toggleEvent = (eventId: string) => {
    setExpandedEvents(prev => {
      const next = new Set(prev);
      if (next.has(eventId)) {
        next.delete(eventId);
      } else {
        next.add(eventId);
      }
      return next;
    });
  };

  if (events.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.scanlines} />
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📭</div>
          <div>No events recorded for this session</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.scanlines} />

      {/* Mission Header */}
      <div style={styles.header}>
        <div style={styles.missionId}>
          <span style={styles.missionBadge}>Encoding Mission</span>
          <code style={styles.missionCode}>{session.id}</code>
          <span style={styles.missionTime}>
            {new Date(session.started_at).toLocaleString()}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#888',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginLeft: '12px',
              }}
            >
              Close ✕
            </button>
          )}
        </div>

        {/* Telemetry Bar */}
        <div style={styles.telemetry}>
          <div style={styles.telemetryItem}>
            <span style={styles.telemetryLabel}>Duration</span>
            <span style={{ ...styles.telemetryValue, color: '#00d4ff' }}>
              {duration ? formatDuration(duration) : '—'}
            </span>
          </div>
          <div style={styles.telemetryItem}>
            <span style={styles.telemetryLabel}>Phases</span>
            <span style={{ ...styles.telemetryValue, color: '#a78bfa' }}>
              {phases.length}
            </span>
          </div>
          <div style={styles.telemetryItem}>
            <span style={styles.telemetryLabel}>Events</span>
            <span style={{ ...styles.telemetryValue, color: '#00ff88' }}>
              {events.length.toLocaleString()}
            </span>
          </div>
          <div style={styles.telemetryItem}>
            <span style={styles.telemetryLabel}>Tokens</span>
            <span style={{ ...styles.telemetryValue, color: '#ffaa00' }}>
              {(session.input_tokens + session.output_tokens).toLocaleString()}
            </span>
          </div>
          <div style={styles.telemetryItem}>
            <span style={styles.telemetryLabel}>Cost</span>
            <span style={{ ...styles.telemetryValue, color: '#ff6b35' }}>
              ${session.estimated_cost_usd.toFixed(2)}
            </span>
          </div>
          {longestPhase && (
            <div style={styles.telemetryItem}>
              <span style={styles.telemetryLabel}>Slowest Phase</span>
              <span style={{ ...styles.telemetryValue, color: PHASE_CONFIG[longestPhase.name]?.color || '#888', fontSize: '14px' }}>
                {longestPhase.icon} {longestPhase.displayName}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Phase Trajectory */}
      <div style={styles.trajectory}>
        <div style={styles.trajectoryLabel}>Mission Trajectory</div>
        <div style={styles.trajectoryLine}>
          {phases.map((phase, idx) => {
            const isExpanded = expandedPhase === phase.name;
            const phaseDuration = phase.endTime.getTime() - phase.startTime.getTime();
            const config = PHASE_CONFIG[phase.name] || { color: '#888' };

            return (
              <React.Fragment key={`${phase.name}-${idx}`}>
                <div
                  style={{
                    ...styles.phaseNode,
                    transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.name)}
                >
                  <div
                    style={{
                      ...styles.phaseIcon,
                      background: isExpanded ? config.color : 'transparent',
                      borderColor: config.color,
                      color: isExpanded ? '#000' : config.color,
                      boxShadow: isExpanded ? `0 0 30px ${config.color}50` : 'none',
                    }}
                  >
                    {phase.status === 'error' ? '⚠️' : phase.icon}
                    {isExpanded && (
                      <div style={{ ...styles.phaseGlow, background: config.color }} />
                    )}
                  </div>
                  <span style={{ ...styles.phaseName, color: config.color }}>
                    {phase.displayName}
                  </span>
                  <span style={{ ...styles.phaseDuration, color: config.color }}>
                    {formatDuration(phaseDuration)}
                  </span>
                </div>
                {idx < phases.length - 1 && (
                  <div style={styles.trajectoryConnector}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#444',
                      fontSize: '12px',
                    }}>
                      →
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Expanded Phase Detail */}
      {expandedPhase && (() => {
        const phase = phases.find(p => p.name === expandedPhase);
        if (!phase) return null;

        const config = PHASE_CONFIG[phase.name] || { color: '#888' };
        const phaseDuration = phase.endTime.getTime() - phase.startTime.getTime();
        const sortedTools = Object.entries(phase.toolsUsed).sort((a, b) => b[1] - a[1]);

        return (
          <div style={styles.phaseDetail}>
            <div style={{ ...styles.phaseDetailHeader, borderLeft: `4px solid ${config.color}` }}>
              <div style={styles.phaseDetailTitle}>
                <span style={{ fontSize: '24px' }}>{phase.icon}</span>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: config.color }}>
                    {phase.displayName} Phase
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    {phase.events.length} events • {formatDuration(phaseDuration)}
                  </div>
                </div>
              </div>
              <div style={styles.phaseDetailStats}>
                {sortedTools.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {sortedTools.slice(0, 5).map(([tool, count]) => (
                      <span key={tool} style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        color: '#00d4ff',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {tool} ×{count}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Event Timeline */}
            <div style={styles.eventTimeline}>
              {phase.events.map((event, idx) => {
                const isExpanded = expandedEvents.has(event.id);
                const thinking = extractThinking(event.content);
                const metadata = event.metadata as Record<string, unknown> | null;

                // Determine event type styling
                let bgColor = 'rgba(255, 255, 255, 0.02)';
                let borderColor = 'rgba(255, 255, 255, 0.1)';
                let typeColor = '#888';
                let typeIcon = '📝';

                if (event.event_type === 'tool_use' || event.tool_name) {
                  bgColor = 'rgba(0, 212, 255, 0.03)';
                  borderColor = 'rgba(0, 212, 255, 0.2)';
                  typeColor = '#00d4ff';
                  typeIcon = '🔧';
                } else if (event.event_type === 'tool_result') {
                  bgColor = 'rgba(0, 255, 136, 0.03)';
                  borderColor = 'rgba(0, 255, 136, 0.2)';
                  typeColor = '#00ff88';
                  typeIcon = '✓';
                } else if (event.event_type === 'assistant') {
                  bgColor = 'rgba(255, 170, 0, 0.03)';
                  borderColor = 'rgba(255, 170, 0, 0.2)';
                  typeColor = '#ffaa00';
                  typeIcon = '💭';
                } else if (event.event_type.includes('error') || metadata?.error) {
                  bgColor = 'rgba(255, 68, 102, 0.05)';
                  borderColor = 'rgba(255, 68, 102, 0.3)';
                  typeColor = '#ff4466';
                  typeIcon = '⚠️';
                } else if (event.event_type.includes('agent')) {
                  bgColor = 'rgba(167, 139, 250, 0.03)';
                  borderColor = 'rgba(167, 139, 250, 0.2)';
                  typeColor = '#a78bfa';
                  typeIcon = '🤖';
                }

                return (
                  <div
                    key={event.id}
                    style={{
                      ...styles.eventCard,
                      background: bgColor,
                      borderColor: isExpanded ? typeColor : borderColor,
                    }}
                  >
                    <div
                      style={styles.eventHeader}
                      onClick={() => toggleEvent(event.id)}
                    >
                      <div style={styles.eventType}>
                        <div style={{
                          ...styles.eventTypeIcon,
                          background: `${typeColor}20`,
                          color: typeColor,
                        }}>
                          {typeIcon}
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: typeColor, textTransform: 'uppercase' }}>
                            {event.tool_name || event.event_type.replace('agent_', '')}
                          </div>
                          <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                            #{event.sequence} • {new Date(event.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      <span style={{ color: typeColor, fontSize: '12px' }}>
                        {isExpanded ? '▼' : '▶'}
                      </span>
                    </div>

                    {isExpanded && (
                      <div style={styles.eventContent}>
                        <>
                          {/* Chain of Thought */}
                          {thinking && (
                            <div style={styles.thinkingBubble}>
                              <span style={styles.thinkingLabel}>Chain of Thought</span>
                              <pre style={styles.thinkingText}>{thinking}</pre>
                            </div>
                          )}

                          {/* Tool Input */}
                          {event.tool_name && event.content && (
                            <div style={styles.toolCall}>
                              <div style={styles.toolHeader}>
                                <span>🔧</span>
                                <span style={styles.toolName}>{event.tool_name}</span>
                              </div>
                              <pre style={styles.toolInput}>
                                {event.content.length > 2000 ? event.content.slice(0, 2000) + '...' : event.content}
                              </pre>
                            </div>
                          )}

                          {/* Output */}
                          {!event.tool_name && event.content && !thinking && (
                            <div style={styles.outputBlock}>
                              <pre style={styles.outputText}>
                                {event.content.length > 2000 ? event.content.slice(0, 2000) + '...' : event.content}
                              </pre>
                            </div>
                          )}

                          {/* Error */}
                          {metadata?.error && (
                            <div style={styles.errorBlock}>
                              <pre style={styles.errorText}>{String(metadata.error)}</pre>
                            </div>
                          )}
                        </>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Quick Stats Footer */}
      {!expandedPhase && phases.length > 0 && (
        <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#666', fontSize: '13px' }}>
          Click a phase above to explore events and chain-of-thought
        </div>
      )}

      {/* CSS Animation for glow effect */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
