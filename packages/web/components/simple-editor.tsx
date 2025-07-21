'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  Link as LinkIcon,
  Tag,
  Eye,
  Edit,
} from 'lucide-react'
import type { Note } from '@/types/note'

interface SimpleEditorProps {
  note: Note
  onChange: (note: Note) => void
  viewMode?: boolean
  onToggleViewMode?: () => void
}

export function SimpleEditor({
  note,
  onChange,
  viewMode = false,
  onToggleViewMode,
}: SimpleEditorProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(
    typeof note.content === 'string'
      ? note.content
      : JSON.stringify(note.content),
  )
  const [tags, setTags] = useState<string[]>(note.tags || [])
  const [newTag, setNewTag] = useState('')
  const [showTags, setShowTags] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setTitle(note.title)
    setContent(
      typeof note.content === 'string'
        ? note.content
        : JSON.stringify(note.content),
    )
    setTags(note.tags || [])
  }, [note.id, note.title, note.content, note.tags])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    onChange({
      ...note,
      title: newTitle,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    onChange({
      ...note,
      content: newContent,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleTagAdd = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()]
      setTags(updatedTags)
      setNewTag('')
      onChange({
        ...note,
        tags: updatedTags,
        updatedAt: new Date().toISOString(),
      })
    }
  }

  const handleTagRemove = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(updatedTags)
    onChange({
      ...note,
      tags: updatedTags,
      updatedAt: new Date().toISOString(),
    })
  }

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    const newContent =
      content.substring(0, start) +
      before +
      selectedText +
      after +
      content.substring(end)

    setContent(newContent)
    onChange({
      ...note,
      content: newContent,
      updatedAt: new Date().toISOString(),
    })

    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length,
      )
    }, 0)
  }

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
      .replace(/\n/g, '<br>')
  }

  if (viewMode) {
    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="border-b p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center gap-2 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <Button onClick={onToggleViewMode} variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: formatContent(content),
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="border-b p-4">
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="Untitled"
          className="text-xl font-bold border-none px-0 focus-visible:ring-0 mb-2"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('**', '**')}
              title="Bold"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('*', '*')}
              title="Italic"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('# ', '')}
              title="Heading 1"
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('## ', '')}
              title="Heading 2"
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('### ', '')}
              title="Heading 3"
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('- ', '')}
              title="Bullet List"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('1. ', '')}
              title="Numbered List"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('> ', '')}
              title="Quote"
            >
              <Quote className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('`', '`')}
              title="Code"
            >
              <Code className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = prompt('Enter URL:')
                if (url) {
                  insertText('[', `](${url})`)
                }
              }}
              title="Link"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            {onToggleViewMode && (
              <Button onClick={onToggleViewMode} variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
            )}

            <Popover open={showTags} onOpenChange={setShowTags}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Tag className="h-4 w-4" />
                  <span>Tags</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Manage Tags</h4>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyPress={(e) => e.key === 'Enter' && handleTagAdd()}
                    />
                    <Button onClick={handleTagAdd} size="sm">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => handleTagRemove(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <Textarea
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing..."
          className="w-full h-full resize-none border-none focus-visible:ring-0 font-mono text-sm"
        />
      </div>
    </div>
  )
}
