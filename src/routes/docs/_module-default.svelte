<script>
    /** @type {RoutifyContext}*/
    export let context

    const isExample = [context.node, ...context.node.ancestors].find(node =>
        node.name?.match(/^_?example/),
    )

    const inline = isExample
        ? false
        : { isInline: node => !node.name.match(/example/) }

</script>

<slot {inline}  />
