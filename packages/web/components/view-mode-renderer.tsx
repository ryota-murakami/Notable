'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { Note } from '@/types/note'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Calendar, Tag, Clock } from 'lucide-react'

interface ViewModeRendererProps {
  note: Note
  className?: string
}

// Types for Plate.js node structure
type PlateNode =
  | {
      text?: string
      children?: PlateNode[]
      [key: string]: unknown
    }
  | string

// Helper function to extract text from Plate.js node structure
const extractTextFromNode = (node: PlateNode): string => {
  if (typeof node === 'string') {
    return node
  }

  if (node.text) {
    return node.text
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractTextFromNode).join('')
  }

  return ''
}

export function ViewModeRenderer({ note, className }: ViewModeRendererProps) {
  const [tableOfContents, setTableOfContents] = useState<
    Array<{ id: string; title: string; level: number }>
  >([])
  const [activeHeading, setActiveHeading] = useState<string>('')

  // Generate table of contents from note content
  useEffect(() => {
    if (!note.content) return

    const headings = note.content.match(/^#{1,6}\s+.+$/gm)
    if (!headings) return

    const toc = headings.map((heading, index) => {
      const level = heading.match(/^#+/)?.[0].length || 1
      const title = heading.replace(/^#+\s+/, '')
      const id = `heading-${index}`
      return { id, title, level }
    })

    setTableOfContents(toc)
  }, [note.content])

  // Scroll to heading
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveHeading(id)
    }
  }

  // Parse markdown content for display
  const parseMarkdown = (content: string) => {
    // Handle Plate.js JSON content format
    let textContent = content
    try {
      const parsed = JSON.parse(content)
      if (Array.isArray(parsed)) {
        textContent = parsed
          .map((node) => extractTextFromNode(node))
          .join('\n\n')
      }
    } catch {
      // If it's not JSON, assume it's already markdown text
      textContent = content
    }

    let html = textContent

    // Headers
    html = html.replace(
      /^### (.*$)/gm,
      '<h3 id="heading-$1" class="text-xl font-semibold mb-4 mt-6 text-foreground">$1</h3>'
    )
    html = html.replace(
      /^## (.*$)/gm,
      '<h2 id="heading-$1" class="text-2xl font-semibold mb-4 mt-8 text-foreground">$1</h2>'
    )
    html = html.replace(
      /^# (.*$)/gm,
      '<h1 id="heading-$1" class="text-3xl font-bold mb-6 mt-8 text-foreground">$1</h1>'
    )

    // Bold and italic
    html = html.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold">$1</strong>'
    )
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

    // Inline code
    html = html.replace(
      /`(.*?)`/g,
      '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">$1</code>'
    )

    // Links
    html = html.replace(
      /\[([^\]]*)\]\(([^)]*)\)/g,
      '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">$1</a>'
    )

    // Lists
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">• $1</li>')
    html = html.replace(
      /^\d+\. (.*$)/gm,
      '<li class="ml-4 mb-1 list-decimal">$1</li>'
    )

    // Code blocks
    html = html.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm font-mono">$1</code></pre>'
    )

    // Blockquotes
    html = html.replace(
      /^> (.*$)/gm,
      '<blockquote class="border-l-4 border-accent pl-4 py-2 my-4 italic text-muted-foreground">$1</blockquote>'
    )

    // Paragraphs
    html = html.replace(
      /^(?!<[h|l|p|b|c])(.*$)/gm,
      '<p class="mb-4 leading-relaxed text-foreground">$1</p>'
    )

    return html
  }

  const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const updatedDate = new Date(note.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hasLongContent = note.content.length > 1000
  const showTableOfContents = hasLongContent && tableOfContents.length > 0

  return (
    <div className={cn('flex h-full', className)}>
      {/* Table of Contents */}
      {showTableOfContents && (
        <div className='hidden lg:block w-64 border-r bg-muted/20'>
          <div className='p-4'>
            <h3 className='font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground'>
              Table of Contents
            </h3>
            <ScrollArea className='h-[calc(100vh-200px)]'>
              <nav className='space-y-1'>
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={cn(
                      'block w-full text-left text-sm py-1 px-2 rounded hover:bg-accent transition-colors',
                      `ml-${(item.level - 1) * 3}`,
                      activeHeading === item.id
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        <ScrollArea className='flex-1'>
          <article className='max-w-4xl mx-auto px-6 py-8'>
            {/* Header */}
            <header className='mb-8'>
              <h1 className='text-4xl font-bold mb-6 text-foreground leading-tight'>
                {note.title || 'Untitled'}
              </h1>

              {/* Metadata */}
              <div className='flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6'>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-4 w-4' />
                  <span>Created {formattedDate}</span>
                </div>
                {note.updatedAt !== note.createdAt && (
                  <div className='flex items-center gap-2'>
                    <Clock className='h-4 w-4' />
                    <span>Updated {updatedDate}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {note.tags && note.tags.length > 0 && (
                <div className='flex items-center gap-2 mb-6'>
                  <Tag className='h-4 w-4 text-muted-foreground' />
                  <div className='flex flex-wrap gap-2'>
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </header>

            {/* Content */}
            <div className='prose prose-lg max-w-none'>
              {note.content ? (
                <div
                  className='view-mode-content'
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdown(note.content),
                  }}
                />
              ) : (
                <div className='text-center py-12 text-muted-foreground'>
                  <p className='text-lg mb-2'>This note is empty</p>
                  <p className='text-sm'>Switch to edit mode to add content</p>
                </div>
              )}
            </div>
          </article>
        </ScrollArea>
      </div>
    </div>
  )
}
