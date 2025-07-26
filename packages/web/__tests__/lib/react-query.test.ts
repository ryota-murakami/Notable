/**
 * React Query Configuration Tests
 */

import { createQueryClient, queryConfigs, queryKeys } from '@/lib/react-query'
import { QueryClient } from '@tanstack/react-query'

// Mock the toast hook to avoid import issues in tests
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}))

describe('React Query Configuration', () => {
  describe('createQueryClient', () => {
    let queryClient: QueryClient

    beforeEach(() => {
      queryClient = createQueryClient()
    })

    afterEach(() => {
      queryClient.clear()
    })

    it('should create a query client with correct defaults', () => {
      expect(queryClient).toBeInstanceOf(QueryClient)

      const defaultOptions = queryClient.getDefaultOptions()

      // Check query defaults
      expect(defaultOptions.queries?.staleTime).toBe(5 * 60 * 1000) // 5 minutes
      expect(defaultOptions.queries?.gcTime).toBe(10 * 60 * 1000) // 10 minutes
      expect(defaultOptions.queries?.refetchOnMount).toBe('always')
      expect(defaultOptions.queries?.refetchOnWindowFocus).toBe('always')
      expect(defaultOptions.queries?.refetchOnReconnect).toBe('always')
      expect(defaultOptions.queries?.networkMode).toBe('always')

      // Check mutation defaults
      expect(defaultOptions.mutations?.retry).toBe(1)
      expect(defaultOptions.mutations?.networkMode).toBe('online')
      expect(defaultOptions.mutations?.onError).toBeDefined()
    })

    it('should handle retry logic correctly for queries', () => {
      const retryFunction = queryClient.getDefaultOptions().queries
        ?.retry as Function

      // Should not retry on 401 (unauthorized)
      expect(retryFunction(1, { status: 401 })).toBe(false)

      // Should not retry on 403 (forbidden)
      expect(retryFunction(1, { status: 403 })).toBe(false)

      // Should retry on other errors up to 3 times
      expect(retryFunction(0, { status: 500 })).toBe(true)
      expect(retryFunction(1, { status: 500 })).toBe(true)
      expect(retryFunction(2, { status: 500 })).toBe(true)
      expect(retryFunction(3, { status: 500 })).toBe(false)
    })

    it('should handle mutation errors with toast notification', async () => {
      const { toast } = await import('@/hooks/use-toast')
      const onError = queryClient.getDefaultOptions().mutations
        ?.onError as Function

      // Test error with message
      const errorWithMessage = { message: 'Custom error message' }
      onError(errorWithMessage)

      // Wait for async import and toast call
      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(toast).toHaveBeenCalledWith({
        variant: 'destructive',
        title: 'Error',
        description: 'Custom error message',
      })
    })

    it('should handle different HTTP status codes in mutation errors', async () => {
      const { toast } = await import('@/hooks/use-toast')
      const onError = queryClient.getDefaultOptions().mutations
        ?.onError as Function

      // Test different status codes
      const testCases = [
        {
          status: 401,
          expectedMessage: 'Authentication required. Please sign in again.',
        },
        {
          status: 403,
          expectedMessage: 'You do not have permission to perform this action.',
        },
        {
          status: 404,
          expectedMessage: 'The requested resource was not found.',
        },
        {
          status: 429,
          expectedMessage: 'Too many requests. Please try again later.',
        },
        {
          status: 500,
          expectedMessage: 'Server error. Please try again later.',
        },
        {
          status: 503,
          expectedMessage:
            'Service temporarily unavailable. Please try again later.',
        },
        { status: 418, expectedMessage: 'Request failed with status 418' },
      ]

      for (const testCase of testCases) {
        onError({ status: testCase.status })

        // Wait for async import and toast call
        await new Promise((resolve) => setTimeout(resolve, 0))

        expect(toast).toHaveBeenCalledWith({
          variant: 'destructive',
          title: 'Error',
          description: testCase.expectedMessage,
        })
      }
    })
  })

  describe('queryKeys', () => {
    it('should provide consistent query keys', () => {
      expect(queryKeys.notes.all).toEqual(['notes'])
      expect(queryKeys.notes.list()).toEqual(['notes', 'list', undefined])
      expect(queryKeys.notes.list({ category: 'work' })).toEqual([
        'notes',
        'list',
        { category: 'work' },
      ])
      expect(queryKeys.notes.detail('123')).toEqual(['notes', 'detail', '123'])
      expect(queryKeys.notes.search('test')).toEqual([
        'notes',
        'search',
        'test',
      ])

      expect(queryKeys.user.all).toEqual(['user'])
      expect(queryKeys.user.profile()).toEqual(['user', 'profile'])
      expect(queryKeys.user.subscription()).toEqual(['user', 'subscription'])
      expect(queryKeys.user.usage()).toEqual(['user', 'usage'])

      expect(queryKeys.performance.all).toEqual(['performance'])
      expect(queryKeys.performance.vitals()).toEqual(['performance', 'vitals'])
      expect(queryKeys.performance.usage()).toEqual(['performance', 'usage'])
    })
  })

  describe('queryConfigs', () => {
    it('should provide different configuration presets', () => {
      // Fast queries
      expect(queryConfigs.fast.staleTime).toBe(10 * 60 * 1000) // 10 minutes
      expect(queryConfigs.fast.gcTime).toBe(30 * 60 * 1000) // 30 minutes

      // Realtime queries
      expect(queryConfigs.realtime.staleTime).toBe(0)
      expect(queryConfigs.realtime.gcTime).toBe(1 * 60 * 1000) // 1 minute
      expect(queryConfigs.realtime.refetchInterval).toBe(30 * 1000) // 30 seconds

      // Heavy queries
      expect(queryConfigs.heavy.staleTime).toBe(15 * 60 * 1000) // 15 minutes
      expect(queryConfigs.heavy.gcTime).toBe(60 * 60 * 1000) // 1 hour
      expect(queryConfigs.heavy.retry).toBe(1)

      // User queries
      expect(queryConfigs.user.staleTime).toBe(2 * 60 * 1000) // 2 minutes
      expect(queryConfigs.user.gcTime).toBe(5 * 60 * 1000) // 5 minutes
    })
  })
})
