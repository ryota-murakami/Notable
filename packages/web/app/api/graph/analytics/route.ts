/**
 * Graph Analytics API Endpoint
 * Provides advanced graph analysis, insights, and metrics
 */

import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

// Request validation schema
const AnalyticsRequestSchema = z.object({
  analysisType: z
    .enum([
      'overview',
      'centrality',
      'communities',
      'hubs',
      'isolated',
      'temporal',
    ])
    .optional()
    .default('overview'),
  timeframe: z
    .enum(['day', 'week', 'month', 'quarter', 'year', 'all'])
    .optional()
    .default('all'),
  includeDetails: z.boolean().optional().default(false),
  nodeLimit: z.number().min(1).max(100).optional().default(10),
})

type AnalyticsRequest = z.infer<typeof AnalyticsRequestSchema>

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
    const params: AnalyticsRequest = {
      analysisType: (url.searchParams.get('type') as any) || 'overview',
      timeframe: (url.searchParams.get('timeframe') as any) || 'all',
      includeDetails: url.searchParams.get('details') === 'true',
      nodeLimit: url.searchParams.get('limit')
        ? parseInt(url.searchParams.get('limit')!)
        : 10,
    }

    const validatedParams = AnalyticsRequestSchema.parse(params)

    switch (validatedParams.analysisType) {
      case 'overview':
        return await getOverviewAnalytics(supabase, user.id, validatedParams)

      case 'centrality':
        return await getCentralityAnalytics(supabase, user.id, validatedParams)

      case 'communities':
        return await getCommunityAnalytics(supabase, user.id, validatedParams)

      case 'hubs':
        return await getHubAnalytics(supabase, user.id, validatedParams)

      case 'isolated':
        return await getIsolatedAnalytics(supabase, user.id, validatedParams)

      case 'temporal':
        return await getTemporalAnalytics(supabase, user.id, validatedParams)

      default:
        return NextResponse.json(
          { error: 'Invalid analysis type' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in graph analytics API:', error)
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

    switch (action) {
      case 'recalculate-all':
        return await recalculateAllAnalytics(supabase, user.id)

      case 'detect-communities':
        return await detectCommunities(supabase, user.id, body)

      case 'find-similar-notes':
        return await findSimilarNotes(supabase, user.id, body)

      case 'analyze-note':
        return await analyzeSpecificNote(supabase, user.id, body)

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error in graph analytics POST API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper functions for different analytics types

async function getOverviewAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    // Get basic statistics
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id, created_at, updated_at, tags')
      .eq('user_id', userId)

    if (notesError) {
      throw notesError
    }

    const { data: relationships, error: relsError } = await supabase
      .from('note_relationships')
      .select(
        'relationship_type, relationship_strength, created_at, discovery_method'
      )
      .or(
        `source_note_id.in.(${notes.map((n) => n.id).join(',')}),target_note_id.in.(${notes.map((n) => n.id).join(',')})`
      )

    if (relsError) {
      throw relsError
    }

    const { data: analytics, error: analyticsError } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in(
        'note_id',
        notes.map((n) => n.id)
      )

    if (analyticsError) {
      throw analyticsError
    }

    // Calculate overview metrics
    const totalNotes = notes.length
    const totalRelationships = relationships.length
    const isolatedNotes = analytics.filter((a) => a.is_isolated).length
    const connectedNotes = totalNotes - isolatedNotes

    const avgConnections =
      analytics.length > 0
        ? analytics.reduce((sum, a) => sum + (a.total_connections || 0), 0) /
          analytics.length
        : 0

    const maxConnections = Math.max(
      ...analytics.map((a) => a.total_connections || 0),
      0
    )

    const relationshipTypes = groupBy(relationships, 'relationship_type')
    const discoveryMethods = groupBy(relationships, 'discovery_method')

    // Community detection
    const communities = groupBy(analytics, 'community_id')
    const totalCommunities = Object.keys(communities).filter(
      (c) => c !== 'unassigned'
    ).length

    // Hub detection
    const hubs = analytics.filter((a) => a.is_hub).length
    const authorities = analytics.filter((a) => a.is_authority).length

    // Temporal analysis
    const timeframe = getTimeframeFilter(params.timeframe)
    const recentNotes = notes.filter(
      (n) => new Date(n.created_at) >= timeframe
    ).length
    const recentRelationships = relationships.filter(
      (r) => new Date(r.created_at) >= timeframe
    ).length

    // Graph density (actual connections / possible connections)
    const possibleConnections = (totalNotes * (totalNotes - 1)) / 2
    const graphDensity =
      possibleConnections > 0 ? totalRelationships / possibleConnections : 0

    // Top nodes by centrality
    const topNodesByCentrality = analytics
      .sort((a, b) => (b.degree_centrality || 0) - (a.degree_centrality || 0))
      .slice(0, params.nodeLimit)

    const result = {
      overview: {
        totalNotes,
        totalRelationships,
        connectedNotes,
        isolatedNotes,
        avgConnections: Math.round(avgConnections * 100) / 100,
        maxConnections,
        graphDensity: Math.round(graphDensity * 10000) / 10000,
      },
      structure: {
        communities: totalCommunities,
        hubs,
        authorities,
        relationshipTypes,
        discoveryMethods,
      },
      temporal: {
        recentNotes,
        recentRelationships,
        timeframe: params.timeframe,
      },
      insights: generateInsights(analytics, relationships, notes),
      ...(params.includeDetails && {
        topNodes: await enrichNodesWithTitles(supabase, topNodesByCentrality),
        communityBreakdown: communities,
      }),
    }

    return NextResponse.json({
      success: true,
      data: result,
      metadata: {
        timestamp: new Date().toISOString(),
        userId,
        analysisType: params.analysisType,
      },
    })
  } catch (error) {
    console.error('Error in overview analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get overview analytics' },
      { status: 500 }
    )
  }
}

async function getCentralityAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    const { data: analytics, error } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in('note_id', await getUserNoteIds(supabase, userId))
      .order('degree_centrality', { ascending: false })
      .limit(params.nodeLimit)

    if (error) {
      throw error
    }

    const enrichedNodes = await enrichNodesWithTitles(supabase, analytics)

    const centralityDistribution = {
      degree: calculateDistribution(analytics, 'degree_centrality'),
      betweenness: calculateDistribution(analytics, 'betweenness_centrality'),
      closeness: calculateDistribution(analytics, 'closeness_centrality'),
      pagerank: calculateDistribution(analytics, 'pagerank_score'),
    }

    return NextResponse.json({
      success: true,
      data: {
        topNodes: enrichedNodes,
        distribution: centralityDistribution,
        insights: generateCentralityInsights(analytics),
      },
    })
  } catch (error) {
    console.error('Error in centrality analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get centrality analytics' },
      { status: 500 }
    )
  }
}

