// Re-export types from the root types directory
import type { Note as BaseNote } from '../../../types/note'

// Extend Note type for mobile specific fields with snake_case properties for Supabase compatibility
export interface Note
  extends Omit<BaseNote, 'userId' | 'folderId' | 'createdAt' | 'updatedAt'> {
  // Map camelCase to snake_case for Supabase
  user_id: string
  folder_id?: string | null
  is_public?: boolean
  deleted_at?: string | null
  created_at?: string
  updated_at?: string
  // From BaseNote but as string for JSON serialization
  createdAt: string
  updatedAt: string
  // Add missing properties from the simple Note type
  parentId?: string | null
  isFolder?: boolean
}
export type {
  User,
  Folder,
  Tag,
  NotePermission,
  ApiResponse,
  PaginatedResponse,
  SearchFilter,
  SearchResult,
  ExportOptions,
  SyncOperation,
  SocketEvents,
  UserPresence,
  CursorPosition,
  LoginForm,
  RegisterForm,
  CreateNoteForm,
  CreateFolderForm,
  UserSettings,
} from '../../../types/note'

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
