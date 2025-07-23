/**
 * Collaborative Comments System
 * Enhanced commenting with real-time collaboration features
 */

'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  MessageCircle,
  Send,
  Reply,
  MoreHorizontal,
  Check,
  X,
  Edit3,
  Trash2,
  Flag,
  Heart,
  ThumbsUp,
  Eye,
  Clock,
} from 'lucide-react'
import { User } from '@/lib/collaboration/yjs-provider'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'

export interface Comment {
  id: string
  content: string
  author: User
  createdAt: Date
  updatedAt?: Date
  isResolved: boolean
  isEdited: boolean
  selection?: {
    anchor: number
    focus: number
    text: string
  }
  reactions: {
    type: 'like' | 'love' | 'approve'
    users: User[]
  }[]
  replies: Comment[]
  metadata?: {
    suggestion?: {
      type: 'insert' | 'delete' | 'replace'
      original: string
      suggested: string
    }
  }
}

interface CollaborativeCommentsProps {
  comments: Comment[]
  currentUser: User
  onAddComment: (content: string, selection?: Comment['selection']) => void
  onReplyToComment: (commentId: string, content: string) => void
  onEditComment: (commentId: string, content: string) => void
  onDeleteComment: (commentId: string) => void
  onResolveComment: (commentId: string) => void
  onReactToComment: (
    commentId: string,
    reaction: 'like' | 'love' | 'approve'
  ) => void
  className?: string
}

