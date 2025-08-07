'use client'

import React, { useEffect, useState } from 'react'
import { type SyncConfig, SyncProvider, WebStorageAdapter } from '@notable/sync'
import { env } from '@/env'

interface SyncProviderWrapperProps {
  children: React.ReactNode
}

const SyncProviderWrapper = React.memo(
  ({ children }: SyncProviderWrapperProps) => {
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
      supabaseUrl:
        env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      supabaseKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
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
      <SyncProvider config={syncConfig} storage={storage} autoInit={true}>
        {children}
      </SyncProvider>
    )
  }
)

SyncProviderWrapper.displayName = 'SyncProviderWrapper'

export { SyncProviderWrapper }
