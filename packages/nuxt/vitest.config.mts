import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      reporter: [
        [
          'html',
          {
            outputFile: './test-results/test-report.html',
            open: false,
          },
        ],
      ],
      // reportsDirectory: './test-results',
    },
  },
});
