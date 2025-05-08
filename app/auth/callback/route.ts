import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This makes the route compatible with static export
// For auth callback, we'll use a client-side approach instead
export const dynamic = "force-static"

export async function GET(request: NextRequest) {
  // For static export, we'll redirect to a client-side handler
  return NextResponse.redirect(new URL("/auth-handler", request.url))
}
