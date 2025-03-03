import { toPascalCase } from '..';

/**
 * Sanitizes and normalizes a file name into a valid component name.
 * @param fileName - The input file name to be transformed.
 * @returns The formatted component name in PascalCase.
 */
export function normalizeComponentName(fileName: string): string {
  return (
    toPascalCase(
      fileName
        // Replace '&' with 'And'
        .replace(/&/g, 'And')

        // Remove all whitespace (spaces, tabs, newlines)
        .replace(/\s+/g, '')

        // Collapse multiple consecutive hyphens into a single hyphen
        .replace(/-+/g, '-')

        // Remove all remaining hyphens and underscores
        .replace(/[-_]+/g, '')

        // Remove the file extension if present (e.g., .svg, .png, .jpg)
        .replace(/\.(svg|png|jpg|jpeg|gif)$/i, ''),
    ) +
    // Append 'Icon' to the component name
    'Icon'
  );
}
