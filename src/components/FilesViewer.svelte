<script>
    import Code from './Code.svelte'
    import { TabsPage, Tabs, TabsLink } from 'polykit'

    export let focus = ''
    export let root

    const files = []
    if (root.module || root.asyncModule) files.push({ node: root, level: 0 })

    const regexPath = new RegExp('^' + root.file.path + '/')

    const addFiles = (node, level = 0) => {
        node.children.forEach(node => {
            const relativeFromRoot = node.file.path.replace(regexPath, '')
            if (node.file.name === '_module')
                files.push({ level, name: node.file.dir, isDir: true })
            files.push({
                level,
                node,
                isDir: !node.meta.src,
                selected: relativeFromRoot === focus,
            })
            addFiles(node, level + 1)
        })
    }
    addFiles(root)

    // if first file is a root folder, get rid of it.
    if (!files[0].node.meta.src) files.shift()

    const langMap = {
        js: 'javascript',
        svelte: 'svelte',
        md: 'svelte',
    }

    const parseSrc = src =>
        src
            .split('\n')
            .map(line => line.replace('::WEDGE::', ''))
            .map(line => line.replace(/.+\/\/ ROUTIFY-REPLACE /gm, ''))
            .join('\n')
</script>

<Tabs>
    <div class="tabs">
        <div class="filetree">
            <div class="files-header">FILES</div>
            {#each files as file}
                <TabsLink selected={file.selected} selectable={file.node?.meta.src}>
                    <span style="padding-left: {file.level * 16}px">
                        {file.node?.file.base}
                        <!-- dirs should end with / -->
                        {#if file.isDir}/{/if}
                    </span>
                </TabsLink>
            {/each}
        </div>
        <div class="file">
            {#each files as file}
                <TabsPage>
                    <div>
                        {#await file.node.meta.src() then src}
                            <Code
                                language={langMap[file.node.file.base.split('.').pop()]}>
                                {parseSrc(src)}
                            </Code>
                        {/await}
                    </div>
                </TabsPage>
            {/each}
        </div>
    </div>
</Tabs>

<style>
    .filetree {
        background: #fdf3fd !important;
        padding-bottom: 16px;
    }
    .file {
        width: 100%;
        overflow-y: auto;
    }
    .files-header {
        background: rgb(160, 110, 170);
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        padding-left: 24px;
        line-height: 32px;
        margin-bottom: 8px;
    }
    .filetree :global(button) {
        width: 100%;
        display: block;
        background: none !important;
        text-align: left;
        border: none !important;
        color: #76606f;
        text-transform: none;
        font-weight: normal;
        font-size: 14px;
        margin: 0;
        z-index: 0;
        position: relative;
        border-radius: 0;
        transform: translateY(1px);
        padding-left: 20px;
        width: 192px;
        height: 32px;
        line-height: 32px;
    }
    * :global(button.selected) {
        color: #76606f;
        transform: translateY(0px);
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        background: white !important;
        z-index: 10;
    }
    * :global(pre) {
        margin: 0;
        border-top-left-radius: 0;
    }
    .tabs {
        background: #310541;
        display: flex;
        box-shadow: var(--elevation-1);
    }
</style>
