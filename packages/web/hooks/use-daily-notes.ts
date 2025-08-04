'use client'

import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/utils/supabase/client'
import { toast } from '@/hooks/use-toast'
import { TemplateEngine } from '@/utils/template-engine'
import type { Note } from '@/types/note'

const supabase = createClient()

/**
 * Hook for managing daily notes functionality
 */
export function useDailyNotes() {
  const router = useRouter()
  const queryClient = useQueryClient()

  // Generate daily note ID based on date
  const getDailyNoteId = useCallback((date: Date = new Date()) => {
    const dateStr = date.toISOString().split('T')[0] // YYYY-MM-DD format
    return `daily-${dateStr}`
  }, [])

  // Generate daily note title
  const getDailyNoteTitle = useCallback((date: Date = new Date()) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [])

  // Check if a daily note exists for a specific date
  const { data: todaysDailyNote, isLoading: isLoadingTodaysNote } = useQuery({
    queryKey: ['daily-note', getDailyNoteId()],
    queryFn: async () => {
      const { data: user } = await supabase.auth.getUser()
      if (!user.user) throw new Error('Not authenticated')

      const dailyNoteId = getDailyNoteId()

      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.user.id)
        .eq('custom_id', dailyNoteId)
        .is('deleted_at', null)
        .single()

      if (error && error.code !== 'PGRST116') {
        // PGRST116 is "not found" error, which is expected if no daily note exists
        throw error
      }

      return data as Note | null
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  // Get daily notes for a date range
  const getDailyNotesInRange = useCallback(
    async (startDate: Date, endDate: Date) => {
      const { data: user } = await supabase.auth.getUser()
      if (!user.user) throw new Error('Not authenticated')

      const startId = getDailyNoteId(startDate)
      const endId = getDailyNoteId(endDate)

      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.user.id)
        .gte('custom_id', startId)
        .lte('custom_id', endId)
        .like('custom_id', 'daily-%')
        .is('deleted_at', null)
        .order('custom_id', { ascending: false })

      if (error) throw error
      return data as Note[]
    },
    [getDailyNoteId]
  )

  // Create or get today's daily note
  const createOrGetDailyNote = useMutation({
    mutationFn: async (date: Date = new Date()) => {
      const { data: user } = await supabase.auth.getUser()
      if (!user.user) throw new Error('Not authenticated')

      const dailyNoteId = getDailyNoteId(date)
      const dailyNoteTitle = getDailyNoteTitle(date)

      // First check if daily note already exists
      const { data: existingNote } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.user.id)
        .eq('custom_id', dailyNoteId)
        .is('deleted_at', null)
        .single()

      if (existingNote) {
        return existingNote as Note
      }

      // Create new daily note from Daily Journal template
      try {
        // Get the daily journal template
        const templates = await TemplateEngine.searchTemplates({
          query: 'Daily Journal',
          category: 'journal',
          limit: 1,
        })

        let noteContent = [
          {
            type: 'h1',
            children: [{ text: dailyNoteTitle }],
          },
          {
            type: 'h2',
            children: [{ text: "Today's Focus" }],
          },
          {
            type: 'ul',
            children: [
              { type: 'li', children: [{ text: '' }] },
              { type: 'li', children: [{ text: '' }] },
              { type: 'li', children: [{ text: '' }] },
            ],
          },
          {
            type: 'h2',
            children: [{ text: 'Notes' }],
          },
          {
            type: 'p',
            children: [{ text: '' }],
          },
          {
            type: 'h2',
            children: [{ text: 'Reflection' }],
          },
          {
            type: 'p',
            children: [{ text: 'What went well today?' }],
          },
          {
            type: 'p',
            children: [{ text: 'What could be improved?' }],
          },
          {
            type: 'p',
            children: [{ text: 'What am I grateful for?' }],
          },
        ]

        // If Daily Journal template is available, use it
        if (templates.length > 0) {
          const template = templates[0]
          const templateResult = await TemplateEngine.processTemplateLocally(
            template.id,
            {
              date: date.toISOString().split('T')[0],
              user:
                user.user.user_metadata?.full_name ||
                user.user.email?.split('@')[0] ||
                'User',
            }
          )

          if (templateResult) {
            noteContent = templateResult.content
          }
        }

        // Create the daily note
        const { data: newNote, error } = await supabase
          .from('notes')
          .insert({
            user_id: user.user.id,
            title: dailyNoteTitle,
            content: noteContent,
            custom_id: dailyNoteId,
            is_daily_note: true,
          })
          .select()
          .single()

        if (error) throw error

        // Track template usage if we used the template
        if (templates.length > 0) {
          await TemplateEngine.trackTemplateUsage(
            templates[0].id,
            'create_note',
            newNote.id,
            { isDailyNote: true, date: date.toISOString().split('T')[0] }
          )
        }

        return newNote as Note
      } catch (templateError) {
        // If template processing fails, create a basic daily note
        console.warn(
          'Template processing failed, creating basic daily note:',
          templateError
        )

        const { data: newNote, error } = await supabase
          .from('notes')
          .insert({
            user_id: user.user.id,
            title: dailyNoteTitle,
            content: JSON.stringify([
              {
                type: 'paragraph',
                children: [{ text: '' }],
              },
            ]),
            custom_id: dailyNoteId,
            is_daily_note: true,
          })
          .select()
          .single()

        if (error) throw error
        return newNote as Note
      }
    },
    onSuccess: (note) => {
      queryClient.invalidateQueries({ queryKey: ['daily-note'] })
      queryClient.invalidateQueries({ queryKey: ['notes'] })

      toast({
        title: 'Daily Note Ready',
        description: `Created daily note for ${getDailyNoteTitle(new Date(note.created_at))}`,
      })

      return note
    },
    onError: (error) => {
      console.error('Failed to create daily note:', error)
      toast({
        title: 'Error',
        description: 'Failed to create daily note. Please try again.',
        variant: 'destructive',
      })
    },
  })

  // Navigate to today's daily note (create if doesn't exist)
  const goToTodaysDailyNote = useCallback(async () => {
    try {
      const note = await createOrGetDailyNote.mutateAsync(new Date())
      router.push(`/notes/${note.id}`)
    } catch (error) {
      console.error('Failed to navigate to daily note:', error)
    }
  }, [createOrGetDailyNote, router])

  // Navigate to daily note for specific date
  const goToDailyNote = useCallback(
    async (date: Date) => {
      try {
        const note = await createOrGetDailyNote.mutateAsync(date)
        router.push(`/notes/${note.id}`)
      } catch (error) {
        console.error('Failed to navigate to daily note:', error)
      }
    },
    [createOrGetDailyNote, router]
  )

  // Get daily notes for current week
  const { data: thisWeeksDailyNotes } = useQuery({
    queryKey: ['daily-notes', 'this-week'],
    queryFn: async () => {
      const today = new Date()
      const startOfWeek = new Date(today)
      startOfWeek.setDate(today.getDate() - today.getDay()) // Sunday
      const endOfWeek = new Date(today)
      endOfWeek.setDate(today.getDate() + (6 - today.getDay())) // Saturday

      return getDailyNotesInRange(startOfWeek, endOfWeek)
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  })

  // Check if user has daily notes habit (created notes in last 7 days)
  const dailyNotesStreak = useMemo(() => {
    if (!thisWeeksDailyNotes) return 0

    const today = new Date()
    let streak = 0

    for (let i = 0; i < 7; i++) {
      const checkDate = new Date(today)
      checkDate.setDate(today.getDate() - i)
      const dailyNoteId = getDailyNoteId(checkDate)

      const noteExists = thisWeeksDailyNotes.some(
        (note) => note.custom_id === dailyNoteId
      )

      if (noteExists) {
        streak++
      } else if (i === 0) {
        // If today's note doesn't exist, streak is 0
        break
      } else {
        // If any previous day is missing, stop counting
        break
      }
    }

    return streak
  }, [thisWeeksDailyNotes, getDailyNoteId])

  return {
    // Data
    todaysDailyNote,
    thisWeeksDailyNotes,
    dailyNotesStreak,

    // Loading states
    isLoadingTodaysNote,
    isCreatingDailyNote: createOrGetDailyNote.isPending,

    // Actions
    goToTodaysDailyNote,
    goToDailyNote,
    createOrGetDailyNote: createOrGetDailyNote.mutateAsync,
    getDailyNotesInRange,

    // Utilities
    getDailyNoteId,
    getDailyNoteTitle,
  }
}

/**
 * Hook for daily notes quick actions
 */
export function useDailyNotesQuickActions() {
  const { goToTodaysDailyNote, isCreatingDailyNote, todaysDailyNote } =
    useDailyNotes()

  return {
    quickAccessToday: goToTodaysDailyNote,
    isLoading: isCreatingDailyNote,
    hasToddaysNote: !!todaysDailyNote,
  }
}
