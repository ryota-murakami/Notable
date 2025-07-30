-- AI Features and Usage Tracking for Premium Subscriptions
-- Implements comprehensive AI functionality with usage limits and billing

-- ==========================================
-- 1. AI USAGE TRACKING TABLE
-- ==========================================

-- Create AI usage tracking table
CREATE TABLE IF NOT EXISTS ai_usage (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    request_type text NOT NULL,
    tokens_used integer NOT NULL DEFAULT 0,
    cost_cents integer DEFAULT 0, -- Cost in cents for billing
    model_used text,
    response_time_ms integer,
    success boolean DEFAULT true,
    error_message text,
    metadata jsonb DEFAULT '{}',
    created_at timestamp with time zone DEFAULT now(),
    
    -- Constraints
    CONSTRAINT ai_usage_request_type_check CHECK (request_type IN (
        'search_enhancement',
        'content_generation', 
        'note_assistant',
        'smart_summary',
        'auto_completion',
        'content_analysis',
        'tag_suggestion',
        'relationship_discovery',
        'writing_improvement',
        'outline_generation'
    )),
    CONSTRAINT ai_usage_tokens_positive CHECK (tokens_used >= 0),
    CONSTRAINT ai_usage_cost_positive CHECK (cost_cents >= 0)
);

-- Add indexes for AI usage tracking
CREATE INDEX IF NOT EXISTS idx_ai_usage_user_date ON ai_usage(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_user_type ON ai_usage(user_id, request_type);
CREATE INDEX IF NOT EXISTS idx_ai_usage_daily_stats ON ai_usage(user_id, date_trunc('day', created_at));
CREATE INDEX IF NOT EXISTS idx_ai_usage_monthly_stats ON ai_usage(user_id, date_trunc('month', created_at));

-- Enable RLS on ai_usage table
ALTER TABLE ai_usage ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for ai_usage
CREATE POLICY "Users can view their own AI usage" ON ai_usage
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own AI usage records" ON ai_usage
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ==========================================
-- 2. AI ENHANCED SEARCH CACHE
-- ==========================================

-- Create AI-enhanced search results cache
CREATE TABLE IF NOT EXISTS ai_search_cache (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    original_query text NOT NULL,
    enhanced_query text NOT NULL,
    semantic_results jsonb NOT NULL DEFAULT '[]',
    suggestions jsonb NOT NULL DEFAULT '[]',
    insights text,
    created_at timestamp with time zone DEFAULT now(),
    expires_at timestamp with time zone DEFAULT (now() + interval '1 hour'),
    
    CONSTRAINT ai_search_cache_user_query UNIQUE (user_id, original_query)
);

-- Add indexes for AI search cache
CREATE INDEX IF NOT EXISTS idx_ai_search_cache_lookup ON ai_search_cache(user_id, original_query);
CREATE INDEX IF NOT EXISTS idx_ai_search_cache_cleanup ON ai_search_cache(expires_at);

-- Enable RLS on ai_search_cache
ALTER TABLE ai_search_cache ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for ai_search_cache
CREATE POLICY "Users can access their own AI search cache" ON ai_search_cache
    FOR ALL USING (auth.uid() = user_id);

-- ==========================================
-- 3. AI CONTENT SUGGESTIONS
-- ==========================================

-- Create AI content suggestions table
CREATE TABLE IF NOT EXISTS ai_content_suggestions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    note_id uuid REFERENCES notes(id) ON DELETE CASCADE,
    suggestion_type text NOT NULL CHECK (suggestion_type IN (
        'completion', 'improvement', 'expansion', 'summary', 'outline', 'tags'
    )),
    original_content text NOT NULL,
    suggested_content text NOT NULL,
    confidence real NOT NULL CHECK (confidence >= 0 AND confidence <= 1),
    reasoning text,
    status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'modified')),
    user_feedback text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Add indexes for AI content suggestions
