import type { Node as HtmlNode } from 'node-html-parser';
import { h, type VNode } from 'vue';

export { convertNodeToVNode };

function convertNodeToVNode(node: HtmlNode): VNode | string {
  if (node.nodeType === 3) {
    // Text node
    return;
    // return node.rawText;
  }

  const element = node as unknown as HTMLElement;

  const serializedNode: Partial<VNode> = {
    type: element.tagName ? element.tagName.toLowerCase() : '',
    props: {},
    children: [],
  };

  /*
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection#:~:text=e.g.%2C%20using%20Array.from)
   * https://www.geeksforgeeks.org/htmlcollection-for-loop/#method-2-using-the-arrayfrom-method
   * https://stackoverflow.com/a/76293465
   *
   * HTMLCollection is a collection of HTML elements - it is an "array-like object" which we can not use directly with array methods like forEach, map, etc.
   */
  const children = Array.from(node.childNodes || []).map(convertNodeToVNode);

  const attributes = element.attributes;

  const props: { [key: string]: unknown } = {};

  if (attributes) {
    for (const [name, value] of Object.entries(attributes)) {
      // if (typeof value === 'string') {
      serializedNode.props[name] = value;
      // }
    }
  }

  return serializedNode;
  return h(element.tagName, props, children);
}
