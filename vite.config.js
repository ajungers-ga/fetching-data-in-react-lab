// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fetching-data-in-react-lab/',
  plugins: [react()],
});
