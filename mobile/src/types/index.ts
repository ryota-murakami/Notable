export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  parentId?: string | null
  tags?: Tag[]
  isFolder?: boolean
  userId?: string
  isPublic?: boolean
}

export interface Tag {
  id: string
  name: string
  color: string
}

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
}

export interface RealtimeUser {
  id: string
  name: string
  color?: string
  avatar?: string
}

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

export type ExportFormat = 'markdown' | 'html' | 'pdf' | 'react'

export interface SearchResult {
  item: Note
  matches?: any[]
  score?: number
}
