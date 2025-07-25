/**
 * Collaborative Editor Component with Plate.js and Yjs Integration
 * 
 * This component provides a rich text editor that supports real-time collaboration
 * through Yjs CRDT and Supabase Realtime. Features include:
 * - Real-time collaborative editing
 * - Conflict-free merging of changes
 * - User presence indicators
 * - Rich text formatting with Plate.js
 */

'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { 
  Plate, 
  PlateProvider, 
  createPlateEditor,
  PlateContent,
  PlateElement,
  PlateLeaf
} from '@udecode/plate-common'
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements'
import { createBasicMarksPlugin } from '@udecode/plate-basic-marks'
import { createYjsPlugin } from '@platejs/yjs'
import { cn } from '@/lib/utils'
import { useCollaborativeEditor } from '@/hooks/use-yjs-provider'

export interface CollaborativeEditorProps {
  noteId: string
  userId: string
  initialValue?: any[]
  placeholder?: string
  className?: string
  onSave?: (content: any[]) => void
  readOnly?: boolean
}

/**
 * User presence indicator component
 */
const UserPresence: React.FC<{ 
  activeUsers: string[]
  currentUserId: string 
}> = ({ activeUsers, currentUserId }) => {
  const otherUsers = activeUsers.filter(id => id !== currentUserId)
  
  if (otherUsers.length === 0) return null

  return (
    <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 border-b">
      <div className="flex -space-x-2">
        {otherUsers.slice(0, 3).map((userId, index) => (
          <div
            key={userId}
            className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-white"
            title={`User ${userId.slice(0, 8)}`}
          >
            {userId.charAt(0).toUpperCase()}
          </div>
        ))}
        {otherUsers.length > 3 && (
          <div className="w-6 h-6 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-white">
            +{otherUsers.length - 3}
          </div>
        )}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {otherUsers.length === 1 ? '1 user editing' : `${otherUsers.length} users editing`}
      </span>
    </div>
  )
}

/**
 * Connection status indicator
 */
const ConnectionStatus: React.FC<{ 
  isConnected: boolean
  error: string | null 
  onReconnect: () => void
}> = ({ isConnected, error, onReconnect }) => {
  if (isConnected) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Connected
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        Error: {error}
        <button 
          onClick={onReconnect}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400">
      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
      Connecting...
    </div>
  )
}

/**
 * Main collaborative editor component
 */
export const CollaborativeEditor: React.FC<CollaborativeEditorProps> = ({
  noteId,
  userId,
  initialValue = [{ type: 'p', children: [{ text: '' }] }],
  placeholder = 'Start writing...',
  className,
  onSave,
  readOnly = false
}) => {
  const [editorValue, setEditorValue] = useState(initialValue)
  
  const {
    provider,
    doc,
    getText,
    collaborationStatus,
    error,
    reconnect
  } = useCollaborativeEditor(noteId, userId)

  // Create Plate editor with Yjs plugin
  const editor = useMemo(() => {
    const plugins = [
      createBasicElementsPlugin(),
      createBasicMarksPlugin(),
    ]

    // Add Yjs plugin if collaboration is available
    if (doc && getText()) {
      plugins.push(
        createYjsPlugin({
          yText: getText()!,
          autoConnect: true
        })
      )
    }

    return createPlateEditor({
      plugins
    })
  }, [doc, getText])

  // Sync initial value with Yjs document
  useEffect(() => {
    if (!doc || !getText()) return

    const yText = getText()!
    
    // If Yjs document is empty, initialize with our value
    if (yText.length === 0 && editorValue) {
      // Convert Plate value to plain text for now
      // In a real implementation, you'd want to serialize properly
      const textContent = editorValue
        .map(node => node.children?.map((child: any) => child.text).join('') || '')
        .join('\n')
      
      yText.insert(0, textContent)
    }
  }, [doc, getText, editorValue])

  // Auto-save functionality
  useEffect(() => {
    if (!onSave || readOnly) return

    const saveInterval = setInterval(() => {
      if (editorValue) {
        onSave(editorValue)
      }
    }, 5000) // Auto-save every 5 seconds

    return () => clearInterval(saveInterval)
  }, [editorValue, onSave, readOnly])

  return (
    <div className={cn('flex flex-col h-full border rounded-lg overflow-hidden', className)}>
      {/* Header with collaboration status */}
      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 border-b">
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            Note Editor
          </h3>
          <ConnectionStatus 
            isConnected={collaborationStatus.isConnected}
            error={error}
            onReconnect={reconnect}
          />
        </div>
        
        {/* Save button for manual save */}
        {!readOnly && onSave && (
          <button
            onClick={() => onSave(editorValue)}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
        )}
      </div>

      {/* User presence indicator */}
      {collaborationStatus.isConnected && (
        <UserPresence 
          activeUsers={collaborationStatus.activeUsers}
          currentUserId={userId}
        />
      )}

      {/* Editor content */}
      <div className="flex-1 overflow-hidden">
        <PlateProvider editor={editor}>
          <Plate
            editor={editor}
            value={editorValue}
            onChange={setEditorValue}
          >
            <PlateContent
              className={cn(
                'h-full p-4 focus:outline-none',
                'prose prose-slate dark:prose-invert max-w-none',
                'placeholder:text-gray-400 dark:placeholder:text-gray-500',
                readOnly && 'cursor-default'
              )}
              placeholder={placeholder}
              readOnly={readOnly}
              autoFocus={!readOnly}
            />
          </Plate>
        </PlateProvider>
      </div>

      {/* Footer with collaboration info */}
      {collaborationStatus.isCollaborating && (
        <div className="p-2 bg-gray-50 dark:bg-gray-800 border-t text-xs text-gray-500 dark:text-gray-400">
          Real-time collaboration active • {collaborationStatus.userCount} users connected
        </div>
      )}
    </div>
  )
}

/**
 * Simple wrapper for easier usage
 */
export const NoteEditor: React.FC<{
  noteId: string
  userId: string
  onSave?: (content: any[]) => void
  className?: string
}> = ({ noteId, userId, onSave, className }) => {
  return (
    <CollaborativeEditor
      noteId={noteId}
      userId={userId}
      onSave={onSave}
      className={className}
      placeholder="Start writing your note..."
    />
  )
}