import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',    // keep jsdom environment for testing
    globals: true,           // enables global functions 
    
    // code coverage
    coverage: {
      provider: 'c8',        // c8 is a tool for coverage 
      reporter: ['text', 'html'], // outputs coverage in terminal
      reportsDirectory: './coverage', // where the coverage reports arestored
    },
  },
});
