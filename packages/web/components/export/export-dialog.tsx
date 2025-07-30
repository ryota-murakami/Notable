'use client'

import * as React from 'react'
import { match } from 'ts-pattern'
import {
  Code,
  Download,
  File,
  FileText,
  Globe,
  Settings,
  X,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import { Button } from '../../design-system/components/button'
import { Badge } from '../../design-system/components/badge'
import { Switch } from '@radix-ui/react-switch'
import { Label } from '@radix-ui/react-label'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Slider } from '../../design-system/components/slider'
import { Textarea } from '../../design-system/components/textarea'
import { Input } from '../../design-system/components/input'
import { cn } from '../../lib/utils'
import { type Note } from '../../types/note'
import {
  type ExportFormat,
  type ExportOptions,
  type HTMLExportOptions,
  type MarkdownExportOptions,
  type PDFExportOptions,
  type ReactExportOptions,
} from '../../types/export'
import { useExport, useExportFormats } from '../../hooks/use-export'

interface ExportDialogProps {
  note: Note
  children?: React.ReactNode
  defaultFormat?: ExportFormat
  onExportComplete?: (format: ExportFormat) => void
}

export function ExportDialog({
  note,
  children,
  defaultFormat = 'markdown',
  onExportComplete,
}: ExportDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedFormat, setSelectedFormat] =
    React.useState<ExportFormat>(defaultFormat)
  const [options, setOptions] = React.useState<ExportOptions>(() =>
    getDefaultOptionsForFormat(defaultFormat)
  )
  const [preview, setPreview] = React.useState<{
    content: string
    wordCount: number
    estimatedSize: number
  } | null>(null)

  const { formats } = useExportFormats()
  const { exportNote, previewExport, isExporting, progress, error } = useExport(
    {
      onSuccess: (result) => {
        setOpen(false)
        onExportComplete?.(result.format)
      },
      autoDownload: true,
      showToasts: true,
    }
  )

  // Update options when format changes
  React.useEffect(() => {
    setOptions(getDefaultOptionsForFormat(selectedFormat))
  }, [selectedFormat])

  // Generate preview
  React.useEffect(() => {
    const generatePreview = async () => {
      try {
        const result = await previewExport(note, selectedFormat, options)
        setPreview(result)
      } catch (err) {
        console.error('Preview generation failed:', err)
        setPreview(null)
      }
    }

    if (open && note) {
      generatePreview()
    }
  }, [open, note, selectedFormat, options, previewExport])

  const handleExport = async () => {
    await exportNote(note, options)
  }

  const updateOptions = (updates: Partial<ExportOptions>) => {
    setOptions((prev) => ({ ...prev, ...updates }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant='secondary' className='gap-2'>
            <Settings className='h-4 w-4' />
            Export Options
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
        <div className='flex flex-col space-y-1.5 text-center sm:text-left mb-4'>
          <DialogTitle className='flex items-center gap-2 text-lg font-semibold leading-none tracking-tight'>
            <Download className='h-5 w-5' />
            Export Note
          </DialogTitle>
          <DialogDescription className='text-sm text-muted-foreground'>
            Choose your export format and customize the output options.
          </DialogDescription>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Panel - Options */}
          <div className='space-y-6'>
            {/* Format Selection */}
            <div className='space-y-3'>
              <Label className='text-sm font-medium'>Export Format</Label>
              <RadioGroup
                value={selectedFormat}
                onValueChange={(value) =>
                  setSelectedFormat(value as ExportFormat)
                }
                className='grid grid-cols-2 gap-3'
              >
                {formats.map((format) => {
                  const Icon = getFormatIcon(format.value)
                  return (
                    <div
                      key={format.value}
                      className={cn(
                        'flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-colors',
                        selectedFormat === format.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:bg-accent/50'
                      )}
                    >
                      <RadioGroupItem value={format.value} id={format.value} />
                      <div className='flex items-center gap-2 flex-1'>
                        <Icon className='h-4 w-4' />
                        <div>
                          <div className='font-medium'>{format.label}</div>
                          <div className='text-xs text-muted-foreground'>
                            {format.description.split(' - ')[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>

            {/* General Options */}
            <div className='space-y-4'>
              <Label className='text-sm font-medium'>General Options</Label>

              <div className='flex items-center justify-between'>
                <div>
                  <Label htmlFor='include-dates'>Include Dates</Label>
                  <div className='text-xs text-muted-foreground'>
                    Show creation and modification dates
                  </div>
                </div>
                <Switch
                  id='include-dates'
                  checked={options.includeDates}
                  onCheckedChange={(checked) =>
                    updateOptions({ includeDates: checked })
                  }
                />
              </div>

              <div className='flex items-center justify-between'>
                <div>
                  <Label htmlFor='include-tags'>Include Tags</Label>
                  <div className='text-xs text-muted-foreground'>
                    Show note tags if available
                  </div>
                </div>
                <Switch
                  id='include-tags'
                  checked={options.includeTags}
                  onCheckedChange={(checked) =>
                    updateOptions({ includeTags: checked })
                  }
                />
              </div>

              <div className='flex items-center justify-between'>
                <div>
                  <Label htmlFor='include-frontmatter'>
                    Include Front Matter
                  </Label>
                  <div className='text-xs text-muted-foreground'>
                    Add YAML metadata header
                  </div>
                </div>
                <Switch
                  id='include-frontmatter'
                  checked={options.includeFrontMatter}
                  onCheckedChange={(checked) =>
                    updateOptions({ includeFrontMatter: checked })
                  }
                />
              </div>
            </div>

            {/* Format-specific Options */}
            {selectedFormat === 'markdown' && (
              <MarkdownOptions
                options={options as MarkdownExportOptions}
                onChange={updateOptions}
              />
            )}

            {selectedFormat === 'pdf' && (
              <PDFOptions
                options={options as PDFExportOptions}
                onChange={updateOptions}
              />
            )}

            {selectedFormat === 'html' && (
              <HTMLOptions
                options={options as HTMLExportOptions}
                onChange={updateOptions}
              />
            )}

            {selectedFormat === 'react' && (
              <ReactOptions
                options={options as ReactExportOptions}
                onChange={updateOptions}
              />
            )}

            {/* Quality Settings */}
            <div className='space-y-4'>
              <Label className='text-sm font-medium'>Quality Settings</Label>

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label>Image Quality</Label>
                  <span className='text-sm text-muted-foreground'>
                    {options.quality?.imageQuality || 85}%
                  </span>
                </div>
                <Slider
                  value={[options.quality?.imageQuality || 85]}
                  onValueChange={([value]: number[]) =>
                    updateOptions({
                      quality: { ...options.quality, imageQuality: value },
                    })
                  }
                  min={10}
                  max={100}
                  step={5}
                  className='w-full'
                />
              </div>

              <div className='flex items-center justify-between'>
                <div>
                  <Label htmlFor='optimize-size'>Optimize File Size</Label>
                  <div className='text-xs text-muted-foreground'>
                    Reduce file size when possible
                  </div>
                </div>
                <Switch
                  id='optimize-size'
                  checked={options.quality?.optimizeSize}
                  onCheckedChange={(checked) =>
                    updateOptions({
                      quality: { ...options.quality, optimizeSize: checked },
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <Label className='text-sm font-medium'>Preview</Label>
              {preview && (
                <div className='flex gap-2'>
                  <Badge variant='outline'>{preview.wordCount} words</Badge>
                  <Badge variant='outline'>
                    {formatFileSize(preview.estimatedSize)}
                  </Badge>
                </div>
              )}
            </div>

            <div className='border rounded-lg p-4 h-96 overflow-y-auto bg-muted/50'>
              {preview ? (
                <pre className='text-xs whitespace-pre-wrap font-mono'>
                  {preview.content}
                </pre>
              ) : (
                <div className='flex items-center justify-center h-full text-muted-foreground'>
                  <div className='text-center'>
                    <FileText className='h-8 w-8 mx-auto mb-2 opacity-50' />
                    <div>Generating preview...</div>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className='p-3 bg-destructive/10 border border-destructive/20 rounded-lg'>
                <div className='flex items-center gap-2 text-destructive text-sm'>
                  <X className='h-4 w-4' />
                  {error}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className='flex items-center justify-between pt-4 border-t'>
          <div className='text-sm text-muted-foreground'>
            {note.title && `Exporting: ${note.title}`}
          </div>

          <div className='flex gap-2'>
            <Button
              variant='secondary'
              onClick={() => setOpen(false)}
              disabled={isExporting}
            >
              Cancel
            </Button>
            <Button
              onClick={handleExport}
              disabled={isExporting}
              className='gap-2'
            >
              {isExporting ? (
                <>
                  <div className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                  Exporting... {progress}%
                </>
              ) : (
                <>
                  <Download className='h-4 w-4' />
                  Export {selectedFormat.toUpperCase()}
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Format-specific option components
function MarkdownOptions({
  options,
  onChange,
}: {
  options: MarkdownExportOptions
  onChange: (updates: Partial<ExportOptions>) => void
}) {
  return (
    <div className='space-y-4'>
      <Label className='text-sm font-medium'>Markdown Options</Label>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='use-gfm'>GitHub Flavored Markdown</Label>
          <div className='text-xs text-muted-foreground'>
            Use GFM syntax for tables and task lists
          </div>
        </div>
        <Switch
          id='use-gfm'
          checked={(options as MarkdownExportOptions).useGFM}
          onCheckedChange={(checked) =>
            onChange({ ...options, useGFM: checked } as Partial<ExportOptions>)
          }
        />
      </div>

      <div className='space-y-2'>
        <Label>Image Handling</Label>
        <RadioGroup
          value={(options as MarkdownExportOptions).imageHandling}
          onValueChange={(value) =>
            onChange({
              ...options,
              imageHandling: value as 'embed' | 'link' | 'copy',
            } as Partial<ExportOptions>)
          }
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='embed' id='embed' />
            <Label htmlFor='embed'>Embed images</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='link' id='link' />
            <Label htmlFor='link'>Link to images</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='copy' id='copy' />
            <Label htmlFor='copy'>Copy images</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function PDFOptions({
  options,
  onChange,
}: {
  options: PDFExportOptions
  onChange: (updates: Partial<ExportOptions>) => void
}) {
  return (
    <div className='space-y-4'>
      <Label className='text-sm font-medium'>PDF Options</Label>

      <div className='space-y-2'>
        <Label>Page Format</Label>
        <RadioGroup
          value={options.pageFormat}
          onValueChange={(value) =>
            onChange({ pageFormat: value as 'A4' | 'Letter' | 'Legal' | 'A3' })
          }
        >
          {['A4', 'Letter', 'Legal', 'A3'].map((format) => (
            <div key={format} className='flex items-center space-x-2'>
              <RadioGroupItem value={format} id={format} />
              <Label htmlFor={format}>{format}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='include-page-numbers'>Page Numbers</Label>
          <div className='text-xs text-muted-foreground'>
            Add page numbers to footer
          </div>
        </div>
        <Switch
          id='include-page-numbers'
          checked={(options as PDFExportOptions).includePageNumbers}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              includePageNumbers: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='generate-toc'>Table of Contents</Label>
          <div className='text-xs text-muted-foreground'>
            Generate TOC from headings
          </div>
        </div>
        <Switch
          id='generate-toc'
          checked={(options as PDFExportOptions).generateTOC}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              generateTOC: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>
    </div>
  )
}

function HTMLOptions({
  options,
  onChange,
}: {
  options: HTMLExportOptions
  onChange: (updates: Partial<ExportOptions>) => void
}) {
  return (
    <div className='space-y-4'>
      <Label className='text-sm font-medium'>HTML Options</Label>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='self-contained'>Self-contained</Label>
          <div className='text-xs text-muted-foreground'>
            Embed all CSS and assets inline
          </div>
        </div>
        <Switch
          id='self-contained'
          checked={(options as HTMLExportOptions).selfContained}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              selfContained: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='include-search'>Search functionality</Label>
          <div className='text-xs text-muted-foreground'>
            Add in-page search feature
          </div>
        </div>
        <Switch
          id='include-search'
          checked={(options as HTMLExportOptions).includeSearch}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              includeSearch: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='dark-mode'>Dark mode support</Label>
          <div className='text-xs text-muted-foreground'>
            Include dark theme styles
          </div>
        </div>
        <Switch
          id='dark-mode'
          checked={(options as HTMLExportOptions).darkMode}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              darkMode: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>
    </div>
  )
}

function ReactOptions({
  options,
  onChange,
}: {
  options: ReactExportOptions
  onChange: (updates: Partial<ExportOptions>) => void
}) {
  return (
    <div className='space-y-4'>
      <Label className='text-sm font-medium'>React Options</Label>

      <div className='flex items-center justify-between'>
        <div>
          <Label htmlFor='use-typescript'>TypeScript</Label>
          <div className='text-xs text-muted-foreground'>
            Generate TypeScript component
          </div>
        </div>
        <Switch
          id='use-typescript'
          checked={(options as ReactExportOptions).useTypeScript}
          onCheckedChange={(checked) =>
            onChange({
              ...options,
              useTypeScript: checked,
            } as Partial<ExportOptions>)
          }
        />
      </div>

      <div className='space-y-2'>
        <Label>Styling Approach</Label>
        <RadioGroup
          value={(options as ReactExportOptions).styling}
          onValueChange={(value) =>
            onChange({
              ...options,
              styling: value as
                | 'tailwind'
                | 'css-modules'
                | 'styled-components'
                | 'css-in-js',
            } as Partial<ExportOptions>)
          }
        >
          {[
            { value: 'tailwind', label: 'Tailwind CSS' },
            { value: 'css-modules', label: 'CSS Modules' },
            { value: 'styled-components', label: 'Styled Components' },
            { value: 'css-in-js', label: 'CSS-in-JS' },
          ].map((style) => (
            <div key={style.value} className='flex items-center space-x-2'>
              <RadioGroupItem value={style.value} id={style.value} />
              <Label htmlFor={style.value}>{style.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='component-name'>Component Name</Label>
        <Input
          id='component-name'
          value={(options as ReactExportOptions).componentName || ''}
          onChange={(e) =>
            onChange({
              ...options,
              componentName: e.target.value,
            } as Partial<ExportOptions>)
          }
          placeholder='NoteComponent'
        />
      </div>
    </div>
  )
}

// Helper functions
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

function getDefaultOptionsForFormat(format: ExportFormat): ExportOptions {
  // This would typically use the export service
  const baseOptions: ExportOptions = {
    format,
    includeFrontMatter: true,
    includeDates: true,
    includeTags: true,
    quality: {
      imageQuality: 85,
      imageFormat: 'jpeg' as const,
      imageMaxWidth: 1200,
      optimizeSize: true,
    },
  }

  return match(format)
    .with(
      'markdown',
      () =>
        ({
          ...baseOptions,
          format: 'markdown',
          useGFM: true,
          imageHandling: 'embed' as const,
        }) as MarkdownExportOptions
    )
    .with(
      'pdf',
      () =>
        ({
          ...baseOptions,
          format: 'pdf',
          pageFormat: 'A4' as const,
          pageOrientation: 'portrait' as const,
          includePageNumbers: true,
          generateTOC: true,
          margins: { top: 20, right: 20, bottom: 20, left: 20 },
        }) as PDFExportOptions
    )
    .with(
      'html',
      () =>
        ({
          ...baseOptions,
          format: 'html',
          selfContained: true,
          includeSearch: true,
          includeNavigation: true,
          responsive: true,
          darkMode: true,
        }) as HTMLExportOptions
    )
    .with(
      'react',
      () =>
        ({
          ...baseOptions,
          format: 'react',
          useTypeScript: true,
          styling: 'tailwind' as const,
          functional: true,
          includePropTypes: false,
        }) as ReactExportOptions
    )
    .otherwise(() => baseOptions)
}

function getFormatIcon(format: ExportFormat) {
  const icons = {
    markdown: FileText,
    pdf: File,
    html: Globe,
    react: Code,
  }
  return icons[format] || FileText
}
