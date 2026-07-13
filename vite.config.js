import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'CR-02-charity-water-lp';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
}));
