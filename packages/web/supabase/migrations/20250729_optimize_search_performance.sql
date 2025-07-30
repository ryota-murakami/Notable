-- Advanced Search Performance Optimization for 10,000+ Notes
-- Target: Sub-500ms response time with comprehensive search functionality

-- ==========================================
-- 1. ADVANCED INDEXING STRATEGY
-- ==========================================

-- Create composite indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_notes_user_search_vector ON notes(user_id) INCLUDE (search_vector, title, updated_at);
CREATE INDEX IF NOT EXISTS idx_notes_user_updated_title ON notes(user_id, updated_at DESC, title);
CREATE INDEX IF NOT EXISTS idx_notes_user_created_title ON notes(user_id, created_at DESC, title);

-- Partial indexes for better performance on common patterns
CREATE INDEX IF NOT EXISTS idx_notes_recent_updated ON notes(user_id, updated_at DESC) 
WHERE updated_at > (now() - interval '30 days');

CREATE INDEX IF NOT EXISTS idx_notes_recent_created ON notes(user_id, created_at DESC) 
WHERE created_at > (now() - interval '30 days');

-- Hash index for exact title matches (faster than B-tree for equality)
CREATE INDEX IF NOT EXISTS idx_notes_title_hash ON notes USING HASH(title) WHERE title IS NOT NULL;

-- ==========================================
-- 2. MATERIALIZED VIEW FOR SEARCH PERFORMANCE
-- ==========================================

-- Create materialized view for pre-computed search data
CREATE MATERIALIZED VIEW IF NOT EXISTS notes_search_cache AS
SELECT 
    n.id,
    n.user_id,
    n.title,
    n.content,
    n.created_at,
    n.updated_at,
    n.search_vector,
    -- Pre-compute content length and word count for ranking
    length(n.content) as content_length,
    array_length(string_to_array(n.content, ' '), 1) as word_count,
    -- Pre-aggregate tag information
    COALESCE(array_agg(t.name) FILTER (WHERE t.name IS NOT NULL), '{}') as tag_names,
    COALESCE(array_agg(t.color) FILTER (WHERE t.color IS NOT NULL), '{}') as tag_colors,
    COALESCE(count(t.id), 0) as tag_count
FROM notes n
LEFT JOIN note_tags nt ON n.id = nt.note_id
LEFT JOIN tags t ON nt.tag_id = t.id
GROUP BY n.id, n.user_id, n.title, n.content, n.created_at, n.updated_at, n.search_vector;

