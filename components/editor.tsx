"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Heading from "@tiptap/extension-heading"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"
import ListItem from "@tiptap/extension-list-item"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  CheckSquare,
  LinkIcon,
  Undo,
  Redo,
  Tag,
  Download,
  ImageIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TagInput } from "@/components/tag-input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ExportDialog } from "@/components/export-dialog"
import { ImageUpload } from "@/components/image-upload"
import type { Note } from "@/types/note"

interface EditorProps {
  note: Note
  onChange: (note: Note) => void
}

export function Editor({ note, onChange }: EditorProps) {
  const [title, setTitle] = useState(note.title)
  const [showTags, setShowTags] = useState(false)
  const [showExportDialog, setShowExportDialog] = useState(false)
  const [showImageDialog, setShowImageDialog] = useState(false)
  const titleInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: note.content,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML()
      onChange({
        ...note,
        content,
        updatedAt: new Date().toISOString(),
      })
    },
  })

  useEffect(() => {
    if (editor && note.content !== editor.getHTML()) {
      editor.commands.setContent(note.content)
    }
  }, [editor, note.id, note.content])

  useEffect(() => {
    setTitle(note.title)
  }, [note.id, note.title])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    onChange({
      ...note,
      title: newTitle,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      editor?.commands.focus()
    }
  }

  const handleTagsChange = (tags: string[]) => {
    onChange({
      ...note,
      tags,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleImageInsert = (url: string, alt: string) => {
    editor?.chain().focus().setImage({ src: url, alt }).run()
  }

  if (!editor) {
    return null
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="border-b p-4">
        <Input
          ref={titleInputRef}
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          placeholder="Untitled"
          className="text-xl font-bold border-none px-0 focus-visible:ring-0"
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "bg-accent" : ""}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "bg-accent" : ""}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive("heading", { level: 1 }) ? "bg-accent" : ""}
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive("heading", { level: 2 }) ? "bg-accent" : ""}
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive("heading", { level: 3 }) ? "bg-accent" : ""}
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "bg-accent" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "bg-accent" : ""}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "bg-accent" : ""}
            >
              <CheckSquare className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt("URL")
                if (url) {
                  editor.chain().focus().setLink({ href: url }).run()
                }
              }}
              className={editor.isActive("link") ? "bg-accent" : ""}
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowImageDialog(true)}>
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowExportDialog(true)}>
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>

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
                  <TagInput tags={note.tags} onChange={handleTagsChange} />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <EditorContent editor={editor} className="prose prose-sm max-w-none h-full" />
      </div>

      <ExportDialog isOpen={showExportDialog} onClose={() => setShowExportDialog(false)} note={note} />

      <ImageUpload isOpen={showImageDialog} onClose={() => setShowImageDialog(false)} onInsert={handleImageInsert} />
    </div>
  )
}
