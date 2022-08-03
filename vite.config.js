import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros'
        // 'vue-router',
        // '@vueuse/core'
      ],
      dts: true,
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue/, /.vue\?vue/],
      dts: true
    })
  ]
})
