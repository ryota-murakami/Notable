'use client'

import { ROUTES } from '@notable/routing'
import {
  useSimpleCurrentRoute,
  useSimpleNavigation,
  useSimpleNavigationState,
} from '@notable/routing/src/simple-store'

/**
 * Hook for web-specific routing functionality
 * Provides a clean API for navigation within the web app
 */
export function useRouting() {
  const navigation = useSimpleNavigation()
  const currentRoute = useSimpleCurrentRoute()
  
  // Mock auth, title, and breadcrumb for now - we can implement these later
  const auth = { requiresAuth: false, isPublic: true }
  const title = currentRoute?.route?.meta?.title || currentRoute?.route?.name || 'Notable'
  const breadcrumb: any[] = []

  return {
    // Navigation actions
    navigate: navigation.navigate,
    replace: navigation.replace,
    goBack: navigation.goBack,
    goForward: navigation.goForward,
    reset: navigation.reset,

    // Current state
    current: navigation.current,
    history: navigation.history,
    state: navigation.state,

    // Route metadata
    auth,
    title,
    breadcrumb,

    // Route definitions for reference
    routes: ROUTES,
  }
}

/**
 * Hook to get just the current route information
 */
export function useCurrentRouteInfo() {
  const currentRoute = useSimpleCurrentRoute()

  return currentRoute
}

/**
 * Hook to get navigation history
 */
export function useNavigationHistoryWeb() {
  const navigation = useSimpleNavigation()

  return navigation.history
}

/**
 * Hook to get navigation state (loading, error, etc.)
 */
export function useNavigationStateWeb() {
  const navState = useSimpleNavigationState()

  return navState
}

/**
 * Convenience hook for navigation actions only
 */
export function useNavigationActions() {
  const navigation = useSimpleNavigation()

  return {
    navigate: navigation.navigate,
    replace: navigation.replace,
    goBack: navigation.goBack,
    goForward: navigation.goForward,
    reset: navigation.reset,
  }
}
