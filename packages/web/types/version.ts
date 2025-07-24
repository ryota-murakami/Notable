export interface NoteVersion {
  id: string
  noteId: string
  versionNumber: number
  title: string
  content: any // Plate.js content
  contentDiff?: any
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
    content: any
    createdAt: string
    createdBy: string
  }
  version2Data: {
    versionNumber: number
    title: string
    content: any
    createdAt: string
    createdBy: string
  }
}

export interface VersionDiff {
  type: 'added' | 'removed' | 'modified'
  path: string[]
  oldValue?: any
  newValue?: any
}

export interface VersionRestoreOptions {
  noteId: string
  versionNumber: number
  createBackup?: boolean
  message?: string
}
