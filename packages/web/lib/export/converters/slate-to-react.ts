import { Descendant, Text, Element } from 'slate'

export class SlateToReactConverter {
  private componentCounter = 0

  convert(nodes: Descendant[], componentName: string = 'ExportedNote'): string {
    const jsxContent = this.nodesToJSX(nodes)
    return this.wrapInComponent(jsxContent, componentName)
  }

  convertWithTypeScript(
    nodes: Descendant[],
    componentName: string = 'ExportedNote'
  ): { component: string; types: string } {
    const jsxContent = this.nodesToJSX(nodes)
    const component = this.wrapInTypescriptComponent(jsxContent, componentName)
    const types = this.generateTypeDefinitions(componentName)

    return { component, types }
  }

  private nodesToJSX(nodes: Descendant[]): string {
    return nodes.map((node) => this.nodeToJSX(node)).join('\n')
  }

  private nodeToJSX(node: Descendant, indent: number = 2): string {
    const indentStr = ' '.repeat(indent)

    if (Text.isText(node)) {
      return this.textToJSX(node)
    }

    if (Element.isElement(node)) {
      return this.elementToJSX(node, indent)
    }

    return ''
  }

  private textToJSX(node: Text): string {
    let text = this.escapeJSX(node.text)

    // Apply inline formatting
    if (node.bold) text = `<strong>${text}</strong>`
    if (node.italic) text = `<em>${text}</em>`
    if (node.underline) text = `<u>${text}</u>`
    if (node.strikethrough) text = `<s>${text}</s>`
    if (node.code) text = `<code>${text}</code>`

    return text
  }

  private elementToJSX(element: Element, indent: number): string {
    const indentStr = ' '.repeat(indent)
    const childIndent = indent + 2
    const children = element.children
      .map((child) => this.nodeToJSX(child, childIndent))
      .join('')

    switch (element.type) {
      case 'paragraph':
        return `${indentStr}<p>${children || '\u00A0'}</p>`

      case 'heading-one':
        return `${indentStr}<h1>${children}</h1>`

      case 'heading-two':
        return `${indentStr}<h2>${children}</h2>`

      case 'heading-three':
        return `${indentStr}<h3>${children}</h3>`

      case 'block-quote':
        return `${indentStr}<blockquote>\n${' '.repeat(childIndent)}${children}\n${indentStr}</blockquote>`

      case 'bulleted-list':
        return `${indentStr}<ul>\n${this.listItemsToJSX(element, childIndent)}\n${indentStr}</ul>`

      case 'numbered-list':
        return `${indentStr}<ol>\n${this.listItemsToJSX(element, childIndent)}\n${indentStr}</ol>`

      case 'list-item':
        return `${indentStr}<li>${children}</li>`

      default:
        return `${indentStr}<div>${children}</div>`
    }
  }

  private listItemsToJSX(element: Element, indent: number): string {
    return element.children
      .map((child) => {
        if (Element.isElement(child) && child.type === 'list-item') {
          return this.nodeToJSX(child, indent)
        }
        return ''
      })
      .filter(Boolean)
      .join('\n')
  }

  private escapeJSX(text: string): string {
    return text
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  private wrapInComponent(content: string, componentName: string): string {
    return `import React from 'react';

const ${componentName} = () => {
  return (
    <div className="exported-note">
${content}
    </div>
  );
};

export default ${componentName};`
  }

  private wrapInTypescriptComponent(
    content: string,
    componentName: string
  ): string {
    return `import React from 'react';
import type { ${componentName}Props } from './${componentName}.types';

const ${componentName}: React.FC<${componentName}Props> = ({
  className,
  style,
  onContentClick,
}) => {
  return (
    <div 
      className={\`exported-note \${className || ''}\`}
      style={style}
      onClick={onContentClick}
    >
${content}
    </div>
  );
};

export default ${componentName};`
  }

  private generateTypeDefinitions(componentName: string): string {
    return `import { CSSProperties, MouseEventHandler } from 'react';

export interface ${componentName}Props {
  className?: string;
  style?: CSSProperties;
  onContentClick?: MouseEventHandler<HTMLDivElement>;
}`
  }

  generateStyledComponent(
    nodes: Descendant[],
    componentName: string = 'ExportedNote',
    styleType: 'css-in-js' | 'css-modules' | 'inline'
  ): { component: string; styles?: string } {
    const jsxContent = this.nodesToJSX(nodes)

    switch (styleType) {
      case 'css-in-js':
        return this.generateStyledComponentsVersion(jsxContent, componentName)

      case 'css-modules':
        return this.generateCSSModulesVersion(jsxContent, componentName)

      case 'inline':
      default:
        return this.generateInlineStylesVersion(jsxContent, componentName)
    }
  }

  private generateStyledComponentsVersion(
    content: string,
    componentName: string
  ): { component: string } {
    return {
      component: `import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div\`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  
  h1 { font-size: 2.5rem; margin: 1.5em 0 0.5em; }
  h2 { font-size: 2rem; margin: 1.5em 0 0.5em; }
  h3 { font-size: 1.5rem; margin: 1.5em 0 0.5em; }
  
  p { margin: 1em 0; }
  
  blockquote {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid #e2e8f0;
    color: #64748b;
  }
  
  code {
    padding: 0.2em 0.4em;
    background-color: #f7fafc;
    color: #e53e3e;
    border-radius: 3px;
    font-family: monospace;
  }
  
  ul, ol {
    margin: 1em 0;
    padding-left: 2em;
  }
  
  li { margin: 0.25em 0; }
\`;

const ${componentName} = () => {
  return (
    <StyledNote>
${content}
    </StyledNote>
  );
};

export default ${componentName};`,
    }
  }

  private generateCSSModulesVersion(
    content: string,
    componentName: string
  ): { component: string; styles: string } {
    const component = `import React from 'react';
import styles from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <div className={styles.exportedNote}>
${content}
    </div>
  );
};

export default ${componentName};`

    const styles = `.exportedNote {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.exportedNote h1 {
  font-size: 2.5rem;
  margin: 1.5em 0 0.5em;
}

.exportedNote h2 {
  font-size: 2rem;
  margin: 1.5em 0 0.5em;
}

.exportedNote h3 {
  font-size: 1.5rem;
  margin: 1.5em 0 0.5em;
}

.exportedNote p {
  margin: 1em 0;
}

.exportedNote blockquote {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 4px solid #e2e8f0;
  color: #64748b;
}

.exportedNote code {
  padding: 0.2em 0.4em;
  background-color: #f7fafc;
  color: #e53e3e;
  border-radius: 3px;
  font-family: monospace;
}

.exportedNote ul,
.exportedNote ol {
  margin: 1em 0;
  padding-left: 2em;
}

.exportedNote li {
  margin: 0.25em 0;
}`

    return { component, styles }
  }

  private generateInlineStylesVersion(
    content: string,
    componentName: string
  ): { component: string } {
    const styles = {
      container: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        lineHeight: 1.6,
        color: '#333',
      },
    }

    return {
      component: `import React from 'react';

const styles = ${JSON.stringify(styles, null, 2)};

const ${componentName} = () => {
  return (
    <div style={styles.container}>
${content}
    </div>
  );
};

export default ${componentName};`,
    }
  }
}
