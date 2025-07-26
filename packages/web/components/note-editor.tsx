'use client'

import * as React from 'react'
import { useState, useCallback, useEffect } from 'react'
import {
  Save,
  MoreHorizontal,
  Share2,
  Trash2,
  Edit3,
  Eye,
  Calendar,
  Tag,
} from 'lucide-react'
import { Button } from '../design-system/components/button'
import { Input } from '../design-system/components/input'
import { Textarea } from '../design-system/components/textarea'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Badge } from '../design-system/components/badge'
import { cn } from '../lib/utils'
import { Note } from '../types/note'
import { ExportButton } from './export/export-button'
import { ExportDialog } from './export/export-dialog'
import { toast } from 'sonner'

interface NoteEditorProps {
  note?: Note | null
  isEditing?: boolean
  onSave?: (note: Partial<Note>) => Promise<void>
  onDelete?: (noteId: string) => Promise<void>
  onShare?: (note: Note) => Promise<void>
  className?: string
}

export function NoteEditor({
  note,
  isEditing: initialEditing = false,
  onSave,
  onDelete,
  onShare,
  className,
}: NoteEditorProps) {
  const [isEditing, setIsEditing] = useState(initialEditing)
  const [isSaving, setIsSaving] = useState(false)
  const [title, setTitle] = useState(note?.title || '')
  const [content, setContent] = useState(note?.content || '')
  const [tags, setTags] = useState<string[]>(note?.tags || [])
  const [newTag, setNewTag] = useState('')

  // Update state when note prop changes
  useEffect(() => {
    if (note) {
      setTitle(note.title || '')
      setContent(note.content || '')
      setTags(note.tags || [])
    }
  }, [note])

  const handleSave = useCallback(async () => {
    if (!note || !onSave) return

    try {
      setIsSaving(true)
      await onSave({
        id: note.id,
        title: title.trim() || 'Untitled',
        content,
        tags,
        updated_at: new Date().toISOString(),
      })
      setIsEditing(false)
      toast.success('Note saved successfully')
    } catch (error) {
      console.error('Failed to save note:', error)
      toast.error('Failed to save note')
    } finally {
      setIsSaving(false)
    }
  }, [note, onSave, title, content, tags])

  const handleShare = useCallback(async () => {
    if (!note || !onShare) return

    try {
      await onShare(note)
      toast.success('Note shared successfully')
    } catch (error) {
      console.error('Failed to share note:', error)
      toast.error('Failed to share note')
    }
  }, [note, onShare])

  const handleDelete = useCallback(async () => {
    if (!note || !onDelete) return

    try {
      await onDelete(note.id)
      toast.success('Note deleted successfully')
    } catch (error) {
      console.error('Failed to delete note:', error)
      toast.error('Failed to delete note')
    }
  }, [note, onDelete])

  const handleAddTag = useCallback(() => {
    const trimmedTag = newTag.trim()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags((prev) => [...prev, trimmedTag])
      setNewTag('')
    }
  }, [newTag, tags])

  const handleRemoveTag = useCallback((tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove))
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && newTag.trim()) {
        e.preventDefault()
        handleAddTag()
      }
    },
    [newTag, handleAddTag]
  )

  // Auto-save functionality - remove handleSave from dependencies to prevent infinite loop
  useEffect(() => {
    if (!isEditing || !note || !onSave) return

    const saveTimer = setTimeout(async () => {
      if (
        title !== note.title ||
        content !== note.content ||
        JSON.stringify(tags) !== JSON.stringify(note.tags)
      ) {
        try {
          setIsSaving(true)
          await onSave({
            id: note.id,
            title: title.trim() || 'Untitled',
            content,
            tags,
            updated_at: new Date().toISOString(),
          })
          // Don't setIsEditing(false) in auto-save - only in manual save
        } catch (error) {
          console.error('Auto-save failed:', error)
        } finally {
          setIsSaving(false)
        }
      }
    }, 2000) // Auto-save after 2 seconds of inactivity

    return () => clearTimeout(saveTimer)
  }, [title, content, tags, isEditing, note, onSave])

  if (!note) {
    return (
      <div className={cn('flex items-center justify-center h-full', className)}>
        <div className='text-center text-muted-foreground'>
          <Edit3 className='h-8 w-8 mx-auto mb-2 opacity-50' />
          <p>Select a note to view or edit</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <Calendar className='h-4 w-4 text-muted-foreground' />
            <span className='text-sm text-muted-foreground'>
              {note.updated_at
                ? new Date(note.updated_at).toLocaleDateString()
                : 'Unknown'}
            </span>
          </div>
          {isSaving && (
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <div className='h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent' />
              Saving...
            </div>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {isEditing ? (
            <Button
              onClick={handleSave}
              disabled={isSaving}
              size='sm'
              className='gap-2'
            >
              <Save className='h-4 w-4' />
              Save
            </Button>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              variant='secondary'
              size='sm'
              className='gap-2'
            >
              <Edit3 className='h-4 w-4' />
              Edit
            </Button>
          )}

          {/* Export functionality */}
          <ExportDialog note={note}>
            <Button variant='secondary' size='sm' className='gap-2'>
              <Share2 className='h-4 w-4' />
              Export
            </Button>
          </ExportDialog>

          {/* More actions menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='sm'>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
              {onShare && (
                <DropdownMenuItem onClick={handleShare} className='gap-2'>
                  <Share2 className='h-4 w-4' />
                  Share Note
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              {onDelete && (
                <DropdownMenuItem
                  onClick={handleDelete}
                  className='gap-2 text-destructive focus:text-destructive'
                >
                  <Trash2 className='h-4 w-4' />
                  Delete Note
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 overflow-auto p-6 space-y-4'>
        {/* Title */}
        {isEditing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Note title...'
            className='text-2xl font-bold border-none shadow-none focus-visible:ring-0 px-0'
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          />
        ) : (
          <h1 className='text-2xl font-bold'>{title || 'Untitled'}</h1>
        )}

        {/* Tags */}
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <Tag className='h-4 w-4 text-muted-foreground' />
            <span className='text-sm text-muted-foreground'>Tags</span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant='secondary'
                className={cn(
                  'gap-1',
                  isEditing &&
                    'cursor-pointer hover:bg-destructive hover:text-destructive-foreground'
                )}
                onClick={isEditing ? () => handleRemoveTag(tag) : undefined}
              >
                {tag}
                {isEditing && <span className='text-xs'>×</span>}
              </Badge>
            ))}
            {isEditing && (
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Add tag...'
                className='h-6 w-20 text-xs border-dashed'
                size={newTag.length || 10}
              />
            )}
          </div>
        </div>

        {/* Content */}
        {isEditing ? (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Start writing your note...'
            className='min-h-96 resize-none border-none shadow-none focus-visible:ring-0 px-0'
          />
        ) : (
          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            {content ? (
              <pre className='whitespace-pre-wrap font-sans text-base leading-relaxed'>
                {content}
              </pre>
            ) : (
              <p className='text-muted-foreground italic'>
                No content yet. Click edit to start writing.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className='border-t p-4'>
        <div className='flex items-center justify-between text-sm text-muted-foreground'>
          <div className='flex items-center gap-4'>
            <span>
              Words:{' '}
              {content.split(/\s+/).filter((word) => word.length > 0).length}
            </span>
            <span>Characters: {content.length}</span>
          </div>
          {isEditing && (
            <div className='flex items-center gap-2'>
              <Eye className='h-4 w-4' />
              <span>Live preview coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
