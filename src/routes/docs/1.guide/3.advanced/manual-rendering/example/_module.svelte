<script>
    import { node } from '@roxi/routify'
</script>

{#each $node.linkableChildren as childNode}
    <svelte:component this={childNode.component} />
{/each}
