// Search Result Highlighting System

import { type SearchMatch } from './types'

export interface HighlightOptions {
  className?: string
  maxHighlights?: number
  contextLength?: number
  caseSensitive?: boolean
  highlightTag?: string
}

export interface HighlightedText {
  text: string
  highlighted: boolean
  match?: SearchMatch
}

export class SearchHighlighter {
  private options: Required<HighlightOptions>

  constructor(options: HighlightOptions = {}) {
    this.options = {
      className: options.className || 'search-highlight',
      maxHighlights: options.maxHighlights || 100,
      contextLength: options.contextLength || 150,
      caseSensitive: options.caseSensitive || false,
      highlightTag: options.highlightTag || 'mark',
    }
  }

  // Highlight search matches in HTML
  highlightHTML(text: string, matches: SearchMatch[]): string {
    if (!text || matches.length === 0) return text

    // Sort matches by start position to process them in order
    const sortedMatches = [...matches].sort((a, b) => a.start - b.start)

    // Remove overlapping matches
    const nonOverlappingMatches = this.removeOverlaps(sortedMatches)

    // Apply highlights from end to beginning to maintain positions
    let result = text
    for (let i = nonOverlappingMatches.length - 1; i >= 0; i--) {
      const match = nonOverlappingMatches[i]
      const beforeMatch = result.substring(0, match.start)
      const matchText = result.substring(match.start, match.end)
      const afterMatch = result.substring(match.end)

      const highlightedMatch = `<${this.options.highlightTag} class="${this.options.className}" data-field="${match.field}">${this.escapeHTML(matchText)}</${this.options.highlightTag}>`

      result = beforeMatch + highlightedMatch + afterMatch
    }

    return result
  }

  // Highlight search matches and return array of text segments
  highlightSegments(text: string, matches: SearchMatch[]): HighlightedText[] {
    if (!text || matches.length === 0) {
      return [{ text, highlighted: false }]
    }

    const sortedMatches = [...matches].sort((a, b) => a.start - b.start)
    const nonOverlappingMatches = this.removeOverlaps(sortedMatches)

    const segments: HighlightedText[] = []
    let currentPosition = 0

    for (const match of nonOverlappingMatches) {
      // Add non-highlighted text before the match
      if (match.start > currentPosition) {
        segments.push({
          text: text.substring(currentPosition, match.start),
          highlighted: false,
        })
      }

      // Add highlighted match
      segments.push({
        text: text.substring(match.start, match.end),
        highlighted: true,
        match,
      })

      currentPosition = match.end
    }

    // Add remaining text after the last match
    if (currentPosition < text.length) {
      segments.push({
        text: text.substring(currentPosition),
        highlighted: false,
      })
    }

    return segments
  }

  // Generate snippet with highlighted matches
  generateSnippet(
    text: string,
    matches: SearchMatch[],
    maxLength: number = this.options.contextLength
  ): string {
    if (!text || matches.length === 0) {
      return this.truncateText(text, maxLength)
    }

    // Find the best match position (first match or highest scoring match)
    const bestMatch = matches.reduce((best, current) => {
      return !best || current.start < best.start ? current : best
    })

    // Calculate snippet boundaries
    const matchCenter = bestMatch.start + (bestMatch.end - bestMatch.start) / 2
    const halfLength = maxLength / 2

    let start = Math.max(0, Math.floor(matchCenter - halfLength))
    let end = Math.min(text.length, Math.floor(matchCenter + halfLength))

    // Adjust to word boundaries if possible
    start = this.findWordBoundary(text, start, 'backward')
    end = this.findWordBoundary(text, end, 'forward')

    const snippet = text.substring(start, end)
    const adjustedMatches = matches
      .filter((match) => match.start >= start && match.end <= end)
      .map((match) => ({
        ...match,
        start: match.start - start,
        end: match.end - start,
      }))

    const highlightedSnippet = this.highlightHTML(snippet, adjustedMatches)

    // Add ellipsis if text was truncated
    const prefix = start > 0 ? '...' : ''
    const suffix = end < text.length ? '...' : ''

    return prefix + highlightedSnippet + suffix
  }

  // Highlight matches in React components (returns JSX-like structure)
  highlightReact(
    text: string,
    matches: SearchMatch[]
  ): Array<{
    type: 'text' | 'highlight'
    content: string
    match?: SearchMatch
  }> {
    const segments = this.highlightSegments(text, matches)

    return segments.map((segment) => ({
      type: segment.highlighted ? 'highlight' : 'text',
      content: segment.text,
      match: segment.match,
    }))
  }

  // Create custom highlight renderer
  createRenderer(
    renderHighlight: (text: string, match: SearchMatch) => string
  ) {
    return (text: string, matches: SearchMatch[]): string => {
      const segments = this.highlightSegments(text, matches)

      return segments
        .map((segment) => {
          if (segment.highlighted && segment.match) {
            return renderHighlight(segment.text, segment.match)
          }
          return segment.text
        })
        .join('')
    }
  }

