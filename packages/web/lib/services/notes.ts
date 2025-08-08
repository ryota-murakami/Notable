import { type Database } from '@/types/database'

type Note = Database['public']['Tables']['notes']['Row']
type NoteInsert = Database['public']['Tables']['notes']['Insert']
type NoteUpdate = Database['public']['Tables']['notes']['Update']

export interface NotesQueryParams {
  limit?: number
  offset?: number
  search?: string
  folder_id?: string | null
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}

export interface NotesResponse {
  notes: Note[]
  total: number
}

export class NotesService {
  private baseUrl = '/api/notes'

  async getNotes(params: NotesQueryParams = {}): Promise<NotesResponse> {
    const searchParams = new URLSearchParams()

    if (params.limit) searchParams.set('limit', params.limit.toString())
    if (params.offset) searchParams.set('offset', params.offset.toString())
    if (params.search) searchParams.set('search', params.search)
    if (params.folder_id !== undefined) {
      searchParams.set(
        'folder_id',
        params.folder_id === null ? 'null' : params.folder_id
      )
    }

    const response = await fetch(`${this.baseUrl}?${searchParams}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch notes: ${response.statusText}`)
    }

    return response.json()
  }

  async getNote(id: string): Promise<{ note: Note }> {
    const response = await fetch(`${this.baseUrl}/${id}`)

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Note not found')
      }
      throw new Error(`Failed to fetch note: ${response.statusText}`)
    }

    return response.json()
  }

  async createNote(data: Omit<NoteInsert, 'user_id'>): Promise<{ note: Note }> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Failed to create note: ${response.statusText}`)
    }

    return response.json()
  }

  async updateNote(
    id: string,
    data: Partial<NoteUpdate>
  ): Promise<{ note: Note }> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Note not found')
      }
      throw new Error(`Failed to update note: ${response.statusText}`)
    }

    return response.json()
  }

  async deleteNote(id: string): Promise<{ message: string }> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Note not found')
      }
      throw new Error(`Failed to delete note: ${response.statusText}`)
    }

    return response.json()
  }
}

// Export a singleton instance
export const notesService = new NotesService()
