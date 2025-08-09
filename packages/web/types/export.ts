import { type Note } from './note'

/**
 * Export format types supported by the system
 */
export type ExportFormat = 'markdown' | 'pdf' | 'html' | 'react'

/**
 * Export quality settings for different formats
 */
export interface ExportQuality {
  /** Image quality (0-100) */
  imageQuality?: number
  /** Image format for embedded images */
  imageFormat?: 'png' | 'jpeg' | 'webp'
  /** Image maximum width in pixels */
  imageMaxWidth?: number
  /** Whether to optimize for file size */
  optimizeSize?: boolean
}

/**
 * Export options for customizing output
 */
export interface ExportOptions {
  /** Target export format */
  format: ExportFormat
  /** Include front matter metadata */
  includeFrontMatter?: boolean
  /** Include creation/modification dates */
  includeDates?: boolean
  /** Include tags */
  includeTags?: boolean
  /** Custom CSS for HTML/PDF export */
  customCSS?: string
  /** Page format for PDF */
  pageFormat?: 'A4' | 'Letter' | 'Legal' | 'A3'
  /** Page orientation for PDF */
  pageOrientation?: 'portrait' | 'landscape'
  /** Quality settings */
  quality?: ExportQuality
  /** Template name for styling */
  template?: string
}

/**
 * Markdown-specific export options
 */
export interface MarkdownExportOptions extends ExportOptions {
  format: 'markdown'
  /** Use GitHub Flavored Markdown */
  useGFM?: boolean
  /** Image handling strategy */
  imageHandling?: 'embed' | 'link' | 'copy'
  /** Base URL for linked images */
  imageBaseUrl?: string
  /** Custom markdown extensions */
  extensions?: string[]
}

/**
 * PDF-specific export options
 */
export interface PDFExportOptions extends ExportOptions {
  format: 'pdf'
  /** Page margins in mm */
  margins?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
  /** Include page numbers */
  includePageNumbers?: boolean
  /** Header content */
  header?: string
  /** Footer content */
  footer?: string
  /** Generate table of contents */
  generateTOC?: boolean
  /** Watermark text */
  watermark?: string
}

/**
 * HTML-specific export options
 */
export interface HTMLExportOptions extends ExportOptions {
  format: 'html'
  /** Create self-contained file */
  selfContained?: boolean
  /** Include search functionality */
  includeSearch?: boolean
  /** Include navigation */
  includeNavigation?: boolean
  /** Mobile responsive */
  responsive?: boolean
  /** Dark mode support */
  darkMode?: boolean
}

/**
 * React-specific export options
 */
export interface ReactExportOptions extends ExportOptions {
  format: 'react'
  /** Use TypeScript */
  typescript?: boolean
  /** Styling approach */
  styling?: 'css-modules' | 'styled-components' | 'tailwind' | 'css-in-js'
  /** Component name */
  componentName?: string
  /** Props interface name */
  propsInterface?: string
  /** Include prop types */
  includePropTypes?: boolean
  /** Export as functional component */
  functional?: boolean
}

/**
 * Export result containing the exported content and metadata
 */
export interface ExportResult {
  /** Exported content */
  content: string
  /** Generated filename */
  filename: string
  /** MIME type */
  mimeType: string
  /** File size in bytes */
  size: number
  /** Export format used */
  format: ExportFormat
  /** Export timestamp */
  exportedAt: string
  /** Additional files (for multi-file exports) */
  additionalFiles?: {
    filename: string
    content: string | Buffer
    mimeType: string
  }[]
}

/**
 * Bulk export options for multiple notes
 */
export interface BulkExportOptions {
  /** Export format */
  format: ExportFormat
  /** Notes to export */
  noteIds: string[]
  /** Archive format */
  archiveFormat?: 'zip' | 'tar'
  /** Archive name */
  archiveName?: string
  /** Individual export options */
  exportOptions?: ExportOptions
  /** Include folder structure */
  preserveFolderStructure?: boolean
}

/**
 * Export history entry
 */
export interface ExportHistoryEntry {
  id: string
  userId: string
  noteId?: string
  noteIds?: string[]
  format: ExportFormat
  options: ExportOptions
  filename: string
  size: number
  createdAt: string
  downloadUrl?: string
  expiresAt?: string
}

/**
 * Export service interface
 */
export interface ExportService {
  /**
   * Export a single note
   */
  exportNote(note: Note, options: ExportOptions): Promise<ExportResult>

  /**
   * Export multiple notes
   */
  exportNotes(notes: Note[], options: BulkExportOptions): Promise<ExportResult>

  /**
   * Get supported export formats
   */
  getSupportedFormats(): ExportFormat[]

  /**
   * Get default options for a format
   */
  getDefaultOptions(format: ExportFormat): ExportOptions

  /**
   * Validate export options
   */
  validateOptions(options: ExportOptions): { valid: boolean; errors: string[] }

  /**
   * Get export history for a user
   */
  getExportHistory(
    userId: string,
    limit?: number
  ): Promise<ExportHistoryEntry[]>

  /**
   * Delete export from history
   */
  deleteExport(exportId: string): Promise<void>
}

/**
 * Content processor interface for handling different node types
 */
export interface ContentProcessor {
  /**
   * Process Plate.js content to target format
   */
  processContent(content: any[], options: ExportOptions): Promise<string>

  /**
   * Process individual node
   */
  processNode(node: any, options: ExportOptions): Promise<string>

  /**
   * Get supported node types
   */
  getSupportedNodeTypes(): string[]
}

/**
 * Template system interface
 */
export interface TemplateEngine {
  /**
   * Render content with template
   */
  render(templateName: string, data: TemplateData): Promise<string>

  /**
   * Get available templates
   */
  getAvailableTemplates(format: ExportFormat): string[]

  /**
   * Register custom template
   */
  registerTemplate(name: string, content: string, format: ExportFormat): void
}

/**
 * Template data for rendering
 */
export interface TemplateData {
  title: string
  content: string
  metadata: {
    createdAt?: string
    updatedAt?: string
    tags?: string[]
    wordCount?: number
    readingTime?: string
  }
  options: ExportOptions
  [key: string]: any
}

/**
 * Asset processor for handling images and files
 */
export interface AssetProcessor {
  /**
   * Process image for export
   */
  processImage(
    imageUrl: string,
    options: ExportQuality
  ): Promise<{
    content: Buffer
    mimeType: string
    filename: string
  }>

  /**
   * Optimize image
   */
  optimizeImage(buffer: Buffer, options: ExportQuality): Promise<Buffer>

  /**
   * Get image dimensions
   */
  getImageDimensions(buffer: Buffer): Promise<{ width: number; height: number }>
}