async function getCommunityAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    const { data: analytics, error } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in('note_id', await getUserNoteIds(supabase, userId))

    if (error) {
      throw error
    }

    const communities = groupBy(analytics, 'community_id')
    const communityStats = {}

    for (const [communityId, members] of Object.entries(communities)) {
      if (communityId === 'unassigned') continue

      const memberAnalytics = analytics.filter(
        (a) => a.community_id === communityId
      )
      communityStats[communityId] = {
        size: members,
        avgCentrality:
          memberAnalytics.reduce(
            (sum, a) => sum + (a.degree_centrality || 0),
            0
          ) / memberAnalytics.length,
        totalConnections: memberAnalytics.reduce(
          (sum, a) => sum + (a.total_connections || 0),
          0
        ),
        avgClustering:
          memberAnalytics.reduce(
            (sum, a) => sum + (a.clustering_coefficient || 0),
            0
          ) / memberAnalytics.length,
        ...(params.includeDetails && {
          members: await enrichNodesWithTitles(
            supabase,
            memberAnalytics.slice(0, 10)
          ),
        }),
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        totalCommunities: Object.keys(communityStats).length,
        communities: communityStats,
        insights: generateCommunityInsights(communityStats),
      },
    })
  } catch (error) {
    console.error('Error in community analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get community analytics' },
      { status: 500 }
    )
  }
}

