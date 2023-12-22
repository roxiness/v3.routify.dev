<script>
    import { activeRoute } from '@roxi/routify'
    import Author from './__Author.svelte'
    const date = date => {
        const d = new Date(date)
        return d.toLocaleString()
    }
</script>

<div class="container copy blog">
    <h1>{$activeRoute.leaf.node.meta._title}</h1>
    <p class="author">Written by {$activeRoute.leaf.node.meta._author} {date($activeRoute.leaf.node.meta._date)}</p>
    <slot />
    <Author />
</div>

<style>
    .container {
        max-width: 800px;
        padding-bottom: 8rem;
    }

    .author {
        color: var(--color-grey-500);
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
