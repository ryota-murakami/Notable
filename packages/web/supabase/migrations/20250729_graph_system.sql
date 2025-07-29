-- =============================================
-- Notable Visual Knowledge Graph System
-- Migration: 20250729_graph_system.sql
-- Implements graph relationships, analytics, and canvas positioning
-- =============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- =============================================
-- 1. GRAPH RELATIONSHIPS CORE TABLES
-- =============================================

-- Note relationships table - stores all connections between notes
CREATE TABLE IF NOT EXISTS note_relationships (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    source_note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    target_note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    
    -- Relationship type and metadata
    relationship_type text NOT NULL DEFAULT 'reference',
    relationship_strength real NOT NULL DEFAULT 1.0,
    
    -- Relationship metadata
    relationship_data jsonb DEFAULT '{}',
    context_text text, -- Surrounding text where relationship was found
    
    -- Auto-discovery vs manual
    is_manual boolean DEFAULT false,
    discovery_method text, -- 'wikilink', 'tag', 'folder', 'template', 'similarity', 'manual'
    
    -- Timestamps and user tracking
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    created_by uuid REFERENCES auth.users(id),
    
    -- Performance and analytics
    interaction_count integer DEFAULT 0,
    last_accessed_at timestamptz,
    
    -- Constraints
    CONSTRAINT note_relationships_no_self_reference CHECK (source_note_id != target_note_id),
    CONSTRAINT note_relationships_valid_type CHECK (
        relationship_type IN (
            'reference',        -- [[Note Title]] links
            'bidirectional',    -- Two-way connections
            'hierarchy',        -- Parent/child relationships  
            'tag',             -- Shared tag connections
            'template',        -- Same template origin
            'similarity',      -- Content similarity
            'temporal',        -- Time-based relationships
            'custom'           -- User-defined relationships
        )
    ),
    CONSTRAINT note_relationships_valid_strength CHECK (
        relationship_strength >= 0.0 AND relationship_strength <= 10.0
    )
);

-- Unique constraint to prevent duplicate relationships
CREATE UNIQUE INDEX IF NOT EXISTS idx_note_relationships_unique 
ON note_relationships (source_note_id, target_note_id, relationship_type);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_note_relationships_source ON note_relationships (source_note_id);
CREATE INDEX IF NOT EXISTS idx_note_relationships_target ON note_relationships (target_note_id);
CREATE INDEX IF NOT EXISTS idx_note_relationships_type ON note_relationships (relationship_type);
CREATE INDEX IF NOT EXISTS idx_note_relationships_strength ON note_relationships (relationship_strength DESC);
CREATE INDEX IF NOT EXISTS idx_note_relationships_discovery ON note_relationships (discovery_method);
CREATE INDEX IF NOT EXISTS idx_note_relationships_created_at ON note_relationships (created_at DESC);

-- Composite indexes for common queries
CREATE INDEX IF NOT EXISTS idx_note_relationships_source_type 
ON note_relationships (source_note_id, relationship_type);
CREATE INDEX IF NOT EXISTS idx_note_relationships_strength_type 
ON note_relationships (relationship_strength DESC, relationship_type);

-- =============================================
-- 2. GRAPH CANVAS POSITIONING
-- =============================================

-- Canvas positions for spatial note arrangement
CREATE TABLE IF NOT EXISTS note_canvas_positions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    canvas_id uuid NOT NULL DEFAULT gen_random_uuid(), -- Support multiple canvases
    
    -- Spatial coordinates
    x real NOT NULL DEFAULT 0,
    y real NOT NULL DEFAULT 0,
    z real NOT NULL DEFAULT 0, -- For 3D views
    
    -- Visual properties  
    width real DEFAULT 200,
    height real DEFAULT 150,
    scale real DEFAULT 1.0,
    rotation real DEFAULT 0, -- Degrees
    
    -- Canvas metadata
    canvas_name text DEFAULT 'Default Canvas',
    canvas_metadata jsonb DEFAULT '{}',
    
    -- Visual styling
    color text,
    opacity real DEFAULT 1.0,
    is_pinned boolean DEFAULT false,
    is_hidden boolean DEFAULT false,
    
    -- Grouping and clustering
    group_id uuid,
    cluster_id text,
    
    -- Timestamps
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    created_by uuid REFERENCES auth.users(id),
    
    -- Constraints
    CONSTRAINT note_canvas_positions_valid_scale CHECK (scale > 0 AND scale <= 10),
    CONSTRAINT note_canvas_positions_valid_opacity CHECK (opacity >= 0 AND opacity <= 1),
    CONSTRAINT note_canvas_positions_valid_rotation CHECK (rotation >= -360 AND rotation <= 360)
);

