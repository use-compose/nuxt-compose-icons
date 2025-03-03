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
      d: 'M19.7974 16.1564H21.7974M7.79736 3.95636V16.1564H16.2974M4.29736 8.15637H2.29736M16.2974 20.4564V8.15637H7.79736M0.797363 15.4564C0.797363 18.7564 3.49736 21.4564 6.79736 21.4564H8.99737M8.99737 21.4564L6.99737 23.4564M8.99737 21.4564L6.99737 19.4564M23.2974 8.95636C23.2974 5.65636 20.5974 2.95636 17.2974 2.95636H15.0974M16.9974 0.95636L14.9974 2.95636L16.9974 4.95636',
      stroke: 'var(--icon-stroke, #7D7898)',
      'stroke-width': '1.5',
      'stroke-miterlimit': '10',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    children: [],
  },
];
console.log('📟 - file: create-svg-component.ts:22 - vnodeChildren → ', vnodeChildren);

export default defineComponent({
  name: 'CropIcon',
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
