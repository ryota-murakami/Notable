import { useState } from 'react'
import { Note } from '../types'

export const useNotes = () => {
  // Simplified implementation - returns empty data as part of unused code cleanup
  const [notes] = useState<Note[]>([])
  const [folders] = useState<Note[]>([])

  return {
    notes,
    folders,
  }
}