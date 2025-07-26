import { useState, useCallback, useMemo } from 'react'
import { Note } from '../types/note'
import {
  ExportFormat,
  ExportOptions,
  ExportResult,
  BulkExportOptions,
  ExportHistoryEntry,
} from '../types/export'
import { exportService } from '../lib/export'
import { toast } from 'sonner'
import { Descendant } from 'slate'

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
          createdAt: note.createdAt,
          updatedAt: note.updatedAt,
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
        setState((prev) => ({
          ...prev,
          isExporting: false,
          progress: 100,
          lastResult: result,
        }))

        if (showToasts) {
          toast.success(
            `Successfully exported to ${exportOptions.format.toUpperCase()}`,
            { id: 'export-progress' }
          )
        }

        onSuccess?.(result)
        return result
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
    [exportService, autoDownload, showToasts, onSuccess, onError, onProgress]
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

        // Perform bulk export
        const result = await exportService.exportNotes(notes, exportOptions)

        onProgress?.(80)
        setState((prev) => ({ ...prev, progress: 80 }))

        // Handle the result
        if (autoDownload && result.success) {
          exportService.downloadFile(result)
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
    [exportService, autoDownload, showToasts, onSuccess, onError, onProgress]
  )

  /**
   * Format-specific export functions
   */
  const exportToMarkdown = useCallback(
    (note: Note, options?: Partial<ExportOptions>) =>
      exportNote(note, {
        ...exportService.getDefaultOptions('markdown'),
        ...options,
      }),
    [exportNote, exportService]
  )

  const exportToPDF = useCallback(
    (note: Note, options?: Partial<ExportOptions>) =>
      exportNote(note, {
        ...exportService.getDefaultOptions('pdf'),
        ...options,
      }),
    [exportNote, exportService]
  )

  const exportToHTML = useCallback(
    (note: Note, options?: Partial<ExportOptions>) =>
      exportNote(note, {
        ...exportService.getDefaultOptions('html'),
        ...options,
      }),
    [exportNote, exportService]
  )

  const exportToReact = useCallback(
    (note: Note, options?: Partial<ExportOptions>) =>
      exportNote(note, {
        ...exportService.getDefaultOptions('react'),
        ...options,
      }),
    [exportNote, exportService]
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
        return await exportService.previewExport(note, format, options)
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Preview failed'
        setState((prev) => ({ ...prev, error: errorMessage }))
        throw error
      }
    },
    [exportService]
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
  const deleteExport = useCallback(
    async (exportId: string) => {
      try {
        await exportService.deleteExport(exportId)
        setHistory((prev) => prev.filter((entry) => entry.id !== exportId))
        toast.success('Export deleted from history')
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to delete export'
        toast.error(`Delete failed: ${errorMessage}`)
        throw error
      }
    },
    [exportService]
  )

  /**
   * Get export statistics
   */
  const getStats = useCallback(async () => {
    try {
      return await exportService.getExportStats(userId)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get stats'
      setError(errorMessage)
      throw error
    }
  }, [exportService, userId])

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
