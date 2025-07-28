'use client'

import { useEffect, useState } from 'react'
import AppShell from '@/components/app-shell'

export default function HomePage() {
  const [showEditor, setShowEditor] = useState(false)
  const [noteTitle, setNoteTitle] = useState('')
  const [noteContent, setNoteContent] = useState('')
  const [isEditMode, setIsEditMode] = useState(true)

  // Listen for new note creation
  useEffect(() => {
    const handleCreateNote = () => {
      setShowEditor(true)
      setNoteTitle('')
      setNoteContent('')
      setIsEditMode(true)
    }

    window.addEventListener('create-new-note', handleCreateNote)
    return () => window.removeEventListener('create-new-note', handleCreateNote)
  }, [])

  // Listen for edit mode toggle
  useEffect(() => {
    const handleEditModeToggle = () => {
      setIsEditMode(prev => !prev)
    }

    window.addEventListener('toggle-edit-mode', handleEditModeToggle)
    return () => window.removeEventListener('toggle-edit-mode', handleEditModeToggle)
  }, [])

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto p-8">
        {!showEditor ? (
          // Welcome Screen
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to Notable
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              The Notion Clone but Better Experience than Original
            </p>
            
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Keyboard Shortcuts Available
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">General</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+Shift+P</kbd> - Open command palette</li>
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+/</kbd> - Show keyboard shortcuts</li>
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+K</kbd> - Search notes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Notes</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+N</kbd> - Create new note</li>
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+E</kbd> - Toggle edit/view mode</li>
                    <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+,</kbd> - Toggle sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Note Editor
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">
                  {isEditMode ? 'Edit mode' : 'View mode'}
                </span>
              </div>
              <input
                type="text"
                placeholder="Note title..."
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                className="w-full text-2xl font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
                disabled={!isEditMode}
              />
            </div>
            <div className="p-6">
              {isEditMode ? (
                <textarea
                  placeholder="Start writing your note..."
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  className="w-full h-96 text-gray-700 bg-transparent border-none outline-none resize-none placeholder-gray-400"
                />
              ) : (
                <div className="min-h-[24rem] text-gray-700 whitespace-pre-wrap">
                  {noteContent || 'No content yet...'}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}