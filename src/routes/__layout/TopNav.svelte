<script>
    import Links from './Links.svelte'
    import VersionSelector from '#cmp/VersionSelector.svelte'
    VersionSelector
    let scrollY
</script>

<nav class:scrollY>
    <div class="container">
        <div class="brand">
            <a href="/">
                <img alt="Routify" class="brand-image" src="/assets/routify3.svg" />
            </a>
            <div class="version">
                <VersionSelector />
            </div>
        </div>

        <div />
        <div class="links">
            <Links />
        </div>
        <!-- <div
            class="right"
            style="text-align: right; font-weight: bold; color: var(--color-grey-500)">
            <Icon name="IconSearch" />
            Search...
        </div> -->
    </div>
</nav>
<div class="filler" />

<svelte:window bind:scrollY />

<style>
    .filler {
        height: var(--spacing-8);
    }
    nav {
        position: fixed;
        z-index: 1000;
        inset: 0;
        width: 100vw;
        height: var(--spacing-8);
        align-items: center;
        display: flex;
        background: white;
        border-bottom: solid 1px white;
        transition: all 0.2s;
    }
    nav.scrollY {
        box-shadow: 0 0 18px -6px rgba(0, 0, 0, 0.2);
        border-bottom: solid 1px #ddd;
    }

    .brand {
        padding-left: 24px;
        height: 56px;
        display: flex;
    }
    .brand-image {
        height: 100%;
        width: auto;
    }
    :global(.spacer) {
        width: var(--spacing-4);
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 0;
    }
    .links {
        display: flex;
        align-items: center;
        padding-right: 16px;
    }
    .links :global(a) {
        font-size: 20px;
        color: var(--color-grey-700);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 var(--spacing-2);
    }
    .links :global(a:first-of-type) {
        margin-left: 0;
    }
    .links :global(a.icon) {
        opacity: 0.5;
        padding: 0;
        margin: 0 8px;
    }
    :global(.mobile) .brand,
    :global(.tablet) .brand {
        text-align: center;
    }
</style>
