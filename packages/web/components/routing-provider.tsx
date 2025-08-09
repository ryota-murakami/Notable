'use client'

import React, { type ReactNode, useEffect, useState } from 'react'
import { initializeSimpleStore, webAdapter } from '@notable/routing'

interface RoutingProviderProps {
  children: ReactNode
}

/**
 * Routing provider that initializes the routing system for the web app
 * Uses simple store to avoid SSR/hydration issues
 */
const RoutingProvider = React.memo(({ children }: RoutingProviderProps) => {
  const [isClient, setIsClient] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Wait for client-side hydration
    if (!isClient || isInitialized) {
      return
    }

    // Initialize the simple store with web adapter
    const unsubscribe = initializeSimpleStore(webAdapter)
    setIsInitialized(true)

    return () => {
      unsubscribe()
      webAdapter.dispose()
    }
  }, [isClient, isInitialized])

  return <>{children}</>
})

RoutingProvider.displayName = 'RoutingProvider'

export { RoutingProvider }
