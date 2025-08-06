'use client'

import * as React from 'react'
const { useCallback, useRef, useState } = React
import { Check, Code, Copy, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  attributes: any
  children: any
  element: {
    type: string
    language?: string
    caption?: string
    showLineNumbers?: boolean
  }
  className?: string
}

const SUPPORTED_LANGUAGES = [
  'javascript',
  'typescript',
  'python',
  'java',
  'cpp',
  'c',
  'html',
  'css',
  'sql',
  'bash',
  'json',
  'xml',
  'markdown',
  'yaml',
  'go',
  'rust',
  'php',
  'ruby',
  'swift',
  'kotlin',
  'dart',
  'plaintext',
]

export function CodeBlock({
  attributes,
  children,
  element,
  className,
}: CodeBlockProps) {
  const [language, setLanguage] = useState(element.language || 'plaintext')
  const [caption, setCaption] = useState(element.caption || '')
  const [showLineNumbers, setShowLineNumbers] = useState(
    element.showLineNumbers || false
  )
  const [copied, setCopied] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const codeRef = useRef<HTMLPreElement>(null)

  const handleCopy = useCallback(async () => {
    if (codeRef.current) {
      const text = codeRef.current.textContent || ''
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy text: ', err)
      }
    }
  }, [])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    // TODO: Update the element data in Slate
  }

  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(event.target.value)
    // TODO: Update the element data in Slate
  }

  const toggleLineNumbers = () => {
    setShowLineNumbers((prev) => !prev)
    // TODO: Update the element data in Slate
  }

  // Generate line numbers
  const generateLineNumbers = () => {
    if (!showLineNumbers || !codeRef.current) return null

    const text = codeRef.current.textContent || ''
    const lines = text.split('\n')

    return (
      <div className='flex flex-col text-right text-gray-400 text-sm font-mono leading-6 pr-4 select-none'>
        {lines.map((_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </div>
    )
  }

  return (
    <div
      {...attributes}
      className={cn('code-block-container my-4 group', className)}
    >
      {/* Header */}
      <div className='flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-t-lg border-b'>
        <div className='flex items-center gap-2'>
          <Code className='h-4 w-4 text-gray-500' />
          <select
            contentEditable={false}
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className='bg-transparent border-none text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none'
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className='flex items-center gap-1'>
          <button
            contentEditable={false}
            onClick={() => setShowSettings(!showSettings)}
            className='p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'
            title='Settings'
          >
            <Settings className='h-4 w-4' />
          </button>

          <button
            contentEditable={false}
            onClick={handleCopy}
            className='p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? (
              <Check className='h-4 w-4 text-green-600' />
            ) : (
              <Copy className='h-4 w-4' />
            )}
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className='bg-gray-50 dark:bg-gray-750 px-4 py-3 border-b space-y-2'>
          <div className='flex items-center gap-2'>
            <input
              contentEditable={false}
              type='checkbox'
              id='show-line-numbers'
              checked={showLineNumbers}
              onChange={toggleLineNumbers}
              className='rounded'
            />
            <label
              htmlFor='show-line-numbers'
              className='text-sm text-gray-700 dark:text-gray-300'
            >
              Show line numbers
            </label>
          </div>

          <input
            contentEditable={false}
            type='text'
            value={caption}
            onChange={handleCaptionChange}
            placeholder='Add a caption...'
            className='w-full text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1'
          />
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className='bg-gray-50 dark:bg-gray-750 px-4 py-2 border-b text-sm text-gray-600 dark:text-gray-400'>
          {caption}
        </div>
      )}

      {/* Code Content */}
      <div className='relative bg-gray-900 dark:bg-gray-950 rounded-b-lg overflow-x-auto'>
        <div className='flex'>
          {/* Line Numbers */}
          {showLineNumbers && (
            <div className='bg-gray-800 dark:bg-gray-900 py-4 pl-4'>
              {generateLineNumbers()}
            </div>
          )}

          {/* Code */}
          <pre
            ref={codeRef}
            className={cn(
              'flex-1 p-4 text-sm font-mono text-gray-100 bg-transparent overflow-visible',
              'focus:outline-none',
              showLineNumbers && 'pl-2'
            )}
            spellCheck={false}
          >
            <code className={`language-${language}`}>{children}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export function CodeBlockElement(props: any) {
  return <CodeBlock {...props} />
}
