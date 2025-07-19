import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import Markdown from 'react-native-markdown-display'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const theme = useTheme()

  const markdownStyles = StyleSheet.create({
    body: {
      color: theme.colors.onSurface,
      fontSize: 16,
      lineHeight: 24,
    },
    heading1: {
      color: theme.colors.onSurface,
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 24,
      marginBottom: 16,
    },
    heading2: {
      color: theme.colors.onSurface,
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 12,
    },
    heading3: {
      color: theme.colors.onSurface,
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
    },
    heading4: {
      color: theme.colors.onSurface,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 6,
    },
    heading5: {
      color: theme.colors.onSurface,
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 4,
    },
    heading6: {
      color: theme.colors.onSurface,
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 4,
      marginBottom: 2,
    },
    paragraph: {
      color: theme.colors.onSurface,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 16,
    },
    blockquote: {
      backgroundColor: theme.colors.surfaceVariant,
      borderLeftColor: theme.colors.primary,
      borderLeftWidth: 4,
      paddingLeft: 16,
      paddingVertical: 8,
      marginVertical: 16,
      fontStyle: 'italic',
    },
    code_inline: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.primary,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
      fontFamily: 'monospace',
      fontSize: 14,
    },
    code_block: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      padding: 16,
      borderRadius: 8,
      marginVertical: 16,
      fontFamily: 'monospace',
      fontSize: 14,
      lineHeight: 20,
    },
    fence: {
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      padding: 16,
      borderRadius: 8,
      marginVertical: 16,
      fontFamily: 'monospace',
      fontSize: 14,
      lineHeight: 20,
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
    s: {
      textDecorationLine: 'line-through',
    },
    link: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
    list_item: {
      color: theme.colors.onSurface,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 4,
    },
    bullet_list: {
      marginVertical: 8,
    },
    ordered_list: {
      marginVertical: 8,
    },
    hr: {
      backgroundColor: theme.colors.outline,
      height: 1,
      marginVertical: 24,
    },
    table: {
      borderWidth: 1,
      borderColor: theme.colors.outline,
      borderRadius: 4,
      marginVertical: 16,
    },
    thead: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    tbody: {},
    th: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
      borderRightWidth: 1,
      borderRightColor: theme.colors.outline,
      padding: 12,
      fontWeight: 'bold',
    },
    tr: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
    },
    td: {
      borderRightWidth: 1,
      borderRightColor: theme.colors.outline,
      padding: 12,
    },
  })

  if (!content.trim()) {
    return null
  }

  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{content}</Markdown>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
