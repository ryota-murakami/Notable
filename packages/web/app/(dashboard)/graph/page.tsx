'use client'

// Disable static generation for this page
export const dynamic = 'force-dynamic'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Activity,
  AlertCircle,
  BarChart3,
  BookOpen,
  Eye,
  Lightbulb,
  Link as LinkIcon,
  Network,
  Plus,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'

import { VisualGraph } from '@/components/graph/visual-graph'
import {
  type GraphFilters,
  type GraphLink,
  type GraphNode,
  useGraphAnalytics,
  useGraphData,
  useGraphFilters,
  useGraphKeyboardShortcuts,
  useGraphMutations,
  useGraphSearch,
  useGraphState,
  useGraphViews,
} from '@/hooks/use-graph-data'

function GraphPageContent() {
  const router = useRouter()

  // Graph state management
  const {
    selectedNodes,
    selectedLinks,
    hoveredNode,
    hoveredLink: _hoveredLink,
    graphMode,
    isFullscreen,
    setHoveredNode,
    setHoveredLink: _setHoveredLink,
    clearSelection,
    selectNode,
    selectLink,
    toggleGraphMode,
    toggleFullscreen,
  } = useGraphState()

  // Graph filters
  const { filters, updateFilters, resetFilters, hasActiveFilters } =
    useGraphFilters({
      maxNodes: 500,
      includeIsolated: true,
      sortBy: 'centrality',
    })

  // Data fetching
  const {
    data: graphData,
    isLoading: isLoadingData,
    error: dataError,
    refreshData,
  } = useGraphData(filters)
  const { data: analyticsData, isLoading: isLoadingAnalytics } =
    useGraphAnalytics({
      analysisType: 'overview',
      includeDetails: true,
    })
  const { views: _views, isLoading: _isLoadingViews } = useGraphViews()

  // Mutations
  const {
    refreshAnalytics,
    createRelationship,
    updatePosition: _updatePosition,
    autoDiscover,
    deleteRelationship: _deleteRelationship,
  } = useGraphMutations()

  // Search functionality
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    clearSearch,
    hasResults,
  } = useGraphSearch(graphData)

  // Local state
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [showOnboarding, setShowOnboarding] = useState(false)

  // Check if this is the user's first time on the graph page
  useEffect(() => {
    const hasVisitedGraph = localStorage.getItem('notable-graph-visited')
    if (!hasVisitedGraph && graphData && graphData.nodes.length > 0) {
      setShowOnboarding(true)
      localStorage.setItem('notable-graph-visited', 'true')
    }
  }, [graphData])

  // Keyboard shortcuts
  useGraphKeyboardShortcuts({
    onFullscreen: toggleFullscreen,
    onReset: () => {
      clearSelection()
      resetFilters()
    },
    onClearSelection: clearSelection,
    onToggleControls: () => setSidebarOpen((prev) => !prev),
    onSearch: () => {
      const searchInput = document.querySelector(
        'input[placeholder*="Search"]'
      ) as HTMLInputElement
      searchInput?.focus()
    },
  })

  // Event handlers
  const handleNodeClick = useCallback(
    (node: GraphNode) => {
      selectNode(node.id)
    },
    [selectNode]
  )

  const handleNodeHover = useCallback(
    (node: GraphNode | null) => {
      setHoveredNode(node)
    },
    [setHoveredNode]
  )

  const handleLinkClick = useCallback(
    (link: GraphLink) => {
      selectLink(link.id)
    },
    [selectLink]
  )

  const handleOpenNote = useCallback(
    (nodeId: string) => {
      router.push(`/notes/${nodeId}`)
    },
    [router]
  )

  const handleCreateRelationship = useCallback(
    async (sourceId: string, targetId: string) => {
      try {
        await createRelationship.mutateAsync({
          sourceNoteId: sourceId,
          targetNoteId: targetId,
          relationshipType: 'custom',
          relationshipStrength: 1.0,
          isManual: true,
        })
      } catch (error) {
        console.error('Failed to create relationship:', error)
      }
    },
    [createRelationship]
  )

  const handleAutoDiscover = useCallback(async () => {
    try {
      await autoDiscover.mutateAsync(undefined)
    } catch (error) {
      console.error('Failed to auto-discover relationships:', error)
    }
  }, [autoDiscover])

  // Loading and error states
  if (isLoadingData && !graphData) {
    return <GraphLoadingState />
  }

  if (dataError) {
    return <GraphErrorState error={dataError} onRetry={refreshData} />
  }

  if (!graphData || graphData.nodes.length === 0) {
    return <GraphEmptyState />
  }

  return (
    <TooltipProvider>
      <div className='flex h-screen bg-background'>
        {/* Sidebar */}
        {sidebarOpen && !isFullscreen && (
          <div className='w-80 border-r bg-muted/30 flex flex-col'>
            {/* Header */}
            <div className='p-4 border-b'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <Network className='h-6 w-6 text-primary' />
                  <h1 className='text-xl font-semibold'>Knowledge Graph</h1>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setSidebarOpen(false)}
                  className='h-8 w-8 p-0'
                >
                  <Eye className='h-4 w-4' />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className='grid grid-cols-2 gap-2 mb-4'>
                <Card className='p-3'>
                  <div className='text-lg font-semibold'>
                    {graphData.analytics.totalNodes}
                  </div>
                  <div className='text-xs text-muted-foreground'>Notes</div>
                </Card>
                <Card className='p-3'>
                  <div className='text-lg font-semibold'>
                    {graphData.analytics.totalRelationships}
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    Connections
                  </div>
                </Card>
              </div>

              {/* Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                  placeholder='Search notes and connections...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-9'
                />
                {searchQuery && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={clearSearch}
                    className='absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0'
                  >
                    ×
                  </Button>
                )}
              </div>

              {/* Search Results */}
              {hasResults && (
                <div className='mt-2 p-2 bg-background rounded border max-h-32 overflow-y-auto'>
                  <div className='text-xs font-medium text-muted-foreground mb-1'>
                    {searchResults.nodes.length} notes,{' '}
                    {searchResults.links.length} connections
                  </div>
                  {searchResults.nodes.slice(0, 3).map((node) => (
                    <div
                      key={node.id}
                      className='text-sm py-1 px-2 hover:bg-muted rounded cursor-pointer'
                      onClick={() => selectNode(node.id)}
                    >
                      <div className='font-medium truncate'>{node.title}</div>
                      <div className='text-xs text-muted-foreground'>
                        {node.connections} connections
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className='flex-1 overflow-hidden'>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='h-full flex flex-col'
              >
                <TabsList className='grid w-full grid-cols-4 mx-4 mt-4'>
                  <TabsTrigger value='overview' className='text-xs'>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value='analytics' className='text-xs'>
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value='filters' className='text-xs'>
                    Filters
                  </TabsTrigger>
                  <TabsTrigger value='tools' className='text-xs'>
                    Tools
                  </TabsTrigger>
                </TabsList>

                <div className='flex-1 overflow-y-auto p-4'>
                  <TabsContent value='overview' className='space-y-4 mt-0'>
                    <OverviewPanel
                      data={graphData}
                      selectedNodes={selectedNodes}
                      _selectedLinks={selectedLinks}
                      hoveredNode={hoveredNode}
                      onOpenNote={handleOpenNote}
                    />
                  </TabsContent>

                  <TabsContent value='analytics' className='space-y-4 mt-0'>
                    <AnalyticsPanel
                      data={analyticsData}
                      isLoading={isLoadingAnalytics}
                      onRefresh={() => refreshAnalytics.mutate()}
                    />
                  </TabsContent>

                  <TabsContent value='filters' className='space-y-4 mt-0'>
                    <FiltersPanel
                      filters={filters}
                      onUpdateFilters={updateFilters}
                      onResetFilters={resetFilters}
                      hasActiveFilters={hasActiveFilters}
                      graphData={graphData}
                    />
                  </TabsContent>

                  <TabsContent value='tools' className='space-y-4 mt-0'>
                    <ToolsPanel
                      onAutoDiscover={handleAutoDiscover}
                      onRefreshData={refreshData}
                      isAutoDiscovering={autoDiscover.isPending}
                      selectedNodes={selectedNodes}
                      onCreateRelationship={handleCreateRelationship}
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className='flex-1 relative'>
          {/* Top Controls */}
          {!isFullscreen && (
            <div className='absolute top-4 left-4 z-30 flex items-center gap-2'>
              {!sidebarOpen && (
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => setSidebarOpen(true)}
                  className='bg-white/95 backdrop-blur-sm border shadow-sm'
                >
                  <Eye className='h-4 w-4 mr-2' />
                  Show Panel
                </Button>
              )}

              <Badge variant='outline' className='bg-white/95 backdrop-blur-sm'>
                {graphData.nodes.length} nodes • {graphData.links.length} links
              </Badge>

              {hasActiveFilters && (
                <Badge
                  variant='secondary'
                  className='bg-white/95 backdrop-blur-sm'
                >
                  Filtered
                </Badge>
              )}
            </div>
          )}

          {/* Mode Toggle */}
          {!isFullscreen && (
            <div className='absolute top-4 right-20 z-30'>
              <Button
                variant='secondary'
                size='sm'
                onClick={toggleGraphMode}
                className='bg-white/95 backdrop-blur-sm border shadow-sm'
              >
                {graphMode === '2d' ? '3D View' : '2D View'}
              </Button>
            </div>
          )}

          {/* Graph Visualization */}
          <VisualGraph
            data={graphData}
            mode={graphMode}
            isFullscreen={isFullscreen}
            onFullscreenToggle={toggleFullscreen}
            onNodeClick={handleNodeClick}
            onNodeHover={handleNodeHover}
            onLinkClick={handleLinkClick}
            onBackgroundClick={clearSelection}
            className='w-full h-full'
          />
        </div>

        {/* Onboarding Dialog */}
        <OnboardingDialog
          open={showOnboarding}
          onClose={() => setShowOnboarding(false)}
          nodeCount={graphData.nodes.length}
        />
      </div>
    </TooltipProvider>
  )
}

export default function GraphPage() {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <GraphPageContent />
    </QueryClientProvider>
  )
}

// Sidebar Panels
function OverviewPanel({
  data,
  selectedNodes,
  _selectedLinks,
  hoveredNode,
  onOpenNote,
}: {
  data: any
  selectedNodes: Set<string>
  _selectedLinks: Set<string>
  hoveredNode: GraphNode | null
  onOpenNote: (nodeId: string) => void
}) {
  return (
    <div className='space-y-4'>
      {/* Graph Stats */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-base'>Graph Overview</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='grid grid-cols-2 gap-3 text-sm'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-blue-500 rounded-full' />
              <span>
                Connected:{' '}
                {data.analytics.totalNodes - data.analytics.isolatedNodes}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-gray-400 rounded-full' />
              <span>Isolated: {data.analytics.isolatedNodes}</span>
            </div>
            <div className='flex items-center gap-2'>
              <LinkIcon className='w-3 h-3 text-muted-foreground' />
              <span>
                Avg connections: {data.analytics.avgConnections.toFixed(1)}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='w-3 h-3 text-muted-foreground' />
              <span>Communities: {data.analytics.communities}</span>
            </div>
          </div>

          {data.analytics.hubNodes > 0 && (
            <div className='pt-2 border-t'>
              <div className='flex items-center gap-2 text-sm'>
                <Target className='w-3 h-3 text-amber-500' />
                <span>{data.analytics.hubNodes} hub notes detected</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hovered Node Info */}
      {hoveredNode && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-base'>Hovered Note</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='font-medium'>{hoveredNode.title}</div>
              <div className='text-sm text-muted-foreground'>
                {hoveredNode.connections} connections •{' '}
                {hoveredNode.centrality.toFixed(2)} centrality
              </div>
              {hoveredNode.tags.length > 0 && (
                <div className='flex flex-wrap gap-1'>
                  {hoveredNode.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant='secondary' className='text-xs'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              <Button
                size='sm'
                onClick={() => onOpenNote(hoveredNode.id)}
                className='w-full mt-2'
              >
                <BookOpen className='w-3 h-3 mr-2' />
                Open Note
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Selected Nodes */}
      {selectedNodes.size > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-base'>
              Selected Notes ({selectedNodes.size})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2 max-h-48 overflow-y-auto'>
              {Array.from(selectedNodes)
                .slice(0, 5)
                .map((nodeId) => {
                  const node = data.nodes.find(
                    (n: GraphNode) => n.id === nodeId
                  )
                  return node ? (
                    <div
                      key={nodeId}
                      className='flex items-center justify-between p-2 bg-muted rounded'
                    >
                      <div className='flex-1 min-w-0'>
                        <div className='font-medium text-sm truncate'>
                          {node.title}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          {node.connections} connections
                        </div>
                      </div>
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => onOpenNote(node.id)}
                        className='h-8 w-8 p-0 ml-2'
                      >
                        <BookOpen className='h-3 w-3' />
                      </Button>
                    </div>
                  ) : null
                })}
              {selectedNodes.size > 5 && (
                <div className='text-xs text-muted-foreground text-center'>
                  +{selectedNodes.size - 5} more selected
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Relationship Types */}
      {Object.keys(data.analytics.relationshipTypes).length > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-base'>Connection Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {Object.entries(data.analytics.relationshipTypes).map(
                ([type, count]) => (
                  <div key={type} className='flex justify-between text-sm'>
                    <span className='capitalize'>{type}</span>
                    <span className='text-muted-foreground'>
                      {count as number}
                    </span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function AnalyticsPanel({
  data,
  isLoading,
  onRefresh,
}: {
  data: any
  isLoading: boolean
  onRefresh: () => void
}) {
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <Skeleton className='h-32' />
        <Skeleton className='h-24' />
        <Skeleton className='h-24' />
      </div>
    )
  }

  if (!data) {
    return (
      <Card>
        <CardContent className='pt-6'>
          <div className='text-center'>
            <BarChart3 className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
            <p className='text-muted-foreground'>No analytics data available</p>
            <Button onClick={onRefresh} className='mt-4'>
              <RefreshCw className='w-4 h-4 mr-2' />
              Refresh Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium'>Graph Analytics</h3>
        <Button variant='ghost' size='sm' onClick={onRefresh}>
          <RefreshCw className='w-4 h-4' />
        </Button>
      </div>

      {/* Key Metrics */}
      <div className='grid grid-cols-2 gap-3'>
        <Card className='p-3'>
          <div className='flex items-center gap-2'>
            <TrendingUp className='w-4 h-4 text-green-500' />
            <div>
              <div className='text-sm font-medium'>Density</div>
              <div className='text-xs text-muted-foreground'>
                {((data.overview?.graphDensity || 0) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </Card>

        <Card className='p-3'>
          <div className='flex items-center gap-2'>
            <Activity className='w-4 h-4 text-blue-500' />
            <div>
              <div className='text-sm font-medium'>Avg Centrality</div>
              <div className='text-xs text-muted-foreground'>
                {data.overview?.avgConnections?.toFixed(1) || '0'}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      {data.insights && data.insights.length > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-base flex items-center gap-2'>
              <Lightbulb className='w-4 h-4' />
              Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {data.insights
                .slice(0, 3)
                .map((insight: string, index: number) => (
                  <div key={index} className='text-sm p-2 bg-muted rounded'>
                    {insight}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function FiltersPanel({
  filters,
  onUpdateFilters,
  onResetFilters,
  hasActiveFilters,
  graphData,
}: {
  filters: GraphFilters
  onUpdateFilters: (filters: Partial<GraphFilters>) => void
  onResetFilters: () => void
  hasActiveFilters: boolean
  graphData: any
}) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium'>Filters</h3>
        {hasActiveFilters && (
          <Button variant='ghost' size='sm' onClick={onResetFilters}>
            Clear All
          </Button>
        )}
      </div>

      {/* Max Nodes */}
      <div>
        <label className='text-sm font-medium mb-2 block'>
          Max Nodes: {filters.maxNodes || 500}
        </label>
        <Input
          type='number'
          value={filters.maxNodes || 500}
          onChange={(e) =>
            onUpdateFilters({ maxNodes: parseInt(e.target.value) })
          }
          min={10}
          max={2000}
        />
      </div>

      {/* Sort By */}
      <div>
        <label className='text-sm font-medium mb-2 block'>Sort By</label>
        <Select
          value={filters.sortBy || 'centrality'}
          onValueChange={(value: any) => onUpdateFilters({ sortBy: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='centrality'>Centrality</SelectItem>
            <SelectItem value='connections'>Connections</SelectItem>
            <SelectItem value='recent'>Recent</SelectItem>
            <SelectItem value='alphabetical'>Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Include Isolated */}
      <div className='flex items-center justify-between'>
        <label className='text-sm font-medium'>Include Isolated Notes</label>
        <input
          type='checkbox'
          checked={filters.includeIsolated !== false}
          onChange={(e) =>
            onUpdateFilters({ includeIsolated: e.target.checked })
          }
        />
      </div>

      {/* Relationship Types */}
      {graphData?.analytics?.relationshipTypes && (
        <div>
          <label className='text-sm font-medium mb-2 block'>
            Relationship Types
          </label>
          <div className='space-y-2 max-h-32 overflow-y-auto'>
            {Object.entries(graphData.analytics.relationshipTypes).map(
              ([type, count]) => (
                <div key={type} className='flex items-center justify-between'>
                  <label className='text-sm flex items-center gap-2'>
                    <input
                      type='checkbox'
                      checked={
                        filters.relationshipTypes?.includes(type) || false
                      }
                      onChange={(e) => {
                        const current = filters.relationshipTypes || []
                        if (e.target.checked) {
                          onUpdateFilters({
                            relationshipTypes: [...current, type],
                          })
                        } else {
                          onUpdateFilters({
                            relationshipTypes: current.filter(
                              (t) => t !== type
                            ),
                          })
                        }
                      }}
                    />
                    <span className='capitalize'>{type}</span>
                  </label>
                  <span className='text-xs text-muted-foreground'>
                    {count as number}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ToolsPanel({
  onAutoDiscover,
  onRefreshData,
  isAutoDiscovering,
  selectedNodes,
  onCreateRelationship,
}: {
  onAutoDiscover: () => void
  onRefreshData: () => void
  isAutoDiscovering: boolean
  selectedNodes: Set<string>
  onCreateRelationship: (sourceId: string, targetId: string) => void
}) {
  return (
    <div className='space-y-4'>
      <h3 className='font-medium'>Tools</h3>

      {/* Auto Discovery */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Auto-Discovery</CardTitle>
          <CardDescription className='text-xs'>
            Automatically find relationships based on tags, folders, and content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={onAutoDiscover}
            disabled={isAutoDiscovering}
            size='sm'
            className='w-full'
          >
            <Zap className='w-4 h-4 mr-2' />
            {isAutoDiscovering ? 'Discovering...' : 'Discover Relationships'}
          </Button>
        </CardContent>
      </Card>

      {/* Manual Connection */}
      {selectedNodes.size === 2 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-sm'>Manual Connection</CardTitle>
            <CardDescription className='text-xs'>
              Create a connection between selected notes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => {
                const nodes = Array.from(selectedNodes)
                onCreateRelationship(nodes[0], nodes[1])
              }}
              size='sm'
              className='w-full'
            >
              <Plus className='w-4 h-4 mr-2' />
              Connect Notes
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Refresh Data */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Data Management</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Button
            onClick={onRefreshData}
            variant='outline'
            size='sm'
            className='w-full'
          >
            <RefreshCw className='w-4 h-4 mr-2' />
            Refresh Graph
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// Loading, Error, and Empty States
function GraphLoadingState() {
  return (
    <div className='flex h-screen bg-background'>
      <div className='w-80 border-r bg-muted/30 p-4'>
        <Skeleton className='h-8 w-48 mb-4' />
        <div className='grid grid-cols-2 gap-2 mb-4'>
          <Skeleton className='h-16' />
          <Skeleton className='h-16' />
        </div>
        <Skeleton className='h-10 mb-4' />
        <div className='space-y-3'>
          <Skeleton className='h-32' />
          <Skeleton className='h-24' />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4' />
          <p className='text-lg font-medium'>Loading your knowledge graph...</p>
          <p className='text-muted-foreground'>
            This may take a moment for large graphs
          </p>
        </div>
      </div>
    </div>
  )
}

function GraphErrorState({
  error,
  onRetry,
}: {
  error: Error
  onRetry: () => void
}) {
  return (
    <div className='flex h-screen items-center justify-center bg-background'>
      <div className='text-center max-w-md'>
        <AlertCircle className='h-16 w-16 text-destructive mx-auto mb-4' />
        <h2 className='text-xl font-semibold mb-2'>Failed to Load Graph</h2>
        <p className='text-muted-foreground mb-4'>
          {error.message ||
            'An unexpected error occurred while loading your knowledge graph.'}
        </p>
        <Button onClick={onRetry}>
          <RefreshCw className='w-4 h-4 mr-2' />
          Try Again
        </Button>
      </div>
    </div>
  )
}

function GraphEmptyState() {
  return (
    <div className='flex h-screen bg-background'>
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center max-w-md'>
          <Network className='h-24 w-24 text-muted-foreground mx-auto mb-6' />
          <h2 className='text-2xl font-semibold mb-4'>
            Your Knowledge Graph is Empty
          </h2>
          <p className='text-muted-foreground mb-6'>
            Create some notes and add tags or references to see connections
            appear in your graph.
          </p>
          <div className='space-y-2'>
            <Button className='w-full'>
              <Plus className='w-4 h-4 mr-2' />
              Create Your First Note
            </Button>
            <Button variant='outline' className='w-full'>
              <BookOpen className='w-4 h-4 mr-2' />
              Learn About Knowledge Graphs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OnboardingDialog({
  open,
  onClose,
  nodeCount,
}: {
  open: boolean
  onClose: () => void
  nodeCount: number
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Network className='h-6 w-6 text-primary' />
            Welcome to Your Knowledge Graph!
          </DialogTitle>
          <DialogDescription>
            Your graph contains {nodeCount} notes with their connections
            visualized.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h4 className='font-medium'>Quick Tips:</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Click and drag nodes to move them around</li>
              <li>• Use mouse wheel to zoom in and out</li>
              <li>• Press F for fullscreen mode</li>
              <li>• Press R to reset the camera</li>
              <li>• Use the sidebar to filter and analyze</li>
            </ul>
          </div>
          <div className='flex gap-2'>
            <Button onClick={onClose} className='flex-1'>
              Start Exploring
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
