import React, { useState, useMemo } from 'react';
import { SDKSession, SDKSessionEvent } from '../lib/supabase';
import * as styles from './SDKSessionViewer.css';

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
  const totalCost = 0;

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
  const { phases } = useMemo(() => parseEvents(events), [events]);

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
      <div className={styles.container}>
        <div className={styles.scanlines} />
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📭</div>
          <div>No events recorded for this session</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.scanlines} />

      {/* Mission Header */}
      <div className={styles.header}>
        <div className={styles.missionId}>
          <span className={styles.missionBadge}>Encoding Mission</span>
          <code className={styles.missionCode}>{session.id}</code>
          <span className={styles.missionTime}>
            {new Date(session.started_at).toLocaleString()}
          </span>
          {onClose && (
            <button onClick={onClose} className={styles.closeButton}>
              Close ✕
            </button>
          )}
        </div>

        {/* Telemetry Bar */}
        <div className={styles.telemetry}>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>Duration</span>
            <span className={styles.telemetryValue} style={{ color: '#00d4ff' }}>
              {duration ? formatDuration(duration) : '—'}
            </span>
          </div>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>Phases</span>
            <span className={styles.telemetryValue} style={{ color: '#a78bfa' }}>
              {phases.length}
            </span>
          </div>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>Events</span>
            <span className={styles.telemetryValue} style={{ color: '#00ff88' }}>
              {events.length.toLocaleString()}
            </span>
          </div>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>Tokens</span>
            <span className={styles.telemetryValue} style={{ color: '#ffaa00' }}>
              {(session.input_tokens + session.output_tokens).toLocaleString()}
            </span>
          </div>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>Cost</span>
            <span className={styles.telemetryValue} style={{ color: '#ff6b35' }}>
              ${session.estimated_cost_usd.toFixed(2)}
            </span>
          </div>
          {longestPhase && (
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryLabel}>Slowest Phase</span>
              <span
                className={styles.telemetryValue}
                style={{
                  color: PHASE_CONFIG[longestPhase.name]?.color || '#888',
                  fontSize: '14px'
                }}
              >
                {longestPhase.icon} {longestPhase.displayName}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Phase Trajectory */}
      <div className={styles.trajectory}>
        <div className={styles.trajectoryLabel}>Mission Trajectory</div>
        <div className={styles.trajectoryLine}>
          {phases.map((phase, idx) => {
            const isExpanded = expandedPhase === phase.name;
            const phaseDuration = phase.endTime.getTime() - phase.startTime.getTime();
            const config = PHASE_CONFIG[phase.name] || { color: '#888' };

            return (
              <React.Fragment key={`${phase.name}-${idx}`}>
                <div
                  className={`${styles.phaseNode} ${isExpanded ? styles.phaseNodeExpanded : ''}`}
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.name)}
                >
                  <div
                    className={styles.phaseIcon}
                    style={{
                      background: isExpanded ? config.color : 'transparent',
                      borderColor: config.color,
                      color: isExpanded ? '#000' : config.color,
                      boxShadow: isExpanded ? `0 0 30px ${config.color}50` : 'none',
                    }}
                  >
                    {phase.status === 'error' ? '⚠️' : phase.icon}
                    {isExpanded && (
                      <div className={styles.phaseGlow} style={{ background: config.color }} />
                    )}
                  </div>
                  <span className={styles.phaseName} style={{ color: config.color }}>
                    {phase.displayName}
                  </span>
                  <span className={styles.phaseDuration} style={{ color: config.color }}>
                    {formatDuration(phaseDuration)}
                  </span>
                </div>
                {idx < phases.length - 1 && (
                  <div className={styles.trajectoryConnector}>
                    <div className={styles.trajectoryArrow}>→</div>
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
          <div className={styles.phaseDetail}>
            <div
              className={styles.phaseDetailHeader}
              style={{ borderLeft: `4px solid ${config.color}` }}
            >
              <div className={styles.phaseDetailTitle}>
                <span className={styles.phaseDetailIcon}>{phase.icon}</span>
                <div>
                  <div className={styles.phaseDetailName} style={{ color: config.color }}>
                    {phase.displayName} Phase
                  </div>
                  <div className={styles.phaseDetailMeta}>
                    {phase.events.length} events • {formatDuration(phaseDuration)}
                  </div>
                </div>
              </div>
              <div className={styles.phaseDetailStats}>
                {sortedTools.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {sortedTools.slice(0, 5).map(([tool, count]) => (
                      <span key={tool} className={styles.toolBadge}>
                        {tool} ×{count}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Event Timeline */}
            <div className={styles.eventTimeline}>
              {phase.events.map((event) => {
                const isEventExpanded = expandedEvents.has(event.id);
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
                    className={styles.eventCard}
                    style={{
                      background: bgColor,
                      borderColor: isEventExpanded ? typeColor : borderColor,
                    }}
                  >
                    <div
                      className={styles.eventHeader}
                      onClick={() => toggleEvent(event.id)}
                    >
                      <div className={styles.eventType}>
                        <div
                          className={styles.eventTypeIcon}
                          style={{
                            background: `${typeColor}20`,
                            color: typeColor,
                          }}
                        >
                          {typeIcon}
                        </div>
                        <div>
                          <div className={styles.eventTypeName} style={{ color: typeColor }}>
                            {event.tool_name || event.event_type.replace('agent_', '')}
                          </div>
                          <div className={styles.eventMeta}>
                            #{event.sequence} • {new Date(event.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      <span className={styles.eventChevron} style={{ color: typeColor }}>
                        {isEventExpanded ? '▼' : '▶'}
                      </span>
                    </div>

                    {isEventExpanded && (
                      <div className={styles.eventContent}>
                        <>
                          {/* Chain of Thought */}
                          {thinking && (
                            <div className={styles.thinkingBubble}>
                              <span className={styles.thinkingLabel}>Chain of Thought</span>
                              <pre className={styles.thinkingText}>{thinking}</pre>
                            </div>
                          )}

                          {/* Tool Input */}
                          {event.tool_name && event.content && (
                            <div className={styles.toolCall}>
                              <div className={styles.toolHeader}>
                                <span>🔧</span>
                                <span className={styles.toolName}>{event.tool_name}</span>
                              </div>
                              <pre className={styles.toolInput}>
                                {event.content.length > 2000 ? event.content.slice(0, 2000) + '...' : event.content}
                              </pre>
                            </div>
                          )}

                          {/* Output */}
                          {!event.tool_name && event.content && !thinking && (
                            <div className={styles.outputBlock}>
                              <pre className={styles.outputText}>
                                {event.content.length > 2000 ? event.content.slice(0, 2000) + '...' : event.content}
                              </pre>
                            </div>
                          )}

                          {/* Error */}
                          {metadata?.error && (
                            <div className={styles.errorBlock}>
                              <pre className={styles.errorText}>{String(metadata.error)}</pre>
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
        <div className={styles.footer}>
          Click a phase above to explore events and chain-of-thought
        </div>
      )}
    </div>
  );
}
