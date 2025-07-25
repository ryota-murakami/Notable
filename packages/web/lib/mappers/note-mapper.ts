import type { Database } from '@/types/database'
import type { Note } from '@/types/note'

// Database row type for notes
type DatabaseNote = Database['public']['Tables']['notes']['Row']

/**
 * Maps a database note row to the Note interface
 */
export function mapDatabaseNoteToNote(dbNote: DatabaseNote): Note {
  return {
    id: dbNote.id,
    title: dbNote.title,
    content:
      typeof dbNote.content === 'string'
        ? dbNote.content
        : JSON.stringify(dbNote.content),
    userId: dbNote.user_id,
    createdAt: dbNote.created_at,
    updatedAt: dbNote.updated_at,
    parentId: dbNote.folder_id,
    tags: [], // Tags are fetched separately via joins in useSupabaseNotes hook
    isFolder: false, // Notes are not folders
  }
}

/**
 * Maps an array of database note rows to Note interface array
 */
export function mapDatabaseNotesToNotes(dbNotes: DatabaseNote[]): Note[] {
  return dbNotes.map(mapDatabaseNoteToNote)
}

/**
 * Maps a database note row with joined tags to the Note interface
 * This handles the data structure returned from Supabase joins
 */
export function mapDatabaseNoteWithTagsToNote(
  dbNote: DatabaseNote & {
    note_tags?: Array<{ tags: { id: string; name: string; color: string } }>
  }
): Note {
  return {
    id: dbNote.id,
    title: dbNote.title,
    content:
      typeof dbNote.content === 'string'
        ? dbNote.content
        : JSON.stringify(dbNote.content),
    userId: dbNote.user_id,
    createdAt: dbNote.created_at,
    updatedAt: dbNote.updated_at,
    parentId: dbNote.folder_id,
    tags: dbNote.note_tags?.map((nt) => nt.tags.name).filter(Boolean) || [],
    isFolder: false, // Notes are not folders
    isHidden: dbNote.is_hidden || false,
  }
}

/**
 * Maps a Note interface back to database insert format
 */
export function mapNoteToDatabase(
  note: Partial<Note>,
  userId: string
): Database['public']['Tables']['notes']['Insert'] {
  const insertData: Database['public']['Tables']['notes']['Insert'] = {
    title: note.title || '',
    content: note.content || '',
    user_id: userId,
    folder_id: note.parentId || null,
  }

  if (note.id) {
    insertData.id = note.id
  }

  return insertData
}

/**
 * Maps a Note interface back to database update format
 */
export function mapNoteToDbUpdate(
  note: Partial<Note>
): Database['public']['Tables']['notes']['Update'] {
  const updateData: Database['public']['Tables']['notes']['Update'] = {
    updated_at: new Date().toISOString(),
  }

  if (note.id !== undefined) updateData.id = note.id
  if (note.title !== undefined) updateData.title = note.title
  if (note.content !== undefined) updateData.content = note.content
  if (note.parentId !== undefined) updateData.folder_id = note.parentId

  return updateData
}
