// TODO: Import proper TElement type when plate-common types are available
// import type { TElement } from '@udecode/plate-common'
type TElement = any

export interface NoteVersion {
  id: string
  noteId: string
  versionNumber: number
  title: string
  content: TElement[] // Plate.js content
  contentDiff?: any // Consider defining a proper diff type later
  versionName?: string
  versionMessage?: string
  createdBy: string
  createdByName?: string
  createdAt: string
  isMilestone: boolean
  metadata: {
    wordCount?: number
    characterCount?: number
    previousUpdatedAt?: string
    restoredFromVersion?: number
    restorationTimestamp?: string
  }
}

export interface VersionHistoryResponse {
  versionId: string
  versionNumber: number
  title: string
  versionName?: string
  versionMessage?: string
  createdBy: string
  createdByName?: string
  createdAt: string
  isMilestone: boolean
  wordCount?: number
  characterCount?: number
}

export interface VersionComparisonResult {
  version1Data: {
    versionNumber: number
    title: string
    content: TElement[]
    createdAt: string
    createdBy: string
  }
  version2Data: {
    versionNumber: number
    title: string
    content: TElement[]
    createdAt: string
    createdBy: string
  }
}

export interface VersionDiff {
  type: 'added' | 'removed' | 'modified'
  path: string[]
  oldValue?: TElement | TElement[] | string | number
  newValue?: TElement | TElement[] | string | number
}

export interface VersionRestoreOptions {
  noteId: string
  versionNumber: number
  createBackup?: boolean
  message?: string
}
