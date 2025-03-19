import type { AddComponentOptions } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import type { GeneratedComponentOptions } from '~/src/module';
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

function includePrefixAndSuffix({
  prefix,
  suffix = 'Icon',
  name,
}: {
  prefix: string | boolean;
  suffix: string;
  name: string;
}) {
  let componentName = '';

  if (prefix) {
    componentName = `${prefix}-${name}`;
  }

  if (suffix) {
    componentName += suffix;
  } else {
    componentName += '-icon';
  }

  return {
    componentPascalName: toPascalCase(componentName),
    componentKebabName: toKebabCase(componentName),
  };
}

function createComponentFromName(
  componentOptions: AddComponentOptions & GeneratedComponentOptions,
): Component {
  // replace "&" by "-" in the name (in case of icons file names which could contains any "&" character if we use the iconPath option)
  const name = componentOptions.name.replace(/&/g, '-');

  const { componentPascalName, componentKebabName } = includePrefixAndSuffix({
    name,
    prefix: componentOptions.prefix,
    suffix: componentOptions.suffix,
  });

  const component: Component = {
    ...defaultComponent,
    ...componentOptions,
    pascalName: componentPascalName,
    kebabName: componentKebabName,
    chunkName: componentPascalName,
  };

  return component;
}
