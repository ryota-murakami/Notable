import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Initialize Supabase client with service role
const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const metricName = searchParams.get('metric')
    const limit = parseInt(searchParams.get('limit') || '100')
    const hours = parseInt(searchParams.get('hours') || '24')

    // Calculate time range
    const startTime = new Date(
      Date.now() - hours * 60 * 60 * 1000
    ).toISOString()

    // Build query
    let query = supabase
      .from('metrics_snapshots')
      .select('*')
      .gte('timestamp', startTime)
      .order('timestamp', { ascending: false })
      .limit(limit)

    // Filter by metric name if specified
    if (metricName) {
      query = query.eq('metric_name', metricName)
    }

    const { data: metrics, error } = await query

    if (error) {
      console.error('Failed to retrieve metrics:', error)
      return NextResponse.json(
        { error: 'Failed to retrieve metrics' },
        { status: 500 }
      )
    }

    // Group metrics by name for easier consumption
    const groupedMetrics: Record<string, any[]> = {}
    if (metrics) {
      metrics.forEach((metric) => {
        if (!groupedMetrics[metric.metric_name]) {
          groupedMetrics[metric.metric_name] = []
        }
        groupedMetrics[metric.metric_name]!.push({
          value: metric.metric_value,
          labels: metric.labels,
          timestamp: metric.timestamp,
        })
      })
    }

    return NextResponse.json({
      metrics: metricName ? metrics : groupedMetrics,
      count: metrics?.length || 0,
      timeRange: { hours, startTime },
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

    // Store metrics in the database
    const metricsToInsert = validatedMetrics.map((metric) => ({
      metric_name: metric.metric_name,
      metric_value: metric.metric_value,
      labels: metric.labels,
      timestamp: metric.timestamp,
    }))

    const { error: insertError } = await supabase
      .from('metrics_snapshots')
      .insert(metricsToInsert)

    if (insertError) {
      console.error('Failed to store metrics:', insertError)
      return NextResponse.json(
        { error: 'Failed to store metrics' },
        { status: 500 }
      )
    }

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
