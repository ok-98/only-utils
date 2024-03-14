import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ include: ['lib'], exclude: ['**/*.test.ts'] })],
  build: {
    lib: {
      name: 'only-utils',
      entry: {
        index: resolve(__dirname, 'lib/index.ts'),
        utils: resolve(__dirname, 'lib/utils/index.ts'),
        'browser-utils': resolve(__dirname, 'lib/browser-utils/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lodash-es', 'url'],
    },
  },
});
