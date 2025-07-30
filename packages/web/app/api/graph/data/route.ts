/**
 * Graph Data API Endpoint
 * Provides graph nodes and edges data with analytics and filtering
 */

import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'
import { match } from 'ts-pattern'

// Request validation schema
const GraphDataRequestSchema = z.object({
  maxNodes: z.number().min(10).max(2000).optional().default(500),
  maxDepth: z.number().min(1).max(5).optional().default(3),
  minStrength: z.number().min(0).max(10).optional().default(0.1),
  relationshipTypes: z.array(z.string()).optional(),
  includeIsolated: z.boolean().optional().default(false),
  centerNodeId: z.string().uuid().optional(),
  tagFilter: z.array(z.string()).optional(),
  folderFilter: z.string().uuid().optional(),
  dateRange: z
    .object({
      start: z.string().datetime().optional(),
      end: z.string().datetime().optional(),
    })
    .optional(),
  sortBy: z
    .enum(['centrality', 'connections', 'recent', 'alphabetical'])
    .optional()
    .default('centrality'),
  includePinned: z.boolean().optional().default(true),
})

type GraphDataRequest = z.infer<typeof GraphDataRequestSchema>

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse query parameters
    const url = new URL(request.url)
    const params: GraphDataRequest = {
      maxNodes: url.searchParams.get('maxNodes')
        ? parseInt(url.searchParams.get('maxNodes')!)
        : 500,
      maxDepth: url.searchParams.get('maxDepth')
        ? parseInt(url.searchParams.get('maxDepth')!)
        : 3,
      minStrength: url.searchParams.get('minStrength')
        ? parseFloat(url.searchParams.get('minStrength')!)
        : 0.1,
      relationshipTypes: url.searchParams.get('relationshipTypes')?.split(','),
      includeIsolated: url.searchParams.get('includeIsolated') === 'true',
      centerNodeId: url.searchParams.get('centerNodeId') || undefined,
      tagFilter: url.searchParams.get('tags')?.split(','),
      folderFilter: url.searchParams.get('folder') || undefined,
      sortBy: (url.searchParams.get('sortBy') as any) || 'centrality',
      includePinned: url.searchParams.get('includePinned') !== 'false',
    }

    // Validate parameters
    const validatedParams = GraphDataRequestSchema.parse(params)

    // Build node query with filters
    let nodeQuery = supabase
      .from('graph_nodes_with_analytics')
      .select('*')
      .eq('user_id', user.id)

    // Apply filters
    if (!validatedParams.includeIsolated) {
      nodeQuery = nodeQuery.eq('is_isolated', false)
    }

    if (validatedParams.tagFilter && validatedParams.tagFilter.length > 0) {
      nodeQuery = nodeQuery.overlaps('tags', validatedParams.tagFilter)
    }

    if (validatedParams.folderFilter) {
      nodeQuery = nodeQuery.eq('folder_id', validatedParams.folderFilter)
    }

    if (validatedParams.dateRange?.start) {
      nodeQuery = nodeQuery.gte('created_at', validatedParams.dateRange.start)
    }

    if (validatedParams.dateRange?.end) {
      nodeQuery = nodeQuery.lte('created_at', validatedParams.dateRange.end)
    }

    // Apply sorting
    nodeQuery = match(validatedParams.sortBy)
      .with('centrality', () =>
        nodeQuery.order('degree_centrality', { ascending: false })
      )
      .with('connections', () =>
        nodeQuery.order('total_connections', { ascending: false })
      )
      .with('recent', () => nodeQuery.order('updated_at', { ascending: false }))
      .with('alphabetical', () => nodeQuery.order('title', { ascending: true }))
      .otherwise(() => nodeQuery)

    // Apply node limit
    nodeQuery = nodeQuery.limit(validatedParams.maxNodes)

    // Fetch nodes
    const { data: nodes, error: nodesError } = await nodeQuery

    if (nodesError) {
      console.error('Error fetching graph nodes:', nodesError)
      return NextResponse.json(
        { error: 'Failed to fetch graph nodes' },
        { status: 500 }
      )
    }

    if (!nodes || nodes.length === 0) {
      return NextResponse.json({
        success: true,
        data: {
          nodes: [],
          links: [],
          analytics: {
            totalNodes: 0,
            totalRelationships: 0,
            isolatedNodes: 0,
            communities: 0,
          },
        },
      })
    }

    // Get node IDs for relationship query
    const nodeIds = nodes.map((node) => node.id)

    // Build relationships query
    let relationshipsQuery = supabase
      .from('graph_relationships_with_metrics')
      .select('*')
      .in('source_note_id', nodeIds)
      .in('target_note_id', nodeIds)
      .gte('relationship_strength', validatedParams.minStrength)

    // Filter by relationship types
    if (
      validatedParams.relationshipTypes &&
      validatedParams.relationshipTypes.length > 0
    ) {
      relationshipsQuery = relationshipsQuery.in(
        'relationship_type',
        validatedParams.relationshipTypes
      )
    }

    // Fetch relationships
    const { data: relationships, error: relationshipsError } =
      await relationshipsQuery

    if (relationshipsError) {
      console.error('Error fetching graph relationships:', relationshipsError)
      return NextResponse.json(
        { error: 'Failed to fetch graph relationships' },
        { status: 500 }
      )
    }

    // Transform data for graph visualization
    const graphNodes = nodes.map((node) => ({
      id: node.id,
      title: node.title,
      tags: Array.isArray(node.tags) ? node.tags : [],
      folderId: node.folder_id,
      createdAt: node.created_at,
      updatedAt: node.updated_at,

      // Analytics
      centrality: node.degree_centrality || 0,
      pagerank: node.pagerank_score || 0,
      connections: node.total_connections || 0,
      hubScore: node.hub_score || 0,
      isIsolated: node.is_isolated || false,
      communityId: node.community_id || 'unassigned',

      // Canvas position
      x: node.x || undefined,
      y: node.y || undefined,
      z: node.z || undefined,
      canvasId: node.canvas_id || undefined,
      isPinned: node.is_pinned || false,
      color: node.color || undefined,
      scale: node.scale || 1.0,
      groupId: node.group_id || undefined,

      // Visual properties
      size: Math.max(5, Math.min(20, (node.total_connections || 0) * 2 + 5)),
      opacity: 1.0,
    }))

    const graphLinks = (relationships || []).map((rel) => ({
      id: rel.id,
      source: rel.source_note_id,
      target: rel.target_note_id,
      type: rel.relationship_type,
      strength: rel.relationship_strength,
      discoveryMethod: rel.discovery_method,
      isManual: rel.is_manual,
      contextText: rel.context_text,
      createdAt: rel.created_at,

      // Metrics
      interactionCount: rel.interaction_count || 0,
      lastAccessed: rel.last_accessed_at,

      // Visual properties
      width: Math.max(1, Math.min(5, rel.relationship_strength * 2)),
      opacity: Math.max(0.3, Math.min(1.0, rel.relationship_strength / 5)),
      color: getRelationshipColor(rel.relationship_type),

      // Source and target metadata
      sourceTitle: rel.source_title,
      targetTitle: rel.target_title,
      sourceCentrality: rel.source_centrality || 0,
      targetCentrality: rel.target_centrality || 0,
    }))

    // Calculate analytics
    const analytics = {
      totalNodes: graphNodes.length,
      totalRelationships: graphLinks.length,
      isolatedNodes: graphNodes.filter((node) => node.isIsolated).length,
      communities: new Set(graphNodes.map((node) => node.communityId)).size,
      avgConnections:
        graphNodes.length > 0
          ? graphNodes.reduce((sum, node) => sum + node.connections, 0) /
            graphNodes.length
          : 0,
      maxConnections: Math.max(
        ...graphNodes.map((node) => node.connections),
        0
      ),
      hubNodes: graphNodes.filter((node) => node.hubScore > 0.7).length,
      relationshipTypes: groupBy(graphLinks, 'type'),
    }

    return NextResponse.json({
      success: true,
      data: {
        nodes: graphNodes,
        links: graphLinks,
        analytics,
        metadata: {
          filters: validatedParams,
          timestamp: new Date().toISOString(),
          userId: user.id,
        },
      },
    })
  } catch (error) {
    console.error('Error in graph data API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const action = body.action

    return match(action)
      .with(
        'refresh-analytics',
        async () => await refreshGraphAnalytics(supabase, user.id)
      )
      .with(
        'create-relationship',
        async () => await createRelationship(supabase, user.id, body)
      )
      .with(
        'update-canvas-position',
        async () => await updateCanvasPosition(supabase, user.id, body)
      )
      .with(
        'bulk-update-positions',
        async () => await bulkUpdatePositions(supabase, user.id, body)
      )
      .otherwise(() =>
        NextResponse.json({ error: 'Invalid action' }, { status: 400 })
      )
  } catch (error) {
    console.error('Error in graph data POST API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper functions
function getRelationshipColor(type: string): string {
  const colorMap: Record<string, string> = {
    reference: '#3b82f6', // blue
    bidirectional: '#10b981', // green
    hierarchy: '#f59e0b', // yellow
    tag: '#8b5cf6', // purple
    template: '#ef4444', // red
    similarity: '#06b6d4', // cyan
    temporal: '#84cc16', // lime
    custom: '#6b7280', // gray
  }

  return colorMap[type] || '#6b7280'
}

function groupBy<T>(array: T[], key: keyof T): Record<string, number> {
  return array.reduce(
    (groups, item) => {
      const value = String(item[key])
      groups[value] = (groups[value] || 0) + 1
      return groups
    },
    {} as Record<string, number>
  )
}

async function refreshGraphAnalytics(supabase: any, userId: string) {
  try {
    // Get all notes for user that need analytics refresh
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)

    if (notesError) {
      throw notesError
    }

    // Call the database function to recalculate metrics for each note
    const promises = notes.map((note) =>
      supabase.rpc('calculate_note_graph_metrics', { note_id: note.id })
    )

    await Promise.all(promises)

    return NextResponse.json({
      success: true,
      message: `Analytics refreshed for ${notes.length} notes`,
    })
  } catch (error) {
    console.error('Error refreshing analytics:', error)
    return NextResponse.json(
      { error: 'Failed to refresh analytics' },
      { status: 500 }
    )
  }
}

async function createRelationship(supabase: any, userId: string, body: any) {
  try {
    const { sourceId, targetId, type, strength, contextText } = body

    // Verify both notes belong to user
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)
      .in('id', [sourceId, targetId])

    if (notesError || notes.length !== 2) {
      return NextResponse.json({ error: 'Invalid notes' }, { status: 400 })
    }

    // Create relationship
    const { data: relationship, error } = await supabase
      .from('note_relationships')
      .insert({
        source_note_id: sourceId,
        target_note_id: targetId,
        relationship_type: type || 'custom',
        relationship_strength: strength || 1.0,
        context_text: contextText,
        is_manual: true,
        discovery_method: 'manual',
        created_by: userId,
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating relationship:', error)
      return NextResponse.json(
        { error: 'Failed to create relationship' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: relationship,
    })
  } catch (error) {
    console.error('Error in createRelationship:', error)
    return NextResponse.json(
      { error: 'Failed to create relationship' },
      { status: 500 }
    )
  }
}

async function updateCanvasPosition(supabase: any, userId: string, body: any) {
  try {
    const { noteId, x, y, z, canvasId, isPinned, color, scale, groupId } = body

    // Verify note belongs to user
    const { data: note, error: noteError } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)
      .eq('id', noteId)
      .single()

    if (noteError || !note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 })
    }

    // Update or insert canvas position
    const { data: position, error } = await supabase
      .from('note_canvas_positions')
      .upsert({
        note_id: noteId,
        canvas_id: canvasId || 'default',
        x: x || 0,
        y: y || 0,
        z: z || 0,
        is_pinned: isPinned || false,
        color,
        scale: scale || 1.0,
        group_id: groupId,
        created_by: userId,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error updating canvas position:', error)
      return NextResponse.json(
        { error: 'Failed to update position' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: position,
    })
  } catch (error) {
    console.error('Error in updateCanvasPosition:', error)
    return NextResponse.json(
      { error: 'Failed to update position' },
      { status: 500 }
    )
  }
}

async function bulkUpdatePositions(supabase: any, userId: string, body: any) {
  try {
    const { positions } = body

    if (!Array.isArray(positions) || positions.length === 0) {
      return NextResponse.json(
        { error: 'Invalid positions data' },
        { status: 400 }
      )
    }

    // Verify all notes belong to user
    const noteIds = positions.map((p) => p.noteId)
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)
      .in('id', noteIds)

    if (notesError || notes.length !== noteIds.length) {
      return NextResponse.json({ error: 'Invalid notes' }, { status: 400 })
    }

    // Prepare bulk update data
    const bulkData = positions.map((pos) => ({
      note_id: pos.noteId,
      canvas_id: pos.canvasId || 'default',
      x: pos.x || 0,
      y: pos.y || 0,
      z: pos.z || 0,
      is_pinned: pos.isPinned || false,
      color: pos.color,
      scale: pos.scale || 1.0,
      group_id: pos.groupId,
      created_by: userId,
      updated_at: new Date().toISOString(),
    }))

    // Perform bulk upsert
    const { data: updatedPositions, error } = await supabase
      .from('note_canvas_positions')
      .upsert(bulkData)
      .select()

    if (error) {
      console.error('Error bulk updating positions:', error)
      return NextResponse.json(
        { error: 'Failed to update positions' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: updatedPositions,
      count: updatedPositions.length,
    })
  } catch (error) {
    console.error('Error in bulkUpdatePositions:', error)
    return NextResponse.json(
      { error: 'Failed to bulk update positions' },
      { status: 500 }
    )
  }
}
