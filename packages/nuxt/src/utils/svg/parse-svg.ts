import type { HTMLElement, Node as HtmlNode } from 'node-html-parser';
import { parse } from 'node-html-parser';

export function parseSvg(svgContent: string): {
  attributes: { [key: string]: string };
  children: HtmlNode[];
} {
  const doc = parse(svgContent);
  const svgElement = doc.querySelector('svg') as HTMLElement;
  const svgElementChildren = svgElement.childNodes.filter(
    (node) => node.nodeType === 1,
  ) as HtmlNode[];

  const childrenWithAttributes = svgElementChildren.map((child: HtmlNode) => {
    const childElement = child as HTMLElement;
    console.log(
      '📟 - file: create-svg-component.ts:19 - child → ',
      childElement,
    );
    console.log(
      '📟 - file: create-svg-component.ts:19 - child → ',
      childElement.getAttribute('fill'),
    );

    if (childElement.getAttribute('fill')) {
      const initialFill = childElement.getAttribute('fill');
      childElement.setAttribute('fill', `var(--icon-fill, ${initialFill})`);
    }

    if (childElement.getAttribute('stroke')) {
      const initialStroke = childElement.getAttribute('stroke');
      childElement.setAttribute(
        'stroke',
        `var(--icon-stroke, ${initialStroke})`,
      );
    }

    return child;
  });

  return {
    attributes: svgElement.attributes,
    children: childrenWithAttributes,
  };
}
