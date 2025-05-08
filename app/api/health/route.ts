import { NextResponse } from "next/server"

// This makes the route compatible with static export
export const dynamic = "force-static"

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}
