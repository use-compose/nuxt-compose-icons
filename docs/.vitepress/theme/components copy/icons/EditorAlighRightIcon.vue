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
      d: 'M22.48 23.25H1.47998C1.14846 23.25 0.830517 23.1183 0.596097 22.8839C0.361677 22.6495 0.22998 22.3315 0.22998 22C0.22998 21.6685 0.361677 21.3505 0.596097 21.1161C0.830517 20.8817 1.14846 20.75 1.47998 20.75H22.48C22.8115 20.75 23.1294 20.8817 23.3639 21.1161C23.5983 21.3505 23.73 21.6685 23.73 22C23.73 22.3315 23.5983 22.6495 23.3639 22.8839C23.1294 23.1183 22.8115 23.25 22.48 23.25Z',
      fill: 'var(--icon-fill, #7D7898)',
    },
    children: [],
  },
  {
    type: 'path',
    props: {
      d: 'M22.48 3.25H4.37998C4.04846 3.25 3.73052 3.1183 3.4961 2.88388C3.26168 2.64946 3.12998 2.33152 3.12998 2C3.12998 1.66848 3.26168 1.35054 3.4961 1.11612C3.73052 0.881696 4.04846 0.75 4.37998 0.75H22.48C22.8115 0.75 23.1294 0.881696 23.3639 1.11612C23.5983 1.35054 23.73 1.66848 23.73 2C23.73 2.33152 23.5983 2.64946 23.3639 2.88388C23.1294 3.1183 22.8115 3.25 22.48 3.25Z',
      fill: 'var(--icon-fill, #7D7898)',
    },
    children: [],
  },
  {
    type: 'path',
    props: {
      d: 'M22.48 9.92H8.18998C7.85846 9.92 7.54052 9.7883 7.3061 9.55388C7.07168 9.31946 6.93998 9.00152 6.93998 8.67C6.93998 8.33848 7.07168 8.02054 7.3061 7.78612C7.54052 7.5517 7.85846 7.42 8.18998 7.42H22.48C22.8115 7.42 23.1294 7.5517 23.3639 7.78612C23.5983 8.02054 23.73 8.33848 23.73 8.67C23.73 9.00152 23.5983 9.31946 23.3639 9.55388C23.1294 9.7883 22.8115 9.92 22.48 9.92Z',
      fill: 'var(--icon-fill, #7D7898)',
    },
    children: [],
  },
  {
    type: 'path',
    props: {
      d: 'M22.48 16.58H5.32998C4.99846 16.58 4.68052 16.4483 4.4461 16.2139C4.21168 15.9795 4.07998 15.6615 4.07998 15.33C4.07998 14.9985 4.21168 14.6805 4.4461 14.4461C4.68052 14.2117 4.99846 14.08 5.32998 14.08H22.48C22.8115 14.08 23.1294 14.2117 23.3639 14.4461C23.5983 14.6805 23.73 14.9985 23.73 15.33C23.73 15.6615 23.5983 15.9795 23.3639 16.2139C23.1294 16.4483 22.8115 16.58 22.48 16.58Z',
      fill: 'var(--icon-fill, #7D7898)',
    },
    children: [],
  },
];

export default defineComponent({
  name: 'EditorAlighRightIcon',
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
