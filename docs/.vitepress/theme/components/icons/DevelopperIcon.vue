<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '42',
  height: '41',
  viewBox: '0 0 42 41',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M28.5 39H39.5',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-linecap': 'round',
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
      d: 'M39.5 39.0002V28.0001',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-linecap': 'round',
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
      d: 'M13.5 2.00024H2.5',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-linecap': 'round',
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
      d: 'M2.5 2V13.0001',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-linecap': 'round',
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
  name: 'DevelopperIcon',
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
