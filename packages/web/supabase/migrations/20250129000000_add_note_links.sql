-- Add note_links table for graph visualization
CREATE TABLE IF NOT EXISTS note_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    from_note_id UUID NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    to_note_id UUID NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    anchor_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(from_note_id, to_note_id, user_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_note_links_from_note_id ON note_links(from_note_id);
CREATE INDEX IF NOT EXISTS idx_note_links_to_note_id ON note_links(to_note_id);
CREATE INDEX IF NOT EXISTS idx_note_links_user_id ON note_links(user_id);

-- Add updated_at trigger
CREATE TRIGGER update_note_links_updated_at BEFORE UPDATE ON note_links
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Set up Row Level Security (RLS)
ALTER TABLE note_links ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own note links" ON note_links
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create note links" ON note_links
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own note links" ON note_links
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own note links" ON note_links
    FOR DELETE USING (auth.uid() = user_id);