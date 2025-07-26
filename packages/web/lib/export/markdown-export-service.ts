import { BaseExportService, BaseContentProcessor } from './base-export-service'
import { Note } from '../../types/note'
import {
  ExportOptions,
  MarkdownExportOptions,
  ExportResult,
} from '../../types/export'

/**
 * Markdown export service
 */
export class MarkdownExportService extends BaseExportService {
  constructor() {
    super(new MarkdownContentProcessor())
  }

  /**
   * Export note with markdown-specific processing
   */
  async exportNote(note: Note, options: ExportOptions): Promise<ExportResult> {
    const mdOptions = options as MarkdownExportOptions

    // Generate front matter if requested
    let frontMatter = ''
    if (mdOptions.includeFrontMatter) {
      frontMatter = this.generateFrontMatter(note, mdOptions)
    }

    // Process the main content
    const result = await super.exportNote(note, options)

    // Combine front matter with content
    const finalContent = frontMatter + result.content

    return {
      ...result,
      content: finalContent,
      size: Buffer.byteLength(finalContent, 'utf8'),
    }
  }

  /**
   * Generate YAML front matter
   */
  private generateFrontMatter(
    note: Note,
    options: MarkdownExportOptions
  ): string {
    const frontMatterData: Record<string, any> = {
      title: note.title,
      id: note.id,
    }

    if (options.includeDates) {
      frontMatterData.created_at = note.created_at
      frontMatterData.updated_at = note.updated_at
    }

    if (options.includeTags && note.tags?.length) {
      frontMatterData.tags = note.tags
    }

    // Add custom metadata
    if (note.is_folder) {
      frontMatterData.type = 'folder'
    }

    const yamlLines = Object.entries(frontMatterData).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n${value.map((v) => `  - ${v}`).join('\n')}`
      }
      return `${key}: ${JSON.stringify(value)}`
    })

    return `---\n${yamlLines.join('\n')}\n---\n\n`
  }

  /**
   * Validate markdown-specific options
   */
  protected validateFormatSpecificOptions(
    options: ExportOptions,
    errors: string[]
  ): void {
    const mdOptions = options as MarkdownExportOptions

    if (mdOptions.imageHandling === 'link' && !mdOptions.imageBaseUrl) {
      errors.push(
        'imageBaseUrl is required when imageHandling is set to "link"'
      )
    }
  }
}

/**
 * Markdown content processor for Plate.js nodes
 */
export class MarkdownContentProcessor extends BaseContentProcessor {
  /**
   * Process text node with markdown formatting
   */
  protected async processTextNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    let text = node.text || ''

    // Apply text formatting
    if (node.bold) {
      text = `**${text}**`
    }
    if (node.italic) {
      text = `*${text}*`
    }
    if (node.underline) {
      text = `<u>${text}</u>` // HTML fallback for underline
    }
    if (node.strikethrough) {
      text = `~~${text}~~`
    }
    if (node.code) {
      text = `\`${text}\``
    }
    if (node.superscript) {
      text = `<sup>${text}</sup>`
    }
    if (node.subscript) {
      text = `<sub>${text}</sub>`
    }

