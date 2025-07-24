export interface SearchToken {
  type: 'TEXT' | 'FIELD' | 'OPERATOR' | 'REGEX' | 'QUOTED'
  value: string
  field?: string
}

export interface ParsedSearch {
  tokens: SearchToken[]
  hasAdvancedOperators: boolean
  fields: {
    title?: string[]
    content?: string[]
    tag?: string[]
    text?: string[] // General text search
  }
  operators: {
    and: string[][]
    or: string[][]
    not: string[]
  }
  regex?: string
}

// Advanced search operators
const OPERATORS = {
  AND: /\bAND\b/i,
  OR: /\bOR\b/i,
  NOT: /\bNOT\b|-/,
}

// Field-specific search patterns
const FIELD_PATTERNS = {
  title: /title:/i,
  content: /content:/i,
  tag: /tag:/i,
}

export class SearchParser {
  /**
   * Parse search query into tokens and structured data
   */
  static parse(query: string): ParsedSearch {
    const result: ParsedSearch = {
      tokens: [],
      hasAdvancedOperators: false,
      fields: {
        text: [],
      },
      operators: {
        and: [],
        or: [],
        not: [],
      },
    }

    if (!query.trim()) {
      return result
    }

    // First, extract quoted strings to preserve them (but not within field:value pairs)
    const quotedStrings: string[] = []
    let processedQuery = query

    // Extract standalone quoted strings (not part of field:value)
    const fieldPattern = /(\w+):"([^"]+)"/g
    const fieldQuotes: Array<{
      field: string
      value: string
      placeholder: string
    }> = []

    processedQuery = processedQuery.replace(
      fieldPattern,
      (match, field, quoted) => {
        const placeholder = `__FIELD_QUOTED_${fieldQuotes.length}__`
        fieldQuotes.push({ field, value: quoted, placeholder })
        return `${field}:${placeholder}`
      }
    )

    // Now extract remaining quoted strings
    processedQuery = processedQuery.replace(/"([^"]+)"/g, (match, quoted) => {
      const index = quotedStrings.length
      quotedStrings.push(quoted)
      return `__QUOTED_${index}__`
    })

    // Check for regex pattern (enclosed in forward slashes)
    const regexMatch = processedQuery.match(/\/(.+?)\//g)
    if (regexMatch) {
      result.regex = regexMatch[0].slice(1, -1)
      result.hasAdvancedOperators = true
      processedQuery = processedQuery.replace(regexMatch[0], '')
    }

    // Split by spaces but preserve field:value pairs
    const parts = processedQuery.split(/\s+/).filter(Boolean)

    let i = 0
    while (i < parts.length) {
      const part = parts[i]

      // Restore quoted strings
      const quotedMatch = part.match(/__QUOTED_(\d+)__/)
      if (quotedMatch) {
        const quotedText = quotedStrings[parseInt(quotedMatch[1])]
        result.tokens.push({ type: 'QUOTED', value: quotedText })
        result.fields.text!.push(quotedText)
        i++
        continue
      }

      // Check for field-specific search
      let fieldFound = false
      for (const [field, pattern] of Object.entries(FIELD_PATTERNS)) {
        if (pattern.test(part)) {
          let value = part.split(':')[1] || ''

          // Check if value is a field quoted placeholder
          const fieldQuoteMatch = value.match(/__FIELD_QUOTED_(\d+)__/)
          if (fieldQuoteMatch) {
            const fieldQuote = fieldQuotes[parseInt(fieldQuoteMatch[1])]
            if (fieldQuote) {
              value = fieldQuote.value
            }
          }

          if (value) {
            result.tokens.push({ type: 'FIELD', value, field })
            if (!result.fields[field as keyof typeof result.fields]) {
              result.fields[field as keyof typeof result.fields] = []
            }
            result.fields[field as keyof typeof result.fields]!.push(value)
            result.hasAdvancedOperators = true
            fieldFound = true
            break
          }
        }
      }

      if (fieldFound) {
        i++
        continue
      }

      // Check for boolean operators
      if (/^AND$/i.test(part)) {
        result.tokens.push({ type: 'OPERATOR', value: 'AND' })
        result.hasAdvancedOperators = true
        i++
        continue
      }

      if (/^OR$/i.test(part)) {
        result.tokens.push({ type: 'OPERATOR', value: 'OR' })
        result.hasAdvancedOperators = true
        i++
        continue
      }

      if (/^NOT$/i.test(part)) {
        const nextPart = parts[i + 1]
        if (nextPart) {
          result.tokens.push({ type: 'OPERATOR', value: 'NOT' })
          result.operators.not.push(nextPart)
          result.hasAdvancedOperators = true
          i++ // Skip next part since it was consumed
        }
        i++
        continue
      }

      if (part.startsWith('-') && part.length > 1) {
        const value = part.slice(1)
        result.tokens.push({ type: 'OPERATOR', value: 'NOT' })
        result.operators.not.push(value)
        result.hasAdvancedOperators = true
        i++
        continue
      }

      // Regular text token
      result.tokens.push({ type: 'TEXT', value: part })
      result.fields.text!.push(part)
      i++
    }

    // Process tokens to build AND/OR groups
    result.operators.and = this.buildAndGroups(result.tokens)
    result.operators.or = this.buildOrGroups(result.tokens)

    return result
  }

  /**
   * Build AND groups from tokens
   */
  private static buildAndGroups(tokens: SearchToken[]): string[][] {
    const groups: string[][] = []
    let currentGroup: string[] = []
    let expectingOperand = false

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (token.type === 'TEXT' || token.type === 'QUOTED') {
        currentGroup.push(token.value)
        expectingOperand = false
      } else if (token.type === 'OPERATOR' && token.value === 'AND') {
        expectingOperand = true
      } else if (token.type === 'OPERATOR' && token.value === 'OR') {
        if (currentGroup.length > 0) {
          groups.push(currentGroup)
          currentGroup = []
        }
        expectingOperand = false
      }
    }

    if (currentGroup.length > 0) {
      groups.push(currentGroup)
    }

    return groups
  }

  /**
   * Build OR groups from tokens
   */
  private static buildOrGroups(tokens: SearchToken[]): string[][] {
    const groups: string[][] = []
    let currentGroup: string[] = []
    let inOrChain = false

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (token.type === 'TEXT' || token.type === 'QUOTED') {
        if (inOrChain) {
          currentGroup.push(token.value)
        }
      } else if (token.type === 'OPERATOR' && token.value === 'OR') {
        if (!inOrChain && i > 0) {
          const prevToken = tokens[i - 1]
          if (prevToken.type === 'TEXT' || prevToken.type === 'QUOTED') {
            currentGroup.push(prevToken.value)
          }
        }
        inOrChain = true
      } else if (token.type === 'OPERATOR' && token.value === 'AND') {
        if (currentGroup.length > 0) {
          groups.push(currentGroup)
          currentGroup = []
        }
        inOrChain = false
      }
    }

    if (currentGroup.length > 0) {
      groups.push(currentGroup)
    }

    return groups
  }

  /**
   * Convert parsed search back to a normalized query string
   */
  static stringify(parsed: ParsedSearch): string {
    const parts: string[] = []

    // Add field-specific searches
    for (const [field, values] of Object.entries(parsed.fields)) {
      if (field !== 'text' && values && values.length > 0) {
        for (const value of values) {
          parts.push(`${field}:${value}`)
        }
      }
    }

    // Add NOT operators
    for (const value of parsed.operators.not) {
      parts.push(`NOT ${value}`)
    }

    // Add OR groups
    for (const group of parsed.operators.or) {
      if (group.length > 1) {
        parts.push(group.join(' OR '))
      }
    }

    // Add AND groups
    for (const group of parsed.operators.and) {
      if (group.length > 1) {
        parts.push(group.join(' AND '))
      }
    }

    // Add general text
    if (parsed.fields.text && parsed.fields.text.length > 0) {
      parts.push(...parsed.fields.text)
    }

    // Add regex if present
    if (parsed.regex) {
      parts.push(`/${parsed.regex}/`)
    }

    return parts.join(' ')
  }
}
