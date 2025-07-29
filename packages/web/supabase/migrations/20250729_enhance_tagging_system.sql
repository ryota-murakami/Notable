-- Enhance tagging system with nested tags and comprehensive features
-- Based on Issue #262: Comprehensive Tagging System with Nested Tags

-- First, add missing columns to existing tags table
ALTER TABLE tags 
ADD COLUMN IF NOT EXISTS parent_id uuid REFERENCES tags(id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS description text,
ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now();

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_tags_user_id ON tags(user_id);
CREATE INDEX IF NOT EXISTS idx_tags_parent_id ON tags(parent_id);
CREATE INDEX IF NOT EXISTS idx_tags_name_user ON tags(name, user_id);
CREATE INDEX IF NOT EXISTS idx_note_tags_note_id ON note_tags(note_id);
CREATE INDEX IF NOT EXISTS idx_note_tags_tag_id ON note_tags(tag_id);

-- Add unique constraint to prevent duplicate tag names per user
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'tags_name_user_id_unique'
    ) THEN
        ALTER TABLE tags ADD CONSTRAINT tags_name_user_id_unique UNIQUE(name, user_id);
    END IF;
END $$;

-- Add unique constraint to prevent duplicate note-tag associations
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'note_tags_note_tag_unique'
    ) THEN
        ALTER TABLE note_tags ADD CONSTRAINT note_tags_note_tag_unique UNIQUE(note_id, tag_id);
    END IF;
END $$;

-- Create function to update tag updated_at timestamp
CREATE OR REPLACE FUNCTION update_tag_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS update_tags_updated_at ON tags;
CREATE TRIGGER update_tags_updated_at
    BEFORE UPDATE ON tags
    FOR EACH ROW
    EXECUTE FUNCTION update_tag_updated_at();

-- Enable RLS on tags table if not already enabled
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Users can view their own tags" ON tags;
DROP POLICY IF EXISTS "Users can create their own tags" ON tags;
DROP POLICY IF EXISTS "Users can update their own tags" ON tags;
DROP POLICY IF EXISTS "Users can delete their own tags" ON tags;

-- Create RLS policies for tags
CREATE POLICY "Users can view their own tags" ON tags
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tags" ON tags
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own tags" ON tags
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own tags" ON tags
    FOR DELETE USING (auth.uid() = user_id);

-- Enable RLS on note_tags table if not already enabled
ALTER TABLE note_tags ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Users can view their own note tags" ON note_tags;
DROP POLICY IF EXISTS "Users can create their own note tags" ON note_tags;
DROP POLICY IF EXISTS "Users can delete their own note tags" ON note_tags;

-- Create RLS policies for note_tags (note_tags doesn't need user_id since we check through note ownership)
CREATE POLICY "Users can view their own note tags" ON note_tags
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE notes.id = note_tags.note_id 
            AND notes.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create their own note tags" ON note_tags
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE notes.id = note_tags.note_id 
            AND notes.user_id = auth.uid()
        )
        AND EXISTS (
            SELECT 1 FROM tags 
            WHERE tags.id = note_tags.tag_id 
            AND tags.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete their own note tags" ON note_tags
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE notes.id = note_tags.note_id 
            AND notes.user_id = auth.uid()
        )
    );

-- Create helpful views for tag hierarchy
CREATE OR REPLACE VIEW tag_hierarchy AS
WITH RECURSIVE tag_tree AS (
    -- Base case: root tags (no parent)
    SELECT 
        id,
        name,
        parent_id,
        user_id,
        color,
        description,
        created_at,
        updated_at,
        0 as level,
        name as path,
        ARRAY[id] as id_path
    FROM tags 
    WHERE parent_id IS NULL
    
    UNION ALL
    
    -- Recursive case: child tags
    SELECT 
        t.id,
        t.name,
        t.parent_id,
        t.user_id,
        t.color,
        t.description,
        t.created_at,
        t.updated_at,
        tt.level + 1,
        tt.path || '/' || t.name as path,
        tt.id_path || t.id
    FROM tags t
    INNER JOIN tag_tree tt ON t.parent_id = tt.id
)
SELECT * FROM tag_tree;

-- Create function to get tag usage count
CREATE OR REPLACE FUNCTION get_tag_usage_count(tag_uuid uuid)
RETURNS integer AS $$
BEGIN
    RETURN (
        SELECT COUNT(*)::integer 
        FROM note_tags 
        WHERE tag_id = tag_uuid
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to get all descendant tags
CREATE OR REPLACE FUNCTION get_descendant_tags(parent_tag_id uuid)
RETURNS TABLE (
    id uuid,
    name text,
    level integer,
    path text
) AS $$
BEGIN
    RETURN QUERY
    WITH RECURSIVE descendants AS (
        SELECT 
            t.id,
            t.name,
            0 as level,
            t.name as path
        FROM tags t
        WHERE t.id = parent_tag_id
        
        UNION ALL
        
        SELECT 
            t.id,
            t.name,
            d.level + 1,
            d.path || '/' || t.name
        FROM tags t
        INNER JOIN descendants d ON t.parent_id = d.id
    )
    SELECT d.id, d.name, d.level, d.path
    FROM descendants d
    WHERE d.id != parent_tag_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant necessary permissions
GRANT SELECT ON tag_hierarchy TO authenticated;
GRANT EXECUTE ON FUNCTION get_tag_usage_count(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION get_descendant_tags(uuid) TO authenticated;