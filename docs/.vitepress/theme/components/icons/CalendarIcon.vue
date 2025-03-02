<script lang="ts">
import type { PropType, VNode } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps } from './types';
import { IconSize } from './types';
// import { getIconSizeClass } from '../src/runtime/utils';
import type { IconSizeKeyValue } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '25',
  height: '25',
  viewBox: '0 0 25 25',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const vnodeChildren = [
  {
    type: 'path',
    props: {
      d: 'M1 10H23.5M7 6.25V1M17.5 6.25V1M2.5 4H22C22.8284 4 23.5 4.67157 23.5 5.5V22C23.5 22.8284 22.8284 23.5 22 23.5H2.5C1.67157 23.5 1 22.8284 1 22V5.5C1 4.67157 1.67157 4 2.5 4Z',
      stroke: 'var(--icon-stroke, #7D7898)',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    children: [],
  },
];
console.log('📟 - file: create-svg-component.ts:22 - vnodeChildren → ', vnodeChildren);

export default defineComponent({
  name: 'CalendarIcon',
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
      '--icon-fill': props.color,
    }));

    const iconClasses = computed(() => {
      return ['compose-icon', getIconSizeClass(iconSize.value)];
    });

    function recreateVNodes(vnodeData: any[]): (VNode | string)[] {
      return vnodeData.map((node) => {
        if (typeof node === 'string') {
          return node;
        }
        return h(
          node.type,
          node.props,
          node.children ? recreateVNodes(node.children) : node.children,
        );
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
