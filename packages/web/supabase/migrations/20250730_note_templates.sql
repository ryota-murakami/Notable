-- Note Templates System Migration
-- Creates tables and functions for note template management

-- Create note_templates table
CREATE TABLE note_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL DEFAULT 'general',
    tags TEXT[] DEFAULT '{}',
    
    -- Template content (Plate.js format)
    title_template VARCHAR(500) NOT NULL,
    content_template JSONB NOT NULL,
    
    -- Template metadata
    variables JSONB DEFAULT '{}', -- Variables that can be substituted (e.g., {{date}}, {{time}})
    is_built_in BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT false,
    usage_count INTEGER DEFAULT 0,
    
    -- Template ownership
    created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    organization_id UUID,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    
    -- Constraints
    CONSTRAINT valid_category CHECK (category IN (
        'general', 'meeting', 'planning', 'journal', 'review', 
        'task', 'documentation', 'creative', 'education', 'business'
    ))
);

-- Create indexes for performance
CREATE INDEX idx_note_templates_category ON note_templates(category);
CREATE INDEX idx_note_templates_created_by ON note_templates(created_by);
CREATE INDEX idx_note_templates_is_built_in ON note_templates(is_built_in);
CREATE INDEX idx_note_templates_is_public ON note_templates(is_public);
CREATE INDEX idx_note_templates_usage_count ON note_templates(usage_count DESC);
CREATE INDEX idx_note_templates_tags ON note_templates USING GIN(tags);

-- Create template_usage table for tracking usage analytics
CREATE TABLE template_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id UUID REFERENCES note_templates(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    note_id UUID, -- Reference to created note (optional)
    
    -- Usage context
    usage_type VARCHAR(50) DEFAULT 'create_note',
    metadata JSONB DEFAULT '{}',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    
    CONSTRAINT valid_usage_type CHECK (usage_type IN (
        'create_note', 'preview', 'duplicate', 'share'
    ))
);

-- Create indexes for template_usage
CREATE INDEX idx_template_usage_template_id ON template_usage(template_id);
CREATE INDEX idx_template_usage_user_id ON template_usage(user_id);
CREATE INDEX idx_template_usage_created_at ON template_usage(created_at DESC);

-- Create function to update template usage count
CREATE OR REPLACE FUNCTION increment_template_usage(template_uuid UUID)
RETURNS void AS $$
BEGIN
    UPDATE note_templates 
    SET usage_count = usage_count + 1,
        updated_at = now()
    WHERE id = template_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to get popular templates
