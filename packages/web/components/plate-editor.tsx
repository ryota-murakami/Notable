'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Plate, usePlateEditor } from 'platejs/react'

// Import the EditorKit
import { EditorKit } from '@/components/editor/editor-kit'

// UI Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { FixedToolbar } from '@/components/ui/fixed-toolbar'
import { FixedToolbarButtons } from '@/components/ui/fixed-toolbar-buttons'

// Icons
import { Tag, Download, FileText, Globe, Code, FileImage } from 'lucide-react'

import type { Note } from '@/types/note'
import { useExport } from '@/hooks/use-export'

export interface PlateEditorProps {
  note: Note
  onUpdateNote: (note: Note) => void
  onDeleteNote: (noteId: string) => void
  onExportNote: (note: Note, format: string) => void
  onStartTyping?: () => void
  onStopTyping?: () => void
}

const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Start writing your note...' }],
  },
]

export function PlateEditorComponent({
  note,
  onUpdateNote,
  onDeleteNote: _onDeleteNote,
  onExportNote: _onExportNote,
  onStartTyping,
  onStopTyping,
}: PlateEditorProps) {
  const [title, setTitle] = useState(note.title)
  const [tags, setTags] = useState<string[]>(note.tags || [])
  const [newTag, setNewTag] = useState('')
  const [showTags, setShowTags] = useState(false)
  const titleInputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isTypingRef = useRef(false)

  // Export functionality
  const { exportNote, isExporting, exportProgress } = useExport()

  const editor = usePlateEditor({
    plugins: EditorKit,
    value: note.content
      ? typeof note.content === 'string'
        ? (() => {
            try {
              return JSON.parse(note.content)
            } catch {
              // If content is not valid JSON, treat it as plain text
              return [{ type: 'p', children: [{ text: note.content }] }]
            }
          })()
        : note.content
      : initialValue,
  })

  // Handle typing indicators
  const handleStartTyping = () => {
    if (!isTypingRef.current && onStartTyping) {
      isTypingRef.current = true
      onStartTyping()
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      if (isTypingRef.current && onStopTyping) {
        isTypingRef.current = false
        onStopTyping()
      }
    }, 2000) // Stop typing after 2 seconds of inactivity
  }

  // Save note when content changes
  useEffect(() => {
    if (editor) {
      const saveNote = () => {
        const content = editor.children
        onUpdateNote({
          ...note,
          title,
          content: JSON.stringify(content),
          tags,
          updatedAt: new Date().toISOString(),
        })
      }

      const timeoutId = setTimeout(saveNote, 1000)
      return () => clearTimeout(timeoutId)
    }
    return undefined
  }, [editor, editor?.children, title, tags, note, onUpdateNote])

  // Save note when title changes
  useEffect(() => {
    if (title !== note.title) {
      const timeoutId = setTimeout(() => {
        onUpdateNote({
          ...note,
          title,
          updatedAt: new Date().toISOString(),
        })
      }, 500)
      return () => clearTimeout(timeoutId)
    }
    return undefined
  }, [title, note, onUpdateNote])

  // Cleanup typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()]
      setTags(updatedTags)
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(updatedTags)
  }

  const handleExport = async (
    format: 'markdown' | 'html' | 'pdf' | 'react'
  ) => {
    try {
      await exportNote(note, format, {
        includeTitle: true,
        includeMetadata: true,
        includeStyles: true,
      })
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='flex-1 flex flex-col min-h-0'>
        <div className='border-b border-border p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <Input
            ref={titleInputRef}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              handleStartTyping()
            }}
            placeholder='Untitled'
            className='text-xl font-bold border-none px-0 focus-visible:ring-0 mb-2'
          />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant='secondary'
                  className='cursor-pointer hover:bg-destructive/10'
                  onClick={() => handleRemoveTag(tag)}
                >
                  {tag} ×
                </Badge>
              ))}
            </div>

            <div className='flex items-center space-x-2'>
              <Popover open={showTags} onOpenChange={setShowTags}>
                <PopoverTrigger asChild>
                  <Button variant='ghost' size='sm'>
                    <Tag className='h-4 w-4' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='space-y-2'>
                    <div className='flex space-x-2'>
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder='Add a tag...'
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddTag()
                          }
                        }}
                      />
                      <Button onClick={handleAddTag} size='sm'>
                        Add
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant='ghost' size='sm' disabled={isExporting}>
                    <Download className='h-4 w-4' />
                    {isExporting && exportProgress > 0 && (
                      <span className='ml-1 text-xs'>{exportProgress}%</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-56'>
                  <div className='space-y-2'>
                    <Button
                      variant='ghost'
                      className='w-full justify-start'
                      onClick={() => handleExport('markdown')}
                      disabled={isExporting}
                    >
                      <FileText className='h-4 w-4 mr-2' />
                      Export as Markdown
                    </Button>
                    <Button
                      variant='ghost'
                      className='w-full justify-start'
                      onClick={() => handleExport('html')}
                      disabled={isExporting}
                    >
                      <Globe className='h-4 w-4 mr-2' />
                      Export as HTML
                    </Button>
                    <Button
                      variant='ghost'
                      className='w-full justify-start'
                      onClick={() => handleExport('react')}
                      disabled={isExporting}
                    >
                      <Code className='h-4 w-4 mr-2' />
                      Export as React
                    </Button>
                    <Button
                      variant='ghost'
                      className='w-full justify-start'
                      onClick={() => handleExport('pdf')}
                      disabled={isExporting}
                    >
                      <FileImage className='h-4 w-4 mr-2' />
                      Export as PDF
                    </Button>
                  </div>
                  {isExporting && (
                    <div className='mt-3 pt-2 border-t'>
                      <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                        <div className='flex-1 bg-secondary rounded-full h-1.5'>
                          <div
                            className='bg-primary h-1.5 rounded-full transition-all'
                            style={{ width: `${exportProgress}%` }}
                          />
                        </div>
                        <span>{exportProgress}%</span>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className='flex-1 min-h-0'>
          <Plate editor={editor}>
            <EditorContainer variant='default'>
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>
              <Editor
                variant='default'
                onKeyDown={handleStartTyping}
                onChange={handleStartTyping}
                onPaste={handleStartTyping}
                onInput={handleStartTyping}
              />
            </EditorContainer>
          </Plate>
        </div>
      </div>
    </div>
  )
}

export { PlateEditorComponent as PlateEditor }
