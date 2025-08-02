import { notFound } from 'next/navigation'
import { NoteEditorRich } from '@/components/note-editor-rich'

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

  return <NoteEditorRich noteId={id} />
}
