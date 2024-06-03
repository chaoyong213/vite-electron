import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 										// 新增

// https://vitejs.dev/config/
export default defineConfig({
  // base: path.resolve(__dirname, './dist/'),	// 新增
  base: "./",
  plugins: [vue()]
})
