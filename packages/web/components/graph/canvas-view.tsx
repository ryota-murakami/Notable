'use client'

import * as React from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Circle,
  Copy,
  Eye,
  EyeOff,
  Grid3X3,
  Hand,
  Image as ImageIcon,
  Layers,
  Link,
  Lock,
  Maximize2,
  Minimize2,
  MousePointer,
  Move,
  Palette,
  Pin,
  PinOff,
  Plus,
  RotateCcw,
  Save,
  Settings,
  Square,
  StickyNote,
  Trash2,
  Type,
  Unlock,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
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
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

// Types
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

interface CanvasViewProps {
  nodes: CanvasNode[]
  connections: CanvasConnection[]
  viewport: CanvasViewport
  settings: CanvasSettings
  selectedNodes: Set<string>
  selectedConnections: Set<string>
  isFullscreen?: boolean
  readOnly?: boolean
  onNodeUpdate?: (node: CanvasNode) => void
  onNodesUpdate?: (nodes: CanvasNode[]) => void
  onConnectionUpdate?: (connection: CanvasConnection) => void
  onConnectionCreate?: (sourceId: string, targetId: string) => void
  onConnectionDelete?: (connectionId: string) => void
  onViewportChange?: (viewport: CanvasViewport) => void
  onSelectionChange?: (nodeIds: string[], connectionIds: string[]) => void
  onNodeClick?: (node: CanvasNode, event: React.MouseEvent) => void
  onNodeDoubleClick?: (node: CanvasNode) => void
  onBackgroundClick?: () => void
  onFullscreenToggle?: () => void
  className?: string
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

export function CanvasView({
  nodes,
  connections,
  viewport,
  settings = defaultSettings,
  selectedNodes,
  selectedConnections,
  isFullscreen = false,
  readOnly = false,
  onNodeUpdate,
  onNodesUpdate,
  onConnectionUpdate,
  onConnectionCreate,
  onConnectionDelete,
  onViewportChange,
  onSelectionChange,
  onNodeClick,
  onNodeDoubleClick,
  onBackgroundClick,
  onFullscreenToggle,
  className,
}: CanvasViewProps) {
  // Refs
  const canvasRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<globalThis.SVGSVGElement>(null)
  const isDraggingRef = useRef(false)
  const isConnectingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const lastPanRef = useRef({ x: 0, y: 0 })

  // State
  const [tool, setTool] = useState<
    'select' | 'pan' | 'connect' | 'note' | 'text'
  >('select')
  const [isDragging, setIsDragging] = useState(false)
  const [isPanning, setIsPanning] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionPreview, setConnectionPreview] = useState<{
    sourceId: string
    sourceAnchor: string
    x: number
    y: number
  } | null>(null)
  const [selectionBox, setSelectionBox] = useState<{
    startX: number
    startY: number
    endX: number
    endY: number
  } | null>(null)
  const [showControls, setShowControls] = useState(true)

  // Computed values
  const transform = `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom}) rotate(${viewport.rotation}deg)`

  const visibleNodes = useMemo(() => {
    return nodes.filter((node) => node.isVisible)
  }, [nodes])

  const visibleConnections = useMemo(() => {
    return connections.filter((conn) => conn.isVisible)
  }, [connections])

  // Event handlers
  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (readOnly) return

      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = (event.clientX - rect.left - viewport.x) / viewport.zoom
      const y = (event.clientY - rect.top - viewport.y) / viewport.zoom

      dragStartRef.current = { x: event.clientX, y: event.clientY }
      lastPanRef.current = { x: viewport.x, y: viewport.y }

      if (
        tool === 'pan' ||
        event.button === 1 ||
        (event.ctrlKey && tool === 'select')
      ) {
        setIsPanning(true)
        event.preventDefault()
      } else if (tool === 'select') {
        // Start selection box
        setSelectionBox({
          startX: x,
          startY: y,
          endX: x,
          endY: y,
        })
      }

