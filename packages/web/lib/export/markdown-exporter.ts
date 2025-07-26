import { type Descendant } from 'slate'
import { BaseExporter } from './base-exporter'
import {
  type BulkExportOptions,
  type ExportMetadata,
  type ExportOptions,
  type ExportResult,
  type MarkdownExportOptions,
} from './types'
import { SlateToMarkdownConverter } from './converters/slate-to-markdown'
import { ArchiveCreator, type FileEntry } from './utils/archive-utils'

export class MarkdownExporter extends BaseExporter {
  private converter: SlateToMarkdownConverter

  constructor() {
    super('markdown')
    this.converter = new SlateToMarkdownConverter()
  }

  async export(
    content: Descendant[],
    options: ExportOptions,
    metadata?: ExportMetadata
  ): Promise<ExportResult> {
    try {
      const markdownOptions = options as MarkdownExportOptions

      // Convert content to markdown
      const markdownContent =
        markdownOptions.flavor === 'gfm'
          ? this.converter.convertToGFM(content)
          : this.converter.convert(content)

      // Build the final document
      let finalContent = ''

      // Add front matter if metadata is included
      if (markdownOptions.includeMetadata && metadata) {
        finalContent += this.generateFrontMatter(metadata)
        finalContent += '\n\n'
      }

      // Add the main content
      finalContent += markdownContent

      // Generate filename
      const fileName =
        options.fileName ||
        this.generateFileName(metadata?.title || 'export', 'md', metadata)

      // Create blob
      const blob = this.createBlob(finalContent, 'text/markdown')

      return {
        success: true,
        data: blob,
        fileName,
        mimeType: 'text/markdown',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async bulkExport(options: BulkExportOptions): Promise<ExportResult> {
    try {
      const {
        notes,
        format,
        archiveType = 'zip',
        folderStructure = true,
      } = options

      if (format !== 'markdown') {
        throw new Error('Invalid format for markdown exporter')
      }

      // Create file entries for each note
      const files: FileEntry[] = []

      for (const note of notes) {
        const markdownContent = this.converter.convert(note.content)

        let finalContent = ''
        if (note.metadata) {
          finalContent += this.generateFrontMatter(note.metadata)
          finalContent += '\n\n'
        }
        finalContent += markdownContent

        const fileName = note.metadata?.title
          ? `${note.metadata.title.replace(/[^a-z0-9]/gi, '_')}.md`
          : `note_${note.id}.md`

        files.push({
          name: fileName,
          content: finalContent,
        })
      }

      // Validate files
      const validation = ArchiveCreator.validateFiles(files)
      if (!validation.valid) {
        throw new Error(`Validation failed: ${validation.errors.join(', ')}`)
      }

      // Organize files if folder structure is requested
      const organizedFiles = ArchiveCreator.organizeFilesByStructure(
        files,
        folderStructure
      )

      // Create archive
      const archiveBlob = await ArchiveCreator.createArchive(organizedFiles, {
        type: archiveType,
      })
      const archiveName = ArchiveCreator.generateArchiveName(
        'notes-export',
        'markdown'
      )

      return {
        success: true,
        data: archiveBlob,
        fileName: archiveName,
        mimeType: 'application/zip',
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private generateFrontMatter(metadata: ExportMetadata): string {
    const frontMatter: string[] = ['---']

    if (metadata.title) {
      frontMatter.push(`title: "${metadata.title}"`)
    }

    if (metadata.author) {
      frontMatter.push(`author: "${metadata.author}"`)
    }

    if (metadata.createdAt) {
      frontMatter.push(`created: ${metadata.createdAt.toISOString()}`)
    }

    if (metadata.updatedAt) {
      frontMatter.push(`updated: ${metadata.updatedAt.toISOString()}`)
    }

    if (metadata.tags && metadata.tags.length > 0) {
      frontMatter.push('tags:')
      metadata.tags.forEach((tag) => {
        frontMatter.push(`  - ${tag}`)
      })
    }

    if (metadata.description) {
      // Escape quotes and ensure proper indentation
      const escapedDescription = metadata.description
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\n  ')
      frontMatter.push(`description: |`)
      frontMatter.push(`  ${escapedDescription}`)
    }

    frontMatter.push('---')

    return frontMatter.join('\n')
  }
}
