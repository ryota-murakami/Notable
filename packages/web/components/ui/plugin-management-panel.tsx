'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Package,
  Settings,
  Trash2,
} from 'lucide-react'
import { notablePluginSystem } from '@/lib/plugins'
import { toast } from '@/hooks/use-toast'

interface PluginInstance {
  id: string
  manifest: {
    name: string
    version: string
    description: string
    author: string
    category?: string
  }
  state: 'active' | 'inactive' | 'error' | 'installing'
}

interface PluginSystemStats {
  totalPlugins: number
  activePlugins: number
  inactivePlugins: number
  pluginsByCategory: Record<string, number>
  systemHealth: 'healthy' | 'warning' | 'error'
}

export function PluginManagementPanel() {
  const [plugins, setPlugins] = useState<PluginInstance[]>([])
  const [stats, setStats] = useState<PluginSystemStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPlugins()
  }, [])

  const loadPlugins = async () => {
    try {
      setLoading(true)

      // Get plugins from simplified plugin system
      const allPlugins = await notablePluginSystem.getPlugins()
      const activePlugins = await notablePluginSystem.getActivePlugins()

      // Transform to our UI format
      const transformedPlugins: PluginInstance[] = allPlugins.map(
        (plugin: any) => ({
          id: plugin.manifest.id,
          manifest: {
            name: plugin.manifest.name,
            version: plugin.manifest.version,
            description: plugin.manifest.description,
            author: plugin.manifest.author,
            category: plugin.manifest.category,
          },
          state: plugin.state,
        })
      )

      // Create simple stats
      const systemStats: PluginSystemStats = {
        totalPlugins: allPlugins.length,
        activePlugins: activePlugins.length,
        inactivePlugins: allPlugins.length - activePlugins.length,
        pluginsByCategory: allPlugins.reduce(
          (acc: Record<string, number>, plugin: any) => {
            const category = plugin.manifest.category || 'other'
            acc[category] = (acc[category] || 0) + 1
            return acc
          },
          {}
        ),
        systemHealth: 'healthy' as const,
      }

      setPlugins(transformedPlugins)
      setStats(systemStats)
    } catch (error) {
      console.error('Failed to load plugins:', error)
      toast({
        title: 'Error loading plugins',
        description: 'Failed to load plugin system data.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleTogglePlugin = async (pluginId: string, isActive: boolean) => {
    try {
      if (isActive) {
        await notablePluginSystem.activatePlugin(pluginId)
        toast({
          title: 'Plugin activated',
          description: 'Plugin has been activated successfully.',
        })
      } else {
        await notablePluginSystem.deactivatePlugin(pluginId)
        toast({
          title: 'Plugin deactivated',
          description: 'Plugin has been deactivated successfully.',
        })
      }

      // Reload plugins to reflect changes
      await loadPlugins()
    } catch (error) {
      console.error('Failed to toggle plugin:', error)
      toast({
        title: 'Plugin toggle failed',
        description: `Failed to ${isActive ? 'activate' : 'deactivate'} plugin.`,
        variant: 'destructive',
      })
    }
  }

  const handleUninstallPlugin = async (pluginId: string) => {
    if (!confirm('Are you sure you want to uninstall this plugin?')) return

    try {
      await notablePluginSystem.uninstallPlugin(pluginId)

      toast({
        title: 'Plugin uninstalled',
        description: 'Plugin has been uninstalled successfully.',
      })

      await loadPlugins()
    } catch (error) {
      console.error('Failed to uninstall plugin:', error)
      toast({
        title: 'Uninstall failed',
        description: 'Failed to uninstall plugin.',
        variant: 'destructive',
      })
    }
  }

  const getStatusIcon = (state: string) => {
    switch (state) {
      case 'active':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'inactive':
        return <Clock className='h-4 w-4 text-gray-500' />
      case 'error':
        return <AlertCircle className='h-4 w-4 text-red-500' />
      case 'installing':
        return <Clock className='h-4 w-4 text-blue-500' />
      default:
        return <AlertCircle className='h-4 w-4 text-gray-500' />
    }
  }

  const getStatusBadge = (state: string) => {
    const variant =
      state === 'active'
        ? 'default'
        : state === 'error'
          ? 'destructive'
          : 'secondary'
    return (
      <Badge variant={variant} className='capitalize'>
        {state}
      </Badge>
    )
  }

  if (loading) {
    return (
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <Package className='h-5 w-5' />
          <h2 className='text-lg font-semibold'>Plugin Management</h2>
        </div>
        <div className='grid gap-4'>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className='animate-pulse bg-muted h-4 w-32 rounded' />
                <div className='animate-pulse bg-muted h-3 w-48 rounded' />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Package className='h-5 w-5' />
          <h2 className='text-lg font-semibold'>Plugin Management</h2>
        </div>
        <Button onClick={loadPlugins} variant='outline' size='sm'>
          Refresh
        </Button>
      </div>

      {/* System Stats */}
      {stats && (
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Settings className='h-4 w-4' />
              System Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>{stats.totalPlugins}</div>
                <div className='text-sm text-muted-foreground'>
                  Total Plugins
                </div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-green-600'>
                  {stats.activePlugins}
                </div>
                <div className='text-sm text-muted-foreground'>Active</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-600'>
                  {stats.inactivePlugins}
                </div>
                <div className='text-sm text-muted-foreground'>Inactive</div>
              </div>
              <div className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  {stats.systemHealth === 'healthy' && (
                    <CheckCircle className='h-4 w-4 text-green-500' />
                  )}
                  {stats.systemHealth === 'warning' && (
                    <AlertCircle className='h-4 w-4 text-yellow-500' />
                  )}
                  {stats.systemHealth === 'error' && (
                    <AlertCircle className='h-4 w-4 text-red-500' />
                  )}
                  <span className='text-sm font-medium capitalize'>
                    {stats.systemHealth}
                  </span>
                </div>
                <div className='text-sm text-muted-foreground'>
                  System Health
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plugin List */}
      <div className='space-y-4'>
        {plugins.length === 0 ? (
          <Card>
            <CardContent className='flex flex-col items-center justify-center py-8'>
              <Package className='h-12 w-12 text-muted-foreground mb-4' />
              <h3 className='text-lg font-medium mb-2'>No plugins installed</h3>
              <p className='text-sm text-muted-foreground text-center'>
                Install plugins to extend Notable's functionality
              </p>
            </CardContent>
          </Card>
        ) : (
          plugins.map((plugin) => (
            <Card key={plugin.id}>
              <CardHeader>
                <div className='flex items-start justify-between'>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                      <CardTitle className='text-base'>
                        {plugin.manifest.name}
                      </CardTitle>
                      {getStatusIcon(plugin.state)}
                      {getStatusBadge(plugin.state)}
                    </div>
                    <CardDescription>
                      {plugin.manifest.description}
                    </CardDescription>
                    <div className='flex items-center gap-4 text-xs text-muted-foreground'>
                      <span>v{plugin.manifest.version}</span>
                      <span>by {plugin.manifest.author}</span>
                      {plugin.manifest.category && (
                        <Badge variant='outline' className='text-xs'>
                          {plugin.manifest.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Switch
                      checked={plugin.state === 'active'}
                      onCheckedChange={(checked) =>
                        handleTogglePlugin(plugin.id, checked)
                      }
                      disabled={
                        plugin.state === 'installing' ||
                        plugin.state === 'error'
                      }
                    />
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => handleUninstallPlugin(plugin.id)}
                      disabled={plugin.state === 'installing'}
                    >
                      <Trash2 className='h-3 w-3' />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
