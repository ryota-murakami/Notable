import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export function middleware(request: NextRequest) {
  return updateSession(request)
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
     */
    '/((?!_next/static|_next/image|favicon.ico|auth|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json)$).*)',
  ],
  unstable_allowDynamic: [
    // Allow Supabase modules that use Node.js APIs
    '**/node_modules/@supabase/**',
  ],
}
