
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"82","height":"50","viewBox":"0 0 82 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"g","props":{"clip-path":"url(#clip0_1_187)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M80 1.5H2V47.5H80V1.5Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M2 1.711L41 31.211L80 1.711","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M33.066 25.211L2 47.711","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n",{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M49.593 24.711L80 47.711","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"defs","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"clippath","props":{"id":"clip0_1_187"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"rect","props":{"width":"81","height":"49.211","fill":"var(--icon-fill, white)","transform":"translate(0.5)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'EnveloppeIcon',
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


  