/**
 * Markdown to Slate Converter
 * Converts processed template markdown content to Slate Descendant[] format
 */

import type { Descendant } from 'slate'

interface SlateElement {
  type:
    | 'paragraph'
    | 'heading-one'
    | 'heading-two'
    | 'heading-three'
    | 'block-quote'
    | 'bulleted-list'
    | 'numbered-list'
    | 'list-item'
  children: Array<SlateText | SlateElement>
}

interface SlateText {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export function markdownToSlate(markdown: string): Descendant[] {
  if (!markdown || typeof markdown !== 'string') {
    return [{ type: 'paragraph', children: [{ text: '' }] }]
  }

  const lines = markdown.split('\n')
  const result: Descendant[] = []
  let currentListItems: Array<{ type: 'list-item'; children: SlateText[] }> = []
  let currentListType: 'bulleted-list' | 'numbered-list' | null = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Skip empty lines but end lists
    if (!trimmed) {
      if (currentListItems.length > 0) {
        result.push({
          type: currentListType as 'ul' | 'ol',
          children: currentListItems,
        } as any)
        currentListItems = []
        currentListType = null
      }
      // Add empty paragraph for spacing
      result.push({ type: 'paragraph', children: [{ text: '' }] })
      continue
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      flushList()
      result.push({
        type: 'heading-one',
        children: parseInlineStyles(trimmed.slice(2)),
      })
    } else if (trimmed.startsWith('## ')) {
      flushList()
      result.push({
        type: 'heading-two',
        children: parseInlineStyles(trimmed.slice(3)),
      })
    } else if (trimmed.startsWith('### ')) {
      flushList()
      result.push({
        type: 'heading-three',
        children: parseInlineStyles(trimmed.slice(4)),
      })
    }
    // Block quotes
    else if (trimmed.startsWith('> ')) {
      flushList()
      result.push({
        type: 'block-quote',
        children: parseInlineStyles(trimmed.slice(2)),
      })
    }
    // Unordered lists
    else if (trimmed.match(/^[-*+]\s/)) {
      if (currentListType !== 'bulleted-list') {
        flushList()
        currentListType = 'bulleted-list'
      }
      currentListItems.push({
        type: 'list-item',
        children: parseInlineStyles(trimmed.replace(/^[-*+]\s/, '')),
      })
    }
    // Ordered lists
    else if (trimmed.match(/^\d+\.\s/)) {
      if (currentListType !== 'numbered-list') {
        flushList()
        currentListType = 'numbered-list'
      }
      currentListItems.push({
        type: 'list-item',
        children: parseInlineStyles(trimmed.replace(/^\d+\.\s/, '')),
      })
    }
    // Code blocks (basic support)
    else if (trimmed.startsWith('```')) {
      flushList()
      // Find the end of the code block
      let codeContent = ''
      let j = i + 1
      while (j < lines.length && !lines[j].trim().startsWith('```')) {
        codeContent += (j > i + 1 ? '\n' : '') + lines[j]
        j++
      }
      i = j // Skip to end of code block
      result.push({
        type: 'paragraph',
        children: [{ text: codeContent, code: true }],
      })
    }
    // Horizontal rules
    else if (trimmed.match(/^---+$/)) {
      flushList()
      result.push({ type: 'paragraph', children: [{ text: '---' }] })
    }
    // Regular paragraphs
    else {
      flushList()
      // Skip lines that are just formatting markers
      if (
        trimmed === '---' ||
        (trimmed.startsWith('*') &&
          trimmed.endsWith('*') &&
          trimmed.length < 10)
      ) {
        result.push({ type: 'paragraph', children: [{ text: trimmed }] })
      } else {
        result.push({
          type: 'paragraph',
          children: parseInlineStyles(trimmed),
        })
      }
    }
  }

  // Flush any remaining list items
  flushList()

  // Helper function to flush current list
  function flushList() {
    if (currentListItems.length > 0) {
      result.push({
        type: currentListType as 'ul' | 'ol',
        children: currentListItems as any,
      } as any)
      currentListItems = []
      currentListType = null
    }
  }

  // Return empty paragraph if no content
  return result.length > 0
    ? result
    : [{ type: 'paragraph', children: [{ text: '' }] }]
}

/**
 * Parse inline text styles (bold, italic, code, etc.)
 */
function parseInlineStyles(text: string): SlateText[] {
  if (!text) return [{ text: '' }]

  const result: SlateText[] = []
  const currentText = text
  const _currentIndex = 0

  // Simple regex patterns for markdown formatting
  const patterns = [
    { regex: /\*\*([^*]+)\*\*/g, style: 'bold' },
    { regex: /\*([^*]+)\*/g, style: 'italic' },
    { regex: /__([^_]+)__/g, style: 'underline' },
    { regex: /~~([^~]+)~~/g, style: 'strikethrough' },
    { regex: /`([^`]+)`/g, style: 'code' },
  ]

  // For now, do simple processing without overlapping styles
  // This is a basic implementation - could be enhanced for complex cases
  let processedText = currentText

  // Process each pattern
  patterns.forEach((pattern) => {
    processedText = processedText.replace(pattern.regex, (match, content) => {
      // Mark this content with special markers for later processing
      return `|||${pattern.style}|||${content}|||/${pattern.style}|||`
    })
  })

  // Now parse the marked content
  const segments = processedText.split('|||')
  const currentStyles: Record<string, boolean> = {}

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]

    if (segment.startsWith('/')) {
      // End tag - remove style
      const style = segment.slice(1)
      delete currentStyles[style]
    } else if (
      ['bold', 'italic', 'underline', 'strikethrough', 'code'].includes(segment)
    ) {
      // Start tag - add style
      currentStyles[segment] = true
    } else if (segment) {
      // Text content
      result.push({
        text: segment,
        ...currentStyles,
      })
    }
  }

  // If no formatting was found, return plain text
  if (result.length === 0) {
    return [{ text }]
  }

  return result
}

/**
 * Convert Slate content back to markdown (for debugging/export)
 */
export function slateToMarkdown(nodes: Descendant[]): string {
  return nodes.map((node) => nodeToMarkdown(node)).join('\n\n')
}

function nodeToMarkdown(node: Descendant): string {
  if ('text' in node) {
    // Text node
    let text = node.text
    if (node.bold) text = `**${text}**`
    if (node.italic) text = `*${text}*`
    if (node.code) text = `\`${text}\``
    if (node.underline) text = `__${text}__`
    if (node.strikethrough) text = `~~${text}~~`
    return text
  } else {
    // Element node
    const children = node.children
      .map((child) => nodeToMarkdown(child))
      .join('')

    switch (node.type) {
      case 'heading-one':
        return `# ${children}`
      case 'heading-two':
        return `## ${children}`
      case 'heading-three':
        return `### ${children}`
      case 'block-quote':
        return `> ${children}`
      case 'bulleted-list':
        return node.children
          .map((child) => `- ${nodeToMarkdown(child)}`)
          .join('\n')
      case 'numbered-list':
        return node.children
          .map((child, index) => `${index + 1}. ${nodeToMarkdown(child)}`)
          .join('\n')
      case 'list-item':
        return children
      default:
        return children
    }
  }
}
