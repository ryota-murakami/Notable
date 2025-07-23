'use client'

export default function TestPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return (
    <div className='p-4'>
      <h1>Test Page</h1>
      <p>Supabase URL: {supabaseUrl || 'NOT SET'}</p>
      <p>Supabase Key: {supabaseKey ? 'SET' : 'NOT SET'}</p>
    </div>
  )
}
