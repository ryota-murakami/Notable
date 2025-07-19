import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import Markdown from 'react-native-markdown-display'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const theme = useTheme()

  const markdownStyles = StyleSheet.create({
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.onSurface,
    },
    heading1: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 20,
      marginBottom: 10,
    },
    heading2: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 16,
      marginBottom: 8,
    },
    heading3: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 12,
      marginBottom: 6,
    },
    heading4: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 10,
      marginBottom: 5,
    },
    heading5: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 8,
      marginBottom: 4,
    },
    heading6: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      marginTop: 6,
      marginBottom: 3,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.onSurface,
      marginBottom: 12,
    },
    strong: {
      fontWeight: 'bold',
      color: theme.colors.onSurface,
    },
    em: {
      fontStyle: 'italic',
      color: theme.colors.onSurface,
    },
    code_inline: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
      fontSize: 14,
      fontFamily: 'monospace',
    },
    code_block: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
      fontSize: 14,
      fontFamily: 'monospace',
    },
    fence: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
      fontSize: 14,
      fontFamily: 'monospace',
    },
    blockquote: {
      backgroundColor: theme.colors.surface,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
      paddingLeft: 12,
      paddingVertical: 8,
      marginVertical: 8,
      fontStyle: 'italic',
    },
    bullet_list: {
      marginVertical: 8,
    },
    ordered_list: {
      marginVertical: 8,
    },
    list_item: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.onSurface,
      marginBottom: 4,
    },
    link: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
    hr: {
      backgroundColor: theme.colors.outline,
      height: 1,
      marginVertical: 16,
    },
    table: {
      borderWidth: 1,
      borderColor: theme.colors.outline,
      borderRadius: 4,
      marginVertical: 8,
    },
    thead: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    tbody: {
      backgroundColor: theme.colors.surface,
    },
    th: {
      padding: 8,
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: theme.colors.outline,
      color: theme.colors.onSurfaceVariant,
    },
    td: {
      padding: 8,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      color: theme.colors.onSurface,
    },
  })

  // Ensure content is a string
  const markdownContent =
    typeof content === 'string' ? content : String(content || '')

  return (
    <Markdown style={markdownStyles}>
      {markdownContent || 'No content to display'}
    </Markdown>
  )
}
