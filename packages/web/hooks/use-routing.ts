'use client'

import {
  ROUTES,
  useCurrentRoute,
  useNavigationHistory,
  useNavigationState,
  usePlatformNavigation,
  useRouteAuth,
  useRouteBreadcrumb,
  useRouteTitle,
} from '@notable/routing'
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

  const navigation = usePlatformNavigation()
  const auth = useRouteAuth()
  const title = useRouteTitle()
  const breadcrumb = useRouteBreadcrumb()

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

  return useCurrentRoute()
}

/**
 * Hook to get navigation history
 */
export function useNavigationHistoryWeb() {
  const isTestMode = isTest()

  if (isTestMode) {
    return []
  }

  return useNavigationHistory()
}

/**
 * Hook to get navigation state (loading, error, etc.)
 */
export function useNavigationStateWeb() {
  const isTestMode = isTest()

  if (isTestMode) {
    return 'idle'
  }

  return useNavigationState()
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

  const { navigate, replace, goBack, goForward, reset } =
    usePlatformNavigation()

  return {
    navigate,
    replace,
    goBack,
    goForward,
    reset,
  }
}
