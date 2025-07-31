'use client'

import * as React from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  Download,
  Eye,
  EyeOff,
  Filter,
  Info,
  Layers,
  Link,
  Maximize2,
  Minimize2,
  MousePointer,
  Move3D,
  Pause,
  Pin,
  PinOff,
  Play,
  RotateCcw,
  Search,
  Settings,
  Share,
  Trash2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Dynamic imports for React Force Graph to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-full flex items-center justify-center'>
      Loading graph...
    </div>
  ),
})

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-full flex items-center justify-center'>
      Loading 3D graph...
    </div>
  ),
})

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

interface VisualGraphProps {
  data: GraphData
  mode: '2d' | '3d'
  isFullscreen?: boolean
  onFullscreenToggle?: () => void
  onNodeClick?: (node: GraphNode) => void
  onNodeHover?: (node: GraphNode | null) => void
  onLinkClick?: (link: GraphLink) => void
  onBackgroundClick?: () => void
  className?: string
  height?: number
  width?: number
}

interface GraphFilters {
  showIsolated: boolean
  minConnections: number
  maxConnections: number
  relationshipTypes: string[]
  communities: string[]
  searchQuery: string
  minStrength: number
}

interface GraphSettings {
  physics: {
    enabled: boolean
    strength: number
    distance: number
    collisionRadius: number
    gravity: number
    damping: number
  }
  visual: {
    nodeSize: number
    linkWidth: number
    showLabels: boolean
    labelSize: number
    nodeColor: 'auto' | 'community' | 'centrality' | 'custom'
    linkColor: 'auto' | 'type' | 'strength'
    backgroundColor: string
    opacity: number
  }
  interaction: {
    enableDrag: boolean
    enableZoom: boolean
    enablePan: boolean
    enableHover: boolean
    hoverDistance: number
  }
}

const defaultSettings: GraphSettings = {
  physics: {
    enabled: true,
    strength: -300,
    distance: 100,
    collisionRadius: 10,
    gravity: 0.1,
    damping: 0.9,
  },
  visual: {
    nodeSize: 8,
    linkWidth: 2,
    showLabels: true,
    labelSize: 12,
    nodeColor: 'auto',
    linkColor: 'auto',
    backgroundColor: '#ffffff',
    opacity: 1,
  },
  interaction: {
    enableDrag: true,
    enableZoom: true,
    enablePan: true,
    enableHover: true,
    hoverDistance: 100,
  },
}

