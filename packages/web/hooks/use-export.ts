'use client'

import { useState, useCallback } from 'react'
import { useToast } from '@/hooks/use-toast'
import type { Note } from '@/types/note'
// import { MarkdownPlugin } from '@platejs/markdown'
// import { createSlateEditor } from 'platejs'
// import { BaseParagraphPlugin } from 'platejs'

export type ExportFormat = 'markdown' | 'html' | 'pdf' | 'react'

interface ExportOptions {
  includeTitle?: boolean
  includeMetadata?: boolean
  includeStyles?: boolean
  templateName?: string
  // PDF-specific options
  includePageNumbers?: boolean
  includeTableOfContents?: boolean
  headerText?: string
  footerText?: string
  pageMargins?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}

export function useExport() {
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)
  const { toast } = useToast()

  // Convert Plate.js content to Markdown with GFM support
  const convertToMarkdown = useCallback(
    (content: any, title?: string, options: ExportOptions = {}): string => {
      const { includeMetadata = false } = options

      // Simple conversion to markdown (placeholder implementation)
      let markdownContent = ''

      const convertNode = (node: any): string => {
        if (typeof node === 'string') return node
        if (!node.type) return node.text || ''

        const text = node.children?.map(convertNode).join('') || ''

        switch (node.type) {
          case 'h1':
            return `# ${text}\n\n`
          case 'h2':
            return `## ${text}\n\n`
          case 'h3':
            return `### ${text}\n\n`
          case 'h4':
            return `#### ${text}\n\n`
          case 'h5':
            return `##### ${text}\n\n`
          case 'h6':
            return `###### ${text}\n\n`
          case 'p':
            return `${text}\n\n`
          case 'blockquote':
            return `> ${text}\n\n`
          case 'ul':
            return `${text}\n`
          case 'ol':
            return `${text}\n`
          case 'li':
            return `- ${text}\n`
          case 'code_block':
            return `\`\`\`\n${text}\n\`\`\`\n\n`
          case 'hr':
            return '---\n\n'
          case 'a':
            return `[${text}](${node.url})`
          case 'img':
            return `![${node.alt || ''}](${node.url})\n\n`
          default: {
            // Handle text formatting
            {
              let formattedText = text
              if (node.bold) formattedText = `**${formattedText}**`
              if (node.italic) formattedText = `*${formattedText}*`
              if (node.strikethrough) formattedText = `~~${formattedText}~~`
              if (node.code) formattedText = `\`${formattedText}\``
              return formattedText
            }
          }
        }
      }

      if (Array.isArray(content)) {
        markdownContent = content.map(convertNode).join('')
      } else {
        markdownContent = convertNode(content)
      }

      let markdown = ''

      // Add front matter if metadata is requested
      if (includeMetadata) {
        const date = new Date().toISOString()
        markdown += '---\n'
        markdown += `title: "${title || 'Untitled Note'}"\n`
        markdown += `date: ${date}\n`
        markdown += `generator: "Notable - Premium Notion Clone"\n`
        markdown += '---\n\n'
      }

      // Add title as H1 if requested
      if (title && !includeMetadata) {
        markdown += `# ${title}\n\n`
      }

      markdown += markdownContent

      return markdown.trim()
    },
    []
  )

  // Convert Plate.js content to HTML
  const convertToHTML = useCallback(
    (content: any, title?: string, options: ExportOptions = {}): string => {
      const { includeStyles = true, includeMetadata = true } = options

      // HTML sanitization function to prevent XSS
      const sanitizeHTML = (html: string): string => {
        if (typeof html !== 'string') return ''
        return html
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g, '&#x2F;')
      }

      const convertNode = (node: any): string => {
        if (typeof node === 'string') return node
        if (!node.type) return node.text || ''

        const text = node.children?.map(convertNode).join('') || ''

        switch (node.type) {
          case 'h1':
            return `<h1>${sanitizeHTML(text)}</h1>`
          case 'h2':
            return `<h2>${sanitizeHTML(text)}</h2>`
          case 'h3':
            return `<h3>${sanitizeHTML(text)}</h3>`
          case 'h4':
            return `<h4>${sanitizeHTML(text)}</h4>`
          case 'h5':
            return `<h5>${sanitizeHTML(text)}</h5>`
          case 'h6':
            return `<h6>${sanitizeHTML(text)}</h6>`
          case 'p':
            return `<p>${sanitizeHTML(text)}</p>`
          case 'blockquote':
            return `<blockquote>${sanitizeHTML(text)}</blockquote>`
          case 'ul':
            return `<ul>${text}</ul>`
          case 'ol':
            return `<ol>${text}</ol>`
          case 'li':
            return `<li>${sanitizeHTML(text)}</li>`
          case 'code_block':
            return `<pre><code class="language-${sanitizeHTML(node.lang || '')}">${sanitizeHTML(text)}</code></pre>`
          case 'hr':
            return '<hr>'
          case 'br':
            return '<br>'
          case 'a':
            return `<a href="${sanitizeHTML(node.url)}">${sanitizeHTML(text)}</a>`
          case 'img':
            return `<img src="${sanitizeHTML(node.url)}" alt="${sanitizeHTML(node.alt || '')}">`
          case 'table':
            return `<table>${text}</table>`
          case 'tr':
            return `<tr>${text}</tr>`
          case 'td':
            return `<td>${sanitizeHTML(text)}</td>`
          case 'th':
            return `<th>${sanitizeHTML(text)}</th>`
          default: {
            // Handle text formatting
            {
              let formattedText = sanitizeHTML(text)
              if (node.bold) formattedText = `<strong>${formattedText}</strong>`
              if (node.italic) formattedText = `<em>${formattedText}</em>`
              if (node.underline) formattedText = `<u>${formattedText}</u>`
              if (node.strikethrough) formattedText = `<s>${formattedText}</s>`
              if (node.code) formattedText = `<code>${formattedText}</code>`
              return formattedText
            }
          }
        }
      }

      let body = ''
      if (Array.isArray(content)) {
        body = content.map(convertNode).join('')
      } else {
        body = convertNode(content)
      }

      const styles = includeStyles
        ? `
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          color: #333;
        }
        h1, h2, h3, h4, h5, h6 {
          color: #2c3e50;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1rem;
        }
        blockquote {
          border-left: 4px solid #3498db;
          padding-left: 1rem;
          margin-left: 0;
          font-style: italic;
          color: #7f8c8d;
        }
        pre {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }
        code {
          background: #f8f9fa;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: Monaco, 'Courier New', monospace;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 0.5rem;
          text-align: left;
        }
        th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
      </style>
    `
        : ''

      const metadata = includeMetadata
        ? `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="generator" content="Notable - Notion Clone">
    `
        : ''

      return `<!DOCTYPE html>
<html lang="en">
<head>
  ${metadata}
  <title>${sanitizeHTML(title || 'Untitled Note')}</title>
  ${styles}
</head>
<body>
  ${title ? `<h1>${sanitizeHTML(title)}</h1>` : ''}
  ${body}
</body>
</html>`
    },
    []
  )

  // Convert Plate.js content to React component
  const convertToReact = useCallback((content: any, title?: string): string => {
    const convertNode = (node: any, key: number = 0): string => {
      if (typeof node === 'string') return node
      if (!node.type) return node.text || ''

      const text =
        node.children
          ?.map((child: any, index: number) => convertNode(child, index))
          .join('') || ''

      switch (node.type) {
        case 'h1':
          return `<h1 key={${key}}>${text}</h1>`
        case 'h2':
          return `<h2 key={${key}}>${text}</h2>`
        case 'h3':
          return `<h3 key={${key}}>${text}</h3>`
        case 'h4':
          return `<h4 key={${key}}>${text}</h4>`
        case 'h5':
          return `<h5 key={${key}}>${text}</h5>`
        case 'h6':
          return `<h6 key={${key}}>${text}</h6>`
        case 'p':
          return `<p key={${key}}>${text}</p>`
        case 'blockquote':
          return `<blockquote key={${key}}>${text}</blockquote>`
        case 'ul':
          return `<ul key={${key}}>${text}</ul>`
        case 'ol':
          return `<ol key={${key}}>${text}</ol>`
        case 'li':
          return `<li key={${key}}>${text}</li>`
        case 'code_block':
          return `<pre key={${key}}><code className="language-${node.lang || ''}">${text}</code></pre>`
        case 'hr':
          return `<hr key={${key}} />`
        case 'br':
          return `<br key={${key}} />`
        case 'a':
          return `<a key={${key}} href="${node.url}">${text}</a>`
        case 'img':
          return `<img key={${key}} src="${node.url}" alt="${node.alt || ''}" />`
        case 'table':
          return `<table key={${key}}>${text}</table>`
        case 'tr':
          return `<tr key={${key}}>${text}</tr>`
        case 'td':
          return `<td key={${key}}>${text}</td>`
        case 'th':
          return `<th key={${key}}>${text}</th>`
        default: {
          // Handle text formatting
          {
            let formattedText = text
            if (node.bold) formattedText = `<strong>${formattedText}</strong>`
            if (node.italic) formattedText = `<em>${formattedText}</em>`
            if (node.underline) formattedText = `<u>${formattedText}</u>`
            if (node.strikethrough) formattedText = `<s>${formattedText}</s>`
            if (node.code) formattedText = `<code>${formattedText}</code>`
            return formattedText
          }
        }
      }
    }

    let body = ''
    if (Array.isArray(content)) {
      body = content
        .map((node, index) => convertNode(node, index))
        .join('\n      ')
    } else {
      body = convertNode(content)
    }

    const componentName = title
      ? title.replace(/[^a-zA-Z0-9]/g, '')
      : 'UntitledNote'

    return `import React from 'react'

interface ${componentName}Props {
  className?: string
}

export function ${componentName}({ className }: ${componentName}Props) {
  return (
    <div className={className}>
      ${title ? `<h1>${title}</h1>` : ''}
      ${body}
    </div>
  )
}

export default ${componentName}`
  }, [])

  // Generate table of contents from content
  const generateTableOfContents = useCallback((content: any): string => {
    const headings: Array<{ level: number; text: string; id: string }> = []
    let headingCounter = 0

    const extractHeadings = (node: any) => {
      if (!node || typeof node === 'string') return

      if (node.type && node.type.match(/^h[1-6]$/)) {
        const level = parseInt(node.type.charAt(1))
        const text =
          node.children
            ?.map((child: any) =>
              typeof child === 'string' ? child : child.text || ''
            )
            .join('') || ''

        headingCounter++
        const id = `heading-${headingCounter}`
        headings.push({ level, text, id })
      }

      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(extractHeadings)
      }
    }

    if (Array.isArray(content)) {
      content.forEach(extractHeadings)
    } else {
      extractHeadings(content)
    }

    // Build TOC HTML
    let tocHTML = '<h2>Table of Contents</h2><ul>'
    headings.forEach((heading) => {
      const indent = (heading.level - 1) * 20
      tocHTML += `<li style="margin-left: ${indent}px;">
        <a href="#${heading.id}">${heading.text}</a>
      </li>`
    })
    tocHTML += '</ul>'

    return tocHTML
  }, [])

  // Generate PDF using browser printing with customization options
  const generatePDF = useCallback(
    async (
      content: any,
      title?: string,
      options: ExportOptions = {}
    ): Promise<void> => {
      const {
        includePageNumbers = false,
        includeTableOfContents = false,
        headerText = '',
        footerText = '',
        pageMargins = {
          top: '1in',
          right: '1in',
          bottom: '1in',
          left: '1in',
        },
      } = options

      // Generate table of contents if requested
      let tocHTML = ''
      if (includeTableOfContents) {
        tocHTML = generateTableOfContents(content)
      }

      // Create custom HTML with PDF-specific styling
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || 'Untitled Note'}</title>
  <style>
    @page {
      margin: ${pageMargins.top || '1in'} ${pageMargins.right || '1in'} ${
        pageMargins.bottom || '1in'
      } ${pageMargins.left || '1in'};
      @top-left {
        content: "${headerText}";
        font-size: 10pt;
        color: #666;
      }
      @bottom-right {
        content: "${footerText}";
        font-size: 10pt;
        color: #666;
      }
      ${
        includePageNumbers
          ? `
      @bottom-center {
        content: "Page " counter(page) " of " counter(pages);
        font-size: 10pt;
        color: #666;
      }
      `
          : ''
      }
    }
    
    @media print {
      body {
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      h1, h2, h3, h4, h5, h6 {
        color: #2c3e50;
        page-break-after: avoid;
      }
      h1 { font-size: 24pt; margin-top: 2rem; }
      h2 { font-size: 20pt; margin-top: 1.5rem; }
      h3 { font-size: 16pt; margin-top: 1.2rem; }
      p { margin-bottom: 1rem; orphans: 3; widows: 3; }
      blockquote {
        border-left: 4px solid #3498db;
        padding-left: 1rem;
        margin-left: 0;
        font-style: italic;
        color: #7f8c8d;
      }
      pre {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        page-break-inside: avoid;
      }
      code {
        background: #f8f9fa;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: Monaco, 'Courier New', monospace;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        page-break-inside: avoid;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 0.5rem;
        text-align: left;
      }
      th {
        background-color: #f8f9fa;
        font-weight: bold;
      }
      .toc {
        page-break-after: always;
        margin-bottom: 2rem;
      }
      .toc h2 {
        margin-bottom: 1rem;
      }
      .toc ul {
        list-style: none;
        padding-left: 0;
      }
      .toc li {
        margin-bottom: 0.5rem;
      }
      .toc a {
        text-decoration: none;
        color: #3498db;
      }
      .toc .page-num {
        float: right;
        color: #666;
      }
    }
  </style>
</head>
<body>
  ${includeTableOfContents ? `<div class="toc">${tocHTML}</div>` : ''}
  ${convertToHTML(content, title, { includeStyles: false, includeMetadata: false })}
</body>
</html>`

      // Create a new window for printing
      const printWindow = window.open('', '_blank')
      if (!printWindow) {
        throw new Error(
          'Could not open print window. Please allow popups and try again.'
        )
      }

      try {
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        // Wait for content to load
        await new Promise((resolve) => setTimeout(resolve, 1000))

        printWindow.print()
        printWindow.close()
      } catch (error) {
        printWindow.close()
        throw new Error('Failed to generate PDF. Please try again.')
      }
    },
    [convertToHTML, generateTableOfContents]
  )

  // Main export function
  const exportNote = useCallback(
    async (
      note: Note,
      format: ExportFormat,
      options: ExportOptions = {}
    ): Promise<void> => {
      if (isExporting) return

      setIsExporting(true)
      setExportProgress(0)

      try {
        const { includeTitle = true } = options
        const content =
          typeof note.content === 'string'
            ? JSON.parse(note.content)
            : note.content
        const title = includeTitle ? note.title : undefined

        setExportProgress(25)

        let exportData: string
        let filename: string
        let mimeType: string

        switch (format) {
          case 'markdown':
            exportData = convertToMarkdown(content, title, options)
            filename = `${note.title || 'untitled'}.md`
            mimeType = 'text/markdown'
            break

          case 'html':
            exportData = convertToHTML(content, title, options)
            filename = `${note.title || 'untitled'}.html`
            mimeType = 'text/html'
            break

          case 'react':
            exportData = convertToReact(content, title)
            filename = `${note.title || 'untitled'}.tsx`
            mimeType = 'text/typescript'
            break

          case 'pdf':
            setExportProgress(50)
            await generatePDF(content, title, options)
            setExportProgress(100)
            toast({
              title: 'PDF Export',
              description:
                "PDF export initiated. Use your browser's print dialog to save as PDF.",
            })
            return

          default:
            throw new Error(`Unsupported format: ${format}`)
        }

        setExportProgress(75)

        // Create and download file
        const blob = new Blob([exportData], { type: mimeType })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        setExportProgress(100)

        toast({
          title: 'Export successful',
          description: `Note exported as ${format.toUpperCase()}: ${filename}`,
        })
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Export failed'
        toast({
          title: 'Export failed',
          description: errorMessage,
          variant: 'destructive',
        })
      } finally {
        setIsExporting(false)
        setExportProgress(0)
      }
    },
    [
      isExporting,
      convertToMarkdown,
      convertToHTML,
      convertToReact,
      generatePDF,
      toast,
    ]
  )

  return {
    exportNote,
    isExporting,
    exportProgress,
  }
}
