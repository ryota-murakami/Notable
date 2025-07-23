import { useState, useEffect } from 'react'
import { Note } from '@/types'
import { useSupabase } from '@/components/SupabaseProvider'
import { supabase } from '@/lib/supabase'

export function useNotes() {
  const { user } = useSupabase()
  const [notes, setNotes] = useState<Note[]>([])
  const [folders, setFolders] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadNotes()
  }, [user?.id])

  const loadNotes = async () => {
    if (!user?.id) return

    try {
      setIsLoading(true)
      const { data: notesData } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .eq('isFolder', false)

      const { data: foldersData } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .eq('isFolder', true)

      setNotes(notesData || [])
      setFolders(foldersData || [])
    } catch (error) {
      console.error('Error loading notes:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    notes,
    folders,
    isLoading,
    refresh: loadNotes,
  }
}
