/**
 * Permission Management System for Collaborative Notes
 * Handles sharing, access controls, and permission enforcement
 */

import { User } from './yjs-provider'

export type Permission = 'owner' | 'editor' | 'commenter' | 'viewer'

export interface NotePermission {
  id: string
  noteId: string
  userId: string
  permission: Permission
  grantedBy: string
  grantedAt: Date
  expiresAt?: Date
}

export interface ShareLink {
  id: string
  noteId: string
  token: string
  permission: Permission
  createdBy: string
  createdAt: Date
  expiresAt?: Date
  isActive: boolean
  accessCount: number
  maxAccess?: number
}

export interface PermissionRequest {
  id: string
  noteId: string
  requestedBy: string
  requestedPermission: Permission
  message?: string
  status: 'pending' | 'approved' | 'denied'
  createdAt: Date
  respondedAt?: Date
  respondedBy?: string
}

/**
 * Permission hierarchy and capabilities
 */
export const PERMISSION_HIERARCHY: Record<Permission, number> = {
  owner: 4,
  editor: 3,
  commenter: 2,
  viewer: 1,
}

export const PERMISSION_CAPABILITIES: Record<
  Permission,
  {
    canRead: boolean
    canWrite: boolean
    canComment: boolean
    canSuggest: boolean
    canShare: boolean
    canManagePermissions: boolean
    canDelete: boolean
  }
> = {
  owner: {
    canRead: true,
    canWrite: true,
    canComment: true,
    canSuggest: true,
    canShare: true,
    canManagePermissions: true,
    canDelete: true,
  },
  editor: {
    canRead: true,
    canWrite: true,
    canComment: true,
    canSuggest: true,
    canShare: true,
    canManagePermissions: false,
    canDelete: false,
  },
  commenter: {
    canRead: true,
    canWrite: false,
    canComment: true,
    canSuggest: true,
    canShare: false,
    canManagePermissions: false,
    canDelete: false,
  },
  viewer: {
    canRead: true,
    canWrite: false,
    canComment: false,
    canSuggest: false,
    canShare: false,
    canManagePermissions: false,
    canDelete: false,
  },
}

/**
 * Permission Manager Class
 */
class PermissionManager {
  private permissions = new Map<string, NotePermission[]>()
  private shareLinks = new Map<string, ShareLink[]>()
  private permissionRequests = new Map<string, PermissionRequest[]>()

  /**
   * Check if user has specific permission for a note
   */
  hasPermission(
    noteId: string,
    userId: string,
    requiredPermission: Permission
  ): boolean {
    const userPermission = this.getUserPermission(noteId, userId)
    if (!userPermission) return false

    const userLevel = PERMISSION_HIERARCHY[userPermission.permission]
    const requiredLevel = PERMISSION_HIERARCHY[requiredPermission]

    return userLevel >= requiredLevel
  }

  /**
   * Check if user can perform specific action
   */
  canPerformAction(
    noteId: string,
    userId: string,
    action: keyof (typeof PERMISSION_CAPABILITIES)['owner']
  ): boolean {
    const userPermission = this.getUserPermission(noteId, userId)
    if (!userPermission) return false

    return PERMISSION_CAPABILITIES[userPermission.permission][action]
  }

  /**
   * Get user's permission for a note
   */
  getUserPermission(noteId: string, userId: string): NotePermission | null {
    const notePermissions = this.permissions.get(noteId) || []
    const userPermission = notePermissions.find(
      (p) => p.userId === userId && (!p.expiresAt || p.expiresAt > new Date())
    )

    return userPermission || null
  }

