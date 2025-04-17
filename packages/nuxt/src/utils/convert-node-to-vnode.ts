import type { Node as HtmlNode } from 'node-html-parser';
import { h, type VNode } from 'vue';

export { convertNodeToVNode };

function convertNodeToVNode(node: HtmlNode): VNode | string {
  if (node.nodeType === 3) {
    // Text node
    return node.rawText;
  }

  const element = node as unknown as HTMLElement;

  // const serializedNode: {
  //   type: string;
  //   props: { [key: string]: unknown };
  //   children: (
  //     | string
  //     | VNode<
  //         RendererNode,
  //         RendererElement,
  //         {
  //           [key: string]: any;
  //         }
  //       >
  //   )[];
  // } =
  //   // | string

  //   {
  //     type: element.tagName ? element.tagName.toLowerCase() : '',
  //     props: {},
  //     children: [],
  //   };
  // console.log('serializedNode', serializedNode);
  // console.log('node', element.children);
  // console.log('node', element.childNodes);
  /*
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection#:~:text=e.g.%2C%20using%20Array.from)
   * https://www.geeksforgeeks.org/htmlcollection-for-loop/#method-2-using-the-arrayfrom-method
   * https://stackoverflow.com/a/76293465
   *
   * HTMLCollection is a collection of HTML elements - it is an "array-like object" which we can not use directly with array methods like forEach, map, etc.
   */
  const children = Array.from(node.childNodes || [])
    .filter((child) => child.nodeType !== 8)
    .map(convertNodeToVNode);

  const attributes = element.attributes;
  const props: { [key: string]: unknown } = {};

  if (attributes) {
    for (const name of Object.keys(attributes)) {
      // Remove extra spaces from the value
      const attrValue = element.getAttribute(name)?.replace(/\s+/g, ' ').trim();

      /*
       * We replace SVG attributes with CSS variables that
       * can be used later if a theme is provided
       * IF not, we fall back to the original value
       */
      if (name === 'fill') {
        props[name] = `var(--icon-fill, ${attrValue})`;
      } else if (name === 'stroke') {
        props[name] = `var(--icon-stroke, ${attrValue})`;
      } else if (name === 'stroke-width') {
        props[name] = `var(--icon-stroke-width, ${attrValue})`;
      } else {
        props[name] = attrValue;
      }
    }
  }

  return h(element.tagName ? element.tagName.toLowerCase() : '', props, children);
}
