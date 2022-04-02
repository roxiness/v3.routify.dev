<script>
    import { Router } from '@roxi/routify'
    export let context
    // we want our two nested routers to use the same folder as their root
    const widgetNode = context.node.traverse('../widget')
</script>

<div class="routers">
    <div class="router">
        <Router name="shared1" rootNode={widgetNode} />
    </div>
    <div class="router">
        <Router name="shared2" rootNode={widgetNode} />
    </div>
</div>

<style>
    .routers {
        display: flex;
    }
    .router {
        flex: 1;
    }
</style>
