<script>
    import AddressInput from './AddressInput.svelte'
    import Nav from './Nav.svelte'
    import Options from './Options.svelte'
    export let router = null
    export let context = null
    // if we're using MiniBrowser as a decorator, we only get context
    $: router = router || context?.route?.router
</script>

{#if router}
    <div class="bar">
        <Nav activeRoute={router.activeRoute} />
        <AddressInput activeRoute={router.activeRoute} />
        <Options {router} />
    </div>
{/if}

<style>
    .bar {
        z-index: 100;
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
        align-items: center;
        margin-bottom: 2.5rem;
    }
</style>