async function getHubAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    const { data: hubs, error } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in('note_id', await getUserNoteIds(supabase, userId))
      .eq('is_hub', true)
      .order('hub_score', { ascending: false })
      .limit(params.nodeLimit)

    if (error) {
      throw error
    }

    const { data: authorities, error: authError } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in('note_id', await getUserNoteIds(supabase, userId))
      .eq('is_authority', true)
      .order('authority_score', { ascending: false })
      .limit(params.nodeLimit)

    if (authError) {
      throw authError
    }

    const enrichedHubs = await enrichNodesWithTitles(supabase, hubs)
    const enrichedAuthorities = await enrichNodesWithTitles(
      supabase,
      authorities
    )

    return NextResponse.json({
      success: true,
      data: {
        hubs: enrichedHubs,
        authorities: enrichedAuthorities,
        insights: generateHubInsights(hubs, authorities),
      },
    })
  } catch (error) {
    console.error('Error in hub analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get hub analytics' },
      { status: 500 }
    )
  }
}

async function getIsolatedAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    const { data: isolated, error } = await supabase
      .from('note_graph_analytics')
      .select('*')
      .in('note_id', await getUserNoteIds(supabase, userId))
      .eq('is_isolated', true)
      .limit(params.nodeLimit)

    if (error) {
      throw error
    }

    const enrichedIsolated = await enrichNodesWithTitles(supabase, isolated)

    // Get suggestions for connecting isolated notes
    const suggestions = await generateConnectionSuggestions(
      supabase,
      userId,
      isolated.map((i) => i.note_id)
    )

    return NextResponse.json({
      success: true,
      data: {
        isolatedNodes: enrichedIsolated,
        count: isolated.length,
        suggestions,
        insights: generateIsolatedInsights(isolated),
      },
    })
  } catch (error) {
    console.error('Error in isolated analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get isolated analytics' },
      { status: 500 }
    )
  }
}

async function getTemporalAnalytics(
  supabase: any,
  userId: string,
  params: AnalyticsRequest
) {
  try {
    const timeframe = getTimeframeFilter(params.timeframe)

    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id, created_at, updated_at')
      .eq('user_id', userId)
      .gte('created_at', timeframe.toISOString())

    if (notesError) {
      throw notesError
    }

    const { data: relationships, error: relsError } = await supabase
      .from('note_relationships')
      .select('created_at, relationship_type')
      .gte('created_at', timeframe.toISOString())
      .or(
        `source_note_id.in.(${notes.map((n) => n.id).join(',')}),target_note_id.in.(${notes.map((n) => n.id).join(',')})`
      )

    if (relsError) {
      throw relsError
    }

    // Group by time periods
    const notesByPeriod = groupByTimePeriod(
      notes,
      params.timeframe,
      'created_at'
    )
    const relationshipsByPeriod = groupByTimePeriod(
      relationships,
      params.timeframe,
      'created_at'
    )

    return NextResponse.json({
      success: true,
      data: {
        notesByPeriod,
        relationshipsByPeriod,
        timeframe: params.timeframe,
        insights: generateTemporalInsights(
          notesByPeriod,
          relationshipsByPeriod
        ),
      },
    })
  } catch (error) {
    console.error('Error in temporal analytics:', error)
    return NextResponse.json(
      { error: 'Failed to get temporal analytics' },
      { status: 500 }
    )
  }
}

// Additional helper functions

async function recalculateAllAnalytics(supabase: any, userId: string) {
  try {
    const { data: notes, error } = await supabase
      .from('notes')
      .select('id')
      .eq('user_id', userId)

    if (error) {
      throw error
    }

    // Mark all analytics as needing recalculation
    await supabase
      .from('note_graph_analytics')
      .update({ needs_recalculation: true, is_stale: true })
      .in(
        'note_id',
        notes.map((n) => n.id)
      )

    // Trigger recalculation for each note
    const promises = notes.map((note) =>
      supabase.rpc('calculate_note_graph_metrics', { note_id: note.id })
    )

    await Promise.allSettled(promises)

    return NextResponse.json({
      success: true,
      message: `Analytics recalculation triggered for ${notes.length} notes`,
    })
  } catch (error) {
    console.error('Error recalculating analytics:', error)
    return NextResponse.json(
      { error: 'Failed to recalculate analytics' },
      { status: 500 }
    )
  }
}

