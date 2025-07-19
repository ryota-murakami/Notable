'use client'

import type { Note } from '@/types/note'
import { formatDate } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface NoteCardProps {
  note: Note
  onClick: () => void
}

export function NoteCard({ note, onClick }: NoteCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{note.title || 'Untitled'}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Last updated: {formatDate(note.updatedAt)}
        </div>
        <div
          className="mt-2 text-sm line-clamp-3"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </CardContent>
    </Card>
  )
}
