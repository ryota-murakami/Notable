import { SearchEngine } from '../search-engine'
import type { Note } from '@/types/note'

// Mock Supabase client
jest.mock('@/utils/supabase/client', () => ({
  createClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn(() =>
        Promise.resolve({
          data: { user: { id: 'test-user-id' } },
          error: null,
        })
      ),
    },
    rpc: jest.fn(() =>
      Promise.resolve({
        data: [],
        error: null,
      })
    ),
  })),
}))

describe('SearchEngine', () => {
  const mockNotes: Note[] = [
    {
      id: '1',
      title: 'Project Meeting Notes',
      content: 'Discussed the new feature roadmap for Q1 2024',
      tags: ['meeting', 'project', '2024'],
      userId: 'test-user',
      parentId: null,
      isFolder: false,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      title: 'Technical Documentation',
      content: 'API endpoints and database schema design',
      tags: ['technical', 'api', 'database'],
      userId: 'test-user',
      parentId: null,
      isFolder: false,
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
    {
      id: '3',
      title: 'Personal Notes',
      content: 'Ideas for the weekend project',
      tags: ['personal', 'ideas'],
      userId: 'test-user',
      parentId: null,
      isFolder: false,
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
    },
    {
      id: 'folder-1',
      title: 'Work Folder',
      content: '',
      tags: [],
      userId: 'test-user',
      parentId: null,
      isFolder: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ]

  let searchEngine: SearchEngine

  beforeEach(() => {
    searchEngine = new SearchEngine(mockNotes)
  })

  describe('basic search', () => {
    it('should find notes by title', async () => {
      const results = await searchEngine.search('meeting')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
      expect(results[0].matchedFields).toContain('title')
    })

    it('should find notes by content', async () => {
      const results = await searchEngine.search('database')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('2')
      expect(results[0].matchedFields).toContain('content')
    })

    it('should find notes by tag', async () => {
      const results = await searchEngine.search('technical')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('2')
    })

    it('should exclude folders from search', async () => {
      const results = await searchEngine.search('folder')

      expect(results).toHaveLength(0)
    })

    it('should return empty results for empty query', async () => {
      const results = await searchEngine.search('')

      expect(results).toHaveLength(0)
    })
  })

  describe('field-specific search', () => {
    it('should search by title field only', async () => {
      const results = await searchEngine.search('title:documentation')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('2')
      expect(results[0].matchedFields).toContain('title')
    })

    it('should search by content field only', async () => {
      const results = await searchEngine.search('content:roadmap')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
      expect(results[0].matchedFields).toContain('content')
    })

    it('should search by tag field', async () => {
      const results = await searchEngine.search('tag:meeting')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
      expect(results[0].matchedFields).toContain('tags')
    })

    it('should handle multiple field searches', async () => {
      const results = await searchEngine.search('title:project content:feature')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
    })
  })

  describe('boolean operators', () => {
    it('should handle AND operator', async () => {
      const results = await searchEngine.search('project AND roadmap')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
    })

    it('should handle OR operator', async () => {
      const results = await searchEngine.search('meeting OR database')

      expect(results).toHaveLength(2)
      const ids = results.map((r) => r.note.id)
      expect(ids).toContain('1')
      expect(ids).toContain('2')
    })

    it('should handle NOT operator', async () => {
      // First search for "notes", then exclude "personal"
      const allNotesResults = await searchEngine.search('notes')
      const notPersonalResults = await searchEngine.search('notes NOT personal')

      // Should have fewer results after applying NOT
      expect(notPersonalResults.length).toBeLessThan(allNotesResults.length)

      // Should not contain the personal notes
      const ids = notPersonalResults.map((r) => r.note.id)
      expect(ids).not.toContain('3')
    })

    it('should handle minus as NOT operator', async () => {
      // First search for "notes", then exclude "personal"
      const allNotesResults = await searchEngine.search('notes')
      const notPersonalResults = await searchEngine.search('notes -personal')

      // Should have fewer results after applying NOT
      expect(notPersonalResults.length).toBeLessThan(allNotesResults.length)

      // Should not contain the personal notes
      const ids = notPersonalResults.map((r) => r.note.id)
      expect(ids).not.toContain('3')
    })
  })

  describe('regex search', () => {
    it('should find notes using regex pattern', async () => {
      const results = await searchEngine.search('/meet.*/')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
    })

    it('should handle complex regex patterns', async () => {
      const results = await searchEngine.search('/\\d{4}/')

      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('1')
    })

    it('should handle invalid regex gracefully', async () => {
      const results = await searchEngine.search('/[invalid/')

      expect(results).toHaveLength(0)
    })
  })

  describe('scoring and ranking', () => {
    it('should rank title matches higher than content matches', async () => {
      const results = await searchEngine.search('notes')

      expect(results.length).toBeGreaterThan(0)
      // Title match should have higher score
      const titleMatch = results.find((r) => r.note.title?.includes('Notes'))
      const contentMatch = results.find(
        (r) =>
          r.note.content?.includes('notes') && !r.note.title?.includes('Notes')
      )

      if (titleMatch && contentMatch) {
        expect(titleMatch.score).toBeGreaterThan(contentMatch.score)
      }
    })

    it('should sort results by score', async () => {
      const results = await searchEngine.search('notes')

      for (let i = 1; i < results.length; i++) {
        expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score)
      }
    })
  })

  describe('updateNotes', () => {
    it('should update search index when notes change', async () => {
      const newNote: Note = {
        id: '4',
        title: 'New Important Note',
        content: 'This is a new note about important stuff',
        tags: ['important', 'new'],
        userId: 'test-user',
        parentId: null,
        isFolder: false,
        createdAt: '2024-01-04T00:00:00Z',
        updatedAt: '2024-01-04T00:00:00Z',
      }

      searchEngine.updateNotes([...mockNotes, newNote])

      const results = await searchEngine.search('important')
      expect(results).toHaveLength(1)
      expect(results[0].note.id).toBe('4')
    })
  })

  describe('search options', () => {
    it('should limit results when limit option is provided', async () => {
      const results = await searchEngine.search('notes', { limit: 1 })

      expect(results).toHaveLength(1)
    })

    it('should fallback to client search when server search fails', async () => {
      // Server search is mocked to return empty results
      const results = await searchEngine.search('meeting', {
        useServerSearch: true,
      })

      // Should still find results via client search
      expect(results.length).toBeGreaterThan(0)
    })
  })
})
