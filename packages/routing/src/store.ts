import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'
import type { NavigationStore, PlatformAdapter } from './types'
import { getRouteById } from './routes'

interface NavigationStoreState extends NavigationStore {
  // Platform adapter
  adapter: PlatformAdapter | null
  // Current route parameters
  currentParams: Record<string, string>
  // Current route query parameters
  currentQuery: Record<string, string>
  // Internal state
  initialized: boolean
}

export const useNavigationStore = create<NavigationStoreState>()(
  subscribeWithSelector(
    immer((set, get) => ({
      // Initial state
      currentRoute: null,
      currentParams: {},
      currentQuery: {},
      history: [],
      historyIndex: -1,
      isNavigating: false,
      error: null,
      adapter: null,
      initialized: false,

      // Actions
      navigate: (routeId: string, params = {}, query = {}) => {
        const route = getRouteById(routeId)
        if (!route) {
          set((state) => {
            state.error = `Route not found: ${routeId}`
          })
          return
        }

        set((state) => {
          state.isNavigating = true
          state.error = null
        })

        try {
          // Use platform adapter if available
          const { adapter } = get()
          if (adapter) {
            adapter.navigate(route, params, query)
          }

          set((state) => {
            // Add to history
            const historyEntry = {
              route,
              params: { ...params },
              query: { ...query },
            }

            // Remove any forward history if we're not at the end
            if (state.historyIndex < state.history.length - 1) {
              state.history = state.history.slice(0, state.historyIndex + 1)
            }

            state.history.push(historyEntry)
            state.historyIndex = state.history.length - 1

            // Update current state
            state.currentRoute = route
            state.currentParams = { ...params }
            state.currentQuery = { ...query }
            state.isNavigating = false
          })
        } catch (error) {
          set((state) => {
            state.error = error instanceof Error ? error.message : String(error)
            state.isNavigating = false
          })
        }
      },

      replace: (routeId: string, params = {}, query = {}) => {
        const route = getRouteById(routeId)
        if (!route) {
          set((state) => {
            state.error = `Route not found: ${routeId}`
          })
          return
        }

        set((state) => {
          state.isNavigating = true
          state.error = null
        })

        try {
          const { adapter } = get()
          if (adapter) {
            adapter.navigate(route, params, query)
          }

          set((state) => {
            // Replace current history entry
            const historyEntry = {
              route,
              params: { ...params },
              query: { ...query },
            }

            if (state.historyIndex >= 0) {
              state.history[state.historyIndex] = historyEntry
            } else {
              state.history = [historyEntry]
              state.historyIndex = 0
            }

            // Update current state
            state.currentRoute = route
            state.currentParams = { ...params }
            state.currentQuery = { ...query }
            state.isNavigating = false
          })
        } catch (error) {
          set((state) => {
            state.error = error instanceof Error ? error.message : String(error)
            state.isNavigating = false
          })
        }
      },

      goBack: () => {
        const { historyIndex, history } = get()
        if (historyIndex > 0) {
          const previousEntry = history[historyIndex - 1]
          if (!previousEntry) return

          const { adapter } = get()

          if (adapter) {
            adapter.navigate(
              previousEntry.route,
              previousEntry.params,
              previousEntry.query,
            )
          }

          set((state) => {
            state.historyIndex = historyIndex - 1
            state.currentRoute = previousEntry.route
            state.currentParams = { ...previousEntry.params }
            state.currentQuery = { ...previousEntry.query }
          })
        }
      },

      goForward: () => {
        const { historyIndex, history } = get()
        if (historyIndex < history.length - 1) {
          const nextEntry = history[historyIndex + 1]
          if (!nextEntry) return

          const { adapter } = get()

          if (adapter) {
            adapter.navigate(nextEntry.route, nextEntry.params, nextEntry.query)
          }

          set((state) => {
            state.historyIndex = historyIndex + 1
            state.currentRoute = nextEntry.route
            state.currentParams = { ...nextEntry.params }
            state.currentQuery = { ...nextEntry.query }
          })
        }
      },

      reset: (routeId: string, params = {}, query = {}) => {
        const route = getRouteById(routeId)
        if (!route) {
          set((state) => {
            state.error = `Route not found: ${routeId}`
          })
          return
        }

        try {
          const { adapter } = get()
          if (adapter) {
            adapter.navigate(route, params, query)
          }

          set((state) => {
            const historyEntry = {
              route,
              params: { ...params },
              query: { ...query },
            }

            // Reset history
            state.history = [historyEntry]
            state.historyIndex = 0

            // Update current state
            state.currentRoute = route
            state.currentParams = { ...params }
            state.currentQuery = { ...query }
            state.error = null
          })
        } catch (error) {
          set((state) => {
            state.error = error instanceof Error ? error.message : String(error)
          })
        }
      },

      canGoBack: () => {
        const { historyIndex } = get()
        return historyIndex > 0
      },

      canGoForward: () => {
        const { historyIndex, history } = get()
        return historyIndex < history.length - 1
      },

      getRoute: (routeId: string) => {
        return getRouteById(routeId)
      },

      getCurrentPath: () => {
        const { adapter, currentRoute, currentParams, currentQuery } = get()
        if (!adapter || !currentRoute) return '/'
        return adapter.routeToPath(currentRoute, currentParams, currentQuery)
      },

      parsePath: (path: string) => {
        const { adapter } = get()
        if (!adapter) return null
        return adapter.pathToRoute(path)
      },
    })),
  ),
)

