import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import * as styles from '../styles/portal.css';
import { supabase, ApiKey, CreditBalance, UsageLog, CreditPackage, formatCredits, formatCreditsAsDollars } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

// ============================================
// AUTH COMPONENT
// ============================================

interface AuthProps {
  onAuthSuccess: () => void;
}

function AuthForm({ onAuthSuccess }: AuthProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        // For signup, show a message about email confirmation
        setError('Check your email for a confirmation link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onAuthSuccess();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin + '/portal',
        },
      });
      if (error) throw error;
      setError('Check your email for a magic link!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>
          {mode === 'login' ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className={styles.authSubtitle}>
          {mode === 'login'
            ? 'Sign in to access your API dashboard'
            : 'Get started with Cosilico APIs'}
        </p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className={styles.btnPrimary}
            disabled={loading}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className={styles.authDivider}>or</div>

        <button
          onClick={handleMagicLink}
          className={styles.btnSecondary}
          disabled={loading}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Send Magic Link
        </button>

        <div className={styles.authFooter}>
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className={styles.authLink}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className={styles.authLink}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CREATE KEY MODAL
// ============================================

interface CreateKeyModalProps {
  onClose: () => void;
  onCreated: () => void;
}

function CreateKeyModal({ onClose, onCreated }: CreateKeyModalProps) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [newKey, setNewKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      // Generate a new API key (in production, this would be done server-side)
      const keyValue = `sk_live_${generateRandomString(32)}`;
      const keyHash = await hashKey(keyValue);
      const keyPrefix = keyValue.substring(0, 12);

      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('Not authenticated');

      const { error } = await supabase.from('api_keys').insert({
        user_id: userData.user.id,
        key_hash: keyHash,
        key_prefix: keyPrefix,
        name: name || 'Default',
      });

      if (error) throw error;

      setNewKey(keyValue);
      onCreated();
    } catch (err) {
      console.error('Error creating key:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (newKey) {
      await navigator.clipboard.writeText(newKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!newKey ? (
          <>
            <h2 className={styles.modalTitle}>Create New API Key</h2>
            <p className={styles.modalDescription}>
              Give your API key a name to help you identify it later.
            </p>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Key Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="e.g., Production, Development"
              />
            </div>
            <div className={styles.modalActions} style={{ marginTop: '24px' }}>
              <button onClick={onClose} className={styles.btnSecondary}>
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className={styles.btnPrimary}
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Key'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.modalTitle}>API Key Created</h2>
            <div className={styles.warningText}>
              Make sure to copy your API key now. You won't be able to see it again!
            </div>
            <div className={styles.newKeyDisplay}>
              <div className={styles.newKeyLabel}>Your API Key</div>
              <div className={styles.newKeyValue}>{newKey}</div>
            </div>
            <div className={styles.modalActions}>
              <button
                onClick={handleCopy}
                className={styles.btnSecondary}
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
              <button onClick={onClose} className={styles.btnPrimary}>
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================
// REVOKE KEY MODAL
// ============================================

interface RevokeKeyModalProps {
  keyToRevoke: ApiKey;
  onClose: () => void;
  onRevoked: () => void;
}

function RevokeKeyModal({ keyToRevoke, onClose, onRevoked }: RevokeKeyModalProps) {
  const [loading, setLoading] = useState(false);

  const handleRevoke = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('api_keys')
        .update({ is_active: false })
        .eq('id', keyToRevoke.id);

      if (error) throw error;
      onRevoked();
      onClose();
    } catch (err) {
      console.error('Error revoking key:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Revoke API Key</h2>
        <p className={styles.modalDescription}>
          Are you sure you want to revoke <strong>{keyToRevoke.name}</strong>?
          This action cannot be undone, and any applications using this key will
          stop working immediately.
        </p>
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.btnSecondary}>
            Cancel
          </button>
          <button
            onClick={handleRevoke}
            className={styles.btnDanger}
            disabled={loading}
          >
            {loading ? 'Revoking...' : 'Revoke Key'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// USAGE CHART
// ============================================

interface UsageChartProps {
  usageData: UsageLog[];
}

function UsageChart({ usageData }: UsageChartProps) {
  // Group usage by day for the last 7 days
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });

  const usageByDay = last7Days.map((day) => {
    const dayUsage = usageData.filter(
      (log) => log.created_at.split('T')[0] === day
    );
    return {
      date: day,
      calls: dayUsage.length,
      credits: dayUsage.reduce((sum, log) => sum + log.credits_used, 0),
    };
  });

  const maxCalls = Math.max(...usageByDay.map((d) => d.calls), 1);

  if (usageData.length === 0) {
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartPlaceholder}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3v18h18" />
            <path d="M18 9l-5 5-4-4-3 3" />
          </svg>
          <span>No usage data yet. Make some API calls to see your usage here.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartBars}>
        {usageByDay.map((day, i) => (
          <div
            key={day.date}
            className={styles.chartBar}
            style={{ height: `${(day.calls / maxCalls) * 100}%`, minHeight: day.calls > 0 ? '8px' : '2px' }}
            title={`${day.date}: ${day.calls} calls`}
          />
        ))}
      </div>
      <div className={styles.chartLabels}>
        {usageByDay.map((day) => (
          <span key={day.date} className={styles.chartLabel}>
            {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================
// MAIN DASHBOARD
// ============================================

interface DashboardProps {
  user: User;
  onSignOut: () => void;
}

function Dashboard({ user, onSignOut }: DashboardProps) {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [creditBalance, setCreditBalance] = useState<CreditBalance | null>(null);
  const [usageData, setUsageData] = useState<UsageLog[]>([]);
  const [packages, setPackages] = useState<CreditPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [keyToRevoke, setKeyToRevoke] = useState<ApiKey | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      // Fetch API keys
      const { data: keysData } = await supabase
        .from('api_keys')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch credit balance
      const { data: balanceData } = await supabase
        .from('credit_balances')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Fetch usage logs (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const { data: usageLogsData } = await supabase
        .from('usage_log')
        .select('*')
        .gte('created_at', thirtyDaysAgo.toISOString())
        .order('created_at', { ascending: false });

      // Fetch credit packages
      const { data: packagesData } = await supabase
        .from('credit_packages')
        .select('*')
        .eq('is_active', true)
        .order('price_cents', { ascending: true });

      setApiKeys(keysData || []);
      setCreditBalance(balanceData);
      setUsageData(usageLogsData || []);
      setPackages(packagesData || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const copyKeyPrefix = async (prefix: string) => {
    await navigator.clipboard.writeText(prefix + '...');
    setCopiedKey(prefix);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const totalCalls = usageData.length;
  const totalCreditsUsed = usageData.reduce((sum, log) => sum + log.credits_used, 0);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
        <span style={{ color: '#707088' }}>Loading your dashboard...</span>
      </div>
    );
  }

  return (
    <div className={styles.portalPage}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div>
              <h1 className={styles.headerTitle}>API Dashboard</h1>
              <p className={styles.headerSubtitle}>
                Manage your API keys and monitor usage
              </p>
            </div>
            <button onClick={onSignOut} className={styles.btnSecondary}>
              Sign Out
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statCardPrimary}`}>
            <div className={styles.statLabel}>Credit Balance</div>
            <div className={`${styles.statValue} ${styles.statValueAccent}`}>
              {formatCreditsAsDollars(creditBalance?.credits || 0)}
            </div>
            <div className={styles.statSubtext}>
              {formatCredits(creditBalance?.credits || 0)}
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statLabel}>API Keys</div>
            <div className={styles.statValue}>
              {apiKeys.filter((k) => k.is_active).length}
            </div>
            <div className={styles.statSubtext}>active keys</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statLabel}>Calls (30d)</div>
            <div className={styles.statValue}>{totalCalls.toLocaleString()}</div>
            <div className={styles.statSubtext}>
              {formatCreditsAsDollars(totalCreditsUsed)} spent
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statLabel}>Account</div>
            <div className={styles.statValue} style={{ fontSize: '1rem', wordBreak: 'break-all' }}>
              {user.email}
            </div>
          </div>
        </div>

        {/* Buy Credits Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Buy Credits</h2>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <div key={pkg.id} className={styles.packageCard}>
                <div className={styles.packageName}>{pkg.name}</div>
                <div className={styles.packagePrice}>
                  ${(pkg.price_cents / 100).toFixed(0)}
                </div>
                <div className={styles.packageCredits}>
                  {formatCredits(pkg.credits)}
                </div>
                <a
                  href={`https://buy.stripe.com/test_xxx?package=${pkg.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Purchase
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* API Keys Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>API Keys</h2>
            <button
              onClick={() => setShowCreateModal(true)}
              className={styles.btnPrimary}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Create New Key
            </button>
          </div>

          <div className={styles.keysTable}>
            <div className={styles.keysTableHeader}>
              <span>Name / Key</span>
              <span>Created</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            {apiKeys.length === 0 ? (
              <div className={styles.emptyState}>
                No API keys yet. Create your first key to get started.
              </div>
            ) : (
              apiKeys.map((key) => (
                <div key={key.id} className={styles.keyRow}>
                  <div className={styles.keyCell}>
                    <div className={styles.keyName}>{key.name}</div>
                    <div className={styles.keyValue}>
                      <span className={styles.keyPrefix}>{key.key_prefix}...</span>
                      <button
                        onClick={() => copyKeyPrefix(key.key_prefix)}
                        className={styles.copyButton}
                        title="Copy key prefix"
                      >
                        {copiedKey === key.key_prefix ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className={styles.keyDate}>
                    {new Date(key.created_at).toLocaleDateString()}
                  </div>
                  <div>
                    <span className={`${styles.keyStatus} ${key.is_active ? styles.statusActive : styles.statusInactive}`}>
                      <span className={styles.statusDot} />
                      {key.is_active ? 'Active' : 'Revoked'}
                    </span>
                  </div>
                  <div>
                    {key.is_active && (
                      <button
                        onClick={() => setKeyToRevoke(key)}
                        className={`${styles.btnDanger} ${styles.btnSmall}`}
                      >
                        Revoke
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Usage Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Usage (Last 7 Days)</h2>
          </div>
          <UsageChart usageData={usageData} />
        </section>
      </div>

      {/* Modals */}
      {showCreateModal && (
        <CreateKeyModal
          onClose={() => setShowCreateModal(false)}
          onCreated={fetchData}
        />
      )}

      {keyToRevoke && (
        <RevokeKeyModal
          keyToRevoke={keyToRevoke}
          onClose={() => setKeyToRevoke(null)}
          onRevoked={fetchData}
        />
      )}
    </div>
  );
}

// ============================================
// MAIN PORTAL PAGE
// ============================================

export default function PortalPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return (
      <PageLayout>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner} />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {session?.user ? (
        <Dashboard user={session.user} onSignOut={handleSignOut} />
      ) : (
        <AuthForm onAuthSuccess={() => {}} />
      )}
    </PageLayout>
  );
}

// ============================================
// UTILITIES
// ============================================

function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    result += chars[array[i] % chars.length];
  }
  return result;
}

async function hashKey(key: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(key);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
