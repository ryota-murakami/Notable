/**
 * AI Note Assistant Component
 * Premium feature that provides intelligent writing assistance within the block editor
 */

'use client'

import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Brain,
  CheckCircle,
  ChevronDown,
  Crown,
  Expand,
  FileText,
  Lightbulb,
  Loader2,
  Plus,
  RotateCcw,
  Shrink,
  Sparkles,
  Wand2,
  XCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAIContentGeneration, useAINoteAssistant } from '@/hooks/use-ai'

interface NoteAssistantProps {
  /** Selected text content */
  selectedText: string
  /** Full note content for context */
  noteContent?: string
  /** Note ID for tracking */
  noteId?: string
  /** Position for floating toolbar */
  position?: { x: number; y: number }
  /** Whether the assistant is visible */
  visible: boolean
  /** Callback when suggestion is accepted */
  onAcceptSuggestion?: (suggestion: string) => void
  /** Callback when assistant should close */
  onClose?: () => void
  /** Whether user has premium access */
  isPremium: boolean
  /** Custom CSS classes */
  className?: string
}

type AssistantAction =
  | 'improve'
  | 'expand'
  | 'summarize'
  | 'rewrite'
  | 'complete'
type WritingStyle = 'formal' | 'casual' | 'academic' | 'creative'

