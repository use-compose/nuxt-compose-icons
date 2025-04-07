
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"82","height":"82","viewBox":"0 0 82 82","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M42.29 17.22H61.69","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M42.29 24.24H61.69","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M42.29 31.26H56.75","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M37.1501 16.83H22.3101V31.67H37.1501V16.83Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M22.3101 50.73H37.3701","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M22.3101 57.75H37.3701","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M22.3101 64.76H32.4501","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M61.6899 50.33H41.8999V65.17H61.6899V50.33Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M7 41H77","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'PictosEditeurTraitIcon',
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


  