'use client'

import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type {
  Template,
  TemplateVariable,
  TemplateCategory,
  CreateTemplateData,
  UpdateTemplateData,
} from '@/types/templates'

export type {
  Template,
  TemplateVariable,
  TemplateCategory,
  CreateTemplateData,
  UpdateTemplateData,
}

export interface UseTemplateOptions {
  category?: string
  search?: string
  sortBy?: 'popular' | 'recent' | 'name' | 'rating'
  limit?: number
  offset?: number
  includeOwn?: boolean
  includePublic?: boolean
  includeSystem?: boolean
}

export interface UseTemplatesReturn {
  // Data
  templates: Template[]
  isLoading: boolean
  error: string | null
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }

  // Actions
  refetch: () => void
  searchTemplates: (query: string) => void
  filterByCategory: (category: string) => void
  sortTemplates: (sortBy: UseTemplateOptions['sortBy']) => void
}

export function useTemplates(
  options: UseTemplateOptions = {}
): UseTemplatesReturn {
  const {
    category,
    search,
    sortBy = 'popular',
    limit = 50,
    offset = 0,
    includeOwn = true,
    includePublic = true,
    includeSystem = true,
  } = options

  const queryKey = [
    'templates',
    {
      category,
      search,
      sortBy,
      limit,
      offset,
      includeOwn,
      includePublic,
      includeSystem,
    },
  ]

  const {
    data: templatesData,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const params = new URLSearchParams()

      if (category) params.append('category', category)
      if (search) params.append('search', search)
      if (sortBy) params.append('sort', sortBy)
      if (limit) params.append('limit', limit.toString())
      if (offset) params.append('offset', offset.toString())
      if (!includeOwn) params.append('own', 'false')
      if (includePublic) params.append('public', 'true')
      if (includeSystem) params.append('system', 'true')

      const response = await fetch(`/api/templates?${params}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch templates: ${response.statusText}`)
      }

      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  const searchTemplates = useCallback(
    (query: string) => {
      // This would trigger a refetch with new search params
      // In a real implementation, you might want to use a separate state for search
      refetch()
    },
    [refetch]
  )

  const filterByCategory = useCallback(
    (categoryId: string) => {
      // Similar to search, this would trigger a refetch
      refetch()
    },
    [refetch]
  )

  const sortTemplates = useCallback(
    (newSortBy: UseTemplateOptions['sortBy']) => {
      // This would trigger a refetch with new sort params
      refetch()
    },
    [refetch]
  )

  return {
    templates: templatesData?.data || [],
    isLoading,
    error: queryError ? (queryError as Error).message : null,
    pagination: templatesData?.pagination || {
      total: 0,
      limit,
      offset,
      hasMore: false,
    },
    refetch,
    searchTemplates,
    filterByCategory,
    sortTemplates,
  }
}

export interface UseTemplateReturn {
  // Data
  template: Template | null
  isLoading: boolean
  error: string | null

  // Actions
  refetch: () => void
}

