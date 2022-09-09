import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { join } from "path"
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"]
    })
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "/src")
    }
  }
})
