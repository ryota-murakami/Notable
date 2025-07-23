/**
 * Collaboration Kit for Plate.js + Y.js Integration
 * Real-time collaborative editing with CRDT synchronization
 */

'use client'

import React from 'react'
import * as Y from 'yjs'
import { toPlatePlugin } from 'platejs/react'
import { withYjs, YjsPlugin } from '@platejs/yjs'
import { CursorOverlayPlugin } from '@platejs/cursor-overlay'
import { BaseCommentPlugin } from '@platejs/comment'
import { BaseSuggestionPlugin } from '@platejs/suggestion'
import { type Value } from 'platejs'

import { User, yjsProvider } from '@/lib/collaboration/yjs-provider'
import { CollaborativeCursors } from '@/components/collaboration/CollaborativeCursors'
import { CollaboratorsSidebar } from '@/components/collaboration/CollaboratorsSidebar'
import { CollaborativeComments } from '@/components/collaboration/CollaborativeComments'

/**
 * Y.js plugin configuration for Plate.js
 */
export const yjsPlugin = toPlatePlugin(YjsPlugin, {
  options: {
    connect: false, // We'll handle connection manually
    cursorStateField: 'cursor',
    selectionStateField: 'selection',
    disableCursors: false,
  },
})

/**
 * Enhanced cursor overlay with Y.js awareness
 */
export const collaborativeCursorPlugin = toPlatePlugin(CursorOverlayPlugin, {
  options: {
    containerProps: {
      className: 'pointer-events-none absolute inset-0 z-50',
    },
  },
  render: {
    aboveEditable: ({ editor, element }) => {
      return (
        <CollaborativeCursors
          editorElement={element}
          currentUser={editor.getOption('currentUser') as User}
        />
      )
    },
  },
})

/**
 * Enhanced comment plugin with collaboration features
 */
export const collaborativeCommentPlugin = toPlatePlugin(BaseCommentPlugin, {
  options: {
    currentUserId: null,
    onCommentAdd: null,
    onCommentUpdate: null,
    onCommentDelete: null,
    comments: [],
  },
})

/**
 * Enhanced suggestion plugin with collaboration features
 */
export const collaborativeSuggestionPlugin = toPlatePlugin(
  BaseSuggestionPlugin,
  {
    options: {
      currentUserId: null,
      onSuggestionAdd: null,
      onSuggestionUpdate: null,
      onSuggestionDelete: null,
      suggestions: [],
    },
  }
)

/**
 * Collaboration provider component that wraps the editor
 */
interface CollaborationProviderProps {
  children: React.ReactNode
  noteId: string
  currentUser: User
  onReady?: (ydoc: Y.Doc) => void
}

export function CollaborationProvider({
  children,
  noteId,
  currentUser,
  onReady,
}: CollaborationProviderProps) {
  const [ydoc, setYdoc] = React.useState<Y.Doc | null>(null)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    let mounted = true

    const initializeCollaboration = async () => {
      try {
        const doc = await yjsProvider.initializeDocument(noteId, currentUser)

        if (mounted) {
          setYdoc(doc)
          setIsReady(true)
          onReady?.(doc)
        }
      } catch (error) {
        console.error('Failed to initialize collaboration:', error)
      }
    }

    initializeCollaboration()

    return () => {
      mounted = false
      if (ydoc) {
        yjsProvider.disconnect()
      }
    }
  }, [noteId, currentUser.id, onReady])

  if (!isReady || !ydoc) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2'></div>
          <p className='text-sm text-gray-600'>
            Connecting to collaboration...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='relative h-full'>
      {children}

      {/* Collaboration UI overlays */}
      <CollaborationOverlays
        noteId={noteId}
        currentUser={currentUser}
        ydoc={ydoc}
      />
    </div>
  )
}

/**
 * Collaboration UI overlays (sidebar, comments, etc.)
 */
interface CollaborationOverlaysProps {
  noteId: string
  currentUser: User
  ydoc: Y.Doc
}

