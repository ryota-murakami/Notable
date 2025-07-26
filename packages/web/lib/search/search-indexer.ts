// Efficient Search Indexing System

import { SearchableNote, SearchIndex, SearchStats } from './types'

export interface IndexerOptions {
  enableTrigrams?: boolean
  minTokenLength?: number
  maxTokenLength?: number
  stopWords?: string[]
  stemming?: boolean
  caseSensitive?: boolean
  debounceMs?: number
}

export interface IndexUpdate {
  type: 'add' | 'update' | 'delete'
  noteId: string
  note?: SearchableNote
  timestamp: Date
}

export class SearchIndexer {
  private index: Map<string, SearchIndex> = new Map()
  private tokenIndex: Map<string, Set<string>> = new Map() // token -> noteIds
  private trigramIndex: Map<string, Set<string>> = new Map() // trigram -> noteIds
  private options: Required<IndexerOptions>
  private updateQueue: IndexUpdate[] = []
  private isProcessing = false
  private stats: SearchStats

  constructor(options: IndexerOptions = {}) {
    this.options = {
      enableTrigrams: options.enableTrigrams ?? true,
      minTokenLength: options.minTokenLength ?? 2,
      maxTokenLength: options.maxTokenLength ?? 50,
      stopWords: options.stopWords ?? SearchIndexer.getDefaultStopWords(),
      stemming: options.stemming ?? false,
      caseSensitive: options.caseSensitive ?? false,
      debounceMs: options.debounceMs ?? 100,
    }

    this.stats = {
      indexSize: 0,
      totalNotes: 0,
      lastIndexed: new Date(),
      searchTime: 0,
      resultCount: 0,
    }
  }

  // Add or update a note in the index
  async indexNote(note: SearchableNote): Promise<void> {
    const update: IndexUpdate = {
      type: this.index.has(note.id) ? 'update' : 'add',
      noteId: note.id,
      note,
      timestamp: new Date(),
    }

    this.updateQueue.push(update)
    this.processUpdatesDebounced()
  }

  // Remove a note from the index
  async removeNote(noteId: string): Promise<void> {
    const update: IndexUpdate = {
      type: 'delete',
      noteId,
      timestamp: new Date(),
    }

    this.updateQueue.push(update)
    this.processUpdatesDebounced()
  }

  // Bulk index multiple notes
  async indexNotes(notes: SearchableNote[]): Promise<void> {
    const updates: IndexUpdate[] = notes.map((note) => ({
      type: this.index.has(note.id) ? 'update' : 'add',
      noteId: note.id,
      note,
      timestamp: new Date(),
    }))

    this.updateQueue.push(...updates)
    this.processUpdatesDebounced()
  }

  // Search the index for matching notes
  async searchIndex(
    query: string,
    options: { limit?: number; fuzzy?: boolean } = {}
  ): Promise<string[]> {
    const startTime = performance.now()

    if (!query.trim()) return []

    const tokens = this.tokenize(query)
    const noteIds = new Set<string>()

    // Direct token matching
    for (const token of tokens) {
      const matchingNotes = this.tokenIndex.get(token) || new Set()
      matchingNotes.forEach((id) => noteIds.add(id))
    }

    // Trigram matching for fuzzy search
    if (options.fuzzy && this.options.enableTrigrams) {
      const trigrams = this.generateTrigrams(query)
      const trigramMatches = new Map<string, number>() // noteId -> match count

      for (const trigram of trigrams) {
        const matchingNotes = this.trigramIndex.get(trigram) || new Set()
        matchingNotes.forEach((id) => {
          trigramMatches.set(id, (trigramMatches.get(id) || 0) + 1)
        })
      }

      // Add notes with significant trigram matches
      const threshold = Math.max(1, Math.floor(trigrams.length * 0.3))
      trigramMatches.forEach((count, noteId) => {
        if (count >= threshold) {
          noteIds.add(noteId)
        }
      })
    }

    const results = Array.from(noteIds)
    const endTime = performance.now()

    // Update stats
    this.stats.searchTime = endTime - startTime
    this.stats.resultCount = results.length

    return options.limit ? results.slice(0, options.limit) : results
  }

  // Get note from index
  getNote(noteId: string): SearchIndex | undefined {
    return this.index.get(noteId)
  }

  // Get all indexed notes
  getAllNotes(): SearchIndex[] {
    return Array.from(this.index.values())
  }

  // Get search statistics
  getStats(): SearchStats {
    return { ...this.stats }
  }

  // Clear the entire index
  clear(): void {
    this.index.clear()
    this.tokenIndex.clear()
    this.trigramIndex.clear()
    this.updateStats()
  }

