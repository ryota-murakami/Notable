-- Enhanced Search System with Full-Text Search and History
-- Based on Issue #261: Advanced full-text search with contextual results

-- Add search optimization to existing notes table
ALTER TABLE notes 
ADD COLUMN IF NOT EXISTS search_vector tsvector GENERATED ALWAYS AS (
    to_tsvector('english', 
        coalesce(title, '') || ' ' || 
        coalesce(content, '')
    )
) STORED;

-- Create GIN index for full-text search performance
CREATE INDEX IF NOT EXISTS idx_notes_search_vector ON notes USING GIN(search_vector);

-- Create additional indexes for search performance
CREATE INDEX IF NOT EXISTS idx_notes_title_search ON notes USING GIN(to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS idx_notes_content_search ON notes USING GIN(to_tsvector('english', content));
CREATE INDEX IF NOT EXISTS idx_notes_user_updated ON notes(user_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_notes_user_created ON notes(user_id, created_at DESC);

-- Create search history table
CREATE TABLE IF NOT EXISTS search_history (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    query text NOT NULL,
    results_count integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    
    -- Constraints
    CONSTRAINT search_history_query_length CHECK (length(query) > 0 AND length(query) <= 500)
);

-- Add indexes for search history
CREATE INDEX IF NOT EXISTS idx_search_history_user_id ON search_history(user_id);
CREATE INDEX IF NOT EXISTS idx_search_history_user_created ON search_history(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_search_history_query ON search_history(query);

-- Enable RLS on search_history table
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for search_history
CREATE POLICY "Users can view their own search history" ON search_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own search history" ON search_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own search history" ON search_history
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own search history" ON search_history
    FOR DELETE USING (auth.uid() = user_id);

-- Create function to cleanup old search history entries
CREATE OR REPLACE FUNCTION cleanup_search_history(p_user_id uuid, p_keep_count integer DEFAULT 100)
RETURNS void AS $$
BEGIN
    -- Delete entries beyond the keep_count for the specified user
    DELETE FROM search_history 
    WHERE user_id = p_user_id 
    AND id NOT IN (
        SELECT id 
        FROM search_history 
        WHERE user_id = p_user_id 
        ORDER BY created_at DESC 
        LIMIT p_keep_count
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function for advanced search with ranking
CREATE OR REPLACE FUNCTION search_notes(
    p_user_id uuid,
    p_query text,
    p_limit integer DEFAULT 50,
    p_offset integer DEFAULT 0
)
RETURNS TABLE (
    id uuid,
    title text,
    content text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    rank real
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        n.id,
        n.title,
        n.content,
        n.created_at,
        n.updated_at,
        ts_rank(n.search_vector, plainto_tsquery('english', p_query)) as rank
    FROM notes n
    WHERE n.user_id = p_user_id
    AND n.search_vector @@ plainto_tsquery('english', p_query)
    ORDER BY rank DESC, n.updated_at DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function for search with highlighting
CREATE OR REPLACE FUNCTION search_notes_with_highlights(
    p_user_id uuid,
    p_query text,
    p_limit integer DEFAULT 50,
    p_offset integer DEFAULT 0
)
RETURNS TABLE (
    id uuid,
    title text,
    content text,
    title_highlight text,
    content_highlight text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    rank real
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        n.id,
        n.title,
        n.content,
        ts_headline('english', n.title, plainto_tsquery('english', p_query), 
            'MaxWords=10, MinWords=5, MaxFragments=1') as title_highlight,
        ts_headline('english', n.content, plainto_tsquery('english', p_query), 
            'MaxWords=35, MinWords=15, MaxFragments=2') as content_highlight,
        n.created_at,
        n.updated_at,
        ts_rank(n.search_vector, plainto_tsquery('english', p_query)) as rank
    FROM notes n
    WHERE n.user_id = p_user_id
    AND n.search_vector @@ plainto_tsquery('english', p_query)
    ORDER BY rank DESC, n.updated_at DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to update search vector when notes are modified
CREATE OR REPLACE FUNCTION update_notes_search_vector()
RETURNS TRIGGER AS $$
BEGIN
    -- The search_vector column is already a generated column, so no manual update needed
    -- This function is kept for compatibility and future enhancements
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update search vector (though it's generated automatically)
DROP TRIGGER IF EXISTS update_notes_search_vector_trigger ON notes;
CREATE TRIGGER update_notes_search_vector_trigger
    BEFORE UPDATE ON notes
    FOR EACH ROW
    EXECUTE FUNCTION update_notes_search_vector();

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION cleanup_search_history(uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION search_notes(uuid, text, integer, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION search_notes_with_highlights(uuid, text, integer, integer) TO authenticated;

-- Add helpful views for search analytics
CREATE OR REPLACE VIEW search_analytics AS
SELECT 
    user_id,
    COUNT(*) as total_searches,
    COUNT(DISTINCT query) as unique_queries,
    AVG(results_count) as avg_results,
    MAX(created_at) as last_search,
    array_agg(DISTINCT query ORDER BY query) FILTER (WHERE query IS NOT NULL) as popular_queries
FROM search_history 
GROUP BY user_id;

-- Grant access to the view
GRANT SELECT ON search_analytics TO authenticated;

-- Create RLS policy for the view
CREATE POLICY "Users can view their own search analytics" ON search_analytics
    FOR SELECT USING (auth.uid() = user_id);