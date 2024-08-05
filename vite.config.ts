import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'chunk-C43JNT5V.js',
      'chunk-6J46Q2JF.js',
      'chunk-NKFEGWTY.js',
      'chunk-3Z6VMZAW.js',
      'chunk-YJTKAZUC.js',
      'chunk-N57LCPWM.js',
      'chunk-2PZMDA7V.js',
      'chunk-VKC7AMSX.js',
      'chunk-CXR2JLKT.js',
    ],
  },
});