  // Export index for persistence
  export(): string {
    const data = {
      index: Array.from(this.index.entries()),
      tokenIndex: Array.from(this.tokenIndex.entries()).map(
        ([token, noteIds]) => [token, Array.from(noteIds)]
      ),
      trigramIndex: Array.from(this.trigramIndex.entries()).map(
        ([trigram, noteIds]) => [trigram, Array.from(noteIds)]
      ),
      stats: this.stats,
      options: this.options,
    }
    return JSON.stringify(data)
  }

  // Import index from persistence
  import(data: string): boolean {
    try {
      const parsed = JSON.parse(data)

      this.index = new Map(parsed.index)
      this.tokenIndex = new Map(
        parsed.tokenIndex.map(([token, noteIds]: [string, string[]]) => [
          token,
          new Set(noteIds),
        ])
      )
      this.trigramIndex = new Map(
        parsed.trigramIndex.map(([trigram, noteIds]: [string, string[]]) => [
          trigram,
          new Set(noteIds),
        ])
      )
      this.stats = parsed.stats || this.stats

      return true
    } catch (error) {
      console.error('Failed to import search index:', error)
      return false
    }
  }

  // Private methods
  private processUpdatesDebounced = this.debounce(() => {
    this.processUpdates()
  }, this.options.debounceMs)

  private async processUpdates(): Promise<void> {
    if (this.isProcessing || this.updateQueue.length === 0) return

    this.isProcessing = true
    const updates = [...this.updateQueue]
    this.updateQueue = []

    try {
      for (const update of updates) {
        switch (update.type) {
          case 'add':
          case 'update':
            if (update.note) {
              await this.addToIndex(update.note)
            }
            break
          case 'delete':
            await this.removeFromIndex(update.noteId)
            break
        }
      }

      this.updateStats()
    } catch (error) {
      console.error('Error processing index updates:', error)
    } finally {
      this.isProcessing = false
    }
  }

  private async addToIndex(note: SearchableNote): Promise<void> {
    // Remove existing entry if updating
    if (this.index.has(note.id)) {
      await this.removeFromIndex(note.id)
    }

    // Create searchable content
    const content = `${note.title} ${note.content} ${note.tags.join(' ')} ${note.path}`
    const tokens = this.tokenize(content)
    const trigrams = this.options.enableTrigrams
      ? this.generateTrigrams(content)
      : new Set<string>()

    // Create index entry
    const indexEntry: SearchIndex = {
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags,
      path: note.path,
      tokens: Array.from(tokens),
      trigrams,
      created_at: new Date(note.created_at),
      updated_at: new Date(note.updated_at),
    }

    // Add to main index
    this.index.set(note.id, indexEntry)

    // Add to token index
    tokens.forEach((token) => {
      if (!this.tokenIndex.has(token)) {
        this.tokenIndex.set(token, new Set())
      }
      this.tokenIndex.get(token)!.add(note.id)
    })

    // Add to trigram index
    if (this.options.enableTrigrams) {
      trigrams.forEach((trigram) => {
        if (!this.trigramIndex.has(trigram)) {
          this.trigramIndex.set(trigram, new Set())
        }
        this.trigramIndex.get(trigram)!.add(note.id)
      })
    }
  }

  private async removeFromIndex(noteId: string): Promise<void> {
    const indexEntry = this.index.get(noteId)
    if (!indexEntry) return

    // Remove from main index
    this.index.delete(noteId)

    // Remove from token index
    for (const token of indexEntry.tokens) {
      const noteSet = this.tokenIndex.get(token)
      if (noteSet) {
        noteSet.delete(noteId)
        if (noteSet.size === 0) {
          this.tokenIndex.delete(token)
        }
      }
    }

    // Remove from trigram index
    for (const trigram of indexEntry.trigrams) {
      const noteSet = this.trigramIndex.get(trigram)
      if (noteSet) {
        noteSet.delete(noteId)
        if (noteSet.size === 0) {
          this.trigramIndex.delete(trigram)
        }
      }
    }
  }

  private tokenize(text: string): Set<string> {
    if (!text) return new Set()

    const tokens = new Set<string>()
    const processedText = this.options.caseSensitive ? text : text.toLowerCase()

    // Split on word boundaries and clean
    const words = processedText
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(
        (word) =>
          word.length >= this.options.minTokenLength &&
          word.length <= this.options.maxTokenLength &&
          !this.options.stopWords.includes(word)
      )

    // Add individual words
    words.forEach((word) => {
      if (this.options.stemming) {
        tokens.add(this.stem(word))
      } else {
        tokens.add(word)
      }
    })

    // Add n-grams for better partial matching
    words.forEach((word) => {
      if (word.length > 3) {
        for (let i = 0; i <= word.length - 3; i++) {
          tokens.add(word.substring(i, i + 3))
        }
      }
    })

    return tokens
  }

