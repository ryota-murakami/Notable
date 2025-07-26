// Advanced Search Engine with Fuzzy Matching and Boolean Operators

import Fuse from 'fuse.js'
import {
  SearchQuery,
  SearchResult,
  SearchableNote,
  SearchMatch,
  SearchOptions,
  SearchFilterSet,
} from './types'

export class SearchEngine {
  private fuseIndex: Fuse<SearchableNote>
  private notes: SearchableNote[] = []

  constructor() {
    this.fuseIndex = new Fuse([], {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'content', weight: 0.3 },
        { name: 'tags', weight: 0.2 },
        { name: 'path', weight: 0.1 },
      ],
      threshold: 0.3, // 0.0 = perfect match, 1.0 = match anything
      distance: 100,
      includeScore: true,
      includeMatches: true,
      ignoreLocation: true,
      minMatchCharLength: 2,
      shouldSort: true,
    })
  }

  // Update the search index with new notes
  updateIndex(notes: SearchableNote[]): void {
    this.notes = notes
    this.fuseIndex.setCollection(notes)
  }

  // Main search method
  async search(query: SearchQuery): Promise<SearchResult[]> {
    const { text, filters, options } = query

    if (!text.trim() && !this.hasActiveFilters(filters)) {
      return []
    }

    let results: SearchResult[] = []

    // Apply different search strategies based on options
    if (options.regex && this.isValidRegex(text)) {
      results = this.regexSearch(text, options)
    } else if (options.enableOperators && this.hasBooleanOperators(text)) {
      results = this.booleanSearch(text, options)
    } else if (options.fuzzy !== false) {
      results = this.fuzzySearch(text, options)
    } else {
      results = this.exactSearch(text, options)
    }

    // Apply filters
    if (this.hasActiveFilters(filters)) {
      results = this.applyFilters(results, filters)
    }

    // Apply pagination
    if (options.offset || options.limit) {
      const start = options.offset || 0
      const end = options.limit ? start + options.limit : undefined
      results = results.slice(start, end)
    }

    return results
  }

  // Fuzzy search using Fuse.js
  private fuzzySearch(text: string, options: SearchOptions): SearchResult[] {
    const fuseResults = this.fuseIndex.search(text, {
      limit: options.limit || 100,
    })

    return fuseResults.map((result) => ({
      note: result.item,
      score: 1 - (result.score || 0), // Invert score so higher is better
      matches: this.extractMatches(result.matches || []),
      snippet: this.generateSnippet(result.item, text),
    }))
  }

  // Exact string search
  private exactSearch(text: string, options: SearchOptions): SearchResult[] {
    const searchText = options.caseSensitive ? text : text.toLowerCase()
    const results: SearchResult[] = []

    for (const note of this.notes) {
      const matches: SearchMatch[] = []
      let score = 0

      // Search in different fields
      const fields = options.searchFields || ['title', 'content', 'tags']

      for (const field of fields) {
        const fieldMatches = this.findExactMatches(
          note[field as keyof SearchableNote] as string | string[],
          searchText,
          field,
          options
        )
        matches.push(...fieldMatches)
        score += fieldMatches.length * this.getFieldWeight(field)
      }

      if (matches.length > 0) {
        results.push({
          note,
          score,
          matches,
          snippet: this.generateSnippet(note, text),
        })
      }
    }

    return results.sort((a, b) => b.score - a.score)
  }

  // Regex search
  private regexSearch(pattern: string, options: SearchOptions): SearchResult[] {
    try {
      const flags = options.caseSensitive ? 'g' : 'gi'
      const regex = new RegExp(pattern, flags)
      const results: SearchResult[] = []

      for (const note of this.notes) {
        const matches: SearchMatch[] = []
        let score = 0

        const fields = options.searchFields || ['title', 'content']

        for (const field of fields) {
          const fieldValue = note[field as keyof SearchableNote] as string
          if (typeof fieldValue === 'string') {
            const fieldMatches = this.findRegexMatches(fieldValue, regex, field)
            matches.push(...fieldMatches)
            score += fieldMatches.length * this.getFieldWeight(field)
          }
        }

        if (matches.length > 0) {
          results.push({
            note,
            score,
            matches,
            snippet: this.generateSnippet(note, pattern),
          })
        }
      }

      return results.sort((a, b) => b.score - a.score)
    } catch (error) {
      console.error('Regex search error:', error)
      return []
    }
  }

  // Boolean search with AND, OR, NOT operators
  private booleanSearch(query: string, options: SearchOptions): SearchResult[] {
    const tokens = this.parseBooleanQuery(query)
    const results: SearchResult[] = []

    for (const note of this.notes) {
      if (this.evaluateBooleanQuery(tokens, note, options)) {
        const matches = this.findBooleanMatches(tokens, note, options)
        const score = this.calculateBooleanScore(matches)

        results.push({
          note,
          score,
          matches,
          snippet: this.generateSnippet(note, query),
        })
      }
    }

    return results.sort((a, b) => b.score - a.score)
  }

  // Helper methods
  private findExactMatches(
    fieldValue: string | string[],
    searchText: string,
    field: string,
    options: SearchOptions
  ): SearchMatch[] {
    const matches: SearchMatch[] = []

    if (Array.isArray(fieldValue)) {
      // Handle tags array
      fieldValue.forEach((tag) => {
        const tagText = options.caseSensitive ? tag : tag.toLowerCase()
        if (tagText.includes(searchText)) {
          matches.push({
            field: field as any,
            value: tag,
            start: tagText.indexOf(searchText),
            end: tagText.indexOf(searchText) + searchText.length,
            context: {
              before: '',
              match: tag,
              after: '',
            },
          })
        }
      })
    } else if (typeof fieldValue === 'string') {
      const text = options.caseSensitive ? fieldValue : fieldValue.toLowerCase()
      let index = 0

      while ((index = text.indexOf(searchText, index)) !== -1) {
        const start = Math.max(0, index - 50)
        const end = Math.min(fieldValue.length, index + searchText.length + 50)

        matches.push({
          field: field as any,
          value: fieldValue,
          start: index,
          end: index + searchText.length,
          context: {
            before: fieldValue.slice(start, index),
            match: fieldValue.slice(index, index + searchText.length),
            after: fieldValue.slice(index + searchText.length, end),
          },
        })

        index += searchText.length
      }
    }

    return matches
  }

  private findRegexMatches(
    text: string,
    regex: RegExp,
    field: string
  ): SearchMatch[] {
    const matches: SearchMatch[] = []
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      const start = Math.max(0, match.index - 50)
      const end = Math.min(text.length, match.index + match[0].length + 50)

      matches.push({
        field: field as any,
        value: text,
        start: match.index,
        end: match.index + match[0].length,
        context: {
          before: text.slice(start, match.index),
          match: match[0],
          after: text.slice(match.index + match[0].length, end),
        },
      })

      // Prevent infinite loop
      if (match[0].length === 0) {
        regex.lastIndex++
      }
    }

    return matches
  }

  private parseBooleanQuery(query: string): BooleanToken[] {
    // Simple boolean query parser
    // Supports: "term1 AND term2", "term1 OR term2", "NOT term", "term1 AND NOT term2"
    const tokens: BooleanToken[] = []
    const parts = query.split(/\s+(AND|OR|NOT)\s+/i)

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim()
      if (part.match(/^(AND|OR|NOT)$/i)) {
        tokens.push({
          type: 'operator',
          value: part.toUpperCase() as 'AND' | 'OR' | 'NOT',
        })
      } else {
        tokens.push({ type: 'term', value: part })
      }
    }

    return tokens
  }

  private evaluateBooleanQuery(
    tokens: BooleanToken[],
    note: SearchableNote,
    options: SearchOptions
  ): boolean {
    // Simple boolean evaluation - this could be more sophisticated
    if (tokens.length === 0) return false
    if (tokens.length === 1 && tokens[0].type === 'term') {
      return this.noteContainsTerm(note, tokens[0].value, options)
    }

    // For now, implement basic AND/OR logic
    let result = true
    let currentOperator: 'AND' | 'OR' | 'NOT' = 'AND'

    for (let i = 0; i < tokens.length; i += 2) {
      const token = tokens[i]
      if (token.type === 'term') {
        const termMatch = this.noteContainsTerm(note, token.value, options)

        switch (currentOperator) {
          case 'AND':
            result = result && termMatch
            break
          case 'OR':
            result = result || termMatch
            break
          case 'NOT':
            result = result && !termMatch
            break
        }
      }

      // Get next operator
      if (i + 1 < tokens.length && tokens[i + 1].type === 'operator') {
        currentOperator = tokens[i + 1].value as 'AND' | 'OR' | 'NOT'
      }
    }

    return result
  }

  private noteContainsTerm(
    note: SearchableNote,
    term: string,
    options: SearchOptions
  ): boolean {
    const searchTerm = options.caseSensitive ? term : term.toLowerCase()
    const fields = options.searchFields || ['title', 'content', 'tags']

    return fields.some((field) => {
      const fieldValue = note[field as keyof SearchableNote]
      if (Array.isArray(fieldValue)) {
        return fieldValue.some((item) =>
          options.caseSensitive
            ? item.includes(searchTerm)
            : item.toLowerCase().includes(searchTerm)
        )
      } else if (typeof fieldValue === 'string') {
        const text = options.caseSensitive
          ? fieldValue
          : fieldValue.toLowerCase()
        return text.includes(searchTerm)
      }
      return false
    })
  }

  private findBooleanMatches(
    tokens: BooleanToken[],
    note: SearchableNote,
    options: SearchOptions
  ): SearchMatch[] {
    const matches: SearchMatch[] = []

    tokens.forEach((token) => {
      if (token.type === 'term') {
        const fields = options.searchFields || ['title', 'content', 'tags']
        fields.forEach((field) => {
          const fieldMatches = this.findExactMatches(
            note[field as keyof SearchableNote] as string | string[],
            options.caseSensitive ? token.value : token.value.toLowerCase(),
            field,
            options
          )
          matches.push(...fieldMatches)
        })
      }
    })

    return matches
  }

  private calculateBooleanScore(matches: SearchMatch[]): number {
    return matches.reduce((score, match) => {
      return score + this.getFieldWeight(match.field)
    }, 0)
  }

  private extractMatches(fuseMatches: any[]): SearchMatch[] {
    return fuseMatches.map((match) => ({
      field: match.key as any,
      value: match.value,
      start: match.indices[0]?.[0] || 0,
      end: match.indices[0]?.[1] || 0,
      context: {
        before: match.value.slice(
          Math.max(0, (match.indices[0]?.[0] || 0) - 50),
          match.indices[0]?.[0] || 0
        ),
        match: match.value.slice(
          match.indices[0]?.[0] || 0,
          (match.indices[0]?.[1] || 0) + 1
        ),
        after: match.value.slice(
          (match.indices[0]?.[1] || 0) + 1,
          Math.min(match.value.length, (match.indices[0]?.[1] || 0) + 51)
        ),
      },
    }))
  }

  private generateSnippet(note: SearchableNote, query: string): string {
    const content = note.content || note.title
    if (!content) return ''

    const searchTerm = query.toLowerCase()
    const lowerContent = content.toLowerCase()
    const index = lowerContent.indexOf(searchTerm)

    if (index === -1) {
      return content.slice(0, 150) + (content.length > 150 ? '...' : '')
    }

    const start = Math.max(0, index - 75)
    const end = Math.min(content.length, index + searchTerm.length + 75)

    const snippet = content.slice(start, end)
    return (
      (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '')
    )
  }

  private applyFilters(
    results: SearchResult[],
    filters: SearchFilterSet
  ): SearchResult[] {
    return results.filter((result) => {
      const note = result.note

      // Date range filter
      if (filters.dateRange) {
        const noteDate = new Date(note.updated_at)
        if (
          noteDate < filters.dateRange.start ||
          noteDate > filters.dateRange.end
        ) {
          return false
        }
      }

      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) =>
          note.tags.some((noteTag) =>
            noteTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
        if (!hasMatchingTag) return false
      }

      // Folders filter
      if (filters.folders && filters.folders.length > 0) {
        const hasMatchingFolder = filters.folders.some((folder) =>
          note.path.toLowerCase().includes(folder.toLowerCase())
        )
        if (!hasMatchingFolder) return false
      }

      // Is folder filter
      if (
        filters.isFolder !== undefined &&
        note.isFolder !== filters.isFolder
      ) {
        return false
      }

      // Has content filter
      if (filters.hasContent !== undefined) {
        const hasContent = note.content && note.content.trim().length > 0
        if (hasContent !== filters.hasContent) return false
      }

      return true
    })
  }

  private getFieldWeight(field: string): number {
    const weights: Record<string, number> = {
      title: 0.4,
      content: 0.3,
      tags: 0.2,
      path: 0.1,
    }
    return weights[field] || 0.1
  }

  private hasActiveFilters(filters: SearchFilterSet): boolean {
    return !!(
      filters.dateRange ||
      (filters.tags && filters.tags.length > 0) ||
      (filters.folders && filters.folders.length > 0) ||
      filters.isFolder !== undefined ||
      filters.hasContent !== undefined ||
      filters.author
    )
  }

  private hasBooleanOperators(text: string): boolean {
    return /\b(AND|OR|NOT)\b/i.test(text)
  }

  private isValidRegex(pattern: string): boolean {
    try {
      new RegExp(pattern)
      return true
    } catch {
      return false
    }
  }
}

// Helper types
interface BooleanToken {
  type: 'term' | 'operator'
  value: string
}

// Export the search options and result types
export type { SearchOptions, SearchResult }
