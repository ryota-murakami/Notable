import { Descendant } from 'slate'
import {
  ExportFormat,
  ExportOptions,
  ExportMetadata,
  ExportResult,
  BulkExportOptions,
  ExportService,
} from './types'

export abstract class BaseExporter implements ExportService {
  protected readonly format: ExportFormat

  constructor(format: ExportFormat) {
    this.format = format
  }

  abstract export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult>

  abstract bulkExport(options: BulkExportOptions): Promise<ExportResult>

  getSupportedFormats(): ExportFormat[] {
    return [this.format]
  }

  protected generateFileName(
    baseName: string,
    extension: string,
    metadata?: ExportMetadata
  ): string {
    const title = metadata?.title || baseName
    const timestamp = new Date().toISOString().split('T')[0]
    return `${title.replace(/[^a-z0-9]/gi, '_')}_${timestamp}.${extension}`
  }

  protected createBlob(content: string, mimeType: string): Blob {
    return new Blob([content], { type: mimeType })
  }

  protected handleError(error: unknown): ExportResult {
    const message =
      error instanceof Error ? error.message : 'Unknown export error'
    console.error('Export error:', error)
    return {
      success: false,
      fileName: '',
      mimeType: '',
      error: message,
    }
  }

  protected formatMetadata(metadata?: ExportMetadata): string {
    if (!metadata) return ''

    const lines: string[] = []
    if (metadata.title) lines.push(`Title: ${metadata.title}`)
    if (metadata.author) lines.push(`Author: ${metadata.author}`)
    if (metadata.createdAt)
      lines.push(`Created: ${metadata.createdAt.toISOString()}`)
    if (metadata.updatedAt)
      lines.push(`Updated: ${metadata.updatedAt.toISOString()}`)
    if (metadata.tags?.length) lines.push(`Tags: ${metadata.tags.join(', ')}`)
    if (metadata.description) lines.push(`Description: ${metadata.description}`)

    return lines.join('\n')
  }
}
