<script>
    import Debugger from '@roxi/routify/lib/runtime/decorators/Debugger.svelte'
    import { isActive, afterUrlChange } from '@roxi/routify'
    import TopNav from './__layout/TopNav.svelte'
    import { Window, Sidenav, Backdrop } from 'polykit'
    import Nav from './docs/_sidenav.svelte'
    import Links from './__layout/Links.svelte'
    import VersionSelector from '#cmp/VersionSelector.svelte'

    export let context

    let open
    let state
    let screenSize
    let update
    let isLoading = ''
    let layout = 'container'

    export let presets = {
        default: { open: true, transform: 'shrink' },
        mobile: { open: false, transform: '' },
        tablet: { open: false, transform: 'slide' },
        desktop: { open: $isActive('./docs'), transform: 'shrink' },
    }

    $afterUrlChange(ctx => {
        isLoading = 'is-loading'
        open = $isActive('./docs') && $screenSize === 'desktop'
        setTimeout(() => (isLoading = ''), 100)
    })
    $: layout = $isActive('/index') ? '' : 'container'
</script>

<Window let:size bind:screenSize>
    <div class="app {state} {isLoading} {layout}">
        {#if size === 'desktop'}
            <TopNav />
        {/if}
        <Sidenav bind:open bind:state asidePositioning="absolute" {presets} bind:update>
            <aside slot="aside" let:toggle>
                <div class="sidenav-activator" on:click={toggle}>☰</div>
                <div class="container nav">
                    <a href="/">
                        <img alt="Routify" class="brand" src="/assets/routify3.svg" />
                    </a>
                    <div class="version-selector">
                        <VersionSelector />
                    </div>
                    <div class="links">
                        <Links />
                        <hr />
                    </div>
                    {#if $isActive('./docs')}
                        <Nav node={context.node.traverse('./docs')} />
                    {/if}
                </div>
            </aside>
            {#if ['mobile', 'tablet'].includes(size)}
                <Backdrop bind:show={open} />
            {/if}

            <div style="width: 100%">
                <slot />
            </div>
        </Sidenav>
    </div>
</Window>

<style>
    :global(.is-loading > .polykit-sidenav > *) {
        transition: none !important;
    }

    .app.container {
        padding: 0 !important;
    }

    .brand {
        display: block;
        width: 160px;
        margin-top: -56px;
        margin-bottom: 32px;
        top: 16px;
    }

    /**
    * Global
    */
    /* :global(.container) {
        padding: 0 var(--spacing-4);
    } */

    .container.outer {
        padding: 0;
    }

    .container.nav {
        overflow-y: auto;
        padding-top: 72px;
        height: 100%;
    }

    .mobile .container.nav,
    .tablet .container.nav {
        padding-left: 24px;
        padding-right: 24px;
    }

    main {
        min-height: 400px;
        padding-top: 72px;
    }
    aside {
        position: fixed;
        width: inherit;
        height: 100vh;
        background: white;
    }
    .desktop aside {
        background: #fdf6fe;
    }

    aside,
    .sidenav-activator {
        transition: all 0.4s;
    }

    .sidenav-activator {
        position: absolute;
        z-index: 1;
        padding: 4px 8px;
        right: 20px;
        top: 16px;
        font-weight: bolder;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        border: 2px #ffa8fa solid;
    }

    :global(.closed) .sidenav-activator {
        right: -48px;
    }

    /**
    * Mobile
    */
    .mobile main {
        padding: var(--spacing-6) var(--spacing-4);
    }

    :global(.desktop) .version-selector {
        display: none;
    }

    .mobile aside,
    .tablet aside {
        top: 0;
        height: 100%;
        z-index: 1;
        background: white;
    }

    :global(.mobile.open) aside {
        box-shadow: 0 0 18px -3px rgba(0 0 0 / 0.4);
    }

    /**
    * Mobile
    */
    .mobile main {
        margin: 0;
        border-radius: 0;
    }

    /**
    * Desktop
    */
    :global(.desktop) .brand,
    :global(.desktop) .links,
    :global(.desktop) .sidenav-activator {
        display: none;
    }
</style>
