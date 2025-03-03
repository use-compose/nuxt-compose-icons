export {
  pascalCaseToKebabCase,
  toKebabCase,
  toPascalCase,
} from './convert-cases';

// Component functions
export { createComponentFromName } from './components/create-component-from-name';

// Filesystem functions
export { readDirectoryRecursively } from './filesystem/read-directory-recursively';
export { writeComponentFile } from './filesystem/write-component-file';

// SVG functions
export { createSvgComponentCode } from './svg/create-svg-component.js';
export { parseSvg } from './svg/parse-svg';

// CSS file generation
export { generateCssFile } from './styles/generate-css-file';

// TODO: with import/export sort prettier eslint rule
// /*
//  * Components utils
//  */
// export { createComponentFromName } from './components/create-component-from-name'
// /*
//  * Variable conventions utils
//  */
// export { pascalCaseToKebabCase, toKebabCase, toPascalCase } from './convert-cases'
// /*
//  * Filesystems utils
//  */
// export { readDirectoryRecursively } from './filesystem/read-directory-recursively'
// export { writeComponentFile } from './filesystem/write-component-file'
// /*
//  * SVGs utils
//  */
// export { createSvgComponentCode } from './svg/create-svg-component.js'
// export { parseSvg } from './svg/parse-svg'
