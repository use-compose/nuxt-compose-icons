<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '82',
  height: '82',
  viewBox: '0 0 82 82',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M40.9501 51.49L39.0901 61.63L48.5201 57.44L71.7001 27.97L64.1401 22.02L40.9501 51.49Z',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
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
      d: 'M15.5 33.54H51.23',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-miterlimit': '10',
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
      d: 'M15.5 19.79H51.23',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-miterlimit': '10',
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
      d: 'M15.5 47.3H44.13',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-miterlimit': '10',
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
      d: 'M15.5 61.05H39.06',
      stroke: 'var(--icon-stroke, black)',
      'stroke-width': 'var(--icon-stroke-width, 3)',
      'stroke-miterlimit': '10',
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
  name: 'PictosEditeurCommentaireIcon',
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
