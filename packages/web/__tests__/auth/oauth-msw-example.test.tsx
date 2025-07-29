/**
 * OAuth Authentication Testing with MSW
 *
 * This file demonstrates how to test OAuth authentication using
 * our new MSW setup. It shows real-world testing scenarios.
 */

import { beforeEach, describe, expect, it } from 'vitest'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { server } from '../../mocks/node'
import { http, HttpResponse } from 'msw'

// Simple component that fetches user data via API
function UserProfile() {
  const [user, setUser] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Direct API call to demonstrate MSW mocking
    fetch('https://test.supabase.co/auth/v1/user', {
      headers: {
        Authorization: 'Bearer test-token',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized')
        return res.json()
      })
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user data</div>

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <p>User ID: {user.id}</p>
    </div>
  )
}

describe('MSW API Mocking', () => {
  beforeEach(() => {
    // Reset any custom handlers
    server.resetHandlers()
  })

  it('should show authenticated user data from MSW', async () => {
    render(<UserProfile />)

    // Wait for the mocked auth data
    await waitFor(() => {
      expect(screen.getByText('Welcome test@example.com')).toBeInTheDocument()
      expect(screen.getByText('User ID: mock-user-id')).toBeInTheDocument()
    })
  })

  it('should handle unauthorized response', async () => {
    // Override to return unauthorized
    server.use(
      http.get('*/auth/v1/user', () => {
        return new HttpResponse(null, { status: 401 })
      })
    )

    render(<UserProfile />)

    await waitFor(() => {
      expect(screen.getByText('Error: Unauthorized')).toBeInTheDocument()
    })
  })

  it('should handle custom user data from MSW', async () => {
    // Override with custom user data
    server.use(
      http.get('*/auth/v1/user', () => {
        return HttpResponse.json({
          id: 'custom-user-123',
          email: 'custom@notable.app',
          role: 'authenticated',
          user_metadata: {
            full_name: 'Custom Test User',
            avatar_url: 'https://example.com/avatar.jpg',
          },
        })
      })
    )

    render(<UserProfile />)

    await waitFor(() => {
      expect(screen.getByText('Welcome custom@notable.app')).toBeInTheDocument()
      expect(screen.getByText('User ID: custom-user-123')).toBeInTheDocument()
    })
  })
})

// Example of testing API endpoints directly
describe('Testing API Endpoints with MSW', () => {
  it('should mock notes API endpoint', async () => {
    const response = await fetch('https://test.supabase.co/rest/v1/notes')
    const notes = await response.json()

    expect(notes).toHaveLength(2)
    expect(notes[0].title).toBe('Test Note 1')
    expect(notes[1].title).toBe('Test Note 2')
  })

  it('should mock note creation', async () => {
    const newNote = {
      title: 'My New Note',
      content: 'This is the content',
      userId: 'user-123',
    }

    const response = await fetch('https://test.supabase.co/rest/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })

    const createdNote = await response.json()

    expect(createdNote.title).toBe('My New Note')
    expect(createdNote.content).toBe('This is the content')
    expect(createdNote.id).toBeDefined()
    expect(createdNote.created_at).toBeDefined()
  })
})
