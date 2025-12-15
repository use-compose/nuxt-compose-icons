import fs, { promises as fsp } from 'node:fs';
import * as path from 'node:path';

export { createDir, isFileExist, writeFile };

async function isFileExist(path: string): Promise<boolean> {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function createDir(dirPath: string): Promise<string> {
  try {
    //  recursive: true then a string is returned
    return (await fsp.mkdir(dirPath, { recursive: true })) as string;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw err;
    }
  }
  return dirPath;
}

async function writeFile(filePath: string, content: string): Promise<void> {
  // Ensure directory exists
  const dir = path.dirname(filePath);
  await createDir(dir);

  await fsp.writeFile(filePath, content, 'utf-8');
}
