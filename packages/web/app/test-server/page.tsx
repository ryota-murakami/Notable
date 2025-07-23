// Server component - no 'use client' directive
export default function TestServerPage() {
  return (
    <div>
      <h1>Server Component Test</h1>
      <p>This is a server-rendered page.</p>
      <p>Current time: {new Date().toISOString()}</p>
    </div>
  )
}
