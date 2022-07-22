import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: [
        'vue'
        // 'vue/macros',
        // 'vue-router',
        // '@vueuse/core'
      ],
      dts: true,
      /* dirs: [
        './src/composables'
      ], */
      vueTemplate: true
    })
  ]
})
