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

  const syncConfig: SyncConfig = {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
    enableRealtime: true,
    enablePresence: true,
  }

  return (
    <SyncProvider config={syncConfig} storage={storage}>
      {children}
    </SyncProvider>
  )
}
