import { useCallback, useMemo, useState } from 'react'
import { type Note } from '../types/note'
import {
  type BulkExportOptions,
  type ExportFormat,
  type ExportHistoryEntry,
  type ExportOptions,
  type ExportResult,
} from '../types/export'
import { exportService } from '../lib/export'
import { toast } from 'sonner'
import { type Descendant } from 'slate'

interface UseExportState {
  isExporting: boolean
  progress: number
  error: string | null
  lastResult: ExportResult | null
}

interface UseExportOptions {
  onSuccess?: (result: ExportResult) => void
  onError?: (error: Error) => void
  onProgress?: (progress: number) => void
  autoDownload?: boolean
  showToasts?: boolean
}

/**
 * Hook for managing note exports
 */
export function useExport(options: UseExportOptions = {}) {
  const {
    onSuccess,
    onError,
    onProgress,
    autoDownload = true,
    showToasts = true,
  } = options

  const [state, setState] = useState<UseExportState>({
    isExporting: false,
    progress: 0,
    error: null,
    lastResult: null,
  })

  // Use the singleton export service instance

  /**
   * Export a single note
   */
  const exportNote = useCallback(
    async (
      note: Note,
      exportOptions: ExportOptions
    ): Promise<ExportResult | null> => {
      try {
        setState((prev) => ({
          ...prev,
          isExporting: true,
          error: null,
          progress: 0,
        }))

        if (showToasts) {
          toast.loading('Preparing export...', { id: 'export-progress' })
        }

        // Basic validation
        if (!note || !note.content) {
          throw new Error('Cannot export note: Invalid note data')
        }

        // Show progress
        // Estimation not needed for now

        onProgress?.(25)
        setState((prev) => ({ ...prev, progress: 25 }))

        // Convert Note to Descendant[] for old export service
        const content = JSON.parse(note.content) as Descendant[]
        const metadata = {
          title: note.title,
          createdAt: new Date(note.created_at),
          updatedAt: new Date(note.updated_at),
          tags: note.tags || [],
        }

        // Perform the export
        const result = await exportService.export(
          content,
          exportOptions,
          metadata
        )

        onProgress?.(75)
        setState((prev) => ({ ...prev, progress: 75 }))

        // Handle the result
        if (autoDownload && result.success) {
          exportService.downloadFile(result)
        }

        onProgress?.(100)

        // Convert lib/export ExportResult to types/export ExportResult
        let exportContent = ''
        if (result.data) {
          if (result.data instanceof Blob) {
            // For blob data, we'll store as string (base64 or text depending on type)
            // For now, we'll just indicate it's a blob
            exportContent = '[Binary content]'
          } else {
            exportContent = result.data
          }
        }

        const exportResult: ExportResult = {
          content: exportContent,
          filename: result.fileName,
          mimeType: result.mimeType,
          size: result.data
            ? result.data instanceof Blob
              ? result.data.size
              : result.data.length
            : 0,
          format: exportOptions.format,
          exportedAt: new Date().toISOString(),
          additionalFiles: [],
        }

        setState((prev) => ({
          ...prev,
          isExporting: false,
          progress: 100,
          lastResult: exportResult,
        }))

        if (showToasts) {
          toast.success(
            `Successfully exported to ${exportOptions.format.toUpperCase()}`,
            { id: 'export-progress' }
          )
        }

        onSuccess?.(exportResult)
        return exportResult
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Export failed'

        setState((prev) => ({
          ...prev,
          isExporting: false,
          error: errorMessage,
          progress: 0,
        }))

        if (showToasts) {
          toast.error(`Export failed: ${errorMessage}`, {
            id: 'export-progress',
          })
        }

        onError?.(error instanceof Error ? error : new Error(errorMessage))
        return null
      }
    },
    [autoDownload, showToasts, onSuccess, onError, onProgress]
  )

  /**
   * Export multiple notes
   */
  const exportNotes = useCallback(
    async (
      notes: Note[],
      exportOptions: BulkExportOptions
    ): Promise<ExportResult | null> => {
      try {
        setState((prev) => ({
          ...prev,
          isExporting: true,
          error: null,
          progress: 0,
        }))

        if (showToasts) {
          toast.loading(`Exporting ${notes.length} notes...`, {
            id: 'export-progress',
          })
        }

        // Validate all notes
        for (const note of notes) {
          if (!note || !note.content) {
            throw new Error(
              `Cannot export note "${note.title}": Invalid note data`
            )
          }
        }

        onProgress?.(20)
        setState((prev) => ({ ...prev, progress: 20 }))

        // Export service doesn't have exportNotes, export one by one
        // This is a temporary workaround
        const results: ExportResult[] = []

        for (let i = 0; i < notes.length; i++) {
          const note = notes[i]
          const content = JSON.parse(note.content) as Descendant[]
          const metadata = {
            title: note.title,
            createdAt: new Date(note.created_at),
            updatedAt: new Date(note.updated_at),
            tags: note.tags || [],
          }

          const singleResult = await exportService.export(
            content,
            { format: exportOptions.format },
            metadata
          )

          if (!singleResult.success) {
            throw new Error(singleResult.error || 'Export failed')
          }

          // Convert to ExportResult type
          let exportContent = ''
          if (singleResult.data) {
            if (singleResult.data instanceof Blob) {
              exportContent = '[Binary content]'
            } else {
              exportContent = singleResult.data
            }
          }

          const exportResult: ExportResult = {
            content: exportContent,
            filename: singleResult.fileName,
            mimeType: singleResult.mimeType,
            size: singleResult.data
              ? singleResult.data instanceof Blob
                ? singleResult.data.size
                : singleResult.data.length
              : 0,
            format: exportOptions.format,
            exportedAt: new Date().toISOString(),
            additionalFiles: [],
          }

          results.push(exportResult)
        }

        // For now, return the first result
        // TODO: Implement proper bulk export that creates a zip
        const result = results[0]

        onProgress?.(80)
        setState((prev) => ({ ...prev, progress: 80 }))

        // Handle the result
        if (autoDownload && result) {
          // For now, download each file individually
          // TODO: Create a zip file for bulk downloads
          for (const res of results) {
            // res.content is now always a string
            const blob = new Blob([res.content], { type: res.mimeType })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = res.filename
            link.click()
            URL.revokeObjectURL(url)
          }
        }

        onProgress?.(100)
        setState((prev) => ({
          ...prev,
          isExporting: false,
          progress: 100,
          lastResult: result,
        }))

        if (showToasts) {
          toast.success(
            `Successfully exported ${notes.length} notes to ${exportOptions.format.toUpperCase()}`,
            { id: 'export-progress' }
          )
        }

        onSuccess?.(result)
        return result
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Bulk export failed'

        setState((prev) => ({
          ...prev,
          isExporting: false,
          error: errorMessage,
          progress: 0,
        }))

        if (showToasts) {
          toast.error(`Bulk export failed: ${errorMessage}`, {
            id: 'export-progress',
          })
        }

        onError?.(error instanceof Error ? error : new Error(errorMessage))
        return null
      }
    },
    [autoDownload, showToasts, onSuccess, onError, onProgress]
  )

  /**
   * Format-specific export functions
   */
  const exportToMarkdown = useCallback(
    (note: Note, options?: Partial<ExportOptions>) => {
      const defaultOptions: ExportOptions = {
        format: 'markdown',
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }
      return exportNote(note, {
        ...defaultOptions,
        ...options,
      })
    },
    [exportNote]
  )

  const exportToPDF = useCallback(
    (note: Note, options?: Partial<ExportOptions>) => {
      const defaultOptions: ExportOptions = {
        format: 'pdf',
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }
      return exportNote(note, {
        ...defaultOptions,
        ...options,
      })
    },
    [exportNote]
  )

  const exportToHTML = useCallback(
    (note: Note, options?: Partial<ExportOptions>) => {
      const defaultOptions: ExportOptions = {
        format: 'html',
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }
      return exportNote(note, {
        ...defaultOptions,
        ...options,
      })
    },
    [exportNote]
  )

  const exportToReact = useCallback(
    (note: Note, options?: Partial<ExportOptions>) => {
      const defaultOptions: ExportOptions = {
        format: 'react',
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }
      return exportNote(note, {
        ...defaultOptions,
        ...options,
      })
    },
    [exportNote]
  )

  /**
   * Preview export without generating full file
   */
  const previewExport = useCallback(
    async (
      note: Note,
      format: ExportFormat,
      options?: Partial<ExportOptions>
    ) => {
      try {
        // Preview export is not implemented in current export service
        // Generate a simple preview
        const content = JSON.parse(note.content) as Descendant[]
        const wordCount = content.reduce((count, node) => {
          const text = (node as any).text || ''
          return (
            count +
            (typeof text === 'string'
              ? text.split(/\s+/).filter(Boolean).length
              : 0)
          )
        }, 0)
        return {
          content: JSON.stringify(content, null, 2),
          wordCount,
          estimatedSize: JSON.stringify(content).length,
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Preview failed'
        setState((prev) => ({ ...prev, error: errorMessage }))
        throw error
      }
    },
    []
  )

  /**
   * Share export result
   */
  const shareResult = useCallback(
    async (result: ExportResult) => {
      try {
        // Sharing not implemented in current export service
        throw new Error('Sharing is not yet supported')
        if (showToasts) {
          toast.success('Export shared successfully')
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Sharing failed'
        if (showToasts) {
          toast.error(`Sharing failed: ${errorMessage}`)
        }
        throw error
      }
    },
    [showToasts]
  )

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }))
  }, [])

  /**
   * Reset state
   */
  const reset = useCallback(() => {
    setState({
      isExporting: false,
      progress: 0,
      error: null,
      lastResult: null,
    })
  }, [])

  return {
    // State
    isExporting: state.isExporting,
    progress: state.progress,
    error: state.error,
    lastResult: state.lastResult,

    // Actions
    exportNote,
    exportNotes,
    exportToMarkdown,
    exportToPDF,
    exportToHTML,
    exportToReact,
    previewExport,
    shareResult,
    clearError,
    reset,

    // Utilities - removed (not available in current export service)
    supportedFormats: exportService.getSupportedFormats(),
    validateOptions: exportService.validateOptions.bind(exportService),
  }
}

