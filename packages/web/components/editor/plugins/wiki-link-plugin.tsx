'use client'

import {
  type Editor,
  Node,
  Path,
  Range,
  Text as SlateText,
  Transforms,
} from 'slate'

export const withWikiLinks = (editor: Editor) => {
  const { insertText, isInline, normalizeNode } = editor

  editor.isInline = (element) => {
    return element.type === 'wiki-link' ? true : isInline(element)
  }

  // Use normalizeNode to detect and convert wiki link patterns
  editor.normalizeNode = (entry) => {
    const [node, path] = entry

    // Only process text nodes
    if (SlateText.isText(node)) {
      const text = node.text
      const wikiLinkRegex = /\[\[([^\]]+)\]\]/g
      let match

      while ((match = wikiLinkRegex.exec(text)) !== null) {
        const [fullMatch, noteTitle] = match
        const startOffset = match.index
        const endOffset = startOffset + fullMatch.length

        // Create the wiki link element
        const wikiLink = {
          type: 'wiki-link' as const,
          noteTitle: noteTitle.trim(),
          url: `/notes/search?title=${encodeURIComponent(noteTitle.trim())}`,
          children: [{ text: noteTitle.trim() }],
        }

        // Split the text node and insert the wiki link
        const range = {
          anchor: { path, offset: startOffset },
          focus: { path, offset: endOffset },
        }

        // Delete the text and insert the wiki link element
        Transforms.delete(editor, { at: range })
        Transforms.insertNodes(editor, wikiLink, { at: range.anchor })

        // Return early to let normalization continue
        return
      }
    }

    // Default normalization
    normalizeNode(entry)
  }

  return editor
}
