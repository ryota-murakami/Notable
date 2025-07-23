import { NextRequest, NextResponse } from 'next/server'
// import { createServerClient } from '@/lib/supabase/server'

interface MetricSnapshot {
  metric_name: string
  metric_value: number
  labels: Record<string, string>
  timestamp: string
}

interface MetricInput {
  name: string
  value: number
  labels?: Record<string, string>
  timestamp?: string
}

interface MetricDefinition {
  name: string
  type: 'counter' | 'gauge' | 'histogram'
  help: string
  unit?: string
}

const METRIC_DEFINITIONS: Record<string, MetricDefinition> = {
  http_requests_total: {
    name: 'http_requests_total',
    type: 'counter',
    help: 'Total number of HTTP requests',
  },
  http_request_duration_seconds: {
    name: 'http_request_duration_seconds',
    type: 'histogram',
    help: 'HTTP request duration in seconds',
    unit: 'seconds',
  },
  active_users: {
    name: 'active_users',
    type: 'gauge',
    help: 'Number of currently active users',
  },
  database_connections: {
    name: 'database_connections',
    type: 'gauge',
    help: 'Number of active database connections',
  },
  memory_usage_bytes: {
    name: 'memory_usage_bytes',
    type: 'gauge',
    help: 'Memory usage in bytes',
    unit: 'bytes',
  },
  error_rate: {
    name: 'error_rate',
    type: 'gauge',
    help: 'Current error rate per minute',
  },
}

export async function GET(_request: NextRequest) {
  // TODO: Implement real metrics retrieval once monitoring_metrics table is added
  try {
    return NextResponse.json({
      metrics: [],
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to retrieve metrics:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const metrics: MetricInput[] = await request.json()

    if (!Array.isArray(metrics)) {
      return NextResponse.json(
        { error: 'Invalid input: expected array of metrics' },
        { status: 400 }
      )
    }

    // Validate metrics
    const validatedMetrics: MetricSnapshot[] = []

    for (const metric of metrics) {
      if (!metric.name || typeof metric.value !== 'number') {
        return NextResponse.json(
          { error: `Invalid metric: ${JSON.stringify(metric)}` },
          { status: 400 }
        )
      }

      const definition = METRIC_DEFINITIONS[metric.name]
      if (!definition) {
        return NextResponse.json(
          { error: `Unknown metric: ${metric.name}` },
          { status: 400 }
        )
      }

      validatedMetrics.push({
        metric_name: metric.name,
        metric_value: metric.value,
        labels: metric.labels || {},
        timestamp: metric.timestamp || new Date().toISOString(),
      })
    }

    // TODO: Store metrics once monitoring_metrics table is added
    return NextResponse.json({
      message: 'Metrics recorded successfully',
      count: validatedMetrics.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to record metrics:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Prometheus-compatible metrics endpoint
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// async function GET_PROMETHEUS(_request: NextRequest) {
/*
  try {
    // TODO: Implement Prometheus format export once monitoring_metrics table is added
    const lines: string[] = []
    
    // Add metric definitions
    for (const [_name, def] of Object.entries(METRIC_DEFINITIONS)) {
      lines.push(`# HELP ${def.name} ${def.help}`)
      lines.push(`# TYPE ${def.name} ${def.type}`)
      
      // TODO: Add actual metric values from database
      // For now, return empty metrics
    }

    return new Response(lines.join('\n'), {
      headers: {
        'Content-Type': 'text/plain; version=0.0.4',
      },
    })
  } catch (error) {
    console.error('Failed to export Prometheus metrics:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
*/
