import { createClient } from '@/utils/supabase/client'
import type {
  NoteTemplate,
  TemplateSearchOptions,
  TemplateCreateRequest,
  TemplateUpdateRequest,
  TemplateProcessingResult,
  TemplateVariableValues,
  PopularTemplate,
  TemplateUsage,
  TemplateUsageType,
} from '@/types/template'
import { toast } from '@/hooks/use-toast'

export class TemplateEngine {
  private static supabase = createClient()

  /**
   * Get popular templates
   */
  static async getPopularTemplates(
    category?: string,
    limit: number = 20
  ): Promise<PopularTemplate[]> {
    try {
      const { data, error } = await this.supabase.rpc('get_popular_templates', {
        p_category: category,
        p_limit: limit,
      })

      if (error) {
        console.error('Failed to fetch popular templates:', error)
        throw error
      }

      return (
        data?.map((template: any) => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          tags: template.tags || [],
          titleTemplate: template.title_template,
          contentTemplate: template.content_template,
          variables: template.variables || {},
          isBuiltIn: template.is_built_in,
          isPublic: template.is_public || false,
          usageCount: template.usage_count || 0,
          createdBy: template.created_by,
          organizationId: template.organization_id,
          createdAt: template.created_at,
          updatedAt: template.updated_at || template.created_at,
        })) || []
      )
    } catch (error) {
      console.error('Error fetching popular templates:', error)
      throw error
    }
  }

  /**
   * Search templates
   */
  static async searchTemplates(
    options: TemplateSearchOptions
  ): Promise<PopularTemplate[]> {
    try {
      if (!options.query || options.query.trim() === '') {
        return this.getPopularTemplates(options.category, options.limit)
      }

      const { data, error } = await this.supabase.rpc('search_templates', {
        p_query: options.query,
        p_category: options.category,
        p_limit: options.limit || 20,
      })

      if (error) {
        console.error('Failed to search templates:', error)
        throw error
      }

      return (
        data?.map((template: any) => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          tags: template.tags || [],
          titleTemplate: template.title_template,
          contentTemplate: template.content_template,
          variables: template.variables || {},
          isBuiltIn: template.is_built_in,
          isPublic: template.is_public || false,
          usageCount: template.usage_count || 0,
          createdBy: template.created_by,
          organizationId: template.organization_id,
          createdAt: template.created_at,
          updatedAt: template.updated_at || template.created_at,
          searchRank: template.search_rank,
        })) || []
      )
    } catch (error) {
      console.error('Error searching templates:', error)
      throw error
    }
  }

  /**
   * Get a specific template by ID
   */
  static async getTemplate(templateId: string): Promise<NoteTemplate | null> {
    try {
      const { data, error } = await this.supabase
        .from('note_templates')
        .select('*')
        .eq('id', templateId)
        .single()

      if (error) {
        console.error('Failed to fetch template:', error)
        return null
      }

      if (!data) return null

      return {
        id: data.id,
        name: data.name,
        description: data.description,
        category: data.category,
        tags: data.tags || [],
        titleTemplate: data.title_template,
        contentTemplate: data.content_template,
        variables: data.variables || {},
        isBuiltIn: data.is_built_in,
        isPublic: data.is_public || false,
        usageCount: data.usage_count || 0,
        createdBy: data.created_by,
        organizationId: data.organization_id,
        createdAt: data.created_at,
        updatedAt: data.updated_at || data.created_at,
      }
    } catch (error) {
      console.error('Error fetching template:', error)
      return null
    }
  }

  /**
   * Create a new template
   */
  static async createTemplate(
    template: TemplateCreateRequest
  ): Promise<NoteTemplate | null> {
    try {
      const { data: userData } = await this.supabase.auth.getUser()
      if (!userData.user) {
        throw new Error('User not authenticated')
      }

      const { data, error } = await this.supabase
        .from('note_templates')
        .insert({
          name: template.name,
          description: template.description,
          category: template.category,
          tags: template.tags || [],
          title_template: template.titleTemplate,
          content_template: template.contentTemplate,
          variables: template.variables || {},
          is_public: template.isPublic || false,
          created_by: userData.user.id,
        })
        .select()
        .single()

      if (error) {
        console.error('Failed to create template:', error)
        toast({
          title: 'Error',
          description: 'Failed to create template. Please try again.',
          variant: 'destructive',
        })
        return null
      }

      toast({
        title: 'Template Created',
        description: `"${template.name}" has been created successfully.`,
      })

      return {
        id: data.id,
        name: data.name,
        description: data.description,
        category: data.category,
        tags: data.tags || [],
        titleTemplate: data.title_template,
        contentTemplate: data.content_template,
        variables: data.variables || {},
        isBuiltIn: data.is_built_in,
        isPublic: data.is_public || false,
        usageCount: data.usage_count || 0,
        createdBy: data.created_by,
        organizationId: data.organization_id,
        createdAt: data.created_at,
        updatedAt: data.updated_at || data.created_at,
      }
    } catch (error) {
      console.error('Error creating template:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while creating the template.',
        variant: 'destructive',
      })
      return null
    }
  }

  /**
   * Update an existing template
   */
  static async updateTemplate(
    template: TemplateUpdateRequest
  ): Promise<boolean> {
    try {
      const updates: any = {}
      if (template.name !== undefined) updates.name = template.name
      if (template.description !== undefined)
        updates.description = template.description
      if (template.category !== undefined) updates.category = template.category
      if (template.tags !== undefined) updates.tags = template.tags
      if (template.titleTemplate !== undefined)
        updates.title_template = template.titleTemplate
      if (template.contentTemplate !== undefined)
        updates.content_template = template.contentTemplate
      if (template.variables !== undefined)
        updates.variables = template.variables
      if (template.isPublic !== undefined) updates.is_public = template.isPublic

      const { error } = await this.supabase
        .from('note_templates')
        .update(updates)
        .eq('id', template.id)

      if (error) {
        console.error('Failed to update template:', error)
        toast({
          title: 'Error',
          description: 'Failed to update template. Please try again.',
          variant: 'destructive',
        })
        return false
      }

      toast({
        title: 'Template Updated',
        description: 'Template has been updated successfully.',
      })

      return true
    } catch (error) {
      console.error('Error updating template:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while updating the template.',
        variant: 'destructive',
      })
      return false
    }
  }

  /**
   * Delete a template
   */
  static async deleteTemplate(templateId: string): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('note_templates')
        .delete()
        .eq('id', templateId)

      if (error) {
        console.error('Failed to delete template:', error)
        toast({
          title: 'Error',
          description: 'Failed to delete template. Please try again.',
          variant: 'destructive',
        })
        return false
      }

      toast({
        title: 'Template Deleted',
        description: 'Template has been deleted successfully.',
      })

      return true
    } catch (error) {
      console.error('Error deleting template:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while deleting the template.',
        variant: 'destructive',
      })
      return false
    }
  }

  /**
   * Process template with variable substitution
   */
  static async processTemplate(
    templateId: string,
    variables: TemplateVariableValues = {}
  ): Promise<TemplateProcessingResult | null> {
    try {
      const { data, error } = await this.supabase.rpc(
        'create_note_from_template',
        {
          p_template_id: templateId,
          p_variables: variables,
        }
      )

      if (error) {
        console.error('Failed to process template:', error)
        toast({
          title: 'Error',
          description: 'Failed to process template. Please try again.',
          variant: 'destructive',
        })
        return null
      }

      if (!data || data.length === 0) {
        return null
      }

      const result = data[0]
      return {
        title: result.title,
        content: result.content,
      }
    } catch (error) {
      console.error('Error processing template:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while processing the template.',
        variant: 'destructive',
      })
      return null
    }
  }

  /**
   * Create note from template (with usage tracking)
   */
  static async createNoteFromTemplate(
    templateId: string,
    variables: TemplateVariableValues = {}
  ): Promise<TemplateProcessingResult | null> {
    try {
      // Process the template
      const result = await this.processTemplateLocally(templateId, variables)
      if (!result) return null

      // Track usage
      await this.trackTemplateUsage(templateId, 'create_note')

      return result
    } catch (error) {
      console.error('Error creating note from template:', error)
      return null
    }
  }

  /**
   * Process template locally (for preview purposes)
   */
  static async processTemplateLocally(
    templateId: string,
    variables: TemplateVariableValues = {}
  ): Promise<TemplateProcessingResult | null> {
    try {
      const template = await this.getTemplate(templateId)
      if (!template) return null

      // Add built-in variables
      const now = new Date()
      const processedVariables = {
        ...variables,
        date: now.toISOString().split('T')[0],
        time: now.toTimeString().split(' ')[0].substring(0, 5),
        datetime: now.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        user: 'User', // TODO: Get actual user name from auth
      }

      // Process title template
      let processedTitle = template.titleTemplate
      for (const [key, value] of Object.entries(processedVariables)) {
        const placeholder = `{{${key}}}`
        processedTitle = processedTitle.replace(
          new RegExp(placeholder, 'g'),
          value
        )
      }

      // Process content template
      let processedContent = JSON.parse(
        JSON.stringify(template.contentTemplate)
      )
      for (const [key, value] of Object.entries(processedVariables)) {
        const placeholder = `{{${key}}}`
        const contentStr = JSON.stringify(processedContent)
        const replacedStr = contentStr.replace(
          new RegExp(placeholder, 'g'),
          value
        )
        processedContent = JSON.parse(replacedStr)
      }

      return {
        title: processedTitle,
        content: processedContent,
      }
    } catch (error) {
      console.error('Error processing template locally:', error)
      return null
    }
  }

  /**
   * Track template usage
   */
  static async trackTemplateUsage(
    templateId: string,
    usageType: TemplateUsageType = 'create_note',
    noteId?: string,
    metadata: Record<string, any> = {}
  ): Promise<void> {
    try {
      const { data: userData } = await this.supabase.auth.getUser()
      if (!userData.user) return

      await this.supabase.from('template_usage').insert({
        template_id: templateId,
        user_id: userData.user.id,
        note_id: noteId,
        usage_type: usageType,
        metadata,
      })
    } catch (error) {
      console.error('Error tracking template usage:', error)
      // Don't throw error for usage tracking failures
    }
  }

  /**
   * Get user's template usage history
   */
  static async getUserTemplateUsage(
    userId?: string,
    limit: number = 50
  ): Promise<TemplateUsage[]> {
    try {
      const { data: userData } = await this.supabase.auth.getUser()
      const targetUserId = userId || userData.user?.id
      if (!targetUserId) return []

      const { data, error } = await this.supabase
        .from('template_usage')
        .select(
          `
          *,
          template:note_templates(name, category)
        `
        )
        .eq('user_id', targetUserId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Failed to fetch template usage:', error)
        return []
      }

      return (
        data?.map((usage: any) => ({
          id: usage.id,
          templateId: usage.template_id,
          userId: usage.user_id,
          noteId: usage.note_id,
          usageType: usage.usage_type,
          metadata: usage.metadata || {},
          createdAt: usage.created_at,
        })) || []
      )
    } catch (error) {
      console.error('Error fetching template usage:', error)
      return []
    }
  }

  /**
   * Get user's templates
   */
  static async getUserTemplates(
    userId?: string,
    limit: number = 50
  ): Promise<NoteTemplate[]> {
    try {
      const { data: userData } = await this.supabase.auth.getUser()
      const targetUserId = userId || userData.user?.id
      if (!targetUserId) return []

      const { data, error } = await this.supabase
        .from('note_templates')
        .select('*')
        .eq('created_by', targetUserId)
        .order('updated_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Failed to fetch user templates:', error)
        return []
      }

      return (
        data?.map((template: any) => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          tags: template.tags || [],
          titleTemplate: template.title_template,
          contentTemplate: template.content_template,
          variables: template.variables || {},
          isBuiltIn: template.is_built_in,
          isPublic: template.is_public || false,
          usageCount: template.usage_count || 0,
          createdBy: template.created_by,
          organizationId: template.organization_id,
          createdAt: template.created_at,
          updatedAt: template.updated_at || template.created_at,
        })) || []
      )
    } catch (error) {
      console.error('Error fetching user templates:', error)
      return []
    }
  }

  /**
   * Create template from existing note
   */
  static async createTemplateFromNote(
    noteId: string,
    templateData: Omit<
      TemplateCreateRequest,
      'titleTemplate' | 'contentTemplate'
    >
  ): Promise<NoteTemplate | null> {
    try {
      // First, get the note data
      const { data: noteData, error: noteError } = await this.supabase
        .from('notes')
        .select('title, content')
        .eq('id', noteId)
        .single()

      if (noteError || !noteData) {
        console.error('Failed to fetch note for template creation:', noteError)
        toast({
          title: 'Error',
          description: 'Failed to fetch note data. Please try again.',
          variant: 'destructive',
        })
        return null
      }

      // Create template with note data
      return this.createTemplate({
        ...templateData,
        titleTemplate: noteData.title,
        contentTemplate: noteData.content,
      })
    } catch (error) {
      console.error('Error creating template from note:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while creating template from note.',
        variant: 'destructive',
      })
      return null
    }
  }

  /**
   * Extract variables from template content
   */
  static extractVariables(
    titleTemplate: string,
    contentTemplate: any[]
  ): string[] {
    const variables = new Set<string>()
    const variableRegex = /\{\{(\w+)\}\}/g

    // Extract from title
    let match
    while ((match = variableRegex.exec(titleTemplate)) !== null) {
      variables.add(match[1])
    }

    // Extract from content
    const contentStr = JSON.stringify(contentTemplate)
    variableRegex.lastIndex = 0 // Reset regex
    while ((match = variableRegex.exec(contentStr)) !== null) {
      variables.add(match[1])
    }

    return Array.from(variables)
  }

  /**
   * Validate template data
   */
  static validateTemplate(template: TemplateCreateRequest): string[] {
    const errors: string[] = []

    if (!template.name || template.name.trim().length === 0) {
      errors.push('Template name is required')
    }

    if (template.name && template.name.length > 255) {
      errors.push('Template name must be less than 255 characters')
    }

    if (!template.titleTemplate || template.titleTemplate.trim().length === 0) {
      errors.push('Title template is required')
    }

    if (!template.contentTemplate || template.contentTemplate.length === 0) {
      errors.push('Content template is required')
    }

    if (!template.category) {
      errors.push('Template category is required')
    }

    return errors
  }
}
