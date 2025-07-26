'use client'

import * as React from 'react'
import { Download, FileText, Globe, FileCode, Component } from 'lucide-react'
import { Button } from '../../design-system/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { ExportDialog } from './export-dialog'
import { Note } from '../../types/note'
import { ExportFormat } from '../../types/export'
import { useExport } from '../../hooks/use-export'

interface ExportButtonProps {
  note: Note
  variant?: 'default' | 'primary' | 'secondary' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  compact?: boolean
}

export function ExportButton({
  note,
  variant = 'secondary',
  size = 'sm',
  compact = false,
}: ExportButtonProps) {
  const { exportNote } = useExport({
    autoDownload: true,
    showToasts: true,
  })

  const handleQuickExport = async (format: ExportFormat) => {
    try {
      const options = {
        format,
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }

      await exportNote(note, options)
    } catch (error) {
      console.error('Export error:', error)
    }
  }

  if (compact) {
    return (
      <ExportDialog note={note} defaultFormat='markdown'>
        <Button variant={variant} size={size} className='gap-2'>
          <Download className='h-4 w-4' />
          Export
        </Button>
      </ExportDialog>
    )
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className='gap-2'>
            <Download className='h-4 w-4' />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-1'
        >
          <DropdownMenuLabel className='px-2 py-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300'>
            Quick Export
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => handleQuickExport('markdown')}
            className='flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded'
          >
            <FileText className='h-4 w-4 mr-2' />
            Export as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleQuickExport('html')}
            className='flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded'
          >
            <Globe className='h-4 w-4 mr-2' />
            Export as HTML
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleQuickExport('pdf')}
            className='flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded'
          >
            <FileCode className='h-4 w-4 mr-2' />
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleQuickExport('react')}
            className='flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded'
          >
            <Component className='h-4 w-4 mr-2' />
            Export as React
          </DropdownMenuItem>

          <DropdownMenuSeparator className='my-1 border-t border-gray-200 dark:border-gray-700' />

          <DropdownMenuLabel className='px-2 py-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300'>
            Advanced Options
          </DropdownMenuLabel>
          <DropdownMenuItem
            asChild
            className='px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded'
          >
            <ExportDialog note={note} defaultFormat='markdown'>
              <div className='flex items-center gap-2 cursor-pointer w-full'>
                <FileText className='h-4 w-4' />
                Export with Options...
              </div>
            </ExportDialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
