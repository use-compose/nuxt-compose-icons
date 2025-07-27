// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: true,
    reporters: [
      [
        'html',
        {
          outputFile: './test-results/test-report.html',
          open: false,
        },
      ],
    ],
  },
});
