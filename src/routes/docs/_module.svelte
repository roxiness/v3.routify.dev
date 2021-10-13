<script>
    import Nav from './_sidenav.svelte'
    import { Sidenav, Backdrop, screenSize } from 'polykit'
    import Links from '../__layout/Links.svelte'
    export let context
    let open
    let state
    const rewrite = path => path.replace(/.*\/docs\/pages\/?/, '/docs/#')
</script>

<!-- routify:meta bundle -->

<div class="app {$screenSize} {state}">
    <div class="container outer">
        <Sidenav bind:open bind:state let:toggle asidePositioning="absolute">
            <aside slot="aside">
                <div class="sidenav-activator" on:click={toggle}>☰</div>
                <div class="container nav">
                    <img class="brand" src="/assets/routify3.svg" />
                    <div class="links">
                        <Links />
                        <hr />
                    </div>
                    <Nav node={context.node.traverse('pages')} {rewrite} />
                </div>
            </aside>
            {#if ['mobile', 'tablet'].includes($screenSize)}
                <Backdrop bind:show={open} />
            {/if}

            <div class="container main">
                <main>
                    <slot />
                </main>
            </div>
        </Sidenav>
    </div>
</div>

<style>
    .container.main {
        padding: 0;
    }
    .brand {
        display: none;
    }
    .mobile .brand { 
        display: block;
        width: 160px;
        margin-top: -56px;
        margin-bottom: 32px;
        /* position: absolute; */
        top: 16px;
    }

    /**
    * Global
    */
    .app {
        height: 100vh;
    }
    :global(.container) {
        max-width: 1240px;
        padding: 0 var(--spacing-4);
    }

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
        background: #fdf6fe;
        height: 100vh;
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
        border: 2px #FFA8FA solid;
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
    :global(.mobile .container) {
        padding: 0;
    }

    .mobile aside,
    .tablet aside {
        top: 0;
        height: 100%;
        z-index: 1;
        background: white;
    }

    .mobile.open aside {
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

    .desktop .links,
    .desktop .sidenav-activator {
        display: none;
    }
</style>
