'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

interface TwoFactorSetupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (backupCodes: string[]) => void
}

export function TwoFactorSetup({
  isOpen,
  onClose,
  onSuccess,
}: TwoFactorSetupProps) {
  const [step, setStep] = useState<'setup' | 'verify' | 'backup'>('setup')
  const [qrCode, setQrCode] = useState<string>('')
  const [secret, setSecret] = useState<string>('')
  const [verificationCode, setVerificationCode] = useState<string>('')
  const [backupCodes, setBackupCodes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedSecret, setCopiedSecret] = useState(false)

  const handleSetup = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/auth/2fa/setup')
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to setup 2FA')
      }

      setQrCode(data.qrCode)
      setSecret(data.secret)
      setStep('verify')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to setup 2FA')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/auth/2fa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: verificationCode,
          isSetup: true,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify code')
      }

      setBackupCodes(data.backupCodes || [])
      setStep('backup')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify code')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopySecret = () => {
    navigator.clipboard.writeText(secret)
    setCopiedSecret(true)
    toast.success('Secret key copied to clipboard')
    setTimeout(() => setCopiedSecret(false), 2000)
  }

  const handleCopyBackupCodes = () => {
    const codesText = backupCodes.join('\n')
    navigator.clipboard.writeText(codesText)
    toast.success('Backup codes copied to clipboard')
  }

  const handleComplete = () => {
    onSuccess(backupCodes)
    onClose()
    // Reset state
    setStep('setup')
    setQrCode('')
    setSecret('')
    setVerificationCode('')
    setBackupCodes([])
    setError(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-md'>
        {step === 'setup' && (
          <>
            <DialogHeader>
              <DialogTitle>Enable Two-Factor Authentication</DialogTitle>
              <DialogDescription>
                Add an extra layer of security to your account by requiring a
                verification code in addition to your password.
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4 py-4'>
              <p className='text-sm text-muted-foreground'>
                You'll need an authenticator app like Google Authenticator,
                Authy, or 1Password to continue.
              </p>
              {error && (
                <Alert variant='destructive'>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
            <DialogFooter>
              <Button variant='outline' onClick={onClose} disabled={isLoading}>
                Cancel
              </Button>
              <Button onClick={handleSetup} disabled={isLoading}>
                {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Continue
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'verify' && (
          <>
            <DialogHeader>
              <DialogTitle>Scan QR Code</DialogTitle>
              <DialogDescription>
                Scan this QR code with your authenticator app, then enter the
                verification code below.
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4 py-4'>
              {qrCode && (
                <div className='flex justify-center'>
                  <img src={qrCode} alt='2FA QR Code' className='w-48 h-48' />
                </div>
              )}
              <div className='space-y-2'>
                <Label className='text-xs text-muted-foreground'>
                  Can't scan? Enter this key manually:
                </Label>
                <div className='flex items-center space-x-2'>
                  <code className='flex-1 p-2 bg-muted rounded text-xs break-all'>
                    {secret}
                  </code>
                  <Button size='sm' variant='ghost' onClick={handleCopySecret}>
                    {copiedSecret ? (
                      <Check className='h-4 w-4' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}
                  </Button>
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='code'>Verification Code</Label>
                <Input
                  id='code'
                  placeholder='000000'
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                  pattern='[0-9]*'
                  inputMode='numeric'
                />
              </div>
              {error && (
                <Alert variant='destructive'>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
            <DialogFooter>
              <Button variant='outline' onClick={onClose} disabled={isLoading}>
                Cancel
              </Button>
              <Button
                onClick={handleVerify}
                disabled={isLoading || verificationCode.length !== 6}
              >
                {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Verify
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'backup' && (
          <>
            <DialogHeader>
              <DialogTitle>Save Your Backup Codes</DialogTitle>
              <DialogDescription>
                Store these backup codes in a safe place. You can use them to
                access your account if you lose your authenticator device.
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4 py-4'>
              <Alert>
                <AlertDescription>
                  Each backup code can only be used once. We recommend printing
                  or writing them down.
                </AlertDescription>
              </Alert>
              <div className='grid grid-cols-2 gap-2 p-4 bg-muted rounded-lg'>
                {backupCodes.map((code, index) => (
                  <code key={index} className='text-sm font-mono'>
                    {code}
                  </code>
                ))}
              </div>
              <Button
                variant='outline'
                className='w-full'
                onClick={handleCopyBackupCodes}
              >
                <Copy className='mr-2 h-4 w-4' />
                Copy Backup Codes
              </Button>
            </div>
            <DialogFooter>
              <Button onClick={handleComplete} className='w-full'>
                I've Saved My Backup Codes
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
