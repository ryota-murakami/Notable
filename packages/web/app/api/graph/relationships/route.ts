/**
 * Graph Relationships API Endpoint
 * Manages relationships between notes in the knowledge graph
 */

import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'
import { match } from 'ts-pattern'

// Request validation schemas
const CreateRelationshipSchema = z.object({
  sourceNoteId: z.string().uuid(),
  targetNoteId: z.string().uuid(),
  relationshipType: z
    .enum([
      'reference',
      'bidirectional',
      'hierarchy',
      'tag',
      'template',
      'similarity',
      'temporal',
      'custom',
    ])
    .default('reference'),
  relationshipStrength: z.number().min(0).max(10).default(1.0),
  contextText: z.string().max(500).optional(),
  relationshipData: z.record(z.any()).optional(),
  isManual: z.boolean().default(true),
})

const UpdateRelationshipSchema = z.object({
  relationshipStrength: z.number().min(0).max(10).optional(),
  contextText: z.string().max(500).optional(),
  relationshipData: z.record(z.any()).optional(),
})

const BulkCreateSchema = z.object({
  relationships: z.array(CreateRelationshipSchema),
})

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

    const url = new URL(request.url)
    const noteId = url.searchParams.get('noteId')
    const relationshipType = url.searchParams.get('type')
    const minStrength = url.searchParams.get('minStrength')
      ? parseFloat(url.searchParams.get('minStrength')!)
      : 0
    const includeMetrics = url.searchParams.get('includeMetrics') === 'true'
    const limit = url.searchParams.get('limit')
      ? parseInt(url.searchParams.get('limit')!)
      : 100
    const offset = url.searchParams.get('offset')
      ? parseInt(url.searchParams.get('offset')!)
      : 0

    // Build query
    let query = supabase.from('graph_relationships_with_metrics').select('*')

    // If specific note ID provided, get relationships for that note
    if (noteId) {
      // Verify note belongs to user
      const { data: note, error: noteError } = await supabase
        .from('notes')
        .select('id')
        .eq('user_id', user.id)
        .eq('id', noteId)
        .single()

      if (noteError || !note) {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }

      query = query.or(
        `source_note_id.eq.${noteId},target_note_id.eq.${noteId}`
      )
    } else {
      // Get all relationships for user's notes
      const { data: userNotes, error: notesError } = await supabase
        .from('notes')
        .select('id')
        .eq('user_id', user.id)

      if (notesError) {
        console.error('Error fetching user notes:', notesError)
        return NextResponse.json(
          { error: 'Failed to fetch user notes' },
          { status: 500 }
        )
      }

      const noteIds = userNotes.map((n) => n.id)
      if (noteIds.length === 0) {
        return NextResponse.json({
          success: true,
          data: [],
          metadata: { total: 0, offset, limit },
        })
      }

      query = query.or(
        `source_note_id.in.(${noteIds.join(',')}),target_note_id.in.(${noteIds.join(',')})`
      )
    }

    // Apply filters
    if (relationshipType) {
      query = query.eq('relationship_type', relationshipType)
    }

    if (minStrength > 0) {
      query = query.gte('relationship_strength', minStrength)
    }

    // Apply ordering and pagination
    query = query
      .order('relationship_strength', { ascending: false })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const { data: relationships, error } = await query

    if (error) {
      console.error('Error fetching relationships:', error)
      return NextResponse.json(
        { error: 'Failed to fetch relationships' },
        { status: 500 }
      )
    }

    // Process relationships for response
    const processedRelationships = relationships.map((rel) => ({
      id: rel.id,
      sourceNoteId: rel.source_note_id,
      targetNoteId: rel.target_note_id,
      relationshipType: rel.relationship_type,
      relationshipStrength: rel.relationship_strength,
      contextText: rel.context_text,
      relationshipData: rel.relationship_data,
      isManual: rel.is_manual,
      discoveryMethod: rel.discovery_method,
      createdAt: rel.created_at,
      updatedAt: rel.updated_at,

      // Source and target metadata
      sourceTitle: rel.source_title,
      targetTitle: rel.target_title,
      sourceTags: rel.source_tags,
      targetTags: rel.target_tags,

      // Metrics (if requested)
      ...(includeMetrics && {
        interactionCount: rel.interaction_count || 0,
        lastAccessed: rel.last_accessed_at,
        sourceCentrality: rel.source_centrality || 0,
        targetCentrality: rel.target_centrality || 0,
        sourceConnections: rel.source_connections || 0,
        targetConnections: rel.target_connections || 0,
      }),

      // Visual properties for graph rendering
      visualProps: {
        width: Math.max(1, Math.min(5, rel.relationship_strength * 2)),
        opacity: Math.max(0.3, Math.min(1.0, rel.relationship_strength / 5)),
        color: getRelationshipColor(rel.relationship_type),
        style: getRelationshipStyle(rel.relationship_type),
      },
    }))

    // Get summary statistics
    const stats = {
      total: processedRelationships.length,
      byType: groupBy(processedRelationships, 'relationshipType'),
      byStrength: {
        weak: processedRelationships.filter((r) => r.relationshipStrength < 3)
          .length,
        medium: processedRelationships.filter(
          (r) => r.relationshipStrength >= 3 && r.relationshipStrength < 7
        ).length,
        strong: processedRelationships.filter(
          (r) => r.relationshipStrength >= 7
        ).length,
      },
      avgStrength:
        processedRelationships.length > 0
          ? processedRelationships.reduce(
              (sum, r) => sum + r.relationshipStrength,
              0
            ) / processedRelationships.length
          : 0,
    }

    return NextResponse.json({
      success: true,
      data: processedRelationships,
      metadata: {
        total: relationships.length,
        offset,
        limit,
        stats,
        timestamp: new Date().toISOString(),
        userId: user.id,
      },
    })
  } catch (error) {
    console.error('Error in relationships GET API:', error)
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
    const action = body.action || 'create'

    return match(action)
      .with(
        'create',
        async () => await createRelationship(supabase, user.id, body)
      )
      .with(
        'bulk-create',
        async () => await bulkCreateRelationships(supabase, user.id, body)
      )
      .with(
        'auto-discover',
        async () => await autoDiscoverRelationships(supabase, user.id, body)
      )
      .with(
        'suggest',
        async () => await suggestRelationships(supabase, user.id, body)
      )
      .otherwise(() =>
        NextResponse.json({ error: 'Invalid action' }, { status: 400 })
      )
  } catch (error) {
    console.error('Error in relationships POST API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
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
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Relationship ID is required' },
        { status: 400 }
      )
    }

    const validatedData = UpdateRelationshipSchema.parse(updateData)

    // Verify relationship exists and user has access
    const { data: existingRel, error: fetchError } = await supabase
      .from('note_relationships')
      .select(
        `
        id,
        source_note_id,
        target_note_id,
        notes!note_relationships_source_note_id_fkey(user_id)
      `
      )
      .eq('id', id)
      .single()

    if (fetchError || !existingRel) {
      return NextResponse.json(
        { error: 'Relationship not found' },
        { status: 404 }
      )
    }

    // Check if user owns the source note
    if ((existingRel as any).notes?.user_id !== user.id) {
      return NextResponse.json(
        { error: 'Unauthorized to edit this relationship' },
        { status: 403 }
      )
    }

    // Update the relationship
    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    }

    if (validatedData.relationshipStrength !== undefined) {
      updatePayload.relationship_strength = validatedData.relationshipStrength
    }
    if (validatedData.contextText !== undefined) {
      updatePayload.context_text = validatedData.contextText
    }
    if (validatedData.relationshipData !== undefined) {
      updatePayload.relationship_data = validatedData.relationshipData
    }

    const { data: updatedRel, error } = await supabase
      .from('note_relationships')
      .update(updatePayload)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating relationship:', error)
      return NextResponse.json(
        { error: 'Failed to update relationship' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: updatedRel,
      message: 'Relationship updated successfully',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error in relationships PUT API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
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

    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    const sourceNoteId = url.searchParams.get('sourceNoteId')
    const targetNoteId = url.searchParams.get('targetNoteId')
    const relationshipType = url.searchParams.get('type')

    if (!id && !(sourceNoteId && targetNoteId)) {
      return NextResponse.json(
        {
          error:
            'Either relationship ID or source/target note IDs are required',
        },
        { status: 400 }
      )
    }

    let query = supabase.from('note_relationships')

    if (id) {
      // Delete by ID - verify ownership first
      const { data: existingRel, error: fetchError } = await supabase
        .from('note_relationships')
        .select(
          `
          id,
          notes!note_relationships_source_note_id_fkey(user_id)
        `
        )
        .eq('id', id)
        .single()

      if (fetchError || !existingRel) {
        return NextResponse.json(
          { error: 'Relationship not found' },
          { status: 404 }
        )
      }

      if ((existingRel as any).notes?.user_id !== user.id) {
        return NextResponse.json(
          { error: 'Unauthorized to delete this relationship' },
          { status: 403 }
        )
      }

      query = query.delete().eq('id', id)
    } else {
      // Delete by source/target - verify ownership of source note
      const { data: sourceNote, error: sourceError } = await supabase
        .from('notes')
        .select('id')
        .eq('user_id', user.id)
        .eq('id', sourceNoteId!)
        .single()

      if (sourceError || !sourceNote) {
        return NextResponse.json(
          { error: 'Source note not found or unauthorized' },
          { status: 404 }
        )
      }

      query = query
        .delete()
        .eq('source_note_id', sourceNoteId!)
        .eq('target_note_id', targetNoteId!)

      if (relationshipType) {
        query = query.eq('relationship_type', relationshipType)
      }
    }

    const { error } = await query

    if (error) {
      console.error('Error deleting relationship:', error)
      return NextResponse.json(
        { error: 'Failed to delete relationship' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Relationship deleted successfully',
    })
  } catch (error) {
    console.error('Error in relationships DELETE API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper functions

async function createRelationship(supabase: any, userId: string, body: any) {
  try {
    const validatedData = CreateRelationshipSchema.parse(body)

    // Verify both notes belong to user
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id, title')
      .eq('user_id', userId)
      .in('id', [validatedData.sourceNoteId, validatedData.targetNoteId])

    if (notesError || notes.length !== 2) {
      return NextResponse.json(
        { error: 'Invalid notes or unauthorized access' },
        { status: 400 }
      )
    }

    // Check for existing relationship
    const { data: existing, error: existingError } = await supabase
      .from('note_relationships')
      .select('id')
      .eq('source_note_id', validatedData.sourceNoteId)
      .eq('target_note_id', validatedData.targetNoteId)
      .eq('relationship_type', validatedData.relationshipType)
      .single()

    if (existing) {
      return NextResponse.json(
        {
          error: 'Relationship already exists',
          data: { existingId: existing.id },
        },
        { status: 409 }
      )
    }

    // Create relationship
    const { data: relationship, error } = await supabase
      .from('note_relationships')
      .insert({
        source_note_id: validatedData.sourceNoteId,
        target_note_id: validatedData.targetNoteId,
        relationship_type: validatedData.relationshipType,
        relationship_strength: validatedData.relationshipStrength,
        context_text: validatedData.contextText,
        relationship_data: validatedData.relationshipData || {},
        is_manual: validatedData.isManual,
        discovery_method: validatedData.isManual ? 'manual' : 'auto',
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

    // Create bidirectional relationship if specified
    if (validatedData.relationshipType === 'bidirectional') {
      await supabase.from('note_relationships').insert({
        source_note_id: validatedData.targetNoteId,
        target_note_id: validatedData.sourceNoteId,
        relationship_type: 'bidirectional',
        relationship_strength: validatedData.relationshipStrength,
        context_text: validatedData.contextText,
        relationship_data: validatedData.relationshipData || {},
        is_manual: validatedData.isManual,
        discovery_method: validatedData.isManual ? 'manual' : 'auto',
        created_by: userId,
      })
    }

    return NextResponse.json({
      success: true,
      data: relationship,
      message: 'Relationship created successfully',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }
    throw error
  }
}

async function bulkCreateRelationships(
  supabase: any,
  userId: string,
  body: any
) {
  try {
    const validatedData = BulkCreateSchema.parse(body)

    if (validatedData.relationships.length === 0) {
      return NextResponse.json(
        { error: 'No relationships provided' },
        { status: 400 }
      )
    }

    if (validatedData.relationships.length > 100) {
      return NextResponse.json(
        { error: 'Too many relationships (max 100)' },
        { status: 400 }
      )
    }

    // Get all unique note IDs
    const noteIds = new Set<string>()
    validatedData.relationships.forEach((rel) => {
      noteIds.add(rel.sourceNoteId)
      noteIds.add(rel.targetNoteId)
    })

    // Verify all notes belong to user
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)
      .in('id', Array.from(noteIds))

    if (notesError || notes.length !== noteIds.size) {
      return NextResponse.json(
        { error: 'Some notes not found or unauthorized' },
        { status: 400 }
      )
    }

    // Prepare bulk insert data
    const insertData = validatedData.relationships.map((rel) => ({
      source_note_id: rel.sourceNoteId,
      target_note_id: rel.targetNoteId,
      relationship_type: rel.relationshipType,
      relationship_strength: rel.relationshipStrength,
      context_text: rel.contextText,
      relationship_data: rel.relationshipData || {},
      is_manual: rel.isManual,
      discovery_method: rel.isManual ? 'manual' : 'auto',
      created_by: userId,
    }))

    // Bulk insert with conflict handling
    const { data: relationships, error } = await supabase
      .from('note_relationships')
      .upsert(insertData, {
        onConflict: 'source_note_id,target_note_id,relationship_type',
        ignoreDuplicates: true,
      })
      .select()

    if (error) {
      console.error('Error bulk creating relationships:', error)
      return NextResponse.json(
        { error: 'Failed to create relationships' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: relationships,
      message: `${relationships.length} relationships created successfully`,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }
    throw error
  }
}

async function autoDiscoverRelationships(
  supabase: any,
  userId: string,
  body: any
) {
  try {
    const { noteId, types = ['tag', 'hierarchy', 'template'] } = body

    if (noteId) {
      // Auto-discover relationships for specific note
      await supabase.rpc('create_automatic_relationships', { note_id: noteId })
    } else {
      // Auto-discover for all user notes
      const { data: notes, error: notesError } = await supabase
        .from('notes')
        .select('id')
        .eq('user_id', userId)

      if (notesError) {
        throw notesError
      }

      // Process in batches to avoid timeout
      const batchSize = 10
      for (let i = 0; i < notes.length; i += batchSize) {
        const batch = notes.slice(i, i + batchSize)
        const promises = batch.map((note) =>
          supabase.rpc('create_automatic_relationships', { note_id: note.id })
        )
        await Promise.allSettled(promises)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Auto-discovery completed successfully',
    })
  } catch (error) {
    console.error('Error in auto-discovery:', error)
    return NextResponse.json(
      { error: 'Failed to auto-discover relationships' },
      { status: 500 }
    )
  }
}

async function suggestRelationships(supabase: any, userId: string, body: any) {
  try {
    const { noteId, limit = 10 } = body

    // This is a placeholder for intelligent relationship suggestions
    // In a real implementation, this would use content similarity,
    // semantic analysis, or other ML techniques

    const suggestions = []

    return NextResponse.json({
      success: true,
      data: suggestions,
      message: 'Relationship suggestions generated',
    })
  } catch (error) {
    console.error('Error generating suggestions:', error)
    return NextResponse.json(
      { error: 'Failed to generate suggestions' },
      { status: 500 }
    )
  }
}

function getRelationshipColor(type: string): string {
  const colorMap: Record<string, string> = {
    reference: '#3b82f6', // blue
    bidirectional: '#10b981', // green
    hierarchy: '#f59e0b', // amber
    tag: '#8b5cf6', // violet
    template: '#ef4444', // red
    similarity: '#06b6d4', // cyan
    temporal: '#84cc16', // lime
    custom: '#6b7280', // gray
  }

  return colorMap[type] || '#6b7280'
}

function getRelationshipStyle(type: string): 'solid' | 'dashed' | 'dotted' {
  const styleMap: Record<string, 'solid' | 'dashed' | 'dotted'> = {
    reference: 'solid',
    bidirectional: 'solid',
    hierarchy: 'dashed',
    tag: 'dotted',
    template: 'dashed',
    similarity: 'dotted',
    temporal: 'dotted',
    custom: 'solid',
  }

  return styleMap[type] || 'solid'
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
