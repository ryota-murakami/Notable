import { Node } from 'slate'
import { Note } from '../../types/note'
import {
  ExportFormat,
  ExportOptions,
  ExportResult,
  ExportService,
  ContentProcessor,
  ExportHistoryEntry,
  BulkExportOptions,
} from '../../types/export'

/**
 * Base export service that provides common functionality for all export formats
 */
export abstract class BaseExportService implements ExportService {
  protected contentProcessor: ContentProcessor

  constructor(contentProcessor: ContentProcessor) {
    this.contentProcessor = contentProcessor
  }

  /**
   * Export a single note
   */
  async exportNote(note: Note, options: ExportOptions): Promise<ExportResult> {
    // Validate options
    const validation = this.validateOptions(options)
    if (!validation.valid) {
      throw new Error(`Invalid export options: ${validation.errors.join(', ')}`)
    }

    // Parse Plate.js content
    const content = this.parseContent(note.content)

    // Process content with the specific processor
    const processedContent = await this.contentProcessor.processContent(
      content,
      options
    )

    // Apply template if specified
    const finalContent = await this.applyTemplate(
      processedContent,
      note,
      options
    )

    // Generate filename
    const filename = this.generateFilename(note, options)

    // Calculate size
    const size = Buffer.byteLength(finalContent, 'utf8')

    const result: ExportResult = {
      content: finalContent,
      filename,
      mimeType: this.getMimeType(options.format),
      size,
      format: options.format,
      exportedAt: new Date().toISOString(),
    }

    // Save to export history
    await this.saveToHistory(note, options, result)

    return result
  }

  /**
   * Export multiple notes
   */
  async exportNotes(
    notes: Note[],
    options: BulkExportOptions
  ): Promise<ExportResult> {
    const results: ExportResult[] = []

    for (const note of notes) {
      const exportOptions = { ...options.exportOptions, format: options.format }
      const result = await this.exportNote(note, exportOptions as ExportOptions)
      results.push(result)
    }

    // Create archive if needed
    if (options.archiveFormat) {
      return this.createArchive(results, options)
    }

    // Return single result if only one note
    if (results.length === 1) {
      return results[0]
    }

    // Combine multiple results
    return this.combineResults(results, options)
  }

  /**
   * Get supported export formats
   */
  getSupportedFormats(): ExportFormat[] {
    return ['markdown', 'pdf', 'html', 'react']
  }

  /**
   * Get default options for a format
   */
  getDefaultOptions(format: ExportFormat): ExportOptions {
    const baseOptions: ExportOptions = {
      format,
      includeFrontMatter: true,
      includeDates: true,
      includeTags: true,
      quality: {
        imageQuality: 85,
        imageFormat: 'jpeg',
        imageMaxWidth: 1200,
        optimizeSize: true,
      },
    }

    // Return only base options since format-specific options
    // are handled by the specific exporters
    return baseOptions
  }

  /**
   * Validate export options
   */
  validateOptions(options: ExportOptions): {
    valid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    // Check required fields
    if (!options.format) {
      errors.push('Export format is required')
    }

    if (!this.getSupportedFormats().includes(options.format)) {
      errors.push(`Unsupported export format: ${options.format}`)
    }

    // Validate quality options
    if (options.quality) {
      if (
        options.quality.imageQuality &&
        (options.quality.imageQuality < 0 || options.quality.imageQuality > 100)
      ) {
        errors.push('Image quality must be between 0 and 100')
      }
    }

    // Format-specific validation
    this.validateFormatSpecificOptions(options, errors)

    return {
      valid: errors.length === 0,
      errors,
    }
  }

  /**
   * Get export history for a user
   */
  async getExportHistory(
    userId: string,
    limit = 50
  ): Promise<ExportHistoryEntry[]> {
    // This would typically query a database
    // For now, return empty array - implementation depends on storage solution
    return []
  }

  /**
   * Delete export from history
   */
  async deleteExport(exportId: string): Promise<void> {
    // Implementation depends on storage solution
    throw new Error('Not implemented')
  }

  /**
   * Parse Plate.js content from JSON string
   */
  protected parseContent(content: string): Node[] {
    try {
      return JSON.parse(content) as Node[]
    } catch (error) {
      // If content is not valid JSON, treat as plain text
      return [
        {
          type: 'paragraph',
          children: [{ text: content }],
        },
      ] as Node[]
    }
  }

  /**
   * Apply template to processed content
   */
  protected async applyTemplate(
    content: string,
    note: Note,
    options: ExportOptions
  ): Promise<string> {
    // If no template specified, return content as-is
    if (!options.template) {
      return content
    }

    // Template application would go here
    // For now, return content as-is
    return content
  }

