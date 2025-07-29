-- Note Templates & Templating Engine System
-- Issue #263: Comprehensive templating system for productivity and structured note creation
-- Target: Notion-level template functionality with dynamic variables and rich content

-- ==========================================
-- 1. CORE TEMPLATES SYSTEM
-- ==========================================

-- Main templates table
CREATE TABLE IF NOT EXISTS templates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    category text NOT NULL DEFAULT 'general',
    content jsonb NOT NULL, -- Template structure with variables and formatting
    thumbnail text, -- Base64 encoded preview image or URL
    
    -- Template metadata
    is_public boolean DEFAULT false,
    is_system boolean DEFAULT false, -- Built-in templates
    version integer DEFAULT 1,
    
    -- Ownership and permissions
    created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    
    -- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    
    -- Usage statistics
    usage_count integer DEFAULT 0,
    rating numeric(3,2) DEFAULT 0.0, -- Average rating 0.00-5.00
    rating_count integer DEFAULT 0,
    
    -- Constraints
    CONSTRAINT templates_name_length CHECK (length(trim(name)) >= 1 AND length(name) <= 100),
    CONSTRAINT templates_description_length CHECK (length(description) <= 500),
    CONSTRAINT templates_category_valid CHECK (category ~ '^[a-z][a-z0-9_-]*$'),
    CONSTRAINT templates_rating_range CHECK (rating >= 0.0 AND rating <= 5.0)
);

-- Template variables/fields table for dynamic content
CREATE TABLE IF NOT EXISTS template_variables (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id uuid NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
    
    -- Variable definition
    name text NOT NULL, -- Variable name like 'project_name', 'date', 'priority'
    label text NOT NULL, -- Display label for user
    description text, -- Help text for the variable
    
    -- Variable type and validation
    type text NOT NULL DEFAULT 'text', -- text, textarea, date, time, number, boolean, select, multi-select, user, tag, note
    default_value text, -- Default value as string (parsed based on type)
    required boolean DEFAULT false,
    
    -- Options for select/multi-select types
    options jsonb, -- Array of options like ["High", "Medium", "Low"]
    
    -- Validation rules
    validation jsonb, -- min/max for numbers, regex for text, etc.
    
    -- Display options
    placeholder text,
    help_text text,
    display_order integer DEFAULT 0,
    
    -- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    
    -- Constraints
    CONSTRAINT template_variables_name_format CHECK (name ~ '^[a-z][a-z0-9_]*$'),
    CONSTRAINT template_variables_label_length CHECK (length(trim(label)) >= 1 AND length(label) <= 100),
    CONSTRAINT template_variables_type_valid CHECK (type IN ('text', 'textarea', 'date', 'time', 'datetime', 'number', 'boolean', 'select', 'multi-select', 'user', 'tag', 'note', 'uuid', 'counter')),
    
    -- Unique variable names per template
    UNIQUE(template_id, name)
);

-- Template usage tracking for analytics
CREATE TABLE IF NOT EXISTS template_usage (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id uuid NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    note_id uuid REFERENCES notes(id) ON DELETE SET NULL, -- Reference to created note
    
    -- Usage context
    variables_used jsonb, -- Values provided for template variables
    completion_time_seconds integer, -- How long it took to fill template
    
    -- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    
    -- Analytics data
    user_agent text,
    platform text -- web, desktop, mobile
);

-- Template ratings and feedback
CREATE TABLE IF NOT EXISTS template_ratings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id uuid NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Rating and feedback
    rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment text,
    
    -- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    
    -- Unique rating per user per template
    UNIQUE(template_id, user_id)
);

-- Template categories for organization
CREATE TABLE IF NOT EXISTS template_categories (
    id text PRIMARY KEY, -- slug like 'meeting', 'project', 'personal'
    name text NOT NULL,
    description text,
    icon text, -- Icon name or emoji
    color text, -- Hex color code
    display_order integer DEFAULT 0,
    is_system boolean DEFAULT false,
    
    created_at timestamp with time zone DEFAULT now(),
    
    -- Constraints
    CONSTRAINT template_categories_id_format CHECK (id ~ '^[a-z][a-z0-9-]*$'),
    CONSTRAINT template_categories_name_length CHECK (length(trim(name)) >= 1)
);

