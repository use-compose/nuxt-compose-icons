// Manually write the generated component in the runtime directory of the module, to inject it into the Nuxt app
import * as fs from 'node:fs';
import * as path from 'node:path';

const componentsDir = path.resolve(__dirname, '../../runtime/components/icons-generated');
const indexFilePath = path.join(componentsDir, 'index.ts');

export function writeComponentFile(
  componentName: string,
  componentCode?: string,
  withIndex?: boolean,
): string {
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, `${componentName}.vue`);
  if (componentCode) {
    fs.writeFileSync(filePath, componentCode, 'utf-8');
  }

  if (withIndex) {
    const importStatement = `export { default as ${componentName} } from './${componentName}.vue';\n`;

    if (!fs.existsSync(indexFilePath)) {
      // Create index.ts and add the import statement
      fs.writeFileSync(indexFilePath, importStatement, 'utf-8');
    } else {
      const indexContent = fs.readFileSync(indexFilePath, 'utf-8');
      if (!indexContent.includes(importStatement.trim())) {
        fs.appendFileSync(indexFilePath, importStatement, 'utf-8');
      }
    }
  }

  return filePath;
}