CREATE INDEX IF NOT EXISTS idx_ai_suggestions_user_note ON ai_content_suggestions(user_id, note_id);
CREATE INDEX IF NOT EXISTS idx_ai_suggestions_type_status ON ai_content_suggestions(suggestion_type, status);
CREATE INDEX IF NOT EXISTS idx_ai_suggestions_user_date ON ai_content_suggestions(user_id, created_at DESC);

-- Enable RLS on ai_content_suggestions
ALTER TABLE ai_content_suggestions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for ai_content_suggestions
CREATE POLICY "Users can access their own AI content suggestions" ON ai_content_suggestions
    FOR ALL USING (auth.uid() = user_id);

-- ==========================================
-- 4. AI ANALYTICS AND INSIGHTS
-- ==========================================

-- Create AI analytics materialized view
CREATE MATERIALIZED VIEW IF NOT EXISTS ai_usage_analytics AS
SELECT 
    user_id,
    DATE_TRUNC('day', created_at) as usage_date,
    request_type,
    COUNT(*) as request_count,
    SUM(tokens_used) as total_tokens,
    SUM(cost_cents) as total_cost_cents,
    AVG(response_time_ms) as avg_response_time,
    COUNT(*) FILTER (WHERE success = true) as successful_requests,
    COUNT(*) FILTER (WHERE success = false) as failed_requests
FROM ai_usage
GROUP BY user_id, DATE_TRUNC('day', created_at), request_type;

-- Create indexes on the materialized view
CREATE INDEX IF NOT EXISTS idx_ai_analytics_user_date ON ai_usage_analytics(user_id, usage_date DESC);
CREATE INDEX IF NOT EXISTS idx_ai_analytics_type ON ai_usage_analytics(request_type);

-- ==========================================
-- 5. AI USAGE FUNCTIONS
-- ==========================================

-- Function to get current AI usage for a user
CREATE OR REPLACE FUNCTION get_ai_usage_stats(
    p_user_id uuid,
    p_period text DEFAULT 'day' -- 'day', 'week', 'month'
)
RETURNS TABLE (
    request_count bigint,
    token_usage bigint,
    cost_cents bigint,
    by_type jsonb
) AS $$
DECLARE
    start_date timestamp with time zone;
BEGIN
    -- Calculate start date based on period
    CASE p_period
        WHEN 'day' THEN start_date := date_trunc('day', now());
        WHEN 'week' THEN start_date := date_trunc('week', now());
        WHEN 'month' THEN start_date := date_trunc('month', now());
        ELSE start_date := date_trunc('day', now());
    END CASE;
    
    RETURN QUERY
    SELECT 
        COUNT(*) as request_count,
        COALESCE(SUM(tokens_used), 0) as token_usage,
        COALESCE(SUM(cost_cents), 0) as cost_cents,
        COALESCE(
            jsonb_object_agg(
                request_type, 
                jsonb_build_object(
                    'count', type_count,
                    'tokens', type_tokens
                )
            ), 
            '{}'::jsonb
        ) as by_type
    FROM (
        SELECT 
            request_type,
            COUNT(*) as type_count,
            SUM(tokens_used) as type_tokens
        FROM ai_usage 
        WHERE user_id = p_user_id 
        AND created_at >= start_date
        GROUP BY request_type
    ) type_stats;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check AI usage limits
CREATE OR REPLACE FUNCTION check_ai_usage_limit(
    p_user_id uuid,
    p_plan text DEFAULT 'free'
)
RETURNS TABLE (
    within_limit boolean,
    current_usage bigint,
    limit_amount bigint,
    reset_date timestamp with time zone
) AS $$
DECLARE
    daily_limit bigint;
    current_count bigint;
BEGIN
    -- Set limits based on plan
    CASE p_plan
        WHEN 'free' THEN daily_limit := 10;
        WHEN 'premium' THEN daily_limit := -1; -- unlimited
        WHEN 'team' THEN daily_limit := -1; -- unlimited
        ELSE daily_limit := 0;
    END CASE;
    
    -- Get current usage for today
    SELECT COUNT(*) INTO current_count
    FROM ai_usage 
    WHERE user_id = p_user_id 
    AND created_at >= date_trunc('day', now());
    
    RETURN QUERY
    SELECT 
        (daily_limit = -1 OR current_count < daily_limit) as within_limit,
        current_count as current_usage,
        daily_limit as limit_amount,
        (date_trunc('day', now()) + interval '1 day') as reset_date;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get AI search cache
