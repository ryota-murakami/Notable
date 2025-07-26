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
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  compact?: boolean
}

export function ExportButton({
  note,
  variant = 'outline',
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
        <DropdownMenuContent align='end' className='w-56'>
          <DropdownMenuLabel>Quick Export</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleQuickExport('markdown')}>
            <FileText className='h-4 w-4 mr-2' />
            Export as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('html')}>
            <Globe className='h-4 w-4 mr-2' />
            Export as HTML
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('pdf')}>
            <FileCode className='h-4 w-4 mr-2' />
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('react')}>
            <Component className='h-4 w-4 mr-2' />
            Export as React
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Advanced Options</DropdownMenuLabel>
          <DropdownMenuItem asChild>
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
