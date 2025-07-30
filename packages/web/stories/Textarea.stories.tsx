import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Textarea } from '../design-system/components/textarea'
import { Button } from '../design-system/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { Badge } from '../design-system/components/badge'
import { useState } from 'react'
import {
  Copy,
  FileText,
  MessageSquare,
  PenTool,
  RotateCcw,
  Send,
  Sparkles,
} from 'lucide-react'

const meta: Meta<typeof Textarea> = {
  title: 'Notable Design System/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-line text input component for longer content like note descriptions, comments, and messages. Essential for content creation in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    cols: {
      control: 'number',
      description: 'Visible width of text area',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Textarea Stories
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue:
      'This is some initial content in the textarea. You can edit this text to see how the component behaves with existing content.',
    placeholder: 'Enter your text...',
  },
}

export const MultilineContent: Story = {
  args: {
    defaultValue:
      'Line 1: This is the first line\nLine 2: This is the second line\nLine 3: This is the third line\n\nThis textarea demonstrates how multi-line content is handled.',
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with multi-line content and specified height',
      },
    },
  },
}

export const CustomRows: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Small (3 rows)</label>
        <Textarea rows={3} placeholder='Short notes...' />
      </div>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Medium (6 rows)</label>
        <Textarea rows={6} placeholder='Medium length content...' />
      </div>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Large (10 rows)</label>
        <Textarea rows={10} placeholder='Long form content...' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different textarea heights using the rows prop',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled and cannot be edited.',
    placeholder: 'This is disabled...',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Enter your feedback...',
    className: 'border-destructive focus-visible:ring-destructive',
    defaultValue: 'This content has validation errors.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with error styling (red border)',
      },
    },
  },
}

export const WithSuccess: Story = {
  args: {
    placeholder: 'Enter your message...',
    className: 'border-green-500 focus-visible:ring-green-500',
    defaultValue: 'This content has been validated successfully.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with success styling (green border)',
      },
    },
  },
}

// Interactive Examples
export const NoteDescriptionForm: Story = {
  render: () => {
    const [description, setDescription] = useState('')
    const [charCount, setCharCount] = useState(0)
    const maxChars = 500

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value
      if (value.length <= maxChars) {
        setDescription(value)
        setCharCount(value.length)
      }
    }

    return (
      <div className='w-96 space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Note Description</label>
          <Textarea
            value={description}
            onChange={handleChange}
            placeholder='Describe what this note is about...'
            rows={4}
          />
          <div className='flex justify-between items-center'>
            <span className='text-xs text-muted-foreground'>
              Optional: Help others understand your note
            </span>
            <span
              className={`text-xs ${
                charCount > maxChars * 0.9
                  ? 'text-destructive'
                  : charCount > maxChars * 0.7
                    ? 'text-warning'
                    : 'text-muted-foreground'
              }`}
            >
              {charCount}/{maxChars}
            </span>
          </div>
        </div>
        <Button className='w-full' disabled={description.trim().length === 0}>
          <FileText className='mr-2 h-4 w-4' />
          Save Description
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Note description form with character count and validation',
      },
    },
  },
}

export const CommentSystem: Story = {
  render: () => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([
      {
        id: 1,
        author: 'Sarah Chen',
        text: 'Great insights in this note! The project timeline section is particularly helpful.',
        time: '2 hours ago',
      },
      {
        id: 2,
        author: 'Alex Rodriguez',
        text: 'I think we should also consider the budget constraints mentioned in the previous meeting.',
        time: '1 hour ago',
      },
    ])

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (comment.trim()) {
        setComments([
          ...comments,
          {
            id: comments.length + 1,
            author: 'You',
            text: comment,
            time: 'just now',
          },
        ])
        setComment('')
      }
    }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <MessageSquare className='h-5 w-5' />
            Comments
          </CardTitle>
          <CardDescription>Discuss this note with your team</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-3'>
            {comments.map((comment) => (
              <div key={comment.id} className='p-3 bg-muted/50 rounded-lg'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='font-medium text-sm'>{comment.author}</span>
                  <span className='text-xs text-muted-foreground'>
                    {comment.time}
                  </span>
                </div>
                <p className='text-sm'>{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className='space-y-3'>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Add a comment...'
              rows={3}
            />
            <div className='flex justify-end'>
              <Button type='submit' size='sm' disabled={!comment.trim()}>
                <Send className='mr-2 h-4 w-4' />
                Post Comment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Comment system with textarea for adding new comments',
      },
    },
  },
}

