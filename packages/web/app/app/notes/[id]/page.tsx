import { notFound } from 'next/navigation'
import { NoteEditor } from '@/components/note-editor'

interface NotePageProps {
  params: {
    id: string
  }
}

export default function NotePage({ params }: NotePageProps) {
  const { id } = params

  if (!id) {
    notFound()
  }

  return <NoteEditor noteId={id} />
}
