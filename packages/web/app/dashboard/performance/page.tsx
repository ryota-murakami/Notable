/**
 * Performance Dashboard Page
 * Real-time performance monitoring and optimization insights
 */

import { Suspense } from 'react'
import { Metadata } from 'next'
import { PerformanceDashboard } from '@/components/performance/performance-dashboard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Activity } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Performance Dashboard - Notable',
  description:
    'Monitor and optimize application performance with real-time metrics',
}

function PerformanceHeader() {
  return (
    <header className='border-b bg-card/50 backdrop-blur'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link href='/dashboard'>
              <Button variant='ghost' size='sm'>
                <ArrowLeft className='h-4 w-4 mr-2' />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className='text-2xl font-bold flex items-center'>
                <Activity className='h-6 w-6 mr-2' />
                Performance Dashboard
              </h1>
              <p className='text-muted-foreground'>
                Monitor application performance and optimize user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function PerformanceLoading() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid gap-6'>
        <div className='animate-pulse space-y-4'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='h-32 bg-muted rounded-lg' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PerformancePage() {
  return (
    <div className='min-h-screen bg-background'>
      <PerformanceHeader />

      <main className='container mx-auto px-4 py-8'>
        <Suspense fallback={<PerformanceLoading />}>
          <PerformanceDashboard />
        </Suspense>
      </main>
    </div>
  )
}
