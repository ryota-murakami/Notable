import type { Descendant } from 'slate'
import type { ExportMetadata, BulkExportOptions } from '../types'
import { exportService } from '../export-service'

// Test data
interface CustomText {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

const sampleContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Test Document' } as CustomText],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'This is a ' } as CustomText,
      { text: 'bold', bold: true } as CustomText,
      { text: ' and ' } as CustomText,
      { text: 'italic', italic: true } as CustomText,
      { text: ' text sample.' } as CustomText,
    ],
  },
  {
    type: 'list-item',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'First item' } as CustomText],
      },
      {
        type: 'list-item',
        children: [{ text: 'Second item' } as CustomText],
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
  // eslint-disable-next-line no-console

  try {
    // Test Markdown export
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    void(0)

    // Test React export (should work in Node.js)
    // eslint-disable-next-line no-console
    void(0)
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
    // eslint-disable-next-line no-console
    void(0)
  } catch (error) {
    console.error('❌ Export test failed:', error)
    throw error
  }
}

/**
 * Test bulk export functionality
 */
export async function testBulkExport(): Promise<void> {
  console.log('📦 Testing Bulk Export...')

  try {
    const bulkOptions: BulkExportOptions = {
      notes: [
        {
          id: 'note-1',
          content: [
            { type: 'h1', children: [{ text: 'First Note' }] },
            {
              type: 'paragraph',
              children: [{ text: 'Content of first note.' }],
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
            { type: 'h1', children: [{ text: 'Second Note' }] },
            {
              type: 'paragraph',
              children: [{ text: 'Content of second note with ' }],
            },
            {
              type: 'paragraph',
              children: [{ text: 'bold text', bold: true }],
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

    console.log('✅ Bulk export successful')
    console.log(`📁 Archive: ${bulkResult.fileName}`)
    console.log(`📊 Size: ${bulkResult.data?.size || 0} bytes`)
  } catch (error) {
    console.error('❌ Bulk export test failed:', error)
    throw error
  }
}

/**
 * Test export service utilities
 */
export async function testExportUtilities(): Promise<void> {
  console.log('🔧 Testing Export Utilities...')

  try {
    // Test supported formats
    const formats = exportService.getSupportedFormats()
    const expectedFormats = ['markdown', 'html', 'pdf', 'react']

    console.log(`📋 Supported formats: ${formats.join(', ')}`)

    for (const format of expectedFormats) {
      if (!formats.includes(format)) {
        throw new Error(`Missing supported format: ${format}`)
      }
    }
    console.log('✅ All expected formats are supported')

    // Test format details
    for (const format of formats) {
      const details = exportService.getFormatDetails(format)
      console.log(`📝 ${format}: ${details.name} - ${details.description}`)

      if (!details.name || !details.extension) {
        throw new Error(`Invalid format details for ${format}`)
      }
    }
    console.log('✅ Format details are valid')

    // Test validation
    const validation1 = exportService.validateOptions({ format: 'markdown' as 'markdown' })
    if (!validation1.valid) {
      throw new Error('Should have passed validation for markdown format')
    }
    console.log('✅ Validation works correctly')

    const invalidValidation = exportService.validateOptions({ format: 'invalid' as 'markdown' })
    if (invalidValidation.valid) {
      throw new Error('Should have failed validation for invalid format')
    }
    console.log('✅ Invalid format validation works correctly')
  } catch (error) {
    console.error('❌ Utility test failed:', error)
    throw error
  }
}

/**
 * Run all compatible export tests
 */
export async function runCompatibleExportTests(): Promise<void> {
  console.log('🚀 Starting Compatible Export System Tests...\n')

  try {
    await testNodeCompatibleFormats()
    console.log('')

    await testBulkExport()
    console.log('')

    await testExportUtilities()
    console.log('')

    console.log('🎉 All compatible export tests completed successfully!')
    console.log('ℹ️  Note: HTML and PDF exports require browser environment')
  } catch (error) {
    console.error('💥 Export tests failed:', error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
describe('Compatible Export System', () => {
  it('should run compatible export tests', async () => {
    await runCompatibleExportTests();
  });
});

if (import.meta.url === `file://${process.argv[1]}`) {
  runCompatibleExportTests();
}