// Helper utility functions

async function getUserNoteIds(
  supabase: any,
  userId: string
): Promise<string[]> {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('id')
    .eq('user_id', userId)

  if (error) {
    throw error
  }

  return notes.map((n) => n.id)
}

async function enrichNodesWithTitles(
  supabase: any,
  analytics: any[]
): Promise<any[]> {
  if (analytics.length === 0) return []

  const noteIds = analytics.map((a) => a.note_id)
  const { data: notes, error } = await supabase
    .from('notes')
    .select('id, title, tags, created_at, updated_at')
    .in('id', noteIds)

  if (error) {
    throw error
  }

  const notesMap = new Map(notes.map((n) => [n.id, n]))

  return analytics.map((a) => ({
    ...a,
    title: notesMap.get(a.note_id)?.title || 'Unknown',
    tags: notesMap.get(a.note_id)?.tags || [],
    createdAt: notesMap.get(a.note_id)?.created_at,
    updatedAt: notesMap.get(a.note_id)?.updated_at,
  }))
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

function calculateDistribution(data: any[], field: string) {
  const values = data.map((d) => d[field] || 0).sort((a, b) => a - b)
  const length = values.length

  if (length === 0)
    return { min: 0, max: 0, mean: 0, median: 0, q75: 0, q25: 0 }

  return {
    min: values[0],
    max: values[length - 1],
    mean: values.reduce((a, b) => a + b, 0) / length,
    median:
      length % 2 === 0
        ? (values[length / 2 - 1] + values[length / 2]) / 2
        : values[Math.floor(length / 2)],
    q25: values[Math.floor(length * 0.25)],
    q75: values[Math.floor(length * 0.75)],
  }
}

function getTimeframeFilter(timeframe: string): Date {
  const now = new Date()
  switch (timeframe) {
    case 'day':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000)
    case 'week':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    case 'month':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    case 'quarter':
      return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
    case 'year':
      return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
    default:
      return new Date(0) // All time
  }
}

function groupByTimePeriod(data: any[], timeframe: string, dateField: string) {
  const periods = {}

  data.forEach((item) => {
    const date = new Date(item[dateField])
    let periodKey: string

    switch (timeframe) {
      case 'day':
        periodKey = date.toISOString().split('T')[0]
        break
      case 'week':
        const weekStart = new Date(date)
        weekStart.setDate(date.getDate() - date.getDay())
        periodKey = weekStart.toISOString().split('T')[0]
        break
      case 'month':
        periodKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
        break
      case 'quarter':
        const quarter = Math.floor(date.getMonth() / 3) + 1
        periodKey = `${date.getFullYear()}-Q${quarter}`
        break
      case 'year':
        periodKey = String(date.getFullYear())
        break
      default:
        periodKey = date.toISOString().split('T')[0]
    }

    periods[periodKey] = (periods[periodKey] || 0) + 1
  })

  return periods
}

// Insight generation functions

function generateInsights(
  analytics: any[],
  relationships: any[],
  notes: any[]
): string[] {
  const insights: string[] = []

  const totalNotes = notes.length
  const connectedNotes = analytics.filter((a) => !a.is_isolated).length
  const hubs = analytics.filter((a) => a.is_hub).length

  if (totalNotes === 0) {
    insights.push(
      'Your knowledge graph is empty. Start creating notes to build connections!'
    )
    return insights
  }

  if (connectedNotes / totalNotes < 0.3) {
    insights.push(
      `${Math.round((1 - connectedNotes / totalNotes) * 100)}% of your notes are isolated. Consider adding tags or references to connect them.`
    )
  }

  if (hubs > 0) {
    insights.push(
      `You have ${hubs} hub notes that serve as central connection points in your knowledge graph.`
    )
  }

  const relationshipTypes = groupBy(relationships, 'relationship_type')
  const mostCommonType = Object.entries(relationshipTypes).sort(
    ([, a], [, b]) => b - a
  )[0]
  if (mostCommonType) {
    insights.push(
      `Most of your connections are through ${mostCommonType[0]} relationships (${mostCommonType[1]} connections).`
    )
  }

  return insights
}

