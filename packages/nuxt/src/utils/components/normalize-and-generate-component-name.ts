import type { NuxtComposeIconsOptions } from '~/src/module';
import { toKebabCase, toPascalCase } from '../convert-cases';

/**
 * Sanitizes and normalizes a file name into a valid component name.
 * @param fileName - The input file name to be transformed.
 * @returns The formatted component name in PascalCase.
 */
export function normalizeComponentName(fileName: string): string {
  return (
    fileName
      // TODO: Verify if it covers all cases
      // https://www.amitmerchant.com/replace-accented-characters-with-plain-english/
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Replace '&' with 'And'
      .replace(/&/g, '-and-')

      // Remove all whitespace (spaces, tabs, newlines) and add hyphen
      .replace(/\s+/g, '-')

      // Collapse multiple consecutive hyphens into a single hyphen
      .replace(/-+/g, '-')

      // Remove all remaining hyphens and underscores and add hyphen
      .replace(/[-_]+/g, '-')

      // Remove the file extension if present (e.g., .svg, .png, .jpg) and add hyphen
      .replace(/\.(svg|png|jpg|jpeg|gif)$/i, '-')
  );
}


export function normalizeAndGenerateComponentName(
  fileName: string,
  options: NuxtComposeIconsOptions,
): string {
  const { prefix, suffix, case: _case } = options.generatedComponentOptions;
  function applyCase(str: string): string {
    if (_case === 'kebab') {
      return toKebabCase(str);
    }

    return toPascalCase(str);
  }
  let componentName = fileName; // applyCase(normalizeComponentName(fileName));

  if (prefix) {
    componentName = `${prefix}-${componentName}`;
  }

  if (suffix) {
    componentName += suffix || 'Icon';
  }

  const normalizedComponentName = normalizeComponentName(componentName);

  return applyCase(normalizedComponentName);
}
