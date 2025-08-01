'use client'

import React, { useState } from 'react'
import { Button } from '@/design-system/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sparkles,
  FileText,
  Edit3,
  CheckCircle,
  Minimize2,
  Maximize2,
  Loader2,
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface AIToolbarProps {
  content: string
  onContentUpdate: (newContent: string) => void
  className?: string
}

export function AIToolbar({
  content,
  onContentUpdate,
  className = '',
}: AIToolbarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingAction, setLoadingAction] = useState<string>('')

  const handleAIAction = async (
    action: 'summarize' | 'rewrite',
    subAction?: string
  ) => {
    if (!content.trim()) {
      toast({
        title: 'No content to process',
        description: 'Please add some content to your note first.',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)
    setLoadingAction(action)

    try {
      let endpoint = ''
      let requestBody = {}

      if (action === 'summarize') {
        endpoint = '/api/ai/summarize'
        requestBody = {
          content,
          summaryType: subAction || 'brief',
        }
      } else if (action === 'rewrite') {
        endpoint = '/api/ai/rewrite'
        requestBody = {
          content,
          action: subAction || 'improve',
          tone: 'professional',
        }
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'AI processing failed')
      }

      // Handle different response formats
      let newContent = ''
      if (action === 'summarize') {
        newContent = `${content}\n\n---\n**AI Summary (${result.data.summaryType}):**\n${result.data.summary}`
      } else if (action === 'rewrite') {
        newContent = result.data.rewrittenContent
      }

      onContentUpdate(newContent)

      toast({
        title: `AI ${action} completed`,
        description: `Processing time: ${result.data.processingTime}ms`,
      })
    } catch (error) {
      console.error(`AI ${action} error:`, error)
      toast({
        title: `AI ${action} failed`,
        description:
          error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
      setLoadingAction('')
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* AI Summary */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            disabled={isLoading}
            className='text-xs'
          >
            {isLoading && loadingAction === 'summarize' ? (
              <Loader2 className='w-3 h-3 animate-spin mr-1' />
            ) : (
              <FileText className='w-3 h-3 mr-1' />
            )}
            AI Summary
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleAIAction('summarize', 'brief')}
          >
            <Minimize2 className='w-3 h-3 mr-2' />
            Brief Summary
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleAIAction('summarize', 'detailed')}
          >
            <Maximize2 className='w-3 h-3 mr-2' />
            Detailed Summary
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleAIAction('summarize', 'bullet')}
          >
            <FileText className='w-3 h-3 mr-2' />
            Bullet Points
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* AI Rewrite */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            disabled={isLoading}
            className='text-xs'
          >
            {isLoading && loadingAction === 'rewrite' ? (
              <Loader2 className='w-3 h-3 animate-spin mr-1' />
            ) : (
              <Sparkles className='w-3 h-3 mr-1' />
            )}
            AI Improve
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleAIAction('rewrite', 'improve')}
          >
            <Sparkles className='w-3 h-3 mr-2' />
            Improve Writing
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleAIAction('rewrite', 'proofread')}
          >
            <CheckCircle className='w-3 h-3 mr-2' />
            Proofread
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleAIAction('rewrite', 'simplify')}
          >
            <Minimize2 className='w-3 h-3 mr-2' />
            Simplify
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAIAction('rewrite', 'expand')}>
            <Maximize2 className='w-3 h-3 mr-2' />
            Expand Content
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Processing Indicator */}
      {isLoading && (
        <div className='flex items-center text-xs text-muted-foreground'>
          <Loader2 className='w-3 h-3 animate-spin mr-1' />
          Processing with AI...
        </div>
      )}
    </div>
  )
}