-- Unique constraint: one position per note per canvas
CREATE UNIQUE INDEX IF NOT EXISTS idx_note_canvas_positions_unique 
ON note_canvas_positions (note_id, canvas_id);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_note_canvas_positions_canvas ON note_canvas_positions (canvas_id);
CREATE INDEX IF NOT EXISTS idx_note_canvas_positions_spatial ON note_canvas_positions (x, y);
CREATE INDEX IF NOT EXISTS idx_note_canvas_positions_group ON note_canvas_positions (group_id);
CREATE INDEX IF NOT EXISTS idx_note_canvas_positions_cluster ON note_canvas_positions (cluster_id);

-- =============================================
-- 3. GRAPH ANALYTICS & INSIGHTS
-- =============================================

-- Graph analytics cache for performance
CREATE TABLE IF NOT EXISTS note_graph_analytics (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id uuid NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    
    -- Centrality metrics
    degree_centrality real DEFAULT 0,
    betweenness_centrality real DEFAULT 0,
    closeness_centrality real DEFAULT 0,
    eigenvector_centrality real DEFAULT 0,
    pagerank_score real DEFAULT 0,
    
    -- Connection metrics
    inbound_connections integer DEFAULT 0,
    outbound_connections integer DEFAULT 0,
    total_connections integer DEFAULT 0,
    connection_strength_avg real DEFAULT 0,
    
    -- Clustering metrics
    clustering_coefficient real DEFAULT 0,
    local_clustering real DEFAULT 0,
    
    -- Graph position metrics
    shortest_path_avg real DEFAULT 0,
    eccentricity integer DEFAULT 0,
    
    -- Categories and classification
    hub_score real DEFAULT 0,
    authority_score real DEFAULT 0,
    is_hub boolean DEFAULT false,
    is_authority boolean DEFAULT false,
    is_isolated boolean DEFAULT true,
    
    -- Community detection
    community_id text,
    community_size integer DEFAULT 1,
    modularity_score real DEFAULT 0,
    
    -- Temporal metrics
    activity_score real DEFAULT 0,
    recency_score real DEFAULT 0,
    
    -- Cache metadata
    calculated_at timestamptz DEFAULT now(),
    calculation_version text DEFAULT '1.0',
    is_stale boolean DEFAULT false,
    
    -- Update tracking
    last_relationship_change timestamptz,
    needs_recalculation boolean DEFAULT true
);

-- Unique constraint
CREATE UNIQUE INDEX IF NOT EXISTS idx_note_graph_analytics_unique 
ON note_graph_analytics (note_id);

-- Performance indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_degree ON note_graph_analytics (degree_centrality DESC);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_pagerank ON note_graph_analytics (pagerank_score DESC);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_hub ON note_graph_analytics (hub_score DESC);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_authority ON note_graph_analytics (authority_score DESC);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_connections ON note_graph_analytics (total_connections DESC);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_community ON note_graph_analytics (community_id);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_isolated ON note_graph_analytics (is_isolated);
CREATE INDEX IF NOT EXISTS idx_note_graph_analytics_stale ON note_graph_analytics (is_stale);

-- =============================================
-- 4. GRAPH VIEWS & FILTERS
-- =============================================

-- Saved graph views and filters
CREATE TABLE IF NOT EXISTS graph_views (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- View metadata
    name text NOT NULL,
    description text,
    is_public boolean DEFAULT false,
    is_default boolean DEFAULT false,
    
    -- View configuration
    view_type text NOT NULL DEFAULT 'force', -- 'force', 'hierarchical', 'circular', 'grid', 'canvas'
    layout_algorithm text DEFAULT 'd3-force',
    
    -- Filter configuration
    filters jsonb DEFAULT '{}',
    node_filters jsonb DEFAULT '{}',
    edge_filters jsonb DEFAULT '{}',
    
    -- Visual configuration
    visual_config jsonb DEFAULT '{}',
    physics_config jsonb DEFAULT '{}',
    
    -- Canvas specific settings
    canvas_config jsonb DEFAULT '{}',
    viewport_config jsonb DEFAULT '{}',
    
    -- Query parameters
    max_nodes integer DEFAULT 500,
    max_depth integer DEFAULT 3,
    min_relationship_strength real DEFAULT 0.1,
    
    -- Timestamps
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    last_accessed_at timestamptz,
    access_count integer DEFAULT 0
);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_graph_views_user ON graph_views (user_id);
CREATE INDEX IF NOT EXISTS idx_graph_views_public ON graph_views (is_public);
CREATE INDEX IF NOT EXISTS idx_graph_views_type ON graph_views (view_type);
CREATE INDEX IF NOT EXISTS idx_graph_views_accessed ON graph_views (last_accessed_at DESC);

