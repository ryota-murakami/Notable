import { useState } from 'react'

export interface Note {
  id: string
  title: string
  content: string
  is_folder?: boolean
  created_at?: string
  updated_at?: string
}

export interface User {
  id: string
  name: string
}

export const useOfflineNotes = (_options: unknown = {}) => {
  const [notes] = useState<Note[]>([])
  const [isLoading] = useState(false)
  const [isSaving] = useState(false)
  const [onlineUsers] = useState<User[]>([])
  const [typingUsers] = useState<User[]>([])

  const createNote = async (_noteData: Partial<Note>): Promise<Note | null> => {
    // Mock implementation
    return null
  }

  const updateNote = async (_id: string, _data: Partial<Note>): Promise<void> => {
    // Mock implementation
  }

  const deleteNote = async (_id: string): Promise<void> => {
    // Mock implementation
  }

  const startTyping = () => {
    // Mock implementation
  }

  const stopTyping = () => {
    // Mock implementation
  }

  return {
    notes,
    isLoading,
    isSaving,
    onlineUsers,
    typingUsers,
    createNote,
    updateNote,
    deleteNote,
    startTyping,
    stopTyping,
  }
}