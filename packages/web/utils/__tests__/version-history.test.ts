import { VersionHistory } from '../version-history'

// Mock Supabase client
const mockSupabase = {
  rpc: jest.fn(),
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      eq: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(),
        })),
        order: jest.fn(() => ({
          then: jest.fn(),
        })),
      })),
      update: jest.fn(() => ({
        eq: jest.fn(() => ({
          eq: jest.fn(),
        })),
      })),
    })),
  })),
  auth: {
    getUser: jest.fn(),
  },
}

jest.mock('@/utils/supabase/client', () => ({
  createClient: () => mockSupabase,
}))

// Mock toast
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}))

describe('VersionHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getHistory', () => {
    it('should fetch version history for a note', async () => {
      const mockData = [
        {
          version_id: '1',
          version_number: 2,
          title: 'Test Note v2',
          created_at: '2025-07-24T21:00:00Z',
          created_by: 'user-123',
          is_milestone: false,
        },
        {
          version_id: '2',
          version_number: 1,
          title: 'Test Note v1',
          created_at: '2025-07-24T20:00:00Z',
          created_by: 'user-123',
          is_milestone: true,
        },
      ]

      mockSupabase.rpc.mockResolvedValueOnce({
        data: mockData,
        error: null,
      })

      const result = await VersionHistory.getHistory('note-123')

      expect(mockSupabase.rpc).toHaveBeenCalledWith(
        'get_note_version_history',
        {
          p_note_id: 'note-123',
          p_limit: 50,
          p_offset: 0,
        }
      )
      expect(result).toEqual(mockData)
    })

    it('should handle errors when fetching history', async () => {
      mockSupabase.rpc.mockResolvedValueOnce({
        data: null,
        error: { message: 'Database error' },
      })

      await expect(VersionHistory.getHistory('note-123')).rejects.toThrow()
    })
  })

  describe('getVersion', () => {
    it('should fetch a specific version', async () => {
      const mockVersion = {
        id: 'version-123',
        note_id: 'note-123',
        version_number: 2,
        title: 'Test Note v2',
        content: { type: 'doc', content: [] },
        created_by: 'user-123',
        created_at: '2025-07-24T21:00:00Z',
        is_milestone: false,
        metadata: { word_count: 100 },
      }

      const mockSelect = {
        eq: jest.fn(() => ({
          eq: jest.fn(() => ({
            single: jest.fn().mockResolvedValue({
              data: mockVersion,
              error: null,
            }),
          })),
        })),
      }

      mockSupabase.from.mockReturnValueOnce({
        select: jest.fn(() => mockSelect),
      })

      const result = await VersionHistory.getVersion('note-123', 2)

      expect(result).toEqual({
        id: mockVersion.id,
        noteId: mockVersion.note_id,
        versionNumber: mockVersion.version_number,
        title: mockVersion.title,
        content: mockVersion.content,
        contentDiff: undefined,
        versionName: undefined,
        versionMessage: undefined,
        createdBy: mockVersion.created_by,
        createdAt: mockVersion.created_at,
        isMilestone: mockVersion.is_milestone,
        metadata: mockVersion.metadata,
      })
    })

    it('should return null for non-existent version', async () => {
      const mockSelect = {
        eq: jest.fn(() => ({
          eq: jest.fn(() => ({
            single: jest.fn().mockResolvedValue({
              data: null,
              error: { message: 'Not found' },
            }),
          })),
        })),
      }

      mockSupabase.from.mockReturnValueOnce({
        select: jest.fn(() => mockSelect),
      })

      const result = await VersionHistory.getVersion('note-123', 999)

      expect(result).toBeNull()
    })
  })

  describe('compareVersions', () => {
    it('should compare two versions', async () => {
      const mockComparisonData = [
        {
          version_1_data: {
            version_number: 1,
            title: 'Old Title',
            content: { type: 'doc', content: [] },
            created_at: '2025-07-24T20:00:00Z',
            created_by: 'user-123',
          },
          version_2_data: {
            version_number: 2,
            title: 'New Title',
            content: { type: 'doc', content: [] },
            created_at: '2025-07-24T21:00:00Z',
            created_by: 'user-123',
          },
        },
      ]

      mockSupabase.rpc.mockResolvedValueOnce({
        data: mockComparisonData,
        error: null,
      })

      const result = await VersionHistory.compareVersions('note-123', 1, 2)

      expect(mockSupabase.rpc).toHaveBeenCalledWith('compare_note_versions', {
        p_note_id: 'note-123',
        p_version_1: 1,
        p_version_2: 2,
      })
      expect(result).toEqual({
        version1Data: mockComparisonData[0].version_1_data,
        version2Data: mockComparisonData[0].version_2_data,
      })
    })
  })

  describe('restoreVersion', () => {
    it('should restore a version successfully', async () => {
      mockSupabase.auth.getUser.mockResolvedValueOnce({
        data: { user: { id: 'user-123' } },
      })

      mockSupabase.rpc.mockResolvedValueOnce({
        data: true,
        error: null,
      })

      const result = await VersionHistory.restoreVersion({
        noteId: 'note-123',
        versionNumber: 2,
      })

      expect(mockSupabase.rpc).toHaveBeenCalledWith('restore_note_version', {
        p_note_id: 'note-123',
        p_version_number: 2,
        p_user_id: 'user-123',
      })
      expect(result).toBe(true)
    })

    it('should handle authentication errors', async () => {
      mockSupabase.auth.getUser.mockResolvedValueOnce({
        data: { user: null },
      })

      const result = await VersionHistory.restoreVersion({
        noteId: 'note-123',
        versionNumber: 2,
      })

      expect(result).toBe(false)
    })
  })

  describe('markAsMilestone', () => {
    it('should mark a version as milestone', async () => {
      const mockUpdate = {
        eq: jest.fn(() => ({
          eq: jest.fn().mockResolvedValue({
            error: null,
          }),
        })),
      }

      mockSupabase.from.mockReturnValueOnce({
        update: jest.fn(() => mockUpdate),
      })

      const result = await VersionHistory.markAsMilestone(
        'note-123',
        2,
        'Important Version',
        'This is a milestone'
      )

      expect(result).toBe(true)
    })
  })

  describe('calculateDiff', () => {
    it('should calculate basic differences', () => {
      const oldContent = {
        title: 'Old Title',
        content: { type: 'doc', content: [] },
      }

      const newContent = {
        title: 'New Title',
        content: { type: 'doc', content: [] },
      }

      const diffs = VersionHistory.calculateDiff(oldContent, newContent)

      expect(diffs).toHaveLength(1)
      expect(diffs[0]).toEqual({
        type: 'modified',
        path: ['title'],
        oldValue: 'Old Title',
        newValue: 'New Title',
      })
    })

    it('should detect no changes when content is identical', () => {
      const content = {
        title: 'Same Title',
        content: { type: 'doc', content: [] },
      }

      const diffs = VersionHistory.calculateDiff(content, content)

      expect(diffs).toHaveLength(0)
    })
  })

  describe('cleanupOldVersions', () => {
    it('should cleanup old versions', async () => {
      mockSupabase.rpc.mockResolvedValueOnce({
        data: 5, // 5 versions deleted
        error: null,
      })

      const result = await VersionHistory.cleanupOldVersions('note-123', 30)

      expect(mockSupabase.rpc).toHaveBeenCalledWith('cleanup_old_versions', {
        p_note_id: 'note-123',
        p_keep_count: 30,
      })
      expect(result).toBe(5)
    })
  })

  describe('exportHistory', () => {
    it('should export version history as JSON', async () => {
      const mockHistory = [
        {
          versionId: '1',
          versionNumber: 2,
          title: 'Test Note v2',
          createdAt: '2025-07-24T21:00:00Z',
          createdBy: 'user-123',
          isMilestone: false,
        },
      ]

      // Mock the getHistory method
      jest
        .spyOn(VersionHistory, 'getHistory')
        .mockResolvedValueOnce(mockHistory)

      const result = await VersionHistory.exportHistory('note-123')

      const exportData = JSON.parse(result)

      expect(exportData).toHaveProperty('noteId', 'note-123')
      expect(exportData).toHaveProperty('exportDate')
      expect(exportData).toHaveProperty('versions', mockHistory)
    })
  })
})