export const NoteAssistant: React.FC<NoteAssistantProps> = ({
  selectedText,
  noteContent,
  noteId,
  position,
  visible,
  onAcceptSuggestion,
  onClose,
  isPremium,
  className,
}) => {
  const [currentAction, setCurrentAction] = useState<AssistantAction | null>(
    null
  )
  const [writingStyle, setWritingStyle] = useState<WritingStyle>('casual')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const assistantRef = useRef<HTMLDivElement>(null)

  const {
    assistWithNote,
    isAssisting,
    data: assistantData,
    error: assistantError,
    reset,
  } = useAINoteAssistant()
  const {
    generateContent,
    isGenerating,
    data: generationData,
    error: generationError,
  } = useAIContentGeneration()

  // Handle AI assistant response
  useEffect(() => {
    if (assistantData?.data?.content) {
      try {
        const parsed = JSON.parse(assistantData.data.content)
        setSuggestions([parsed.improvedContent])
        setShowSuggestions(true)
      } catch (error) {
        console.error('Failed to parse assistant response:', error)
      }
    }
  }, [assistantData])

  // Handle content generation response
  useEffect(() => {
    if (generationData?.data?.content) {
      try {
        const parsed = JSON.parse(generationData.data.content)
        setSuggestions([parsed.content])
        setShowSuggestions(true)
      } catch (error) {
        console.error('Failed to parse generation response:', error)
      }
    }
  }, [generationData])

  // Close assistant when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        assistantRef.current &&
        !assistantRef.current.contains(event.target as Node)
      ) {
        onClose?.()
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible, onClose])

  const handleAction = useCallback(
    async (action: AssistantAction) => {
      if (!isPremium) return
      if (!selectedText.trim()) return

      setCurrentAction(action)
      setShowSuggestions(false)
      setSuggestions([])

      try {
        await assistWithNote(selectedText, action, {
          noteId: noteId || 'unknown',
          userStyle: writingStyle,
        })
      } catch (error) {
        console.error('AI assistant error:', error)
      }
    },
    [selectedText, noteId, writingStyle, assistWithNote, isPremium]
  )

  const handleGenerateContent = useCallback(
    async (prompt: string) => {
      if (!isPremium) return

      setCurrentAction('complete')
      setShowSuggestions(false)
      setSuggestions([])

      try {
        await generateContent(prompt, {
          noteContext: noteContent?.substring(0, 1000),
          format: 'paragraph',
        })
      } catch (error) {
        console.error('AI generation error:', error)
      }
    },
    [noteContent, generateContent, isPremium]
  )

  const handleAcceptSuggestion = useCallback(
    (suggestion: string) => {
      onAcceptSuggestion?.(suggestion)
      setShowSuggestions(false)
      setSuggestions([])
      onClose?.()
    },
    [onAcceptSuggestion, onClose]
  )

  const handleRejectSuggestion = useCallback(() => {
    setShowSuggestions(false)
    setSuggestions([])
    reset()
  }, [reset])

  if (!visible) return null

  return (
    <TooltipProvider>
      <div
        ref={assistantRef}
        className={cn(
          'fixed z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg',
          'min-w-[320px] max-w-[500px]',
          className
        )}
        style={{
          left: position?.x || 0,
          top: position?.y || 0,
        }}
      >
        {/* Assistant Header */}
        <div className='flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700'>
          <div className='flex items-center gap-2'>
            <Brain className='h-4 w-4 text-blue-500' />
            <span className='font-medium text-sm'>AI Assistant</span>
            <Badge variant='secondary' className='text-xs'>
              <Crown className='h-2 w-2 mr-1' />
              Premium
            </Badge>
          </div>
          <Button
            variant='ghost'
            size='sm'
            onClick={onClose}
            className='h-6 w-6 p-0'
          >
            <XCircle className='h-3 w-3' />
          </Button>
        </div>

        {!isPremium ? (
          /* Premium Upgrade Prompt */
          <div className='p-4 text-center'>
            <Crown className='h-8 w-8 text-amber-500 mx-auto mb-2' />
            <p className='text-sm text-muted-foreground mb-3'>
              AI writing assistance requires Premium
            </p>
            <Button size='sm' className='w-full'>
              Upgrade to Premium
            </Button>
          </div>
        ) : (
          <>
            {/* Action Buttons */}
            {!showSuggestions && (
              <div className='p-3 space-y-2'>
                <div className='text-xs text-muted-foreground mb-2'>
                  Selected: "{selectedText.substring(0, 50)}
                  {selectedText.length > 50 ? '...' : ''}"
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => handleAction('improve')}
                        disabled={isAssisting || isGenerating}
                        className='text-xs h-8'
                      >
                        <Wand2 className='h-3 w-3 mr-1' />
                        Improve
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enhance clarity and readability</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => handleAction('expand')}
                        disabled={isAssisting || isGenerating}
                        className='text-xs h-8'
                      >
                        <Expand className='h-3 w-3 mr-1' />
                        Expand
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add more detail and examples</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => handleAction('summarize')}
                        disabled={isAssisting || isGenerating}
                        className='text-xs h-8'
                      >
                        <Shrink className='h-3 w-3 mr-1' />
                        Summarize
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create a concise summary</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => handleAction('rewrite')}
                        disabled={isAssisting || isGenerating}
                        className='text-xs h-8'
                      >
                        <RotateCcw className='h-3 w-3 mr-1' />
                        Rewrite
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Rewrite in different style</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <Separator />

                {/* Content Generation */}
                <div className='space-y-2'>
                  <div className='text-xs font-medium text-muted-foreground'>
                    Generate Content
                  </div>
                  <div className='flex gap-1'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        handleGenerateContent('Continue this thought naturally')
                      }
                      disabled={isAssisting || isGenerating}
                      className='text-xs h-7 flex-1'
                    >
                      <Plus className='h-3 w-3 mr-1' />
                      Continue
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() =>
                        handleGenerateContent(
                          'Create an outline for this topic'
                        )
                      }
                      disabled={isAssisting || isGenerating}
                      className='text-xs h-7 flex-1'
                    >
                      <FileText className='h-3 w-3 mr-1' />
                      Outline
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Writing Style Selector */}
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-muted-foreground'>
                    Writing Style:
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        className='text-xs h-7'
                      >
                        {writingStyle}
                        <ChevronDown className='h-3 w-3 ml-1' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem
                        onClick={() => setWritingStyle('casual')}
                      >
                        Casual
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setWritingStyle('formal')}
                      >
                        Formal
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setWritingStyle('academic')}
                      >
                        Academic
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setWritingStyle('creative')}
                      >
                        Creative
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}

            {/* Loading State */}
            {(isAssisting || isGenerating) && (
              <div className='p-4 text-center'>
                <Loader2 className='h-6 w-6 animate-spin mx-auto mb-2 text-blue-500' />
                <p className='text-sm text-muted-foreground'>
                  AI is{' '}
                  {currentAction === 'complete' ? 'generating' : 'analyzing'}{' '}
                  your content...
                </p>
              </div>
            )}

            {/* AI Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className='p-3 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-2 mb-3'>
                  <Sparkles className='h-4 w-4 text-blue-500' />
                  <span className='text-sm font-medium'>AI Suggestion</span>
                </div>

                <div className='space-y-3'>
                  {suggestions.map((suggestion, index) => (
                    <Card
                      key={index}
                      className='border-blue-200 bg-blue-50/50 dark:bg-blue-950/20'
                    >
                      <CardContent className='p-3'>
                        <div className='text-sm leading-relaxed mb-3'>
                          {suggestion}
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={() => handleAcceptSuggestion(suggestion)}
                            className='h-7 text-xs'
                          >
                            <CheckCircle className='h-3 w-3 mr-1' />
                            Accept
                          </Button>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={handleRejectSuggestion}
                            className='h-7 text-xs'
                          >
                            <XCircle className='h-3 w-3 mr-1' />
                            Reject
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Error State */}
            {(assistantError || generationError) && (
              <div className='p-3 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-2 text-red-600 text-sm'>
                  <XCircle className='h-4 w-4' />
                  <span>AI assistance temporarily unavailable</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </TooltipProvider>
  )
}

