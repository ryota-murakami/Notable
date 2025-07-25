-- Migration: Create Yjs Documents Table for Real-time Collaboration
-- Created: 2025-07-25
-- Description: This migration creates the infrastructure for storing Yjs document states
--              to enable persistent real-time collaborative editing.

-- Create table for storing Yjs document states
CREATE TABLE IF NOT EXISTS yjs_documents (
  id BIGSERIAL PRIMARY KEY,
  note_id TEXT NOT NULL UNIQUE REFERENCES notes(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  state JSONB NOT NULL, -- Stored as JSON array of bytes from Yjs encodeStateAsUpdate
  version INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_yjs_documents_note_id ON yjs_documents(note_id);
CREATE INDEX IF NOT EXISTS idx_yjs_documents_updated_at ON yjs_documents(updated_at);
CREATE INDEX IF NOT EXISTS idx_yjs_documents_user_id ON yjs_documents(user_id);

-- Enable RLS for security
ALTER TABLE yjs_documents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can read Yjs documents for notes they have access to
CREATE POLICY "Users can read yjs documents for accessible notes" ON yjs_documents
  FOR SELECT USING (
    note_id IN (
      SELECT id FROM notes 
      WHERE user_id = auth.uid()::text 
      OR is_public = true
    )
  );

-- Users can insert/update Yjs documents for their own notes
CREATE POLICY "Users can write yjs documents for their notes" ON yjs_documents
  FOR ALL USING (
    note_id IN (
      SELECT id FROM notes 
      WHERE user_id = auth.uid()::text
    )
  );

-- Function to update updated_at automatically
CREATE OR REPLACE FUNCTION update_yjs_documents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS trigger_update_yjs_documents_updated_at ON yjs_documents;
CREATE TRIGGER trigger_update_yjs_documents_updated_at
  BEFORE UPDATE ON yjs_documents
  FOR EACH ROW
  EXECUTE FUNCTION update_yjs_documents_updated_at();

-- Enable real-time for Yjs documents table
ALTER PUBLICATION supabase_realtime ADD TABLE yjs_documents;

-- Create function to handle Yjs document updates
CREATE OR REPLACE FUNCTION handle_yjs_document_update()
RETURNS TRIGGER AS $$
BEGIN
    -- Ensure the updated_at timestamp is current
    NEW.updated_at = NOW();
    
    -- Increment version number
    IF TG_OP = 'UPDATE' THEN
        NEW.version = OLD.version + 1;
    ELSE
        NEW.version = 1;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for Yjs document updates
CREATE TRIGGER on_yjs_document_update
    BEFORE INSERT OR UPDATE ON yjs_documents
    FOR EACH ROW
    EXECUTE FUNCTION handle_yjs_document_update();

-- Create function to broadcast Yjs document changes
CREATE OR REPLACE FUNCTION broadcast_yjs_document_change()
RETURNS TRIGGER AS $$
BEGIN
    -- For INSERT operations
    IF TG_OP = 'INSERT' THEN
        PERFORM pg_notify('yjs_document_changes', json_build_object(
            'operation', TG_OP,
            'record', json_build_object(
                'note_id', NEW.note_id,
                'user_id', NEW.user_id,
                'version', NEW.version,
                'updated_at', NEW.updated_at
            )
        )::text);
        RETURN NEW;
    END IF;
    
    -- For UPDATE operations
    IF TG_OP = 'UPDATE' THEN
        PERFORM pg_notify('yjs_document_changes', json_build_object(
            'operation', TG_OP,
            'record', json_build_object(
                'note_id', NEW.note_id,
                'user_id', NEW.user_id,
                'version', NEW.version,
                'updated_at', NEW.updated_at
            ),
            'old_record', json_build_object(
                'note_id', OLD.note_id,
                'user_id', OLD.user_id,
                'version', OLD.version,
                'updated_at', OLD.updated_at
            )
        )::text);
        RETURN NEW;
    END IF;
    
    -- For DELETE operations
    IF TG_OP = 'DELETE' THEN
        PERFORM pg_notify('yjs_document_changes', json_build_object(
            'operation', TG_OP,
            'record', json_build_object(
                'note_id', OLD.note_id,
                'user_id', OLD.user_id,
                'version', OLD.version,
                'updated_at', OLD.updated_at
            )
        )::text);
        RETURN OLD;
    END IF;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for broadcasting Yjs document changes
CREATE TRIGGER on_yjs_document_change_broadcast
    AFTER INSERT OR UPDATE OR DELETE ON yjs_documents
    FOR EACH ROW
    EXECUTE FUNCTION broadcast_yjs_document_change();

-- Create an index for better real-time performance
CREATE INDEX IF NOT EXISTS idx_yjs_documents_note_version 
ON yjs_documents(note_id, version DESC);

-- Create a view for Yjs document metadata (without the large state field)
CREATE OR REPLACE VIEW yjs_document_metadata AS
SELECT 
    id,
    note_id,
    user_id,
    version,
    created_at,
    updated_at,
    octet_length(state::text) as state_size_bytes
FROM yjs_documents;

-- Add comment explaining the table purpose
COMMENT ON TABLE yjs_documents IS 'Stores Yjs document states for real-time collaborative editing. The state field contains the serialized Yjs document state as a JSON array of bytes.';
COMMENT ON COLUMN yjs_documents.state IS 'Serialized Yjs document state stored as JSON array of bytes from encodeStateAsUpdate()';
COMMENT ON COLUMN yjs_documents.version IS 'Document version number, incremented on each update';
COMMENT ON VIEW yjs_document_metadata IS 'Metadata view of Yjs documents without the large state field for efficient querying';