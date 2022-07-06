<script>
    import { node } from '@roxi/routify'
</script>

{#each $node.pages as childNode}
    <svelte:component this={childNode.component} />
{/each}