/**
 * AI Quick Actions Toolbar
 * Shows common AI actions in a compact floating toolbar
 */
interface QuickActionsProps {
  selectedText: string
  onAction: (action: AssistantAction) => void
  position?: { x: number; y: number }
  visible: boolean
  isPremium: boolean
  isLoading?: boolean
}

export const AIQuickActions: React.FC<QuickActionsProps> = ({
  selectedText,
  onAction,
  position,
  visible,
  isPremium,
  isLoading = false,
}) => {
  if (!visible || !selectedText.trim()) return null

  return (
    <div
      className='fixed z-40 bg-black/90 text-white rounded-lg shadow-lg flex items-center gap-1 p-1'
      style={{
        left: position?.x || 0,
        top: (position?.y || 0) - 40,
      }}
    >
      {isPremium ? (
        <>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => onAction('improve')}
            disabled={isLoading}
            className='h-7 px-2 text-xs text-white hover:bg-white/20'
          >
            <Wand2 className='h-3 w-3 mr-1' />
            Improve
          </Button>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => onAction('expand')}
            disabled={isLoading}
            className='h-7 px-2 text-xs text-white hover:bg-white/20'
          >
            <Expand className='h-3 w-3 mr-1' />
            Expand
          </Button>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => onAction('complete')}
            disabled={isLoading}
            className='h-7 px-2 text-xs text-white hover:bg-white/20'
          >
            <Plus className='h-3 w-3 mr-1' />
            Complete
          </Button>
        </>
      ) : (
        <div className='flex items-center gap-2 px-2'>
          <Crown className='h-3 w-3 text-amber-400' />
          <span className='text-xs'>Premium required</span>
        </div>
      )}
    </div>
  )
}

/**
 * AI Writing Insights Panel
 * Shows writing statistics and suggestions in a side panel
 */
interface WritingInsightsProps {
  content: string
  visible: boolean
  onClose: () => void
  className?: string
}

export const AIWritingInsights: React.FC<WritingInsightsProps> = ({
  content,
  visible,
  onClose,
  className,
}) => {
  const [insights, setInsights] = useState({
    wordCount: 0,
    readingTime: 0,
    sentiment: 'neutral' as 'positive' | 'negative' | 'neutral',
    complexity: 'medium' as 'low' | 'medium' | 'high',
    suggestions: [] as string[],
  })

  useEffect(() => {
    if (content && visible) {
      // Calculate basic insights
      const words = content.trim().split(/\s+/).length
      const readingTime = Math.ceil(words / 200) // 200 WPM average

      setInsights({
        wordCount: words,
        readingTime,
        sentiment: 'neutral', // Would integrate with sentiment analysis
        complexity: words > 500 ? 'high' : words > 200 ? 'medium' : 'low',
        suggestions: [
          'Consider adding more examples to clarify your points',
          'Break up long paragraphs for better readability',
          'Add subheadings to improve structure',
        ],
      })
    }
  }, [content, visible])

  if (!visible) return null

  return (
    <Card className={cn('w-80', className)}>
      <CardHeader className='pb-3'>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-sm flex items-center gap-2'>
            <Lightbulb className='h-4 w-4 text-amber-500' />
            AI Insights
          </CardTitle>
          <Button
            variant='ghost'
            size='sm'
            onClick={onClose}
            className='h-6 w-6 p-0'
          >
            <XCircle className='h-3 w-3' />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Writing Stats */}
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <div className='text-muted-foreground'>Words</div>
            <div className='font-medium'>{insights.wordCount}</div>
          </div>
          <div>
            <div className='text-muted-foreground'>Reading Time</div>
            <div className='font-medium'>{insights.readingTime} min</div>
          </div>
        </div>

        <Separator />

        {/* AI Suggestions */}
        <div>
          <div className='text-sm font-medium mb-2'>Suggestions</div>
          <div className='space-y-2'>
            {insights.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className='text-xs text-muted-foreground p-2 bg-muted/50 rounded'
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
