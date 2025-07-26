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
import {
  Loader2,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle,
} from 'lucide-react'

interface SignUpFormProps {
  onToggleMode: () => void
}

export function SignUpForm({ onToggleMode }: SignUpFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
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
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
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

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        setError(error.message)
        setIsLoading(false)
      }
    } catch (err) {
      setError('Failed to sign up with Google. Please try again.')
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
            We've sent you a verification link
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-center'>
            <CheckCircle className='mx-auto h-16 w-16 text-green-500 mb-4' />
            <p className='text-sm text-muted-foreground mb-4'>
              We've sent a verification link to <strong>{email}</strong>. Click
              the link in the email to activate your account.
            </p>
            <Button
              type='button'
              variant='secondary'
              onClick={onToggleMode}
              className='w-full'
            >
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
          Create an account
        </CardTitle>
        <CardDescription className='text-center'>
          Get started with Notable today
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
            <Label htmlFor='name'>Full Name</Label>
            <div className='relative'>
              <User className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                id='name'
                type='text'
                placeholder='Enter your full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='pl-10'
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                id='email'
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

          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Create a password'
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
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                id='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm your password'
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
              isLoading ||
              !email ||
              !password ||
              !name ||
              !isPasswordValid ||
              !doPasswordsMatch
            }
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Creating account...
              </>
            ) : (
              'Create account'
            )}
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
          type='button'
          variant='secondary'
          className='w-full'
          onClick={handleGoogleSignUp}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='currentColor'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='currentColor'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='currentColor'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
          )}
          Continue with Google
        </Button>

        <div className='text-center text-sm'>
          <span className='text-muted-foreground'>
            Already have an account?{' '}
          </span>
          <Button
            type='button'
            variant='link'
            size='sm'
            onClick={onToggleMode}
            className='p-0 h-auto font-normal'
            disabled={isLoading}
          >
            Sign in
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
