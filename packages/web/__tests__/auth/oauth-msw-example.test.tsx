import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'

// Example component that makes API calls
function UserProfile() {
  const [user, setUser] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('/auth/v1/user')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user')
        return res.json()
      })
      .then(setUser)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user found</div>

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

describe('MSW Example - OAuth/Auth Testing', () => {
  it('should display user information when authenticated', async () => {
    // The default handler returns a mock user
    render(<UserProfile />)

    // Wait for the loading state to resolve
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    // Check that user information is displayed
    expect(screen.getByText('User Profile')).toBeInTheDocument()
    expect(screen.getByText('Email: test@example.com')).toBeInTheDocument()
    expect(screen.getByText('ID: mock-user-id')).toBeInTheDocument()
    expect(screen.getByText('Role: authenticated')).toBeInTheDocument()
  })

  it('should handle authentication errors', async () => {
    // Override the handler for this specific test
    server.use(
      http.get('/auth/v1/user', () => {
        return HttpResponse.json(
          { error: 'Unauthorized', message: 'Invalid token' },
          { status: 401 }
        )
      })
    )

    render(<UserProfile />)

    // Wait for the error state
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    expect(screen.getByText('Error: Failed to fetch user')).toBeInTheDocument()
  })

  it('should handle different user roles', async () => {
    // Override to return an admin user
    server.use(
      http.get('/auth/v1/user', () => {
        return HttpResponse.json({
          id: 'admin-user-id',
          email: 'admin@example.com',
          role: 'admin',
          aud: 'authenticated',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
      })
    )

    render(<UserProfile />)

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    expect(screen.getByText('Email: admin@example.com')).toBeInTheDocument()
    expect(screen.getByText('Role: admin')).toBeInTheDocument()
  })
})

// Example of testing OAuth flow
describe('OAuth Login Flow', () => {
  it('should handle OAuth token exchange', async () => {
    const mockToken = await fetch('/auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: 'mock-auth-code',
      }),
    }).then((res) => res.json())

    expect(mockToken).toEqual({
      access_token: 'mock-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: 'mock-refresh-token',
      user: {
        id: 'mock-user-id',
        email: 'test@example.com',
        role: 'authenticated',
      },
    })
  })

  it('should handle signup flow', async () => {
    const newUser = await fetch('/auth/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'newuser@example.com',
        password: 'password123',
      }),
    }).then((res) => res.json())

    expect(newUser).toHaveProperty('id', 'mock-user-id')
    expect(newUser).toHaveProperty('email', 'test@example.com')
    expect(newUser).toHaveProperty('confirmed_at')
  })
})
