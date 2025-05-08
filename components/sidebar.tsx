"use client"

import { useState } from "react"
import { Search, Plus, Home, Inbox, Settings, Trash, ChevronDown, ChevronRight, File } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Note } from "@/types/note"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps {
  notes: Note[]
  activeNoteId: string
  onSelectNote: (id: string) => void
  onCreateNote: (parentId: string | null) => Note
  onDeleteNote: (id: string) => void
  onOpenSearch: () => void
}

export function Sidebar({ notes, activeNoteId, onSelectNote, onCreateNote, onDeleteNote, onOpenSearch }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({})

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredNotes = searchQuery
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : notes

  const rootNotes = filteredNotes.filter((note) => !note.parentId)

  const renderNoteTree = (parentId: string | null = null, depth = 0) => {
    const children = filteredNotes.filter((note) => note.parentId === parentId)

    if (children.length === 0) return null

    return (
      <ul className={cn("space-y-1", depth > 0 && "ml-4")}>
        {children.map((note) => {
          const hasChildren = filteredNotes.some((n) => n.parentId === note.id)
          const isExpanded = expandedFolders[note.id]

          return (
            <li key={note.id}>
              <div
                className={cn(
                  "flex items-center py-1 px-2 rounded-md text-sm group",
                  activeNoteId === note.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                )}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 mr-1 p-0"
                  onClick={() => hasChildren && toggleFolder(note.id)}
                >
                  {hasChildren ? (
                    isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )
                  ) : (
                    <File className="h-4 w-4" />
                  )}
                </Button>
                <span className="flex-1 truncate cursor-pointer" onClick={() => onSelectNote(note.id)}>
                  {note.title || "Untitled"}
                </span>
                <div className="flex opacity-0 group-hover:opacity-100">
                  <Button variant="ghost" size="icon" className="h-5 w-5 p-0" onClick={() => onCreateNote(note.id)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              {hasChildren && isExpanded && renderNoteTree(note.id, depth + 1)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="w-64 border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <span className="font-semibold text-lg">Notable</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={onOpenSearch}>
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center">
                  Search <kbd className="ml-2 px-1.5 py-0.5 text-xs border rounded-md bg-muted">Ctrl+K</kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filter"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="p-2">
        <Button variant="outline" className="w-full justify-start" onClick={() => onCreateNote(null)}>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>
      <nav className="flex-1 overflow-auto">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="mr-2 h-4 w-4" />
              Inbox
            </Button>
          </div>
          <div className="mt-6">
            <h2 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">Notes</h2>
            <ScrollArea className="h-[calc(100vh-240px)]">{renderNoteTree(null)}</ScrollArea>
          </div>
        </div>
      </nav>
      <div className="p-2 border-t">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Trash className="mr-2 h-4 w-4" />
            Trash
          </Button>
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
