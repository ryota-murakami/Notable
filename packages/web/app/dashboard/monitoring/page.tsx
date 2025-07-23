'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Globe,
  Server,
  Users,
  Zap,
  TrendingUp,
  TrendingDown,
  RefreshCw,
} from 'lucide-react'

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage'
  responseTime: number
  uptime: number
  lastChecked: string
}

interface MetricData {
  timestamp: string
  value: number
  label: string
}

interface AlertData {
  id: string
  severity: 'critical' | 'warning' | 'info'
  title: string
  description: string
  timestamp: string
  status: 'firing' | 'resolved'
  service: string
}

export default function MonitoringDashboard() {
  const [services, setServices] = useState<ServiceStatus[]>([])
  const [alerts, setAlerts] = useState<AlertData[]>([])
  const [_metrics, setMetrics] = useState<Record<string, MetricData[]>>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  // Fetch monitoring data
  const fetchMonitoringData = async () => {
    try {
      setLoading(true)

      // Fetch service status
      const healthResponse = await fetch('/api/health')
      const healthData = await healthResponse.json()

      // Transform health check data to service status
      const serviceStatuses: ServiceStatus[] = [
        {
          name: 'Web Application',
          status:
            healthData.status === 'healthy'
              ? 'operational'
              : healthData.status === 'degraded'
                ? 'degraded'
                : 'outage',
          responseTime: healthData.checks?.api?.responseTime || 0,
          uptime: 99.9,
          lastChecked: healthData.timestamp,
        },
        {
          name: 'Database',
          status:
            healthData.checks?.database?.status === 'healthy'
              ? 'operational'
              : 'degraded',
          responseTime: healthData.checks?.database?.responseTime || 0,
          uptime: 99.8,
          lastChecked: healthData.timestamp,
        },
        {
          name: 'Authentication',
          status: 'operational',
          responseTime: 50,
          uptime: 99.9,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Search Service',
          status: 'operational',
          responseTime: 75,
          uptime: 99.7,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Real-time Sync',
          status: 'operational',
          responseTime: 25,
          uptime: 99.9,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'File Storage',
          status: 'operational',
          responseTime: 100,
          uptime: 99.6,
          lastChecked: new Date().toISOString(),
        },
      ]

      setServices(serviceStatuses)

      // Fetch alerts
      const alertsResponse = await fetch('/api/monitoring/alerts')
      if (alertsResponse.ok) {
        const alertsData = await alertsResponse.json()
        setAlerts(alertsData.alerts || [])
      }

      // Fetch metrics
      const metricsResponse = await fetch('/api/monitoring/metrics')
      if (metricsResponse.ok) {
        const metricsData = await metricsResponse.json()
        setMetrics(metricsData.metrics || {})
      }

      setLastUpdate(new Date())
    } catch (error) {
      console.error('Failed to fetch monitoring data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMonitoringData()

    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchMonitoringData, 30000)

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className='h-5 w-5 text-green-500' />
      case 'degraded':
        return <AlertTriangle className='h-5 w-5 text-yellow-500' />
      case 'outage':
        return <AlertTriangle className='h-5 w-5 text-red-500' />
      default:
        return <Clock className='h-5 w-5 text-gray-500' />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      operational: 'default' as const,
      degraded: 'secondary' as const,
      outage: 'destructive' as const,
    }

    return (
      <Badge
        variant={(variants as Record<string, string>)[status] || 'secondary'}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className='h-4 w-4 text-red-500' />
      case 'warning':
        return <AlertTriangle className='h-4 w-4 text-yellow-500' />
      case 'info':
        return <AlertTriangle className='h-4 w-4 text-blue-500' />
      default:
        return <AlertTriangle className='h-4 w-4 text-gray-500' />
    }
  }

  const activeAlerts = alerts.filter(
    (alert: AlertData) => alert.status === 'firing'
  )
  const overallStatus = services.some(
    (s: ServiceStatus) => s.status === 'outage'
  )
    ? 'outage'
    : services.some((s: ServiceStatus) => s.status === 'degraded')
      ? 'degraded'
      : 'operational'

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold'>Monitoring Dashboard</h1>
          <p className='text-muted-foreground'>
            System health and performance monitoring
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-muted-foreground'>
            Last updated: {lastUpdate.toLocaleTimeString()}
          </span>
          <Button
            variant='outline'
            size='sm'
            onClick={fetchMonitoringData}
            disabled={loading}
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`}
            />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overall Status */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            {getStatusIcon(overallStatus)}
            System Status:{' '}
            {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
          </CardTitle>
          <CardDescription>
            {activeAlerts.length > 0
              ? `${activeAlerts.length} active alert${activeAlerts.length > 1 ? 's' : ''}`
              : 'All systems operational'}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Active Alerts */}
      {activeAlerts.length > 0 && (
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Active Alerts</h2>
          <div className='space-y-4'>
            {activeAlerts.map((alert: AlertData) => (
              <Alert
                key={alert.id}
                variant={
                  alert.severity === 'critical' ? 'destructive' : 'default'
                }
              >
                <div className='flex items-start gap-2'>
                  {getSeverityIcon(alert.severity)}
                  <div className='flex-1'>
                    <AlertTitle className='flex items-center gap-2'>
                      {alert.title}
                      <Badge variant='outline'>{alert.service}</Badge>
                    </AlertTitle>
                    <AlertDescription>
                      {alert.description}
                      <br />
                      <span className='text-xs text-muted-foreground'>
                        {new Date(alert.timestamp).toLocaleString()}
                      </span>
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        </div>
      )}

      <Tabs defaultValue='services' className='w-full'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='services'>Services</TabsTrigger>
          <TabsTrigger value='metrics'>Metrics</TabsTrigger>
          <TabsTrigger value='alerts'>Alerts</TabsTrigger>
          <TabsTrigger value='logs'>Logs</TabsTrigger>
        </TabsList>

        {/* Services Tab */}
        <TabsContent value='services' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.map((service: ServiceStatus) => (
              <Card key={service.name}>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-lg flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                      {service.name === 'Database' && (
                        <Database className='h-5 w-5' />
                      )}
                      {service.name === 'Web Application' && (
                        <Globe className='h-5 w-5' />
                      )}
                      {service.name === 'Authentication' && (
                        <Users className='h-5 w-5' />
                      )}
                      {service.name === 'Search Service' && (
                        <Activity className='h-5 w-5' />
                      )}
                      {service.name === 'Real-time Sync' && (
                        <Zap className='h-5 w-5' />
                      )}
                      {service.name === 'File Storage' && (
                        <Server className='h-5 w-5' />
                      )}
                      {service.name}
                    </span>
                    {getStatusBadge(service.status)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>Response Time:</span>
                      <span className='font-mono'>
                        {service.responseTime}ms
                      </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span>Uptime:</span>
                      <span className='font-mono'>{service.uptime}%</span>
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      Last checked:{' '}
                      {new Date(service.lastChecked).toLocaleTimeString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>125ms</div>
                <p className='text-xs text-muted-foreground'>
                  Average response time
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Users className='h-5 w-5' />
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>1,247</div>
                <p className='text-xs text-muted-foreground'>
                  Currently online
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Activity className='h-5 w-5' />
                  Requests/min
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>2,547</div>
                <p className='text-xs text-muted-foreground'>
                  API requests per minute
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingDown className='h-5 w-5' />
                  Error Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>0.01%</div>
                <p className='text-xs text-muted-foreground'>
                  5xx errors in last hour
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Database className='h-5 w-5' />
                  DB Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>23/100</div>
                <p className='text-xs text-muted-foreground'>
                  Active database connections
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Server className='h-5 w-5' />
                  Memory Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>67%</div>
                <p className='text-xs text-muted-foreground'>
                  Server memory utilization
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value='alerts' className='space-y-4'>
          <div className='space-y-4'>
            {alerts.length === 0 ? (
              <Card>
                <CardContent className='flex items-center justify-center py-8'>
                  <div className='text-center'>
                    <CheckCircle className='h-12 w-12 text-green-500 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold'>No alerts</h3>
                    <p className='text-muted-foreground'>
                      All systems are running smoothly
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              alerts.map((alert: AlertData) => (
                <Card key={alert.id}>
                  <CardHeader>
                    <CardTitle className='flex items-center justify-between'>
                      <span className='flex items-center gap-2'>
                        {getSeverityIcon(alert.severity)}
                        {alert.title}
                      </span>
                      <div className='flex items-center gap-2'>
                        <Badge variant='outline'>{alert.service}</Badge>
                        <Badge
                          variant={
                            alert.status === 'firing'
                              ? 'destructive'
                              : 'default'
                          }
                        >
                          {alert.status}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm mb-2'>{alert.description}</p>
                    <p className='text-xs text-muted-foreground'>
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Logs Tab */}
        <TabsContent value='logs' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Recent Logs</CardTitle>
              <CardDescription>
                Latest application logs and events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='bg-black text-green-400 p-4 rounded-md font-mono text-sm max-h-96 overflow-y-auto'>
                <div className='space-y-1'>
                  <div>
                    [{new Date().toISOString()}] INFO: Application started
                    successfully
                  </div>
                  <div>
                    [{new Date(Date.now() - 60000).toISOString()}] INFO: User
                    authentication successful
                  </div>
                  <div>
                    [{new Date(Date.now() - 120000).toISOString()}] INFO:
                    Database connection established
                  </div>
                  <div>
                    [{new Date(Date.now() - 180000).toISOString()}] WARN: High
                    memory usage detected
                  </div>
                  <div>
                    [{new Date(Date.now() - 240000).toISOString()}] INFO: Cache
                    cleanup completed
                  </div>
                  <div>
                    [{new Date(Date.now() - 300000).toISOString()}] INFO: Backup
                    process started
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
