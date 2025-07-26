'use client'

import React, { useState } from 'react'
import { Descendant } from 'slate'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Download, FileText, Globe, FileCode, Component } from 'lucide-react'
import { ExportDialog } from './export-dialog'
import {
  exportService,
  ExportFormat,
  ExportMetadata,
} from '@/lib/export/export-service'

interface ExportButtonProps {
  content: Descendant[]
  metadata?: ExportMetadata
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function ExportButton({
  content,
  metadata,
  variant = 'outline',
  size = 'sm',
}: ExportButtonProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat | null>(
    null
  )

  const handleQuickExport = async (format: ExportFormat) => {
    try {
      const options = {
        format,
        includeMetadata: true,
      }

      const result = await exportService.export(content, options, metadata)

      if (result.success) {
        exportService.downloadFile(result)
      } else {
        console.error('Export failed:', result.error)
      }
    } catch (error) {
      console.error('Export error:', error)
    }
  }

  const handleExportWithOptions = (format: ExportFormat) => {
    setSelectedFormat(format)
    setShowDialog(true)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size}>
            <Download className='h-4 w-4 mr-2' />
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

          <DropdownMenuLabel>Export with Options</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleExportWithOptions('markdown')}>
            <FileText className='h-4 w-4 mr-2' />
            Markdown Options...
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExportWithOptions('html')}>
            <Globe className='h-4 w-4 mr-2' />
            HTML Options...
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExportWithOptions('pdf')}>
            <FileCode className='h-4 w-4 mr-2' />
            PDF Options...
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExportWithOptions('react')}>
            <Component className='h-4 w-4 mr-2' />
            React Options...
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ExportDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        content={content}
        metadata={metadata}
      />
    </>
  )
}
