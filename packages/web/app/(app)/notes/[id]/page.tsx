import { notFound } from 'next/navigation'
import { NoteEditor } from '@/components/note-editor'

interface NotePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params

  if (!id) {
    notFound()
  }

  return <NoteEditor noteId={id} />
}
