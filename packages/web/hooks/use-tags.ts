'use client'

import { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type {
  BulkTagOperation,
  BulkTagResult,
  EnhancedTag,
  TagFilter,
  TagFormData,
  TagOperationResult,
} from '@/types/tags'

// Fetch all tags with filtering
export function useTags(filter?: TagFilter) {
  return useQuery({
    queryKey: ['tags', filter],
    queryFn: async (): Promise<EnhancedTag[]> => {
      const params = new URLSearchParams()

      if (filter?.query) params.append('query', filter.query)
      if (filter?.parentId !== undefined)
        params.append('parent_id', filter.parentId || '')
      if (filter?.includeChildren) params.append('include_children', 'true')
      if (filter?.sortBy) params.append('sort_by', filter.sortBy)
      if (filter?.sortOrder) params.append('sort_order', filter.sortOrder)
      if (filter?.limit) params.append('limit', filter.limit.toString())
      if (filter?.offset) params.append('offset', filter.offset.toString())

      const response = await fetch(`/api/tags?${params}`)
      if (!response.ok) {
        throw new Error('Failed to fetch tags')
      }

      const result = await response.json()
      return result.data || []
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Fetch tags for a specific note
export function useNoteTags(noteId: string) {
  return useQuery({
    queryKey: ['note-tags', noteId],
    queryFn: async (): Promise<EnhancedTag[]> => {
      if (!noteId) return []

      const response = await fetch(`/api/notes/${noteId}/tags`)
      if (!response.ok) {
        throw new Error('Failed to fetch note tags')
      }

      const result = await response.json()
      return result.data || []
    },
    enabled: !!noteId,
    staleTime: 1000 * 60 * 2, // 2 minutes
  })
}

// Create a new tag
export function useCreateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (tagData: TagFormData): Promise<EnhancedTag> => {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tagData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create tag')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: () => {
      // Invalidate and refetch tags
      queryClient.invalidateQueries({ queryKey: ['tags'] })
    },
  })
}

// Update an existing tag
export function useUpdateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      ...tagData
    }: TagFormData & { id: string }): Promise<EnhancedTag> => {
      const response = await fetch(`/api/tags/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tagData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update tag')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
    },
  })
}

// Delete a tag
export function useDeleteTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (tagId: string): Promise<void> => {
      const response = await fetch(`/api/tags/${tagId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete tag')
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
      queryClient.invalidateQueries({ queryKey: ['note-tags'] })
    },
  })
}

// Add tags to a note
export function useAddTagsToNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      noteId,
      tagIds,
    }: {
      noteId: string
      tagIds: string[]
    }): Promise<EnhancedTag[]> => {
      const response = await fetch(`/api/notes/${noteId}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tag_ids: tagIds }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to add tags to note')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: (_, { noteId }) => {
      queryClient.invalidateQueries({ queryKey: ['note-tags', noteId] })
      queryClient.invalidateQueries({ queryKey: ['tags'] }) // For usage counts
    },
  })
}

// Remove a tag from a note
export function useRemoveTagFromNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      noteId,
      tagId,
    }: {
      noteId: string
      tagId: string
    }): Promise<void> => {
      const response = await fetch(`/api/notes/${noteId}/tags/${tagId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to remove tag from note')
      }
    },
    onSuccess: (_, { noteId }) => {
      queryClient.invalidateQueries({ queryKey: ['note-tags', noteId] })
      queryClient.invalidateQueries({ queryKey: ['tags'] }) // For usage counts
    },
  })
}

