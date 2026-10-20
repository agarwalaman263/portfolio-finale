import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin'; // Correct package

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin()
  ],
});

