import { EditorSkeleton, SidebarSkeleton } from '@/components/loading-states'

export default function Loading() {
  return (
    <div className='flex h-screen bg-background'>
      <SidebarSkeleton className='w-64 border-r' />
      <div className='flex-1'>
        <EditorSkeleton />
      </div>
    </div>
  )
}
