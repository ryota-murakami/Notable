'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
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
import { Loader2, Mail, ArrowLeft, CheckCircle } from 'lucide-react'

interface PasswordResetFormProps {
  onBack: () => void
}

export function PasswordResetForm({ onBack }: PasswordResetFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold text-center'>
            Check your email
          </CardTitle>
          <CardDescription className='text-center'>
            We've sent you a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-center'>
            <CheckCircle className='mx-auto h-16 w-16 text-green-500 mb-4' />
            <p className='text-sm text-muted-foreground mb-4'>
              We've sent a password reset link to <strong>{email}</strong>.
              Click the link in the email to reset your password.
            </p>
            <Button
              type='button'
              variant='secondary'
              onClick={onBack}
              className='w-full'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to sign in
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold text-center'>
          Reset your password
        </CardTitle>
        <CardDescription className='text-center'>
          Enter your email address and we'll send you a link to reset your
          password
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {error && (
          <Alert variant='destructive'>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='reset-email'>Email</Label>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                id='reset-email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='pl-10'
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type='submit'
            className='w-full'
            disabled={isLoading || !email}
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending reset link...
              </>
            ) : (
              'Send reset link'
            )}
          </Button>
        </form>

        <Button
          type='button'
          variant='secondary'
          onClick={onBack}
          className='w-full'
          disabled={isLoading}
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to sign in
        </Button>
      </CardContent>
    </Card>
  )
}
