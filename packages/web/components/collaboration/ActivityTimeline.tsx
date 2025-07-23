/**
 * Activity Timeline Component
 * Shows history of collaborative actions and changes
 */

'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Clock,
  Edit3,
  MessageCircle,
  UserPlus,
  UserMinus,
  Share,
  Eye,
  FileText,
  Lightbulb,
  Check,
  X,
  Filter,
  RefreshCw,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { User } from '@/lib/collaboration/yjs-provider'
import { formatDistanceToNow, format } from 'date-fns'
import { cn } from '@/lib/utils'

export type ActivityType =
  | 'edit'
  | 'comment'
  | 'suggestion'
  | 'user_joined'
  | 'user_left'
  | 'permission_granted'
  | 'permission_revoked'
  | 'share_link_created'
  | 'note_created'
  | 'note_renamed'
  | 'note_deleted'

export interface Activity {
  id: string
  type: ActivityType
  user: User
  timestamp: Date
  data: {
    content?: string
    targetUser?: User
    permission?: string
    linkId?: string
    selection?: {
      anchor: number
      focus: number
      text: string
    }
    changes?: {
      insertions: number
      deletions: number
      characters: number
    }
  }
  metadata?: {
    duration?: number
    collaborators?: User[]
    affectedLines?: number[]
    resolved?: boolean
  }
}

interface ActivityTimelineProps {
  activities: Activity[]
  currentUser: User
  noteId: string
  className?: string
  onActivityClick?: (activity: Activity) => void
  showFilters?: boolean
  autoRefresh?: boolean
  refreshInterval?: number
}

