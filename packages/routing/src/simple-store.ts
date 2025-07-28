import { useEffect, useState } from 'react'
import type { NavigationStore, PlatformAdapter } from './types'
import { getRouteById } from './routes'

// Simple navigation state without Zustand to avoid SSR issues
const globalNavigationState: NavigationStore = {
  currentRoute: null,
  history: [],
  historyIndex: -1,
  isNavigating: false,
  error: null,
  navigate: () => {},
  replace: () => {},
  goBack: () => {},
  goForward: () => {},
  reset: () => {},
  canGoBack: () => false,
  canGoForward: () => false,
  getRoute: () => undefined,
  getCurrentPath: () => '/',
  parsePath: () => null,
}

let globalAdapter: PlatformAdapter | null = null
let globalParams: Record<string, string> = {}
let globalQuery: Record<string, string> = {}
let isInitialized = false
const listeners: Set<() => void> = new Set()

function notifyListeners() {
  listeners.forEach(callback => {
    try {
      callback()
    } catch (error) {
      console.error('Error in navigation listener:', error)
    }
  })
}

function updateState(updater: (state: NavigationStore) => void) {
  updater(globalNavigationState)
  notifyListeners()
}

// Initialize navigation with adapter
export function initializeSimpleNavigation(adapter: PlatformAdapter) {
  if (isInitialized) {
    console.warn('Navigation already initialized')
    return () => {}
  }

  globalAdapter = adapter
  isInitialized = true

  // Set up adapter listener
  const unsubscribe = adapter.subscribe((location) => {
    if (location.route) {
      const route = location.route
      updateState((state) => {
        state.currentRoute = { route, params: {} }
      })
    }
  })

  return () => {
    globalAdapter = null
    isInitialized = false
    unsubscribe()
  }
}

// Navigation actions
const navigationActions = {
  navigate: (routeId: string, params?: Record<string, string>) => {
    const route = getRouteById(routeId)
    if (!route) {
      console.warn(`Route '${routeId}' not found`)
      return
    }
    
    updateState((state) => {
      const routeEntry = { route, params: params || {} }
      state.currentRoute = routeEntry
      state.history.push(routeEntry)
      state.historyIndex = state.history.length - 1
    })
  },
  
  replace: (routeId: string, params?: Record<string, string>) => {
    const route = getRouteById(routeId)
    if (!route) {
      console.warn(`Route '${routeId}' not found`)
      return
    }
    
    updateState((state) => {
      const routeEntry = { route, params: params || {} }
      state.currentRoute = routeEntry
      if (state.history.length > 0) {
        state.history[state.historyIndex] = routeEntry
      } else {
        state.history.push(routeEntry)
        state.historyIndex = 0
      }
    })
  },
  
  goBack: () => {
    if (globalNavigationState.historyIndex > 0) {
      updateState((state) => {
        state.historyIndex--
        state.currentRoute = state.history[state.historyIndex]
      })
    }
  },
  
  goForward: () => {
    if (globalNavigationState.historyIndex < globalNavigationState.history.length - 1) {
      updateState((state) => {
        state.historyIndex++
        state.currentRoute = state.history[state.historyIndex]
      })
    }
  },
  
  reset: () => {
    updateState((state) => {
      state.currentRoute = null
      state.history = []
      state.historyIndex = -1
      state.isNavigating = false
      state.error = null
    })
  },
}

// Subscription management
type Subscriber = () => void
const subscribers = new Set<Subscriber>()

function notifySubscribers() {
  subscribers.forEach(callback => {
    try {
      callback()
    } catch (error) {
      console.error('Error in navigation subscriber:', error)
    }
  })
}

function subscribe(callback: Subscriber): () => void {
  subscribers.add(callback)
  return () => subscribers.delete(callback)
}

// Hooks
export function useSimpleNavigation() {
  const [, forceUpdate] = useState({})
  
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate({})
    })
    return unsubscribe
  }, [])
  
  return {
    ...navigationActions,
    current: globalNavigationState.currentRoute,
    history: globalNavigationState.history,
    state: globalNavigationState.isNavigating ? 'navigating' : 'idle',
  }
}

export function useSimpleCurrentRoute() {
  const [, forceUpdate] = useState({})
  
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate({})
    })
    return unsubscribe
  }, [])
  
  return globalNavigationState.currentRoute
}

export function useSimpleNavigationState() {
  const [, forceUpdate] = useState({})
  
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate({})
    })
    return unsubscribe
  }, [])
  
  return globalNavigationState.isNavigating ? 'navigating' : 'idle'
}

// Initialize store with platform adapter
export function initializeSimpleStore(adapter: PlatformAdapter) {
  // Set initial route based on current location
  const location = adapter.getCurrentLocation()
  if (location.route) {
    const route = location.route
    globalNavigationState.currentRoute = { route, params: {} }
    globalNavigationState.history = [globalNavigationState.currentRoute]
    globalNavigationState.historyIndex = 0
  }
  
  // Subscribe to location changes
  return adapter.subscribe((location) => {
    if (location.route) {
      const route = location.route
      globalNavigationState.currentRoute = { route, params: {} }
      notifySubscribers()
    }
  })
}

// Get current store state (for testing)
export function getSimpleStore() {
  return { ...globalNavigationState }
}
