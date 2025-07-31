'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../../design-system/components/button'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../design-system/components/modal'
import { Badge } from '../../components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Switch } from '../../components/ui/switch'
import { Separator } from '../../components/ui/separator'
import { ScrollArea } from '../../components/ui/scroll-area'
import { Alert, AlertDescription } from '../../components/ui/alert'
import {
  PuzzleIcon,
  SearchIcon,
  DownloadIcon,
  SettingsIcon,
  TrashIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  InfoIcon,
  ExternalLinkIcon,
  PowerIcon,
  CodeIcon,
  ShieldIcon,
  DatabaseIcon,
  CommandIcon,
  BrushIcon,
  ZapIcon,
  GitBranchIcon,
  UsersIcon,
  StarIcon,
  RefreshCwIcon,
} from 'lucide-react'
import {
  PluginCategory,
  PluginPermission,
  PluginAPIAccess,
} from '../../lib/plugins'
import {
  usePluginSystem,
  type PluginInfo as SystemPluginInfo,
} from '../../lib/plugins/hooks/use-plugin-system'

interface PluginInfo extends SystemPluginInfo {
  downloadCount?: number
  rating?: number
  lastUpdated?: string
  size?: string
  homepage?: string
  repository?: string
}

interface PluginManagementPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
}

const categoryIcons: Record<PluginCategory, React.ReactNode> = {
  [PluginCategory.EDITOR]: <CodeIcon className='h-4 w-4' />,
  [PluginCategory.UI]: <BrushIcon className='h-4 w-4' />,
  [PluginCategory.PRODUCTIVITY]: <ZapIcon className='h-4 w-4' />,
  [PluginCategory.INTEGRATION]: <GitBranchIcon className='h-4 w-4' />,
  [PluginCategory.EXPORT]: <CommandIcon className='h-4 w-4' />,
  [PluginCategory.SEARCH]: <CommandIcon className='h-4 w-4' />,
  [PluginCategory.THEME]: <BrushIcon className='h-4 w-4' />,
  [PluginCategory.THEMES]: <BrushIcon className='h-4 w-4' />,
  [PluginCategory.DEVELOPMENT]: <CommandIcon className='h-4 w-4' />,
  [PluginCategory.COMMUNITY]: <UsersIcon className='h-4 w-4' />,
  [PluginCategory.OTHER]: <CommandIcon className='h-4 w-4' />,
}

const permissionDescriptions: Record<PluginPermission, string> = {
  [PluginPermission.READ_NOTES]: 'Read your notes and documents',
  [PluginPermission.WRITE_NOTES]: 'Create and modify notes',
  [PluginPermission.DELETE_NOTES]: 'Delete notes and documents',
  [PluginPermission.READ_SETTINGS]: 'Access application settings',
  [PluginPermission.WRITE_SETTINGS]: 'Modify application settings',
  [PluginPermission.NETWORK_ACCESS]: 'Make network requests',
  [PluginPermission.FILE_SYSTEM]: 'Access local file system',
  [PluginPermission.CLIPBOARD]: 'Access clipboard',
  [PluginPermission.NOTIFICATIONS]: 'Show notifications',
  [PluginPermission.COMMANDS]: 'Register custom commands',
  [PluginPermission.UI_MODIFY]: 'Modify user interface',
}

const getStateIcon = (state: string, enabled: boolean) => {
  if (!enabled) return <XCircleIcon className='h-4 w-4 text-muted-foreground' />

  switch (state) {
    case 'active':
      return <CheckCircleIcon className='h-4 w-4 text-green-500' />
    case 'error':
      return <XCircleIcon className='h-4 w-4 text-red-500' />
    case 'loading':
      return <RefreshCwIcon className='h-4 w-4 text-blue-500 animate-spin' />
    default:
      return <InfoIcon className='h-4 w-4 text-muted-foreground' />
  }
}

