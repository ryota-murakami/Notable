import { BaseExportService, BaseContentProcessor } from './base-export-service'
import { Note } from '../../types/note'
import {
  ExportOptions,
  HTMLExportOptions,
  ExportResult,
} from '../../types/export'

/**
 * HTML export service for creating standalone web documents
 */
export class HTMLExportService extends BaseExportService {
  constructor() {
    super(new HTMLContentProcessor())
  }

  /**
   * Export note to HTML format
   */
  async exportNote(note: Note, options: ExportOptions): Promise<ExportResult> {
    const htmlOptions = options as HTMLExportOptions

    // Process content to HTML
    const content = this.parseContent(note.content)
    const htmlContent = await this.contentProcessor.processContent(
      content,
      options
    )

    // Generate complete HTML document
    const fullHtml = await this.generateHTMLDocument(
      note,
      htmlContent,
      htmlOptions
    )

    const filename = this.generateFilename(note, options)
    const result: ExportResult = {
      content: fullHtml,
      filename,
      mimeType: 'text/html',
      size: Buffer.byteLength(fullHtml, 'utf8'),
      format: 'html',
      exportedAt: new Date().toISOString(),
    }

    await this.saveToHistory(note, options, result)
    return result
  }

  /**
   * Generate complete HTML document
   */
  private async generateHTMLDocument(
    note: Note,
    content: string,
    options: HTMLExportOptions
  ): Promise<string> {
    const metadata = this.generateMetadata(note, options)
    const styles = await this.generateStyles(options)
    const scripts = options.includeSearch ? this.generateSearchScript() : ''
    const navigation = options.includeNavigation
      ? this.generateNavigation(content)
      : ''

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.escapeHtml(note.title)}</title>
    ${metadata}
    ${styles}
</head>
<body>
    <div class="container">
        ${navigation}
        <main class="content">
            <header class="note-header">
                <h1>${this.escapeHtml(note.title)}</h1>
                ${this.generateMetadataSection(note, options)}
            </header>
            <article class="note-content">
                ${content}
            </article>
        </main>
    </div>
    ${scripts}
</body>
</html>`
  }

  /**
   * Generate HTML metadata tags
   */
  private generateMetadata(note: Note, options: HTMLExportOptions): string {
    let metadata = `
    <meta name="generator" content="Notable">
    <meta name="created" content="${note.created_at}">
    <meta name="modified" content="${note.updated_at}">`

    if (note.tags?.length) {
      metadata += `\n    <meta name="keywords" content="${note.tags.join(', ')}">`
    }

    return metadata
  }

  /**
   * Generate CSS styles
   */
  private async generateStyles(options: HTMLExportOptions): Promise<string> {
    const baseStyles = this.getBaseStyles()
    const themeStyles = options.darkMode
      ? this.getDarkModeStyles()
      : this.getLightModeStyles()
    const responsiveStyles = options.responsive
      ? this.getResponsiveStyles()
      : ''
    const searchStyles = options.includeSearch ? this.getSearchStyles() : ''
    const navigationStyles = options.includeNavigation
      ? this.getNavigationStyles()
      : ''
    const customStyles = options.customCSS || ''

    let allStyles = `${baseStyles}\n${themeStyles}\n${responsiveStyles}\n${searchStyles}\n${navigationStyles}`

    if (customStyles) {
      allStyles += `\n${customStyles}`
    }

    return options.selfContained
      ? `<style>\n${allStyles}\n</style>`
      : `<link rel="stylesheet" href="styles.css">`
  }

  /**
   * Generate base CSS styles
   */
  private getBaseStyles(): string {
    return `
/* Base Styles */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.content {
  background: var(--content-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px var(--shadow-color);
}

.note-header {
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.note-header h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
}

.note-metadata {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--meta-color);
}

.note-content {
  font-size: 1.1rem;
}

/* Typography */
.note-content h1, .note-content h2, .note-content h3, 
.note-content h4, .note-content h5, .note-content h6 {
  color: var(--heading-color);
  margin: 2rem 0 1rem 0;
  font-weight: 600;
}

.note-content h1 { font-size: 2rem; }
.note-content h2 { font-size: 1.75rem; }
.note-content h3 { font-size: 1.5rem; }
.note-content h4 { font-size: 1.25rem; }
.note-content h5 { font-size: 1.1rem; }
.note-content h6 { font-size: 1rem; }

.note-content p {
  margin: 1rem 0;
}

.note-content a {
  color: var(--link-color);
  text-decoration: none;
}

.note-content a:hover {
  text-decoration: underline;
}

/* Lists */
.note-content ul, .note-content ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.note-content li {
  margin: 0.5rem 0;
}

/* Code */
.note-content code {
  background: var(--code-bg);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.note-content pre {
  background: var(--code-bg);
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

.note-content pre code {
  background: none;
  padding: 0;
}

/* Blockquotes */
.note-content blockquote {
  border-left: 4px solid var(--accent-color);
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1rem;
  background: var(--quote-bg);
  font-style: italic;
}

/* Tables */
.note-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.note-content th, .note-content td {
  border: 1px solid var(--border-color);
  padding: 0.75rem;
  text-align: left;
}

.note-content th {
  background: var(--table-header-bg);
  font-weight: 600;
}

/* Images */
.note-content img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1rem 0;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: var(--tag-bg);
  color: var(--tag-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}
`
  }

  /**
   * Generate light mode styles
   */
  private getLightModeStyles(): string {
    return `
/* Light Mode */
:root {
  --bg-color: #f8fafc;
  --content-bg: #ffffff;
  --text-color: #1f2937;
  --heading-color: #111827;
  --meta-color: #6b7280;
  --link-color: #3b82f6;
  --border-color: #e5e7eb;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --accent-color: #3b82f6;
  --code-bg: #f3f4f6;
  --quote-bg: #f9fafb;
  --table-header-bg: #f3f4f6;
  --tag-bg: #dbeafe;
  --tag-color: #1e40af;
}
`
  }

  /**
   * Generate dark mode styles
   */
  private getDarkModeStyles(): string {
    return `
/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #0f172a;
    --content-bg: #1e293b;
    --text-color: #e2e8f0;
    --heading-color: #f1f5f9;
    --meta-color: #94a3b8;
    --link-color: #60a5fa;
    --border-color: #374151;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --accent-color: #60a5fa;
    --code-bg: #374151;
    --quote-bg: #2d3748;
    --table-header-bg: #374151;
    --tag-bg: #1e3a8a;
    --tag-color: #bfdbfe;
  }
}

.dark-mode {
  --bg-color: #0f172a;
  --content-bg: #1e293b;
  --text-color: #e2e8f0;
  --heading-color: #f1f5f9;
  --meta-color: #94a3b8;
  --link-color: #60a5fa;
  --border-color: #374151;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --accent-color: #60a5fa;
  --code-bg: #374151;
  --quote-bg: #2d3748;
  --table-header-bg: #374151;
  --tag-bg: #1e3a8a;
  --tag-color: #bfdbfe;
}
`
  }

  /**
   * Generate responsive styles
   */
  private getResponsiveStyles(): string {
    return `
/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .content {
    padding: 1rem;
  }

