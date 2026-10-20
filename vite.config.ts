import { defineConfig } from 'vite';
import react from '@vitejs/react-plugin';
import path from 'path';
import VitePrerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    VitePrerender({
      // Path to your compiled build output
      staticDir: path.join(__dirname, 'dist'),
      // List the routes you want to generate HTML for
      routes: [ '/'],
    }),
  ],
});

