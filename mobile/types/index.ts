export interface Note {
  id: string
  title: string
  content: string
  user_id: string
  folder_id: string | null
  is_public: boolean
  createdAt: string
  updatedAt: string
  deleted_at: string | null
}

export interface NoteCreate {
  title: string
  content: string
  user_id: string
  folder_id?: string | null
  is_public?: boolean
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
