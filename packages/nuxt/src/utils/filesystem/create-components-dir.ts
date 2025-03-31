import * as fs from 'node:fs';

export function createComponentsDir(dir: string) {
  // Remove existing components directory if exists
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  // Create the directory if it doesn't exist
  return fs.mkdirSync(dir, { recursive: true });
}
