import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import { readFileSync } from 'fs'
import routify from '@roxi/routify/vite-plugin'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,
    plugins: [
        routify({
            routesDir: {
                default: 'src/routes',
                exampleWidget:
                    'src/routes/docs/1.guide/3.advanced/multiple-routers/example.shared-tree/widget',
            },
            ssr: { enable: !!production },
            devHelper: !production,
            extensions: ['.svelte', '.html', '.md', '.svx', '.meta.js'],
        }),
        svelte({
            emitCss: !production,
            compilerOptions: {
                dev: !production,
                hydratable: !!process.env.ROUTIFY_SSR_ENABLE
            },
            extensions: ['.md', '.svelte'],
            preprocess: [mdsvex({ extension: 'md' })],
        }),
        {
            name: 'svg',
            transform: (code, id) =>
                id.endsWith('.svg')
                    ? 'export default ' + JSON.stringify(readFileSync(id, 'utf-8'))
                    : null,
        },
        {
            name: 'meta-in-md',
            transform: (code, id) =>
                id.endsWith('.md')
                    ? code.replace(/routify::meta/g, 'routify:meta')
                    : null,
        },
    ],
    server: { port: 1337 },
    optimizeDeps: { include: ['prismjs'] },
    resolve: {
        alias: {
            '#cmp': process.cwd() + '/src/components',
        },
    },
})
