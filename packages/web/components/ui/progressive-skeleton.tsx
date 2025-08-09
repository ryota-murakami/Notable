/**
 * Progressive Skeleton Components for Enhanced Loading States
 * Provides smooth loading experiences with intelligent skeleton states
 */

import React from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

interface ProgressiveSkeletonProps {
  className?: string
  children?: React.ReactNode
  isLoading?: boolean
  variant?: 'pulse' | 'shimmer' | 'wave'
  delay?: number
}

/**
 * Base progressive skeleton with enhanced animations
 */
export const ProgressiveSkeleton = React.memo<ProgressiveSkeletonProps>(
  ({
    className,
    children,
    isLoading = true,
    variant = 'shimmer',
    delay = 0,
  }) => {
    const [showSkeleton, setShowSkeleton] = React.useState(delay === 0)

    React.useEffect(() => {
      if (delay > 0) {
        const timer = setTimeout(() => setShowSkeleton(true), delay)
        return () => clearTimeout(timer)
      }
    }, [delay])

    if (!isLoading) {
      return <>{children}</>
    }

    if (!showSkeleton) {
      return null
    }

    const skeletonClass = cn(
      'relative overflow-hidden',
      {
        'animate-pulse bg-gray-200 dark:bg-gray-700': variant === 'pulse',
        'bg-gray-200 dark:bg-gray-700 bg-shimmer dark:bg-shimmer-dark animate-shimmer':
          variant === 'shimmer',
        'bg-gray-200 dark:bg-gray-700 animate-wave': variant === 'wave',
      },
      className
    )

    return <Skeleton className={skeletonClass} />
  }
)

ProgressiveSkeleton.displayName = 'ProgressiveSkeleton'

/**
 * Note list skeleton with intelligent loading states
 */
export const NoteListSkeleton = React.memo<{
  itemCount?: number
  showSearch?: boolean
  className?: string
}>(({ itemCount = 5, showSearch = true, className }) => {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Search skeleton */}
      {showSearch && (
        <div className='mb-6'>
          <ProgressiveSkeleton className='h-10 w-full rounded-md' delay={0} />
        </div>
      )}

      {/* Note items skeleton */}
      <div className='space-y-3'>
        {Array.from({ length: itemCount }, (_, index) => (
          <NoteCardSkeleton
            key={index}
            delay={index * 100}
            variant={index % 2 === 0 ? 'shimmer' : 'pulse'}
          />
        ))}
      </div>

      {/* Load more skeleton */}
      <div className='pt-4'>
        <ProgressiveSkeleton
          className='h-8 w-24 rounded-md mx-auto'
          delay={itemCount * 100 + 200}
        />
      </div>
    </div>
  )
})

NoteListSkeleton.displayName = 'NoteListSkeleton'

/**
 * Individual note card skeleton
 */
export const NoteCardSkeleton = React.memo<{
  delay?: number
  variant?: 'pulse' | 'shimmer' | 'wave'
  showTags?: boolean
  className?: string
}>(({ delay = 0, variant = 'shimmer', showTags = true, className }) => {
  return (
    <div
      className={cn(
        'p-4 border border-gray-200 rounded-lg space-y-3',
        className
      )}
    >
      {/* Title */}
      <ProgressiveSkeleton
        className='h-5 w-3/4 rounded'
        variant={variant}
        delay={delay}
      />

      {/* Content lines */}
      <div className='space-y-2'>
        <ProgressiveSkeleton
          className='h-4 w-full rounded'
          variant={variant}
          delay={delay + 50}
        />
        <ProgressiveSkeleton
          className='h-4 w-5/6 rounded'
          variant={variant}
          delay={delay + 100}
        />
        <ProgressiveSkeleton
          className='h-4 w-2/3 rounded'
          variant={variant}
          delay={delay + 150}
        />
      </div>

      {/* Tags and metadata */}
      <div className='flex justify-between items-center pt-2'>
        <div className='flex gap-2'>
          {showTags && (
            <>
              <ProgressiveSkeleton
                className='h-5 w-16 rounded-full'
                variant={variant}
                delay={delay + 200}
              />
              <ProgressiveSkeleton
                className='h-5 w-12 rounded-full'
                variant={variant}
                delay={delay + 250}
              />
            </>
          )}
        </div>
        <ProgressiveSkeleton
          className='h-4 w-20 rounded'
          variant={variant}
          delay={delay + 300}
        />
      </div>
    </div>
  )
})

NoteCardSkeleton.displayName = 'NoteCardSkeleton'

