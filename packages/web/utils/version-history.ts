import { createClient } from '@/utils/supabase/client'
import type {
  NoteVersion,
  VersionHistoryResponse,
  VersionComparisonResult,
  VersionRestoreOptions,
} from '@/types/version'
import { toast } from '@/hooks/use-toast'

export class VersionHistory {
  private static supabase = createClient()

  /**
   * Get version history for a note
   */
  static async getHistory(
    noteId: string,
    limit: number = 50,
    offset: number = 0
  ): Promise<VersionHistoryResponse[]> {
    try {
      const { data, error } = await this.supabase.rpc(
        'get_note_version_history',
        {
          p_note_id: noteId,
          p_limit: limit,
          p_offset: offset,
        }
      )

      if (error) {
        console.error('Failed to fetch version history:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Error fetching version history:', error)
      throw error
    }
  }

  /**
   * Get a specific version
   */
  static async getVersion(
    noteId: string,
    versionNumber: number
  ): Promise<NoteVersion | null> {
    try {
      const { data, error } = await this.supabase
        .from('note_versions')
        .select('*')
        .eq('note_id', noteId)
        .eq('version_number', versionNumber)
        .single()

      if (error) {
        console.error('Failed to fetch version:', error)
        return null
      }

      return {
        id: data.id,
        noteId: data.note_id,
        versionNumber: data.version_number,
        title: data.title,
        content: data.content,
        contentDiff: undefined, // content_diff column removed
        versionName: data.version_name,
        versionMessage: data.version_message,
        createdBy: data.created_by,
        createdAt: data.created_at,
        isMilestone: data.is_milestone,
        metadata: data.metadata || {},
      }
    } catch (error) {
      console.error('Error fetching version:', error)
      return null
    }
  }

  /**
   * Compare two versions
   */
  static async compareVersions(
    noteId: string,
    version1: number,
    version2: number
  ): Promise<VersionComparisonResult | null> {
    try {
      const { data, error } = await this.supabase.rpc('compare_note_versions', {
        p_note_id: noteId,
        p_version_1: version1,
        p_version_2: version2,
      })

      if (error) {
        console.error('Failed to compare versions:', error)
        throw error
      }

      if (!data || data.length === 0) {
        return null
      }

      const result = data[0]
      return {
        version1Data: result.version_1_data,
        version2Data: result.version_2_data,
      }
    } catch (error) {
      console.error('Error comparing versions:', error)
      throw error
    }
  }

  /**
   * Restore a note to a specific version
   */
  static async restoreVersion(
    options: VersionRestoreOptions
  ): Promise<boolean> {
    try {
      const { data: userData } = await this.supabase.auth.getUser()
      if (!userData.user) {
        throw new Error('User not authenticated')
      }

      const { data, error } = await this.supabase.rpc('restore_note_version', {
        p_note_id: options.noteId,
        p_version_number: options.versionNumber,
        p_user_id: userData.user.id,
      })

      if (error) {
        console.error('Failed to restore version:', error)
        toast({
          title: 'Restore Failed',
          description:
            'Failed to restore the selected version. Please try again.',
          variant: 'destructive',
        })
        return false
      }

      toast({
        title: 'Version Restored',
        description: `Note has been restored to version ${options.versionNumber}`,
      })

      return true
    } catch (error) {
      console.error('Error restoring version:', error)
      toast({
        title: 'Restore Error',
        description: 'An error occurred while restoring the version.',
        variant: 'destructive',
      })
      return false
    }
  }

  /**
   * Mark a version as milestone
   */
  static async markAsMilestone(
    noteId: string,
    versionNumber: number,
    name?: string,
    message?: string
  ): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('note_versions')
        .update({
          is_milestone: true,
          version_name: name,
          version_message: message,
        })
        .eq('note_id', noteId)
        .eq('version_number', versionNumber)

      if (error) {
        console.error('Failed to mark as milestone:', error)
        return false
      }

      toast({
        title: 'Milestone Created',
        description: 'Version has been marked as a milestone',
      })

      return true
    } catch (error) {
      console.error('Error marking milestone:', error)
      return false
    }
  }

  /**
   * Remove milestone status
   */
  static async removeMilestone(
    noteId: string,
    versionNumber: number
  ): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('note_versions')
        .update({
          is_milestone: false,
          version_name: null,
          version_message: null,
        })
        .eq('note_id', noteId)
        .eq('version_number', versionNumber)

      if (error) {
        console.error('Failed to remove milestone:', error)
        return false
      }

      return true
    } catch (error) {
      console.error('Error removing milestone:', error)
      return false
    }
  }

  /**
   * Get milestone versions for a note
   */
  static async getMilestones(
    noteId: string
  ): Promise<VersionHistoryResponse[]> {
    try {
      const { data, error } = await this.supabase
        .from('note_versions')
        .select(
          `
          id,
          version_number,
          title,
          version_name,
          version_message,
          created_by,
          created_at,
          is_milestone,
          metadata
        `
        )
        .eq('note_id', noteId)
        .eq('is_milestone', true)
        .order('version_number', { ascending: false })

      if (error) {
        console.error('Failed to fetch milestones:', error)
        throw error
      }

      return (
        data?.map((item) => ({
          versionId: item.id,
          versionNumber: item.version_number,
          title: item.title,
          versionName: item.version_name,
          versionMessage: item.version_message,
          createdBy: item.created_by,
          createdAt: item.created_at,
          isMilestone: item.is_milestone,
          wordCount: item.metadata?.word_count,
          characterCount: item.metadata?.character_count,
        })) || []
      )
    } catch (error) {
      console.error('Error fetching milestones:', error)
      return []
    }
  }

  /**
   * Calculate diff between two versions
   */
  static calculateDiff(oldContent: any, newContent: any): any[] {
    // This is a simplified diff calculation
    // In a real implementation, you might use a library like diff-match-patch
    // or a custom algorithm for Plate.js content
    const diffs: any[] = []

    // Compare titles if they exist
    if (oldContent.title !== newContent.title) {
      diffs.push({
        type: 'modified',
        path: ['title'],
        oldValue: oldContent.title,
        newValue: newContent.title,
      })
    }

    // Compare content blocks
    // This is a basic implementation - you'd want something more sophisticated
    // for production use that understands Plate.js structure
    if (
      JSON.stringify(oldContent.content) !== JSON.stringify(newContent.content)
    ) {
      diffs.push({
        type: 'modified',
        path: ['content'],
        oldValue: oldContent.content,
        newValue: newContent.content,
      })
    }

    return diffs
  }

  /**
   * Cleanup old versions (keep only recent N versions)
   */
  static async cleanupOldVersions(
    noteId: string,
    keepCount: number = 30
  ): Promise<number> {
    try {
      const { data, error } = await this.supabase.rpc('cleanup_old_versions', {
        p_note_id: noteId,
        p_keep_count: keepCount,
      })

      if (error) {
        console.error('Failed to cleanup versions:', error)
        return 0
      }

      return data || 0
    } catch (error) {
      console.error('Error cleaning up versions:', error)
      return 0
    }
  }

  /**
   * Export version history
   */
  static async exportHistory(noteId: string): Promise<string> {
    try {
      const history = await this.getHistory(noteId, 1000, 0) // Get all versions

      const exportData = {
        noteId,
        exportDate: new Date().toISOString(),
        versions: history,
      }

      return JSON.stringify(exportData, null, 2)
    } catch (error) {
      console.error('Error exporting history:', error)
      throw error
    }
  }
}
