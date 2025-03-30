import { parseSvg } from './parse-svg';

export function createSvgComponentCode(name: string, svgContent: string): string {
  const { attributes, children } = parseSvg(svgContent);
  // console.log('📟 - svgNodeChildren → ', children);

  // const childrenWithAttributes = svgNodeChildren.map((child: HtmlNode) => {
  //   const childElement = child as HTMLElement;

  //   if (childElement.getAttribute('fill')) {
  //     childElement.setAttribute('fill', 'var(--icon-fill)');
  //   }

  //   if (childElement.getAttribute('stroke')) {
  //     const initialStroke = childElement.getAttribute('stroke');
  //     childElement.setAttribute('stroke', `var(--icon-stroke, ${initialStroke})`);
  //   }

  //   return child;
  // });
  // const vnodeChildren = Array.from(svgNodeChildren).map(convertNodeToVNode);
  // function recreateVNodes(vnodeData: HTMLElement[] | HTMLElement[][]): (VNode | string)[] {
  //   return vnodeData.map((node) => {
  //     if (typeof node === 'string') {
  //       return node;
  //     }
  //     return node.children  ? h(
  //       node.rawTagName,
  //       node.props,
  //       node.children ? recreateVNodes(node.children) : node.children,
  //     );
  //   });
  // }

  // const childrenVNode = recreateVNodes(children);
  // console.log('📟 - childrenVNode → ', childrenVNode);
  // const vnodeChildren = ${JSON.stringify(childrenVNode)};

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
    const children = ${JSON.stringify(children)};

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
          return getIconSizeClass(props.size || IconSize.md);
        });

        const styles = computed(() => ({
          '--icon-stroke': props.color,
          '--icon-fill': props.color,
        }));

        const iconClasses = computed(() => {
          return ['compose-icon', getIconSizeClass(iconSize.value)];
        });

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
