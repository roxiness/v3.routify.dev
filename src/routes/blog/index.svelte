<script>
    import { url } from '@roxi/routify'
    /** @type {RenderContext} */
    export let context

    const date = date => {
        const d = new Date(date)
        return d.toLocaleString()
    }
</script>


<div class="container blog">
    <h1>Blog</h1>

    {#each context.node.parent.linkableChildren as post}
        <a href={$url(post.path)}>
            <h2>{post.title}</h2>
            <p class="author">Written by {post.meta._author} {date(post.meta._date)}</p>
            <p>{post.meta._description}</p>
        </a>
    {/each}
</div>

<!-- routify:meta order=false -->
<!-- routify:meta reset=1 -->

<style>
    .author {
        color: var(--color-grey-500);
    }
    h1 {
        font-weight: 600;
        margin-top: 15vh;
    }
    h2 {
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .container {
        max-width: 800px;
    }
</style>
