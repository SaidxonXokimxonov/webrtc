// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Asosiy fayllar shu papkada
  build: {
    outDir: 'dist', // build natijalari shu papkaga chiqadi
  },
  server: {
    port: 3000, // localhost:3000 bo'ladi
  },
});
