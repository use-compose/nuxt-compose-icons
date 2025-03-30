/* eslint no-console: 0 */
import type { Node as HtmlNode } from 'node-html-parser';
import { h, type RendererElement, type RendererNode, type VNode } from 'vue';

export { convertNodeToVNode };

function convertNodeToVNode(node: HtmlNode): VNode | string {
  // console.log('📟 - node → ', node);
  // console.log('📟 - nodechildN?ODEBBBB → ', node.childNodes);
  if (node.nodeType === 3) {
    // Text node
    // return;
    return node.rawText;
  }

  const element = node as unknown as HTMLElement;

  const serializedNode: {
    type: string;
    props: { [key: string]: unknown };
    children: (
      | string
      | VNode<
          RendererNode,
          RendererElement,
          {
            [key: string]: any;
          }
        >
    )[];
  } =
    // | string

    {
      type: element.tagName ? element.tagName.toLowerCase() : '',
      props: {},
      children: [],
    };
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
    .filter((child) => child.nodeType !== 8 && child.nodeType !== 3)
    .map(convertNodeToVNode);
  // es
  console.log('📟 - children → ', children);

  const attributes = element.attributes;
  console.log('📟 - attributes → ', attributes);
  const props: { [key: string]: unknown } = {};

  if (attributes) {
    for (const [name, value] of Object.entries(attributes)) {
      let attrValue = element.getAttribute(name);
      console.log('📟 - value → ', name);
      console.log('📟 - value → ', value);
      console.log('📟 - lololol → ', attrValue);
      if (name === 'fill') {
        props[name] = `var(--icon-fill, ${attrValue})`;
      } else if (name === 'stroke') {
        console.log('attrValue', attrValue);
        props[name] = `var(--icon-stroke, ${attrValue})`;
        console.log('props[name]', props[name]);
      } else if (name === 'stroke-width') {
        props[name] = `var(--icon-stroke-width, ${attrValue})`;
      } else {
        props[name] = attrValue;
      }
      // }
    }
  }
  // serializedNode.props = props;
  // serializedNode.children = children;
  // console.log('📟 - serializedNode → ', serializedNode)
  // return h(serializedNode);
  // return serializedNode;
  return h(element.tagName ? element.tagName.toLowerCase() : '', props, children);
}
