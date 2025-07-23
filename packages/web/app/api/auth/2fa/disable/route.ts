import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import speakeasy from 'speakeasy'

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

    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 })
    }

    // Get user's TOTP secret
    const { data: totpSecret, error: secretError } = await supabase
      .from('user_totp_secrets')
      .select('secret, verified')
      .eq('user_id', user.id)
      .single()

    if (secretError || !totpSecret || !totpSecret.verified) {
      return NextResponse.json(
        { error: 'TOTP not enabled for this account' },
        { status: 400 }
      )
    }

    // Verify the token
    const verified = speakeasy.totp.verify({
      secret: totpSecret.secret,
      encoding: 'base32',
      token: token,
      window: 2,
    })

    if (!verified) {
      // Check if it's a backup code
      const { data: isBackupCode } = await supabase.rpc('verify_backup_code', {
        p_user_id: user.id,
        p_code: token,
      })

      if (!isBackupCode) {
        return NextResponse.json(
          { error: 'Invalid token or backup code' },
          { status: 400 }
        )
      }
    }

    // Disable TOTP
    const { error: deleteError } = await supabase
      .from('user_totp_secrets')
      .delete()
      .eq('user_id', user.id)

    if (deleteError) {
      console.error('Error disabling TOTP:', deleteError)
      return NextResponse.json(
        { error: 'Failed to disable TOTP' },
        { status: 500 }
      )
    }

    // Delete backup codes
    await supabase.from('user_backup_codes').delete().eq('user_id', user.id)

    // Update 2FA settings
    await supabase
      .from('user_2fa_settings')
      .update({
        totp_enabled: false,
        backup_codes_generated: false,
        backup_codes_generated_at: null,
        preferred_method: null,
      })
      .eq('user_id', user.id)

    // Log the action
    await supabase.from('user_2fa_verification_log').insert({
      user_id: user.id,
      method: verified ? 'totp' : 'backup',
      success: true,
      ip_address:
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip'),
      user_agent: request.headers.get('user-agent'),
      error_message: null,
    })

    return NextResponse.json({
      success: true,
      message: 'Two-factor authentication disabled successfully',
    })
  } catch (error) {
    console.error('2FA disable error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
