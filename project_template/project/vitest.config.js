
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', 
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html', 'lcov'],
      all: true,
    },
    globals: true, 
    setupFiles: ['./setupTests.js'], 
  },
});
