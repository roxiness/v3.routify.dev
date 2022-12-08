<script>
    import { isActive } from '@roxi/routify'
    import { slide } from 'svelte/transition'
    export let node
    export let nested = 0
    const getName = node =>
        (node.meta.name || node.name.replace(/-/g, ' ')) +
        (node.meta.status ? ` [${node.meta.status}]` : '')
    const noExample = node => !node.name.match(/^example\.?/)
    const noInternal = node => node.name !== 'internal'
</script>

<ul class="nested-{nested}">
    {#each node.pages.filter(noExample).filter(noInternal) as child}
        <li class:active={$isActive(child.path)}>
            <a href={child.path}>{getName(child)}</a>
            {#if !nested || (child.pages.filter(noExample).length && $isActive(child.path))}
                <div class="children" transition:slide|local>
                    <svelte:self node={child} nested={nested + 1} />
                </div>
            {/if}
        </li>
    {/each}
</ul>

<style>
    a {
        text-transform: capitalize;
        padding: 8px;
        width: 100%;
        display: block;
        font-weight: 400;
        color: var(--color-grey-900);
    }
    ul,
    li {
        font-size: 100%;
        display: block;
        margin: 0;
        padding: 4px 0;
        width: 100%;
        letter-spacing: 1px;
    }
    div {
        width: 100%;
    }
    .active > a {
        font-weight: bold;
    }

    li {
        list-style: none;
    }
    ul.nested-0 {
        margin: 0;
    }
    ul.nested-0 > * > a {
        margin-top: 32px;
        text-transform: uppercase;
    }
    ul.nested-0 > li:first-of-type > a {
        margin-top: 0;
    }
    ul.nested-1 > li > a {
    }
    ul.nested-1 > li.active > a {
        background: #ffe3ff;
        color: #bd239b;
    }
    ul.nested-2 {
        border-left: 4px solid var(--color-grey-300);
        margin-left: 8px;
        padding-left: 12px;
        margin: 12px 0 0 2px;
    }
    ul.nested-2 > li {
        margin: 0;
        padding: 0;
    }
    ul.nested-0 {
    }
    ul {
    }
    ul.nested-0 > li > a {
        color: var(--color-grey-500);
        font-weight: bold;
    }
</style>
