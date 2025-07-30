import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// GET /api/templates/popular - Get popular/featured templates
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
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 50)
    const category = searchParams.get('category')
    const type = searchParams.get('type') || 'usage' // usage, rating, recent

    // Build query using the popular_templates view
    let query = supabase.from('popular_templates').select('*')

    // Apply category filter
    if (category) {
      query = query.eq('category', category)
    }

    // Apply additional sorting based on type
    switch (type) {
      case 'rating':
        query = query
          .order('rating', { ascending: false })
          .order('rating_count', { ascending: false })
        break
      case 'recent':
        query = query.order('created_at', { ascending: false })
        break
      case 'usage':
      default:
        query = query
          .order('usage_count', { ascending: false })
          .order('rating', { ascending: false })
        break
    }

    // Apply limit
    query = query.limit(limit)

    const { data: templates, error } = await query

    if (error) {
      console.error('Error fetching popular templates:', error)
      return NextResponse.json(
        { error: 'Failed to fetch popular templates' },
        { status: 500 }
      )
    }

    // Transform data for consistent API response
    const transformedTemplates = (templates || []).map((template: any) => ({
      id: template.id,
      name: template.name,
      description: template.description,
      category: template.category,
      categoryName: template.category_name,
      categoryIcon: template.category_icon,
      categoryColor: template.category_color,
      thumbnail: template.thumbnail,
      isPublic: template.is_public,
      isSystem: template.is_system,
      usageCount: template.usage_count,
      rating: template.rating,
      ratingCount: template.rating_count,
      variableCount: template.variable_count,
      createdBy: template.created_by,
      createdAt: template.created_at,
      updatedAt: template.updated_at,
    }))

    return NextResponse.json({
      success: true,
      data: transformedTemplates,
      meta: {
        type,
        category,
        limit,
        total: transformedTemplates.length,
      },
    })
  } catch (error) {
    console.error('Popular templates API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
