import path from 'path';
import {defineConfig} from 'vite';
import svgo from 'vite-plugin-svgo';

export default defineConfig({
    // base: '/steppenwolffenrir-JSFE2024Q4/christmas-shop/',
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@svg': path.resolve(__dirname, 'src/assets/svg'),
            '@js': path.resolve(__dirname, 'src/js'),
            '@scss': path.resolve(__dirname, 'src/scss'),
            '@pages': path.resolve(__dirname, 'src/pages'),
        },
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: ``,
            },
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/pages/index.html'),
                gifts: path.resolve(__dirname, 'src/pages/gifts.html'),
            },
        },
    },
    server: {
        open: '/src/pages/index.html',
    },
    plugins: [
        svgo(),
    ],
});