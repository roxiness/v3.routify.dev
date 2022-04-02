export default defineConfig({
    plugins: [
        routify({
            routesDir: {
                default: 'src/routes',
                exampleWidget: 'path/to/widget'
            },
        }),
    ],
    ...
})