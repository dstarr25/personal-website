import eslint from 'vite-plugin-eslint';
import path from 'path';
// import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'src/img': path.resolve(__dirname, 'src/img'),
        },
    },
    plugins: [
        eslint(),
        // vitePluginFaviconsInject('./src/img/devonEmoji.png'),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        },
    },
});
