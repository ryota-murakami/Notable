import type { Value } from 'platejs/react'

export function plateToMarkdown(value: Value): string {
  if (!value || !Array.isArray(value)) {
    return ''
  }

  return value
    .map((node) => nodeToMarkdown(node))
    .filter((line) => line !== null)
    .join('\n')
}

function nodeToMarkdown(node: any): string {
  if (!node) return ''

  switch (node.type) {
    case 'heading1':
      return `# ${childrenToMarkdown(node.children)}`
    case 'heading2':
      return `## ${childrenToMarkdown(node.children)}`
    case 'heading3':
      return `### ${childrenToMarkdown(node.children)}`
    case 'heading4':
      return `#### ${childrenToMarkdown(node.children)}`
    case 'heading5':
      return `##### ${childrenToMarkdown(node.children)}`
    case 'heading6':
      return `###### ${childrenToMarkdown(node.children)}`
    case 'paragraph':
      return childrenToMarkdown(node.children)
    case 'blockquote':
      return node.children
        .map((child: any) => `> ${nodeToMarkdown(child)}`)
        .join('\n')
    case 'code-block':
      return `\`\`\`\n${childrenToMarkdown(node.children)}\n\`\`\``
    case 'list-item':
      // For now, we'll use bullet points. Numbered lists would need more context
      return `- ${node.children.map((child: any) => nodeToMarkdown(child)).join(' ')}`
    case 'wikiLink':
      return `[[${node.noteTitle}]]`
    default:
      // For unknown types, try to extract text from children
      if (node.children) {
        return childrenToMarkdown(node.children)
      }
      return ''
  }
}

function childrenToMarkdown(children: any[]): string {
  if (!Array.isArray(children)) {
    return ''
  }

  return children
    .map((child) => {
      if (child.type) {
        // It's a nested element
        return nodeToMarkdown(child)
      } else if (child.text !== undefined) {
        // It's a text node
        let text = child.text

        // Apply formatting
        if (child.bold) {
          text = `**${text}**`
        }
        if (child.italic) {
          text = `*${text}*`
        }
        if (child.code) {
          text = `\`${text}\``
        }
        if (child.underline) {
          text = `<u>${text}</u>`
        }
        if (child.strikethrough) {
          text = `~~${text}~~`
        }

        return text
      }
      return ''
    })
    .join('')
}
