<script>
    import { url } from '@roxi/routify'
    export let context
    export let isRoot
</script>

<!-- Custom deco {level} - {id} -->

{#if context.node.level === 3}
    <!-- SECTION -->
    <h1 class="section-hero">
        <a href={$url('./')}>
            {context.node.name}
        </a>
    </h1>
    <slot />
{:else if context.node.level === 4}
    <!-- CATEGORY -->
    <h2 class="category-header">
        <a href={$url('./')}>
            {context.node.title}
        </a>
    </h2>
    <slot />
{:else if context.node.level === 5}
    <!-- SUBJECT -->
    {#if context.node.name !== 'index'}
        <h3 class="subject-header">
            <a href={$url('./')}>
                {context.node.title}
            </a>
        </h3>
    {/if}
    <slot />
{:else if context.node.level === 6}
    <!-- WUT? -->
    <slot />
{:else}
    <h1>I should not be here!</h1>
    <slot />
{/if}

<style>
    :global(.tablet .copy) {
        margin: 0 var(--spacing-7);
    }

    .block {
        min-height: 256px;
    }
    .section-hero {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
        font-size: clamp(8rem, 18vw, 20rem);
        border-bottom: 16px solid #606c76;
    }
    :global(.mobile .section-hero) {
        margin: 0 -2rem;
        padding: 0 2rem;
    }
    .category:not(:nth-of-type(2)) .category-header {
        border-top: 4px solid var(--color-grey-300);
        padding: 4rem 0;
    }
    .category-header {
        text-transform: capitalize;
        font-weight: 900;
        padding: 7rem 0 1rem;
        font-size: clamp(3rem, 7vw, 7rem);
    }

    .subject-header {
        text-transform: capitalize;
        color: white;
        background: #bd239b;
        background: #800080;
        background: -webkit-linear-gradient(to left, #ffc0cb, #800080);
        background: linear-gradient(to left, #ffc0cb, #800080);
        padding: 3rem 2rem 1rem;
        font-size: clamp(2.5rem, 4vw, 4rem);
    }
    :global(.mobile .subject-header, .mobile .category-header) {
        margin-inline: -2rem;
        padding-inline: 2rem;
    }
    :global(.category-header + .subject-header) {
        margin-top: 0 !important;
    }
    :global(.subject-header + .category-header) {
        margin-bottom: 0 !important;
    }

    a:visited {
        color: inherit;
    }
</style>
