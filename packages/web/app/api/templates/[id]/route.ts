import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// GET /api/templates/[id] - Get specific template with variables
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient()

  try {
    // Authentication
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    const templateId = params.id

    // Get template with variables using the database function
    const { data: templateData, error } = await supabase.rpc(
      'get_template_with_variables',
      {
        p_template_id: templateId,
      }
    )

    if (error) {
      console.error('Error fetching template:', error)
      return NextResponse.json(
        { error: 'Failed to fetch template' },
        { status: 500 }
      )
    }

    if (!templateData) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    // Get category information
    const template = templateData.template
    const { data: category } = await supabase
      .from('template_categories')
      .select('name, icon, color')
      .eq('id', template.category)
      .single()

    // Enhanced template data
    const enhancedTemplate = {
      ...template,
      variables: templateData.variables || [],
      categoryName: category?.name,
      categoryIcon: category?.icon,
      categoryColor: category?.color,
    }

    return NextResponse.json({
      success: true,
      data: enhancedTemplate,
    })
  } catch (error) {
    console.error('Get template API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/templates/[id] - Update specific template
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient()

  try {
    // Authentication
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    const templateId = params.id
    const body = await request.json()
    const {
      name,
      description,
      category,
      content,
      thumbnail,
      isPublic,
      variables = [],
    } = body

    // Check if user owns the template (RLS will also handle this, but we want a better error message)
    const { data: existingTemplate } = await supabase
      .from('templates')
      .select('id, created_by, is_system')
      .eq('id', templateId)
      .single()

    if (!existingTemplate) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    if (existingTemplate.is_system) {
      return NextResponse.json(
        { error: 'System templates cannot be modified' },
        { status: 403 }
      )
    }

    if (existingTemplate.created_by !== user.id) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }

    // Validate category if provided
    if (category) {
      const { data: categoryExists } = await supabase
        .from('template_categories')
        .select('id')
        .eq('id', category)
        .single()

      if (!categoryExists) {
        return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
      }
    }

    // Update template
    const updateData: any = {
      updated_at: new Date().toISOString(),
    }

    if (name !== undefined) updateData.name = name.trim()
    if (description !== undefined)
      updateData.description = description?.trim() || null
    if (category !== undefined) updateData.category = category
    if (content !== undefined) updateData.content = content
    if (thumbnail !== undefined) updateData.thumbnail = thumbnail
    if (isPublic !== undefined) updateData.is_public = isPublic

    const { data: updatedTemplate, error: updateError } = await supabase
      .from('templates')
      .update(updateData)
      .eq('id', templateId)
      .select()
      .single()

    if (updateError) {
      console.error('Error updating template:', updateError)
      return NextResponse.json(
        { error: 'Failed to update template' },
        { status: 500 }
      )
    }

    // Update variables if provided
    if (variables && Array.isArray(variables)) {
      // Delete existing variables
      await supabase
        .from('template_variables')
        .delete()
        .eq('template_id', templateId)

      // Insert new variables
      if (variables.length > 0) {
        const variableInserts = variables.map(
          (variable: any, index: number) => ({
            template_id: templateId,
            name: variable.name,
            label: variable.label,
            description: variable.description,
            type: variable.type || 'text',
            default_value: variable.defaultValue,
            required: variable.required || false,
            options: variable.options || null,
            validation: variable.validation || null,
            placeholder: variable.placeholder,
            help_text: variable.helpText,
            display_order: variable.displayOrder || index,
          })
        )

        const { error: variablesError } = await supabase
          .from('template_variables')
          .insert(variableInserts)

        if (variablesError) {
          console.error('Error updating template variables:', variablesError)
        }
      }
    }

    // Fetch the complete updated template
    const { data: completeTemplate } = await supabase.rpc(
      'get_template_with_variables',
      {
        p_template_id: templateId,
      }
    )

    return NextResponse.json({
      success: true,
      data: completeTemplate || updatedTemplate,
    })
  } catch (error) {
    console.error('Update template API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/templates/[id] - Delete specific template
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient()

  try {
    // Authentication
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    const templateId = params.id

    // Check if user owns the template and it's not a system template
    const { data: existingTemplate } = await supabase
      .from('templates')
      .select('id, created_by, is_system, name')
      .eq('id', templateId)
      .single()

    if (!existingTemplate) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    if (existingTemplate.is_system) {
      return NextResponse.json(
        { error: 'System templates cannot be deleted' },
        { status: 403 }
      )
    }

    if (existingTemplate.created_by !== user.id) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }

    // Delete template (cascade will handle variables, usage, ratings)
    const { error: deleteError } = await supabase
      .from('templates')
      .delete()
      .eq('id', templateId)

    if (deleteError) {
      console.error('Error deleting template:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete template' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Template "${existingTemplate.name}" deleted successfully`,
    })
  } catch (error) {
    console.error('Delete template API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
