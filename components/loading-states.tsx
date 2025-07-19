'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export function NoteListSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-2 p-2">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-4 rounded-sm" />
        </div>
      ))}
    </div>
  )
}

export function EditorSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4 p-4', className)}>
      {/* Title skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <div className="flex space-x-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>

      {/* Toolbar skeleton */}
      <div className="border-b pb-4">
        <div className="flex space-x-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8" />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn(
              'h-4',
              i === 2 ? 'w-3/4' : i === 5 ? 'w-1/2' : 'w-full',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export function SearchSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="space-y-2 p-3 border rounded-md">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      ))}
    </div>
  )
}

export function BreadcrumbSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Skeleton className="h-6 w-12" />
      <Skeleton className="h-3 w-3" />
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-3 w-3" />
      <Skeleton className="h-6 w-16" />
    </div>
  )
}

export function SidebarSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4 p-4', className)}>
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-8 w-full" />
      </div>

      {/* New note button skeleton */}
      <Skeleton className="h-10 w-full" />

      {/* Navigation skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>

      {/* Notes list skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <NoteListSkeleton />
      </div>
    </div>
  )
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      <div
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: '0.2s' }}
      ></div>
    </div>
  )
}