CREATE OR REPLACE FUNCTION get_ai_search_cache(
    p_user_id uuid,
    p_query text
)
RETURNS TABLE (
    enhanced_query text,
    semantic_results jsonb,
    suggestions jsonb,
    insights text
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        asc.enhanced_query,
        asc.semantic_results,
        asc.suggestions,
        asc.insights
    FROM ai_search_cache asc
    WHERE asc.user_id = p_user_id
    AND asc.original_query = p_query
    AND asc.expires_at > now()
    LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to cache AI search results
CREATE OR REPLACE FUNCTION cache_ai_search_results(
    p_user_id uuid,
    p_original_query text,
    p_enhanced_query text,
    p_semantic_results jsonb,
    p_suggestions jsonb,
    p_insights text
)
RETURNS void AS $$
BEGIN
    INSERT INTO ai_search_cache (
        user_id, 
        original_query, 
        enhanced_query, 
        semantic_results, 
        suggestions, 
        insights
    )
    VALUES (
        p_user_id, 
        p_original_query, 
        p_enhanced_query, 
        p_semantic_results, 
        p_suggestions, 
        p_insights
    )
    ON CONFLICT (user_id, original_query)
    DO UPDATE SET 
        enhanced_query = EXCLUDED.enhanced_query,
        semantic_results = EXCLUDED.semantic_results,
        suggestions = EXCLUDED.suggestions,
        insights = EXCLUDED.insights,
        created_at = now(),
        expires_at = now() + interval '1 hour';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- 6. CLEANUP AND MAINTENANCE
-- ==========================================

-- Function to cleanup expired AI caches
CREATE OR REPLACE FUNCTION cleanup_ai_caches()
RETURNS void AS $$
BEGIN
    -- Clean up expired AI search cache
    DELETE FROM ai_search_cache WHERE expires_at < now();
    
    -- Clean up old AI usage records (keep 1 year)
    DELETE FROM ai_usage 
    WHERE created_at < now() - interval '1 year';
    
    -- Refresh materialized view
    REFRESH MATERIALIZED VIEW CONCURRENTLY ai_usage_analytics;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- 7. GRANT PERMISSIONS
-- ==========================================

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION get_ai_usage_stats(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION check_ai_usage_limit(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION get_ai_search_cache(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION cache_ai_search_results(uuid, text, text, jsonb, jsonb, text) TO authenticated;
GRANT EXECUTE ON FUNCTION cleanup_ai_caches() TO authenticated;

-- Grant select permissions on materialized view
GRANT SELECT ON ai_usage_analytics TO authenticated;

-- ==========================================
-- 8. TRIGGERS AND AUTOMATION
-- ==========================================

-- Trigger to update ai_content_suggestions updated_at
CREATE OR REPLACE FUNCTION update_ai_suggestions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_ai_suggestions_updated_at
    BEFORE UPDATE ON ai_content_suggestions
    FOR EACH ROW
    EXECUTE FUNCTION update_ai_suggestions_updated_at();

-- ==========================================
-- 9. INITIAL DATA AND COMMENTS  
-- ==========================================

-- Add helpful comments
COMMENT ON TABLE ai_usage IS 'Tracks AI feature usage for billing and rate limiting';
COMMENT ON TABLE ai_search_cache IS 'Caches AI-enhanced search results for performance';
COMMENT ON TABLE ai_content_suggestions IS 'Stores AI-generated content suggestions for notes';
COMMENT ON MATERIALIZED VIEW ai_usage_analytics IS 'Aggregated AI usage statistics for analytics';

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'AI features and premium functionality implemented successfully!';
    RAISE NOTICE 'Features: Smart search, content generation, note assistant, usage tracking';
    RAISE NOTICE 'Premium tier ready for subscription billing';
END $$;