// runtime/composables/useComposeIconRegistry.ts
import { iconRegistry, type IconRegistryEntry } from '../../../src/runtime/utils/icon-registry';

export function useComposeIconRegistry(componentsDir?: string) {
  // eslint-disable-next-line no-console
  console.log('📟 - componentsDir → ', componentsDir);
  // const iconRegistryPath = componentsDir
  //   ? `${componentsDir}/icon-registry.ts`
  //   : '../../src/runtime/composables/use-compose-icons-registry.ts';

  // Dynamically import the icon registry JSON file
  // const iconRegistryModule = await import(/* @vite-ignore */ iconRegistryPath);
  // const iconRegistry: Array<{
  //   name: string;
  //   pascalName: string;
  //   kebabName: string;
  //   importPath: string;
  // }> = iconRegistryModule.default || iconRegistryModule;

  const icons = iconRegistry;

  const getIconByName = (name: string) => {
    return icons.find((icon) => icon.name === name || icon.kebabName === name);
  };

  function searchIcons(query: string): IconRegistryEntry[] {
    const q = query.trim().toLowerCase();
    if (!q) return iconRegistry;
    return iconRegistry.filter((i) => i.name.toLowerCase().includes(q) || i.kebabName.includes(q));
  }

  return {
    icons,
    getIconByName,
    searchIcons,
  };
}
