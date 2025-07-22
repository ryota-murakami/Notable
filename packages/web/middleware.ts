import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const startTime = Date.now()
  const requestId = crypto.randomUUID()

  try {
    const res = NextResponse.next()

    // Add request ID to headers for tracing
    res.headers.set('x-request-id', requestId)

    // Add security headers
    res.headers.set('X-Content-Type-Options', 'nosniff')
    res.headers.set('X-Frame-Options', 'DENY')
    res.headers.set('X-XSS-Protection', '1; mode=block')
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
      error,
    } = await supabase.auth.getSession()

    if (error) {
      console.error('Middleware auth error:', error, {
        path: req.nextUrl.pathname,
        requestId,
      })
    }

    // Log request details (in production, this would go to a logging service)
    const duration = Date.now() - startTime
    if (process.env.NODE_ENV === 'production') {
      console.log(
        JSON.stringify({
          type: 'request',
          requestId,
          method: req.method,
          path: req.nextUrl.pathname,
          userAgent: req.headers.get('user-agent'),
          userId: session?.user?.id,
          duration,
          timestamp: new Date().toISOString(),
        })
      )
    }

    // If user is not signed in and accessing a protected route, redirect to login
    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    // If user is signed in and accessing auth pages, redirect to dashboard
    if (session && req.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return res
  } catch (error) {
    // Log middleware errors
    console.error('Middleware error:', error, {
      path: req.nextUrl.pathname,
      requestId,
    })

    // Return error response
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|edge).*)',
  ],
}