CREATE OR REPLACE FUNCTION get_popular_templates(
    p_category VARCHAR(100) DEFAULT NULL,
    p_limit INTEGER DEFAULT 20
)
RETURNS TABLE (
    id UUID,
    name VARCHAR(255),
    description TEXT,
    category VARCHAR(100),
    tags TEXT[],
    title_template VARCHAR(500),
    content_template JSONB,
    variables JSONB,
    is_built_in BOOLEAN,
    usage_count INTEGER,
    created_by UUID,
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        nt.id,
        nt.name,
        nt.description,
        nt.category,
        nt.tags,
        nt.title_template,
        nt.content_template,
        nt.variables,
        nt.is_built_in,
        nt.usage_count,
        nt.created_by,
        nt.created_at
    FROM note_templates nt
    WHERE 
        (p_category IS NULL OR nt.category = p_category)
        AND (nt.is_public = true OR nt.created_by = auth.uid())
    ORDER BY nt.usage_count DESC, nt.created_at DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to search templates
CREATE OR REPLACE FUNCTION search_templates(
    p_query TEXT,
    p_category VARCHAR(100) DEFAULT NULL,
    p_limit INTEGER DEFAULT 20
)
RETURNS TABLE (
    id UUID,
    name VARCHAR(255),
    description TEXT,
    category VARCHAR(100),
    tags TEXT[],
    title_template VARCHAR(500),
    content_template JSONB,
    variables JSONB,
    is_built_in BOOLEAN,
    usage_count INTEGER,
    created_by UUID,
    created_at TIMESTAMP WITH TIME ZONE,
    search_rank REAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        nt.id,
        nt.name,
        nt.description,
        nt.category,
        nt.tags,
        nt.title_template,
        nt.content_template,
        nt.variables,
        nt.is_built_in,
        nt.usage_count,
        nt.created_by,
        nt.created_at,
        ts_rank(
            to_tsvector('english', nt.name || ' ' || COALESCE(nt.description, '') || ' ' || array_to_string(nt.tags, ' ')),
            plainto_tsquery('english', p_query)
        ) as search_rank
    FROM note_templates nt
    WHERE 
        (p_category IS NULL OR nt.category = p_category)
        AND (nt.is_public = true OR nt.created_by = auth.uid())
        AND (
            to_tsvector('english', nt.name || ' ' || COALESCE(nt.description, '') || ' ' || array_to_string(nt.tags, ' '))
            @@ plainto_tsquery('english', p_query)
        )
    ORDER BY search_rank DESC, nt.usage_count DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to create note from template
CREATE OR REPLACE FUNCTION create_note_from_template(
    p_template_id UUID,
    p_variables JSONB DEFAULT '{}'::jsonb
)
RETURNS TABLE (
    title TEXT,
    content JSONB
) AS $$
DECLARE
    template_record RECORD;
    processed_title TEXT;
    processed_content JSONB;
    var_name TEXT;
    var_value TEXT;
BEGIN
    -- Get template
    SELECT * INTO template_record
    FROM note_templates 
    WHERE id = p_template_id
      AND (is_public = true OR created_by = auth.uid());
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Template not found or access denied';
    END IF;
    
    -- Start with template content
    processed_title := template_record.title_template;
    processed_content := template_record.content_template;
    
    -- Add built-in variables
    p_variables := p_variables || jsonb_build_object(
        'date', to_char(now(), 'YYYY-MM-DD'),
        'time', to_char(now(), 'HH24:MI'),
        'datetime', to_char(now(), 'YYYY-MM-DD HH24:MI'),
        'user', COALESCE((
            SELECT raw_user_meta_data->>'full_name' 
            FROM auth.users 
            WHERE id = auth.uid()
        ), 'User')
    );
    
    -- Process variable substitution
    FOR var_name, var_value IN SELECT * FROM jsonb_each_text(p_variables)
    LOOP
        processed_title := replace(processed_title, '{{' || var_name || '}}', var_value);
        processed_content := replace(processed_content::text, '{{' || var_name || '}}', var_value)::jsonb;
    END LOOP;
    
    -- Increment usage count
    PERFORM increment_template_usage(p_template_id);
    
    -- Return processed template
    RETURN QUERY SELECT processed_title, processed_content;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS
ALTER TABLE note_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for note_templates
CREATE POLICY "Users can view public templates and their own templates" ON note_templates
    FOR SELECT USING (
        is_public = true 
        OR created_by = auth.uid()
    );

CREATE POLICY "Users can create their own templates" ON note_templates
    FOR INSERT WITH CHECK (created_by = auth.uid());

CREATE POLICY "Users can update their own templates" ON note_templates
    FOR UPDATE USING (created_by = auth.uid());

CREATE POLICY "Users can delete their own templates" ON note_templates
    FOR DELETE USING (created_by = auth.uid());

-- RLS Policies for template_usage
CREATE POLICY "Users can view their own template usage" ON template_usage
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create their own template usage records" ON template_usage
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Insert built-in templates
INSERT INTO note_templates (
    name, description, category, tags, title_template, content_template, 
    variables, is_built_in, is_public, created_by
) VALUES
-- Meeting Notes Template
(
    'Meeting Notes',
    'Standard template for meeting documentation with agenda, attendees, and action items',
    'meeting',
    ARRAY['meeting', 'notes', 'agenda', 'action-items'],
    'Meeting Notes - {{date}}',
    '[
        {
            "type": "h1",
            "children": [{"text": "Meeting Notes - {{date}}"}]
        },
        {
            "type": "h2", 
            "children": [{"text": "Meeting Details"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "Date: {{datetime}}"}]},
                {"type": "li", "children": [{"text": "Duration: "}]},
                {"type": "li", "children": [{"text": "Location: "}]},
                {"type": "li", "children": [{"text": "Meeting Type: "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Attendees"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "{{user}} (Host)"}]},
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Agenda"}]
        },
        {
            "type": "ol",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Discussion Notes"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Action Items"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[ ] "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Next Steps"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        }
    ]'::jsonb,
    '{"date": "Current date", "datetime": "Current date and time", "user": "Current user name"}'::jsonb,
    true,
    true,
    NULL
),

-- Daily Journal Template
(
    'Daily Journal',
    'Personal daily reflection template with mood tracking, goals, and gratitude',
    'journal',
    ARRAY['journal', 'daily', 'reflection', 'mood', 'gratitude'],
    'Daily Journal - {{date}}',
    '[
        {
            "type": "h1",
            "children": [{"text": "Daily Journal - {{date}}"}]
        },
        {
            "type": "h2",
            "children": [{"text": "Mood & Energy"}]
        },
        {
            "type": "p",
            "children": [{"text": "Mood: "}]
        },
        {
            "type": "p",
            "children": [{"text": "Energy Level (1-10): "}]
        },
        {
            "type": "h2",
            "children": [{"text": "Today''s Priorities"}]
        },
        {
            "type": "ol",
            "children": [
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "What Happened Today"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Wins & Accomplishments"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Challenges & Lessons"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Gratitude"}]
        },
        {
            "type": "p",
            "children": [{"text": "Three things I''m grateful for:"}]
        },
        {
            "type": "ol",
            "children": [
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Tomorrow''s Focus"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        }
    ]'::jsonb,
    '{"date": "Current date", "user": "Current user name"}'::jsonb,
    true,
    true,
    NULL
),

-- Project Planning Template  
(
    'Project Planning',
    'Comprehensive project planning template with objectives, timeline, and resources',
    'planning',
    ARRAY['project', 'planning', 'objectives', 'timeline', 'resources'],
    'Project Plan: {{project_name}}',
    '[
        {
            "type": "h1",
            "children": [{"text": "Project Plan: {{project_name}}"}]
        },
        {
            "type": "h2",
            "children": [{"text": "Project Overview"}]
        },
        {
            "type": "p",
            "children": [{"text": "Start Date: {{date}}"}]
        },
        {
            "type": "p",
            "children": [{"text": "Project Manager: {{user}}"}]
        },
        {
            "type": "p",
            "children": [{"text": "Status: Planning"}]
        },
        {
            "type": "h2",
            "children": [{"text": "Project Description"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Objectives & Goals"}]
        },
        {
            "type": "h3",
            "children": [{"text": "Primary Objectives"}]
        },
        {
            "type": "ol",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h3",
            "children": [{"text": "Success Criteria"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Scope"}]
        },
        {
            "type": "h3",
            "children": [{"text": "In Scope"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h3",
            "children": [{"text": "Out of Scope"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Timeline & Milestones"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Resources Required"}]
        },
        {
            "type": "h3",
            "children": [{"text": "Team Members"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h3",
            "children": [{"text": "Budget & Tools"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Risk Assessment"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Next Actions"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[ ] "}]}
            ]
        }
    ]'::jsonb,
    '{"date": "Current date", "user": "Current user name", "project_name": "Project name"}'::jsonb,
    true,
    true,
    NULL
),

-- Task List Template
(
    'Task List',
    'Simple task management template with priorities and due dates',
    'task',
    ARRAY['tasks', 'todo', 'checklist', 'productivity'],
    'Task List - {{date}}',
    '[
        {
            "type": "h1",
            "children": [{"text": "Task List - {{date}}"}]
        },
        {
            "type": "h2",
            "children": [{"text": "High Priority"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[ ] "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Medium Priority"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[ ] "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Low Priority"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[ ] "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Completed Today"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "[x] "}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Notes"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        }
    ]'::jsonb,
    '{"date": "Current date"}'::jsonb,
    true,
    true,
    NULL
),

-- Book Review Template  
(
    'Book Review',
    'Template for documenting book reviews with ratings, summary, and key takeaways',
    'review',
    ARRAY['book', 'review', 'reading', 'notes', 'summary'],
    'Book Review: {{book_title}}',
    '[
        {
            "type": "h1", 
            "children": [{"text": "Book Review: {{book_title}}"}]
        },
        {
            "type": "h2",
            "children": [{"text": "Book Information"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "Author: {{author}}"}]},
                {"type": "li", "children": [{"text": "Publication Year: "}]},
                {"type": "li", "children": [{"text": "Genre: "}]},
                {"type": "li", "children": [{"text": "Pages: "}]},
                {"type": "li", "children": [{"text": "Date Read: {{date}}"}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Rating"}]
        },
        {
            "type": "p",
            "children": [{"text": "Overall Rating: ⭐⭐⭐⭐⭐ (0/5)"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": "Writing Quality: /5"}]},
                {"type": "li", "children": [{"text": "Content/Ideas: /5"}]},
                {"type": "li", "children": [{"text": "Readability: /5"}]},
                {"type": "li", "children": [{"text": "Would Recommend: Yes/No"}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Summary"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Key Takeaways"}]
        },
        {
            "type": "ol",
            "children": [
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]},
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Favorite Quotes"}]
        },
        {
            "type": "blockquote",
            "children": [{"text": ""}]
        },
        {
            "type": "h2",
            "children": [{"text": "Discussion Points"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Related Books/Topics"}]
        },
        {
            "type": "ul",
            "children": [
                {"type": "li", "children": [{"text": ""}]}
            ]
        },
        {
            "type": "h2",
            "children": [{"text": "Personal Reflection"}]
        },
        {
            "type": "p",
            "children": [{"text": "How does this book relate to my life/work/interests?"}]
        },
        {
            "type": "p",
            "children": [{"text": ""}]
        }
    ]'::jsonb,
    '{"date": "Current date", "book_title": "Book title", "author": "Author name"}'::jsonb,
    true,
    true,
    NULL
);

-- Update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_note_templates_updated_at 
    BEFORE UPDATE ON note_templates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();