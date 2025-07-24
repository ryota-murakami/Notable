'use client'

import { useEffect, useState } from 'react'
import { offlineManager, type OfflineStatus } from '@/lib/offline-manager'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import {
  AlertTriangle,
  Check,
  Clock,
  Cloud,
  CloudOff,
  RefreshCw,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'

export function OfflineStatus() {
  const [status, setStatus] = useState<OfflineStatus>({
    isOnline: true,
    lastSync: null,
    pendingChanges: 0,
    conflicts: 0,
  })
  const [syncing, setSyncing] = useState(false)
  const [syncProgress, setSyncProgress] = useState(0)

  useEffect(() => {
    // Initial status
    offlineManager.getOfflineStatus().then(setStatus)

    // Subscribe to updates
    const unsubscribeOnline = offlineManager.onOnlineStatusChange(
      (isOnline) => {
        setStatus((prev) => ({ ...prev, isOnline }))
      }
    )

    const unsubscribeQueue = offlineManager.onSyncQueueUpdate(async () => {
      const newStatus = await offlineManager.getOfflineStatus()
      setStatus(newStatus)
    })

    return () => {
      unsubscribeOnline()
      unsubscribeQueue()
    }
  }, [])

  const handleSync = async () => {
    setSyncing(true)
    setSyncProgress(0)

    // Simulate progress (in real implementation, get progress from offlineManager)
    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      await offlineManager.processSyncQueue()
    } finally {
      setSyncing(false)
      setSyncProgress(0)
      clearInterval(interval)
    }
  }

  const getStatusIcon = () => {
    if (!status.isOnline) {
      return <CloudOff className='h-4 w-4' />
    }
    if (syncing) {
      return <RefreshCw className='h-4 w-4 animate-spin' />
    }
    if (status.conflicts > 0) {
      return <AlertTriangle className='h-4 w-4' />
    }
    if (status.pendingChanges > 0) {
      return <Clock className='h-4 w-4' />
    }
    return <Cloud className='h-4 w-4' />
  }

  const getStatusVariant = () => {
    if (!status.isOnline) return 'destructive'
    if (status.conflicts > 0) return 'destructive'
    if (status.pendingChanges > 0) return 'secondary'
    return 'default'
  }

  const getStatusText = () => {
    if (!status.isOnline) return 'Offline'
    if (syncing) return 'Syncing...'
    if (status.conflicts > 0) return `${status.conflicts} conflicts`
    if (status.pendingChanges > 0) return `${status.pendingChanges} pending`
    return 'Synced'
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className={cn('gap-2', status.conflicts > 0 && 'text-destructive')}
        >
          {getStatusIcon()}
          <span className='text-xs'>{getStatusText()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80' align='end'>
        <div className='space-y-4'>
          {/* Status Header */}
          <div className='flex items-center justify-between'>
            <h4 className='font-semibold'>Sync Status</h4>
            <Badge variant={getStatusVariant()}>
              {status.isOnline ? 'Online' : 'Offline'}
            </Badge>
          </div>

          {/* Last Sync Time */}
          {status.lastSync && (
            <div className='text-sm text-muted-foreground'>
              Last synced{' '}
              {formatDistanceToNow(status.lastSync, { addSuffix: true })}
            </div>
          )}

          {/* Sync Progress */}
          {syncing && (
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-sm'>
                <span>Syncing changes...</span>
                <span>{syncProgress}%</span>
              </div>
              <Progress value={syncProgress} className='h-2' />
            </div>
          )}

          {/* Pending Changes */}
          {status.pendingChanges > 0 && !syncing && (
            <div className='rounded-lg border p-3'>
              <div className='flex items-center gap-2 text-sm'>
                <Clock className='h-4 w-4 text-muted-foreground' />
                <span>
                  {status.pendingChanges} change
                  {status.pendingChanges !== 1 ? 's' : ''} waiting to sync
                </span>
              </div>
              {status.isOnline && (
                <Button
                  size='sm'
                  variant='outline'
                  className='mt-2 w-full'
                  onClick={handleSync}
                >
                  <RefreshCw className='h-3 w-3 mr-1' />
                  Sync Now
                </Button>
              )}
            </div>
          )}

          {/* Conflicts */}
          {status.conflicts > 0 && (
            <div className='rounded-lg border border-destructive/50 p-3'>
              <div className='flex items-center gap-2 text-sm text-destructive'>
                <AlertTriangle className='h-4 w-4' />
                <span>
                  {status.conflicts} conflict{status.conflicts !== 1 ? 's' : ''}{' '}
                  need resolution
                </span>
              </div>
              <Button
                size='sm'
                variant='destructive'
                className='mt-2 w-full'
                onClick={() => {
                  // Open conflict resolution dialog
                  window.dispatchEvent(
                    new CustomEvent('open-conflict-resolution')
                  )
                }}
              >
                Resolve Conflicts
              </Button>
            </div>
          )}

          {/* All Synced */}
          {status.isOnline &&
            status.pendingChanges === 0 &&
            status.conflicts === 0 &&
            !syncing && (
              <div className='flex items-center gap-2 text-sm text-green-600 dark:text-green-400'>
                <Check className='h-4 w-4' />
                <span>All changes synced</span>
              </div>
            )}

          {/* Offline Mode Info */}
          {!status.isOnline && (
            <div className='rounded-lg bg-muted p-3 text-sm'>
              <p className='font-medium mb-1'>Working Offline</p>
              <p className='text-muted-foreground'>
                Your changes will be saved locally and synced when you&apos;re
                back online.
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
