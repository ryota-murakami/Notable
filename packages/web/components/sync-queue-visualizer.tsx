'use client'

import { useEffect, useState } from 'react'
import { offlineManager, type SyncQueueItem } from '@/lib/offline-manager'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertCircle,
  Clock,
  Cloud,
  Database,
  FileText,
  FolderOpen,
  MoreVertical,
  RefreshCw,
  Trash,
  Upload,
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'

interface GroupedItems {
  pending: SyncQueueItem[]
  syncing: SyncQueueItem[]
  failed: SyncQueueItem[]
  conflict: SyncQueueItem[]
}

export function SyncQueueVisualizer() {
  const [queueItems, setQueueItems] = useState<SyncQueueItem[]>([])
  const [selectedStatus, setSelectedStatus] = useState<
    keyof GroupedItems | 'all'
  >('all')
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    // Get initial queue
    offlineManager.getSyncQueue().then(setQueueItems)

    // Subscribe to updates
    const unsubscribe = offlineManager.onSyncQueueUpdate(setQueueItems)

    return unsubscribe
  }, [])

  const groupedItems = queueItems.reduce<GroupedItems>(
    (acc, item) => {
      const status = item.status as keyof GroupedItems
      if (acc[status]) {
        acc[status].push(item)
      }
      return acc
    },
    {
      pending: [],
      syncing: [],
      failed: [],
      conflict: [],
    }
  )

  const filteredItems =
    selectedStatus === 'all' ? queueItems : groupedItems[selectedStatus] || []

  const handleRetry = async (item: SyncQueueItem) => {
    // Reset item status to pending and retry
    await offlineManager.addToSyncQueue({
      type: item.type,
      table: item.table,
      data: item.data,
      status: 'pending',
    })
  }

  const handleClearQueue = async () => {
    if (
      window.confirm(
        'Are you sure you want to clear all offline data? This cannot be undone.'
      )
    ) {
      await offlineManager.clearOfflineData()
    }
  }

  const handleSyncAll = async () => {
    setSyncing(true)
    try {
      await offlineManager.processSyncQueue()
    } finally {
      setSyncing(false)
    }
  }

  const getStatusIcon = (status: SyncQueueItem['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className='h-4 w-4' />
      case 'syncing':
        return <RefreshCw className='h-4 w-4 animate-spin' />
      case 'failed':
        return <AlertCircle className='h-4 w-4' />
      case 'conflict':
        return <AlertCircle className='h-4 w-4' />
      default:
        return <Cloud className='h-4 w-4' />
    }
  }

  const getStatusVariant = (
    status: SyncQueueItem['status']
  ): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'pending':
        return 'secondary'
      case 'syncing':
        return 'default'
      case 'failed':
      case 'conflict':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  const getTypeIcon = (type: SyncQueueItem['type']) => {
    switch (type) {
      case 'create':
        return <Upload className='h-4 w-4' />
      case 'update':
        return <RefreshCw className='h-4 w-4' />
      case 'delete':
        return <Trash className='h-4 w-4' />
      default:
        return <FileText className='h-4 w-4' />
    }
  }

  const getTableIcon = (table: SyncQueueItem['table']) => {
    switch (table) {
      case 'notes':
        return <FileText className='h-4 w-4' />
      case 'folders':
        return <FolderOpen className='h-4 w-4' />
      default:
        return <Database className='h-4 w-4' />
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Sync Queue</CardTitle>
            <CardDescription>
              Monitor and manage offline changes waiting to sync
            </CardDescription>
          </div>
          <div className='flex gap-2'>
            <Button
              size='sm'
              variant='outline'
              onClick={handleSyncAll}
              disabled={syncing || groupedItems.pending.length === 0}
            >
              <RefreshCw
                className={cn('h-4 w-4 mr-1', syncing && 'animate-spin')}
              />
              Sync All
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='sm' variant='ghost'>
                  <MoreVertical className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleClearQueue}
                  className='text-destructive'
                >
                  <Trash className='h-4 w-4 mr-2' />
                  Clear All Data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Status Filter Tabs */}
        <div className='flex gap-2 mb-4'>
          <Button
            size='sm'
            variant={selectedStatus === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('all')}
          >
            All ({queueItems.length})
          </Button>
          <Button
            size='sm'
            variant={selectedStatus === 'pending' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('pending')}
          >
            Pending ({groupedItems.pending.length})
          </Button>
          <Button
            size='sm'
            variant={selectedStatus === 'syncing' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('syncing')}
          >
            Syncing ({groupedItems.syncing.length})
          </Button>
          <Button
            size='sm'
            variant={selectedStatus === 'failed' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('failed')}
          >
            Failed ({groupedItems.failed.length})
          </Button>
          <Button
            size='sm'
            variant={selectedStatus === 'conflict' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('conflict')}
          >
            Conflicts ({groupedItems.conflict.length})
          </Button>
        </div>

        {/* Queue Items Table */}
        {filteredItems.length === 0 ? (
          <div className='text-center py-8 text-muted-foreground'>
            <Cloud className='h-8 w-8 mx-auto mb-2 opacity-50' />
            <p>No items in the sync queue</p>
          </div>
        ) : (
          <ScrollArea className='h-[400px]'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Badge
                        variant={getStatusVariant(item.status)}
                        className='gap-1'
                      >
                        {getStatusIcon(item.status)}
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        {getTypeIcon(item.type)}
                        <span className='capitalize'>{item.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        {getTableIcon(item.table)}
                        <span className='capitalize'>{item.table}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='max-w-[200px]'>
                        <p className='truncate font-medium'>
                          {item.data.title || item.data.name || 'Untitled'}
                        </p>
                        {item.error && (
                          <p className='text-xs text-destructive truncate'>
                            {item.error}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className='text-sm text-muted-foreground'>
                        {formatDistanceToNow(item.timestamp, {
                          addSuffix: true,
                        })}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size='sm' variant='ghost'>
                            <MoreVertical className='h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          {item.status === 'failed' && (
                            <DropdownMenuItem onClick={() => handleRetry(item)}>
                              <RefreshCw className='h-4 w-4 mr-2' />
                              Retry
                            </DropdownMenuItem>
                          )}
                          {item.status === 'conflict' && (
                            <DropdownMenuItem
                              onClick={() => {
                                window.dispatchEvent(
                                  new CustomEvent('open-conflict-resolution')
                                )
                              }}
                            >
                              <AlertCircle className='h-4 w-4 mr-2' />
                              Resolve Conflict
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className='text-destructive'>
                            <Trash className='h-4 w-4 mr-2' />
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        )}

        {/* Sync Progress */}
        {groupedItems.syncing.length > 0 && (
          <div className='mt-4 p-4 rounded-lg bg-muted'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium'>
                Syncing {groupedItems.syncing.length} items...
              </span>
              <span className='text-sm text-muted-foreground'>
                {Math.round(
                  ((groupedItems.syncing.length + groupedItems.failed.length) /
                    queueItems.length) *
                    100
                )}
                %
              </span>
            </div>
            <Progress
              value={
                ((groupedItems.syncing.length + groupedItems.failed.length) /
                  queueItems.length) *
                100
              }
              className='h-2'
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
