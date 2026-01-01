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