export function VisualGraph({
  data,
  mode = '2d',
  isFullscreen = false,
  onFullscreenToggle,
  onNodeClick,
  onNodeHover,
  onLinkClick,
  onBackgroundClick,
  className,
  height = 600,
  width = 800,
}: VisualGraphProps) {
  // Refs
  const graphRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // State
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set())
  const [selectedLinks, setSelectedLinks] = useState<Set<string>>(new Set())
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null)
  const [hoveredLink, setHoveredLink] = useState<GraphLink | null>(null)
  const [settings, setSettings] = useState<GraphSettings>(defaultSettings)
  const [filters, setFilters] = useState<GraphFilters>({
    showIsolated: true,
    minConnections: 0,
    maxConnections: 1000,
    relationshipTypes: [],
    communities: [],
    searchQuery: '',
    minStrength: 0,
  })
  const [isPhysicsRunning, setIsPhysicsRunning] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)

  // Memoized filtered data
  const filteredData = useMemo(() => {
    if (!data) return { nodes: [], links: [] }

    const filteredNodes = data.nodes.filter((node) => {
      // Search filter
      if (
        filters.searchQuery &&
        !node.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false
      }

      // Isolated nodes filter
      if (!filters.showIsolated && node.isIsolated) {
        return false
      }

      // Connection filters
      if (
        node.connections < filters.minConnections ||
        node.connections > filters.maxConnections
      ) {
        return false
      }

      // Community filter
      if (
        filters.communities.length > 0 &&
        !filters.communities.includes(node.communityId)
      ) {
        return false
      }

      return true
    })

    const nodeIds = new Set(filteredNodes.map((n) => n.id))

    const filteredLinks = data.links.filter((link) => {
      const sourceId =
        typeof link.source === 'string' ? link.source : link.source.id
      const targetId =
        typeof link.target === 'string' ? link.target : link.target.id

      // Only include links between filtered nodes
      if (!nodeIds.has(sourceId) || !nodeIds.has(targetId)) {
        return false
      }

      // Relationship type filter
      if (
        filters.relationshipTypes.length > 0 &&
        !filters.relationshipTypes.includes(link.type)
      ) {
        return false
      }

      // Strength filter
      if (link.strength < filters.minStrength) {
        return false
      }

      return true
    })

    return { nodes: filteredNodes, links: filteredLinks }
  }, [data, filters])

  // Event handlers
  const handleNodeClick = useCallback(
    (node: GraphNode, event?: any) => {
      if (event?.ctrlKey || event?.metaKey) {
        // Multi-selection
        setSelectedNodes((prev) => {
          const newSet = new Set(prev)
          if (newSet.has(node.id)) {
            newSet.delete(node.id)
          } else {
            newSet.add(node.id)
          }
          return newSet
        })
      } else {
        // Single selection
        const wasSelected =
          selectedNodes.has(node.id) && selectedNodes.size === 1
        setSelectedNodes(wasSelected ? new Set() : new Set([node.id]))
        setSelectedLinks(new Set())
      }

      onNodeClick?.(node)
    },
    [selectedNodes, onNodeClick]
  )

  const handleNodeHover = useCallback(
    (node: GraphNode | null) => {
      setHoveredNode(node)
      onNodeHover?.(node)
    },
    [onNodeHover]
  )

  const handleLinkClick = useCallback(
    (link: GraphLink) => {
      setSelectedLinks((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(link.id)) {
          newSet.delete(link.id)
        } else {
          newSet.add(link.id)
        }
        return newSet
      })
      setSelectedNodes(new Set())
      onLinkClick?.(link)
    },
    [onLinkClick]
  )

  const handleLinkHover = useCallback((link: GraphLink | null) => {
    setHoveredLink(link)
  }, [])

  const handleBackgroundClick = useCallback(() => {
    setSelectedNodes(new Set())
    setSelectedLinks(new Set())
    onBackgroundClick?.()
  }, [onBackgroundClick])

  // Graph customization functions
  const getNodeColor = useCallback(
    (node: GraphNode) => {
      if (selectedNodes.has(node.id)) {
        return '#ff6b6b' // Red for selected
      }

      if (hoveredNode?.id === node.id) {
        return '#4ecdc4' // Teal for hovered
      }

      switch (settings.visual.nodeColor) {
        case 'community':
          return getCommunityColor(node.communityId)
        case 'centrality':
          return getCentralityColor(node.centrality)
        case 'custom':
          return node.color || '#666'
        default:
          return node.isIsolated ? '#ccc' : '#666'
      }
    },
    [selectedNodes, hoveredNode, settings.visual.nodeColor]
  )

  const getLinkColor = useCallback(
    (link: GraphLink) => {
      if (selectedLinks.has(link.id)) {
        return '#ff6b6b' // Red for selected
      }

      if (hoveredLink?.id === link.id) {
        return '#4ecdc4' // Teal for hovered
      }

      switch (settings.visual.linkColor) {
        case 'type':
          return link.color
        case 'strength':
          return getStrengthColor(link.strength)
        default:
          return link.color
      }
    },
    [selectedLinks, hoveredLink, settings.visual.linkColor]
  )

  const getNodeSize = useCallback(
    (node: GraphNode) => {
      const baseSize = settings.visual.nodeSize
      const scaleFactor = selectedNodes.has(node.id) ? 1.5 : 1
      return baseSize * scaleFactor * (node.scale || 1)
    },
    [selectedNodes, settings.visual.nodeSize]
  )

  const getLinkWidth = useCallback(
    (link: GraphLink) => {
      const baseWidth = settings.visual.linkWidth
      const scaleFactor = selectedLinks.has(link.id) ? 2 : 1
      return (baseWidth * scaleFactor * link.width) / 2
    },
    [selectedLinks, settings.visual.linkWidth]
  )

  // Physics controls
  const pausePhysics = useCallback(() => {
    if (graphRef.current) {
      graphRef.current.pauseAnimation()
      setIsPhysicsRunning(false)
    }
  }, [])

  const resumePhysics = useCallback(() => {
    if (graphRef.current) {
      graphRef.current.resumeAnimation()
      setIsPhysicsRunning(true)
    }
  }, [])

  const resetCamera = useCallback(() => {
    if (graphRef.current) {
      if (mode === '3d') {
        graphRef.current.cameraPosition(
          { x: 0, y: 0, z: 1000 },
          { x: 0, y: 0, z: 0 },
          1000
        )
      } else {
        graphRef.current.zoom(1, 500)
        graphRef.current.centerAt(0, 0, 500)
      }
    }
  }, [mode])

  const focusNode = useCallback(
    (nodeId: string) => {
      const node = filteredData.nodes.find((n) => n.id === nodeId)
      if (node && graphRef.current) {
        if (mode === '3d') {
          graphRef.current.cameraPosition(
            { x: node.x! + 300, y: node.y! + 300, z: node.z! + 300 },
            { x: node.x!, y: node.y!, z: node.z! },
            1000
          )
        } else {
          graphRef.current.centerAt(node.x!, node.y!, 1000)
          graphRef.current.zoom(2, 1000)
        }
      }
    },
    [filteredData.nodes, mode]
  )

  // Node label rendering
  const renderNodeLabel = useCallback(
    (node: GraphNode) => {
      if (!settings.visual.showLabels) return ''
      return node.title
    },
    [settings.visual.showLabels]
  )

  // Node canvas object for custom rendering
  const renderNodeCanvasObject = useCallback(
    (node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
      if (!settings.visual.showLabels) return

      const label = node.title
      const fontSize = settings.visual.labelSize / globalScale
      ctx.font = `${fontSize}px Sans-Serif`
      const textWidth = ctx.measureText(label).width
      const bckgDimensions = [textWidth, fontSize].map(
        (n) => n + fontSize * 0.2
      )

      // Background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.fillRect(
        node.x! - bckgDimensions[0] / 2,
        node.y! - bckgDimensions[1] / 2,
        bckgDimensions[0],
        bckgDimensions[1]
      )

      // Text
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = getNodeColor(node)
      ctx.fillText(label, node.x!, node.y!)

      // Store dimensions for pointer area
      ;(node as any).__bckgDimensions = bckgDimensions
    },
    [settings.visual.showLabels, settings.visual.labelSize, getNodeColor]
  )

  const nodePointerAreaPaint = useCallback(
    (node: GraphNode, color: string, ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = color
      const bckgDimensions = (node as any).__bckgDimensions
      bckgDimensions &&
        ctx.fillRect(
          node.x! - bckgDimensions[0] / 2,
          node.y! - bckgDimensions[1] / 2,
          bckgDimensions[0],
          bckgDimensions[1]
        )
    },
    []
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target !== document.body) return

      switch (event.key) {
        case 'f':
          onFullscreenToggle?.()
          break
        case 'r':
          resetCamera()
          break
        case 'p':
          isPhysicsRunning ? pausePhysics() : resumePhysics()
          break
        case 'Escape':
          setSelectedNodes(new Set())
          setSelectedLinks(new Set())
          break
        case 'c':
          setShowControls((prev) => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [
    isPhysicsRunning,
    onFullscreenToggle,
    resetCamera,
    pausePhysics,
    resumePhysics,
  ])

  // Analytics panel
  const AnalyticsPanel = () => (
    <Card className='absolute top-4 left-4 w-80 bg-white/95 backdrop-blur-sm border shadow-lg z-50'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-lg flex items-center gap-2'>
          <Info className='h-5 w-5' />
          Graph Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <div className='font-medium text-muted-foreground'>Nodes</div>
            <div className='text-lg font-semibold'>
              {data.analytics.totalNodes}
            </div>
          </div>
          <div>
            <div className='font-medium text-muted-foreground'>Links</div>
            <div className='text-lg font-semibold'>
              {data.analytics.totalRelationships}
            </div>
          </div>
          <div>
            <div className='font-medium text-muted-foreground'>Communities</div>
            <div className='text-lg font-semibold'>
              {data.analytics.communities}
            </div>
          </div>
          <div>
            <div className='font-medium text-muted-foreground'>Hubs</div>
            <div className='text-lg font-semibold'>
              {data.analytics.hubNodes}
            </div>
          </div>
        </div>

        <div>
          <div className='font-medium text-muted-foreground mb-2'>
            Relationship Types
          </div>
          <div className='space-y-1'>
            {Object.entries(data.analytics.relationshipTypes).map(
              ([type, count]) => (
                <div key={type} className='flex justify-between text-sm'>
                  <span className='capitalize'>{type}</span>
                  <span>{count}</span>
                </div>
              )
            )}
          </div>
        </div>

        {selectedNodes.size > 0 && (
          <div className='border-t pt-3'>
            <div className='font-medium text-muted-foreground mb-2'>
              Selected Nodes
            </div>
            {Array.from(selectedNodes)
              .slice(0, 3)
              .map((nodeId) => {
                const node = filteredData.nodes.find((n) => n.id === nodeId)
                return node ? (
                  <div key={nodeId} className='text-sm py-1'>
                    <div className='font-medium truncate'>{node.title}</div>
                    <div className='text-muted-foreground'>
                      {node.connections} connections •{' '}
                      {node.centrality.toFixed(2)} centrality
                    </div>
                  </div>
                ) : null
              })}
            {selectedNodes.size > 3 && (
              <div className='text-sm text-muted-foreground'>
                +{selectedNodes.size - 3} more
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )

  const ForceGraphComponent = mode === '3d' ? ForceGraph3D : ForceGraph2D

  return (
    <TooltipProvider>
      <div
        ref={containerRef}
        className={cn(
          'relative bg-white rounded-lg border overflow-hidden',
          isFullscreen && 'fixed inset-0 z-50 rounded-none',
          className
        )}
        style={{
          height: isFullscreen ? '100vh' : height,
          width: isFullscreen ? '100vw' : width,
        }}
      >
        {/* Main Graph */}
        <ForceGraphComponent
          ref={graphRef}
          graphData={filteredData}
          width={isFullscreen ? window.innerWidth : width}
          height={isFullscreen ? window.innerHeight : height}
          backgroundColor={settings.visual.backgroundColor}
          // Node styling
          nodeVal={getNodeSize as any}
          nodeColor={getNodeColor as any}
          nodeOpacity={settings.visual.opacity}
          nodeLabel={renderNodeLabel as any}
          nodeCanvasObject={
            mode === '2d' ? (renderNodeCanvasObject as any) : undefined
          }
          nodePointerAreaPaint={
            mode === '2d' ? (nodePointerAreaPaint as any) : undefined
          }
          // Link styling
          linkWidth={getLinkWidth as any}
          linkColor={getLinkColor as any}
          linkOpacity={settings.visual.opacity}
          linkLabel={(link: any) =>
            `${link.sourceTitle} → ${link.targetTitle} (${link.type})`
          }
          // Interactions
          enableNodeDrag={settings.interaction.enableDrag}
          enableZoomInteraction={settings.interaction.enableZoom}
          enablePanInteraction={settings.interaction.enablePan}
          // Events
          onNodeClick={handleNodeClick as any}
          onNodeHover={handleNodeHover as any}
          onLinkClick={handleLinkClick as any}
          onLinkHover={handleLinkHover as any}
          onBackgroundClick={handleBackgroundClick}
          // Physics
          d3AlphaDecay={settings.physics.enabled ? 0.0228 : 0}
          d3VelocityDecay={settings.physics.damping}
          // 3D specific props
          {...(mode === '3d' && {
            showNavInfo: false,
            controlType: 'orbit',
          })}
        />

        {/* Controls Overlay */}
        {showControls && (
          <div className='absolute top-4 right-4 flex flex-col gap-2 z-40'>
            {/* Mode Toggle */}
            <Card className='p-2 bg-white/95 backdrop-blur-sm border shadow-sm'>
              <div className='flex items-center gap-2'>
                <Badge variant='outline' className='text-xs'>
                  {mode.toUpperCase()}
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={onFullscreenToggle}
                  className='h-8 w-8 p-0'
                >
                  {isFullscreen ? (
                    <Minimize2 className='h-4 w-4' />
                  ) : (
                    <Maximize2 className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </Card>

            {/* Main Controls */}
            <Card className='p-2 bg-white/95 backdrop-blur-sm border shadow-sm'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={resetCamera}
                        className='h-8 w-8 p-0'
                      >
                        <RotateCcw className='h-4 w-4' />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Reset Camera (R)</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={
                          isPhysicsRunning ? pausePhysics : resumePhysics
                        }
                        className='h-8 w-8 p-0'
                      >
                        {isPhysicsRunning ? (
                          <Pause className='h-4 w-4' />
                        ) : (
                          <Play className='h-4 w-4' />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isPhysicsRunning ? 'Pause' : 'Resume'} Physics (P)
                    </TooltipContent>
                  </Tooltip>

                  <Popover open={showFilters} onOpenChange={setShowFilters}>
                    <PopoverTrigger asChild>
                      <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                        <Filter className='h-4 w-4' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-80' align='end'>
                      <FiltersPanel
                        filters={filters}
                        setFilters={setFilters}
                        data={data}
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover open={showSettings} onOpenChange={setShowSettings}>
                    <PopoverTrigger asChild>
                      <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                        <Settings className='h-4 w-4' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-80' align='end'>
                      <SettingsPanel
                        settings={settings}
                        setSettings={setSettings}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className='flex items-center gap-1'>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setShowAnalytics((prev) => !prev)}
                    className='h-8 w-8 p-0'
                  >
                    <Info className='h-4 w-4' />
                  </Button>

                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setShowControls(false)}
                    className='h-8 w-8 p-0'
                  >
                    <EyeOff className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Show Controls Toggle (when hidden) */}
        {!showControls && (
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setShowControls(true)}
            className='absolute top-4 right-4 h-8 w-8 p-0 bg-white/95 backdrop-blur-sm border shadow-sm z-40'
          >
            <Eye className='h-4 w-4' />
          </Button>
        )}

        {/* Analytics Panel */}
        {showAnalytics && <AnalyticsPanel />}

        {/* Keyboard Shortcuts Info */}
        <div className='absolute bottom-4 left-4 text-xs text-muted-foreground bg-white/95 backdrop-blur-sm rounded px-2 py-1 border z-40'>
          <div>
            F: Fullscreen • R: Reset • P: Physics • C: Controls • Esc: Clear
            Selection
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

// Helper components
function FiltersPanel({
  filters,
  setFilters,
  data,
}: {
  filters: GraphFilters
  setFilters: (filters: GraphFilters) => void
  data: GraphData
}) {
  const relationshipTypes = Object.keys(data.analytics.relationshipTypes)
  const communities = Array.from(
    new Set(data.nodes.map((n) => n.communityId))
  ).filter((c) => c !== 'unassigned')

  return (
    <div className='space-y-4'>
      <div>
        <h4 className='font-medium mb-2'>Search</h4>
        <Input
          placeholder='Search nodes...'
          value={filters.searchQuery}
          onChange={(e) =>
            setFilters({ ...filters, searchQuery: e.target.value })
          }
        />
      </div>

      <div className='flex items-center justify-between'>
        <label className='text-sm font-medium'>Show Isolated Nodes</label>
        <Switch
          checked={filters.showIsolated}
          onCheckedChange={(checked) =>
            setFilters({ ...filters, showIsolated: checked })
          }
        />
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>
          Min Connections: {filters.minConnections}
        </label>
        <Slider
          value={[filters.minConnections]}
          onValueChange={([value]) =>
            setFilters({ ...filters, minConnections: value })
          }
          max={data.analytics.maxConnections}
          step={1}
        />
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>
          Min Relationship Strength: {filters.minStrength}
        </label>
        <Slider
          value={[filters.minStrength]}
          onValueChange={([value]) =>
            setFilters({ ...filters, minStrength: value })
          }
          max={10}
          step={0.1}
        />
      </div>

      {relationshipTypes.length > 0 && (
        <div>
          <label className='text-sm font-medium mb-2 block'>
            Relationship Types
          </label>
          <div className='space-y-2 max-h-32 overflow-y-auto'>
            {relationshipTypes.map((type) => (
              <div key={type} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  id={`type-${type}`}
                  checked={filters.relationshipTypes.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        relationshipTypes: [...filters.relationshipTypes, type],
                      })
                    } else {
                      setFilters({
                        ...filters,
                        relationshipTypes: filters.relationshipTypes.filter(
                          (t) => t !== type
                        ),
                      })
                    }
                  }}
                />
                <label htmlFor={`type-${type}`} className='text-sm capitalize'>
                  {type} ({data.analytics.relationshipTypes[type]})
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {communities.length > 0 && (
        <div>
          <label className='text-sm font-medium mb-2 block'>Communities</label>
          <div className='space-y-2 max-h-32 overflow-y-auto'>
            {communities.map((community) => (
              <div key={community} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  id={`community-${community}`}
                  checked={filters.communities.includes(community)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        communities: [...filters.communities, community],
                      })
                    } else {
                      setFilters({
                        ...filters,
                        communities: filters.communities.filter(
                          (c) => c !== community
                        ),
                      })
                    }
                  }}
                />
                <label htmlFor={`community-${community}`} className='text-sm'>
                  {community}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SettingsPanel({
  settings,
  setSettings,
}: {
  settings: GraphSettings
  setSettings: (settings: GraphSettings) => void
}) {
  return (
    <Tabs defaultValue='visual' className='w-full'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='visual'>Visual</TabsTrigger>
        <TabsTrigger value='physics'>Physics</TabsTrigger>
        <TabsTrigger value='interaction'>Interaction</TabsTrigger>
      </TabsList>

      <TabsContent value='visual' className='space-y-4 mt-4'>
        <div>
          <label className='text-sm font-medium mb-2 block'>
            Node Size: {settings.visual.nodeSize}
          </label>
          <Slider
            value={[settings.visual.nodeSize]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                visual: { ...settings.visual, nodeSize: value },
              })
            }
            min={1}
            max={50}
            step={1}
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Link Width: {settings.visual.linkWidth}
          </label>
          <Slider
            value={[settings.visual.linkWidth]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                visual: { ...settings.visual, linkWidth: value },
              })
            }
            min={0.5}
            max={10}
            step={0.5}
          />
        </div>

        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Show Labels</label>
          <Switch
            checked={settings.visual.showLabels}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                visual: { ...settings.visual, showLabels: checked },
              })
            }
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Node Coloring
          </label>
          <Select
            value={settings.visual.nodeColor}
            onValueChange={(value: any) =>
              setSettings({
                ...settings,
                visual: { ...settings.visual, nodeColor: value },
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='auto'>Auto</SelectItem>
              <SelectItem value='community'>Community</SelectItem>
              <SelectItem value='centrality'>Centrality</SelectItem>
              <SelectItem value='custom'>Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Link Coloring
          </label>
          <Select
            value={settings.visual.linkColor}
            onValueChange={(value: any) =>
              setSettings({
                ...settings,
                visual: { ...settings.visual, linkColor: value },
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='auto'>Auto</SelectItem>
              <SelectItem value='type'>By Type</SelectItem>
              <SelectItem value='strength'>By Strength</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </TabsContent>

      <TabsContent value='physics' className='space-y-4 mt-4'>
        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Enable Physics</label>
          <Switch
            checked={settings.physics.enabled}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                physics: { ...settings.physics, enabled: checked },
              })
            }
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Force Strength: {settings.physics.strength}
          </label>
          <Slider
            value={[settings.physics.strength]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                physics: { ...settings.physics, strength: value },
              })
            }
            min={-1000}
            max={0}
            step={10}
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Link Distance: {settings.physics.distance}
          </label>
          <Slider
            value={[settings.physics.distance]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                physics: { ...settings.physics, distance: value },
              })
            }
            min={10}
            max={500}
            step={10}
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Collision Radius: {settings.physics.collisionRadius}
          </label>
          <Slider
            value={[settings.physics.collisionRadius]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                physics: { ...settings.physics, collisionRadius: value },
              })
            }
            min={1}
            max={50}
            step={1}
          />
        </div>

        <div>
          <label className='text-sm font-medium mb-2 block'>
            Damping: {settings.physics.damping}
          </label>
          <Slider
            value={[settings.physics.damping]}
            onValueChange={([value]) =>
              setSettings({
                ...settings,
                physics: { ...settings.physics, damping: value },
              })
            }
            min={0}
            max={1}
            step={0.1}
          />
        </div>
      </TabsContent>

      <TabsContent value='interaction' className='space-y-4 mt-4'>
        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Enable Drag</label>
          <Switch
            checked={settings.interaction.enableDrag}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                interaction: { ...settings.interaction, enableDrag: checked },
              })
            }
          />
        </div>

        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Enable Zoom</label>
          <Switch
            checked={settings.interaction.enableZoom}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                interaction: { ...settings.interaction, enableZoom: checked },
              })
            }
          />
        </div>

        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Enable Pan</label>
          <Switch
            checked={settings.interaction.enablePan}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                interaction: { ...settings.interaction, enablePan: checked },
              })
            }
          />
        </div>

        <div className='flex items-center justify-between'>
          <label className='text-sm font-medium'>Enable Hover</label>
          <Switch
            checked={settings.interaction.enableHover}
            onCheckedChange={(checked) =>
              setSettings({
                ...settings,
                interaction: { ...settings.interaction, enableHover: checked },
              })
            }
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Helper functions
function getCommunityColor(communityId: string): string {
  const colors = [
    '#ff6b6b',
    '#4ecdc4',
    '#45b7d1',
    '#96ceb4',
    '#feca57',
    '#ff9ff3',
    '#54a0ff',
    '#5f27cd',
    '#00d2d3',
    '#ff9f43',
    '#10ac84',
    '#ee5a24',
    '#0984e3',
    '#6c5ce7',
    '#a29bfe',
  ]

  let hash = 0
  for (let i = 0; i < communityId.length; i++) {
    hash = communityId.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

function getCentralityColor(centrality: number): string {
  // Color scale from low (blue) to high (red)
  const ratio = Math.min(centrality / 20, 1) // Normalize to 0-1
  const red = Math.floor(255 * ratio)
  const blue = Math.floor(255 * (1 - ratio))
  return `rgb(${red}, 100, ${blue})`
}

function getStrengthColor(strength: number): string {
  // Color scale from weak (gray) to strong (green)
  const ratio = Math.min(strength / 10, 1) // Normalize to 0-1
  const intensity = Math.floor(255 * ratio)
  return `rgb(${255 - intensity}, ${intensity}, 100)`
}
