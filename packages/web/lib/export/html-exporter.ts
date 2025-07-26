import { Descendant } from 'slate'
import { BaseExporter } from './base-exporter'
import {
  ExportOptions,
  ExportMetadata,
  ExportResult,
  BulkExportOptions,
  HTMLExportOptions,
} from './types'
import { SlateToHTMLConverter } from './converters/slate-to-html'

export class HTMLExporter extends BaseExporter {
  private converter: SlateToHTMLConverter

  constructor() {
    super('html')
    this.converter = new SlateToHTMLConverter()
  }

  async export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult> {
    try {
      const htmlOptions = options as HTMLExportOptions

      // Convert content to HTML
      let htmlContent = this.converter.convert(content)

      // Add metadata if requested
      if (htmlOptions.includeMetadata && metadata) {
        htmlContent = this.addMetadataSection(metadata) + htmlContent
      }

      // Add navigation if requested
      if (htmlOptions.includeNavigation) {
        htmlContent = this.addNavigation(htmlContent) + htmlContent
      }

      // Wrap in complete HTML document if self-contained
      let finalContent: string
      if (htmlOptions.selfContained !== false) {
        finalContent = this.converter.generateStyledHTML(
          htmlContent,
          options.theme || 'light',
          options.customCSS
        )

        // Add search functionality if requested
        if (htmlOptions.includeSearch) {
          finalContent = this.addSearchFunctionality(finalContent)
        }
      } else {
        finalContent = htmlContent
      }

      // Generate filename
      const fileName =
        options.fileName ||
        this.generateFileName(metadata?.title || 'export', 'html', metadata)

      // Create blob
      const blob = this.createBlob(finalContent, 'text/html')

      return {
        success: true,
        data: blob,
        fileName,
        mimeType: 'text/html',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async bulkExport(options: BulkExportOptions): Promise<ExportResult> {
    try {
      const { notes, format } = options

      if (format !== 'html') {
        throw new Error('Invalid format for HTML exporter')
      }

      // Create a multi-page HTML document
      const pages: string[] = []
      const toc: string[] = []

      notes.forEach((note, index) => {
        const htmlContent = this.converter.convert(note.content)
        const pageId = `note-${index + 1}`
        const title = note.metadata?.title || `Note ${index + 1}`

        // Add to TOC
        toc.push(`<li><a href="#${pageId}">${this.escapeHtml(title)}</a></li>`)

        // Add page
        pages.push(`
          <article id="${pageId}" class="note-page">
            <h1>${this.escapeHtml(title)}</h1>
            ${htmlContent}
          </article>
          <hr class="page-separator">
        `)
      })

      const tocHtml = `
        <nav class="table-of-contents">
          <h2>Table of Contents</h2>
          <ol>
            ${toc.join('\n')}
          </ol>
        </nav>
      `

      const allContent = tocHtml + pages.join('\n')
      const finalContent = this.converter.generateStyledHTML(
        allContent,
        'light',
        this.getBulkExportStyles()
      )

      const fileName = this.generateFileName('bulk-export', 'html')
      const blob = this.createBlob(finalContent, 'text/html')

      return {
        success: true,
        data: blob,
        fileName,
        mimeType: 'text/html',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private addMetadataSection(metadata: ExportMetadata): string {
    const items: string[] = []

    if (metadata.title) {
      items.push(
        `<div class="metadata-item"><strong>Title:</strong> ${this.escapeHtml(metadata.title)}</div>`
      )
    }
    if (metadata.author) {
      items.push(
        `<div class="metadata-item"><strong>Author:</strong> ${this.escapeHtml(metadata.author)}</div>`
      )
    }
    if (metadata.createdAt) {
      items.push(
        `<div class="metadata-item"><strong>Created:</strong> ${metadata.createdAt.toLocaleDateString()}</div>`
      )
    }
    if (metadata.updatedAt) {
      items.push(
        `<div class="metadata-item"><strong>Updated:</strong> ${metadata.updatedAt.toLocaleDateString()}</div>`
      )
    }
    if (metadata.tags && metadata.tags.length > 0) {
      const tags = metadata.tags
        .map((tag) => `<span class="tag">${this.escapeHtml(tag)}</span>`)
        .join(' ')
      items.push(
        `<div class="metadata-item"><strong>Tags:</strong> ${tags}</div>`
      )
    }
    if (metadata.description) {
      items.push(
        `<div class="metadata-item"><strong>Description:</strong> ${this.escapeHtml(metadata.description)}</div>`
      )
    }

    return `
      <div class="metadata-section">
        ${items.join('\n')}
      </div>
      <hr>
    `
  }

  private addNavigation(content: string): string {
    // Extract headings for navigation
    const headingRegex = /<h([1-6])>(.*?)<\/h\1>/g
    const headings: Array<{ level: number; text: string; id: string }> = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1])
      const text = match[2].replace(/<[^>]*>/g, '') // Strip HTML tags
      const id = `heading-${headings.length}`
      headings.push({ level, text, id })
    }

    // Generate navigation HTML
    const navItems = headings
      .map(({ level, text, id }) => {
        const indent = '  '.repeat(level - 1)
        return `${indent}<li><a href="#${id}">${this.escapeHtml(text)}</a></li>`
      })
      .join('\n')

    const nav = `
      <nav class="document-navigation">
        <h2>Contents</h2>
        <ul>
          ${navItems}
        </ul>
      </nav>
      <hr>
    `

    // Add IDs to headings in content
    let updatedContent = content
    headings.forEach(({ id }, index) => {
      updatedContent = updatedContent.replace(
        new RegExp(`<h([1-6])>(.*?)<\/h\\1>`, 'i'),
        `<h$1 id="${id}">$2</h$1>`
      )
    })

    return nav
  }

  private addSearchFunctionality(html: string): string {
    const searchScript = `
      <script>
        function searchContent() {
          const searchTerm = document.getElementById('search-input').value.toLowerCase();
          const content = document.querySelector('.container');
          const text = content.textContent || content.innerText;
          
          // Remove previous highlights
          content.innerHTML = content.innerHTML.replace(/<mark[^>]*>(.*?)<\/mark>/gi, '$1');
          
          if (searchTerm.length < 2) return;
          
          // Highlight search terms
          const regex = new RegExp('(' + searchTerm + ')', 'gi');
          content.innerHTML = content.innerHTML.replace(regex, '<mark>$1</mark>');
        }
        
        document.addEventListener('DOMContentLoaded', function() {
          const searchBox = '<div class="search-box"><input type="text" id="search-input" placeholder="Search..." oninput="searchContent()"></div>';
          document.querySelector('.container').insertAdjacentHTML('afterbegin', searchBox);
        });
      </script>
      
      <style>
        .search-box {
          margin-bottom: 2rem;
          position: sticky;
          top: 0;
          background: inherit;
          padding: 1rem 0;
          z-index: 100;
        }
        
        #search-input {
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.375rem;
          outline: none;
        }
        
        #search-input:focus {
          border-color: #3b82f6;
        }
        
        mark {
          background-color: #fef3c7;
          color: inherit;
          padding: 0.1em 0.2em;
          border-radius: 0.2em;
        }
      </style>
    `

    return html.replace('</head>', searchScript + '</head>')
  }

  private getBulkExportStyles(): string {
    return `
      .table-of-contents {
        margin-bottom: 3rem;
        padding: 2rem;
        background-color: #f8fafc;
        border-radius: 0.5rem;
      }
      
      .table-of-contents h2 {
        margin-top: 0;
      }
      
      .table-of-contents ol {
        margin: 1rem 0;
      }
      
      .table-of-contents a {
        color: #3b82f6;
        text-decoration: none;
      }
      
      .table-of-contents a:hover {
        text-decoration: underline;
      }
      
      .note-page {
        margin: 3rem 0;
      }
      
      .page-separator {
        margin: 4rem 0;
        border: none;
        border-top: 2px solid #e2e8f0;
      }
      
      .metadata-section {
        background-color: #f8fafc;
        padding: 1rem;
        border-radius: 0.375rem;
        margin-bottom: 2rem;
      }
      
      .metadata-item {
        margin: 0.5rem 0;
      }
      
      .tag {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        background-color: #e0e7ff;
        color: #4338ca;
        border-radius: 0.25rem;
        font-size: 0.875rem;
      }
    `
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
}
