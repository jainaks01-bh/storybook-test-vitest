import { defineConfig, mergeConfig } from 'vitest/config';

import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [storybookTest()],
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['src/**/*.stories.{js,jsx,ts,tsx}'],
      coverage: {
        provider: 'istanbul',
        // include: ['test'],
        reporter: ['text', 'json', 'html'],
      },
      setupFiles: ['./.storybook/vitest.setup.ts'],
      css: {
        modules: {
          classNameStrategy: 'non-scoped',
        },
      },
    },
  })
);
