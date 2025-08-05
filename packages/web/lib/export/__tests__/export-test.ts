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
  {
    type: 'list-item',
    children: [
      {
        text: 'This is a blockquote example.',
        type: 'list-item',
      } as CustomText,
    ],
  },
  {
    type: 'list-item',
    children: [
      {
        text: 'const hello = "world";\nconsole.info(hello);',
        type: 'list-item',
        language: 'javascript',
      } as CustomText,
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
 * Test all export formats
 */
export async function testAllExportFormats(): Promise<void> {
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

    // Test HTML export
    console.info('🌐 Testing HTML export...')
    const htmlResult = await exportService.export(
      sampleContent,
      {
        format: 'html',
        includeMetadata: true,
        theme: 'light',
        fileName: 'test-html',
      },
      sampleMetadata
    )

    if (!htmlResult.success) {
      throw new Error(`HTML export failed: ${htmlResult.error}`)
    }
    console.info('✅ HTML export successful')

    // Test PDF export
    console.info('📄 Testing PDF export...')
    const pdfResult = await exportService.export(
      sampleContent,
      {
        format: 'pdf',
        includeMetadata: true,
        fileName: 'test-pdf',
      },
      sampleMetadata
    )

    if (!pdfResult.success) {
      throw new Error(`PDF export failed: ${pdfResult.error}`)
    }
    console.info('✅ PDF export successful')

    // Test React export
    console.info('⚛️ Testing React export...')
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
    console.info('✅ React export successful')

    console.info('🎉 All individual export tests passed!')
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
 * Test export validation
 */
export async function testExportValidation(): Promise<void> {
  console.info('🔍 Testing Export Validation...')

  try {
    // Test invalid format
    const validation1 = exportService.validateOptions({
      format: 'invalid' as any,
    })
    if (validation1.valid) {
      throw new Error('Should have failed validation for invalid format')
    }
    console.info('✅ Invalid format validation works')

    // Test valid format
    const validation2 = exportService.validateOptions({ format: 'markdown' })
    if (!validation2.valid) {
      throw new Error('Should have passed validation for valid format')
    }
    console.info('✅ Valid format validation works')

    // Test supported formats
    const formats = exportService.getSupportedFormats()
    const expectedFormats = ['markdown', 'html', 'pdf', 'react']

    for (const format of expectedFormats) {
      if (!formats.includes(format as any)) {
        throw new Error(`Missing supported format: ${format}`)
      }
    }
    console.info('✅ All expected formats are supported')
  } catch (error) {
    console.error('❌ Validation test failed:', error)
    throw error
  }
}

/**
 * Run all export tests
 */
export async function runAllExportTests(): Promise<void> {
  console.info('🚀 Starting Export System Tests...\n')

  try {
    await testAllExportFormats()
    console.info('')

    await testBulkExport()
    console.info('')

    await testExportValidation()
    console.info('')

    console.info('🎉 All export tests completed successfully!')
  } catch (error) {
    console.error('💥 Export tests failed:', error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
describe('Export System', () => {
  it('should run all export tests', async () => {
    await runAllExportTests()
  })
})

if (import.meta.url === `file://${process.argv[1]}`) {
  runAllExportTests()
}
