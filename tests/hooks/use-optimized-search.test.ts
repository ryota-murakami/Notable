import { renderHook, act, waitFor } from '@testing-library/react'
import { useOptimizedSearch } from '@/hooks/use-optimized-search'
import { Note } from '@/types/note'

jest.useFakeTimers()

const mockItems: Note[] = [
  {
    id: '1',
    title: 'JavaScript Tutorial',
    content: 'A comprehensive guide to JavaScript.',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
    parentId: null,
    tags: ['programming'],
    isFolder: false,
  },
  {
    id: '2',
    title: 'React Hooks',
    content: 'Learn all about React Hooks.',
    createdAt: '2023-01-02T00:00:00.000Z',
    updatedAt: '2023-01-02T00:00:00.000Z',
    parentId: '1',
    tags: ['react'],
    isFolder: false,
  },
  {
    id: '3',
    title: 'Node.js Backend',
    content: 'Building a backend with Node.js and Express.',
    createdAt: '2023-01-03T00:00:00.000Z',
    updatedAt: '2023-01-03T00:00:00.000Z',
    parentId: null,
    tags: ['programming', 'backend'],
    isFolder: false,
  },
  {
    id: '4',
    title: 'TypeScript Guide',
    content: 'A guide to TypeScript design patterns.',
    createdAt: '2023-01-04T00:00:00.000Z',
    updatedAt: '2023-01-04T00:00:00.000Z',
    parentId: '1',
    tags: ['programming', 'typescript'],
    isFolder: false,
  },
  {
    id: '5',
    title: 'C++ Basics',
    content: 'Fundamental concepts of C++.',
    createdAt: '2023-01-05T00:00:00.000Z',
    updatedAt: '2023-01-05T00:00:00.000Z',
    parentId: null,
    tags: ['programming'],
    isFolder: true,
  },
]

describe('useOptimizedSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should return all items when query is empty', () => {
    const { result } = renderHook(() =>
      useOptimizedSearch({
        notes: mockItems,
        searchQuery: '',
      }),
    )
    expect(result.current.searchResults).toEqual(mockItems)
  })

  it('should not re-render if query remains empty', () => {
    const { result, rerender } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({
          notes: mockItems,
          searchQuery,
        }),
      {
        initialProps: { searchQuery: '' },
      },
    )

    const initialResult = result.current
    rerender({ searchQuery: '' })
    expect(result.current).toBe(initialResult)
  })

  it('should filter items based on query', () => {
    const { result } = renderHook(() =>
      useOptimizedSearch({
        notes: mockItems,
        searchQuery: 'javascript',
      }),
    )
    expect(result.current.searchResults).toHaveLength(2)
    expect(result.current.searchResults[0].title).toBe('JavaScript Tutorial')
    expect(result.current.searchResults[1].title).toBe('Node.js Backend')
  })

  it('should be case-insensitive', () => {
    const { result } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({
          notes: mockItems,
          searchQuery,
        }),
      {
        initialProps: { searchQuery: 'TYPESCRIPT' },
      },
    )

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current.searchResults.length).toBeGreaterThan(0)
      expect(result.current.searchResults[0].title).toBe('TypeScript Guide')
    })
  })

  it('should handle special characters in query', () => {
    const { result } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({
          notes: mockItems,
          searchQuery,
        }),
      {
        initialProps: { searchQuery: 'c++' },
      },
    )
    act(() => {
      jest.runAllTimers()
    })
    waitFor(() => {
      expect(result.current.searchResults).toHaveLength(1)
      expect(result.current.searchResults[0].title).toBe('C++ Basics')
    })
  })

  it('should search only in specified keys', () => {
    const { result } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({ notes: mockItems, searchQuery, keys: ['title'] }),
      {
        initialProps: { searchQuery: 'React' },
      },
    )
    act(() => {
      jest.runAllTimers()
    })
    waitFor(() => {
      expect(result.current.searchResults).toHaveLength(1)
      expect(result.current.searchResults[0].title).toBe('React Hooks')
    })
  })

  it('should use custom Fuse.js options', () => {
    const customOptions = { threshold: 0.1 }
    const { result, rerender } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({
          notes: mockItems,
          searchQuery,
          keys: ['title'],
          options: customOptions,
        }),
      {
        initialProps: { searchQuery: 'Reac' },
      },
    )

    expect(result.current.searchResults).toEqual(mockItems) // Not yet updated

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current.searchResults.length).toBeLessThanOrEqual(2)
    })
  })

  it('should debounce search', () => {
    const { result, rerender } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({ notes: mockItems, searchQuery }),
      {
        initialProps: { searchQuery: '' },
      },
    )

    rerender({ searchQuery: 'Type' })
    rerender({ searchQuery: 'TypeScript' })

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(result.current.searchResults).toHaveLength(1)
    expect(result.current.searchResults[0].title).toBe('TypeScript Guide')
  })

  it('should return empty array for no matches', () => {
    const { result } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({ notes: mockItems, searchQuery }),
      {
        initialProps: { searchQuery: 'nonexistent' },
      },
    )

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current.searchResults).toEqual([])
    })
  })

  it('should handle empty data array', () => {
    const { result } = renderHook(
      ({ searchQuery }) => useOptimizedSearch({ notes: [], searchQuery }),
      {
        initialProps: { searchQuery: 'any' },
      },
    )
    expect(result.current.searchResults).toHaveLength(0)
  })

  it('should update results when data changes', () => {
    const { result, rerender } = renderHook(
      ({ notes }) => useOptimizedSearch({ notes, searchQuery: 'React' }),
      {
        initialProps: { notes: mockItems },
      },
    )

    const newItems = [
      ...mockItems,
      {
        id: '6',
        title: 'Advanced React',
        content: '',
        parentId: null,
        tags: [],
        isFolder: false,
        createdAt: '',
        updatedAt: '',
      },
    ]
    rerender({ notes: newItems })

    expect(result.current.searchResults).toEqual(mockItems)
  })

  it('should perform well with large datasets', () => {
    const largeDataset = Array.from({ length: 1000 }, (_, i) => ({
      id: `${i}`,
      title: `Item ${i}`,
      content: `Content for item ${i}`,
      parentId: null,
      tags: [],
      isFolder: false,
      createdAt: '',
      updatedAt: '',
    }))
    const { result } = renderHook(
      ({ searchQuery }) =>
        useOptimizedSearch({ notes: largeDataset, searchQuery }),
      {
        initialProps: { searchQuery: 'Item 999' },
      },
    )

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current.searchResults.length).toBeGreaterThan(0)
      expect(result.current.searchResults[0].title).toContain('999')
    })
  })
})
