
    <script lang="ts">
    import { computed, defineComponent, h } from 'vue';
    import type { PropType } from 'vue';
    // import type { ComposeIconProps } from 'nuxt-compose-icons';
    // import { IconSize } from 'nuxt-compose-icons';
    // import { getIconSizeClass } from 'nuxt-compose-icons';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons';


    const svgAttributes = {"width":"81","height":"70","viewBox":"0 0 81 70","fill":"none","xmlns":"http://www.w3.org/2000/svg"};
    const children = [{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M78.2778 68.0001H35.5C35.5 68.0001 35.5 57.8684 35.5 57.8012C35.5 53.624 38.4509 49.7097 43.9314 47.3684C47.7507 45.7409 52.3991 44.7778 57.5534 44.7778C62.7137 44.7778 67.424 45.7409 71.2388 47.3658C76.7238 49.7071 78.2778 53.4207 78.2778 57.5979C78.2763 57.6651 78.2778 68.0001 78.2778 68.0001Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M70.9543 25.2247C70.9543 28.0383 70.089 30.6477 68.6126 32.8025C66.1938 36.3445 62.1189 38.6802 57.5001 38.6802C52.8874 38.6802 48.8138 36.3445 46.3913 32.8025C44.9186 30.6477 44.0557 28.0395 44.0557 25.2247C44.0557 22.4148 44.9186 19.8054 46.3913 17.6506C48.8138 14.1062 52.8874 11.7778 57.5001 11.7778C62.1189 11.7778 66.1926 14.1062 68.6126 17.6506C70.089 19.8054 70.9543 22.4161 70.9543 25.2247Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M45.2778 47.82C45.2778 43.6428 43.7238 39.9293 38.2388 37.588C34.424 35.9631 29.7137 35 24.5534 35C19.3991 35 14.7507 35.9631 10.9314 37.5906C5.45092 39.9318 2.5 43.8462 2.5 48.0234C2.5 48.0906 2.5 58.2222 2.5 58.2222H35.5","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null},{"__v_isVNode":true,"__v_skip":true,"type":"path","props":{"d":"M37.9543 15.4469C37.9543 18.2604 37.089 20.8699 35.6126 23.0247C33.1938 26.5667 29.1189 28.9023 24.5001 28.9023C19.8874 28.9023 15.8138 26.5667 13.3913 23.0247C11.9186 20.8699 11.0557 18.2617 11.0557 15.4469C11.0557 12.637 11.9186 10.0276 13.3913 7.87278C15.8138 4.32833 19.8874 2 24.5001 2C29.1189 2 33.1926 4.32833 35.6126 7.87278C37.089 10.0276 37.9543 12.6382 37.9543 15.4469Z","stroke":"var(--icon-stroke, black)","stroke-width":"var(--icon-stroke-width, 3)","stroke-miterlimit":"10"},"key":null,"ref":null,"scopeId":null,"slotScopeIds":null,"children":[],"component":null,"suspense":null,"ssContent":null,"ssFallback":null,"dirs":null,"transition":null,"el":null,"anchor":null,"target":null,"targetStart":null,"targetAnchor":null,"staticCount":0,"shapeFlag":17,"patchFlag":0,"dynamicProps":null,"dynamicChildren":null,"appContext":null,"ctx":null}];

    export default defineComponent({
      name: 'PersonnagesClesIcon',
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


  