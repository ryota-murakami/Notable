import { BaseExportService, BaseContentProcessor } from './base-export-service'
import { Note } from '../../types/note'
import {
  ExportOptions,
  ReactExportOptions,
  ExportResult,
} from '../../types/export'

/**
 * React export service for generating JSX components
 */
export class ReactExportService extends BaseExportService {
  constructor() {
    super(new ReactContentProcessor())
  }

  /**
   * Export note to React component format
   */
  async exportNote(note: Note, options: ExportOptions): Promise<ExportResult> {
    const reactOptions = options as ReactExportOptions

    // Process content to JSX
    const content = this.parseContent(note.content)
    const jsxContent = await this.contentProcessor.processContent(
      content,
      options
    )

    // Generate complete React component
    const componentCode = await this.generateReactComponent(
      note,
      jsxContent,
      reactOptions
    )

    const filename = this.generateFilename(note, options)
    const result: ExportResult = {
      content: componentCode,
      filename,
      mimeType: 'text/typescript',
      size: Buffer.byteLength(componentCode, 'utf8'),
      format: 'react',
      exportedAt: new Date().toISOString(),
    }

    // Generate additional files if needed
    if (reactOptions.styling === 'css-modules') {
      result.additionalFiles = [
        {
          filename: filename.replace(/\.tsx?$/, '.module.css'),
          content: this.generateCSSModule(reactOptions),
          mimeType: 'text/css',
        },
      ]
    }

    await this.saveToHistory(note, options, result)
    return result
  }

  /**
   * Generate complete React component code
   */
  private async generateReactComponent(
    note: Note,
    jsxContent: string,
    options: ReactExportOptions
  ): Promise<string> {
    const imports = this.generateImports(options)
    const propsInterface = this.generatePropsInterface(note, options)
    const componentName =
      options.componentName || this.sanitizeComponentName(note.title)
    const styling = this.getStylingProps(options)
    const metadata = this.generateMetadataJSX(note, options)

    const isTypeScript = options.useTypeScript
    const extension = isTypeScript ? 'tsx' : 'jsx'

    let component = ''

    if (options.functional) {
      component = this.generateFunctionalComponent(
        componentName,
        propsInterface,
        metadata,
        jsxContent,
        styling,
        options
      )
    } else {
      component = this.generateClassComponent(
        componentName,
        propsInterface,
        metadata,
        jsxContent,
        styling,
        options
      )
    }

    const documentation = this.generateComponentDocumentation(
      componentName,
      note,
      options
    )

    return `${documentation}${imports}\n\n${propsInterface}\n\n${component}`
  }

  /**
   * Generate import statements
   */
  private generateImports(options: ReactExportOptions): string {
    const imports = ['React']

    if (!options.functional) {
      imports.push('Component')
    }

    let reactImport = `import ${imports.join(', ')} from 'react'`

    const additionalImports: string[] = []

    if (options.styling === 'styled-components') {
      additionalImports.push("import styled from 'styled-components'")
    } else if (options.styling === 'css-modules') {
      additionalImports.push("import styles from './NoteComponent.module.css'")
    }

    if (options.includePropTypes) {
      additionalImports.push("import PropTypes from 'prop-types'")
    }

    return [reactImport, ...additionalImports].join('\n')
  }

  /**
   * Generate TypeScript props interface
   */
  private generatePropsInterface(
    note: Note,
    options: ReactExportOptions
  ): string {
    if (!options.useTypeScript) {
      return ''
    }

    const interfaceName =
      options.propsInterface ||
      `${options.componentName || 'NoteComponent'}Props`

    const props = ['className?: string', 'style?: React.CSSProperties']

    if (options.includeDates) {
      props.push('showDates?: boolean')
    }

    if (options.includeTags && note.tags?.length) {
      props.push('showTags?: boolean')
    }

    return `interface ${interfaceName} {
  ${props.join('\n  ')}
}`
  }

  /**
   * Generate functional component
   */
  private generateFunctionalComponent(
    componentName: string,
    propsInterface: string,
    metadata: string,
    content: string,
    styling: any,
    options: ReactExportOptions
  ): string {
    const propsType = options.useTypeScript
      ? `: ${options.propsInterface || `${componentName}Props`}`
      : ''

    const destructuredProps = this.getDestructuredProps(options)

    return `const ${componentName}${options.useTypeScript ? ': React.FC' + (propsType || '<{}>') : ''} = (${destructuredProps}) => {
  return (
    <div${styling.container}>
      ${metadata}
      <div${styling.content}>
        ${content}
      </div>
    </div>
  )
}

${this.generatePropTypes(componentName, options)}

export default ${componentName}`
  }

