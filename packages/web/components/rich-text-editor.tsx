'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BasicEditor } from '@/components/editor/basic-editor'
import { TagInput } from '@/components/ui/tag-input'
import { TagList } from '@/components/ui/tag-badge'
import { TemplatePicker } from '@/components/templates/template-picker'
import { TemplateVariableForm } from '@/components/templates/template-variable-form'
import { TemplateEngine } from '@/lib/templates/engine'
import { markdownToSlate } from '@/lib/slate/markdown-to-slate'
import {
  useAddTagsToNote,
  useNoteTags,
  useRemoveTagFromNote,
} from '@/hooks/use-tags'
import type { Descendant } from 'slate'
import type { EnhancedTag } from '@/types/tags'
import type { Template, TemplateVariable } from '@/types/templates'

interface RichTextEditorProps {
  noteId: string
  initialTitle?: string
  initialContent?: Descendant[]
  onTitleChange?: (title: string) => void
  onContentChange?: (content: Descendant[]) => void
  onTemplateUsed?: (templateId: string, noteTitle: string) => void
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
  onTemplateUsed,
  className,
}: RichTextEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState<Descendant[]>(initialContent)

  // Template state
  const [isTemplatePickerOpen, setIsTemplatePickerOpen] = useState(false)
  const [isVariableFormOpen, setIsVariableFormOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  )
  const [isProcessingTemplate, setIsProcessingTemplate] = useState(false)

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

  // Handle template selection
  const handleTemplateSelect = useCallback((template: Template) => {
    setSelectedTemplate(template)
    setIsTemplatePickerOpen(false)

    // If template has no variables, process immediately
    if (!template.variables || template.variables.length === 0) {
      handleTemplateSubmit(template.name, {})
    } else {
      setIsVariableFormOpen(true)
    }
  }, [])

  // Handle template variable form submission
  const handleTemplateSubmit = useCallback(
    async (noteTitle: string, variables: Record<string, any>) => {
      if (!selectedTemplate) return

      setIsProcessingTemplate(true)
      try {
        // Create template context with system variables
        const context = {
          ...variables,
          user: 'User', // This should come from auth context
          userEmail: 'user@example.com', // This should come from auth context
        }

        // Get template content - handle different content formats
        let templateContent = ''
        if (typeof selectedTemplate.content === 'string') {
          templateContent = selectedTemplate.content
        } else if (
          selectedTemplate.content &&
          typeof selectedTemplate.content === 'object'
        ) {
          // Handle JSON content structure from database
          templateContent =
            (selectedTemplate.content as any)?.content ||
            selectedTemplate.description ||
            ''
        } else {
          templateContent = selectedTemplate.description || ''
        }

        // Process the template content
        const processedContent = TemplateEngine.processTemplate({
          content: templateContent,
          variables: selectedTemplate.variables || [],
          context,
        })

        // Convert markdown to Slate format
        const slateContent = markdownToSlate(processedContent)

        // Update title and content
        setTitle(noteTitle)
        setContent(slateContent)

        // Notify parent components
        onTitleChange?.(noteTitle)
        onContentChange?.(slateContent)
        onTemplateUsed?.(selectedTemplate.id, noteTitle)

        // Optionally track template usage analytics (without creating new note)
        try {
          // This is for analytics only - we don't create a new note
          await fetch(`/api/templates/${selectedTemplate.id}/analytics`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'template_applied',
              noteId,
              variables,
            }),
          })
        } catch (analyticsError) {
          // Analytics failure shouldn't block the template usage
          console.warn('Template analytics failed:', analyticsError)
        }
      } catch (error) {
        console.error('Error processing template:', error)
      } finally {
        setIsProcessingTemplate(false)
        setIsVariableFormOpen(false)
        setSelectedTemplate(null)
      }
    },
    [selectedTemplate, noteId, onTitleChange, onContentChange, onTemplateUsed]
  )

  // Handle creating blank note
  const handleCreateBlank = useCallback(() => {
    setTitle('')
    setContent(defaultContent)
    onTitleChange?.('')
    onContentChange?.(defaultContent)
  }, [onTitleChange, onContentChange])

  return (
    <div
      className={`flex flex-col h-full ${className || ''}`}
      data-testid='note-editor'
    >
      {/* Header with Title and Template Button */}
      <div className='border-b bg-background px-6 py-4'>
        <div className='flex items-center justify-between gap-4'>
          <Input
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder='Untitled Note'
            className='text-2xl font-bold border-none shadow-none focus-visible:ring-0 px-0 h-auto flex-1'
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            data-testid='note-title'
          />
          <Button
            variant='outline'
            size='sm'
            onClick={() => setIsTemplatePickerOpen(true)}
            className='flex items-center gap-2 shrink-0'
            disabled={isProcessingTemplate}
          >
            <Sparkles className='h-4 w-4' />
            {isProcessingTemplate ? 'Processing...' : 'New from Template'}
          </Button>
        </div>
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
          data-testid='rich-text-editor'
        />
      </div>

      {/* Template Picker Modal */}
      <TemplatePicker
        open={isTemplatePickerOpen}
        onOpenChange={setIsTemplatePickerOpen}
        onTemplateSelect={handleTemplateSelect}
        onCreateBlank={handleCreateBlank}
      />

      {/* Template Variable Form Modal */}
      <TemplateVariableForm
        open={isVariableFormOpen}
        onOpenChange={setIsVariableFormOpen}
        template={selectedTemplate}
        onSubmit={handleTemplateSubmit}
      />
    </div>
  )
}
