/**
 * Unit tests for the issue reference extraction logic used in the
 * close-issues-on-pr-merge.yml GitHub Actions workflow
 */

describe('Issue Reference Extraction', () => {
  // Function to extract issue numbers from text (mirrors workflow logic)
  function extractIssueNumbers(text) {
    const issuePattern = /#(\d+)/g
    const matches = []
    let match
    while ((match = issuePattern.exec(text)) !== null) {
      matches.push(parseInt(match[1], 10))
    }
    return [...new Set(matches)] // Remove duplicates
  }

  // Function to extract issue numbers from keywords (mirrors workflow logic)
  function extractKeywordIssues(text) {
    const keywordPattern =
      /(?:clos(?:e[ds]?|ing)|fix(?:e[ds]?|ing)?|resolv(?:e[ds]?|ing))\s+#(\d+)/gi
    const matches = []
    let match
    while ((match = keywordPattern.exec(text)) !== null) {
      matches.push(parseInt(match[1], 10))
    }
    return [...new Set(matches)] // Remove duplicates
  }

  describe('extractIssueNumbers', () => {
    test('should extract single issue number', () => {
      expect(extractIssueNumbers('#123')).toEqual([123])
    })

    test('should extract multiple issue numbers', () => {
      expect(extractIssueNumbers('#123 and #456')).toEqual([123, 456])
    })

    test('should extract issue numbers from mixed text', () => {
      expect(extractIssueNumbers('Fix issue #123 and update #456')).toEqual([
        123, 456,
      ])
    })

    test('should handle duplicates', () => {
      expect(extractIssueNumbers('#123 #123 #456')).toEqual([123, 456])
    })

    test('should return empty array for no matches', () => {
      expect(extractIssueNumbers('No issues here')).toEqual([])
    })

    test('should ignore invalid patterns', () => {
      expect(extractIssueNumbers('# 123 #abc #')).toEqual([])
    })
  })

  describe('extractKeywordIssues', () => {
    test('should extract issue with "fixes" keyword', () => {
      expect(extractKeywordIssues('fixes #123')).toEqual([123])
    })

    test('should extract issue with "closes" keyword', () => {
      expect(extractKeywordIssues('closes #456')).toEqual([456])
    })

    test('should extract issue with "resolves" keyword', () => {
      expect(extractKeywordIssues('resolves #789')).toEqual([789])
    })

    test('should handle multiple variations', () => {
      expect(
        extractKeywordIssues('fix #123, closes #456, resolved #789')
      ).toEqual([123, 456, 789])
    })

    test('should be case insensitive', () => {
      expect(extractKeywordIssues('Fixes #123 and CLOSES #456')).toEqual([
        123, 456,
      ])
    })

    test('should handle different tenses', () => {
      expect(
        extractKeywordIssues('fixed #123, closing #456, resolved #789')
      ).toEqual([123, 456, 789])
    })

    test('should return empty array for no keyword matches', () => {
      expect(extractKeywordIssues('#123 just a reference')).toEqual([])
    })

    test('should require space before issue number', () => {
      expect(extractKeywordIssues('fixes#123')).toEqual([])
      expect(extractKeywordIssues('fixes #123')).toEqual([123])
    })
  })

  describe('Combined extraction logic', () => {
    test('should combine both extraction methods', () => {
      const prBody = 'This PR addresses #123 and fixes #456. Also see #789.'
      const titleIssues = extractIssueNumbers('Fix user login #100')
      const bodyIssues = extractIssueNumbers(prBody)
      const keywordIssues = extractKeywordIssues(prBody)

      const allIssues = [
        ...new Set([...titleIssues, ...bodyIssues, ...keywordIssues]),
      ]

      expect(allIssues.sort()).toEqual([100, 123, 456, 789])
    })

    test('should handle overlapping matches without duplicates', () => {
      const text = 'fixes #123 and also see #123'
      const simpleRefs = extractIssueNumbers(text)
      const keywordRefs = extractKeywordIssues(text)

      const combined = [...new Set([...simpleRefs, ...keywordRefs])]

      expect(combined).toEqual([123])
    })
  })

  describe('Real-world examples', () => {
    test('should handle typical PR description', () => {
      const prBody = `
        ## Changes
        - Implemented user authentication
        - Fixed login issues
        - Added tests
        
        Fixes #42 and closes #56.
        
        Also references #78 for context.
      `

      const simpleRefs = extractIssueNumbers(prBody)
      const keywordRefs = extractKeywordIssues(prBody)
      const allRefs = [...new Set([...simpleRefs, ...keywordRefs])]

      expect(allRefs.sort()).toEqual([42, 56, 78])
    })

    test('should handle Japanese issue titles', () => {
      const prTitle = '作業PRが作成、され完了しているIssueを閉じる #72'
      const titleRefs = extractIssueNumbers(prTitle)

      expect(titleRefs).toEqual([72])
    })
  })
})