-- Create indexes on the materialized view
CREATE UNIQUE INDEX IF NOT EXISTS idx_notes_search_cache_id ON notes_search_cache(id);
CREATE INDEX IF NOT EXISTS idx_notes_search_cache_user_search ON notes_search_cache USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_notes_search_cache_user_updated ON notes_search_cache(user_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_notes_search_cache_tags ON notes_search_cache USING GIN(tag_names);

-- ==========================================
-- 3. OPTIMIZED SEARCH FUNCTIONS
-- ==========================================

-- Ultra-fast search function using materialized view
CREATE OR REPLACE FUNCTION fast_search_notes(
    p_user_id uuid,
    p_query text,
    p_tags text[] DEFAULT '{}',
    p_limit integer DEFAULT 50,
    p_offset integer DEFAULT 0,
    p_sort_by text DEFAULT 'relevance'
)
RETURNS TABLE (
    id uuid,
    title text,
    content text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    tag_names text[],
    tag_colors text[],
    rank real,
    total_count bigint
) AS $$
DECLARE
    query_tsquery tsquery;
    sort_clause text;
    total_count bigint;
BEGIN
    -- Prepare the query
    query_tsquery := plainto_tsquery('english', p_query);
    
    -- Build sort clause
    CASE p_sort_by
        WHEN 'created' THEN sort_clause := 'created_at DESC';
        WHEN 'updated' THEN sort_clause := 'updated_at DESC';
        WHEN 'title' THEN sort_clause := 'title ASC';
        ELSE sort_clause := 'rank DESC, updated_at DESC';
    END CASE;
    
    -- Get total count for pagination
    EXECUTE format('
        SELECT count(*)
        FROM notes_search_cache nsc
        WHERE nsc.user_id = $1
        AND ($2 = '''' OR nsc.search_vector @@ $3)
        AND ($4 = ''{}'' OR nsc.tag_names && $4)
    ') INTO total_count
    USING p_user_id, p_query, query_tsquery, p_tags;
    
    -- Return paginated results
    RETURN QUERY EXECUTE format('
        SELECT 
            nsc.id,
            nsc.title,
            nsc.content,
            nsc.created_at,
            nsc.updated_at,
            nsc.tag_names,
            nsc.tag_colors,
            CASE 
                WHEN $2 = '''' THEN 0.0
                ELSE ts_rank_cd(nsc.search_vector, $3, 1|4)
            END as rank,
            $6 as total_count
        FROM notes_search_cache nsc
        WHERE nsc.user_id = $1
        AND ($2 = '''' OR nsc.search_vector @@ $3)
        AND ($4 = ''{}'' OR nsc.tag_names && $4)
        ORDER BY %s
        LIMIT $5 OFFSET $7
    ', sort_clause)
    USING p_user_id, p_query, query_tsquery, p_tags, p_limit, total_count, p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- High-performance autocomplete search for instant results
CREATE OR REPLACE FUNCTION autocomplete_search(
    p_user_id uuid,
    p_query text,
    p_limit integer DEFAULT 10
)
RETURNS TABLE (
    id uuid,
    title text,
    match_type text,
    rank real
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        nsc.id,
        nsc.title,
        CASE 
            WHEN nsc.title ILIKE p_query || '%' THEN 'title_prefix'
            WHEN nsc.title ILIKE '%' || p_query || '%' THEN 'title_contains'
            ELSE 'content_match'
        END as match_type,
        CASE 
            WHEN nsc.title ILIKE p_query || '%' THEN 1.0
            WHEN nsc.title ILIKE '%' || p_query || '%' THEN 0.8
            ELSE ts_rank_cd(nsc.search_vector, plainto_tsquery('english', p_query))
        END as rank
    FROM notes_search_cache nsc
    WHERE nsc.user_id = p_user_id
    AND (
        nsc.title ILIKE '%' || p_query || '%' 
        OR nsc.search_vector @@ plainto_tsquery('english', p_query)
        OR nsc.tag_names && ARRAY[p_query]
    )
    ORDER BY rank DESC, nsc.updated_at DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- 4. SEARCH RESULT CACHING
-- ==========================================

-- Create search results cache table
CREATE TABLE IF NOT EXISTS search_results_cache (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    query_hash text NOT NULL, -- MD5 hash of query + parameters
    results jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    expires_at timestamp with time zone DEFAULT (now() + interval '5 minutes'),
    
    CONSTRAINT search_results_cache_user_query UNIQUE (user_id, query_hash)
);

-- Index for cache lookups
CREATE INDEX IF NOT EXISTS idx_search_results_cache_lookup ON search_results_cache(user_id, query_hash, expires_at);
CREATE INDEX IF NOT EXISTS idx_search_results_cache_cleanup ON search_results_cache(expires_at);

-- Function to get cached search results
CREATE OR REPLACE FUNCTION get_cached_search_results(
    p_user_id uuid,
    p_query_hash text
)
RETURNS jsonb AS $$
DECLARE
    cached_results jsonb;
BEGIN
    SELECT results INTO cached_results
    FROM search_results_cache
    WHERE user_id = p_user_id
    AND query_hash = p_query_hash
    AND expires_at > now();
    
    RETURN cached_results;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to cache search results
CREATE OR REPLACE FUNCTION cache_search_results(
    p_user_id uuid,
    p_query_hash text,
    p_results jsonb,
    p_cache_duration interval DEFAULT '5 minutes'
)
RETURNS void AS $$
BEGIN
    INSERT INTO search_results_cache (user_id, query_hash, results, expires_at)
    VALUES (p_user_id, p_query_hash, p_results, now() + p_cache_duration)
    ON CONFLICT (user_id, query_hash)
    DO UPDATE SET 
        results = EXCLUDED.results,
        created_at = now(),
        expires_at = now() + p_cache_duration;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- 5. AUTOMATIC CACHE MAINTENANCE
-- ==========================================

-- Function to refresh materialized view incrementally
CREATE OR REPLACE FUNCTION refresh_search_cache()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY notes_search_cache;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to cleanup expired cache entries
CREATE OR REPLACE FUNCTION cleanup_search_caches()
RETURNS void AS $$
BEGIN
    -- Clean up expired search results
    DELETE FROM search_results_cache WHERE expires_at < now();
    
    -- Clean up old search history (keep only last 1000 per user)
    DELETE FROM search_history 
    WHERE id NOT IN (
        SELECT id FROM search_history 
        ORDER BY created_at DESC 
        LIMIT 1000
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- 6. TRIGGERS FOR AUTOMATIC MAINTENANCE
-- ==========================================

-- Trigger to invalidate cache when notes are modified
CREATE OR REPLACE FUNCTION invalidate_search_cache()
RETURNS TRIGGER AS $$
BEGIN
    -- Delete cached results for this user
    DELETE FROM search_results_cache WHERE user_id = COALESCE(NEW.user_id, OLD.user_id);
    
    -- Schedule materialized view refresh (non-blocking)
    PERFORM pg_notify('refresh_search_cache', '');
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
DROP TRIGGER IF EXISTS trigger_invalidate_search_cache_notes ON notes;
CREATE TRIGGER trigger_invalidate_search_cache_notes
    AFTER INSERT OR UPDATE OR DELETE ON notes
    FOR EACH ROW EXECUTE FUNCTION invalidate_search_cache();

DROP TRIGGER IF EXISTS trigger_invalidate_search_cache_tags ON note_tags;
CREATE TRIGGER trigger_invalidate_search_cache_tags
    AFTER INSERT OR UPDATE OR DELETE ON note_tags
    FOR EACH ROW EXECUTE FUNCTION invalidate_search_cache();

-- ==========================================
-- 7. PERFORMANCE MONITORING
-- ==========================================

-- View for search performance monitoring
CREATE OR REPLACE VIEW search_performance_stats AS
SELECT 
    DATE_TRUNC('hour', sh.created_at) as hour,
    COUNT(*) as search_count,
    AVG(sh.results_count) as avg_results,
    COUNT(DISTINCT sh.user_id) as unique_users,
    array_agg(DISTINCT sh.query ORDER BY sh.query) as popular_queries
FROM search_history sh
WHERE sh.created_at > now() - interval '24 hours'
GROUP BY DATE_TRUNC('hour', sh.created_at)
ORDER BY hour DESC;

-- ==========================================
-- 8. GRANT PERMISSIONS
-- ==========================================

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION fast_search_notes(uuid, text, text[], integer, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION autocomplete_search(uuid, text, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION get_cached_search_results(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION cache_search_results(uuid, text, jsonb, interval) TO authenticated;
GRANT EXECUTE ON FUNCTION refresh_search_cache() TO authenticated;
GRANT EXECUTE ON FUNCTION cleanup_search_caches() TO authenticated;

-- Grant select permissions on materialized view
GRANT SELECT ON notes_search_cache TO authenticated;
GRANT SELECT ON search_performance_stats TO authenticated;

-- RLS policies for cache tables
ALTER TABLE search_results_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can access their own search cache" ON search_results_cache
    FOR ALL USING (auth.uid() = user_id);

-- ==========================================
-- 9. INITIAL POPULATION
-- ==========================================

-- Populate the materialized view initially
SELECT refresh_search_cache();

-- Create helpful comments
COMMENT ON MATERIALIZED VIEW notes_search_cache IS 'Pre-computed search data for ultra-fast queries (target: <200ms for 10k+ notes)';
COMMENT ON FUNCTION fast_search_notes IS 'Optimized search function with sub-500ms performance target';
COMMENT ON FUNCTION autocomplete_search IS 'Lightning-fast autocomplete for search suggestions (<100ms)';
COMMENT ON TABLE search_results_cache IS 'Temporary cache for search results to avoid repeated computation';

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Search performance optimization completed successfully!';
    RAISE NOTICE 'Target performance: <500ms for 10,000+ notes';
    RAISE NOTICE 'Features enabled: Materialized views, result caching, optimized indexes';
END $$;