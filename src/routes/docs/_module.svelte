<script>
    import Debugger from '@roxi/routify/lib/runtime/decorators/Debugger.svelte'
    import _decorator from './_decorator.svelte'
    import Disclaimer from './_disclaimer.svelte'
    import {
        RouteOnScroll,
        getDescendantNodesElements,
    } from '@roxi/routify/helpers/RouteOnScroll'


    const scrollHandler = new RouteOnScroll({
        direction: 'vertical',
        threshold: window.innerHeight / 3,
        getElems: getDescendantNodesElements,
        strategy: 'lowestAboveThreshold'
    })
    $scrollHandler(document)

    // const decorator = import.meta.env.DEV ? [Debugger] : []
    const decorator = null

    const getPreviousSibling = elem => {
        const sibling = elem.previousElementSibling
        if (sibling?.dataset.hasOwnProperty('routifyAnchorLocator'))
            return getPreviousSibling(sibling)
        return sibling
    }

    const anchor = elem =>
        getPreviousSibling(elem) || getPreviousSibling(elem.parentElement)
</script>

<!-- routify:meta bundle -->

<div class="container main">
    <main class="docs">
        <Disclaimer />
        <slot inline {decorator} {anchor} />
    </main>
</div>

<style>
    .docs {
        margin: 0 var(--spacing-2);
    }
    :global(.tablet) .docs {
        margin: 0 var(--spacing-4);
    }

    :global(.desktop) .docs {
        margin: 0 var(--spacing-7);
    }

    .container.main {
        padding: 0;
        min-height: 400px;
        padding-top: 72px;
    }
</style>
