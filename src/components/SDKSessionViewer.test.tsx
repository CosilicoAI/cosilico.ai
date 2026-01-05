import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SDKSessionViewer from './SDKSessionViewer';
import { SDKSession, SDKSessionEvent } from '../lib/supabase';

// Mock session data
const mockSession: SDKSession = {
  id: 'sdk-20260104-140232',
  started_at: '2026-01-04T14:02:32.000Z',
  ended_at: '2026-01-04T14:15:45.000Z',
  model: 'claude-opus-4-5-20251101',
  cwd: '/Users/test/project',
  event_count: 511,
  input_tokens: 150000,
  output_tokens: 128052,
  cache_read_tokens: 0,
  estimated_cost_usd: 17.36,
};

// Mock events representing a typical encoding run
const mockEvents: SDKSessionEvent[] = [
  {
    id: 'evt-001',
    session_id: 'sdk-20260104-140232',
    sequence: 1,
    timestamp: '2026-01-04T14:02:35.000Z',
    event_type: 'agent_start',
    tool_name: null,
    content: 'Starting Statute Analyzer',
    metadata: { agent_type: 'cosilico:Statute Analyzer', phase: 'analysis' },
  },
  {
    id: 'evt-002',
    session_id: 'sdk-20260104-140232',
    sequence: 2,
    timestamp: '2026-01-04T14:02:40.000Z',
    event_type: 'tool_use',
    tool_name: 'Read',
    content: JSON.stringify({ file_path: '/path/to/statute.md' }),
    metadata: null,
  },
  {
    id: 'evt-003',
    session_id: 'sdk-20260104-140232',
    sequence: 3,
    timestamp: '2026-01-04T14:02:45.000Z',
    event_type: 'tool_result',
    tool_name: null,
    content: '# 26 USC 63(c)(2)\n\nStandard Deduction amounts...',
    metadata: null,
  },
  {
    id: 'evt-004',
    session_id: 'sdk-20260104-140232',
    sequence: 4,
    timestamp: '2026-01-04T14:03:00.000Z',
    event_type: 'assistant',
    tool_name: null,
    content: '<thinking>This statute defines standard deduction amounts with multiple filing status categories...</thinking>\n\nAnalysis complete.',
    metadata: null,
  },
  {
    id: 'evt-005',
    session_id: 'sdk-20260104-140232',
    sequence: 5,
    timestamp: '2026-01-04T14:05:00.000Z',
    event_type: 'agent_start',
    tool_name: null,
    content: 'Starting RAC Encoder',
    metadata: { agent_type: 'cosilico:RAC Encoder', phase: 'encoding' },
  },
  {
    id: 'evt-006',
    session_id: 'sdk-20260104-140232',
    sequence: 6,
    timestamp: '2026-01-04T14:05:30.000Z',
    event_type: 'tool_use',
    tool_name: 'Write',
    content: JSON.stringify({ file_path: 'rac-us/statute/26/63/c/2.rac' }),
    metadata: null,
  },
];

describe('SDKSessionViewer', () => {
  describe('rendering', () => {
    it('displays session ID and key metrics', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);

      // Session ID should be visible
      expect(screen.getByText('sdk-20260104-140232')).toBeInTheDocument();

      // Key metrics should be displayed
      expect(screen.getByText('$17.36')).toBeInTheDocument();
      expect(screen.getByText('278,052')).toBeInTheDocument(); // input + output tokens
    });

    it('displays "Encoding Mission" badge', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);
      expect(screen.getByText('Encoding Mission')).toBeInTheDocument();
    });

    it('shows empty state when no events', () => {
      render(<SDKSessionViewer session={mockSession} events={[]} />);
      expect(screen.getByText('No events recorded for this session')).toBeInTheDocument();
    });

    it('displays phase trajectory with detected phases', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);

      // Should show Mission Trajectory section
      expect(screen.getByText('Mission Trajectory')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onClose when close button clicked', () => {
      const onClose = jest.fn();
      render(<SDKSessionViewer session={mockSession} events={mockEvents} onClose={onClose} />);

      const closeButton = screen.getByText('Close ✕');
      fireEvent.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('telemetry display', () => {
    it('shows duration when session has ended', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);

      // Duration should be calculated from started_at to ended_at
      // 13 minutes 13 seconds
      expect(screen.getByText('13m 13s')).toBeInTheDocument();
    });

    it('shows phase count', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);
      expect(screen.getByText('2')).toBeInTheDocument(); // 2 phases detected
    });

    it('identifies slowest phase', () => {
      render(<SDKSessionViewer session={mockSession} events={mockEvents} />);

      // Should show which phase took the longest
      expect(screen.getByText('Slowest Phase')).toBeInTheDocument();
    });
  });
});

describe('SDKSessionViewer edge cases', () => {
  it('handles events without metadata', () => {
    const eventsWithoutMetadata: SDKSessionEvent[] = [
      {
        id: 'evt-001',
        session_id: 'sdk-test',
        sequence: 1,
        timestamp: '2026-01-04T14:00:00.000Z',
        event_type: 'tool_use',
        tool_name: 'Read',
        content: 'Test content',
        metadata: null,
      },
    ];

    render(<SDKSessionViewer session={mockSession} events={eventsWithoutMetadata} />);

    // Should render without crashing
    expect(screen.getByText('sdk-20260104-140232')).toBeInTheDocument();
  });

  it('handles very long content gracefully', () => {
    const longContent = 'x'.repeat(5000);
    const eventsWithLongContent: SDKSessionEvent[] = [
      {
        id: 'evt-001',
        session_id: 'sdk-test',
        sequence: 1,
        timestamp: '2026-01-04T14:00:00.000Z',
        event_type: 'assistant',
        tool_name: null,
        content: longContent,
        metadata: { agent_type: 'cosilico:RAC Encoder' },
      },
    ];

    render(<SDKSessionViewer session={mockSession} events={eventsWithLongContent} />);

    // Should render without crashing and truncate content
    expect(screen.getByText('sdk-20260104-140232')).toBeInTheDocument();
  });

  it('handles session without ended_at', () => {
    const ongoingSession: SDKSession = {
      ...mockSession,
      ended_at: null,
    };

    render(<SDKSessionViewer session={ongoingSession} events={mockEvents} />);

    // Duration should show dash
    expect(screen.getByText('—')).toBeInTheDocument();
  });
});
