// Re-export types from shared types
export * from '../../../types'
// Don't re-export realtime types to avoid conflicts

// Mobile-specific type extensions and additions
export type NoteCreate = {
  title: string
  content?: any
  contentText?: string
  folderId?: string | null
  tags?: string[]
  isFavorite?: boolean
}

export type NoteUpdate = {
  title?: string
  content?: any
  contentText?: string
  folderId?: string | null
  isArchived?: boolean
  isDeleted?: boolean
  isFavorite?: boolean
  tags?: string[]
}

// Component prop types
export interface NoteCardProps {
  note: import('../../../types').Note
  onPress?: () => void
  onDelete?: () => void
  onFavorite?: () => void
  showActions?: boolean
}

export interface EmptyStateProps {
  title: string
  description: string
  icon?: string
  action?: {
    label: string
    onPress: () => void
  }
}

export interface SearchResultItem {
  item: import('../../../types').Note
  score: number
}

// Hook option types
export interface UseOfflineNotesOptions {
  user?:
    | {
        id: string
        name: string
        email: string
        avatar?: string
      }
    | undefined
  activeNoteId?: string
}
