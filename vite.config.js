import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 打包路径
  server: {
    host: "0.0.0.0",
    port: 3000, // 服务端口号
    cors: true, // 允许跨域
    open: true,
    proxy: {
      "/dev-api": {
        target: "http://192.168.0.62:8000",
        // target: 'http://122.112.180.184:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace("/dev-api", "")
      }
    }
  },
})
