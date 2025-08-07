'use client'

import * as React from 'react'
import { Component, Download, FileCode, FileText, Globe } from 'lucide-react'
import { Button } from '../../design-system/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ExportDialog } from './export-dialog'
import { type Note } from '../../types/note'
import {
  type ExportFormat,
  type ExportOptions,
  type ReactExportOptions,
} from '../../types/export'
import { useExport } from '../../hooks/use-export'

interface ExportButtonProps {
  note: Note
  variant?: 'default' | 'primary' | 'secondary' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  compact?: boolean
}

const ExportButton = React.memo(({
  note,
  variant = 'secondary',
  size = 'sm',
  compact = false,
}: ExportButtonProps) => {
  const [showExportDialog, setShowExportDialog] = React.useState(false)
  const { exportNote } = useExport({
    autoDownload: true,
    showToasts: true,
  })

  const handleQuickExport = async (format: ExportFormat) => {
    try {
      const baseOptions = {
        format,
        includeFrontMatter: true,
        includeDates: true,
        includeTags: true,
      }

      // Add format-specific defaults
      let options: ExportOptions = baseOptions
      if (format === 'react') {
        const reactOptions: ReactExportOptions = {
          ...baseOptions,
          format: 'react',
          typescript: true,
          styling: 'tailwind' as const,
          componentName: undefined, // Will be auto-generated
          includePropTypes: false, // Don't generate separate type files for quick export
        }
        options = reactOptions
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
      <TooltipProvider>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={variant} size={size} className='gap-2'>
              <Download className='h-4 w-4' />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel>Quick Export</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleQuickExport('markdown')}
              data-testid='export-format-markdown'
            >
              <FileText className='h-4 w-4 mr-2' />
              Export as Markdown
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleQuickExport('html')}
              data-testid='export-format-html'
            >
              <Globe className='h-4 w-4 mr-2' />
              Export as HTML
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleQuickExport('pdf')}
              data-testid='export-format-pdf'
            >
              <FileCode className='h-4 w-4 mr-2' />
              Export as PDF
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleQuickExport('react')}
              data-testid='export-format-react'
            >
              <Component className='h-4 w-4 mr-2' />
              Export as React
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Advanced Options</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setShowExportDialog(true)}>
              <FileText className='h-4 w-4 mr-2' />
              Export with Options...
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipProvider>

      <ExportDialog
        note={note}
        defaultFormat='markdown'
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
      />
    </>
  )
})

ExportButton.displayName = 'ExportButton'

export { ExportButton }
