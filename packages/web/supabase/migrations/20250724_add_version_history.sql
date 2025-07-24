-- Create note_versions table to store version history
CREATE TABLE note_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    note_id UUID NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    version_number INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content JSONB NOT NULL DEFAULT '{}',
    version_name VARCHAR(255), -- Optional name for important versions
    version_message TEXT, -- Optional message/description for the version
    created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_milestone BOOLEAN DEFAULT FALSE, -- Mark important versions
    metadata JSONB DEFAULT '{}', -- Store additional metadata (word count, etc.)
    UNIQUE(note_id, version_number)
);

-- Create indexes for better performance
CREATE INDEX idx_note_versions_note_id ON note_versions(note_id);
CREATE INDEX idx_note_versions_created_at ON note_versions(created_at);
CREATE INDEX idx_note_versions_created_by ON note_versions(created_by);

-- Add version tracking fields to notes table
ALTER TABLE notes 
ADD COLUMN IF NOT EXISTS current_version INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS version_count INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS last_version_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create function to automatically create version on note update
CREATE OR REPLACE FUNCTION create_note_version()
RETURNS TRIGGER AS $$
DECLARE
    new_version_number INTEGER;
    content_changed BOOLEAN;
    title_changed BOOLEAN;
BEGIN
    -- Check if content or title actually changed
    content_changed := OLD.content IS DISTINCT FROM NEW.content;
    title_changed := OLD.title IS DISTINCT FROM NEW.title;
    
    -- Only create version if content or title changed
    IF content_changed OR title_changed THEN
        -- Get the next version number
        new_version_number := COALESCE(NEW.current_version, 1) + 1;
        
        -- Insert the previous version into history
        INSERT INTO note_versions (
            note_id,
            version_number,
            title,
            content,
            created_by,
            metadata
        ) VALUES (
            NEW.id,
            OLD.current_version,
            OLD.title,
            OLD.content,
            NEW.user_id,
            jsonb_build_object(
                'word_count', COALESCE(array_length(string_to_array(OLD.content->>'text', ' '), 1), 0),
                'character_count', COALESCE(length(OLD.content->>'text'), 0),
                'previous_updated_at', OLD.updated_at
            )
        );
        
        -- Update version tracking fields
        NEW.current_version := new_version_number;
        NEW.version_count := new_version_number;
        NEW.last_version_at := NOW();
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to track versions on note updates
CREATE TRIGGER track_note_versions
    BEFORE UPDATE ON notes
    FOR EACH ROW
    EXECUTE FUNCTION create_note_version();

-- Create function to restore a note to a specific version
CREATE OR REPLACE FUNCTION restore_note_version(
    p_note_id UUID,
    p_version_number INTEGER,
    p_user_id UUID
) RETURNS BOOLEAN AS $$
DECLARE
    v_version note_versions%ROWTYPE;
    v_current_version INTEGER;
BEGIN
    -- Get the version to restore
    SELECT * INTO v_version
    FROM note_versions
    WHERE note_id = p_note_id AND version_number = p_version_number;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Version % not found for note %', p_version_number, p_note_id;
    END IF;
    
    -- Get current version number
    SELECT current_version INTO v_current_version
    FROM notes
    WHERE id = p_note_id;
    
    
    -- Update the note with the restored version
    UPDATE notes
    SET 
        title = v_version.title,
        content = v_version.content,
        current_version = v_current_version + 1,
        version_count = v_current_version + 1,
        last_version_at = NOW()
    WHERE id = p_note_id;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

-- Create function to get version history for a note
CREATE OR REPLACE FUNCTION get_note_version_history(
    p_note_id UUID,
    p_limit INTEGER DEFAULT 50,
    p_offset INTEGER DEFAULT 0
) RETURNS TABLE (
    version_id UUID,
    version_number INTEGER,
    title VARCHAR(255),
    version_name VARCHAR(255),
    version_message TEXT,
    created_by UUID,
    created_by_name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE,
    is_milestone BOOLEAN,
    word_count INTEGER,
    character_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        nv.id,
        nv.version_number,
        nv.title,
        nv.version_name,
        nv.version_message,
        nv.created_by,
        u.name,
        nv.created_at,
        nv.is_milestone,
        COALESCE((nv.metadata->>'word_count')::INTEGER, 0),
        COALESCE((nv.metadata->>'character_count')::INTEGER, 0)
    FROM note_versions nv
    LEFT JOIN users u ON nv.created_by = u.id
    WHERE nv.note_id = p_note_id
    ORDER BY nv.version_number DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Create function to compare two versions
CREATE OR REPLACE FUNCTION compare_note_versions(
    p_note_id UUID,
    p_version_1 INTEGER,
    p_version_2 INTEGER
) RETURNS TABLE (
    version_1_data JSONB,
    version_2_data JSONB
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT jsonb_build_object(
            'version_number', version_number,
            'title', title,
            'content', content,
            'created_at', created_at,
            'created_by', created_by
        ) FROM note_versions 
        WHERE note_id = p_note_id AND version_number = p_version_1),
        (SELECT jsonb_build_object(
            'version_number', version_number,
            'title', title,
            'content', content,
            'created_at', created_at,
            'created_by', created_by
        ) FROM note_versions 
        WHERE note_id = p_note_id AND version_number = p_version_2);
END;
$$ LANGUAGE plpgsql;

-- Create RLS policies for note_versions
ALTER TABLE note_versions ENABLE ROW LEVEL SECURITY;

-- Users can view version history for their own notes
CREATE POLICY "Users can view their note versions" ON note_versions
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE notes.id = note_versions.note_id 
            AND notes.user_id = auth.uid()
        )
    );

-- Users can create versions for their own notes (through trigger)
CREATE POLICY "Users can create versions for their notes" ON note_versions
    FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE notes.id = note_versions.note_id 
            AND notes.user_id = auth.uid()
        )
    );

-- Create function to clean up old versions (keep last N versions)
CREATE OR REPLACE FUNCTION cleanup_old_versions(
    p_note_id UUID,
    p_keep_count INTEGER DEFAULT 30
) RETURNS INTEGER AS $$
DECLARE
    v_deleted_count INTEGER;
BEGIN
    WITH versions_to_delete AS (
        SELECT id
        FROM note_versions
        WHERE note_id = p_note_id
        AND is_milestone = FALSE -- Never delete milestone versions
        ORDER BY version_number DESC
        OFFSET p_keep_count
    )
    DELETE FROM note_versions
    WHERE id IN (SELECT id FROM versions_to_delete);
    
    GET DIAGNOSTICS v_deleted_count = ROW_COUNT;
    RETURN v_deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Add comment
COMMENT ON TABLE note_versions IS 'Stores version history for notes with efficient diff storage';
COMMENT ON FUNCTION restore_note_version IS 'Restores a note to a specific version from history';
COMMENT ON FUNCTION get_note_version_history IS 'Retrieves paginated version history for a note';
COMMENT ON FUNCTION compare_note_versions IS 'Compares two versions of a note for diff display';
COMMENT ON FUNCTION cleanup_old_versions IS 'Removes old non-milestone versions to save storage';

-- Deny UPDATE operations on note_versions
CREATE POLICY "No updates to note_versions" ON note_versions
    FOR UPDATE USING (false);

-- Deny DELETE operations on note_versions
CREATE POLICY "No deletes from note_versions" ON note_versions
    FOR DELETE USING (false);