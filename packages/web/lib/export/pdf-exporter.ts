import { type Descendant } from 'slate'
import { BaseExporter } from './base-exporter'
import {
  type BulkExportOptions,
  type ExportMetadata,
  type ExportOptions,
  type ExportResult,
  type PDFExportOptions,
} from './types'
import { SlateToHTMLConverter } from './converters/slate-to-html'

export class PDFExporter extends BaseExporter {
  private htmlConverter: SlateToHTMLConverter

  constructor() {
    super('pdf')
    this.htmlConverter = new SlateToHTMLConverter()
  }

  async export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult> {
    try {
      const pdfOptions = options as PDFExportOptions

      // Convert content to HTML first
      const htmlContent = this.htmlConverter.convert(content)

      // Build PDF-optimized HTML
      const pdfHtml = this.buildPDFHTML(htmlContent, pdfOptions, metadata)

      // In a real implementation, we would use Puppeteer or similar here
      // For now, we'll return the HTML that would be converted to PDF
      const pdfData = await this.generatePDF(pdfHtml, pdfOptions)

      // Generate filename
      const fileName =
        options.fileName ||
        this.generateFileName(metadata?.title || 'export', 'pdf', metadata)

      return {
        success: true,
        data: pdfData,
        fileName,
        mimeType: 'application/pdf',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async bulkExport(options: BulkExportOptions): Promise<ExportResult> {
    try {
      const { notes, format } = options

      if (format !== 'pdf') {
        throw new Error('Invalid format for PDF exporter')
      }

      // Build multi-page PDF content
      const pages: string[] = []
      const tocEntries: Array<{ title: string; page: number }> = []

      notes.forEach((note, index) => {
        const htmlContent = this.htmlConverter.convert(note.content)
        const title = note.metadata?.title || `Note ${index + 1}`

        tocEntries.push({ title, page: index + 1 })

        pages.push(`
          <div class="pdf-page">
            <h1>${this.escapeHtml(title)}</h1>
            ${htmlContent}
          </div>
        `)
      })

      const pdfHtml = this.buildBulkPDFHTML(pages, tocEntries)
      const pdfData = await this.generatePDF(pdfHtml, {
        format: 'pdf',
      } as PDFExportOptions)

      const fileName = this.generateFileName('bulk-export', 'pdf')

      return {
        success: true,
        data: pdfData,
        fileName,
        mimeType: 'application/pdf',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private buildPDFHTML(
    content: string,
    options: PDFExportOptions,
    metadata?: ExportMetadata
  ): string {
    const pageSize = options.pageSize || 'A4'
    const orientation = options.orientation || 'portrait'
    const margins = options.margins || {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }

    // Add header/footer if specified
    let headerFooter = ''
    if (
      options.headerText ||
      options.footerText ||
      options.includePageNumbers
    ) {
      headerFooter = this.buildHeaderFooter(options)
    }

    // Add table of contents if requested
    let toc = ''
    if (options.includeTableOfContents) {
      toc = this.buildTableOfContents(content)
    }

    // Add metadata section
    let metadataSection = ''
    if (metadata && options.includeMetadata) {
      metadataSection = this.buildMetadataSection(metadata)
    }

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        ${this.getPDFStyles(pageSize, orientation, margins)}
    </style>
</head>
<body>
    ${headerFooter}
    ${metadataSection}
    ${toc}
    <div class="content">
        ${content}
    </div>
</body>
</html>`
  }

  private buildBulkPDFHTML(
    pages: string[],
    tocEntries: Array<{ title: string; page: number }>
  ): string {
    const toc = this.buildCustomTableOfContents(tocEntries)

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        ${this.getPDFStyles('A4', 'portrait', { top: 20, right: 20, bottom: 20, left: 20 })}
        ${this.getBulkPDFStyles()}
    </style>
</head>
<body>
    ${toc}
    ${pages.join('\n')}
</body>
</html>`
  }

  private buildHeaderFooter(options: PDFExportOptions): string {
    const elements: string[] = []

    if (options.headerText) {
      elements.push(`
        <div class="pdf-header">
          ${this.escapeHtml(options.headerText)}
        </div>
      `)
    }

    if (options.footerText || options.includePageNumbers) {
      elements.push(`
        <div class="pdf-footer">
          ${options.footerText ? `<span>${this.escapeHtml(options.footerText)}</span>` : ''}
          ${options.includePageNumbers ? '<span class="page-number"></span>' : ''}
        </div>
      `)
    }

    return elements.join('\n')
  }

  private buildTableOfContents(content: string): string {
    // Extract headings
    const headingRegex = /<h([1-3])>(.*?)<\/h\1>/g
    const headings: Array<{ level: number; text: string }> = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1])
      const text = match[2].replace(/<[^>]*>/g, '')
      headings.push({ level, text })
    }

    if (headings.length === 0) return ''

    const tocItems = headings
      .map(({ level, text }) => {
        const indent = '  '.repeat(level - 1)
        return `${indent}<li>${this.escapeHtml(text)}</li>`
      })
      .join('\n')

    return `
      <div class="table-of-contents">
        <h2>Table of Contents</h2>
        <ol>
          ${tocItems}
        </ol>
      </div>
      <div class="page-break"></div>
    `
  }

  private buildCustomTableOfContents(
    entries: Array<{ title: string; page: number }>
  ): string {
    const tocItems = entries
      .map(
        ({ title, page }) =>
          `<li>${this.escapeHtml(title)} <span class="toc-page">${page}</span></li>`
      )
      .join('\n')

    return `
      <div class="table-of-contents">
        <h1>Table of Contents</h1>
        <ol>
          ${tocItems}
        </ol>
      </div>
      <div class="page-break"></div>
    `
  }

  private buildMetadataSection(metadata: ExportMetadata): string {
    const items: string[] = []

    if (metadata.title) {
      items.push(`<h1>${this.escapeHtml(metadata.title)}</h1>`)
    }
    if (metadata.author) {
      items.push(`<p class="author">By ${this.escapeHtml(metadata.author)}</p>`)
    }
    if (metadata.createdAt) {
      items.push(
        `<p class="date">${metadata.createdAt.toLocaleDateString()}</p>`
      )
    }
    if (metadata.description) {
      items.push(
        `<p class="description">${this.escapeHtml(metadata.description)}</p>`
      )
    }

    return `
      <div class="title-page">
        ${items.join('\n')}
      </div>
      <div class="page-break"></div>
    `
  }

  private async generatePDF(
    html: string,
    options: PDFExportOptions
  ): Promise<Blob> {
    // In a real implementation, this would use Puppeteer or similar
    // For now, we'll return a blob containing the HTML
    // The actual PDF generation would happen on the server or using a client-side library

    // TODO: Implement actual PDF generation using Puppeteer or similar

    // Simulating PDF generation by returning HTML as a blob
    // In production, this would be actual PDF binary data
    return new Blob([html], { type: 'application/pdf' })
  }

  private getPDFStyles(
    pageSize: string,
    orientation: string,
    margins: { top: number; right: number; bottom: number; left: number }
  ): string {
    const pageSizes = {
      A4: { width: '210mm', height: '297mm' },
      Letter: { width: '8.5in', height: '11in' },
      Legal: { width: '8.5in', height: '14in' },
    }

    const size = pageSizes[pageSize as keyof typeof pageSizes] || pageSizes.A4
    const { width, height } =
      orientation === 'landscape'
        ? { width: size.height, height: size.width }
        : size

    return `
      @page {
        size: ${width} ${height};
        margin: ${margins.top}mm ${margins.right}mm ${margins.bottom}mm ${margins.left}mm;
      }
      
      body {
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 12pt;
        line-height: 1.6;
        color: #000;
        margin: 0;
        padding: 0;
      }
      
      h1 { font-size: 24pt; margin: 20pt 0 10pt 0; }
      h2 { font-size: 18pt; margin: 16pt 0 8pt 0; }
      h3 { font-size: 14pt; margin: 12pt 0 6pt 0; }
      
      p {
        margin: 0 0 10pt 0;
        text-align: justify;
      }
      
      .page-break {
        page-break-after: always;
      }
      
      .pdf-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 30pt;
        text-align: center;
        font-size: 10pt;
        color: #666;
        border-bottom: 1pt solid #ccc;
      }
      
      .pdf-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30pt;
        text-align: center;
        font-size: 10pt;
        color: #666;
        border-top: 1pt solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20pt;
      }
      
      .page-number:after {
        content: counter(page);
      }
      
      .table-of-contents {
        page-break-after: always;
      }
      
      .table-of-contents h2 {
        text-align: center;
        margin-bottom: 20pt;
      }
      
      .table-of-contents ol {
        list-style: none;
        padding: 0;
      }
      
      .table-of-contents li {
        margin: 8pt 0;
        padding-left: 20pt;
      }
      
      .title-page {
        text-align: center;
        padding-top: 100pt;
      }
      
      .title-page h1 {
        font-size: 36pt;
        margin-bottom: 20pt;
      }
      
      .title-page .author {
        font-size: 18pt;
        margin: 10pt 0;
      }
      
      .title-page .date {
        font-size: 14pt;
        color: #666;
      }
      
      .title-page .description {
        font-style: italic;
        margin-top: 40pt;
        font-size: 14pt;
      }
      
      blockquote {
        margin: 10pt 0;
        padding-left: 20pt;
        border-left: 3pt solid #ccc;
        font-style: italic;
      }
      
      code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 10pt;
        background-color: #f0f0f0;
        padding: 1pt 3pt;
      }
      
      ul, ol {
        margin: 10pt 0;
        padding-left: 30pt;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 10pt 0;
      }
      
      th, td {
        border: 1pt solid #ccc;
        padding: 5pt;
        text-align: left;
      }
      
      th {
        background-color: #f0f0f0;
        font-weight: bold;
      }
    `
  }

  private getBulkPDFStyles(): string {
    return `
      .pdf-page {
        page-break-after: always;
        min-height: 100vh;
      }
      
      .pdf-page:last-child {
        page-break-after: auto;
      }
      
      .toc-page {
        float: right;
        color: #666;
      }
    `
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
}
