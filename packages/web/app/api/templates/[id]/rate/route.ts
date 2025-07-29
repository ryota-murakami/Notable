import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// POST /api/templates/[id]/rate - Rate a template
export async function POST(
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
    const { rating, comment } = body

    // Validate rating
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          error: 'Rating must be a number between 1 and 5',
        },
        { status: 400 }
      )
    }

    // Check if template exists and is accessible
    const { data: template } = await supabase
      .from('templates')
      .select('id, name')
      .eq('id', templateId)
      .or(`is_public.eq.true,is_system.eq.true,created_by.eq.${user.id}`)
      .single()

    if (!template) {
      return NextResponse.json(
        {
          error: 'Template not found or access denied',
        },
        { status: 404 }
      )
    }

    // Insert or update rating
    const { data: ratingData, error: ratingError } = await supabase
      .from('template_ratings')
      .upsert(
        {
          template_id: templateId,
          user_id: user.id,
          rating,
          comment: comment?.trim() || null,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'template_id,user_id',
        }
      )
      .select()
      .single()

    if (ratingError) {
      console.error('Error rating template:', ratingError)
      return NextResponse.json(
        { error: 'Failed to rate template' },
        { status: 500 }
      )
    }

    // Get updated template ratings
    const { data: updatedTemplate } = await supabase
      .from('templates')
      .select('rating, rating_count')
      .eq('id', templateId)
      .single()

    return NextResponse.json({
      success: true,
      data: {
        ratingId: ratingData.id,
        templateId,
        templateName: template.name,
        userRating: rating,
        comment,
        averageRating: updatedTemplate?.rating || 0,
        totalRatings: updatedTemplate?.rating_count || 0,
      },
      message: 'Template rated successfully',
    })
  } catch (error) {
    console.error('Rate template API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET /api/templates/[id]/rate - Get user's rating for a template
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

    // Get user's rating for this template
    const { data: userRating } = await supabase
      .from('template_ratings')
      .select('rating, comment, created_at, updated_at')
      .eq('template_id', templateId)
      .eq('user_id', user.id)
      .single()

    // Get template's overall rating stats
    const { data: template } = await supabase
      .from('templates')
      .select('rating, rating_count')
      .eq('id', templateId)
      .single()

    if (!template) {
      return NextResponse.json(
        {
          error: 'Template not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        templateId,
        userRating: userRating || null,
        averageRating: template.rating || 0,
        totalRatings: template.rating_count || 0,
      },
    })
  } catch (error) {
    console.error('Get template rating API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/templates/[id]/rate - Remove user's rating
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

    // Delete user's rating
    const { error: deleteError } = await supabase
      .from('template_ratings')
      .delete()
      .eq('template_id', templateId)
      .eq('user_id', user.id)

    if (deleteError) {
      console.error('Error deleting template rating:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete rating' },
        { status: 500 }
      )
    }

    // Get updated template ratings
    const { data: updatedTemplate } = await supabase
      .from('templates')
      .select('rating, rating_count')
      .eq('id', templateId)
      .single()

    return NextResponse.json({
      success: true,
      data: {
        templateId,
        averageRating: updatedTemplate?.rating || 0,
        totalRatings: updatedTemplate?.rating_count || 0,
      },
      message: 'Rating removed successfully',
    })
  } catch (error) {
    console.error('Delete template rating API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
