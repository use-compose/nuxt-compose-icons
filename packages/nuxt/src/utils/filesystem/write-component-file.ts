// Manually write the generated component in the runtime directory of the module, to inject it into the Nuxt app
import * as path from 'node:path';
import { writeFile } from './helpers';

export async function writeComponentFile(
  componentName: string,
  componentsDir: string,
  componentCode?: string,
): Promise<string> {
  // TODO: Components dir parameter
  // const indexFilePath = path.join(componentsDir, 'index.ts');

  const filePath = path.join(componentsDir, `${componentName}.vue`);

  if (componentCode) {
    await writeFile(filePath, componentCode);
  }

  // const declarationFilePath = path.join(componentsDir, 'icon-components-completion.d.ts');

  // writeDeclarationFile(declarationFilePath, componentName);

  // if (withIndex) {
  //   const importStatement = `export { default as ${componentName} } from './${componentName}';\n`;

  //   if (!(await isFileExist(indexFilePath))) {
  //     // Create index.ts and add the import statement
  //     fs.writeFileSync(indexFilePath, importStatement, 'utf-8');
  //   } else {
  //     const indexContent = fs.readFileSync(indexFilePath, 'utf-8');
  //     if (!indexContent.includes(importStatement.trim())) {
  //       fs.appendFileSync(indexFilePath, importStatement, 'utf-8');
  //     }
  //   }
  // }

  return filePath;
}
