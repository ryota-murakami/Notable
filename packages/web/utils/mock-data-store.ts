import type { EnhancedTag } from '@/types/tags'
import type { Note } from '@/types/notes'

// In-memory data store for mock mode
class MockDataStore {
  private tags: Map<string, EnhancedTag> = new Map()
  private notes: Map<string, Note> = new Map()
  private noteLinks: Map<string, any[]> = new Map()
  private tagIdCounter = 1
  private noteIdCounter = 1

  constructor() {
    this.initializeDefaultData()
  }

  private initializeDefaultData() {
    // Add some default tags for testing
    const defaultTags: EnhancedTag[] = [
      {
        id: 'tag-1',
        name: 'Development',
        color: '#3b82f6',
        description: 'Development related notes',
        parent_id: null,
        user_id: 'mock-user-id',
        usage_count: 5,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        children: [],
      },
      {
        id: 'tag-2',
        name: 'Frontend',
        color: '#10b981',
        description: 'Frontend development',
        parent_id: 'tag-1',
        user_id: 'mock-user-id',
        usage_count: 3,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        children: [],
      },
    ]

    defaultTags.forEach((tag) => this.tags.set(tag.id, tag))
    this.tagIdCounter = 3 // Start from 3 since we have 2 default tags
  }

  // Tag operations
  getAllTags(): EnhancedTag[] {
    return Array.from(this.tags.values())
  }

  getTag(id: string): EnhancedTag | undefined {
    return this.tags.get(id)
  }

  createTag(
    tagData: Omit<
      EnhancedTag,
      'id' | 'created_at' | 'updated_at' | 'usage_count' | 'children'
    >
  ): EnhancedTag {
    const id = `tag-${this.tagIdCounter++}`
    const now = new Date().toISOString()

    const tag: EnhancedTag = {
      id,
      ...tagData,
      usage_count: 0,
      created_at: now,
      updated_at: now,
      children: [],
    }

    this.tags.set(id, tag)
    return tag
  }

  updateTag(id: string, updates: Partial<EnhancedTag>): EnhancedTag | null {
    const existingTag = this.tags.get(id)
    if (!existingTag) return null

    const updatedTag: EnhancedTag = {
      ...existingTag,
      ...updates,
      id, // Ensure ID doesn't change
      updated_at: new Date().toISOString(),
    }

    this.tags.set(id, updatedTag)
    return updatedTag
  }

  deleteTag(id: string): boolean {
    return this.tags.delete(id)
  }

  tagExists(name: string, excludeId?: string): boolean {
    return Array.from(this.tags.values()).some(
      (tag) =>
        tag.name.toLowerCase() === name.toLowerCase() && tag.id !== excludeId
    )
  }

  // Note operations
  getAllNotes(): Note[] {
    return Array.from(this.notes.values())
  }

  getNote(id: string): Note | undefined {
    return this.notes.get(id)
  }

  createNote(noteData: Omit<Note, 'id' | 'created_at' | 'updated_at'>): Note {
    const id = `note-${this.noteIdCounter++}`
    const now = new Date().toISOString()

    const note: Note = {
      id,
      ...noteData,
      created_at: now,
      updated_at: now,
    }

    this.notes.set(id, note)
    return note
  }

  updateNote(id: string, updates: Partial<Note>): Note | null {
    const existingNote = this.notes.get(id)
    if (!existingNote) return null

    const updatedNote: Note = {
      ...existingNote,
      ...updates,
      id, // Ensure ID doesn't change
      updated_at: new Date().toISOString(),
    }

    this.notes.set(id, updatedNote)
    return updatedNote
  }

  deleteNote(id: string): boolean {
    return this.notes.delete(id)
  }

  // Note links operations
  getNoteLinks(noteId: string): any[] {
    return this.noteLinks.get(noteId) || []
  }

  setNoteLinks(noteId: string, links: any[]): void {
    this.noteLinks.set(noteId, links)
  }

  // Clear all data (useful for testing)
  clear(): void {
    this.tags.clear()
    this.notes.clear()
    this.noteLinks.clear()
    this.tagIdCounter = 1
    this.noteIdCounter = 1
    this.initializeDefaultData()
  }

  // Debug methods
  debug(): void {
    console.info('Mock Data Store Contents:')
    console.info('Tags:', Array.from(this.tags.values()))
    console.info('Notes:', Array.from(this.notes.values()))
    console.info('Note Links:', Array.from(this.noteLinks.entries()))
  }
}

// Singleton instance
const mockDataStore = new MockDataStore()

// Export with the interface expected by API routes
export const mockStore = {
  tags: {
    get: (id: string): EnhancedTag | undefined => {
      return mockDataStore.getTag(id)
    },

    getAll: (userId: string): EnhancedTag[] => {
      return mockDataStore.getAllTags().filter((tag) => tag.user_id === userId)
    },

    findByName: (name: string, userId: string): EnhancedTag | undefined => {
      return mockDataStore
        .getAllTags()
        .find(
          (tag) =>
            tag.name.toLowerCase() === name.toLowerCase() &&
            tag.user_id === userId
        )
    },

    create: (
      tagData: Omit<
        EnhancedTag,
        'id' | 'created_at' | 'updated_at' | 'usage_count' | 'children'
      >
    ): EnhancedTag => {
      return mockDataStore.createTag(tagData)
    },

    update: (id: string, updates: Partial<EnhancedTag>): EnhancedTag | null => {
      return mockDataStore.updateTag(id, updates)
    },

    delete: (id: string): boolean => {
      return mockDataStore.deleteTag(id)
    },
  },

  notes: {
    getAll: (userId: string): Note[] => {
      return mockDataStore
        .getAllNotes()
        .filter((note) => note.user_id === userId)
    },

    create: (
      noteData: Omit<Note, 'id' | 'created_at' | 'updated_at'>
    ): Note => {
      return mockDataStore.createNote(noteData)
    },

    update: (id: string, updates: Partial<Note>): Note | null => {
      return mockDataStore.updateNote(id, updates)
    },

    delete: (id: string): boolean => {
      return mockDataStore.deleteNote(id)
    },
  },
}

export default mockDataStore
