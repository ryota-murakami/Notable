'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { webAdapter, initializeSimpleStore } from '@notable/routing'
import { isTest } from '../lib/utils/environment'

interface RoutingProviderProps {
  children: ReactNode
}

/**
 * Routing provider that initializes the routing system for the web app
 * Uses simple store to avoid SSR/hydration issues
 */
export function RoutingProvider({ children }: RoutingProviderProps) {
  const [isClient, setIsClient] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true)
  }, [])
  
  useEffect(() => {
    // Wait for client-side hydration and avoid test mode
    const isTestMode = isTest()
    if (!isClient || isTestMode || isInitialized) {
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
}
