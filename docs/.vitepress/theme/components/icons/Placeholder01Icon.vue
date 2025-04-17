<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '300',
  height: '301',
  viewBox: '0 0 300 301',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M198 83.36V121.59C198 138.51 188.83 153.56 176.11 163.18C167.009 170.06 157.355 174.16 148.875 174.16C139.945 174.16 128.697 170.099 119.687 163.269C107.018 153.65 96 138.56 96 121.59V83.36C96 54.33 117.9 30.79 147 30.79C176.1 30.79 198 54.33 198 83.36Z',
      stroke: 'var(--icon-stroke, #C1272D)',
      'stroke-width': 'var(--icon-stroke-width, 8)',
      'stroke-miterlimit': '10',
      'stroke-linejoin': 'round',
    },
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M237 236.45V282.5H59V233.59C59 198.18 85.54 166.441 120 163.27C129.01 170.1 139.945 174.161 148.875 174.161C157.355 174.161 166.697 170.06 175.798 163.181C210.957 165.94 237 200.63 237 236.45Z',
      stroke: 'var(--icon-stroke, #C1272D)',
      'stroke-width': 'var(--icon-stroke-width, 8)',
      'stroke-miterlimit': '10',
      'stroke-linejoin': 'round',
    },
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M147 95.5V136.5L133 130.5',
      stroke: 'var(--icon-stroke, #C1272D)',
      'stroke-width': 'var(--icon-stroke-width, 8)',
      'stroke-miterlimit': '10',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M179.325 95.388C179.325 87.68 173.077 81.5 165.369 81.5H161.022C153.314 81.5 147.066 87.714 147.066 95.421',
      stroke: 'var(--icon-stroke, #C1272D)',
      'stroke-width': 'var(--icon-stroke-width, 8)',
      'stroke-miterlimit': '10',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    key: null,
    ref: null,
    scopeId: null,
    slotScopeIds: null,
    children: [],
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: 17,
    patchFlag: 0,
    dynamicProps: null,
    dynamicChildren: null,
    appContext: null,
    ctx: null,
  },
];

export default defineComponent({
  name: 'Placeholder01Icon',
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
