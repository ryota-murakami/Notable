import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { server } from '../mocks/server'
import { http, HttpResponse } from 'msw'

// Mock component that simulates note creation
function NoteCreator() {
  const [notes, setNotes] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const [title, setTitle] = React.useState('')

  const fetchNotes = async () => {
    try {
      const response = await fetch('/rest/v1/notes')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (Array.isArray(data)) {
        setNotes(data)
      } else {
        console.error('Expected array of notes, got:', data)
        setNotes([])
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error)
      setNotes([])
    }
  }

  React.useEffect(() => {
    fetchNotes()
  }, [])

  const createNote = async () => {
    setLoading(true)
    try {
      const response = await fetch('/rest/v1/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content: 'New note content',
          user_id: 'mock-user-id',
        }),
      })

      if (response.ok) {
        await fetchNotes() // Refresh the list
        setTitle('')
      }
    } catch (error) {
      console.error('Failed to create note:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Notes App</h1>
      <div>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Note title'
          data-testid='note-title-input'
        />
        <button onClick={createNote} disabled={loading || !title}>
          {loading ? 'Creating...' : 'Create Note'}
        </button>
      </div>
      <ul data-testid='notes-list'>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

describe('MSW Integration Tests', () => {
  beforeEach(() => {
    // Reset handlers to default state before each test
    server.resetHandlers()
  })

  it('should display existing notes on load', async () => {
    render(<NoteCreator />)

    await waitFor(() => {
      const notesList = screen.getByTestId('notes-list')
      expect(notesList.children).toHaveLength(2)
    })

    expect(screen.getByText('Test Note 1')).toBeInTheDocument()
    expect(screen.getByText('Test Note 2')).toBeInTheDocument()
  })

  it('should create a new note', async () => {
    // Override the GET handler to return an empty list initially
    const notesList: any[] = []

    server.use(
      http.get('/rest/v1/notes', () => {
        return HttpResponse.json(notesList)
      }),
      http.post('/rest/v1/notes', async ({ request }) => {
        const body = (await request.json()) as Record<string, any>
        const newNote = {
          id: 'new-note-id',
          ...body,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
        notesList.push(newNote)
        return HttpResponse.json(newNote)
      })
    )

    render(<NoteCreator />)

    // Initially no notes
    await waitFor(() => {
      const notesList = screen.getByTestId('notes-list')
      expect(notesList.children).toHaveLength(0)
    })

    // Create a new note
    const input = screen.getByTestId('note-title-input')
    const button = screen.getByText('Create Note')

    fireEvent.change(input, { target: { value: 'My New Note' } })
    fireEvent.click(button)

    // Wait for the note to be created and displayed
    await waitFor(() => {
      expect(screen.getByText('My New Note')).toBeInTheDocument()
    })

    const notesListElement = screen.getByTestId('notes-list')
    expect(notesListElement.children).toHaveLength(1)
  })

  it('should handle server errors gracefully', async () => {
    // Override to return an error
    server.use(
      http.get('/rest/v1/notes', () => {
        return HttpResponse.json(
          { error: 'Internal Server Error' },
          { status: 500 }
        )
      })
    )

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<NoteCreator />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to fetch notes:',
        expect.any(Error)
      )
    })

    consoleSpy.mockRestore()
  })
})

describe('Sync Service Integration', () => {
  it('should handle sync status check', async () => {
    const response = await fetch('/rest/v1/sync/status')
    const status = await response.json()

    expect(status).toEqual({
      status: 'connected',
      last_sync: expect.any(String),
      pending_changes: 0,
    })
  })

  // Skip file upload test for now - MSW file upload handling needs additional setup
  it.skip('should handle file uploads', async () => {
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' })
    const formData = new FormData()
    formData.append('file', file)

    // Use a full URL for testing
    const response = await fetch(
      'http://localhost:3000/storage/v1/object/notes-attachments/test.txt',
      {
        method: 'POST',
        body: formData,
      }
    )

    expect(response.ok).toBe(true)
    const result = await response.json()

    expect(result).toHaveProperty('Key')
    expect(result).toHaveProperty('url')
    expect(result.url).toContain('notes-attachments')
  })
})

describe('Health Check', () => {
  it('should return healthy status', async () => {
    const response = await fetch('/rest/v1/health')
    const health = await response.json()

    expect(health).toEqual({
      status: 'ok',
      timestamp: expect.any(String),
    })
  })
})