-- ==========================================
-- 2. INDEXES FOR PERFORMANCE
-- ==========================================

-- Primary lookup indexes
CREATE INDEX IF NOT EXISTS idx_templates_category ON templates(category);
CREATE INDEX IF NOT EXISTS idx_templates_created_by ON templates(created_by);
CREATE INDEX IF NOT EXISTS idx_templates_public ON templates(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_templates_system ON templates(is_system) WHERE is_system = true;

-- Search and filtering indexes
CREATE INDEX IF NOT EXISTS idx_templates_name_search ON templates USING gin(to_tsvector('english', name));
CREATE INDEX IF NOT EXISTS idx_templates_description_search ON templates USING gin(to_tsvector('english', description));
CREATE INDEX IF NOT EXISTS idx_templates_content_search ON templates USING gin(content);

-- Usage and popularity indexes
CREATE INDEX IF NOT EXISTS idx_templates_usage_count ON templates(usage_count DESC);
CREATE INDEX IF NOT EXISTS idx_templates_rating ON templates(rating DESC) WHERE rating > 0;
CREATE INDEX IF NOT EXISTS idx_templates_updated_at ON templates(updated_at DESC);

-- Template variables indexes
CREATE INDEX IF NOT EXISTS idx_template_variables_template_id ON template_variables(template_id);
CREATE INDEX IF NOT EXISTS idx_template_variables_type ON template_variables(type);
CREATE INDEX IF NOT EXISTS idx_template_variables_order ON template_variables(template_id, display_order);

-- Usage tracking indexes
CREATE INDEX IF NOT EXISTS idx_template_usage_template_id ON template_usage(template_id);
CREATE INDEX IF NOT EXISTS idx_template_usage_user_id ON template_usage(user_id);
CREATE INDEX IF NOT EXISTS idx_template_usage_created_at ON template_usage(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_template_usage_note_id ON template_usage(note_id) WHERE note_id IS NOT NULL;

-- Rating indexes
CREATE INDEX IF NOT EXISTS idx_template_ratings_template_id ON template_ratings(template_id);
CREATE INDEX IF NOT EXISTS idx_template_ratings_user_id ON template_ratings(user_id);

-- ==========================================
-- 3. ROW LEVEL SECURITY (RLS)
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_variables ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_categories ENABLE ROW LEVEL SECURITY;

-- Templates policies
CREATE POLICY "Users can view public and system templates" ON templates
    FOR SELECT USING (is_public = true OR is_system = true OR created_by = auth.uid());

CREATE POLICY "Users can view their own templates" ON templates
    FOR SELECT USING (created_by = auth.uid());

CREATE POLICY "Users can create their own templates" ON templates
    FOR INSERT WITH CHECK (created_by = auth.uid());

CREATE POLICY "Users can update their own templates" ON templates
    FOR UPDATE USING (created_by = auth.uid());

CREATE POLICY "Users can delete their own templates" ON templates
    FOR DELETE USING (created_by = auth.uid());

-- Template variables policies (inherit from template access)
CREATE POLICY "Users can view template variables they have access to" ON template_variables
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM templates t 
            WHERE t.id = template_variables.template_id 
            AND (t.is_public = true OR t.is_system = true OR t.created_by = auth.uid())
        )
    );

CREATE POLICY "Users can manage variables for their own templates" ON template_variables
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM templates t 
            WHERE t.id = template_variables.template_id 
            AND t.created_by = auth.uid()
        )
    );

-- Template usage policies
CREATE POLICY "Users can view their own template usage" ON template_usage
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create their own template usage records" ON template_usage
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Template ratings policies
CREATE POLICY "Users can view all ratings" ON template_ratings
    FOR SELECT TO authenticated;

