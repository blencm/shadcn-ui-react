import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.loader = {
      '.css': 'file'
    };
  }
});