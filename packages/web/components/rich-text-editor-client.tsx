'use client'

import dynamic from 'next/dynamic'
import { Spinner } from '@/components/ui/spinner'

// Dynamic import of RichTextEditor with SSR disabled
// This ensures the editor only renders on the client side
export const RichTextEditorClient = dynamic(
  () => import('./rich-text-editor').then((mod) => mod.RichTextEditor),
  {
    ssr: false,
    loading: () => (
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <Spinner size='3' />
          <p className='text-muted-foreground mt-2'>Loading editor...</p>
        </div>
      </div>
    ),
  }
)

export default RichTextEditorClient
