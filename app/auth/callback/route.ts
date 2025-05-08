import { NextResponse } from "next/server"

// This makes the route compatible with static export
export const dynamic = "force-static"

// For static export, we'll create a simple static redirect
// The actual auth handling will be done client-side
export function GET() {
  // Redirect to the client-side auth handler
  return NextResponse.redirect(new URL("/auth-handler", "http://localhost:3000"))
}
