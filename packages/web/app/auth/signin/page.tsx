'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSupabase } from '@/components/supabase-provider'
import Link from 'next/link'
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
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TwoFactorVerification } from '@/components/auth/two-factor-verification'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type SignInFormData = z.infer<typeof signInSchema>

export default function SignInPage() {
  const router = useRouter()
  const { supabase } = useSupabase()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [requires2FA, setRequires2FA] = useState(false)
  const [tempSession, setTempSession] = useState<any>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInFormData) => {
    if (!supabase) {
      setError('Authentication service is not available')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) {
        setError(error.message)
        return
      }

      // Check if user has 2FA enabled
      if (authData.user) {
        const { data: settings } = await supabase
          .from('user_2fa_settings')
          .select('totp_enabled')
          .eq('user_id', authData.user.id)
          .single()

        if (settings?.totp_enabled) {
          // Store session temporarily and require 2FA
          setTempSession(authData.session)
          setRequires2FA(true)
          // Sign out to prevent access without 2FA
          await supabase.auth.signOut()
          return
        }
      }

      router.push('/')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    if (!supabase) {
      setError('Authentication service is not available')
      return
    }

    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      })

      if (error) {
        setError(error.message)
      }
    } catch {
      setError('Failed to sign in with Google')
    } finally {
      setIsLoading(false)
    }
  }

  const handle2FASuccess = async () => {
    if (!tempSession || !supabase) return

    try {
      // Restore the session after successful 2FA
      const { error } = await supabase.auth.setSession({
        access_token: tempSession.access_token,
        refresh_token: tempSession.refresh_token,
      })

      if (error) {
        setError('Failed to restore session')
        setRequires2FA(false)
        setTempSession(null)
        return
      }

      router.push('/')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setRequires2FA(false)
      setTempSession(null)
    }
  }

  const handle2FACancel = () => {
    setRequires2FA(false)
    setTempSession(null)
    setError(null)
  }

  if (requires2FA) {
    return (
      <div className='flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <TwoFactorVerification
          onSuccess={handle2FASuccess}
          onCancel={handle2FACancel}
        />
      </div>
    )
  }

  return (
    <div className='flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold text-center'>
            Welcome back
          </CardTitle>
          <CardDescription className='text-center'>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          {error && (
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                {...register('email')}
                disabled={isLoading}
              />
              {errors.email && (
                <p className='text-sm text-destructive'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <Label htmlFor='password'>Password</Label>
                <Link
                  href='/auth/forgot-password'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id='password'
                type='password'
                {...register('password')}
                disabled={isLoading}
              />
              {errors.password && (
                <p className='text-sm text-destructive'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              ) : null}
              Sign in
            </Button>
          </form>

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant='outline'
            type='button'
            className='w-full'
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <svg
              className='mr-2 h-4 w-4'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Google
          </Button>
        </CardContent>
        <CardFooter>
          <p className='text-center text-sm text-muted-foreground w-full'>
            Don&apos;t have an account?{' '}
            <Link
              href='/auth/signup'
              className='font-medium text-primary hover:underline'
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
