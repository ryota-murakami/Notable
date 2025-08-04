import type { Value } from 'platejs/react'

export function markdownToPlate(markdown: string): Value {
  if (!markdown || markdown.trim() === '') {
    return [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ]
  }

  const lines = markdown.split('\n')
  const nodes: Value = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Handle headings
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const text = headingMatch[2]
      nodes.push({
        type: `heading${level}`,
        children: parseInlineText(text),
      })
      continue
    }

    // Handle bullet lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const text = line.substring(2)
      nodes.push({
        type: 'list-item',
        children: [
          {
            type: 'paragraph',
            children: parseInlineText(text),
          },
        ],
      })
      continue
    }

    // Handle numbered lists
    const numberedMatch = line.match(/^(\d+)\.\s+(.*)$/)
    if (numberedMatch) {
      const text = numberedMatch[2]
      nodes.push({
        type: 'list-item',
        children: [
          {
            type: 'paragraph',
            children: parseInlineText(text),
          },
        ],
      })
      continue
    }

    // Handle blockquotes
    if (line.startsWith('> ')) {
      const text = line.substring(2)
      nodes.push({
        type: 'blockquote',
        children: [
          {
            type: 'paragraph',
            children: parseInlineText(text),
          },
        ],
      })
      continue
    }

    // Handle code blocks
    if (line.startsWith('```')) {
      let codeContent = ''
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeContent += lines[i] + '\n'
        i++
      }
      nodes.push({
        type: 'code-block',
        children: [{ text: codeContent.trimEnd() }],
      })
      continue
    }

    // Handle paragraphs (including empty lines)
    if (line.trim() === '') {
      nodes.push({
        type: 'paragraph',
        children: [{ text: '' }],
      })
    } else {
      nodes.push({
        type: 'paragraph',
        children: parseInlineText(line),
      })
    }
  }

  // Ensure at least one paragraph
  if (nodes.length === 0) {
    nodes.push({
      type: 'paragraph',
      children: [{ text: '' }],
    })
  }

  return nodes
}

function parseInlineText(text: string): any[] {
  const children: any[] = []
  let currentText = ''
  let i = 0

  while (i < text.length) {
    // Handle wiki links [[Note Title]]
    if (text[i] === '[' && text[i + 1] === '[') {
      // Add any accumulated text
      if (currentText) {
        children.push({ text: currentText })
        currentText = ''
      }

      // Find the closing ]]
      let j = i + 2
      while (j < text.length - 1 && !(text[j] === ']' && text[j + 1] === ']')) {
        j++
      }

      if (text[j] === ']' && text[j + 1] === ']') {
        const noteTitle = text.substring(i + 2, j)
        children.push({
          type: 'wikiLink',
          noteTitle,
          url: `/notes/search?title=${encodeURIComponent(noteTitle)}`,
          children: [{ text: noteTitle }],
        })
        i = j + 2
        continue
      }
    }

    // Handle bold **text**
    if (text[i] === '*' && text[i + 1] === '*') {
      // Add any accumulated text
      if (currentText) {
        children.push({ text: currentText })
        currentText = ''
      }

      // Find the closing **
      let j = i + 2
      while (j < text.length - 1 && !(text[j] === '*' && text[j + 1] === '*')) {
        j++
      }

      if (text[j] === '*' && text[j + 1] === '*') {
        const boldText = text.substring(i + 2, j)
        children.push({ text: boldText, bold: true })
        i = j + 2
        continue
      }
    }

    // Handle italic *text*
    if (
      text[i] === '*' &&
      (i === 0 || text[i - 1] !== '*') &&
      (i === text.length - 1 || text[i + 1] !== '*')
    ) {
      // Add any accumulated text
      if (currentText) {
        children.push({ text: currentText })
        currentText = ''
      }

      // Find the closing *
      let j = i + 1
      while (j < text.length && text[j] !== '*') {
        j++
      }

      if (text[j] === '*') {
        const italicText = text.substring(i + 1, j)
        children.push({ text: italicText, italic: true })
        i = j + 1
        continue
      }
    }

    // Handle code `text`
    if (text[i] === '`') {
      // Add any accumulated text
      if (currentText) {
        children.push({ text: currentText })
        currentText = ''
      }

      // Find the closing `
      let j = i + 1
      while (j < text.length && text[j] !== '`') {
        j++
      }

      if (text[j] === '`') {
        const codeText = text.substring(i + 1, j)
        children.push({ text: codeText, code: true })
        i = j + 1
        continue
      }
    }

    // Regular character
    currentText += text[i]
    i++
  }

  // Add any remaining text
  if (currentText) {
    children.push({ text: currentText })
  }

  // Ensure at least one text node
  if (children.length === 0) {
    children.push({ text: '' })
  }

  return children
}
