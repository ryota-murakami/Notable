import { ROUTES } from '@notable/routing'
import { useRouter } from 'expo-router'

/**
 * Hook for mobile-specific routing functionality
 * Provides a clean API for navigation within the mobile app
 * 
 * NOTE: This is a stub implementation until mobile routing is properly integrated
 * with the refactored SSR-safe routing package
 */
export function useRouting() {
  const router = useRouter()

  return {
    // Navigation actions (using Expo Router directly)
    navigate: (route: string) => router.push(route),
    replace: (route: string) => router.replace(route),
    goBack: () => router.back(),
    goForward: () => {}, // Not supported in Expo Router
    reset: (route: string) => router.replace(route),

    // Current state (stub values)
    current: null,
    history: [],
    state: 'idle' as const,

    // Route metadata (stub values)
    auth: { isAuthenticated: false, isLoading: false },
    title: 'Notable',
    breadcrumb: [],

    // Route definitions for reference
    routes: ROUTES,
  }
}

/**
 * Hook to get just the current route information
 */
export function useCurrentRouteInfo() {
  return null
}

/**
 * Hook to get navigation history
 */
export function useNavigationHistoryMobile() {
  return []
}

/**
 * Hook to get navigation state (loading, error, etc.)
 */
export function useNavigationStateMobile() {
  return 'idle' as const
}

/**
 * Convenience hook for navigation actions only
 */
export function useNavigationActions() {
  const router = useRouter()

  return {
    navigate: (route: string) => router.push(route),
    replace: (route: string) => router.replace(route),
    goBack: () => router.back(),
    goForward: () => {}, // Not supported in Expo Router
    reset: (route: string) => router.replace(route),
  }
}
