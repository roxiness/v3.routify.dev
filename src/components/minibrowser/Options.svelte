<script>
    import { derived } from 'svelte/store'
    import { slide } from 'svelte/transition'
    import {
        AddressReflector,
        InternalReflector,
        LocalStorageReflector,
    } from '@roxi/routify'

    /** @type {import('@roxi/routify').RouterClass}*/
    export let router
    let show = false
    
    $: reflectors = Object.entries({
        AddressReflector,
        InternalReflector,
        LocalStorageReflector,
    }).map(([name, Reflector]) => ({
        name,
        Reflector,
        isActive: name === $router.urlReflector.constructor.name
    }))

    const toggleMenu = () => {
        console.log('toggle')
        show = !show
    }
    const selectReflector = reflector => (router.setUrlReflector(reflector))
</script>

<div class="options">
    <div class="cog" on:click={toggleMenu}>⚙</div>
    {#if show}
        <div class="backdrop" on:click={toggleMenu} />
        <ul class="menu" transition:slide|local={{ duration: 65 }}>
            {#each reflectors as { name, isActive, Reflector }}
                <li class:isActive on:click={() => selectReflector(Reflector)}>
                    {name}
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .cog {
        padding: 4px 8px 14px;
        cursor: pointer;
    }
    li {
        position: relative;
        cursor: pointer;
        margin: 0;
        /* min-height: 32px; */
        line-height: 40px;
        padding: 0 20px;
        border-left: 3px solid rgba(0, 0, 0, 0);
    }
    li:first-of-type {
        border-radius: 4px 0 0 0;
        padding-top: 8px;
    }
    li:last-of-type {
        border-radius: 0 0 0 4px;
        padding-bottom: 8px;
    }
    li:hover {
        border-left: 3px solid rgb(230, 230, 230);
        background: rgba(0, 0, 0, 0.018);
        /* list-style-type: '⬛'; */
    }
    .options {
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .menu {
        position: absolute;
        right: 0;
        background: white;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.02);

        list-style: none;
        border-radius: 4px;
    }
    .isActive {
        font-weight: bold;
    }
</style>
