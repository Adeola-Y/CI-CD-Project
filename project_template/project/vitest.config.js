
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', 
      reporter: ['text', 'json', 'html', 'lcov'], // generates text, json, html, and lcov reports
      all: true, // coverage for all files 
    },
  },
});
