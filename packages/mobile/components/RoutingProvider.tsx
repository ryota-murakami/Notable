import { type ReactNode, useEffect } from 'react'
import { usePathname, useRouter } from 'expo-router'
import { initializePlatformRouting, mobileAdapter } from '@notable/routing'

interface RoutingProviderProps {
  children: ReactNode
}

export function RoutingProvider({ children }: RoutingProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Initialize platform routing for mobile
    const { cleanup } = initializePlatformRouting('mobile', {
      router,
    })

    // Update the mobile adapter with current location
    mobileAdapter.setRouter(router)
    mobileAdapter.setCurrentLocation(pathname)

    return cleanup
  }, [router, pathname])

  // Update current location when pathname changes
  useEffect(() => {
    mobileAdapter.setCurrentLocation(pathname)
  }, [pathname])

  return <>{children}</>
}
