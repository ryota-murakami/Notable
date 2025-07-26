import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { BaseExportService, BaseContentProcessor } from './base-export-service'
import { Note } from '../../types/note'
import {
  ExportOptions,
  PDFExportOptions,
  ExportResult,
} from '../../types/export'

/**
 * PDF export service using pdf-lib
 */
export class PDFExportService extends BaseExportService {
  constructor() {
    super(new PDFContentProcessor())
  }

  /**
   * Export note to PDF format
   */
  async exportNote(note: Note, options: ExportOptions): Promise<ExportResult> {
    const pdfOptions = options as PDFExportOptions

    // Process content to HTML-like structure first
    const htmlContent = await this.contentProcessor.processContent(
      this.parseContent(note.content),
      options
    )

    // Generate PDF document
    const pdfBytes = await this.generatePDF(note, htmlContent, pdfOptions)

    // Convert to base64 for storage/transmission
    const content = Buffer.from(pdfBytes).toString('base64')
    const filename = this.generateFilename(note, options)

    const result: ExportResult = {
      content,
      filename,
      mimeType: 'application/pdf',
      size: pdfBytes.length,
      format: 'pdf',
      exportedAt: new Date().toISOString(),
    }

    await this.saveToHistory(note, options, result)
    return result
  }

  /**
   * Generate PDF document using pdf-lib
   */
  private async generatePDF(
    note: Note,
    content: string,
    options: PDFExportOptions
  ): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create()

    // Set document metadata
    pdfDoc.setTitle(note.title)
    pdfDoc.setAuthor('Notable')
    pdfDoc.setCreationDate(new Date(note.created_at))
    pdfDoc.setModificationDate(new Date(note.updated_at))

    // Load fonts
    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    const codeFont = await pdfDoc.embedFont(StandardFonts.Courier)

    // Page settings
    const pageFormat = this.getPageDimensions(options.pageFormat)
    const margins = options.margins || {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }

    // Convert mm to points (1mm = 2.834645669 points)
    const mmToPoints = (mm: number) => mm * 2.834645669
    const pageWidth = pageFormat.width
    const pageHeight = pageFormat.height
    const leftMargin = mmToPoints(margins.left || 20)
    const rightMargin = mmToPoints(margins.right || 20)
    const topMargin = mmToPoints(margins.top || 20)
    const bottomMargin = mmToPoints(margins.bottom || 20)

    const contentWidth = pageWidth - leftMargin - rightMargin
    const contentHeight = pageHeight - topMargin - bottomMargin

    let page = pdfDoc.addPage([pageWidth, pageHeight])
    let currentY = pageHeight - topMargin
    let pageNumber = 1

    // Add title
    const titleHeight = await this.addTitle(
      page,
      note.title,
      leftMargin,
      currentY,
      contentWidth,
      boldFont,
      18
    )
    currentY -= titleHeight + 20

    // Add metadata if requested
    if (options.includeDates || options.includeTags) {
      const metadataHeight = await this.addMetadata(
        page,
        note,
        leftMargin,
        currentY,
        contentWidth,
        regularFont,
        10,
        options
      )
      currentY -= metadataHeight + 20
    }

    // Add horizontal line
    page.drawLine({
      start: { x: leftMargin, y: currentY },
      end: { x: pageWidth - rightMargin, y: currentY },
      thickness: 1,
      color: rgb(0.8, 0.8, 0.8),
    })
    currentY -= 20

    // Process content
    const contentBlocks = this.parseContentBlocks(content)

    for (const block of contentBlocks) {
      // Check if we need a new page
      const estimatedHeight = this.estimateBlockHeight(
        block,
        contentWidth,
        regularFont
      )
      if (currentY - estimatedHeight < bottomMargin) {
        // Add page number if requested
        if (options.includePageNumbers) {
          this.addPageNumber(
            page,
            pageNumber,
            pageWidth,
            bottomMargin,
            regularFont
          )
        }

        // Create new page
        page = pdfDoc.addPage([pageWidth, pageHeight])
        currentY = pageHeight - topMargin
        pageNumber++
      }

      // Render block
      const blockHeight = await this.renderContentBlock(
        page,
        block,
        leftMargin,
        currentY,
        contentWidth,
        { regular: regularFont, bold: boldFont, code: codeFont }
      )
      currentY -= blockHeight + 10
    }

    // Add page number to last page
    if (options.includePageNumbers) {
      this.addPageNumber(page, pageNumber, pageWidth, bottomMargin, regularFont)
    }

    // Add watermark if specified
    if (options.watermark) {
      this.addWatermark(pdfDoc, options.watermark, regularFont)
    }

