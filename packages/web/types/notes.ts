import type { Database } from './database'

export type Note = Database['public']['Tables']['notes']['Row'] & {
  is_favorite?: boolean
  is_pinned?: boolean
  is_archived?: boolean
  tags?: Array<{
    id: string
    name: string
    color?: string
  }>
}

export type NoteInsert = Database['public']['Tables']['notes']['Insert']
export type NoteUpdate = Database['public']['Tables']['notes']['Update']

export interface NoteOrganization {
  favorites: string[] // note IDs
  pinned: string[] // note IDs
  archived: string[] // note IDs
}

export interface NoteFilter {
  showFavorites?: boolean
  showArchived?: boolean
  showPinned?: boolean
  searchQuery?: string
  tags?: string[]
}
