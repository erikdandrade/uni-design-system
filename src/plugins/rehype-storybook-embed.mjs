/**
 * Rehype plugin: converts Storybook iframe links into embedded iframes.
 * Detects <a href="...iframe.html..."> and replaces with a styled <iframe>.
 */
export function rehypeStorybookEmbed() {
  return (tree) => {
    visit(tree);
  };
}

function visit(node) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (
      child.type === 'element' &&
      child.tagName === 'a' &&
      typeof child.properties?.href === 'string' &&
      child.properties.href.includes('/iframe.html')
    ) {
      node.children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { class: 'storybook-embed not-content' },
        children: [
          {
            type: 'element',
            tagName: 'iframe',
            properties: {
              src: child.properties.href,
              width: '100%',
              height: '480',
              frameBorder: '0',
              title: 'Storybook Canvas',
              loading: 'lazy',
              style: 'border-radius: 6px; border: 1px solid var(--sl-color-gray-5);',
            },
            children: [],
          },
        ],
      };
    } else {
      visit(child);
    }
  }
}
