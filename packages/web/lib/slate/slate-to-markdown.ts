import { type Descendant, Text } from 'slate'

/**
 * Convert Slate nodes to Markdown string
 */
export function slateToMarkdown(nodes: Descendant[]): string {
  return nodes.map((node) => serializeNode(node)).join('\n\n')
}

function serializeNode(node: Descendant): string {
  if (Text.isText(node)) {
    return serializeText(node)
  }

  const children = node.children.map((n) => serializeNode(n)).join('')

  switch (node.type) {
    case 'heading-one':
      return `# ${children}`
    case 'heading-two':
      return `## ${children}`
    case 'heading-three':
      return `### ${children}`
    case 'block-quote':
      return `> ${children}`
    case 'bulleted-list':
      return node.children.map((child) => serializeNode(child)).join('\n')
    case 'numbered-list':
      return node.children
        .map(
          (child, index) =>
            `${index + 1}. ${serializeNode(child).replace(/^\d+\.\s/, '')}`
        )
        .join('\n')
    case 'list-item':
      return `- ${children}`
    case 'code-block':
      return `\`\`\`\n${children}\n\`\`\``
    case 'paragraph':
    default:
      return children
  }
}

function serializeText(node: Text): string {
  let text = node.text

  if (node.bold) {
    text = `**${text}**`
  }

  if (node.italic) {
    text = `*${text}*`
  }

  if (node.underline) {
    text = `<u>${text}</u>`
  }

  if (node.strikethrough) {
    text = `~~${text}~~`
  }

  if (node.code) {
    text = `\`${text}\``
  }

  return text
}
