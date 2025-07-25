/**
 * Collaborative Editor Test Page
 * 
 * This page demonstrates the real-time collaborative editing capabilities
 * using Yjs and Supabase Realtime. It's useful for testing and debugging
 * the collaboration features.
 */

'use client'

import React, { useState, useEffect } from 'react'
import { CollaborativeEditor } from '@/components/editor/CollaborativeEditor'
import { cn } from '@/lib/utils'

export default function TestCollaborativePage() {
  const [noteId, setNoteId] = useState('test-note-1')
  const [userId, setUserId] = useState('')
  const [savedContent, setSavedContent] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  // Generate a random user ID on mount
  useEffect(() => {
    setIsClient(true)
    const randomUserId = `user-${Math.random().toString(36).substr(2, 9)}`
    setUserId(randomUserId)
  }, [])

  const handleSave = (content: any[]) => {
    setSavedContent(content)
    console.log('Content saved:', content)
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Collaborative Editor Test
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Test real-time collaborative editing with Yjs and Supabase Realtime.
            Open this page in multiple tabs or browsers to see collaboration in action.
          </p>
          
          {/* Configuration controls */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border mb-6">
            <h2 className="text-lg font-semibold mb-4">Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Note ID (shared document identifier)
                </label>
                <input
                  type="text"
                  value={noteId}
                  onChange={(e) => setNoteId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter note ID"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Multiple users with the same note ID will collaborate
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your User ID
                </label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter user ID"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Identifies you in the collaboration session
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Testing Instructions
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Open this page in multiple browser tabs or windows</li>
              <li>• Use the same Note ID but different User IDs</li>
              <li>• Start typing in one tab and see changes appear in others</li>
              <li>• Check the connection status and user presence indicators</li>
              <li>• Test conflict resolution by typing in the same area simultaneously</li>
            </ul>
          </div>
        </div>

        {/* Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CollaborativeEditor
              noteId={noteId}
              userId={userId}
              onSave={handleSave}
              className="h-96"
              placeholder="Start typing to test collaboration..."
            />
          </div>

          {/* Debug panel */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-semibold mb-3">Debug Info</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Note ID:</strong> {noteId}
                </div>
                <div>
                  <strong>User ID:</strong> {userId}
                </div>
                <div>
                  <strong>Environment:</strong> {process.env.NODE_ENV}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-semibold mb-3">Saved Content</h3>
              <div className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded max-h-32 overflow-y-auto">
                <pre>{JSON.stringify(savedContent, null, 2)}</pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-semibold mb-3">Features Tested</h3>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Real-time editing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  User presence
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Connection status
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Conflict resolution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Auto-save
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional test scenarios */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Test Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-medium mb-2">Scenario 1: Basic Collaboration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Two users editing the same document simultaneously
              </p>
              <button
                onClick={() => setNoteId('collab-test-1')}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
              >
                Use Note ID: collab-test-1
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-medium mb-2">Scenario 2: Conflict Resolution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Multiple users editing the same paragraph
              </p>
              <button
                onClick={() => setNoteId('conflict-test-1')}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
              >
                Use Note ID: conflict-test-1
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
              <h3 className="font-medium mb-2">Scenario 3: Large Document</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Performance testing with large documents
              </p>
              <button
                onClick={() => setNoteId('large-doc-test-1')}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
              >
                Use Note ID: large-doc-test-1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}