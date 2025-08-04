'use client'

import React, { useState, useCallback, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow, format } from 'date-fns'
import {
  Clock,
  Star,
  GitBranch,
  RotateCcw,
  Eye,
  Trash2,
  FileText,
  User,
  Calendar,
  ChevronRight,
  Milestone,
} from 'lucide-react'
import { VersionHistory } from '@/utils/version-history'
import type {
  VersionHistoryResponse,
  NoteVersion,
  VersionComparisonResult,
} from '@/types/version'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

interface VersionHistoryProps {
  noteId: string
  currentVersion?: number
  className?: string
}

interface VersionListItemProps {
  version: VersionHistoryResponse
  isSelected: boolean
  isCurrent: boolean
  onSelect: (version: VersionHistoryResponse) => void
  onRestore: (version: VersionHistoryResponse) => void
  onMarkMilestone: (version: VersionHistoryResponse) => void
  onRemoveMilestone: (version: VersionHistoryResponse) => void
}

interface VersionComparisonProps {
  noteId: string
  version1: number
  version2: number
}

interface MilestoneDialogProps {
  version: VersionHistoryResponse
  onSave: (name: string, message: string) => void
  onCancel: () => void
}

const VersionListItem: React.FC<VersionListItemProps> = ({
  version,
  isSelected,
  isCurrent,
  onSelect,
  onRestore,
  onMarkMilestone,
  onRemoveMilestone,
}) => {
  const [showMilestoneDialog, setShowMilestoneDialog] = useState(false)

  const handleMilestoneAction = useCallback(() => {
    if (version.isMilestone) {
      onRemoveMilestone(version)
    } else {
      setShowMilestoneDialog(true)
    }
  }, [version, onRemoveMilestone])

  const handleMilestoneSave = useCallback(
    (name: string, message: string) => {
      onMarkMilestone({
        ...version,
        versionName: name,
        versionMessage: message,
      })
      setShowMilestoneDialog(false)
    },
    [version, onMarkMilestone]
  )

  return (
    <>
      <Card
        className={cn(
          'cursor-pointer transition-all hover:shadow-md',
          isSelected && 'ring-2 ring-primary',
          isCurrent && 'border-green-500 bg-green-50 dark:bg-green-950'
        )}
        onClick={() => onSelect(version)}
        data-testid={`version-item-${version.versionNumber}`}
      >
        <CardHeader className='pb-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Badge variant={isCurrent ? 'default' : 'secondary'}>
                v{version.versionNumber}
              </Badge>
              {version.isMilestone && (
                <Badge variant='outline' className='text-yellow-600'>
                  <Star className='h-3 w-3 mr-1' />
                  {version.versionName || 'Milestone'}
                </Badge>
              )}
              {isCurrent && (
                <Badge variant='default' className='bg-green-500'>
                  Current
                </Badge>
              )}
            </div>
            <div className='flex items-center gap-1'>
              <Button
                variant='ghost'
                size='sm'
                onClick={(e) => {
                  e.stopPropagation()
                  handleMilestoneAction()
                }}
                data-testid={`milestone-button-${version.versionNumber}`}
              >
                <Star
                  className={cn(
                    'h-4 w-4',
                    version.isMilestone && 'fill-yellow-400 text-yellow-400'
                  )}
                />
              </Button>
              {!isCurrent && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={(e) => {
                    e.stopPropagation()
                    onRestore(version)
                  }}
                  data-testid={`restore-button-${version.versionNumber}`}
                >
                  <RotateCcw className='h-4 w-4' />
                </Button>
              )}
            </div>
          </div>
          <CardTitle className='text-sm font-medium truncate'>
            {version.title || 'Untitled'}
          </CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='flex items-center justify-between text-xs text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Calendar className='h-3 w-3' />
              {formatDistanceToNow(new Date(version.createdAt), {
                addSuffix: true,
              })}
            </div>
            {version.wordCount && (
              <div className='flex items-center gap-1'>
                <FileText className='h-3 w-3' />
                {version.wordCount} words
              </div>
            )}
          </div>
          {version.versionMessage && (
            <p className='text-xs text-muted-foreground mt-2 line-clamp-2'>
              {version.versionMessage}
            </p>
          )}
        </CardContent>
      </Card>

      {showMilestoneDialog && (
        <MilestoneDialog
          version={version}
          onSave={handleMilestoneSave}
          onCancel={() => setShowMilestoneDialog(false)}
        />
      )}
    </>
  )
}

