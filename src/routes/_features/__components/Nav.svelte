<script>
    import { url, context } from '@roxi/routify'

    const { activeChildContext } = $context
    const children = $context.node.navigableChildren

    $: child = $activeChildContext?.node
    $: childIndex = children.indexOf(child)
    $: prevChild = children[childIndex - 1]
    $: nextChild = children[childIndex + 1]
</script>

<div class="nav">
    <div class="prev">
        {#if prevChild}
            <a href={$url(prevChild.path)}>
                <div>←</div>
                <div class="text">
                    {prevChild.title}
                </div>
            </a>
        {/if}
    </div>
    <div class="next">
        {#if nextChild}
            <a href={$url(nextChild.path)}>
                <div class="text">
                    {nextChild.title}
                </div>
                <div>→</div>
            </a>
        {/if}
    </div>
</div>

<style>
    .nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 16px;
    }
    .prev,
    .next {
        max-width: 48%;
    }
    .prev a,
    .next a {
        display: flex;
    }
    .prev a .text,
    .next a .text {
        font-weight: bold;
        color: var(--color-grey-900);
        padding: 0 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .nav {
        position: sticky;
        bottom: 0;
    }
    .nav a {
        /* add a subtle button */
        /* background: var(--color-grey-100); */
        background: white;
        border-radius: 8px;
        padding: 8px;
        transition: background 0.2s ease;
        margin: 16px 0;
        border: 1px solid #ccc;
    }
</style>
