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
  height: '25',
  viewBox: '0 0 24 25',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const vnodeChildren = [
  {
    type: 'path',
    props: {
      d: 'M17.9398 23.5L7.21975 12.78C7.15009 12.7104 7.09482 12.6278 7.05712 12.5369C7.01941 12.4459 7 12.3484 7 12.25C7 12.1516 7.01941 12.0541 7.05712 11.9631C7.09482 11.8722 7.15009 11.7896 7.21975 11.72L17.9398 1',
      stroke: 'var(--icon-stroke, #7D7898)',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    children: [],
  },
];

export default defineComponent({
  name: 'ArrowLeftIcon',
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
