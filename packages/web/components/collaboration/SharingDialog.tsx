/**
 * Sharing Dialog Component
 * Manage note permissions, share links, and collaboration settings
 */

'use client'

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import {
  Share,
  UserPlus,
  Copy,
  Check,
  X,
  Settings,
  Eye,
  Edit3,
  MessageCircle,
  Crown,
  Calendar,
  Link,
  Users,
  Clock,
  Shield,
  AlertCircle,
} from 'lucide-react'
import { User } from '@/lib/collaboration/yjs-provider'
import {
  Permission,
  NotePermission,
  ShareLink,
  PermissionRequest,
  usePermissions,
  PERMISSION_CAPABILITIES,
} from '@/lib/collaboration/permissions'
import { formatDistanceToNow, addDays, addWeeks, addMonths } from 'date-fns'
import { cn } from '@/lib/utils'

interface SharingDialogProps {
  noteId: string
  noteTitle: string
  currentUser: User
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function SharingDialog({
  noteId,
  noteTitle,
  currentUser,
  isOpen,
  onOpenChange,
  children,
}: SharingDialogProps) {
  const {
    userPermission,
    notePermissions,
    shareLinks,
    pendingRequests,
    canPerformAction,
    grantPermission,
    revokePermission,
    createShareLink,
  } = usePermissions(noteId, currentUser)

  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserPermission, setNewUserPermission] =
    useState<Permission>('viewer')
  const [linkPermission, setLinkPermission] = useState<Permission>('viewer')
  const [linkExpiry, setLinkExpiry] = useState<string>('never')
  const [maxAccess, setMaxAccess] = useState<number | undefined>()
  const [copiedLink, setCopiedLink] = useState<string | null>(null)
  const [isCreatingLink, setIsCreatingLink] = useState(false)
  const [isInvitingUser, setIsInvitingUser] = useState(false)

