'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import for EnhancedPlateEditor to prevent SSR issues
const EnhancedPlateEditor = dynamic(
  () =>
    import('@/components/editor').then((mod) => ({
      default: mod.EnhancedPlateEditor,
    })),
  {
    ssr: false,
    loading: () => (
      <div className='h-full flex items-center justify-center'>
        <div className='animate-pulse bg-muted h-32 w-full rounded-md' />
      </div>
    ),
  }
)

// UI Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'

// Icons
import {
  Code,
  Download,
  FileText,
  Globe,
  Tag,
  Eye,
  EyeOff,
  Clock,
} from 'lucide-react'

import type { Note } from '@/types/note'
import { type ExportFormat, useExport } from '@/hooks/use-export'
import { VersionHistoryDialog } from '@/components/version-history-dialog'
// Remove PDF export for now
// import { PDFExportDialog } from '@/components/export/pdf-export-dialog'

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
  const [isHidden, setIsHidden] = useState(note.isHidden || false)
  const [showVersionHistory, setShowVersionHistory] = useState(false)
  const [editorValue, setEditorValue] = useState(() => {
    if (note.content) {
      try {
        return typeof note.content === 'string'
          ? JSON.parse(note.content)
          : note.content
      } catch {
        // If content is not valid JSON, treat it as plain text
        return [{ type: 'p', children: [{ text: note.content }] }]
      }
    }
    return initialValue
  })

  const titleInputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isTypingRef = useRef(false)

  // Export functionality
  const { exportNote, isExporting, exportProgress } = useExport()

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

  // Handle editor content changes
  const handleEditorChange = (value: any[]) => {
    setEditorValue(value)
    handleStartTyping()
  }

  // Save note when content changes
  useEffect(() => {
    const saveNote = () => {
      onUpdateNote({
        ...note,
        title,
        content: JSON.stringify(editorValue),
        tags,
        isHidden,
        updatedAt: new Date().toISOString(),
      })
    }

    const timeoutId = setTimeout(saveNote, 1000)
    return () => {
      clearTimeout(timeoutId)
      // Save immediately on unmount to prevent data loss
      saveNote()
    }
  }, [editorValue, title, tags, isHidden, note, onUpdateNote])

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

  // Update editor value when note changes
  useEffect(() => {
    if (note.content) {
      try {
        const newValue =
          typeof note.content === 'string'
            ? JSON.parse(note.content)
            : note.content
        setEditorValue(newValue)
      } catch {
        // If content is not valid JSON, treat it as plain text
        setEditorValue([{ type: 'p', children: [{ text: note.content }] }])
      }
    } else {
      setEditorValue(initialValue)
    }
    setTitle(note.title)
    setTags(note.tags || [])
    setIsHidden(note.isHidden || false)
  }, [note.id]) // Only update when note ID changes

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

  const handleExport = async (format: ExportFormat, options: any = {}) => {
    try {
      await exportNote(note, format, {
        includeTitle: true,
        includeMetadata: true,
        includeStyles: true,
        ...options,
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
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsHidden(!isHidden)}
                title={
                  isHidden ? 'This note is hidden' : 'This note is visible'
                }
              >
                {isHidden ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </Button>

              <Button
                variant='ghost'
                size='sm'
                onClick={() => setShowVersionHistory(true)}
                title='View version history'
              >
                <Clock className='h-4 w-4' />
              </Button>

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

        <div className='flex-1 min-h-0 p-4'>
          <EnhancedPlateEditor
            value={editorValue}
            onChange={handleEditorChange}
            placeholder='Start writing your note...'
            className='h-full'
          />
        </div>
      </div>

      <VersionHistoryDialog
        isOpen={showVersionHistory}
        onClose={() => setShowVersionHistory(false)}
        noteId={note.id}
        currentTitle={title}
        onRestore={() => {
          // Refresh the editor after restoration
          window.location.reload()
        }}
      />
    </div>
  )
}

export { PlateEditorComponent as PlateEditor }
