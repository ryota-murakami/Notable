export interface Note {
  id: string
  title: string
  content: string
  user_id: string
  folder_id: string | null
  is_public: boolean
  is_folder?: boolean
  createdAt: string
  updatedAt: string
  deleted_at: string | null
}

export interface NoteCreate {
  title: string
  content: string
  user_id?: string
  folder_id?: string | null
  is_public?: boolean
  is_folder?: boolean
}

export interface NoteUpdate {
  title?: string
  content?: string
  folder_id?: string | null
  is_public?: boolean
}

export interface Folder {
  id: string
  name: string
  user_id: string
  parent_id: string | null
  createdAt: string
  updatedAt: string
}

export interface Tag {
  id: string
  name: string
  color: string
  user_id: string
  createdAt: string
}

export interface NoteTag {
  id: string
  note_id: string
  tag_id: string
  createdAt: string
}

export interface SearchResult {
  notes: Note[]
  folders: Folder[]
  total: number
}

export interface ExportOptions {
  format: 'markdown' | 'html' | 'pdf' | 'txt' | 'json'
  includeMetadata?: boolean
  template?: string
}

export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// Additional types for mobile package
export interface SearchResultItem {
  item: Note
  score: number
}

export interface UserPresence {
  id: string
  userId: string
  presence_ref?: string
  [key: string]: any
}

export interface TypingUser {
  userId: string
  noteId: string
  timestamp: number
}

export interface RealtimeUser {
  id: string
  name: string
  avatar: string
}

export interface RealtimeSyncOptions {
  noteId: string
  user: RealtimeUser
  onNoteUpdate: (updatedNote: Note) => Promise<void>
  onUserTyping: (users: TypingUser[]) => void
  onPresenceChange: (users: UserPresence[]) => void
}
