import { createClient } from '@/utils/supabase/client'

export interface Note {
  id: string
  title: string
  content: string | { text: string }
  created_at: string
  updated_at: string
  user_id: string
  folder_id?: string | null
  is_public?: boolean
  deleted?: boolean
}

export interface CreateNoteData {
  title: string
  content?: string | { text: string }
  folder_id?: string | null
  is_public?: boolean
}

export interface UpdateNoteData {
  title?: string
  content?: string | { text: string }
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
  deleted_at?: string | null
  deleted?: boolean
}

export interface ServiceResponse<T> {
  data: T | null
  error: { message: string } | null
}

export class NotesService {
  constructor() {
    // Initialize service
  }

  async createNote(data: CreateNoteData): Promise<ServiceResponse<Note>> {
    const supabase = createClient()
    
    // Check authentication
    const { data: user } = await supabase.auth.getUser()
    if (!user.user) {
      return {
        data: null,
        error: { message: 'User not authenticated' }
      }
    }

    // Ensure required fields
    if (!data.content) {
      return {
        data: null,
        error: { message: 'Content is required' }
      }
    }

    const insertData = {
      title: data.title,
      content: data.content,
      user_id: user.user.id,
      folder_id: data.folder_id || null,
      is_public: data.is_public || false,
    }
    
    const { data: note, error } = await supabase
      .from('notes')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      return {
        data: null,
        error: { message: `Failed to create note: ${error.message}` }
      }
    }

    return {
      data: note,
      error: null
    }
  }

  async updateNote(id: string, data: UpdateNoteData): Promise<ServiceResponse<Note>> {
    const supabase = createClient()
    
    const { data: note, error } = await supabase
      .from('notes')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return {
        data: null,
        error: { message: `Failed to update note: ${error.message}` }
      }
    }

    return {
      data: note,
      error: null
    }
  }

  async deleteNote(id: string): Promise<ServiceResponse<void>> {
    const supabase = createClient()
    
    const { error } = await supabase
      .from('notes')
      .update({ deleted: true })
      .eq('id', id)

    if (error) {
      return {
        data: null,
        error: { message: `Failed to delete note: ${error.message}` }
      }
    }

    return {
      data: null,
      error: null
    }
  }

  async getNote(id: string): Promise<ServiceResponse<Note>> {
    const supabase = createClient()
    
    const { data: note, error } = await supabase
      .from('notes')
      .select()
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return {
          data: null,
          error: null
        }
      }
      return {
        data: null,
        error: { message: `Failed to get note: ${error.message}` }
      }
    }

    return {
      data: note,
      error: null
    }
  }

  async getUserNotes(options?: { includeDeleted?: boolean }): Promise<ServiceResponse<Note[]>> {
    const supabase = createClient()
    
    let query = supabase
      .from('notes')
      .select()
      .order('updated_at', { ascending: false })

    if (!options?.includeDeleted) {
      query = query.eq('deleted', false)
    }

    const { data: notes, error } = await query

    if (error) {
      return {
        data: null,
        error: { message: `Failed to get notes: ${error.message}` }
      }
    }

    return {
      data: notes || [],
      error: null
    }
  }

  async searchNotes(searchTerm: string): Promise<ServiceResponse<Note[]>> {
    const supabase = createClient()
    
    const { data: notes, error } = await supabase
      .from('notes')
      .select()
      .or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      .eq('deleted', false)
      .order('updated_at', { ascending: false })

    if (error) {
      return {
        data: null,
        error: { message: `Failed to search notes: ${error.message}` }
      }
    }

    return {
      data: notes || [],
      error: null
    }
  }

  subscribeToNoteChanges(
    userId: string, 
    callbacks: {
      onInsert?: (note: Note) => void
      onUpdate?: (note: Note) => void
      onDelete?: (note: Note) => void
    }
  ): () => void {
    const supabase = createClient()
    
    const channel = supabase
      .channel('notes-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notes',
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          callbacks.onInsert?.(payload.new as Note)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'notes',
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          callbacks.onUpdate?.(payload.new as Note)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'notes',
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          callbacks.onDelete?.(payload.old as Note)
        }
      )
      .subscribe()
    
    return () => {
      supabase.removeChannel(channel)
    }
  }

  // Static methods expected by tests
  static toAppNote(dbNote: DatabaseNote): AppNote {
    return {
      id: dbNote.id,
      title: dbNote.title,
      content: dbNote.content,
      createdAt: dbNote.created_at,
      updatedAt: dbNote.updated_at,
      userId: dbNote.user_id,
      isDeleted: Boolean(dbNote.deleted_at),
    }
  }

  static toDatabaseNote(appNote: Partial<AppNote>): Partial<DatabaseNote> {
    return {
      id: appNote.id,
      title: appNote.title || 'Untitled',
      content: appNote.content || '',
      created_at: appNote.createdAt,
      updated_at: appNote.updatedAt,
      user_id: appNote.userId,
      deleted: appNote.isDeleted || false,
    }
  }

  // Instance methods for backward compatibility
  toAppNote(dbNote: DatabaseNote): AppNote {
    return NotesService.toAppNote(dbNote)
  }

  toDatabaseNote(appNote: Partial<AppNote>): Partial<DatabaseNote> {
    return NotesService.toDatabaseNote(appNote)
  }
}