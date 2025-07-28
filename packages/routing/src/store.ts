/**
 * Navigation store implementation using simple state management
 * Replaced Zustand to avoid SSR/hydration issues
 */

import type { NavigationStore, PlatformAdapter } from './types'
import { initializeSimpleStore } from './simple-store'

// Re-export simple store functionality
export { initializeSimpleStore } from './simple-store'

// Legacy compatibility - this store is no longer used
export function createNavigationStore(adapter: PlatformAdapter): NavigationStore {
  // Initialize the simple store instead
  initializeSimpleStore(adapter)
  
  // Return a minimal store interface for compatibility
  return {
    currentRoute: null,
    history: [],
    historyIndex: -1,
    isNavigating: false,
    error: null,
    navigate: () => {},
    goBack: () => {},
    goForward: () => {},
    replace: () => {},
    reset: () => {},
    canGoBack: () => false,
    canGoForward: () => false,
    getRoute: () => undefined,
    getCurrentPath: () => '/',
    parsePath: () => null,
  }
}
