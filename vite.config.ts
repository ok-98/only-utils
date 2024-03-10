import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ include: ['lib'], exclude: ['**/*.test.ts'] })],
  build: {
    copyPublicDir: false,
    lib: {
      fileName: 'main',
      name: 'only-utils',
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lodash-es', 'url'],
    },
  },
});
