import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default () => {
    return defineConfig({
        plugins: [vue()],
        base: process.env.VITE_BASE_URL,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@c': path.resolve(__dirname, 'src/components')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/style/variables";'
                }
            }
        }
    });
};
