'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LoadingSpinner } from '@/components/loading-states'
import { useToast } from '@/hooks/use-toast'
import { VersionHistory } from '@/utils/version-history'
import type {
  VersionHistoryResponse,
  VersionComparisonResult,
} from '@/types/version'
import {
  Clock,
  GitBranch,
  MoreVertical,
  RotateCcw,
  Star,
  StarOff,
  Download,
} from 'lucide-react'

interface VersionHistoryDialogProps {
  isOpen: boolean
  onClose: () => void
  noteId: string
  currentTitle: string
  onRestore?: () => void
}

export function VersionHistoryDialog({
  isOpen,
  onClose,
  noteId,
  currentTitle,
  onRestore,
}: VersionHistoryDialogProps) {
  const [versions, setVersions] = useState<VersionHistoryResponse[]>([])
  const [milestones, setMilestones] = useState<VersionHistoryResponse[]>([])
  const [selectedVersion, setSelectedVersion] =
    useState<VersionHistoryResponse | null>(null)
  const [compareVersion, setCompareVersion] =
    useState<VersionHistoryResponse | null>(null)
  const [comparison, setComparison] = useState<VersionComparisonResult | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isRestoring, setIsRestoring] = useState(false)
  const [showRestoreDialog, setShowRestoreDialog] = useState(false)
  const [showMilestoneDialog, setShowMilestoneDialog] = useState(false)
  const [milestoneName, setMilestoneName] = useState('')
  const [milestoneMessage, setMilestoneMessage] = useState('')
  const [activeTab, setActiveTab] = useState<
    'timeline' | 'milestones' | 'compare'
  >('timeline')
  const { toast } = useToast()

  // Load version history
  const loadVersions = useCallback(async () => {
    if (!noteId) return

    setIsLoading(true)
    try {
      const [allVersions, milestoneVersions] = await Promise.all([
        VersionHistory.getHistory(noteId),
        VersionHistory.getMilestones(noteId),
      ])

      setVersions(allVersions)
      setMilestones(milestoneVersions)

      // Auto-select the latest version
      if (allVersions.length > 0 && !selectedVersion) {
        setSelectedVersion(allVersions[0])
      }
    } catch (error) {
      console.error('Failed to load version history:', error)
      toast({
        title: 'Error',
        description: 'Failed to load version history',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [noteId, selectedVersion, toast])

  useEffect(() => {
    if (isOpen) {
      loadVersions()
    }
  }, [isOpen, loadVersions])

  // Handle version restoration
  const handleRestore = async () => {
    if (!selectedVersion) return

    setIsRestoring(true)
    try {
      const success = await VersionHistory.restoreVersion({
        noteId,
        versionNumber: selectedVersion.versionNumber,
      })

      if (success) {
        setShowRestoreDialog(false)
        onRestore?.()
        onClose()
      }
    } finally {
      setIsRestoring(false)
    }
  }

  // Handle milestone creation
  const handleCreateMilestone = async () => {
    if (!selectedVersion) return

    const success = await VersionHistory.markAsMilestone(
      noteId,
      selectedVersion.versionNumber,
      milestoneName,
      milestoneMessage
    )

    if (success) {
      setShowMilestoneDialog(false)
      setMilestoneName('')
      setMilestoneMessage('')
      loadVersions()
    }
  }

  // Handle milestone removal
  const handleRemoveMilestone = async (version: VersionHistoryResponse) => {
    const success = await VersionHistory.removeMilestone(
      noteId,
      version.versionNumber
    )
    if (success) {
      loadVersions()
    }
  }

  // Handle version comparison
  const handleCompare = async () => {
    if (!selectedVersion || !compareVersion) return

    setIsLoading(true)
    try {
      const result = await VersionHistory.compareVersions(
        noteId,
        selectedVersion.versionNumber,
        compareVersion.versionNumber
      )
      setComparison(result)
      setActiveTab('compare')
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to compare versions',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Export version history
  const handleExport = async () => {
    try {
      const exportData = await VersionHistory.exportHistory(noteId)
      const blob = new Blob([exportData], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${currentTitle}-version-history-${new Date().toISOString().split('T')[0]}.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      toast({
        title: 'Export Failed',
        description: 'Failed to export version history',
        variant: 'destructive',
      })
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const renderVersionCard = (
    version: VersionHistoryResponse,
    isSelected: boolean
  ) => (
    <Card
      key={version.versionId}
      className={`p-4 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-primary' : 'hover:shadow-md'
      }`}
      onClick={() => setSelectedVersion(version)}
    >
      <div className='flex items-start justify-between'>
        <div className='flex-1'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='font-semibold'>
              Version {version.versionNumber}
            </span>
            {version.isMilestone && (
              <Badge variant='default' className='gap-1'>
                <Star className='h-3 w-3' />
                Milestone
              </Badge>
            )}
          </div>
          {version.versionName && (
            <p className='text-sm font-medium text-primary mb-1'>
              {version.versionName}
            </p>
          )}
          <p className='text-sm text-muted-foreground line-clamp-1'>
            {version.title}
          </p>
          {version.versionMessage && (
            <p className='text-xs text-muted-foreground mt-1 italic line-clamp-2'>
              {version.versionMessage}
            </p>
          )}
          <div className='flex items-center gap-4 mt-2 text-xs text-muted-foreground'>
            <span className='flex items-center gap-1'>
              <Clock className='h-3 w-3' />
              {formatDate(version.createdAt)}
            </span>
            {version.createdByName && <span>by {version.createdByName}</span>}
          </div>
          {(version.wordCount || version.characterCount) && (
            <div className='flex items-center gap-4 mt-1 text-xs text-muted-foreground'>
              {version.wordCount && <span>{version.wordCount} words</span>}
              {version.characterCount && (
                <span>{version.characterCount} characters</span>
              )}
            </div>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <MoreVertical className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setShowRestoreDialog(true)}>
              <RotateCcw className='h-4 w-4 mr-2' />
              Restore this version
            </DropdownMenuItem>
            {!version.isMilestone ? (
              <DropdownMenuItem
                onClick={() => {
                  setShowMilestoneDialog(true)
                }}
              >
                <Star className='h-4 w-4 mr-2' />
                Mark as milestone
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={() => handleRemoveMilestone(version)}>
                <StarOff className='h-4 w-4 mr-2' />
                Remove milestone
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={() => {
                setCompareVersion(version)
                setActiveTab('compare')
              }}
            >
              <GitBranch className='h-4 w-4 mr-2' />
              Compare with another
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='max-w-4xl max-h-[80vh] flex flex-col'>
          <DialogHeader>
            <DialogTitle className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Clock className='h-5 w-5' />
                Version History
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={handleExport}
                    >
                      <Download className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Export version history</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTitle>
            <DialogDescription>
              View and restore previous versions of "{currentTitle}"
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as 'timeline' | 'milestones' | 'compare')
            }
            className='flex-1 flex flex-col'
          >
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='timeline' className='flex items-center gap-2'>
                <Clock className='h-4 w-4' />
                Timeline
              </TabsTrigger>
              <TabsTrigger
                value='milestones'
                className='flex items-center gap-2'
              >
                <Star className='h-4 w-4' />
                Milestones
              </TabsTrigger>
              <TabsTrigger value='compare' className='flex items-center gap-2'>
                <GitBranch className='h-4 w-4' />
                Compare
              </TabsTrigger>
            </TabsList>

            <ScrollArea className='flex-1 mt-4'>
              <TabsContent value='timeline' className='mt-0'>
                {isLoading ? (
                  <div className='flex items-center justify-center py-8'>
                    <LoadingSpinner />
                  </div>
                ) : versions.length > 0 ? (
                  <div className='space-y-3'>
                    {versions.map((version) =>
                      renderVersionCard(
                        version,
                        selectedVersion?.versionId === version.versionId
                      )
                    )}
                  </div>
                ) : (
                  <div className='text-center py-8 text-muted-foreground'>
                    <Clock className='h-12 w-12 mx-auto mb-4 opacity-50' />
                    <p>No version history available yet</p>
                    <p className='text-sm mt-2'>
                      Versions will appear here as you make changes to your note
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value='milestones' className='mt-0'>
                {milestones.length > 0 ? (
                  <div className='space-y-3'>
                    {milestones.map((version) =>
                      renderVersionCard(
                        version,
                        selectedVersion?.versionId === version.versionId
                      )
                    )}
                  </div>
                ) : (
                  <div className='text-center py-8 text-muted-foreground'>
                    <Star className='h-12 w-12 mx-auto mb-4 opacity-50' />
                    <p>No milestone versions yet</p>
                    <p className='text-sm mt-2'>
                      Mark important versions as milestones to find them easily
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value='compare' className='mt-0'>
                {!comparison ? (
                  <div className='space-y-4'>
                    <p className='text-sm text-muted-foreground'>
                      Select two versions to compare their differences
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='text-sm font-medium mb-2 block'>
                          First Version
                        </label>
                        <ScrollArea className='h-[200px] border rounded-md p-2'>
                          {versions.map((version) => (
                            <div
                              key={version.versionId}
                              className={`p-2 cursor-pointer rounded hover:bg-accent ${
                                selectedVersion?.versionId === version.versionId
                                  ? 'bg-accent'
                                  : ''
                              }`}
                              onClick={() => setSelectedVersion(version)}
                            >
                              <p className='font-medium'>
                                Version {version.versionNumber}
                              </p>
                              <p className='text-xs text-muted-foreground'>
                                {formatDate(version.createdAt)}
                              </p>
                            </div>
                          ))}
                        </ScrollArea>
                      </div>
                      <div>
                        <label className='text-sm font-medium mb-2 block'>
                          Second Version
                        </label>
                        <ScrollArea className='h-[200px] border rounded-md p-2'>
                          {versions.map((version) => (
                            <div
                              key={version.versionId}
                              className={`p-2 cursor-pointer rounded hover:bg-accent ${
                                compareVersion?.versionId === version.versionId
                                  ? 'bg-accent'
                                  : ''
                              }`}
                              onClick={() => setCompareVersion(version)}
                            >
                              <p className='font-medium'>
                                Version {version.versionNumber}
                              </p>
                              <p className='text-xs text-muted-foreground'>
                                {formatDate(version.createdAt)}
                              </p>
                            </div>
                          ))}
                        </ScrollArea>
                      </div>
                    </div>
                    <Button
                      onClick={handleCompare}
                      disabled={
                        !selectedVersion || !compareVersion || isLoading
                      }
                      className='w-full'
                    >
                      Compare Selected Versions
                    </Button>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <h4 className='font-medium'>Comparison Results</h4>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => {
                          setComparison(null)
                          setCompareVersion(null)
                        }}
                      >
                        New Comparison
                      </Button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <Card className='p-4'>
                        <h5 className='font-medium mb-2'>
                          Version {comparison.version1Data.versionNumber}
                        </h5>
                        <p className='text-sm text-muted-foreground mb-2'>
                          {formatDate(comparison.version1Data.createdAt)}
                        </p>
                        <div className='space-y-2'>
                          <div>
                            <p className='text-xs font-medium text-muted-foreground'>
                              Title
                            </p>
                            <p className='text-sm'>
                              {comparison.version1Data.title}
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card className='p-4'>
                        <h5 className='font-medium mb-2'>
                          Version {comparison.version2Data.versionNumber}
                        </h5>
                        <p className='text-sm text-muted-foreground mb-2'>
                          {formatDate(comparison.version2Data.createdAt)}
                        </p>
                        <div className='space-y-2'>
                          <div>
                            <p className='text-xs font-medium text-muted-foreground'>
                              Title
                            </p>
                            <p className='text-sm'>
                              {comparison.version2Data.title}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className='text-center text-sm text-muted-foreground'>
                      <p>Full content diff visualization coming soon</p>
                    </div>
                  </div>
                )}
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Restore Confirmation Dialog */}
      <AlertDialog open={showRestoreDialog} onOpenChange={setShowRestoreDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Restore Version?</AlertDialogTitle>
            <AlertDialogDescription>
              This will restore your note to version{' '}
              {selectedVersion?.versionNumber}. Your current version will be
              saved in the history before restoration. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isRestoring}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleRestore} disabled={isRestoring}>
              {isRestoring ? <LoadingSpinner className='h-4 w-4' /> : 'Restore'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Create Milestone Dialog */}
      <Dialog open={showMilestoneDialog} onOpenChange={setShowMilestoneDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Milestone</DialogTitle>
            <DialogDescription>
              Mark version {selectedVersion?.versionNumber} as a milestone for
              easy reference
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4'>
            <div>
              <label htmlFor='milestone-name' className='text-sm font-medium'>
                Milestone Name (optional)
              </label>
              <Input
                id='milestone-name'
                value={milestoneName}
                onChange={(e) => setMilestoneName(e.target.value)}
                placeholder='e.g., First Draft, Final Version'
                className='mt-1'
              />
            </div>
            <div>
              <label
                htmlFor='milestone-message'
                className='text-sm font-medium'
              >
                Description (optional)
              </label>
              <Textarea
                id='milestone-message'
                value={milestoneMessage}
                onChange={(e) => setMilestoneMessage(e.target.value)}
                placeholder='Describe what makes this version important...'
                className='mt-1'
                rows={3}
              />
            </div>
            <div className='flex justify-end gap-2'>
              <Button
                variant='outline'
                onClick={() => setShowMilestoneDialog(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateMilestone}>Create Milestone</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
