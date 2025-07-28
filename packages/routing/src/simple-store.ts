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
}

// Navigation actions
const navigationActions = {
  navigate: (routeId: string, params?: Record<string, any>) => {
    const route = getRouteById(routeId)
    if (!route) {
      console.warn(`Route '${routeId}' not found`)
      return
    }
    
    globalNavigationState.currentRoute = { route, params: params || {} }
    globalNavigationState.history.push(globalNavigationState.currentRoute)
    globalNavigationState.historyIndex = globalNavigationState.history.length - 1
    notifySubscribers()
  },
  
  replace: (routeId: string, params?: Record<string, any>) => {
    const route = getRouteById(routeId)
    if (!route) {
      console.warn(`Route '${routeId}' not found`)
      return
    }
    
    globalNavigationState.currentRoute = { route, params: params || {} }
    if (globalNavigationState.history.length > 0) {
      globalNavigationState.history[globalNavigationState.historyIndex] = globalNavigationState.currentRoute
    } else {
      globalNavigationState.history.push(globalNavigationState.currentRoute)
      globalNavigationState.historyIndex = 0
    }
    notifySubscribers()
  },
  
  goBack: () => {
    if (globalNavigationState.historyIndex > 0) {
      globalNavigationState.historyIndex--
      globalNavigationState.currentRoute = globalNavigationState.history[globalNavigationState.historyIndex]
      notifySubscribers()
    }
  },
  
  goForward: () => {
    if (globalNavigationState.historyIndex < globalNavigationState.history.length - 1) {
      globalNavigationState.historyIndex++
      globalNavigationState.currentRoute = globalNavigationState.history[globalNavigationState.historyIndex]
      notifySubscribers()
    }
  },
  
  reset: () => {
    globalNavigationState.currentRoute = null
    globalNavigationState.history = []
    globalNavigationState.historyIndex = -1
    globalNavigationState.isNavigating = false
    globalNavigationState.error = null
    notifySubscribers()
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
