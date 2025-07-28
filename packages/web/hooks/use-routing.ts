'use client'

import { ROUTES } from '@notable/routing'
import {
  useSimpleCurrentRoute,
  useSimpleNavigation,
  useSimpleNavigationState,
} from '@notable/routing/src/simple-store'
import { isTest } from '../lib/utils/environment'

/**
 * Hook for web-specific routing functionality
 * Provides a clean API for navigation within the web app
 */
export function useRouting() {
  // In test mode, return mock values to avoid routing initialization issues
  const isTestMode = isTest()

  if (isTestMode) {
    return {
      // Navigation actions (no-ops in test mode)
      navigate: () => {},
      replace: () => {},
      goBack: () => {},
      goForward: () => {},
      reset: () => {},

      // Current state (mock values)
      current: null,
      history: [],
      state: 'idle',

      // Route metadata (mock values)
      auth: { isAuthenticated: true, isLoading: false },
      title: 'Test Mode',
      breadcrumb: [],

      // Route definitions for reference
      routes: ROUTES,
    }
  }

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
  const isTestMode = isTest()

  if (isTestMode) {
    return null
  }

  return useSimpleCurrentRoute()
}

/**
 * Hook to get navigation history
 */
export function useNavigationHistoryWeb() {
  const isTestMode = isTest()

  if (isTestMode) {
    return []
  }

  const navigation = useSimpleNavigation()
  return navigation.history
}

/**
 * Hook to get navigation state (loading, error, etc.)
 */
export function useNavigationStateWeb() {
  const isTestMode = isTest()

  if (isTestMode) {
    return 'idle'
  }

  return useSimpleNavigationState()
}

/**
 * Convenience hook for navigation actions only
 */
export function useNavigationActions() {
  const isTestMode = isTest()

  if (isTestMode) {
    return {
      navigate: () => {},
      replace: () => {},
      goBack: () => {},
      goForward: () => {},
      reset: () => {},
    }
  }

  const navigation = useSimpleNavigation()

  return {
    navigate: navigation.navigate,
    replace: navigation.replace,
    goBack: navigation.goBack,
    goForward: navigation.goForward,
    reset: navigation.reset,
  }
}
