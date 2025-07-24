import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js'
import type { Note } from '@/types/note'
import { SearchParser, type ParsedSearch } from './search-parser'
import { createClient } from '@/utils/supabase/client'

export interface SearchResult {
  note: Note
  score: number
  matches: Array<{
    key: string
    value: string
    indices: Array<[number, number]>
  }>
  matchedFields: string[]
}

export interface SearchOptions {
  useServerSearch?: boolean
  limit?: number
  includeHidden?: boolean
}

export class SearchEngine {
  private fuse: Fuse<Note>
  private notes: Note[]

  constructor(notes: Note[]) {
    this.notes = notes.filter((note) => !note.isFolder)

    // Configure Fuse.js with enhanced options
    this.fuse = new Fuse(this.notes, {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'content', weight: 0.3 },
        { name: 'tags', weight: 0.1 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      findAllMatches: true,
      useExtendedSearch: true,
    })
  }

  /**
   * Perform advanced search with support for operators and field-specific queries
   */
  async search(
    query: string,
    options: SearchOptions = {}
  ): Promise<SearchResult[]> {
    if (!query.trim()) {
      return []
    }

    const parsed = SearchParser.parse(query)

    // If advanced operators are used and server search is enabled, use PostgreSQL
    if (parsed.hasAdvancedOperators && options.useServerSearch) {
      return this.serverSearch(query, parsed, options)
    }

    // Otherwise, use client-side search
    return this.clientSearch(parsed, options)
  }

  /**
   * Client-side search using Fuse.js with advanced operators
   */
  private clientSearch(
    parsed: ParsedSearch,
    options: SearchOptions = {}
  ): SearchResult[] {
    let results: SearchResult[] = []
    const processedNotes = new Set<string>()

    // Handle regex search
    if (parsed.regex) {
      try {
        const regex = new RegExp(parsed.regex, 'gi')
        for (const note of this.notes) {
          const titleMatch = note.title?.match(regex)
          const contentMatch = note.content?.match(regex)

          if (titleMatch || contentMatch) {
            const matches: Array<{
              key: string
              value: string
              indices: Array<[number, number]>
            }> = []
            if (titleMatch && note.title) {
              const index = note.title.indexOf(titleMatch[0])
              if (index !== -1) {
                matches.push({
                  key: 'title',
                  value: note.title,
                  indices: [
                    [index, index + titleMatch[0].length - 1] as [
                      number,
                      number,
                    ],
                  ],
                })
              }
            }
            if (contentMatch && note.content) {
              const index = note.content.indexOf(contentMatch[0])
              if (index !== -1) {
                matches.push({
                  key: 'content',
                  value: note.content,
                  indices: [
                    [index, index + contentMatch[0].length - 1] as [
                      number,
                      number,
                    ],
                  ],
                })
              }
            }

            results.push({
              note,
              score: 0.9, // High score for regex matches
              matches,
              matchedFields: [
                ...(titleMatch ? ['title'] : []),
                ...(contentMatch ? ['content'] : []),
              ],
            })
            processedNotes.add(note.id)
          }
        }
      } catch (e) {
        console.error('Invalid regex pattern:', e)
      }
    }

    // Handle field-specific searches
    for (const [field, values] of Object.entries(parsed.fields)) {
      if (!values || values.length === 0) continue

      for (const value of values) {
        if (field === 'title') {
          const fieldResults = this.searchByField('title', value)
          this.mergeResults(results, fieldResults, processedNotes)
        } else if (field === 'content') {
          const fieldResults = this.searchByField('content', value)
          this.mergeResults(results, fieldResults, processedNotes)
        } else if (field === 'tag') {
          const tagResults = this.searchByTag(value)
          this.mergeResults(results, tagResults, processedNotes)
        }
      }
    }

    // For general text search
    if (parsed.fields.text && parsed.fields.text.length > 0) {
      for (const value of parsed.fields.text) {
        const textResults = this.fuse.search(value)
        const mapped = this.mapFuseResults(textResults)
        this.mergeResults(results, mapped, processedNotes)
      }
    }

    // Apply boolean operators first if they exist
    if (parsed.operators.and.length > 0 || parsed.operators.or.length > 0) {
      results = this.applyBooleanOperators(results, parsed.operators)
    }

    // Then apply NOT operators to filter out unwanted results
    if (parsed.operators.not.length > 0) {
      results = this.applyNotOperators(results, parsed.operators.not)
    }

    // Sort by score and apply limit
    results.sort((a, b) => b.score - a.score)

    if (options.limit) {
      return results.slice(0, options.limit)
    }

    return results
  }

