import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration
// These should be set in environment variables for production
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

// Create the Supabase client (use placeholder URL in test environment)
const isTestEnv = !supabaseUrl || process.env.NODE_ENV === 'test';
export const supabase: SupabaseClient = isTestEnv
  ? createClient('https://placeholder.supabase.co', 'placeholder-key')
  : createClient(supabaseUrl, supabaseAnonKey);

// Types for our database schema
export interface ApiKey {
  id: string;
  user_id: string;
  key_prefix: string;
  name: string;
  is_active: boolean;
  last_used_at: string | null;
  created_at: string;
}

export interface CreditBalance {
  user_id: string;
  credits: number;
  updated_at: string;
}

export interface UsageLog {
  id: number;
  api_key_id: string;
  endpoint: string;
  credits_used: number;
  request_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export interface CreditPackage {
  id: string;
  name: string;
  price_cents: number;
  credits: number;
  is_active: boolean;
}

export interface EndpointPricing {
  endpoint: string;
  credits_per_call: number;
  description: string | null;
}

export interface AutoReloadSettings {
  user_id: string;
  enabled: boolean;
  threshold_credits: number;
  reload_package_id: string;
  created_at: string;
  updated_at: string;
}

export interface StripeCustomer {
  user_id: string;
  stripe_customer_id: string;
  default_payment_method_id: string | null;
  created_at: string;
  updated_at: string;
}

// Types for encoding runs (AutoRAC Experiment Lab)
export interface EncodingRunIteration {
  attempt: number;
  success: boolean;
  duration_ms: number;
  errors: { type: string; message: string }[];
}

export interface EncodingRunScores {
  rac: number;
  formula: number;
  parameter: number;
  integration: number;
}

// Valid data source values - CRITICAL for preventing fake data
// 'reviewer_agent' = Scores from actual reviewer agent runs (trustworthy)
// 'ci_only' = Only CI tests ran, no reviewer scores
// 'mock' = Fake/placeholder data for testing (MUST show warning)
// 'manual_estimate' = Human-estimated scores, not from agents
// 'unknown' = Legacy data without data_source (show warning)
export type DataSource = 'reviewer_agent' | 'ci_only' | 'mock' | 'manual_estimate' | 'unknown';

export interface EncodingRun {
  id: string;
  timestamp: string;
  citation: string;
  iterations: EncodingRunIteration[];
  scores: EncodingRunScores;
  has_issues: boolean | null;
  note: string | null;
  total_duration_ms: number | null;
  agent_type: string | null;
  agent_model: string | null;
  data_source: DataSource;
  session_id: string | null;
}

// Fetch encoding runs from Supabase
export async function getEncodingRuns(limit = 100, offset = 0): Promise<EncodingRun[]> {
  const { data, error } = await supabase
    .rpc('get_encoding_runs', { limit_count: limit, offset_count: offset });

  if (error) {
    console.error('Error fetching encoding runs:', error);
    return [];
  }

  return (data || []) as EncodingRun[];
}

// Types for agent transcripts (AutoRAC Experiment Lab)
export interface AgentTranscript {
  id: number;
  session_id: string;
  agent_id: string | null;
  tool_use_id: string;
  subagent_type: string;
  prompt: string | null;
  description: string | null;
  response_summary: string | null;
  transcript: TranscriptMessage[] | null;
  orchestrator_thinking: string | null;
  message_count: number;
  created_at: string;
  uploaded_at: string | null;
}

export interface TranscriptMessage {
  type: string;
  message?: {
    role: string;
    content: Array<{ type: string; text?: string; thinking?: string }>;
  };
  timestamp?: string;
  agentId?: string;
}

// Fetch agent transcripts from Supabase
export async function getAgentTranscripts(limit = 100, offset = 0): Promise<AgentTranscript[]> {
  const { data, error } = await supabase
    .from('agent_transcripts')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching agent transcripts:', error);
    return [];
  }

  return (data || []) as AgentTranscript[];
}

// Fetch transcripts for a specific session (linked to an encoding run)
export async function getTranscriptsBySession(sessionId: string): Promise<AgentTranscript[]> {
  const { data, error } = await supabase
    .from('agent_transcripts')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching transcripts by session:', error);
    return [];
  }

  return (data || []) as AgentTranscript[];
}

// Types for SDK orchestrator sessions (full encoding pipeline runs)
export interface SDKSession {
  id: string;
  started_at: string;
  ended_at: string | null;
  model: string | null;
  cwd: string | null;
  event_count: number;
  input_tokens: number;
  output_tokens: number;
  cache_read_tokens: number;
  estimated_cost_usd: number;
}

export interface SDKSessionEvent {
  id: string;
  session_id: string;
  sequence: number;
  timestamp: string;
  event_type: string;
  tool_name: string | null;
  content: string | null;
  metadata: Record<string, unknown> | null;
}

// Fetch SDK orchestrator sessions from Supabase
// Note: Uses public.sdk_sessions view (points to rac.sdk_sessions)
export async function getSDKSessions(limit = 50): Promise<SDKSession[]> {
  const { data, error } = await supabase
    .from('sdk_sessions')
    .select('*')
    .order('started_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching SDK sessions:', error);
    return [];
  }

  return (data || []) as SDKSession[];
}

// Fetch events for a specific SDK session
// Note: Uses public.sdk_session_events view (points to rac.sdk_session_events)
export async function getSDKSessionEvents(sessionId: string, limit = 100): Promise<SDKSessionEvent[]> {
  const { data, error } = await supabase
    .from('sdk_session_events')
    .select('*')
    .eq('session_id', sessionId)
    .order('sequence', { ascending: true })
    .limit(limit);

  if (error) {
    console.error('Error fetching SDK session events:', error);
    return [];
  }

  return (data || []) as SDKSessionEvent[];
}

// Helper to format credits for display (convert micro-credits to readable format)
export function formatCredits(microCredits: number): string {
  // Convert micro-credits to approximate API calls at $0.02/call rate
  const calls = Math.floor(microCredits / 20000);
  if (calls >= 1000000) {
    return `${(calls / 1000000).toFixed(1)}M calls`;
  }
  if (calls >= 1000) {
    return `${(calls / 1000).toFixed(1)}K calls`;
  }
  return `${calls} calls`;
}

// Helper to format credit balance as dollar value
export function formatCreditsAsDollars(microCredits: number): string {
  // 1 micro-credit = $0.000001
  const dollars = microCredits / 1000000;
  return `$${dollars.toFixed(2)}`;
}
