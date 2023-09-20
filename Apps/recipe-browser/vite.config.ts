import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: process.env.BROWSER_CRT_FILE && process.env.BROWSER_KEY_FILE ? {
      cert: fs.readFileSync(process.env.BROWSER_CRT_FILE),
      key: fs.readFileSync(process.env.BROWSER_KEY_FILE)
    } : false,
    port: parseInt(process.env.BROWSER_PORT || '5080')
  },
  plugins: [
    react()
  ],
  envPrefix: [
    'SERVER'
  ]
});
