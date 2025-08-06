'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  FileCode,
  FileImage,
  Download,
  Settings,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ExportOptions {
  // General options
  includeFrontMatter: boolean
  includeTags: boolean
  includeDates: boolean
  
  // Format-specific options
  format: 'markdown' | 'html' | 'pdf' | 'react'
  
  // PDF options
  pageFormat: 'A4' | 'Letter' | 'Legal'
  pageNumbers: boolean
  tableOfContents: boolean
  
  // HTML options
  selfContained: boolean
  includeCSS: boolean
}

interface ExportProgress {
  stage: string
  progress: number
  filename?: string
  downloadUrl?: string
  error?: string
}

interface ExportDropdownProps {
  noteId?: string
  noteTitle?: string
  trigger?: React.ReactNode
  onExportStart?: () => void
  onExportComplete?: (result: any) => void
  onExportError?: (error: string) => void
}

export function ExportDropdown({
  noteId,
  noteTitle = 'Untitled',
  trigger,
  onExportStart,
  onExportComplete,
  onExportError,
}: ExportDropdownProps) {
  const [showAdvancedDialog, setShowAdvancedDialog] = useState(false)

  const handleQuickExport = async (format: string) => {
    try {
      onExportStart?.()
      
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          noteId,
          format,
          options: {},
        }),
      })
      
      if (!response.ok) {
        throw new Error('Export failed')
      }
      
      const result = await response.json()
      
      if (result.success) {
        // Trigger download
        const link = document.createElement('a')
        link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(result.data.content)}`
        link.download = result.data.filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        onExportComplete?.(result.data)
      } else {
        throw new Error(result.error || 'Export failed')
      }
    } catch (error) {
      console.error('Quick export failed:', error)
      onExportError?.(error instanceof Error ? error.message : 'Export failed')
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {trigger || (
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">Quick Export</p>
            <p className="text-xs text-muted-foreground">Export with default settings</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleQuickExport('markdown')}>
            <FileText className="h-4 w-4 mr-2" />
            Export as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('html')}>
            <FileCode className="h-4 w-4 mr-2" />
            Export as HTML
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('pdf')}>
            <FileImage className="h-4 w-4 mr-2" />
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleQuickExport('react')}>
            <FileCode className="h-4 w-4 mr-2" />
            Export as React
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShowAdvancedDialog(true)}>
            <Settings className="h-4 w-4 mr-2" />
            Export with Options...
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ExportAdvancedDialog
        open={showAdvancedDialog}
        onOpenChange={setShowAdvancedDialog}
        noteId={noteId}
        noteTitle={noteTitle}
        onExportStart={onExportStart}
        onExportComplete={onExportComplete}
        onExportError={onExportError}
      />
    </>
  )
}

function ExportAdvancedDialog({
  open,
  onOpenChange,
  noteId,
  noteTitle = 'Untitled',
  onExportStart,
  onExportComplete,
  onExportError,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  noteId?: string
  noteTitle?: string
  onExportStart?: () => void
  onExportComplete?: (result: any) => void
  onExportError?: (error: string) => void
}) {
  const [options, setOptions] = useState<ExportOptions>({
    includeFrontMatter: false,
    includeTags: false,
    includeDates: false,
    format: 'markdown',
    pageFormat: 'A4',
    pageNumbers: false,
    tableOfContents: false,
    selfContained: true,
    includeCSS: true,
  })
  
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState<ExportProgress | null>(null)

  const handleExport = async () => {
    try {
      setIsExporting(true)
      setExportProgress({ stage: 'Preparing export...', progress: 0 })
      onExportStart?.()
      
      // Simulate progress updates
      const progressSteps = [
        { stage: 'Processing content...', progress: 25 },
        { stage: 'Applying formatting...', progress: 50 },
        { stage: 'Generating file...', progress: 75 },
        { stage: 'Finalizing...', progress: 90 },
      ]
      
      for (const step of progressSteps) {
        setExportProgress(step)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          noteId,
          format: options.format,
          options,
        }),
      })
      
      if (!response.ok) {
        throw new Error('Export failed')
      }
      
      const result = await response.json()
      
      if (result.success) {
        setExportProgress({ 
          stage: 'Export complete!', 
          progress: 100,
          filename: result.data.filename,
          downloadUrl: result.data.downloadUrl,
        })
        
        // Trigger download
        const link = document.createElement('a')
        link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(result.data.content)}`
        link.download = result.data.filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        onExportComplete?.(result.data)
        
        // Reset after a delay
        setTimeout(() => {
          setIsExporting(false)
          setExportProgress(null)
          onOpenChange(false)
        }, 2000)
      } else {
        throw new Error(result.error || 'Export failed')
      }
    } catch (error) {
      console.error('Export failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Export failed'
      setExportProgress({ 
        stage: 'Export failed', 
        progress: 0, 
        error: errorMessage,
      })
      onExportError?.(errorMessage)
    }
  }

  const handleCancelExport = () => {
    setIsExporting(false)
    setExportProgress(null)
  }

  const updateOption = <K extends keyof ExportOptions>(
    key: K,
    value: ExportOptions[K]
  ) => {
    setOptions(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Export Note</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Choose format and options for exporting "{noteTitle}"
          </p>
        </DialogHeader>

        {isExporting ? (
          <ExportProgressView
            progress={exportProgress}
            onCancel={handleCancelExport}
          />
        ) : (
          <div className="space-y-6 overflow-auto flex-1">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="text-base font-medium">Export Format</Label>
                <RadioGroup
                  value={options.format}
                  onValueChange={(value) => updateOption('format', value as ExportOptions['format'])}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="markdown" id="markdown" />
                    <Label htmlFor="markdown" className="font-normal">
                      Markdown (.md)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="html" id="html" />
                    <Label htmlFor="html" className="font-normal">
                      HTML (.html)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="pdf" />
                    <Label htmlFor="pdf" className="font-normal">
                      PDF (.pdf)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="react" id="react" />
                    <Label htmlFor="react" className="font-normal">
                      React Component (.tsx)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">General Options</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeFrontMatter"
                      checked={options.includeFrontMatter}
                      onCheckedChange={(checked) => updateOption('includeFrontMatter', !!checked)}
                    />
                    <Label htmlFor="includeFrontMatter">Include Front Matter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeTags"
                      checked={options.includeTags}
                      onCheckedChange={(checked) => updateOption('includeTags', !!checked)}
                    />
                    <Label htmlFor="includeTags">Include Tags</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeDates"
                      checked={options.includeDates}
                      onCheckedChange={(checked) => updateOption('includeDates', !!checked)}
                    />
                    <Label htmlFor="includeDates">Include Dates</Label>
                  </div>
                </div>
              </div>

              {options.format === 'pdf' && (
                <div className="space-y-3">
                  <Label className="text-base font-medium">PDF Options</Label>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label>Page Format</Label>
                      <RadioGroup
                        value={options.pageFormat}
                        onValueChange={(value) => updateOption('pageFormat', value as ExportOptions['pageFormat'])}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="A4" id="A4" />
                          <Label htmlFor="A4" className="font-normal">A4</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Letter" id="Letter" />
                          <Label htmlFor="Letter" className="font-normal">Letter</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Legal" id="Legal" />
                          <Label htmlFor="Legal" className="font-normal">Legal</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="pageNumbers"
                        checked={options.pageNumbers}
                        onCheckedChange={(checked) => updateOption('pageNumbers', !!checked)}
                      />
                      <Label htmlFor="pageNumbers">Page Numbers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tableOfContents"
                        checked={options.tableOfContents}
                        onCheckedChange={(checked) => updateOption('tableOfContents', !!checked)}
                      />
                      <Label htmlFor="tableOfContents">Table of Contents</Label>
                    </div>
                  </div>
                </div>
              )}

              {options.format === 'html' && (
                <div className="space-y-3">
                  <Label className="text-base font-medium">HTML Options</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="selfContained"
                        checked={options.selfContained}
                        onCheckedChange={(checked) => updateOption('selfContained', !!checked)}
                      />
                      <Label htmlFor="selfContained">Self-contained</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeCSS"
                        checked={options.includeCSS}
                        onCheckedChange={(checked) => updateOption('includeCSS', !!checked)}
                      />
                      <Label htmlFor="includeCSS">Include CSS Styling</Label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Button onClick={handleExport} className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Export {options.format.toUpperCase()}
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function ExportProgressView({
  progress,
  onCancel,
}: {
  progress: ExportProgress | null
  onCancel: () => void
}) {
  if (!progress) return null

  return (
    <div className="space-y-6 py-6">
      <div className="text-center space-y-4">
        {progress.error ? (
          <>
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-destructive">Export Failed</h3>
              <p className="text-sm text-muted-foreground">{progress.error}</p>
            </div>
          </>
        ) : progress.progress === 100 ? (
          <>
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Export Complete!</h3>
              <p className="text-sm text-muted-foreground">
                {progress.filename && `Downloaded: ${progress.filename}`}
              </p>
            </div>
          </>
        ) : (
          <>
            <Loader2 className="h-12 w-12 animate-spin mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Exporting...</h3>
              <p className="text-sm text-muted-foreground">{progress.stage}</p>
            </div>
          </>
        )}
      </div>

      {!progress.error && progress.progress < 100 && (
        <div className="space-y-2">
          <Progress value={progress.progress} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{progress.stage}</span>
            <span>{progress.progress}%</span>
          </div>
        </div>
      )}

      {(!progress.error && progress.progress < 100) && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={onCancel}>
            <X className="h-4 w-4 mr-2" />
            Cancel Export
          </Button>
        </div>
      )}
    </div>
  )
}

// Export alias for the main dialog
export const ExportDialog = ExportAdvancedDialog