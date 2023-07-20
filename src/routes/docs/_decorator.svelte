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
    <div class="categories">
        <slot />
    </div>
{:else if context.node.level === 4}
    <!-- CATEROGY -->
    <div class="category">
        <h2 class="category-header">
            <a href={$url('./')}>
                {context.node.name}
            </a>
        </h2>
        <div class="block">
            <slot />
        </div>
    </div>
{:else if context.node.level === 5}
    <!-- SUBJECT -->
    {#if context.node.name !== 'index'}
        <h3 class="subject-header">
            <a href={$url('./')}>
                {context.node.name}
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

    /* :global(.desktop) .copy {
        margin: 0 var(--spacing-9);
    } */

    .block {
        min-height: 256px;
        /* border-radius: var(--spacing-5); */
    }
    /* .section {
        margin-top: 50vh;
    } */
    /* .section:first-of-type {
        margin-top: 0;
    } */
    .section-hero {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
        border-bottom: 8px solid #606c76;
    }
    .category:not(:nth-of-type(2)) .category-header {
        border-top: 4px solid var(--color-grey-300);
        padding: 4rem 0;
    }
    .category-header {
        text-transform: capitalize;
        font-weight: bold;
    }
    .subject-header {
        text-transform: capitalize;
        font-weight: bold;
    }
    a:visited {
        color: inherit;
    }
</style>
