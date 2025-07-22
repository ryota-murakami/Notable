import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { SupabaseClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logging'

interface MetricData {
  name: string
  value: number
  timestamp: string
  labels?: Record<string, string>
  [key: string]: unknown
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
  cpu_usage_percent: {
    name: 'cpu_usage_percent',
    type: 'gauge',
    help: 'CPU usage percentage',
    unit: 'percent',
  },
  error_rate: {
    name: 'error_rate',
    type: 'gauge',
    help: 'Error rate percentage',
    unit: 'percent',
  },
  notes_created_total: {
    name: 'notes_created_total',
    type: 'counter',
    help: 'Total number of notes created',
  },
  searches_total: {
    name: 'searches_total',
    type: 'counter',
    help: 'Total number of searches performed',
  },
  exports_total: {
    name: 'exports_total',
    type: 'counter',
    help: 'Total number of exports',
  },
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const metricName = searchParams.get('metric')
    const startTime = searchParams.get('start')
    const endTime = searchParams.get('end')
    const format = searchParams.get('format') || 'json' // 'json' | 'prometheus'
    const _step = searchParams.get('step') || '5m' // aggregation interval

    const supabase = createClient()

    if (format === 'prometheus') {
      return handlePrometheusFormat(supabase, metricName)
    }

    // Default to JSON format
    let query = supabase
      .from('metrics_snapshots')
      .select('*')
      .order('timestamp', { ascending: false })

    if (metricName) {
      query = query.eq('metric_name', metricName)
    }

    if (startTime) {
      query = query.gte('timestamp', startTime)
    }

    if (endTime) {
      query = query.lte('timestamp', endTime)
    }

    // Limit to last 1000 points by default
    query = query.limit(1000)

    const { data: metricsData, error } = await query

    if (error) {
      logger.error('Failed to fetch metrics', { error })
      return NextResponse.json(
        { error: 'Failed to fetch metrics' },
        { status: 500 }
      )
    }

    // Group metrics by name
    const groupedMetrics: Record<string, MetricData[]> = {}
    metricsData?.forEach((metric) => {
      if (!groupedMetrics[metric.metric_name]) {
        groupedMetrics[metric.metric_name] = []
      }
      groupedMetrics[metric.metric_name].push({
        timestamp: metric.timestamp,
        value: metric.metric_value,
        labels: metric.labels,
      })
    })

    // Calculate current values and trends
    const currentMetrics = await getCurrentMetrics(supabase)

    return NextResponse.json({
      metrics: groupedMetrics,
      current: currentMetrics,
      definitions: METRIC_DEFINITIONS,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Metrics API error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const body = await request.json()

    // Support both single metric and batch metrics
    const metrics = Array.isArray(body) ? body : [body]

    const insertData = metrics.map((metric) => {
      const { name, value, labels = {}, timestamp } = metric

      if (!name || value === undefined) {
        throw new Error('Missing required fields: name and value')
      }

      return {
        metric_name: name,
        metric_value: parseFloat(value),
        labels,
        timestamp: timestamp || new Date().toISOString(),
      }
    })

    const { data: _data, error } = await supabase
      .from('metrics_snapshots')
      .insert(insertData)
      .select()

    if (error) {
      logger.error('Failed to insert metrics', { error })
      return NextResponse.json(
        { error: 'Failed to insert metrics' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Metrics recorded successfully',
      count: data.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Record metrics error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handlePrometheusFormat(
  supabase: SupabaseClient,
  metricName?: string | null
) {
  try {
    let query = supabase
      .from('metrics_snapshots')
      .select('metric_name, metric_value, labels, timestamp')
      .order('timestamp', { ascending: false })

    if (metricName) {
      query = query.eq('metric_name', metricName)
    }

    // Get latest value for each metric
    const { data: metrics, error } = await query.limit(100)

    if (error) {
      throw error
    }

    // Convert to Prometheus format
    let prometheusOutput = ''

    // Group by metric name
    const metricGroups: Record<string, MetricData[]> = {}
    metrics?.forEach((metric) => {
      if (!metricGroups[metric.metric_name]) {
        metricGroups[metric.metric_name] = []
      }
      metricGroups[metric.metric_name].push(metric)
    })

    // Generate Prometheus format for each metric
    Object.entries(metricGroups).forEach(([name, metricData]) => {
      const definition = METRIC_DEFINITIONS[name]
      if (definition) {
        prometheusOutput += `# HELP ${name} ${definition.help}\n`
        prometheusOutput += `# TYPE ${name} ${definition.type}\n`
      }

      // Get the latest value for each unique label combination
      const latestValues: Record<string, MetricData> = {}
      metricData.forEach((metric) => {
        const labelKey = JSON.stringify(metric.labels || {})
        if (
          !latestValues[labelKey] ||
          new Date(metric.timestamp) >
            new Date(latestValues[labelKey].timestamp)
        ) {
          latestValues[labelKey] = metric
        }
      })

      Object.values(latestValues).forEach((metric: MetricData) => {
        const labels = metric.labels || {}
        const labelString = Object.entries(labels)
          .map(([key, value]) => `${key}="${value}"`)
          .join(',')

        const metricLine = labelString
          ? `${name}{${labelString}} ${metric.metric_value}`
          : `${name} ${metric.metric_value}`

        prometheusOutput += `${metricLine}\n`
      })

      prometheusOutput += '\n'
    })

    return new Response(prometheusOutput, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    logger.error('Prometheus format error', { error })
    return NextResponse.json(
      { error: 'Failed to generate Prometheus format' },
      { status: 500 }
    )
  }
}

async function getCurrentMetrics(supabase: SupabaseClient) {
  try {
    // Simulate current metrics - in a real app, these would come from various sources
    const _currentTime = Date.now()

    // Get some real data from the database
    const { data: notes } = await supabase
      .from('notes')
      .select('id', { count: 'exact' })

    const { data: users } = await supabase
      .from('auth.users')
      .select('id', { count: 'exact' })

    // Mock current system metrics
    const metrics = {
      active_users: Math.floor(Math.random() * 100) + 50,
      http_requests_total: Math.floor(Math.random() * 10000) + 5000,
      database_connections: Math.floor(Math.random() * 20) + 10,
      memory_usage_bytes: Math.floor(Math.random() * 1000000000) + 500000000, // 500MB - 1.5GB
      cpu_usage_percent: Math.floor(Math.random() * 30) + 20, // 20-50%
      error_rate: Math.random() * 0.1, // 0-0.1%
      notes_total: notes?.length || 0,
      users_total: users?.length || 0,
      response_time_ms: Math.floor(Math.random() * 200) + 50, // 50-250ms
    }

    return metrics
  } catch (error) {
    logger.error('Failed to get current metrics', { error })
    return {}
  }
}