-- =============================================
-- 5. GRAPH INTERACTION TRACKING
-- =============================================

-- Track user interactions with the graph
CREATE TABLE IF NOT EXISTS graph_interactions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Interaction details
    interaction_type text NOT NULL,
    target_type text NOT NULL, -- 'node', 'edge', 'canvas', 'cluster'
    target_id uuid,
    
    -- Interaction data
    interaction_data jsonb DEFAULT '{}',
    
    -- Context
    session_id text,
    view_id uuid REFERENCES graph_views(id),
    
    -- Timestamps
    created_at timestamptz DEFAULT now(),
    
    -- Constraints
    CONSTRAINT graph_interactions_valid_type CHECK (
        interaction_type IN (
            'click', 'double-click', 'hover', 'drag', 'zoom', 'pan',
            'select', 'multi-select', 'context-menu', 'pin', 'unpin',
            'create-connection', 'delete-connection', 'move', 'resize'
        )
    ),
    CONSTRAINT graph_interactions_valid_target CHECK (
        target_type IN ('node', 'edge', 'canvas', 'cluster', 'group')
    )
);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_graph_interactions_user ON graph_interactions (user_id);
CREATE INDEX IF NOT EXISTS idx_graph_interactions_type ON graph_interactions (interaction_type);
CREATE INDEX IF NOT EXISTS idx_graph_interactions_target ON graph_interactions (target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_graph_interactions_created_at ON graph_interactions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_graph_interactions_session ON graph_interactions (session_id);

-- =============================================
-- 6. FUNCTIONS AND TRIGGERS
-- =============================================

-- Function to update analytics when relationships change
CREATE OR REPLACE FUNCTION update_graph_analytics_trigger()
RETURNS trigger AS $$
BEGIN
    -- Mark related analytics as stale
    UPDATE note_graph_analytics 
    SET is_stale = true, 
        needs_recalculation = true,
        last_relationship_change = now()
    WHERE note_id IN (NEW.source_note_id, NEW.target_note_id)
       OR (TG_OP = 'DELETE' AND note_id IN (OLD.source_note_id, OLD.target_note_id));
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Trigger for relationship changes
CREATE TRIGGER note_relationships_analytics_trigger
    AFTER INSERT OR UPDATE OR DELETE ON note_relationships
    FOR EACH ROW
    EXECUTE FUNCTION update_graph_analytics_trigger();

-- Function to update relationship interaction counts
CREATE OR REPLACE FUNCTION update_relationship_interaction()
RETURNS trigger AS $$
BEGIN
    -- Update interaction count for relationships
    IF NEW.target_type = 'edge' AND NEW.target_id IS NOT NULL THEN
        UPDATE note_relationships 
        SET interaction_count = interaction_count + 1,
            last_accessed_at = now()
        WHERE id = NEW.target_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for interaction tracking
CREATE TRIGGER graph_interactions_relationship_trigger
    AFTER INSERT ON graph_interactions
    FOR EACH ROW
    EXECUTE FUNCTION update_relationship_interaction();

-- Function to automatically create basic relationships
CREATE OR REPLACE FUNCTION create_automatic_relationships(note_id uuid)
RETURNS void AS $$
DECLARE
    note_record RECORD;
    related_note RECORD;
BEGIN
    -- Get the note details
    SELECT * INTO note_record FROM notes WHERE id = note_id;
    
    IF NOT FOUND THEN
        RETURN;
    END IF;
    
    -- Create tag-based relationships
    FOR related_note IN (
        SELECT DISTINCT n.id, n.title
        FROM notes n
        JOIN LATERAL jsonb_array_elements_text(n.tags) AS tag ON true
        WHERE n.id != note_id
          AND n.user_id = note_record.user_id
          AND EXISTS (
              SELECT 1 FROM jsonb_array_elements_text(note_record.tags) AS note_tag
              WHERE note_tag.value = tag.value
          )
        LIMIT 50
    ) LOOP
        INSERT INTO note_relationships (
            source_note_id, target_note_id, relationship_type,
            relationship_strength, discovery_method, created_by
        )
        VALUES (
            note_id, related_note.id, 'tag',
            1.0, 'tag', note_record.user_id
        )
        ON CONFLICT (source_note_id, target_note_id, relationship_type) DO NOTHING;
    END LOOP;
    
    -- Create folder-based relationships
    IF note_record.folder_id IS NOT NULL THEN
        FOR related_note IN (
            SELECT id FROM notes 
            WHERE folder_id = note_record.folder_id 
              AND id != note_id 
              AND user_id = note_record.user_id
            LIMIT 20
        ) LOOP
            INSERT INTO note_relationships (
                source_note_id, target_note_id, relationship_type,
                relationship_strength, discovery_method, created_by
            )
            VALUES (
                note_id, related_note.id, 'hierarchy',
                0.7, 'folder', note_record.user_id
            )
            ON CONFLICT (source_note_id, target_note_id, relationship_type) DO NOTHING;
        END LOOP;
    END IF;
    
    -- Initialize analytics record
    INSERT INTO note_graph_analytics (note_id, needs_recalculation)
    VALUES (note_id, true)
    ON CONFLICT (note_id) DO UPDATE SET needs_recalculation = true;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate basic graph metrics
CREATE OR REPLACE FUNCTION calculate_note_graph_metrics(note_id uuid)
RETURNS void AS $$
DECLARE
    inbound_count integer;
    outbound_count integer;
    total_count integer;
    avg_strength real;
    is_isolated_flag boolean;
BEGIN
    -- Calculate connection counts
    SELECT 
        COALESCE(COUNT(*), 0) INTO inbound_count
    FROM note_relationships 
    WHERE target_note_id = note_id;
    
    SELECT 
        COALESCE(COUNT(*), 0) INTO outbound_count
    FROM note_relationships 
    WHERE source_note_id = note_id;
    
    total_count := inbound_count + outbound_count;
    
    -- Calculate average relationship strength
    SELECT 
        COALESCE(AVG(relationship_strength), 0) INTO avg_strength
    FROM note_relationships 
    WHERE source_note_id = note_id OR target_note_id = note_id;
    
    -- Determine if isolated
    is_isolated_flag := (total_count = 0);
    
    -- Calculate simple centrality (degree-based)
    -- More sophisticated algorithms would be implemented in application code
    
    -- Update analytics
    INSERT INTO note_graph_analytics (
        note_id, inbound_connections, outbound_connections, total_connections,
        connection_strength_avg, is_isolated, degree_centrality,
        calculated_at, needs_recalculation, is_stale
    )
    VALUES (
        note_id, inbound_count, outbound_count, total_count,
        avg_strength, is_isolated_flag, total_count::real,
        now(), false, false
    )
    ON CONFLICT (note_id) DO UPDATE SET
        inbound_connections = EXCLUDED.inbound_connections,
        outbound_connections = EXCLUDED.outbound_connections,
        total_connections = EXCLUDED.total_connections,
        connection_strength_avg = EXCLUDED.connection_strength_avg,
        is_isolated = EXCLUDED.is_isolated,
        degree_centrality = EXCLUDED.degree_centrality,
        calculated_at = now(),
        needs_recalculation = false,
        is_stale = false;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- 7. RLS POLICIES
-- =============================================

-- Enable RLS on all graph tables
ALTER TABLE note_relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_canvas_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_graph_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph_interactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for note_relationships
CREATE POLICY "Users can view relationships for their notes" ON note_relationships
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE (id = source_note_id OR id = target_note_id) 
              AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create relationships for their notes" ON note_relationships
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE id = source_note_id AND user_id = auth.uid()
        )
        AND EXISTS (
            SELECT 1 FROM notes 
            WHERE id = target_note_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update their note relationships" ON note_relationships
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE (id = source_note_id OR id = target_note_id) 
              AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete their note relationships" ON note_relationships
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE (id = source_note_id OR id = target_note_id) 
              AND user_id = auth.uid()
        )
    );

