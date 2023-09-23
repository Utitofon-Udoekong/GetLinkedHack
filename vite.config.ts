// import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { unheadVueComposablesImports } from '@unhead/vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/utils',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    Components({
      // allow auto load components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in vue
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      '@assets': `${path.resolve(__dirname, 'src')}/assets`,
      '@images': `${path.resolve(__dirname, 'src')}/images`,
      '@views': `${path.resolve(__dirname, 'src')}/views`,
    }
  }
})
