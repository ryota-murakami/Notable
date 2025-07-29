-- Create note_links table for bi-directional linking
CREATE TABLE IF NOT EXISTS note_links (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  from_note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
  to_note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
  anchor_text text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  
  -- Ensure unique links between notes
  UNIQUE(from_note_id, to_note_id, anchor_text)
);

-- Create indexes for performance
CREATE INDEX idx_note_links_from_note_id ON note_links(from_note_id);
CREATE INDEX idx_note_links_to_note_id ON note_links(to_note_id);
CREATE INDEX idx_note_links_user_id ON note_links(user_id);

-- Enable RLS
ALTER TABLE note_links ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own note links" ON note_links
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create their own note links" ON note_links
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own note links" ON note_links
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own note links" ON note_links
  FOR DELETE USING (user_id = auth.uid());