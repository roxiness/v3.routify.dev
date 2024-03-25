<script>
    export let activeRoute
    $: route = $activeRoute
    $: router = route?.router || {}
    $: ({ nextRoute, prevRoute } = router || {})
    $: console.log({ nextRoute, prevRoute })
    $: goHome = () => $activeRoute.router.url.push('/')
    $: goBack = () => $activeRoute.router.goBack()
    $: goForward = () => $activeRoute.router.goForward()
</script>

<div class="nav">
    {#if $prevRoute}
        <div on:click={goBack}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="18px"
                height="18px">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
        </div>
    {/if}
    {#if $nextRoute}
        <div on:click={goForward}>
            <!-- forward arrow svg -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="18px"
                height="18px">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
            </svg>
        </div>
    {/if}

    <div on:click={goHome}>
        <!-- home svg -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="18px"
            height="18px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2z" />
        </svg>
    </div>

    <!-- back arrow svg -->
</div>

<style>
    .nav {
        display: flex;
        gap: 1rem;
        
    }
    .nav > div {
        cursor: pointer;
        display: flex;
        user-select: none;
    }
</style>
