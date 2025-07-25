// CRDT (Conflict-free Replicated Data Type) operations for Notable sync

import { v4 as uuidv4 } from 'uuid'
import type {
  ChangeSet,
  ConflictResult,
  CRDTOperations,
  Note,
  VectorClock,
} from './types'

/**
 * Implementation of CRDT operations for Notable sync system
 */
export class CRDTOperationsImpl implements CRDTOperations {
  /**
   * Increment the logical clock for a device in the vector clock
   */
  incrementClock(vectorClock: VectorClock, deviceId: string): VectorClock {
    const newClock = { ...vectorClock }
    newClock[deviceId] = (newClock[deviceId] || 0) + 1
    return newClock
  }

  /**
   * Compare two vector clocks to determine their relationship
   * Returns:
   * - 'before': clock1 happened before clock2
   * - 'after': clock1 happened after clock2
   * - 'concurrent': clocks are concurrent (conflict)
   */
  compareClock(
    clock1: VectorClock,
    clock2: VectorClock,
  ): 'before' | 'after' | 'concurrent' {
    const allDevices = new Set([...Object.keys(clock1), ...Object.keys(clock2)])

    let clock1Greater = false
    let clock2Greater = false

    for (const deviceId of allDevices) {
      const val1 = clock1[deviceId] || 0
      const val2 = clock2[deviceId] || 0

      if (val1 > val2) {
        clock1Greater = true
      } else if (val2 > val1) {
        clock2Greater = true
      }
    }

    if (clock1Greater && clock2Greater) {
      return 'concurrent'
    } else if (clock1Greater) {
      return 'after'
    } else if (clock2Greater) {
      return 'before'
    } else {
      return 'concurrent' // Equal clocks are considered concurrent
    }
  }

  /**
   * Merge two vector clocks by taking the maximum value for each device
   */
  mergeClock(clock1: VectorClock, clock2: VectorClock): VectorClock {
    const allDevices = new Set([...Object.keys(clock1), ...Object.keys(clock2)])
    const merged: VectorClock = {}

    for (const deviceId of allDevices) {
      merged[deviceId] = Math.max(clock1[deviceId] || 0, clock2[deviceId] || 0)
    }

    return merged
  }

  /**
   * Resolve conflicts between two note versions using CRDT principles
   */
  resolveConflict(local: Note, remote: Note): ConflictResult {
    const clockComparison = this.compareClock(
      local.vector_clock,
      remote.vector_clock,
    )

    // If not concurrent, use the later version
    if (clockComparison !== 'concurrent') {
      const winner = clockComparison === 'after' ? local : remote
      return {
        resolved: winner,
        strategy: 'last-write-wins',
        conflicts: [],
      }
    }

    // Handle concurrent updates - merge fields intelligently
    const conflicts: ConflictResult['conflicts'] = []
    const resolved: Note = {
      ...local,
      vector_clock: this.mergeClock(local.vector_clock, remote.vector_clock),
      last_modified: new Date().toISOString(),
      local_changes: true,
    }

    // Title conflict resolution: use the longer title (more information preserved)
    if (local.title !== remote.title) {
      const resolvedTitle =
        local.title.length >= remote.title.length ? local.title : remote.title
      conflicts.push({
        field: 'title',
        local_value: local.title,
        remote_value: remote.title,
        resolved_value: resolvedTitle,
      })
      resolved.title = resolvedTitle
    }

    // Content conflict resolution: merge if both have changes, otherwise use non-empty
    if (local.content !== remote.content) {
      let resolvedContent: string

      if (!local.content && remote.content) {
        resolvedContent = remote.content
      } else if (local.content && !remote.content) {
        resolvedContent = local.content
      } else {
        // Both have content - use simple last-write-wins based on timestamp
        resolvedContent =
          new Date(local.last_modified) > new Date(remote.last_modified)
            ? local.content
            : remote.content
      }

      conflicts.push({
        field: 'content',
        local_value: local.content,
        remote_value: remote.content,
        resolved_value: resolvedContent,
      })
      resolved.content = resolvedContent
    }

    // Folder status: prefer folder over note (more structured)
    if (local.is_folder !== remote.is_folder) {
      const resolvedIsFolder = local.is_folder || remote.is_folder
      conflicts.push({
        field: 'is_folder',
        local_value: local.is_folder,
        remote_value: remote.is_folder,
        resolved_value: resolvedIsFolder,
      })
      resolved.is_folder = resolvedIsFolder
    }

    // Parent ID: use the one that exists, or prefer local if both exist
    if (local.parent_id !== remote.parent_id) {
      const resolvedParentId = local.parent_id || remote.parent_id
      if (
        local.parent_id &&
        remote.parent_id &&
        local.parent_id !== remote.parent_id
      ) {
        // Both have different parents - keep local preference
        conflicts.push({
          field: 'parent_id',
          local_value: local.parent_id,
          remote_value: remote.parent_id,
          resolved_value: local.parent_id,
        })
        resolved.parent_id = local.parent_id
      } else {
        resolved.parent_id = resolvedParentId || undefined
      }
    }

    // Deletion wins over any other change
    if (local.deleted || remote.deleted) {
      resolved.deleted = true
      resolved.content = ''
      resolved.title = local.title || remote.title // Keep title for tombstone
    }

    return {
      resolved,
      strategy: conflicts.length > 0 ? 'merge' : 'last-write-wins',
      conflicts,
    }
  }

