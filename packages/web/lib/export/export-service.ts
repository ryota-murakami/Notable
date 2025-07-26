import { type Descendant } from 'slate'
import {
  type BulkExportOptions,
  type ExportFormat,
  type ExportMetadata,
  type ExportOptions,
  type ExportResult,
  type ExportService as IExportService,
} from './types'
import { MarkdownExporter } from './markdown-exporter'
import { HTMLExporter } from './html-exporter'
import { PDFExporter } from './pdf-exporter'
import { ReactExporter } from './react-exporter'
import { type BaseExporter } from './base-exporter'

export class ExportService implements IExportService {
  private exporters: Map<ExportFormat, BaseExporter>

  constructor() {
    this.exporters = new Map<ExportFormat, BaseExporter>()
    this.exporters.set('markdown', new MarkdownExporter())
    this.exporters.set('html', new HTMLExporter())
    this.exporters.set('pdf', new PDFExporter())
    this.exporters.set('react', new ReactExporter())
  }

  async export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult> {
    const exporter = this.exporters.get(options.format)

    if (!exporter) {
      return {
        success: false,
        fileName: '',
        mimeType: '',
        error: `Unsupported export format: ${options.format}`,
      }
    }

    return exporter.export(content, options, metadata)
  }

  async bulkExport(options: BulkExportOptions): Promise<ExportResult> {
    const exporter = this.exporters.get(options.format)

    if (!exporter) {
      return {
        success: false,
        fileName: '',
        mimeType: '',
        error: `Unsupported export format: ${options.format}`,
      }
    }

    return exporter.bulkExport(options)
  }

  getSupportedFormats(): ExportFormat[] {
    return Array.from(this.exporters.keys())
  }

  // Utility method to download the exported file
  downloadFile(result: ExportResult): void {
    if (!result.success || !result.data) {
      console.error('Export failed:', result.error)
      return
    }

    const blob =
      result.data instanceof Blob ? result.data : new Blob([result.data])
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = result.fileName
    link.style.display = 'none'

    document.body.appendChild(link)
    link.click()

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, 100)
  }

  // Utility method to get format details
  getFormatDetails(format: ExportFormat): {
    name: string
    description: string
    extension: string
    icon?: string
  } {
    const formatDetails = {
      markdown: {
        name: 'Markdown',
        description: 'Plain text format with simple syntax for formatting',
        extension: 'md',
        icon: '📝',
      },
      html: {
        name: 'HTML',
        description: 'Web page format that can be opened in any browser',
        extension: 'html',
        icon: '🌐',
      },
      pdf: {
        name: 'PDF',
        description: 'Portable Document Format for printing and sharing',
        extension: 'pdf',
        icon: '📄',
      },
      react: {
        name: 'React Component',
        description: 'Reusable React component for web applications',
        extension: 'jsx',
        icon: '⚛️',
      },
    }

    return (
      formatDetails[format] || {
        name: format,
        description: 'Unknown format',
        extension: 'txt',
      }
    )
  }

  // Utility method to validate export options
  validateOptions(options: ExportOptions): {
    valid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    if (!options.format) {
      errors.push('Export format is required')
    } else if (!this.getSupportedFormats().includes(options.format)) {
      errors.push(`Unsupported format: ${options.format}`)
    }

    // Format-specific validation
    switch (options.format) {
      case 'pdf':
        const pdfOptions = options as any
        if (
          pdfOptions.pageSize &&
          !['A4', 'Letter', 'Legal'].includes(pdfOptions.pageSize)
        ) {
          errors.push('Invalid page size')
        }
        break

      case 'react':
        const reactOptions = options as any
        if (
          reactOptions.styleType &&
          !['css-in-js', 'css-modules', 'inline'].includes(
            reactOptions.styleType
          )
        ) {
          errors.push('Invalid style type')
        }
        break
    }

    return {
      valid: errors.length === 0,
      errors,
    }
  }
}

// Export singleton instance
export const exportService = new ExportService()

// Export types and utilities
export * from './types'
