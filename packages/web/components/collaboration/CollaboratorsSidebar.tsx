/**
 * Collaborators Sidebar Component
 * Shows active users, presence indicators, and collaboration controls
 */

'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Users,
  UserPlus,
  Settings,
  Eye,
  Edit3,
  MessageCircle,
  Clock,
  Wifi,
  WifiOff,
  Circle,
} from 'lucide-react'
import {
  User,
  UserAwareness,
  yjsProvider,
} from '@/lib/collaboration/yjs-provider'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'

interface CollaboratorsSidebarProps {
  isOpen: boolean
  onToggle: () => void
  currentUser: User
  noteId: string
  noteTitle?: string
  className?: string
}

interface CollaboratorWithPresence extends User {
  awareness?: UserAwareness | null
  isOnline: boolean
  permission: 'owner' | 'editor' | 'viewer'
}

export function CollaboratorsSidebar({
  isOpen,
  onToggle,
  currentUser,
  noteId,
  noteTitle = 'Untitled Note',
  className,
}: CollaboratorsSidebarProps) {
  const [collaborators, setCollaborators] = useState<
    CollaboratorWithPresence[]
  >([])
  const [isConnected, setIsConnected] = useState(false)
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    isTyping: 0,
  })

  // Update collaborators list
  useEffect(() => {
    const updateCollaborators = () => {
      const users = yjsProvider.getCollaborators()
      const usersWithPresence: CollaboratorWithPresence[] = users.map(
        (user) => {
          const awareness = yjsProvider.getUserAwareness(user.id)
          const isOnline = awareness
            ? Date.now() - awareness.lastActivity.getTime() < 60000
            : false

          return {
            ...user,
            awareness,
            isOnline,
            permission: user.id === currentUser.id ? 'owner' : 'editor', // Simplified for demo
          }
        }
      )

      // Add current user if not in list
      if (!usersWithPresence.find((u) => u.id === currentUser.id)) {
        usersWithPresence.unshift({
          ...currentUser,
          isOnline: true,
          permission: 'owner',
        })
      }

      setCollaborators(usersWithPresence)

      // Update stats
      const activeUsers = usersWithPresence.filter((u) => u.isOnline).length
      const typingUsers = usersWithPresence.filter(
        (u) => u.awareness?.isTyping
      ).length

      setStats({
        totalUsers: usersWithPresence.length,
        activeUsers,
        isTyping: typingUsers,
      })
    }

    // Set up event listeners
    yjsProvider.addEventListener('collaborators-changed', updateCollaborators)
    yjsProvider.addEventListener('user-joined', updateCollaborators)
    yjsProvider.addEventListener('user-left', updateCollaborators)
    yjsProvider.addEventListener('user-updated', updateCollaborators)

    const handleConnectionStatus = (status: string) => {
      setIsConnected(status === 'connected')
    }

    yjsProvider.addEventListener('connection-status', handleConnectionStatus)

    // Initial update
    updateCollaborators()

    // Update presence every 30 seconds
    const presenceInterval = setInterval(updateCollaborators, 30000)

    return () => {
      yjsProvider.removeEventListener(
        'collaborators-changed',
        updateCollaborators
      )
      yjsProvider.removeEventListener('user-joined', updateCollaborators)
      yjsProvider.removeEventListener('user-left', updateCollaborators)
      yjsProvider.removeEventListener('user-updated', updateCollaborators)
      yjsProvider.removeEventListener(
        'connection-status',
        handleConnectionStatus
      )
      clearInterval(presenceInterval)
    }
  }, [currentUser.id])

  const getPermissionIcon = (permission: string) => {
    switch (permission) {
      case 'owner':
        return <Settings className='h-3 w-3' />
      case 'editor':
        return <Edit3 className='h-3 w-3' />
      case 'viewer':
        return <Eye className='h-3 w-3' />
      default:
        return <Users className='h-3 w-3' />
    }
  }

  const getPermissionColor = (permission: string) => {
    switch (permission) {
      case 'owner':
        return 'bg-purple-100 text-purple-800'
      case 'editor':
        return 'bg-green-100 text-green-800'
      case 'viewer':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
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

  const formatLastSeen = (lastSeen: Date) => {
    return formatDistanceToNow(lastSeen, { addSuffix: true })
  }

  if (!isOpen) {
    return (
      <div className={cn('fixed right-4 top-20 z-40', className)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onToggle}
                variant='outline'
                size='sm'
                className='bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white relative'
              >
                <Users className='h-4 w-4' />
                {stats.activeUsers > 0 && (
                  <Badge
                    variant='secondary'
                    className='absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs'
                  >
                    {stats.activeUsers}
                  </Badge>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{stats.activeUsers} active collaborators</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'fixed right-4 top-16 bottom-4 w-80 z-40 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border',
        className
      )}
    >
      <Card className='h-full flex flex-col border-0 shadow-none bg-transparent'>
        <CardHeader className='pb-3'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-lg flex items-center gap-2'>
              <Users className='h-5 w-5' />
              Collaborators
            </CardTitle>
            <Button
              onClick={onToggle}
              variant='ghost'
              size='sm'
              className='h-8 w-8 p-0'
            >
              ×
            </Button>
          </div>

          {/* Connection Status */}
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            {isConnected ? (
              <>
                <Wifi className='h-4 w-4 text-green-500' />
                <span>Connected</span>
              </>
            ) : (
              <>
                <WifiOff className='h-4 w-4 text-red-500' />
                <span>Disconnected</span>
              </>
            )}
          </div>

          {/* Note Info */}
          <div className='text-sm text-gray-500 truncate'>
            Editing: {noteTitle}
          </div>

          {/* Stats */}
          <div className='flex gap-4 text-xs text-gray-500'>
            <span>{stats.totalUsers} total</span>
            <span>{stats.activeUsers} active</span>
            {stats.isTyping > 0 && (
              <span className='text-green-600'>{stats.isTyping} typing</span>
            )}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className='flex-1 p-0'>
          <ScrollArea className='h-full'>
            <div className='p-4 space-y-3'>
              {collaborators.map((collaborator) => (
                <div
                  key={collaborator.id}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg transition-colors',
                    collaborator.isOnline
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-gray-50 border border-gray-200'
                  )}
                >
                  {/* Avatar with status indicator */}
                  <div className='relative'>
                    <Avatar
                      className='h-10 w-10 border-2'
                      style={{ borderColor: collaborator.color }}
                    >
                      <AvatarImage src={collaborator.avatar} />
                      <AvatarFallback
                        className='text-white text-sm font-medium'
                        style={{ backgroundColor: collaborator.color }}
                      >
                        {getUserInitials(collaborator.name)}
                      </AvatarFallback>
                    </Avatar>

                    {/* Online status indicator */}
                    <div
                      className={cn(
                        'absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white',
                        collaborator.isOnline ? 'bg-green-500' : 'bg-gray-400'
                      )}
                    />

                    {/* Typing indicator */}
                    {collaborator.awareness?.isTyping && (
                      <div className='absolute -top-1 -right-1'>
                        <Circle className='h-3 w-3 text-blue-500 animate-pulse fill-current' />
                      </div>
                    )}
                  </div>

                  {/* User info */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-2'>
                      <p className='font-medium text-sm truncate'>
                        {collaborator.name}
                        {collaborator.id === currentUser.id && (
                          <span className='text-gray-500 ml-1'>(you)</span>
                        )}
                      </p>
                      <Badge
                        variant='secondary'
                        className={cn(
                          'text-xs px-2 py-0',
                          getPermissionColor(collaborator.permission)
                        )}
                      >
                        <span className='flex items-center gap-1'>
                          {getPermissionIcon(collaborator.permission)}
                          {collaborator.permission}
                        </span>
                      </Badge>
                    </div>

                    <p className='text-xs text-gray-500 truncate'>
                      {collaborator.email}
                    </p>

                    {/* Status */}
                    <div className='flex items-center gap-2 mt-1'>
                      {collaborator.awareness?.isTyping ? (
                        <span className='text-xs text-blue-600 flex items-center gap-1'>
                          <Edit3 className='h-3 w-3' />
                          Typing...
                        </span>
                      ) : collaborator.isOnline ? (
                        <span className='text-xs text-green-600'>
                          Active now
                        </span>
                      ) : (
                        <span className='text-xs text-gray-500 flex items-center gap-1'>
                          <Clock className='h-3 w-3' />
                          {formatLastSeen(collaborator.lastSeen)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {collaborators.length === 1 && (
                <div className='text-center py-8 text-gray-500'>
                  <Users className='h-12 w-12 mx-auto mb-3 opacity-50' />
                  <p className='text-sm'>No other collaborators yet</p>
                  <p className='text-xs mt-1'>
                    Share this note to start collaborating
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        <Separator />

        {/* Action buttons */}
        <div className='p-4 space-y-2'>
          <Button className='w-full' size='sm'>
            <UserPlus className='h-4 w-4 mr-2' />
            Invite Collaborators
          </Button>

          <div className='flex gap-2'>
            <Button variant='outline' size='sm' className='flex-1'>
              <MessageCircle className='h-4 w-4 mr-2' />
              Comments
            </Button>
            <Button variant='outline' size='sm' className='flex-1'>
              <Settings className='h-4 w-4 mr-2' />
              Sharing
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Mini collaborators indicator for always-on display
export function CollaboratorsIndicator({
  collaborators,
  maxVisible = 3,
  onClick,
}: {
  collaborators: User[]
  maxVisible?: number
  onClick?: () => void
}) {
  const activeCollaborators = collaborators.filter((user) => {
    const awareness = yjsProvider.getUserAwareness(user.id)
    return awareness
      ? Date.now() - awareness.lastActivity.getTime() < 60000
      : false
  })

  if (activeCollaborators.length === 0) return null

  const visibleCollaborators = activeCollaborators.slice(0, maxVisible)
  const remainingCount = Math.max(0, activeCollaborators.length - maxVisible)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className='flex items-center gap-1 cursor-pointer'
            onClick={onClick}
          >
            <div className='flex -space-x-2'>
              {visibleCollaborators.map((collaborator) => (
                <Avatar
                  key={collaborator.id}
                  className='h-6 w-6 border-2 border-white ring-1 ring-gray-200'
                >
                  <AvatarImage src={collaborator.avatar} />
                  <AvatarFallback
                    className='text-xs text-white font-medium'
                    style={{ backgroundColor: collaborator.color }}
                  >
                    {collaborator.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              ))}

              {remainingCount > 0 && (
                <div className='h-6 w-6 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center'>
                  <span className='text-xs text-white font-medium'>
                    +{remainingCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className='space-y-1'>
            <p className='font-medium'>Active Collaborators</p>
            {activeCollaborators.slice(0, 5).map((collaborator) => (
              <p key={collaborator.id} className='text-sm'>
                {collaborator.name}
              </p>
            ))}
            {activeCollaborators.length > 5 && (
              <p className='text-sm text-gray-500'>
                and {activeCollaborators.length - 5} more...
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
