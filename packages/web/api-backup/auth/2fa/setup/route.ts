import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import speakeasy from 'speakeasy'
import qrcode from 'qrcode'

export async function GET() {
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

    // Check if user already has TOTP enabled
    const { data: existingSecret } = await supabase
      .from('user_totp_secrets')
      .select('verified')
      .eq('user_id', user.id)
      .single()

    if (existingSecret?.verified) {
      return NextResponse.json(
        { error: 'TOTP already enabled for this account' },
        { status: 400 }
      )
    }

    // Generate a new secret
    const secret = speakeasy.generateSecret({
      name: `Notable (${user.email})`,
      issuer: 'Notable',
      length: 32,
    })

    // Store the unverified secret
    const { error: insertError } = await supabase
      .from('user_totp_secrets')
      .upsert({
        user_id: user.id,
        secret: secret.base32,
        verified: false,
      })

    if (insertError) {
      console.error('Error storing TOTP secret:', insertError)
      return NextResponse.json(
        { error: 'Failed to generate TOTP secret' },
        { status: 500 }
      )
    }

    // Generate QR code
    const qrCodeDataUrl = await qrcode.toDataURL(secret.otpauth_url!)

    return NextResponse.json({
      secret: secret.base32,
      qrCode: qrCodeDataUrl,
      manualEntryKey: secret.base32,
    })
  } catch (error) {
    console.error('2FA setup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
