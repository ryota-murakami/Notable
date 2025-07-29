'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  GraphVisualization,
  type GraphData as GraphVisualizationData,
} from '@/components/graph/graph-visualization'
import { Card } from '@/design-system/components/card'
import { Button } from '@/design-system/components/button'
import { ArrowLeft, Loader2 } from 'lucide-react'

export default function GraphPage() {
  const router = useRouter()
  const [graphData, setGraphData] = useState<GraphVisualizationData | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGraphData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/graph')

        if (!response.ok) {
          throw new Error(`Failed to fetch graph data: ${response.statusText}`)
        }

        const result = await response.json()

        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch graph data')
        }

        // Transform edges to match GraphVisualization expectations
        const transformedData = {
          ...result.data,
          edges: result.data.edges.map((edge: any) => ({
            ...edge,
            source: edge.from,
            target: edge.to,
          })),
        }

        setGraphData(transformedData as GraphVisualizationData)
      } catch (err) {
        console.error('Graph data fetch error:', err)
        setError(
          err instanceof Error ? err.message : 'Failed to load graph data'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchGraphData()
  }, [])

  const handleNodeClick = (nodeId: string) => {
    router.push(`/app/notes/${nodeId}`)
  }

  const handleBackToNotes = () => {
    router.push('/app')
  }

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-center min-h-[60vh]'>
          <div className='text-center'>
            <Loader2 className='w-8 h-8 animate-spin mx-auto mb-4' />
            <h2 className='text-lg font-medium text-muted-foreground'>
              Loading graph...
            </h2>
            <p className='text-sm text-muted-foreground mt-2'>
              Analyzing note relationships and building visualization
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center mb-6'>
          <Button variant='ghost' onClick={handleBackToNotes} className='mr-4'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Notes
          </Button>
          <h1 className='text-2xl font-bold'>Knowledge Graph</h1>
        </div>

        <Card className='p-8 text-center'>
          <div className='text-destructive text-lg font-medium mb-2'>
            Failed to load graph data
          </div>
          <p className='text-muted-foreground mb-4'>{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8 h-screen flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center'>
          <Button variant='ghost' onClick={handleBackToNotes} className='mr-4'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Notes
          </Button>
          <div>
            <h1 className='text-2xl font-bold'>Knowledge Graph</h1>
            <p className='text-muted-foreground'>
              Visualize connections between your notes
            </p>
          </div>
        </div>
      </div>

      {/* Graph Visualization */}
      <div className='flex-1 min-h-0'>
        {graphData && (
          <GraphVisualization
            data={graphData}
            onNodeClick={handleNodeClick}
            className='h-full'
          />
        )}
      </div>
    </div>
  )
}