  /**
   * Generate class component
   */
  private generateClassComponent(
    componentName: string,
    propsInterface: string,
    metadata: string,
    content: string,
    styling: any,
    options: ReactExportOptions
  ): string {
    const propsType = options.useTypeScript
      ? `<${options.propsInterface || `${componentName}Props`}>`
      : ''

    return `class ${componentName} extends Component${propsType} {
  render() {
    const { className, style } = this.props
    
    return (
      <div${styling.container}>
        ${metadata}
        <div${styling.content}>
          ${content}
        </div>
      </div>
    )
  }
}

${this.generatePropTypes(componentName, options)}

export default ${componentName}`
  }

  /**
   * Generate metadata JSX
   */
  private generateMetadataJSX(note: Note, options: ReactExportOptions): string {
    const parts: string[] = []

    parts.push(
      `<h1${this.getStylingProp(options, 'title')}>${this.escapeJSX(note.title)}</h1>`
    )

    if (options.includeDates) {
      parts.push(`{showDates && (
        <div${this.getStylingProp(options, 'metadata')}>
          <span>Created: {new Date('${note.created_at}').toLocaleDateString()}</span>
          <span>Updated: {new Date('${note.updated_at}').toLocaleDateString()}</span>
        </div>
      )}`)
    }

    if (options.includeTags && note.tags?.length) {
      const tagsJSX = note.tags
        .map(
          (tag) =>
            `<span key="${tag}"${this.getStylingProp(options, 'tag')}>${this.escapeJSX(tag)}</span>`
        )
        .join('\n          ')

      parts.push(`{showTags && (
        <div${this.getStylingProp(options, 'tags')}>
          ${tagsJSX}
        </div>
      )}`)
    }

    return parts.length > 0
      ? `<header${this.getStylingProp(options, 'header')}>\n        ${parts.join('\n        ')}\n      </header>`
      : ''
  }

  /**
   * Get styling props based on styling approach
   */
  private getStylingProps(options: ReactExportOptions): any {
    switch (options.styling) {
      case 'css-modules':
        return {
          container:
            ' className={`${styles.container} ${className || ""}`} style={style}',
          content: ` className={styles.content}`,
          header: ` className={styles.header}`,
          title: ` className={styles.title}`,
          metadata: ` className={styles.metadata}`,
          tags: ` className={styles.tags}`,
          tag: ` className={styles.tag}`,
        }
      case 'styled-components':
        return {
          container: '',
          content: '',
          header: '',
          title: '',
          metadata: '',
          tags: '',
          tag: '',
        }
      case 'tailwind':
        return {
          container:
            ' className={`max-w-4xl mx-auto p-6 ${className || ""}`} style={style}',
          content: ` className="prose prose-lg max-w-none"`,
          header: ` className="border-b pb-4 mb-6"`,
          title: ` className="text-3xl font-bold text-gray-900 mb-4"`,
          metadata: ` className="flex gap-4 text-sm text-gray-600"`,
          tags: ` className="flex flex-wrap gap-2 mt-4"`,
          tag: ` className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"`,
        }
      default:
        return {
          container: ' className={className} style={style}',
          content: '',
          header: '',
          title: '',
          metadata: '',
          tags: '',
          tag: '',
        }
    }
  }

  /**
   * Get styling prop for specific element
   */
  private getStylingProp(options: ReactExportOptions, element: string): string {
    const styling = this.getStylingProps(options)
    return styling[element] || ''
  }

  /**
   * Generate destructured props for functional component
   */
  private getDestructuredProps(options: ReactExportOptions): string {
    const props = ['className', 'style']

    if (options.includeDates) {
      props.push('showDates = true')
    }

    if (options.includeTags) {
      props.push('showTags = true')
    }

    const propsType = options.useTypeScript
      ? `: ${options.propsInterface || 'NoteComponentProps'}`
      : ''

    return `{ ${props.join(', ')} }${propsType}`
  }

  /**
   * Generate PropTypes if requested
   */
  private generatePropTypes(
    componentName: string,
    options: ReactExportOptions
  ): string {
    if (!options.includePropTypes) {
      return ''
    }

    const propTypes = ['className: PropTypes.string', 'style: PropTypes.object']

    if (options.includeDates) {
      propTypes.push('showDates: PropTypes.bool')
    }

    if (options.includeTags) {
      propTypes.push('showTags: PropTypes.bool')
    }

    return `\n${componentName}.propTypes = {
  ${propTypes.join(',\n  ')}
}`
  }

