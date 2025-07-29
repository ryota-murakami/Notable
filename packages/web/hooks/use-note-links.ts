'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import type { Database } from '@/types/database'

type NoteLink = Database['public']['Tables']['note_links']['Row']
type NoteLinkInsert = Database['public']['Tables']['note_links']['Insert']

const supabase = createClient()

export function useNoteLinks(noteId: string) {
  return useQuery({
    queryKey: ['note-links', noteId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('note_links')
        .select(
          `
          *,
          to_note:notes!to_note_id(id, title),
          from_note:notes!from_note_id(id, title)
        `
        )
        .or(`from_note_id.eq.${noteId},to_note_id.eq.${noteId}`)
        .order('created_at', { ascending: false })

      if (error) throw error

      // Separate outgoing and incoming links
      const outgoingLinks =
        data?.filter((link: any) => link.from_note_id === noteId) || []
      const backlinks =
        data?.filter((link: any) => link.to_note_id === noteId) || []

      return { outgoingLinks, backlinks, allLinks: data || [] }
    },
    enabled: !!noteId,
  })
}

export function useCreateNoteLink() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (link: NoteLinkInsert) => {
      const { data, error } = await supabase
        .from('note_links')
        .insert(link)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      // Invalidate queries for both notes involved in the link
      queryClient.invalidateQueries({
        queryKey: ['note-links', data.from_note_id],
      })
      queryClient.invalidateQueries({
        queryKey: ['note-links', data.to_note_id],
      })
    },
  })
}

export function useDeleteNoteLink() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (linkId: string) => {
      const { error } = await supabase
        .from('note_links')
        .delete()
        .eq('id', linkId)

      if (error) throw error
    },
    onSuccess: (_, linkId) => {
      // Invalidate all note-links queries since we don't know which notes were affected
      queryClient.invalidateQueries({ queryKey: ['note-links'] })
    },
  })
}

// Search for notes by title for wiki linking
export function useNoteSearch(query: string) {
  return useQuery({
    queryKey: ['note-search', query],
    queryFn: async () => {
      if (!query.trim()) return []

      const { data, error } = await supabase
        .from('notes')
        .select('id, title')
        .ilike('title', `%${query}%`)
        .limit(10)

      if (error) throw error
      return data || []
    },
    enabled: query.length > 0,
  })
}
