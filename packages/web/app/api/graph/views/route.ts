/**
 * Graph Views API Endpoint
 * Manages saved graph views, filters, and configurations
 */

import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

// Request validation schemas
const CreateViewSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().optional().default(false),
  isDefault: z.boolean().optional().default(false),
  viewType: z
    .enum(['force', 'hierarchical', 'circular', 'grid', 'canvas'])
    .default('force'),
  layoutAlgorithm: z.string().default('d3-force'),
  filters: z.object({
    maxNodes: z.number().min(10).max(2000).optional().default(500),
    maxDepth: z.number().min(1).max(5).optional().default(3),
    minStrength: z.number().min(0).max(10).optional().default(0.1),
    relationshipTypes: z.array(z.string()).optional(),
    includeIsolated: z.boolean().optional().default(false),
    tagFilter: z.array(z.string()).optional(),
    folderFilter: z.string().uuid().optional(),
    dateRange: z
      .object({
        start: z.string().datetime().optional(),
        end: z.string().datetime().optional(),
      })
      .optional(),
  }),
  nodeFilters: z
    .object({
      minConnections: z.number().min(0).optional(),
      maxConnections: z.number().max(1000).optional(),
      centralityThreshold: z.number().min(0).max(1).optional(),
      communityFilter: z.array(z.string()).optional(),
    })
    .optional(),
  edgeFilters: z
    .object({
      minStrength: z.number().min(0).max(10).optional(),
      types: z.array(z.string()).optional(),
      showLabels: z.boolean().optional().default(true),
    })
    .optional(),
  visualConfig: z
    .object({
      nodeSize: z.number().min(1).max(50).optional().default(8),
      linkWidth: z.number().min(0.5).max(10).optional().default(2),
      nodeColor: z.string().optional().default('auto'),
      linkColor: z.string().optional().default('auto'),
      showLabels: z.boolean().optional().default(true),
      labelSize: z.number().min(8).max(24).optional().default(12),
      opacity: z.number().min(0.1).max(1).optional().default(1),
      backgroundColor: z.string().optional().default('#ffffff'),
    })
    .optional(),
  physicsConfig: z
    .object({
      enabled: z.boolean().optional().default(true),
      strength: z.number().min(-1000).max(1000).optional().default(-300),
      distance: z.number().min(10).max(500).optional().default(100),
      collisionRadius: z.number().min(1).max(50).optional().default(10),
      gravity: z.number().min(0).max(1).optional().default(0.1),
      damping: z.number().min(0).max(1).optional().default(0.9),
    })
    .optional(),
  canvasConfig: z
    .object({
      width: z.number().min(500).max(10000).optional().default(1920),
      height: z.number().min(500).max(10000).optional().default(1080),
      zoom: z.number().min(0.1).max(10).optional().default(1),
      centerX: z.number().optional().default(0),
      centerY: z.number().optional().default(0),
    })
    .optional(),
  viewportConfig: z
    .object({
      x: z.number().optional().default(0),
      y: z.number().optional().default(0),
      zoom: z.number().min(0.1).max(10).optional().default(1),
      rotation: z.number().min(-360).max(360).optional().default(0),
    })
    .optional(),
})

