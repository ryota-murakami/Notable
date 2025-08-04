import { NextResponse } from 'next/server'

export async function GET() {
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  const hasDevAuthBypass = cookieStore.get('dev-auth-bypass')?.value === 'true'

  return NextResponse.json({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
    apiMockingEnabled: process.env.NEXT_PUBLIC_API_MOCKING === 'enabled',
    hasDevAuthBypass,
    shouldUseMocking:
      process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' || hasDevAuthBypass,
  })
}