  /**
   * Server-side search using PostgreSQL full-text search
   */
  private async serverSearch(
    query: string,
    parsed: ParsedSearch,
    options: SearchOptions = {}
  ): Promise<SearchResult[]> {
    try {
      const supabase = createClient()

      // Get authenticated user
      const { data: userData, error: authError } = await supabase.auth.getUser()
      if (authError || !userData.user) {
        console.error('Authentication error:', authError)
        return this.clientSearch(parsed, options)
      }

      // Convert parsed search to PostgreSQL tsquery format
      const tsQuery = this.buildTsQuery(parsed)

      const { data, error } = await supabase.rpc('search_notes', {
        search_query: tsQuery,
        user_uuid: userData.user.id,
      })

      if (error) {
        console.error('Server search error:', error)
        // Fallback to client search
        return this.clientSearch(parsed, options)
      }

      // Map server results to SearchResult format
      const results: SearchResult[] = (data || [])
        .map((row: any) => {
          const note = this.notes.find((n) => n.id === row.id)
          if (!note) return null

          return {
            note,
            score: row.rank || 0,
            matches: [],
            matchedFields: ['title', 'content'], // Server search doesn't provide field-level info
          }
        })
        .filter(Boolean) as SearchResult[]

      if (options.limit) {
        return results.slice(0, options.limit)
      }

      return results
    } catch (error) {
      console.error('Server search error:', error)
      // Fallback to client search
      return this.clientSearch(parsed, options)
    }
  }

  /**
   * Search by specific field
   */
  private searchByField(
    field: 'title' | 'content',
    value: string
  ): SearchResult[] {
    const results: SearchResult[] = []
    const searchValue = value.toLowerCase()

    for (const note of this.notes) {
      const fieldValue = note[field]?.toLowerCase() || ''

      if (fieldValue.includes(searchValue)) {
        const index = fieldValue.indexOf(searchValue)
        results.push({
          note,
          score: field === 'title' ? 0.9 : 0.7,
          matches: [
            {
              key: field,
              value: note[field] || '',
              indices: [[index, index + searchValue.length - 1]],
            },
          ],
          matchedFields: [field],
        })
      }
    }

    return results
  }

  /**
   * Search by tag
   */
  private searchByTag(tag: string): SearchResult[] {
    const results: SearchResult[] = []
    const searchTag = tag.toLowerCase()

    for (const note of this.notes) {
      if (note.tags?.some((t) => t.toLowerCase().includes(searchTag))) {
        results.push({
          note,
          score: 0.8,
          matches: [
            {
              key: 'tags',
              value: note.tags.join(', '),
              indices: [],
            },
          ],
          matchedFields: ['tags'],
        })
      }
    }

    return results
  }

  /**
   * Map Fuse.js results to SearchResult format
   */
  private mapFuseResults(fuseResults: FuseResult<Note>[]): SearchResult[] {
    return fuseResults.map((result) => ({
      note: result.item,
      score: 1 - (result.score || 0),
      matches: (result.matches || []).map((match) => ({
        key: match.key || '',
        value: match.value || '',
        indices: [...(match.indices || [])],
      })),
      matchedFields: [
        ...new Set((result.matches || []).map((m) => m.key || '')),
      ],
    }))
  }