/**
 * Editor skeleton for large document loading
 */
export const EditorSkeleton = React.memo<{
  className?: string
  showToolbar?: boolean
}>(({ className, showToolbar = true }) => {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Toolbar skeleton */}
      {showToolbar && (
        <div className='border-b border-gray-200 pb-4'>
          <div className='flex gap-2'>
            {Array.from({ length: 8 }, (_, index) => (
              <ProgressiveSkeleton
                key={index}
                className='h-8 w-8 rounded'
                delay={index * 50}
                variant='pulse'
              />
            ))}
          </div>
        </div>
      )}

      {/* Content area */}
      <div className='space-y-4 min-h-[400px]'>
        {/* Title area */}
        <ProgressiveSkeleton className='h-8 w-2/3 rounded' delay={200} />

        {/* Content blocks */}
        <div className='space-y-3'>
          {Array.from({ length: 12 }, (_, index) => {
            const widths = ['w-full', 'w-5/6', 'w-4/5', 'w-full', 'w-3/4']
            const width = widths[index % widths.length]

            return (
              <ProgressiveSkeleton
                key={index}
                className={cn('h-4 rounded', width)}
                delay={300 + index * 100}
                variant={index % 3 === 0 ? 'shimmer' : 'pulse'}
              />
            )
          })}
        </div>

        {/* Code block simulation */}
        <div className='bg-gray-100 p-4 rounded space-y-2 mt-6'>
          {Array.from({ length: 4 }, (_, index) => (
            <ProgressiveSkeleton
              key={index}
              className='h-4 w-full rounded bg-gray-200'
              delay={800 + index * 50}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

EditorSkeleton.displayName = 'EditorSkeleton'

/**
 * Search results skeleton with staggered animation
 */
export const SearchResultsSkeleton = React.memo<{
  resultCount?: number
  className?: string
}>(({ resultCount = 8, className }) => {
  return (
    <div className={cn('space-y-2', className)}>
      {/* Search stats */}
      <div className='pb-2 border-b border-gray-100'>
        <ProgressiveSkeleton className='h-4 w-32 rounded' delay={0} />
      </div>

      {/* Results */}
      <div className='space-y-3'>
        {Array.from({ length: resultCount }, (_, index) => (
          <div key={index} className='p-3 hover:bg-gray-50 rounded'>
            <ProgressiveSkeleton
              className='h-5 w-4/5 rounded mb-2'
              delay={index * 80}
              variant='shimmer'
            />
            <ProgressiveSkeleton
              className='h-4 w-full rounded mb-1'
              delay={index * 80 + 40}
            />
            <ProgressiveSkeleton
              className='h-4 w-3/4 rounded'
              delay={index * 80 + 80}
            />
          </div>
        ))}
      </div>
    </div>
  )
})

SearchResultsSkeleton.displayName = 'SearchResultsSkeleton'

/**
 * Smart skeleton that adapts to content
 */
export const SmartSkeleton = React.memo<{
  contentType?: 'note' | 'list' | 'editor' | 'search'
  itemCount?: number
  className?: string
  isLoading?: boolean
  children?: React.ReactNode
}>(
  ({
    contentType = 'note',
    itemCount = 5,
    className,
    isLoading = true,
    children,
  }) => {
    if (!isLoading && children) {
      return <>{children}</>
    }

    switch (contentType) {
      case 'list':
        return <NoteListSkeleton itemCount={itemCount} className={className} />

      case 'editor':
        return <EditorSkeleton className={className} />

      case 'search':
        return (
          <SearchResultsSkeleton
            resultCount={itemCount}
            className={className}
          />
        )

      case 'note':
      default:
        return <NoteCardSkeleton className={className} />
    }
  }
)

SmartSkeleton.displayName = 'SmartSkeleton'

/**
 * Progressive image loader with skeleton
 */
export const ProgressiveImage = React.memo<{
  src: string
  alt: string
  className?: string
  skeletonClassName?: string
}>(({ src, alt, className, skeletonClassName }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const handleLoad = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = React.useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  return (
    <div className='relative'>
      {isLoading && (
        <ProgressiveSkeleton
          className={cn('absolute inset-0', skeletonClassName)}
          variant='shimmer'
        />
      )}

      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {hasError && (
        <div
          className={cn(
            'flex items-center justify-center bg-gray-100',
            className
          )}
        >
          <span className='text-gray-400 text-sm'>Failed to load</span>
        </div>
      )}
    </div>
  )
})

ProgressiveImage.displayName = 'ProgressiveImage'
