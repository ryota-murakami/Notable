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
  {
    type: 'list-item',
    children: [{ text: 'This is a blockquote example.' } as CustomText],
  },
  {
    type: 'list-item',
    language: 'javascript',
    children: [{ text: 'const hello = "world";\nconsole.log(hello);' } as CustomText],
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

    // Test HTML export
    console.log('🌐 Testing HTML export...')
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
    console.log('✅ HTML export successful')

    // Test PDF export
    console.log('📄 Testing PDF export...')
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
    console.log('✅ PDF export successful')

    // Test React export
    console.log('⚛️ Testing React export...')
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
    console.log('✅ React export successful')

    console.log('🎉 All individual export tests passed!')
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
 * Test export validation
 */
export async function testExportValidation(): Promise<void> {
  console.log('🔍 Testing Export Validation...')

  try {
    // Test invalid format
    const validation1 = exportService.validateOptions({
      format: 'invalid' as 'markdown',
    })
    if (validation1.valid) {
      throw new Error('Should have failed validation for invalid format')
    }
    console.log('✅ Invalid format validation works')

    // Test valid format
    const validation2 = exportService.validateOptions({ format: 'markdown' })
    if (!validation2.valid) {
      throw new Error('Should have passed validation for valid format')
    }
    console.log('✅ Valid format validation works')

    // Test supported formats
    const formats = exportService.getSupportedFormats()
    const expectedFormats = ['markdown', 'html', 'pdf', 'react']

    for (const format of expectedFormats) {
      if (!formats.includes(format)) {
        throw new Error(`Missing supported format: ${format}`)
      }
    }
    console.log('✅ All expected formats are supported')
  } catch (error) {
    console.error('❌ Validation test failed:', error)
    throw error
  }
}

/**
 * Run all export tests
 */
export async function runAllExportTests(): Promise<void> {
  console.log('🚀 Starting Export System Tests...\n')

  try {
    await testAllExportFormats()
    console.log('')

    await testBulkExport()
    console.log('')

    await testExportValidation()
    console.log('')

    console.log('🎉 All export tests completed successfully!')
  } catch (error) {
    console.error('💥 Export tests failed:', error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
describe('Export System', () => {
  it('should run all export tests', async () => {
    await runAllExportTests();
  });
});

if (import.meta.url === `file://${process.argv[1]}`) {
  runAllExportTests();
}
