import type { Database } from './database'

// Base tag types from database
export type Tag = Database['public']['Tables']['tags']['Row']
export type TagInsert = Database['public']['Tables']['tags']['Insert']
export type TagUpdate = Database['public']['Tables']['tags']['Update']

export type NoteTag = Database['public']['Tables']['note_tags']['Row']
export type NoteTagInsert = Database['public']['Tables']['note_tags']['Insert']
export type NoteTagUpdate = Database['public']['Tables']['note_tags']['Update']

// Enhanced tag types for UI and business logic
export interface EnhancedTag extends Tag {
  // Computed fields
  usage_count?: number
  children?: EnhancedTag[]
  path?: string
  level?: number

  // UI state
  isExpanded?: boolean
  isSelected?: boolean
}

// Tag hierarchy tree node
export interface TagTreeNode {
  tag: EnhancedTag
  children: TagTreeNode[]
  level: number
  path: string
}

// Tag filter criteria
export interface TagFilter {
  query?: string
  parentId?: string | null
  includeChildren?: boolean
  sortBy?: 'name' | 'usage' | 'created' | 'updated'
  sortOrder?: 'asc' | 'desc'
  limit?: number
  offset?: number
}

// Tag creation/update forms
export interface TagFormData {
  name: string
  parent_id?: string | null
  color?: string
  description?: string | null
}

// Tag statistics
export interface TagStats {
  totalTags: number
  rootTags: number
  maxDepth: number
  averageUsage: number
  mostUsedTag: EnhancedTag | null
  recentTags: EnhancedTag[]
}

// Tag search/autocomplete results
export interface TagSuggestion {
  tag: EnhancedTag
  matchType: 'exact' | 'prefix' | 'contains'
  score: number
}

// Tag validation errors
export interface TagValidationError {
  field: keyof TagFormData
  message: string
  code: string
}

// Tag operation results
export interface TagOperationResult<T = EnhancedTag> {
  success: boolean
  data?: T
  error?: string
  errors?: TagValidationError[]
}

// Bulk tag operations
export interface BulkTagOperation {
  operation: 'add' | 'remove' | 'replace'
  noteIds: string[]
  tagIds: string[]
}

export interface BulkTagResult {
  success: boolean
  processed: number
  failed: number
  errors: Array<{
    noteId: string
    error: string
  }>
}

// Tag export/import
export interface TagExport {
  version: string
  exported_at: string
  tags: EnhancedTag[]
  relationships: Array<{
    note_id: string
    tag_ids: string[]
  }>
}

// Default tag colors
export const DEFAULT_TAG_COLORS = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#10b981', // green
  '#f59e0b', // yellow
  '#8b5cf6', // purple
  '#06b6d4', // cyan
  '#f97316', // orange
  '#84cc16', // lime
  '#ec4899', // pink
  '#64748b', // slate
] as const

export type TagColor = (typeof DEFAULT_TAG_COLORS)[number]

// Tag parsing from content
export interface ParsedTag {
  text: string
  name: string
  isNested: boolean
  parts: string[]
  start: number
  end: number
}

// Tag syntax validation
export const TAG_NAME_REGEX = /^[a-zA-Z0-9_-]+$/
export const NESTED_TAG_REGEX = /^[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/
export const TAG_MENTION_REGEX = /#([a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*)/g

// Tag limits and constraints
export const TAG_LIMITS = {
  MAX_NAME_LENGTH: 50,
  MAX_DESCRIPTION_LENGTH: 200,
  MAX_NESTING_DEPTH: 5,
  MAX_TAGS_PER_NOTE: 20,
  MAX_TAGS_PER_USER: 1000,
} as const
