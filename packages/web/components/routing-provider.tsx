'use client'

import { useEffect, ReactNode, Suspense } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { initializePlatformRouting } from '@notable/routing'
import { webAdapter } from '@notable/routing'

interface RoutingProviderProps {
  children: ReactNode
}

function RoutingProviderInner({ children }: RoutingProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize platform routing for web
    const { cleanup } = initializePlatformRouting('web', {
      router,
    })

    // Update the web adapter with current location
    webAdapter.setRouter(router)
    webAdapter.setCurrentLocation(pathname, searchParams)

    return cleanup
  }, [router, pathname, searchParams])

  // Update current location when pathname or search params change
  useEffect(() => {
    webAdapter.setCurrentLocation(pathname, searchParams)
  }, [pathname, searchParams])

  return <>{children}</>
}

export function RoutingProvider({ children }: RoutingProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoutingProviderInner>{children}</RoutingProviderInner>
    </Suspense>
  )
}
