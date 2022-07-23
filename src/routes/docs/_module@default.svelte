<script>
    export let context
    const nodes = context.node.pagesWithIndex.filter(
        node => !node.name.startsWith('example'),
    )
    const multi = context.node.name.match(/^_?example/) ? false : nodes
</script>

<slot {multi} />
