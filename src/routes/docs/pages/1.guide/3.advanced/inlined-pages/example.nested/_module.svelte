<script>
    import { node } from '@roxi/routify'
</script>

{#each $node.pages as childNode}
    <!-- Render a page or module -->
    <svelte:component this={childNode.component}>
        <!-- If a component has a <slot /> we can render
             pages in it. Here we're going to render the
             component's index -->
        <svelte:component 
            this={childNode.traverse('./index').component} 
        />
    </svelte:component>
{/each}
