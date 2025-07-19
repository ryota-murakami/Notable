'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import type { Note } from '@/types/note'

interface ExportDialogProps {
  isOpen: boolean
  onClose: () => void
  note: Note
}

type ExportFormat = 'markdown' | 'html' | 'text'

export function ExportDialog({ isOpen, onClose, note }: ExportDialogProps) {
  const [format, setFormat] = useState<ExportFormat>('markdown')
  const { toast } = useToast()

  const handleExport = () => {
    let content = ''
    let fileExtension = ''

    switch (format) {
      case 'markdown':
        content = convertToMarkdown(note)
        fileExtension = 'md'
        break
      case 'html':
        content = note.content
        fileExtension = 'html'
        break
      case 'text':
        content = convertToPlainText(note)
        fileExtension = 'txt'
        break
    }

    // Create a blob and download it
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${note.title || 'untitled'}.${fileExtension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: 'Note exported',
      description: `Your note has been exported as ${format.toUpperCase()}.`,
    })

    onClose()
  }

  const convertToMarkdown = (note: Note): string => {
    // This is a simple conversion - a more robust solution would use a proper HTML to Markdown converter
    const content = note.content
      .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
      .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
      .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
      .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
      .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
      .replace(/<em>(.*?)<\/em>/g, '*$1*')
      .replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)')
      .replace(/<ul>(.*?)<\/ul>/gs, (_, list) => {
        return list.replace(/<li>(.*?)<\/li>/g, '- $1\n')
      })
      .replace(/<ol>(.*?)<\/ol>/gs, (_, list) => {
        let index = 1
        return list.replace(/<li>(.*?)<\/li>/g, () => {
          return `${index++}. $1\n`
        })
      })
      .replace(/<br>/g, '\n')
      .replace(/&nbsp;/g, ' ')

    return `# ${note.title}\n\n${content}`
  }

  const convertToPlainText = (note: Note): string => {
    // Create a temporary element to strip HTML tags
    const tempElement = document.createElement('div')
    tempElement.innerHTML = note.content
    return `${note.title}\n\n${tempElement.textContent}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Note</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <RadioGroup
            value={format}
            onValueChange={(value) => setFormat(value as ExportFormat)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="markdown" id="markdown" />
              <Label htmlFor="markdown">Markdown (.md)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="html" id="html" />
              <Label htmlFor="html">HTML (.html)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="text" id="text" />
              <Label htmlFor="text">Plain Text (.txt)</Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleExport}>Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
