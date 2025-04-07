
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"82","height":"82","viewBox":"0 0 82 82","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M17.7701 25.9799H22.1401V37.4399H10.6101V27.7699C10.6101 23.0499 11.7568 19.6599 14.0501 17.5999C16.3434 15.5399 19.6134 14.4665 23.8601 14.3799L24.7901 18.8899C19.7301 19.4232 17.3901 21.7865 17.7701 25.9799ZM35.9601 25.9799H40.3301V37.4399H28.8001V27.7699C28.8001 23.0499 29.9468 19.6599 32.2401 17.5999C34.5334 15.5399 37.8001 14.4665 42.0401 14.3799L42.9801 18.8899C37.9201 19.4232 35.5801 21.7865 35.9601 25.9799Z","fill":"var(--icon-fill, black)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M46.04 56.0201H41.67V44.5601H53.2V54.2301C53.2 58.9501 52.06 62.3601 49.76 64.4301C47.46 66.5001 44.2 67.5701 39.96 67.6201L39.02 63.1101C44.08 62.5834 46.42 60.2201 46.04 56.0201ZM64.23 56.0201H59.86V44.5601H71.39V54.2301C71.39 58.9501 70.24 62.3601 67.95 64.4301C65.66 66.5001 62.39 67.5701 58.14 67.6201L57.21 63.1101C62.27 62.5834 64.61 60.2201 64.23 56.0201Z","fill":"var(--icon-fill, black)"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'PictosEditeurCitationIcon',
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


  