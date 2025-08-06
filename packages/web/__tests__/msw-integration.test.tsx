import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { server } from '../mocks/node'

// Test component that fetches data
function TestComponent() {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('/auth/v1/user', {
      headers: {
        Authorization: 'Bearer test-token',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>No data</div>

  return (
    <div>
      <h1>User: {data.email}</h1>
      <p>ID: {data.id}</p>
    </div>
  )
}

describe('MSW Integration', () => {
  it('should mock API requests correctly', async () => {
    render(<TestComponent />)

    // Wait for the mocked data to be displayed
    await waitFor(() => {
      expect(screen.getByText('User: test@example.com')).toBeInTheDocument()
      expect(screen.getByText('ID: mock-user-id')).toBeInTheDocument()
    })
  })

  it('should allow overriding handlers for specific tests', async () => {
    // Override the default handler for this test
    server.use(
      http.get('/auth/v1/user', () => {
        return HttpResponse.json({
          id: 'custom-test-id',
          email: 'custom@test.com',
        })
      })
    )

    render(<TestComponent />)

    await waitFor(() => {
      expect(screen.getByText('User: custom@test.com')).toBeInTheDocument()
      expect(screen.getByText('ID: custom-test-id')).toBeInTheDocument()
    })
  })

  it('should handle error responses', async () => {
    // Override to return an error
    server.use(
      http.get('/auth/v1/user', () => {
        return new HttpResponse(null, { status: 401 })
      })
    )

    render(<TestComponent />)

    await waitFor(() => {
      expect(screen.getByText('No data')).toBeInTheDocument()
    })
  })
})
