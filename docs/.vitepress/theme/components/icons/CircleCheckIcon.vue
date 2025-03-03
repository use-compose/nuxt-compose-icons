<script lang="ts">
import type { PropType, VNode } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps } from './types';
import { IconSize } from './types';
// import { getIconSizeClass } from '../src/runtime/utils';
import type { IconSizeKeyValue } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const vnodeChildren = [
  {
    type: 'path',
    props: {
      d: 'M6 13.223L8.45 16.7C8.54293 16.8388 8.66768 16.9534 8.81385 17.0343C8.96002 17.1152 9.12339 17.16 9.29037 17.165C9.45735 17.1699 9.6231 17.135 9.77384 17.063C9.92458 16.991 10.0559 16.884 10.157 16.751L18 6.82799M0.75 11.999C0.75 14.9827 1.93526 17.8442 4.04505 19.9539C6.15483 22.0637 9.01631 23.249 12 23.249C14.9837 23.249 17.8452 22.0637 19.955 19.9539C22.0647 17.8442 23.25 14.9827 23.25 11.999C23.25 9.01531 22.0647 6.15383 19.955 4.04404C17.8452 1.93426 14.9837 0.748993 12 0.748993C9.01631 0.748993 6.15483 1.93426 4.04505 4.04404C1.93526 6.15383 0.75 9.01531 0.75 11.999Z',
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
  name: 'CircleCheckIcon',
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
