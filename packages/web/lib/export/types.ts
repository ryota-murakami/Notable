import { Descendant } from 'slate'

export type ExportFormat = 'markdown' | 'pdf' | 'html' | 'react'

export interface ExportOptions {
  format: ExportFormat
  includeMetadata?: boolean
  theme?: 'light' | 'dark' | 'custom'
  customCSS?: string
  fileName?: string
}

export interface MarkdownExportOptions extends ExportOptions {
  format: 'markdown'
  flavor?: 'standard' | 'gfm' // GitHub Flavored Markdown
  includeImages?: boolean
  imageHandling?: 'embed' | 'link'
}

export interface PDFExportOptions extends ExportOptions {
  format: 'pdf'
  pageSize?: 'A4' | 'Letter' | 'Legal'
  orientation?: 'portrait' | 'landscape'
  margins?: {
    top: number
    right: number
    bottom: number
    left: number
  }
  includePageNumbers?: boolean
  includeTableOfContents?: boolean
  headerText?: string
  footerText?: string
}

export interface HTMLExportOptions extends ExportOptions {
  format: 'html'
  selfContained?: boolean // Embed CSS/JS or link externally
  includeSearch?: boolean
  includeNavigation?: boolean
  responsiveDesign?: boolean
}

export interface ReactExportOptions extends ExportOptions {
  format: 'react'
  typescript?: boolean
  componentName?: string
  styleType?: 'css-in-js' | 'css-modules' | 'inline'
  includeProps?: boolean
  includeDocs?: boolean
}

export interface ExportMetadata {
  title?: string
  author?: string
  createdAt?: Date
  updatedAt?: Date
  tags?: string[]
  description?: string
}

export interface ExportResult {
  success: boolean
  data?: Blob | string
  fileName: string
  mimeType: string
  error?: string
}

export interface BulkExportOptions {
  notes: Array<{
    id: string
    content: Descendant[]
    metadata?: ExportMetadata
  }>
  format: ExportFormat
  archiveType?: 'zip' | 'tar'
  folderStructure?: boolean
}

export interface ExportService {
  export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult>

  bulkExport(options: BulkExportOptions): Promise<ExportResult>

  getSupportedFormats(): ExportFormat[]
}
