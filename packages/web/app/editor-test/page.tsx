'use client'

import { BasicEditor } from '@/components/editor/basic-editor'
import { useState } from 'react'
import { Descendant } from 'slate'

export default function EditorTestPage() {
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Welcome to the Rich Text Editor test!' }],
    },
  ])

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-6'>Rich Text Editor Test</h1>

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
