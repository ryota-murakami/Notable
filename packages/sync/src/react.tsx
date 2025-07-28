// React hooks and components for Notable sync

import React, {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type {
  DeviceInfo,
  StorageAdapter,
  SyncConfig,
  SyncService,
  SyncStats,
  SyncStatus,
} from './types'
import { createSyncService } from './sync-service'

interface SyncContextValue {
  syncService: SyncService | null
  isInitialized: boolean
  error: string | null
}

const SyncContext = createContext<SyncContextValue>({
  syncService: null,
  isInitialized: false,
  error: null,
})

interface SyncProviderProps {
  children: ReactNode
  config: SyncConfig
  storage: StorageAdapter
  autoInit?: boolean
}

/**
 * Provider component that manages the sync service instance
 */
export const SyncProvider: React.FC<SyncProviderProps> = ({
  children,
  config,
  storage,
  autoInit = true,
}) => {
  const [syncService, setSyncService] = useState<SyncService | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const initializeSync = async () => {
      try {
        const service = createSyncService(config, storage)

        if (autoInit) {
          await service.initialize()
        }

        if (mounted) {
          setSyncService(service)
          setIsInitialized(autoInit)
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'Failed to initialize sync service',
          )
          console.error('Sync service initialization failed:', err)
        }
      }
    }

    initializeSync()

    return () => {
      mounted = false
      if (syncService) {
        syncService.destroy().catch(console.error)
      }
    }
  }, [config, storage, autoInit])

  const contextValue = useMemo(
    () => ({
      syncService,
      isInitialized,
      error,
    }),
    [syncService, isInitialized, error],
  )

  return (
    <SyncContext.Provider value={contextValue}>{children}</SyncContext.Provider>
  )
}

/**
 * Hook to access the sync service instance
 */
export const useSyncService = () => {
  const context = useContext(SyncContext)

  if (!context) {
    throw new Error('useSyncService must be used within a SyncProvider')
  }

  return context
}

/**
 * Hook to get sync status and stats with real-time updates
 */
export const useSyncStats = () => {
  const { syncService, isInitialized } = useSyncService()
  const [status, setStatus] = useState<SyncStatus>('idle')
  const [stats, setStats] = useState<SyncStats | null>(null)
  const [loading, setLoading] = useState(true)

  // Update stats
  const updateStats = useCallback(async () => {
    if (!syncService || !isInitialized) {
      return
    }

    try {
      const currentStats = await syncService.getStats()
      setStats(currentStats)
    } catch (error) {
      console.error('Failed to get sync stats:', error)
    } finally {
      setLoading(false)
    }
  }, [syncService, isInitialized])

  useEffect(() => {
    if (!syncService || !isInitialized) {
      return
    }

    // Get initial status and stats
    setStatus(syncService.getStatus())
    updateStats()

    // Listen for status changes
    const handleStatusChange = (newStatus: SyncStatus) => {
      setStatus(newStatus)
    }

    const handleSyncComplete = () => {
      updateStats()
    }

    syncService.on(
      'status-change',
      handleStatusChange as (data?: unknown) => void,
    )
    syncService.on(
      'sync-complete',
      handleSyncComplete as (data?: unknown) => void,
    )

    // Set up periodic stats updates
    const interval = setInterval(updateStats, 30000) // Update every 30 seconds

    return () => {
      syncService.off(
        'status-change',
        handleStatusChange as (data?: unknown) => void,
      )
      syncService.off(
        'sync-complete',
        handleSyncComplete as (data?: unknown) => void,
      )
      clearInterval(interval)
    }
  }, [syncService, isInitialized, updateStats])

  return {
    status,
    stats,
    loading,
    refresh: updateStats,
  }
}

