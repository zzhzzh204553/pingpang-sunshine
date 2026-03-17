import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',   // 允许通过局域网 IP 访问
        port: 5173         // 可选：指定端口
    },
    base: '/pingpang-sunshine/',
})