function generateCentralityInsights(analytics: any[]): string[] {
  const insights: string[] = []

  const topNode = analytics[0]
  if (topNode) {
    insights.push(
      `Your most central note has ${topNode.total_connections} connections.`
    )
  }

  const highCentrality = analytics.filter(
    (a) => (a.degree_centrality || 0) > 5
  ).length
  if (highCentrality > 0) {
    insights.push(
      `${highCentrality} notes have high centrality scores, making them key knowledge hubs.`
    )
  }

  return insights
}

function generateCommunityInsights(communities: any): string[] {
  const insights: string[] = []

  const communityCount = Object.keys(communities).length
  if (communityCount > 1) {
    insights.push(
      `Your knowledge graph has ${communityCount} distinct communities or clusters.`
    )
  }

  const sizes = Object.values(communities).map((c: any) => c.size)
  const avgSize =
    sizes.reduce((a: number, b: number) => a + b, 0) / sizes.length
  insights.push(`Average community size is ${Math.round(avgSize)} notes.`)

  return insights
}

function generateHubInsights(hubs: any[], authorities: any[]): string[] {
  const insights: string[] = []

  if (hubs.length > 0) {
    insights.push(
      `You have ${hubs.length} hub notes that connect many other notes together.`
    )
  }

  if (authorities.length > 0) {
    insights.push(
      `You have ${authorities.length} authority notes that are referenced by many other notes.`
    )
  }

  return insights
}

function generateIsolatedInsights(isolated: any[]): string[] {
  const insights: string[] = []

  if (isolated.length > 0) {
    insights.push(
      `${isolated.length} notes are currently isolated with no connections.`
    )
    insights.push(
      'Consider adding tags, references, or organizing them into folders to create connections.'
    )
  }

  return insights
}

function generateTemporalInsights(
  notesByPeriod: any,
  relationshipsByPeriod: any
): string[] {
  const insights: string[] = []

  const notePeriods = Object.keys(notesByPeriod)
  const relPeriods = Object.keys(relationshipsByPeriod)

  if (notePeriods.length > 0) {
    const mostActiveNotePeriod = Object.entries(notesByPeriod).sort(
      ([, a], [, b]) => (b as number) - (a as number)
    )[0]
    insights.push(
      `Most notes were created in ${mostActiveNotePeriod[0]} (${mostActiveNotePeriod[1]} notes).`
    )
  }

  if (relPeriods.length > 0) {
    const mostActiveRelPeriod = Object.entries(relationshipsByPeriod).sort(
      ([, a], [, b]) => (b as number) - (a as number)
    )[0]
    insights.push(
      `Most connections were formed in ${mostActiveRelPeriod[0]} (${mostActiveRelPeriod[1]} connections).`
    )
  }

  return insights
}

async function detectCommunities(supabase: any, userId: string, body: any) {
  // This would implement community detection algorithms
  // For now, return a placeholder
  return NextResponse.json({
    success: true,
    message: 'Community detection is not yet implemented',
  })
}

async function findSimilarNotes(supabase: any, userId: string, body: any) {
  // This would implement similarity analysis
  // For now, return a placeholder
  return NextResponse.json({
    success: true,
    message: 'Similarity analysis is not yet implemented',
  })
}

async function analyzeSpecificNote(supabase: any, userId: string, body: any) {
  // This would analyze a specific note's position in the graph
  // For now, return a placeholder
  return NextResponse.json({
    success: true,
    message: 'Specific note analysis is not yet implemented',
  })
}

async function generateConnectionSuggestions(
  supabase: any,
  userId: string,
  noteIds: string[]
) {
  // This would generate intelligent suggestions for connecting isolated notes
  // For now, return empty suggestions
  return []
}
