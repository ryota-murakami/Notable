/**
 * Collaborative Cursors Component
 * Real-time cursor tracking and display for collaborative editing
 */

'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { User, Awareness, yjsProvider } from '@/lib/collaboration/yjs-provider'
import { cn } from '@/lib/utils'

interface CursorPosition {
  x: number
  y: number
  width: number
  height: number
}

interface CollaborativeCursor {
  user: User
  position: CursorPosition
  awareness: Awareness
  isVisible: boolean
  lastUpdate: number
}

interface CollaborativeCursorsProps {
  editorElement: HTMLElement | null
  currentUser: User
  className?: string
}

export function CollaborativeCursors({
  editorElement,
  currentUser,
  className,
}: CollaborativeCursorsProps) {
  const [cursors, setCursors] = useState<Map<string, CollaborativeCursor>>(
    new Map()
  )
  const [isInitialized, setIsInitialized] = useState(false)
  const cursorRefs = useRef(new Map<string, HTMLDivElement>())

  /**
   * Calculate cursor position from text selection
   */
  const calculateCursorPosition = useCallback(
    (element: HTMLElement, offset: number): CursorPosition | null => {
      if (!element) return null

      try {
        // Create a range at the specified offset
        const range = document.createRange()
        const textNode = getTextNodeAtOffset(element, offset)

        if (!textNode) return null

        const localOffset = offset - getOffsetBeforeNode(element, textNode.node)
        range.setStart(
          textNode.node,
          Math.min(localOffset, textNode.node.textContent?.length || 0)
        )
        range.collapse(true)

        // Get the bounding rectangle
        const rect = range.getBoundingClientRect()
        const editorRect = element.getBoundingClientRect()

        return {
          x: rect.left - editorRect.left,
          y: rect.top - editorRect.top,
          width: 2,
          height: rect.height || 20,
        }
      } catch (error) {
        console.warn('Failed to calculate cursor position:', error)
        return null
      }
    },
    []
  )

  /**
   * Get text node at specific offset
   */
  const getTextNodeAtOffset = (
    element: HTMLElement,
    offset: number
  ): { node: Text; offset: number } | null => {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )

    let currentOffset = 0
    let textNode = walker.nextNode() as Text

    while (textNode) {
      const nodeLength = textNode.textContent?.length || 0
      if (currentOffset + nodeLength >= offset) {
        return { node: textNode, offset: currentOffset }
      }
      currentOffset += nodeLength
      textNode = walker.nextNode() as Text
    }

    return null
  }

  /**
   * Get total text offset before a node
   */
  const getOffsetBeforeNode = (
    container: HTMLElement,
    targetNode: Node
  ): number => {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )

    let offset = 0
    let currentNode = walker.nextNode() as Text

    while (currentNode && currentNode !== targetNode) {
      offset += currentNode.textContent?.length || 0
      currentNode = walker.nextNode() as Text
    }

    return offset
  }

  /**
   * Update cursor positions for all collaborators
   */
  const updateCursorPositions = useCallback(() => {
    if (!editorElement) return

    const collaborators = yjsProvider.getCollaborators()
    const newCursors = new Map<string, CollaborativeCursor>()

    collaborators.forEach((user) => {
      if (user.id === currentUser.id) return // Skip current user

      const awareness = yjsProvider.getUserAwareness(user.id)
      if (!awareness?.cursor) return

      const position = calculateCursorPosition(
        editorElement,
        awareness.cursor.anchor
      )

      if (position) {
        const isActive = Date.now() - awareness.lastActivity.getTime() < 30000 // 30 seconds

        newCursors.set(user.id, {
          user,
          position,
          awareness,
          isVisible: isActive,
          lastUpdate: Date.now(),
        })
      }
    })

    setCursors(newCursors)
  }, [editorElement, currentUser.id, calculateCursorPosition])

  /**
   * Track current user's cursor position
   */
  const trackCurrentUserCursor = useCallback(() => {
    if (!editorElement) return

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    if (!editorElement.contains(range.commonAncestorContainer)) return

    // Calculate text offset
    const offset = getTextOffset(
      editorElement,
      range.startContainer,
      range.startOffset
    )
    const focusOffset = getTextOffset(
      editorElement,
      range.endContainer,
      range.endOffset
    )

    // Update Y.js awareness
    yjsProvider.updateCursor(offset, focusOffset)
  }, [editorElement])

  /**
   * Get text offset within editor
   */
  const getTextOffset = (
    container: HTMLElement,
    node: Node,
    offset: number
  ): number => {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )

    let totalOffset = 0
    let currentNode = walker.nextNode() as Text

    while (currentNode) {
      if (currentNode === node) {
        return totalOffset + offset
      }
      totalOffset += currentNode.textContent?.length || 0
      currentNode = walker.nextNode() as Text
    }

    return totalOffset
  }

  /**
   * Set up event listeners
   */
  useEffect(() => {
    if (!editorElement) return

    // Listen for cursor updates from other users
    const handleUserUpdated = () => {
      updateCursorPositions()
    }

    // Listen for current user's cursor movement
    const handleSelectionChange = () => {
      trackCurrentUserCursor()
    }

    // Set up event listeners
    yjsProvider.addEventListener('user-updated', handleUserUpdated)
    yjsProvider.addEventListener('collaborators-changed', handleUserUpdated)
    document.addEventListener('selectionchange', handleSelectionChange)

    // Track cursor movement on editor
    const handleMouseUp = () => {
      setTimeout(trackCurrentUserCursor, 10)
    }

    const handleKeyUp = () => {
      setTimeout(trackCurrentUserCursor, 10)
    }

    editorElement.addEventListener('mouseup', handleMouseUp)
    editorElement.addEventListener('keyup', handleKeyUp)

    // Initial update
    updateCursorPositions()
    setIsInitialized(true)

    // Update positions periodically
    const interval = setInterval(updateCursorPositions, 1000)

    return () => {
      yjsProvider.removeEventListener('user-updated', handleUserUpdated)
      yjsProvider.removeEventListener(
        'collaborators-changed',
        handleUserUpdated
      )
      document.removeEventListener('selectionchange', handleSelectionChange)
      editorElement.removeEventListener('mouseup', handleMouseUp)
      editorElement.removeEventListener('keyup', handleKeyUp)
      clearInterval(interval)
    }
  }, [editorElement, updateCursorPositions, trackCurrentUserCursor])

  /**
   * Clean up old cursors
   */
  useEffect(() => {
    const cleanup = () => {
      const now = Date.now()
      const updatedCursors = new Map(cursors)
      let hasChanges = false

      for (const [userId, cursor] of cursors.entries()) {
        if (now - cursor.lastUpdate > 60000) {
          // Remove after 1 minute
          updatedCursors.delete(userId)
          hasChanges = true
        }
      }

      if (hasChanges) {
        setCursors(updatedCursors)
      }
    }

    const interval = setInterval(cleanup, 10000) // Clean up every 10 seconds
    return () => clearInterval(interval)
  }, [cursors])

  if (!isInitialized || !editorElement) {
    return null
  }

  return createPortal(
    <div className={cn('absolute inset-0 pointer-events-none z-50', className)}>
      {Array.from(cursors.values()).map(
        (cursor) =>
          cursor.isVisible && (
            <CollaborativeCursor
              key={cursor.user.id}
              cursor={cursor}
              ref={(el) => {
                if (el) {
                  cursorRefs.current.set(cursor.user.id, el)
                } else {
                  cursorRefs.current.delete(cursor.user.id)
                }
              }}
            />
          )
      )}
    </div>,
    editorElement
  )
}

