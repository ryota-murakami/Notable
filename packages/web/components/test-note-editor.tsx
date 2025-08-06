'use client'

/**
 * Simplified test-friendly note editor
 * Bypasses dynamic imports that cause issues in test environment
 */

import React, { useState, useCallback } from 'react'
import { Input } from '@/components/ui/input'
import { EnhancedAIToolbar } from '@/components/ai/enhanced-ai-toolbar'

interface TestNoteEditorProps {
  noteId: string
  initialTitle?: string
  initialContent?: any
  onTitleChange?: (title: string) => void
  onContentChange?: (content: any) => void
}

export function TestNoteEditor({
  noteId: _noteId,
  initialTitle = 'Untitled',
  initialContent: _initialContent,
  onTitleChange,
  onContentChange,
}: TestNoteEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    onTitleChange?.(newTitle)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    onContentChange?.(newContent)
  }

  // Handle AI content updates
  const handleAIContentUpdate = useCallback(
    (newContent: string) => {
      setContent(newContent)
      onContentChange?.(newContent)
    },
    [onContentChange]
  )

  // Convert content to text for AI processing (already text in this case)
  const getContentAsText = useCallback((): string => {
    return content
  }, [content])

  return (
    <div className='flex-1 flex flex-col' data-testid='note-editor'>
      {/* Title Input */}
      <div className='p-6 border-b'>
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder='Untitled'
          className='text-3xl font-bold border-none p-0 focus-visible:ring-0 bg-transparent'
          data-testid='note-title-input'
        />
      </div>

      {/* AI Toolbar Section */}
      <div className='border-b bg-background/30 px-6 py-2'>
        <EnhancedAIToolbar
          content={getContentAsText()}
          onContentUpdate={handleAIContentUpdate}
          className='justify-start'
        />
      </div>

      {/* Content Editor */}
      <div className='flex-1 p-6'>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder='Start writing...'
          className='w-full h-full min-h-[400px] border-none outline-none resize-none bg-transparent text-base leading-relaxed'
          data-testid='note-content-textarea'
        />
      </div>
    </div>
  )
}
