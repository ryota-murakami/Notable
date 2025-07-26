import { type Descendant, Element, Text } from 'slate'

export class SlateToHTMLConverter {
  convert(nodes: Descendant[]): string {
    return nodes.map((node) => this.convertNode(node)).join('')
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
    let text = this.escapeHtml(node.text)

    // Apply inline formatting
    if (node.bold) text = `<strong>${text}</strong>`
    if (node.italic) text = `<em>${text}</em>`
    if (node.underline) text = `<u>${text}</u>`
    if (node.strikethrough) text = `<s>${text}</s>`
    if (node.code) text = `<code>${text}</code>`

    return text
  }

  private convertElement(element: Element): string {
    const children = element.children
      .map((child) => this.convertNode(child))
      .join('')

    switch (element.type) {
      case 'paragraph':
        return `<p>${children || '&nbsp;'}</p>`

      case 'heading-one':
        return `<h1>${children}</h1>`

      case 'heading-two':
        return `<h2>${children}</h2>`

      case 'heading-three':
        return `<h3>${children}</h3>`

      case 'block-quote':
        return `<blockquote>${children}</blockquote>`

      case 'bulleted-list':
        return `<ul>${children}</ul>`

      case 'numbered-list':
        return `<ol>${children}</ol>`

      case 'list-item':
        return `<li>${children}</li>`

      default:
        // Fallback for unknown element types
        return `<div>${children}</div>`
    }
  }

  private escapeHtml(text: string): string {
    const htmlEscapes: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char)
  }

  generateStyledHTML(
    content: string,
    theme: 'light' | 'dark' | 'custom',
    customCSS?: string
  ): string {
    const defaultStyles = this.getDefaultStyles(theme)
    const styles = customCSS || defaultStyles

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Note</title>
    <style>
        ${styles}
    </style>
</head>
<body>
    <div class="container">
        ${content}
    </div>
</body>
</html>`
  }

  private getDefaultStyles(theme: 'light' | 'dark' | 'custom'): string {
    const baseStyles = `
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 600;
        }
        
        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }
        
        p {
            margin: 1em 0;
        }
        
        blockquote {
            margin: 1em 0;
            padding-left: 1em;
            border-left: 4px solid #e2e8f0;
            color: #64748b;
        }
        
        code {
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            border-radius: 3px;
            font-family: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
        
        ul, ol {
            margin: 1em 0;
            padding-left: 2em;
        }
        
        li {
            margin: 0.25em 0;
        }
        
        strong { font-weight: 600; }
        em { font-style: italic; }
        u { text-decoration: underline; }
        s { text-decoration: line-through; }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            h3 { font-size: 1.25rem; }
        }
    `

    const themeStyles = {
      light: `
        body {
            background-color: #ffffff;
            color: #1a202c;
        }
        
        code {
            background-color: #f7fafc;
            color: #e53e3e;
        }
        
        blockquote {
            border-left-color: #e2e8f0;
            color: #64748b;
        }
      `,
      dark: `
        body {
            background-color: #1a202c;
            color: #f7fafc;
        }
        
        code {
            background-color: #2d3748;
            color: #f56565;
        }
        
        blockquote {
            border-left-color: #4a5568;
            color: #a0aec0;
        }
      `,
      custom: '',
    }

    return baseStyles + (themeStyles[theme] || '')
  }
}
