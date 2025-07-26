'use client'

import React, { useState } from 'react'
import { Descendant } from 'slate'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  exportService,
  ExportFormat,
  ExportMetadata,
} from '@/lib/export/export-service'
import { FileText, Globe, FileCode, Component } from 'lucide-react'

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  content: Descendant[]
  metadata?: ExportMetadata
}

export function ExportDialog({
  open,
  onOpenChange,
  content,
  metadata,
}: ExportDialogProps) {
  const [format, setFormat] = useState<ExportFormat>('markdown')
  const [includeMetadata, setIncludeMetadata] = useState(true)
  const [fileName, setFileName] = useState('')
  const [isExporting, setIsExporting] = useState(false)

  // Format-specific options
  const [markdownFlavor, setMarkdownFlavor] = useState<'standard' | 'gfm'>(
    'gfm'
  )
  const [htmlSelfContained, setHtmlSelfContained] = useState(true)
  const [pdfPageSize, setPdfPageSize] = useState<'A4' | 'Letter'>('A4')
  const [reactTypeScript, setReactTypeScript] = useState(true)

  const formatIcons = {
    markdown: <FileText className='h-4 w-4' />,
    html: <Globe className='h-4 w-4' />,
    pdf: <FileCode className='h-4 w-4' />,
    react: <Component className='h-4 w-4' />,
  }

  const handleExport = async () => {
    setIsExporting(true)

    try {
      let options: any = {
        format,
        includeMetadata,
        fileName: fileName || undefined,
      }

      // Add format-specific options
      switch (format) {
        case 'markdown':
          options.flavor = markdownFlavor
          break
        case 'html':
          options.selfContained = htmlSelfContained
          options.includeNavigation = true
          options.responsiveDesign = true
          break
        case 'pdf':
          options.pageSize = pdfPageSize
          options.includePageNumbers = true
          options.includeTableOfContents = true
          break
        case 'react':
          options.typescript = reactTypeScript
          options.styleType = 'css-in-js'
          options.includeProps = true
          options.includeDocs = true
          break
      }

      const result = await exportService.export(content, options, metadata)

      if (result.success) {
        exportService.downloadFile(result)
        onOpenChange(false)
      } else {
        console.error('Export failed:', result.error)
        // In a real app, show error toast
      }
    } catch (error) {
      console.error('Export error:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Export Note</DialogTitle>
          <DialogDescription>
            Choose a format to export your note. Each format has different
            options and use cases.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          {/* Format Selection */}
          <div className='space-y-3'>
            <Label>Export Format</Label>
            <RadioGroup
              value={format}
              onValueChange={(v) => setFormat(v as ExportFormat)}
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='markdown' id='markdown' />
                <Label
                  htmlFor='markdown'
                  className='flex items-center gap-2 cursor-pointer'
                >
                  {formatIcons.markdown}
                  <span>Markdown</span>
                  <span className='text-sm text-muted-foreground'>(.md)</span>
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='html' id='html' />
                <Label
                  htmlFor='html'
                  className='flex items-center gap-2 cursor-pointer'
                >
                  {formatIcons.html}
                  <span>HTML</span>
                  <span className='text-sm text-muted-foreground'>(.html)</span>
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='pdf' id='pdf' />
                <Label
                  htmlFor='pdf'
                  className='flex items-center gap-2 cursor-pointer'
                >
                  {formatIcons.pdf}
                  <span>PDF</span>
                  <span className='text-sm text-muted-foreground'>(.pdf)</span>
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='react' id='react' />
                <Label
                  htmlFor='react'
                  className='flex items-center gap-2 cursor-pointer'
                >
                  {formatIcons.react}
                  <span>React Component</span>
                  <span className='text-sm text-muted-foreground'>
                    (.jsx/.tsx)
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Format-specific options */}
          <div className='space-y-3'>
            {format === 'markdown' && (
              <div className='space-y-2'>
                <Label>Markdown Flavor</Label>
                <Select
                  value={markdownFlavor}
                  onValueChange={(v) => setMarkdownFlavor(v as any)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='standard'>Standard Markdown</SelectItem>
                    <SelectItem value='gfm'>
                      GitHub Flavored Markdown
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {format === 'html' && (
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='selfContained'
                  checked={htmlSelfContained}
                  onCheckedChange={(c) => setHtmlSelfContained(!!c)}
                />
                <Label htmlFor='selfContained' className='cursor-pointer'>
                  Self-contained (embed CSS/JS)
                </Label>
              </div>
            )}

            {format === 'pdf' && (
              <div className='space-y-2'>
                <Label>Page Size</Label>
                <Select
                  value={pdfPageSize}
                  onValueChange={(v) => setPdfPageSize(v as any)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='A4'>A4</SelectItem>
                    <SelectItem value='Letter'>Letter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {format === 'react' && (
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='typescript'
                  checked={reactTypeScript}
                  onCheckedChange={(c) => setReactTypeScript(!!c)}
                />
                <Label htmlFor='typescript' className='cursor-pointer'>
                  Generate TypeScript component
                </Label>
              </div>
            )}
          </div>

          {/* Common options */}
          <div className='space-y-3'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='includeMetadata'
                checked={includeMetadata}
                onCheckedChange={(c) => setIncludeMetadata(!!c)}
              />
              <Label htmlFor='includeMetadata' className='cursor-pointer'>
                Include metadata (title, author, date, etc.)
              </Label>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='fileName'>Custom filename (optional)</Label>
              <Input
                id='fileName'
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder={`export.${exportService.getFormatDetails(format).extension}`}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={isExporting}>
            {isExporting ? 'Exporting...' : 'Export'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