export function CollaborativeComments({
  comments,
  currentUser,
  onAddComment,
  onReplyToComment,
  onEditComment,
  onDeleteComment,
  onResolveComment,
  onReactToComment,
  className,
}: CollaborativeCommentsProps) {
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [editingComment, setEditingComment] = useState<string | null>(null)
  const [expandedComments, setExpandedComments] = useState<Set<string>>(
    new Set()
  )
  const [filter, setFilter] = useState<'all' | 'unresolved' | 'resolved'>('all')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Filter comments based on current filter
  const filteredComments = comments.filter((comment) => {
    switch (filter) {
      case 'unresolved':
        return !comment.isResolved
      case 'resolved':
        return comment.isResolved
      default:
        return true
    }
  })

  // Group comments by selection/thread
  const commentThreads = filteredComments.reduce(
    (threads, comment) => {
      const key = comment.selection
        ? `${comment.selection.anchor}-${comment.selection.focus}`
        : 'general'

      if (!threads[key]) {
        threads[key] = []
      }
      threads[key].push(comment)
      return threads
    },
    {} as Record<string, Comment[]>
  )

  const handleSubmitComment = useCallback(() => {
    if (!newComment.trim()) return

    // Get current text selection if any
    const selection = window.getSelection()
    let selectionData: Comment['selection'] | undefined

    if (selection && selection.toString().trim()) {
      selectionData = {
        anchor: selection.anchorOffset,
        focus: selection.focusOffset,
        text: selection.toString(),
      }
    }

    onAddComment(newComment.trim(), selectionData)
    setNewComment('')
  }, [newComment, onAddComment])

  const handleReply = useCallback(
    (commentId: string, content: string) => {
      onReplyToComment(commentId, content)
      setReplyingTo(null)
    },
    [onReplyToComment]
  )

  const handleEdit = useCallback(
    (commentId: string, content: string) => {
      onEditComment(commentId, content)
      setEditingComment(null)
    },
    [onEditComment]
  )

  const toggleCommentExpansion = useCallback(
    (commentId: string) => {
      const newExpanded = new Set(expandedComments)
      if (newExpanded.has(commentId)) {
        newExpanded.delete(commentId)
      } else {
        newExpanded.add(commentId)
      }
      setExpandedComments(newExpanded)
    },
    [expandedComments]
  )

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getReactionCount = (comment: Comment, type: string) => {
    const reaction = comment.reactions.find((r) => r.type === type)
    return reaction ? reaction.users.length : 0
  }

  const hasUserReacted = (comment: Comment, type: string) => {
    const reaction = comment.reactions.find((r) => r.type === type)
    return reaction
      ? reaction.users.some((u) => u.id === currentUser.id)
      : false
  }

  return (
    <Card className={cn('h-full flex flex-col', className)}>
      <CardHeader className='pb-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <MessageCircle className='h-5 w-5' />
            <h3 className='font-semibold'>Comments</h3>
            <Badge variant='secondary' className='text-xs'>
              {comments.length}
            </Badge>
          </div>

          {/* Filter buttons */}
          <div className='flex rounded-md border'>
            {(['all', 'unresolved', 'resolved'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={cn(
                  'px-3 py-1 text-xs font-medium transition-colors',
                  'first:rounded-l-md last:rounded-r-md',
                  filter === filterType
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className='flex-1 flex flex-col p-0'>
        {/* New comment form */}
        <div className='p-4 border-b'>
          <div className='flex gap-3'>
            <Avatar className='h-8 w-8 flex-shrink-0'>
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback
                className='text-white text-xs'
                style={{ backgroundColor: currentUser.color }}
              >
                {getUserInitials(currentUser.name)}
              </AvatarFallback>
            </Avatar>

            <div className='flex-1 space-y-2'>
              <Textarea
                ref={textareaRef}
                placeholder='Add a comment...'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    handleSubmitComment()
                  }
                }}
                className='min-h-[80px] resize-none'
              />

              <div className='flex justify-between items-center'>
                <p className='text-xs text-muted-foreground'>
                  Press Cmd+Enter to submit
                </p>
                <Button
                  size='sm'
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim()}
                >
                  <Send className='h-4 w-4 mr-2' />
                  Comment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments list */}
        <ScrollArea className='flex-1'>
          <div className='p-4 space-y-4'>
            {Object.entries(commentThreads).map(
              ([threadKey, threadComments]) => (
                <div key={threadKey} className='space-y-3'>
                  {/* Thread header for selection-based comments */}
                  {threadKey !== 'general' && threadComments[0]?.selection && (
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Eye className='h-4 w-4' />
                      <span className='font-mono bg-muted px-2 py-1 rounded text-xs'>
                        "{threadComments[0].selection.text}"
                      </span>
                    </div>
                  )}

                  {threadComments.map((comment) => (
                    <CommentItem
                      key={comment.id}
                      comment={comment}
                      currentUser={currentUser}
                      isExpanded={expandedComments.has(comment.id)}
                      isEditing={editingComment === comment.id}
                      isReplying={replyingTo === comment.id}
                      onToggleExpansion={() =>
                        toggleCommentExpansion(comment.id)
                      }
                      onStartEdit={() => setEditingComment(comment.id)}
                      onCancelEdit={() => setEditingComment(null)}
                      onStartReply={() => setReplyingTo(comment.id)}
                      onCancelReply={() => setReplyingTo(null)}
                      onEdit={handleEdit}
                      onReply={handleReply}
                      onDelete={onDeleteComment}
                      onResolve={onResolveComment}
                      onReact={onReactToComment}
                      getUserInitials={getUserInitials}
                      getReactionCount={getReactionCount}
                      hasUserReacted={hasUserReacted}
                    />
                  ))}
                </div>
              )
            )}

            {filteredComments.length === 0 && (
              <div className='text-center py-8 text-muted-foreground'>
                <MessageCircle className='h-12 w-12 mx-auto mb-3 opacity-50' />
                <p className='text-sm'>
                  {filter === 'all'
                    ? 'No comments yet'
                    : `No ${filter} comments`}
                </p>
                <p className='text-xs mt-1'>
                  Start a conversation by adding a comment
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

/**
 * Individual comment item component
 */
interface CommentItemProps {
  comment: Comment
  currentUser: User
  isExpanded: boolean
  isEditing: boolean
  isReplying: boolean
  onToggleExpansion: () => void
  onStartEdit: () => void
  onCancelEdit: () => void
  onStartReply: () => void
  onCancelReply: () => void
  onEdit: (commentId: string, content: string) => void
  onReply: (commentId: string, content: string) => void
  onDelete: (commentId: string) => void
  onResolve: (commentId: string) => void
  onReact: (commentId: string, reaction: 'like' | 'love' | 'approve') => void
  getUserInitials: (name: string) => string
  getReactionCount: (comment: Comment, type: string) => number
  hasUserReacted: (comment: Comment, type: string) => boolean
}

function CommentItem({
  comment,
  currentUser,
  isExpanded,
  isEditing,
  isReplying,
  onToggleExpansion,
  onStartEdit,
  onCancelEdit,
  onStartReply,
  onCancelReply,
  onEdit,
  onReply,
  onDelete,
  onResolve,
  onReact,
  getUserInitials,
  getReactionCount,
  hasUserReacted,
}: CommentItemProps) {
  const [editContent, setEditContent] = useState(comment.content)
  const [replyContent, setReplyContent] = useState('')

  const isOwner = comment.author.id === currentUser.id
  const hasReplies = comment.replies.length > 0

  const handleEditSubmit = () => {
    if (editContent.trim()) {
      onEdit(comment.id, editContent.trim())
    }
  }

  const handleReplySubmit = () => {
    if (replyContent.trim()) {
      onReply(comment.id, replyContent.trim())
      setReplyContent('')
    }
  }

  return (
    <div
      className={cn(
        'space-y-3 p-3 rounded-lg border transition-colors',
        comment.isResolved
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-200'
      )}
    >
      {/* Main comment */}
      <div className='flex gap-3'>
        <Avatar className='h-8 w-8 flex-shrink-0'>
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback
            className='text-white text-xs'
            style={{ backgroundColor: comment.author.color }}
          >
            {getUserInitials(comment.author.name)}
          </AvatarFallback>
        </Avatar>

        <div className='flex-1 space-y-2'>
          {/* Author and timestamp */}
          <div className='flex items-center gap-2'>
            <span className='font-medium text-sm'>{comment.author.name}</span>
            {comment.isEdited && (
              <span className='text-xs text-muted-foreground'>(edited)</span>
            )}
            <span className='text-xs text-muted-foreground'>
              {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
            </span>
            {comment.isResolved && (
              <Badge variant='outline' className='text-xs'>
                <Check className='h-3 w-3 mr-1' />
                Resolved
              </Badge>
            )}
          </div>

          {/* Comment content or edit form */}
          {isEditing ? (
            <div className='space-y-2'>
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className='min-h-[60px]'
              />
              <div className='flex gap-2'>
                <Button size='sm' onClick={handleEditSubmit}>
                  Save
                </Button>
                <Button size='sm' variant='outline' onClick={onCancelEdit}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className='prose prose-sm max-w-none'>
              <p className='text-sm leading-relaxed'>{comment.content}</p>

              {/* Suggestion preview */}
              {comment.metadata?.suggestion && (
                <div className='mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs'>
                  <div className='font-medium text-blue-800 mb-1'>
                    Suggested {comment.metadata.suggestion.type}:
                  </div>
                  <div className='font-mono'>
                    {comment.metadata.suggestion.type === 'replace' && (
                      <>
                        <div className='text-red-600 line-through'>
                          {comment.metadata.suggestion.original}
                        </div>
                        <div className='text-green-600'>
                          {comment.metadata.suggestion.suggested}
                        </div>
                      </>
                    )}
                    {comment.metadata.suggestion.type === 'insert' && (
                      <div className='text-green-600'>
                        + {comment.metadata.suggestion.suggested}
                      </div>
                    )}
                    {comment.metadata.suggestion.type === 'delete' && (
                      <div className='text-red-600 line-through'>
                        - {comment.metadata.suggestion.original}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Reactions */}
          {comment.reactions.some((r) => r.users.length > 0) && (
            <div className='flex gap-1'>
              {comment.reactions.map(
                (reaction) =>
                  reaction.users.length > 0 && (
                    <TooltipProvider key={reaction.type}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant='outline'
                            size='sm'
                            className={cn(
                              'h-6 px-2 text-xs',
                              hasUserReacted(comment, reaction.type) &&
                                'bg-blue-100 border-blue-300'
                            )}
                            onClick={() => onReact(comment.id, reaction.type)}
                          >
                            {reaction.type === 'like' && (
                              <ThumbsUp className='h-3 w-3 mr-1' />
                            )}
                            {reaction.type === 'love' && (
                              <Heart className='h-3 w-3 mr-1' />
                            )}
                            {reaction.type === 'approve' && (
                              <Check className='h-3 w-3 mr-1' />
                            )}
                            {reaction.users.length}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className='text-xs'>
                            {reaction.users.map((u) => u.name).join(', ')}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
              )}
            </div>
          )}

          {/* Actions */}
          {!isEditing && (
            <div className='flex items-center gap-2 text-xs'>
              <button
                onClick={() => onReact(comment.id, 'like')}
                className={cn(
                  'text-muted-foreground hover:text-foreground transition-colors',
                  hasUserReacted(comment, 'like') && 'text-blue-600'
                )}
              >
                <ThumbsUp className='h-3 w-3 mr-1 inline' />
                Like
              </button>

              <button
                onClick={onStartReply}
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Reply className='h-3 w-3 mr-1 inline' />
                Reply
              </button>

              {isOwner && (
                <>
                  <button
                    onClick={onStartEdit}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <Edit3 className='h-3 w-3 mr-1 inline' />
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(comment.id)}
                    className='text-muted-foreground hover:text-red-600 transition-colors'
                  >
                    <Trash2 className='h-3 w-3 mr-1 inline' />
                    Delete
                  </button>
                </>
              )}

              {!comment.isResolved && (
                <button
                  onClick={() => onResolve(comment.id)}
                  className='text-muted-foreground hover:text-green-600 transition-colors'
                >
                  <Check className='h-3 w-3 mr-1 inline' />
                  Resolve
                </button>
              )}

              {hasReplies && (
                <button
                  onClick={onToggleExpansion}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  {isExpanded ? 'Hide' : 'Show'} {comment.replies.length}{' '}
                  replies
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Reply form */}
      {isReplying && (
        <div className='ml-11 space-y-2'>
          <Textarea
            placeholder='Write a reply...'
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className='min-h-[60px]'
          />
          <div className='flex gap-2'>
            <Button
              size='sm'
              onClick={handleReplySubmit}
              disabled={!replyContent.trim()}
            >
              Reply
            </Button>
            <Button size='sm' variant='outline' onClick={onCancelReply}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Replies */}
      {hasReplies && isExpanded && (
        <div className='ml-11 space-y-3 border-l-2 border-gray-200 pl-4'>
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              isExpanded={false}
              isEditing={false}
              isReplying={false}
              onToggleExpansion={() => {}}
              onStartEdit={onStartEdit}
              onCancelEdit={onCancelEdit}
              onStartReply={onStartReply}
              onCancelReply={onCancelReply}
              onEdit={onEdit}
              onReply={onReply}
              onDelete={onDelete}
              onResolve={onResolve}
              onReact={onReact}
              getUserInitials={getUserInitials}
              getReactionCount={getReactionCount}
              hasUserReacted={hasUserReacted}
            />
          ))}
        </div>
      )}
    </div>
  )
}
