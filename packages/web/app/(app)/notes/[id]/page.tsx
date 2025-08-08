import { notFound } from 'next/navigation'
import { NoteEditorRich } from '@/components/note-editor-rich'
import { ErrorBoundary } from '@/components/error-boundary'

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

  return (
    <ErrorBoundary>
      <NoteEditorRich noteId={id} />
    </ErrorBoundary>
  )
}
