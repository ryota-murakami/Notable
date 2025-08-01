import { expect, test } from './fixtures/coverage'

test.describe('AI Features Integration', () => {
  test.beforeEach(async ({ page }) => {
    // Set extended timeout for slow page loads
    test.setTimeout(60000)

    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])
  })

  test('should display AI toolbar in note editor', async ({ page }) => {
    // Navigate to app and create a note
    await page.goto('http://localhost:4378/app', { timeout: 30000 })
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Create new note
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page.getByRole('button', { name: 'Blank Note' }).click()

    // Wait for note editor
    await page.waitForURL('**/notes/**', { timeout: 30000 })
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Verify AI toolbar is present
    await expect(page.getByRole('button', { name: /AI Summary/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /AI Improve/ })).toBeVisible()
  })

  test('should show AI summary options when clicked', async ({ page }) => {
    // Navigate to note editor
    await page.goto('http://localhost:4378/app', { timeout: 30000 })
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page.getByRole('button', { name: 'Blank Note' }).click()

    await page.waitForURL('**/notes/**')
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Add some content to test with
    await page
      .getByTestId('note-content-textarea')
      .fill(
        'This is a test note with some content that can be summarized by AI.'
      )

    // Click AI Summary button
    await page.getByRole('button', { name: /AI Summary/ }).click()

    // Verify dropdown options appear
    await expect(page.getByText('Brief Summary')).toBeVisible()
    await expect(page.getByText('Detailed Summary')).toBeVisible()
    await expect(page.getByText('Bullet Points')).toBeVisible()
  })

  test('should show AI rewrite options when clicked', async ({ page }) => {
    // Navigate to note editor
    await page.goto('http://localhost:4378/app', { timeout: 30000 })
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page.getByRole('button', { name: 'Blank Note' }).click()

    await page.waitForURL('**/notes/**')
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Add some content
    await page
      .getByTestId('note-content-textarea')
      .fill('This is a test note that can be improved with AI.')

    // Click AI Improve button
    await page.getByRole('button', { name: /AI Improve/ }).click()

    // Verify dropdown options appear
    await expect(page.getByText('Improve Writing')).toBeVisible()
    await expect(page.getByText('Proofread')).toBeVisible()
    await expect(page.getByText('Simplify')).toBeVisible()
    await expect(page.getByText('Expand Content')).toBeVisible()
  })

  test('should execute AI summary with mock data', async ({ page }) => {
    // Navigate to note editor
    await page.goto('http://localhost:4378/app', { timeout: 30000 })
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page.getByRole('button', { name: 'Blank Note' }).click()

    await page.waitForURL('**/notes/**')
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Add test content
    const testContent =
      'This is a comprehensive test note about artificial intelligence and machine learning. It covers various topics including neural networks, deep learning, and natural language processing. The content is designed to test the AI summarization feature.'
    await page.getByTestId('note-content-textarea').fill(testContent)

    // Execute AI summary
    await page.getByRole('button', { name: /AI Summary/ }).click()
    await page.getByText('Brief Summary').click()

    // Wait a moment for the API call
    await page.waitForTimeout(2000)

    // Verify content was updated with summary (mock response should be appended)
    const updatedContent = await page
      .getByTestId('note-content-textarea')
      .inputValue()
    expect(updatedContent).toContain('AI Summary')
    expect(updatedContent.length).toBeGreaterThan(testContent.length)
  })

  test('should execute AI rewrite with mock data', async ({ page }) => {
    // Navigate to note editor
    await page.goto('http://localhost:4378/app', { timeout: 30000 })
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page.getByRole('button', { name: 'Blank Note' }).click()

    await page.waitForURL('**/notes/**')
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Add test content
    const testContent =
      'This text needs improvement and can be made better with AI assistance.'
    await page.getByTestId('note-content-textarea').fill(testContent)

    // Execute AI rewrite
    await page.getByRole('button', { name: /AI Improve/ }).click()
    await page.getByText('Improve Writing').click()

    // Wait for the API call
    await page.waitForTimeout(2000)

    // Verify content was updated (should be different from original)
    const updatedContent = await page
      .getByTestId('note-content-textarea')
      .inputValue()
    expect(updatedContent).not.toBe(testContent)
    expect(updatedContent).toContain('Enhanced version') // From mock response
  })

  test('should handle empty content gracefully', async ({ page }) => {
    // Navigate to note editor
    await page.goto('http://localhost:4378/app', { timeout: 30000 })

    // Wait for app to be fully loaded
    await expect(page.getByTestId('app-shell')).toBeVisible()

    await page.getByRole('button', { name: 'New Note' }).click()

    // Add longer timeout for template picker
    await expect(page.getByTestId('template-picker')).toBeVisible({
      timeout: 10000,
    })
    await page.getByRole('button', { name: 'Blank Note' }).click()

    await page.waitForURL('**/notes/**', { timeout: 30000 })
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Don't add any content, try AI features with empty note
    await page.getByRole('button', { name: /AI Summary/ }).click()
    await page.getByText('Brief Summary').click()

    // Should show an error toast about no content
    // Note: Toast validation would require more complex setup, but the test ensures no crash
    await page.waitForTimeout(1000)

    // Verify content remains empty
    const content = await page.getByTestId('note-content-textarea').inputValue()
    expect(content).toBe('')
  })
})
