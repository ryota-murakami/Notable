import { test, expect } from '@playwright/test'
import { createSupabaseClient } from './utils/supabase'
import { generateTestUser, cleanupTestUser } from './utils/test-users'
import * as fs from 'fs'
import * as path from 'path'

let testUser: { email: string; password: string; id?: string }

test.describe('Export Functionality', () => {
  test.beforeAll(async () => {
    // Create test user
    testUser = await generateTestUser()
    const supabase = createSupabaseClient()
    const { data, error } = await supabase.auth.signUp({
      email: testUser.email,
      password: testUser.password,
    })
    if (error) throw error
    testUser.id = data.user?.id
  })

  test.afterAll(async () => {
    // Cleanup test user and their data
    if (testUser.id) {
      await cleanupTestUser(testUser.id)
    }
  })

  test.beforeEach(async ({ page }) => {
    // Sign in
    await page.goto('/auth/sign-in')
    await page.getByLabel(/email/i).fill(testUser.email)
    await page.getByLabel(/password/i).fill(testUser.password)
    await page.getByRole('button', { name: /sign in/i }).click()
    await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

    // Create a test note with rich content
    await page.getByRole('button', { name: /new note/i }).click()

    const titleInput = page.getByPlaceholder(/untitled note/i)
    await titleInput.clear()
    await titleInput.type('Export Test Note')

    const editor = page.locator('[data-plate-editor]')
    await editor.click()

    // Add rich content
    await editor.type('# Main Heading\n\n')
    await editor.type('This is a **bold** text and this is *italic* text.\n\n')
    await editor.type('## Subheading\n\n')
    await editor.type('- List item 1\n')
    await editor.type('- List item 2\n')
    await editor.type('  - Nested item\n\n')
    await editor.type('```javascript\n')
    await editor.type('const hello = "world";\n')
    await editor.type('console.log(hello);\n')
    await editor.type('```\n\n')
    await editor.type('> This is a blockquote\n\n')
    await editor.type('[Link to Google](https://google.com)\n\n')
    await editor.type('| Column 1 | Column 2 |\n')
    await editor.type('|----------|----------|\n')
    await editor.type('| Cell 1   | Cell 2   |\n')

    // Wait for auto-save
    await page.waitForTimeout(2000)
  })

  test.describe('Markdown Export', () => {
    test('should export note as Markdown', async ({ page, context }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()
      await expect(page.getByRole('dialog', { name: /export/i })).toBeVisible()

      // Select Markdown format
      await page.getByRole('button', { name: /markdown/i }).click()

      // Set up download promise before clicking
      const downloadPromise = page.waitForEvent('download')
      await page.getByRole('button', { name: /download/i }).click()

      // Wait for download
      const download = await downloadPromise

      // Verify filename
      expect(download.suggestedFilename()).toMatch(/export-test-note.*\.md$/)

      // Save and read the file
      const downloadPath = await download.path()
      const content = fs.readFileSync(downloadPath, 'utf-8')

      // Verify content
      expect(content).toContain('# Main Heading')
      expect(content).toContain('**bold**')
      expect(content).toContain('*italic*')
      expect(content).toContain('## Subheading')
      expect(content).toContain('- List item 1')
      expect(content).toContain('```javascript')
      expect(content).toContain('const hello = "world";')
      expect(content).toContain('> This is a blockquote')
      expect(content).toContain('[Link to Google](https://google.com)')
    })

    test('should preview Markdown before export', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select Markdown format
      await page.getByRole('button', { name: /markdown/i }).click()

      // Click preview
      await page.getByRole('button', { name: /preview/i }).click()

      // Verify preview shows markdown content
      const preview = page.getByRole('region', { name: /preview/i })
      await expect(preview).toBeVisible()
      await expect(preview.locator('pre')).toContainText('# Main Heading')
      await expect(preview.locator('pre')).toContainText('**bold**')
    })

    test('should copy Markdown to clipboard', async ({ page, context }) => {
      // Grant clipboard permissions
      await context.grantPermissions(['clipboard-read', 'clipboard-write'])

      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select Markdown format
      await page.getByRole('button', { name: /markdown/i }).click()

      // Copy to clipboard
      await page.getByRole('button', { name: /copy to clipboard/i }).click()

      // Verify success message
      await expect(page.getByText(/copied to clipboard/i)).toBeVisible()

      // Verify clipboard content
      const clipboardText = await page.evaluate(() =>
        navigator.clipboard.readText(),
      )
      expect(clipboardText).toContain('# Main Heading')
      expect(clipboardText).toContain('**bold**')
    })
  })

  test.describe('PDF Export', () => {
    test('should export note as PDF', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select PDF format
      await page.getByRole('button', { name: /pdf/i }).click()

      // Configure PDF options
      await page.getByLabel(/include metadata/i).check()
      await page.getByLabel(/include table of contents/i).check()

      // Set up download promise
      const downloadPromise = page.waitForEvent('download')
      await page.getByRole('button', { name: /download/i }).click()

      // Wait for download
      const download = await downloadPromise

      // Verify filename
      expect(download.suggestedFilename()).toMatch(/export-test-note.*\.pdf$/)

      // Verify file exists and has content
      const downloadPath = await download.path()
      const stats = fs.statSync(downloadPath)
      expect(stats.size).toBeGreaterThan(1000) // PDF should have reasonable size
    })

    test('should preview PDF before export', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select PDF format
      await page.getByRole('button', { name: /pdf/i }).click()

      // Click preview
      await page.getByRole('button', { name: /preview/i }).click()

      // Verify PDF preview opens
      await expect(page.locator('iframe[title="PDF Preview"]')).toBeVisible()
    })

    test('should configure PDF export options', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select PDF format
      await page.getByRole('button', { name: /pdf/i }).click()

      // Test page size option
      await page.getByLabel(/page size/i).selectOption('A4')
      await page.getByLabel(/page size/i).selectOption('Letter')

      // Test orientation
      await page.getByRole('radio', { name: /portrait/i }).check()
      await page.getByRole('radio', { name: /landscape/i }).check()

      // Test margins
      await page.getByLabel(/margins/i).selectOption('Normal')
      await page.getByLabel(/margins/i).selectOption('Narrow')
      await page.getByLabel(/margins/i).selectOption('Wide')
    })
  })

  test.describe('HTML Export', () => {
    test('should export note as HTML', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select HTML format
      await page.getByRole('button', { name: /html/i }).click()

      // Configure HTML options
      await page.getByLabel(/include styling/i).check()
      await page.getByLabel(/embed images/i).check()

      // Set up download promise
      const downloadPromise = page.waitForEvent('download')
      await page.getByRole('button', { name: /download/i }).click()

      // Wait for download
      const download = await downloadPromise

      // Verify filename
      expect(download.suggestedFilename()).toMatch(/export-test-note.*\.html$/)

      // Read and verify content
      const downloadPath = await download.path()
      const content = fs.readFileSync(downloadPath, 'utf-8')

      // Verify HTML structure
      expect(content).toContain('<!DOCTYPE html>')
      expect(content).toContain('<h1>Main Heading</h1>')
      expect(content).toContain('<strong>bold</strong>')
      expect(content).toContain('<em>italic</em>')
      expect(content).toContain('<h2>Subheading</h2>')
      expect(content).toContain('<ul>')
      expect(content).toContain('<li>List item 1</li>')
      expect(content).toContain('<pre><code class="language-javascript">')
      expect(content).toContain('<blockquote>')
      expect(content).toContain(
        '<a href="https://google.com">Link to Google</a>',
      )

      // Verify styling is included
      expect(content).toContain('<style>')
    })

    test('should preview HTML before export', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select HTML format
      await page.getByRole('button', { name: /html/i }).click()

      // Click preview
      await page.getByRole('button', { name: /preview/i }).click()

      // Verify HTML preview
      const preview = page.frameLocator('iframe[title="HTML Preview"]')
      await expect(preview.locator('h1')).toContainText('Main Heading')
      await expect(preview.locator('strong')).toContainText('bold')
    })
  })

  test.describe('React Component Export', () => {
    test('should export note as React component', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select React format
      await page.getByRole('button', { name: /react component/i }).click()

      // Configure React options
      await page.getByLabel(/typescript/i).check()
      await page.getByLabel(/include styles/i).check()

      // Set up download promise
      const downloadPromise = page.waitForEvent('download')
      await page.getByRole('button', { name: /download/i }).click()

      // Wait for download
      const download = await downloadPromise

      // Verify filename
      expect(download.suggestedFilename()).toMatch(
        /ExportTestNote.*\.(tsx|jsx)$/,
      )

      // Read and verify content
      const downloadPath = await download.path()
      const content = fs.readFileSync(downloadPath, 'utf-8')

      // Verify React component structure
      expect(content).toContain("import React from 'react';")
      expect(content).toContain('export const ExportTestNote')
      expect(content).toContain('return (')
      expect(content).toContain('<h1>Main Heading</h1>')
      expect(content).toContain('<strong>bold</strong>')

      // Verify TypeScript if selected
      if (download.suggestedFilename().endsWith('.tsx')) {
        expect(content).toContain(': React.FC')
      }
    })

    test('should preview React component code', async ({ page }) => {
      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Select React format
      await page.getByRole('button', { name: /react component/i }).click()

      // Click preview
      await page.getByRole('button', { name: /preview/i }).click()

      // Verify code preview
      const preview = page.getByRole('region', { name: /preview/i })
      await expect(preview).toBeVisible()
      await expect(preview.locator('pre code')).toContainText('import React')
      await expect(preview.locator('pre code')).toContainText('export const')
    })
  })

  test.describe('Bulk Export', () => {
    test('should export multiple notes at once', async ({ page }) => {
      // Create additional notes
      for (let i = 1; i <= 3; i++) {
        await page.getByRole('button', { name: /new note/i }).click()
        const titleInput = page.getByPlaceholder(/untitled note/i)
        await titleInput.clear()
        await titleInput.type(`Test Note ${i}`)
        await page.waitForTimeout(1000)
      }

      // Select multiple notes
      await page.keyboard.press('Control+A') // Select all

      // Open bulk export
      await page.getByRole('button', { name: /export selected/i }).click()

      // Select format
      await page.getByRole('button', { name: /markdown/i }).click()

      // Configure bulk export
      await page.getByLabel(/separate files/i).check()
      await page.getByLabel(/create zip/i).check()

      // Set up download promise
      const downloadPromise = page.waitForEvent('download')
      await page.getByRole('button', { name: /download all/i }).click()

      // Wait for download
      const download = await downloadPromise

      // Verify zip file
      expect(download.suggestedFilename()).toMatch(/notes-export.*\.zip$/)
    })

    test('should show export progress for large exports', async ({ page }) => {
      // Select multiple notes
      await page.keyboard.press('Control+A')

      // Open bulk export
      await page.getByRole('button', { name: /export selected/i }).click()

      // Select PDF format (slower)
      await page.getByRole('button', { name: /pdf/i }).click()

      // Start export
      await page.getByRole('button', { name: /download all/i }).click()

      // Verify progress indicator
      const progressBar = page.getByRole('progressbar')
      await expect(progressBar).toBeVisible()
      await expect(page.getByText(/exporting.*of/i)).toBeVisible()
    })
  })

  test.describe('Export Error Handling', () => {
    test('should handle export errors gracefully', async ({ page }) => {
      // Create a very large note that might fail to export
      await page.getByRole('button', { name: /new note/i }).click()

      const editor = page.locator('[data-plate-editor]')
      await editor.click()

      // Add massive content
      const hugeContent = 'x'.repeat(10000000) // 10MB of text
      await page.evaluate((content) => {
        const editor = document.querySelector('[data-plate-editor]')
        if (editor) {
          editor.textContent = content
        }
      }, hugeContent)

      // Try to export as PDF
      await page.getByRole('button', { name: /export/i }).click()
      await page.getByRole('button', { name: /pdf/i }).click()
      await page.getByRole('button', { name: /download/i }).click()

      // Should show error message
      await expect(page.getByText(/export failed/i)).toBeVisible()
      await expect(page.getByText(/file too large/i)).toBeVisible()
    })

    test('should retry failed exports', async ({ page }) => {
      // Simulate network failure by going offline
      await page.context().setOffline(true)

      // Try to export
      await page.getByRole('button', { name: /export/i }).click()
      await page.getByRole('button', { name: /markdown/i }).click()
      await page.getByRole('button', { name: /download/i }).click()

      // Should show error
      await expect(page.getByText(/export failed/i)).toBeVisible()

      // Go back online
      await page.context().setOffline(false)

      // Retry button should be available
      await page.getByRole('button', { name: /retry/i }).click()

      // Should succeed now
      const downloadPromise = page.waitForEvent('download')
      const download = await downloadPromise
      expect(download).toBeTruthy()
    })
  })
})
