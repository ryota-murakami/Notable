import { useState, useCallback, useMemo } from 'react'
import { Note } from '../types/note'
import {
  ExportFormat,
  ExportOptions,
  ExportResult,
  BulkExportOptions,
  ExportHistoryEntry,
} from '../types/export'
import { ExportService, ExportUtils } from '../lib/export'
import { toast } from 'sonner'

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

  const exportService = useMemo(() => new ExportService(), [])

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

        // Validate note before export
        const validation = ExportUtils.validateNoteForExport(note)
        if (!validation.valid) {
          throw new Error(`Cannot export note: ${validation.issues.join(', ')}`)
        }

        // Estimate export time and show progress
        const estimatedTime = ExportUtils.estimateExportTime(
          note.content.length,
          exportOptions.format
        )

        onProgress?.(25)
        setState((prev) => ({ ...prev, progress: 25 }))

        // Perform the export
        const result = await exportService.exportNote(note, exportOptions)

        onProgress?.(75)
        setState((prev) => ({ ...prev, progress: 75 }))

        // Handle the result
        if (autoDownload) {
          ExportUtils.downloadFile(result)
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
          const validation = ExportUtils.validateNoteForExport(note)
          if (!validation.valid) {
            throw new Error(
              `Cannot export note "${note.title}": ${validation.issues.join(', ')}`
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
        if (autoDownload) {
          ExportUtils.downloadFile(result)
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
        await ExportUtils.shareFile(result)
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

    // Utilities
    utils: ExportUtils,
    supportedFormats: exportService.getSupportedFormats(),
    getDefaultOptions: exportService.getDefaultOptions.bind(exportService),
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

  const exportService = useMemo(() => new ExportService(), [])

  /**
   * Load export history
   */
  const loadHistory = useCallback(
    async (limit = 50) => {
      try {
        setIsLoading(true)
        setError(null)
        const entries = await exportService.getExportHistory(userId, limit)
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
  const exportService = useMemo(() => new ExportService(), [])

  const formats = useMemo(() => {
    return exportService.getSupportedFormats().map((format) => ({
      value: format,
      label: format.toUpperCase(),
      icon: ExportUtils.getFormatIcon(format),
      description: ExportUtils.getFormatDescription(format),
      defaultOptions: exportService.getDefaultOptions(format),
    }))
  }, [exportService])

  return {
    formats,
    getFormatInfo: (format: ExportFormat) =>
      formats.find((f) => f.value === format),
  }
}