export function PluginManagementPanel({
  open,
  onOpenChange,
  className,
}: PluginManagementPanelProps) {
  const [activeTab, setActiveTab] = React.useState('installed')
  const [searchTerm, setSearchTerm] = React.useState('')

  // Use the plugin system hook
  const {
    isInitialized,
    stats: pluginStats,
    installedPlugins,
    loading,
    error,
    enablePlugin,
    disablePlugin,
    installPlugin,
    uninstallPlugin,
    refreshPlugins,
  } = usePluginSystem()

  // Mock available plugins for marketplace
  const availablePlugins: PluginInfo[] = React.useMemo(
    () => [
      {
        id: 'markdown-table-editor',
        name: 'Markdown Table Editor',
        version: '1.2.0',
        description:
          'Advanced table editing capabilities for markdown with CSV import/export',
        author: { name: 'Notable Community', email: 'community@notable.app' },
        category: PluginCategory.EDITOR,
        permissions: [
          PluginPermission.READ_NOTES,
          PluginPermission.WRITE_NOTES,
          PluginPermission.COMMANDS,
        ],
        apis: [PluginAPIAccess.EDITOR, PluginAPIAccess.COMMANDS],
        enabled: false,
        installed: false,
        state: 'inactive',
        downloadCount: 15420,
        rating: 4.8,
        lastUpdated: '2024-01-15',
        size: '45.2 KB',
      },
      {
        id: 'ai-writing-assistant',
        name: 'AI Writing Assistant',
        version: '2.0.1',
        description:
          'Intelligent writing suggestions and grammar checking powered by AI',
        author: { name: 'AI Tools Inc', url: 'https://aitools.com' },
        category: PluginCategory.PRODUCTIVITY,
        permissions: [
          PluginPermission.READ_NOTES,
          PluginPermission.WRITE_NOTES,
          PluginPermission.NETWORK,
        ],
        apis: [PluginAPIAccess.EDITOR, PluginAPIAccess.NOTES],
        enabled: false,
        installed: false,
        state: 'inactive',
        downloadCount: 8935,
        rating: 4.6,
        lastUpdated: '2024-01-20',
        size: '120.8 KB',
      },
      {
        id: 'dark-theme-pro',
        name: 'Dark Theme Pro',
        version: '3.1.0',
        description:
          'Professional dark theme with customizable accent colors and animations',
        author: { name: 'Theme Studio' },
        category: PluginCategory.THEMES,
        permissions: [
          PluginPermission.READ_SETTINGS,
          PluginPermission.WRITE_SETTINGS,
        ],
        apis: [PluginAPIAccess.UI],
        enabled: false,
        installed: false,
        state: 'inactive',
        downloadCount: 23567,
        rating: 4.9,
        lastUpdated: '2024-01-18',
        size: '78.1 KB',
      },
    ],
    []
  )

  // Refresh plugins when panel opens
  React.useEffect(() => {
    if (open && isInitialized) {
      refreshPlugins()
    }
  }, [open, isInitialized, refreshPlugins])

  const handleTogglePlugin = async (plugin: PluginInfo) => {
    try {
      if (plugin.enabled) {
        await disablePlugin(plugin.id)
      } else {
        await enablePlugin(plugin.id)
      }
    } catch (error) {
      console.error('Failed to toggle plugin:', error)
    }
  }

  const handleInstallPlugin = async (plugin: PluginInfo) => {
    try {
      // In a real implementation, this would download and install the plugin
      console.log('Installing plugin:', plugin.id)

      // Mock installation - create a basic manifest and code
      const mockManifest = {
        id: plugin.id,
        name: plugin.name,
        version: plugin.version,
        description: plugin.description,
        author: plugin.author,
        category: plugin.category,
        permissions: plugin.permissions,
        apis: plugin.apis,
        notableVersion: '^1.0.0',
        main: 'index.js',
        activationEvents: [{ event: 'onStartup' }],
        contributes: {},
      }

      const mockCode = `
        // Mock plugin code for ${plugin.name}
        export function activate(context) {
          console.log('${plugin.name} activated');
        }
        export function deactivate() {
          console.log('${plugin.name} deactivated');
        }
      `

      await installPlugin(mockManifest, mockCode)
    } catch (error) {
      console.error('Failed to install plugin:', error)
    }
  }

  const handleUninstallPlugin = async (plugin: PluginInfo) => {
    try {
      await uninstallPlugin(plugin.id)
    } catch (error) {
      console.error('Failed to uninstall plugin:', error)
    }
  }

  const filteredInstalledPlugins = installedPlugins.filter(
    (plugin) =>
      plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredAvailablePlugins = availablePlugins.filter(
    (plugin) =>
      plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStateIcon = (state: string, enabled: boolean) => {
    if (!enabled)
      return <XCircleIcon className='h-4 w-4 text-muted-foreground' />

    switch (state) {
      case 'active':
        return <CheckCircleIcon className='h-4 w-4 text-green-500' />
      case 'error':
        return <XCircleIcon className='h-4 w-4 text-red-500' />
      case 'loading':
        return <RefreshCwIcon className='h-4 w-4 text-blue-500 animate-spin' />
      default:
        return <InfoIcon className='h-4 w-4 text-muted-foreground' />
    }
  }

  return (
    <Modal open={open} onClose={() => onOpenChange(false)} size='xl'>
      <ModalHeader>
        <ModalTitle className='flex items-center gap-2'>
          <PuzzleIcon className='h-5 w-5' />
          Plugin Management
        </ModalTitle>
      </ModalHeader>

      <ModalBody className={cn('p-0', className)}>
        <div className='flex h-[70vh] min-h-[500px] max-h-[900px]'>
          {/* Main Content */}
          <div className='flex-1 flex flex-col'>
            {/* Stats Header */}
            {pluginStats && (
              <div className='p-4 border-b border-border bg-muted/50'>
                <div className='grid grid-cols-4 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-primary'>
                      {pluginStats.totalPlugins}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Total Plugins
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-green-600'>
                      {pluginStats.activePlugins}
                    </div>
                    <div className='text-sm text-muted-foreground'>Active</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-orange-600'>
                      {pluginStats.inactivePlugins}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Inactive
                    </div>
                  </div>
                  <div>
                    <div
                      className={cn(
                        'text-2xl font-bold',
                        pluginStats.systemHealth === 'healthy' &&
                          'text-green-600',
                        pluginStats.systemHealth === 'warning' &&
                          'text-orange-600',
                        pluginStats.systemHealth === 'error' && 'text-red-600'
                      )}
                    >
                      {pluginStats.systemHealth === 'healthy' && '✓'}
                      {pluginStats.systemHealth === 'warning' && '⚠'}
                      {pluginStats.systemHealth === 'error' && '✗'}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      System Health
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Search */}
            <div className='p-4 border-b border-border'>
              <div className='relative'>
                <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                <Input
                  placeholder='Search plugins...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='pl-10'
                />
              </div>
            </div>

            {/* Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className='flex-1 flex flex-col'
            >
              <div className='px-4 py-2 border-b border-border'>
                <TabsList className='grid w-full grid-cols-3'>
                  <TabsTrigger value='installed'>
                    Installed ({filteredInstalledPlugins.length})
                  </TabsTrigger>
                  <TabsTrigger value='marketplace'>
                    Marketplace ({filteredAvailablePlugins.length})
                  </TabsTrigger>
                  <TabsTrigger value='settings'>Settings</TabsTrigger>
                </TabsList>
              </div>

              <div className='flex-1 overflow-hidden'>
                {/* Installed Plugins */}
                <TabsContent value='installed' className='h-full m-0'>
                  <ScrollArea className='h-full'>
                    <div className='p-4 space-y-4'>
                      {filteredInstalledPlugins.length === 0 ? (
                        <div className='text-center py-12'>
                          <PuzzleIcon className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                          <h3 className='text-lg font-semibold mb-2'>
                            No plugins installed
                          </h3>
                          <p className='text-muted-foreground mb-4'>
                            Browse the marketplace to discover and install
                            plugins
                          </p>
                          <Button onClick={() => setActiveTab('marketplace')}>
                            Browse Marketplace
                          </Button>
                        </div>
                      ) : (
                        filteredInstalledPlugins.map((plugin) => (
                          <PluginCard
                            key={plugin.id}
                            plugin={plugin}
                            onToggle={handleTogglePlugin}
                            onUninstall={handleUninstallPlugin}
                            showInstallButton={false}
                          />
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Marketplace */}
                <TabsContent value='marketplace' className='h-full m-0'>
                  <ScrollArea className='h-full'>
                    <div className='p-4 space-y-4'>
                      {filteredAvailablePlugins.length === 0 ? (
                        <div className='text-center py-12'>
                          <SearchIcon className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                          <h3 className='text-lg font-semibold mb-2'>
                            No plugins found
                          </h3>
                          <p className='text-muted-foreground'>
                            Try adjusting your search terms
                          </p>
                        </div>
                      ) : (
                        filteredAvailablePlugins.map((plugin) => (
                          <PluginCard
                            key={plugin.id}
                            plugin={plugin}
                            onInstall={handleInstallPlugin}
                            showInstallButton={true}
                          />
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Settings */}
                <TabsContent value='settings' className='h-full m-0'>
                  <ScrollArea className='h-full'>
                    <div className='p-4 space-y-6'>
                      <PluginSystemSettings />
                    </div>
                  </ScrollArea>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className='flex items-center justify-between w-full'>
          <div className='text-sm text-muted-foreground'>
            Plugin System v1.0.0 • {installedPlugins.length} plugins installed
          </div>
          <Button variant='secondary' onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  )
}

interface PluginCardProps {
  plugin: PluginInfo
  onToggle?: (plugin: PluginInfo) => void
  onInstall?: (plugin: PluginInfo) => void
  onUninstall?: (plugin: PluginInfo) => void
  showInstallButton?: boolean
}

function PluginCard({
  plugin,
  onToggle,
  onInstall,
  onUninstall,
  showInstallButton = false,
}: PluginCardProps) {
  const [showPermissions, setShowPermissions] = React.useState(false)

  return (
    <Card className='relative'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start gap-3'>
            <div className='flex-shrink-0'>
              {categoryIcons[plugin.category as PluginCategory] || (
                <CommandIcon className='h-4 w-4' />
              )}
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2 mb-1'>
                <CardTitle className='text-base truncate'>
                  {plugin.name}
                </CardTitle>
                <Badge variant='secondary' className='text-xs'>
                  v{plugin.version}
                </Badge>
                {plugin.installed && getStateIcon(plugin.state, plugin.enabled)}
              </div>
              <CardDescription className='text-sm line-clamp-2'>
                {plugin.description}
              </CardDescription>
              <div className='flex items-center gap-4 mt-2 text-xs text-muted-foreground'>
                <span>by {plugin.author.name}</span>
                {plugin.lastUpdated && (
                  <span>
                    Updated {new Date(plugin.lastUpdated).toLocaleDateString()}
                  </span>
                )}
                {plugin.size && <span>{plugin.size}</span>}
                {plugin.downloadCount && (
                  <span>{plugin.downloadCount.toLocaleString()} downloads</span>
                )}
                {plugin.rating && (
                  <div className='flex items-center gap-1'>
                    <StarIcon className='h-3 w-3 fill-current text-yellow-500' />
                    <span>{plugin.rating}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            {plugin.installed && onToggle && (
              <div className='flex items-center gap-2'>
                <Label htmlFor={`toggle-${plugin.id}`} className='text-xs'>
                  {plugin.enabled ? 'Enabled' : 'Disabled'}
                </Label>
                <Switch
                  id={`toggle-${plugin.id}`}
                  checked={plugin.enabled}
                  onCheckedChange={() => onToggle(plugin)}
                  disabled={plugin.state === 'loading'}
                />
              </div>
            )}

            {showInstallButton && onInstall && (
              <Button
                size='sm'
                onClick={() => onInstall(plugin)}
                icon={<DownloadIcon className='h-4 w-4' />}
              >
                Install
              </Button>
            )}

            {plugin.installed && onUninstall && (
              <Button
                variant='ghost'
                size='sm'
                onClick={() => onUninstall(plugin)}
                icon={<TrashIcon className='h-4 w-4' />}
                className='text-destructive hover:text-destructive'
              />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className='pt-0'>
        {plugin.error && (
          <Alert className='mb-3'>
            <AlertTriangleIcon className='h-4 w-4' />
            <AlertDescription className='text-sm'>
              Error: {plugin.error}
            </AlertDescription>
          </Alert>
        )}

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Badge variant='outline' className='text-xs'>
              {plugin.category}
            </Badge>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setShowPermissions(!showPermissions)}
              className='text-xs'
            >
              <ShieldIcon className='h-3 w-3 mr-1' />
              {plugin.permissions.length} permissions
            </Button>
            {plugin.homepage && (
              <Button
                variant='ghost'
                size='sm'
                onClick={() => window.open(plugin.homepage, '_blank')}
                className='text-xs'
              >
                <ExternalLinkIcon className='h-3 w-3 mr-1' />
                Homepage
              </Button>
            )}
          </div>
        </div>

        {showPermissions && (
          <div className='mt-3 pt-3 border-t border-border'>
            <h4 className='text-sm font-medium mb-2'>Required permissions:</h4>
            <div className='space-y-1'>
              {plugin.permissions.map((permission) => (
                <div
                  key={permission}
                  className='flex items-center gap-2 text-xs'
                >
                  <ShieldIcon className='h-3 w-3 text-muted-foreground' />
                  <span className='font-medium'>{permission}:</span>
                  <span className='text-muted-foreground'>
                    {permissionDescriptions[permission as PluginPermission] ||
                      permission}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function PluginSystemSettings() {
  const [autoUpdate, setAutoUpdate] = React.useState(true)
  const [allowBetaPlugins, setAllowBetaPlugins] = React.useState(false)
  const [enableTelemetry, setEnableTelemetry] = React.useState(true)
  const [maxMemoryLimit, setMaxMemoryLimit] = React.useState(100)

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Plugin System Settings</h3>

        <div className='space-y-4'>
          <div className='flex items-center justify-between py-2'>
            <div>
              <Label className='font-medium'>Auto-update plugins</Label>
              <p className='text-sm text-muted-foreground'>
                Automatically update plugins when new versions are available
              </p>
            </div>
            <Switch checked={autoUpdate} onCheckedChange={setAutoUpdate} />
          </div>

          <Separator />

          <div className='flex items-center justify-between py-2'>
            <div>
              <Label className='font-medium'>Allow beta plugins</Label>
              <p className='text-sm text-muted-foreground'>
                Show and allow installation of beta/preview plugins
              </p>
            </div>
            <Switch
              checked={allowBetaPlugins}
              onCheckedChange={setAllowBetaPlugins}
            />
          </div>

          <Separator />

          <div className='flex items-center justify-between py-2'>
            <div>
              <Label className='font-medium'>Anonymous telemetry</Label>
              <p className='text-sm text-muted-foreground'>
                Help improve plugins by sending anonymous usage data
              </p>
            </div>
            <Switch
              checked={enableTelemetry}
              onCheckedChange={setEnableTelemetry}
            />
          </div>

          <Separator />

          <div className='py-2'>
            <Label className='font-medium mb-3 block'>
              Memory limit per plugin
            </Label>
            <div className='flex items-center gap-4'>
              <Input
                type='number'
                value={maxMemoryLimit}
                onChange={(e) => setMaxMemoryLimit(Number(e.target.value))}
                className='w-24'
                min={10}
                max={1000}
              />
              <span className='text-sm text-muted-foreground'>MB</span>
            </div>
            <p className='text-xs text-muted-foreground mt-1'>
              Maximum memory usage allowed per plugin (10-1000 MB)
            </p>
          </div>

          <Separator />

          <div className='pt-4'>
            <Button variant='secondary' className='w-full'>
              <DatabaseIcon className='h-4 w-4 mr-2' />
              Clear Plugin Data
            </Button>
            <p className='text-xs text-muted-foreground mt-2 text-center'>
              This will remove all plugin data and settings (plugins will remain
              installed)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
