import { createClient } from '@/lib/supabase/client'

/**
 * Extract wiki links from note content
 * Returns array of note titles referenced in wiki links
 */
export function extractWikiLinks(content: string): string[] {
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g
  const links: string[] = []
  let match

  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const noteTitle = match[1].trim()
    if (noteTitle && !links.includes(noteTitle)) {
      links.push(noteTitle)
    }
  }

  return links
}

/**
 * Update note links based on wiki links in content
 * This function:
 * 1. Extracts wiki links from content
 * 2. Finds or creates target notes
 * 3. Creates note_links records
 * 4. Removes old links that are no longer in content
 */
export async function updateNoteLinks(noteId: string, content: string) {
  try {
    const supabase = createClient()

    // Extract wiki links from content
    const wikiLinks = extractWikiLinks(content)

    if (wikiLinks.length === 0) {
      // If no wiki links, delete all outgoing links from this note
      await supabase.from('note_links').delete().eq('from_note_id', noteId)
      return
    }

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return

    // Find existing notes that match the wiki link titles
    const { data: existingNotes } = await supabase
      .from('notes')
      .select('id, title')
      .in('title', wikiLinks)
      .eq('user_id', user.id)

    if (!existingNotes) return

    // Create a map of title to note ID
    const titleToId = new Map<string, string>()
    existingNotes.forEach((note) => {
      titleToId.set(note.title, note.id)
    })

    // Get current links from this note
    const { data: currentLinks } = await supabase
      .from('note_links')
      .select('id, to_note_id')
      .eq('from_note_id', noteId)

    const currentLinkIds = new Set(
      currentLinks?.map((link) => link.to_note_id) || []
    )
    const newLinkIds = new Set<string>()

    // Create new links for wiki links that point to existing notes
    for (const title of wikiLinks) {
      const targetNoteId = titleToId.get(title)
      if (targetNoteId) {
        newLinkIds.add(targetNoteId)

        // Only create link if it doesn't already exist
        if (!currentLinkIds.has(targetNoteId)) {
          await supabase.from('note_links').insert({
            from_note_id: noteId,
            to_note_id: targetNoteId,
          })
        }
      }
    }

    // Delete links that are no longer in the content
    const linksToDelete =
      currentLinks?.filter((link) => !newLinkIds.has(link.to_note_id)) || []
    if (linksToDelete.length > 0) {
      await supabase
        .from('note_links')
        .delete()
        .in(
          'id',
          linksToDelete.map((link) => link.id)
        )
    }
  } catch (error) {
    console.error('Error updating note links:', error)
  }
}

/**
 * Create a new note if it doesn't exist when clicking a wiki link
 */
export async function createNoteFromWikiLink(title: string, userId: string) {
  try {
    const supabase = createClient()

    // Check if note already exists
    const { data: existingNote } = await supabase
      .from('notes')
      .select('id')
      .eq('title', title)
      .eq('user_id', userId)
      .single()

    if (existingNote) {
      return existingNote.id
    }

    // Create new note
    const { data: newNote, error } = await supabase
      .from('notes')
      .insert({
        title,
        content: '',
        user_id: userId,
      })
      .select('id')
      .single()

    if (error) throw error

    return newNote.id
  } catch (error) {
    console.error('Error creating note from wiki link:', error)
    return null
  }
}
