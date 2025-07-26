'use client'

import { useState } from 'react'
import { useAuth, useUserProfile } from '@/hooks/use-auth'
import { Button } from '@/design-system/components/button'
import { Input } from '@/design-system/components/input'
import { Label } from '@/design-system/components/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/design-system/components/card'
import { Alert, AlertDescription } from '@/design-system/components/alert'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/design-system/components/avatar'
import { Separator } from '@/design-system/components/separator'
import { Badge } from '@/design-system/components/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/design-system/components/dialog'
import {
  Loader2,
  User,
  Mail,
  Shield,
  LogOut,
  Edit,
  Save,
  X,
  Upload,
} from 'lucide-react'

export function UserProfile() {
  const { user, signOut } = useAuth()
  const { profile, isLoading, error, updateProfile } = useUserProfile()
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: '',
    avatar_url: '',
  })
  const [updateError, setUpdateError] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSignOutDialog, setShowSignOutDialog] = useState(false)

  // Initialize edit form when profile loads
  useState(() => {
    if (profile) {
      setEditForm({
        name: profile.name || '',
        avatar_url: profile.avatar_url || '',
      })
    }
  })

  const handleEdit = () => {
    if (profile) {
      setEditForm({
        name: profile.name || '',
        avatar_url: profile.avatar_url || '',
      })
    }
    setIsEditing(true)
    setUpdateError(null)
  }

  const handleSave = async () => {
    setIsUpdating(true)
    setUpdateError(null)

    try {
      await updateProfile({
        name: editForm.name.trim() || undefined,
        avatar_url: editForm.avatar_url.trim() || undefined,
      })
      setIsEditing(false)
    } catch (err) {
      setUpdateError(
        err instanceof Error ? err.message : 'Failed to update profile'
      )
    } finally {
      setIsUpdating(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setUpdateError(null)
    if (profile) {
      setEditForm({
        name: profile.name || '',
        avatar_url: profile.avatar_url || '',
      })
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setShowSignOutDialog(false)
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getProviderBadge = () => {
    if (!user?.app_metadata?.provider) return null

    const provider = user.app_metadata.provider
    const colors: Record<string, string> = {
      google: 'bg-red-100 text-red-800',
      github: 'bg-gray-100 text-gray-800',
      email: 'bg-blue-100 text-blue-800',
    }

    return (
      <Badge className={colors[provider] || 'bg-gray-100 text-gray-800'}>
        {provider === 'email'
          ? 'Email'
          : provider.charAt(0).toUpperCase() + provider.slice(1)}
      </Badge>
    )
  }

  if (isLoading) {
    return (
      <Card className='w-full max-w-2xl'>
        <CardContent className='flex items-center justify-center p-8'>
          <Loader2 className='h-8 w-8 animate-spin' />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className='w-full max-w-2xl'>
        <CardContent className='p-6'>
          <Alert variant='destructive'>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='w-full max-w-2xl'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          Profile Settings
          {!isEditing ? (
            <Button variant='secondary' size='sm' onClick={handleEdit}>
              <Edit className='h-4 w-4 mr-2' />
              Edit
            </Button>
          ) : (
            <div className='flex gap-2'>
              <Button
                variant='secondary'
                size='sm'
                onClick={handleCancel}
                disabled={isUpdating}
              >
                <X className='h-4 w-4 mr-2' />
                Cancel
              </Button>
              <Button size='sm' onClick={handleSave} disabled={isUpdating}>
                {isUpdating ? (
                  <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                ) : (
                  <Save className='h-4 w-4 mr-2' />
                )}
                Save
              </Button>
            </div>
          )}
        </CardTitle>
        <CardDescription>
          Manage your account settings and preferences
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        {updateError && (
          <Alert variant='destructive'>
            <AlertDescription>{updateError}</AlertDescription>
          </Alert>
        )}

        {/* Profile Picture Section */}
        <div className='flex items-center space-x-4'>
          <Avatar className='h-20 w-20'>
            <AvatarImage
              src={
                isEditing
                  ? editForm.avatar_url
                  : profile?.avatar_url || user?.user_metadata?.avatar_url
              }
              alt={profile?.name || user?.email || 'User'}
            />
            <AvatarFallback className='text-lg'>
              {profile?.name ? (
                getInitials(profile.name)
              ) : (
                <User className='h-8 w-8' />
              )}
            </AvatarFallback>
          </Avatar>

          <div className='flex-1'>
            <h3 className='text-lg font-medium'>Profile Picture</h3>
            <p className='text-sm text-muted-foreground'>
              This will be displayed on your profile and in comments
            </p>
            {isEditing && (
              <div className='mt-2'>
                <Label htmlFor='avatar'>Avatar URL</Label>
                <div className='flex gap-2 mt-1'>
                  <Input
                    id='avatar'
                    type='url'
                    placeholder='https://example.com/avatar.jpg'
                    value={editForm.avatar_url}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        avatar_url: e.target.value,
                      }))
                    }
                    disabled={isUpdating}
                  />
                  <Button variant='secondary' size='sm' disabled={isUpdating}>
                    <Upload className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Personal Information */}
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Personal Information</h3>

          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Full Name</Label>
              {isEditing ? (
                <Input
                  id='name'
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder='Enter your full name'
                  disabled={isUpdating}
                />
              ) : (
                <div className='flex items-center space-x-2'>
                  <User className='h-4 w-4 text-muted-foreground' />
                  <span>{profile?.name || 'Not set'}</span>
                </div>
              )}
            </div>

            <div className='grid gap-2'>
              <Label>Email Address</Label>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-4 w-4 text-muted-foreground' />
                  <span>{user?.email}</span>
                </div>
                {getProviderBadge()}
              </div>
              <p className='text-sm text-muted-foreground'>
                {user?.email_confirmed_at ? (
                  <>
                    <Shield className='h-3 w-3 inline mr-1 text-green-600' />
                    Verified on{' '}
                    {new Date(user.email_confirmed_at).toLocaleDateString()}
                  </>
                ) : (
                  'Email not verified'
                )}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Account Information */}
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Account Information</h3>

          <div className='grid gap-4 text-sm'>
            <div>
              <Label className='text-muted-foreground'>User ID</Label>
              <p className='font-mono text-xs bg-muted p-2 rounded'>
                {user?.id}
              </p>
            </div>

            <div>
              <Label className='text-muted-foreground'>Account Created</Label>
              <p>
                {user?.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : 'Unknown'}
              </p>
            </div>

            <div>
              <Label className='text-muted-foreground'>Last Sign In</Label>
              <p>
                {user?.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleDateString()
                  : 'Unknown'}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Actions */}
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Actions</h3>

          <Dialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
            <DialogTrigger asChild>
              <Button variant='destructive' className='w-full'>
                <LogOut className='h-4 w-4 mr-2' />
                Sign Out
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign Out</DialogTitle>
                <DialogDescription>
                  Are you sure you want to sign out? You'll need to sign in
                  again to access your notes.
                </DialogDescription>
              </DialogHeader>
              <div className='flex justify-end space-x-2'>
                <Button
                  variant='secondary'
                  onClick={() => setShowSignOutDialog(false)}
                >
                  Cancel
                </Button>
                <Button variant='destructive' onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