export function useTemplate(templateId?: string): UseTemplateReturn {
  const {
    data: templateData,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey: ['template', templateId],
    queryFn: async () => {
      if (!templateId) return null

      const response = await fetch(`/api/templates/${templateId}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Template not found')
        }
        throw new Error(`Failed to fetch template: ${response.statusText}`)
      }

      return response.json()
    },
    enabled: !!templateId,
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  return {
    template: templateData?.data || null,
    isLoading,
    error: queryError ? (queryError as Error).message : null,
    refetch,
  }
}

export interface UseTemplateCategoriesReturn {
  categories: TemplateCategory[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useTemplateCategories(): UseTemplateCategoriesReturn {
  const {
    data: categoriesData,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey: ['template-categories'],
    queryFn: async () => {
      const response = await fetch('/api/templates/categories')
      if (!response.ok) {
        throw new Error(
          `Failed to fetch template categories: ${response.statusText}`
        )
      }

      return response.json()
    },
    staleTime: 1000 * 60 * 15, // 15 minutes (categories don't change often)
  })

  return {
    categories: categoriesData?.data || [],
    isLoading,
    error: queryError ? (queryError as Error).message : null,
    refetch,
  }
}

export interface UsePopularTemplatesReturn {
  templates: Template[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function usePopularTemplates(limit = 20): UsePopularTemplatesReturn {
  const {
    data: templatesData,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey: ['popular-templates', limit],
    queryFn: async () => {
      const response = await fetch(`/api/templates/popular?limit=${limit}`)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch popular templates: ${response.statusText}`
        )
      }

      return response.json()
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  return {
    templates: templatesData?.data || [],
    isLoading,
    error: queryError ? (queryError as Error).message : null,
    refetch,
  }
}

export interface UseTemplateActionsReturn {
  // Actions
  createTemplate: (data: CreateTemplateData) => Promise<Template>
  updateTemplate: (data: UpdateTemplateData) => Promise<Template>
  deleteTemplate: (templateId: string) => Promise<void>
  useTemplate: (
    templateId: string,
    title: string,
    variables?: Record<string, any>
  ) => Promise<{ noteId: string; note: any }>
  rateTemplate: (
    templateId: string,
    rating: number,
    comment?: string
  ) => Promise<void>

  // Loading states
  isCreating: boolean
  isUpdating: boolean
  isDeleting: boolean
  isUsing: boolean
  isRating: boolean
}

export function useTemplateActions(): UseTemplateActionsReturn {
  const queryClient = useQueryClient()

  const createTemplateMutation = useMutation({
    mutationFn: async (data: CreateTemplateData) => {
      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create template')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: () => {
      // Invalidate all template queries to refresh the lists
      queryClient.invalidateQueries({ queryKey: ['templates'] })
      queryClient.invalidateQueries({ queryKey: ['popular-templates'] })
      queryClient.invalidateQueries({ queryKey: ['template-categories'] })
    },
  })

  const updateTemplateMutation = useMutation({
    mutationFn: async (data: UpdateTemplateData) => {
      const { id, ...updateData } = data
      const response = await fetch(`/api/templates/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to update template')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: (updatedTemplate) => {
      // Update the template cache
      queryClient.setQueryData(['template', updatedTemplate.id], {
        data: updatedTemplate,
      })
      // Invalidate template lists
      queryClient.invalidateQueries({ queryKey: ['templates'] })
      queryClient.invalidateQueries({ queryKey: ['popular-templates'] })
    },
  })

  const deleteTemplateMutation = useMutation({
    mutationFn: async (templateId: string) => {
      const response = await fetch(`/api/templates/${templateId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to delete template')
      }
    },
    onSuccess: (_, templateId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: ['template', templateId] })
      // Invalidate template lists
      queryClient.invalidateQueries({ queryKey: ['templates'] })
      queryClient.invalidateQueries({ queryKey: ['popular-templates'] })
      queryClient.invalidateQueries({ queryKey: ['template-categories'] })
    },
  })

  const useTemplateMutation = useMutation({
    mutationFn: async ({
      templateId,
      title,
      variables = {},
    }: {
      templateId: string
      title: string
      variables?: Record<string, any>
    }) => {
      const response = await fetch(`/api/templates/${templateId}/use`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, variables }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.error || 'Failed to create note from template'
        )
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: () => {
      // Invalidate notes queries to show the new note
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      // Invalidate template queries to update usage counts
      queryClient.invalidateQueries({ queryKey: ['templates'] })
      queryClient.invalidateQueries({ queryKey: ['popular-templates'] })
    },
  })

  const rateTemplateMutation = useMutation({
    mutationFn: async ({
      templateId,
      rating,
      comment,
    }: {
      templateId: string
      rating: number
      comment?: string
    }) => {
      const response = await fetch(`/api/templates/${templateId}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, comment }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to rate template')
      }

      return response.json()
    },
    onSuccess: (_, { templateId }) => {
      // Invalidate template data to update rating
      queryClient.invalidateQueries({ queryKey: ['template', templateId] })
      queryClient.invalidateQueries({ queryKey: ['templates'] })
      queryClient.invalidateQueries({ queryKey: ['popular-templates'] })
    },
  })

  const createTemplate = useCallback(
    async (data: CreateTemplateData) => {
      return createTemplateMutation.mutateAsync(data)
    },
    [createTemplateMutation]
  )

  const updateTemplate = useCallback(
    async (data: UpdateTemplateData) => {
      return updateTemplateMutation.mutateAsync(data)
    },
    [updateTemplateMutation]
  )

  const deleteTemplate = useCallback(
    async (templateId: string) => {
      return deleteTemplateMutation.mutateAsync(templateId)
    },
    [deleteTemplateMutation]
  )

  const useTemplate = useCallback(
    async (
      templateId: string,
      title: string,
      variables?: Record<string, any>
    ) => {
      return useTemplateMutation.mutateAsync({ templateId, title, variables })
    },
    [useTemplateMutation]
  )

  const rateTemplate = useCallback(
    async (templateId: string, rating: number, comment?: string) => {
      return rateTemplateMutation.mutateAsync({ templateId, rating, comment })
    },
    [rateTemplateMutation]
  )

  return {
    // Actions
    createTemplate,
    updateTemplate,
    deleteTemplate,
    useTemplate,
    rateTemplate,

    // Loading states
    isCreating: createTemplateMutation.isPending,
    isUpdating: updateTemplateMutation.isPending,
    isDeleting: deleteTemplateMutation.isPending,
    isUsing: useTemplateMutation.isPending,
    isRating: rateTemplateMutation.isPending,
  }
}
