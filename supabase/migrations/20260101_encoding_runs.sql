-- Encoding Runs Table for AutoRAC Experiment Lab
-- This table stores the results of encoding experiments

CREATE TABLE IF NOT EXISTS encoding_runs (
    id TEXT PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    citation TEXT NOT NULL,
    file_path TEXT,

    -- Iterations stored as JSONB array
    -- Each iteration: { attempt: number, success: boolean, duration_ms: number, errors: array }
    iterations JSONB NOT NULL DEFAULT '[]'::jsonb,

    -- Scores for different review dimensions
    scores JSONB NOT NULL DEFAULT '{}'::jsonb,
    -- Expected format: { rac: number, formula: number, parameter: number, integration: number }

    -- Additional metadata
    has_issues BOOLEAN DEFAULT FALSE,
    note TEXT,

    -- From experiments.db schema
    total_duration_ms INTEGER,
    agent_type TEXT,
    agent_model TEXT,
    session_id TEXT,

    -- Audit fields
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_encoding_runs_timestamp ON encoding_runs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_encoding_runs_citation ON encoding_runs(citation);
CREATE INDEX IF NOT EXISTS idx_encoding_runs_session ON encoding_runs(session_id);

-- Row Level Security (RLS)
-- For now, allow public read access (experiment data is not sensitive)
ALTER TABLE encoding_runs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to encoding_runs"
    ON encoding_runs
    FOR SELECT
    TO anon
    USING (true);

-- Only authenticated users can insert/update
CREATE POLICY "Allow authenticated insert to encoding_runs"
    ON encoding_runs
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update to encoding_runs"
    ON encoding_runs
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- RPC function to get encoding runs with computed fields
-- This function is called by the frontend to fetch data
CREATE OR REPLACE FUNCTION get_encoding_runs(
    limit_count INTEGER DEFAULT 100,
    offset_count INTEGER DEFAULT 0
)
RETURNS TABLE (
    id TEXT,
    timestamp TIMESTAMPTZ,
    citation TEXT,
    iterations JSONB,
    scores JSONB,
    has_issues BOOLEAN,
    note TEXT,
    total_duration_ms INTEGER,
    agent_type TEXT,
    agent_model TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT
        er.id,
        er.timestamp,
        er.citation,
        er.iterations,
        er.scores,
        er.has_issues,
        er.note,
        er.total_duration_ms,
        er.agent_type,
        er.agent_model
    FROM encoding_runs er
    ORDER BY er.timestamp DESC
    LIMIT limit_count
    OFFSET offset_count;
END;
$$;

-- Grant execute permission to anon role (public access)
GRANT EXECUTE ON FUNCTION get_encoding_runs(INTEGER, INTEGER) TO anon;
GRANT EXECUTE ON FUNCTION get_encoding_runs(INTEGER, INTEGER) TO authenticated;

-- Comment for documentation
COMMENT ON TABLE encoding_runs IS 'Stores AutoRAC encoding experiment results. Each row represents one encoding attempt for a citation.';
COMMENT ON FUNCTION get_encoding_runs IS 'Fetches encoding runs for the Experiment Lab dashboard. Returns most recent runs first.';
