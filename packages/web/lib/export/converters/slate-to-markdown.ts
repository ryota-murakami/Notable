import { type Descendant, Element, Text } from 'slate'

export class SlateToMarkdownConverter {
  private listDepth = 0
  private listCounters: Map<number, number> = new Map()

  convert(nodes: Descendant[]): string {
    return nodes.map((node) => this.convertNode(node)).join('\n\n')
  }

  private convertNode(node: Descendant): string {
    if (Text.isText(node)) {
      return this.convertText(node)
    }

    if (Element.isElement(node)) {
      return this.convertElement(node)
    }

    return ''
  }

  private convertText(node: Text): string {
    let text = node.text

    // Apply inline formatting
    if (node.bold) text = `**${text}**`
    if (node.italic) text = `*${text}*`
    if (node.underline) text = `<u>${text}</u>`
    if (node.strikethrough) text = `~~${text}~~`
    if (node.code) text = `\`${text}\``

    return text
  }

  private convertElement(element: Element): string {
    const children = element.children
      .map((child) => this.convertNode(child))
      .join('')

    switch (element.type) {
      case 'paragraph':
        return children || '' // Empty string for empty paragraphs

      case 'heading-one':
        return `# ${children}`

      case 'heading-two':
        return `## ${children}`

      case 'heading-three':
        return `### ${children}`

      case 'block-quote':
        return children
          .split('\n')
          .map((line) => `> ${line}`)
          .join('\n')

      case 'bulleted-list':
        return this.convertList(element, false)

      case 'numbered-list':
        return this.convertList(element, true)

      case 'list-item':
        return children

      default:
        // Fallback for unknown element types
        return children
    }
  }

  private convertList(element: Element, ordered: boolean): string {
    this.listDepth++

    if (ordered && !this.listCounters.has(this.listDepth)) {
      this.listCounters.set(this.listDepth, 1)
    }

    const items = element.children
      .map((child, index) => {
        if (Element.isElement(child) && child.type === 'list-item') {
          const indent = '  '.repeat(this.listDepth - 1)
          const marker = ordered
            ? `${this.listCounters.get(this.listDepth) || 1}. `
            : '- '

          if (ordered) {
            this.listCounters.set(
              this.listDepth,
              (this.listCounters.get(this.listDepth) || 1) + 1
            )
          }

          const content = child.children
            .map((c) => this.convertNode(c))
            .join('')

          return `${indent}${marker}${content}`
        }
        return ''
      })
      .filter(Boolean)
      .join('\n')

    this.listDepth--

    if (this.listDepth === 0) {
      this.listCounters.clear()
    }

    return items
  }

  // GitHub Flavored Markdown extensions
  convertToGFM(nodes: Descendant[]): string {
    // For now, standard markdown is compatible with GFM
    // Additional GFM features like tables would be added here
    return this.convert(nodes)
  }
}
