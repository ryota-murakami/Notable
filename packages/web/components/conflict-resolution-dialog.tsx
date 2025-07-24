'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  AlertTriangle,
  Calendar,
  Cloud,
  FileText,
  GitMerge,
  Monitor,
} from 'lucide-react'
import {
  type ConflictResolution,
  offlineManager,
  type SyncQueueItem,
} from '@/lib/offline-manager'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'

interface ConflictData {
  local: Record<string, unknown>
  remote: Record<string, unknown>
  base?: Record<string, unknown>
}

export function ConflictResolutionDialog() {
  const [open, setOpen] = useState(false)
  const [conflicts, setConflicts] = useState<SyncQueueItem[]>([])
  const [selectedConflict, setSelectedConflict] = useState<string | null>(null)
  const [resolutionStrategy, setResolutionStrategy] =
    useState<ConflictResolution['strategy']>('local')
  const [resolving, setResolving] = useState(false)

  useEffect(() => {
    // Get initial conflicts
    offlineManager.getSyncQueue().then((queue) => {
      const conflictItems = queue.filter((item) => item.status === 'conflict')
      setConflicts(conflictItems)
      if (conflictItems.length > 0 && !selectedConflict) {
        setSelectedConflict(conflictItems[0].id)
      }
    })

    // Subscribe to conflict updates
    const unsubscribe = offlineManager.onConflictUpdate((conflictItems) => {
      setConflicts(conflictItems)
      if (conflictItems.length === 0) {
        setOpen(false)
      }
    })

    // Listen for open event
    const handleOpen = () => setOpen(true)
    window.addEventListener('open-conflict-resolution', handleOpen)

    return () => {
      unsubscribe()
      window.removeEventListener('open-conflict-resolution', handleOpen)
    }
  }, [selectedConflict])

  const currentConflict = conflicts.find((c) => c.id === selectedConflict)

  const handleResolve = async () => {
    if (!currentConflict) return

    setResolving(true)
    try {
      await offlineManager.resolveConflict(currentConflict.id, {
        strategy: resolutionStrategy,
        // In real implementation, pass merged data for 'merge' strategy
      })

      // Move to next conflict or close
      const remainingConflicts = conflicts.filter(
        (c) => c.id !== currentConflict.id
      )
      if (remainingConflicts.length > 0) {
        setSelectedConflict(remainingConflicts[0].id)
      } else {
        setOpen(false)
      }
    } finally {
      setResolving(false)
    }
  }

  const handleResolveAll = async (strategy: ConflictResolution['strategy']) => {
    setResolving(true)
    try {
      for (const conflict of conflicts) {
        await offlineManager.resolveConflict(conflict.id, { strategy })
      }
      setOpen(false)
    } finally {
      setResolving(false)
    }
  }

  if (!currentConflict) return null

  // Mock conflict data for demo
  const conflictData: ConflictData = {
    local: currentConflict.data,
    remote: currentConflict.conflictData || {
      ...currentConflict.data,
      title: `${currentConflict.data.title} (Remote)`,
      updatedAt: new Date().toISOString(),
    },
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-4xl max-h-[80vh]'>
        <DialogHeader>
          <div className='flex items-center gap-2'>
            <AlertTriangle className='h-5 w-5 text-destructive' />
            <DialogTitle>Resolve Sync Conflicts</DialogTitle>
          </div>
          <DialogDescription>
            {conflicts.length} conflict{conflicts.length !== 1 ? 's' : ''} need
            your attention. Choose how to resolve each conflict.
          </DialogDescription>
        </DialogHeader>

        <div className='grid grid-cols-12 gap-4'>
          {/* Conflict List */}
          <div className='col-span-3 border-r pr-4'>
            <h3 className='font-medium text-sm mb-2'>Conflicts</h3>
            <ScrollArea className='h-[400px]'>
              <div className='space-y-2'>
                {conflicts.map((conflict) => (
                  <button
                    key={conflict.id}
                    onClick={() => setSelectedConflict(conflict.id)}
                    className={cn(
                      'w-full text-left p-2 rounded-lg border transition-colors',
                      selectedConflict === conflict.id
                        ? 'border-primary bg-primary/10'
                        : 'border-transparent hover:bg-muted'
                    )}
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      <FileText className='h-3 w-3' />
                      <span className='text-sm font-medium truncate'>
                        {conflict.data.title || 'Untitled'}
                      </span>
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      {conflict.type} • {conflict.table}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Conflict Details */}
          <div className='col-span-9'>
            <Tabs defaultValue='compare' className='w-full'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='compare'>Compare Changes</TabsTrigger>
                <TabsTrigger value='details'>Details</TabsTrigger>
              </TabsList>

              <TabsContent value='compare' className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  {/* Local Version */}
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                      <Monitor className='h-4 w-4' />
                      <span className='font-medium text-sm'>
                        Your Version (Local)
                      </span>
                    </div>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <h4 className='font-medium mb-2'>
                        {conflictData.local.title || 'Untitled'}
                      </h4>
                      {conflictData.local.content && (
                        <p className='text-sm text-muted-foreground line-clamp-3'>
                          {typeof conflictData.local.content === 'string'
                            ? conflictData.local.content
                            : 'Complex content'}
                        </p>
                      )}
                      <div className='mt-3 flex items-center gap-4 text-xs text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-3 w-3' />
                          {formatDistanceToNow(
                            new Date(conflictData.local.updatedAt),
                            { addSuffix: true }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remote Version */}
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                      <Cloud className='h-4 w-4' />
                      <span className='font-medium text-sm'>
                        Server Version (Remote)
                      </span>
                    </div>
                    <div className='rounded-lg border p-4 bg-muted/50'>
                      <h4 className='font-medium mb-2'>
                        {conflictData.remote.title || 'Untitled'}
                      </h4>
                      {conflictData.remote.content && (
                        <p className='text-sm text-muted-foreground line-clamp-3'>
                          {typeof conflictData.remote.content === 'string'
                            ? conflictData.remote.content
                            : 'Complex content'}
                        </p>
                      )}
                      <div className='mt-3 flex items-center gap-4 text-xs text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-3 w-3' />
                          {formatDistanceToNow(
                            new Date(conflictData.remote.updatedAt),
                            { addSuffix: true }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Resolution Options */}
                <div className='space-y-3'>
                  <h4 className='font-medium text-sm'>Resolution Strategy</h4>
                  <RadioGroup
                    value={resolutionStrategy}
                    onValueChange={(value: string) =>
                      setResolutionStrategy(
                        value as ConflictResolution['strategy']
                      )
                    }
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='local' id='local' />
                      <Label htmlFor='local' className='cursor-pointer'>
                        <div className='flex items-center gap-2'>
                          <Monitor className='h-4 w-4' />
                          <span>Keep my version (Local)</span>
                        </div>
                        <p className='text-xs text-muted-foreground mt-1'>
                          Your local changes will overwrite the server version
                        </p>
                      </Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='remote' id='remote' />
                      <Label htmlFor='remote' className='cursor-pointer'>
                        <div className='flex items-center gap-2'>
                          <Cloud className='h-4 w-4' />
                          <span>Keep server version (Remote)</span>
                        </div>
                        <p className='text-xs text-muted-foreground mt-1'>
                          Discard your local changes and use the server version
                        </p>
                      </Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='merge' id='merge' disabled />
                      <Label htmlFor='merge' className='cursor-pointer'>
                        <div className='flex items-center gap-2'>
                          <GitMerge className='h-4 w-4' />
                          <span>Merge both versions</span>
                        </div>
                        <p className='text-xs text-muted-foreground mt-1'>
                          Combine changes from both versions (coming soon)
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>

              <TabsContent value='details' className='space-y-4'>
                <div className='rounded-lg border p-4 space-y-3'>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <span className='text-muted-foreground'>Type:</span>
                      <Badge variant='outline' className='ml-2'>
                        {currentConflict.type}
                      </Badge>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Table:</span>
                      <Badge variant='outline' className='ml-2'>
                        {currentConflict.table}
                      </Badge>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Created:</span>
                      <span className='ml-2'>
                        {formatDistanceToNow(currentConflict.timestamp, {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Retries:</span>
                      <span className='ml-2'>{currentConflict.retries}</span>
                    </div>
                  </div>
                  {currentConflict.error && (
                    <div className='pt-2 border-t'>
                      <span className='text-sm text-muted-foreground'>
                        Error:
                      </span>
                      <p className='text-sm text-destructive mt-1'>
                        {currentConflict.error}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <DialogFooter className='flex items-center justify-between'>
          <div className='flex gap-2'>
            {conflicts.length > 1 && (
              <>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => handleResolveAll('local')}
                  disabled={resolving}
                >
                  Keep All Local
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => handleResolveAll('remote')}
                  disabled={resolving}
                >
                  Keep All Remote
                </Button>
              </>
            )}
          </div>
          <div className='flex gap-2'>
            <Button variant='outline' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleResolve} disabled={resolving}>
              {resolving ? 'Resolving...' : 'Resolve Conflict'}
              {conflicts.length > 1 && ` (1/${conflicts.length})`}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