/**
 * Hook for managing export history
 */
export function useExportHistory(userId: string) {
  const [history, setHistory] = useState<ExportHistoryEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Use the singleton export service instance

  /**
   * Load export history
   */
  const loadHistory = useCallback(
    async (limit = 50) => {
      try {
        setIsLoading(true)
        setError(null)
        // Export history not implemented in current export service
        const entries: ExportHistoryEntry[] = []
        setHistory(entries)
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to load history'
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    },
    [exportService, userId]
  )

  /**
   * Delete export from history
   */
  const deleteExport = useCallback(async (exportId: string) => {
    try {
      // Delete export not implemented in current export service
      throw new Error('Delete export is not yet implemented')
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to delete export'
      toast.error(`Delete failed: ${errorMessage}`)
      throw error
    }
  }, [])

  /**
   * Get export statistics
   */
  const getStats = useCallback(async () => {
    try {
      // Export stats not implemented in current export service
      return {
        totalExports: 0,
        byFormat: {},
        totalSize: 0,
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get stats'
      setError(errorMessage)
      throw error
    }
  }, [userId])

  return {
    history,
    isLoading,
    error,
    loadHistory,
    deleteExport,
    getStats,
  }
}

/**
 * Hook for export format information
 */
export function useExportFormats() {
  // Use the singleton export service instance

  const formats = useMemo(() => {
    return exportService.getSupportedFormats().map((format) => ({
      value: format,
      label: format.toUpperCase(),
      icon: exportService.getFormatDetails(format).icon || '',
      description: exportService.getFormatDetails(format).description,
      defaultOptions: { format }, // Basic default options
    }))
  }, [])

  return {
    formats,
    getFormatInfo: (format: ExportFormat) =>
      formats.find((f) => f.value === format),
  }
}
