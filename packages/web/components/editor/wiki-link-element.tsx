'use client'

import { useRouter } from 'next/navigation'
import { createNoteFromWikiLink } from '@/lib/note-links'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

interface WikiLinkElementProps {
  attributes: any
  children: React.ReactNode
  element: {
    type: 'wiki-link'
    noteTitle: string
    url: string
  }
}

export function WikiLinkElement({
  attributes,
  children,
  element,
}: WikiLinkElementProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {
      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth')
        return
      }

      // Try to find existing note with this title
      const { data: existingNote } = await supabase
        .from('notes')
        .select('id')
        .eq('title', element.noteTitle)
        .eq('user_id', user.id)
        .single()

      if (existingNote) {
        // Navigate to existing note
        router.push(`/notes/${existingNote.id}`)
      } else {
        // Create new note and navigate to it
        const noteId = await createNoteFromWikiLink(element.noteTitle, user.id)
        if (noteId) {
          router.push(`/notes/${noteId}`)
        }
      }
    } catch (error) {
      console.error('Error handling wiki link click:', error)
    }
  }

  return (
    <a
      {...attributes}
      href={element.url}
      onClick={handleClick}
      data-wiki-link='true'
      className={cn(
        'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
        'underline decoration-dotted underline-offset-2',
        'cursor-pointer'
      )}
    >
      {children}
    </a>
  )
}
