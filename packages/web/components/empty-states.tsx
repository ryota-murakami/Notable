'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  FileText,
  Search,
  FolderOpen,
  Tag,
  Clock,
  Trash2,
  RefreshCw,
} from 'lucide-react'

interface EmptyStateProps {
  className?: string
  title: string
  description: string
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
    variant?: 'default' | 'outline' | 'secondary'
  }
  secondaryAction?: {
    label: string
    onClick: () => void
    variant?: 'default' | 'outline' | 'secondary'
  }
}

export function EmptyState({
  className,
  title,
  description,
  icon,
  action,
  secondaryAction,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 space-y-4',
        className
      )}
    >
      {icon && (
        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-muted'>
          {icon}
        </div>
      )}
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-muted-foreground max-w-md'>{description}</p>
      </div>
      {(action || secondaryAction) && (
        <div className='flex flex-col sm:flex-row gap-2'>
          {action && (
            <Button
              variant={action.variant || 'default'}
              onClick={action.onClick}
              className='flex items-center gap-2'
            >
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant={secondaryAction.variant || 'outline'}
              onClick={secondaryAction.onClick}
              className='flex items-center gap-2'
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

// Pre-configured empty states for common scenarios
export function NoNotesEmptyState({
  onCreateNote,
  onImportNotes,
  className,
}: {
  onCreateNote: () => void
  onImportNotes?: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='No notes yet'
      description='Create your first note to get started. You can organize your thoughts, ideas, and knowledge all in one place.'
      icon={<FileText className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Create your first note',
        onClick: onCreateNote,
        variant: 'default',
      }}
      {...(onImportNotes && {
        secondaryAction: {
          label: 'Import notes',
          onClick: onImportNotes,
          variant: 'outline' as const,
        },
      })}
    />
  )
}

export function NoSearchResultsEmptyState({
  query,
  onClearSearch,
  onCreateNote,
  className,
}: {
  query: string
  onClearSearch: () => void
  onCreateNote?: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='No results found'
      description={`No notes found matching "${query}". Try adjusting your search terms or create a new note.`}
      icon={<Search className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Clear search',
        onClick: onClearSearch,
        variant: 'outline',
      }}
      {...(onCreateNote && {
        secondaryAction: {
          label: 'Create note',
          onClick: onCreateNote,
          variant: 'default' as const,
        },
      })}
    />
  )
}

export function NoFolderNotesEmptyState({
  folderName,
  onCreateNote,
  className,
}: {
  folderName: string
  onCreateNote: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title={`No notes in "${folderName}"`}
      description='This folder is empty. Create your first note in this folder to get started.'
      icon={<FolderOpen className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Create note in folder',
        onClick: onCreateNote,
        variant: 'default',
      }}
    />
  )
}

export function NoTagsEmptyState({
  onCreateNote,
  className,
}: {
  onCreateNote: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='No tags yet'
      description='Create notes with tags to organize your content. Tags help you find related notes quickly.'
      icon={<Tag className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Create your first note',
        onClick: onCreateNote,
        variant: 'default',
      }}
    />
  )
}

export function NoRecentNotesEmptyState({
  onCreateNote,
  onBrowseAllNotes,
  className,
}: {
  onCreateNote: () => void
  onBrowseAllNotes: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='No recent notes'
      description="You haven't edited any notes recently. Create a new note or browse your existing notes."
      icon={<Clock className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Create note',
        onClick: onCreateNote,
        variant: 'default',
      }}
      secondaryAction={{
        label: 'Browse all notes',
        onClick: onBrowseAllNotes,
        variant: 'outline',
      }}
    />
  )
}

export function EmptyTrashEmptyState({
  onBrowseNotes,
  className,
}: {
  onBrowseNotes: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='Trash is empty'
      description="Great! You don't have any deleted notes in your trash. Deleted notes will appear here."
      icon={<Trash2 className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Browse notes',
        onClick: onBrowseNotes,
        variant: 'outline',
      }}
    />
  )
}

export function ErrorEmptyState({
  title = 'Something went wrong',
  description = 'We encountered an error while loading your content. Please try again.',
  onRetry,
  onRefresh,
  className,
}: {
  title?: string
  description?: string
  onRetry?: () => void
  onRefresh?: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title={title}
      description={description}
      icon={<RefreshCw className='h-8 w-8 text-muted-foreground' />}
      {...(onRetry && {
        action: {
          label: 'Try again',
          onClick: onRetry,
          variant: 'default' as const,
        },
      })}
      {...(onRefresh && {
        secondaryAction: {
          label: 'Refresh page',
          onClick: onRefresh,
          variant: 'outline' as const,
        },
      })}
    />
  )
}

export function SyncErrorEmptyState({
  onRetrySync,
  onViewOffline,
  className,
}: {
  onRetrySync: () => void
  onViewOffline: () => void
  className?: string
}) {
  return (
    <EmptyState
      {...(className && { className })}
      title='Sync failed'
      description='Unable to sync your notes. Check your internet connection and try again, or continue working offline.'
      icon={<RefreshCw className='h-8 w-8 text-muted-foreground' />}
      action={{
        label: 'Retry sync',
        onClick: onRetrySync,
        variant: 'default',
      }}
      secondaryAction={{
        label: 'Continue offline',
        onClick: onViewOffline,
        variant: 'outline',
      }}
    />
  )
}
