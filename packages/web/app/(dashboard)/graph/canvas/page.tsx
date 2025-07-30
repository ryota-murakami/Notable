'use client'

// Disable static generation for this page
export const dynamic = 'force-dynamic'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Download,
  Eye,
  EyeOff,
  Grid3X3,
  Layout,
  Lock,
  Pin,
  Plus,
  RefreshCw,
  Target,
  Upload,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'

import { CanvasView } from '@/components/graph/canvas-view'
import {
  type GraphNode as BaseGraphNode,
  useGraphData,
  useGraphMutations,
  useGraphState,
} from '@/hooks/use-graph-data'

// Convert GraphNode to CanvasNode
interface CanvasNode {
  id: string
  title: string
  content?: string
  tags: string[]
  x: number
  y: number
  width: number
  height: number
  scale: number
  rotation: number
  color?: string
  backgroundColor?: string
  borderColor?: string
  opacity: number
  isLocked: boolean
  isPinned: boolean
  isVisible: boolean
  groupId?: string
  zIndex: number
  createdAt: string
  updatedAt: string
}

interface CanvasConnection {
  id: string
  sourceId: string
  targetId: string
  sourceAnchor: 'top' | 'right' | 'bottom' | 'left' | 'center'
  targetAnchor: 'top' | 'right' | 'bottom' | 'left' | 'center'
  type: 'straight' | 'curved' | 'bezier' | 'orthogonal'
  style: 'solid' | 'dashed' | 'dotted'
  color: string
  width: number
  opacity: number
  label?: string
  isVisible: boolean
  zIndex: number
}

interface CanvasViewport {
  x: number
  y: number
  zoom: number
  rotation: number
}

interface CanvasSettings {
  showGrid: boolean
  snapToGrid: boolean
  gridSize: number
  showRuler: boolean
  showMinimap: boolean
  autoSave: boolean
  backgroundColor: string
  canvasWidth: number
  canvasHeight: number
}

const defaultSettings: CanvasSettings = {
  showGrid: true,
  snapToGrid: false,
  gridSize: 20,
  showRuler: false,
  showMinimap: true,
  autoSave: true,
  backgroundColor: '#f8fafc',
  canvasWidth: 10000,
  canvasHeight: 10000,
}

const defaultViewport: CanvasViewport = {
  x: 0,
  y: 0,
  zoom: 1,
  rotation: 0,
}