-- RLS Policies for note_canvas_positions
CREATE POLICY "Users can manage canvas positions for their notes" ON note_canvas_positions
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE id = note_id AND user_id = auth.uid()
        )
    );

-- RLS Policies for note_graph_analytics
CREATE POLICY "Users can view analytics for their notes" ON note_graph_analytics
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM notes 
            WHERE id = note_id AND user_id = auth.uid()
        )
    );

-- RLS Policies for graph_views
CREATE POLICY "Users can manage their own graph views" ON graph_views
    FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Users can view public graph views" ON graph_views
    FOR SELECT USING (is_public = true OR user_id = auth.uid());

-- RLS Policies for graph_interactions
CREATE POLICY "Users can manage their own graph interactions" ON graph_interactions
    FOR ALL USING (user_id = auth.uid());

-- =============================================
-- 8. PERFORMANCE VIEWS
-- =============================================

-- View for graph data with analytics
CREATE OR REPLACE VIEW graph_nodes_with_analytics AS
SELECT 
    n.id,
    n.title,
    n.content,
    n.tags,
    n.folder_id,
    n.created_at,
    n.updated_at,
    n.user_id,
    
    -- Analytics
    COALESCE(a.degree_centrality, 0) as degree_centrality,
    COALESCE(a.pagerank_score, 0) as pagerank_score,
    COALESCE(a.total_connections, 0) as total_connections,
    COALESCE(a.hub_score, 0) as hub_score,
    COALESCE(a.is_isolated, true) as is_isolated,
    COALESCE(a.community_id, 'unassigned') as community_id,
    
    -- Canvas position
    cp.x,
    cp.y,
    cp.z,
    cp.canvas_id,
    cp.is_pinned,
    cp.color,
    cp.scale,
    cp.group_id
    
