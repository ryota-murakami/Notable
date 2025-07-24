import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('OAuth callback error:', error)
        return NextResponse.redirect(
          `${requestUrl.origin}/auth?error=callback_error`
        )
      }
    } catch (error) {
      console.error('OAuth callback exception:', error)
      return NextResponse.redirect(
        `${requestUrl.origin}/auth?error=callback_error`
      )
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}
