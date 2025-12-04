import fs from 'node:fs';

export function isFileExists(path: string): boolean {
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
