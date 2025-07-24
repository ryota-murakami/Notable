// Re-export types from the root types directory
import type { Note as BaseNote } from '../../../types/note'

// Extend Note type for mobile specific fields with snake_case properties for Supabase compatibility
export interface Note extends BaseNote {
  // Map camelCase to snake_case for Supabase
  user_id: string
  folder_id?: string | null
  is_public?: boolean
  deleted_at?: string | null
  // Override base properties to also have camelCase versions
  createdAt: string
  updatedAt: string
  // Add missing properties from the simple Note type
  parentId?: string | null
  isFolder?: boolean
  isArchived?: boolean
  isDeleted?: boolean
  isFavorite?: boolean
  viewCount?: number
  wordCount?: number
  tags?: string[] | { name: string }[]
}

// Define types that were being imported but don't exist
export interface User {
  id: string
  email: string
  name?: string
}

export interface Folder {
  id: string
  name: string
  parentId?: string | null
}

export interface Tag {
  id: string
  name: string
}

export interface NotePermission {
  noteId: string
  userId: string
  permission: 'read' | 'write' | 'admin'
}

export interface ApiResponse<T> {
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

export interface SearchFilter {
  query?: string
  tags?: string[]
  folderId?: string
  type?: 'all' | 'notes' | 'folders'
}

export interface SearchResult {
  id: string
  title: string
  content: string
  highlight?: string
}

export interface ExportOptions {
  format: 'markdown' | 'json' | 'html'
  includeMetadata?: boolean
}

export interface SyncOperation {
  type: 'create' | 'update' | 'delete'
  noteId: string
  timestamp: string
}

export interface SocketEvents {
  connect: () => void
  disconnect: () => void
  noteUpdate: (note: Note) => void
}

export interface UserPresence {
  userId: string
  noteId: string
  cursor?: CursorPosition
}

export interface CursorPosition {
  line: number
  column: number
}

export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  email: string
  password: string
  name?: string
}

export interface CreateNoteForm {
  title: string
  content: string
  folderId?: string
  tags?: string[]
}

export interface CreateFolderForm {
  name: string
  parentId?: string
}

export interface UserSettings {
  theme?: 'light' | 'dark' | 'system'
  fontSize?: number
  autoSave?: boolean
}

// Additional types for mobile
export interface NoteCreate {
  title: string
  content: string
  folder_id?: string | null
  is_folder?: boolean
  is_public?: boolean
}

export interface NoteUpdate {
  title?: string
  content?: string
  folder_id?: string | null
  is_public?: boolean
}