  /**
   * Merge results without duplicates
   */
  private mergeResults(
    results: SearchResult[],
    newResults: SearchResult[],
    processedNotes: Set<string>
  ): void {
    for (const result of newResults) {
      if (!processedNotes.has(result.note.id)) {
        results.push(result)
        processedNotes.add(result.note.id)
      }
    }
  }

  /**
   * Apply NOT operators to filter out results
   */
  private applyNotOperators(
    results: SearchResult[],
    notTerms: string[]
  ): SearchResult[] {
    return results.filter((result) => {
      const note = result.note
      const combinedText =
        `${note.title} ${note.content} ${note.tags?.join(' ')}`.toLowerCase()

      for (const term of notTerms) {
        if (combinedText.includes(term.toLowerCase())) {
          return false
        }
      }

      return true
    })
  }

  /**
   * Apply AND/OR boolean operators
   */
  private applyBooleanOperators(
    results: SearchResult[],
    operators: { and: string[][]; or: string[][] }
  ): SearchResult[] {
    // If no operators to apply, return original results
    if (operators.and.length === 0 && operators.or.length === 0) {
      return results
    }

    // For OR operators, we need to search for each term and combine results
    if (operators.or.length > 0) {
      const orResults: SearchResult[] = []
      const processedNotes = new Set<string>()

      for (const orGroup of operators.or) {
        for (const term of orGroup) {
          const termResults = this.fuse.search(term)
          const mapped = this.mapFuseResults(termResults)

          for (const result of mapped) {
            if (!processedNotes.has(result.note.id)) {
              orResults.push(result)
              processedNotes.add(result.note.id)
            }
          }
        }
      }

      return orResults
    }

    // For AND operators, filter existing results
    const filteredResults: SearchResult[] = []

    for (const result of results) {
      const note = result.note
      const combinedText =
        `${note.title} ${note.content} ${note.tags?.join(' ')}`.toLowerCase()

      let includeResult = true

      // Check AND groups (all terms in a group must match)
      for (const andGroup of operators.and) {
        const allMatch = andGroup.every((term) =>
          combinedText.includes(term.toLowerCase())
        )
        if (!allMatch) {
          includeResult = false
          break
        }
      }

      if (includeResult) {
        filteredResults.push(result)
      }
    }

    return filteredResults
  }

  /**
   * Build PostgreSQL tsquery from parsed search
   */
  private buildTsQuery(parsed: ParsedSearch): string {
    const parts: string[] = []

    // Add field-specific searches
    if (parsed.fields.title && parsed.fields.title.length > 0) {
      parts.push(parsed.fields.title.join(' & '))
    }

    if (parsed.fields.content && parsed.fields.content.length > 0) {
      parts.push(parsed.fields.content.join(' & '))
    }

    // Add AND groups
    for (const group of parsed.operators.and) {
      if (group.length > 0) {
        parts.push(group.join(' & '))
      }
    }

    // Add OR groups
    for (const group of parsed.operators.or) {
      if (group.length > 0) {
        parts.push(`(${group.join(' | ')})`)
      }
    }

    // Add NOT terms
    for (const term of parsed.operators.not) {
      parts.push(`!${term}`)
    }

    // Add general text
    if (parsed.fields.text && parsed.fields.text.length > 0) {
      parts.push(parsed.fields.text.join(' & '))
    }

    return parts.join(' & ') || parsed.fields.text?.join(' ') || ''
  }

  /**
   * Update notes for the search engine
   */
  updateNotes(notes: Note[]): void {
    this.notes = notes.filter((note) => !note.isFolder)
    this.fuse = new Fuse(this.notes, {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'content', weight: 0.3 },
        { name: 'tags', weight: 0.1 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      findAllMatches: true,
      useExtendedSearch: true,
    })
  }
}
