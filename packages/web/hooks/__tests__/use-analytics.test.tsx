/**
 * Analytics hook tests
 * Tests for React analytics integration hooks
 */

import { act, renderHook } from '@testing-library/react'
import {
  useAnalytics,
  useComponentPerformance,
  useFeatureTracking,
  usePageTracking,
} from '../use-analytics'
import { analytics } from '@/lib/analytics'

// Mock the analytics module
jest.mock('@/lib/analytics', () => ({
  analytics: {
    performance: jest.fn(),
    interaction: jest.fn(),
    pageView: jest.fn(),
    usage: jest.fn(),
    error: jest.fn(),
    setConsent: jest.fn(),
    setUser: jest.fn(),
    updateConfig: jest.fn(),
    resetSession: jest.fn(),
    exportData: jest.fn(),
    deleteUserData: jest.fn(),
  },
}))

jest.mock('@/lib/performance', () => ({
  performanceMonitor: {
    measureAsync: jest.fn(),
  },
}))

// Mock performance.now
Object.defineProperty(global, 'performance', {
  value: {
    now: jest.fn(() => 1000),
  },
  writable: true,
})

describe('useAnalytics', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should provide analytics methods', () => {
    const { result } = renderHook(() => useAnalytics())

    expect(result.current).toHaveProperty('trackPerformance')
    expect(result.current).toHaveProperty('trackInteraction')
    expect(result.current).toHaveProperty('trackPageView')
    expect(result.current).toHaveProperty('trackFeatureUsage')
    expect(result.current).toHaveProperty('trackError')
    expect(result.current).toHaveProperty('setConsent')
    expect(result.current).toHaveProperty('setUser')
  })

  it('should track performance metrics', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackPerformance('page_load', 1200, 'ms', {
        page: '/home',
      })
    })

    expect(analytics.performance).toHaveBeenCalledWith(
      'page_load',
      1200,
      'ms',
      { page: '/home' }
    )
  })

  it('should track interactions', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackInteraction('click', 'save-button', {
        context: 'editor',
      })
    })

    expect(analytics.interaction).toHaveBeenCalledWith('click', 'save-button', {
      context: 'editor',
    })
  })

  it('should track clicks with shorthand method', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackClick('submit-button', { form: 'contact' })
    })

    expect(analytics.interaction).toHaveBeenCalledWith(
      'click',
      'submit-button',
      { form: 'contact' }
    )
  })

  it('should track form submissions', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackFormSubmit('contact-form', { fields: 3 })
    })

    expect(analytics.interaction).toHaveBeenCalledWith(
      'form_submit',
      'contact-form',
      { fields: 3 }
    )
  })

  it('should track page views', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackPageView('/notes/123', { noteTitle: 'My Note' })
    })

    expect(analytics.pageView).toHaveBeenCalledWith('/notes/123', {
      noteTitle: 'My Note',
    })
  })

  it('should track feature usage', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.trackFeatureUsage('note-export', 5000, { format: 'pdf' })
    })

    expect(analytics.usage).toHaveBeenCalledWith('note-export', 5000, {
      format: 'pdf',
    })
  })

  it('should track errors', () => {
    const { result } = renderHook(() => useAnalytics())
    const error = new Error('Test error')

    act(() => {
      result.current.trackError(error, { component: 'NoteEditor' }, 'high')
    })

    expect(analytics.error).toHaveBeenCalledWith(
      error,
      { component: 'NoteEditor' },
      'high'
    )
  })

  it('should set user consent', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.setConsent(true)
    })

    expect(analytics.setConsent).toHaveBeenCalledWith(true)
  })

  it('should set user information', () => {
    const { result } = renderHook(() => useAnalytics())

    act(() => {
      result.current.setUser('user123', { plan: 'premium' })
    })

    expect(analytics.setUser).toHaveBeenCalledWith('user123', {
      plan: 'premium',
    })
  })

  describe('Timer functionality', () => {
    beforeEach(() => {
      let time = 1000
      ;(global.performance.now as jest.Mock).mockImplementation(() => time++)
    })

    it('should provide timer functionality', () => {
      const { result } = renderHook(() => useAnalytics())

      let endTimer: () => number
      act(() => {
        endTimer = result.current.startTimer('operation_duration')
      })

      act(() => {
        const duration = endTimer()
        expect(duration).toBeGreaterThan(0)
      })

      expect(analytics.performance).toHaveBeenCalledWith(
        'operation_duration',
        expect.any(Number),
        'ms',
        undefined
      )
    })
  })
})

describe('useComponentPerformance', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(global.performance.now as jest.Mock).mockReturnValue(1000)
  })

  it('should track component lifetime', () => {
    let time = 1000
    ;(global.performance.now as jest.Mock).mockImplementation(
      () => (time += 100)
    )

    const { unmount } = renderHook(() =>
      useComponentPerformance('TestComponent')
    )

    act(() => {
      unmount()
    })

    expect(analytics.performance).toHaveBeenCalledWith(
      'component_TestComponent_lifetime',
      expect.any(Number),
      'ms',
      undefined
    )
  })
})

describe('usePageTracking', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should track page view on mount', () => {
    renderHook(() => usePageTracking('/dashboard', { user: 'test' }))

    expect(analytics.pageView).toHaveBeenCalledWith('/dashboard', {
      user: 'test',
    })
  })

  it('should track new page when props change', () => {
    const { rerender } = renderHook(
      ({ pageName, props }) => usePageTracking(pageName, props),
      {
        initialProps: { pageName: '/home', props: { section: 'main' } },
      }
    )

    expect(analytics.pageView).toHaveBeenCalledWith('/home', {
      section: 'main',
    })

    rerender({ pageName: '/profile', props: { section: 'settings' } })

    expect(analytics.pageView).toHaveBeenCalledWith('/profile', {
      section: 'settings',
    })
    expect(analytics.pageView).toHaveBeenCalledTimes(2)
  })
})

describe('useFeatureTracking', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    let time = 1000
    ;(global.performance.now as jest.Mock).mockImplementation(
      () => (time += 100)
    )
  })

  it('should provide feature tracking methods', () => {
    const { result } = renderHook(() => useFeatureTracking('note-editor'))

    expect(result.current).toHaveProperty('startTracking')
    expect(result.current).toHaveProperty('endTracking')
    expect(result.current).toHaveProperty('trackUsage')
  })

  it('should track feature start and end with duration', () => {
    const { result } = renderHook(() => useFeatureTracking('note-editor'))

    act(() => {
      result.current.startTracking({ mode: 'edit' })
    })

    expect(analytics.usage).toHaveBeenCalledWith(
      'note-editor_start',
      undefined,
      { mode: 'edit' }
    )

    act(() => {
      result.current.endTracking({ saved: true })
    })

    expect(analytics.usage).toHaveBeenCalledWith(
      'note-editor_end',
      expect.any(Number),
      { saved: true }
    )
  })

  it('should track general feature usage', () => {
    const { result } = renderHook(() => useFeatureTracking('search'))

    act(() => {
      result.current.trackUsage({ query: 'test', results: 5 })
    })

    expect(analytics.usage).toHaveBeenCalledWith('search', undefined, {
      query: 'test',
      results: 5,
    })
  })

  it('should handle end tracking without start', () => {
    const { result } = renderHook(() => useFeatureTracking('feature'))

    act(() => {
      result.current.endTracking()
    })

    // Should not call analytics if no start time
    expect(analytics.usage).not.toHaveBeenCalled()
  })
})
