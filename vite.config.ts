/*
 * @Author: 苦弱机械兔
 * @Date: 2023-11-22 17:34:15
 * @LastEditTime: 2023-11-29 14:10:41
 * 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),WindiCSS()],
  resolve: {
    alias: {
      '@': '/src/'
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
      }
    }
  }
})
