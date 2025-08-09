import { useState } from 'react'
import { type Note, type User } from '../types'

export const useOfflineNotes = (_options: unknown = {}) => {
  const [notes] = useState<Note[]>([])
  const [isLoading] = useState(false)
  const [isSaving] = useState(false)
  const [onlineUsers] = useState<User[]>([])
  const [typingUsers] = useState<User[]>([])

  const createNote = (_noteData: Partial<Note>): Promise<Note | null> => {
    // Mock implementation - return a basic note for development
    return Promise.resolve({
      id: Math.random().toString(36),
      title: _noteData.title || 'Untitled',
      content: _noteData.content || '',
      is_folder: _noteData.is_folder || false,
    })
  }

  const updateNote = (
    _id: string,
    _data: Partial<Note>
  ): Promise<void> => {
    // Mock implementation
    return Promise.resolve()
  }

  const deleteNote = (_id: string): Promise<void> => {
    // Mock implementation
    return Promise.resolve()
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
