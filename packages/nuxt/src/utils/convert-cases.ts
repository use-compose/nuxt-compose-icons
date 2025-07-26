export { pascalCaseToKebabCase, toKebabCase, toPascalCase };

function pascalCaseToKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function toPascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(str: string): string {
  return str.replace(/-/, '').toUpperCase();
}
