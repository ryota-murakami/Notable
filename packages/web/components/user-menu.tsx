'use client'

import * as React from 'react'
import { LogOut, Settings, User } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useRouter } from 'next/navigation'
import { cn } from '../lib/utils'
import { toast } from 'sonner'
import { createClient } from '@/utils/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { isTest } from '../lib/utils/environment'

interface UserMenuProps {
  className?: string
}

export function UserMenu({ className }: UserMenuProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const [user, setUser] = React.useState<SupabaseUser | null>(null)
  const [loading, setLoading] = React.useState(true)
  const supabase = createClient()

  React.useEffect(() => {
    // Get initial user
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  // Generate initials from user data
  const getInitials = (user: SupabaseUser | null) => {
    if (!user) return '??'

    // Try to get name from user metadata
    const fullName = user.user_metadata?.full_name || user.user_metadata?.name
    if (fullName) {
      const names = fullName.split(' ')
      return names
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    // Fallback to email
    if (user.email) {
      return user.email.slice(0, 2).toUpperCase()
    }

    return '??'
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) throw error

      // Clear dev auth bypass cookie if it exists
      document.cookie =
        'dev-auth-bypass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

      toast.success('Logged out successfully', {
        description: 'You have been logged out of your account.',
      })

      // Redirect to auth page
      router.push('/auth')
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('Logout failed', {
        description: 'There was an error logging out. Please try again.',
      })
    }
  }

  const handleSettings = () => {
    // TODO: Navigate to settings page when implemented
    toast.info('Settings page coming soon!')
  }

  // Create mock user for testing when dev-auth-bypass is enabled
  const testMode = isTest()
  const mockUser: SupabaseUser | null = testMode && !user ? {
    id: 'test-user-id',
    email: 'demo@notable.app',
    user_metadata: {
      full_name: 'Demo User',
      name: 'Demo User'
    },
    app_metadata: {},
    aud: 'authenticated',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    role: 'authenticated',
    email_confirmed_at: new Date().toISOString()
  } as SupabaseUser : null

  const currentUser = user || mockUser

  // Don't render if loading or no user (and not in test mode)
  if (loading || (!currentUser && !testMode)) {
    return null
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            className
          )}
          aria-label='User menu'
          data-testid='user-menu-trigger'
        >
          <span className='text-sm font-semibold'>{getInitials(currentUser)}</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-50 min-w-[220px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          sideOffset={5}
          align='end'
        >
          <div className='px-2 py-1.5'>
            <p className='text-sm font-semibold'>
              {currentUser?.user_metadata?.full_name ||
                currentUser?.user_metadata?.name ||
                currentUser?.email ||
                'User'}
            </p>
            <p className='text-xs text-muted-foreground'>
              {currentUser?.email || 'No email'}
            </p>
          </div>

          <DropdownMenu.Separator className='my-1 h-px bg-border' />

          <DropdownMenu.Item
            className='flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
            onSelect={handleSettings}
          >
            <Settings className='h-4 w-4' />
            <span>Settings</span>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className='my-1 h-px bg-border' />

          <DropdownMenu.Item
            className='flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
            onSelect={handleLogout}
          >
            <LogOut className='h-4 w-4' />
            <span>Log out</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
