import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@css': '/src/assets/css',
      '@img': '/src/assets/img',
      '@comp': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@services': '/src/services'
    }
  },

  plugins: [react()],
})
