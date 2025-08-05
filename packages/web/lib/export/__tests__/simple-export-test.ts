import type { Descendant } from 'slate'
import type { BulkExportOptions, ExportMetadata } from '../types'
import { exportService } from '../export-service'
import { describe, it } from 'vitest'

// Test data
interface CustomText {
  text: string
  bold?: boolean
  italic?: boolean
  type: string
  language?: string
}

const sampleContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Test Document', type: 'paragraph' } as CustomText],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'This is a ', type: 'paragraph' } as CustomText,
      { text: 'bold', bold: true, type: 'paragraph' } as CustomText,
      { text: ' and ', type: 'paragraph' } as CustomText,
      { text: 'italic', italic: true, type: 'paragraph' } as CustomText,
      { text: ' text sample.', type: 'paragraph' } as CustomText,
    ],
  },
  {
    type: 'list-item',
    children: [
      {
        type: 'list-item',
        children: [
          { text: 'First item', type: 'list-item' } as CustomText,
        ] as any,
      } as any,
      {
        type: 'list-item',
        children: [{ text: 'Second item', type: 'list-item' } as CustomText],
      },
    ],
  },
]

const sampleMetadata: ExportMetadata = {
  title: 'Test Document',
  author: 'Export System Test',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date(),
  tags: ['test', 'export', 'sample'],
  description: 'A test document for export functionality',
}

/**
 * Test formats that work in Node.js environment
 */
export async function testNodeCompatibleFormats(): Promise<void> {
  try {
    // Test Markdown export

    const markdownResult = await exportService.export(
      sampleContent,
      {
        format: 'markdown',
        includeMetadata: true,
        fileName: 'test-markdown',
      },
      sampleMetadata
    )

    if (!markdownResult.success) {
      throw new Error(`Markdown export failed: ${markdownResult.error}`)
    }

    void 0

    // Test React export (should work in Node.js)

    void 0
    const reactResult = await exportService.export(
      sampleContent,
      {
        format: 'react',
        includeMetadata: true,
        fileName: 'test-react',
      },
      sampleMetadata
    )

    if (!reactResult.success) {
      throw new Error(`React export failed: ${reactResult.error}`)
    }

    void 0
  } catch (error) {
    console.error('❌ Export test failed:', error)
    throw error
  }
}

/**
 * Test bulk export functionality
 */
export async function testBulkExport(): Promise<void> {
  console.info('📦 Testing Bulk Export...')

  try {
    const bulkOptions: BulkExportOptions = {
      notes: [
        {
          id: 'note-1',
          content: [
            {
              type: 'list-item',
              children: [
                { text: 'First Note', type: 'list-item' } as CustomText,
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Content of first note.',
                  type: 'list-item',
                } as CustomText,
              ],
            },
          ],
          metadata: {
            title: 'First Note',
            author: 'Test Author',
            createdAt: new Date('2024-01-01'),
          },
        },
        {
          id: 'note-2',
          content: [
            {
              type: 'list-item',
              children: [
                { text: 'Second Note', type: 'list-item' } as CustomText,
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Content of second note with ',
                  type: 'list-item',
                } as CustomText,
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'bold text',
                  bold: true,
                  type: 'list-item',
                } as CustomText,
              ],
            },
          ],
          metadata: {
            title: 'Second Note',
            author: 'Test Author',
            createdAt: new Date('2024-01-02'),
          },
        },
      ],
      format: 'markdown',
      archiveType: 'zip',
      folderStructure: true,
    }

    const bulkResult = await exportService.bulkExport(bulkOptions)

    if (!bulkResult.success) {
      throw new Error(`Bulk export failed: ${bulkResult.error}`)
    }

    console.info('✅ Bulk export successful')
    console.info(`📁 Archive: ${bulkResult.fileName}`)
    console.info(
      `📊 Size: ${bulkResult.data && typeof bulkResult.data !== 'string' ? bulkResult.data.size : 0} bytes`
    )
  } catch (error) {
    console.error('❌ Bulk export test failed:', error)
    throw error
  }
}

/**
 * Test export service utilities
 */
export async function testExportUtilities(): Promise<void> {
  console.info('🔧 Testing Export Utilities...')

  try {
    // Test supported formats
    const formats = exportService.getSupportedFormats()
    const expectedFormats = ['markdown', 'html', 'pdf', 'react']

    console.info(`📋 Supported formats: ${formats.join(', ')}`)

    for (const format of expectedFormats) {
      if (!formats.includes(format as any)) {
        throw new Error(`Missing supported format: ${format}`)
      }
    }
    console.info('✅ All expected formats are supported')

    // Test format details
    for (const format of formats) {
      const details = exportService.getFormatDetails(format)
      console.info(`📝 ${format}: ${details.name} - ${details.description}`)

      if (!details.name || !details.extension) {
        throw new Error(`Invalid format details for ${format}`)
      }
    }
    console.info('✅ Format details are valid')

    // Test validation
    const validation1 = exportService.validateOptions({
      format: 'markdown' as 'markdown',
    })
    if (!validation1.valid) {
      throw new Error('Should have passed validation for markdown format')
    }
    console.info('✅ Validation works correctly')

    const invalidValidation = exportService.validateOptions({
      format: 'invalid' as 'markdown',
    })
    if (invalidValidation.valid) {
      throw new Error('Should have failed validation for invalid format')
    }
    console.info('✅ Invalid format validation works correctly')
  } catch (error) {
    console.error('❌ Utility test failed:', error)
    throw error
  }
}

/**
 * Run all compatible export tests
 */
export async function runCompatibleExportTests(): Promise<void> {
  console.info('🚀 Starting Compatible Export System Tests...\n')

  try {
    await testNodeCompatibleFormats()
    console.info('')

    await testBulkExport()
    console.info('')

    await testExportUtilities()
    console.info('')

    console.info('🎉 All compatible export tests completed successfully!')
    console.info('ℹ️  Note: HTML and PDF exports require browser environment')
  } catch (error) {
    console.error('💥 Export tests failed:', error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
describe('Compatible Export System', () => {
  it('should run compatible export tests', async () => {
    await runCompatibleExportTests()
  })
})

if (import.meta.url === `file://${process.argv[1]}`) {
  runCompatibleExportTests()
}
