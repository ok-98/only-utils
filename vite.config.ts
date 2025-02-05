import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const name = 'only-utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.ts', 'generic-utils/**/*.ts'],
      rollupConfig: {
        bundledPackages: [
          'boolchain',
          'better-optional',
          'only-types',
          'only-utils',
        ],
      },
    }),
  ],
  build: {
    lib: {
      name,
      entry: [resolve(__dirname, 'lib/only-utils.ts')],
      fileName: (format) =>
        format === 'es' ? `${name}.js` : `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['url', 'fs', 'fs/promises'],
      output: {
        exports: 'named',
        name: 'onlyUtils',
      },
    },
  },
});
