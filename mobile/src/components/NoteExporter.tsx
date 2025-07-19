import React, { useState } from 'react'
import { View, StyleSheet, Alert, Share } from 'react-native'
import { Button, Text, ActivityIndicator, useTheme } from 'react-native-paper'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { Note, ExportFormat } from '@/types'

interface NoteExporterProps {
  note: Note
  onClose: () => void
}

export function NoteExporter({ note, onClose }: NoteExporterProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)
  const theme = useTheme()

  const convertToMarkdown = (content: string, title?: string): string => {
    let markdown = ''
    if (title) {
      markdown += `# ${title}\n\n`
    }
    markdown += content
    return markdown
  }

  const convertToHTML = (content: string, title?: string): string => {
    // Convert markdown to HTML (basic implementation)
    let html = content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || 'Untitled Note'}</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #333;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #2c3e50;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    code {
      background: #f8f9fa;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: Monaco, 'Courier New', monospace;
    }
  </style>
</head>
<body>
  ${title ? `<h1>${title}</h1>` : ''}
  <p>${html}</p>
</body>
</html>`
  }

  const exportNote = async (format: ExportFormat) => {
    if (isExporting) return

    setIsExporting(true)
    setExportProgress(0)

    try {
      const { title, content } = note

      setExportProgress(25)

      let exportData: string
      let filename: string
      let mimeType: string

      switch (format) {
        case 'markdown':
          exportData = convertToMarkdown(content, title)
          filename = `${title || 'untitled'}.md`
          mimeType = 'text/markdown'
          break

        case 'html':
          exportData = convertToHTML(content, title)
          filename = `${title || 'untitled'}.html`
          mimeType = 'text/html'
          break

        case 'react':
          const componentName = title
            ? title.replace(/[^a-zA-Z0-9]/g, '')
            : 'UntitledNote'
          exportData = `import React from 'react';

export function ${componentName}() {
  return (
    <div>
      ${title ? `<h1>${title}</h1>` : ''}
      <div>
        ${content
          .split('\n')
          .map((line) => `<p>${line}</p>`)
          .join('\n        ')}
      </div>
    </div>
  );
}

export default ${componentName};`
          filename = `${componentName}.tsx`
          mimeType = 'text/typescript'
          break

        default:
          throw new Error(`Unsupported format: ${format}`)
      }

      setExportProgress(75)

      // Create file
      const fileUri = `${FileSystem.documentDirectory}${filename}`
      await FileSystem.writeAsStringAsync(fileUri, exportData, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      setExportProgress(100)

      // Share the file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri, {
          mimeType,
          dialogTitle: `Export ${format.toUpperCase()}`,
        })
      } else {
        // Fallback to text sharing
        await Share.share({
          message: exportData,
          title: `${title || 'Untitled'} (${format.toUpperCase()})`,
        })
      }

      Alert.alert(
        'Export successful',
        `Note exported as ${format.toUpperCase()}`,
      )

      onClose()
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Export failed'
      Alert.alert('Export failed', errorMessage)
    } finally {
      setIsExporting(false)
      setExportProgress(0)
    }
  }

  return (
    <View style={styles.container}>
      {isExporting && (
        <View style={styles.progressContainer}>
          <ActivityIndicator size="small" color={theme.colors.primary} />
          <Text
            style={[
              styles.progressText,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            Exporting... {exportProgress}%
          </Text>
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <Button
          mode="outlined"
          onPress={() => exportNote('markdown')}
          disabled={isExporting}
          style={styles.button}
          icon="language-markdown"
        >
          Export as Markdown
        </Button>

        <Button
          mode="outlined"
          onPress={() => exportNote('html')}
          disabled={isExporting}
          style={styles.button}
          icon="language-html5"
        >
          Export as HTML
        </Button>

        <Button
          mode="outlined"
          onPress={() => exportNote('react')}
          disabled={isExporting}
          style={styles.button}
          icon="react"
        >
          Export as React
        </Button>

        <Button
          mode="text"
          onPress={onClose}
          disabled={isExporting}
          style={styles.button}
        >
          Cancel
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: 280,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 14,
  },
  buttonsContainer: {
    gap: 8,
  },
  button: {
    marginBottom: 8,
  },
})
