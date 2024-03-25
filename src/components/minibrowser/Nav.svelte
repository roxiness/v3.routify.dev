<script>
    import Svg from './Svgs.svelte'
    /** @type { Router['activeRoute'] }*/
    export let activeRoute

    $: goHome = () => $activeRoute.router.url.push('/')
    $: goBack = () => $activeRoute.router.goBack()
    $: goForward = () => $activeRoute.router.goForward()
</script>

<div class="nav">
    {#if $activeRoute?.prevRoute}
        <button on:click={goBack}>
            <Svg icon="back" />
        </button>
    {/if}
    {#if $activeRoute?.nextRoute}
        <button on:click={goForward}>
            <Svg icon="forward" />
        </button>
    {/if}

    <button on:click={goHome}>
        <Svg icon="home" />
    </button>

    <!-- back arrow svg -->
</div>

<style>
    .nav {
        display: flex;
        gap: 1rem;
    }
    .nav button {
        cursor: pointer;
        user-select: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        display: flex;
        height: auto;
    }
</style>
