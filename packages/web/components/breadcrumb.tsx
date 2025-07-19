'use client'

import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { Note } from '@/types/note'

interface BreadcrumbProps {
  currentNote: Note
  notes: Note[]
  onNavigateToNote: (noteId: string) => void
  className?: string
}

export function Breadcrumb({
  currentNote,
  notes,
  onNavigateToNote,
  className,
}: BreadcrumbProps) {
  // Build breadcrumb trail by traversing up the parent hierarchy
  const buildBreadcrumbTrail = (note: Note): Note[] => {
    const trail: Note[] = []
    let current: Note | undefined = note

    while (current) {
      trail.unshift(current)
      if (current.parentId) {
        current = notes.find((n) => n.id === current.parentId!)
      } else {
        current = undefined
      }
    }

    return trail
  }

  const breadcrumbTrail = buildBreadcrumbTrail(currentNote)

  return (
    <nav
      className={cn(
        'flex items-center space-x-1 text-sm text-muted-foreground',
        className,
      )}
    >
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-2 text-muted-foreground hover:text-foreground"
        onClick={() =>
          onNavigateToNote(breadcrumbTrail[0]?.id || currentNote.id)
        }
      >
        <Home className="h-3 w-3 mr-1" />
        Home
      </Button>

      {breadcrumbTrail.length > 1 && (
        <>
          <ChevronRight className="h-3 w-3" />
          {breadcrumbTrail.slice(1).map((note, index) => (
            <div key={note.id} className="flex items-center space-x-1">
              {index > 0 && <ChevronRight className="h-3 w-3" />}
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'h-6 px-2 text-muted-foreground hover:text-foreground',
                  index === breadcrumbTrail.length - 2 &&
                    'text-foreground font-medium',
                )}
                onClick={() => onNavigateToNote(note.id)}
              >
                {note.title || 'Untitled'}
              </Button>
            </div>
          ))}
        </>
      )}
    </nav>
  )
}
