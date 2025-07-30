import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// GET /api/templates/categories - Get all template categories with counts
export async function GET(request: NextRequest) {
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

    // Get categories with template counts
    const { data: categories, error } = await supabase
      .from('template_categories')
      .select(
        `
        *,
        templates!inner(count)
      `
      )
      .order('display_order')

    if (error) {
      console.error('Error fetching template categories:', error)
      return NextResponse.json(
        { error: 'Failed to fetch categories' },
        { status: 500 }
      )
    }

    // Transform data to include template count per category
    // We need to manually count accessible templates per category
    const categoriesWithCounts = await Promise.all(
      (categories || []).map(async (category: any) => {
        // Count templates user has access to in this category
        const { count } = await supabase
          .from('templates')
          .select('*', { count: 'exact', head: true })
          .eq('category', category.id)
          .or(`is_public.eq.true,is_system.eq.true,created_by.eq.${user.id}`)

        return {
          id: category.id,
          name: category.name,
          description: category.description,
          icon: category.icon,
          color: category.color,
          displayOrder: category.display_order,
          isSystem: category.is_system,
          templateCount: count || 0,
          createdAt: category.created_at,
        }
      })
    )

    return NextResponse.json({
      success: true,
      data: categoriesWithCounts,
    })
  } catch (error) {
    console.error('Template categories API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
