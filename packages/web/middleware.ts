import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check for dev auth bypass cookie for e2e testing
  const devAuthBypass = request.cookies.get('dev-auth-bypass')?.value === 'true'

  // In test mode with auth bypass, skip all auth checks
  if (devAuthBypass) {
    return NextResponse.next()
  }

  // For non-test environments, check if user should be redirected to auth
  // We avoid importing Supabase here due to Edge Runtime limitations
  const pathname = request.nextUrl.pathname

  // Allow access to auth pages
  if (pathname.startsWith('/auth')) {
    return NextResponse.next()
  }

  // Check for Supabase auth cookies as a simple auth check
  const hasAuthCookie =
    request.cookies.has('sb-auth-token') ||
    request.cookies.has('supabase-auth-token') ||
    request.cookies.get('sb-access-token') !== undefined ||
    request.cookies.get('sb-refresh-token') !== undefined

  // If no auth cookies found, redirect to auth page
  if (!hasAuthCookie) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * - auth (authentication page)
     * - api routes
     * - public assets in the public folder
     * - notes-test (test pages)
     * - mockServiceWorker.js (MSW service worker)
     */
    '/((?!_next/static|_next/image|favicon.ico|auth|api|notes-test|mockServiceWorker\\.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json)$).*)',
  ],
  unstable_allowDynamic: [
    // Allow Supabase modules that use Node.js APIs
    '**/node_modules/@supabase/**',
  ],
}