  /**
   * Merge two sets of changes, resolving conflicts using CRDT principles
   */
  mergeChanges(
    localChanges: ChangeSet[],
    remoteChanges: ChangeSet[],
  ): ChangeSet[] {
    const allChanges = [...localChanges, ...remoteChanges]
    const changesByNote = new Map<string, ChangeSet[]>()

    // Group changes by note ID
    for (const change of allChanges) {
      const existing = changesByNote.get(change.note_id) || []
      existing.push(change)
      changesByNote.set(change.note_id, existing)
    }

    const mergedChanges: ChangeSet[] = []

    // Process each note's changes
    for (const [, changes] of changesByNote) {
      // Sort changes by timestamp
      changes.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
      )

      // If there's only one change or no conflicts, just use all changes
      if (changes.length === 1) {
        const firstChange = changes[0]
        if (firstChange) {
          mergedChanges.push(firstChange)
        }
        continue
      }

      // Find concurrent changes that need merging
      const processedChanges: ChangeSet[] = []

      for (let i = 0; i < changes.length; i++) {
        const current = changes[i]!
        const conflicts = changes.filter(
          (c) =>
            c !== current &&
            this.compareClock(c.vector_clock, current.vector_clock) ===
              'concurrent',
        )

        if (conflicts.length === 0) {
          // No conflicts, add as-is
          processedChanges.push(current)
        } else {
          // Merge concurrent changes
          const merged = this.mergeChangeConflicts([current, ...conflicts])
          if (!processedChanges.find((c) => c.id === merged.id)) {
            processedChanges.push(merged)
          }
        }
      }

      mergedChanges.push(...processedChanges)
    }

    return mergedChanges
  }

  /**
   * Apply a change to a note, updating its state and metadata
   */
  applyChange(note: Note, change: ChangeSet): Note {
    const updatedNote: Note = {
      ...note,
      ...change.data,
      vector_clock: this.mergeClock(note.vector_clock, change.vector_clock),
      last_modified: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      local_changes: false, // Applied changes are now synced
      version: note.version + 1,
    }

    // Handle deletion
    if (change.operation === 'delete') {
      updatedNote.deleted = true
    }

    return updatedNote
  }

  /**
   * Create a tombstone for a deleted note
   */
  createTombstone(note: Note, deviceId: string): Note {
    return {
      ...note,
      deleted: true,
      content: '', // Clear content but keep metadata
      vector_clock: this.incrementClock(note.vector_clock, deviceId),
      last_modified: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      local_changes: true,
      version: note.version + 1,
    }
  }

  /**
   * Create a new change set for a note operation
   */
  createChange(
    noteId: string,
    operation: 'create' | 'update' | 'delete',
    data: Partial<Note>,
    deviceId: string,
    vectorClock: VectorClock,
  ): ChangeSet {
    return {
      id: uuidv4(),
      note_id: noteId,
      operation,
      data,
      timestamp: new Date().toISOString(),
      device_id: deviceId,
      vector_clock: this.incrementClock(vectorClock, deviceId),
      applied: false,
    }
  }

  /**
   * Generate a unique device ID
   */
  generateDeviceId(): string {
    return `device_${uuidv4()}`
  }

  /**
   * Private helper to merge conflicting changes
   */
  private mergeChangeConflicts(changes: ChangeSet[]): ChangeSet {
    if (changes.length === 1) {
      const singleChange = changes[0]
      if (!singleChange) {
        throw new Error('No changes to merge')
      }
      return singleChange
    }

    // Sort by timestamp to establish order
    const sorted = [...changes].sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    )

    const latest = sorted[sorted.length - 1]
    if (!latest) {
      throw new Error('No changes to merge')
    }

    const mergedData: Partial<Note> = {}
    const mergedVectorClock: VectorClock = {}

    // Merge all data changes
    for (const change of sorted) {
      Object.assign(mergedData, change.data)
      Object.assign(
        mergedVectorClock,
        this.mergeClock(mergedVectorClock, change.vector_clock),
      )
    }

    return {
      id: uuidv4(), // New ID for merged change
      note_id: latest.note_id,
      operation: latest.operation,
      data: mergedData,
      device_id: latest.device_id,
      vector_clock: mergedVectorClock,
      timestamp: new Date().toISOString(),
      applied: false,
    }
  }
}

/**
 * Singleton instance of CRDT operations
 */
export const crdt = new CRDTOperationsImpl()
