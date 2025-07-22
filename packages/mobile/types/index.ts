// Core data types for mobile app
export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  user_id: string
  folder_id?: string | null
  is_public?: boolean
  deleted_at?: string | null
  parentId?: string | null
  tags?: string[]
  isFolder?: boolean
  is_folder?: boolean // Support both naming conventions
}

export interface User {
  id: string
  email: string
  name?: string | null
  image?: string | null
  emailVerified?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface Folder {
  id: string
  name: string
  userId: string
  parentId?: string | null
  color?: string | null
  icon?: string | null
  order: number
  parent?: Folder | null
  children?: Folder[]
  notes?: Note[]
  createdAt: Date
  updatedAt: Date
}

// Realtime types
export interface TypingUser {
  id: string
  name: string
  color: string
  isTyping: boolean
  lastTyped: number
}

export interface UserPresence {
  id: string
  name: string
  color: string
  avatar?: string
  joinedAt: number
  lastSeen: number
  isActive: boolean
}

export interface RealtimeUser {
  id: string
  name: string
  color?: string
  avatar?: string
}

export interface RealtimeSyncOptions {
  noteId: string
  user: RealtimeUser
  onNoteUpdate: (note: Note) => Promise<void>
  onUserTyping: (users: TypingUser[]) => void
  onPresenceChange: (users: UserPresence[]) => void
}

export interface RealtimeSyncState {
  isConnected: boolean
  connectionError: string | null
  onlineUsers: UserPresence[]
  typingUsers: TypingUser[]
  startTyping: () => void
  stopTyping: () => void
  broadcastNoteUpdate: (note: Note) => void
}

// Search types
export interface SearchFilter {
  query: string
  tags?: string[]
  folderId?: string | null
  dateFrom?: Date
  dateTo?: Date
  isArchived?: boolean
  isFavorite?: boolean
}

export interface SearchResult {
  note: Note
  highlights: string[]
  score: number
}

export interface SearchResultItem {
  item: Note
  score?: number
}

// Export types
export interface ExportOptions {
  format: 'markdown' | 'pdf' | 'html'
  includeMetadata?: boolean
  includeImages?: boolean
  theme?: 'light' | 'dark'
}

// Create/Update types
export interface NoteCreate {
  title: string
  content: string
  folder_id?: string | null
  is_public?: boolean
  is_folder?: boolean
}

export interface NoteUpdate {
  title?: string
  content?: string
  folder_id?: string | null
  is_public?: boolean
  is_folder?: boolean
}

// Offline storage types
export interface OfflineNote extends Note {
  syncStatus: 'synced' | 'pending' | 'conflict'
  localUpdatedAt: string
}

export interface OfflineStorageState {
  notes: OfflineNote[]
  pendingSyncs: string[]
  conflicts: string[]
  lastSyncAt: string | null
}