  /**
   * Grant permission to a user
   */
  async grantPermission(
    noteId: string,
    userId: string,
    permission: Permission,
    grantedBy: string,
    expiresAt?: Date
  ): Promise<NotePermission> {
    // Check if granter has permission to grant
    if (!this.canPerformAction(noteId, grantedBy, 'canManagePermissions')) {
      throw new Error('Insufficient permissions to grant access')
    }

    // Check if granter's permission level is higher than granted permission
    const granterPermission = this.getUserPermission(noteId, grantedBy)
    if (!granterPermission) {
      throw new Error('Granter does not have access to this note')
    }

    const granterLevel = PERMISSION_HIERARCHY[granterPermission.permission]
    const grantedLevel = PERMISSION_HIERARCHY[permission]

    if (
      granterLevel <= grantedLevel &&
      granterPermission.permission !== 'owner'
    ) {
      throw new Error(
        'Cannot grant permission level equal to or higher than your own'
      )
    }

    const newPermission: NotePermission = {
      id: `perm-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      noteId,
      userId,
      permission,
      grantedBy,
      grantedAt: new Date(),
      expiresAt,
    }

    // Remove existing permission if any
    this.revokePermission(noteId, userId, grantedBy)

    // Add new permission
    const notePermissions = this.permissions.get(noteId) || []
    notePermissions.push(newPermission)
    this.permissions.set(noteId, notePermissions)

    return newPermission
  }

  /**
   * Revoke permission from a user
   */
  revokePermission(noteId: string, userId: string, revokedBy: string): boolean {
    if (!this.canPerformAction(noteId, revokedBy, 'canManagePermissions')) {
      throw new Error('Insufficient permissions to revoke access')
    }

    const notePermissions = this.permissions.get(noteId) || []
    const permissionIndex = notePermissions.findIndex(
      (p) => p.userId === userId
    )

    if (permissionIndex === -1) return false

    // Can't revoke owner's permission or permission of equal/higher level
    const targetPermission = notePermissions[permissionIndex]
    const revokerPermission = this.getUserPermission(noteId, revokedBy)

    if (!revokerPermission) return false

    if (targetPermission.permission === 'owner') {
      throw new Error('Cannot revoke owner permission')
    }

    const revokerLevel = PERMISSION_HIERARCHY[revokerPermission.permission]
    const targetLevel = PERMISSION_HIERARCHY[targetPermission.permission]

    if (
      revokerLevel <= targetLevel &&
      revokerPermission.permission !== 'owner'
    ) {
      throw new Error('Cannot revoke permission of equal or higher level')
    }

    notePermissions.splice(permissionIndex, 1)
    this.permissions.set(noteId, notePermissions)

    return true
  }

  /**
   * Create shareable link
   */
  async createShareLink(
    noteId: string,
    permission: Permission,
    createdBy: string,
    options: {
      expiresAt?: Date
      maxAccess?: number
    } = {}
  ): Promise<ShareLink> {
    if (!this.canPerformAction(noteId, createdBy, 'canShare')) {
      throw new Error('Insufficient permissions to create share link')
    }

    const shareLink: ShareLink = {
      id: `share-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      noteId,
      token: this.generateShareToken(),
      permission,
      createdBy,
      createdAt: new Date(),
      expiresAt: options.expiresAt,
      isActive: true,
      accessCount: 0,
      maxAccess: options.maxAccess,
    }

    const noteShareLinks = this.shareLinks.get(noteId) || []
    noteShareLinks.push(shareLink)
    this.shareLinks.set(noteId, noteShareLinks)

    return shareLink
  }

  /**
   * Access note via share link
   */
  async accessViaShareLink(
    token: string,
    userId: string
  ): Promise<{ noteId: string; permission: Permission } | null> {
    // Find share link by token
    let shareLink: ShareLink | null = null
    let noteId: string | null = null

    for (const [id, links] of this.shareLinks.entries()) {
      const link = links.find((l) => l.token === token && l.isActive)
      if (link) {
        shareLink = link
        noteId = id
        break
      }
    }

    if (!shareLink || !noteId) return null

    // Check if link is still valid
    if (shareLink.expiresAt && shareLink.expiresAt < new Date()) {
      return null
    }

    if (shareLink.maxAccess && shareLink.accessCount >= shareLink.maxAccess) {
      return null
    }

    // Grant permission to user
    try {
      await this.grantPermission(
        noteId,
        userId,
        shareLink.permission,
        shareLink.createdBy
      )

      // Update access count
      shareLink.accessCount++

      return { noteId, permission: shareLink.permission }
    } catch (error) {
      console.error('Failed to grant permission via share link:', error)
      return null
    }
  }

  /**
   * Request permission for a note
   */
  async requestPermission(
    noteId: string,
    requestedBy: string,
    requestedPermission: Permission,
    message?: string
  ): Promise<PermissionRequest> {
    const request: PermissionRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      noteId,
      requestedBy,
      requestedPermission,
      message,
      status: 'pending',
      createdAt: new Date(),
    }

    const noteRequests = this.permissionRequests.get(noteId) || []
    noteRequests.push(request)
    this.permissionRequests.set(noteId, noteRequests)

