import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.ts', 'generic-utils/**/*.ts'],
    }),
  ],
  resolve: {},
  build: {
    lib: {
      fileName: 'main',
      name: 'only-utils',
      entry: [resolve(__dirname, 'lib/utils/index.ts')],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['url'],
    },
  },
});
