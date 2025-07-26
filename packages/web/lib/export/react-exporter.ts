import { type Descendant } from 'slate'
import { BaseExporter } from './base-exporter'
import {
  type BulkExportOptions,
  type ExportMetadata,
  type ExportOptions,
  type ExportResult,
  type ReactExportOptions,
} from './types'
import { SlateToReactConverter } from './converters/slate-to-react'

export class ReactExporter extends BaseExporter {
  private converter: SlateToReactConverter

  constructor() {
    super('react')
    this.converter = new SlateToReactConverter()
  }

  async export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult> {
    try {
      const reactOptions = options as ReactExportOptions
      const componentName =
        reactOptions.componentName ||
        this.generateComponentName(metadata?.title)

      let componentCode: string
      const additionalFiles: Array<{ name: string; content: string }> = []

      // Generate component based on options
      if (reactOptions.typescript) {
        const { component, types } = this.converter.convertWithTypeScript(
          content,
          componentName
        )
        componentCode = component
        additionalFiles.push({
          name: `${componentName}.types.ts`,
          content: types,
        })
      } else {
        componentCode = this.converter.convert(content, componentName)
      }

      // Add styled version if requested
      if (reactOptions.styleType) {
        const { component, styles } = this.converter.generateStyledComponent(
          content,
          componentName,
          reactOptions.styleType
        )
        componentCode = component

        if (styles && reactOptions.styleType === 'css-modules') {
          additionalFiles.push({
            name: `${componentName}.module.css`,
            content: styles,
          })
        }
      }

      // Add documentation if requested
      if (reactOptions.includeDocs) {
        additionalFiles.push({
          name: 'README.md',
          content: this.generateDocumentation(
            componentName,
            reactOptions,
            metadata
          ),
        })
      }

      // For single file export, return just the component
      if (additionalFiles.length === 0) {
        const fileName =
          options.fileName ||
          `${componentName}.${reactOptions.typescript ? 'tsx' : 'jsx'}`
        const blob = this.createBlob(componentCode, 'text/javascript')

        return {
          success: true,
          data: blob,
          fileName,
          mimeType: 'text/javascript',
        }
      }

      // For multiple files, create a simple archive (in real implementation, use JSZip)
      const allFiles = [
        {
          name: `${componentName}.${reactOptions.typescript ? 'tsx' : 'jsx'}`,
          content: componentCode,
        },
        ...additionalFiles,
      ]

      const archiveContent = this.createSimpleArchive(allFiles)
      const fileName = options.fileName || `${componentName}-export.tar`
      const blob = this.createBlob(archiveContent, 'application/x-tar')

      return {
        success: true,
        data: blob,
        fileName,
        mimeType: 'application/x-tar',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async bulkExport(options: BulkExportOptions): Promise<ExportResult> {
    try {
      const { notes, format } = options

      if (format !== 'react') {
        throw new Error('Invalid format for React exporter')
      }

      // Generate a component for each note
      const components: Array<{ name: string; content: string }> = []

      notes.forEach((note, index) => {
        const componentName = this.generateComponentName(
          note.metadata?.title || `Note${index + 1}`
        )
        const componentCode = this.converter.convert(
          note.content,
          componentName
        )

        components.push({
          name: `${componentName}.jsx`,
          content: componentCode,
        })
      })

      // Create an index file that exports all components
      const indexContent = this.generateIndexFile(components)
      components.push({
        name: 'index.js',
        content: indexContent,
      })

      // Create documentation
      components.push({
        name: 'README.md',
        content: this.generateBulkDocumentation(notes),
      })

      const archiveContent = this.createSimpleArchive(components)
      const fileName = this.generateFileName('react-components', 'tar')
      const blob = this.createBlob(archiveContent, 'application/x-tar')

      return {
        success: true,
        data: blob,
        fileName,
        mimeType: 'application/x-tar',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private generateComponentName(title?: string): string {
    if (!title) return 'ExportedNote'

    // Convert title to PascalCase component name
    return title
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  }

  private generateDocumentation(
    componentName: string,
    options: ReactExportOptions,
    metadata?: ExportMetadata
  ): string {
    const sections: string[] = []

    sections.push(`# ${componentName}`)
    sections.push('')

    if (metadata?.description) {
      sections.push(metadata.description)
      sections.push('')
    }

    sections.push('## Installation')
    sections.push('')
    sections.push('```bash')
    sections.push(`# Copy the component files to your project`)
    sections.push(
      `cp ${componentName}.${options.typescript ? 'tsx' : 'jsx'} /path/to/your/components/`
    )

    if (options.styleType === 'css-modules') {
      sections.push(`cp ${componentName}.module.css /path/to/your/components/`)
    }

    sections.push('```')
    sections.push('')

    sections.push('## Usage')
    sections.push('')
    sections.push('```jsx')
    sections.push(
      `import ${componentName} from './components/${componentName}';`
    )
    sections.push('')
    sections.push('function App() {')
    sections.push('  return (')
    sections.push('    <div>')
    sections.push(`      <${componentName} />`)
    sections.push('    </div>')
    sections.push('  );')
    sections.push('}')
    sections.push('```')
    sections.push('')

    if (options.includeProps && options.typescript) {
      sections.push('## Props')
      sections.push('')
      sections.push('| Prop | Type | Description |')
      sections.push('|------|------|-------------|')
      sections.push('| className | string | Optional CSS class name |')
      sections.push('| style | CSSProperties | Optional inline styles |')
      sections.push(
        '| onContentClick | MouseEventHandler | Click handler for content |'
      )
      sections.push('')
    }

    if (options.styleType) {
      sections.push('## Styling')
      sections.push('')

      switch (options.styleType) {
        case 'css-in-js':
          sections.push('This component uses styled-components for styling.')
          sections.push('Make sure you have styled-components installed:')
          sections.push('')
          sections.push('```bash')
          sections.push('npm install styled-components')
          sections.push('```')
          break

        case 'css-modules':
          sections.push('This component uses CSS Modules for styling.')
          sections.push('Make sure your build system supports CSS Modules.')
          break

        case 'inline':
          sections.push('This component uses inline styles.')
          sections.push(
            'You can customize the styles by modifying the styles object.'
          )
          break
      }
      sections.push('')
    }

    if (metadata) {
      sections.push('## Metadata')
      sections.push('')
      if (metadata.title) sections.push(`- **Title**: ${metadata.title}`)
      if (metadata.author) sections.push(`- **Author**: ${metadata.author}`)
      if (metadata.createdAt)
        sections.push(
          `- **Created**: ${metadata.createdAt.toLocaleDateString()}`
        )
      if (metadata.tags?.length)
        sections.push(`- **Tags**: ${metadata.tags.join(', ')}`)
      sections.push('')
    }

    sections.push('## License')
    sections.push('')
    sections.push('This component is exported from Notable.')
    sections.push('')

    return sections.join('\n')
  }

  private generateBulkDocumentation(
    notes: Array<{
      id: string
      content: Descendant[]
      metadata?: ExportMetadata
    }>
  ): string {
    const sections: string[] = []

    sections.push('# Exported React Components')
    sections.push('')
    sections.push(
      'This archive contains React components exported from Notable.'
    )
    sections.push('')

    sections.push('## Components')
    sections.push('')

    notes.forEach((note, index) => {
      const componentName = this.generateComponentName(
        note.metadata?.title || `Note${index + 1}`
      )
      sections.push(
        `- **${componentName}**: ${note.metadata?.title || 'Untitled Note'}`
      )
    })

    sections.push('')
    sections.push('## Usage')
    sections.push('')
    sections.push('Import and use the components in your React application:')
    sections.push('')
    sections.push('```jsx')
    sections.push(
      "import { Component1, Component2 } from './exported-components';"
    )
    sections.push('```')
    sections.push('')

    sections.push('## Structure')
    sections.push('')
    sections.push('- Each `.jsx` file contains a single React component')
    sections.push('- `index.js` exports all components for easy importing')
    sections.push('- Components are functional and use modern React patterns')
    sections.push('')

    return sections.join('\n')
  }

  private generateIndexFile(
    components: Array<{ name: string; content: string }>
  ): string {
    const exports: string[] = []

    components.forEach(({ name }) => {
      if (name === 'index.js' || name === 'README.md') return

      const componentName = name.replace(/\.(jsx|tsx)$/, '')
      exports.push(
        `export { default as ${componentName} } from './${componentName}';`
      )
    })

    return exports.join('\n')
  }

  private createSimpleArchive(
    files: Array<{ name: string; content: string }>
  ): string {
    // In a real implementation, use JSZip or similar
    // For now, create a simple text representation
    let archive = '=== React Component Archive ===\n\n'

    files.forEach(({ name, content }) => {
      archive += `--- File: ${name} ---\n`
      archive += content
      archive += '\n\n'
    })

    return archive
  }
}