export const AIWritingAssistant: Story = {
  render: () => {
    const [content, setContent] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [suggestions, setSuggestions] = useState<string[]>([])

    const handleAIAssist = () => {
      setIsGenerating(true)
      // Simulate AI generation
      setTimeout(() => {
        setSuggestions([
          'Consider expanding on the main benefits of this approach',
          'Add specific examples to support your points',
          'Include relevant data or statistics to strengthen the argument',
        ])
        setIsGenerating(false)
      }, 2000)
    }

    const handleApplySuggestion = (suggestion: string) => {
      setContent((prev) => `${prev}\n\n${suggestion}`)
      setSuggestions((prev) => prev.filter((s) => s !== suggestion))
    }

    return (
      <Card className='w-[500px]'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <PenTool className='h-5 w-5' />
            AI Writing Assistant
          </CardTitle>
          <CardDescription>Let AI help improve your writing</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Your Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your note, and I'll help you improve it..."
              rows={8}
            />
          </div>

          <div className='flex gap-2'>
            <Button
              onClick={handleAIAssist}
              disabled={!content.trim() || isGenerating}
              size='sm'
            >
              <Sparkles className='mr-2 h-4 w-4' />
              {isGenerating ? 'Analyzing...' : 'Get AI Suggestions'}
            </Button>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => setContent('')}
            >
              <RotateCcw className='mr-2 h-4 w-4' />
              Clear
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className='space-y-2'>
              <label className='text-sm font-medium'>AI Suggestions</label>
              <div className='space-y-2'>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg'
                  >
                    <div className='flex-1 text-sm'>{suggestion}</div>
                    <Button
                      size='sm'
                      variant='secondary'
                      onClick={() => handleApplySuggestion(suggestion)}
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'AI-powered writing assistant with suggestions and content improvement',
      },
    },
  },
}

// Notable App Examples
export const NotableNoteEditor: Story = {
  render: () => {
    const [title, setTitle] = useState('Meeting Notes - Q4 Planning')
    const [content, setContent] = useState(`# Agenda Items

1. Review Q4 goals and objectives
2. Discuss budget allocation
3. Timeline for major deliverables
4. Team capacity planning

## Key Discussion Points

The team discussed the importance of realistic goal setting for Q4. We need to balance ambitious targets with available resources.

## Action Items

- [ ] Finalize budget proposal by Friday
- [ ] Schedule follow-up meeting with stakeholders
- [ ] Review resource allocation plan`)

    const [wordCount, setWordCount] = useState(0)
    const [tags, _setTags] = useState(['meeting', 'planning', 'q4'])

    React.useEffect(() => {
      setWordCount(
        content
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length
      )
    }, [content])

    return (
      <Card className='w-[600px]'>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle>Note Editor</CardTitle>
              <CardDescription>
                Create and edit your notes with rich formatting
              </CardDescription>
            </div>
            <div className='flex gap-2'>
              <Badge variant='secondary'>{wordCount} words</Badge>
              <Badge variant='secondary'>Auto-saved</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='text-2xl font-bold border-none bg-transparent p-0 focus:outline-none w-full'
              placeholder='Untitled Note'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge key={tag} variant='secondary' className='cursor-pointer'>
                #{tag}
                <button className='ml-1 hover:text-destructive'>×</button>
              </Badge>
            ))}
            <Badge variant='secondary' className='cursor-pointer border-dashed'>
              + Add tag
            </Badge>
          </div>

          <div className='space-y-2'>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Start writing your note...'
              rows={15}
              className='font-mono text-sm'
            />
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <Button variant='ghost' size='sm'>
                <Copy className='mr-2 h-4 w-4' />
                Copy Link
              </Button>
            </div>
            <div className='flex gap-2'>
              <Button variant='secondary'>Save Draft</Button>
              <Button>Publish</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Complete note editor interface with title, tags, content area, and publishing controls',
      },
    },
  },
}

export const FeedbackForm: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('')
    const [category, setCategory] = useState('general')

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Send Feedback</CardTitle>
          <CardDescription>
            Help us improve Notable with your suggestions
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full px-3 py-2 border border-input rounded-md bg-background'
            >
              <option value='general'>General Feedback</option>
              <option value='bug'>Bug Report</option>
              <option value='feature'>Feature Request</option>
              <option value='performance'>Performance Issue</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Your Feedback</label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder='Tell us about your experience, report a bug, or suggest a new feature...'
              rows={6}
            />
            <p className='text-xs text-muted-foreground'>
              Be as detailed as possible to help us understand your feedback
            </p>
          </div>

          <div className='flex gap-2'>
            <Button variant='secondary' className='flex-1'>
              Cancel
            </Button>
            <Button className='flex-1' disabled={!feedback.trim()}>
              <Send className='mr-2 h-4 w-4' />
              Send Feedback
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Feedback form with category selection and detailed feedback textarea',
      },
    },
  },
}

// Advanced Examples
export const ResizableTextarea: Story = {
  render: () => (
    <div className='w-96 space-y-4'>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Vertical Resize Only</label>
        <Textarea
          placeholder='This textarea can only be resized vertically...'
          rows={4}
          className='resize-y'
        />
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-medium'>Horizontal Resize Only</label>
        <Textarea
          placeholder='This textarea can only be resized horizontally...'
          rows={4}
          className='resize-x'
        />
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-medium'>No Resize</label>
        <Textarea
          placeholder='This textarea cannot be resized...'
          rows={4}
          className='resize-none'
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different resize behaviors for textarea elements',
      },
    },
  },
}

export const AutoExpandingTextarea: Story = {
  render: () => {
    const [content, setContent] = useState('')

    // Calculate rows based on content
    const calculateRows = (text: string) => {
      const lines = text.split('\n').length
      const minRows = 3
      const maxRows = 15
      return Math.min(Math.max(lines, minRows), maxRows)
    }

    return (
      <div className='w-96 space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Auto-Expanding Textarea</label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Start typing and watch this textarea expand automatically...'
            rows={calculateRows(content)}
          />
          <p className='text-xs text-muted-foreground'>
            This textarea automatically adjusts its height based on content
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea that automatically expands based on content length',
      },
    },
  },
}
