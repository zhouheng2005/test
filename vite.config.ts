import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  // 设置开发者模式以及生产模式访问路径
  base: process.env.NODE_ENV === "production" ? "./" : "./",
  plugins: [vue()],
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist',         //指定输出路径
    assetsDir: 'assets',    // 指定生成静态资源的存放路径
    minify: 'terser',       // 混淆器，terser构建后文件体积更小
    rollupOptions: {
      output: {
        //  指定打包输出的js文件名称
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        // assetFileNames: "[ext]/[name]-[hash].[ext]"
        //设置css和图片的文件夹名称，但是有弊端，css设置的背景图片访问不到,路径是错误的
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    cors: true, // 默认启用并允许任何源
    open: false,// 默认打开浏览器
    port: 80,// 访问的端口号
    host: "0.0.0.0",// 访问的地址
    proxy: {
      '/api': {
        target: "请求的域名地址",
        changeOrigin: true,// 是否允许跨域代理
        rewrite: (path) => path.replace(/^\/api/, '') // 重定向地址
      }
    }
  },
})
