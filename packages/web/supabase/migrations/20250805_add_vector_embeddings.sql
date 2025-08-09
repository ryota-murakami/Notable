-- Enable pgvector extension for semantic search
CREATE EXTENSION IF NOT EXISTS vector;

-- Add embedding column to notes table
ALTER TABLE public.notes
ADD COLUMN IF NOT EXISTS embedding vector(1536);

-- Create index for fast similarity search
CREATE INDEX IF NOT EXISTS notes_embedding_idx 
ON public.notes 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create a function to search notes by embedding similarity
CREATE OR REPLACE FUNCTION search_notes_by_embedding(
  query_embedding vector,
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10,
  user_id uuid DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  title text,
  content text,
  similarity float,
  created_at timestamptz,
  updated_at timestamptz,
  tags jsonb
)
LANGUAGE sql STABLE
AS $$
  SELECT 
    n.id,
    n.title,
    n.content,
    1 - (n.embedding <=> query_embedding) AS similarity,
    n.created_at,
    n.updated_at,
    COALESCE(
      jsonb_agg(
        jsonb_build_object(
          'id', t.id,
          'name', t.name,
          'color', t.color
        )
      ) FILTER (WHERE t.id IS NOT NULL),
      '[]'::jsonb
    ) AS tags
  FROM notes n
  LEFT JOIN note_tags nt ON n.id = nt.note_id
  LEFT JOIN tags t ON nt.tag_id = t.id
  WHERE 
    n.embedding IS NOT NULL
    AND (user_id IS NULL OR n.user_id = user_id)
    AND (1 - (n.embedding <=> query_embedding)) > match_threshold
  GROUP BY n.id
  ORDER BY similarity DESC
  LIMIT match_count;
$$;

-- Create a table to store query embeddings for analytics
CREATE TABLE IF NOT EXISTS public.search_queries (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  query text NOT NULL,
  query_embedding vector(1536),
  results_count int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Add RLS policies for search_queries table
ALTER TABLE public.search_queries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own search queries"
  ON public.search_queries FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own search queries"
  ON public.search_queries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create index on search_queries
CREATE INDEX IF NOT EXISTS search_queries_user_id_idx ON public.search_queries(user_id);
CREATE INDEX IF NOT EXISTS search_queries_created_at_idx ON public.search_queries(created_at DESC);

-- Comment on the new columns and functions
COMMENT ON COLUMN public.notes.embedding IS 'Vector embedding for semantic search using OpenAI text-embedding-3-small model';
COMMENT ON FUNCTION search_notes_by_embedding IS 'Search notes by semantic similarity using vector embeddings';
COMMENT ON TABLE public.search_queries IS 'Stores search queries and their embeddings for analytics and improving search';