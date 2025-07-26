'use client'

import { useEffect, useState } from 'react'
import { SyncProvider, WebStorageAdapter, SyncConfig } from '@notable/sync'

interface SyncProviderWrapperProps {
  children: React.ReactNode
}

export function SyncProviderWrapper({ children }: SyncProviderWrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const [storage, setStorage] = useState<WebStorageAdapter | null>(null)

  useEffect(() => {
    setIsClient(true)
    setStorage(new WebStorageAdapter())
  }, [])

  if (!isClient || !storage) {
    return <>{children}</>
  }

  // In test mode, skip sync provider initialization
  const isTestMode =
    process.env.NODE_ENV === 'test' ||
    (typeof window !== 'undefined' &&
      document.cookie.includes('dev-auth-bypass=true'))

  const syncConfig: SyncConfig = {
    supabaseUrl:
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',
    userId: 'user-placeholder', // TODO: Get from auth context
    deviceId: 'web-device', // TODO: Generate unique device ID
    deviceInfo: {
      id: 'web-device',
      name: 'Web Browser',
      type: 'web',
      user_agent: navigator.userAgent,
      last_seen: new Date().toISOString(),
      is_online: true,
    },
    enableRealtime: !isTestMode, // Disable realtime in test mode
    enablePresence: !isTestMode, // Disable presence in test mode
  }

  return (
    <SyncProvider config={syncConfig} storage={storage} autoInit={!isTestMode}>
      {children}
    </SyncProvider>
  )
}
