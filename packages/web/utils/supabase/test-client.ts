import { createMockUser } from '@/utils/test-helpers'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Creates a mock Supabase client for testing that returns mock data
 * instead of making real database queries
 */
export function createMockSupabaseClient(): SupabaseClient {
  const mockUser = createMockUser()

  // Store mock data in memory
  const mockData = {
    notes: new Map(),
    tags: new Map(),
    folders: new Map(),
  }

  const mockClient = {
    auth: {
      getUser: () => Promise.resolve({ data: { user: mockUser }, error: null }),
      getSession: () =>
        Promise.resolve({ data: { session: { user: mockUser } }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
    from: (table: string) => {
      const tableData = mockData[table as keyof typeof mockData] || new Map()

      return {
        select: (columns?: string) => ({
          eq: (column: string, value: any) => ({
            single: () => {
              const item = Array.from(tableData.values()).find(
                (item: any) => item[column] === value
              )
              return Promise.resolve({
                data: item || null,
                error: item ? null : { code: 'PGRST116', message: 'Not found' },
              })
            },
            order: (column: string, options?: any) => ({
              limit: (count: number) =>
                Promise.resolve({
                  data: Array.from(tableData.values()).slice(0, count),
                  error: null,
                }),
            }),
            ...Promise.resolve({
              data: Array.from(tableData.values()).filter(
                (item: any) => item[column] === value
              ),
              error: null,
            }),
          }),
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
          select: () =>
            Promise.resolve({
              data: {
                ...data,
                id: `mock-${Date.now()}`,
                created_at: new Date().toISOString(),
              },
              error: null,
            }),
          single: () => {
            const newItem = {
              ...data,
              id: `mock-${Date.now()}`,
              created_at: new Date().toISOString(),
            }
            tableData.set(newItem.id, newItem)
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
            }
            return Promise.resolve({ data: null, error: null })
          },
        }),
      }
    },
  }

  return mockClient as unknown as SupabaseClient
}
