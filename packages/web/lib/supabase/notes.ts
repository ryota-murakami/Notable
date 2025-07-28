import { createClient } from '@/utils/supabase/client'

export interface Note {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  user_id: string
  deleted?: boolean
}

export interface CreateNoteData {
  title: string
  content: string
}

export interface UpdateNoteData {
  title?: string
  content?: string
}

export interface AppNote {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  userId: string
  isDeleted?: boolean
}

export interface DatabaseNote {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  user_id: string
  deleted?: boolean
}

export class NotesService {
  constructor() {
    // Initialize service
  }

  async createNote(data: CreateNoteData): Promise<Note> {
    const supabase = createClient()
    
    const { data: note, error } = await supabase
      .from('notes')
      .insert(data)
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to create note: ${error.message}`)
    }

    return note
  }

  async updateNote(id: string, data: UpdateNoteData): Promise<Note> {
    const supabase = createClient()
    
    const { data: note, error } = await supabase
      .from('notes')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to update note: ${error.message}`)
    }

    return note
  }

  async deleteNote(id: string): Promise<void> {
    const supabase = createClient()
    
    const { error } = await supabase
      .from('notes')
      .update({ deleted: true })
      .eq('id', id)

    if (error) {
      throw new Error(`Failed to delete note: ${error.message}`)
    }
  }

  async getNote(id: string): Promise<Note | null> {
    const supabase = createClient()
    
    const { data: note, error } = await supabase
      .from('notes')
      .select()
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Note not found
      }
      throw new Error(`Failed to get note: ${error.message}`)
    }

    return note
  }

  async getUserNotes(includeDeleted = false): Promise<Note[]> {
    const supabase = createClient()
    
    let query = supabase
      .from('notes')
      .select()
      .order('updated_at', { ascending: false })

    if (!includeDeleted) {
      query = query.eq('deleted', false)
    }

    const { data: notes, error } = await query

    if (error) {
      throw new Error(`Failed to get notes: ${error.message}`)
    }

    return notes || []
  }

  async searchNotes(searchTerm: string): Promise<Note[]> {
    const supabase = createClient()
    
    const { data: notes, error } = await supabase
      .from('notes')
      .select()
      .or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      .eq('deleted', false)
      .order('updated_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to search notes: ${error.message}`)
    }

    return notes || []
  }

  toAppNote(dbNote: DatabaseNote): AppNote {
    return {
      id: dbNote.id,
      title: dbNote.title,
      content: dbNote.content,
      createdAt: dbNote.created_at,
      updatedAt: dbNote.updated_at,
      userId: dbNote.user_id,
      isDeleted: dbNote.deleted || false,
    }
  }

  toDatabaseNote(appNote: AppNote): DatabaseNote {
    return {
      id: appNote.id,
      title: appNote.title,
      content: appNote.content,
      created_at: appNote.createdAt,
      updated_at: appNote.updatedAt,
      user_id: appNote.userId,
      deleted: appNote.isDeleted || false,
    }
  }
}