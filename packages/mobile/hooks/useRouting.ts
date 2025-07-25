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

/**
 * Hook for mobile-specific routing functionality
 * Provides a clean API for navigation within the mobile app
 */
export function useRouting() {
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
  return useCurrentRoute()
}

/**
 * Hook to get navigation history
 */
export function useNavigationHistoryMobile() {
  return useNavigationHistory()
}

/**
 * Hook to get navigation state (loading, error, etc.)
 */
export function useNavigationStateMobile() {
  return useNavigationState()
}

/**
 * Convenience hook for navigation actions only
 */
export function useNavigationActions() {
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
