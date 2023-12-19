<script>
    import { isActive } from '@roxi/routify'
    import Author from './__Author.svelte'
</script>

<div class="container copy blog">
    <slot />
    <Author />
</div>

<style>
    .container {
        max-width: 800px;
        
        padding-bottom: 8rem;
    }

    * :global(.video-container) {
        position: relative;
        padding-bottom: 63%;
        border-radius: 12px;
        overflow: hidden;
    }
    * :global(.video-container > *) {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .blog :global(a) {
        /* color: var(--color-primary); */
        text-decoration: none;
    }

</style>
