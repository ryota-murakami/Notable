'use client'

import React, { useState } from 'react'
import { Button } from '@/design-system/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Brain,
  CheckCircle,
  FileText,
  Lightbulb,
  List,
  Loader2,
  Maximize2,
  MessageCircleQuestion,
  Minimize2,
  PlusCircle,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface EnhancedAIToolbarProps {
  content: string
  onContentUpdate: (newContent: string) => void
  className?: string
}

type GenerationType = 'continue' | 'brainstorm' | 'answer' | 'outline' | 'ideas'

export function EnhancedAIToolbar({
  content,
  onContentUpdate,
  className = '',
}: EnhancedAIToolbarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingAction, setLoadingAction] = useState<string>('')
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false)
  const [generatePrompt, setGeneratePrompt] = useState('')
  const [generationType, setGenerationType] =
    useState<GenerationType>('continue')

  // Handle existing AI actions (summarize/rewrite)
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

  // Handle AI content generation
  const handleContentGeneration = async (
    type: GenerationType,
    prompt: string
  ) => {
    if (!prompt.trim()) {
      toast({
        title: 'Prompt required',
        description: 'Please enter a prompt for content generation.',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)
    setLoadingAction('generate')

    try {
      const response = await fetch('/api/ai/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          generationType: type,
          context: content,
          tone: 'professional',
          length: 'medium',
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Content generation failed')
      }

      // Add generated content to the note
      const separator = content.trim() ? '\n\n---\n\n' : ''
      const newContent = `${content}${separator}${result.data.generatedContent}`

      onContentUpdate(newContent)
      setIsGenerateDialogOpen(false)
      setGeneratePrompt('')

      toast({
        title: 'Content generated successfully',
        description: `Generated ${result.data.wordCount} words in ${result.data.processingTime}ms`,
      })
    } catch (error) {
      console.error('Content generation error:', error)
      toast({
        title: 'Content generation failed',
        description:
          error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
      setLoadingAction('')
    }
  }

  const getGenerationTypeConfig = (type: GenerationType) => {
    const configs = {
      continue: {
        icon: PlusCircle,
        label: 'Continue Writing',
        description: 'AI will continue your text naturally',
        placeholder: 'What should I continue writing about?',
      },
      brainstorm: {
        icon: Lightbulb,
        label: 'Brainstorm Ideas',
        description: 'Generate creative ideas on any topic',
        placeholder: 'What topic do you want to brainstorm about?',
      },
      answer: {
        icon: MessageCircleQuestion,
        label: 'Answer Question',
        description: 'Get AI answers based on your content',
        placeholder: 'What question do you want answered?',
      },
      outline: {
        icon: List,
        label: 'Create Outline',
        description: 'Generate structured outlines',
        placeholder: 'What topic do you want an outline for?',
      },
      ideas: {
        icon: Zap,
        label: 'Generate Ideas',
        description: 'Creative and actionable ideas',
        placeholder: 'What do you need ideas about?',
      },
    }
    return configs[type]
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Enhanced AI Content Generation */}
      <Dialog
        open={isGenerateDialogOpen}
        onOpenChange={setIsGenerateDialogOpen}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='secondary'
              size='sm'
              disabled={isLoading}
              className='text-xs'
            >
              {isLoading && loadingAction === 'generate' ? (
                <Loader2 className='w-3 h-3 animate-spin mr-1' />
              ) : (
                <Wand2 className='w-3 h-3 mr-1' />
              )}
              AI Generate
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className='flex items-center gap-2'>
              <Wand2 className='h-3 w-3' />
              AI Content Generation
              <Badge variant='secondary' className='ml-auto'>
                Premium
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DialogTrigger asChild>
              <DropdownMenuItem
                onClick={() => setGenerationType('continue')}
                className='flex items-center gap-2'
              >
                <PlusCircle className='w-3 h-3' />
                <div>
                  <div className='font-medium'>Continue Writing</div>
                  <div className='text-xs text-muted-foreground'>
                    AI continues your text naturally
                  </div>
                </div>
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onClick={() => setGenerationType('brainstorm')}
                className='flex items-center gap-2'
              >
                <Lightbulb className='w-3 h-3' />
                <div>
                  <div className='font-medium'>Brainstorm Ideas</div>
                  <div className='text-xs text-muted-foreground'>
                    Generate creative ideas
                  </div>
                </div>
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onClick={() => setGenerationType('answer')}
                className='flex items-center gap-2'
              >
                <MessageCircleQuestion className='w-3 h-3' />
                <div>
                  <div className='font-medium'>Answer Question</div>
                  <div className='text-xs text-muted-foreground'>
                    Get AI answers about your content
                  </div>
                </div>
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onClick={() => setGenerationType('outline')}
                className='flex items-center gap-2'
              >
                <List className='w-3 h-3' />
                <div>
                  <div className='font-medium'>Create Outline</div>
                  <div className='text-xs text-muted-foreground'>
                    Generate structured outlines
                  </div>
                </div>
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onClick={() => setGenerationType('ideas')}
                className='flex items-center gap-2'
              >
                <Zap className='w-3 h-3' />
                <div>
                  <div className='font-medium'>Generate Ideas</div>
                  <div className='text-xs text-muted-foreground'>
                    Creative and actionable ideas
                  </div>
                </div>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              {React.createElement(
                getGenerationTypeConfig(generationType).icon,
                { className: 'h-4 w-4' }
              )}
              {getGenerationTypeConfig(generationType).label}
            </DialogTitle>
            <DialogDescription>
              {getGenerationTypeConfig(generationType).description}
            </DialogDescription>
          </DialogHeader>

          <div className='grid gap-4 py-4'>
            <div className='space-y-2'>
              <label htmlFor='prompt' className='text-sm font-medium'>
                Prompt
              </label>
              <Textarea
                id='prompt'
                placeholder={
                  getGenerationTypeConfig(generationType).placeholder
                }
                value={generatePrompt}
                onChange={(e) => setGeneratePrompt(e.target.value)}
                className='min-h-[100px]'
              />
            </div>

            {content.trim() && (
              <div className='text-xs text-muted-foreground bg-muted/50 p-2 rounded'>
                <strong>Context:</strong> AI will use your current note content
                as context for generation.
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              onClick={() =>
                handleContentGeneration(generationType, generatePrompt)
              }
              disabled={isLoading || !generatePrompt.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-3 h-3 animate-spin mr-2' />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className='w-3 h-3 mr-2' />
                  Generate Content
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Summary */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='secondary'
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
            variant='secondary'
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
          {loadingAction === 'generate' && 'AI is generating content...'}
          {loadingAction === 'summarize' && 'AI is summarizing...'}
          {loadingAction === 'rewrite' && 'AI is improving text...'}
          {!['generate', 'summarize', 'rewrite'].includes(loadingAction) &&
            'Processing with AI...'}
        </div>
      )}

      {/* Premium Badge */}
      <Badge variant='secondary' className='text-xs'>
        <Brain className='w-2 h-2 mr-1' />
        Elite AI
      </Badge>
    </div>
  )
}
