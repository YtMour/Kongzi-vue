import { fileURLToPath, URL } from 'node:url'
import postcsspxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 100,
          unitPrecision: 3,
          propList: ['*'],
          selectorBlackList: ['ignore'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