  .note-header h1 {
    font-size: 2rem;
  }

  .note-content {
    font-size: 1rem;
  }

  .note-metadata {
    flex-direction: column;
    gap: 0.5rem;
  }

  .navigation {
    position: relative !important;
    width: 100% !important;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .note-header h1 {
    font-size: 1.75rem;
  }

  .note-content h1 { font-size: 1.75rem; }
  .note-content h2 { font-size: 1.5rem; }
  .note-content h3 { font-size: 1.25rem; }
}
`
  }

  /**
   * Generate search functionality styles
   */
  private getSearchStyles(): string {
    return `
/* Search Styles */
.search-container {
  margin-bottom: 2rem;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--content-bg);
  color: var(--text-color);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--content-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  display: none;
}

.search-result {
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
}

.search-result:hover {
  background: var(--quote-bg);
}

.search-result:last-child {
  border-bottom: none;
}

.highlight {
  background: yellow;
  color: black;
}
`
  }

  /**
   * Generate navigation styles
   */
  private getNavigationStyles(): string {
    return `
/* Navigation Styles */
.navigation {
  position: sticky;
  top: 2rem;
  float: right;
  width: 250px;
  margin-left: 2rem;
  background: var(--content-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
}

.navigation h3 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: var(--heading-color);
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation li {
  margin: 0.25rem 0;
}

.navigation a {
  color: var(--meta-color);
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.4;
}

.navigation a:hover {
  color: var(--link-color);
}

.navigation .level-1 { padding-left: 0; }
.navigation .level-2 { padding-left: 1rem; }
.navigation .level-3 { padding-left: 2rem; }
.navigation .level-4 { padding-left: 3rem; }
.navigation .level-5 { padding-left: 4rem; }
.navigation .level-6 { padding-left: 5rem; }
`
  }

  /**
   * Generate metadata section HTML
   */
  private generateMetadataSection(
    note: Note,
    options: HTMLExportOptions
  ): string {
    const parts: string[] = []

    if (options.includeDates) {
      parts.push(
        `<span>Created: ${new Date(note.created_at).toLocaleDateString()}</span>`
      )
      parts.push(
        `<span>Updated: ${new Date(note.updated_at).toLocaleDateString()}</span>`
      )
    }

    const tagsHtml = note.tags?.length
      ? `<div class="tags">${note.tags.map((tag) => `<span class="tag">${this.escapeHtml(tag)}</span>`).join('')}</div>`
      : ''

    const metadataHtml =
      parts.length > 0
        ? `<div class="note-metadata">${parts.join('')}</div>`
        : ''

    return `${metadataHtml}${tagsHtml}`
  }

  /**
   * Generate navigation from content headings
   */
  private generateNavigation(content: string): string {
    const headingRegex = /<h([1-6])(?:[^>]*)>([^<]+)<\/h[1-6]>/gi
    const headings: Array<{ level: number; text: string; id: string }> = []

    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1])
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      headings.push({ level, text, id })
    }

    if (headings.length === 0) {
      return ''
    }

    const navItems = headings
      .map(
        (heading) =>
          `<li class="level-${heading.level}"><a href="#${heading.id}">${this.escapeHtml(heading.text)}</a></li>`
      )
      .join('')

    return `
    <nav class="navigation">
      <h3>Table of Contents</h3>
      <ul>${navItems}</ul>
    </nav>`
  }

  /**
   * Generate search script
   */
  private generateSearchScript(): string {
    return `
    <script>
      // Simple search functionality
      function initSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'search-input';
        searchInput.placeholder = 'Search in document...';
        
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.appendChild(searchInput);
        
        const content = document.querySelector('.content');
        content.insertBefore(searchContainer, content.firstChild);
        
        searchInput.addEventListener('input', function(e) {
          const query = e.target.value.toLowerCase();
          const textNodes = getTextNodes(document.querySelector('.note-content'));
          
          // Clear previous highlights
          clearHighlights();
          
          if (query.length > 2) {
            highlightText(textNodes, query);
          }
        });
      }
      
      function getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );
        
        let node;
        while (node = walker.nextNode()) {
          textNodes.push(node);
        }
        
        return textNodes;
      }
      
      function highlightText(textNodes, query) {
        textNodes.forEach(node => {
          const text = node.textContent.toLowerCase();
          if (text.includes(query)) {
            const parent = node.parentNode;
            const html = node.textContent.replace(
              new RegExp(query, 'gi'), 
              '<span class="highlight">$&</span>'
            );
            const wrapper = document.createElement('span');
            wrapper.innerHTML = html;
            parent.replaceChild(wrapper, node);
          }
        });
      }
      
      function clearHighlights() {
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
          const parent = highlight.parentNode;
          parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
          parent.normalize();
        });
      }
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
      } else {
        initSearch();
      }
    </script>`
  }

  /**
   * Escape HTML characters
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }

  /**
   * Validate HTML-specific options
   */
  protected validateFormatSpecificOptions(
    options: ExportOptions,
    errors: string[]
  ): void {
    // HTML options are generally flexible, no strict validation needed
  }
}

/**
 * HTML content processor for Plate.js nodes
 */
export class HTMLContentProcessor extends BaseContentProcessor {
  protected async processTextNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    let text = this.escapeHtml(node.text || '')

    // Apply text formatting with HTML tags
    if (node.bold) text = `<strong>${text}</strong>`
    if (node.italic) text = `<em>${text}</em>`
    if (node.underline) text = `<u>${text}</u>`
    if (node.strikethrough) text = `<del>${text}</del>`
    if (node.code) text = `<code>${text}</code>`
    if (node.superscript) text = `<sup>${text}</sup>`
    if (node.subscript) text = `<sub>${text}</sub>`

    return text
  }

  protected async processParagraph(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return content ? `<p>${content}</p>` : ''
  }

  protected async processHeading(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const level = Math.min(Math.max(node.level || 1, 1), 6)
    const content = await this.processChildren(node, options)
    const id = content
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
    return `<h${level} id="${id}">${content}</h${level}>`
  }

  protected async processList(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const tag = node.ordered ? 'ol' : 'ul'
    return `<${tag}>${content}</${tag}>`
  }

  protected async processListItem(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `<li>${content}</li>`
  }

  protected async processBlockquote(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `<blockquote>${content}</blockquote>`
  }

  protected async processCodeBlock(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const language = node.language || ''
    const languageClass = language ? ` class="language-${language}"` : ''
    return `<pre><code${languageClass}>${this.escapeHtml(content)}</code></pre>`
  }

  protected async processTable(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `<table>${content}</table>`
  }

  protected async processImage(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const src = node.src || node.url || ''
    const alt = this.escapeHtml(node.alt || '')
    const title = node.title ? ` title="${this.escapeHtml(node.title)}"` : ''
    return `<img src="${src}" alt="${alt}"${title}>`
  }

  protected async processLink(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const href = node.url || node.href || ''
    const title = node.title ? ` title="${this.escapeHtml(node.title)}"` : ''
    return `<a href="${href}"${title}>${content}</a>`
  }

  protected async processGenericNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    return this.processChildren(node, options)
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }
}
