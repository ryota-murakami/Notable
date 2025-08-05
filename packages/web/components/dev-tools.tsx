'use client'

import { useEffect, useState } from 'react'
import { isDevModeActive, setupDevMode, toggleDevMode } from '@/utils/dev-setup'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function DevTools() {
  const [isOpen, setIsOpen] = useState(false)
  const [devModeActive, setDevModeActive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setupDevMode()
    setDevModeActive(isDevModeActive())
  }, [])

  const handleToggleDevMode = () => {
    const newState = toggleDevMode()
    setDevModeActive(newState)
    // Refresh the page to apply changes
    if (newState) {
      window.location.reload()
    }
  }

  const handleDebugMockStore = () => {
    if (typeof window !== 'undefined') {
      import('@/utils/mock-data-store').then(({ default: mockDataStore }) => {
        mockDataStore.debug()
      })
    }
  }

  if (!mounted || process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <>
      {/* Dev Tools Trigger */}
      <div className='fixed bottom-4 right-4 z-50'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setIsOpen(true)}
          className='bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-300'
        >
          🛠️ Dev
        </Button>
      </div>

      {/* Dev Tools Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <DialogTitle>Development Tools</DialogTitle>
            <DialogDescription>
              Tools for debugging and testing the Notable app
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-4'>
            {/* Mock Mode Status */}
            <div className='p-3 rounded-lg bg-gray-50'>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='font-medium text-sm'>Mock API Mode</div>
                  <div className='text-xs text-gray-600'>
                    {devModeActive ? 'Active' : 'Inactive'}
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      devModeActive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <Button
                    size='sm'
                    variant={devModeActive ? 'destructive' : 'default'}
                    onClick={handleToggleDevMode}
                  >
                    {devModeActive ? 'Disable' : 'Enable'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Environment Info */}
            <div className='p-3 rounded-lg bg-blue-50'>
              <div className='font-medium text-sm mb-2'>Environment</div>
              <div className='text-xs space-y-1'>
                <div>
                  API Mocking:{' '}
                  {process.env.NEXT_PUBLIC_API_MOCKING || 'disabled'}
                </div>
                <div>
                  Template Bypass:{' '}
                  {process.env.NEXT_PUBLIC_BYPASS_TEMPLATE_PICKER || 'disabled'}
                </div>
                <div>
                  Dev Auth Cookie:{' '}
                  {typeof window !== 'undefined' &&
                  document.cookie.includes('dev-auth-bypass=true')
                    ? 'set'
                    : 'not set'}
                </div>
              </div>
            </div>

            {/* Debug Actions */}
            <div className='space-y-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={handleDebugMockStore}
                className='w-full'
              >
                Debug Mock Data Store
              </Button>

              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  localStorage.clear()
                  console.info('🧹 LocalStorage cleared')
                }}
                className='w-full'
              >
                Clear LocalStorage
              </Button>

              <Button
                variant='outline'
                size='sm'
                onClick={() => window.location.reload()}
                className='w-full'
              >
                Reload Page
              </Button>
            </div>

            {/* Quick Test Actions */}
            {devModeActive && (
              <div className='p-3 rounded-lg bg-green-50'>
                <div className='font-medium text-sm mb-2'>Quick Tests</div>
                <div className='space-y-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/tags')
                        const data = await response.json()
                        console.info('📋 Tags API response:', data)
                      } catch (error) {
                        console.error('❌ Tags API error:', error)
                      }
                    }}
                    className='w-full text-xs'
                  >
                    Test Tags API
                  </Button>

                  <Button
                    variant='outline'
                    size='sm'
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/tags', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            name: `test-${Date.now()}`,
                            color: '#ff0000',
                            description: 'Auto-created test tag',
                          }),
                        })
                        const data = await response.json()
                        console.info('✅ Tag creation response:', data)
                      } catch (error) {
                        console.error('❌ Tag creation error:', error)
                      }
                    }}
                    className='w-full text-xs'
                  >
                    Create Test Tag
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