FROM notes n
LEFT JOIN note_graph_analytics a ON n.id = a.note_id
LEFT JOIN note_canvas_positions cp ON n.id = cp.note_id;

-- View for relationship data with metrics
CREATE OR REPLACE VIEW graph_relationships_with_metrics AS
SELECT 
    r.*,
    sn.title as source_title,
    tn.title as target_title,
    sn.tags as source_tags,
    tn.tags as target_tags,
    
    -- Metrics
    r.interaction_count,
    r.last_accessed_at,
    
    -- Source analytics
    sa.degree_centrality as source_centrality,
    sa.total_connections as source_connections,
    
    -- Target analytics  
    ta.degree_centrality as target_centrality,
    ta.total_connections as target_connections
    
FROM note_relationships r
JOIN notes sn ON r.source_note_id = sn.id
JOIN notes tn ON r.target_note_id = tn.id
LEFT JOIN note_graph_analytics sa ON r.source_note_id = sa.note_id
LEFT JOIN note_graph_analytics ta ON r.target_note_id = ta.note_id;

-- =============================================
-- 9. INITIAL DATA SETUP
-- =============================================

-- Create default graph view
INSERT INTO graph_views (
    user_id, name, description, is_default, view_type,
    layout_algorithm, visual_config, filters
)
SELECT 
    id as user_id,
    'Default Graph View' as name,
    'Automatically created default graph view' as description,
    true as is_default,
    'force' as view_type,
    'd3-force' as layout_algorithm,
    '{"nodeSize": 8, "linkWidth": 2, "nodeColor": "auto", "showLabels": true}' as visual_config,
    '{"maxNodes": 500, "minStrength": 0.1}' as filters
FROM auth.users
ON CONFLICT DO NOTHING;

-- =============================================
-- MIGRATION COMPLETE
-- =============================================

-- Add helpful comments
COMMENT ON TABLE note_relationships IS 'Stores relationships between notes for graph visualization';
COMMENT ON TABLE note_canvas_positions IS 'Stores spatial positioning data for canvas-based note arrangement';
COMMENT ON TABLE note_graph_analytics IS 'Cached analytics and metrics for graph performance';
COMMENT ON TABLE graph_views IS 'Saved graph view configurations and filters';
COMMENT ON TABLE graph_interactions IS 'Tracks user interactions with the graph interface';

COMMENT ON FUNCTION create_automatic_relationships(uuid) IS 'Automatically creates relationships based on tags, folders, and other criteria';
COMMENT ON FUNCTION calculate_note_graph_metrics(uuid) IS 'Calculates basic graph metrics for a specific note';

-- Performance optimization hints
ANALYZE note_relationships;
ANALYZE note_canvas_positions;
ANALYZE note_graph_analytics;
ANALYZE graph_views;
ANALYZE graph_interactions;