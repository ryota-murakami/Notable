import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import speakeasy from 'speakeasy'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { token, isSetup } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 })
    }

    // Get user's TOTP secret
    const { data: totpSecret, error: secretError } = await supabase
      .from('user_totp_secrets')
      .select('secret, verified')
      .eq('user_id', user.id)
      .single()

    if (secretError || !totpSecret) {
      return NextResponse.json(
        { error: 'TOTP not set up for this account' },
        { status: 400 }
      )
    }

    // Verify the token
    const verified = speakeasy.totp.verify({
      secret: totpSecret.secret,
      encoding: 'base32',
      token: token,
      window: 2, // Allow 2 intervals before/after for clock skew
    })

    // Log verification attempt
    await supabase.from('user_2fa_verification_log').insert({
      user_id: user.id,
      method: 'totp',
      success: verified,
      ip_address:
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip'),
      user_agent: request.headers.get('user-agent'),
      error_message: verified ? null : 'Invalid token',
    })

    if (!verified) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    }

    // If this is the setup verification, mark TOTP as verified
    if (isSetup && !totpSecret.verified) {
      const { error: updateError } = await supabase
        .from('user_totp_secrets')
        .update({ verified: true })
        .eq('user_id', user.id)

      if (updateError) {
        console.error('Error verifying TOTP:', updateError)
        return NextResponse.json(
          { error: 'Failed to verify TOTP' },
          { status: 500 }
        )
      }

      // Update 2FA settings
      await supabase.from('user_2fa_settings').upsert({
        user_id: user.id,
        totp_enabled: true,
        preferred_method: 'totp',
      })

      // Generate backup codes
      const { data: backupCodes, error: backupError } = await supabase.rpc(
        'generate_backup_codes',
        { p_user_id: user.id }
      )

      if (!backupError && backupCodes) {
        return NextResponse.json({
          success: true,
          message: 'TOTP enabled successfully',
          backupCodes: backupCodes,
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('2FA verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
