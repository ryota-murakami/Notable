import { PlateEditor } from '@udecode/plate-common'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'

export const withPlaceholders = (
  editor: PlateEditor,
  placeholder: string = 'Start writing...'
) => {
  const { renderElement } = editor

  editor.renderElement = (props) => {
    const { element, children } = props

    // Add placeholder to empty paragraphs
    if (
      element.type === ELEMENT_PARAGRAPH &&
      element.children.length === 1 &&
      element.children[0].text === '' &&
      editor.children.length === 1 &&
      editor.children[0] === element
    ) {
      return (
        <div {...props.attributes}>
          <span
            contentEditable={false}
            className='pointer-events-none absolute select-none text-muted-foreground'
          >
            {placeholder}
          </span>
          {children}
        </div>
      )
    }

    return renderElement ? renderElement(props) : children
  }

  return editor
}