    return text
  }

  /**
   * Process paragraph node
   */
  protected async processParagraph(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return content ? `${content}\n\n` : '\n'
  }

  /**
   * Process heading node
   */
  protected async processHeading(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const level = Math.min(Math.max(node.level || 1, 1), 6)
    const content = await this.processChildren(node, options)
    const hashes = '#'.repeat(level)
    return `${hashes} ${content}\n\n`
  }

  /**
   * Process list node
   */
  protected async processList(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const items = await this.processChildren(node, options)
    return `${items}\n`
  }

  /**
   * Process list item node
   */
  protected async processListItem(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const marker = node.ordered ? '1.' : '-'
    const indentation = '  '.repeat(node.depth || 0)

    // Handle task list items if this is a task list
    if (node.checked !== undefined) {
      const checkbox = node.checked ? '[x]' : '[ ]'
      return `${indentation}- ${checkbox} ${content}\n`
    }

    return `${indentation}${marker} ${content}\n`
  }

  /**
   * Process blockquote node
   */
  protected async processBlockquote(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const lines = content.split('\n').filter((line) => line.trim())
    const quotedLines = lines.map((line) => `> ${line}`)
    return `${quotedLines.join('\n')}\n\n`
  }

  /**
   * Process code block node
   */
  protected async processCodeBlock(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const language = node.language || ''
    return `\`\`\`${language}\n${content}\n\`\`\`\n\n`
  }

  /**
   * Process table node
   */
  protected async processTable(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const mdOptions = options as MarkdownExportOptions

    if (!node.children || !Array.isArray(node.children)) {
      return ''
    }

    const rows: string[] = []
    let headerProcessed = false

    for (const row of node.children) {
      if (row.type === 'table-row' && row.children) {
        const cells = await Promise.all(
          row.children.map(async (cell: any) => {
            if (cell.type === 'table-cell') {
              const content = await this.processChildren(cell, options)
              return content.replace(/\n/g, ' ').trim()
            }
            return ''
          })
        )

        rows.push(`| ${cells.join(' | ')} |`)

        // Add header separator after first row (if using GFM)
        if (!headerProcessed && mdOptions.useGFM) {
          const separator = cells.map(() => '---').join(' | ')
          rows.push(`| ${separator} |`)
          headerProcessed = true
        }
      }
    }

    return rows.length > 0 ? `${rows.join('\n')}\n\n` : ''
  }

  /**
   * Process image node
   */
  protected async processImage(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const mdOptions = options as MarkdownExportOptions
    const alt = node.alt || 'Image'
    const title = node.title ? ` "${node.title}"` : ''

    let src = node.src || node.url || ''

    // Handle different image strategies
    switch (mdOptions.imageHandling) {
      case 'link':
        if (mdOptions.imageBaseUrl) {
          src = `${mdOptions.imageBaseUrl}/${src}`
        }
        break
      case 'embed':
        // Convert to data URL - this would need actual image processing
        // For now, keep original src
        break
      case 'copy':
        // Copy to export directory - would need file system operations
        // For now, keep original src
        break
    }

    return `![${alt}](${src}${title})\n\n`
  }

  /**
   * Process link node
   */
  protected async processLink(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const url = node.url || node.href || ''
    const title = node.title ? ` "${node.title}"` : ''

    return `[${content}](${url}${title})`
  }

  /**
   * Process generic/unknown node
   */
  protected async processGenericNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    // For unknown nodes, just process children
    return this.processChildren(node, options)
  }

  /**
   * Process children with markdown line breaks
   */
  protected async processChildren(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    if (!node.children || !Array.isArray(node.children)) {
      return ''
    }

    const processedChildren = await Promise.all(
      node.children.map((child: any) => this.processNode(child, options))
    )

    return processedChildren.join('')
  }
}

/**
 * Utility functions for markdown processing
 */
export class MarkdownUtils {
  /**
   * Escape markdown special characters
   */
  static escapeMarkdown(text: string): string {
    const escapeChars = /[\\`*_{}[\]()#+\-.!]/g
    return text.replace(escapeChars, '\\$&')
  }

  /**
   * Generate table of contents from content
   */
  static generateTOC(content: string): string {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const headings: { level: number; text: string; anchor: string }[] = []

    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const anchor = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')

      headings.push({ level, text, anchor })
    }

    if (headings.length === 0) {
      return ''
    }

    const tocLines = headings.map((heading) => {
      const indent = '  '.repeat(Math.max(0, heading.level - 1))
      return `${indent}- [${heading.text}](#${heading.anchor})`
    })

    return `## Table of Contents\n\n${tocLines.join('\n')}\n\n`
  }

  /**
   * Calculate reading time for markdown content
   */
  static calculateReadingTime(content: string): string {
    // Remove markdown syntax for word count
    const plainText = content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
      .replace(/`([^`]+)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/[*_~`]/g, '') // Remove formatting
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    const wordCount = plainText
      .split(' ')
      .filter((word) => word.length > 0).length
    const readingTimeMinutes = Math.ceil(wordCount / 200) // 200 words per minute

    return readingTimeMinutes === 1
      ? '1 min read'
      : `${readingTimeMinutes} min read`
  }

  /**
   * Extract headings for navigation
   */
  static extractHeadings(
    content: string
  ): Array<{ level: number; text: string; line: number }> {
    const lines = content.split('\n')
    const headings: Array<{ level: number; text: string; line: number }> = []

    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/)
      if (match) {
        headings.push({
          level: match[1].length,
          text: match[2].trim(),
          line: index + 1,
        })
      }
    })

    return headings
  }
}
