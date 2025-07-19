-- Enable real-time for notes table
ALTER PUBLICATION supabase_realtime ADD TABLE notes;

-- Enable real-time for folders table (for future use)
ALTER PUBLICATION supabase_realtime ADD TABLE folders;

-- Enable real-time for tags table (for future use)
ALTER PUBLICATION supabase_realtime ADD TABLE tags;

-- Enable real-time for note_tags table (for future use)
ALTER PUBLICATION supabase_realtime ADD TABLE note_tags;

-- Create a function to handle real-time note updates
CREATE OR REPLACE FUNCTION handle_note_update()
RETURNS TRIGGER AS $$
BEGIN
    -- Ensure the updated_at timestamp is current
    NEW.updated_at = NOW();
    
    -- Log the update for debugging (optional)
    -- INSERT INTO note_update_log (note_id, user_id, action, created_at)
    -- VALUES (NEW.id, NEW.user_id, 'UPDATE', NOW());
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for real-time note updates
CREATE TRIGGER on_note_update_realtime
    BEFORE UPDATE ON notes
    FOR EACH ROW
    EXECUTE FUNCTION handle_note_update();

-- Create a function to broadcast note changes
CREATE OR REPLACE FUNCTION broadcast_note_change()
RETURNS TRIGGER AS $$
BEGIN
    -- For INSERT operations
    IF TG_OP = 'INSERT' THEN
        PERFORM pg_notify('note_changes', json_build_object(
            'operation', TG_OP,
            'record', row_to_json(NEW),
            'user_id', NEW.user_id
        )::text);
        RETURN NEW;
    END IF;
    
    -- For UPDATE operations
    IF TG_OP = 'UPDATE' THEN
        PERFORM pg_notify('note_changes', json_build_object(
            'operation', TG_OP,
            'record', row_to_json(NEW),
            'old_record', row_to_json(OLD),
            'user_id', NEW.user_id
        )::text);
        RETURN NEW;
    END IF;
    
    -- For DELETE operations
    IF TG_OP = 'DELETE' THEN
        PERFORM pg_notify('note_changes', json_build_object(
            'operation', TG_OP,
            'record', row_to_json(OLD),
            'user_id', OLD.user_id
        )::text);
        RETURN OLD;
    END IF;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for broadcasting note changes
CREATE TRIGGER on_note_change_broadcast
    AFTER INSERT OR UPDATE OR DELETE ON notes
    FOR EACH ROW
    EXECUTE FUNCTION broadcast_note_change();

-- Create an index for better real-time performance
CREATE INDEX IF NOT EXISTS idx_notes_user_updated 
ON notes(user_id, updated_at DESC) 
WHERE deleted_at IS NULL;

-- Create a view for real-time note updates (with related data)
CREATE OR REPLACE VIEW note_updates AS
SELECT 
    n.id,
    n.title,
    n.content,
    n.user_id,
    n.folder_id,
    n.is_public,
    n.created_at,
    n.updated_at,
    n.deleted_at,
    f.name as folder_name,
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'id', t.id,
                'name', t.name,
                'color', t.color
            )
        ) FILTER (WHERE t.id IS NOT NULL),
        '[]'::json
    ) as tags
FROM notes n
LEFT JOIN folders f ON n.folder_id = f.id
LEFT JOIN note_tags nt ON n.id = nt.note_id
LEFT JOIN tags t ON nt.tag_id = t.id
WHERE n.deleted_at IS NULL
GROUP BY n.id, n.title, n.content, n.user_id, n.folder_id, n.is_public, n.created_at, n.updated_at, n.deleted_at, f.name;

-- Enable RLS on the view
ALTER VIEW note_updates ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for the view
CREATE POLICY "Users can view own note updates" ON note_updates
    FOR SELECT USING (auth.uid() = user_id);