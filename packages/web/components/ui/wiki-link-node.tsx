'use client'

import { PlateElement, type PlateElementProps } from 'platejs/react'
import { Link } from 'next/link'
import { cn } from '@/lib/utils'

export interface WikiLinkElementProps extends PlateElementProps {
  element: {
    type: 'wikiLink'
    noteId?: string
    noteTitle: string
    url: string
    children: Array<{ text: string }>
  }
}

export function WikiLinkElement({
  className,
  children,
  element,
  ...props
}: WikiLinkElementProps) {
  const { noteId, noteTitle, url } = element

  return (
    <PlateElement
      asChild
      className={cn(
        'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        'underline decoration-blue-600/30 hover:decoration-blue-600/60',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      <Link
        href={noteId ? `/notes/${noteId}` : url}
        data-wiki-link='true'
        data-note-id={noteId}
        title={`Link to: ${noteTitle}`}
      >
        {children}
      </Link>
    </PlateElement>
  )
}