export function ActivityTimeline({
  activities,
  currentUser,
  noteId,
  className,
  onActivityClick,
  showFilters = true,
  autoRefresh = true,
  refreshInterval = 30000,
}: ActivityTimelineProps) {
  const [filteredActivities, setFilteredActivities] =
    useState<Activity[]>(activities)
  const [activeFilters, setActiveFilters] = useState<Set<ActivityType>>(
    new Set()
  )
  const [showFiltersPanel, setShowFiltersPanel] = useState(false)
  const [groupByDate, setGroupByDate] = useState(true)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  // Filter activities based on active filters
  useEffect(() => {
    if (activeFilters.size === 0) {
      setFilteredActivities(activities)
    } else {
      setFilteredActivities(
        activities.filter((activity) => activeFilters.has(activity.type))
      )
    }
  }, [activities, activeFilters])

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      // Trigger refresh - would be handled by parent component
      // This is a placeholder for the refresh mechanism
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval])

  const toggleFilter = (type: ActivityType) => {
    const newFilters = new Set(activeFilters)
    if (newFilters.has(type)) {
      newFilters.delete(type)
    } else {
      newFilters.add(type)
    }
    setActiveFilters(newFilters)
  }

  const clearFilters = () => {
    setActiveFilters(new Set())
  }

  const getActivityIcon = (type: ActivityType) => {
    const icons = {
      edit: Edit3,
      comment: MessageCircle,
      suggestion: Lightbulb,
      user_joined: UserPlus,
      user_left: UserMinus,
      permission_granted: Share,
      permission_revoked: X,
      share_link_created: Share,
      note_created: FileText,
      note_renamed: Edit3,
      note_deleted: X,
    }

    const Icon = icons[type] || Clock
    return <Icon className='h-4 w-4' />
  }

  const getActivityColor = (type: ActivityType) => {
    const colors = {
      edit: 'text-blue-600 bg-blue-100',
      comment: 'text-purple-600 bg-purple-100',
      suggestion: 'text-yellow-600 bg-yellow-100',
      user_joined: 'text-green-600 bg-green-100',
      user_left: 'text-gray-600 bg-gray-100',
      permission_granted: 'text-indigo-600 bg-indigo-100',
      permission_revoked: 'text-red-600 bg-red-100',
      share_link_created: 'text-cyan-600 bg-cyan-100',
      note_created: 'text-emerald-600 bg-emerald-100',
      note_renamed: 'text-orange-600 bg-orange-100',
      note_deleted: 'text-red-600 bg-red-100',
    }

    return colors[type] || 'text-gray-600 bg-gray-100'
  }

  const getActivityDescription = (activity: Activity) => {
    const { type, user, data } = activity

    switch (type) {
      case 'edit':
        if (data.changes) {
          return `Made ${data.changes.insertions} insertions and ${data.changes.deletions} deletions`
        }
        return 'Made changes to the document'

      case 'comment':
        return data.content
          ? `"${data.content.slice(0, 100)}${data.content.length > 100 ? '...' : ''}"`
          : 'Added a comment'

      case 'suggestion':
        return data.content
          ? `Suggested: "${data.content.slice(0, 100)}${data.content.length > 100 ? '...' : ''}"`
          : 'Made a suggestion'

      case 'user_joined':
        return 'Joined the collaborative session'

      case 'user_left':
        return 'Left the collaborative session'

      case 'permission_granted':
        return `Granted ${data.permission} permission to ${data.targetUser?.name}`

      case 'permission_revoked':
        return `Revoked permission from ${data.targetUser?.name}`

      case 'share_link_created':
        return `Created a share link with ${data.permission} permission`

      case 'note_created':
        return 'Created the note'

      case 'note_renamed':
        return `Renamed the note to "${data.content}"`

      case 'note_deleted':
        return 'Deleted the note'

      default:
        return 'Performed an action'
    }
  }

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const groupActivitiesByDate = (activities: Activity[]) => {
    const groups: Record<string, Activity[]> = {}

    activities.forEach((activity) => {
      const dateKey = format(activity.timestamp, 'yyyy-MM-dd')
      if (!groups[dateKey]) {
        groups[dateKey] = []
      }
      groups[dateKey].push(activity)
    })

    return groups
  }

  const formatDateGroupHeader = (dateKey: string) => {
    const date = new Date(dateKey)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
      return 'Today'
    } else if (format(date, 'yyyy-MM-dd') === format(yesterday, 'yyyy-MM-dd')) {
      return 'Yesterday'
    } else {
      return format(date, 'MMMM d, yyyy')
    }
  }

  const toggleGroupExpansion = (groupKey: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupKey)) {
      newExpanded.delete(groupKey)
    } else {
      newExpanded.add(groupKey)
    }
    setExpandedGroups(newExpanded)
  }

  const activityTypeFilters: { type: ActivityType; label: string }[] = [
    { type: 'edit', label: 'Edits' },
    { type: 'comment', label: 'Comments' },
    { type: 'suggestion', label: 'Suggestions' },
    { type: 'user_joined', label: 'User Joined' },
    { type: 'user_left', label: 'User Left' },
    { type: 'permission_granted', label: 'Permissions' },
    { type: 'share_link_created', label: 'Sharing' },
  ]

  const renderActivity = (activity: Activity) => (
    <div
      key={activity.id}
      className={cn(
        'flex gap-3 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-gray-50',
        activity.user.id === currentUser.id && 'bg-blue-50 border-blue-200'
      )}
      onClick={() => onActivityClick?.(activity)}
    >
      {/* Avatar */}
      <div className='relative flex-shrink-0'>
        <Avatar
          className='h-8 w-8 border'
          style={{ borderColor: activity.user.color }}
        >
          <AvatarImage src={activity.user.avatar} />
          <AvatarFallback
            className='text-white text-xs font-medium'
            style={{ backgroundColor: activity.user.color }}
          >
            {getUserInitials(activity.user.name)}
          </AvatarFallback>
        </Avatar>

        {/* Activity type indicator */}
        <div
          className={cn(
            'absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white flex items-center justify-center',
            getActivityColor(activity.type)
          )}
        >
          {getActivityIcon(activity.type)}
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 min-w-0'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <p className='text-sm font-medium text-gray-900'>
              {activity.user.name}
              {activity.user.id === currentUser.id && (
                <span className='text-gray-500 ml-1'>(you)</span>
              )}
            </p>
            <p className='text-sm text-gray-600 mt-1'>
              {getActivityDescription(activity)}
            </p>

            {/* Selection context for comments/suggestions */}
            {activity.data.selection && (
              <div className='mt-2 p-2 bg-gray-100 rounded text-xs font-mono'>
                "{activity.data.selection.text}"
              </div>
            )}

            {/* Metadata */}
            {activity.metadata && (
              <div className='flex items-center gap-2 mt-2 text-xs text-gray-500'>
                {activity.metadata.duration && (
                  <span>Duration: {activity.metadata.duration}ms</span>
                )}
                {activity.metadata.affectedLines && (
                  <span>Lines: {activity.metadata.affectedLines.length}</span>
                )}
                {activity.metadata.resolved !== undefined && (
                  <Badge
                    variant={
                      activity.metadata.resolved ? 'default' : 'secondary'
                    }
                    className='text-xs'
                  >
                    {activity.metadata.resolved ? 'Resolved' : 'Open'}
                  </Badge>
                )}
              </div>
            )}
          </div>

          <div className='text-xs text-gray-500 ml-2 flex-shrink-0'>
            {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  )

  const groupedActivities = groupByDate
    ? groupActivitiesByDate(filteredActivities)
    : null

  return (
    <Card className={cn('h-full flex flex-col', className)}>
      <CardHeader className='pb-3'>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg flex items-center gap-2'>
            <Clock className='h-5 w-5' />
            Activity Timeline
          </CardTitle>

          <div className='flex items-center gap-2'>
            {showFilters && (
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                className='text-xs'
              >
                <Filter className='h-3 w-3 mr-1' />
                Filters
                {activeFilters.size > 0 && (
                  <Badge variant='secondary' className='ml-1 text-xs'>
                    {activeFilters.size}
                  </Badge>
                )}
              </Button>
            )}

            <Button
              variant='outline'
              size='sm'
              onClick={() => setGroupByDate(!groupByDate)}
              className='text-xs'
            >
              {groupByDate ? 'Ungroup' : 'Group by Date'}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className='flex gap-4 text-xs text-gray-500'>
          <span>{filteredActivities.length} activities</span>
          <span>
            {new Set(filteredActivities.map((a) => a.user.id)).size}{' '}
            contributors
          </span>
        </div>

        {/* Filters Panel */}
        {showFiltersPanel && (
          <div className='mt-3 p-3 bg-gray-50 rounded-lg'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium'>
                Filter by activity type:
              </span>
              {activeFilters.size > 0 && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={clearFilters}
                  className='text-xs'
                >
                  Clear All
                </Button>
              )}
            </div>
            <div className='flex flex-wrap gap-2'>
              {activityTypeFilters.map(({ type, label }) => (
                <Badge
                  key={type}
                  variant={activeFilters.has(type) ? 'default' : 'outline'}
                  className='cursor-pointer text-xs'
                  onClick={() => toggleFilter(type)}
                >
                  {getActivityIcon(type)}
                  <span className='ml-1'>{label}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent className='flex-1 p-0'>
        <ScrollArea className='h-full'>
          <div className='p-4 space-y-3'>
            {filteredActivities.length === 0 ? (
              <div className='text-center py-8 text-gray-500'>
                <Clock className='h-12 w-12 mx-auto mb-3 opacity-50' />
                <p className='text-sm'>No activities found</p>
                <p className='text-xs mt-1'>
                  {activeFilters.size > 0
                    ? 'Try adjusting your filters'
                    : 'Start collaborating to see activity'}
                </p>
              </div>
            ) : groupedActivities ? (
              // Grouped view
              Object.entries(groupedActivities)
                .sort(
                  ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
                )
                .map(([dateKey, activities]) => {
                  const isExpanded = expandedGroups.has(dateKey)

                  return (
                    <div key={dateKey} className='space-y-2'>
                      <button
                        onClick={() => toggleGroupExpansion(dateKey)}
                        className='flex items-center gap-2 w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900'
                      >
                        {isExpanded ? (
                          <ChevronDown className='h-4 w-4' />
                        ) : (
                          <ChevronRight className='h-4 w-4' />
                        )}
                        {formatDateGroupHeader(dateKey)}
                        <span className='text-xs text-gray-500'>
                          ({activities.length} activities)
                        </span>
                      </button>

                      {isExpanded && (
                        <div className='ml-6 space-y-2'>
                          {activities
                            .sort(
                              (a, b) =>
                                b.timestamp.getTime() - a.timestamp.getTime()
                            )
                            .map(renderActivity)}
                        </div>
                      )}

                      {dateKey !==
                        Object.keys(groupedActivities)[
                          Object.keys(groupedActivities).length - 1
                        ] && <Separator className='my-4' />}
                    </div>
                  )
                })
            ) : (
              // Flat view
              filteredActivities
                .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
                .map(renderActivity)
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

/**
 * Hook to track and manage activities
 */
export function useActivityTimeline(noteId: string, currentUser: User) {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addActivity = React.useCallback(
    (activity: Omit<Activity, 'id' | 'timestamp'>) => {
      const newActivity: Activity = {
        ...activity,
        id: `activity-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
      }

      setActivities((prev) => [newActivity, ...prev])
      return newActivity
    },
    []
  )

  const trackEdit = React.useCallback(
    (changes: Activity['data']['changes']) => {
      return addActivity({
        type: 'edit',
        user: currentUser,
        data: { changes },
      })
    },
    [addActivity, currentUser]
  )

  const trackComment = React.useCallback(
    (content: string, selection?: Activity['data']['selection']) => {
      return addActivity({
        type: 'comment',
        user: currentUser,
        data: { content, selection },
      })
    },
    [addActivity, currentUser]
  )

  const trackSuggestion = React.useCallback(
    (content: string, selection?: Activity['data']['selection']) => {
      return addActivity({
        type: 'suggestion',
        user: currentUser,
        data: { content, selection },
      })
    },
    [addActivity, currentUser]
  )

  const trackUserJoined = React.useCallback(
    (user: User) => {
      return addActivity({
        type: 'user_joined',
        user,
        data: {},
      })
    },
    [addActivity]
  )

  const trackUserLeft = React.useCallback(
    (user: User) => {
      return addActivity({
        type: 'user_left',
        user,
        data: {},
      })
    },
    [addActivity]
  )

  return {
    activities,
    isLoading,
    addActivity,
    trackEdit,
    trackComment,
    trackSuggestion,
    trackUserJoined,
    trackUserLeft,
  }
}
