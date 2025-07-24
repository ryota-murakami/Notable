-- Add is_hidden field to notes table for hidden notes feature
ALTER TABLE notes ADD COLUMN IF NOT EXISTS is_hidden BOOLEAN DEFAULT FALSE;

-- Create index for better performance when filtering hidden notes
CREATE INDEX IF NOT EXISTS idx_notes_is_hidden ON notes(is_hidden);

-- Update the search function to exclude hidden notes by default
CREATE OR REPLACE FUNCTION search_notes(
    search_query TEXT, 
    user_uuid UUID,
    include_hidden BOOLEAN DEFAULT FALSE
)
RETURNS TABLE(
    id UUID,
    title VARCHAR(255),
    content JSONB,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    rank REAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        n.id,
        n.title,
        n.content,
        n.created_at,
        n.updated_at,
        ts_rank(to_tsvector('english', n.title || ' ' || (n.content->>'text')), plainto_tsquery('english', search_query)) AS rank
    FROM notes n
    WHERE n.user_id = user_uuid
        AND n.deleted_at IS NULL
        AND (include_hidden OR n.is_hidden = FALSE)
        AND (
            to_tsvector('english', n.title || ' ' || (n.content->>'text')) @@ plainto_tsquery('english', search_query)
        )
    ORDER BY rank DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Comment for documentation
COMMENT ON COLUMN notes.is_hidden IS 'Flag to indicate if the note is hidden from normal views and search results';