// Hook for tag autocomplete/suggestions
export function useTagSuggestions(query: string, limit = 10) {
  const { data: allTags } = useTags()
  const [suggestions, setSuggestions] = useState<EnhancedTag[]>([])

  useEffect(() => {
    if (!allTags || !query.trim()) {
      setSuggestions([])
      return
    }

    const normalizedQuery = query.toLowerCase().trim()
    const filtered = allTags
      .filter((tag) => tag.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => {
        // Prioritize exact matches, then prefix matches, then contains
        const aStartsWith = a.name.toLowerCase().startsWith(normalizedQuery)
        const bStartsWith = b.name.toLowerCase().startsWith(normalizedQuery)

        if (aStartsWith && !bStartsWith) return -1
        if (!aStartsWith && bStartsWith) return 1

        // Then sort by usage count (descending)
        return (b.usage_count || 0) - (a.usage_count || 0)
      })
      .slice(0, limit)

    setSuggestions(filtered)
  }, [allTags, query, limit])

  return suggestions
}

// Hook for managing tag tree hierarchy
export function useTagTree() {
  const { data: allTags } = useTags({ includeChildren: false })
  const [tagTree, setTagTree] = useState<EnhancedTag[]>([])

  useEffect(() => {
    if (!allTags) {
      setTagTree([])
      return
    }

    // Build hierarchical tree structure
    const tagMap = new Map<string, EnhancedTag>()
    const rootTags: EnhancedTag[] = []

    // First pass: create map and identify root tags
    allTags.forEach((tag) => {
      tagMap.set(tag.id, { ...tag, children: [] })
      if (!(tag as any).parent_id) {
        rootTags.push(tagMap.get(tag.id)!)
      }
    })

    // Second pass: build parent-child relationships
    allTags.forEach((tag) => {
      if ((tag as any).parent_id) {
        const parent = tagMap.get((tag as any).parent_id)
        const child = tagMap.get(tag.id)
        if (parent && child) {
          parent.children = parent.children || []
          parent.children.push(child)
        }
      }
    })

    setTagTree(rootTags)
  }, [allTags])

  return tagTree
}

// Hook for comprehensive tag management
export function useTagManager() {
  const queryClient = useQueryClient()

  const createTag = useCreateTag()
  const updateTag = useUpdateTag()
  const deleteTag = useDeleteTag()
  const addTagsToNote = useAddTagsToNote()
  const removeTagFromNote = useRemoveTagFromNote()

  // Get or create tag by name
  const getOrCreateTag = useCallback(
    async (name: string, color?: string): Promise<EnhancedTag> => {
      // First, try to find existing tag
      const existingTags =
        queryClient.getQueryData<EnhancedTag[]>(['tags']) || []
      const existingTag = existingTags.find((tag) => tag.name === name.trim())

      if (existingTag) {
        return existingTag
      }

      // Create new tag if it doesn't exist
      return createTag.mutateAsync({ name: name.trim(), color })
    },
    [createTag, queryClient]
  )

  // Parse and create tags from text (e.g., "#work #personal #project/frontend")
  const parseAndCreateTags = useCallback(
    async (text: string): Promise<EnhancedTag[]> => {
      const tagRegex = /#([a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*)/g
      const matches = Array.from(text.matchAll(tagRegex))

      if (matches.length === 0) return []

      const createdTags: EnhancedTag[] = []

      for (const match of matches) {
        const tagPath = match[1]
        const parts = tagPath.split('/')
        let parentId: string | null = null

        // Create tags hierarchically
        for (let i = 0; i < parts.length; i++) {
          const tagName = parts[i]
          const fullPath = parts.slice(0, i + 1).join('/')

          try {
            const tag = await getOrCreateTag(fullPath)
            if (i === parts.length - 1) {
              createdTags.push(tag)
            }
            parentId = tag.id
          } catch (error) {
            console.error(`Failed to create tag: ${fullPath}`, error)
          }
        }
      }

      return createdTags
    },
    [getOrCreateTag]
  )

  return {
    createTag: createTag.mutate,
    updateTag: updateTag.mutate,
    deleteTag: deleteTag.mutate,
    addTagsToNote: addTagsToNote.mutate,
    removeTagFromNote: removeTagFromNote.mutate,
    getOrCreateTag,
    parseAndCreateTags,
    isLoading:
      createTag.isPending || updateTag.isPending || deleteTag.isPending,
    error: createTag.error || updateTag.error || deleteTag.error,
  }
}
