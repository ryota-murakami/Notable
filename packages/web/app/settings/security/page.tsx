'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@/hooks/use-user'
import { useSupabase } from '@/components/supabase-provider'
import { TwoFactorSetup } from '@/components/auth/two-factor-setup'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Key, Loader2, Shield, Smartphone } from 'lucide-react'
import { toast } from 'sonner'

export default function SecuritySettingsPage() {
  const { user, loading: userLoading } = useUser()
  const { supabase } = useSupabase()
  const [isLoading, setIsLoading] = useState(false)
  const [has2FA, setHas2FA] = useState(false)
  const [showSetup, setShowSetup] = useState(false)
  const [showDisable, setShowDisable] = useState(false)
  const [disableCode, setDisableCode] = useState('')
  const [backupCodesCount, setBackupCodesCount] = useState(0)

  useEffect(() => {
    if (user && supabase) {
      checkTwoFactorStatus()
    }
  }, [user, supabase])

  const checkTwoFactorStatus = async () => {
    if (!supabase || !user) return

    try {
      const { data: settings } = await supabase
        .from('user_2fa_settings')
        .select('totp_enabled')
        .eq('user_id', user.id)
        .single()

      setHas2FA(settings?.totp_enabled || false)

      if (settings?.totp_enabled) {
        const response = await fetch('/api/auth/2fa/backup-codes')
        const data = await response.json()
        setBackupCodesCount(data.count || 0)
      }
    } catch (error) {
      console.error('Error checking 2FA status:', error)
    }
  }

  const handleSetupSuccess = (backupCodes: string[]) => {
    setHas2FA(true)
    setBackupCodesCount(backupCodes.length)
    toast.success('Two-factor authentication enabled successfully')
  }

  const handleDisable2FA = async () => {
    try {
      setIsLoading(true)

      const response = await fetch('/api/auth/2fa/disable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: disableCode }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to disable 2FA')
      }

      setHas2FA(false)
      setShowDisable(false)
      setDisableCode('')
      toast.success('Two-factor authentication disabled')
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to disable 2FA'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegenerateBackupCodes = async () => {
    try {
      setIsLoading(true)

      const response = await fetch('/api/auth/2fa/backup-codes', {
        method: 'POST',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to regenerate backup codes')
      }

      setBackupCodesCount(data.backupCodes?.length || 0)

      // Show backup codes in a dialog or copy to clipboard
      const codesText = data.backupCodes.join('\n')
      await navigator.clipboard.writeText(codesText)
      toast.success('New backup codes generated and copied to clipboard')
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to regenerate backup codes'
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (userLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    )
  }

  if (!user) {
    return (
      <div className='container max-w-4xl py-8'>
        <Alert>
          <AlertDescription>
            Please sign in to manage your security settings.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className='container max-w-4xl py-8 space-y-8'>
      <div>
        <h1 className='text-3xl font-bold'>Security Settings</h1>
        <p className='text-muted-foreground mt-2'>
          Manage your account security and authentication methods
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className='flex items-center space-x-2'>
            <Shield className='h-5 w-5' />
            <CardTitle>Two-Factor Authentication</CardTitle>
          </div>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          {has2FA ? (
            <>
              <div className='flex items-center space-x-2 text-sm'>
                <Smartphone className='h-4 w-4 text-green-500' />
                <span className='text-green-500 font-medium'>Enabled</span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Your account is protected with two-factor authentication.
              </p>
              <div className='flex flex-col sm:flex-row gap-2'>
                <Button
                  variant='outline'
                  onClick={() => setShowDisable(true)}
                  disabled={isLoading}
                >
                  Disable 2FA
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className='text-sm text-muted-foreground'>
                Two-factor authentication is not enabled. We recommend enabling
                it for better account security.
              </p>
              <Button onClick={() => setShowSetup(true)}>
                Enable Two-Factor Authentication
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {has2FA && (
        <Card>
          <CardHeader>
            <div className='flex items-center space-x-2'>
              <Key className='h-5 w-5' />
              <CardTitle>Backup Codes</CardTitle>
            </div>
            <CardDescription>
              Use backup codes to access your account if you lose your
              authenticator device
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='text-sm text-muted-foreground'>
              You have <strong>{backupCodesCount}</strong> unused backup codes
              remaining.
            </p>
            <Button
              variant='outline'
              onClick={handleRegenerateBackupCodes}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Generate New Backup Codes
            </Button>
            <Alert>
              <AlertDescription className='text-xs'>
                Generating new codes will invalidate all existing unused backup
                codes.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <TwoFactorSetup
        isOpen={showSetup}
        onClose={() => setShowSetup(false)}
        onSuccess={handleSetupSuccess}
      />

      <AlertDialog open={showDisable} onOpenChange={setShowDisable}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Disable Two-Factor Authentication
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the extra security layer from your account. Enter
              your authenticator code or a backup code to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='space-y-4 py-4'>
            <div className='space-y-2'>
              <Label htmlFor='disable-code'>Verification Code</Label>
              <Input
                id='disable-code'
                placeholder='000000 or backup code'
                value={disableCode}
                onChange={(e) => setDisableCode(e.target.value)}
                maxLength={8}
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDisable2FA}
              disabled={isLoading || !disableCode}
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Disable 2FA
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
