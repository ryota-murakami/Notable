-- Advanced Search System Migration
-- Implements full-text search with contextual results for Issue #261

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm; -- For fuzzy matching

-- Add search vector column to notes table
ALTER TABLE notes 
ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Create index for full-text search
CREATE INDEX IF NOT EXISTS idx_notes_search 
ON notes USING GIN(search_vector);

-- Create index for trigram similarity search (fuzzy matching)
CREATE INDEX IF NOT EXISTS idx_notes_title_trgm 
ON notes USING gin(title gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_notes_content_trgm 
ON notes USING gin(content gin_trgm_ops);

-- Function to update search vector
CREATE OR REPLACE FUNCTION update_note_search_vector()
RETURNS trigger AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.content->>'text', '')), 'B');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update search vector
DROP TRIGGER IF EXISTS trigger_update_note_search_vector ON notes;
CREATE TRIGGER trigger_update_note_search_vector
BEFORE INSERT OR UPDATE OF title, content ON notes
FOR EACH ROW
EXECUTE FUNCTION update_note_search_vector();

-- Update existing notes with search vectors
UPDATE notes 
SET search_vector = 
  setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
  setweight(to_tsvector('english', COALESCE(content->>'text', '')), 'B');

-- Search history table
CREATE TABLE IF NOT EXISTS search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  query text NOT NULL,
  filters jsonb DEFAULT '{}',
  results_count integer DEFAULT 0,
  clicked_result_id uuid REFERENCES notes(id) ON DELETE SET NULL,
  created_at timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT search_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Index for search history queries
CREATE INDEX IF NOT EXISTS idx_search_history_user_created 
ON search_history(user_id, created_at DESC);

-- Saved searches table
CREATE TABLE IF NOT EXISTS saved_searches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  query text NOT NULL,
  filters jsonb DEFAULT '{}',
  shortcut_key text, -- Optional keyboard shortcut
  is_pinned boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc', now()),
  updated_at timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT saved_searches_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  CONSTRAINT unique_user_search_name UNIQUE(user_id, name)
);

-- Index for saved searches
CREATE INDEX IF NOT EXISTS idx_saved_searches_user_pinned 
ON saved_searches(user_id, is_pinned DESC, created_at DESC);

-- Search analytics table for tracking and optimization
CREATE TABLE IF NOT EXISTS search_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  query text NOT NULL,
  query_type text CHECK (query_type IN ('basic', 'filtered', 'advanced')),
  response_time_ms integer,
  results_count integer DEFAULT 0,
  clicked_position integer, -- Position of clicked result (if any)
  session_id uuid,
  created_at timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT search_analytics_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS idx_search_analytics_created 
ON search_analytics(created_at DESC);

-- Function to search notes with ranking and highlighting
CREATE OR REPLACE FUNCTION search_notes(
  p_user_id uuid,
  p_query text,
  p_tags uuid[] DEFAULT NULL,
  p_date_from timestamp with time zone DEFAULT NULL,
  p_date_to timestamp with time zone DEFAULT NULL,
  p_limit integer DEFAULT 20,
  p_offset integer DEFAULT 0
)
RETURNS TABLE (
  id uuid,
  title text,
  content jsonb,
  tags jsonb,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  rank real,
  headline_title text,
  headline_content text
) AS $$
BEGIN
  RETURN QUERY
  WITH tag_filtered AS (
    SELECT DISTINCT n.*
    FROM notes n
    LEFT JOIN note_tags nt ON n.id = nt.note_id
    WHERE n.user_id = p_user_id
      AND n.deleted_at IS NULL
      AND (p_tags IS NULL OR nt.tag_id = ANY(p_tags))
      AND (p_date_from IS NULL OR n.created_at >= p_date_from)
      AND (p_date_to IS NULL OR n.created_at <= p_date_to)
  ),
  ranked_results AS (
    SELECT 
      n.id,
      n.title,
      n.content,
      COALESCE(
        (
          SELECT jsonb_agg(
            jsonb_build_object(
              'id', t.id,
              'name', t.name,
              'color', t.color
            )
          )
          FROM note_tags nt
          JOIN tags t ON nt.tag_id = t.id
          WHERE nt.note_id = n.id
        ),
        '[]'::jsonb
      ) as tags,
      n.created_at,
      n.updated_at,
      ts_rank_cd(n.search_vector, plainto_tsquery('english', p_query)) as rank,
      ts_headline('english', n.title, plainto_tsquery('english', p_query),
        'StartSel=<mark>, StopSel=</mark>, MaxWords=50, MinWords=10'
      ) as headline_title,
      ts_headline('english', COALESCE(n.content->>'text', ''), plainto_tsquery('english', p_query),
        'StartSel=<mark>, StopSel=</mark>, MaxWords=150, MinWords=30'
      ) as headline_content
    FROM tag_filtered n
    WHERE 
      n.search_vector @@ plainto_tsquery('english', p_query)
      OR n.title ILIKE '%' || p_query || '%'
      OR n.content->>'text' ILIKE '%' || p_query || '%'
  )
  SELECT * FROM ranked_results
  ORDER BY rank DESC, updated_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Function to get search suggestions based on content
CREATE OR REPLACE FUNCTION get_search_suggestions(
  p_user_id uuid,
  p_query text,
  p_limit integer DEFAULT 5
)
RETURNS TABLE (
  suggestion text,
  type text,
  score real
) AS $$
BEGIN
  RETURN QUERY
  -- Get tag suggestions
  SELECT 
    t.name as suggestion,
    'tag' as type,
    similarity(t.name, p_query) as score
  FROM tags t
  WHERE t.user_id = p_user_id
    AND t.name ILIKE p_query || '%'
  ORDER BY similarity(t.name, p_query) DESC
  LIMIT p_limit / 2
  
  UNION ALL
  
  -- Get recent search suggestions
  SELECT DISTINCT
    sh.query as suggestion,
    'history' as type,
    0.8 as score
  FROM search_history sh
  WHERE sh.user_id = p_user_id
    AND sh.query ILIKE p_query || '%'
    AND sh.query != p_query
  ORDER BY score DESC
  LIMIT p_limit / 2;
END;
$$ LANGUAGE plpgsql;

-- RLS policies for search tables
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_analytics ENABLE ROW LEVEL SECURITY;

-- Search history policies
CREATE POLICY "Users can view own search history" ON search_history
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own search history" ON search_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own search history" ON search_history
  FOR DELETE USING (auth.uid() = user_id);

-- Saved searches policies
CREATE POLICY "Users can view own saved searches" ON saved_searches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved searches" ON saved_searches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved searches" ON saved_searches
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved searches" ON saved_searches
  FOR DELETE USING (auth.uid() = user_id);

-- Search analytics policies (write-only for users, read for admins)
CREATE POLICY "Users can insert search analytics" ON search_analytics
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Grant permissions
GRANT ALL ON search_history TO authenticated;
GRANT ALL ON saved_searches TO authenticated;
GRANT INSERT ON search_analytics TO authenticated;
GRANT EXECUTE ON FUNCTION search_notes TO authenticated;
GRANT EXECUTE ON FUNCTION get_search_suggestions TO authenticated;