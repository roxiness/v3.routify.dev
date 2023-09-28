<script>
    import * as Bar from './_components/bar.md'
    export let context

    const attachNode = () => {
        const fooNode = context.node.traverse('../foo')
        fooNode.createChild('bar', Bar)
    }
</script>

<h5>Home</h5>
<p>Visit foo/bar, then come back here and click ATTACH NODE</p>
<button on:click={attachNode}>attach node</button>
