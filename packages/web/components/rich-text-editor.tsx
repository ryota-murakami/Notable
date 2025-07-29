'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { BasicEditor } from '@/components/editor/basic-editor'
import { TagInput } from '@/components/ui/tag-input'
import { TagList } from '@/components/ui/tag-badge'
import {
  useNoteTags,
  useAddTagsToNote,
  useRemoveTagFromNote,
} from '@/hooks/use-tags'
import type { Descendant } from 'slate'
import type { EnhancedTag } from '@/types/tags'

interface RichTextEditorProps {
  noteId: string
  initialTitle?: string
  initialContent?: Descendant[]
  onTitleChange?: (title: string) => void
  onContentChange?: (content: Descendant[]) => void
  className?: string
}

const defaultContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

export function RichTextEditor({
  noteId,
  initialTitle = '',
  initialContent = defaultContent,
  onTitleChange,
  onContentChange,
  className,
}: RichTextEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState<Descendant[]>(initialContent)

  // Tag management hooks
  const { data: tags = [], isLoading: tagsLoading } = useNoteTags(noteId)
  const addTagsToNote = useAddTagsToNote()
  const removeTagFromNote = useRemoveTagFromNote()

  // Update local state when props change
  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  // Handle title changes
  const handleTitleChange = useCallback(
    (newTitle: string) => {
      setTitle(newTitle)
      onTitleChange?.(newTitle)
    },
    [onTitleChange]
  )

  // Handle content changes
  const handleContentChange = useCallback(
    (newContent: Descendant[]) => {
      setContent(newContent)
      onContentChange?.(newContent)
    },
    [onContentChange]
  )

  // Handle tag changes
  const handleTagsChange = useCallback(
    (newTags: EnhancedTag[]) => {
      const currentTagIds = tags.map((tag) => tag.id)
      const newTagIds = newTags.map((tag) => tag.id)

      // Find tags to add
      const tagsToAdd = newTags.filter((tag) => !currentTagIds.includes(tag.id))

      // Find tags to remove
      const tagsToRemove = tags.filter((tag) => !newTagIds.includes(tag.id))

      // Add new tags
      if (tagsToAdd.length > 0) {
        addTagsToNote.mutate({
          noteId,
          tagIds: tagsToAdd.map((tag) => tag.id),
        })
      }

      // Remove old tags
      tagsToRemove.forEach((tag) => {
        removeTagFromNote.mutate({
          noteId,
          tagId: tag.id,
        })
      })
    },
    [noteId, tags, addTagsToNote, removeTagFromNote]
  )

  const handleTagRemove = useCallback(
    (tagToRemove: EnhancedTag) => {
      removeTagFromNote.mutate({
        noteId,
        tagId: tagToRemove.id,
      })
    },
    [noteId, removeTagFromNote]
  )

  return (
    <div className={`flex flex-col h-full ${className || ''}`}>
      {/* Title Editor */}
      <div className='border-b bg-background px-6 py-4'>
        <Input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder='Untitled Note'
          className='text-2xl font-bold border-none shadow-none focus-visible:ring-0 px-0 h-auto'
          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        />
      </div>

      {/* Tags Section */}
      <div className='border-b bg-background/50 px-6 py-3'>
        <div className='space-y-3'>
          {/* Current Tags Display */}
          {tags.length > 0 && (
            <div className='flex flex-wrap items-center gap-2'>
              <TagList
                tags={tags}
                removable={true}
                clickable={true}
                onTagRemove={handleTagRemove}
                className='flex-wrap'
              />
            </div>
          )}

          {/* Tag Input */}
          <div className='max-w-md'>
            <TagInput
              tags={tags}
              onTagsChange={handleTagsChange}
              placeholder={
                tags.length === 0
                  ? 'Add tags to organize your note...'
                  : 'Add more tags...'
              }
              maxTags={20}
              disabled={tagsLoading}
              allowCreate={true}
            />
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div className='flex-1 overflow-auto'>
        <BasicEditor
          key={noteId} // Force re-render when note changes
          initialValue={content}
          onChange={handleContentChange}
          placeholder='Start writing your note...'
          autoFocus
          className='border-0 h-full'
        />
      </div>
    </div>
  )
}
