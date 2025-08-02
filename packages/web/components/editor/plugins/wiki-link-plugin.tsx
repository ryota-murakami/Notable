'use client'

import { Editor, Transforms, Range, Text as SlateText } from 'slate'

export const withWikiLinks = (editor: Editor) => {
  const { normalizeNode, insertText, isInline } = editor

  editor.isInline = (element) => {
    return element.type === 'wiki-link' ? true : isInline(element)
  }

  // Override normalizeNode to detect wiki link patterns
  editor.normalizeNode = (entry) => {
    const [node, path] = entry

    // Only process text nodes
    if (SlateText.isText(node)) {
      const text = node.text
      const wikiLinkPattern = /\[\[([^\]]+)\]\]/g
      let match

      while ((match = wikiLinkPattern.exec(text)) !== null) {
        const [fullMatch, noteTitle] = match
        const { index } = match

        // Split the text node and replace with wiki link
        const start = index
        const end = index + fullMatch.length

        // Create the wiki link element
        const wikiLink = {
          type: 'wiki-link' as const,
          noteTitle: noteTitle.trim(),
          url: `/notes/search?title=${encodeURIComponent(noteTitle.trim())}`,
          children: [{ text: noteTitle.trim() }],
        }

        // Replace the text with nodes
        Transforms.splitNodes(editor, {
          at: { path, offset: end },
          always: true,
        })

        Transforms.splitNodes(editor, {
          at: { path, offset: start },
          always: true,
        })

        // The wiki link pattern is now in its own text node
        const targetPath = [...path.slice(0, -1), path[path.length - 1] + 1]

        Transforms.removeNodes(editor, { at: targetPath })
        Transforms.insertNodes(editor, wikiLink, { at: targetPath })

        return
      }
    }

    // Fall back to default normalization
    normalizeNode(entry)
  }

  return editor
}
