import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { join } from "path"
import eslintPlugin from "vite-plugin-eslint"
import WindiCSS from "vite-plugin-windicss"
import ElementPlus from "unplugin-element-plus/vite"
// import requireTransform from "vite-plugin-require-transform"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    //   cache: false,
    //   exclude: ["./node_modules"]
    // }),
    WindiCSS(),
    // 或者使用 unplugin-element-plus
    ElementPlus({
      useSource: true
    })
    // requireTransform({ fileRegex: /.js$|.vue$|.ts$/ })
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "/src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