    return request
  }

  /**
   * Respond to permission request
   */
  async respondToPermissionRequest(
    requestId: string,
    respondedBy: string,
    approve: boolean
  ): Promise<PermissionRequest> {
    // Find the request
    let request: PermissionRequest | null = null
    let noteId: string | null = null

    for (const [id, requests] of this.permissionRequests.entries()) {
      const req = requests.find((r) => r.id === requestId)
      if (req) {
        request = req
        noteId = id
        break
      }
    }

    if (!request || !noteId) {
      throw new Error('Permission request not found')
    }

    if (!this.canPerformAction(noteId, respondedBy, 'canManagePermissions')) {
      throw new Error('Insufficient permissions to respond to request')
    }

    // Update request
    request.status = approve ? 'approved' : 'denied'
    request.respondedAt = new Date()
    request.respondedBy = respondedBy

    // Grant permission if approved
    if (approve) {
      await this.grantPermission(
        noteId,
        request.requestedBy,
        request.requestedPermission,
        respondedBy
      )
    }

    return request
  }

  /**
   * Get all permissions for a note
   */
  getNotePermissions(noteId: string): NotePermission[] {
    return this.permissions.get(noteId) || []
  }

  /**
   * Get all share links for a note
   */
  getNoteShareLinks(noteId: string): ShareLink[] {
    return this.shareLinks.get(noteId) || []
  }

  /**
   * Get all pending permission requests for a note
   */
  getPendingRequests(noteId: string): PermissionRequest[] {
    const requests = this.permissionRequests.get(noteId) || []
    return requests.filter((r) => r.status === 'pending')
  }

  /**
   * Generate secure share token
   */
  private generateShareToken(): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
}

// Singleton instance
export const permissionManager = new PermissionManager()

/**
 * React hook for permission management
 */
export function usePermissions(noteId: string, currentUser: User) {
  const [userPermission, setUserPermission] =
    React.useState<NotePermission | null>(null)
  const [notePermissions, setNotePermissions] = React.useState<
    NotePermission[]
  >([])
  const [shareLinks, setShareLinks] = React.useState<ShareLink[]>([])
  const [pendingRequests, setPendingRequests] = React.useState<
    PermissionRequest[]
  >([])

  React.useEffect(() => {
    const updatePermissions = () => {
      setUserPermission(
        permissionManager.getUserPermission(noteId, currentUser.id)
      )
      setNotePermissions(permissionManager.getNotePermissions(noteId))
      setShareLinks(permissionManager.getNoteShareLinks(noteId))
      setPendingRequests(permissionManager.getPendingRequests(noteId))
    }

    updatePermissions()

    // Update every 30 seconds
    const interval = setInterval(updatePermissions, 30000)
    return () => clearInterval(interval)
  }, [noteId, currentUser.id])

  const canPerformAction = React.useCallback(
    (action: keyof (typeof PERMISSION_CAPABILITIES)['owner']) => {
      return permissionManager.canPerformAction(noteId, currentUser.id, action)
    },
    [noteId, currentUser.id]
  )

  const grantPermission = React.useCallback(
    async (userId: string, permission: Permission, expiresAt?: Date) => {
      const newPermission = await permissionManager.grantPermission(
        noteId,
        userId,
        permission,
        currentUser.id,
        expiresAt
      )
      setNotePermissions(permissionManager.getNotePermissions(noteId))
      return newPermission
    },
    [noteId, currentUser.id]
  )

  const revokePermission = React.useCallback(
    (userId: string) => {
      const success = permissionManager.revokePermission(
        noteId,
        userId,
        currentUser.id
      )
      if (success) {
        setNotePermissions(permissionManager.getNotePermissions(noteId))
      }
      return success
    },
    [noteId, currentUser.id]
  )

  const createShareLink = React.useCallback(
    async (
      permission: Permission,
      options: { expiresAt?: Date; maxAccess?: number } = {}
    ) => {
      const shareLink = await permissionManager.createShareLink(
        noteId,
        permission,
        currentUser.id,
        options
      )
      setShareLinks(permissionManager.getNoteShareLinks(noteId))
      return shareLink
    },
    [noteId, currentUser.id]
  )

  return {
    userPermission,
    notePermissions,
    shareLinks,
    pendingRequests,
    canPerformAction,
    grantPermission,
    revokePermission,
    createShareLink,
    hasPermission: (permission: Permission) =>
      permissionManager.hasPermission(noteId, currentUser.id, permission),
  }
}