  // Helper methods
  private removeOverlaps(matches: SearchMatch[]): SearchMatch[] {
    if (matches.length <= 1) return matches

    const result: SearchMatch[] = []
    let lastEnd = 0

    for (const match of matches) {
      if (match.start >= lastEnd) {
        result.push(match)
        lastEnd = match.end
      } else if (match.end > lastEnd) {
        // Merge overlapping matches
        const lastMatch = result[result.length - 1]
        if (lastMatch) {
          lastMatch.end = Math.max(lastMatch.end, match.end)
          lastMatch.context.after = match.context.after
          lastEnd = lastMatch.end
        }
      }
    }

    return result.slice(0, this.options.maxHighlights)
  }

  private findWordBoundary(
    text: string,
    position: number,
    direction: 'forward' | 'backward'
  ): number {
    const wordBoundaryRegex = /\b/

    if (direction === 'backward') {
      for (let i = position; i >= 0; i--) {
        if (wordBoundaryRegex.test(text[i]) || text[i] === ' ') {
          return i
        }
      }
      return 0
    } else {
      for (let i = position; i < text.length; i++) {
        if (wordBoundaryRegex.test(text[i]) || text[i] === ' ') {
          return i
        }
      }
      return text.length
    }
  }

  private truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text

    const truncated = text.substring(0, maxLength - 3)
    const lastSpace = truncated.lastIndexOf(' ')

    if (lastSpace > maxLength * 0.7) {
      return `${truncated.substring(0, lastSpace)}...`
    }

    return `${truncated}...`
  }

  private escapeHTML(text: string): string {
    if (typeof document === 'undefined') {
      // Fallback for SSR - basic HTML escape
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    }

    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
}

// Pre-configured highlighters for different use cases
export const NoteHighlighter = new SearchHighlighter({
  className: 'note-search-highlight',
  maxHighlights: 50,
  contextLength: 200,
})

export const TitleHighlighter = new SearchHighlighter({
  className: 'title-search-highlight',
  maxHighlights: 10,
  contextLength: 100,
})

export const TagHighlighter = new SearchHighlighter({
  className: 'tag-search-highlight',
  maxHighlights: 20,
  contextLength: 50,
})

// Utility functions for common highlighting patterns
export const HighlightUtils = {
  // Highlight search terms in a note title
  highlightTitle: (title: string, searchTerm: string): string => {
    if (!searchTerm.trim()) return title

    const matches: SearchMatch[] = []
    const searchLower = searchTerm.toLowerCase()
    const titleLower = title.toLowerCase()

    let index = 0
    while ((index = titleLower.indexOf(searchLower, index)) !== -1) {
      matches.push({
        field: 'title',
        value: title,
        start: index,
        end: index + searchTerm.length,
        context: {
          before: title.substring(Math.max(0, index - 20), index),
          match: title.substring(index, index + searchTerm.length),
          after: title.substring(
            index + searchTerm.length,
            Math.min(title.length, index + searchTerm.length + 20)
          ),
        },
      })
      index += searchTerm.length
    }

    return TitleHighlighter.highlightHTML(title, matches)
  },

  // Highlight multiple search terms
  highlightMultipleTerms: (text: string, terms: string[]): string => {
    if (!terms.length) return text

    const matches: SearchMatch[] = []

    terms.forEach((term) => {
      if (!term.trim()) return

      const termLower = term.toLowerCase()
      const textLower = text.toLowerCase()

      let index = 0
      while ((index = textLower.indexOf(termLower, index)) !== -1) {
        matches.push({
          field: 'content',
          value: text,
          start: index,
          end: index + term.length,
          context: {
            before: text.substring(Math.max(0, index - 30), index),
            match: text.substring(index, index + term.length),
            after: text.substring(
              index + term.length,
              Math.min(text.length, index + term.length + 30)
            ),
          },
        })
        index += term.length
      }
    })

    return NoteHighlighter.highlightHTML(text, matches)
  },

  // Create a highlighted excerpt from long text
  createExcerpt: (
    text: string,
    searchTerm: string,
    maxLength: number = 300
  ): string => {
    if (!searchTerm.trim()) {
      return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text
    }

    const searchLower = searchTerm.toLowerCase()
    const textLower = text.toLowerCase()
    const matchIndex = textLower.indexOf(searchLower)

    if (matchIndex === -1) {
      return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text
    }

    const matches: SearchMatch[] = [
      {
        field: 'content',
        value: text,
        start: matchIndex,
        end: matchIndex + searchTerm.length,
        context: {
          before: text.substring(Math.max(0, matchIndex - 50), matchIndex),
          match: text.substring(matchIndex, matchIndex + searchTerm.length),
          after: text.substring(
            matchIndex + searchTerm.length,
            Math.min(text.length, matchIndex + searchTerm.length + 50)
          ),
        },
      },
    ]

    return NoteHighlighter.generateSnippet(text, matches, maxLength)
  },
}
