import { addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'register-compose-components',
    configKey: 'registerComposeComponents',
    compatibilityDate: '2025-05-15',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'

    addComponentsDir({
      path: resolver.resolve('@use-compose/ui/components'),
    });
  },
});
