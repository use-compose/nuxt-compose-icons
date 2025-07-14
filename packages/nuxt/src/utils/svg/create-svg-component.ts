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
    import { computed, defineComponent, h, watchEffect } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = ${JSON.stringify(attributes)};
    const children = ${JSON.stringify(children)};

    export default defineComponent({
      name: '${name}',
      props: {
        color: {
          type: String,
        },
        stroke: {
          type: String,
        },
        strokeWidth: {
          type: [String, Number] as PropType<ComposeIconProps['strokeWidth']>,
        },
        fill: {
          type: String,
        },
        size: {
          type: String as PropType<IconSizeKeyValue>,
          default: IconSize.MD,
        },
      },
      setup(props: ComposeIconProps) {
        const iconSize = ref(getIconSizeClass(props.size || IconSize.MD));

        const styles = computed(() => ({
          '--icon-stroke': props.stroke || props.color,
          '--icon-stroke-width': props.strokeWidth ? props.strokeWidth : '',
          '--icon-fill': props.fill,
        }));

        const iconClasses = computed(() => {
          return ['compose-icon', iconSize.value];
        });

        const iconAttributes = computed(() => ({
          ...svgAttributes,
          style: styles.value,
          class: iconClasses.value,
        }));

         watchEffect(() => {
            if (props.size) {
              iconSize.value = getIconSizeClass(props.size);
            }
          });

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
