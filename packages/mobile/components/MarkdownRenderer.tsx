import React from 'react'
import { Text } from 'react-native-paper'

interface MarkdownRendererProps {
  content: string
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return <Text>{content}</Text>
}