import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { theme } from 'antd'

import path from 'path'

const { defaultAlgorithm, defaultSeed } = theme
const mapToken = defaultAlgorithm(defaultSeed)

console.log('mapToken', JSON.stringify(mapToken))

export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            // return `/antd/es/${name}/style/index.less`
            // return path.resolve(
            //   __dirname,
            //   `node_modules/antd/es/${name}/style/index.less`
            // )
          },
          resolveComponent: (name) => {
            // return `/antd/es/${name}/index`
            // return path.resolve(__dirname, `node_modules/antd/es/${name}/index`)
          }
        }
      ]
    })
  ],
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
        cssnano({
          preset: 'default'
        })
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: mapToken
      }
    }
  }
})
