'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'

interface TwoFactorVerificationProps {
  onSuccess: () => void
  onCancel?: () => void
}

export function TwoFactorVerification({
  onSuccess,
  onCancel,
}: TwoFactorVerificationProps) {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [useBackupCode, setUseBackupCode] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/auth/2fa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: code,
          isSetup: false,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify code')
      }

      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify code')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>
          {useBackupCode
            ? 'Enter one of your backup codes'
            : 'Enter the 6-digit code from your authenticator app'}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleVerify}>
        <CardContent className='space-y-4'>
          {error && (
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className='space-y-2'>
            <Label htmlFor='code'>
              {useBackupCode ? 'Backup Code' : 'Verification Code'}
            </Label>
            <Input
              id='code'
              placeholder={useBackupCode ? 'XXXXXXXX' : '000000'}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={useBackupCode ? 8 : 6}
              pattern='[0-9A-Z]*'
              inputMode={useBackupCode ? 'text' : 'numeric'}
              disabled={isLoading}
              autoFocus
            />
          </div>
          <button
            type='button'
            onClick={() => {
              setUseBackupCode(!useBackupCode)
              setCode('')
              setError(null)
            }}
            className='text-sm text-primary hover:underline'
          >
            {useBackupCode
              ? 'Use authenticator app instead'
              : "Don't have your phone? Use a backup code"}
          </button>
        </CardContent>
        <CardFooter className='flex justify-between'>
          {onCancel && (
            <Button
              type='button'
              variant='outline'
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          )}
          <Button
            type='submit'
            disabled={isLoading || code.length < (useBackupCode ? 8 : 6)}
            className={onCancel ? '' : 'w-full'}
          >
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Verify
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
