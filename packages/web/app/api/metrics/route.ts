import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import logger from '@/lib/logging'

// Metrics storage (in production, use a proper metrics library like prom-client)
const metrics = {
  httpRequestsTotal: 0,
  httpRequestDuration: [] as number[],
  activeConnections: 0,
  notesCreated: 0,
  notesUpdated: 0,
  notesDeleted: 0,
  searchQueries: 0,
  authAttempts: 0,
  authSuccesses: 0,
  authFailures: 0,
  errors: 0,
  startTime: Date.now(),
}

// Function to update metrics (internal use only)
function updateMetric(metric: keyof typeof metrics, value: number = 1) {
  if (Array.isArray(metrics[metric])) {
    ;(metrics[metric] as number[]).push(value)
    // Keep only last 1000 entries to prevent memory issues
    if ((metrics[metric] as number[]).length > 1000) {
      ;(metrics[metric] as number[]).shift()
    }
  } else {
    ;(metrics[metric] as number) += value
  }
}

// Calculate percentiles
function calculatePercentile(arr: number[], percentile: number): number {
  if (arr.length === 0) return 0
  const sorted = [...arr].sort((a, b) => a - b)
  const index = Math.ceil((percentile / 100) * sorted.length) - 1
  return sorted[index] || 0
}

// Format metrics in Prometheus format
function formatPrometheusMetrics(): string {
  const uptime = (Date.now() - metrics.startTime) / 1000

  const p50 = calculatePercentile(metrics.httpRequestDuration, 50)
  const p95 = calculatePercentile(metrics.httpRequestDuration, 95)
  const p99 = calculatePercentile(metrics.httpRequestDuration, 99)

  return `# HELP notable_uptime_seconds Application uptime in seconds
# TYPE notable_uptime_seconds gauge
notable_uptime_seconds ${uptime.toFixed(2)}

# HELP notable_http_requests_total Total number of HTTP requests
# TYPE notable_http_requests_total counter
notable_http_requests_total ${metrics.httpRequestsTotal}

# HELP notable_http_request_duration_ms HTTP request duration in milliseconds
# TYPE notable_http_request_duration_ms histogram
notable_http_request_duration_ms_sum ${metrics.httpRequestDuration.reduce((a, b) => a + b, 0)}
notable_http_request_duration_ms_count ${metrics.httpRequestDuration.length}
notable_http_request_duration_ms{quantile="0.5"} ${p50}
notable_http_request_duration_ms{quantile="0.95"} ${p95}
notable_http_request_duration_ms{quantile="0.99"} ${p99}

# HELP notable_active_connections Number of active connections
# TYPE notable_active_connections gauge
notable_active_connections ${metrics.activeConnections}

# HELP notable_notes_created_total Total number of notes created
# TYPE notable_notes_created_total counter
notable_notes_created_total ${metrics.notesCreated}

# HELP notable_notes_updated_total Total number of notes updated
# TYPE notable_notes_updated_total counter
notable_notes_updated_total ${metrics.notesUpdated}

# HELP notable_notes_deleted_total Total number of notes deleted
# TYPE notable_notes_deleted_total counter
notable_notes_deleted_total ${metrics.notesDeleted}

# HELP notable_search_queries_total Total number of search queries
# TYPE notable_search_queries_total counter
notable_search_queries_total ${metrics.searchQueries}

# HELP notable_auth_attempts_total Total number of authentication attempts
# TYPE notable_auth_attempts_total counter
notable_auth_attempts_total ${metrics.authAttempts}

# HELP notable_auth_successes_total Total number of successful authentications
# TYPE notable_auth_successes_total counter
notable_auth_successes_total ${metrics.authSuccesses}

# HELP notable_auth_failures_total Total number of failed authentications
# TYPE notable_auth_failures_total counter
notable_auth_failures_total ${metrics.authFailures}

# HELP notable_errors_total Total number of errors
# TYPE notable_errors_total counter
notable_errors_total ${metrics.errors}

# HELP notable_nodejs_memory_usage_bytes Node.js memory usage
# TYPE notable_nodejs_memory_usage_bytes gauge
notable_nodejs_memory_usage_bytes{type="heapUsed"} ${process.memoryUsage().heapUsed}
notable_nodejs_memory_usage_bytes{type="heapTotal"} ${process.memoryUsage().heapTotal}
notable_nodejs_memory_usage_bytes{type="rss"} ${process.memoryUsage().rss}
notable_nodejs_memory_usage_bytes{type="external"} ${process.memoryUsage().external}
`
}

// Metrics endpoint
export async function GET(_request: NextRequest) {
  try {
    // Check if request is from allowed sources (basic security)
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''

    // In production, implement proper authentication for metrics endpoint
    // For now, we'll allow Prometheus user agents
    if (
      !userAgent.includes('Prometheus') &&
      process.env.NODE_ENV === 'production'
    ) {
      // Check for metrics token
      const authHeader = headersList.get('authorization')
      const metricsToken = process.env.METRICS_AUTH_TOKEN

      if (
        !authHeader ||
        !metricsToken ||
        authHeader !== `Bearer ${metricsToken}`
      ) {
        return new Response('Unauthorized', { status: 401 })
      }
    }

    const metricsText = formatPrometheusMetrics()

    return new Response(metricsText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; version=0.0.4',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch {
    logger.error('Metrics endpoint error')
    return new Response('Internal Server Error', { status: 500 })
  }
}

// JSON metrics endpoint for custom monitoring solutions
export async function POST(request: NextRequest) {
  try {
    // This endpoint can be used to receive metrics from the client
    const data = await request.json()

    // Update metrics based on the data received
    if (data.type === 'pageView') {
      updateMetric('httpRequestsTotal')
    } else if (data.type === 'error') {
      updateMetric('errors')
    }

    return NextResponse.json({ success: true })
  } catch {
    logger.error('Metrics update error')
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
