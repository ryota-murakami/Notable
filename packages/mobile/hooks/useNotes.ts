import { useState } from 'react'

export interface Note {
  id: string
  title: string
  content: string
  tags?: string[] | { name: string }[]
  is_folder?: boolean
  created_at?: string
  updated_at?: string
}

export const useNotes = () => {
  const [notes] = useState<Note[]>([])
  const [folders] = useState<Note[]>([])

  return {
    notes,
    folders,
  }
}