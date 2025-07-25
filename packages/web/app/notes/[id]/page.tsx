'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Shell } from '@/components/shell'

export default function NotePage() {
  const params = useParams()
  const router = useRouter()
  const noteId = params.id as string

  // Redirect invalid note IDs to dashboard
  useEffect(() => {
    if (!noteId || typeof noteId !== 'string') {
      router.replace('/')
      return
    }
  }, [noteId, router])

  if (!noteId) {
    return null
  }

  return <Shell initialNoteId={noteId} />
}
