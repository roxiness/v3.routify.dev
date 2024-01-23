<script>
    import Debugger from '@roxi/routify/lib/runtime/decorators/Debugger.svelte'
    import Nav from './_sidenav.svelte'
    import { Sidenav, Backdrop, screenSize } from 'polykit'
    import _decorator from './_decorator.svelte'
    import Links from '../__layout/Links.svelte'
    export let context
    import Disclaimer from './_disclaimer.svelte'

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
