'use client'

import * as React from 'react'
import { Hash, TrendingUp, Eye, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useTags } from '@/hooks/use-tags'
import type { EnhancedTag } from '@/types/tags'

export interface TagCloudProps {
  /** Tags to display in the cloud */
  tags?: EnhancedTag[]
  /** Maximum number of tags to display */
  maxTags?: number
  /** Minimum usage count to display a tag */
  minUsage?: number
  /** Size variant for the cloud */
  size?: 'sm' | 'md' | 'lg'
  /** Layout style */
  layout?: 'cloud' | 'list' | 'grid'
  /** Whether to show usage counts */
  showCounts?: boolean
  /** Whether to show trending indicators */
  showTrending?: boolean
  /** Whether tags are interactive (clickable) */
  interactive?: boolean
  /** Callback when a tag is clicked */
  onTagClick?: (tag: EnhancedTag) => void
  /** Callback when a tag is hovered */
  onTagHover?: (tag: EnhancedTag | null) => void
  /** Selected tags for filtering visualization */
  selectedTags?: string[]
  /** Custom CSS classes */
  className?: string
  /** Show empty state when no tags */
  showEmpty?: boolean
}

const TagCloud: React.FC<TagCloudProps> = ({
  tags: propTags,
  maxTags = 50,
  minUsage = 1,
  size = 'md',
  layout = 'cloud',
  showCounts = true,
  showTrending = false,
  interactive = true,
  onTagClick,
  onTagHover,
  selectedTags = [],
  className,
  showEmpty = true,
}) => {
  const { data: allTags = [] } = useTags()

  // Use provided tags or fetch all tags
  const tags = propTags || allTags

  // Filter and sort tags
  const processedTags = React.useMemo(() => {
    return tags
      .filter((tag) => (tag.usage_count || 0) >= minUsage)
      .sort((a, b) => (b.usage_count || 0) - (a.usage_count || 0))
      .slice(0, maxTags)
  }, [tags, minUsage, maxTags])

  // Calculate size classes based on usage frequency
  const getTagSize = (tag: EnhancedTag) => {
    if (processedTags.length === 0) return 'text-sm'

    const maxUsage = Math.max(...processedTags.map((t) => t.usage_count || 0))
    const minUsageInSet = Math.min(
      ...processedTags.map((t) => t.usage_count || 0)
    )
    const usageRange = maxUsage - minUsageInSet || 1
    const normalizedUsage =
      ((tag.usage_count || 0) - minUsageInSet) / usageRange

    if (size === 'sm') {
      if (normalizedUsage > 0.8) return 'text-base'
      if (normalizedUsage > 0.6) return 'text-sm'
      if (normalizedUsage > 0.4) return 'text-sm'
      return 'text-xs'
    }

    if (size === 'lg') {
      if (normalizedUsage > 0.8) return 'text-2xl'
      if (normalizedUsage > 0.6) return 'text-xl'
      if (normalizedUsage > 0.4) return 'text-lg'
      return 'text-base'
    }

    // Default 'md' size
    if (normalizedUsage > 0.8) return 'text-lg'
    if (normalizedUsage > 0.6) return 'text-base'
    if (normalizedUsage > 0.4) return 'text-sm'
    return 'text-sm'
  }

  // Get opacity based on usage
  const getTagOpacity = (tag: EnhancedTag) => {
    if (processedTags.length === 0) return 'opacity-70'

    const maxUsage = Math.max(...processedTags.map((t) => t.usage_count || 0))
    const minUsageInSet = Math.min(
      ...processedTags.map((t) => t.usage_count || 0)
    )
    const usageRange = maxUsage - minUsageInSet || 1
    const normalizedUsage =
      ((tag.usage_count || 0) - minUsageInSet) / usageRange

    if (normalizedUsage > 0.8) return 'opacity-100'
    if (normalizedUsage > 0.6) return 'opacity-90'
    if (normalizedUsage > 0.4) return 'opacity-80'
    return 'opacity-70'
  }

  // Check if tag is trending (used recently)
  const isTrending = (tag: EnhancedTag) => {
    if (!tag.last_used_at) return false
    const lastUsed = new Date(tag.last_used_at)
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    return lastUsed > weekAgo && (tag.usage_count || 0) > 1
  }

  // Handle tag interaction
  const handleTagInteraction = (
    tag: EnhancedTag,
    action: 'click' | 'hover' | 'unhover'
  ) => {
    if (!interactive) return

    switch (action) {
      case 'click':
        onTagClick?.(tag)
        break
      case 'hover':
        onTagHover?.(tag)
        break
      case 'unhover':
        onTagHover?.(null)
        break
    }
  }

  // Render individual tag
  const renderTag = (tag: EnhancedTag, index: number) => {
    const isSelected = selectedTags.includes(tag.name)
    const tagSize = getTagSize(tag)
    const tagOpacity = getTagOpacity(tag)
    const trending = showTrending && isTrending(tag)

    const tagElement = (
      <Button
        key={tag.id}
        variant={isSelected ? 'default' : 'ghost'}
        size='sm'
        onClick={() => handleTagInteraction(tag, 'click')}
        onMouseEnter={() => handleTagInteraction(tag, 'hover')}
        onMouseLeave={() => handleTagInteraction(tag, 'unhover')}
        className={cn(
          'relative h-auto px-2 py-1 font-normal transition-all duration-200',
          tagSize,
          tagOpacity,
          interactive && 'hover:scale-105 hover:shadow-sm',
          isSelected && 'ring-2 ring-ring ring-offset-2',
          !interactive && 'cursor-default',
          layout === 'cloud' && 'mx-1 my-0.5',
          layout === 'list' && 'justify-start w-full',
          layout === 'grid' && 'w-full'
        )}
        disabled={!interactive}
      >
        <Hash className='mr-1 h-3 w-3' />
        <span>{tag.name}</span>

        {showCounts && (
          <span className='ml-1 text-xs opacity-75'>
            {tag.usage_count || 0}
          </span>
        )}

        {trending && <TrendingUp className='ml-1 h-3 w-3 text-green-500' />}
      </Button>
    )

    if (layout === 'cloud') {
      return (
        <TooltipProvider key={tag.id}>
          <Tooltip>
            <TooltipTrigger asChild>{tagElement}</TooltipTrigger>
            <TooltipContent side='top'>
              <div className='text-center'>
                <div className='font-medium'>{tag.name}</div>
                <div className='text-xs text-muted-foreground'>
                  Used {tag.usage_count || 0} times
                </div>
                {tag.last_used_at && (
                  <div className='text-xs text-muted-foreground'>
                    Last used: {new Date(tag.last_used_at).toLocaleDateString()}
                  </div>
                )}
                {tag.description && (
                  <div className='text-xs text-muted-foreground mt-1'>
                    {tag.description}
                  </div>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return tagElement
  }

  // Empty state
  if (processedTags.length === 0) {
    if (!showEmpty) return null

    return (
      <Card className={cn('w-full', className)}>
        <CardContent className='flex flex-col items-center justify-center py-8 text-center'>
          <Hash className='h-12 w-12 opacity-20 mb-4' />
          <p className='text-sm text-muted-foreground'>No tags found</p>
          <p className='text-xs text-muted-foreground mt-1'>
            Start adding tags to your notes to see them here
          </p>
        </CardContent>
      </Card>
    )
  }

  // Cloud layout
  if (layout === 'cloud') {
    return (
      <div className={cn('w-full', className)}>
        <div className='flex flex-wrap items-center justify-center p-4 text-center leading-relaxed'>
          {processedTags.map(renderTag)}
        </div>
      </div>
    )
  }

  // List layout
  if (layout === 'list') {
    return (
      <div className={cn('w-full space-y-1', className)}>
        {processedTags.map(renderTag)}
      </div>
    )
  }

  // Grid layout
  return (
    <div
      className={cn(
        'grid gap-2 w-full',
        size === 'sm'
          ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6'
          : size === 'lg'
            ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
            : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5',
        className
      )}
    >
      {processedTags.map(renderTag)}
    </div>
  )
}

// Enhanced Tag Cloud with analytics
export interface TagCloudAnalyticsProps extends Omit<TagCloudProps, 'tags'> {
  /** Whether to show analytics header */
  showAnalytics?: boolean
  /** Time period for trending analysis */
  trendingPeriod?: 'week' | 'month' | 'year'
}

export const TagCloudWithAnalytics: React.FC<TagCloudAnalyticsProps> = ({
  showAnalytics = true,
  trendingPeriod = 'week',
  className,
  ...props
}) => {
  const { data: tags = [], isLoading } = useTags()

  // Calculate analytics
  const analytics = React.useMemo(() => {
    const totalTags = tags.length
    const usedTags = tags.filter((tag) => (tag.usage_count || 0) > 0).length
    const totalUsage = tags.reduce(
      (sum, tag) => sum + (tag.usage_count || 0),
      0
    )
    const avgUsage = usedTags > 0 ? Math.round(totalUsage / usedTags) : 0

    // Trending calculation based on recent usage
    const periodMs = {
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      year: 365 * 24 * 60 * 60 * 1000,
    }[trendingPeriod]

    const cutoffDate = new Date(Date.now() - periodMs)
    const trendingTags = tags.filter((tag) => {
      if (!tag.last_used_at) return false
      return (
        new Date(tag.last_used_at) > cutoffDate && (tag.usage_count || 0) > 1
      )
    }).length

    return {
      totalTags,
      usedTags,
      totalUsage,
      avgUsage,
      trendingTags,
    }
  }, [tags, trendingPeriod])

  if (isLoading) {
    return (
      <Card className={cn('w-full', className)}>
        <CardContent className='flex items-center justify-center py-8'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <div className='animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent' />
            Loading tags...
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={cn('space-y-4', className)}>
      {showAnalytics && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='flex items-center gap-2 text-base'>
              <Hash className='h-4 w-4' />
              Tag Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              <div>
                <div className='text-2xl font-bold text-primary'>
                  {analytics.totalTags}
                </div>
                <div className='text-xs text-muted-foreground'>Total Tags</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-green-600'>
                  {analytics.usedTags}
                </div>
                <div className='text-xs text-muted-foreground'>Active Tags</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-blue-600'>
                  {analytics.totalUsage}
                </div>
                <div className='text-xs text-muted-foreground'>Total Usage</div>
              </div>
              <div>
                <div className='flex items-center justify-center gap-1'>
                  <div className='text-2xl font-bold text-orange-600'>
                    {analytics.trendingTags}
                  </div>
                  <TrendingUp className='h-4 w-4 text-orange-600' />
                </div>
                <div className='text-xs text-muted-foreground'>Trending</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <TagCloud tags={tags} {...props} />
    </div>
  )
}

export { TagCloud }
