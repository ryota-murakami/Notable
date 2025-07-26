'use client'

import { useState, useEffect } from 'react'
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
import { Loader2, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isValidSession, setIsValidSession] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const passwordRequirements = [
    { test: (p: string) => p.length >= 8, text: 'At least 8 characters' },
    { test: (p: string) => /[A-Z]/.test(p), text: 'One uppercase letter' },
    { test: (p: string) => /[a-z]/.test(p), text: 'One lowercase letter' },
    { test: (p: string) => /\d/.test(p), text: 'One number' },
  ]

  const isPasswordValid = passwordRequirements.every((req) =>
    req.test(password)
  )
  const doPasswordsMatch =
    password === confirmPassword && confirmPassword.length > 0

  useEffect(() => {
    // Check if this is a valid password reset session
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) {
        setIsValidSession(true)
      } else {
        setError(
          'Invalid or expired password reset link. Please request a new one.'
        )
      }
    }

    checkSession()
  }, [supabase.auth])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPasswordValid) {
      setError('Password does not meet requirements')
      return
    }

    if (!doPasswordsMatch) {
      setError('Passwords do not match')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess(true)
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isValidSession && error) {
    return (
      <div className='flex h-screen bg-background items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold text-center'>
              Invalid Reset Link
            </CardTitle>
            <CardDescription className='text-center'>
              This password reset link is invalid or expired
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <Link href='/auth' className='w-full'>
              <Button className='w-full'>Request New Reset Link</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className='flex h-screen bg-background items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold text-center'>
              Password Updated
            </CardTitle>
            <CardDescription className='text-center'>
              Your password has been successfully updated
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='text-center'>
              <CheckCircle className='mx-auto h-16 w-16 text-green-500 mb-4' />
              <p className='text-sm text-muted-foreground mb-4'>
                Your password has been updated successfully. You will be
                redirected to the app in a moment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='flex h-screen bg-background items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold text-center'>
            Set New Password
          </CardTitle>
          <CardDescription className='text-center'>
            Choose a new secure password for your account
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
              <Label htmlFor='new-password'>New Password</Label>
              <div className='relative'>
                <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                <Input
                  id='new-password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your new password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='pl-10 pr-10'
                  required
                  disabled={isLoading}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className='h-4 w-4' />
                  ) : (
                    <Eye className='h-4 w-4' />
                  )}
                </Button>
              </div>
              {password && (
                <div className='space-y-1'>
                  {passwordRequirements.map((req, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-xs ${
                        req.test(password)
                          ? 'text-green-600'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <CheckCircle
                        className={`mr-1 h-3 w-3 ${
                          req.test(password)
                            ? 'text-green-600'
                            : 'text-muted-foreground'
                        }`}
                      />
                      {req.text}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='confirm-new-password'>Confirm New Password</Label>
              <div className='relative'>
                <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                <Input
                  id='confirm-new-password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm your new password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='pl-10 pr-10'
                  required
                  disabled={isLoading}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff className='h-4 w-4' />
                  ) : (
                    <Eye className='h-4 w-4' />
                  )}
                </Button>
              </div>
              {confirmPassword && (
                <div
                  className={`flex items-center text-xs ${
                    doPasswordsMatch ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  <CheckCircle
                    className={`mr-1 h-3 w-3 ${
                      doPasswordsMatch ? 'text-green-600' : 'text-red-600'
                    }`}
                  />
                  {doPasswordsMatch
                    ? 'Passwords match'
                    : 'Passwords do not match'}
                </div>
              )}
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={
                isLoading || !password || !isPasswordValid || !doPasswordsMatch
              }
            >
              {isLoading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Updating password...
                </>
              ) : (
                'Update password'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