CREATE POLICY "Users can rate templates" ON template_ratings
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own ratings" ON template_ratings
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own ratings" ON template_ratings
    FOR DELETE USING (user_id = auth.uid());

-- Template categories policies (read-only for users)
CREATE POLICY "Anyone can view template categories" ON template_categories
    FOR SELECT TO authenticated;

-- ==========================================
-- 4. TEMPLATE PROCESSING FUNCTIONS
-- ==========================================

-- Function to create a note from a template
CREATE OR REPLACE FUNCTION create_note_from_template(
    p_template_id uuid,
    p_title text,
    p_variables jsonb DEFAULT '{}'::jsonb,
    p_user_id uuid DEFAULT auth.uid()
)
RETURNS uuid AS $$
DECLARE
    template_record templates%ROWTYPE;
    processed_content text;
    new_note_id uuid;
    variable_record template_variables%ROWTYPE;
    variable_value text;
BEGIN
    -- Get template
    SELECT * INTO template_record
    FROM templates
    WHERE id = p_template_id
    AND (is_public = true OR is_system = true OR created_by = p_user_id);
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Template not found or access denied';
    END IF;
    
    -- Process template content with variables
    processed_content := template_record.content->>'content';
    
    -- Replace system variables
    processed_content := replace(processed_content, '{{date}}', CURRENT_DATE::text);
    processed_content := replace(processed_content, '{{time}}', CURRENT_TIME::text);
    processed_content := replace(processed_content, '{{datetime}}', NOW()::text);
    processed_content := replace(processed_content, '{{user}}', COALESCE(p_user_id::text, 'Unknown User'));
    processed_content := replace(processed_content, '{{uuid}}', gen_random_uuid()::text);
    
    -- Replace user-provided variables
    FOR variable_record IN 
        SELECT * FROM template_variables 
        WHERE template_id = p_template_id 
        ORDER BY display_order
    LOOP
        variable_value := COALESCE(p_variables->>variable_record.name, variable_record.default_value, '');
        processed_content := replace(processed_content, '{{' || variable_record.name || '}}', variable_value);
    END LOOP;
    
    -- Create the note
    INSERT INTO notes (title, content, user_id, created_at, updated_at)
    VALUES (p_title, processed_content, p_user_id, NOW(), NOW())
    RETURNING id INTO new_note_id;
    
    -- Record template usage
    INSERT INTO template_usage (template_id, user_id, note_id, variables_used, created_at)
    VALUES (p_template_id, p_user_id, new_note_id, p_variables, NOW());
    
    -- Update template usage count
    UPDATE templates 
    SET usage_count = usage_count + 1, updated_at = NOW()
    WHERE id = p_template_id;
    
    RETURN new_note_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get template with variables
CREATE OR REPLACE FUNCTION get_template_with_variables(p_template_id uuid)
RETURNS jsonb AS $$
DECLARE
    result jsonb;
BEGIN
    SELECT jsonb_build_object(
        'template', row_to_json(t),
        'variables', COALESCE(
            (
                SELECT jsonb_agg(row_to_json(tv) ORDER BY tv.display_order)
                FROM template_variables tv
                WHERE tv.template_id = t.id
            ), 
            '[]'::jsonb
        )
    ) INTO result
    FROM templates t
    WHERE t.id = p_template_id
    AND (t.is_public = true OR t.is_system = true OR t.created_by = auth.uid());
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update template rating
CREATE OR REPLACE FUNCTION update_template_rating()
RETURNS TRIGGER AS $$
BEGIN
    -- Recalculate average rating and count
    UPDATE templates
    SET 
        rating = (
            SELECT COALESCE(AVG(rating), 0.0)
            FROM template_ratings
            WHERE template_id = COALESCE(NEW.template_id, OLD.template_id)
        ),
        rating_count = (
            SELECT COUNT(*)
            FROM template_ratings
            WHERE template_id = COALESCE(NEW.template_id, OLD.template_id)
        )
    WHERE id = COALESCE(NEW.template_id, OLD.template_id);
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- ==========================================
-- 5. TRIGGERS
-- ==========================================

