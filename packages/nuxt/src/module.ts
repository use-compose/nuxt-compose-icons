import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { ComposeIconSize } from './runtime/types';
import {
  createComponentFromName,
  createSvgComponentCode,
  generateCssFile,
  readDirectoryRecursively,
  toPascalCase,
  writeComponentFile,
} from './utils';

interface GeneratedComponentOptions {
  /**
   * The prefix to use for the component - default false
   */
  prefix?: boolean | string;
  /**
   * The suffix to use for the component
   * default "Icon" ( PascalCase ) and "-icon" ( kebab-case )
   */
  suffix: string;
}

export interface ModuleOptions {
  /*
   * The path to the icons directory
   */
  pathToIcons?: string;
  iconComponentList?: { [key: string]: Component };
  iconSizes?: ComposeIconSize;
  generatedComponentOptions?: GeneratedComponentOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const pathToIcons = _options.pathToIcons;
    const iconComponentList = _options.iconComponentList;
    const iconSizes = _options.iconSizes;

    if (!pathToIcons && !iconComponentList) {
      console.error('pathToIcons or iconComponentList is required');
      return;
    }

    const resolver = createResolver(import.meta.url);

    if (pathToIcons) {
      // Resolve the path to the icons directory provided
      const absolutePathToIcons = path.resolve(
        nuxt.options.rootDir,
        pathToIcons,
      );

      if (
        fs.existsSync(absolutePathToIcons) &&
        fs.statSync(absolutePathToIcons).isDirectory()
      ) {
        // We first read all the files recursively to flatten the structure
        const files = readDirectoryRecursively(absolutePathToIcons);

        // const components: Component[] = [];
        /*
         * For each file we:
         * 1. Parse the content (as HTML string)
         * 2. Create the component code as literal string template by:
         *   . Recreating the Vue VNode structure dynamically based on the SVG content
         *   . Set the props and attributes based on the SVG content and the options passed
         * 3. Write the component to the file system
         * 4. Create the "official" component object with the name and path
         * 5. Add the component to the Nuxt app's components array at build time
         * 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
         *
         * We use a literal string template to create the Vue component
         * see https://nuxt-compose-icons.arthurplazanet.com//why-literal-strings-to-create-vue-components
         */
        files.forEach((filePath) => {
          const fileInfo = path.parse(filePath);
          // 1. Parse the content (as HTML string)
          const svgContent = fs.readFileSync(filePath, 'utf-8');

          // TODO: Check if necessary to handle snake case as well
          // TODO: handle double dashes "--", and if ".svg" already present
          const componentName = (toPascalCase(fileInfo.name) + 'Icon')
            .replace(/&/g, 'And')
            .replace(/\s/g, '');

          // 2. Create the component code as literal string template
          const componentCode = createSvgComponentCode(
            componentName,
            svgContent,
          );

          // 3. Write the component to the file system
          const generatedFilePath = writeComponentFile(
            componentName,
            componentCode,
            true,
          );

          // 4. Create the "official" component object with the name and path
          const component = createComponentFromName({
            ..._options.generatedComponentOptions,
            name: componentName,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });

          // // 5. Add the component to the Nuxt app's components array at build time
          nuxt.hook('components:extend', (components) => {
            components.push(component);
          });

          // components.push(component);

          // // 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
          const cssContent = generateCssFile(iconSizes);

          // // Define the path to save the CSS file within the module
          const cssFilePath = path.resolve(
            __dirname,
            './runtime/assets/compose-sizes.css',
          );
          // // Ensure the directory exists
          fs.mkdirSync(path.dirname(cssFilePath), { recursive: true });
          // // Write the CSS content to the file
          fs.writeFileSync(cssFilePath, cssContent, 'utf-8');

          // nuxt.options.alias = {
          //   '@': './runtime',
          // };

          // // Push the CSS file into the Nuxt app's CSS array
          nuxt.options.css.push(cssFilePath);
          nuxt.options.css.push(
            path.resolve(__dirname, './runtime/assets/compose-icon.css'),
          );
          addImportsDir(resolver.resolve('runtime/types'));
          addImportsDir(resolver.resolve('runtime/utils'));
        });

        // nuxt.hook('components:dirs', (dirs) => {
        //   dirs.push({
        //     path: path.resolve(__dirname, './runtime/components/icon-generated'),
        //     prefix: 'Compose',
        //   });
        // });
      } else {
        console.error(`Folder does not exist: ${absolutePathToIcons}`);
      }
    } else if (iconComponentList) {
      Object.keys(iconComponentList).forEach((iconComponentName) => {
        console.log(
          '📟 - file: module.ts:111 - iconComponentName → ',
          iconComponentName,
        );
        console.log(
          '📟 - file: module.ts:111 - iconComponentList name → ',
          iconComponentList[iconComponentName],
        );
        // const test = resolveComponent(iconComponentList[iconComponentName]);
        // TODO: Check if necessary to handle snake case as well
        const componentName = toPascalCase(iconComponentName).replace(
          /&/g,
          'And',
        );
        // const svgContent = ''; // Placeholder: you need to load the actual SVG content as needed
        // const componentCode = createSvgComponentCode(componentName, svgContent);
        // const componentCode = iconComponentList[iconComponentName];
        const generatedFilePath = path.resolve(
          __dirname,
          './playground/icon-list.ts',
        );
        console.log(
          '📟 - file: module.ts:140 - generatedFilePath → ',
          generatedFilePath,
        );
        const component = createComponentFromName({
          ..._options.generatedComponentOptions,
          name: componentName,
          shortPath: generatedFilePath,
          filePath: generatedFilePath,
        });
        nuxt.hook('components:extend', (components) => {
          components.push(component);
        });
      });
    }
  },
});
