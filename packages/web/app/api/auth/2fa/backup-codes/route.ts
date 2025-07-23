import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      }
    )

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has 2FA enabled
    const { data: settings } = await supabase
      .from('user_2fa_settings')
      .select('totp_enabled')
      .eq('user_id', user.id)
      .single()

    if (!settings?.totp_enabled) {
      return NextResponse.json(
        { error: '2FA not enabled for this account' },
        { status: 400 }
      )
    }

    // Get unused backup codes
    const { data: backupCodes, error } = await supabase
      .from('user_backup_codes')
      .select('code, created_at')
      .eq('user_id', user.id)
      .eq('used', false)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching backup codes:', error)
      return NextResponse.json(
        { error: 'Failed to fetch backup codes' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      backupCodes: backupCodes || [],
      count: backupCodes?.length || 0,
    })
  } catch (error) {
    console.error('Backup codes fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      }
    )

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has 2FA enabled
    const { data: settings } = await supabase
      .from('user_2fa_settings')
      .select('totp_enabled')
      .eq('user_id', user.id)
      .single()

    if (!settings?.totp_enabled) {
      return NextResponse.json(
        { error: '2FA not enabled for this account' },
        { status: 400 }
      )
    }

    // Generate new backup codes
    const { data: backupCodes, error } = await supabase.rpc(
      'generate_backup_codes',
      { p_user_id: user.id }
    )

    if (error) {
      console.error('Error generating backup codes:', error)
      return NextResponse.json(
        { error: 'Failed to generate backup codes' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      backupCodes: backupCodes || [],
      message: 'New backup codes generated successfully',
    })
  } catch (error) {
    console.error('Backup codes generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
