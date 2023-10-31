import path from 'path'
import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
    },
    envDir: './envs',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [
        react(),
        svgr(),
        eslint({
            // fix: true,
            failOnWarning: false,
            failOnError: false,
        })
    ],
})
