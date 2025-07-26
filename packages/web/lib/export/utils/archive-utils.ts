// Archive utilities for bulk export functionality
// This provides a lightweight ZIP creation for bulk exports

export interface FileEntry {
  name: string
  content: string | Blob
  isDirectory?: boolean
}

export interface ArchiveOptions {
  type: 'zip' | 'tar'
  compression?: boolean
}

/**
 * Simple ZIP file creator using built-in browser APIs
 * For production use, consider using libraries like JSZip
 */
export class ArchiveCreator {
  /**
   * Creates a ZIP-like archive from file entries
   * Note: This is a simplified implementation. For full ZIP support, use JSZip library
   */
  static async createArchive(
    files: FileEntry[],
    options: ArchiveOptions = { type: 'zip' }
  ): Promise<Blob> {
    if (options.type === 'zip') {
      return this.createZipArchive(files)
    } else {
      // For now, fallback to ZIP for TAR
      return this.createZipArchive(files)
    }
  }

  private static async createZipArchive(files: FileEntry[]): Promise<Blob> {
    // Simple ZIP-like structure
    // In production, use JSZip for proper ZIP creation
    const boundary = '----ARCHIVE_BOUNDARY----'
    const archiveContent: string[] = []

    archiveContent.push('# Exported Notes Archive')
    archiveContent.push(`# Created: ${new Date().toISOString()}`)
    archiveContent.push(`# Total files: ${files.length}`)
    archiveContent.push('')

    for (const file of files) {
      archiveContent.push(boundary)
      archiveContent.push(`File: ${file.name}`)
      archiveContent.push('Content:')

      if (file.content instanceof Blob) {
        // Convert blob to text
        const text = await file.content.text()
        archiveContent.push(text)
      } else {
        archiveContent.push(file.content)
      }

      archiveContent.push('')
    }

    archiveContent.push(boundary)

    const archiveText = archiveContent.join('\n')
    return new Blob([archiveText], { type: 'text/plain' })
  }

  /**
   * Creates a folder structure for bulk exports
   */
  static organizeFilesByStructure(
    files: FileEntry[],
    useStructure: boolean = true
  ): FileEntry[] {
    if (!useStructure) {
      return files
    }

    // Group files by type/category
    const organized: FileEntry[] = []
    const filesByType = new Map<string, FileEntry[]>()

    files.forEach((file) => {
      const extension = file.name.split('.').pop()?.toLowerCase() || 'other'
      if (!filesByType.has(extension)) {
        filesByType.set(extension, [])
      }
      filesByType.get(extension)!.push(file)
    })

    // Create organized structure
    filesByType.forEach((typeFiles, type) => {
      // Add directory marker
      organized.push({
        name: `${type}/`,
        content: '',
        isDirectory: true,
      })

      // Add files in this directory
      typeFiles.forEach((file) => {
        organized.push({
          ...file,
          name: `${type}/${file.name}`,
        })
      })
    })

    return organized
  }

  /**
   * Validates file entries before archiving
   */
  static validateFiles(files: FileEntry[]): {
    valid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    if (files.length === 0) {
      errors.push('No files to archive')
    }

    const names = new Set<string>()
    files.forEach((file, index) => {
      if (!file.name || file.name.trim() === '') {
        errors.push(`File at index ${index} has no name`)
      }

      if (names.has(file.name)) {
        errors.push(`Duplicate file name: ${file.name}`)
      }
      names.add(file.name)

      if (file.content === undefined || file.content === null) {
        errors.push(`File ${file.name} has no content`)
      }
    })

    return {
      valid: errors.length === 0,
      errors,
    }
  }

  /**
   * Estimates the archive size
   */
  static estimateArchiveSize(files: FileEntry[]): number {
    let totalSize = 0

    files.forEach((file) => {
      if (file.content instanceof Blob) {
        totalSize += file.content.size
      } else {
        totalSize += new Blob([file.content]).size
      }
    })

    // Add overhead for archive structure (approximately 10%)
    return Math.ceil(totalSize * 1.1)
  }

  /**
   * Generates a unique archive name
   */
  static generateArchiveName(
    baseName: string = 'export',
    format: string,
    timestamp: boolean = true
  ): string {
    let name = baseName.replace(/[^a-z0-9]/gi, '_')

    if (timestamp) {
      const now = new Date()
      const dateStr = now.toISOString().split('T')[0]
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '')
      name += `_${dateStr}_${timeStr}`
    }

    return `${name}_${format}_archive.zip`
  }
}
