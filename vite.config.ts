import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compressPlugin from 'vite-plugin-compression'
import { terser } from "rollup-plugin-terser"
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [
    vue(),
    compressPlugin(),
    terser(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: 'less',
        })
      ],
    }),
    DefineOptions(),
  ],
  server: {
    open: true,
    host: '0.0.0.0',
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.resolve(
            __dirname,
            'src/style/theme.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    extensions: ['.less', '.vue', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
