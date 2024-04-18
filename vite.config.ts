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
  build: {
    lib: {
      fileName: 'main',
      name: 'only-utils',
      entry: [resolve(__dirname, 'lib/main.ts')],
    },
    rollupOptions: {
      external: ['url', 'fs', 'fs/promises'],
      output: {
        exports: 'named',
      },
    },
  },
});