      isDraggingRef.current = true
    },
    [readOnly, tool, viewport]
  )

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!isDraggingRef.current) return

      const deltaX = event.clientX - dragStartRef.current.x
      const deltaY = event.clientY - dragStartRef.current.y

      if (isPanning) {
        const newViewport = {
          ...viewport,
          x: lastPanRef.current.x + deltaX,
          y: lastPanRef.current.y + deltaY,
        }
        onViewportChange?.(newViewport)
      } else if (selectionBox && tool === 'select') {
        const rect = canvasRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = (event.clientX - rect.left - viewport.x) / viewport.zoom
        const y = (event.clientY - rect.top - viewport.y) / viewport.zoom

        setSelectionBox((prev) =>
          prev
            ? {
                ...prev,
                endX: x,
                endY: y,
              }
            : null
        )
      }
    },
    [isPanning, selectionBox, tool, viewport, onViewportChange]
  )

  const handleMouseUp = useCallback(() => {
    if (selectionBox && tool === 'select') {
      // Select nodes within selection box
      const selectedNodeIds = visibleNodes
        .filter((node) => {
          const left = Math.min(selectionBox.startX, selectionBox.endX)
          const right = Math.max(selectionBox.startX, selectionBox.endX)
          const top = Math.min(selectionBox.startY, selectionBox.endY)
          const bottom = Math.max(selectionBox.startY, selectionBox.endY)

          return (
            node.x + node.width > left &&
            node.x < right &&
            node.y + node.height > top &&
            node.y < bottom
          )
        })
        .map((node) => node.id)

      onSelectionChange?.(selectedNodeIds, [])
    }

    isDraggingRef.current = false
    setIsDragging(false)
    setIsPanning(false)
    setSelectionBox(null)
    setConnectionPreview(null)
  }, [selectionBox, tool, visibleNodes, onSelectionChange])

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      event.preventDefault()

      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return

      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const delta = event.deltaY > 0 ? 0.9 : 1.1
      const newZoom = Math.min(Math.max(viewport.zoom * delta, 0.1), 5)

      // Zoom towards mouse position
      const newX = mouseX - (mouseX - viewport.x) * (newZoom / viewport.zoom)
      const newY = mouseY - (mouseY - viewport.y) * (newZoom / viewport.zoom)

      const newViewport = {
        ...viewport,
        x: newX,
        y: newY,
        zoom: newZoom,
      }

      onViewportChange?.(newViewport)
    },
    [viewport, onViewportChange]
  )

  const handleNodeMouseDown = useCallback(
    (node: CanvasNode, event: React.MouseEvent) => {
      event.stopPropagation()

      if (readOnly || node.isLocked) return

      if (tool === 'connect') {
        setIsConnecting(true)
        setConnectionPreview({
          sourceId: node.id,
          sourceAnchor: 'center',
          x: event.clientX,
          y: event.clientY,
        })
      } else if (tool === 'select') {
        if (!selectedNodes.has(node.id) && !event.shiftKey) {
          onSelectionChange?.([node.id], [])
        }
        setIsDragging(true)
      }
    },
    [readOnly, tool, selectedNodes, onSelectionChange]
  )

  const handleNodeClick = useCallback(
    (node: CanvasNode, event: React.MouseEvent) => {
      event.stopPropagation()
      onNodeClick?.(node, event)
    },
    [onNodeClick]
  )

  const handleNodeDoubleClick = useCallback(
    (node: CanvasNode) => {
      onNodeDoubleClick?.(node)
    },
    [onNodeDoubleClick]
  )

  const handleBackgroundClick = useCallback(() => {
    if (tool !== 'select') return
    onSelectionChange?.([], [])
    onBackgroundClick?.()
  }, [tool, onSelectionChange, onBackgroundClick])

  // Zoom and pan controls
  const zoomIn = useCallback(() => {
    const newZoom = Math.min(viewport.zoom * 1.2, 5)
    onViewportChange?.({ ...viewport, zoom: newZoom })
  }, [viewport, onViewportChange])

  const zoomOut = useCallback(() => {
    const newZoom = Math.max(viewport.zoom / 1.2, 0.1)
    onViewportChange?.({ ...viewport, zoom: newZoom })
  }, [viewport, onViewportChange])

  const resetView = useCallback(() => {
    onViewportChange?.({ x: 0, y: 0, zoom: 1, rotation: 0 })
  }, [onViewportChange])

  const fitToContent = useCallback(() => {
    if (visibleNodes.length === 0) return

    const bounds = visibleNodes.reduce(
      (acc, node) => ({
        minX: Math.min(acc.minX, node.x),
        minY: Math.min(acc.minY, node.y),
        maxX: Math.max(acc.maxX, node.x + node.width),
        maxY: Math.max(acc.maxY, node.y + node.height),
      }),
      { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
    )

    const padding = 100
    const contentWidth = bounds.maxX - bounds.minX + padding * 2
    const contentHeight = bounds.maxY - bounds.minY + padding * 2

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const scaleX = rect.width / contentWidth
    const scaleY = rect.height / contentHeight
    const scale = Math.min(scaleX, scaleY, 1)

    const centerX = (bounds.minX + bounds.maxX) / 2
    const centerY = (bounds.minY + bounds.maxY) / 2

    const newViewport = {
      x: rect.width / 2 - centerX * scale,
      y: rect.height / 2 - centerY * scale,
      zoom: scale,
      rotation: 0,
    }

    onViewportChange?.(newViewport)
  }, [visibleNodes, onViewportChange])

  // Grid rendering
  const renderGrid = useCallback(() => {
    if (!settings.showGrid) return null

    const gridSize = settings.gridSize * viewport.zoom
    if (gridSize < 5) return null // Don't show grid if too small

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return null

    const startX = Math.floor(-viewport.x / gridSize) * gridSize
    const startY = Math.floor(-viewport.y / gridSize) * gridSize
    const endX = startX + rect.width + gridSize
    const endY = startY + rect.height + gridSize

    const lines = []

    // Vertical lines
    for (let x = startX; x <= endX; x += gridSize) {
      lines.push(
        <line
          key={`v-${x}`}
          x1={x}
          y1={startY}
          x2={x}
          y2={endY}
          stroke='#e5e7eb'
          strokeWidth={0.5}
          opacity={0.5}
        />
      )
    }

    // Horizontal lines
    for (let y = startY; y <= endY; y += gridSize) {
      lines.push(
        <line
          key={`h-${y}`}
          x1={startX}
          y1={y}
          x2={endX}
          y2={y}
          stroke='#e5e7eb'
          strokeWidth={0.5}
          opacity={0.5}
        />
      )
    }

    return lines
  }, [settings.showGrid, settings.gridSize, viewport])

  // Connection SVG path
  const getConnectionPath = useCallback(
    (connection: CanvasConnection) => {
      const sourceNode = nodes.find((n) => n.id === connection.sourceId)
      const targetNode = nodes.find((n) => n.id === connection.targetId)

      if (!sourceNode || !targetNode) return ''

      const getAnchorPoint = (node: CanvasNode, anchor: string) => {
        switch (anchor) {
          case 'top':
            return { x: node.x + node.width / 2, y: node.y }
          case 'right':
            return { x: node.x + node.width, y: node.y + node.height / 2 }
          case 'bottom':
            return { x: node.x + node.width / 2, y: node.y + node.height }
          case 'left':
            return { x: node.x, y: node.y + node.height / 2 }
          default:
            return { x: node.x + node.width / 2, y: node.y + node.height / 2 }
        }
      }

      const source = getAnchorPoint(sourceNode, connection.sourceAnchor)
      const target = getAnchorPoint(targetNode, connection.targetAnchor)

      switch (connection.type) {
        case 'straight':
          return `M ${source.x} ${source.y} L ${target.x} ${target.y}`

        case 'curved':
          const midX = (source.x + target.x) / 2
          const midY = (source.y + target.y) / 2
          const offset = 50
          return `M ${source.x} ${source.y} Q ${midX} ${midY - offset} ${target.x} ${target.y}`

        case 'bezier':
          const dx = target.x - source.x
          const dy = target.y - source.y
          const cp1x = source.x + dx * 0.3
          const cp1y = source.y
          const cp2x = target.x - dx * 0.3
          const cp2y = target.y
          return `M ${source.x} ${source.y} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${target.x} ${target.y}`

        case 'orthogonal':
          const midXOrtho = (source.x + target.x) / 2
          return `M ${source.x} ${source.y} L ${midXOrtho} ${source.y} L ${midXOrtho} ${target.y} L ${target.x} ${target.y}`

        default:
          return `M ${source.x} ${source.y} L ${target.x} ${target.y}`
      }
    },
    [nodes]
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== document.body) return

      switch (event.key) {
        case 'v':
          setTool('select')
          break
        case 'h':
          setTool('pan')
          break
        case 'c':
          setTool('connect')
          break
        case '1':
          setTool('note')
          break
        case '2':
          setTool('text')
          break
        case '+':
        case '=':
          event.preventDefault()
          zoomIn()
          break
        case '-':
          event.preventDefault()
          zoomOut()
          break
        case '0':
          event.preventDefault()
          resetView()
          break
        case 'f':
          event.preventDefault()
          fitToContent()
          break
        case 'Escape':
          setTool('select')
          onSelectionChange?.([], [])
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [zoomIn, zoomOut, resetView, fitToContent, onSelectionChange])

  return (
    <TooltipProvider>
      <div
        className={cn(
          'relative w-full h-full overflow-hidden bg-slate-50',
          className
        )}
      >
        {/* Canvas */}
        <div
          ref={canvasRef}
          className='absolute inset-0 cursor-crosshair'
          style={{ backgroundColor: settings.backgroundColor }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          onClick={handleBackgroundClick}
        >
          {/* Grid and Connections SVG */}
          <svg
            ref={svgRef}
            className='absolute inset-0 w-full h-full pointer-events-none'
            style={{ transform }}
          >
            <defs>
              <marker
                id='arrowhead'
                markerWidth='10'
                markerHeight='7'
                refX='9'
                refY='3.5'
                orient='auto'
              >
                <polygon points='0 0, 10 3.5, 0 7' fill='currentColor' />
              </marker>
            </defs>

            {/* Grid */}
            <g>{renderGrid()}</g>

            {/* Connections */}
            <g>
              {visibleConnections.map((connection) => (
                <path
                  key={connection.id}
                  d={getConnectionPath(connection)}
                  stroke={connection.color}
                  strokeWidth={connection.width}
                  strokeDasharray={
                    connection.style === 'dashed'
                      ? '5,5'
                      : connection.style === 'dotted'
                        ? '2,2'
                        : 'none'
                  }
                  fill='none'
                  opacity={connection.opacity}
                  markerEnd='url(#arrowhead)'
                  className={cn(
                    'pointer-events-auto cursor-pointer transition-all',
                    selectedConnections.has(connection.id) &&
                      'stroke-blue-500 stroke-2'
                  )}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectionChange?.([], [connection.id])
                  }}
                />
              ))}
            </g>

            {/* Connection Preview */}
            {connectionPreview && (
              <line
                x1={connectionPreview.x}
                y1={connectionPreview.y}
                x2={connectionPreview.x}
                y2={connectionPreview.y}
                stroke='#3b82f6'
                strokeWidth={2}
                strokeDasharray='5,5'
                opacity={0.7}
              />
            )}

            {/* Selection Box */}
            {selectionBox && (
              <rect
                x={Math.min(selectionBox.startX, selectionBox.endX)}
                y={Math.min(selectionBox.startY, selectionBox.endY)}
                width={Math.abs(selectionBox.endX - selectionBox.startX)}
                height={Math.abs(selectionBox.endY - selectionBox.startY)}
                fill='rgba(59, 130, 246, 0.1)'
                stroke='#3b82f6'
                strokeWidth={1}
                strokeDasharray='3,3'
              />
            )}
          </svg>

          {/* Nodes */}
          <div style={{ transform }}>
            {visibleNodes.map((node) => (
              <CanvasNodeComponent
                key={node.id}
                node={node}
                isSelected={selectedNodes.has(node.id)}
                readOnly={readOnly}
                onMouseDown={(e) => handleNodeMouseDown(node, e)}
                onClick={(e) => handleNodeClick(node, e)}
                onDoubleClick={() => handleNodeDoubleClick(node)}
                onUpdate={onNodeUpdate}
              />
            ))}
          </div>
        </div>

        {/* Toolbar */}
        {showControls && !isFullscreen && (
          <div className='absolute top-4 left-4 flex flex-col gap-2 z-50'>
            <Card className='p-2 bg-white/95 backdrop-blur-sm border shadow-sm'>
              <div className='flex items-center gap-1'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={tool === 'select' ? 'default' : 'ghost'}
                      size='sm'
                      onClick={() => setTool('select')}
                      className='h-8 w-8 p-0'
                    >
                      <MousePointer className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Select Tool (V)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={tool === 'pan' ? 'default' : 'ghost'}
                      size='sm'
                      onClick={() => setTool('pan')}
                      className='h-8 w-8 p-0'
                    >
                      <Hand className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Pan Tool (H)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={tool === 'connect' ? 'default' : 'ghost'}
                      size='sm'
                      onClick={() => setTool('connect')}
                      className='h-8 w-8 p-0'
                    >
                      <Link className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Connect Tool (C)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={tool === 'note' ? 'default' : 'ghost'}
                      size='sm'
                      onClick={() => setTool('note')}
                      className='h-8 w-8 p-0'
                    >
                      <StickyNote className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Note Tool (1)</TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className='p-2 bg-white/95 backdrop-blur-sm border shadow-sm'>
              <div className='flex items-center gap-1'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={zoomIn}
                      className='h-8 w-8 p-0'
                    >
                      <ZoomIn className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom In (+)</TooltipContent>
                </Tooltip>

                <Badge variant='outline' className='text-xs px-2'>
                  {Math.round(viewport.zoom * 100)}%
                </Badge>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={zoomOut}
                      className='h-8 w-8 p-0'
                    >
                      <ZoomOut className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom Out (-)</TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className='p-2 bg-white/95 backdrop-blur-sm border shadow-sm'>
              <div className='flex items-center gap-1'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={resetView}
                      className='h-8 w-8 p-0'
                    >
                      <RotateCcw className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Reset View (0)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={fitToContent}
                      className='h-8 w-8 p-0'
                    >
                      <Maximize2 className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Fit to Content (F)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={onFullscreenToggle}
                      className='h-8 w-8 p-0'
                    >
                      <Maximize2 className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Fullscreen</TooltipContent>
                </Tooltip>
              </div>
            </Card>
          </div>
        )}

        {/* Status Bar */}
        {!isFullscreen && (
          <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between z-40'>
            <Badge
              variant='outline'
              className='bg-white/95 backdrop-blur-sm text-xs'
            >
              {selectedNodes.size} selected • Tool: {tool}
            </Badge>

            <div className='flex items-center gap-2'>
              <Badge
                variant='outline'
                className='bg-white/95 backdrop-blur-sm text-xs'
              >
                {visibleNodes.length} notes
              </Badge>
              <Badge
                variant='outline'
                className='bg-white/95 backdrop-blur-sm text-xs'
              >
                Canvas: {settings.canvasWidth} × {settings.canvasHeight}
              </Badge>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

// Individual Node Component
interface CanvasNodeComponentProps {
  node: CanvasNode
  isSelected: boolean
  readOnly: boolean
  onMouseDown: (event: React.MouseEvent) => void
  onClick: (event: React.MouseEvent) => void
  onDoubleClick: () => void
  onUpdate?: (node: CanvasNode) => void
}

function CanvasNodeComponent({
  node,
  isSelected,
  readOnly,
  onMouseDown,
  onClick,
  onDoubleClick,
  onUpdate,
}: CanvasNodeComponentProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(node.title)

  const handleEditSubmit = useCallback(() => {
    if (editTitle.trim() && editTitle !== node.title) {
      onUpdate?.({ ...node, title: editTitle.trim() })
    }
    setIsEditing(false)
  }, [editTitle, node, onUpdate])

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={cn(
            'absolute select-none transition-all duration-200 rounded-lg border-2 shadow-sm cursor-move',
            isSelected
              ? 'border-blue-500 shadow-lg'
              : 'border-gray-200 hover:border-gray-300',
            node.isLocked && 'cursor-not-allowed opacity-75',
            'hover:shadow-md'
          )}
          style={{
            left: node.x,
            top: node.y,
            width: node.width,
            height: node.height,
            transform: `scale(${node.scale}) rotate(${node.rotation}deg)`,
            backgroundColor: node.backgroundColor || '#ffffff',
            borderColor:
              node.borderColor || (isSelected ? '#3b82f6' : '#e5e7eb'),
            opacity: node.opacity,
            zIndex: node.zIndex + (isSelected ? 1000 : 0),
            color: node.color || '#000000',
          }}
          onMouseDown={onMouseDown}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
        >
          {/* Content */}
          <div className='p-3 h-full flex flex-col'>
            {/* Title */}
            {isEditing ? (
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={handleEditSubmit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleEditSubmit()
                  if (e.key === 'Escape') {
                    setEditTitle(node.title)
                    setIsEditing(false)
                  }
                }}
                className='text-sm font-medium border-none p-0 h-auto shadow-none focus-visible:ring-0'
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className='text-sm font-medium mb-2 line-clamp-2'>
                {node.title}
              </div>
            )}

            {/* Content Preview */}
            {node.content && (
              <div className='text-xs text-muted-foreground flex-1 overflow-hidden'>
                <div className='line-clamp-3'>{node.content}</div>
              </div>
            )}

            {/* Tags */}
            {node.tags.length > 0 && (
              <div className='flex flex-wrap gap-1 mt-2'>
                {node.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='text-xs px-1 py-0'
                  >
                    {tag}
                  </Badge>
                ))}
                {node.tags.length > 3 && (
                  <Badge variant='secondary' className='text-xs px-1 py-0'>
                    +{node.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Indicators */}
          <div className='absolute top-1 right-1 flex gap-1'>
            {node.isPinned && <Pin className='h-3 w-3 text-amber-500' />}
            {node.isLocked && <Lock className='h-3 w-3 text-gray-500' />}
          </div>

          {/* Resize Handle */}
          {isSelected && !readOnly && !node.isLocked && (
            <div className='absolute bottom-0 right-0 w-3 h-3 bg-blue-500 cursor-se-resize opacity-75 hover:opacity-100' />
          )}

          {/* Connection Anchors */}
          {isSelected && (
            <>
              <div className='absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2' />
              <div className='absolute right-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2' />
              <div className='absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2' />
              <div className='absolute left-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2' />
            </>
          )}
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem onClick={() => setIsEditing(true)}>
          <Type className='h-4 w-4 mr-2' />
          Edit Title
        </ContextMenuItem>
        <ContextMenuItem>
          <BookOpen className='h-4 w-4 mr-2' />
          Open Note
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Copy className='h-4 w-4 mr-2' />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <Palette className='h-4 w-4 mr-2' />
          Change Color
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          {node.isPinned ? (
            <PinOff className='h-4 w-4 mr-2' />
          ) : (
            <Pin className='h-4 w-4 mr-2' />
          )}
          {node.isPinned ? 'Unpin' : 'Pin'}
        </ContextMenuItem>
        <ContextMenuItem>
          {node.isLocked ? (
            <Unlock className='h-4 w-4 mr-2' />
          ) : (
            <Lock className='h-4 w-4 mr-2' />
          )}
          {node.isLocked ? 'Unlock' : 'Lock'}
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className='text-destructive'>
          <Trash2 className='h-4 w-4 mr-2' />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