  // Reset form states when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setNewUserEmail('')
      setNewUserPermission('viewer')
      setLinkPermission('viewer')
      setLinkExpiry('never')
      setMaxAccess(undefined)
      setCopiedLink(null)
    }
  }, [isOpen])

  const getPermissionIcon = (permission: Permission) => {
    const icons = {
      owner: Crown,
      editor: Edit3,
      commenter: MessageCircle,
      viewer: Eye,
    }
    const Icon = icons[permission]
    return <Icon className='h-4 w-4' />
  }

  const getPermissionColor = (permission: Permission) => {
    const colors = {
      owner: 'bg-purple-100 text-purple-800',
      editor: 'bg-green-100 text-green-800',
      commenter: 'bg-blue-100 text-blue-800',
      viewer: 'bg-gray-100 text-gray-800',
    }
    return colors[permission]
  }

  const getPermissionDescription = (permission: Permission) => {
    const descriptions = {
      owner: 'Full access - can edit, comment, and manage permissions',
      editor: 'Can edit and comment on the note',
      commenter: 'Can view and comment on the note',
      viewer: 'Can only view the note',
    }
    return descriptions[permission]
  }

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const calculateExpiryDate = (expiry: string) => {
    const now = new Date()
    switch (expiry) {
      case '1day':
        return addDays(now, 1)
      case '1week':
        return addWeeks(now, 1)
      case '1month':
        return addMonths(now, 1)
      case '3months':
        return addMonths(now, 3)
      default:
        return undefined
    }
  }

  const handleInviteUser = async () => {
    if (!newUserEmail.trim()) return

    setIsInvitingUser(true)
    try {
      // In a real implementation, you'd look up the user by email
      // For demo purposes, we'll create a mock user
      const mockUser: User = {
        id: `user-${Date.now()}`,
        name: newUserEmail.split('@')[0],
        email: newUserEmail,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        lastSeen: new Date(),
      }

      await grantPermission(mockUser.id, newUserPermission)
      setNewUserEmail('')
      setNewUserPermission('viewer')
    } catch (error) {
      console.error('Failed to invite user:', error)
    } finally {
      setIsInvitingUser(false)
    }
  }

  const handleCreateShareLink = async () => {
    setIsCreatingLink(true)
    try {
      const expiresAt = calculateExpiryDate(linkExpiry)
      const link = await createShareLink(linkPermission, {
        expiresAt,
        maxAccess,
      })

      // Generate share URL (in a real app, this would be your domain)
      const shareUrl = `${window.location.origin}/notes/${noteId}?share=${link.token}`

      // Copy to clipboard
      await navigator.clipboard.writeText(shareUrl)
      setCopiedLink(link.id)

      setTimeout(() => setCopiedLink(null), 2000)
    } catch (error) {
      console.error('Failed to create share link:', error)
    } finally {
      setIsCreatingLink(false)
    }
  }

  const handleCopyLink = async (link: ShareLink) => {
    const shareUrl = `${window.location.origin}/notes/${noteId}?share=${link.token}`
    await navigator.clipboard.writeText(shareUrl)
    setCopiedLink(link.id)
    setTimeout(() => setCopiedLink(null), 2000)
  }

  const handleRevokePermission = async (userId: string) => {
    try {
      await revokePermission(userId)
    } catch (error) {
      console.error('Failed to revoke permission:', error)
    }
  }

  const canManagePermissions = canPerformAction('canManagePermissions')
  const canShare = canPerformAction('canShare')

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent className='max-w-2xl max-h-[80vh] overflow-hidden'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Share className='h-5 w-5' />
            Share "{noteTitle}"
          </DialogTitle>
          <DialogDescription>
            Manage who can access and collaborate on this note
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue='people' className='h-full'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='people' className='flex items-center gap-2'>
              <Users className='h-4 w-4' />
              People
            </TabsTrigger>
            <TabsTrigger value='links' className='flex items-center gap-2'>
              <Link className='h-4 w-4' />
              Links
            </TabsTrigger>
            <TabsTrigger value='requests' className='flex items-center gap-2'>
              <Clock className='h-4 w-4' />
              Requests
              {pendingRequests.length > 0 && (
                <Badge variant='secondary' className='ml-1'>
                  {pendingRequests.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='people' className='space-y-4'>
            {/* Invite New User */}
            {canManagePermissions && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-base flex items-center gap-2'>
                    <UserPlus className='h-4 w-4' />
                    Invite People
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex gap-2'>
                    <div className='flex-1'>
                      <Input
                        placeholder='Enter email address'
                        type='email'
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleInviteUser()
                          }
                        }}
                      />
                    </div>
                    <Select
                      value={newUserPermission}
                      onValueChange={(value: Permission) =>
                        setNewUserPermission(value)
                      }
                    >
                      <SelectTrigger className='w-40'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='viewer'>
                          <div className='flex items-center gap-2'>
                            {getPermissionIcon('viewer')}
                            Viewer
                          </div>
                        </SelectItem>
                        <SelectItem value='commenter'>
                          <div className='flex items-center gap-2'>
                            {getPermissionIcon('commenter')}
                            Commenter
                          </div>
                        </SelectItem>
                        <SelectItem value='editor'>
                          <div className='flex items-center gap-2'>
                            {getPermissionIcon('editor')}
                            Editor
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleInviteUser}
                      disabled={!newUserEmail.trim() || isInvitingUser}
                    >
                      {isInvitingUser ? 'Inviting...' : 'Invite'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Current Collaborators */}
            <Card>
              <CardHeader>
                <CardTitle className='text-base'>People with Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className='max-h-64'>
                  <div className='space-y-3'>
                    {notePermissions.map((permission) => (
                      <div
                        key={permission.id}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center gap-3'>
                          <Avatar className='h-8 w-8'>
                            <AvatarImage src={permission.userId} />
                            <AvatarFallback className='text-xs'>
                              {getUserInitials(permission.userId)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className='text-sm font-medium'>
                              {permission.userId}
                              {permission.userId === currentUser.id && (
                                <span className='text-gray-500 ml-1'>
                                  (you)
                                </span>
                              )}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {getPermissionDescription(permission.permission)}
                            </p>
                          </div>
                        </div>

                        <div className='flex items-center gap-2'>
                          <Badge
                            className={cn(
                              'text-xs',
                              getPermissionColor(permission.permission)
                            )}
                          >
                            {getPermissionIcon(permission.permission)}
                            <span className='ml-1'>
                              {permission.permission}
                            </span>
                          </Badge>

                          {canManagePermissions &&
                            permission.userId !== currentUser.id &&
                            permission.permission !== 'owner' && (
                              <Button
                                variant='ghost'
                                size='sm'
                                onClick={() =>
                                  handleRevokePermission(permission.userId)
                                }
                                className='text-red-600 hover:text-red-700'
                              >
                                <X className='h-3 w-3' />
                              </Button>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='links' className='space-y-4'>
            {/* Create Share Link */}
            {canShare && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-base flex items-center gap-2'>
                    <Link className='h-4 w-4' />
                    Create Share Link
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <Label>Permission Level</Label>
                      <Select
                        value={linkPermission}
                        onValueChange={(value: Permission) =>
                          setLinkPermission(value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='viewer'>Viewer</SelectItem>
                          <SelectItem value='commenter'>Commenter</SelectItem>
                          <SelectItem value='editor'>Editor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Expires</Label>
                      <Select value={linkExpiry} onValueChange={setLinkExpiry}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='never'>Never</SelectItem>
                          <SelectItem value='1day'>1 Day</SelectItem>
                          <SelectItem value='1week'>1 Week</SelectItem>
                          <SelectItem value='1month'>1 Month</SelectItem>
                          <SelectItem value='3months'>3 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Max Access Count (Optional)</Label>
                    <Input
                      type='number'
                      placeholder='Unlimited'
                      value={maxAccess || ''}
                      onChange={(e) =>
                        setMaxAccess(
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                    />
                  </div>

                  <Button
                    onClick={handleCreateShareLink}
                    disabled={isCreatingLink}
                    className='w-full'
                  >
                    {isCreatingLink ? 'Creating...' : 'Create Share Link'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Existing Share Links */}
            <Card>
              <CardHeader>
                <CardTitle className='text-base'>Active Share Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className='max-h-64'>
                  <div className='space-y-3'>
                    {shareLinks
                      .filter((link) => link.isActive)
                      .map((link) => (
                        <div
                          key={link.id}
                          className='flex items-center justify-between p-3 border rounded-lg'
                        >
                          <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                              <Badge
                                className={cn(
                                  'text-xs',
                                  getPermissionColor(link.permission)
                                )}
                              >
                                {getPermissionIcon(link.permission)}
                                <span className='ml-1'>{link.permission}</span>
                              </Badge>
                              {link.expiresAt && (
                                <span className='text-xs text-gray-500'>
                                  Expires{' '}
                                  {formatDistanceToNow(link.expiresAt, {
                                    addSuffix: true,
                                  })}
                                </span>
                              )}
                            </div>
                            <div className='flex items-center gap-2 mt-1 text-xs text-gray-500'>
                              <span>{link.accessCount} accesses</span>
                              {link.maxAccess && (
                                <span>/ {link.maxAccess} max</span>
                              )}
                              <span>
                                Created{' '}
                                {formatDistanceToNow(link.createdAt, {
                                  addSuffix: true,
                                })}
                              </span>
                            </div>
                          </div>

                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => handleCopyLink(link)}
                            className='ml-2'
                          >
                            {copiedLink === link.id ? (
                              <>
                                <Check className='h-3 w-3 mr-1' />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className='h-3 w-3 mr-1' />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      ))}

                    {shareLinks.filter((link) => link.isActive).length ===
                      0 && (
                      <div className='text-center py-6 text-gray-500'>
                        <Link className='h-8 w-8 mx-auto mb-2 opacity-50' />
                        <p className='text-sm'>No active share links</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='requests' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle className='text-base flex items-center gap-2'>
                  <Clock className='h-4 w-4' />
                  Pending Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className='max-h-64'>
                  <div className='space-y-3'>
                    {pendingRequests.map((request) => (
                      <div
                        key={request.id}
                        className='flex items-center justify-between p-3 border rounded-lg'
                      >
                        <div className='flex-1'>
                          <p className='text-sm font-medium'>
                            {request.requestedBy}
                          </p>
                          <p className='text-xs text-gray-500'>
                            Requesting {request.requestedPermission} access
                          </p>
                          {request.message && (
                            <p className='text-xs text-gray-600 mt-1 italic'>
                              "{request.message}"
                            </p>
                          )}
                          <p className='text-xs text-gray-500 mt-1'>
                            {formatDistanceToNow(request.createdAt, {
                              addSuffix: true,
                            })}
                          </p>
                        </div>

                        {canManagePermissions && (
                          <div className='flex gap-2'>
                            <Button size='sm' variant='outline'>
                              <Check className='h-3 w-3 mr-1' />
                              Approve
                            </Button>
                            <Button size='sm' variant='outline'>
                              <X className='h-3 w-3 mr-1' />
                              Deny
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}

                    {pendingRequests.length === 0 && (
                      <div className='text-center py-6 text-gray-500'>
                        <Clock className='h-8 w-8 mx-auto mb-2 opacity-50' />
                        <p className='text-sm'>No pending requests</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