const MilestoneDialog: React.FC<MilestoneDialogProps> = ({
  version,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(version.versionName || '')
  const [message, setMessage] = useState(version.versionMessage || '')

  const handleSave = () => {
    onSave(name, message)
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Mark as Milestone</DialogTitle>
          <DialogDescription>
            Add a name and description to mark version {version.versionNumber}{' '}
            as a milestone.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          <div>
            <Label htmlFor='milestone-name'>Name</Label>
            <Input
              id='milestone-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='e.g., First Draft, Review Ready'
            />
          </div>
          <div>
            <Label htmlFor='milestone-message'>Description</Label>
            <Textarea
              id='milestone-message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Optional description of this milestone...'
              rows={3}
            />
          </div>
          <div className='flex justify-end gap-2'>
            <Button variant='outline' onClick={onCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Milestone</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const VersionComparison: React.FC<VersionComparisonProps> = ({
  noteId,
  version1,
  version2,
}) => {
  const { data: comparison, isLoading } = useQuery({
    queryKey: ['version-comparison', noteId, version1, version2],
    queryFn: () => VersionHistory.compareVersions(noteId, version1, version2),
    enabled: !!noteId && !!version1 && !!version2,
  })

  if (isLoading) {
    return <div className='p-4 text-center'>Loading comparison...</div>
  }

  if (!comparison) {
    return (
      <div className='p-4 text-center text-muted-foreground'>
        No comparison data available
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm'>
              Version {comparison.version1Data.versionNumber}
            </CardTitle>
            <CardDescription>
              {format(new Date(comparison.version1Data.createdAt), 'PPpp')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className='font-medium mb-2'>
              {comparison.version1Data.title}
            </h4>
            <ScrollArea className='h-48 border rounded p-2'>
              <pre className='text-xs whitespace-pre-wrap'>
                {JSON.stringify(comparison.version1Data.content, null, 2)}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-sm'>
              Version {comparison.version2Data.versionNumber}
            </CardTitle>
            <CardDescription>
              {format(new Date(comparison.version2Data.createdAt), 'PPpp')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className='font-medium mb-2'>
              {comparison.version2Data.title}
            </h4>
            <ScrollArea className='h-48 border rounded p-2'>
              <pre className='text-xs whitespace-pre-wrap'>
                {JSON.stringify(comparison.version2Data.content, null, 2)}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const VersionHistoryPanel: React.FC<VersionHistoryProps> = ({
  noteId,
  currentVersion,
  className,
}) => {
  const [selectedVersion, setSelectedVersion] =
    useState<VersionHistoryResponse | null>(null)
  const [compareVersion, setCompareVersion] =
    useState<VersionHistoryResponse | null>(null)
  const [activeTab, setActiveTab] = useState<
    'history' | 'compare' | 'milestones'
  >('history')
  const queryClient = useQueryClient()

  // Fetch version history
  const { data: versions = [], isLoading } = useQuery({
    queryKey: ['version-history', noteId],
    queryFn: () => VersionHistory.getHistory(noteId),
    enabled: !!noteId,
  })

  // Fetch milestones
  const { data: milestones = [] } = useQuery({
    queryKey: ['version-milestones', noteId],
    queryFn: () => VersionHistory.getMilestones(noteId),
    enabled: !!noteId,
  })

  // Restore version mutation
  const restoreMutation = useMutation({
    mutationFn: (version: VersionHistoryResponse) =>
      VersionHistory.restoreVersion({
        noteId,
        versionNumber: version.versionNumber,
        createBackup: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['version-history', noteId] })
      toast({
        title: 'Version Restored',
        description: 'The note has been restored to the selected version.',
      })
    },
  })

  // Mark milestone mutation
  const markMilestoneMutation = useMutation({
    mutationFn: ({
      version,
      name,
      message,
    }: {
      version: VersionHistoryResponse
      name: string
      message: string
    }) =>
      VersionHistory.markAsMilestone(
        noteId,
        version.versionNumber,
        name,
        message
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['version-history', noteId] })
      queryClient.invalidateQueries({
        queryKey: ['version-milestones', noteId],
      })
    },
  })

  // Remove milestone mutation
  const removeMilestoneMutation = useMutation({
    mutationFn: (version: VersionHistoryResponse) =>
      VersionHistory.removeMilestone(noteId, version.versionNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['version-history', noteId] })
      queryClient.invalidateQueries({
        queryKey: ['version-milestones', noteId],
      })
    },
  })

  const handleVersionSelect = useCallback(
    (version: VersionHistoryResponse) => {
      if (activeTab === 'compare') {
        if (!selectedVersion) {
          setSelectedVersion(version)
        } else if (
          !compareVersion &&
          version.versionNumber !== selectedVersion.versionNumber
        ) {
          setCompareVersion(version)
        } else {
          // Reset selection
          setSelectedVersion(version)
          setCompareVersion(null)
        }
      } else {
        setSelectedVersion(version)
      }
    },
    [activeTab, selectedVersion, compareVersion]
  )

  const handleRestore = useCallback(
    (version: VersionHistoryResponse) => {
      restoreMutation.mutate(version)
    },
    [restoreMutation]
  )

  const handleMarkMilestone = useCallback(
    (versionWithNames: VersionHistoryResponse) => {
      markMilestoneMutation.mutate({
        version: versionWithNames,
        name: versionWithNames.versionName || '',
        message: versionWithNames.versionMessage || '',
      })
    },
    [markMilestoneMutation]
  )

  const handleRemoveMilestone = useCallback(
    (version: VersionHistoryResponse) => {
      removeMilestoneMutation.mutate(version)
    },
    [removeMilestoneMutation]
  )

  const resetComparison = useCallback(() => {
    setSelectedVersion(null)
    setCompareVersion(null)
  }, [])

  if (isLoading) {
    return (
      <div className={cn('p-4', className)}>
        <div className='flex items-center justify-center h-32'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn('space-y-4', className)}
      data-testid='version-history-panel'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Clock className='h-5 w-5' />
          <h3 className='text-lg font-semibold'>Version History</h3>
        </div>
        <Badge variant='outline'>
          {versions.length} version{versions.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as any)}
      >
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='history'>History</TabsTrigger>
          <TabsTrigger value='compare'>Compare</TabsTrigger>
          <TabsTrigger value='milestones'>Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value='history' className='space-y-3'>
          <ScrollArea className='h-96'>
            <div className='space-y-3'>
              {versions.map((version) => (
                <VersionListItem
                  key={version.versionId}
                  version={version}
                  isSelected={
                    selectedVersion?.versionNumber === version.versionNumber
                  }
                  isCurrent={currentVersion === version.versionNumber}
                  onSelect={handleVersionSelect}
                  onRestore={handleRestore}
                  onMarkMilestone={handleMarkMilestone}
                  onRemoveMilestone={handleRemoveMilestone}
                />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value='compare' className='space-y-3'>
          <div className='text-sm text-muted-foreground mb-4'>
            Select two versions to compare them side by side.
            {selectedVersion && !compareVersion && (
              <div className='mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded'>
                Selected version {selectedVersion.versionNumber}. Select another
                version to compare.
              </div>
            )}
            {selectedVersion && compareVersion && (
              <div className='mt-2 p-2 bg-green-50 dark:bg-green-950 rounded flex items-center justify-between'>
                <span>
                  Comparing versions {selectedVersion.versionNumber} and{' '}
                  {compareVersion.versionNumber}
                </span>
                <Button variant='outline' size='sm' onClick={resetComparison}>
                  Reset
                </Button>
              </div>
            )}
          </div>

          {selectedVersion && compareVersion ? (
            <VersionComparison
              noteId={noteId}
              version1={selectedVersion.versionNumber}
              version2={compareVersion.versionNumber}
            />
          ) : (
            <ScrollArea className='h-96'>
              <div className='space-y-3'>
                {versions.map((version) => (
                  <VersionListItem
                    key={version.versionId}
                    version={version}
                    isSelected={
                      selectedVersion?.versionNumber ===
                        version.versionNumber ||
                      compareVersion?.versionNumber === version.versionNumber
                    }
                    isCurrent={currentVersion === version.versionNumber}
                    onSelect={handleVersionSelect}
                    onRestore={handleRestore}
                    onMarkMilestone={handleMarkMilestone}
                    onRemoveMilestone={handleRemoveMilestone}
                  />
                ))}
              </div>
            </ScrollArea>
          )}
        </TabsContent>

        <TabsContent value='milestones' className='space-y-3'>
          <div className='text-sm text-muted-foreground mb-4'>
            Important versions marked as milestones for easy access.
          </div>
          <ScrollArea className='h-96'>
            <div className='space-y-3'>
              {milestones.length === 0 ? (
                <div className='text-center text-muted-foreground py-8'>
                  <Milestone className='h-12 w-12 mx-auto mb-2 opacity-50' />
                  <p>No milestones yet</p>
                  <p className='text-xs'>
                    Mark important versions as milestones from the History tab
                  </p>
                </div>
              ) : (
                milestones.map((version) => (
                  <VersionListItem
                    key={version.versionId}
                    version={version}
                    isSelected={
                      selectedVersion?.versionNumber === version.versionNumber
                    }
                    isCurrent={currentVersion === version.versionNumber}
                    onSelect={handleVersionSelect}
                    onRestore={handleRestore}
                    onMarkMilestone={handleMarkMilestone}
                    onRemoveMilestone={handleRemoveMilestone}
                  />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default VersionHistoryPanel
