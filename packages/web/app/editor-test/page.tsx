'use client'

import { BasicEditor } from '@/components/editor/basic-editor'
import { ExportButton } from '@/components/export/export-button'
import { useState } from 'react'
import { type Descendant } from 'slate'

export default function EditorTestPage() {
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Welcome to the Rich Text Editor test!' }],
    },
  ])

  const note = {
    id: 'test-note',
    title: 'Test Note',
    content: JSON.stringify(value),
    is_folder: false,
    parent_id: undefined,
    version: 1,
    device_id: 'test-device',
    last_modified: new Date().toISOString(),
    vector_clock: { 'test-device': 1 },
    synced_at: undefined,
    local_changes: false,
    deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    userId: 'test-user',
    tags: ['test', 'demo'],
  }

  return (
    <div className='container mx-auto py-10'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Rich Text Editor Test</h1>
        <ExportButton note={note} />
      </div>

      <BasicEditor
        initialValue={value}
        onChange={setValue}
        placeholder='Start typing...'
      />

      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>Editor Value (JSON):</h2>
        <pre className='bg-gray-100 p-4 rounded-md overflow-auto'>
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    </div>
  )
}
