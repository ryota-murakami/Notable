'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
/* eslint-disable no-undef */
import { Button } from '@/design-system/components/button'
import { Card } from '@/design-system/components/card'
import { Input } from '@/design-system/components/input'
import { Filter, RotateCcw, Search, ZoomIn, ZoomOut } from 'lucide-react'

interface GraphNode extends d3.SimulationNodeDatum {
  id: string
  label: string
  title: string
  created_at: string
  updated_at: string
  connections: number
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
    'force' | 'circular' | 'hierarchical'
  >('force')
  const [zoom, setZoom] = useState(1)

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

    // Filter nodes and edges based on search
    const filteredNodes = data.nodes.filter(
      (node) =>
        searchTerm === '' ||
        node.label.toLowerCase().includes(searchTerm.toLowerCase())
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
        // Simple hierarchical layout based on connection count
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

    // Add circles for nodes
    node
      .append('circle')
      .attr('r', (d) => Math.max(8, Math.min(20, 5 + d.connections * 2)))
      .attr('fill', (d) => {
        const hue = Math.abs(d.id.charCodeAt(0) * 137.5) % 360
        return `hsl(${hue}, 70%, 60%)`
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)

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
          .attr('r', Math.max(12, Math.min(24, 8 + d.connections * 2)))
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
            Created: ${new Date(d.created_at).toLocaleDateString()}
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
          .attr('r', Math.max(8, Math.min(20, 5 + d.connections * 2)))
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
  }, [data, searchTerm, selectedLayout])

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

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Controls */}
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
          </select>

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

          {/* Stats */}
          <div className='text-sm text-muted-foreground'>
            {data.stats.totalNotes} notes • {data.stats.totalLinks} links •
            Zoom: {Math.round(zoom * 100)}%
          </div>
        </div>
      </Card>

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

        {data.nodes.length === 0 && (
          <div className='absolute inset-0 flex items-center justify-center text-muted-foreground'>
            <div className='text-center'>
              <Filter className='w-16 h-16 mx-auto mb-4 opacity-50' />
              <h3 className='text-lg font-medium mb-2'>
                No notes to visualize
              </h3>
              <p className='text-sm'>
                Create some notes and link them together to see the knowledge
                graph.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
