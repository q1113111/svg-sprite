import { fileURLToPath, URL } from 'url'
import { svgBuilder } from './plugins/svgBuilder'; 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    svgBuilder('./src/assets/icon/')
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
