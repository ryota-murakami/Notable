import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static assets, API routes, and auth callback
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/auth/callback') ||
    pathname.includes('.') // Skip for files with extensions
  ) {
    return NextResponse.next()
  }

  // Allow access to auth page without redirect
  if (pathname === '/auth' || pathname === '/auth/') {
    return NextResponse.next()
  }

  // Check for dev auth bypass cookie (used in E2E tests)
  const devAuthBypass = request.cookies.get('dev-auth-bypass')
  if (devAuthBypass?.value === 'true') {
    return NextResponse.next()
  }

  // Check authentication for all other routes
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user && pathname !== '/auth') {
      // Redirect to auth if not authenticated
      const url = request.nextUrl.clone()
      url.pathname = '/auth'
      return NextResponse.redirect(url)
    }

    // Allow authenticated users to proceed
    return NextResponse.next()
  } catch (error) {
    // In case of error, allow access (fail open for now)
    console.error('Middleware auth check error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}