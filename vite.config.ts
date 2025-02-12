import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({template: { transformAssetUrls }}),
    vueDevTools(),
    quasar({
      sassVariables: 'quasar/src/css/variables.sass',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: { chunkSizeWarningLimit: 1600 },
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  }
})
