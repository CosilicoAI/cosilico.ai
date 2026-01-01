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
