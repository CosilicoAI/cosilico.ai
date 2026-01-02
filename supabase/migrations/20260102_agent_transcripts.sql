CREATE TABLE IF NOT EXISTS agent_transcripts (
    id SERIAL PRIMARY KEY,
    session_id TEXT NOT NULL,
    agent_id TEXT,
    tool_use_id TEXT UNIQUE NOT NULL,
    subagent_type TEXT NOT NULL,
    prompt TEXT,
    description TEXT,
    response_summary TEXT,
    transcript JSONB,
    message_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL,
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_agent_transcripts_session ON agent_transcripts(session_id);
CREATE INDEX IF NOT EXISTS idx_agent_transcripts_agent ON agent_transcripts(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_transcripts_type ON agent_transcripts(subagent_type);
