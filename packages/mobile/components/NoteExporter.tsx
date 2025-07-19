import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import {
  Button,
  Text,
  Card,
  useTheme,
  ProgressBar,
  Chip,
} from 'react-native-paper'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { Note } from '../types'

export interface NoteExporterProps {
  note: Note
  onClose: () => void
}

export type ExportFormat = 'markdown' | 'txt' | 'json' | 'html'

interface ExportOption {
  format: ExportFormat
  label: string
  description: string
  icon: string
}

const exportOptions: ExportOption[] = [
  {
    format: 'markdown',
    label: 'Markdown',
    description: 'Export as .md file with formatting',
    icon: 'language-markdown',
  },
  {
    format: 'txt',
    label: 'Plain Text',
    description: 'Export as simple .txt file',
    icon: 'text',
  },
  {
    format: 'json',
    label: 'JSON',
    description: 'Export as structured JSON data',
    icon: 'code-braces',
  },
  {
    format: 'html',
    label: 'HTML',
    description: 'Export as formatted HTML file',
    icon: 'language-html5',
  },
]

export function NoteExporter({ note, onClose }: NoteExporterProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat | null>(
    null,
  )
  const theme = useTheme()

  const convertNoteContent = (format: ExportFormat): string => {
    switch (format) {
      case 'markdown':
        return convertToMarkdown()
      case 'txt':
        return convertToPlainText()
      case 'json':
        return convertToJSON()
      case 'html':
        return convertToHTML()
      default:
        return note.content
    }
  }

  const convertToMarkdown = (): string => {
    // If content is already markdown, return as-is
    if (typeof note.content === 'string') {
      return `# ${note.title}\n\n${note.content}`
    }

    // If content is JSON (from Plate.js), convert to markdown
    try {
      const plateContent =
        typeof note.content === 'string'
          ? JSON.parse(note.content)
          : note.content

      const convertNode = (node: any): string => {
        if (typeof node === 'string') return node
        if (!node.type) return node.text || ''

        const text = node.children?.map(convertNode).join('') || ''

        switch (node.type) {
          case 'h1':
            return `# ${text}\n\n`
          case 'h2':
            return `## ${text}\n\n`
          case 'h3':
            return `### ${text}\n\n`
          case 'h4':
            return `#### ${text}\n\n`
          case 'h5':
            return `##### ${text}\n\n`
          case 'h6':
            return `###### ${text}\n\n`
          case 'p':
            return `${text}\n\n`
          case 'blockquote':
            return `> ${text}\n\n`
          case 'ul':
            return `${text}\n`
          case 'ol':
            return `${text}\n`
          case 'li':
            return `- ${text}\n`
          case 'code_block':
            return `\`\`\`\n${text}\n\`\`\`\n\n`
          case 'hr':
            return `---\n\n`
          case 'a':
            return `[${text}](${node.url})`
          case 'img':
            return `![${node.alt || ''}](${node.url})`
          default:
            if (node.bold) return `**${text}**`
            if (node.italic) return `*${text}*`
            if (node.code) return `\`${text}\``
            return text
        }
      }

      const markdownContent = Array.isArray(plateContent)
        ? plateContent.map(convertNode).join('').trim()
        : note.content

      return `# ${note.title}\n\n${markdownContent}`
    } catch {
      return `# ${note.title}\n\n${note.content}`
    }
  }

  const convertToPlainText = (): string => {
    const markdown = convertToMarkdown()
    // Remove markdown formatting
    return markdown
      .replace(/^#{1,6}\s+/gm, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/^\s*[-\*\+]\s+/gm, '') // Remove list markers
      .replace(/^\s*>\s+/gm, '') // Remove blockquotes
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
      .replace(/^---\s*$/gm, '') // Remove horizontal rules
      .trim()
  }

  const convertToJSON = (): string => {
    return JSON.stringify(
      {
        id: note.id,
        title: note.title,
        content: note.content,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        metadata: {
          exportedAt: new Date().toISOString(),
          format: 'json',
          version: '1.0',
        },
      },
      null,
      2,
    )
  }

  const convertToHTML = (): string => {
    const markdown = convertToMarkdown()

    // Simple markdown to HTML conversion
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
      .replace(/^###### (.*$)/gm, '<h6>$1</h6>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^>\s+(.*$)/gm, '<blockquote>$1</blockquote>')
      .replace(/^\s*[-\*\+]\s+(.*$)/gm, '<li>$1</li>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      .replace(/^---\s*$/gm, '<hr>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')

    // Wrap in basic HTML structure
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${note.title}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2, h3, h4, h5, h6 { color: #333; }
        code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; font-style: italic; }
        hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
    </style>
</head>
<body>
    <p>${html}</p>
</body>
</html>`
  }

  const getFileExtension = (format: ExportFormat): string => {
    switch (format) {
      case 'markdown':
        return 'md'
      case 'txt':
        return 'txt'
      case 'json':
        return 'json'
      case 'html':
        return 'html'
      default:
        return 'txt'
    }
  }

  const sanitizeFilename = (filename: string): string => {
    return filename
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .toLowerCase()
      .substring(0, 50) // Limit length
  }

  const exportNote = async (format: ExportFormat) => {
    setSelectedFormat(format)
    setIsExporting(true)
    setExportProgress(0)

    try {
      // Simulate export progress
      setExportProgress(0.2)

      const content = convertNoteContent(format)
      const extension = getFileExtension(format)
      const filename = `${sanitizeFilename(note.title)}.${extension}`

      setExportProgress(0.5)

      // Create temporary file
      const fileUri = `${FileSystem.documentDirectory}${filename}`
      await FileSystem.writeAsStringAsync(fileUri, content, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      setExportProgress(0.8)

      // Share the file
      const canShare = await Sharing.isAvailableAsync()
      if (canShare) {
        await Sharing.shareAsync(fileUri, {
          mimeType: getMimeType(format),
          dialogTitle: `Export ${note.title}`,
          UTI: getUTI(format),
        })
      } else {
        Alert.alert(
          'Export Complete',
          `Note exported successfully to: ${filename}`,
          [{ text: 'OK' }],
        )
      }

      setExportProgress(1)

      // Clean up temporary file after a delay
      setTimeout(async () => {
        try {
          await FileSystem.deleteAsync(fileUri, { idempotent: true })
        } catch (error) {
          console.warn('Failed to delete temporary file:', error)
        }
      }, 5000)
    } catch (error) {
      console.error('Export failed:', error)
      Alert.alert(
        'Export Failed',
        'An error occurred while exporting the note. Please try again.',
        [{ text: 'OK' }],
      )
    } finally {
      setTimeout(() => {
        setIsExporting(false)
        setExportProgress(0)
        setSelectedFormat(null)
        onClose()
      }, 1000)
    }
  }

  const getMimeType = (format: ExportFormat): string => {
    switch (format) {
      case 'markdown':
        return 'text/markdown'
      case 'txt':
        return 'text/plain'
      case 'json':
        return 'application/json'
      case 'html':
        return 'text/html'
      default:
        return 'text/plain'
    }
  }

  const getUTI = (format: ExportFormat): string => {
    switch (format) {
      case 'markdown':
        return 'net.daringfireball.markdown'
      case 'txt':
        return 'public.plain-text'
      case 'json':
        return 'public.json'
      case 'html':
        return 'public.html'
      default:
        return 'public.plain-text'
    }
  }

  if (isExporting) {
    return (
      <View style={styles.exportingContainer}>
        <Text variant="headlineSmall" style={styles.exportingTitle}>
          Exporting Note...
        </Text>
        <Text variant="bodyMedium" style={styles.exportingSubtitle}>
          Preparing {selectedFormat?.toUpperCase()} export
        </Text>
        <ProgressBar
          progress={exportProgress}
          style={styles.progressBar}
          color={theme.colors.primary}
        />
        <Text variant="bodySmall" style={styles.progressText}>
          {Math.round(exportProgress * 100)}% complete
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text variant="bodyMedium" style={styles.description}>
        Choose the format you'd like to export "{note.title}" to:
      </Text>

      <View style={styles.optionsContainer}>
        {exportOptions.map((option) => (
          <Card key={option.format} style={styles.optionCard}>
            <Card.Content style={styles.optionContent}>
              <View style={styles.optionHeader}>
                <Text variant="titleMedium" style={styles.optionTitle}>
                  {option.label}
                </Text>
                <Chip mode="outlined" compact style={styles.formatChip}>
                  .{getFileExtension(option.format)}
                </Chip>
              </View>
              <Text variant="bodySmall" style={styles.optionDescription}>
                {option.description}
              </Text>
              <Button
                mode="contained"
                onPress={() => exportNote(option.format)}
                style={styles.exportButton}
                contentStyle={styles.exportButtonContent}
                disabled={isExporting}
              >
                Export as {option.label}
              </Button>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Button
        mode="outlined"
        onPress={onClose}
        style={styles.cancelButton}
        disabled={isExporting}
      >
        Cancel
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionCard: {
    elevation: 2,
  },
  optionContent: {
    padding: 16,
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionTitle: {
    fontWeight: 'bold',
  },
  formatChip: {
    height: 24,
  },
  optionDescription: {
    marginBottom: 12,
    opacity: 0.7,
  },
  exportButton: {
    marginTop: 8,
  },
  exportButtonContent: {
    paddingVertical: 4,
  },
  cancelButton: {
    marginTop: 8,
  },
  exportingContainer: {
    padding: 32,
    alignItems: 'center',
  },
  exportingTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  exportingSubtitle: {
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.7,
  },
  progressBar: {
    width: '100%',
    height: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    opacity: 0.6,
  },
})
