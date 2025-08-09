'use client'

import React from 'react'
import Link from 'next/link'
import { useNoteLinks } from '@/hooks/use-note-links'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface BacklinksPanelProps {
  noteId: string
  className?: string
}

const BacklinksPanel = React.memo(({ noteId, className }: BacklinksPanelProps) => {
  const { data: links, isLoading, error } = useNoteLinks(noteId)

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className='text-sm'>Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-sm text-muted-foreground'>Loading...</div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className='text-sm'>Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-sm text-destructive'>Failed to load links</div>
        </CardContent>
      </Card>
    )
  }

  const { outgoingLinks = [], backlinks = [] } = links || {}
  const hasLinks = outgoingLinks.length > 0 || backlinks.length > 0

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className='text-sm flex items-center gap-2'>
          Links
          <Badge variant='secondary' className='text-xs'>
            {outgoingLinks.length + backlinks.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {!hasLinks && (
          <div className='text-sm text-muted-foreground'>
            No links found. Create links by typing [[Note Title]] in your note.
          </div>
        )}

        {outgoingLinks.length > 0 && (
          <div>
            <h4 className='text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1'>
              <ArrowRight className='h-3 w-3' />
              Outgoing ({outgoingLinks.length})
            </h4>
            <div className='space-y-1'>
              {outgoingLinks.map((link: any) => (
                <Link
                  key={link.id}
                  href={`/notes/${link.to_note_id}`}
                  className='block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline'
                >
                  {(link as any).to_note?.title || 'Untitled Note'}
                </Link>
              ))}
            </div>
          </div>
        )}

        {backlinks.length > 0 && (
          <div>
            <h4 className='text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1'>
              <ArrowLeft className='h-3 w-3' />
              Backlinks ({backlinks.length})
            </h4>
            <div className='space-y-1'>
              {backlinks.map((link: any) => (
                <Link
                  key={link.id}
                  href={`/notes/${link.from_note_id}`}
                  className='block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline'
                >
                  {(link as any).from_note?.title || 'Untitled Note'}
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
})

BacklinksPanel.displayName = 'BacklinksPanel'

export { BacklinksPanel }
