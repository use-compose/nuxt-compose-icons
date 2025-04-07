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
      d: 'M19.163 21.126C18.2572 20.2145 17.1801 19.4912 15.9937 18.9976C14.8073 18.504 13.535 18.2499 12.25 18.2499C10.965 18.2499 9.69269 18.504 8.50628 18.9976C7.31987 19.4912 6.24278 20.2145 5.337 21.126M7 10C7 11.3924 7.55312 12.7277 8.53769 13.7123C9.52226 14.6969 10.8576 15.25 12.25 15.25C13.6424 15.25 14.9777 14.6969 15.9623 13.7123C16.9469 12.7277 17.5 11.3924 17.5 10C17.5 8.60761 16.9469 7.27226 15.9623 6.28769C14.9777 5.30312 13.6424 4.75 12.25 4.75C10.8576 4.75 9.52226 5.30312 8.53769 6.28769C7.55312 7.27226 7 8.60761 7 10ZM1 12.25C1 15.2337 2.18526 18.0952 4.29505 20.205C6.40483 22.3147 9.26631 23.5 12.25 23.5C15.2337 23.5 18.0952 22.3147 20.205 20.205C22.3147 18.0952 23.5 15.2337 23.5 12.25C23.5 9.26631 22.3147 6.40483 20.205 4.29505C18.0952 2.18526 15.2337 1 12.25 1C9.26631 1 6.40483 2.18526 4.29505 4.29505C2.18526 6.40483 1 9.26631 1 12.25Z',
      stroke: 'var(--icon-stroke, #7D7898)',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    children: [],
  },
];

export default defineComponent({
  name: 'AvatarUserIcon',
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
