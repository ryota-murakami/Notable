import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { Note, NoteCreate, NoteUpdate } from '@/types'
import { useRealtimeSync } from './use-realtime-sync'

interface UseSupabaseNotesOptions {
  user_id?: string
}

export const useSupabaseNotes = ({ user_id }: UseSupabaseNotesOptions) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { channel } = useRealtimeSync(user_id)

  const fetchNotes = useCallback(async () => {
    if (!user_id) return
    setIsLoading(true)
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('user_id', user_id)
    if (error) {
      setError(error.message)
    } else {
      setNotes(data || [])
    }
    setIsLoading(false)
  }, [user_id])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  useEffect(() => {
    if (channel) {
      const sub = channel
        .on<Note>(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'notes' },
          (payload) => {
            if (payload.eventType === 'INSERT') {
              setNotes((prev) => [...prev, payload.new])
            }
            if (payload.eventType === 'UPDATE') {
              setNotes((prev) =>
                prev.map((n) => (n.id === payload.new.id ? payload.new : n)),
              )
            }
            if (payload.eventType === 'DELETE') {
              setNotes((prev) => prev.filter((n) => n.id !== payload.old.id))
            }
          },
        )
        .subscribe()

      return () => {
        sub.unsubscribe()
      }
    }
  }, [channel])

  const createNote = async (note: NoteCreate) => {
    const { data, error } = await supabase.from('notes').insert(note).select()
    if (error) setError(error.message)
    return data ? data[0] : null
  }

  const updateNote = async (id: string, note: NoteUpdate) => {
    const { data, error } = await supabase
      .from('notes')
      .update(note)
      .eq('id', id)
      .select()
    if (error) setError(error.message)
    return data ? data[0] : null
  }

  const deleteNote = async (id: string) => {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) setError(error.message)
  }

  return { notes, isLoading, error, createNote, updateNote, deleteNote }
}
