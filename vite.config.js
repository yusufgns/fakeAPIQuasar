// FILE: vite.config.js

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: './src/style.scss'
    })
  ]
})
