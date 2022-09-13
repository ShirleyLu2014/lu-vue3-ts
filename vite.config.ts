import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { join } from "path"
import eslintPlugin from "vite-plugin-eslint"
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    //   cache: false,
    //   exclude: ["./node_modules"]
    // }),
    WindiCSS()
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
