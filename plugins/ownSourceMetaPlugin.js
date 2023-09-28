/// <reference types="@roxi/routify" />

import { readFileSync } from 'fs'

/**
 * Plugin that saves a files content in its own meta.src
 * @returns {RoutifyBuildtimePlugin}
 */
export default () => ({
    name: 'sourceMeta',
    before: 'metaSplit',
    build: ({ instance, tools }) => {
        const { routifyDir } = instance.options
        instance.nodeIndex.forEach(node => {
            if (!node.file.stat.isDirectory())
                node.meta.src = tools.split(
                    // vite fix. vite does not like import.meta.env as it will be replaced by vite with the actual env variables
                    readFileSync(node.file.path, 'utf-8').replace(/import\.meta\.env/, ''),
                    routifyDir + '/ownSourcePlugin/' + node.file.path + '.src.js',
                )
        })
    },
})
