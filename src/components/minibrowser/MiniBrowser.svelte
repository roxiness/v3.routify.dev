<script>
    import Bar from '#cmp/minibrowser/Bar.svelte'
    import { Router, InternalReflector } from '@roxi/routify'
    export let rootNode
    export let url = '/'
    export let urlReflector = InternalReflector
    export let name = 'example'
    let router
</script>

<div class="example">
    <Bar {router}>
        <Router {name} {rootNode} {url} {urlReflector} bind:router />
    </Bar>
</div>

<style>
    .example {
        box-shadow: var(--elevation-1);
        padding: 48px 64px 32px 64px;
        background: #fefbfe;
    }
</style>