  /**
   * Generate CSS module
   */
  private generateCSSModule(options: ReactExportOptions): string {
    return `.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

.header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.metadata {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: #ebf8ff;
  color: #2b6cb0;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.content {
  font-size: 1.1rem;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #2d3748;
  margin: 2rem 0 1rem 0;
  font-weight: 600;
}

.content p {
  margin: 1rem 0;
}

.content a {
  color: #3182ce;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

.content ul,
.content ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.content li {
  margin: 0.5rem 0;
}

.content code {
  background: #f7fafc;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.content pre {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

.content blockquote {
  border-left: 4px solid #3182ce;
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1rem;
  background: #f8f9fa;
  font-style: italic;
}

.content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.content th,
.content td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

.content th {
  background: #f7fafc;
  font-weight: 600;
}

.content img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .metadata {
    flex-direction: column;
    gap: 0.5rem;
  }
}`
  }

  /**
   * Generate component documentation
   */
  private generateComponentDocumentation(
    componentName: string,
    note: Note,
    options: ReactExportOptions
  ): string {
    const props = []

    if (options.includeDates) {
      props.push(
        ' * @param {boolean} [showDates=true] - Whether to show creation and modification dates'
      )
    }

    if (options.includeTags) {
      props.push(' * @param {boolean} [showTags=true] - Whether to show tags')
    }

    props.push(' * @param {string} [className] - Additional CSS class names')
    props.push(' * @param {React.CSSProperties} [style] - Inline styles')

    return `/**
 * ${componentName} - React component generated from Notable export
 * 
 * Original note: "${note.title}"
 * Exported on: ${new Date().toLocaleDateString()}
 * 
${props.join('\n')}
 * 
 * @example
 * \`\`\`jsx
 * import ${componentName} from './${componentName}'
 * 
 * function App() {
 *   return (
 *     <${componentName} 
 *       className="my-note"
 *       showDates={true}
 *       showTags={true}
 *     />
 *   )
 * }
 * \`\`\`
 */
`
  }

  /**
   * Sanitize component name
   */
  private sanitizeComponentName(title: string): string {
    return (
      title
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
        .replace(/^\d+/, '') || // Remove leading numbers
      'NoteComponent'
    )
  }

  /**
   * Escape JSX content
   */
  private escapeJSX(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;')
  }

  /**
   * Validate React-specific options
   */
  protected validateFormatSpecificOptions(
    options: ExportOptions,
    errors: string[]
  ): void {
    const reactOptions = options as ReactExportOptions

    if (reactOptions.componentName) {
      const isValidName = /^[A-Z][a-zA-Z0-9]*$/.test(reactOptions.componentName)
      if (!isValidName) {
        errors.push(
          'Component name must be a valid React component name (PascalCase)'
        )
      }
    }

    if (
      reactOptions.styling === 'styled-components' &&
      !reactOptions.useTypeScript
    ) {
      // Styled components work fine with JS, this is just a style preference
    }
  }
}

/**
 * React content processor for generating JSX
 */
export class ReactContentProcessor extends BaseContentProcessor {
  protected async processTextNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    let text = this.escapeJSX(node.text || '')

    // Apply text formatting with JSX
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
    return content ? `        <p>${content}</p>` : ''
  }

  protected async processHeading(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const level = Math.min(Math.max(node.level || 1, 1), 6)
    const content = await this.processChildren(node, options)
    return `        <h${level}>${content}</h${level}>`
  }

  protected async processList(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const tag = node.ordered ? 'ol' : 'ul'
    return `        <${tag}>\n${content}\n        </${tag}>`
  }

  protected async processListItem(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `          <li>${content}</li>`
  }

  protected async processBlockquote(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `        <blockquote>${content}</blockquote>`
  }

  protected async processCodeBlock(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `        <pre><code>${this.escapeJSX(content)}</code></pre>`
  }

  protected async processTable(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    return `        <table>\n${content}\n        </table>`
  }

  protected async processImage(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const src = node.src || node.url || ''
    const alt = this.escapeJSX(node.alt || '')
    return `        <img src="${src}" alt="${alt}" />`
  }

  protected async processLink(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    const content = await this.processChildren(node, options)
    const href = node.url || node.href || ''
    return `<a href="${href}">${content}</a>`
  }

  protected async processGenericNode(
    node: any,
    options: ExportOptions
  ): Promise<string> {
    return this.processChildren(node, options)
  }

  private escapeJSX(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;')
  }
}
