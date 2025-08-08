'use client'

import dynamic from 'next/dynamic'

// Dynamic import of EnhancedPlateEditor with SSR disabled
// This ensures Plate.js only renders on the client side
export const EnhancedPlateEditorClient = dynamic(
  () =>
    import('./enhanced-plate-editor').then((mod) => mod.EnhancedPlateEditor),
  {
    ssr: false,
    loading: () => (
      <div className='min-h-[200px] flex items-center justify-center text-muted-foreground'>
        Loading editor...
      </div>
    ),
  }
)

export default EnhancedPlateEditorClient
