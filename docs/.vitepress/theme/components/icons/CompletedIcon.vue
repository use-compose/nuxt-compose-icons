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
      d: 'M8.5002 16.74C7.28389 16.2691 6.28839 15.3592 5.71032 14.19C5.13224 13.0209 5.01363 11.6774 5.37792 10.425C5.7422 9.17267 6.56288 8.10244 7.67787 7.42573C8.79286 6.74902 10.1211 6.51504 11.4002 6.77M8.4612 21.057C6.06393 20.5567 3.95752 19.1383 2.59231 17.1052C1.22709 15.0722 0.71141 12.5857 1.15551 10.1773C1.59961 7.76901 2.96825 5.62998 4.96882 4.21756C6.9694 2.80513 9.44314 2.23139 11.8612 2.619M9.9892 12.109L14.1562 7.942M14.1562 7.942L14.7242 4.192L17.9722 1L18.4742 3.624L21.0982 4.126L17.9062 7.374L14.1562 7.942ZM20.1632 15.755L17.2582 19.629C17.1936 19.7149 17.1113 19.786 17.0169 19.8373C16.9225 19.8887 16.8182 19.9192 16.7109 19.9268C16.6037 19.9344 16.4961 19.9189 16.3954 19.8813C16.2947 19.8437 16.2032 19.785 16.1272 19.709L14.6272 18.209M11.4892 17.5C11.4892 19.0913 12.1213 20.6174 13.2466 21.7426C14.3718 22.8679 15.8979 23.5 17.4892 23.5C19.0805 23.5 20.6066 22.8679 21.7318 21.7426C22.8571 20.6174 23.4892 19.0913 23.4892 17.5C23.4892 15.9087 22.8571 14.3826 21.7318 13.2574C20.6066 12.1321 19.0805 11.5 17.4892 11.5C15.8979 11.5 14.3718 12.1321 13.2466 13.2574C12.1213 14.3826 11.4892 15.9087 11.4892 17.5Z',
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
  name: 'CompletedIcon',
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
