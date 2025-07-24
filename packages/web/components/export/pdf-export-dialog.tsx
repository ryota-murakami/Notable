'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileDown, Loader2 } from 'lucide-react'
import type { ExportFormat } from '@/hooks/use-export'

interface PDFExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onExport: (format: ExportFormat, options: any) => Promise<void>
  isExporting: boolean
}

export function PDFExportDialog({
  open,
  onOpenChange,
  onExport,
  isExporting,
}: PDFExportDialogProps) {
  const [includePageNumbers, setIncludePageNumbers] = useState(true)
  const [includeTableOfContents, setIncludeTableOfContents] = useState(false)
  const [headerText, setHeaderText] = useState('')
  const [footerText, setFooterText] = useState('')
  const [margins, setMargins] = useState({
    top: '1',
    right: '1',
    bottom: '1',
    left: '1',
  })

  const handleExport = async () => {
    await onExport('pdf', {
      includePageNumbers,
      includeTableOfContents,
      headerText,
      footerText,
      pageMargins: {
        top: `${margins.top}in`,
        right: `${margins.right}in`,
        bottom: `${margins.bottom}in`,
        left: `${margins.left}in`,
      },
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>PDF Export Options</DialogTitle>
          <DialogDescription>
            Customize how your note will be exported as PDF
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          {/* Checkboxes */}
          <div className='space-y-3'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='page-numbers'
                checked={includePageNumbers}
                onCheckedChange={(checked) =>
                  setIncludePageNumbers(checked as boolean)
                }
              />
              <Label
                htmlFor='page-numbers'
                className='text-sm font-normal cursor-pointer'
              >
                Include page numbers
              </Label>
            </div>

            <div className='flex items-center space-x-2'>
              <Checkbox
                id='table-of-contents'
                checked={includeTableOfContents}
                onCheckedChange={(checked) =>
                  setIncludeTableOfContents(checked as boolean)
                }
              />
              <Label
                htmlFor='table-of-contents'
                className='text-sm font-normal cursor-pointer'
              >
                Include table of contents
              </Label>
            </div>
          </div>

          {/* Header and Footer */}
          <div className='space-y-3'>
            <div className='grid gap-2'>
              <Label htmlFor='header-text'>Header Text</Label>
              <Input
                id='header-text'
                placeholder='Optional header text'
                value={headerText}
                onChange={(e) => setHeaderText(e.target.value)}
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='footer-text'>Footer Text</Label>
              <Input
                id='footer-text'
                placeholder='Optional footer text'
                value={footerText}
                onChange={(e) => setFooterText(e.target.value)}
              />
            </div>
          </div>

          {/* Margins */}
          <div className='space-y-3'>
            <Label>Page Margins (inches)</Label>
            <div className='grid grid-cols-4 gap-2'>
              <div>
                <Label htmlFor='margin-top' className='text-xs'>
                  Top
                </Label>
                <Input
                  id='margin-top'
                  type='number'
                  min='0'
                  max='3'
                  step='0.25'
                  value={margins.top}
                  onChange={(e) =>
                    setMargins({ ...margins, top: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor='margin-right' className='text-xs'>
                  Right
                </Label>
                <Input
                  id='margin-right'
                  type='number'
                  min='0'
                  max='3'
                  step='0.25'
                  value={margins.right}
                  onChange={(e) =>
                    setMargins({ ...margins, right: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor='margin-bottom' className='text-xs'>
                  Bottom
                </Label>
                <Input
                  id='margin-bottom'
                  type='number'
                  min='0'
                  max='3'
                  step='0.25'
                  value={margins.bottom}
                  onChange={(e) =>
                    setMargins({ ...margins, bottom: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor='margin-left' className='text-xs'>
                  Left
                </Label>
                <Input
                  id='margin-left'
                  type='number'
                  min='0'
                  max='3'
                  step='0.25'
                  value={margins.left}
                  onChange={(e) =>
                    setMargins({ ...margins, left: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => onOpenChange(false)}
            disabled={isExporting}
          >
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={isExporting}>
            {isExporting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Exporting...
              </>
            ) : (
              <>
                <FileDown className='mr-2 h-4 w-4' />
                Export PDF
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
