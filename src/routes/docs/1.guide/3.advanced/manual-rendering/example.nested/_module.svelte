<script>
    import { node } from '@roxi/routify'
</script>

{#each $node.pages as childNode}
    <!-- Render a page or module -->
    <svelte:component this={childNode.component}>
        <!-- If a we're rendering a module we can render
             pages in it. Here we're going to render the
             component's index -->
        <svelte:component 
            this={childNode.traverse('.', false, true).component} 
        />
    </svelte:component>
{/each}
