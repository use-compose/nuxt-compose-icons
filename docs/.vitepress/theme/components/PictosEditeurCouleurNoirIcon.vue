
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"82","height":"82","viewBox":"0 0 82 82","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"g","props":{"clip-path":"url(#clip0_1_403)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M16.6472 69.3201V64.915L20.423 64.3906L38.2181 18.4169H44.1265L61.607 64.3906L65.3478 64.915V69.3201H50.7341V64.915L54.5798 64.2507L51.2236 54.8812H30.8414L27.3802 64.2507L31.2259 64.915V69.3201H16.6472ZM32.974 49.1126H49.1259L41.6443 28.4158L41.2248 27.2621H41.015L40.5955 28.4158L32.974 49.1126Z","fill":"var(--icon-fill, black)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"defs","props":{},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"clippath","props":{"id":"clip0_1_403"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":["\n",{"__v_isVNode":true,"__v_skip":true,"type":"rect","props":{"width":"81","height":"81","fill":"var(--icon-fill, white)","transform":"translate(0.5 0.5)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},"\n"],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'PictosEditeurCouleurNoirIcon',
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


  