  private generateTrigrams(text: string): Set<string> {
    const trigrams = new Set<string>()
    const processedText = this.options.caseSensitive ? text : text.toLowerCase()

    // Pad with spaces for word boundaries
    const paddedText = ` ${processedText} `

    for (let i = 0; i <= paddedText.length - 3; i++) {
      const trigram = paddedText.substring(i, i + 3)
      if (trigram.trim().length > 0) {
        trigrams.add(trigram)
      }
    }

    return trigrams
  }

  private stem(word: string): string {
    // Simple English stemmer - in production you'd use a proper stemming library
    if (word.length < 3) return word

    // Remove common suffixes
    const suffixes = ['ing', 'ed', 'er', 'est', 'ly', 's']
    for (const suffix of suffixes) {
      if (word.endsWith(suffix) && word.length > suffix.length + 2) {
        return word.slice(0, -suffix.length)
      }
    }

    return word
  }

  private updateStats(): void {
    this.stats = {
      ...this.stats,
      indexSize: this.tokenIndex.size + this.trigramIndex.size,
      totalNotes: this.index.size,
      lastIndexed: new Date(),
    }
  }

  private static getDefaultStopWords(): string[] {
    return [
      'a',
      'an',
      'and',
      'are',
      'as',
      'at',
      'be',
      'by',
      'for',
      'from',
      'has',
      'he',
      'in',
      'is',
      'it',
      'its',
      'of',
      'on',
      'that',
      'the',
      'to',
      'was',
      'were',
      'will',
      'with',
      'the',
      'this',
      'but',
      'they',
      'not',
      'or',
      'have',
      'had',
      'what',
      'when',
      'where',
      'who',
      'which',
      'why',
      'how',
      'all',
      'any',
      'both',
      'each',
      'few',
      'more',
      'most',
      'other',
      'some',
      'such',
      'only',
      'own',
      'same',
      'so',
      'than',
      'too',
      'very',
      'can',
      'will',
      'just',
      'should',
      'now',
    ]
  }

  private debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | undefined

    return (...args: Parameters<T>) => {
      const later = () => {
        timeout = undefined
        func(...args)
      }

      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
}

// Singleton instance for global use
export const globalSearchIndexer = new SearchIndexer({
  enableTrigrams: true,
  minTokenLength: 2,
  maxTokenLength: 50,
  stemming: true,
  debounceMs: 200,
})

// Utility functions for common indexing operations
export const IndexerUtils = {
  // Convert a Note to SearchableNote
  noteToSearchable: (note: any): SearchableNote => ({
    id: note.id,
    title: note.title || '',
    content: note.content || '',
    tags: Array.isArray(note.tags) ? note.tags : [],
    path: note.path || '/',
    isFolder: note.is_folder || false,
    created_at: note.created_at || new Date().toISOString(),
    updated_at: note.updated_at || new Date().toISOString(),
    author: note.author,
  }),

  // Batch index notes with progress callback
  batchIndex: async (
    indexer: SearchIndexer,
    notes: any[],
    onProgress?: (processed: number, total: number) => void
  ) => {
    const batchSize = 100
    const total = notes.length

    for (let i = 0; i < notes.length; i += batchSize) {
      const batch = notes.slice(i, i + batchSize)
      const searchableNotes = batch.map(IndexerUtils.noteToSearchable)

      await indexer.indexNotes(searchableNotes)

      if (onProgress) {
        onProgress(Math.min(i + batchSize, total), total)
      }
    }
  },

  // Calculate index health metrics
  getIndexHealth: (indexer: SearchIndexer) => {
    const stats = indexer.getStats()
    const notes = indexer.getAllNotes()

    const averageTokens =
      notes.length > 0
        ? notes.reduce((sum, note) => sum + note.tokens.length, 0) /
          notes.length
        : 0

    const averageTrigramsPerNote =
      notes.length > 0
        ? notes.reduce((sum, note) => sum + note.trigrams.size, 0) /
          notes.length
        : 0

    return {
      totalNotes: stats.totalNotes,
      indexSize: stats.indexSize,
      averageTokensPerNote: Math.round(averageTokens),
      averageTrigramsPerNote: Math.round(averageTrigramsPerNote),
      lastIndexed: stats.lastIndexed,
      memoryUsageEstimate: `${Math.round(stats.indexSize * 0.05)} KB`, // Rough estimate
    }
  },
}
