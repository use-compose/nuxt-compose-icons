import type { HTMLElement } from 'node-html-parser';
import { parse } from 'node-html-parser';
import type { VNode } from 'vue';
import { convertNodeToVNode } from '../convert-node-to-vnode';

// function applyElementAttributes(element: HTMLElement) {
//   const elementChildren = element.children.filter(
//     (node) => node.nodeType === 3 || node.rawTagName !== 'style',
//   ) as HTMLElement[];

//   const childrenWithAttributes = elementChildren.map((child: HTMLElement) => {
//     const childElement = child;

//     if (childElement.getAttribute('fill')) {
//       const initialFill = childElement.getAttribute('fill');
//       childElement.setAttribute('fill', `var(--icon-fill, ${initialFill})`);
//     }

//     if (childElement.getAttribute('stroke')) {
//       const initialStroke = childElement.getAttribute('stroke');
//       childElement.setAttribute('stroke', `var(--icon-stroke, ${initialStroke})`);
//     }

//     return childElement;
//   });

//   return childrenWithAttributes;
// }

// function recreateVNodes(nodeData: Node[]): VNode[] {
//   return nodeData.map((node) => {
//     if (typeof node === 'string') {
//       return node;
//     }
//     // if (node.props.stroke) {
//     //   node.props[':stroke'] = 'var(--icon-stroke)';
//     // }

//     const props = {
//       ...node.props,
//     };

//     // take the initial color and stroke width
//     let style = { ...node.props.style };

//     if (node.props.stroke) {
//       style['--icon-stroke'] = node.props.stroke;
//     }

//     if (node.props.strokeWidth) {
//       style['--icon-stroke-width'] = node.props.strokeWidth;
//     }

//     if (node.props.fill) {
//       style['--icon-fill'] = node.props.fill;
//     }

//     props.style = style;

//     return h(node.type, props, node.children ? recreateVNodes(node.children) : node.children);
//   });
// }

// function parseSvgChildrenAndApplyAttributes(svgElement: HTMLElement) {
//   return Array.from(svgElement.children || []).map(applyElementAttributes);
// }

function setParentSvgAttributes(svgElement: HTMLElement) {
  // TODO: Break svg width and height - to remove?
  if (svgElement.getAttribute('width')) {
    // svgElement.setAttribute('width', `var(--icon-size, ${svgElement.getAttribute('width')})`);
  }
  if (svgElement.getAttribute('height')) {
    // svgElement.setAttribute('height', `var(--icon-size, ${svgElement.getAttribute('height')})`);
  }
}

export function parseSvg(svgContent: string): {
  attributes: { [key: string]: string };
  children: (string | VNode)[];
} {
  const doc = parse(svgContent);
  const svgElement = doc.querySelector('svg') as HTMLElement;
  if (!svgElement) {
    throw new Error('No <svg> element found in the provided SVG content.');
  }
  // Set the parent SVG attributes to use CSS variables
  setParentSvgAttributes(svgElement);
  const children = svgElement.children.map(convertNodeToVNode);

  return {
    attributes: svgElement.attributes,
    children: children,
  };
}
