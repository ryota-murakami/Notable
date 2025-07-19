'use client'

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import type { PlateEditorProps } from '@/components/plate-editor'

// Loading component shown while the editor loads
const EditorSkeleton = () => (
  <div className="w-full space-y-4 p-4">
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-5/6" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-2/3" />
  </div>
)

// Lazy load the Plate editor component
export const LazyPlateEditor = dynamic<PlateEditorProps>(
  () =>
    import('@/components/plate-editor').then((mod) => ({
      default: mod.PlateEditor,
    })),
  {
    loading: () => <EditorSkeleton />,
    ssr: false, // Disable SSR for editor to avoid hydration issues
  },
)
