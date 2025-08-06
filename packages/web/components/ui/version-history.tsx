'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Clock,
  Download,
  Edit,
  Eye,
  GitBranch,
  History,
  Minus,
  Plus,
  RotateCcw,
  User,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'

interface VersionChange {
  added: number
  modified: number
  deleted: number
}

interface Version {
  id: string
  noteId: string
  content: string
  createdAt: string
  author: {
    id: string
    email: string
    name?: string
  }
  changes: VersionChange
  size?: number
  diff?: string
}

interface VersionHistoryProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  noteId: string
  noteTitle?: string
  onRestoreVersion?: (version: Version) => void
  onPreviewVersion?: (version: Version) => void
}

export function VersionHistory({
  open,
  onOpenChange,
  noteId,
  noteTitle = 'Untitled',
  onRestoreVersion,
  onPreviewVersion,
}: VersionHistoryProps) {
  const [versions, setVersions] = useState<Version[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null)
  const [showDiff, setShowDiff] = useState(false)

  const fetchVersions = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/notes/${noteId}/versions`)
      const result = await response.json()

      if (result.success) {
        setVersions(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch versions:', error)
      setVersions([])
    } finally {
      setLoading(false)
    }
  }, [noteId])

  useEffect(() => {
    if (open && noteId) {
      fetchVersions()
    }
  }, [open, noteId, fetchVersions])

  const handleRestoreVersion = (version: Version) => {
    if (onRestoreVersion) {
      onRestoreVersion(version)
      onOpenChange(false)
    }
  }

  const handlePreviewVersion = (version: Version) => {
    setSelectedVersion(version)
    if (onPreviewVersion) {
      onPreviewVersion(version)
    }
  }

  const handleExportVersion = (version: Version) => {
    const blob = new Blob([version.content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${noteTitle}-v${version.id}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className='max-w-4xl max-h-[80vh] overflow-hidden'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              <History className='h-5 w-5' />
              Version History
            </DialogTitle>
            <p className='text-sm text-muted-foreground'>
              View and restore previous versions of &quot;{noteTitle}&quot;
            </p>
          </DialogHeader>

          <div className='flex-1 overflow-hidden'>
            {showDiff && selectedVersion ? (
              <VersionDiffView
                version={selectedVersion}
                onBack={() => setShowDiff(false)}
                onRestore={() => handleRestoreVersion(selectedVersion)}
                onExport={() => handleExportVersion(selectedVersion)}
              />
            ) : (
              <VersionListView
                versions={versions}
                loading={loading}
                selectedVersion={selectedVersion}
                onSelectVersion={setSelectedVersion}
                onPreviewVersion={handlePreviewVersion}
                onRestoreVersion={handleRestoreVersion}
                onExportVersion={handleExportVersion}
                onShowDiff={(version) => {
                  setSelectedVersion(version)
                  setShowDiff(true)
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function VersionListView({
  versions,
  loading,
  selectedVersion,
  onSelectVersion,
  onPreviewVersion,
  onRestoreVersion,
  onExportVersion,
  onShowDiff,
}: {
  versions: Version[]
  loading: boolean
  selectedVersion: Version | null
  onSelectVersion: (version: Version | null) => void
  onPreviewVersion: (version: Version) => void
  onRestoreVersion: (version: Version) => void
  onExportVersion: (version: Version) => void
  onShowDiff: (version: Version) => void
}) {
  if (loading) {
    return (
      <div className='space-y-4 p-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='animate-pulse'>
            <div className='flex items-center gap-4 p-4 border rounded-lg'>
              <div className='h-10 w-10 bg-muted rounded-full'></div>
              <div className='flex-1 space-y-2'>
                <div className='h-4 bg-muted rounded w-1/4'></div>
                <div className='h-3 bg-muted rounded w-1/2'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (versions.length === 0) {
    return (
      <div className='text-center py-8'>
        <History className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
        <h3 className='text-lg font-semibold mb-2'>No Version History</h3>
        <p className='text-muted-foreground'>
          This note doesn&apos;t have any saved versions yet.
        </p>
      </div>
    )
  }

  return (
    <div className='flex h-full'>
      <div className='w-1/3 border-r'>
        <ScrollArea className='h-full'>
          <div className='p-4 space-y-3'>
            <div className='flex items-center gap-2 mb-4'>
              <GitBranch className='h-4 w-4' />
              <span className='text-sm font-medium'>
                {versions.length} version{versions.length !== 1 ? 's' : ''}
              </span>
            </div>

            {versions.map((version, index) => (
              <VersionListItem
                key={version.id}
                version={version}
                isLatest={index === 0}
                isSelected={selectedVersion?.id === version.id}
                onClick={() => onSelectVersion(version)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className='flex-1 p-4'>
        {selectedVersion ? (
          <VersionDetailsView
            version={selectedVersion}
            onPreview={() => onPreviewVersion(selectedVersion)}
            onRestore={() => onRestoreVersion(selectedVersion)}
            onExport={() => onExportVersion(selectedVersion)}
            onShowDiff={() => onShowDiff(selectedVersion)}
          />
        ) : (
          <div className='flex items-center justify-center h-full text-muted-foreground'>
            <div className='text-center'>
              <Clock className='h-8 w-8 mx-auto mb-3' />
              <p>Select a version to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function VersionListItem({
  version,
  isLatest,
  isSelected,
  onClick,
}: {
  version: Version
  isLatest: boolean
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <div
      className={cn(
        'p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm',
        isSelected
          ? 'border-primary bg-primary/5'
          : 'hover:border-muted-foreground/20'
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role='button'
    >
      <div className='flex items-center gap-3'>
        <div className='relative'>
          <div
            className={cn(
              'h-3 w-3 rounded-full',
              isLatest ? 'bg-green-500' : 'bg-muted-foreground/30'
            )}
          />
          {isLatest && (
            <div className='absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse' />
          )}
        </div>

        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='text-sm font-medium'>v{version.id}</span>
            {isLatest && (
              <Badge variant='secondary' className='text-xs'>
                Current
              </Badge>
            )}
          </div>

          <div className='flex items-center gap-2 text-xs text-muted-foreground mb-1'>
            <User className='h-3 w-3' />
            <span>{version.author.name || version.author.email}</span>
          </div>

          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
            <Clock className='h-3 w-3' />
            <span>{formatDistanceToNow(new Date(version.createdAt))} ago</span>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-3 mt-2 text-xs'>
        {version.changes.added > 0 && (
          <div className='flex items-center gap-1 text-green-600'>
            <Plus className='h-3 w-3' />
            <span>{version.changes.added}</span>
          </div>
        )}
        {version.changes.modified > 0 && (
          <div className='flex items-center gap-1 text-blue-600'>
            <Edit className='h-3 w-3' />
            <span>{version.changes.modified}</span>
          </div>
        )}
        {version.changes.deleted > 0 && (
          <div className='flex items-center gap-1 text-red-600'>
            <Minus className='h-3 w-3' />
            <span>{version.changes.deleted}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function VersionDetailsView({
  version,
  onPreview,
  onRestore,
  onExport,
  onShowDiff,
}: {
  version: Version
  onPreview: () => void
  onRestore: () => void
  onExport: () => void
  onShowDiff: () => void
}) {
  return (
    <div className='h-full flex flex-col'>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2'>Version {version.id}</h3>

        <div className='space-y-3'>
          <div className='flex items-center gap-2 text-sm'>
            <User className='h-4 w-4 text-muted-foreground' />
            <span>{version.author.name || version.author.email}</span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <Clock className='h-4 w-4 text-muted-foreground' />
            <span>{new Date(version.createdAt).toLocaleString()}</span>
          </div>

          <div className='flex items-center gap-4 text-sm'>
            <div className='flex items-center gap-1'>
              <span className='text-muted-foreground'>Changes:</span>
            </div>
            <div className='flex items-center gap-3'>
              {version.changes.added > 0 && (
                <div className='flex items-center gap-1 text-green-600'>
                  <Plus className='h-3 w-3' />
                  <span>{version.changes.added} added</span>
                </div>
              )}
              {version.changes.modified > 0 && (
                <div className='flex items-center gap-1 text-blue-600'>
                  <Edit className='h-3 w-3' />
                  <span>{version.changes.modified} modified</span>
                </div>
              )}
              {version.changes.deleted > 0 && (
                <div className='flex items-center gap-1 text-red-600'>
                  <Minus className='h-3 w-3' />
                  <span>{version.changes.deleted} deleted</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className='flex-1 py-6'>
        <div className='mb-4'>
          <h4 className='text-sm font-medium mb-2'>Content Preview</h4>
        </div>

        <ScrollArea className='h-64 border rounded-lg p-4 bg-muted/30'>
          <pre className='text-sm whitespace-pre-wrap font-mono'>
            {version.content.slice(0, 1000)}
            {version.content.length > 1000 && '...'}
          </pre>
        </ScrollArea>
      </div>

      <div className='flex gap-2 pt-4 border-t'>
        <Button onClick={onShowDiff} variant='outline' className='flex-1'>
          <GitBranch className='h-4 w-4 mr-2' />
          View Diff
        </Button>
        <Button onClick={onPreview} variant='outline'>
          <Eye className='h-4 w-4 mr-2' />
          Preview
        </Button>
        <Button onClick={onExport} variant='outline'>
          <Download className='h-4 w-4 mr-2' />
          Export
        </Button>
        <Button onClick={onRestore}>
          <RotateCcw className='h-4 w-4 mr-2' />
          Restore
        </Button>
      </div>
    </div>
  )
}

function VersionDiffView({
  version,
  onBack,
  onRestore,
  onExport,
}: {
  version: Version
  onBack: () => void
  onRestore: () => void
  onExport: () => void
}) {
  // This would normally show a detailed diff
  // For now, showing simplified version

  return (
    <div className='h-full flex flex-col'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='sm' onClick={onBack}>
            ← Back
          </Button>
          <h3 className='text-lg font-semibold'>
            Diff for Version {version.id}
          </h3>
        </div>

        <div className='flex gap-2'>
          <Button onClick={onExport} variant='outline' size='sm'>
            <Download className='h-4 w-4 mr-2' />
            Export
          </Button>
          <Button onClick={onRestore} size='sm'>
            <RotateCcw className='h-4 w-4 mr-2' />
            Restore
          </Button>
        </div>
      </div>

      <div className='flex-1 border rounded-lg overflow-hidden'>
        <ScrollArea className='h-full'>
          <div className='p-4 space-y-4'>
            <div className='bg-green-50 border-l-4 border-green-400 p-4 rounded'>
              <div className='flex items-center gap-2 mb-2'>
                <Plus className='h-4 w-4 text-green-600' />
                <span className='text-sm font-medium text-green-800'>
                  {version.changes.added} lines added
                </span>
              </div>
              <pre className='text-sm text-green-700 font-mono'>
                {version.content
                  .split('\n')
                  .slice(0, 5)
                  .map((line, i) => (
                    <div key={i}>+ {line}</div>
                  ))}
              </pre>
            </div>

            {version.changes.modified > 0 && (
              <div className='bg-blue-50 border-l-4 border-blue-400 p-4 rounded'>
                <div className='flex items-center gap-2 mb-2'>
                  <Edit className='h-4 w-4 text-blue-600' />
                  <span className='text-sm font-medium text-blue-800'>
                    {version.changes.modified} lines modified
                  </span>
                </div>
              </div>
            )}

            {version.changes.deleted > 0 && (
              <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
                <div className='flex items-center gap-2 mb-2'>
                  <Minus className='h-4 w-4 text-red-600' />
                  <span className='text-sm font-medium text-red-800'>
                    {version.changes.deleted} lines deleted
                  </span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

// Hook for version history
// Export alias for compatibility
export const VersionHistoryPanel = VersionHistory

export function useVersionHistory(noteId: string) {
  const [versions, setVersions] = useState<Version[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchVersions = useCallback(async () => {
    if (!noteId) return

    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/notes/${noteId}/versions`)
      const result = await response.json()

      if (result.success) {
        setVersions(result.data || [])
      } else {
        throw new Error(result.error || 'Failed to fetch versions')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch versions')
      setVersions([])
    } finally {
      setLoading(false)
    }
  }, [noteId])

  useEffect(() => {
    fetchVersions()
  }, [noteId, fetchVersions])

  return {
    versions,
    loading,
    error,
    refetch: fetchVersions,
  }
}