function CanvasPageContent() {
  const router = useRouter()

  // State
  const [viewport, setViewport] = useState<CanvasViewport>(defaultViewport)
  const [settings, setSettings] = useState<CanvasSettings>(defaultSettings)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState('layers')
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // Graph state
  const { selectedNodes, selectedLinks, clearSelection } = useGraphState()

  // Data fetching
  const {
    data: graphData,
    isLoading: isLoadingData,
    error: dataError,
    refreshData,
  } = useGraphData({
    maxNodes: 1000,
    includeIsolated: true,
  })

  // Mutations
  const { updatePosition, bulkUpdatePositions, createRelationship } =
    useGraphMutations()

  // Convert graph data to canvas format
  const canvasNodes: CanvasNode[] = React.useMemo(() => {
    if (!graphData?.nodes) return []

    return graphData.nodes.map((node: BaseGraphNode, index: number) => ({
      id: node.id,
      title: node.title,
      content: `${node.connections} connections • ${node.centrality.toFixed(2)} centrality`,
      tags: node.tags,
      x: node.x || (index % 10) * 250 + 100,
      y: node.y || Math.floor(index / 10) * 200 + 100,
      width: 200,
      height: 150,
      scale: node.scale || 1,
      rotation: 0,
      color: node.color,
      backgroundColor: getNodeBackgroundColor(node),
      borderColor: getNodeBorderColor(node),
      opacity: node.opacity || 1,
      isLocked: false,
      isPinned: node.isPinned || false,
      isVisible: true,
      groupId: node.groupId,
      zIndex: node.isPinned ? 100 : node.isIsolated ? 1 : 50,
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
    }))
  }, [graphData?.nodes])

  const canvasConnections: CanvasConnection[] = React.useMemo(() => {
    if (!graphData?.links) return []

    return graphData.links.map((link, index) => ({
      id: link.id,
      sourceId: typeof link.source === 'string' ? link.source : link.source.id,
      targetId: typeof link.target === 'string' ? link.target : link.target.id,
      sourceAnchor: 'center' as const,
      targetAnchor: 'center' as const,
      type: 'curved' as const,
      style: getConnectionStyle(link.type),
      color: link.color,
      width: Math.max(1, link.width),
      opacity: link.opacity,
      label: link.type,
      isVisible: true,
      zIndex: 10,
    }))
  }, [graphData?.links])

  // Event handlers
  const handleNodeUpdate = useCallback(
    async (node: CanvasNode) => {
      try {
        await updatePosition.mutateAsync({
          noteId: node.id,
          x: node.x,
          y: node.y,
          z: 0,
          canvasId: 'main-canvas',
          isPinned: node.isPinned,
          color: node.color,
          scale: node.scale,
          groupId: node.groupId,
        })
        setHasUnsavedChanges(false)
        setLastSaved(new Date())
      } catch (error) {
        console.error('Failed to update node position:', error)
      }
    },
    [updatePosition]
  )

  const handleNodesUpdate = useCallback(
    async (nodes: CanvasNode[]) => {
      try {
        const positions = nodes.map((node) => ({
          noteId: node.id,
          x: node.x,
          y: node.y,
          z: 0,
          canvasId: 'main-canvas',
          isPinned: node.isPinned,
          color: node.color,
          scale: node.scale,
          groupId: node.groupId,
        }))

        await bulkUpdatePositions.mutateAsync(positions)
        setHasUnsavedChanges(false)
        setLastSaved(new Date())
      } catch (error) {
        console.error('Failed to bulk update positions:', error)
      }
    },
    [bulkUpdatePositions]
  )

  const handleConnectionCreate = useCallback(
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
        console.error('Failed to create connection:', error)
      }
    },
    [createRelationship]
  )

  const handleViewportChange = useCallback((newViewport: CanvasViewport) => {
    setViewport(newViewport)
    // Auto-save viewport to localStorage
    localStorage.setItem('notable-canvas-viewport', JSON.stringify(newViewport))
  }, [])

  const handleSettingsChange = useCallback(
    (newSettings: Partial<CanvasSettings>) => {
      const updatedSettings = { ...settings, ...newSettings }
      setSettings(updatedSettings)
      localStorage.setItem(
        'notable-canvas-settings',
        JSON.stringify(updatedSettings)
      )
    },
    [settings]
  )

  const handleNodeClick = useCallback(
    (node: CanvasNode, event: React.MouseEvent) => {
      // Handle node selection logic here
    },
    []
  )

  const handleNodeDoubleClick = useCallback(
    (node: CanvasNode) => {
      // Navigate to note
      router.push(`/notes/${node.id}`)
    },
    [router]
  )

  const handleAutoArrange = useCallback(() => {
    if (!canvasNodes.length) return

    // Simple grid arrangement
    const cols = Math.ceil(Math.sqrt(canvasNodes.length))
    const arrangedNodes = canvasNodes.map((node, index) => ({
      ...node,
      x: (index % cols) * 250 + 100,
      y: Math.floor(index / cols) * 200 + 100,
    }))

    handleNodesUpdate(arrangedNodes)
  }, [canvasNodes, handleNodesUpdate])

  const handleExportCanvas = useCallback(() => {
    const canvasData = {
      nodes: canvasNodes,
      connections: canvasConnections,
      viewport,
      settings,
      exportedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(canvasData, null, 2)], {
      type: 'application/json',
    })

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `notable-canvas-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [canvasNodes, canvasConnections, viewport, settings])

  // Load saved settings on mount
  useEffect(() => {
    const savedViewport = localStorage.getItem('notable-canvas-viewport')
    if (savedViewport) {
      try {
        setViewport(JSON.parse(savedViewport))
      } catch (error) {
        console.warn('Failed to parse saved viewport:', error)
      }
    }

    const savedSettings = localStorage.getItem('notable-canvas-settings')
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (error) {
        console.warn('Failed to parse saved settings:', error)
      }
    }
  }, [])

  // Auto-save detection
  useEffect(() => {
    const interval = setInterval(() => {
      if (settings.autoSave && hasUnsavedChanges) {
        // Trigger auto save
        setHasUnsavedChanges(false)
        setLastSaved(new Date())
      }
    }, 5000) // Auto-save every 5 seconds

    return () => clearInterval(interval)
  }, [settings.autoSave, hasUnsavedChanges])

  // Loading state
  if (isLoadingData) {
    return <CanvasLoadingState />
  }

  // Error state
  if (dataError) {
    return <CanvasErrorState error={dataError} onRetry={refreshData} />
  }

  // Empty state
  if (!graphData || canvasNodes.length === 0) {
    return <CanvasEmptyState />
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
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => router.push('/graph')}
                    className='h-8 w-8 p-0'
                  >
                    <ArrowLeft className='h-4 w-4' />
                  </Button>
                  <Layout className='h-6 w-6 text-primary' />
                  <h1 className='text-xl font-semibold'>Canvas View</h1>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setSidebarOpen(false)}
                  className='h-8 w-8 p-0'
                >
                  <EyeOff className='h-4 w-4' />
                </Button>
              </div>

              {/* Status */}
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-2'>
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full',
                      hasUnsavedChanges ? 'bg-amber-500' : 'bg-green-500'
                    )}
                  />
                  <span className='text-muted-foreground'>
                    {hasUnsavedChanges
                      ? 'Unsaved changes'
                      : 'All changes saved'}
                  </span>
                </div>
                {lastSaved && (
                  <span className='text-xs text-muted-foreground'>
                    {lastSaved.toLocaleTimeString()}
                  </span>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className='flex-1 overflow-hidden'>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='h-full flex flex-col'
              >
                <TabsList className='grid w-full grid-cols-3 mx-4 mt-4'>
                  <TabsTrigger value='layers' className='text-xs'>
                    Layers
                  </TabsTrigger>
                  <TabsTrigger value='settings' className='text-xs'>
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value='tools' className='text-xs'>
                    Tools
                  </TabsTrigger>
                </TabsList>

                <div className='flex-1 overflow-y-auto p-4'>
                  <TabsContent value='layers' className='space-y-4 mt-0'>
                    <LayersPanel
                      nodes={canvasNodes}
                      connections={canvasConnections}
                      selectedNodes={selectedNodes}
                      onNodeClick={handleNodeClick}
                    />
                  </TabsContent>

                  <TabsContent value='settings' className='space-y-4 mt-0'>
                    <SettingsPanel
                      settings={settings}
                      onSettingsChange={handleSettingsChange}
                    />
                  </TabsContent>

                  <TabsContent value='tools' className='space-y-4 mt-0'>
                    <ToolsPanel
                      onAutoArrange={handleAutoArrange}
                      onExport={handleExportCanvas}
                      onRefresh={refreshData}
                      selectedCount={selectedNodes.size}
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        )}

        {/* Main Canvas */}
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
                {canvasNodes.length} notes • {canvasConnections.length}{' '}
                connections
              </Badge>

              {hasUnsavedChanges && (
                <Badge
                  variant='secondary'
                  className='bg-amber-100 text-amber-800 border-amber-200'
                >
                  Unsaved
                </Badge>
              )}
            </div>
          )}

          {/* Canvas Component */}
          <CanvasView
            nodes={canvasNodes}
            connections={canvasConnections}
            viewport={viewport}
            settings={settings}
            selectedNodes={selectedNodes}
            selectedConnections={selectedLinks}
            isFullscreen={isFullscreen}
            onNodeUpdate={handleNodeUpdate}
            onNodesUpdate={handleNodesUpdate}
            onConnectionCreate={handleConnectionCreate}
            onViewportChange={handleViewportChange}
            onSelectionChange={(nodeIds, connectionIds) => {
              // Handle selection change
            }}
            onNodeClick={handleNodeClick}
            onNodeDoubleClick={handleNodeDoubleClick}
            onBackgroundClick={clearSelection}
            onFullscreenToggle={() => setIsFullscreen((prev) => !prev)}
            className='w-full h-full'
          />
        </div>
      </div>
    </TooltipProvider>
  )
}

// Sidebar Panels
function LayersPanel({
  nodes,
  connections,
  selectedNodes,
  onNodeClick,
}: {
  nodes: CanvasNode[]
  connections: CanvasConnection[]
  selectedNodes: Set<string>
  onNodeClick: (node: CanvasNode, event: React.MouseEvent) => void
}) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium'>Layers</h3>
        <Badge variant='outline' className='text-xs'>
          {nodes.length} notes
        </Badge>
      </div>

      {/* Nodes List */}
      <div className='space-y-2 max-h-96 overflow-y-auto'>
        {nodes
          .sort((a, b) => b.zIndex - a.zIndex)
          .map((node) => (
            <div
              key={node.id}
              className={cn(
                'flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors',
                selectedNodes.has(node.id)
                  ? 'bg-blue-50 border-blue-200'
                  : 'hover:bg-muted'
              )}
              onClick={(e) => onNodeClick(node, e)}
            >
              <div
                className='w-3 h-3 rounded border'
                style={{ backgroundColor: node.backgroundColor }}
              />
              <div className='flex-1 min-w-0'>
                <div className='text-sm font-medium truncate'>{node.title}</div>
                <div className='text-xs text-muted-foreground'>
                  {Math.round(node.x)}, {Math.round(node.y)}
                </div>
              </div>
              <div className='flex items-center gap-1'>
                {node.isPinned && <Pin className='h-3 w-3 text-amber-500' />}
                {node.isLocked && <Lock className='h-3 w-3 text-gray-500' />}
                {!node.isVisible && (
                  <EyeOff className='h-3 w-3 text-gray-400' />
                )}
              </div>
            </div>
          ))}
      </div>

      {/* Connections Summary */}
      {connections.length > 0 && (
        <div className='pt-4 border-t'>
          <div className='flex items-center justify-between mb-2'>
            <h4 className='text-sm font-medium'>Connections</h4>
            <Badge variant='outline' className='text-xs'>
              {connections.length}
            </Badge>
          </div>
          <div className='text-xs text-muted-foreground'>
            {connections.filter((c) => c.type === 'straight').length} straight,{' '}
            {connections.filter((c) => c.type === 'curved').length} curved,{' '}
            {connections.filter((c) => c.type === 'bezier').length} bezier
          </div>
        </div>
      )}
    </div>
  )
}

function SettingsPanel({
  settings,
  onSettingsChange,
}: {
  settings: CanvasSettings
  onSettingsChange: (settings: Partial<CanvasSettings>) => void
}) {
  return (
    <div className='space-y-4'>
      <h3 className='font-medium'>Canvas Settings</h3>

      {/* Grid Settings */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Grid</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex items-center justify-between'>
            <label className='text-sm'>Show Grid</label>
            <Switch
              checked={settings.showGrid}
              onCheckedChange={(checked) =>
                onSettingsChange({ showGrid: checked })
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <label className='text-sm'>Snap to Grid</label>
            <Switch
              checked={settings.snapToGrid}
              onCheckedChange={(checked) =>
                onSettingsChange({ snapToGrid: checked })
              }
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>
              Grid Size: {settings.gridSize}px
            </label>
            <Slider
              value={[settings.gridSize]}
              onValueChange={([value]) => onSettingsChange({ gridSize: value })}
              min={10}
              max={100}
              step={5}
            />
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Appearance</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div>
            <label className='text-sm mb-2 block'>Background Color</label>
            <div className='flex items-center gap-2'>
              <Input
                type='color'
                value={settings.backgroundColor}
                onChange={(e) =>
                  onSettingsChange({ backgroundColor: e.target.value })
                }
                className='w-12 h-8 p-1 rounded'
              />
              <Input
                value={settings.backgroundColor}
                onChange={(e) =>
                  onSettingsChange({ backgroundColor: e.target.value })
                }
                className='flex-1 text-xs'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <label className='text-sm'>Show Minimap</label>
            <Switch
              checked={settings.showMinimap}
              onCheckedChange={(checked) =>
                onSettingsChange({ showMinimap: checked })
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <label className='text-sm'>Show Ruler</label>
            <Switch
              checked={settings.showRuler}
              onCheckedChange={(checked) =>
                onSettingsChange({ showRuler: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Canvas Size */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Canvas Size</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div>
            <label className='text-sm mb-2 block'>
              Width: {settings.canvasWidth}px
            </label>
            <Slider
              value={[settings.canvasWidth]}
              onValueChange={([value]) =>
                onSettingsChange({ canvasWidth: value })
              }
              min={5000}
              max={50000}
              step={1000}
            />
          </div>

          <div>
            <label className='text-sm mb-2 block'>
              Height: {settings.canvasHeight}px
            </label>
            <Slider
              value={[settings.canvasHeight]}
              onValueChange={([value]) =>
                onSettingsChange({ canvasHeight: value })
              }
              min={5000}
              max={50000}
              step={1000}
            />
          </div>
        </CardContent>
      </Card>

      {/* Auto-save */}
      <div className='flex items-center justify-between'>
        <label className='text-sm font-medium'>Auto-save</label>
        <Switch
          checked={settings.autoSave}
          onCheckedChange={(checked) => onSettingsChange({ autoSave: checked })}
        />
      </div>
    </div>
  )
}

function ToolsPanel({
  onAutoArrange,
  onExport,
  onRefresh,
  selectedCount,
}: {
  onAutoArrange: () => void
  onExport: () => void
  onRefresh: () => void
  selectedCount: number
}) {
  return (
    <div className='space-y-4'>
      <h3 className='font-medium'>Tools</h3>

      {/* Layout Tools */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Layout</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Button onClick={onAutoArrange} size='sm' className='w-full'>
            <Grid3X3 className='w-4 h-4 mr-2' />
            Auto Arrange
          </Button>
          <Button variant='outline' size='sm' className='w-full'>
            <Target className='w-4 h-4 mr-2' />
            Align Selected
          </Button>
          <Button variant='outline' size='sm' className='w-full'>
            <Users className='w-4 h-4 mr-2' />
            Group Selected
          </Button>
        </CardContent>
      </Card>

      {/* Data Tools */}
      <Card>
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm'>Data</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Button
            onClick={onRefresh}
            variant='outline'
            size='sm'
            className='w-full'
          >
            <RefreshCw className='w-4 h-4 mr-2' />
            Refresh Data
          </Button>
          <Button
            onClick={onExport}
            variant='outline'
            size='sm'
            className='w-full'
          >
            <Download className='w-4 h-4 mr-2' />
            Export Canvas
          </Button>
          <Button variant='outline' size='sm' className='w-full'>
            <Upload className='w-4 h-4 mr-2' />
            Import Canvas
          </Button>
        </CardContent>
      </Card>

      {/* Selection Info */}
      {selectedCount > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-sm'>Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-sm text-muted-foreground'>
              {selectedCount} note{selectedCount > 1 ? 's' : ''} selected
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// State Components
function CanvasLoadingState() {
  return (
    <div className='flex h-screen bg-background'>
      <div className='w-80 border-r bg-muted/30 p-4'>
        <Skeleton className='h-8 w-48 mb-4' />
        <div className='space-y-3'>
          <Skeleton className='h-32' />
          <Skeleton className='h-24' />
          <Skeleton className='h-16' />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4' />
          <p className='text-lg font-medium'>Loading canvas...</p>
          <p className='text-muted-foreground'>
            Preparing your spatial workspace
          </p>
        </div>
      </div>
    </div>
  )
}

function CanvasErrorState({
  error,
  onRetry,
}: {
  error: Error
  onRetry: () => void
}) {
  return (
    <div className='flex h-screen items-center justify-center bg-background'>
      <div className='text-center max-w-md'>
        <Layout className='h-16 w-16 text-destructive mx-auto mb-4' />
        <h2 className='text-xl font-semibold mb-2'>Failed to Load Canvas</h2>
        <p className='text-muted-foreground mb-4'>
          {error.message ||
            'An unexpected error occurred while loading your canvas.'}
        </p>
        <Button onClick={onRetry}>
          <RefreshCw className='w-4 h-4 mr-2' />
          Try Again
        </Button>
      </div>
    </div>
  )
}

function CanvasEmptyState() {
  return (
    <div className='flex h-screen bg-background'>
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center max-w-md'>
          <Layout className='h-24 w-24 text-muted-foreground mx-auto mb-6' />
          <h2 className='text-2xl font-semibold mb-4'>Your Canvas is Empty</h2>
          <p className='text-muted-foreground mb-6'>
            Create some notes to start building your spatial knowledge
            workspace.
          </p>
          <div className='space-y-2'>
            <Button className='w-full'>
              <Plus className='w-4 h-4 mr-2' />
              Create Your First Note
            </Button>
            <Button variant='outline' className='w-full'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Graph View
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper functions
function getNodeBackgroundColor(node: BaseGraphNode): string {
  if (node.color) return node.color
  if (node.isIsolated) return '#f1f5f9'
  if (node.hubScore > 0.7) return '#fef3c7'
  return '#ffffff'
}

function getNodeBorderColor(node: BaseGraphNode): string {
  if (node.isIsolated) return '#cbd5e1'
  if (node.hubScore > 0.7) return '#f59e0b'
  return '#e5e7eb'
}

function getConnectionStyle(type: string): 'solid' | 'dashed' | 'dotted' {
  switch (type) {
    case 'reference':
      return 'solid'
    case 'bidirectional':
      return 'solid'
    case 'hierarchy':
      return 'dashed'
    case 'tag':
      return 'dotted'
    case 'template':
      return 'dashed'
    case 'similarity':
      return 'dotted'
    case 'temporal':
      return 'dotted'
    default:
      return 'solid'
  }
}

export default function CanvasPage() {
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
      <CanvasPageContent />
    </QueryClientProvider>
  )
}
