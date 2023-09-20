import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: process.env.SERVER_CRT_FILE && process.env.SERVER_KEY_FILE ? {
      cert: fs.readFileSync(process.env.SERVER_CRT_FILE),
      key: fs.readFileSync(process.env.SERVER_KEY_FILE)
    } : false,
    port: parseInt(process.env.SERVER_PORT || '5080')
  },
  plugins: [react()]
});
