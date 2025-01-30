import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8', // Updated to v8
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
    },
  },
});
