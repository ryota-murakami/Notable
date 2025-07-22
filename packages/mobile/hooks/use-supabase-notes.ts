import { useState } from 'react'
import { Note } from '@/types'

interface UseSupabaseNotesOptions {
  userId?: string
}

// Simplified version for mobile - most functionality moved to use-offline-notes.ts
export const useSupabaseNotes = (_options: UseSupabaseNotesOptions) => {
  const [notes] = useState<Note[]>([])
  const [isLoading] = useState(false)
  const [error] = useState<string | null>(null)

  // Note: fetchNotes functionality has been moved to use-offline-notes.ts
  // This hook is kept for backward compatibility but may be deprecated in the future

  const createNote = async () => {
    // Functionality moved to use-offline-notes.ts
    return null
  }

  const updateNote = async () => {
    // Functionality moved to use-offline-notes.ts
    return null
  }

  const deleteNote = async () => {
    // Functionality moved to use-offline-notes.ts
  }

  return { notes, isLoading, error, createNote, updateNote, deleteNote }
}