  /**
   * Generate filename for export
   */
  protected generateFilename(note: Note, options: ExportOptions): string {
    // Sanitize title for filename
    const sanitizedTitle = note.title
      .replace(/[^a-zA-Z0-9\s-_]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
      .slice(0, 50)

    const timestamp = new Date().toISOString().split('T')[0]
    const extension = this.getFileExtension(options.format)

    return `${sanitizedTitle || 'untitled'}-${timestamp}.${extension}`
  }

  /**
   * Get file extension for format
   */
  protected getFileExtension(format: ExportFormat): string {
    switch (format) {
      case 'markdown':
        return 'md'
      case 'pdf':
        return 'pdf'
      case 'html':
        return 'html'
      case 'react':
        return 'tsx'
      default:
        return 'txt'
    }
  }

  /**
   * Get MIME type for format
   */
  protected getMimeType(format: ExportFormat): string {
    switch (format) {
      case 'markdown':
        return 'text/markdown'
      case 'pdf':
        return 'application/pdf'
      case 'html':
        return 'text/html'
      case 'react':
        return 'text/typescript'
      default:
        return 'text/plain'
    }
  }

  /**
   * Save export to history
   */
  protected async saveToHistory(
    note: Note,
    options: ExportOptions,
    result: ExportResult
  ): Promise<void> {
    // Implementation depends on storage solution
    // This would typically save to database
  }

  /**
   * Create archive from multiple export results
   */
  protected async createArchive(
    results: ExportResult[],
    options: BulkExportOptions
  ): Promise<ExportResult> {
    // This would use JSZip or similar to create archives
    // For now, throw not implemented
    throw new Error('Archive creation not yet implemented')
  }

  /**
   * Combine multiple export results into one
   */
  protected async combineResults(
    results: ExportResult[],
    options: BulkExportOptions
  ): Promise<ExportResult> {
    // Combine content based on format
    const combinedContent = results.map((r) => r.content).join('\n\n---\n\n')
    const totalSize = results.reduce((sum, r) => sum + r.size, 0)
    const filename =
      options.archiveName ||
      `export-${new Date().toISOString().split('T')[0]}.${this.getFileExtension(options.format)}`

    return {
      content: combinedContent,
      filename,
      mimeType: this.getMimeType(options.format),
      size: totalSize,
      format: options.format,
      exportedAt: new Date().toISOString(),
    }
  }

  /**
   * Validate format-specific options
   */
  protected abstract validateFormatSpecificOptions(
    options: ExportOptions,
    errors: string[]
  ): void
}

/**
 * Base content processor for Plate.js nodes
 */
export abstract class BaseContentProcessor implements ContentProcessor {
  /**
   * Process Plate.js content array
   */
  async processContent(
    content: Node[],
    options: ExportOptions
  ): Promise<string> {
    const processedNodes = await Promise.all(
      content.map((node) => this.processNode(node, options))
    )
    return processedNodes.join('\n')
  }

  /**
   * Process individual Plate.js node
   */
  async processNode(node: any, options: ExportOptions): Promise<string> {
    // Handle text nodes
    if ('text' in node) {
      return this.processTextNode(node, options)
    }

    // Handle element nodes
    switch (node.type) {
      case 'paragraph':
        return this.processParagraph(node, options)
      case 'heading':
        return this.processHeading(node, options)
      case 'list':
        return this.processList(node, options)
      case 'list-item':
        return this.processListItem(node, options)
      case 'blockquote':
        return this.processBlockquote(node, options)
      case 'code_block':
        return this.processCodeBlock(node, options)
      case 'table':
        return this.processTable(node, options)
      case 'image':
        return this.processImage(node, options)
      case 'link':
        return this.processLink(node, options)
      default:
        return this.processGenericNode(node, options)
    }
  }

  /**
   * Get supported node types
   */
  getSupportedNodeTypes(): string[] {
    return [
      'paragraph',
      'heading',
      'list',
      'list-item',
      'blockquote',
      'code_block',
      'table',
      'image',
      'link',
    ]
  }

  // Abstract methods for format-specific processing
  protected abstract processTextNode(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processParagraph(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processHeading(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processList(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processListItem(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processBlockquote(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processCodeBlock(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processTable(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processImage(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processLink(
    node: any,
    options: ExportOptions
  ): Promise<string>
  protected abstract processGenericNode(
    node: any,
    options: ExportOptions
  ): Promise<string>

  /**
   * Process children nodes recursively
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

  /**
   * Extract plain text from node
   */
  protected extractPlainText(node: any): string {
    if ('text' in node) {
      return node.text
    }

    if (node.children && Array.isArray(node.children)) {
      return node.children
        .map((child: any) => this.extractPlainText(child))
        .join('')
    }

    return ''
  }
}
