<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from './types';
import { IconSize } from './types';
import { getIconSizeClass } from './utils';

const svgAttributes = {
  width: '48',
  height: '47',
  viewBox: '0 0 48 47',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};
const children = [
  {
    __v_isVNode: true,
    __v_skip: true,
    type: 'path',
    props: {
      d: 'M11.2783 23.5061L4.20726 30.5772C3.81674 30.9677 3.81674 31.6009 4.20726 31.9914L16.2281 44.0122C16.6186 44.4027 17.2518 44.4027 17.6423 44.0122L24.7133 36.9411',
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
      d: 'M37.4414 24.2131L44.5125 17.1421C44.903 16.7515 44.903 16.1184 44.5125 15.7279L32.4917 3.70704C32.1011 3.31651 31.468 3.31651 31.0774 3.70704L24.0064 10.7781',
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
      d: 'M32.4913 16.435L31.7842 15.7279C31.3937 15.3374 30.7605 15.3374 30.37 15.7279L16.2279 29.87C15.8373 30.2606 15.8373 30.8937 16.2279 31.2843L16.935 31.9914C17.3255 32.3819 17.9587 32.3819 18.3492 31.9914L32.4913 17.8492C32.8818 17.4587 32.8818 16.8255 32.4913 16.435Z',
      fill: 'var(--icon-fill, black)',
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
  name: 'LinkIcon',
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