-- Trigger to update template ratings
DROP TRIGGER IF EXISTS trigger_update_template_rating ON template_ratings;
CREATE TRIGGER trigger_update_template_rating
    AFTER INSERT OR UPDATE OR DELETE ON template_ratings
    FOR EACH ROW EXECUTE FUNCTION update_template_rating();

-- Trigger to update template updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_templates_updated_at ON templates;
CREATE TRIGGER trigger_templates_updated_at
    BEFORE UPDATE ON templates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- 6. INITIAL DATA - TEMPLATE CATEGORIES
-- ==========================================

INSERT INTO template_categories (id, name, description, icon, color, display_order, is_system) VALUES
('meeting', 'Meeting Notes', 'Templates for meetings, standups, and discussions', '📝', '#3B82F6', 1, true),
('project', 'Project Management', 'Templates for project planning and tracking', '📊', '#8B5CF6', 2, true),
('personal', 'Personal', 'Templates for journaling, goals, and personal use', '✨', '#F59E0B', 3, true),
('documentation', 'Documentation', 'Templates for technical docs and knowledge base', '📚', '#10B981', 4, true),
('task', 'Task Management', 'Templates for todos, planning, and task tracking', '✅', '#EF4444', 5, true),
('review', 'Reviews & Feedback', 'Templates for performance reviews and retrospectives', '🔍', '#6366F1', 6, true),
('creative', 'Creative Work', 'Templates for brainstorming and creative projects', '🎨', '#EC4899', 7, true),
('general', 'General', 'Miscellaneous templates for various purposes', '📄', '#6B7280', 99, true)
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- 7. GRANT PERMISSIONS
-- ==========================================

-- Grant permissions to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON templates TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON template_variables TO authenticated;
GRANT SELECT, INSERT ON template_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON template_ratings TO authenticated;
GRANT SELECT ON template_categories TO authenticated;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION create_note_from_template(uuid, text, jsonb, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION get_template_with_variables(uuid) TO authenticated;

-- ==========================================
-- 8. HELPFUL VIEWS
-- ==========================================

-- View for popular templates
CREATE OR REPLACE VIEW popular_templates AS
SELECT 
    t.*,
    tc.name as category_name,
    tc.icon as category_icon,
    tc.color as category_color,
    (
        SELECT COUNT(*) 
        FROM template_variables tv 
        WHERE tv.template_id = t.id
    ) as variable_count
FROM templates t
LEFT JOIN template_categories tc ON t.category = tc.id
WHERE t.is_public = true OR t.is_system = true
ORDER BY t.usage_count DESC, t.rating DESC, t.created_at DESC;

-- View for template usage analytics
CREATE OR REPLACE VIEW template_analytics AS
SELECT 
    t.id,
    t.name,
    t.category,
    t.usage_count,
    t.rating,
    t.rating_count,
    COUNT(tu.id) as total_uses,
    COUNT(DISTINCT tu.user_id) as unique_users,
    AVG(tu.completion_time_seconds) as avg_completion_time,
    MAX(tu.created_at) as last_used
FROM templates t
LEFT JOIN template_usage tu ON t.id = tu.template_id
GROUP BY t.id, t.name, t.category, t.usage_count, t.rating, t.rating_count
ORDER BY t.usage_count DESC;

-- Grant access to views
GRANT SELECT ON popular_templates TO authenticated;
GRANT SELECT ON template_analytics TO authenticated;

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Template system migration completed successfully!';
    RAISE NOTICE 'Features: Template creation, variables, usage tracking, ratings, categories';
    RAISE NOTICE 'Built-in categories: meeting, project, personal, documentation, task, review, creative, general';
END $$;