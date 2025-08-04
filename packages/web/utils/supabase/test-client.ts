import { createMockUser } from '@/utils/test-helpers'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Creates a mock Supabase client for testing that returns mock data
 * instead of making real database queries
 */
export function createMockSupabaseClient(): SupabaseClient {
  const mockUser = createMockUser()

  // Store mock data in memory and localStorage for persistence
  const getStoredData = (table: string) => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`mock-${table}`)
      if (stored) {
        const array = JSON.parse(stored)
        const map = new Map()
        array.forEach((item: any) => map.set(item.id, item))
        return map
      }
    }
    return new Map()
  }

  const saveStoredData = (table: string, map: Map<string, any>) => {
    if (typeof window !== 'undefined') {
      const array = Array.from(map.values())
      localStorage.setItem(`mock-${table}`, JSON.stringify(array))
    }
  }

  const mockData = {
    notes: getStoredData('notes'),
    tags: getStoredData('tags'),
    folders: getStoredData('folders'),
    note_links: getStoredData('note_links'),
  }

  const mockClient = {
    auth: {
      getUser: () => Promise.resolve({ data: { user: mockUser }, error: null }),
      getSession: () =>
        Promise.resolve({ data: { session: { user: mockUser } }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      signInWithPassword: () =>
        Promise.resolve({
          data: { user: mockUser, session: { user: mockUser } },
          error: null,
        }),
      signInWithOAuth: () =>
        Promise.resolve({ data: { url: 'mock-oauth-url' }, error: null }),
      signUp: () =>
        Promise.resolve({
          data: { user: mockUser, session: null },
          error: null,
        }),
      resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
      refreshSession: () =>
        Promise.resolve({
          data: { user: mockUser, session: { user: mockUser } },
          error: null,
        }),
      onAuthStateChange: (callback: (event: string, session: any) => void) => {
        // Return a subscription object with unsubscribe method
        return {
          data: {
            subscription: {
              unsubscribe: () => {},
            },
          },
        }
      },
      updateUser: () =>
        Promise.resolve({ data: { user: mockUser }, error: null }),
      setSession: () =>
        Promise.resolve({
          data: { user: mockUser, session: { user: mockUser } },
          error: null,
        }),
    },
    rpc: (funcName: string, params?: any) => {
      // Mock RPC responses
      if (funcName === 'search_templates') {
        return Promise.resolve({
          data: [
            {
              id: 'daily-journal',
              name: 'Daily Journal',
              description: 'Daily journal template for Notable',
              content: JSON.stringify([
                {
                  type: 'heading',
                  level: 1,
                  children: [{ text: '{{title}}' }],
                },
                {
                  type: 'paragraph',
                  children: [{ text: 'Date: {{date}}' }],
                },
                {
                  type: 'heading',
                  level: 2,
                  children: [{ text: 'Gratitude' }],
                },
                {
                  type: 'paragraph',
                  children: [{ text: '1. {{gratitude}}' }],
                },
                {
                  type: 'heading',
                  level: 2,
                  children: [{ text: "Today's Goals" }],
                },
                {
                  type: 'paragraph',
                  children: [{ text: '' }],
                },
              ]),
              variables: {
                title: { type: 'text', default: 'Daily Journal' },
                date: { type: 'date', default: 'today' },
                gratitude: { type: 'text', default: '' },
              },
              category: 'journal',
              tags: ['daily', 'journal'],
              is_custom: false,
            },
          ],
          error: null,
        })
      }
      return Promise.resolve({ data: null, error: null })
    },
    from: (table: string) => {
      const tableData = mockData[table as keyof typeof mockData] || new Map()

      return {
        select: (columns?: string) => ({
          or: (query: string) => ({
            order: (column: string, options?: any) =>
              Promise.resolve({
                data: Array.from(tableData.values()),
                error: null,
              }),
          }),
          eq: (column: string, value: any) => {
            const filters = [{ column, value }]

            const queryBuilder = {
              eq: (column2: string, value2: any) => {
                filters.push({ column: column2, value: value2 })
                return queryBuilder
              },
              is: (column2: string, value2: any) => {
                filters.push({ column: column2, value: value2 })
                return queryBuilder
              },
              single: () => {
                let results = Array.from(tableData.values())
                filters.forEach((filter) => {
                  results = results.filter((item: any) => {
                    if (filter.value === null) {
                      return item[filter.column] === null
                    }
                    return item[filter.column] === filter.value
                  })
                })
                const item = results[0]
                return Promise.resolve({
                  data: item || null,
                  error: item
                    ? null
                    : { code: 'PGRST116', message: 'Not found' },
                })
              },
              order: (column: string, options?: any) => ({
                limit: (count: number) =>
                  Promise.resolve({
                    data: Array.from(tableData.values()).slice(0, count),
                    error: null,
                  }),
              }),
              then: (resolve: Function) => {
                let results = Array.from(tableData.values())
                filters.forEach((filter) => {
                  results = results.filter((item: any) => {
                    if (filter.value === null) {
                      return item[filter.column] === null
                    }
                    return item[filter.column] === filter.value
                  })
                })
                resolve({ data: results, error: null })
              },
            }

            return queryBuilder
          },
          order: (column: string, options?: any) => ({
            limit: (count: number) =>
              Promise.resolve({
                data: Array.from(tableData.values()).slice(0, count),
                error: null,
              }),
          }),
          single: () =>
            Promise.resolve({
              data: Array.from(tableData.values())[0] || null,
              error: null,
            }),
          then: (resolve: Function) => {
            resolve({ data: Array.from(tableData.values()), error: null })
          },
        }),
        insert: (data: any) => ({
          select: () => {
            const newItem = {
              ...data,
              id: data.id || `mock-note-${Date.now()}`,
              custom_id: data.custom_id,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              // Ensure content is proper Slate format if not provided
              content:
                data.content ||
                JSON.stringify([
                  {
                    type: 'paragraph',
                    children: [{ text: '' }],
                  },
                ]),
              user_id: mockUser.id,
              title: data.title || 'Untitled',
              tags: data.tags || [],
              is_daily_note: data.is_daily_note || false,
            }
            tableData.set(newItem.id, newItem)
            saveStoredData(table, tableData)

            // Store the note ID in sessionStorage for tests
            if (typeof window !== 'undefined') {
              window.sessionStorage.setItem('lastCreatedNoteId', newItem.id)
            }

            return Promise.resolve({
              data: newItem,
              error: null,
            })
          },
          single: () => {
            const newItem = {
              ...data,
              id: data.id || `mock-note-${Date.now()}`,
              custom_id: data.custom_id,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              // Ensure content is proper Slate format if not provided
              content:
                data.content ||
                JSON.stringify([
                  {
                    type: 'paragraph',
                    children: [{ text: '' }],
                  },
                ]),
              user_id: mockUser.id,
              title: data.title || 'Untitled',
              tags: data.tags || [],
              is_daily_note: data.is_daily_note || false,
            }
            tableData.set(newItem.id, newItem)
            saveStoredData(table, tableData)

            // Store the note ID in sessionStorage for tests
            if (typeof window !== 'undefined') {
              window.sessionStorage.setItem('lastCreatedNoteId', newItem.id)
            }

            return Promise.resolve({ data: newItem, error: null })
          },
        }),
        update: (data: any) => ({
          eq: (column: string, value: any) => ({
            select: () => {
              const item = Array.from(tableData.values()).find(
                (item: any) => item[column] === value
              )
              if (item) {
                const updated = {
                  ...item,
                  ...data,
                  updated_at: new Date().toISOString(),
                }
                tableData.set(item.id, updated)
                saveStoredData(table, tableData)
                return Promise.resolve({ data: updated, error: null })
              }
              return Promise.resolve({
                data: null,
                error: { message: 'Not found' },
              })
            },
          }),
        }),
        delete: () => ({
          eq: (column: string, value: any) => {
            const item = Array.from(tableData.values()).find(
              (item: any) => item[column] === value
            )
            if (item) {
              tableData.delete(item.id)
              saveStoredData(table, tableData)
            }
            return Promise.resolve({ data: null, error: null })
          },
        }),
      }
    },
  }

  return mockClient as unknown as SupabaseClient
}
