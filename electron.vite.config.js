import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/utils']
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/preload']
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      Unocss({
        presets: [
          // 默认预设 现在它等效于@unocss/preset-wind : Tailwind / Windi CSS compact preset
          presetUno(),
          // 属性化模式支持
          presetAttributify(),
          // icon支持
          presetIcons()
        ]
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
        ]
      }),
    ]
  }
})
