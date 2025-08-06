import { useCallback, useState } from 'react'

interface Template {
  id: string
  name: string
  description: string
  category: string
  categoryName: string
  categoryIcon: string
  tags?: string[]
  content: string
  variables?: Array<{
    name: string
    label: string
    type: 'text' | 'date' | 'select' | 'textarea'
    required: boolean
    options?: string[]
    placeholder?: string
  }>
  isPublic: boolean
  isSystem: boolean
  usageCount: number
  rating: number
  ratingCount: number
  variableCount: number
}

export function useTemplateActions() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const useTemplate = useCallback(
    async (
      templateId: string,
      title: string,
      variables: Record<string, any>
    ) => {
      try {
        setLoading(true)
        setError(null)

        // First, get the template
        const templateResponse = await fetch(`/api/templates/${templateId}`)
        const templateResult = await templateResponse.json()

        if (!templateResponse.ok) {
          throw new Error(templateResult.error || 'Failed to fetch template')
        }

        const template = templateResult.data

        // Process template content with variables
        let content = template.content || ''

        // Replace variables in content
        Object.entries(variables).forEach(([key, value]) => {
          const placeholder = `{{${key}}}`
          content = content.replace(new RegExp(placeholder, 'g'), value)
        })

        // Create note with processed content
        const noteResponse = await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            content,
            template_id: templateId,
            template_variables: variables,
          }),
        })

        const noteResult = await noteResponse.json()

        if (!noteResponse.ok) {
          throw new Error(
            noteResult.error || 'Failed to create note from template'
          )
        }

        return { noteId: noteResult.id, note: noteResult }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to use template'
        setError(errorMessage)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const getTemplate = useCallback(async (templateId: string) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/templates/${templateId}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch template')
      }

      return result.data
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch template'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const listTemplates = useCallback(
    async (options?: {
      category?: string
      search?: string
      sort?: string
      limit?: number
      offset?: number
    }) => {
      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams()
        if (options?.category) params.set('category', options.category)
        if (options?.search) params.set('search', options.search)
        if (options?.sort) params.set('sort', options.sort)
        if (options?.limit) params.set('limit', options.limit.toString())
        if (options?.offset) params.set('offset', options.offset.toString())

        const response = await fetch(`/api/templates?${params}`)
        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Failed to fetch templates')
        }

        return {
          templates: result.data || [],
          pagination: result.pagination,
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to fetch templates'
        setError(errorMessage)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const createTemplate = useCallback(
    async (templateData: {
      name: string
      description?: string
      category: string
      content: string
      variables?: Array<{
        name: string
        label: string
        type: 'text' | 'date' | 'select' | 'textarea'
        required: boolean
        options?: string[]
        placeholder?: string
      }>
      isPublic?: boolean
    }) => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/templates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(templateData),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Failed to create template')
        }

        return result.data
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create template'
        setError(errorMessage)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    useTemplate,
    getTemplate,
    listTemplates,
    createTemplate,
    loading,
    error,
  }
}

export function useTemplates(options?: {
  category?: string
  search?: string
  sort?: string
  limit?: number
  offset?: number
}) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, _setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 50,
    offset: 0,
    hasMore: false,
  })

  const { listTemplates } = useTemplateActions()

  const fetchTemplates = useCallback(async () => {
    try {
      const result = await listTemplates(options)
      setTemplates(result.templates)
      setPagination(result.pagination)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch templates')
    }
  }, [listTemplates, options])

  const refetch = useCallback(() => {
    fetchTemplates()
  }, [fetchTemplates])

  return {
    templates,
    loading,
    error,
    pagination,
    refetch,
  }
}
