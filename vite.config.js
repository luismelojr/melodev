import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            autoImportComponentCase: 'combined',
            sassVariables: 'Assets/quasar.variables.scss',
        }),
        AutoImport({
            imports: [
                'vue',
                'quasar',
                {
                    '@inertiajs/vue3': ['router'],
                },
                {
                    '@inertiajs/vue3': ['usePage', 'useForm'],
                },
            ],
        }),
        Components({
            dirs: [
                './resources/js/Components',
                './resources/js/Layouts',
                './resources/js/Assets',
            ],
            extensions: ['vue'],
            directoryAsNamespace: true,
            deep: true,
            resolvers: [
                QuasarResolver(),
                IconsResolver(),
                (name) => {
                    if (name === 'Head') {
                        return {
                            importName: 'Head',
                            path: '@inertiajs/vue3',
                        }
                    }

                    if (name === 'Link') {
                        return {
                            importName: 'Link',
                            path: '@inertiajs/vue3',
                        }
                    }
                },
            ],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
})
