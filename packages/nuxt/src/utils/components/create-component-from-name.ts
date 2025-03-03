import type { AddComponentOptions } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import { toKebabCase, toPascalCase } from '..';

export { createComponentFromName };

// Apply defaults
const defaultComponent: Component = {
  export: 'default',
  chunkName: 'components/' + '',
  global: true,
  kebabName: '',
  pascalName: '',
  prefetch: true,
  preload: true,
  mode: 'all',
  shortPath: '',
  filePath: '',
  priority: 0,
};

function createComponentFromName(componentOptions: AddComponentOptions) {
  // replace "&" by "-" in the name (in case of icons file names which could contains any "&" character if we use the iconPath option)
  const name = componentOptions.name.replace(/&/g, '-');

  // We manually add the "icon" or "Icon" suffix if it's not already present
  // To use it as "<AlertIcon>" or "<alert-icon />" in template
  let componentPascalName = '';
  let componentKebabCaseName = '';
  if (name.includes('Icon') || name.includes('-icon')) {
    componentPascalName = toPascalCase(name);
    componentKebabCaseName = toKebabCase(name);
  } else {
    componentPascalName = toPascalCase(name) + 'Icon';
    componentKebabCaseName = toKebabCase(name) + '-icon';
  }

  const component: Component = {
    ...defaultComponent,
    ...componentOptions,
    pascalName: componentPascalName,
    kebabName: componentKebabCaseName,
    chunkName: componentPascalName,
  };

  return component;
}
