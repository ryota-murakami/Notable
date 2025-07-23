'use client'

import { useSupabase } from '@/components/supabase-provider'
import { useSubscription } from '@/hooks/use-subscription'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Note } from '@/types/note'
import { mapDatabaseNotesToNotes } from '@/lib/mappers/note-mapper'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FeatureGate, UsageGate } from '@/components/feature-gate'
import { UpgradeDialog } from '@/components/billing/upgrade-dialog'
import {
  FileText,
  FolderOpen,
  Loader2,
  LogOut,
  Plus,
  Search,
  Settings,
  Crown,
  CreditCard,
  TrendingUp,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, supabase, loading } = useSupabase()
  const {
    currentPlan,
    planConfig,
    usage,
    canPerformAction,
    isApproachingLimit,
    isPremium,
  } = useSubscription()
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoadingNotes, setIsLoadingNotes] = useState(true)

  const loadNotes = useCallback(async () => {
    if (!supabase) return

    try {
      setIsLoadingNotes(true)
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user?.id || '')
        .order('updated_at', { ascending: false })

      if (error) {
        console.error('Error loading notes:', error)
      } else {
        setNotes(mapDatabaseNotesToNotes(data || []))
      }
    } catch (error) {
      console.error('Error loading notes:', error)
    } finally {
      setIsLoadingNotes(false)
    }
  }, [supabase, user?.id])

  useEffect(() => {
    if (user) {
      loadNotes()
    }
  }, [user, loadNotes])

  const handleSignOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    )
  }

  if (!user) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You need to be signed in to access this page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='border-b bg-card/50 backdrop-blur'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <h1 className='text-2xl font-bold'>Notable</h1>
              {user && (
                <div className='flex items-center space-x-3'>
                  <p className='text-muted-foreground'>
                    Welcome back,{' '}
                    {(user.user_metadata?.name as string) ||
                      (user.email as string) ||
                      'User'}
                  </p>
                  <Badge
                    variant={isPremium ? 'default' : 'secondary'}
                    className={
                      isPremium
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : ''
                    }
                  >
                    {isPremium && <Crown className='h-3 w-3 mr-1' />}
                    {planConfig?.name || 'Free'}
                  </Badge>
                </div>
              )}
            </div>
            <div className='flex items-center space-x-4'>
              <Link href='/dashboard/billing'>
                <Button variant='outline' size='sm'>
                  <CreditCard className='h-4 w-4 mr-2' />
                  Billing
                </Button>
              </Link>
              <Button variant='outline' size='sm'>
                <Settings className='h-4 w-4 mr-2' />
                Settings
              </Button>
              <Button variant='outline' size='sm' onClick={handleSignOut}>
                <LogOut className='h-4 w-4 mr-2' />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-6'>
          {/* Usage Warnings */}
          {usage &&
            (isApproachingLimit('notes', 0.8) ||
              isApproachingLimit('storage', 0.8)) && (
              <Card className='border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800'>
                <CardHeader>
                  <CardTitle className='flex items-center text-amber-800 dark:text-amber-200'>
                    <Zap className='h-5 w-5 mr-2' />
                    Usage Alert
                  </CardTitle>
                  <CardDescription className='text-amber-700 dark:text-amber-300'>
                    You're approaching your plan limits
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  {isApproachingLimit('notes', 0.8) && (
                    <p className='text-sm text-amber-700 dark:text-amber-300'>
                      • Notes: {usage.notes} /{' '}
                      {planConfig.limits.notes === -1
                        ? '∞'
                        : planConfig.limits.notes}
                    </p>
                  )}
                  {isApproachingLimit('storage', 0.8) && (
                    <p className='text-sm text-amber-700 dark:text-amber-300'>
                      • Storage: {(usage.storage / (1024 * 1024)).toFixed(1)}MB
                      / {(planConfig.limits.storage / (1024 * 1024)).toFixed(0)}
                      MB
                    </p>
                  )}
                  {currentPlan === 'free' && (
                    <div className='pt-2'>
                      <UpgradeDialog
                        trigger={
                          <Button
                            size='sm'
                            className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                          >
                            <Crown className='h-4 w-4 mr-2' />
                            Upgrade Plan
                          </Button>
                        }
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

          {/* Quick Actions */}
          <div className='grid md:grid-cols-3 gap-4'>
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg flex items-center'>
                  <Plus className='h-5 w-5 mr-2' />
                  Create Note
                </CardTitle>
                <CardDescription>Start writing your thoughts</CardDescription>
              </CardHeader>
              <CardContent>
                <UsageGate action='notes' compact>
                  <Button className='w-full'>
                    <Plus className='h-4 w-4 mr-2' />
                    New Note
                  </Button>
                </UsageGate>
              </CardContent>
            </Card>

            <FeatureGate
              requiredPlan='premium'
              featureName='Advanced Search'
              featureDescription='Search across all your notes with filters and AI-powered suggestions'
              compact
            >
              <Card>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-lg flex items-center'>
                    <Search className='h-5 w-5 mr-2' />
                    Advanced Search
                    <Crown className='h-4 w-4 ml-2 text-amber-500' />
                  </CardTitle>
                  <CardDescription>
                    AI-powered search with filters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant='outline' className='w-full'>
                    <Search className='h-4 w-4 mr-2' />
                    Search
                  </Button>
                </CardContent>
              </Card>
            </FeatureGate>

            <FeatureGate
              requiredPlan='premium'
              featureName='Smart Organization'
              featureDescription='Automatically organize your notes with AI-powered folders and tags'
              compact
            >
              <Card>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-lg flex items-center'>
                    <FolderOpen className='h-5 w-5 mr-2' />
                    Smart Organization
                    <Crown className='h-4 w-4 ml-2 text-amber-500' />
                  </CardTitle>
                  <CardDescription>AI-powered folders and tags</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant='outline' className='w-full'>
                    <FolderOpen className='h-4 w-4 mr-2' />
                    Organize
                  </Button>
                </CardContent>
              </Card>
            </FeatureGate>
          </div>

          {/* Upgrade Prompt for Free Users */}
          {currentPlan === 'free' && (
            <Card className='bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800'>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Crown className='h-5 w-5 mr-2 text-purple-500' />
                  Unlock Premium Features
                </CardTitle>
                <CardDescription>
                  Get unlimited notes, advanced collaboration, and AI-powered
                  features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-4 mb-4'>
                  <div className='text-center'>
                    <FileText className='h-8 w-8 mx-auto mb-2 text-purple-500' />
                    <p className='font-medium'>Unlimited Notes</p>
                    <p className='text-sm text-muted-foreground'>
                      Create as many notes as you need
                    </p>
                  </div>
                  <div className='text-center'>
                    <Zap className='h-8 w-8 mx-auto mb-2 text-purple-500' />
                    <p className='font-medium'>AI Features</p>
                    <p className='text-sm text-muted-foreground'>
                      Smart suggestions and automation
                    </p>
                  </div>
                  <div className='text-center'>
                    <TrendingUp className='h-8 w-8 mx-auto mb-2 text-purple-500' />
                    <p className='font-medium'>Advanced Analytics</p>
                    <p className='text-sm text-muted-foreground'>
                      Track your productivity
                    </p>
                  </div>
                </div>
                <UpgradeDialog
                  trigger={
                    <Button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>
                      <Crown className='h-4 w-4 mr-2' />
                      Upgrade to Premium - $9.99/month
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          )}

          {/* Recent Notes */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <FileText className='h-5 w-5 mr-2' />
                Recent Notes
              </CardTitle>
              <CardDescription>Your latest notes and thoughts</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingNotes ? (
                <div className='flex items-center justify-center py-8'>
                  <Loader2 className='h-6 w-6 animate-spin' />
                </div>
              ) : notes.length === 0 ? (
                <div className='text-center py-8 text-muted-foreground'>
                  <FileText className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>No notes yet. Create your first note to get started!</p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {notes.slice(0, 5).map((note: Note) => (
                    <div
                      key={note.id}
                      className='flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer'
                    >
                      <FileText className='h-5 w-5 text-muted-foreground' />
                      <div className='flex-1'>
                        <h3 className='font-medium'>{note.title}</h3>
                        <p className='text-sm text-muted-foreground'>
                          {new Date(note.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