/**
 * Individual collaborative cursor component
 */
interface CollaborativeCursorProps {
  cursor: CollaborativeCursor
}

const CollaborativeCursor = React.forwardRef<
  HTMLDivElement,
  CollaborativeCursorProps
>(({ cursor }, ref) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const prevPositionRef = useRef(cursor.position)

  useEffect(() => {
    const prevPos = prevPositionRef.current
    const currentPos = cursor.position

    if (prevPos.x !== currentPos.x || prevPos.y !== currentPos.y) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 200)
      prevPositionRef.current = currentPos
      return () => clearTimeout(timer)
    }
  }, [cursor.position])

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div
      ref={ref}
      className={cn(
        'absolute transition-all duration-200 ease-out',
        isAnimating && 'transition-all duration-200'
      )}
      style={{
        left: cursor.position.x,
        top: cursor.position.y,
        transform: 'translateX(-1px)',
        zIndex: 1000,
      }}
    >
      {/* Cursor line */}
      <div
        className='absolute animate-pulse'
        style={{
          width: cursor.position.width,
          height: cursor.position.height,
          backgroundColor: cursor.user.color,
          borderRadius: '1px',
        }}
      />

      {/* User label */}
      <div
        className={cn(
          'absolute -top-6 left-0 px-2 py-1 rounded text-xs font-medium text-white whitespace-nowrap',
          'shadow-lg border border-white/20 transition-opacity duration-200',
          cursor.awareness.isTyping
            ? 'opacity-100'
            : 'opacity-0 hover:opacity-100'
        )}
        style={{
          backgroundColor: cursor.user.color,
          transform: 'translateX(-8px)',
        }}
      >
        <div className='flex items-center gap-1'>
          <div
            className='w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[10px]'
            style={{ backgroundColor: `${cursor.user.color}dd` }}
          >
            {getUserInitials(cursor.user.name)}
          </div>
          <span className='max-w-24 truncate'>{cursor.user.name}</span>
          {cursor.awareness.isTyping && (
            <div className='flex space-x-1'>
              <div
                className='w-1 h-1 bg-white rounded-full animate-bounce'
                style={{ animationDelay: '0ms' }}
              />
              <div
                className='w-1 h-1 bg-white rounded-full animate-bounce'
                style={{ animationDelay: '150ms' }}
              />
              <div
                className='w-1 h-1 bg-white rounded-full animate-bounce'
                style={{ animationDelay: '300ms' }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Selection highlight (if different from cursor) */}
      {cursor.awareness.selection &&
        cursor.awareness.selection.anchor !==
          cursor.awareness.selection.focus && (
          <div
            className='absolute pointer-events-none'
            style={{
              backgroundColor: `${cursor.user.color}20`,
              border: `1px solid ${cursor.user.color}40`,
              borderRadius: '2px',
              // Calculate selection dimensions - simplified for demo
              width:
                Math.abs(
                  cursor.awareness.selection.focus -
                    cursor.awareness.selection.anchor
                ) * 8,
              height: cursor.position.height,
              top: 0,
              left:
                Math.min(
                  cursor.awareness.selection.anchor,
                  cursor.awareness.selection.focus
                ) * 8,
            }}
          />
        )}
    </div>
  )
})

CollaborativeCursor.displayName = 'CollaborativeCursor'

/**
 * Hook to use collaborative cursors in an editor
 */
export function useCollaborativeCursors(
  editorRef: React.RefObject<HTMLElement>,
  currentUser: User
) {
  const [isEnabled, setIsEnabled] = useState(true)

  const enableCursors = useCallback(() => setIsEnabled(true), [])
  const disableCursors = useCallback(() => setIsEnabled(false), [])

  return {
    CollaborativeCursors: isEnabled ? (
      <CollaborativeCursors
        editorElement={editorRef.current}
        currentUser={currentUser}
      />
    ) : null,
    enableCursors,
    disableCursors,
    isEnabled,
  }
}
