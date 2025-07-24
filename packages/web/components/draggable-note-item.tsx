'use client'

import * as React from 'react'
import { useState } from 'react'
import type { Note } from '@/types/note'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

interface DraggableNoteItemProps {
  note: Note
  children: React.ReactNode
  onDrop?: (draggedNoteId: string, targetId: string | null) => Promise<boolean>
  isDropTarget?: boolean
  className?: string
}

export function DraggableNoteItem({
  note,
  children,
  onDrop,
  isDropTarget = false,
  className,
}: DraggableNoteItemProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const { toast } = useToast()

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData(
      'application/json',
      JSON.stringify({
        noteId: note.id,
        isFolder: note.isFolder,
        title: note.title,
      })
    )
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    if (!isDropTarget || !onDrop) return

    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    if (!isDropTarget || !onDrop) return

    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)

    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'))
      const draggedNoteId = data.noteId

      // Don't drop on itself
      if (draggedNoteId === note.id) return

      // Don't drop a folder into its own children
      if (note.isFolder && isDescendantOf(note.id, draggedNoteId)) {
        toast({
          title: 'Invalid operation',
          description: 'Cannot move a folder into its own subfolder',
          variant: 'destructive',
        })
        return
      }

      const success = await onDrop(
        draggedNoteId,
        note.isFolder ? note.id : note.parentId || null
      )
      if (success) {
        toast({
          title: 'Success',
          description: `Moved ${data.title} successfully`,
        })
      }
    } catch (error) {
      console.error('Drop error:', error)
      toast({
        title: 'Error',
        description: 'Failed to move item',
        variant: 'destructive',
      })
    }
  }

  // Helper function to check if a note is a descendant of another
  const isDescendantOf = (_parentId: string, _childId: string): boolean => {
    // This would need access to the full note tree
    // For now, we'll skip this check
    return false
  }

  return (
    <div
      draggable={!note.isFolder || true} // Allow folders to be dragged too
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        className,
        isDragging && 'opacity-50',
        isDragOver && isDropTarget && 'ring-2 ring-primary ring-offset-2',
        'transition-all duration-200'
      )}
    >
      {children}
    </div>
  )
}
