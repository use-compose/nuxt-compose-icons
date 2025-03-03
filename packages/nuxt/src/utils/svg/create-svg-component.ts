import { convertNodeToVNode } from '../convert-node-to-vnode';
import { parseSvg } from './parse-svg';

export function createSvgComponentCode(
  name: string,
  svgContent: string,
): string {
  const { attributes, children: svgNodeChildren } = parseSvg(svgContent);

  // const childrenWithAttributes = svgNodeChildren.map((child: HtmlNode) => {
  //   const childElement = child as HTMLElement;
  //   console.log('📟 - file: create-svg-component.ts:19 - child → ', childElement);
  //   console.log(
  //     '📟 - file: create-svg-component.ts:19 - child → ',
  //     childElement.getAttribute('fill'),
  //   );

  //   if (childElement.getAttribute('fill')) {
  //     childElement.setAttribute('fill', 'var(--icon-fill)');
  //   }

  //   if (childElement.getAttribute('stroke')) {
  //     const initialStroke = childElement.getAttribute('stroke');
  //     childElement.setAttribute('stroke', `var(--icon-stroke, ${initialStroke})`);
  //   }

  //   return child;
  // });
  // const vnodeChildren = svgNodeChildren.map(convertNodeToVNode);
  const vnodeChildren = svgNodeChildren.map(convertNodeToVNode);
  console.log(
    '📟 - file: create-svg-component.ts:8 - svgNodeChildren → ',
    svgNodeChildren,
  );
  console.log(
    '📟 - file: create-svg-component.ts:8 - vnodeChildren → ',
    vnodeChildren,
  );

  return `
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from '@nuxt-compose-icons/types';
    import type { ComposeIconProps } from '../../../runtime/types';
    // import { IconSize } from '@nuxt-compose-icons/types';
    import { IconSize } from '../../../runtime/types';
    import type { VNode } from 'vue';
    // import { getIconSizeClass } from '../src/runtime/utils';
    import { getIconSizeClass, generateColorVariable } from '../../../runtime/utils';
    import type { IconSizeKeyValue } from '../../../runtime/types';


    const svgAttributes = ${JSON.stringify(attributes)};
    const vnodeChildren = ${JSON.stringify(vnodeChildren)};
    console.log('📟 - file: create-svg-component.ts:22 - vnodeChildren → ', vnodeChildren)

    export default defineComponent({
     name: '${name}',
        props: {
          color: {
            type: String,
          },
          size: {
            type: String as PropType<IconSizeKeyValue>,
            default: 'md',
          },
        },
        setup(props: ComposeIconProps) {
           const iconSize = computed(() => {
      return getIconSizeClass(props.size || IconSize.M);
    });

          const styles = computed(() => ({
            '--icon-stroke': props.color,
            '--icon-fill': props.color
          }));

           const iconClasses = computed(() => {
      return ['compose-icon', getIconSizeClass(iconSize.value)];
    });

      function recreateVNodes(vnodeData: any[]): (VNode | string)[] {
            return vnodeData.map(node => {
              if (typeof node === 'string') {
                return node;
              }
              return h(node.type, node.props, node.children ? recreateVNodes(node.children) : node.children);
            });
          }

          const children = recreateVNodes(vnodeChildren);

          const iconAttributes = computed(() => ({
            ...svgAttributes,
            style: styles.value,
            class: iconClasses.value,
          }));
                      return () => h('svg', iconAttributes.value, children);


          // return {
          //   iconAttributes,
          //   children,
          // };

      
        },
      });
    </script>


  `;
}
