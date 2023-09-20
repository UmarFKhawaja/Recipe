import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      cert: fs.readFileSync('../../Keys/localhost.crt'),
      key: fs.readFileSync('../../Keys/localhost.key')
    },
    port: 5080
  },
  plugins: [react()]
});
