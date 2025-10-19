import type { AddComponentOptions } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import { toKebabCase, toPascalCase } from '../convert-cases';

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

/**
 * Creates a Nuxt component object from the provided options, applying paths and naming conventions.
 *
 * @param {AddComponentOptions} componentOptions
 * @returns {Component} component
 */
function createComponentFromName(componentOptions: AddComponentOptions): Component {
  const { name } = componentOptions;
  const pascalName = toPascalCase(name);
  const kebabName = toKebabCase(name);

  const component: Component = {
    ...defaultComponent,
    ...componentOptions,
    pascalName: pascalName,
    kebabName: kebabName,
    shortPath: `components/${pascalName}.vue`,
    chunkName: 'components/' + pascalName,
  };

  return component;
}
