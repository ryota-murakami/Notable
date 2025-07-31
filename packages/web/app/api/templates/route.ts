import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// GET /api/templates - List available templates with filtering and search
export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { searchParams } = new URL(request.url)

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

    // Parse query parameters
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const isPublic = searchParams.get('public') === 'true'
    const isSystem = searchParams.get('system') === 'true'
    const includeOwn = searchParams.get('own') !== 'false'
    const sortBy = searchParams.get('sort') || 'popular' // popular, recent, name, usage
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100)
    const offset = parseInt(searchParams.get('offset') || '0')

    // Build base query
    let query = supabase.from('templates').select(
      `
        *,
        template_categories!inner(name, icon, color),
        template_variables(count)
      `,
      { count: 'exact' }
    )

    // Apply access filters
    const accessConditions = []
    if (isSystem) accessConditions.push('is_system.eq.true')
    if (isPublic) accessConditions.push('is_public.eq.true')
    if (includeOwn) accessConditions.push(`created_by.eq.${user.id}`)

    if (accessConditions.length > 0) {
      query = query.or(accessConditions.join(','))
    } else {
      // Default: show public, system, and own templates
      query = query.or(
        `is_public.eq.true,is_system.eq.true,created_by.eq.${user.id}`
      )
    }

    // Apply category filter
    if (category) {
      query = query.eq('category', category)
    }

    // Apply search filter
    if (search && search.trim()) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`)
    }

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        query = query.order('created_at', { ascending: false })
        break
      case 'name':
        query = query.order('name', { ascending: true })
        break
      case 'usage':
        query = query.order('usage_count', { ascending: false })
        break
      case 'rating':
        query = query.order('rating', { ascending: false })
        break
      case 'popular':
      default:
        query = query
          .order('usage_count', { ascending: false })
          .order('rating', { ascending: false })
          .order('created_at', { ascending: false })
        break
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1)

    const { data: templates, error, count } = await query

    if (error) {
      console.error('Error fetching templates:', error)
      return NextResponse.json(
        { error: 'Failed to fetch templates' },
        { status: 500 }
      )
    }

    // Transform data to include variable count
    const templatesWithMeta = (templates || []).map((template: any) => ({
      ...template,
      variableCount: template.template_variables?.[0]?.count || 0,
      categoryName: template.template_categories?.name,
      categoryIcon: template.template_categories?.icon,
      categoryColor: template.template_categories?.color,
      template_variables: undefined, // Remove the raw count data
      template_categories: undefined, // Remove the raw category data
    }))

    return NextResponse.json({
      success: true,
      data: templatesWithMeta,
      pagination: {
        total: count || 0,
        limit,
        offset,
        hasMore: (count || 0) > offset + limit,
      },
      meta: {
        search,
        category,
        sortBy,
      },
    })
  } catch (error) {
    console.error('Templates API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/templates - Create a new template
export async function POST(request: NextRequest) {
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

    const body = await request.json()
    const {
      name,
      description,
      category = 'general',
      content = {},
      thumbnail,
      isPublic = false,
      variables = [],
    } = body

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Template name is required' },
        { status: 400 }
      )
    }

    if (!content || typeof content !== 'object') {
      return NextResponse.json(
        { error: 'Template content is required' },
        { status: 400 }
      )
    }

    // Validate category exists
    const { data: categoryExists } = await supabase
      .from('template_categories')
      .select('id')
      .eq('id', category)
      .single()

    if (!categoryExists) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
    }

    // Create template
    const { data: template, error: templateError } = await supabase
      .from('templates')
      .insert({
        name: name.trim(),
        description: description?.trim() || null,
        category,
        content,
        thumbnail,
        is_public: isPublic,
        created_by: user.id,
      })
      .select()
      .single()

    if (templateError) {
      console.error('Error creating template:', templateError)
      return NextResponse.json(
        { error: 'Failed to create template' },
        { status: 500 }
      )
    }

    // Create template variables if provided
    if (variables && Array.isArray(variables) && variables.length > 0) {
      const variableInserts = variables.map((variable: any, index: number) => ({
        template_id: template.id,
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
      }))

      const { error: variablesError } = await supabase
        .from('template_variables')
        .insert(variableInserts)

      if (variablesError) {
        console.error('Error creating template variables:', variablesError)
        // Don't fail the entire request, just log the error
      }
    }

    // Fetch the complete template with variables
    const { data: completeTemplate } = await supabase.rpc(
      'get_template_with_variables',
      {
        p_template_id: template.id,
      }
    )

    return NextResponse.json({
      success: true,
      data: completeTemplate || template,
    })
  } catch (error) {
    console.error('Create template API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
