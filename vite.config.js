import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0',
    open: {
      // 默认打开Chrome
      browser: 'chrome'
    }
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss(),
        cssnano({
          preset: 'default'
        })
      ]
    }
  }
})
