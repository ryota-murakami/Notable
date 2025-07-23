/**
 * Performance Dashboard Component
 * Real-time performance metrics visualization
 */

'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { performanceMonitor } from '@/lib/performance'
import { memoryMonitor } from '@/lib/memory-monitor'
import { usePerformance } from '@/components/performance-provider'
import { cn } from '@/lib/utils'

interface PerformanceMetrics {
  responseTime: number
  throughput: number
  errorRate: number
  memoryUsage: number
  cacheHitRate: number
  activeUsers: number
}

interface ServiceWorkerMetrics {
  cacheHits: number
  cacheMisses: number
  networkRequests: number
  failedRequests: number
  cacheHitRate: number
  errorRate: number
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    responseTime: 0,
    throughput: 0,
    errorRate: 0,
    memoryUsage: 0,
    cacheHitRate: 0,
    activeUsers: 1,
  })

  const [swMetrics, setSwMetrics] = useState<ServiceWorkerMetrics | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [history, setHistory] = useState<PerformanceMetrics[]>([])
  const { performanceMonitor: pm, memoryMonitor: mm } = usePerformance()

  // Update metrics every 5 seconds
  useEffect(() => {
    const updateMetrics = () => {
      const report = performanceMonitor.generateReport()
      const memoryMetrics = memoryMonitor.getCurrentMetrics()

      const newMetrics: PerformanceMetrics = {
        responseTime: report.summary.avgResponseTime,
        throughput: report.summary.throughput,
        errorRate: report.summary.errorRate,
        memoryUsage: memoryMetrics.heapUsed / (1024 * 1024), // MB
        cacheHitRate: report.summary.cacheHitRate,
        activeUsers: 1, // Would be dynamic in real app
      }

      setMetrics(newMetrics)
      setHistory((prev) => [...prev.slice(-19), newMetrics]) // Keep last 20 points
    }

    // Initial update
    updateMetrics()

    // Update every 5 seconds
    const interval = setInterval(updateMetrics, 5000)

    return () => clearInterval(interval)
  }, [])

  // Listen for Service Worker metrics
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'PERFORMANCE_METRICS') {
          setSwMetrics(event.data.data)
        }
      }

      navigator.serviceWorker.addEventListener('message', handleMessage)

      // Request initial metrics
      navigator.serviceWorker.ready.then((registration) => {
        registration.active?.postMessage({ type: 'GET_PERFORMANCE_METRICS' })
      })

      return () => {
        navigator.serviceWorker.removeEventListener('message', handleMessage)
      }
    }
  }, [])

  const getStatusColor = (
    value: number,
    thresholds: { good: number; warning: number }
  ) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.warning) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBadge = (
    value: number,
    thresholds: { good: number; warning: number }
  ) => {
    if (value <= thresholds.good) return 'bg-green-100 text-green-800'
    if (value <= thresholds.warning) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const clearCaches = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready
      registration.active?.postMessage({ type: 'CLEAR_CACHE' })
    }
  }

  if (!isExpanded) {
    return (
      <div className='fixed bottom-4 right-4 z-50'>
        <Button
          onClick={() => setIsExpanded(true)}
          variant='outline'
          size='sm'
          className='bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white'
        >
          📊 Performance
        </Button>
      </div>
    )
  }

  return (
    <div className='fixed inset-4 z-50 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl overflow-auto'>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold'>Performance Dashboard</h2>
          <div className='flex gap-2'>
            <Button onClick={clearCaches} variant='outline' size='sm'>
              Clear Cache
            </Button>
            <Button
              onClick={() => setIsExpanded(false)}
              variant='outline'
              size='sm'
            >
              Minimize
            </Button>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span
                  className={cn(
                    getStatusColor(metrics.responseTime, {
                      good: 100,
                      warning: 500,
                    })
                  )}
                >
                  {metrics.responseTime.toFixed(0)}ms
                </span>
              </div>
              <Badge
                className={getStatusBadge(metrics.responseTime, {
                  good: 100,
                  warning: 500,
                })}
              >
                {metrics.responseTime <= 100
                  ? 'Excellent'
                  : metrics.responseTime <= 500
                    ? 'Good'
                    : 'Slow'}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Memory Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span
                  className={cn(
                    getStatusColor(metrics.memoryUsage, {
                      good: 50,
                      warning: 100,
                    })
                  )}
                >
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
              <Badge
                className={getStatusBadge(metrics.memoryUsage, {
                  good: 50,
                  warning: 100,
                })}
              >
                {metrics.memoryUsage <= 50
                  ? 'Low'
                  : metrics.memoryUsage <= 100
                    ? 'Normal'
                    : 'High'}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Error Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span
                  className={cn(
                    getStatusColor(metrics.errorRate, { good: 1, warning: 5 })
                  )}
                >
                  {metrics.errorRate.toFixed(2)}%
                </span>
              </div>
              <Badge
                className={getStatusBadge(metrics.errorRate, {
                  good: 1,
                  warning: 5,
                })}
              >
                {metrics.errorRate <= 1
                  ? 'Excellent'
                  : metrics.errorRate <= 5
                    ? 'Good'
                    : 'High'}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Cache Hit Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span
                  className={cn(
                    getStatusColor(100 - metrics.cacheHitRate, {
                      good: 20,
                      warning: 50,
                    })
                  )}
                >
                  {metrics.cacheHitRate.toFixed(1)}%
                </span>
              </div>
              <Badge
                className={getStatusBadge(100 - metrics.cacheHitRate, {
                  good: 20,
                  warning: 50,
                })}
              >
                {metrics.cacheHitRate >= 80
                  ? 'Excellent'
                  : metrics.cacheHitRate >= 50
                    ? 'Good'
                    : 'Poor'}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Throughput
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span className='text-blue-600'>
                  {metrics.throughput.toFixed(1)}/s
                </span>
              </div>
              <Badge className='bg-blue-100 text-blue-800'>
                Requests per second
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm text-gray-600'>
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                <span className='text-purple-600'>{metrics.activeUsers}</span>
              </div>
              <Badge className='bg-purple-100 text-purple-800'>
                Current session
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Service Worker Metrics */}
        {swMetrics && (
          <Card className='mb-6'>
            <CardHeader>
              <CardTitle className='text-lg'>Service Worker Cache</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div>
                  <div className='text-sm text-gray-600'>Cache Hits</div>
                  <div className='text-xl font-semibold text-green-600'>
                    {swMetrics.cacheHits}
                  </div>
                </div>
                <div>
                  <div className='text-sm text-gray-600'>Cache Misses</div>
                  <div className='text-xl font-semibold text-red-600'>
                    {swMetrics.cacheMisses}
                  </div>
                </div>
                <div>
                  <div className='text-sm text-gray-600'>Hit Rate</div>
                  <div className='text-xl font-semibold text-blue-600'>
                    {(swMetrics.cacheHitRate * 100).toFixed(1)}%
                  </div>
                </div>
                <div>
                  <div className='text-sm text-gray-600'>Failed Requests</div>
                  <div className='text-xl font-semibold text-orange-600'>
                    {swMetrics.failedRequests}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Performance History Chart */}
        {history.length > 1 && (
          <Card>
            <CardHeader>
              <CardTitle className='text-lg'>Response Time History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-32 flex items-end space-x-1'>
                {history.map((point, index) => (
                  <div
                    key={index}
                    className='bg-blue-500 min-w-[4px] rounded-t'
                    style={{
                      height: `${Math.min(100, (point.responseTime / 1000) * 100)}%`,
                      opacity: 0.7 + (index / history.length) * 0.3,
                    }}
                    title={`${point.responseTime.toFixed(0)}ms`}
                  />
                ))}
              </div>
              <div className='text-xs text-gray-500 mt-2'>
                Last 20 measurements (max 1000ms scale)
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className='mt-6 flex flex-wrap gap-2'>
          <Button
            onClick={() => performanceMonitor.clearMetrics()}
            variant='outline'
            size='sm'
          >
            Clear Metrics
          </Button>
          <Button
            onClick={() => {
              const report = performanceMonitor.generateReport()
              console.log('Performance Report:', report)
            }}
            variant='outline'
            size='sm'
          >
            Log Report
          </Button>
          <Button
            onClick={() => memoryMonitor.forceGarbageCollection()}
            variant='outline'
            size='sm'
          >
            Force GC
          </Button>
        </div>
      </div>
    </div>
  )
}

// Mini performance indicator for always-on display
export function PerformanceIndicator() {
  const [metrics, setMetrics] = useState({ responseTime: 0, memoryUsage: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const report = performanceMonitor.generateReport()
      const memoryMetrics = memoryMonitor.getCurrentMetrics()

      setMetrics({
        responseTime: report.summary.avgResponseTime,
        memoryUsage: memoryMetrics.heapUsed / (1024 * 1024),
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed bottom-4 left-4 z-40 bg-black/80 text-white text-xs p-2 rounded-lg font-mono'>
      <div>RT: {metrics.responseTime.toFixed(0)}ms</div>
      <div>MEM: {metrics.memoryUsage.toFixed(1)}MB</div>
    </div>
  )
}
