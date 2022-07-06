<script>
    import { resolveNode } from '@roxi/routify'

    // relative (each path is treated as a folder)
    const fooNode = resolveNode('../foo')

    // absolute
    const barNode = resolveNode('/bar')

    // named
    const bazNode = resolveNode('baz')
</script>

<svelte:component this={fooNode.component} />
<svelte:component this={barNode.component} />
<svelte:component this={bazNode.component} />