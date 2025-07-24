import { SearchParser } from '../search-parser'

describe('SearchParser', () => {
  describe('basic text search', () => {
    it('should parse simple text query', () => {
      const result = SearchParser.parse('hello world')

      expect(result.hasAdvancedOperators).toBe(false)
      expect(result.fields.text).toEqual(['hello', 'world'])
      expect(result.tokens).toHaveLength(2)
      expect(result.tokens[0]).toEqual({ type: 'TEXT', value: 'hello' })
      expect(result.tokens[1]).toEqual({ type: 'TEXT', value: 'world' })
    })

    it('should handle empty query', () => {
      const result = SearchParser.parse('')

      expect(result.hasAdvancedOperators).toBe(false)
      expect(result.fields.text).toEqual([])
      expect(result.tokens).toHaveLength(0)
    })

    it('should preserve quoted strings', () => {
      const result = SearchParser.parse('"hello world" test')

      expect(result.fields.text).toEqual(['hello world', 'test'])
      expect(result.tokens).toHaveLength(2)
      expect(result.tokens[0]).toEqual({ type: 'QUOTED', value: 'hello world' })
      expect(result.tokens[1]).toEqual({ type: 'TEXT', value: 'test' })
    })
  })

  describe('field-specific search', () => {
    it('should parse title field search', () => {
      const result = SearchParser.parse('title:meeting')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.fields.title).toEqual(['meeting'])
      expect(result.tokens).toHaveLength(1)
      expect(result.tokens[0]).toEqual({
        type: 'FIELD',
        value: 'meeting',
        field: 'title',
      })
    })

    it('should parse content field search', () => {
      const result = SearchParser.parse('content:important')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.fields.content).toEqual(['important'])
    })

    it('should parse tag field search', () => {
      const result = SearchParser.parse('tag:work')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.fields.tag).toEqual(['work'])
    })

    it('should handle multiple field searches', () => {
      const result = SearchParser.parse('title:meeting content:agenda tag:work')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.fields.title).toEqual(['meeting'])
      expect(result.fields.content).toEqual(['agenda'])
      expect(result.fields.tag).toEqual(['work'])
    })
  })

  describe('boolean operators', () => {
    it('should parse AND operator', () => {
      const result = SearchParser.parse('meeting AND agenda')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.tokens).toContainEqual({ type: 'OPERATOR', value: 'AND' })
      expect(result.operators.and).toHaveLength(1)
      expect(result.operators.and[0]).toEqual(['meeting', 'agenda'])
    })

    it('should parse OR operator', () => {
      const result = SearchParser.parse('meeting OR conference')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.tokens).toContainEqual({ type: 'OPERATOR', value: 'OR' })
      expect(result.operators.or).toHaveLength(1)
      expect(result.operators.or[0]).toEqual(['meeting', 'conference'])
    })

    it('should parse NOT operator', () => {
      const result = SearchParser.parse('meeting NOT draft')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.operators.not).toEqual(['draft'])
    })

    it('should parse minus as NOT operator', () => {
      const result = SearchParser.parse('meeting -draft')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.operators.not).toEqual(['draft'])
    })

    it('should handle complex boolean expressions', () => {
      const result = SearchParser.parse(
        '(meeting OR conference) AND agenda NOT draft'
      )

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.operators.not).toEqual(['draft'])
    })
  })

  describe('regex patterns', () => {
    it('should parse regex pattern', () => {
      const result = SearchParser.parse('/meet.*ing/')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.regex).toBe('meet.*ing')
    })

    it('should handle regex with other search terms', () => {
      const result = SearchParser.parse('title:report /\\d{4}-\\d{2}-\\d{2}/')

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.regex).toBe('\\d{4}-\\d{2}-\\d{2}')
      expect(result.fields.title).toEqual(['report'])
    })
  })

  describe('complex queries', () => {
    it('should parse complex query with all features', () => {
      const result = SearchParser.parse(
        'title:"Project Plan" content:roadmap tag:2024 AND status:active NOT draft'
      )

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.fields.title).toEqual(['Project Plan'])
      expect(result.fields.content).toEqual(['roadmap'])
      expect(result.fields.tag).toEqual(['2024'])
      expect(result.operators.not).toEqual(['draft'])
    })

    it('should handle case-insensitive operators', () => {
      const result = SearchParser.parse(
        'meeting and agenda or conference not draft'
      )

      expect(result.hasAdvancedOperators).toBe(true)
      expect(result.tokens).toContainEqual({ type: 'OPERATOR', value: 'AND' })
      expect(result.tokens).toContainEqual({ type: 'OPERATOR', value: 'OR' })
      expect(result.operators.not).toEqual(['draft'])
    })
  })

  describe('stringify', () => {
    it('should convert parsed search back to string', () => {
      const query = 'title:meeting content:agenda tag:work'
      const parsed = SearchParser.parse(query)
      const stringified = SearchParser.stringify(parsed)

      expect(stringified).toContain('title:meeting')
      expect(stringified).toContain('content:agenda')
      expect(stringified).toContain('tag:work')
    })

    it('should preserve operators in stringified form', () => {
      const query = 'meeting AND agenda NOT draft'
      const parsed = SearchParser.parse(query)
      const stringified = SearchParser.stringify(parsed)

      expect(stringified).toContain('NOT draft')
      expect(stringified).toContain('meeting')
      expect(stringified).toContain('agenda')
    })
  })
})