// Store management functions
export const initializeNavigation = (adapter: PlatformAdapter) => {
  useNavigationStore.setState((state) => {
    state.adapter = adapter
    state.initialized = true
  })

  // Set up route change listener
  const unsubscribe = adapter.onRouteChange((route, params, query) => {
    useNavigationStore.setState((state) => {
      // Only update if different from current
      if (
        state.currentRoute?.id !== route.id ||
        JSON.stringify(state.currentParams) !== JSON.stringify(params) ||
        JSON.stringify(state.currentQuery) !== JSON.stringify(query)
      ) {
        // This is an external navigation (e.g., browser back/forward, deep link)
        // Update store without triggering adapter navigation
        const historyEntry = {
          route,
          params: { ...params },
          query: { ...query },
        }

        // Check if this matches any existing history entry
        const existingIndex = state.history.findIndex(
          (entry) =>
            entry.route.id === route.id &&
            JSON.stringify(entry.params) === JSON.stringify(params) &&
            JSON.stringify(entry.query) === JSON.stringify(query),
        )

        if (existingIndex >= 0) {
          // Navigate to existing history entry
          state.historyIndex = existingIndex
        } else {
          // Add new entry to history
          if (state.historyIndex < state.history.length - 1) {
            state.history = state.history.slice(0, state.historyIndex + 1)
          }
          state.history.push(historyEntry)
          state.historyIndex = state.history.length - 1
        }

        state.currentRoute = route
        state.currentParams = { ...params }
        state.currentQuery = { ...query }
      }
    })
  })

  // Initialize with current route
  const currentRouteInfo = adapter.getCurrentRoute()
  const currentRoute = currentRouteInfo.route
  if (currentRoute !== null) {
    useNavigationStore.setState((state) => {
      const historyEntry = {
        route: currentRoute,
        params: { ...currentRouteInfo.params },
        query: { ...currentRouteInfo.query },
      }

      state.history = [historyEntry]
      state.historyIndex = 0
      state.currentRoute = currentRoute
      state.currentParams = { ...currentRouteInfo.params }
      state.currentQuery = { ...currentRouteInfo.query }
    })
  }

  return unsubscribe
}

// Selector hooks for better performance
export const useCurrentRoute = () =>
  useNavigationStore((state) => ({
    route: state.currentRoute,
    params: state.currentParams,
    query: state.currentQuery,
  }))

export const useNavigationHistory = () =>
  useNavigationStore((state) => ({
    history: state.history,
    historyIndex: state.historyIndex,
    canGoBack: state.historyIndex > 0,
    canGoForward: state.historyIndex < state.history.length - 1,
  }))

export const useNavigationState = () =>
  useNavigationStore((state) => ({
    isNavigating: state.isNavigating,
    error: state.error,
    initialized: state.initialized,
  }))

// Navigation actions hook
export const useNavigation = () => {
  const navigate = useNavigationStore((state) => state.navigate)
  const replace = useNavigationStore((state) => state.replace)
  const goBack = useNavigationStore((state) => state.goBack)
  const goForward = useNavigationStore((state) => state.goForward)
  const reset = useNavigationStore((state) => state.reset)

  return {
    navigate,
    replace,
    goBack,
    goForward,
    reset,
  }
}
