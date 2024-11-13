import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // vitest: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: ['./.storybook/vitest.setup.ts'],
  //   css: true
  // }
});
