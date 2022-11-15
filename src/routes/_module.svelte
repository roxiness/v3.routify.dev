<script>
    import { activeRoute } from '@roxi/routify'
    import TopNav from './__layout/TopNav.svelte'
    import { Window } from 'polykit'
</script>

<Window let:size>
    <div class="app {size}">
        {#if $activeRoute.url !== '/' && size !== 'mobile'}
            <TopNav />
        {/if}
        <slot />
    </div>
</Window>