const UpdateViewSchema = CreateViewSchema.partial()

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const includePublic = url.searchParams.get('includePublic') === 'true'
    const onlyPublic = url.searchParams.get('onlyPublic') === 'true'
    const viewType = url.searchParams.get('type')
    const limitParam = url.searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : 50

    // Build query
    let query = supabase.from('graph_views').select('*')

    if (onlyPublic) {
      query = query.eq('is_public', true)
    } else if (includePublic) {
      query = query.or(`user_id.eq.${user.id},is_public.eq.true`)
    } else {
      query = query.eq('user_id', user.id)
    }

    if (viewType) {
      query = query.eq('view_type', viewType)
    }

    query = query
      .order('is_default', { ascending: false })
      .order('last_accessed_at', { ascending: false, nullsFirst: false })
      .order('created_at', { ascending: false })
      .limit(limit)

    const { data: views, error } = await query

    if (error) {
      console.error('Error fetching graph views:', error)
      return NextResponse.json(
        { error: 'Failed to fetch graph views' },
        { status: 500 }
      )
    }

    // Process views to add metadata
    const processedViews = views.map((view) => ({
      ...view,
      isOwner: view.user_id === user.id,
      canEdit: view.user_id === user.id,
      lastAccessedAgo: view.last_accessed_at
        ? getTimeAgo(new Date(view.last_accessed_at))
        : null,
      createdAgo: getTimeAgo(new Date(view.created_at)),
    }))

    return NextResponse.json({
      success: true,
      data: processedViews,
      metadata: {
        total: processedViews.length,
        timestamp: new Date().toISOString(),
        userId: user.id,
      },
    })
  } catch (error) {
    console.error('Error in graph views GET API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = CreateViewSchema.parse(body)

    // If setting as default, unset other defaults first
    if (validatedData.isDefault) {
      await supabase
        .from('graph_views')
        .update({ is_default: false })
        .eq('user_id', user.id)
    }

    // Create the view
    const { data, error } = await supabase
      .from('graph_views')
      .insert({
        user_id: user.id,
        name: validatedData.name,
        description: validatedData.description,
        is_public: validatedData.isPublic,
        is_default: validatedData.isDefault,
        view_type: validatedData.viewType,
        layout_algorithm: validatedData.layoutAlgorithm,
        filters: validatedData.filters,
        node_filters: validatedData.nodeFilters || {},
        edge_filters: validatedData.edgeFilters || {},
        visual_config: validatedData.visualConfig || {},
        physics_config: validatedData.physicsConfig || {},
        canvas_config: validatedData.canvasConfig || {},
        viewport_config: validatedData.viewportConfig || {},
      })
      .select()

    if (error) {
      console.error('Error creating graph view:', error)
      return NextResponse.json(
        { error: 'Failed to create graph view' },
        { status: 500 }
      )
    }

    const view = data?.[0]
    if (!view) {
      return NextResponse.json(
        { error: 'Failed to create graph view' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: view,
      message: 'Graph view created successfully',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error in graph views POST API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { error: 'View ID is required' },
        { status: 400 }
      )
    }

    const validatedData = UpdateViewSchema.parse(updateData)

    // Verify ownership
    const { data: existingView, error: fetchError } = await supabase
      .from('graph_views')
      .select('user_id')
      .eq('id', id)
      .single()

    if (fetchError || !existingView) {
      return NextResponse.json(
        { error: 'Graph view not found' },
        { status: 404 }
      )
    }

    if (existingView.user_id !== user.id) {
      return NextResponse.json(
        { error: 'Unauthorized to edit this view' },
        { status: 403 }
      )
    }

    // If setting as default, unset other defaults first
    if (validatedData.isDefault) {
      await supabase
        .from('graph_views')
        .update({ is_default: false })
        .eq('user_id', user.id)
        .neq('id', id)
    }

    // Update the view
    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    }

    if (validatedData.name !== undefined)
      updatePayload.name = validatedData.name
    if (validatedData.description !== undefined)
      updatePayload.description = validatedData.description
    if (validatedData.isPublic !== undefined)
      updatePayload.is_public = validatedData.isPublic
    if (validatedData.isDefault !== undefined)
      updatePayload.is_default = validatedData.isDefault
    if (validatedData.viewType !== undefined)
      updatePayload.view_type = validatedData.viewType
    if (validatedData.layoutAlgorithm !== undefined)
      updatePayload.layout_algorithm = validatedData.layoutAlgorithm
    if (validatedData.filters !== undefined)
      updatePayload.filters = validatedData.filters
    if (validatedData.nodeFilters !== undefined)
      updatePayload.node_filters = validatedData.nodeFilters
    if (validatedData.edgeFilters !== undefined)
      updatePayload.edge_filters = validatedData.edgeFilters
    if (validatedData.visualConfig !== undefined)
      updatePayload.visual_config = validatedData.visualConfig
    if (validatedData.physicsConfig !== undefined)
      updatePayload.physics_config = validatedData.physicsConfig
    if (validatedData.canvasConfig !== undefined)
      updatePayload.canvas_config = validatedData.canvasConfig
    if (validatedData.viewportConfig !== undefined)
      updatePayload.viewport_config = validatedData.viewportConfig

    const { data, error } = await supabase
      .from('graph_views')
      .update(updatePayload)
      .eq('id', id)
      .select()

    if (error) {
      console.error('Error updating graph view:', error)
      return NextResponse.json(
        { error: 'Failed to update graph view' },
        { status: 500 }
      )
    }

    const updatedView = data?.[0]
    if (!updatedView) {
      return NextResponse.json(
        { error: 'Failed to update graph view' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: updatedView,
      message: 'Graph view updated successfully',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error in graph views PUT API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'View ID is required' },
        { status: 400 }
      )
    }

    // Verify ownership
    const { data: existingView, error: fetchError } = await supabase
      .from('graph_views')
      .select('user_id, is_default')
      .eq('id', id)
      .single()

    if (fetchError || !existingView) {
      return NextResponse.json(
        { error: 'Graph view not found' },
        { status: 404 }
      )
    }

    if (existingView.user_id !== user.id) {
      return NextResponse.json(
        { error: 'Unauthorized to delete this view' },
        { status: 403 }
      )
    }

    // Prevent deletion of default view unless there's another one
    if (existingView.is_default) {
      const { data: otherViews, error: otherViewsError } = await supabase
        .from('graph_views')
        .select('id')
        .eq('user_id', user.id)
        .neq('id', id)
        .limit(1)

      if (otherViewsError) {
        console.error('Error checking other views:', otherViewsError)
        return NextResponse.json(
          { error: 'Failed to check other views' },
          { status: 500 }
        )
      }

      if (otherViews.length === 0) {
        return NextResponse.json(
          {
            error:
              'Cannot delete the only remaining view. Create another view first.',
          },
          { status: 400 }
        )
      }

      // Set another view as default
      await supabase
        .from('graph_views')
        .update({ is_default: true })
        .eq('id', otherViews[0].id)
    }

    // Delete the view
    const { error } = await supabase.from('graph_views').delete().eq('id', id)

    if (error) {
      console.error('Error deleting graph view:', error)
      return NextResponse.json(
        { error: 'Failed to delete graph view' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Graph view deleted successfully',
    })
  } catch (error) {
    console.error('Error in graph views DELETE API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to calculate time ago
function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds)
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`
    }
  }

  return 'just now'
}
