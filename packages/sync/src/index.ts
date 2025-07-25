// Main entry point for @notable/sync package

// Core types
export type {
  VectorClock,
  BaseNote,
  Note,
  ChangeOperation,
  ChangeSet,
  DeviceInfo,
  UserPresence,
  SyncStatus,
  SyncStats,
  SyncConfig,
  StorageAdapter,
  ConflictResolution,
  ConflictResult,
  SyncService,
  CRDTOperations,
} from './types'

// CRDT operations
export { CRDTOperationsImpl, crdt } from './crdt'

// Sync service
export { SyncServiceImpl, createSyncService } from './sync-service'

// Storage adapters
export { WebStorageAdapter, createWebStorageAdapter } from './storage/web-storage'
export { ElectronStorageAdapter, createElectronStorageAdapter } from './storage/electron-storage'
export { MobileStorageAdapter, createMobileStorageAdapter } from './storage/mobile-storage'

// Utility functions
export { generateDeviceInfo, generateDeviceId } from './utils'

// React hooks (if in React environment)
export { useSyncService, SyncProvider, useSyncStats } from './react'

// Version information
export const VERSION = '1.0.0'