    return pdfDoc.save()
  }

  /**
   * Get page dimensions for different formats
   */
  private getPageDimensions(format?: string): {
    width: number
    height: number
  } {
    switch (format) {
      case 'A4':
        return { width: 595, height: 842 } // A4 in points
      case 'Letter':
        return { width: 612, height: 792 } // US Letter in points
      case 'Legal':
        return { width: 612, height: 1008 } // US Legal in points
      case 'A3':
        return { width: 842, height: 1191 } // A3 in points
      default:
        return { width: 595, height: 842 } // Default to A4
    }
  }

  /**
   * Add title to page
   */
  private async addTitle(
    page: any,
    title: string,
    x: number,
    y: number,
    maxWidth: number,
    font: any,
    fontSize: number
  ): Promise<number> {
    const lines = this.wrapText(title, maxWidth, font, fontSize)
    const lineHeight = fontSize * 1.2

    lines.forEach((line, index) => {
      page.drawText(line, {
        x,
        y: y - index * lineHeight,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      })
    })

    return lines.length * lineHeight
  }

  /**
   * Add metadata section
   */
  private async addMetadata(
    page: any,
    note: Note,
    x: number,
    y: number,
    maxWidth: number,
    font: any,
    fontSize: number,
    options: PDFExportOptions
  ): Promise<number> {
    const metadata: string[] = []

    if (options.includeDates) {
      metadata.push(
        `Created: ${new Date(note.created_at).toLocaleDateString()}`
      )
      metadata.push(
        `Updated: ${new Date(note.updated_at).toLocaleDateString()}`
      )
    }

    if (options.includeTags && note.tags?.length) {
      metadata.push(`Tags: ${note.tags.join(', ')}`)
    }

    const lineHeight = fontSize * 1.2
    metadata.forEach((line, index) => {
      page.drawText(line, {
        x,
        y: y - index * lineHeight,
        size: fontSize,
        font,
        color: rgb(0.4, 0.4, 0.4),
      })
    })

    return metadata.length * lineHeight
  }

  /**
   * Add page number
   */
  private addPageNumber(
    page: any,
    pageNumber: number,
    pageWidth: number,
    bottomMargin: number,
    font: any
  ): void {
    const text = `Page ${pageNumber}`
    const fontSize = 10
    const textWidth = font.widthOfTextAtSize(text, fontSize)

    page.drawText(text, {
      x: pageWidth - textWidth - 20,
      y: bottomMargin / 2,
      size: fontSize,
      font,
      color: rgb(0.5, 0.5, 0.5),
    })
  }

  /**
   * Add watermark to all pages
   */
  private addWatermark(pdfDoc: any, watermarkText: string, font: any): void {
    const pages = pdfDoc.getPages()

    pages.forEach((page: any) => {
      const { width, height } = page.getSize()
      const fontSize = 48
      const textWidth = font.widthOfTextAtSize(watermarkText, fontSize)

      page.drawText(watermarkText, {
        x: (width - textWidth) / 2,
        y: height / 2,
        size: fontSize,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.3,
        rotate: { type: 'degrees', degrees: -45 },
      })
    })
  }

  /**
   * Parse content into blocks for PDF rendering
   */
  private parseContentBlocks(content: string): ContentBlock[] {
    // This is a simplified parser - in reality, you'd want more sophisticated parsing
    const lines = content.split('\n')
    const blocks: ContentBlock[] = []

    let currentBlock: ContentBlock | null = null

    for (const line of lines) {
      if (line.trim() === '') {
        if (currentBlock) {
          blocks.push(currentBlock)
          currentBlock = null
        }
        continue
      }

      // Detect block type
      const blockType = this.detectBlockType(line)

      if (!currentBlock || currentBlock.type !== blockType) {
        if (currentBlock) {
          blocks.push(currentBlock)
        }
        currentBlock = { type: blockType, content: [line] }
      } else {
        currentBlock.content.push(line)
      }
    }

    if (currentBlock) {
      blocks.push(currentBlock)
    }

    return blocks
  }

  /**
   * Detect block type from line
   */
  private detectBlockType(line: string): string {
    if (line.match(/^#{1,6}\s/)) return 'heading'
    if (line.match(/^>\s/)) return 'blockquote'
    if (line.match(/^```/)) return 'code'
    if (line.match(/^[-*+]\s/)) return 'list'
    if (line.match(/^\d+\.\s/)) return 'ordered-list'
    return 'paragraph'
  }

  /**
   * Estimate block height for pagination
   */
  private estimateBlockHeight(
    block: ContentBlock,
    width: number,
    font: any
  ): number {
    const lineHeight = 12 * 1.4 // Assuming 12pt font with 1.4 line height
    const lines = block.content.reduce((total, line) => {
      const wrappedLines = this.wrapText(line, width, font, 12)
      return total + wrappedLines.length
    }, 0)

    return lines * lineHeight + (block.type === 'heading' ? 10 : 5) // Extra spacing for headings
  }

  /**
   * Render content block to PDF page
   */
  private async renderContentBlock(
    page: any,
    block: ContentBlock,
    x: number,
    y: number,
    maxWidth: number,
    fonts: { regular: any; bold: any; code: any }
  ): Promise<number> {
    let currentY = y
    const lineHeight = 12 * 1.4

    for (const line of block.content) {
      const { font, fontSize, color } = this.getBlockStyle(block.type, fonts)
      const wrappedLines = this.wrapText(line, maxWidth, font, fontSize)

      wrappedLines.forEach((wrappedLine) => {
        page.drawText(wrappedLine, {
          x,
          y: currentY,
          size: fontSize,
          font,
          color,
        })
        currentY -= lineHeight
      })
    }

    return y - currentY
  }

  /**
   * Get styling for different block types
   */
  private getBlockStyle(
    blockType: string,
    fonts: any
  ): {
    font: any
    fontSize: number
    color: any
  } {
    switch (blockType) {
      case 'heading':
        return { font: fonts.bold, fontSize: 16, color: rgb(0, 0, 0) }
      case 'code':
        return { font: fonts.code, fontSize: 10, color: rgb(0.2, 0.2, 0.2) }
      case 'blockquote':
        return { font: fonts.regular, fontSize: 11, color: rgb(0.4, 0.4, 0.4) }
      default:
        return { font: fonts.regular, fontSize: 12, color: rgb(0, 0, 0) }
    }
  }

  /**
   * Wrap text to fit within specified width
   */
  private wrapText(
    text: string,
    maxWidth: number,
    font: any,
    fontSize: number
  ): string[] {
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word
      const lineWidth = font.widthOfTextAtSize(testLine, fontSize)

      if (lineWidth <= maxWidth || currentLine === '') {
        currentLine = testLine
      } else {
        if (currentLine) {
          lines.push(currentLine)
        }
        currentLine = word
      }
    }

    if (currentLine) {
      lines.push(currentLine)
    }

    return lines.length > 0 ? lines : ['']
  }

  /**
   * Validate PDF-specific options
   */
  protected validateFormatSpecificOptions(
    options: ExportOptions,
    errors: string[]
  ): void {
    const pdfOptions = options as PDFExportOptions

    if (pdfOptions.margins) {
      const { top, right, bottom, left } = pdfOptions.margins
      if (
        (top && top < 0) ||
        (right && right < 0) ||
        (bottom && bottom < 0) ||
        (left && left < 0)
      ) {
        errors.push('Margins cannot be negative')
      }
    }
  }
}

/**
 * PDF content processor that outputs HTML-like markup for PDF rendering
 */
export class PDFContentProcessor extends BaseContentProcessor {
  protected async processTextNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    let text = node.text || ''

    // Apply text formatting with HTML-like tags for PDF processor
    if (node.bold) text = `<b>${text}</b>`
    if (node.italic) text = `<i>${text}</i>`
    if (node.code) text = `<code>${text}</code>`

    return text
  }

  protected async processParagraph(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return content ? `${content}\n\n` : '\n'
  }

  protected async processHeading(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const level = Math.min(Math.max(node.level || 1, 1), 6)
    const content = await this.processChildren(node, options)
    return `${'#'.repeat(level)} ${content}\n\n`
  }

  protected async processList(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    return this.processChildren(node, options)
  }

  protected async processListItem(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `• ${content}\n`
  }

  protected async processBlockquote(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `> ${content}\n\n`
  }

  protected async processCodeBlock(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `\`\`\`\n${content}\n\`\`\`\n\n`
  }

  protected async processTable(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    // Simplified table processing for PDF
    const content = await this.processChildren(node, options)
    return `[TABLE]\n${content}\n[/TABLE]\n\n`
  }

  protected async processImage(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    return `[IMAGE: ${node.alt || 'Image'}]\n\n`
  }

  protected async processLink(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const url = node.url || node.href || ''
    return `${content} (${url})`
  }

  protected async processGenericNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    return this.processChildren(node, options)
  }
}

/**
 * Content block interface for PDF rendering
 */
interface ContentBlock {
  type: string
  content: string[]
}
