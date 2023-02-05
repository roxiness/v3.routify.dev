<script>
    import { get } from 'svelte/store'

    /** @type {RoutifyContext}*/
    export let context
    const getNodes = () =>
        context.node.pagesWithIndex.filter(node => !node.name.startsWith('example'))

    const isExample = [context.node, ...context.node.ancestors].find(node =>
        node.name?.match(/^_?example/),
    )

    const multi = isExample ? false : { pages: getNodes() }

    const isLeaf = () => context.route?.leaf.node.parent === context.node
    const scrollBoundary = elem => (isLeaf() ? null : elem.parentElement)
</script>

<slot {multi} {scrollBoundary} />
