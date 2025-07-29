/**
 * React hooks for managing graph data, analytics, and interactions
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

// Types
interface GraphNode {
  id: string
  title: string
  tags: string[]
  folderId?: string
  createdAt: string
  updatedAt: string
  centrality: number
  pagerank: number
  connections: number
  hubScore: number
  isIsolated: boolean
  communityId: string
  x?: number
  y?: number
  z?: number
  canvasId?: string
  isPinned: boolean
  color?: string
  scale: number
  groupId?: string
  size: number
  opacity: number
}

interface GraphLink {
  id: string
  source: string | GraphNode
  target: string | GraphNode
  type: string
  strength: number
  discoveryMethod: string
  isManual: boolean
  contextText?: string
  createdAt: string
  interactionCount: number
  lastAccessed?: string
  width: number
  opacity: number
  color: string
  sourceTitle: string
  targetTitle: string
  sourceCentrality: number
  targetCentrality: number
}

interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
  analytics: {
    totalNodes: number
    totalRelationships: number
    isolatedNodes: number
    communities: number
    avgConnections: number
    maxConnections: number
    hubNodes: number
    relationshipTypes: Record<string, number>
  }
}

interface GraphFilters {
  maxNodes?: number
  maxDepth?: number
  minStrength?: number
  relationshipTypes?: string[]
  includeIsolated?: boolean
  centerNodeId?: string
  tagFilter?: string[]
  folderFilter?: string
  dateRange?: {
    start?: string
    end?: string
  }
  sortBy?: 'centrality' | 'connections' | 'recent' | 'alphabetical'
  includePinned?: boolean
}

interface GraphAnalytics {
  analysisType:
    | 'overview'
    | 'centrality'
    | 'communities'
    | 'hubs'
    | 'isolated'
    | 'temporal'
  timeframe: 'day' | 'week' | 'month' | 'quarter' | 'year' | 'all'
  includeDetails: boolean
  nodeLimit: number
}

interface GraphView {
  id: string
  name: string
  description?: string
  isPublic: boolean
  isDefault: boolean
  viewType: 'force' | 'hierarchical' | 'circular' | 'grid' | 'canvas'
  layoutAlgorithm: string
  filters: Record<string, any>
  nodeFilters: Record<string, any>
  edgeFilters: Record<string, any>
  visualConfig: Record<string, any>
  physicsConfig: Record<string, any>
  canvasConfig: Record<string, any>
  viewportConfig: Record<string, any>
  createdAt: string
  updatedAt: string
  lastAccessedAt?: string
  accessCount: number
}

interface CreateRelationshipRequest {
  sourceNoteId: string
  targetNoteId: string
  relationshipType?: string
  relationshipStrength?: number
  contextText?: string
  relationshipData?: Record<string, any>
  isManual?: boolean
}

interface UpdateCanvasPositionRequest {
  noteId: string
  x?: number
  y?: number
  z?: number
  canvasId?: string
  isPinned?: boolean
  color?: string
  scale?: number
  groupId?: string
}

// API functions
async function fetchGraphData(
  filters: GraphFilters = {}
): Promise<{ data: GraphData }> {
  const params = new URLSearchParams()

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        params.set(key, value.join(','))
      } else if (typeof value === 'object') {
        params.set(key, JSON.stringify(value))
      } else {
        params.set(key, String(value))
      }
    }
  })

  const response = await fetch(`/api/graph/data?${params}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch graph data: ${response.statusText}`)
  }
  return response.json()
}

async function fetchGraphAnalytics(
  params: Partial<GraphAnalytics> = {}
): Promise<{ data: any }> {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value))
    }
  })

  const response = await fetch(`/api/graph/analytics?${searchParams}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch graph analytics: ${response.statusText}`)
  }
  return response.json()
}

async function fetchGraphViews(
  includePublic = false
): Promise<{ data: GraphView[] }> {
  const params = new URLSearchParams()
  if (includePublic) {
    params.set('includePublic', 'true')
  }

  const response = await fetch(`/api/graph/views?${params}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch graph views: ${response.statusText}`)
  }
  return response.json()
}

async function refreshGraphAnalytics(): Promise<{
  success: boolean
  message: string
}> {
  const response = await fetch('/api/graph/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'refresh-analytics' }),
  })

  if (!response.ok) {
    throw new Error(`Failed to refresh analytics: ${response.statusText}`)
  }
  return response.json()
}

async function createRelationship(
  data: CreateRelationshipRequest
): Promise<{ data: any }> {
  const response = await fetch('/api/graph/relationships', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to create relationship: ${response.statusText}`)
  }
  return response.json()
}

async function updateCanvasPosition(
  data: UpdateCanvasPositionRequest
): Promise<{ data: any }> {
  const response = await fetch('/api/graph/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'update-canvas-position', ...data }),
  })

  if (!response.ok) {
    throw new Error(`Failed to update canvas position: ${response.statusText}`)
  }
  return response.json()
}

async function bulkUpdatePositions(
  positions: UpdateCanvasPositionRequest[]
): Promise<{ data: any }> {
  const response = await fetch('/api/graph/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'bulk-update-positions', positions }),
  })

  if (!response.ok) {
    throw new Error(`Failed to bulk update positions: ${response.statusText}`)
  }
  return response.json()
}

async function autoDiscoverRelationships(
  noteId?: string
): Promise<{ success: boolean; message: string }> {
  const response = await fetch('/api/graph/relationships', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'auto-discover', noteId }),
  })

  if (!response.ok) {
    throw new Error(
      `Failed to auto-discover relationships: ${response.statusText}`
    )
  }
  return response.json()
}

async function deleteRelationship(id: string): Promise<{ success: boolean }> {
  const response = await fetch(`/api/graph/relationships?id=${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Failed to delete relationship: ${response.statusText}`)
  }
  return response.json()
}

// Main graph data hook
export function useGraphData(filters: GraphFilters = {}) {
  const {
    data: graphData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['graph-data', filters],
    queryFn: () => fetchGraphData(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })

  const refreshData = useCallback(() => {
    refetch()
  }, [refetch])

  return {
    data: graphData?.data || null,
    isLoading,
    error,
    refreshData,
  }
}

// Graph analytics hook
export function useGraphAnalytics(params: Partial<GraphAnalytics> = {}) {
  const {
    data: analyticsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['graph-analytics', params],
    queryFn: () => fetchGraphAnalytics(params),
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    data: analyticsData?.data || null,
    isLoading,
    error,
    refetch,
  }
}

// Graph views hook
export function useGraphViews(includePublic = false) {
  const {
    data: viewsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['graph-views', includePublic],
    queryFn: () => fetchGraphViews(includePublic),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  })

  return {
    views: viewsData?.data || [],
    isLoading,
    error,
    refetch,
  }
}

// Mutations hook for graph operations
export function useGraphMutations() {
  const queryClient = useQueryClient()

  const refreshAnalyticsMutation = useMutation({
    mutationFn: refreshGraphAnalytics,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
      queryClient.invalidateQueries({ queryKey: ['graph-analytics'] })
    },
  })

  const createRelationshipMutation = useMutation({
    mutationFn: createRelationship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
      queryClient.invalidateQueries({ queryKey: ['graph-analytics'] })
    },
  })

  const updatePositionMutation = useMutation({
    mutationFn: updateCanvasPosition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
    },
  })

  const bulkUpdatePositionsMutation = useMutation({
    mutationFn: bulkUpdatePositions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
    },
  })

  const autoDiscoverMutation = useMutation({
    mutationFn: autoDiscoverRelationships,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
      queryClient.invalidateQueries({ queryKey: ['graph-analytics'] })
    },
  })

  const deleteRelationshipMutation = useMutation({
    mutationFn: deleteRelationship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['graph-data'] })
      queryClient.invalidateQueries({ queryKey: ['graph-analytics'] })
    },
  })

  return {
    refreshAnalytics: refreshAnalyticsMutation,
    createRelationship: createRelationshipMutation,
    updatePosition: updatePositionMutation,
    bulkUpdatePositions: bulkUpdatePositionsMutation,
    autoDiscover: autoDiscoverMutation,
    deleteRelationship: deleteRelationshipMutation,
  }
}

// Graph state management hook
export function useGraphState() {
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set())
  const [selectedLinks, setSelectedLinks] = useState<Set<string>>(new Set())
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null)
  const [hoveredLink, setHoveredLink] = useState<GraphLink | null>(null)
  const [graphMode, setGraphMode] = useState<'2d' | '3d'>('2d')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const clearSelection = useCallback(() => {
    setSelectedNodes(new Set())
    setSelectedLinks(new Set())
  }, [])

  const selectNode = useCallback((nodeId: string, multiSelect = false) => {
    if (multiSelect) {
      setSelectedNodes((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(nodeId)) {
          newSet.delete(nodeId)
        } else {
          newSet.add(nodeId)
        }
        return newSet
      })
    } else {
      setSelectedNodes(new Set([nodeId]))
      setSelectedLinks(new Set())
    }
  }, [])

  const selectLink = useCallback((linkId: string, multiSelect = false) => {
    if (multiSelect) {
      setSelectedLinks((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(linkId)) {
          newSet.delete(linkId)
        } else {
          newSet.add(linkId)
        }
        return newSet
      })
    } else {
      setSelectedLinks(new Set([linkId]))
      setSelectedNodes(new Set())
    }
  }, [])

  const toggleGraphMode = useCallback(() => {
    setGraphMode((prev) => (prev === '2d' ? '3d' : '2d'))
  }, [])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev)
  }, [])

  return {
    selectedNodes,
    selectedLinks,
    hoveredNode,
    hoveredLink,
    graphMode,
    isFullscreen,
    setSelectedNodes,
    setSelectedLinks,
    setHoveredNode,
    setHoveredLink,
    setGraphMode,
    setIsFullscreen,
    clearSelection,
    selectNode,
    selectLink,
    toggleGraphMode,
    toggleFullscreen,
  }
}

// Graph filters hook
export function useGraphFilters(initialFilters: GraphFilters = {}) {
  const [filters, setFilters] = useState<GraphFilters>(initialFilters)

  const updateFilters = useCallback((newFilters: Partial<GraphFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(initialFilters)
  }, [initialFilters])

  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some((value) => {
      if (Array.isArray(value)) {
        return value.length > 0
      }
      if (typeof value === 'object' && value !== null) {
        return Object.keys(value).length > 0
      }
      return value !== undefined && value !== null && value !== ''
    })
  }, [filters])

  return {
    filters,
    setFilters,
    updateFilters,
    resetFilters,
    hasActiveFilters,
  }
}

// Graph search hook
export function useGraphSearch(data: GraphData | null) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{
    nodes: GraphNode[]
    links: GraphLink[]
  }>({ nodes: [], links: [] })

  useEffect(() => {
    if (!data || !searchQuery.trim()) {
      setSearchResults({ nodes: [], links: [] })
      return
    }

    const query = searchQuery.toLowerCase()

    const matchingNodes = data.nodes.filter(
      (node) =>
        node.title.toLowerCase().includes(query) ||
        node.tags.some((tag) => tag.toLowerCase().includes(query))
    )

    const matchingLinks = data.links.filter(
      (link) =>
        link.sourceTitle.toLowerCase().includes(query) ||
        link.targetTitle.toLowerCase().includes(query) ||
        link.type.toLowerCase().includes(query) ||
        (link.contextText && link.contextText.toLowerCase().includes(query))
    )

    setSearchResults({ nodes: matchingNodes, links: matchingLinks })
  }, [data, searchQuery])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setSearchResults({ nodes: [], links: [] })
  }, [])

  const hasResults =
    searchResults.nodes.length > 0 || searchResults.links.length > 0

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    clearSearch,
    hasResults,
  }
}

// Graph performance monitoring hook
export function useGraphPerformance() {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    nodeCount: 0,
    linkCount: 0,
    fps: 0,
    memoryUsage: 0,
  })

  const startRenderTiming = useCallback(() => {
    return performance.now()
  }, [])

  const endRenderTiming = useCallback((startTime: number) => {
    const renderTime = performance.now() - startTime
    setMetrics((prev) => ({ ...prev, renderTime }))
  }, [])

  const updateMetrics = useCallback((data: Partial<typeof metrics>) => {
    setMetrics((prev) => ({ ...prev, ...data }))
  }, [])

  // Monitor memory usage
  useEffect(() => {
    const interval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics((prev) => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // MB
        }))
      }
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return {
    metrics,
    startRenderTiming,
    endRenderTiming,
    updateMetrics,
  }
}

// Graph keyboard shortcuts hook
export function useGraphKeyboardShortcuts(callbacks: {
  onFullscreen?: () => void
  onReset?: () => void
  onTogglePhysics?: () => void
  onClearSelection?: () => void
  onToggleControls?: () => void
  onSearch?: () => void
  onZoomIn?: () => void
  onZoomOut?: () => void
}) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement)?.contentEditable === 'true'
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case 'f':
          event.preventDefault()
          callbacks.onFullscreen?.()
          break
        case 'r':
          event.preventDefault()
          callbacks.onReset?.()
          break
        case 'p':
          event.preventDefault()
          callbacks.onTogglePhysics?.()
          break
        case 'escape':
          event.preventDefault()
          callbacks.onClearSelection?.()
          break
        case 'c':
          if (event.ctrlKey || event.metaKey) return // Don't interfere with copy
          event.preventDefault()
          callbacks.onToggleControls?.()
          break
        case '/':
          event.preventDefault()
          callbacks.onSearch?.()
          break
        case '+':
        case '=':
          if (event.ctrlKey || event.metaKey) return // Don't interfere with browser zoom
          event.preventDefault()
          callbacks.onZoomIn?.()
          break
        case '-':
          if (event.ctrlKey || event.metaKey) return // Don't interfere with browser zoom
          event.preventDefault()
          callbacks.onZoomOut?.()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [callbacks])
}

// Export types for use in components
export type {
  GraphNode,
  GraphLink,
  GraphData,
  GraphFilters,
  GraphAnalytics,
  GraphView,
  CreateRelationshipRequest,
  UpdateCanvasPositionRequest,
}
