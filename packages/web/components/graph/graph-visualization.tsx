'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
/* eslint-disable no-undef */
import { Button } from '@/design-system/components/button'
import { Card } from '@/design-system/components/card'
import { Input } from '@/design-system/components/input'
import {
  BarChart3,
  Filter,
  Info,
  RotateCcw,
  Search,
  Settings,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

interface GraphNode extends d3.SimulationNodeDatum {
  id: string
  label: string
  title: string
  created_at: string
  updated_at: string
  connections: number
  tags?: string[]
  centrality?: number
  clusterId?: number
}

interface GraphEdge extends d3.SimulationLinkDatum<GraphNode> {
  from: string
  to: string
  label: string
  title: string
}

export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
  stats: {
    totalNotes: number
    totalLinks: number
    avgConnections: number
  }
}

interface GraphVisualizationProps {
  data: GraphData
  onNodeClick?: (nodeId: string) => void
  className?: string
}

export function GraphVisualization({
  data,
  onNodeClick,
  className = '',
}: GraphVisualizationProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLayout, setSelectedLayout] = useState<
    'force' | 'circular' | 'hierarchical' | 'radial'
  >('force')
  const [zoom, setZoom] = useState(1)
  const [selectedFilters, setSelectedFilters] = useState({
    dateRange: 'all' as 'all' | '7days' | '30days' | '90days',
    minConnections: 0,
    showIsolated: true,
    showHubs: true,
  })
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [nodeColorBy, setNodeColorBy] = useState<
    'connections' | 'date' | 'cluster'
  >('connections')

  // Compute graph analytics
  const computeAnalytics = (nodes: GraphNode[], edges: GraphEdge[]) => {
    // Calculate centrality scores
    const centralityScores = new Map<string, number>()
    nodes.forEach((node) => {
      centralityScores.set(node.id, node.connections)
    })

    // Identify hubs (top 10% by connections)
    const sortedByConnections = [...nodes].sort(
      (a, b) => b.connections - a.connections
    )
    const hubThreshold = Math.max(1, Math.ceil(nodes.length * 0.1))
    const hubs = new Set(
      sortedByConnections.slice(0, hubThreshold).map((n) => n.id)
    )

    // Identify isolated nodes (0 connections)
    const isolated = new Set(
      nodes.filter((n) => n.connections === 0).map((n) => n.id)
    )

    return { centralityScores, hubs, isolated }
  }

  // Apply filters to nodes and edges
  const applyFilters = (nodes: GraphNode[], edges: GraphEdge[]) => {
    let filteredNodes = nodes.filter((node) => {
      // Search filter
      if (
        searchTerm &&
        !node.label.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }

      // Date filter
      if (selectedFilters.dateRange !== 'all') {
        const nodeDate = new Date(node.created_at)
        const now = new Date()
        const daysAgo =
          {
            '7days': 7,
            '30days': 30,
            '90days': 90,
          }[selectedFilters.dateRange] || 0

        const cutoffDate = new Date(
          now.getTime() - daysAgo * 24 * 60 * 60 * 1000
        )
        if (nodeDate < cutoffDate) return false
      }

      // Connection filter
      if (node.connections < selectedFilters.minConnections) return false

      return true
    })

    const { hubs, isolated } = computeAnalytics(nodes, edges)

    // Apply hub/isolated filters
    if (!selectedFilters.showHubs) {
      filteredNodes = filteredNodes.filter((node) => !hubs.has(node.id))
    }

    if (!selectedFilters.showIsolated) {
      filteredNodes = filteredNodes.filter((node) => !isolated.has(node.id))
    }

    return filteredNodes
  }

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length) return

    const svg = d3.select(svgRef.current)
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // Clear previous content
    svg.selectAll('*').remove()

    // Create zoom behavior
    const zoomBehavior = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
        setZoom(event.transform.k)
      })

    svg.call(zoomBehavior)

    // Create main group for zoomable content
    const g = svg.append('g')

    // Apply advanced filters
    const filteredNodes = applyFilters(data.nodes, data.edges)
    const { centralityScores, hubs, isolated } = computeAnalytics(
      data.nodes,
      data.edges
    )

    const filteredNodeIds = new Set(filteredNodes.map((node) => node.id))
    const filteredEdges = data.edges.filter(
      (edge) =>
        filteredNodeIds.has(edge.from as string) &&
        filteredNodeIds.has(edge.to as string)
    )

    // Create simulation
    const simulation = d3.forceSimulation<GraphNode>(filteredNodes)

    // Configure layout based on selection
    switch (selectedLayout) {
      case 'force':
        simulation
          .force(
            'link',
            d3
              .forceLink<GraphNode, GraphEdge>(filteredEdges)
              .id((d) => d.id)
              .distance(100)
          )
          .force('charge', d3.forceManyBody().strength(-300))
          .force('center', d3.forceCenter(width / 2, height / 2))
          .force('collision', d3.forceCollide().radius(30))
        break
      case 'circular':
        const radius = Math.min(width, height) / 3
        filteredNodes.forEach((node, i) => {
          const angle = (i / filteredNodes.length) * 2 * Math.PI
          node.fx = width / 2 + radius * Math.cos(angle)
          node.fy = height / 2 + radius * Math.sin(angle)
        })
        break
      case 'hierarchical':
        // Hierarchical layout based on connection count
        const levels = Math.ceil(Math.sqrt(filteredNodes.length))
        filteredNodes.sort((a, b) => b.connections - a.connections)
        filteredNodes.forEach((node, i) => {
          const level = Math.floor(i / levels)
          const posInLevel = i % levels
          node.fx = (width / (levels + 1)) * (posInLevel + 1)
          node.fy =
            (height / (Math.ceil(filteredNodes.length / levels) + 1)) *
            (level + 1)
        })
        break
      case 'radial':
        // Radial layout with hubs in center
        const centerNodes = [...filteredNodes].filter((n) => hubs.has(n.id))
        const peripheryNodes = [...filteredNodes].filter((n) => !hubs.has(n.id))

        // Place hubs in center
        centerNodes.forEach((node, i) => {
          const angle = (i / centerNodes.length) * 2 * Math.PI
          const innerRadius = 50
          node.fx = width / 2 + innerRadius * Math.cos(angle)
          node.fy = height / 2 + innerRadius * Math.sin(angle)
        })

        // Place other nodes in concentric circles
        peripheryNodes.forEach((node, i) => {
          const angle = (i / peripheryNodes.length) * 2 * Math.PI
          const outerRadius = Math.min(width, height) / 3
          node.fx = width / 2 + outerRadius * Math.cos(angle)
          node.fy = height / 2 + outerRadius * Math.sin(angle)
        })
        break
    }

    // Create links
    const link = g
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(filteredEdges)
      .enter()
      .append('line')
      .attr('stroke', '#94a3b8')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2)

    // Create nodes
    const node = g
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(filteredNodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .call(
        d3
          .drag<SVGGElement, GraphNode>()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      )

    // Add circles for nodes with advanced coloring
    node
      .append('circle')
      .attr('r', (d) => {
        const baseSize = hubs.has(d.id) ? 12 : isolated.has(d.id) ? 6 : 8
        return Math.max(baseSize, Math.min(25, baseSize + d.connections * 1.5))
      })
      .attr('fill', (d) => {
        switch (nodeColorBy) {
          case 'connections':
            const connectionIntensity = Math.min(d.connections / 10, 1)
            return `hsl(${240 - connectionIntensity * 120}, 70%, ${60 + connectionIntensity * 20}%)`

          case 'date':
            const nodeAge = Date.now() - new Date(d.created_at).getTime()
            const maxAge = 365 * 24 * 60 * 60 * 1000 // 1 year
            const ageRatio = Math.min(nodeAge / maxAge, 1)
            return `hsl(${120 - ageRatio * 60}, 70%, 60%)`

          case 'cluster':
          default:
            if (hubs.has(d.id)) return '#ef4444' // Red for hubs
            if (isolated.has(d.id)) return '#94a3b8' // Gray for isolated
            const hue = Math.abs(d.id.charCodeAt(0) * 137.5) % 360
            return `hsl(${hue}, 70%, 60%)`
        }
      })
      .attr('stroke', (d) => {
        if (hubs.has(d.id)) return '#dc2626'
        if (isolated.has(d.id)) return '#6b7280'
        return '#fff'
      })
      .attr('stroke-width', (d) => (hubs.has(d.id) ? 3 : 2))

    // Add labels
    node
      .append('text')
      .text((d) =>
        d.label.length > 20 ? `${d.label.substring(0, 20)}...` : d.label
      )
      .attr('font-size', '12px')
      .attr('font-family', 'system-ui, -apple-system, sans-serif')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', '#1f2937')
      .attr('pointer-events', 'none')

    // Add hover effects and click handlers
    node
      .on('mouseover', function (event, d) {
        d3.select(this)
          .select('circle')
          .transition()
          .duration(200)
          .attr('r', Math.max(14, Math.min(28, 10 + d.connections * 1.8)))
          .attr('stroke-width', 3)

        // Show tooltip
        const tooltip = d3
          .select('body')
          .append('div')
          .attr('class', 'graph-tooltip')
          .style('position', 'absolute')
          .style('background', 'rgba(0, 0, 0, 0.8)')
          .style('color', 'white')
          .style('padding', '8px 12px')
          .style('border-radius', '4px')
          .style('font-size', '12px')
          .style('pointer-events', 'none')
          .style('z-index', '1000')
          .html(
            `
            <strong>${d.title}</strong><br/>
            Connections: ${d.connections}<br/>
            ${hubs.has(d.id) ? '<span style="color: #ef4444">🔥 Hub Node</span><br/>' : ''}
            ${isolated.has(d.id) ? '<span style="color: #94a3b8">🏝️ Isolated</span><br/>' : ''}
            Created: ${new Date(d.created_at).toLocaleDateString()}<br/>
            Updated: ${new Date(d.updated_at).toLocaleDateString()}
          `
          )
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`)
      })
      .on('mouseout', function (event, d) {
        d3.select(this)
          .select('circle')
          .transition()
          .duration(200)
          .attr('r', (d: any) => {
            const baseSize = hubs.has(d.id) ? 12 : isolated.has(d.id) ? 6 : 8
            return Math.max(
              baseSize,
              Math.min(25, baseSize + d.connections * 1.5)
            )
          })
          .attr('stroke-width', 2)

        // Remove tooltip
        d3.selectAll('.graph-tooltip').remove()
      })
      .on('click', function (event, d) {
        event.stopPropagation()
        onNodeClick?.(d.id)
      })

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as GraphNode).x ?? 0)
        .attr('y1', (d) => (d.source as GraphNode).y ?? 0)
        .attr('x2', (d) => (d.target as GraphNode).x ?? 0)
        .attr('y2', (d) => (d.target as GraphNode).y ?? 0)

      node.attr('transform', (d) => `translate(${d.x ?? 0},${d.y ?? 0})`)
    })

    // Drag functions
    function dragstarted(
      event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>
    ) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragended(
      event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>
    ) {
      if (!event.active) simulation.alphaTarget(0)
      if (selectedLayout === 'force') {
        event.subject.fx = null
        event.subject.fy = null
      }
    }

    // Cleanup function
    return () => {
      simulation.stop()
      d3.selectAll('.graph-tooltip').remove()
    }
  }, [data, searchTerm, selectedLayout, selectedFilters, nodeColorBy])

  const handleZoomIn = () => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      svg
        .transition()
        .call(d3.zoom<SVGSVGElement, unknown>().scaleBy as any, 1.5)
    }
  }

  const handleZoomOut = () => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      svg
        .transition()
        .call(d3.zoom<SVGSVGElement, unknown>().scaleBy as any, 1 / 1.5)
    }
  }

  const handleReset = () => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      svg
        .transition()
        .call(
          d3.zoom<SVGSVGElement, unknown>().transform as any,
          d3.zoomIdentity
        )
    }
  }

  const analytics = computeAnalytics(data.nodes, data.edges)
  const filteredAnalytics = computeAnalytics(
    applyFilters(data.nodes, data.edges),
    data.edges
  )

  return (
    <div
      data-testid='graph-visualization'
      className={`flex flex-col h-full ${className}`}
    >
      {/* Main Controls */}
      <Card className='p-4 mb-4'>
        <div className='flex flex-wrap items-center gap-4'>
          {/* Search */}
          <div className='flex items-center gap-2 flex-1 min-w-[200px]'>
            <Search className='w-4 h-4 text-muted-foreground' />
            <Input
              placeholder='Search notes...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='flex-1'
            />
          </div>

          {/* Layout Selection */}
          <select
            value={selectedLayout}
            onChange={(e) => setSelectedLayout(e.target.value as any)}
            className='px-3 py-2 border rounded-md bg-background'
          >
            <option value='force'>Force Layout</option>
            <option value='circular'>Circular Layout</option>
            <option value='hierarchical'>Hierarchical Layout</option>
            <option value='radial'>Radial Layout</option>
          </select>

          {/* Node Coloring */}
          <select
            value={nodeColorBy}
            onChange={(e) => setNodeColorBy(e.target.value as any)}
            className='px-3 py-2 border rounded-md bg-background text-sm'
          >
            <option value='connections'>Color by Connections</option>
            <option value='date'>Color by Date</option>
            <option value='cluster'>Color by Type</option>
          </select>

          {/* Analytics Toggle */}
          <Button
            variant={showAnalytics ? 'default' : 'secondary'}
            size='sm'
            onClick={() => setShowAnalytics(!showAnalytics)}
          >
            <BarChart3 className='w-4 h-4 mr-1' />
            Analytics
          </Button>

          {/* Zoom Controls */}
          <div className='flex items-center gap-2'>
            <Button variant='secondary' size='sm' onClick={handleZoomIn}>
              <ZoomIn className='w-4 h-4' />
            </Button>
            <Button variant='secondary' size='sm' onClick={handleZoomOut}>
              <ZoomOut className='w-4 h-4' />
            </Button>
            <Button variant='secondary' size='sm' onClick={handleReset}>
              <RotateCcw className='w-4 h-4' />
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className='flex flex-wrap items-center gap-4 pt-4 border-t text-sm'>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>Date:</span>
            <select
              value={selectedFilters.dateRange}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  dateRange: e.target.value as any,
                }))
              }
              className='px-2 py-1 border rounded bg-background'
            >
              <option value='all'>All Time</option>
              <option value='7days'>Last 7 Days</option>
              <option value='30days'>Last 30 Days</option>
              <option value='90days'>Last 90 Days</option>
            </select>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>Min Connections:</span>
            <input
              type='range'
              min='0'
              max='10'
              value={selectedFilters.minConnections}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  minConnections: Number(e.target.value),
                }))
              }
              className='w-20'
            />
            <span className='w-6'>{selectedFilters.minConnections}</span>
          </div>

          <label className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={selectedFilters.showHubs}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  showHubs: e.target.checked,
                }))
              }
            />
            Show Hubs
          </label>

          <label className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={selectedFilters.showIsolated}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  showIsolated: e.target.checked,
                }))
              }
            />
            Show Isolated
          </label>

          <div className='text-muted-foreground ml-auto'>
            {applyFilters(data.nodes, data.edges).length} of{' '}
            {data.stats.totalNotes} notes • Zoom: {Math.round(zoom * 100)}%
          </div>
        </div>
      </Card>

      {/* Analytics Panel */}
      {showAnalytics && (
        <Card className='p-4 mb-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-red-600'>
                {analytics.hubs.size}
              </div>
              <div className='text-muted-foreground'>Hub Notes</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-gray-600'>
                {analytics.isolated.size}
              </div>
              <div className='text-muted-foreground'>Isolated Notes</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-green-600'>
                {data.stats.avgConnections.toFixed(1)}
              </div>
              <div className='text-muted-foreground'>Avg Connections</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-600'>
                {data.stats.totalLinks}
              </div>
              <div className='text-muted-foreground'>Total Links</div>
            </div>
          </div>
        </Card>
      )}

      {/* Graph Container */}
      <div
        ref={containerRef}
        className='flex-1 relative border rounded-lg bg-background'
      >
        <svg
          ref={svgRef}
          width='100%'
          height='100%'
          className='absolute inset-0'
        />

        {applyFilters(data.nodes, data.edges).length === 0 && (
          <div className='absolute inset-0 flex items-center justify-center text-muted-foreground'>
            <div className='text-center'>
              <Filter className='w-16 h-16 mx-auto mb-4 opacity-50' />
              <h3 className='text-lg font-medium mb-2'>
                {data.nodes.length === 0
                  ? 'No notes to visualize'
                  : 'No notes match current filters'}
              </h3>
              <p className='text-sm'>
                {data.nodes.length === 0
                  ? 'Create some notes and link them together to see the knowledge graph.'
                  : 'Try adjusting the filters or search terms to see more notes.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
