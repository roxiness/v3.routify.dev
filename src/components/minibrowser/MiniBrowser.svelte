<script>
    import Bar from '#cmp/minibrowser/Bar.svelte'
    import { Router, InternalReflector } from '@roxi/routify'
    export let rootNode
    export let url = '/'
    export let urlReflector = InternalReflector
    export let name = 'example'+rootNode.id
    let router
</script>

<div class="example" data-routify-scroll="lock">
    <Bar {router} />    
    <div class="router">
        <Router {name} {rootNode} {url} {urlReflector} bind:router />
    </div>
</div>

<style>
    .router {
        position: relative;
    }
    .router :global(a){
        text-decoration: underline;
    }
    .example {
        box-shadow: var(--elevation-1);
        padding: 48px 64px 32px 64px;
        background: #fefbfe;
    }
</style>
