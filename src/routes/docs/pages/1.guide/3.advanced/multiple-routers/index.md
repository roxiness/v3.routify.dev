<script>
    import Example from '#cmp/Example.svelte'
</script>


Multiple routers add extra flexibility to your app. For instance each example on this page is a nested router.

Nested routers can store their URL in the address bar, localStorage or the current session.

#### Multiple Trees
While the default route tree lives in `src/routes`, we can add as many route trees as we want and attach them to their own routers.

<Example path="../example.multiple-trees" focus="index.svelte" title="Nested nodes with different node trees" />

#### Shared Tree
We can also use the existing route tree, by setting `rootNode` to any node from the current node tree.

<Example path="../example.shared-tree" focus="index.svelte" title="Create a new node example" />


**Note:** The example routers above are set to share their URLs with the actual browser. They will do so for as long as they exist. Ie. as long as the examples stay open.