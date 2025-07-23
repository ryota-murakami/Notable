/**
 * Performance Dashboard Component
 * Real-time performance monitoring and metrics visualization
 */

'use client'

import {
  usePerformanceDashboard,
  usePerformanceAlerts,
} from '@/hooks/use-performance-monitoring'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  HardDrive,
  Search,
  Zap,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react'

export function PerformanceDashboard() {
  const dashboard = usePerformanceDashboard()
  const alerts = usePerformanceAlerts()

  if (dashboard.isLoading) {
    return (
      <div className='grid gap-6'>
        <div className='animate-pulse space-y-4'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='h-32 bg-muted rounded-lg' />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {/* Performance Alerts */}
      {alerts.hasAlerts && (
        <div className='space-y-2'>
          {alerts.alerts.map((alert) => (
            <Alert
              key={alert.id}
              variant={alert.type === 'error' ? 'destructive' : 'default'}
            >
              <AlertTriangle className='h-4 w-4' />
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      {/* Overall Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Activity className='h-5 w-5 mr-2' />
            Performance Score
          </CardTitle>
          <CardDescription>
            Overall application performance rating
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold'>
                {dashboard.overallScore}/100
              </span>
              <Badge
                variant={
                  dashboard.overallScore >= 90
                    ? 'default'
                    : dashboard.overallScore >= 70
                      ? 'secondary'
                      : 'destructive'
                }
              >
                {dashboard.overallScore >= 90
                  ? 'Excellent'
                  : dashboard.overallScore >= 70
                    ? 'Good'
                    : 'Needs Improvement'}
              </Badge>
            </div>
            <Progress
              value={dashboard.overallScore}
              className='h-2'
              indicatorClassName={
                dashboard.overallScore >= 90
                  ? 'bg-green-500'
                  : dashboard.overallScore >= 70
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className='grid md:grid-cols-2 gap-6'>
        {/* Web Vitals */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Zap className='h-5 w-5 mr-2' />
              Web Vitals
            </CardTitle>
            <CardDescription>
              Core web vitals performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {Object.entries(dashboard.webVitals.metrics).map(
                ([key, value]) => (
                  <WebVitalMetric key={key} name={key} value={value} />
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Memory Usage */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <HardDrive className='h-5 w-5 mr-2' />
              Memory Usage
            </CardTitle>
            <CardDescription>
              JavaScript heap memory consumption
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium'>Heap Usage</span>
                <span className='text-sm text-muted-foreground'>
                  {dashboard.memoryUsage.memoryUsagePercent.toFixed(1)}%
                </span>
              </div>
              <Progress
                value={dashboard.memoryUsage.memoryUsagePercent}
                className='h-2'
                indicatorClassName={
                  dashboard.memoryUsage.memoryUsagePercent > 80
                    ? 'bg-red-500'
                    : dashboard.memoryUsage.memoryUsagePercent > 60
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                }
              />
              {dashboard.memoryUsage.memoryInfo && (
                <div className='text-xs text-muted-foreground'>
                  {formatBytes(dashboard.memoryUsage.memoryInfo.usedJSHeapSize)}{' '}
                  /{' '}
                  {formatBytes(
                    dashboard.memoryUsage.memoryInfo.jsHeapSizeLimit
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {/* Query Performance */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Database className='h-5 w-5 mr-2' />
              Query Performance
            </CardTitle>
            <CardDescription>React Query performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium'>Average Query Time</span>
                <span className='text-sm text-muted-foreground'>
                  {dashboard.queryPerformance.averageQueryTime.toFixed(0)}ms
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium'>Slow Queries</span>
                <Badge
                  variant={
                    dashboard.queryPerformance.slowQueries.length > 0
                      ? 'destructive'
                      : 'default'
                  }
                >
                  {dashboard.queryPerformance.slowQueries.length}
                </Badge>
              </div>

              {dashboard.queryPerformance.slowQueries.length > 0 && (
                <div className='space-y-2'>
                  <span className='text-xs font-medium text-muted-foreground'>
                    Slow Queries:
                  </span>
                  {dashboard.queryPerformance.slowQueries
                    .slice(0, 3)
                    .map(([key, metric]) => (
                      <div key={key} className='text-xs p-2 bg-muted rounded'>
                        <div className='font-mono truncate'>{key}</div>
                        <div className='text-muted-foreground'>
                          {metric.duration}ms
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Performance Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <TrendingUp className='h-5 w-5 mr-2' />
              Recommendations
            </CardTitle>
            <CardDescription>
              Performance optimization suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              <PerformanceRecommendation dashboard={dashboard} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Individual Web Vital metric component
function WebVitalMetric({
  name,
  value,
}: {
  name: string
  value: number | null
}) {
  if (value === null) {
    return (
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium'>{name}</span>
        <span className='text-xs text-muted-foreground'>Loading...</span>
      </div>
    )
  }

  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 },
  } as const

  const threshold = thresholds[name as keyof typeof thresholds]
  const status =
    value <= threshold.good
      ? 'good'
      : value <= threshold.poor
        ? 'needs-improvement'
        : 'poor'

  const getIcon = () => {
    switch (status) {
      case 'good':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'needs-improvement':
        return <Minus className='h-4 w-4 text-yellow-500' />
      case 'poor':
        return <TrendingDown className='h-4 w-4 text-red-500' />
    }
  }

  const formatValue = (name: string, value: number) => {
    if (name === 'CLS') return value.toFixed(3)
    return `${Math.round(value)}ms`
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        {getIcon()}
        <span className='text-sm font-medium'>{name}</span>
      </div>
      <span className='text-sm text-muted-foreground'>
        {formatValue(name, value)}
      </span>
    </div>
  )
}

// Performance recommendations component
function PerformanceRecommendation({
  dashboard,
}: {
  dashboard: ReturnType<typeof usePerformanceDashboard>
}) {
  const recommendations = []

  if (
    dashboard.webVitals.metrics.LCP &&
    dashboard.webVitals.metrics.LCP > 2500
  ) {
    recommendations.push({
      icon: <Clock className='h-4 w-4 text-orange-500' />,
      text: 'Optimize Largest Contentful Paint by reducing image sizes and server response time',
    })
  }

  if (dashboard.memoryUsage.memoryUsagePercent > 70) {
    recommendations.push({
      icon: <Memory className='h-4 w-4 text-red-500' />,
      text: 'High memory usage detected. Consider implementing virtualization for large lists',
    })
  }

  if (dashboard.queryPerformance.slowQueries.length > 3) {
    recommendations.push({
      icon: <Database className='h-4 w-4 text-yellow-500' />,
      text: 'Multiple slow queries detected. Review query optimization and caching strategies',
    })
  }

  if (
    dashboard.webVitals.metrics.CLS &&
    dashboard.webVitals.metrics.CLS > 0.1
  ) {
    recommendations.push({
      icon: <Activity className='h-4 w-4 text-purple-500' />,
      text: 'Improve Cumulative Layout Shift by setting dimensions for images and ads',
    })
  }

  if (recommendations.length === 0) {
    recommendations.push({
      icon: <CheckCircle className='h-4 w-4 text-green-500' />,
      text: 'Performance is looking good! Keep monitoring for any degradation',
    })
  }

  return (
    <>
      {recommendations.slice(0, 4).map((rec, index) => (
        <div key={index} className='flex items-start space-x-2'>
          {rec.icon}
          <span className='text-sm text-muted-foreground'>{rec.text}</span>
        </div>
      ))}
    </>
  )
}

// Helper function to format bytes
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
