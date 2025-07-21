import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'E2E test health check endpoint',
    },
    { status: 200 },
  )
}
