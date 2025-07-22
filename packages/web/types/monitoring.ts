// Monitoring and metrics type definitions

export interface MetricSnapshot {
  timestamp: number
  value: number
  labels?: Record<string, string>
}

export interface MetricInput {
  name: string
  value: number
  type: 'counter' | 'gauge' | 'histogram' | 'summary'
  labels?: Record<string, string>
  help?: string
}

export interface IncidentRecord {
  id: string
  title: string
  status: 'open' | 'acknowledged' | 'resolved'
  severity: 'critical' | 'high' | 'medium' | 'low'
  createdAt: string
  updatedAt: string
  description?: string
  affectedServices?: string[]
  resolvedAt?: string
  resolvedBy?: string
}

export interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'partial_outage' | 'major_outage'
  uptime: number
  lastChecked: string
  responseTime?: number
  error?: string
}

export interface HealthCheckResult {
  service: string
  status: 'healthy' | 'unhealthy'
  timestamp: string
  duration?: number
  error?: string
  details?: Record<string, unknown>
}

export interface AlertWebhookPayload {
  version: string
  groupKey: string
  status: 'firing' | 'resolved'
  receiver: string
  groupLabels: Record<string, string>
  commonLabels: Record<string, string>
  commonAnnotations: Record<string, string>
  externalURL: string
  alerts: Array<{
    status: 'firing' | 'resolved'
    labels: Record<string, string>
    annotations: Record<string, string>
    startsAt: string
    endsAt: string
    generatorURL: string
    fingerprint: string
  }>
}