function CollaborationOverlays({
  noteId,
  currentUser,
  ydoc,
}: CollaborationOverlaysProps) {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [showComments, setShowComments] = React.useState(false)
  const [comments, setComments] = React.useState<any[]>([])

  // Handle comment operations
  const handleAddComment = React.useCallback(
    (content: string, selection?: any) => {
      const newComment = {
        id: `comment-${Date.now()}`,
        content,
        author: currentUser,
        createdAt: new Date(),
        isResolved: false,
        isEdited: false,
        selection,
        reactions: [],
        replies: [],
      }

      setComments((prev) => [...prev, newComment])

      // Sync with Y.js
      const commentsArray = ydoc.getArray('comments')
      commentsArray.push([newComment])
    },
    [currentUser, ydoc]
  )

  const handleReplyToComment = React.useCallback(
    (commentId: string, content: string) => {
      const reply = {
        id: `reply-${Date.now()}`,
        content,
        author: currentUser,
        createdAt: new Date(),
        isResolved: false,
        isEdited: false,
        reactions: [],
        replies: [],
      }

      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, reply] }
            : comment
        )
      )
    },
    [currentUser]
  )

  const handleEditComment = React.useCallback(
    (commentId: string, content: string) => {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, content, isEdited: true, updatedAt: new Date() }
            : comment
        )
      )
    },
    []
  )

  const handleDeleteComment = React.useCallback((commentId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId))
  }, [])

  const handleResolveComment = React.useCallback((commentId: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, isResolved: !comment.isResolved }
          : comment
      )
    )
  }, [])

  const handleReactToComment = React.useCallback(
    (commentId: string, reaction: 'like' | 'love' | 'approve') => {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id !== commentId) return comment

          const existingReaction = comment.reactions.find(
            (r: any) => r.type === reaction
          )
          const userHasReacted = existingReaction?.users.some(
            (user: any) => user.id === currentUser.id
          )

          if (userHasReacted) {
            // Remove reaction
            return {
              ...comment,
              reactions: comment.reactions.map((r: any) =>
                r.type === reaction
                  ? {
                      ...r,
                      users: r.users.filter(
                        (user: any) => user.id !== currentUser.id
                      ),
                    }
                  : r
              ),
            }
          } else {
            // Add reaction
            if (existingReaction) {
              return {
                ...comment,
                reactions: comment.reactions.map((r: any) =>
                  r.type === reaction
                    ? { ...r, users: [...r.users, currentUser] }
                    : r
                ),
              }
            } else {
              return {
                ...comment,
                reactions: [
                  ...comment.reactions,
                  { type: reaction, users: [currentUser] },
                ],
              }
            }
          }
        })
      )
    },
    [currentUser]
  )

  return (
    <>
      {/* Collaborators Sidebar */}
      <CollaboratorsSidebar
        isOpen={showSidebar}
        onToggle={() => setShowSidebar(!showSidebar)}
        currentUser={currentUser}
        noteId={noteId}
        noteTitle='Collaborative Note'
      />

      {/* Comments Panel */}
      {showComments && (
        <div className='fixed right-4 top-20 bottom-4 w-96 z-40'>
          <CollaborativeComments
            comments={comments}
            currentUser={currentUser}
            onAddComment={handleAddComment}
            onReplyToComment={handleReplyToComment}
            onEditComment={handleEditComment}
            onDeleteComment={handleDeleteComment}
            onResolveComment={handleResolveComment}
            onReactToComment={handleReactToComment}
          />
        </div>
      )}

      {/* Floating action buttons */}
      <div className='fixed right-4 bottom-4 flex flex-col gap-2 z-30'>
        <button
          onClick={() => setShowComments(!showComments)}
          className='bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors'
          title='Toggle Comments'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </button>
      </div>
    </>
  )
}

/**
 * Hook to use collaboration features in an editor
 */
export function useCollaboration(noteId: string, currentUser: User) {
  const [isConnected, setIsConnected] = React.useState(false)
  const [collaborators, setCollaborators] = React.useState<User[]>([])
  const [ydoc, setYdoc] = React.useState<Y.Doc | null>(null)

  React.useEffect(() => {
    const handleCollaboratorsChanged = (users: User[]) => {
      setCollaborators(users)
    }

    const handleConnectionStatus = (status: string) => {
      setIsConnected(status === 'connected')
    }

    yjsProvider.addEventListener(
      'collaborators-changed',
      handleCollaboratorsChanged
    )
    yjsProvider.addEventListener('connection-status', handleConnectionStatus)

    return () => {
      yjsProvider.removeEventListener(
        'collaborators-changed',
        handleCollaboratorsChanged
      )
      yjsProvider.removeEventListener(
        'connection-status',
        handleConnectionStatus
      )
    }
  }, [])

  const initializeCollaboration = React.useCallback(async () => {
    try {
      const doc = await yjsProvider.initializeDocument(noteId, currentUser)
      setYdoc(doc)
      return doc
    } catch (error) {
      console.error('Failed to initialize collaboration:', error)
      throw error
    }
  }, [noteId, currentUser])

  return {
    ydoc,
    isConnected,
    collaborators,
    initializeCollaboration,
    updateCursor: yjsProvider.updateCursor.bind(yjsProvider),
    updateSelection: yjsProvider.updateSelection.bind(yjsProvider),
    setTyping: yjsProvider.setTyping.bind(yjsProvider),
  }
}

/**
 * Collaboration Kit - plugins for real-time collaboration
 */
export const CollaborationKit = [
  yjsPlugin,
  collaborativeCursorPlugin,
  collaborativeCommentPlugin,
  collaborativeSuggestionPlugin,
]
