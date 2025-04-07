
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"53","height":"37","viewBox":"0 0 53 37","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M18.5 17.6009L26.58 25.6909","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M34.9301 17.3409L26.5801 25.6909","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M26.5 25.6018V1.99982","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M43.78 21.6304H50.5V34.6304H2.5V21.6304H9.22","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'ImportIcon',
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


  